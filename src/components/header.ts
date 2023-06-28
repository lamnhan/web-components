import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: var(--color-primary);
      color: var(--color-light);
    }

    .brand img {
      width: auto;
      height: 1.75rem;
    }

    .menu a {
      color: var(--color-light);
      text-decoration: none;

    }
    .menu a:hover {
      text-decoration: underline;
    }
  `;

  protected render() {
    return html`
      <header>
        <div class="brand">
          <a href="/">
            <img src="https://corp.raksul.com/wp-content/themes/rc/images/common/logo_white2.svg" alt="Raksul Sample" />
          </a>
        </div>
        <div class="menu">
          <a href="https://github.com/lamnhan/raksul-sample/tree/remastered" target="_blank">Source code</a>
        </div>
      </header>
    `;
  }
}
