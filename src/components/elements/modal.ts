import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ref, createRef, Ref } from 'lit/directives/ref.js';

import { AppColors } from '../../types/utils';

import './button';

export const enum ModalKinds {
  Bare = 'bare',
  Modal = 'modal',
  Alert = 'alert',
  Confirm = 'confirm',
  Prompt = 'prompt',
}

export interface ModalButton {
  text: string;
  color: AppColors;
}

export interface ModalResult<Context> {
  context: Context;
  dialog: HTMLDialogElement;
}

@customElement('app-modal')
export class AppModal extends LitElement {
  static styles = css`
    :host {
      container-type: inline-size;
      display: block;
      box-sizing: border-box;
      position: relative;
    }

    dialog {
      position: fixed;
      padding: 0;
      width: calc(100% - 2rem);
      max-width: 720px;
      border: none;
      border-radius: var(--size-radius);
      box-shadow: var(--shadow);
      background: var(--color-light);
      color: var(--color-dark);
    }

    dialog::backdrop {
      background: rgba(0, 0, 0, .3);
    }

    dialog.alert, dialog.confirm, dialog.prompt {
      max-width: 480px;
    }

    [part=head], [part=body], [part=foot] {
      display: flex;
      box-sizing: border-box;
      width: 100%;
      padding: 1rem;
      background: var(--color-light);
      color: var(--color-dark);
    }

    [part=head] {
      justify-content: space-between;
      align-items: center;
    }

    [part=head] em {
      display: block;
      font-size: 1.2rem;
      font-style: normal;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    [part=head] button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      padding: 0;
      background: none;
      border: none;
      opacity: .5;
      font-size: 1.5rem;
      cursor: pointer;
    }

    [part=head] button:hover {
      opacity: 1;
    }

    [part=foot] {
      align-items: center;
      justify-content: space-between;
    }
  `;

  @property({ type: String }) readonly kind: ModalKinds = ModalKinds.Modal;
  @property({ type: String }) readonly titleText?: string;
  @property({ type: Object }) readonly noButton?: ModalButton;
  @property({ type: Object }) readonly yesButton?: ModalButton;

  private dialogRef: Ref<HTMLDialogElement> = createRef();
  private context?: unknown;

  get result(): ModalResult<unknown> {
    return {
      context: this.context,
      dialog: this.dialogRef.value,
    };
  }

  get opened() {
    return this.dialogRef.value?.open;
  }

  show<Context>(context?: Context) {
    if (!this.dialogRef.value) return;
    this.context = context;
    this.dialogRef.value.showModal();
  }

  hide() {
    if (!this.dialogRef.value) return;
    this.dialogRef.value.close();
  }

  private clickNo() {
    this.dispatchEvent(new CustomEvent('no', { detail: this.result }));
  }

  private clickYes() {
    this.dispatchEvent(new CustomEvent('yes', { detail: this.result }));
  }

  protected render() {
    return html`
      <dialog part="dialog" ${ref(this.dialogRef)} class=${classMap({ [this.kind]: true })}>
        ${this.kind === ModalKinds.Bare ? '' : html`
          <div part="head">
            <em>${this.titleText || 'Modal'}</em>
            <button @click=${this.clickNo}>✕</button>
          </div>
        `}
        <div part="body">
          <slot></slot>
        </div>
        ${this.kind !== ModalKinds.Confirm && this.kind !== ModalKinds.Prompt ? '' : html`
          <div part="foot">
            <app-button color=${this.noButton?.color || AppColors.Shade} @click=${this.clickNo}>
              ${this.noButton?.text || (this.kind === ModalKinds.Prompt ? 'Cancel' : 'No')}
            </app-button>
            <app-button color=${this.yesButton?.color || AppColors.Primary} @click=${this.clickYes}>
              ${this.yesButton?.text || (this.kind === ModalKinds.Prompt ? 'OK' : 'Yes')}
            </app-button>
          </div>
        `}
      </dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-modal': AppModal;
  }
}
