import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { AppColors, AppSizes } from '../../types/utils';

@customElement('app-button')
export class AppButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      box-sizing: border-box;
      position: relative;
    }

    button {
      display: block;
      position: relative;
      cursor: pointer;
      padding: .75rem 1.5rem;
      font-size: 1rem;
      line-height: 1;
      text-decoration: none;
      border: none;
      border-radius: var(--size-radius);
      background: var(--color-medium);
      color: var(--color-dark);
    }

    button:hover,
    button:focus {
      opacity: .75;
    }

    .${unsafeCSS(AppColors.Primary)} {
      background: var(--color-primary);
      color: var(--color-light);
    }

    .${unsafeCSS(AppColors.Danger)} {
      background: var(--color-danger);
      color: var(--color-light);
    }

    .${unsafeCSS(AppColors.Dark)} {
      background: var(--color-dark);
      color: var(--color-light);
    }

    .${unsafeCSS(AppColors.Light)} {
      background: var(--color-light);
      color: var(--color-dark);
    }

    .${unsafeCSS(AppColors.Shade)} {
      background: var(--color-shade);
      color: var(--color-dark);
    }

    .${unsafeCSS(AppSizes.XS)} {
      font-size: .6rem;
      padding: .25rem .5rem;
    }

    .${unsafeCSS(AppSizes.SM)} {
      font-size: .75rem;
      padding: .5rem 1rem;
    }

    .${unsafeCSS(AppSizes.LG)} {
      font-size: 1.25rem;
      padding: 1rem 2rem;
    }

    .${unsafeCSS(AppSizes.XL)} {
      font-size: 1.5rem;
      padding: 1.5rem 3rem;
    }
  `;

  @property({ type: String }) readonly color?: AppColors;
  @property({ type: String }) readonly size?: AppSizes;

  protected render() {
    return html`<button part="button" class=${classMap({ [this.color]: true, [this.size]: true })}><slot /></button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-button': AppButton;
  }
}
