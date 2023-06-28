import { LitElement, html, css, PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { Item } from '../../types/entities';
import { AppColors } from '../../types/utils';
import { MenuItem } from '../elements/dropdown';

import '../elements/dropdown';
import '../icons/icon-trash';

@customElement('app-photos')
export class AppPhotos extends LitElement {
  static styles = css`
    [part=empty] {
      margin: 0;
      padding: 1.5rem;
      background-color: var(--color-shade);
      font-style: italic;
      text-align: center;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }

    li {
      position: relative;
    }

    .image {
      position: relative;
      width: 100%;
      height: 250px;
      overflow: hidden;
      border-radius: var(--size-radius);
      cursor: pointer;
    }

    .image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease-in-out;
    }

    .image:hover img {
      transform: scale(1.2);
    }

    .image h3 {
      position: absolute;
      box-sizing: border-box;
      bottom: 0;
      left: 0;
      width: 100%;
      margin: 0;
      padding: 0.5rem;
      color: var(--color-light);
      background: var(--color-dark);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 0.8rem;
      font-weight: normal;
    }

    app-dropdown {
      position: absolute;
      top: .5rem;
      right: .5rem;
    }
  `;

  @property({ type: Array }) readonly items: Item[] = [];
  private validItems: Item[] = [];

  private menuItems: MenuItem[] = [
    {
      text: 'Rename',
      onClicked: (photo: Item) =>
        this.dispatchEvent(new CustomEvent('rename', { detail: photo })),
    },
    {
      text: 'Delete',
      onClicked: (photo: Item) =>
        this.dispatchEvent(new CustomEvent('delete', { detail: photo })),
      icon: 'trash',
      color: AppColors.Danger,
    }
  ];

  protected willUpdate() {
    this.validItems = this.items.filter(item => item.url);
  }

  private onPhotoClicked(photo: Item) {
    this.dispatchEvent(new CustomEvent('showed', { detail: photo }));
  }

  private get emptyTemplate() {
    return html`<p part="empty">No photos!</p>`;
  }

  private get mainTemplate() {
    return html`
      <ul part="list">
        ${repeat(this.validItems, item => item.id, photo => html`
          <li part="item">
            <div class="image" @click=${() => this.onPhotoClicked(photo)}>
              <img src=${photo.url} title=${photo.name} />
              <h3>${photo.name || 'Untitled'}</h3>
            </div>
            <app-dropdown
              kind="promoted"
              placement="left"
              .menuItems=${this.menuItems}
              .context=${photo}
            ></app-dropdown>
          </li>
        `)}
      </ul>
    `;
  }

  protected render() {
    return !this.validItems.length ? this.emptyTemplate : this.mainTemplate;
  }
}
