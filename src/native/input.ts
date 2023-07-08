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
    font-size: 3rem;
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
  private rootNode: null | HTMLLabelElement = null;
  private labelNode: null | HTMLElement = null;
  private inputNode: null | HTMLInputElement = null;
  private messageNode: null | HTMLElement = null;

  private label?: string = 'Label';
  private validations?: Validation[];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    if (this.shadowRoot) {
      // set template/style
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.adoptedStyleSheets = [style];
      // access children
      this.rootNode = this.shadowRoot.querySelector('label');
      this.labelNode = this.shadowRoot.querySelector('strong');
      this.inputNode = this.shadowRoot.querySelector('input');
      this.messageNode = this.shadowRoot.querySelector('em');
    }
  }

  static get observedAttributes() {
    return ['label', 'validations'];
  }

  private setLabel(attr: null | string) {
    if (!attr || !this.labelNode) return;
    this.label = attr;
    this.labelNode.textContent = this.label;
  }

  private setValidations(attr: null | string) {
    if (!attr) return;
    this.validations = JSON.parse(attr);
  }

  connectedCallback() {
    // initial props
    this.setLabel(this.getAttribute('label'));
    this.setValidations(this.getAttribute('validations'));
    // events
    if (this.inputNode) {
      this.inputNode.addEventListener('input', e => this.onInput(e));
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'label') this.setLabel(newValue);
    if (name === 'validations') this.setValidations(newValue);
  }

  private onInput(e: Event) {
    if (!this.validations || !this.rootNode || !this.inputNode || !this.messageNode) return;
    const value = (e?.target as HTMLInputElement)?.value;
    // validate
    let validationResult: undefined | Pick<Validation, 'type' | 'message'>;
    for (let i = 0; i < this.validations.length; i++) {
      const { equals, type, message } = this.validations[i];
      const isMatched = value.toLowerCase() === equals.toLowerCase();
      this.messageNode.textContent = !isMatched ? '' : message;
      this.rootNode?.classList[!isMatched ? 'remove' : 'add'](type);
      if (isMatched) {
        validationResult = { type, message };
        break;
      }
    }
    // result
    const detail = { value, ...validationResult };
    this.dispatchEvent(new CustomEvent('change', { detail }));
  }

}

customElements.define('native-input', NativeInput);

declare global {
  interface HTMLElementTagNameMap {
    'native-input': NativeInput;
  }
}
