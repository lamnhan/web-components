import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-page-404')
export class AppPage404 extends LitElement {
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
      text-align: center;
    }
  `;

  protected render() {
    return html`<main>Oops, page not found!</main>`;
  }
}
