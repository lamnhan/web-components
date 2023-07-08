var f=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var i=(l,s,a,r)=>{for(var e=r>1?void 0:r?b(s,a):s,n=l.length-1,o;n>=0;n--)(o=l[n])&&(e=(r?o(s,a,e):o(e))||e);return r&&e&&f(s,a,e),e};import{LitElement as u,html as y,css as v}from"lit";import{customElement as x,property as c,state as p}from"lit/decorators.js";let t=class extends u{constructor(){super(...arguments);this.label="Label"}onChanged(a){if(!this.validations)return;const r=a?.target?.value;let e;for(let o=0;o<this.validations.length;o++){const{equals:h,type:m,message:g}=this.validations[o],d=r.toLowerCase()===h.toLowerCase();if(this.messageType=d?m:void 0,this.messageText=d?g:void 0,d){e={type:m,message:g};break}}const n=[{value:r,...e}];this.dispatchEvent(new CustomEvent("change",{detail:n}))}render(){return y`
      <label part="input" class=${this.messageType}>
        <strong>${this.label}</strong>
        <div>
          <input
            type="text"
            .placeholder=${this.placeholder||""}
            @input=${this.onChanged}
          />
          <em>${this.messageText||""}</em>
        </div>
      </label>
    `}};t.styles=v`
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
  `,i([c({type:String})],t.prototype,"label",2),i([c({type:String})],t.prototype,"placeholder",2),i([c({type:Array})],t.prototype,"validations",2),i([p()],t.prototype,"messageType",2),i([p()],t.prototype,"messageText",2),t=i([x("lit-input")],t);export{t as LitInput};
//# sourceMappingURL=input.js.map
