import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { UseStore } from '../stores/store';
import { store } from '../stores/main';

import '../components/blocks/section-folders';
import '../components/blocks/section-photos';

@customElement('app-page-home')
export class AppPageHome extends LitElement {
  static styles = css`
    :host {
      display: block;
      container-type: inline-size;
    }

    main {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 1rem;
      background: var(--color-light);
    }

    app-section-folders {
      margin-top: 0;
    }

    app-section-photos {
      margin-top: 1.5rem;
    }
  `;

  @UseStore(store) @state() private currentFolderId = store.currentFolderId;
  @UseStore(store) @state() private breadcrumbs = store.breadcrumbs;
  @UseStore(store) @state() private folders = store.folders;
  @UseStore(store) @state() private photos = store.photos;

  protected render() {
    return html`
      <main>

        <app-section-folders
          .currentFolderId=${this.currentFolderId}
          .breadcrumbs=${this.breadcrumbs}
          .folders=${this.folders}
        ></app-section-folders>

        <app-section-photos
          .currentFolderId=${this.currentFolderId}
          .breadcrumbs=${this.breadcrumbs}
          .photos=${this.photos}
        ></app-section-photos>

      </main>
    `;
  }
}
