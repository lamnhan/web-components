import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ref, createRef, Ref } from 'lit/directives/ref.js';

import { Types, Item } from './types/entities';
import { createRouter } from './routing/router';
import { list, get } from './api/client';
import { UseStore } from './stores/store';
import { store } from './stores/main';

import { AppLayoutDefault } from './layouts/default';

import './layouts/default';
import './pages/home';
import './pages/404';

@customElement('app-root')
export class AppRoot extends LitElement {
  static styles = css`
    :host {
      display: block;
      container-type: inline-size;
    }
  `;

  private layoutRef: Ref<AppLayoutDefault> = createRef();
  @UseStore(store) @state() private currentFolderId = store.currentFolderId;

  private buildBreadcrumbs ({ id: folderId, fullPath }: Item) {
    const paths = fullPath.split('/').filter(Boolean).concat([folderId]);
    return Promise.all(paths.map(id => get(id)));
  }

  private async onRouteChanged(url: URL) {
    try {
      const currentFolderId = url.searchParams.get('folderId') || '/';
      // 1. current folder
      const currentFolder = currentFolderId === '/' ? null : await get(currentFolderId);
      // 2. folders and photos
      const { folders, photos } = (await list(currentFolderId))
        .reduce((result, item) => {
          if (item.type === Types.Folder) {
            result.folders.push(item);
          } else {
            result.photos.push(item);
          }
          return result;
        }, { folders: [], photos: [] });
      // 3. breadcrumbs
      const breadcrumbs = !currentFolder ? [] : await this.buildBreadcrumbs(currentFolder);
      // Finally: set states
      store.commit('currentFolderId', currentFolderId);
      store.commit('currentFolder', currentFolder);
      store.commit('folders', folders);
      store.commit('photos', photos);
      store.commit('breadcrumbs', breadcrumbs);
    } catch (error) {
      store.currentFolderId = null;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    createRouter(url => this.onRouteChanged(url));
    this.onRouteChanged(new URL(window.location.href));
  }

  protected render() {
    return html`
      <app-layout-default ${ref(this.layoutRef)}>
        ${!this.currentFolderId
          ? html`<app-page-404></app-page-404>`
          : html`<app-page-home></app-page-home>`}
      </app-layout-default>
    `;
  }
}
