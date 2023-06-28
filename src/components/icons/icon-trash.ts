import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { AppColors, AppSizes } from '../../types/utils';

import '../elements/icon';

@customElement('app-icon-trash')
export class AppIconTrash extends LitElement {
  @property({ type: String }) readonly size?: AppSizes;
  @property({ type: String }) readonly color?: AppColors;

  protected render() {
    return html`
      <app-icon
        exportparts="icon"
        size=${this.size}
        color=${this.color}
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwYXRoIGQ9Ik0gMTAgMiBMIDkgMyBMIDQgMyBMIDQgNSBMIDUgNSBMIDUgMjAgQyA1IDIwLjUyMjIyMiA1LjE5MTMyODkgMjEuMDU0NjEgNS41NjgzNTk0IDIxLjQzMTY0MSBDIDUuOTQ1Mzg5OSAyMS44MDg2NzEgNi40Nzc3Nzc4IDIyIDcgMjIgTCAxNyAyMiBDIDE3LjUyMjIyMiAyMiAxOC4wNTQ2MSAyMS44MDg2NzEgMTguNDMxNjQxIDIxLjQzMTY0MSBDIDE4LjgwODY3MSAyMS4wNTQ2MSAxOSAyMC41MjIyMjIgMTkgMjAgTCAxOSA1IEwgMjAgNSBMIDIwIDMgTCAxNSAzIEwgMTQgMiBMIDEwIDIgeiBNIDcgNSBMIDE3IDUgTCAxNyAyMCBMIDcgMjAgTCA3IDUgeiBNIDkgNyBMIDkgMTggTCAxMSAxOCBMIDExIDcgTCA5IDcgeiBNIDEzIDcgTCAxMyAxOCBMIDE1IDE4IEwgMTUgNyBMIDEzIDcgeiIvPjwvc3ZnPg=="
      ></app-icon>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-icon-trash': AppIconTrash;
  }
}
