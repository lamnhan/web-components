@Layout('layout-default')
export class DefaultLayout extends TiniComponent {
  protected render() {
    return html`
      <app-header></app-header>
      <div class="page"><slot></slot></div>
    `;
  }
}
