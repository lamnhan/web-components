(()=>{let e=new CSSStyleSheet;e.replaceSync(`
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
`);let t=document.createElement("template");t.innerHTML=`
  <label part="input">
    <strong></strong>
    <div>
      <input type="text" />
      <em></em>
    </div>
  </label>
`;class i extends HTMLElement{static get observedAttributes(){return["label","placeholder","validations"]}get label(){return this._label}set label(e){this.changeLabel(e,!0)}get placeholder(){return this._placeholder}set placeholder(e){this.changePlaceholder(e,!0)}get validations(){return this._validations}set validations(e){this.changeValidations(e)}constructor(){super(),this.containerNode=null,this.labelNode=null,this.inputNode=null,this.messageNode=null,this.onInputed=e=>{let t;if(!this.validations||!this.containerNode||!this.inputNode||!this.messageNode)return;let i=e?.target?.value;for(let e=0;e<this.validations.length;e++){let{equals:o,type:l,message:s}=this.validations[e],a=i.toLowerCase()===o.toLowerCase();if(this.messageNode.textContent=a?s:"",this.containerNode?.classList[a?"add":"remove"](l),a){t={type:l,message:s};break}}let o=[{value:i,...t}];this.dispatchEvent(new CustomEvent("change",{detail:o}))},this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.shadowRoot.adoptedStyleSheets=[e],this.containerNode=this.shadowRoot.querySelector("label"),this.labelNode=this.shadowRoot.querySelector("strong"),this.inputNode=this.shadowRoot.querySelector("input"),this.messageNode=this.shadowRoot.querySelector("em"))}changeLabel(e,t=!1){this._label=e||"Label",t&&this.setAttribute("label",this._label),this.labelNode&&(this.labelNode.textContent=this._label)}changePlaceholder(e,t=!1){this._placeholder=e,t&&this.setAttribute("placeholder",this._placeholder),this.inputNode&&this.inputNode.setAttribute("placeholder",this._placeholder)}changeValidations(e){this._validations="string"==typeof e?JSON.parse(e):e}connectedCallback(){let e=this.getAttribute("label");e&&e!==this._label&&this.changeLabel(e);let t=this.getAttribute("placeholder");t&&t!==this._placeholder&&this.changePlaceholder(t);let i=this.getAttribute("validations");i&&this.changeValidations(i),this.inputNode&&this.inputNode.addEventListener("input",this.onInputed)}attributeChangedCallback(e,t,i){"label"===e&&i!==this._label?this.changeLabel(i):"placeholder"===e&&i!==this._placeholder?this.changePlaceholder(i):"validations"===e&&this.changeValidations(i)}disconnectedCallback(){this.inputNode&&this.inputNode.removeEventListener("input",this.onInputed)}}customElements.define("native-input",i)})();
//# sourceMappingURL=input.js.map
