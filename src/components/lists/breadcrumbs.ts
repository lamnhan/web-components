import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { Item } from '../../types/entities';
import { AppColors } from '../../types/utils';
import { navigate } from '../../routing/router';
import { folderLink } from '../../routing/routes';

import '../icons/icon-right';
import '../elements/link';
import '../elements/dropdown';

@customElement('app-breadcrumbs')
export class AppBreadcrumbs extends LitElement {
  static styles = css`
    ul, li {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li strong,
    li app-link {
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    li[part=separator] {
      margin: 0 0.75rem;
      transform: translateY(2px);
    }
  `;

  @property({ type: Array }) readonly items: Item[] = [];
  private segments?: any[];

  willUpdate(changedProperties: PropertyValues<this>) {
    // computed(items) => segments
    if (changedProperties.has('items')) {
      this.segments = [{ id: '/', name: 'Home' }]; // home
      if (this.items.length < 4) { // less than 4 items
        this.segments = this.segments.concat(this.items);
      } else { // more than 4 items
        const secondLast = this.items[this.items.length - 2];
        const last = this.items[this.items.length - 1];
        const nestedItems = this.items
          .slice(0, this.items.length - 2)
          .map(item => ({ text: item.name, color: AppColors.Primary, onClicked: () => navigate(folderLink(item)) }));
        this.segments = this.segments.concat({ nestedItems }, secondLast, last);
      }
    }
  }

  private link(segment: Item) {
    return segment.id === '/' ? segment.id : folderLink(segment)
  }

  protected render() {
    return html`
      <ul part="list">
        ${this.segments.map((segment, i) => html`
          ${i === 0 ? '' : html`
            <li part="separator">
              <app-icon-right size="sm" color="medium"></app-icon-right>
            </li>
          `}
          <li part="item">
            ${i >= this.segments.length - 1
              // last segment
              ? html`<strong>${segment.name}</strong>`
              // normal segment
              : !segment.nestedItems?.length
              ? html`<app-link href=${this.link(segment)}>${segment.name}</app-link>`
              // middle segments
              : html`<app-dropdown kind="promoted-live" .menuItems=${segment.nestedItems}></app-dropdown>`}
          </li>
        `)}
      </ul>
    `;
  }
}
