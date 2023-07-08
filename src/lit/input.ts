import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { Validation } from '../types';

@customElement('lit-input')
export class LitInput extends LitElement {
  static styles = css`
    :host {
      display: block;
      container-type: inline-size;
      position: relative;
      width: 100%;
    }
    
    label {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    strong {
      margin-bottom: 0.5rem;
      font-size: 2rem;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    input {
      flex: 1;
      outline: none;
      box-sizing: border-box;
      height: 3.5rem;
      padding: 0.5rem 1rem;
      background-color: #fff;
      border: 2px solid #ccc;
      border-radius: 0.25rem 0 0 0.25rem;
      font-size: 1.5rem;
    }

    em {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      font-style: normal;
      width: 3.5rem;
      height: 3.5rem;
      background-color: #ccc;
      border-radius: 0 0.25rem 0.25rem 0;
      text-shadow: 0px 0px 2px #fff;
      font-size: 2.5rem;
    }

    .error input {
      border-color: var(--color-danger);
    }

    .error em {
      background-color: var(--color-danger);
    }

    .success input {
      border-color: var(--color-success);
    }

    .success em {
      background-color: var(--color-success);
    }
  `;

  @property({ type: String }) readonly label = 'Label';
  @property({ type: String }) readonly placeholder?: string;
  @property({ type: Array }) readonly validations?: Validation[];
  @state() messageType?: string;
  @state() messageText?: string;

  private onChanged(e: Event) {
    if (!this.validations) return;
    const value = (e?.target as HTMLInputElement)?.value;
    // validate
    let validationResult: undefined | Pick<Validation, 'type' | 'message'>;
    for (let i = 0; i < this.validations.length; i++) {
      const { equals, type, message } = this.validations[i];
      const isMatched = value.toLowerCase() === equals.toLowerCase();
      this.messageType = isMatched ? type : undefined;
      this.messageText = isMatched ? message : undefined;
      if (isMatched) {
        validationResult = { type, message };
        break;
      }
    }
    // result
    const detail = [{ value, ...validationResult }];
    this.dispatchEvent(new CustomEvent('change', { detail }));
  }

  protected render() {
    return html`
      <label part="input" class=${this.messageType as string}>
        <strong>${this.label}</strong>
        <div>
          <input
            type="text"
            .placeholder=${this.placeholder || ''}
            @input=${this.onChanged}
          />
          <em>${this.messageText || ''}</em>
        </div>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-input': LitInput;
  }
}
