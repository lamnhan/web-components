import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

import { AppColors, AppSizes } from '../../types/utils';

@customElement('app-icon')
export class AppIcon extends LitElement {
  static styles = css`
    :host {
      --icon-width: 2rem;
      --icon-height: 2rem;
      display: inline-block;
      box-sizing: border-box;
      position: relative;
    }

    i {
      display: inline-block;
      content: '';
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      width: var(--icon-width);
      height: var(--icon-height);
    }

    .${unsafeCSS(AppSizes.XS)} {
      width: .75rem;
      height: .75rem;
    }

    .${unsafeCSS(AppSizes.SM)} {
      width: 1.25rem;
      height: 1.25rem;
    }

    .${unsafeCSS(AppSizes.LG)} {
      width: 2.5rem;
      height: 2.5rem;
    }

    .${unsafeCSS(AppSizes.XL)} {
      width: 3rem;
      height: 3rem;
    }

    .${unsafeCSS(AppColors.Primary)} {
      filter: var(--recolor-primary);
    }

    .${unsafeCSS(AppColors.Danger)} {
      filter: var(--recolor-danger);
    }

    .${unsafeCSS(AppColors.Dark)} {
      filter: var(--recolor-dark);
    }

    .${unsafeCSS(AppColors.Medium)} {
      filter: var(--recolor-medium);
    }

    .${unsafeCSS(AppColors.Light)} {
      filter: var(--recolor-light);
    }
  `;

  @property({ type: String }) readonly src?: string;
  @property({ type: String }) readonly size?: AppSizes;
  @property({ type: String }) readonly color?: AppColors;

  protected render() {
    return html`
      <i
        part="icon"
        class=${classMap({ [this.size]: true, [this.color]: true })}
        style=${styleMap({ backgroundImage: `url(${this.src})` })}
      ></i>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-icon': AppIcon;
  }
}
