const s=new CSSStyleSheet;s.replaceSync(`
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
`);const r=document.createElement("template");r.innerHTML=`
  <label part="input">
    <strong></strong>
    <div>
      <input type="text" />
      <em></em>
    </div>
  </label>
`;class c extends HTMLElement{constructor(){super();this.containerNode=null;this.labelNode=null;this.inputNode=null;this.messageNode=null;this.onInputed=e=>{if(!this.validations||!this.containerNode||!this.inputNode||!this.messageNode)return;const t=e?.target?.value;let i;for(let a=0;a<this.validations.length;a++){const{equals:h,type:o,message:n}=this.validations[a],l=t.toLowerCase()===h.toLowerCase();if(this.messageNode.textContent=l?n:"",this.containerNode?.classList[l?"add":"remove"](o),l){i={type:o,message:n};break}}const d=[{value:t,...i}];this.dispatchEvent(new CustomEvent("change",{detail:d}))};this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.appendChild(r.content.cloneNode(!0)),this.shadowRoot.adoptedStyleSheets=[s],this.containerNode=this.shadowRoot.querySelector("label"),this.labelNode=this.shadowRoot.querySelector("strong"),this.inputNode=this.shadowRoot.querySelector("input"),this.messageNode=this.shadowRoot.querySelector("em"))}static get observedAttributes(){return["label","placeholder","validations"]}get label(){return this._label}set label(e){this.changeLabel(e,!0)}get placeholder(){return this._placeholder}set placeholder(e){this.changePlaceholder(e,!0)}get validations(){return this._validations}set validations(e){this.changeValidations(e)}changeLabel(e,t=!1){this._label=e||"Label",t&&this.setAttribute("label",this._label),this.labelNode&&(this.labelNode.textContent=this._label)}changePlaceholder(e,t=!1){this._placeholder=e,t&&this.setAttribute("placeholder",this._placeholder),this.inputNode&&this.inputNode.setAttribute("placeholder",this._placeholder)}changeValidations(e){this._validations=typeof e=="string"?JSON.parse(e):e}connectedCallback(){const e=this.getAttribute("label");e&&e!==this._label&&this.changeLabel(e);const t=this.getAttribute("placeholder");t&&t!==this._placeholder&&this.changePlaceholder(t);const i=this.getAttribute("validations");i&&this.changeValidations(i),this.inputNode&&this.inputNode.addEventListener("input",this.onInputed)}attributeChangedCallback(e,t,i){e==="label"&&i!==this._label?this.changeLabel(i):e==="placeholder"&&i!==this._placeholder?this.changePlaceholder(i):e==="validations"&&this.changeValidations(i)}disconnectedCallback(){this.inputNode&&this.inputNode.removeEventListener("input",this.onInputed)}}customElements.define("native-input",c);export{c as NativeInput};
//# sourceMappingURL=input.js.map
