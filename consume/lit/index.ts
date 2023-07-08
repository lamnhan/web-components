import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined';

import { Validation } from '../../src/types';

@customElement('app-root')
export class AppRoot extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative; 
    }

    :host > * {
      margin-bottom: 2rem;
    }

    :host::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
      opacity: .15;
    }

    :host(.error)::before {
      background: var(--color-danger);
    }

    :host(.success)::before {
      background: var(--color-success);
    }

    button {
      display: block;
      margin: 0 auto 3rem;
      padding: 1rem 2rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      background: #fff;
      cursor: pointer;
      font-size: 1.3rem;
    }

    button.badass {
      background: #333;
      color: #fff;
    }
  `;

  private readonly originalPlaceholder = 'Type OK or NG';
  private readonly originalValidations = [
    { equals: 'OK', type: 'success', message: '👍' },
    { equals: 'NG', type: 'error', message: '👎' }
  ] as Validation[];
  private readonly badassPlaceholder = 'Type HI or FU';
  private readonly badassValidations = [
    { equals: 'HI', type: 'success', message: '😘' },
    { equals: 'FU', type: 'error', message: '🤬' }
  ] as Validation[];

  @state() private isBadass: boolean = false;
  @state() private placeholder?: string;
  @state() private validations?: Validation[];

  protected willUpdate() {
    this.placeholder = this.isBadass ? this.badassPlaceholder : this.originalPlaceholder;
    this.validations = this.isBadass ? this.badassValidations : this.originalValidations;
  }

  private changeStatus(e: CustomEvent) {
    const [{ type }] = e.detail || [];
    if (!type) {
      this.removeAttribute('class');
    } else {
      this.classList.add(type);
    }
  }

  protected render() {
    return html`
      <button
        @click=${() => this.isBadass = !this.isBadass}
        class=${classMap({ badass: this.isBadass })}
      >${!this.isBadass ? 'Nomal mode' : 'Badass mode'}</button>

      <native-input
        label="Native"
        placeholder=${ifDefined(this.placeholder)}
        .validations=${this.validations}
        @change=${this.changeStatus}
      ></native-input>

      <lit-input
        label="Lit"
        placeholder=${ifDefined(this.placeholder)}
        .validations=${this.validations}
        @change=${this.changeStatus}
      ></lit-input>

      <vue-input
        label="Vue"
        placeholder=${ifDefined(this.placeholder)}
        .validations=${this.validations}
        @change=${this.changeStatus}
      ></vue-input>
    `;
  }
}
