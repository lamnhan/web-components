import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import './button';

@customElement('app-body')
export class AppBody extends LitElement {
  static styles = css``;

  protected render() {
    return html`
      <main>
        <app-button palette="primary" size="sm" @click=${() => console.log('Click 3')}>Click me</app-button>
        <app-button palette="dark" size="lg" @click=${() => console.log('Click 3')}><strong>Click me</strong></app-button>
        <app-button palette="light" size="xl" @click=${() => console.log('Click 3')}><strong>Click me</strong></app-button>
      </main>
    `;
  }
}
