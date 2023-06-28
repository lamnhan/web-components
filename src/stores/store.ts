export type StoreEventCallback = (newValue: unknown, oldValue: unknown) => void;

export function UseStore<States>(store: unknown, stateKey?: keyof States) {
  return function (target: any, propertyKey: string) {
    const key = (stateKey || propertyKey) as string;
    const Key = key[0].toUpperCase() + key.substring(1);
    const onChangedKey = `on${Key}Changed`;
    const unsubscribeKey = `_unsubscribe${Key}`;
    // store original callbacks
    const originalConnectedCallback = target.connectedCallback;
    const originalDisconnectedCallback = target.disconnectedCallback;
    // override callbacks
    target.connectedCallback = function () {
      originalConnectedCallback.bind(this)();
      this[unsubscribeKey] =
        store[onChangedKey]((value: unknown) => this[propertyKey] = value);
    };
    target.disconnectedCallback = function () {
      originalDisconnectedCallback.bind(this)();
      this[unsubscribeKey]?.();
    }
  }
}

export function createStore<States>(states: States) {
  return new Proxy(states as Object, {
    get(target, prop) {
      const key = prop.toString();
      const stateKey = key.slice(2, 3).toLowerCase() + key.slice(3, -7);
      // events
      if (key.startsWith('on') && key.endsWith('Changed')) {
        if (stateKey in target) {
          const subKey = `_${stateKey}Subscriptions`;
          (target as Object)[subKey] ||= [];
          return (cb: StoreEventCallback) => {
            // new subscription
            const subscriptions = target[subKey] as StoreEventCallback[]; 
            subscriptions.push(cb)
            // unsubscribe
            const subscriptionsId = subscriptions.length - 1
            return () => subscriptions.splice(subscriptionsId, 1);
          };
        } else {
          throw new Error(`Unknown state: ${stateKey}`);
        }
      }
      // states
      return target[key];
    },
    set: (target, prop, value) => {
      const key = prop.toString();
      const subKey = `_${key}Subscriptions`;
      const subscriptions = (target[subKey] || []) as StoreEventCallback[];
      // set value
      const oldValue = !(target[key] instanceof Object)
        ? target[key]
        : structuredClone(target[key]);
      (target as Object)[key] = value;
      // notify subscribers
      subscriptions.forEach((cb: StoreEventCallback) => cb(value, oldValue));
      // success
      return true;
    }
  }) as States;
}
