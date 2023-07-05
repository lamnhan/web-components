import {App, TiniComponent, html} from '@tinijs/core';

import configs from './configs/development';

import './layouts/default';

@App()
export class AppRoot extends TiniComponent {
  public readonly $configs = configs;

  protected render() {
    return html`<h1>Hello World!</h1>`;
  }
}
