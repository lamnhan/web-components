import {App, TiniComponent, Components, html, css} from '@tinijs/core';

import configs from './configs/development';

import {AppHeaderComponent} from './components/header';
import {AppSidebarComponent} from './components/sidebar';
import {AppPriceTableComponent} from './components/price-table';
import {AppFootComponent} from './components/foot';

@App()
@Components([
  AppHeaderComponent,
  AppSidebarComponent,
  AppPriceTableComponent,
  AppFootComponent,
])
export class AppRoot extends TiniComponent {
  public readonly $configs = configs;

  protected render() {
    return html`
      <app-header></app-header>
      <main>
        <div class="body">
          <app-sidebar></app-sidebar>
          <app-price-table></app-price-table>
        </div>
        <app-foot></app-foot>
      </main>
    `;
  }

  static styles = css`
    :host {
      --header-height: 60px;
    }

    app-header {
      height: var(--header-height);
    }

    main {
      margin: var(--header-height) auto;
      max-width: var(--wide-lg);
      padding: var(--size-space);

      .body {
        display: flex;
        flex-wrap: wrap;
        gap: var(--size-space-2x);

        app-sidebar {
          @media screen and (min-width: 768px) {
            width: 250px;
          }
        }

        app-price-table {
          flex: 1;
        }
      }

      app-foot {
        margin-top: var(--size-space-2x);
      }
    }
  `;
}
