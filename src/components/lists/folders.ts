import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { MenuItem } from '../elements/dropdown';
import { Item } from '../../types/entities';
import { AppColors } from '../../types/utils';

import '../elements/dropdown';
import '../icons/icon-folder';
import '../icons/icon-trash';

@customElement('app-folders')
export class AppFolders extends LitElement {
  static styles = css`
    :host {
      --height: 60px;
      display: block;
      container-type: inline-size;
    }

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
      width: 100%;
    }

    li:last-child {
      margin-bottom: 0;
    }

    a {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      box-sizing: border-box;
      width: 100%;
      height: var(--height);
      padding: 0.5rem 2.5rem 0.5rem 1rem;
      border: var(--size-border) solid var(--color-shade);
      border-radius: var(--size-radius);
      background: var(--color-light);
      color: var(--color-dark);
      text-decoration: none;
    }

    a:hover {
      background: var(--color-shade);
    }

    h3 {
      margin: 0 0 0 0.5rem;
      font-size: 1rem;
      font-weight: normal;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    app-dropdown {
      position: absolute;
      top: calc((var(--height) / 2) - 14px);
      right: 1rem;
    }
  `;

  @property({ type: Array }) readonly items: Item[] = [];
  @property({ type: Object }) readonly link = (folder: Item) => folder.id;

  private menuItems: MenuItem[] = [
    {
      text: 'Rename',
      onClicked: (folder: Item) =>
        this.dispatchEvent(new CustomEvent('rename', { detail: folder })),
    },
    {
      text: 'Delete',
      onClicked: (folder: Item) =>
        this.dispatchEvent(new CustomEvent('delete', { detail: folder })),
      icon: 'trash',
      color: AppColors.Danger,
    }
  ];

  private get emptyTemplate() {
    return html`<p part="empty">No folders!</p>`;
  }

  private get mainTemplate() {
    return html`
      <ul part="list">
        ${repeat(this.items, item => item.id, folder => html`
          <li part="item">
            <a href=${this.link(folder)} title=${folder.name}>
              <app-icon-folder size="lg"></app-icon-folder>
              <h3>${folder.name}</h3>
            </a>
            <app-dropdown
              kind="promoted"
              placement="left"
              .menuItems=${this.menuItems}
              .context=${folder}
            ></app-dropdown>
          </li>
        `)}
      </ul>
    `;
  }

  protected render() {
    return !this.items.length ? this.emptyTemplate : this.mainTemplate;
  }
}
