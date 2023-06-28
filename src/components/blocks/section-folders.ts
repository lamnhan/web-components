import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ref, createRef, Ref } from 'lit/directives/ref.js';

import { store } from '../../stores/main';
import { create, update, remove, removeByFolderId } from '../../api/client';
import { Item, Types } from '../../types/entities';
import { AppColors } from '../../types/utils';
import { folderLink } from '../../routing/routes';

import { AppModal, ModalResult } from '../../components/elements/modal';
import { AppModalFolder, ModalFolderPersonas, ModalFolderValues, ModalFolderResult } from '../../components/modals/modal-folder';

import '../elements/button';
import '../elements/dropdown';
import '../elements/section';
import '../elements/modal';
import '../lists/folders';
import '../modals/modal-folder';
import '../lists/photos';
import '../modals/modal-photo';
import '../lists/breadcrumbs';

@customElement('app-section-folders')
export class AppSectionFolders extends LitElement {
  static styles = css`
    :host {
      display: block;
      container-type: inline-size;
    }
  `;

  @property({ type: String }) readonly currentFolderId?: string;
  @property({ type: Array }) readonly breadcrumbs: Item[] = [];
  @property({ type: Array }) readonly folders: Item[] = [];
  private editModalRef: Ref<AppModalFolder> = createRef();
  private deleteAlertRef: Ref<AppModal> = createRef();

  private showEditModal(persona: ModalFolderPersonas, values?: ModalFolderValues, context?: Item) {
    return this.editModalRef.value?.show(persona, values, context);
  }

  private hideEditModal() {
    return this.editModalRef.value?.hide();
  }

  private async handleModalFolder({ detail: { persona, values, context } }: CustomEvent<ModalFolderResult>) {
    if (persona === ModalFolderPersonas.Rename) {
      const updatedFolder = await update(context.id, { name: values.name });
      store.folders = store.folders.map(folder => folder.id === updatedFolder.id ? updatedFolder : folder);
    } else {
      const newFolder = await create({
        name: values.name,
        type: Types.Folder,
        folderId: this.currentFolderId,
        fullPath: '/' + this.breadcrumbs.map(folder => folder.id).join('/'),
      });
      store.folders = [...store.folders, newFolder];
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
    await Promise.all([remove(context.id), removeByFolderId(context.id)]);
    store.folders = store.folders.filter(folder => folder.id !== context.id);
    return this.hideDeleteAlert();
  }

  protected render() {
    return html`
      <app-section titleText="Folders">
        <div slot="meta">
          <app-button
            color="dark"
            size="sm"
            @click=${() => this.showEditModal(ModalFolderPersonas.Add)}
          >Add new</app-button>
        </div>
        <div slot="content">
          <app-folders
            .items=${this.folders}
            .link=${folderLink}
            @rename=${({ detail: folder }) => this.showEditModal(ModalFolderPersonas.Rename, folder, folder)}
            @delete=${({ detail: folder }) => this.showDeleteAlert(folder)}
          ></app-folders>
        </div>
      </app-section>

      <app-modal-folder
        ${ref(this.editModalRef)}
        @cancel=${this.hideEditModal}
        @submit=${this.handleModalFolder}
      ></app-modal-folder>

      <app-modal
        ${ref(this.deleteAlertRef)}
        kind="confirm"
        titleText="Delete folder"
        .noButton=${{ text: 'Cancel' }}
        .yesButton=${{ text: 'Delete', color: AppColors.Danger }}
        @no=${this.hideDeleteAlert}
        @yes=${this.handleDeleteAlert}
      >
        <p style="padding: 0 1.5rem;">
          <strong>Are you sure you want to delete folder?</strong>
        </p>
      </app-modal>
    `;
  }
}
