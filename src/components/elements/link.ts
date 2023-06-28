import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined';

@customElement('app-link')
export class AppLink extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      box-sizing: border-box;
      position: relative;
    }

    a {
      color: var(--color-primary);
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  `;

  @property({ type: String }) readonly href = '#';
  @property({ type: String }) readonly rel?: string;
  @property({ type: String }) readonly target?: '_blank' | '_self' | '_parent' | '_top';

  protected render() {
    return html`
      <a
        part="link"
        href=${this.href}
        target=${ifDefined(this.target)}
        rel=${ifDefined(this.rel)}
      >
        <slot></slot>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-link': AppLink;
  }
}
