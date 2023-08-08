import {
  Component,
  TiniComponent,
  Reactive,
  html,
  css,
  nothing,
} from '@tinijs/core';
import {Subscribe} from '@tinijs/store';
import commonBase from '@tinijs/ui-bootstrap/styles/base/common';
import linkBase from '@tinijs/ui-bootstrap/styles/base/link';

import {mainStore} from '../stores/main';
import {Price} from '../types/common';
import {formatPrice} from '../helpers/format-price';
import {markSelectedCell, unmarkSelectedCell} from '../helpers/table';

export const APP_PRICE_TABLE = 'app-price-table';
@Component()
export class AppPriceTableComponent extends TiniComponent {
  static readonly defaultTagName = APP_PRICE_TABLE;

  @Reactive() private limit = 5;
  @Subscribe(mainStore) @Reactive() prices: Price[][] = mainStore.prices;

  private selectPrice(e: Event) {
    // reset previus selected cell
    const previusSelectedCell = mainStore.selectedCell;
    if (previusSelectedCell) unmarkSelectedCell(previusSelectedCell);
    // set new selected cell
    const selectedCell = (e.target as HTMLSpanElement)
      .parentNode as HTMLTableCellElement;
    markSelectedCell(selectedCell);
    mainStore.commit('selectedCell', selectedCell);
  }

  protected render() {
    return html`
      <strong class="title">Prices Table</strong>
      ${!this.prices.length
        ? html`<div class="loading">Loading data ...</div>`
        : html`
            <table>
              ${[this.prices[0], ...this.prices.slice(0, this.limit)].map(
                (row, rowIndex) => html`
                  ${rowIndex === 0
                    ? this.renderHeadRow(row)
                    : this.renderBodyRow(row)}
                `
              )}
            </table>
          `}
      <a
        class="see-more-less"
        href="javascript:void(0)"
        @click=${() => (this.limit = this.limit !== 5 ? 5 : this.prices.length)}
        >See ${this.limit !== 5 ? 'less' : 'more'}</a
      >
    `;
  }

  private renderHeadRow(row: Price[]) {
    return !row
      ? nothing
      : html`
          <thead>
            <tr>
              ${[row[0], ...row].map((col, colIndex) =>
                colIndex === 0
                  ? html`<th><span>Quantity \\ Days</span></th>`
                  : html`<th><span>${col.business_day}</span></th>`
              )}
            </tr>
          </thead>
        `;
  }

  private renderBodyRow(row: Price[]) {
    return !row
      ? nothing
      : html`
          <tbody>
            <tr>
              ${[row[0], ...row].map((col, colIndex) =>
                colIndex === 0
                  ? html`<th><span>${col.quantity}</span></th>`
                  : html`
                      <td
                        class="price"
                        data-price=${col.price}
                        @click=${this.selectPrice}
                      >
                        <span>${formatPrice(col.price)}</span>
                      </td>
                    `
              )}
            </tr>
          </tbody>
        `;
  }

  static styles = [
    commonBase,
    linkBase,
    css`
      :host {
        --highlight-weak: color-mix(
          in oklab,
          var(--color-warning),
          transparent 80%
        );
        --highlight-medium: color-mix(
          in oklab,
          var(--color-warning),
          transparent 75%
        );
        --highlight-strong: color-mix(
          in oklab,
          var(--color-warning),
          transparent 25%
        );
        padding: var(--size-space);
        background: var(--color-background-tint);
        border-radius: var(--size-radius);
      }

      .title,
      .see-more-less {
        display: block;
      }

      .loading {
        margin: var(--size-space-1_5x) 0;
        padding: var(--size-space);
        border: var(--size-border) solid var(--color-medium);
        text-align: center;
      }

      table {
        width: 100%;
        margin: var(--size-space-1_5x) 0;
        border-collapse: collapse;
        border-spacing: 0;
        border: var(--size-border) solid var(--color-medium);
        overflow: hidden;

        th,
        td {
          padding: 0;
          margin: 0;
          position: relative;
          border: var(--size-border) solid var(--color-medium);
          text-align: center;

          span {
            padding: var(--size-space);
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 1;
          }
        }

        // no highlight for header cells
        th span {
          background: var(--color-background-tint) !important;
        }

        // highlight for body cells
        tbody {
          position: relative;

          td:hover::before {
            z-index: 0;
            position: absolute;
            background: var(--highlight-weak);
            left: -5000px;
            top: 0;
            width: 10000px;
            height: 100%;
            content: ' ';
          }

          td:hover::after {
            z-index: 0;
            position: absolute;
            background: var(--highlight-weak);
            left: 0;
            top: -5000px;
            width: 100%;
            height: 10000px;
            content: ' ';
          }
        }

        // price cells
        .price {
          cursor: pointer;

          &:hover {
            background: var(--highlight-medium);
            font-weight: bold;
          }
        }
      }
    `,
  ];
}
