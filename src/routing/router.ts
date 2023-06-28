export function navigate(to: string) {
  const url = new URL(to, location.origin);
  if (url.href !== location.href) {
    history.pushState({}, '', url.href);
    dispatchEvent(new PopStateEvent('popstate'));
  }
}

export function createRouter(onNavigated: (url: URL) => void) {
  addEventListener('click', e => {
    let anchor: null | HTMLAnchorElement = null;
    const paths = e.composedPath() as HTMLElement[];
    for (let i = 0; i < paths.length; i++) {
      if (paths[i].tagName === 'A') {
        anchor = paths[i] as HTMLAnchorElement;
        break;
      }
    }
    if (anchor && (!anchor.target || anchor.target.toLowerCase() === '_self')) {
      const url = new URL(anchor.href);
      if (url.href !== location.href) {
        history.pushState({}, '', url.href);
        onNavigated(url);
      }
      e.preventDefault();
    }
  });
  addEventListener('popstate', e => {
    onNavigated(new URL(location.href));
    e.preventDefault();
  });
}
