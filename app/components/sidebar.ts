import {Component, TiniComponent, html, css} from '@tinijs/core';
import commonBase from '@tinijs/ui-bootstrap/styles/base/common';
import formBase from '@tinijs/ui-bootstrap/styles/base/form';
import {TiniButtonComponent} from '@tinijs/ui-bootstrap/components/button.js';

import {PaperSizes} from '../consts/common';
import {mainStore} from '../stores/main';
import {unmarkSelectedCell} from '../helpers/table';
import {getPrices} from '../helpers/api';

export const APP_SIDEBAR = 'app-sidebar';
@Component({
  components: [TiniButtonComponent],
})
export class AppSidebarComponent extends TiniComponent {
  static readonly defaultTagName = APP_SIDEBAR;

  onInit() {
    this.fetchPrices();
  }

  private activePaperSize = PaperSizes.A4;
  private changePaperSize(e: InputEvent) {
    this.activePaperSize = (e.target as HTMLSelectElement).value as PaperSizes;
  }

  private async fetchPrices() {
    if (this.activePaperSize === mainStore.selectedPaperSize) return;
    try {
      const result = await getPrices(this.activePaperSize);
      mainStore.commit('prices', result.prices);
      mainStore.commit('selectedPaperSize', this.activePaperSize);
      // reset selected cell
      if (mainStore.selectedCell) {
        unmarkSelectedCell(mainStore.selectedCell);
        mainStore.commit('selectedCell', null);
      }
    } catch (error) {
      alert(`Failed to fetch prices for paper size: ${this.activePaperSize}`);
    }
  }

  protected render() {
    return html`
      <div class="size-selector">
        <div class="title">Select paper size</div>
        <select @change=${this.changePaperSize}>
          ${Object.values(PaperSizes).map(
            paperSize => html`
              <option value="${paperSize}">${paperSize.toUpperCase()}</option>
            `
          )}
        </select>
      </div>
      <div class="action">
        <tini-button color="dark" @click=${this.fetchPrices}>Apply</tini-button>
      </div>
    `;
  }

  static styles = [
    commonBase,
    formBase,
    css`
      :host {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        width: 100%;
        padding: var(--size-space);
        background: var(--color-background-tint);
        border-radius: var(--size-radius);
      }

      .title {
        margin-bottom: var(--size-space);
      }

      select {
        width: 100%;
        padding: var(--size-space-0_5x);
        background: var(--color-background-tint);
        border: var(--size-border) solid var(--color-medium);
        border-radius: var(--size-radius);
      }

      .action {
        width: 100%;
        padding-top: var(--size-space-1_5x);
        text-align: right;
      }
    `,
  ];
}
