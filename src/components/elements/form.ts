import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { AppInput } from './input';

@customElement('app-form')
export class AppForm extends LitElement {
  static styles = css`
    :host {
      container-type: inline-size;
      display: block;
      box-sizing: border-box;
      position: relative;
      width: 100%;
    }

    [part=title] {
      margin: 0;
      font-size: 1.5rem;
    }
  `;

  @property({ type: String }) titleText?: string;
  @property({ type: String }) action?: string;
  @property({ type: String }) method?: 'get' | 'post' | 'dialog';
  private members: AppInput[] = [];

  values() {
    return this.members.reduce((result, item) => {
      if (item.name) {
        result[item.name] = item.currentValue;
      }
      return result;
    }, {} as Record<string, string>);
  }

  get(name: string): null | AppInput {
    return this.members.find(member => member.name === name);
  }

  getAll() {
    return this.members;
  }

  clear(name: string) {
    this.get(name)?.clear();
  }

  reset(name: string) {
    this.get(name)?.reset();
  }

  clearAll() {
    this.members.forEach(member => member.clear());
  }

  resetAll() {
    this.members.forEach(member => member.reset());
  }

  validate() {
    return this.members.reduce((result, item) => result = item.validate(), true);
  }

  protected updated() {
    this.members = Array.from(this.querySelectorAll('app-input'));
  }

  protected render() {
    return html`
      ${!this.titleText ? nothing : html`<h3 part="title">${this.titleText}</h3>`}
      <slot name="above"></slot>
      <form part="form" action=${ifDefined(this.action)} method=${ifDefined(this.method)}>
        <slot></slot>
      </form>
      <slot name="below"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-form': AppForm;
  }
}

