@Page('page-oops')
export class OopsPage extends TiniComponent {
  metas: PageMetas = {
    title: 'Oops',
    description: 'Error 404, not found!',
  };

  protected render() {
    return html`<h1 style="text-align: center;">Oops 🫣!</h1>`;
  }
}
