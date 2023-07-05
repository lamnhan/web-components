import {Component, TiniComponent, html, css} from '@tinijs/core';

export const APP_HEADER = 'app-header';
@Component()
export class AppHeaderComponent extends TiniComponent {
  static readonly defaultTagName = APP_HEADER;

  protected render() {
    return html`
      <header>
        <div part="brand">
          <a href="/">
            <img src="../assets/logo.svg" alt="Prices Table" />
            <h1>Prices</h1>
          </a>
        </div>
        <div part="menu">
          <a href="https://github.com/lamnhan/web-components/tree/prices" target="_blank">Source code</a>
        </div>
      </header>
    `;
  }

  static styles = css`
    header {
      display: flex;
      box-sizing: border-box;
      height: 60px;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: var(--color-primary);
      color: var(--color-light);
    }

    [part=brand] a {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      color: var(--color-light);
      text-decoration: none;
    }

    [part=brand] a img {
      width: 2rem;
      height: auto;
    }

    [part=brand] a h1 {
      margin: 0 0 0 0.5rem;
      font-size: 1.25rem;
    }

    [part=menu] a {
      color: var(--color-light);
      text-decoration: none;

    }

    [part=menu] a:hover {
      text-decoration: underline;
    }
  `;
}
