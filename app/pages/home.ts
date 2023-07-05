import {Page, TiniComponent, html, css} from '@tinijs/core';

import {AppWelcomeComponent} from '../components/welcome';

@Page({
  name: 'app-page-home',
  components: [AppWelcomeComponent],
})
export class AppPageHome extends TiniComponent {
  static styles = css`
    :host {
      text-align: center;
    }
  `;

  protected render() {
    return html`<app-welcome></app-welcome>`;
  }
}
