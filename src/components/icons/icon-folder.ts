import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { AppColors, AppSizes } from '../../types/utils';

import '../elements/icon';

@customElement('app-icon-folder')
export class AppIconFolder extends LitElement {
  @property({ type: String }) readonly size?: AppSizes;
  @property({ type: String }) readonly color?: AppColors;

  protected render() {
    return html`
      <app-icon
        exportparts="icon"
        size=${this.size}
        color=${this.color}
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI5NnB4IiBoZWlnaHQ9Ijk2cHgiPjxwYXRoIGZpbGw9IiNGRkEwMDAiIGQ9Ik00MCwxMkgyMmwtNC00SDhjLTIuMiwwLTQsMS44LTQsNHY4aDQwdi00QzQ0LDEzLjgsNDIuMiwxMiw0MCwxMnoiLz48cGF0aCBmaWxsPSIjRkZDQTI4IiBkPSJNNDAsMTJIOGMtMi4yLDAtNCwxLjgtNCw0djIwYzAsMi4yLDEuOCw0LDQsNGgzMmMyLjIsMCw0LTEuOCw0LTRWMTZDNDQsMTMuOCw0Mi4yLDEyLDQwLDEyeiIvPjwvc3ZnPg=="
      ></app-icon>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-icon-folder': AppIconFolder;
  }
}
