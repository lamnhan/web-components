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
`;class o extends HTMLElement{constructor(){super(),this.rootNode=null,this.labelNode=null,this.inputNode=null,this.messageNode=null,this.label="Label",this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.shadowRoot.adoptedStyleSheets=[e],this.rootNode=this.shadowRoot.querySelector("label"),this.labelNode=this.shadowRoot.querySelector("strong"),this.inputNode=this.shadowRoot.querySelector("input"),this.messageNode=this.shadowRoot.querySelector("em"))}static get observedAttributes(){return["label","validations"]}setLabel(e){e&&this.labelNode&&(this.label=e,this.labelNode.textContent=this.label)}setValidations(e){e&&(this.validations=JSON.parse(e))}connectedCallback(){this.setLabel(this.getAttribute("label")),this.setValidations(this.getAttribute("validations")),this.inputNode&&this.inputNode.addEventListener("input",e=>this.onInput(e))}attributeChangedCallback(e,t,o){"label"===e&&this.setLabel(o),"validations"===e&&this.setValidations(o)}onInput(e){let t;if(!this.validations||!this.rootNode||!this.inputNode||!this.messageNode)return;let o=e?.target?.value;for(let e=0;e<this.validations.length;e++){let{equals:s,type:i,message:l}=this.validations[e],a=o.toLowerCase()===s.toLowerCase();if(this.messageNode.textContent=a?l:"",this.rootNode?.classList[a?"add":"remove"](i),a){t={type:i,message:l};break}}let s=[{value:o,...t}];this.dispatchEvent(new CustomEvent("change",{detail:s}))}}customElements.define("native-input",o)})();
//# sourceMappingURL=input.js.map
