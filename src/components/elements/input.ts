import { LitElement, html, css, nothing, PropertyValueMap } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ref, createRef, Ref } from 'lit/directives/ref.js';

export const enum InputMessageTypes {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export interface InputMessage {
  type?: InputMessageTypes;
  text?: string;
}

export interface InputValidation {
  validator: (value: string) => boolean;
  message: InputMessage;
}

export function IsRequired<Type>(value: Type) {
  return !!value;
}

export function IsURL(value: string) {
  return !!value.match(/^https?:\/\/\S+/);
}

@customElement('app-input')
export class AppInput extends LitElement {
  static styles = css`
    :host {
      --input-height: 40px;
      container-type: inline-size;
      display: block;
      box-sizing: border-box;
      position: relative;
      width: 100%;
    }
    
    [part=label] {
      display: block;
      width: 100%;
    }
    
    .main {
      position: relative;
    }
    
    input {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: var(--input-height);
      margin-top: .5rem;
      padding: .5rem .75rem;
      background: var(--color-light);
      color: var(--color-dark);
      border: calc(var(--size-border) + 1px) solid var(--color-medium);
      border-radius: var(--size-radius);
      font-size: 1rem;
    }
    
    input:focus {
      outline: none;
      border-color: var(--color-primary);
      border-radius: var(--size-radius) !important;
    }

    input:focus + [part=message] {
      display: none;
    }

    [part=message] {
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      top: calc(var(--input-height));
      left: 0;
      padding: .15rem .5rem;
      font-size: .7rem;
      background-color: var(--color-light);
      border-radius: 0 0 var(--size-radius) var(--size-radius);
    }

    .error input {
      border-color: var(--color-danger);
      border-radius: var(--size-radius) var(--size-radius) 0 0;
    }

    .error [part=message] {
      background: var(--color-danger);
      color: var(--color-light);
    }

    ::slotted([slot=description]) {
      width: 100%;
      margin: .5rem 0 0 0;
      font-size: .9rem;
    }
    
    ::slotted([slot=subtext]) {
      width: 100%;
      margin: .25rem 0 0 0;
      font-size: .75rem;
      color: var(--color-medium);
      font-style: italic;
    }
  `;

  private inputRef: Ref<HTMLInputElement> = createRef();
  @property({ type: String }) readonly label = 'Label';
  @property({ type: String }) readonly type = 'text';
  @property({ type: String }) readonly placeholder?: string;
  @property({ type: String }) readonly name?: string;
  @property({ type: Array }) readonly validations?: InputValidation[];
  @property({ type: Boolean }) readonly liveCheck: boolean = false;
  @property({ type: String }) readonly value?: string = '';
  @state() messageType?: InputMessageTypes;
  @state() messageText?: string;

  get currentValue() {
    return this.inputRef.value?.value ?? '';
  }

  validate() {
    if (!this.validations?.length) return true; 
    let error: undefined | InputMessage;
    for (let i = 0; i < this.validations.length; i++) {
      const { validator, message } = this.validations[i];
      if (validator(this.currentValue)) continue;
      error = message;
      break;
    }
    this.messageType = error?.type;
    this.messageText = error?.text;
    return !error;
  }

  clear() {
    this.messageType = undefined;
    this.messageText = undefined;
    if (this.inputRef.value) {
      this.inputRef.value.value = '';
    }
  }

  reset() {
    this.messageType = undefined;
    this.messageText = undefined;
    if (this.inputRef.value) {
      this.inputRef.value.value = this.value;
    }
  }

  private onChanged() {
    if (this.liveCheck) this.validate();
    this.dispatchEvent(new CustomEvent('change', { detail: { value: this.currentValue } }));
  }

  protected render() {
    return html`
      <label part="control" class=${classMap({ [this.messageType]: true })}>
        <strong part="label">${this.label}</strong>
        <slot name="description"></slot>
        <div class="main">
          <input
            ${ref(this.inputRef)}
            type=${this.type as any}
            .value=${this.value}
            placeholder=${ifDefined(this.placeholder)}
            @input=${this.onChanged}
          />
          ${!this.messageText ? nothing : html`<div part="message">${this.messageText}</div>`}
        </div>
        <slot name="subtext"></slot>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-input': AppInput;
  }
}
