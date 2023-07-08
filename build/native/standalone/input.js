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
    font-family: Lucida Sans, Verdana, sans-serif;
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
`);let t=document.createElement("template");t.innerHTML=`
  <label part="input">
    <strong>Label</strong>
    <div>
      <input type="text" />
      <em></em>
    </div>
  </label>
`;class o extends HTMLElement{constructor(){super(),this.rootNode=null,this.labelNode=null,this.inputNode=null,this.messageNode=null,this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.shadowRoot.adoptedStyleSheets=[e],this.rootNode=this.shadowRoot.querySelector("label"),this.labelNode=this.shadowRoot.querySelector("strong"),this.inputNode=this.shadowRoot.querySelector("input"),this.messageNode=this.shadowRoot.querySelector("em"))}connectedCallback(){let e=this.getAttribute("label");this.labelNode&&e&&(this.labelNode.textContent=e);let t=this.getAttribute("validations");t&&(this.validations=JSON.parse(t)),this.inputNode&&this.inputNode.addEventListener("input",e=>this.onInput(e))}onInput(e){if(!this.validations||!this.rootNode||!this.inputNode||!this.messageNode)return;let t=e?.target?.value;for(let e=0;e<this.validations.length;e++){let{equals:o,type:s,message:i}=this.validations[e],r=t.toLowerCase()===o.toLowerCase();if(this.messageNode.textContent=r?i:"",this.rootNode?.classList[r?"add":"remove"](s),r)break}}}customElements.define("native-input",o)})();
//# sourceMappingURL=input.js.map
