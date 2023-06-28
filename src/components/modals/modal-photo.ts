import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ref, createRef, Ref } from 'lit/directives/ref.js';

import { Item } from '../../types/entities';
import { AppModal } from '../elements/modal';
import { AppForm } from '../elements/form';
import { InputValidation, InputMessageTypes, IsRequired, IsURL } from '../elements/input';

import '../elements/form';
import '../elements/modal';

export const enum ModalPhotoPersonas {
  Add = 'add',
  Rename = 'rename',
}

export interface ModalPhotoValues {
  name: string;
  url: string;
}

export type ModalPhotoChangedValues = Partial<ModalPhotoValues>;

export interface ModalPhotoResult {
  persona: ModalPhotoPersonas;
  initialValues: ModalPhotoValues;
  values?: ModalPhotoValues;
  context: Item;
}

@customElement('app-modal-photo')
export class AppModalPhoto extends LitElement {
  static styles = css`
    [part=body] {
      width: 100%;
      padding: .5rem 1.5rem 1.5rem;
    }

    app-input:first-child {
      margin-bottom: 2rem;
    }
  `;

  private modalRef: Ref<AppModal> = createRef();
  private formRef: Ref<AppForm> = createRef();
  @state() private persona: ModalPhotoPersonas = ModalPhotoPersonas.Add;
  @state() private initialValues?: ModalPhotoValues;
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
  private urlValidations: InputValidation[] = [
    {
      validator: IsRequired<string>,
      message: {
        type: InputMessageTypes.Error,
        text: 'URL is required.'
      }
    },
    {
      validator: IsURL,
      message: {
        type: InputMessageTypes.Error,
        text: 'Invalid URL.'
      }
    },
  ];

  get result(): ModalPhotoResult {
    const values = this.formRef.value?.values() as unknown as ModalPhotoValues;
    return {
      persona: this.persona,
      initialValues: this.initialValues,
      values,
      context: this.context,
    };
  }

  show(
    persona: ModalPhotoPersonas,
    initialValues?: ModalPhotoValues,
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
        titleText=${this.persona === ModalPhotoPersonas.Rename ? 'Rename photo' : 'Add photo'}
        @no=${this.cancel}
        @yes=${this.submit}
      >
        <app-form part="body" ${ref(this.formRef)}>
          <app-input
            label="Name"
            name="name"
            value=${this.initialValues?.name ?? ''}
            .validations=${this.nameValidations}
            .liveCheck=${true}
          ></app-input>
          ${this.persona === ModalPhotoPersonas.Rename ? '' : html`
            <app-input
              label="URL"
              name="url"
              value=${this.initialValues?.url ?? ''}
              .validations=${this.urlValidations}
              .liveCheck=${true}
            ></app-input>
          `}
        </app-form>
      </app-modal>
    `;
  }
}
