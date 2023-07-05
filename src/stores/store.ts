export type StoreCallback<Type> = (newValue: Type, oldValue: Type) => void;

export type Store<States> = States & {
  subscribe: <Type>(key: keyof States, cb: StoreCallback<Type>) => () => void;
  commit: <Type>(key: keyof States, value: Type) => Type;
}

export function UseStore<States>(
  store: Store<States>,
  stateKey?: keyof States
) {
  return function (target: any, propertyKey: string) {
    const key = (stateKey || propertyKey) as string;
    const unsubscribeKey = `___${key}$`;
    // originals
    const originalConnectedCallback = target.connectedCallback;
    const originalDisconnectedCallback = target.disconnectedCallback;
    // override
    target.connectedCallback = function () {
      originalConnectedCallback.bind(this)();
      this[unsubscribeKey] = store['subscribe'](
        key as unknown as keyof States,
        (value: unknown) => this[propertyKey] = value
      );
    };
    target.disconnectedCallback = function () {
      originalDisconnectedCallback.bind(this)();
      this[unsubscribeKey]?.();
    }
  }
}

export function createStore<States>(states: States) {
  const store = new Proxy(states as Object, {
    get(target, prop: string) {
      if (prop === 'subscribe') {
        return (stateKey: string, cb: StoreCallback<unknown>) => {
          if (stateKey in target) {
            // subscribe
            const subscriptions: Map<symbol, StoreCallback<unknown>>  = target[`___${stateKey}$`] ||= new Map(); 
            const subscriptionId = Symbol();
            subscriptions.set(subscriptionId, cb);
            // unsubscribe
            return () => subscriptions.delete(subscriptionId);
          } else {
            throw new Error(`Unknown state: ${stateKey}`);
          }
        }
      } else if (prop === 'commit') {
        return (stateKey: string, value: unknown) => store[stateKey] = value;
      } else {
        return target[prop];
      }
    },
    set(target, prop: string, value) {
      const subscriptions = target[`___${prop}$`] as undefined | Map<symbol, StoreCallback<unknown>>;
      // set value
      const oldValue = !(target[prop] instanceof Object)
        ? target[prop]
        : structuredClone(target[prop]);
      (target as Object)[prop] = value;
      // notify subscribers
      subscriptions?.forEach(cb => cb(value, oldValue));
      // success
      return true;
    }
  }) as Store<States>;
  return store;
}
