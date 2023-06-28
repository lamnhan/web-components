import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-section')
export class AppSection extends LitElement {
  static styles = css`
    :host {
      container-type: inline-size;
      display: block;
      box-sizing: border-box;
      position: relative;
      width: 100%;
    }

    [part=head] {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    [part=head] h2 {
      font-size: 1.2rem;
    }

    @media screen and (min-width: 768px) {
      [part=head] h2 {
        font-size: 1.35rem;
      }
    }

    @media screen and (min-width: 768px) {
      [part=head] h2 {
        font-size: 1.5rem;
      }
    }
  `;

  @property({ type: String }) readonly titleText = 'Section';

  protected render() {
    return html`
      <section part="section">
        <div part="head">
          <h2>${this.titleText}</h2>
          <slot name="meta"></slot>
        </div>
        <div part="body">
          <slot name="content"></slot>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-section': AppSection;
  }
}
