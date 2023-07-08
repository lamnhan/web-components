import { Validation } from '../types';

// <style>
const style = new CSSStyleSheet();
style.replaceSync(`
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
`);

// <template>
const template = document.createElement('template');
template.innerHTML = `
  <label part="input">
    <strong></strong>
    <div>
      <input type="text" />
      <em></em>
    </div>
  </label>
`;

// <script>
export class NativeInput extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'placeholder', 'validations'];
  }

  declare private _label?: string;
  get label() { return this._label }
  set label(value: undefined | string) { this.changeLabel(value, true) }

  declare private _placeholder?: string;
  get placeholder() { return this._placeholder }
  set placeholder(value: undefined | string) { this.changePlaceholder(value, true) }

  declare private _validations?: Validation[];
  get validations() { return this._validations }
  set validations(value: undefined | Validation[]) { this.changeValidations(value) }

  private containerNode: null | HTMLLabelElement = null;
  private labelNode: null | HTMLElement = null;
  private inputNode: null | HTMLInputElement = null;
  private messageNode: null | HTMLElement = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    if (this.shadowRoot) {
      // set template/style
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.adoptedStyleSheets = [style];
      // children refs
      this.containerNode = this.shadowRoot.querySelector('label');
      this.labelNode = this.shadowRoot.querySelector('strong');
      this.inputNode = this.shadowRoot.querySelector('input');
      this.messageNode = this.shadowRoot.querySelector('em');
    }
  }

  private changeLabel(value?: string, reflect = false) {
    this._label = value || 'Label';
    if (reflect) {
      this.setAttribute('label', this._label);
    }
    if (this.labelNode) {
      this.labelNode.textContent = this._label;
    }
  }

  private changePlaceholder(value?: string, reflect = false) {
    this._placeholder = value as string;
    if (reflect) {
      this.setAttribute('placeholder', this._placeholder);
    }
    if (this.inputNode) {
      this.inputNode.setAttribute('placeholder', this._placeholder);
    }
  }

  private changeValidations(value?: string | Object) {
    this._validations = typeof value === 'string' ? JSON.parse(value) : value;
  }

  connectedCallback() {
    // initial attribute values
    const initialLabel = this.getAttribute('label');
    if (initialLabel && initialLabel !== this._label) {
      this.changeLabel(initialLabel);
    }
    const initialPlaceholder = this.getAttribute('placeholder');
    if (initialPlaceholder && initialPlaceholder !== this._placeholder) {
      this.changePlaceholder(initialPlaceholder);
    }
    const initialValidations = this.getAttribute('validations');
    if (initialValidations) {
      this.changeValidations(initialValidations);
    }
    // events
    if (this.inputNode) {
      this.inputNode.addEventListener('input', this.onInputed);
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'label' && newValue !== this._label) {
      this.changeLabel(newValue);
    } else if (name === 'placeholder' && newValue !== this._placeholder) {
      this.changePlaceholder(newValue);
    } else if (name === 'validations') {
      this.changeValidations(newValue);
    }
  }

  disconnectedCallback() {
    if (this.inputNode) {
      this.inputNode.removeEventListener('input', this.onInputed);
    }
  }

  private onInputed = (e: Event) => {
    if (!this.validations || !this.containerNode || !this.inputNode || !this.messageNode) return;
    const value = (e?.target as HTMLInputElement)?.value;
    // validate
    let validationResult: undefined | Pick<Validation, 'type' | 'message'>;
    for (let i = 0; i < this.validations.length; i++) {
      const { equals, type, message } = this.validations[i];
      const isMatched = value.toLowerCase() === equals.toLowerCase();
      this.messageNode.textContent = !isMatched ? '' : message;
      this.containerNode?.classList[!isMatched ? 'remove' : 'add'](type);
      if (isMatched) {
        validationResult = { type, message };
        break;
      }
    }
    // result
    const detail = [{ value, ...validationResult }];
    this.dispatchEvent(new CustomEvent('change', { detail }));
  }

}

customElements.define('native-input', NativeInput);

declare global {
  interface HTMLElementTagNameMap {
    'native-input': NativeInput;
  }
}
