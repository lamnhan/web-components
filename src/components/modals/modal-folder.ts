import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ref, createRef, Ref } from 'lit/directives/ref.js';

import { Item } from '../../types/entities';
import { AppModal } from '../elements/modal';
import { AppForm } from '../elements/form';
import { InputMessageTypes, InputValidation, IsRequired } from '../elements/input';

import '../elements/form';
import '../elements/modal';

export const enum ModalFolderPersonas {
  Add = 'add',
  Rename = 'rename',
}

export interface ModalFolderValues {
  name: string;
}

export type ModalFolderChangedValues = Partial<ModalFolderValues>;

export interface ModalFolderResult {
  persona: ModalFolderPersonas;
  initialValues: ModalFolderValues;
  values?: ModalFolderValues;
  context: Item;
}

@customElement('app-modal-folder')
export class AppModalFolder extends LitElement {
  static styles = css`
    [part=body] {
      width: 100%;
      padding: .5rem 1.5rem 1.5rem;
    }
  `;

  private modalRef: Ref<AppModal> = createRef();
  private formRef: Ref<AppForm> = createRef();
  @state() private persona: ModalFolderPersonas = ModalFolderPersonas.Add;
  @state() private initialValues?: ModalFolderValues;
  private context?: Item;

  private nameValidations: InputValidation[] = [
    {
      validator: IsRequired<string>,
      message: {
        type: InputMessageTypes.Error,
        text: 'Name is required.'
      }
    },
  ];

  get result(): ModalFolderResult {
    const values = this.formRef.value?.values() as unknown as ModalFolderValues;
    return {
      persona: this.persona,
      initialValues: this.initialValues,
      context: this.context,
      values,
    };
  }

  show(
    persona: ModalFolderPersonas,
    initialValues?: ModalFolderValues,
    context?: Item
  ) {
    if (!this.modalRef.value) return;
    this.persona = persona;
    this.initialValues = initialValues;
    this.context = context;
    this.modalRef.value.show();
  }

  hide() {
    if (!this.modalRef.value) return;
    this.modalRef.value.hide();
    // clear form values
    if (this.formRef.value) {
      this.formRef.value.clearAll();
    }
  }

  private cancel() {
    this.dispatchEvent(new CustomEvent('cancel', { detail: this.result }));
  }

  private submit() {
    const valid = this.formRef.value?.validate();
    if (valid) {
      this.dispatchEvent(new CustomEvent('submit', { detail: this.result }));
    }
  }

  protected render() {
    return html`
      <app-modal
        ${ref(this.modalRef)}
        kind="prompt"
        titleText=${this.persona === ModalFolderPersonas.Rename ? 'Rename folder' : 'Add folder'}
        @no=${this.cancel}
        @yes=${this.submit}
      >
        <app-form part="body" ${ref(this.formRef)}>
          <app-input
            label="Name"
            name="name"
            .value=${this.initialValues?.name ?? ''}
            .validations=${this.nameValidations}
            .liveCheck=${true}
          ></app-input>
        </app-form>
      </app-modal>
    `;
  }
}
