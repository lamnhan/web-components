import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { AppColors, AppSizes } from '../../types/utils';

import '../elements/icon';

@customElement('app-icon-right')
export class AppIconRight extends LitElement {
  @property({ type: String }) readonly size?: AppSizes;
  @property({ type: String }) readonly color?: AppColors;

  protected render() {
    return html`
      <app-icon
        exportparts="icon"
        size=${this.size}
        color=${this.color}
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiPiAgICA8cGF0aCBkPSJNMTIsMjdoLTJjLTAuMzg2LDAtMC43MzgtMC4yMjMtMC45MDQtMC41NzJzLTAuMTE1LTAuNzYyLDAuMTMtMS4wNjJMMTcuNzA4LDE1TDkuMjI2LDQuNjMzIGMtMC4yNDUtMC4yOTktMC4yOTUtMC43MTItMC4xMy0xLjA2MlM5LjYxNCwzLDEwLDNoMmMwLjMsMCwwLjU4NCwwLjEzNSwwLjc3NCwwLjM2N2w5LDExYzAuMzAxLDAuMzY5LDAuMzAxLDAuODk4LDAsMS4yNjdsLTksMTEgQzEyLjU4NCwyNi44NjUsMTIuMywyNywxMiwyN3oiLz48L3N2Zz4="
      ></app-icon>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-icon-right': AppIconRight;
  }
}
