import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { UseStore } from '../stores/store';
import { store } from '../stores/main';

import './lists/breadcrumbs';

@customElement('app-subheader')
export class AppSubHeader extends LitElement {
  static styles = css`
    :host {
      grid-area: breadcrumbs;
      width: 100%;
      position: sticky;
      top: 0;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 52px;
      margin: 0 auto;
      padding: 0;
      background: var(--color-light);
      border-bottom: var(--size-border) solid var(--color-shade);
      overflow: hidden;
    }

    :host::before,
    :host::after {
      display: block;
      content: '';
      width: 1rem;
      height: 100%;
      background: linear-gradient(
        to right,
        var(--color-light) 30%,
        transparent 100%
      );;
      position: absolute;
      top: 0;
      z-index: 101;
    }
    
    :host::before {
      left: 0;
    }

    :host::after {
      right: 0;
      transform: rotate(180deg);
    }

    [part=content] {
      display: flex;
      align-items: center;
      padding: 0 1rem;
      overflow-x: scroll;
      overflow-y: hidden;
      z-index: 100;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    [part=content]::-webkit-scrollbar {
      display: none;
    }

    [part=content]::after {
      display: block;
      content: '';
      width: 1rem;
      height: 100%;
    }
  `;

  @UseStore(store) @state() private breadcrumbs = store.breadcrumbs;

  updated() {
    setTimeout(() => {
      const contentNode = this.shadowRoot?.querySelector('[part=content]');
      contentNode?.scrollTo(contentNode.scrollWidth + 16, 0);
    }, 0);
  }

  protected render() {
    return html`
      <div part="content">
        <app-breadcrumbs .items=${this.breadcrumbs}></app-breadcrumbs>
      </div>
    `;
  }
}
