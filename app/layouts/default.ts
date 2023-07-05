import {Layout, TiniComponent, html} from '@tinijs/core';

import {AppHeaderComponent} from '../components/header';

@Layout({
  name: 'app-layout-default',
  components: [AppHeaderComponent],
})
export class AppLayoutDefault extends TiniComponent {
  protected render() {
    return html`
      <app-header></app-header>
      <main class="page"><slot></slot></main>
    `;
  }
}
