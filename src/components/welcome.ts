import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('app-welcome')
export class AppWelcome extends LitElement {
  static styles = css`
    :host {
      margin: 0;
    }
  `;

  @property() name = 'World';

  protected render() {
    return html`<h1>Hello, ${this.name}!</h1>`;
  }
}