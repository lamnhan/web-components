import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { UseStore } from '../stores/store';
import { store } from '../stores/main';

import '../components/header';
import '../components/subheader';

@customElement('app-layout-default')
export class AppLayoutDefault extends LitElement {
  static styles = css`
    :host {
      --header-height: 60px;
      --subheader-height: 52px;
      position: relative;
      display: grid;
      grid:
        'header' var(--header-height)
        'subheader' var(--subheader-height)
        'page' auto
        / 100%;
    }

    [part='header'] {
      grid-area: header;
      position: sticky;
      top: 0;
      left: 0;
      z-index: 1;
    }
    
    [part='page'] {
      grid-area: page;
      min-height: calc(100vh - var(--header-height) - var(--subheader-height));
    }

    [part='subheader'] {
      grid-area: subheader;
      position: sticky;
      top: var(--header-height);
      left: 0;
      z-index: 1;
    }
  `;

  @UseStore(store) @state() private currentFolderId = store.currentFolderId;

  protected render() {
    return html`
      <header part="header">
        <app-header></app-header>
      </header>
      ${!this.currentFolderId ? '' : html`
        <nav part="subheader">
          <app-subheader></app-subheader>
        </nav>
      `}
      <main part="page">
        <slot></slot>
      </main>
    `;
  }
}
