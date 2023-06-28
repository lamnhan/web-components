import configs from '../configs/development';
import providers from './providers';
import routes from './routes';
import {metas} from './metas';
import states, {Store} from './states';

import '../layouts/default';
import '../pages/home';
import '../pages/oops';

@App(providers)
export class AppRoot extends TiniComponent {
  $configs = configs;
  $meta!: Meta;
  $router!: Router;
  $store!: Store;

  onReady() {
    this.$meta = initMetas({metas});
    this.$router = registerRoutes(routes);
    this.$store = createStore(states);
  }

  protected render() {
    return html`${APP_ROOT_TEMPLATE}`;
  }
}
