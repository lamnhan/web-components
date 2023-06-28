import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ref, createRef, Ref } from 'lit/directives/ref.js';

import { store } from '../../stores/main';
import { create, update, remove } from '../../api/client';
import { Item, Types } from '../../types/entities';
import { AppColors } from '../../types/utils';

import { AppModal, ModalResult } from '../elements/modal';
import { AppModalPhoto, ModalPhotoPersonas, ModalPhotoValues, ModalPhotoResult } from '../modals/modal-photo';

import '../elements/button';
import '../elements/dropdown';
import '../elements/section';
import '../elements/modal';
import '../lists/photos';
import '../modals/modal-photo';
import '../lists/photos';
import '../modals/modal-photo';
import '../lists/breadcrumbs';

@customElement('app-section-photos')
export class AppSectionPhotos extends LitElement {
  static styles = css`
    :host {
      display: block;
      container-type: inline-size;
    }
  `;

  @property({ type: String }) readonly currentFolderId?: string;
  @property({ type: Array }) readonly breadcrumbs: Item[] = [];
  @property({ type: Array }) readonly photos: Item[] = [];
  private editModalRef: Ref<AppModalPhoto> = createRef();
  private deleteAlertRef: Ref<AppModal> = createRef();

  private showEditModal(persona: ModalPhotoPersonas, values?: ModalPhotoValues, context?: Item) {
    return this.editModalRef.value?.show(persona, values, context);
  }

  private hideEditModal() {
    return this.editModalRef.value?.hide();
  }

  private async handleModalPhoto({ detail: { persona, values, context } }: CustomEvent<ModalPhotoResult>) {
    if (persona === ModalPhotoPersonas.Rename) {
      const updatedPhoto = await update(context.id, {
        name: values.name,
        url: values.url
      });
      store.photos = store.photos.map(photo => photo.id === updatedPhoto.id ? updatedPhoto : photo);
    } else {
      const newPhoto = await create({
        name: values.name,
        url: values.url,
        type: Types.Photo,
        folderId: this.currentFolderId,
        fullPath: '/' + this.breadcrumbs.map(folder => folder.id).join('/'),
      });
      store.photos = [...store.photos, newPhoto];
    }
    return this.hideEditModal();
  }

  private showDeleteAlert(data: Item) {
    return this.deleteAlertRef.value?.show(data);
  }

  private hideDeleteAlert() {
    return this.deleteAlertRef.value?.hide();
  }

  private async handleDeleteAlert({ detail: { context } }: CustomEvent<ModalResult<Item>>) {
    await remove(context.id);
    store.photos = store.photos.filter(photo => photo.id !== context.id);
    return this.hideDeleteAlert();
  }

  protected render() {
    return html`
      <app-section titleText="Photos">
        <div slot="meta">
          <app-button
            color="dark"
            size="sm"
            @click=${() => this.showEditModal(ModalPhotoPersonas.Add)}
          >Add new</app-button>
        </div>
        <div slot="content">
          <app-photos
            .items=${this.photos}
            @rename=${({ detail: photo }) => this.showEditModal(ModalPhotoPersonas.Rename, photo, photo)}
            @delete=${({ detail: photo }) => this.showDeleteAlert(photo)}
          ></app-photos>
        </div>
      </app-section>

      <app-modal-photo
        ${ref(this.editModalRef)}
        @cancel=${this.hideEditModal}
        @submit=${this.handleModalPhoto}
      ></app-modal-photo>

      <app-modal
        ${ref(this.deleteAlertRef)}
        kind="confirm"
        titleText="Delete photo"
        .noButton=${{ text: 'Cancel' }}
        .yesButton=${{ text: 'Delete', color: AppColors.Danger }}
        @no=${this.hideDeleteAlert}
        @yes=${this.handleDeleteAlert}
      >
        <p style="padding: 0 1.5rem;">
          <strong>Are you sure you want to delete photo?</strong>
        </p>
      </app-modal>
    `;
  }
}
