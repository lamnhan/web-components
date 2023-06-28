import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { AppColors, AppSizes } from '../../types/utils';

import '../elements/icon';

@customElement('app-icon-menu')
export class AppIconMenu extends LitElement {
  @property({ type: String }) readonly size?: AppSizes;
  @property({ type: String }) readonly color?: AppColors;

  protected render() {
    return html`
      <app-icon
        exportparts="icon"
        size=${this.size}
        color=${this.color}
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiPiAgICA8cGF0aCBkPSJNIDQgMTEgQyAxLjc5MSAxMSAwIDEyLjc5MSAwIDE1IEMgMCAxNy4yMDkgMS43OTEgMTkgNCAxOSBDIDYuMjA5IDE5IDggMTcuMjA5IDggMTUgQyA4IDEyLjc5MSA2LjIwOSAxMSA0IDExIHogTSAxNSAxMSBDIDEyLjc5MSAxMSAxMSAxMi43OTEgMTEgMTUgQyAxMSAxNy4yMDkgMTIuNzkxIDE5IDE1IDE5IEMgMTcuMjA5IDE5IDE5IDE3LjIwOSAxOSAxNSBDIDE5IDEyLjc5MSAxNy4yMDkgMTEgMTUgMTEgeiBNIDI2IDExIEMgMjMuNzkxIDExIDIyIDEyLjc5MSAyMiAxNSBDIDIyIDE3LjIwOSAyMy43OTEgMTkgMjYgMTkgQyAyOC4yMDkgMTkgMzAgMTcuMjA5IDMwIDE1IEMgMzAgMTIuNzkxIDI4LjIwOSAxMSAyNiAxMSB6Ii8+PC9zdmc+"
      ></app-icon>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-icon-menu': AppIconMenu;
  }
}
