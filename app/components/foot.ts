import {Component, TiniComponent, Reactive, html, css} from '@tinijs/core';
import {Subscribe} from '@tinijs/store';
import commonBase from '@tinijs/ui-bootstrap/styles/base/common';
import {TiniButtonComponent} from '@tinijs/ui-bootstrap/components/button.js';

import {mainStore} from '../stores/main';
import {formatPrice} from '../helpers/format-price';

export const APP_FOOT = 'app-foot';
@Component({
  components: [TiniButtonComponent],
})
export class AppFootComponent extends TiniComponent {
  static readonly defaultTagName = APP_FOOT;

  @Subscribe(mainStore) @Reactive() selectedCell = mainStore.selectedCell;

  protected render() {
    return html`
      <div class="order-price">
        <span>Order Price</span>
        <strong
          >¥${formatPrice(+(this.selectedCell?.dataset.price || '0'))}</strong
        >
      </div>
      <div class="action">
        <tini-button color="primary" size="ml">Cart</tini-button>
      </div>
    `;
  }

  static styles = [
    commonBase,
    css`
      :host {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: var(--size-space-1_5x);
        padding: var(--size-space);
        background: var(--color-background-tint);
        border-radius: var(--size-radius);
      }

      .order-price strong {
        display: inline-block;
        margin-left: var(--size-space-0_5x);
        font-size: var(--size-text-1_25x);
      }
    `,
  ];
}
