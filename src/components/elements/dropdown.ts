import { LitElement, html, css, render } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { ref, Ref, createRef } from 'lit/directives/ref.js';

import { AppColors } from '../../types/utils';

import '../icons/icon-menu';

export interface MenuItem {
  text: string;
  onClicked: (context: DropdownContext, e: MouseEvent) => void;
  icon?: string;
  color?: AppColors;
}

export const enum DropdownKinds {
  Normal = 'normal',
  Promoted = 'promoted',
  PromotedLive = 'promoted-live',
}

export const enum DropdownPlacements {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export type DropdownContext = unknown;

@customElement('app-dropdown-menu')
export class AppDropdownMenu extends LitElement {
  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
      position: relative;
    }

    [part=menu] {
      box-sizing: border-box;
      list-style: none;
      cursor: default;
      width: 100%;
      margin: 0;
      padding: .5rem 0;
      background: var(--color-light);
      border-radius: var(--size-radius);
      box-shadow: var(--shadow);
    }

    [part=menu] li {
      box-sizing: border-box;
      position: relative;
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 40px;
      padding: 0.5rem 1rem;
      background: var(--color-light);
      color: var(--color-dark);
    }

    [part=menu] li:hover {
      background: var(--color-shade);
    }

    [part=menu] li span {
      margin-left: 0.5rem;
    }
  `;

  @property({ type: Array }) readonly items: MenuItem[] = [];
  @property({ type: Object }) readonly context: DropdownContext;

  private clickItem(e: MouseEvent, item: MenuItem) {
    item.onClicked(this.context, e);
    return this.dispatchEvent(
      new CustomEvent('itemClick', { detail: { item, context: this.context } })
    );
  }

  protected render() {
    return html`
      <ul part="menu">
        ${this.items.map(item => html`
          <li
            @click=${(e: MouseEvent) => this.clickItem(e, item)}
            style=${styleMap({ color: `var(--color-${item.color})` })}
          >
            ${!item.icon ? '' : unsafeHTML(`
              <app-icon-${item.icon} class="icon" size="sm" color="${item.color}"></app-icon-${item.icon}
            `)}
            <span>${item.text}</span>
          </li>
        `)}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-dropdown-menu': AppDropdownMenu;
  }
}

@customElement('app-dropdown')
export class AppDropdown extends LitElement {
  static styles = css`
    :host {
      --dropdown-toggler-width: 28px;
      --dropdown-toggler-height: 28px;
      --dropdown-menu-width: 150px;
      --dropdown-menu-offset: 28px;
      display: inline-block;
      box-sizing: border-box;
      position: relative;
    }

    [part=toggler] {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      border: none;
      width: var(--dropdown-toggler-width);
      height: var(--dropdown-toggler-height);
      cursor: pointer;
      border-radius: var(--size-radius);
      background: var(--color-light);
    }

    [part=toggler]:hover {
      background: var(--color-shade);
    }

    [part=toggler] app-icon-menu {
      transform: translateY(2px) scale(.9)
    }

    [part=menu-container] {
      display: none;
      position: absolute;
      width: var(--dropdown-menu-width);
      top: calc(100% + var(--dropdown-menu-offset));
    }

    [part=menu-container],
    [part=menu-container].center {
      left: calc(1rem - (var(--width) / 2));
      right: auto;
    }

    [part=menu-container].left {
      top: calc(100% - var(--dropdown-toggler-height));
      left: auto;
      right: 0;
    }
    
    [part=menu-container].right {
      top: calc(100% - var(--dropdown-toggler-height));
      left: 0;
      right: auto;
    }
  `;

  private togglerRef: Ref<HTMLButtonElement> = createRef();
  private menuContainerRef: Ref<HTMLDivElement> = createRef();
  private promotedContainerNode?: HTMLDivElement;

  @property({ type: String }) readonly kind: DropdownKinds = DropdownKinds.Normal;
  @property({ type: String }) readonly placement: DropdownPlacements = DropdownPlacements.Center;
  @property({ type: Boolean }) readonly closeManually: boolean = false;
  @property({ type: Array }) readonly menuItems: MenuItem[] = [];
  @property({ type: Object }) readonly context?: DropdownContext;

  @state() showed: boolean = false;

  private onGlobalClicked = (e: MouseEvent) => {
    const togglerNode = this.togglerRef.value;
    const menuContainerNode = this.kind === DropdownKinds.Normal
      ? this.menuContainerRef.value : this.promotedContainerNode;
    if (!this.showed || this.closeManually || !togglerNode || !menuContainerNode) return
    const togglerRange = togglerNode.getBoundingClientRect();
    const menuContainerRange = menuContainerNode.getBoundingClientRect();
    const isInsideToggler = (
      togglerRange.left <= e.clientX &&
      togglerRange.right >= e.clientX &&
      togglerRange.top <= e.clientY &&
      togglerRange.bottom >= e.clientY
    );
    const isInsideMenu = (
      menuContainerRange.left <= e.clientX &&
      menuContainerRange.right >= e.clientX &&
      menuContainerRange.top <= e.clientY &&
      menuContainerRange.bottom >= e.clientY
    );
    this.showed = isInsideToggler || isInsideMenu;
  }

  private onPositionChanged = () => {
    if (!this.showed) return
    if (this.kind === DropdownKinds.PromotedLive) {
      this.updatePromotedMenuPosition();
    } else {
      this.showed = false;
    }
  }

  private onStatePoped = () => {
    if(!this.showed) return
    this.showed = false;
  }

  connectedCallback() {
    super.connectedCallback();
    addEventListener('click', this.onGlobalClicked);
    addEventListener('wheel', this.onPositionChanged);
    addEventListener('resize', this.onPositionChanged);
    addEventListener('touchmove', this.onPositionChanged);
    addEventListener('popstate', this.onStatePoped);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    removeEventListener('click', this.onGlobalClicked);
    removeEventListener('wheel', this.onPositionChanged);
    removeEventListener('resize', this.onPositionChanged);
    removeEventListener('touchmove', this.onPositionChanged);
    removeEventListener('popstate', this.onStatePoped);
  }

  willUpdate() {
    const renderCallback = (node: HTMLElement) =>
      node.style.display = this.showed ? 'block' : 'none';
    if (this.kind === DropdownKinds.Normal) {
      this.renderNormalMenu(renderCallback);
    } else {
      this.renderPromotedMenu(renderCallback);
    }
  }

  private renderNormalMenu(onRendered?: (node: HTMLDivElement) => void) {
    if (!this.menuContainerRef.value) return
    render(this.menuTemplate, this.menuContainerRef.value);
    if (onRendered) onRendered(this.menuContainerRef.value);
  }

  private renderPromotedMenu(onRendered?: (node: HTMLDivElement) => void) {
    if (!this.promotedContainerNode) {
      this.promotedContainerNode = document.createElement('div');
      this.promotedContainerNode.setAttribute('part', 'menu-container');
      this.promotedContainerNode.style.setProperty('--dropdown-toggler-width', '28px');
      this.promotedContainerNode.style.setProperty('--dropdown-toggler-height', '28px');
      this.promotedContainerNode.style.setProperty('--dropdown-menu-width', '150px');
      this.promotedContainerNode.style.setProperty('--dropdown-menu-offset', '8px');
      this.promotedContainerNode.style.display = 'none';
      this.promotedContainerNode.style.position = 'fixed';
      this.promotedContainerNode.style.width = 'var(--dropdown-menu-width)';
      this.promotedContainerNode.style.zIndex = '400';
      document.body.appendChild(this.promotedContainerNode);
    }
    render(this.menuTemplate, this.promotedContainerNode);
    this.updatePromotedMenuPosition();
    if (onRendered) onRendered(this.promotedContainerNode);
  }

  private updatePromotedMenuPosition() {
    if (!this.togglerRef.value) return
    const varExtractor = (node: HTMLElement, varName: string) => {
      const value = getComputedStyle(node).getPropertyValue(varName);
      const numberValue = value.match(/\d+/)?.[0];
      return { value, numberValue, number: !numberValue ? 0 : +numberValue };
    };
    const { number: togglerHeight } = varExtractor(this.togglerRef.value, '--dropdown-toggler-height');
    const { number: menuWidth } = varExtractor(this.promotedContainerNode, '--dropdown-menu-width');
    const { number: menuOffset } = varExtractor(this.promotedContainerNode, '--dropdown-menu-offset');
    const togglerBox = this.togglerRef.value.getBoundingClientRect();
    let top = togglerBox.bottom - togglerHeight;
    let left = togglerBox.left;
    let right = togglerBox.right;
    if (this.placement === DropdownPlacements.Left) {
      left = togglerBox.left - menuWidth + togglerBox.width;
      right = null;
    } else if (this.placement === DropdownPlacements.Center) {
      top = togglerBox.bottom + menuOffset;
      left = togglerBox.left - (menuWidth / 2) + (togglerBox.width / 2);
      right = null;
    }
    this.promotedContainerNode.style.top = !top ? 'auto' : `${top}px`;
    this.promotedContainerNode.style.left = !left ? 'auto' : `${left}px`;
    this.promotedContainerNode.style.right = !right ? 'auto' : `${right}px`;
  }

  private get menuTemplate() {
    return html`
      <app-dropdown-menu
        .items=${this.menuItems}
        .context=${this.context}
        @itemClick=${() => this.showed = false}
      ></app-dropdown-menu>
    `;
  }

  protected render() {
    return html`
      <button ${ref(this.togglerRef)} part="toggler"  @click=${() => this.showed = !this.showed}>
        <app-icon-menu size="sm" color="primary"></app-icon-menu>
      </button>
      ${this.kind !== DropdownKinds.Normal ? '' : html`
        <div ${ref(this.menuContainerRef)} part="menu-container" class=${this.placement}></div>
      `}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-dropdown': AppDropdown;
  }
}
