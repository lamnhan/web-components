// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jXcmj":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b86aa8367568b1b3";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bXLqa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AppRoot", ()=>AppRoot);
var _core = require("@tinijs/core");
var _meta = require("@tinijs/meta");
var _router = require("@tinijs/router");
var _store = require("@tinijs/store");
var _development = require("../configs/development");
var _developmentDefault = parcelHelpers.interopDefault(_development);
var _providers = require("./providers");
var _providersDefault = parcelHelpers.interopDefault(_providers);
var _routes = require("./routes");
var _routesDefault = parcelHelpers.interopDefault(_routes);
var _metas = require("./metas");
var _states = require("./states");
var _statesDefault = parcelHelpers.interopDefault(_states);
var _default = require("../layouts/default");
var _home = require("../pages/home");
var _oops = require("../pages/oops");
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let AppRoot = class AppRoot extends (0, _core.TiniComponent) {
    constructor(){
        super(...arguments);
        this.$configs = (0, _developmentDefault.default);
    }
    onReady() {
        this.$meta = (0, _meta.initMetas)({
            metas: (0, _metas.metas)
        });
        this.$router = (0, _router.registerRoutes)((0, _routesDefault.default));
        this.$store = (0, _store.createStore)((0, _statesDefault.default));
    }
    render() {
        return (0, _core.html)`${0, _core.APP_ROOT_TEMPLATE}`;
    }
};
AppRoot = __decorate([
    (0, _core.App)((0, _providersDefault.default))
], AppRoot);

},{"@tinijs/core":"cUOty","@tinijs/meta":"hAG7Z","@tinijs/router":"wWiMg","@tinijs/store":"a3Yx0","../configs/development":"l8jP2","./providers":"16eSy","./routes":"28Dv0","./metas":"472ls","./states":"dFxV1","../layouts/default":"2Rf7Q","../pages/home":"5VnDu","../pages/oops":"e51no","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cUOty":[function(require,module,exports) {
// forward lit core exports
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lit = require("lit");
parcelHelpers.exportAll(_lit, exports);
// forward lit decorator exports
var _decorators = require("lit/decorators");
parcelHelpers.exportAll(_decorators, exports);
// forward lit directive exports
var _asyncAppend = require("lit/directives/async-append");
parcelHelpers.exportAll(_asyncAppend, exports);
var _asyncReplace = require("lit/directives/async-replace");
parcelHelpers.exportAll(_asyncReplace, exports);
var _cache = require("lit/directives/cache");
parcelHelpers.exportAll(_cache, exports);
var _choose = require("lit/directives/choose");
parcelHelpers.exportAll(_choose, exports);
var _classMap = require("lit/directives/class-map");
parcelHelpers.exportAll(_classMap, exports);
var _guard = require("lit/directives/guard");
parcelHelpers.exportAll(_guard, exports);
var _ifDefined = require("lit/directives/if-defined");
parcelHelpers.exportAll(_ifDefined, exports);
var _join = require("lit/directives/join");
parcelHelpers.exportAll(_join, exports);
var _keyed = require("lit/directives/keyed");
parcelHelpers.exportAll(_keyed, exports);
var _live = require("lit/directives/live");
parcelHelpers.exportAll(_live, exports);
var _map = require("lit/directives/map");
parcelHelpers.exportAll(_map, exports);
var _range = require("lit/directives/range");
parcelHelpers.exportAll(_range, exports);
var _ref = require("lit/directives/ref");
parcelHelpers.exportAll(_ref, exports);
var _repeat = require("lit/directives/repeat");
parcelHelpers.exportAll(_repeat, exports);
var _styleMap = require("lit/directives/style-map");
parcelHelpers.exportAll(_styleMap, exports);
var _templateContent = require("lit/directives/template-content");
parcelHelpers.exportAll(_templateContent, exports);
var _unsafeHtml = require("lit/directives/unsafe-html");
parcelHelpers.exportAll(_unsafeHtml, exports);
var _unsafeSvg = require("lit/directives/unsafe-svg");
parcelHelpers.exportAll(_unsafeSvg, exports);
var _until = require("lit/directives/until");
parcelHelpers.exportAll(_until, exports);
var _when = require("lit/directives/when");
parcelHelpers.exportAll(_when, exports);
// lib
var _decorators1 = require("./lib/decorators");
parcelHelpers.exportAll(_decorators1, exports);
var _methods = require("./lib/methods");
parcelHelpers.exportAll(_methods, exports);
var _consts = require("./lib/consts");
parcelHelpers.exportAll(_consts, exports);
var _types = require("./lib/types");
parcelHelpers.exportAll(_types, exports);
var _event = require("./lib/event");
parcelHelpers.exportAll(_event, exports);
var _observable = require("./lib/observable");
parcelHelpers.exportAll(_observable, exports);
var _main = require("./lib/main");
parcelHelpers.exportAll(_main, exports);

},{"lit":"4antt","lit/decorators":"bCPKi","lit/directives/async-append":"g5YyU","lit/directives/async-replace":"fco8U","lit/directives/cache":"Xs5GM","lit/directives/choose":"bwg02","lit/directives/class-map":"jiVKL","lit/directives/guard":"kI5BX","lit/directives/if-defined":"77RTn","lit/directives/join":"8BCCQ","lit/directives/keyed":"8kLRs","lit/directives/live":"a4wmv","lit/directives/map":"ejxgA","lit/directives/range":"bHK0i","lit/directives/ref":"eKwmp","lit/directives/repeat":"71kf4","lit/directives/style-map":"4GQsu","lit/directives/template-content":"875un","lit/directives/unsafe-html":"5KJj0","lit/directives/unsafe-svg":"l1CHr","lit/directives/until":"827PO","lit/directives/when":"5IbUr","./lib/decorators":"6u2dB","./lib/methods":"i8LWY","./lib/consts":"03InB","./lib/types":"e92N9","./lib/event":"hsQiU","./lib/observable":"6ctPT","./lib/main":"18CK6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4antt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactiveElement = require("@lit/reactive-element");
var _litHtml = require("lit-html");
var _litElementJs = require("lit-element/lit-element.js");
parcelHelpers.exportAll(_litElementJs, exports);
var _isServerJs = require("lit-html/is-server.js");
parcelHelpers.exportAll(_isServerJs, exports);

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","lit-element/lit-element.js":"9YxkX","lit-html/is-server.js":"e2OXP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hypet":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>(0, _cssTagJs.CSSResult));
parcelHelpers.export(exports, "adoptStyles", ()=>(0, _cssTagJs.adoptStyles));
parcelHelpers.export(exports, "css", ()=>(0, _cssTagJs.css));
parcelHelpers.export(exports, "getCompatibleStyle", ()=>(0, _cssTagJs.getCompatibleStyle));
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>(0, _cssTagJs.supportsAdoptingStyleSheets));
parcelHelpers.export(exports, "unsafeCSS", ()=>(0, _cssTagJs.unsafeCSS));
parcelHelpers.export(exports, "ReactiveElement", ()=>d);
parcelHelpers.export(exports, "defaultConverter", ()=>n);
parcelHelpers.export(exports, "notEqual", ()=>a);
var _cssTagJs = require("./css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var s;
const e = window, r = e.trustedTypes, h = r ? r.emptyScript : "", o = e.reactiveElementPolyfillSupport, n = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? h : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s = t;
        switch(i){
            case Boolean:
                s = null !== t;
                break;
            case Number:
                s = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s = JSON.parse(t);
                } catch (t) {
                    s = null;
                }
        }
        return s;
    }
}, a = (t, i)=>i !== t && (i == i || t == t), l = {
    attribute: !0,
    type: String,
    converter: n,
    reflect: !1,
    hasChanged: a
};
class d extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
    }
    static addInitializer(t) {
        var i;
        this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s)=>{
            const e = this._$Ep(s, i);
            void 0 !== e && (this._$Ev.set(e, s), t.push(e));
        }), t;
    }
    static createProperty(t, i = l) {
        if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i);
            void 0 !== e && Object.defineProperty(this.prototype, t, e);
        }
    }
    static getPropertyDescriptor(t, i, s) {
        return {
            get () {
                return this[i];
            },
            set (e) {
                const r = this[t];
                this[i] = e, this.requestUpdate(t, r, s);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || l;
    }
    static finalize() {
        if (this.hasOwnProperty("finalized")) return !1;
        this.finalized = !0;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), void 0 !== t.h && (this.h = [
            ...t.h
        ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const t = this.properties, i = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t)
            ];
            for (const s of i)this.createProperty(s, t[s]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i) {
        const s = [];
        if (Array.isArray(i)) {
            const e = new Set(i.flat(1 / 0).reverse());
            for (const i of e)s.unshift((0, _cssTagJs.getCompatibleStyle)(i));
        } else void 0 !== i && s.push((0, _cssTagJs.getCompatibleStyle)(i));
        return s;
    }
    static _$Ep(t, i) {
        const s = i.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    u() {
        var t;
        this._$E_ = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t)=>t(this));
    }
    addController(t) {
        var i, s;
        (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
    removeController(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, _cssTagJs.adoptStyles)(s, this.constructor.elementStyles), s;
    }
    connectedCallback() {
        var t;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    attributeChangedCallback(t, i, s) {
        this._$AK(t, s);
    }
    _$EO(t, i, s = l) {
        var e;
        const r = this.constructor._$Ep(t, s);
        if (void 0 !== r && !0 === s.reflect) {
            const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : n).toAttribute(i, s.type);
            this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s;
        const e = this.constructor, r = e._$Ev.get(t);
        if (void 0 !== r && this._$El !== r) {
            const t = e.getPropertyOptions(r), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : n;
            this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s) {
        let e = !0;
        void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || a)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i)=>this[i] = t), this._$Ei = void 0);
        let i = !1;
        const s = this._$AL;
        try {
            i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
            }), this.update(s)) : this._$Ek();
        } catch (t) {
            throw i = !1, this._$Ek(), t;
        }
        i && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.forEach((t)=>{
            var i;
            return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        void 0 !== this._$EC && (this._$EC.forEach((t, i)=>this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
d.finalized = !0, d.elementProperties = new Map, d.elementStyles = [], d.shadowRootOptions = {
    mode: "open"
}, null == o || o({
    ReactiveElement: d
}), (null !== (s = e.reactiveElementVersions) && void 0 !== s ? s : e.reactiveElementVersions = []).push("1.6.0");

},{"./css-tag.js":"gkZsf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkZsf":[function(require,module,exports) {
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>o);
parcelHelpers.export(exports, "adoptStyles", ()=>S);
parcelHelpers.export(exports, "css", ()=>i);
parcelHelpers.export(exports, "getCompatibleStyle", ()=>c);
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>e);
parcelHelpers.export(exports, "unsafeCSS", ()=>r);
const t = window, e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s = Symbol(), n = new WeakMap;
class o {
    constructor(t, e, n){
        if (this._$cssResult$ = !0, n !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if (e && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && n.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const r = (t)=>new o("string" == typeof t ? t : t + "", void 0, s), i = (t, ...e)=>{
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[n + 1], t[0]);
    return new o(n, t, s);
}, S = (s, n)=>{
    e ? s.adoptedStyleSheets = n.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach((e)=>{
        const n = document.createElement("style"), o = t.litNonce;
        void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
}, c = e ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return r(e);
    })(t) : t;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1cmQt":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>L);
parcelHelpers.export(exports, "html", ()=>y);
parcelHelpers.export(exports, "noChange", ()=>x);
parcelHelpers.export(exports, "nothing", ()=>b);
parcelHelpers.export(exports, "render", ()=>Z);
parcelHelpers.export(exports, "svg", ()=>w);
var t;
const i = window, s = i.trustedTypes, e = s ? s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, o = `lit$${(Math.random() + "").slice(9)}$`, n = "?" + o, l = `<${n}>`, h = document, r = (t = "")=>h.createComment(t), d = (t)=>null === t || "object" != typeof t && "function" != typeof t, u = Array.isArray, c = (t)=>u(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, a = /-->/g, f = />/g, _ = RegExp(">|[ 	\n\f\r](?:([^\\s\"'>=/]+)([ 	\n\f\r]*=[ 	\n\f\r]*(?:[^ 	\n\f\r\"'`<>=]|(\"|')|))|$)", "g"), m = /'/g, p = /"/g, $ = /^(?:script|style|textarea|title)$/i, g = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), y = g(1), w = g(2), x = Symbol.for("lit-noChange"), b = Symbol.for("lit-nothing"), T = new WeakMap, A = h.createTreeWalker(h, 129, null, !1), E = (t, i)=>{
    const s = t.length - 1, n = [];
    let h, r = 2 === i ? "<svg>" : "", d = v;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let e, u, c = -1, g = 0;
        for(; g < s.length && (d.lastIndex = g, u = d.exec(s), null !== u);)g = d.lastIndex, d === v ? "!--" === u[1] ? d = a : void 0 !== u[1] ? d = f : void 0 !== u[2] ? ($.test(u[2]) && (h = RegExp("</" + u[2], "g")), d = _) : void 0 !== u[3] && (d = _) : d === _ ? ">" === u[0] ? (d = null != h ? h : v, c = -1) : void 0 === u[1] ? c = -2 : (c = d.lastIndex - u[2].length, e = u[1], d = void 0 === u[3] ? _ : '"' === u[3] ? p : m) : d === p || d === m ? d = _ : d === a || d === f ? d = v : (d = _, h = void 0);
        const y = d === _ && t[i + 1].startsWith("/>") ? " " : "";
        r += d === v ? s + l : c >= 0 ? (n.push(e), s.slice(0, c) + "$lit$" + s.slice(c) + o + y) : s + o + (-2 === c ? (n.push(void 0), i) : y);
    }
    const u = r + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [
        void 0 !== e ? e.createHTML(u) : u,
        n
    ];
};
class C {
    constructor({ strings: t , _$litType$: i  }, e){
        let l;
        this.parts = [];
        let h = 0, d = 0;
        const u = t.length - 1, c = this.parts, [v, a] = E(t, i);
        if (this.el = C.createElement(v, e), A.currentNode = this.el.content, 2 === i) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (l = A.nextNode()) && c.length < u;){
            if (1 === l.nodeType) {
                if (l.hasAttributes()) {
                    const t = [];
                    for (const i of l.getAttributeNames())if (i.endsWith("$lit$") || i.startsWith(o)) {
                        const s = a[d++];
                        if (t.push(i), void 0 !== s) {
                            const t = l.getAttribute(s.toLowerCase() + "$lit$").split(o), i = /([.?@])?(.*)/.exec(s);
                            c.push({
                                type: 1,
                                index: h,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? M : "?" === i[1] ? k : "@" === i[1] ? H : S
                            });
                        } else c.push({
                            type: 6,
                            index: h
                        });
                    }
                    for (const i of t)l.removeAttribute(i);
                }
                if ($.test(l.tagName)) {
                    const t = l.textContent.split(o), i = t.length - 1;
                    if (i > 0) {
                        l.textContent = s ? s.emptyScript : "";
                        for(let s = 0; s < i; s++)l.append(t[s], r()), A.nextNode(), c.push({
                            type: 2,
                            index: ++h
                        });
                        l.append(t[i], r());
                    }
                }
            } else if (8 === l.nodeType) {
                if (l.data === n) c.push({
                    type: 2,
                    index: h
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = l.data.indexOf(o, t + 1));)c.push({
                        type: 7,
                        index: h
                    }), t += o.length - 1;
                }
            }
            h++;
        }
    }
    static createElement(t, i) {
        const s = h.createElement("template");
        return s.innerHTML = t, s;
    }
}
function P(t, i, s = t, e) {
    var o, n, l, h;
    if (i === x) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const u = d(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = P(t, r._$AS(t, i.values), r, e)), i;
}
class V {
    constructor(t, i){
        this.u = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    v(t) {
        var i;
        const { el: { content: s  } , parts: e  } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : h).importNode(s, !0);
        A.currentNode = o;
        let n = A.nextNode(), l = 0, r = 0, d = e[0];
        for(; void 0 !== d;){
            if (l === d.index) {
                let i;
                2 === d.type ? i = new N(n, n.nextSibling, this, t) : 1 === d.type ? i = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (i = new I(n, this, t)), this.u.push(i), d = e[++r];
            }
            l !== (null == d ? void 0 : d.index) && (n = A.nextNode(), l++);
        }
        return o;
    }
    p(t) {
        let i = 0;
        for (const s of this.u)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class N {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cm = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cm;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = P(this, t, i), d(t) ? t === b || null == t || "" === t ? (this._$AH !== b && this._$AR(), this._$AH = b) : t !== this._$AH && t !== x && this.g(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : c(t) ? this.k(t) : this.g(t);
    }
    O(t, i = this._$AB) {
        return this._$AA.parentNode.insertBefore(t, i);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    g(t) {
        this._$AH !== b && d(this._$AH) ? this._$AA.nextSibling.data = t : this.T(h.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        var i;
        const { values: s , _$litType$: e  } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = C.createElement(e.h, this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.p(s);
        else {
            const t = new V(o, this), i = t.v(this.options);
            t.p(s), this.T(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = T.get(t.strings);
        return void 0 === i && T.set(t.strings, i = new C(t)), i;
    }
    k(t) {
        u(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new N(this.O(r()), this.O(r()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cm = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class S {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = b, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = b;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = P(this, t, i, 0), n = !d(t) || t !== this._$AH && t !== x, n && (this._$AH = t);
        else {
            const e = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = P(this, e[s + l], i, l), h === x && (h = this._$AH[l]), n || (n = !d(h) || h !== this._$AH[l]), h === b ? t = b : t !== b && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class M extends S {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === b ? void 0 : t;
    }
}
const R = s ? s.emptyScript : "";
class k extends S {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== b ? this.element.setAttribute(this.name, R) : this.element.removeAttribute(this.name);
    }
}
class H extends S {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = P(this, t, i, 0)) && void 0 !== s ? s : b) === x) return;
        const e = this._$AH, o = t === b && e !== b || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== b && (e === b || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class I {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        P(this, t);
    }
}
const L = {
    P: "$lit$",
    A: o,
    M: n,
    C: 1,
    L: E,
    R: V,
    D: c,
    V: P,
    I: N,
    H: S,
    N: k,
    U: H,
    B: M,
    F: I
}, z = i.litHtmlPolyfillSupport;
null == z || z(C, N), (null !== (t = i.litHtmlVersions) && void 0 !== t ? t : i.litHtmlVersions = []).push("2.6.0");
const Z = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new N(i.insertBefore(r(), t), t, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9YxkX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LitElement", ()=>s);
parcelHelpers.export(exports, "UpdatingElement", ()=>r);
parcelHelpers.export(exports, "_$LE", ()=>h);
var _reactiveElement = require("@lit/reactive-element");
parcelHelpers.exportAll(_reactiveElement, exports);
var _litHtml = require("lit-html");
parcelHelpers.exportAll(_litHtml, exports);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var l, o;
const r = (0, _reactiveElement.ReactiveElement);
class s extends (0, _reactiveElement.ReactiveElement) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, _litHtml.render)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
        return 0, _litHtml.noChange;
    }
}
s.finalized = !0, s._$litElement$ = !0, null === (l = globalThis.litElementHydrateSupport) || void 0 === l || l.call(globalThis, {
    LitElement: s
});
const n = globalThis.litElementPolyfillSupport;
null == n || n({
    LitElement: s
});
const h = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(null !== (o = globalThis.litElementVersions) && void 0 !== o ? o : globalThis.litElementVersions = []).push("3.2.2");

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e2OXP":[function(require,module,exports) {
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isServer", ()=>o);
const o = !1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCPKi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _customElementJs = require("@lit/reactive-element/decorators/custom-element.js");
parcelHelpers.exportAll(_customElementJs, exports);
var _propertyJs = require("@lit/reactive-element/decorators/property.js");
parcelHelpers.exportAll(_propertyJs, exports);
var _stateJs = require("@lit/reactive-element/decorators/state.js");
parcelHelpers.exportAll(_stateJs, exports);
var _eventOptionsJs = require("@lit/reactive-element/decorators/event-options.js");
parcelHelpers.exportAll(_eventOptionsJs, exports);
var _queryJs = require("@lit/reactive-element/decorators/query.js");
parcelHelpers.exportAll(_queryJs, exports);
var _queryAllJs = require("@lit/reactive-element/decorators/query-all.js");
parcelHelpers.exportAll(_queryAllJs, exports);
var _queryAsyncJs = require("@lit/reactive-element/decorators/query-async.js");
parcelHelpers.exportAll(_queryAsyncJs, exports);
var _queryAssignedElementsJs = require("@lit/reactive-element/decorators/query-assigned-elements.js");
parcelHelpers.exportAll(_queryAssignedElementsJs, exports);
var _queryAssignedNodesJs = require("@lit/reactive-element/decorators/query-assigned-nodes.js");
parcelHelpers.exportAll(_queryAssignedNodesJs, exports);

},{"@lit/reactive-element/decorators/custom-element.js":"cMf50","@lit/reactive-element/decorators/property.js":"ipYYa","@lit/reactive-element/decorators/state.js":"goyf7","@lit/reactive-element/decorators/event-options.js":"8b5ex","@lit/reactive-element/decorators/query.js":"kzuRy","@lit/reactive-element/decorators/query-all.js":"krNkJ","@lit/reactive-element/decorators/query-async.js":"a6gRJ","@lit/reactive-element/decorators/query-assigned-elements.js":"kKpwU","@lit/reactive-element/decorators/query-assigned-nodes.js":"2F824","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMf50":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "customElement", ()=>e);
const e = (e)=>(n)=>"function" == typeof n ? ((e, n)=>(customElements.define(e, n), n))(e, n) : ((e, n)=>{
            const { kind: t , elements: s  } = n;
            return {
                kind: t,
                elements: s,
                finisher (n) {
                    customElements.define(e, n);
                }
            };
        })(e, n);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ipYYa":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "property", ()=>e);
const i = (i, e)=>"method" === e.kind && e.descriptor && !("value" in e.descriptor) ? {
        ...e,
        finisher (n) {
            n.createProperty(e.key, i);
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: e.key,
        initializer () {
            "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
        },
        finisher (n) {
            n.createProperty(e.key, i);
        }
    };
function e(e) {
    return (n, t)=>void 0 !== t ? ((i, e, n)=>{
            e.constructor.createProperty(n, i);
        })(e, n, t) : i(e, n);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"goyf7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>t);
var _propertyJs = require("./property.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function t(t) {
    return (0, _propertyJs.property)({
        ...t,
        state: !0
    });
}

},{"./property.js":"ipYYa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8b5ex":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventOptions", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e) {
    return (0, _baseJs.decorateProperty)({
        finisher: (r, t)=>{
            Object.assign(r.prototype[t], e);
        }
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d0R9Y":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decorateProperty", ()=>o);
parcelHelpers.export(exports, "legacyPrototypeMethod", ()=>e);
parcelHelpers.export(exports, "standardPrototypeMethod", ()=>t);
const e = (e, t, o)=>{
    Object.defineProperty(t, o, e);
}, t = (e, t)=>({
        kind: "method",
        placement: "prototype",
        key: t.key,
        descriptor: e
    }), o = ({ finisher: e , descriptor: t  })=>(o, n)=>{
        var r;
        if (void 0 === n) {
            const n = null !== (r = o.originalKey) && void 0 !== r ? r : o.key, i = null != t ? {
                kind: "method",
                placement: "prototype",
                key: n,
                descriptor: t(o.key)
            } : {
                ...o,
                key: n
            };
            return null != e && (i.finisher = function(t) {
                e(t, n);
            }), i;
        }
        {
            const r = o.constructor;
            void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(r, n);
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kzuRy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "query", ()=>i);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function i(i, n) {
    return (0, _baseJs.decorateProperty)({
        descriptor: (o)=>{
            const t = {
                get () {
                    var o, n;
                    return null !== (n = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== n ? n : null;
                },
                enumerable: !0,
                configurable: !0
            };
            if (n) {
                const n = "symbol" == typeof o ? Symbol() : "__" + o;
                t.get = function() {
                    var o, t;
                    return void 0 === this[n] && (this[n] = null !== (t = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== t ? t : null), this[n];
                };
            }
            return t;
        }
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krNkJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAll", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e) {
    return (0, _baseJs.decorateProperty)({
        descriptor: (r)=>({
                get () {
                    var r, o;
                    return null !== (o = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelectorAll(e)) && void 0 !== o ? o : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a6gRJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAsync", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e) {
    return (0, _baseJs.decorateProperty)({
        descriptor: (r)=>({
                async get () {
                    var r;
                    return await this.updateComplete, null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e);
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kKpwU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAssignedElements", ()=>l);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var n;
const e = null != (null === (n = window.HTMLSlotElement) || void 0 === n ? void 0 : n.prototype.assignedElements) ? (o, n)=>o.assignedElements(n) : (o, n)=>o.assignedNodes(n).filter((o)=>o.nodeType === Node.ELEMENT_NODE);
function l(n) {
    const { slot: l , selector: t  } = null != n ? n : {};
    return (0, _baseJs.decorateProperty)({
        descriptor: (o)=>({
                get () {
                    var o;
                    const r = "slot" + (l ? `[name=${l}]` : ":not([name])"), i = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(r), s = null != i ? e(i, n) : [];
                    return t ? s.filter((o)=>o.matches(t)) : s;
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2F824":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAssignedNodes", ()=>o);
var _baseJs = require("./base.js");
var _queryAssignedElementsJs = require("./query-assigned-elements.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function o(o, n, r) {
    let l, s = o;
    return "object" == typeof o ? (s = o.slot, l = o) : l = {
        flatten: n
    }, r ? (0, _queryAssignedElementsJs.queryAssignedElements)({
        slot: s,
        flatten: n,
        selector: r
    }) : (0, _baseJs.decorateProperty)({
        descriptor: (e)=>({
                get () {
                    var e, t;
                    const o = "slot" + (s ? `[name=${s}]` : ":not([name])"), n = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(o);
                    return null !== (t = null == n ? void 0 : n.assignedNodes(l)) && void 0 !== t ? t : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","./query-assigned-elements.js":"kKpwU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g5YyU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _asyncAppendJs = require("lit-html/directives/async-append.js");
parcelHelpers.exportAll(_asyncAppendJs, exports);

},{"lit-html/directives/async-append.js":"6V5BU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6V5BU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "asyncAppend", ()=>c);
var _directiveJs = require("../directive.js");
var _asyncReplaceJs = require("./async-replace.js");
var _directiveHelpersJs = require("../directive-helpers.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const c = (0, _directiveJs.directive)(class extends (0, _asyncReplaceJs.AsyncReplaceDirective) {
    constructor(r){
        if (super(r), r.type !== (0, _directiveJs.PartType).CHILD) throw Error("asyncAppend can only be used in child expressions");
    }
    update(r, e) {
        return this._$Ctt = r, super.update(r, e);
    }
    commitValue(r, e) {
        0 === e && (0, _directiveHelpersJs.clearPart)(this._$Ctt);
        const s = (0, _directiveHelpersJs.insertPart)(this._$Ctt);
        (0, _directiveHelpersJs.setChildPartValue)(s, r);
    }
});

},{"../directive.js":"9lbyV","./async-replace.js":"6Our2","../directive-helpers.js":"cJsxz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9lbyV":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Directive", ()=>i);
parcelHelpers.export(exports, "PartType", ()=>t);
parcelHelpers.export(exports, "directive", ()=>e);
const t = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, e = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class i {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Our2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsyncReplaceDirective", ()=>o);
parcelHelpers.export(exports, "asyncReplace", ()=>h);
var _litHtmlJs = require("../lit-html.js");
var _asyncDirectiveJs = require("../async-directive.js");
var _privateAsyncHelpersJs = require("./private-async-helpers.js");
var _directiveJs = require("../directive.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class o extends (0, _asyncDirectiveJs.AsyncDirective) {
    constructor(){
        super(...arguments), this._$CK = new (0, _privateAsyncHelpersJs.PseudoWeakRef)(this), this._$CX = new (0, _privateAsyncHelpersJs.Pauser);
    }
    render(i, s) {
        return 0, _litHtmlJs.noChange;
    }
    update(i, [s, r]) {
        if (this.isConnected || this.disconnected(), s === this._$CJ) return;
        this._$CJ = s;
        let n = 0;
        const { _$CK: o , _$CX: h  } = this;
        return (0, _privateAsyncHelpersJs.forAwaitOf)(s, async (t)=>{
            for(; h.get();)await h.get();
            const i = o.deref();
            if (void 0 !== i) {
                if (i._$CJ !== s) return !1;
                void 0 !== r && (t = r(t, n)), i.commitValue(t, n), n++;
            }
            return !0;
        }), _litHtmlJs.noChange;
    }
    commitValue(t, i) {
        this.setValue(t);
    }
    disconnected() {
        this._$CK.disconnect(), this._$CX.pause();
    }
    reconnected() {
        this._$CK.reconnect(this), this._$CX.resume();
    }
}
const h = (0, _directiveJs.directive)(o);

},{"../lit-html.js":"1cmQt","../async-directive.js":"4f1Uv","./private-async-helpers.js":"drd9e","../directive.js":"9lbyV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4f1Uv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Directive", ()=>(0, _directiveJs.Directive));
parcelHelpers.export(exports, "PartType", ()=>(0, _directiveJs.PartType));
parcelHelpers.export(exports, "directive", ()=>(0, _directiveJs.directive));
parcelHelpers.export(exports, "AsyncDirective", ()=>c);
var _directiveHelpersJs = require("./directive-helpers.js");
var _directiveJs = require("./directive.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const s = (i, t)=>{
    var e, o;
    const r = i._$AN;
    if (void 0 === r) return !1;
    for (const i of r)null === (o = (e = i)._$AO) || void 0 === o || o.call(e, t, !1), s(i, t);
    return !0;
}, o = (i)=>{
    let t, e;
    do {
        if (void 0 === (t = i._$AM)) break;
        e = t._$AN, e.delete(i), i = t;
    }while (0 === (null == e ? void 0 : e.size));
}, r = (i)=>{
    for(let t; t = i._$AM; i = t){
        let e = t._$AN;
        if (void 0 === e) t._$AN = e = new Set;
        else if (e.has(i)) break;
        e.add(i), l(t);
    }
};
function n(i) {
    void 0 !== this._$AN ? (o(this), this._$AM = i, r(this)) : this._$AM = i;
}
function h(i, t = !1, e = 0) {
    const r = this._$AH, n = this._$AN;
    if (void 0 !== n && 0 !== n.size) {
        if (t) {
            if (Array.isArray(r)) for(let i = e; i < r.length; i++)s(r[i], !1), o(r[i]);
            else null != r && (s(r, !1), o(r));
        } else s(this, i);
    }
}
const l = (i)=>{
    var t, s, o, r;
    i.type == (0, _directiveJs.PartType).CHILD && (null !== (t = (o = i)._$AP) && void 0 !== t || (o._$AP = h), null !== (s = (r = i)._$AQ) && void 0 !== s || (r._$AQ = n));
};
class c extends (0, _directiveJs.Directive) {
    constructor(){
        super(...arguments), this._$AN = void 0;
    }
    _$AT(i, t, e) {
        super._$AT(i, t, e), r(this), this.isConnected = i._$AU;
    }
    _$AO(i, t = !0) {
        var e, r;
        i !== this.isConnected && (this.isConnected = i, i ? null === (e = this.reconnected) || void 0 === e || e.call(this) : null === (r = this.disconnected) || void 0 === r || r.call(this)), t && (s(this, i), o(this));
    }
    setValue(t) {
        if ((0, _directiveHelpersJs.isSingleExpression)(this._$Ct)) this._$Ct._$AI(t, this);
        else {
            const i = [
                ...this._$Ct._$AH
            ];
            i[this._$Ci] = t, this._$Ct._$AI(i, this, 0);
        }
    }
    disconnected() {}
    reconnected() {}
}

},{"./directive-helpers.js":"cJsxz","./directive.js":"9lbyV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cJsxz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TemplateResultType", ()=>i);
parcelHelpers.export(exports, "clearPart", ()=>a);
parcelHelpers.export(exports, "getCommittedValue", ()=>m);
parcelHelpers.export(exports, "getDirectiveClass", ()=>v);
parcelHelpers.export(exports, "insertPart", ()=>r);
parcelHelpers.export(exports, "isDirectiveResult", ()=>d);
parcelHelpers.export(exports, "isPrimitive", ()=>t);
parcelHelpers.export(exports, "isSingleExpression", ()=>e);
parcelHelpers.export(exports, "isTemplateResult", ()=>n);
parcelHelpers.export(exports, "removePart", ()=>p);
parcelHelpers.export(exports, "setChildPartValue", ()=>u);
parcelHelpers.export(exports, "setCommittedValue", ()=>s);
var _litHtmlJs = require("./lit-html.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { I: l  } = (0, _litHtmlJs._$LH), t = (o)=>null === o || "object" != typeof o && "function" != typeof o, i = {
    HTML: 1,
    SVG: 2
}, n = (o, l)=>void 0 === l ? void 0 !== (null == o ? void 0 : o._$litType$) : (null == o ? void 0 : o._$litType$) === l, d = (o)=>void 0 !== (null == o ? void 0 : o._$litDirective$), v = (o)=>null == o ? void 0 : o._$litDirective$, e = (o)=>void 0 === o.strings, c = ()=>document.createComment(""), r = (o, t, i)=>{
    var n;
    const d = o._$AA.parentNode, v = void 0 === t ? o._$AB : t._$AA;
    if (void 0 === i) {
        const t = d.insertBefore(c(), v), n = d.insertBefore(c(), v);
        i = new l(t, n, o, o.options);
    } else {
        const l = i._$AB.nextSibling, t = i._$AM, e = t !== o;
        if (e) {
            let l;
            null === (n = i._$AQ) || void 0 === n || n.call(i, o), i._$AM = o, void 0 !== i._$AP && (l = o._$AU) !== t._$AU && i._$AP(l);
        }
        if (l !== v || e) {
            let o = i._$AA;
            for(; o !== l;){
                const l = o.nextSibling;
                d.insertBefore(o, v), o = l;
            }
        }
    }
    return i;
}, u = (o, l, t = o)=>(o._$AI(l, t), o), f = {}, s = (o, l = f)=>o._$AH = l, m = (o)=>o._$AH, p = (o)=>{
    var l;
    null === (l = o._$AP) || void 0 === l || l.call(o, !1, !0);
    let t = o._$AA;
    const i = o._$AB.nextSibling;
    for(; t !== i;){
        const o = t.nextSibling;
        t.remove(), t = o;
    }
}, a = (o)=>{
    o._$AR();
};

},{"./lit-html.js":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"drd9e":[function(require,module,exports) {
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Pauser", ()=>i);
parcelHelpers.export(exports, "PseudoWeakRef", ()=>s);
parcelHelpers.export(exports, "forAwaitOf", ()=>t);
const t = async (t, s)=>{
    for await (const i of t)if (!1 === await s(i)) return;
};
class s {
    constructor(t){
        this.Y = t;
    }
    disconnect() {
        this.Y = void 0;
    }
    reconnect(t) {
        this.Y = t;
    }
    deref() {
        return this.Y;
    }
}
class i {
    constructor(){
        this.Z = void 0, this.q = void 0;
    }
    get() {
        return this.Z;
    }
    pause() {
        var t;
        null !== (t = this.Z) && void 0 !== t || (this.Z = new Promise((t)=>this.q = t));
    }
    resume() {
        var t;
        null === (t = this.q) || void 0 === t || t.call(this), this.Z = this.q = void 0;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fco8U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _asyncReplaceJs = require("lit-html/directives/async-replace.js");
parcelHelpers.exportAll(_asyncReplaceJs, exports);

},{"lit-html/directives/async-replace.js":"6Our2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Xs5GM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cacheJs = require("lit-html/directives/cache.js");
parcelHelpers.exportAll(_cacheJs, exports);

},{"lit-html/directives/cache.js":"jdD8b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jdD8b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cache", ()=>d);
var _litHtmlJs = require("../lit-html.js");
var _directiveJs = require("../directive.js");
var _directiveHelpersJs = require("../directive-helpers.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const d = (0, _directiveJs.directive)(class extends (0, _directiveJs.Directive) {
    constructor(t){
        super(t), this.et = new WeakMap;
    }
    render(t) {
        return [
            t
        ];
    }
    update(s, [e]) {
        if ((0, _directiveHelpersJs.isTemplateResult)(this.it) && (!(0, _directiveHelpersJs.isTemplateResult)(e) || this.it.strings !== e.strings)) {
            const e = (0, _directiveHelpersJs.getCommittedValue)(s).pop();
            let o = this.et.get(this.it.strings);
            if (void 0 === o) {
                const s = document.createDocumentFragment();
                o = (0, _litHtmlJs.render)((0, _litHtmlJs.nothing), s), o.setConnected(!1), this.et.set(this.it.strings, o);
            }
            (0, _directiveHelpersJs.setCommittedValue)(o, [
                e
            ]), (0, _directiveHelpersJs.insertPart)(o, void 0, e);
        }
        if ((0, _directiveHelpersJs.isTemplateResult)(e)) {
            if (!(0, _directiveHelpersJs.isTemplateResult)(this.it) || this.it.strings !== e.strings) {
                const t = this.et.get(e.strings);
                if (void 0 !== t) {
                    const i = (0, _directiveHelpersJs.getCommittedValue)(t).pop();
                    (0, _directiveHelpersJs.clearPart)(s), (0, _directiveHelpersJs.insertPart)(s, void 0, i), (0, _directiveHelpersJs.setCommittedValue)(s, [
                        i
                    ]);
                }
            }
            this.it = e;
        } else this.it = void 0;
        return this.render(e);
    }
});

},{"../lit-html.js":"1cmQt","../directive.js":"9lbyV","../directive-helpers.js":"cJsxz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bwg02":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _chooseJs = require("lit-html/directives/choose.js");
parcelHelpers.exportAll(_chooseJs, exports);

},{"lit-html/directives/choose.js":"c1m9j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c1m9j":[function(require,module,exports) {
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "choose", ()=>o);
const o = (o, r, n)=>{
    for (const n of r)if (n[0] === o) return (0, n[1])();
    return null == n ? void 0 : n();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jiVKL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classMapJs = require("lit-html/directives/class-map.js");
parcelHelpers.exportAll(_classMapJs, exports);

},{"lit-html/directives/class-map.js":"1IFol","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1IFol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "classMap", ()=>o);
var _litHtmlJs = require("../lit-html.js");
var _directiveJs = require("../directive.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const o = (0, _directiveJs.directive)(class extends (0, _directiveJs.Directive) {
    constructor(t){
        var i;
        if (super(t), t.type !== (0, _directiveJs.PartType).ATTRIBUTE || "class" !== t.name || (null === (i = t.strings) || void 0 === i ? void 0 : i.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return " " + Object.keys(t).filter((i)=>t[i]).join(" ") + " ";
    }
    update(i, [s]) {
        var r, o;
        if (void 0 === this.nt) {
            this.nt = new Set, void 0 !== i.strings && (this.st = new Set(i.strings.join(" ").split(/\s/).filter((t)=>"" !== t)));
            for(const t in s)s[t] && !(null === (r = this.st) || void 0 === r ? void 0 : r.has(t)) && this.nt.add(t);
            return this.render(s);
        }
        const e = i.element.classList;
        this.nt.forEach((t)=>{
            t in s || (e.remove(t), this.nt.delete(t));
        });
        for(const t in s){
            const i = !!s[t];
            i === this.nt.has(t) || (null === (o = this.st) || void 0 === o ? void 0 : o.has(t)) || (i ? (e.add(t), this.nt.add(t)) : (e.remove(t), this.nt.delete(t)));
        }
        return 0, _litHtmlJs.noChange;
    }
});

},{"../lit-html.js":"1cmQt","../directive.js":"9lbyV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kI5BX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _guardJs = require("lit-html/directives/guard.js");
parcelHelpers.exportAll(_guardJs, exports);

},{"lit-html/directives/guard.js":"9R7vu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9R7vu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "guard", ()=>i);
var _litHtmlJs = require("../lit-html.js");
var _directiveJs = require("../directive.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const e = {}, i = (0, _directiveJs.directive)(class extends (0, _directiveJs.Directive) {
    constructor(){
        super(...arguments), this.ot = e;
    }
    render(r, t) {
        return t();
    }
    update(t, [s, e]) {
        if (Array.isArray(s)) {
            if (Array.isArray(this.ot) && this.ot.length === s.length && s.every((r, t)=>r === this.ot[t])) return 0, _litHtmlJs.noChange;
        } else if (this.ot === s) return 0, _litHtmlJs.noChange;
        return this.ot = Array.isArray(s) ? Array.from(s) : s, this.render(s, e);
    }
});

},{"../lit-html.js":"1cmQt","../directive.js":"9lbyV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"77RTn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ifDefinedJs = require("lit-html/directives/if-defined.js");
parcelHelpers.exportAll(_ifDefinedJs, exports);

},{"lit-html/directives/if-defined.js":"fP4k4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fP4k4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ifDefined", ()=>l);
var _litHtmlJs = require("../lit-html.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const l = (l)=>null != l ? l : (0, _litHtmlJs.nothing);

},{"../lit-html.js":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8BCCQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _joinJs = require("lit-html/directives/join.js");
parcelHelpers.exportAll(_joinJs, exports);

},{"lit-html/directives/join.js":"bNT19","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bNT19":[function(require,module,exports) {
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "join", ()=>o);
function* o(o, t) {
    const f = "function" == typeof t;
    if (void 0 !== o) {
        let i = -1;
        for (const n of o)i > -1 && (yield f ? t(i) : t), i++, yield n;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8kLRs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _keyedJs = require("lit-html/directives/keyed.js");
parcelHelpers.exportAll(_keyedJs, exports);

},{"lit-html/directives/keyed.js":"EwbtE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"EwbtE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "keyed", ()=>i);
var _litHtmlJs = require("../lit-html.js");
var _directiveJs = require("../directive.js");
var _directiveHelpersJs = require("../directive-helpers.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const i = (0, _directiveJs.directive)(class extends (0, _directiveJs.Directive) {
    constructor(){
        super(...arguments), this.key = (0, _litHtmlJs.nothing);
    }
    render(r, t) {
        return this.key = r, t;
    }
    update(r, [t, e]) {
        return t !== this.key && ((0, _directiveHelpersJs.setCommittedValue)(r), this.key = t), e;
    }
});

},{"../lit-html.js":"1cmQt","../directive.js":"9lbyV","../directive-helpers.js":"cJsxz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a4wmv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _liveJs = require("lit-html/directives/live.js");
parcelHelpers.exportAll(_liveJs, exports);

},{"lit-html/directives/live.js":"hilXU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hilXU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "live", ()=>l);
var _litHtmlJs = require("../lit-html.js");
var _directiveJs = require("../directive.js");
var _directiveHelpersJs = require("../directive-helpers.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const l = (0, _directiveJs.directive)(class extends (0, _directiveJs.Directive) {
    constructor(r){
        if (super(r), r.type !== (0, _directiveJs.PartType).PROPERTY && r.type !== (0, _directiveJs.PartType).ATTRIBUTE && r.type !== (0, _directiveJs.PartType).BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
        if (!(0, _directiveHelpersJs.isSingleExpression)(r)) throw Error("`live` bindings can only contain a single expression");
    }
    render(r) {
        return r;
    }
    update(i, [t]) {
        if (t === (0, _litHtmlJs.noChange) || t === (0, _litHtmlJs.nothing)) return t;
        const o = i.element, l = i.name;
        if (i.type === (0, _directiveJs.PartType).PROPERTY) {
            if (t === o[l]) return 0, _litHtmlJs.noChange;
        } else if (i.type === (0, _directiveJs.PartType).BOOLEAN_ATTRIBUTE) {
            if (!!t === o.hasAttribute(l)) return 0, _litHtmlJs.noChange;
        } else if (i.type === (0, _directiveJs.PartType).ATTRIBUTE && o.getAttribute(l) === t + "") return 0, _litHtmlJs.noChange;
        return (0, _directiveHelpersJs.setCommittedValue)(i), t;
    }
});

},{"../lit-html.js":"1cmQt","../directive.js":"9lbyV","../directive-helpers.js":"cJsxz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ejxgA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mapJs = require("lit-html/directives/map.js");
parcelHelpers.exportAll(_mapJs, exports);

},{"lit-html/directives/map.js":"7r7rb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7r7rb":[function(require,module,exports) {
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "map", ()=>o);
function* o(o, f) {
    if (void 0 !== o) {
        let i = 0;
        for (const t of o)yield f(t, i++);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bHK0i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rangeJs = require("lit-html/directives/range.js");
parcelHelpers.exportAll(_rangeJs, exports);

},{"lit-html/directives/range.js":"l9ILB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l9ILB":[function(require,module,exports) {
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "range", ()=>o);
function* o(o, l, n = 1) {
    const t = void 0 === l ? 0 : o;
    null != l || (l = o);
    for(let o = t; n > 0 ? o < l : l < o; o += n)yield o;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eKwmp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _refJs = require("lit-html/directives/ref.js");
parcelHelpers.exportAll(_refJs, exports);

},{"lit-html/directives/ref.js":"dVEkM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dVEkM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRef", ()=>e);
parcelHelpers.export(exports, "ref", ()=>n);
var _litHtmlJs = require("../lit-html.js");
var _asyncDirectiveJs = require("../async-directive.js");
var _directiveJs = require("../directive.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const e = ()=>new o;
class o {
}
const h = new WeakMap, n = (0, _directiveJs.directive)(class extends (0, _asyncDirectiveJs.AsyncDirective) {
    render(t) {
        return 0, _litHtmlJs.nothing;
    }
    update(t, [s]) {
        var e;
        const o = s !== this.Y;
        return o && void 0 !== this.Y && this.rt(void 0), (o || this.lt !== this.ct) && (this.Y = s, this.dt = null === (e = t.options) || void 0 === e ? void 0 : e.host, this.rt(this.ct = t.element)), _litHtmlJs.nothing;
    }
    rt(i) {
        var t;
        if ("function" == typeof this.Y) {
            const s = null !== (t = this.dt) && void 0 !== t ? t : globalThis;
            let e = h.get(s);
            void 0 === e && (e = new WeakMap, h.set(s, e)), void 0 !== e.get(this.Y) && this.Y.call(this.dt, void 0), e.set(this.Y, i), void 0 !== i && this.Y.call(this.dt, i);
        } else this.Y.value = i;
    }
    get lt() {
        var i, t, s;
        return "function" == typeof this.Y ? null === (t = h.get(null !== (i = this.dt) && void 0 !== i ? i : globalThis)) || void 0 === t ? void 0 : t.get(this.Y) : null === (s = this.Y) || void 0 === s ? void 0 : s.value;
    }
    disconnected() {
        this.lt === this.ct && this.rt(void 0);
    }
    reconnected() {
        this.rt(this.ct);
    }
});

},{"../lit-html.js":"1cmQt","../async-directive.js":"4f1Uv","../directive.js":"9lbyV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"71kf4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _repeatJs = require("lit-html/directives/repeat.js");
parcelHelpers.exportAll(_repeatJs, exports);

},{"lit-html/directives/repeat.js":"8jPEM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8jPEM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "repeat", ()=>c);
var _litHtmlJs = require("../lit-html.js");
var _directiveJs = require("../directive.js");
var _directiveHelpersJs = require("../directive-helpers.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const u = (e, s, t)=>{
    const r = new Map;
    for(let l = s; l <= t; l++)r.set(e[l], l);
    return r;
}, c = (0, _directiveJs.directive)(class extends (0, _directiveJs.Directive) {
    constructor(e){
        if (super(e), e.type !== (0, _directiveJs.PartType).CHILD) throw Error("repeat() can only be used in text expressions");
    }
    ht(e, s, t) {
        let r;
        void 0 === t ? t = s : void 0 !== s && (r = s);
        const l = [], o = [];
        let i = 0;
        for (const s of e)l[i] = r ? r(s, i) : i, o[i] = t(s, i), i++;
        return {
            values: o,
            keys: l
        };
    }
    render(e, s, t) {
        return this.ht(e, s, t).values;
    }
    update(s, [t, r, c]) {
        var d;
        const a = (0, _directiveHelpersJs.getCommittedValue)(s), { values: p , keys: v  } = this.ht(t, r, c);
        if (!Array.isArray(a)) return this.ut = v, p;
        const h = null !== (d = this.ut) && void 0 !== d ? d : this.ut = [], m = [];
        let y, x, j = 0, k = a.length - 1, w = 0, A = p.length - 1;
        for(; j <= k && w <= A;)if (null === a[j]) j++;
        else if (null === a[k]) k--;
        else if (h[j] === v[w]) m[w] = (0, _directiveHelpersJs.setChildPartValue)(a[j], p[w]), j++, w++;
        else if (h[k] === v[A]) m[A] = (0, _directiveHelpersJs.setChildPartValue)(a[k], p[A]), k--, A--;
        else if (h[j] === v[A]) m[A] = (0, _directiveHelpersJs.setChildPartValue)(a[j], p[A]), (0, _directiveHelpersJs.insertPart)(s, m[A + 1], a[j]), j++, A--;
        else if (h[k] === v[w]) m[w] = (0, _directiveHelpersJs.setChildPartValue)(a[k], p[w]), (0, _directiveHelpersJs.insertPart)(s, a[j], a[k]), k--, w++;
        else if (void 0 === y && (y = u(v, w, A), x = u(h, j, k)), y.has(h[j])) {
            if (y.has(h[k])) {
                const e = x.get(v[w]), t = void 0 !== e ? a[e] : null;
                if (null === t) {
                    const e = (0, _directiveHelpersJs.insertPart)(s, a[j]);
                    (0, _directiveHelpersJs.setChildPartValue)(e, p[w]), m[w] = e;
                } else m[w] = (0, _directiveHelpersJs.setChildPartValue)(t, p[w]), (0, _directiveHelpersJs.insertPart)(s, a[j], t), a[e] = null;
                w++;
            } else (0, _directiveHelpersJs.removePart)(a[k]), k--;
        } else (0, _directiveHelpersJs.removePart)(a[j]), j++;
        for(; w <= A;){
            const e = (0, _directiveHelpersJs.insertPart)(s, m[A + 1]);
            (0, _directiveHelpersJs.setChildPartValue)(e, p[w]), m[w++] = e;
        }
        for(; j <= k;){
            const e = a[j++];
            null !== e && (0, _directiveHelpersJs.removePart)(e);
        }
        return this.ut = v, (0, _directiveHelpersJs.setCommittedValue)(s, m), _litHtmlJs.noChange;
    }
});

},{"../lit-html.js":"1cmQt","../directive.js":"9lbyV","../directive-helpers.js":"cJsxz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4GQsu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _styleMapJs = require("lit-html/directives/style-map.js");
parcelHelpers.exportAll(_styleMapJs, exports);

},{"lit-html/directives/style-map.js":"kqcVU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqcVU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "styleMap", ()=>i);
var _litHtmlJs = require("../lit-html.js");
var _directiveJs = require("../directive.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const i = (0, _directiveJs.directive)(class extends (0, _directiveJs.Directive) {
    constructor(t){
        var e;
        if (super(t), t.type !== (0, _directiveJs.PartType).ATTRIBUTE || "style" !== t.name || (null === (e = t.strings) || void 0 === e ? void 0 : e.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return Object.keys(t).reduce((e, r)=>{
            const s = t[r];
            return null == s ? e : e + `${r = r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
        }, "");
    }
    update(e, [r]) {
        const { style: s  } = e.element;
        if (void 0 === this.vt) {
            this.vt = new Set;
            for(const t in r)this.vt.add(t);
            return this.render(r);
        }
        this.vt.forEach((t)=>{
            null == r[t] && (this.vt.delete(t), t.includes("-") ? s.removeProperty(t) : s[t] = "");
        });
        for(const t in r){
            const e = r[t];
            null != e && (this.vt.add(t), t.includes("-") ? s.setProperty(t, e) : s[t] = e);
        }
        return 0, _litHtmlJs.noChange;
    }
});

},{"../lit-html.js":"1cmQt","../directive.js":"9lbyV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"875un":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateContentJs = require("lit-html/directives/template-content.js");
parcelHelpers.exportAll(_templateContentJs, exports);

},{"lit-html/directives/template-content.js":"90FHz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"90FHz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateContent", ()=>o);
var _litHtmlJs = require("../lit-html.js");
var _directiveJs = require("../directive.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const o = (0, _directiveJs.directive)(class extends (0, _directiveJs.Directive) {
    constructor(t){
        if (super(t), t.type !== (0, _directiveJs.PartType).CHILD) throw Error("templateContent can only be used in child bindings");
    }
    render(r) {
        return this.ft === r ? (0, _litHtmlJs.noChange) : (this.ft = r, document.importNode(r.content, !0));
    }
});

},{"../lit-html.js":"1cmQt","../directive.js":"9lbyV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5KJj0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _unsafeHtmlJs = require("lit-html/directives/unsafe-html.js");
parcelHelpers.exportAll(_unsafeHtmlJs, exports);

},{"lit-html/directives/unsafe-html.js":"91pKz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"91pKz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UnsafeHTMLDirective", ()=>e);
parcelHelpers.export(exports, "unsafeHTML", ()=>o);
var _litHtmlJs = require("../lit-html.js");
var _directiveJs = require("../directive.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class e extends (0, _directiveJs.Directive) {
    constructor(i){
        if (super(i), this.it = (0, _litHtmlJs.nothing), i.type !== (0, _directiveJs.PartType).CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r) {
        if (r === (0, _litHtmlJs.nothing) || null == r) return this._t = void 0, this.it = r;
        if (r === (0, _litHtmlJs.noChange)) return r;
        if ("string" != typeof r) throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (r === this.it) return this._t;
        this.it = r;
        const s = [
            r
        ];
        return s.raw = s, this._t = {
            _$litType$: this.constructor.resultType,
            strings: s,
            values: []
        };
    }
}
e.directiveName = "unsafeHTML", e.resultType = 1;
const o = (0, _directiveJs.directive)(e);

},{"../lit-html.js":"1cmQt","../directive.js":"9lbyV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l1CHr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _unsafeSvgJs = require("lit-html/directives/unsafe-svg.js");
parcelHelpers.exportAll(_unsafeSvgJs, exports);

},{"lit-html/directives/unsafe-svg.js":"68CGf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"68CGf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeSVG", ()=>o);
var _directiveJs = require("../directive.js");
var _unsafeHtmlJs = require("./unsafe-html.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class t extends (0, _unsafeHtmlJs.UnsafeHTMLDirective) {
}
t.directiveName = "unsafeSVG", t.resultType = 2;
const o = (0, _directiveJs.directive)(t);

},{"../directive.js":"9lbyV","./unsafe-html.js":"91pKz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"827PO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _untilJs = require("lit-html/directives/until.js");
parcelHelpers.exportAll(_untilJs, exports);

},{"lit-html/directives/until.js":"5S3cD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5S3cD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UntilDirective", ()=>h);
parcelHelpers.export(exports, "until", ()=>c);
var _litHtmlJs = require("../lit-html.js");
var _directiveHelpersJs = require("../directive-helpers.js");
var _asyncDirectiveJs = require("../async-directive.js");
var _privateAsyncHelpersJs = require("./private-async-helpers.js");
var _directiveJs = require("../directive.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const n = (t)=>!(0, _directiveHelpersJs.isPrimitive)(t) && "function" == typeof t.then;
class h extends (0, _asyncDirectiveJs.AsyncDirective) {
    constructor(){
        super(...arguments), this._$Cwt = 1073741823, this._$Cyt = [], this._$CK = new (0, _privateAsyncHelpersJs.PseudoWeakRef)(this), this._$CX = new (0, _privateAsyncHelpersJs.Pauser);
    }
    render(...s) {
        var i;
        return null !== (i = s.find((t)=>!n(t))) && void 0 !== i ? i : (0, _litHtmlJs.noChange);
    }
    update(s, i) {
        const r = this._$Cyt;
        let e = r.length;
        this._$Cyt = i;
        const o = this._$CK, h = this._$CX;
        this.isConnected || this.disconnected();
        for(let t = 0; t < i.length && !(t > this._$Cwt); t++){
            const s = i[t];
            if (!n(s)) return this._$Cwt = t, s;
            t < e && s === r[t] || (this._$Cwt = 1073741823, e = 0, Promise.resolve(s).then(async (t)=>{
                for(; h.get();)await h.get();
                const i = o.deref();
                if (void 0 !== i) {
                    const r = i._$Cyt.indexOf(s);
                    r > -1 && r < i._$Cwt && (i._$Cwt = r, i.setValue(t));
                }
            }));
        }
        return 0, _litHtmlJs.noChange;
    }
    disconnected() {
        this._$CK.disconnect(), this._$CX.pause();
    }
    reconnected() {
        this._$CK.reconnect(this), this._$CX.resume();
    }
}
const c = (0, _directiveJs.directive)(h);

},{"../lit-html.js":"1cmQt","../directive-helpers.js":"cJsxz","../async-directive.js":"4f1Uv","./private-async-helpers.js":"drd9e","../directive.js":"9lbyV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5IbUr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _whenJs = require("lit-html/directives/when.js");
parcelHelpers.exportAll(_whenJs, exports);

},{"lit-html/directives/when.js":"lm1WX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lm1WX":[function(require,module,exports) {
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "when", ()=>n);
function n(n, o, r) {
    return n ? o() : null == r ? void 0 : r();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6u2dB":[function(require,module,exports) {
/* eslint-disable @typescript-eslint/no-explicit-any */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "App", ()=>App);
parcelHelpers.export(exports, "Component", ()=>Component);
parcelHelpers.export(exports, "Page", ()=>Page);
parcelHelpers.export(exports, "Layout", ()=>Layout);
parcelHelpers.export(exports, "UseApp", ()=>UseApp);
parcelHelpers.export(exports, "UseOptions", ()=>UseOptions);
parcelHelpers.export(exports, "UseConfigs", ()=>UseConfigs);
parcelHelpers.export(exports, "UseSplashscreen", ()=>UseSplashscreen);
parcelHelpers.export(exports, "Inject", ()=>Inject);
parcelHelpers.export(exports, "Vendor", ()=>Vendor);
parcelHelpers.export(exports, "Observable", ()=>Observable);
parcelHelpers.export(exports, "Observe", ()=>Observe);
var _decoratorsJs = require("lit/decorators.js");
var _methods = require("./methods");
var _consts = require("./consts");
var _observable = require("./observable");
var _diChecker = require("../dev/di-checker");
var _diCheckerDefault = parcelHelpers.interopDefault(_diChecker);
function App(providers, options = {}) {
    return function(target) {
        var _a;
        (0, _consts.GLOBAL).$tiniAppOptions = options; // set options
        // register the exit of the app splashscreen
        if (options.splashscreen) (0, _methods.registerGlobalHook)("page" /* COMPONENT_TYPES.PAGE */ , "onChildrenReady" /* LIFECYCLE_HOOKS.ON_CHILDREN_READY */ , (page, appOrGlobal, opts)=>(opts === null || opts === void 0 ? void 0 : opts.splashscreen) !== "auto" ? undefined : (0, _methods.hideAppSplashscreen)());
        // register page metas
        (0, _methods.registerGlobalHook)("page" /* COMPONENT_TYPES.PAGE */ , "onReady" /* LIFECYCLE_HOOKS.ON_READY */ , (page, appOrGlobal)=>{
            var _a;
            return (_a = appOrGlobal.$meta || appOrGlobal.$tiniMeta) === null || _a === void 0 ? void 0 : _a.setPageMetas(page.metas, location.pathname === "/");
        });
        // create app
        class result extends target {
            constructor(){
                super(...arguments);
                this.$options = (0, _consts.GLOBAL).$tiniAppOptions;
                this.componentType = "app" /* COMPONENT_TYPES.APP */ ;
            }
        }
        // load the registry
        const dependencyRegistry = (0, _methods.getDIRegistry)();
        // add the registers
        const providerIds = Object.keys(providers);
        for(let i = 0; i < providerIds.length; i++){
            const id = providerIds[i];
            const value = providers[id];
            // extract the provider and deps
            const { provider , deps  } = !(value === null || value === void 0 ? void 0 : value.provider) ? {
                provider: value,
                deps: []
            } : value;
            // the register
            let theRegister = dependencyRegistry.registers.get(id);
            if (theRegister) return; // already registered
            theRegister = async ()=>{
                let result = dependencyRegistry.instances.get(id);
                // already initialized
                if (result) return;
                // resolve deps
                const depInstances = [];
                if (deps === null || deps === void 0 ? void 0 : deps.length) for(let j = 0; j < deps.length; j++){
                    const depId = deps[j];
                    let depInstance = dependencyRegistry.instances.get(depId);
                    if (!depInstance) {
                        const theDepRegister = dependencyRegistry.registers.get(depId);
                        if (!theDepRegister) throw (0, _consts.NO_REGISTER_ERROR)(depId);
                        depInstance = await theDepRegister();
                    }
                    depInstances.push(depInstance);
                }
                // result
                const m = await provider();
                const dependency = !m.default ? m : m.default;
                result = !(0, _methods.isClass)(dependency) ? dependency : new dependency(...depInstances);
                (0, _diCheckerDefault.default)(id, dependency, result);
                // </DEVELOPMENT>
                return dependencyRegistry.instances.set(id, result).get(id);
            };
            dependencyRegistry.registers.set(id, theRegister).get(id);
        }
        // digest the await queue
        if ((_a = dependencyRegistry.awaiters) === null || _a === void 0 ? void 0 : _a.length) for(let i = 0; i < dependencyRegistry.awaiters.length; i++)dependencyRegistry.awaiters[i]();
        // forward the app root
        return (0, _decoratorsJs.customElement)((0, _consts.APP_ROOT))(result);
    };
}
function Component(tagName, type) {
    return function(target) {
        class result extends target {
            constructor(){
                super(...arguments);
                this.componentType = type || "component" /* COMPONENT_TYPES.COMPONENT */ ;
            }
        }
        return (0, _decoratorsJs.customElement)(tagName)(result);
    };
}
function Page(tagName) {
    return Component(tagName, "page" /* COMPONENT_TYPES.PAGE */ );
}
function Layout(tagName) {
    return Component(tagName, "layout" /* COMPONENT_TYPES.LAYOUT */ );
}
function UseApp() {
    return function(target, propertyKey) {
        Reflect.defineProperty(target, propertyKey, {
            get: ()=>(0, _methods.getAppInstance)(),
            enumerable: false,
            configurable: false
        });
    };
}
function UseOptions() {
    return function(target, propertyKey) {
        Reflect.defineProperty(target, propertyKey, {
            get: ()=>(0, _consts.GLOBAL).$tiniAppOptions,
            enumerable: false,
            configurable: false
        });
    };
}
function UseConfigs() {
    return function(target, propertyKey) {
        Reflect.defineProperty(target, propertyKey, {
            get: ()=>(0, _methods.getConfigs)(),
            enumerable: false,
            configurable: false
        });
    };
}
function UseSplashscreen() {
    return function(target, propertyKey) {
        Reflect.defineProperty(target, propertyKey, {
            get: ()=>(0, _methods.getAppSplashscreen)(),
            enumerable: false,
            configurable: false
        });
    };
}
function Inject(id) {
    return function(target, propertyKey) {
        const depId = id || propertyKey;
        const dependencyRegistry = (0, _methods.getDIRegistry)();
        // the pending
        const pending = async ()=>{
            let result = dependencyRegistry.instances.get(depId);
            if (!result) {
                const register = dependencyRegistry.registers.get(depId);
                if (!register) throw (0, _consts.NO_REGISTER_ERROR)(depId);
                result = dependencyRegistry.instances.set(depId, await register()).get(depId);
            }
            return result;
        };
        // queue the dependencies
        const theRegister = dependencyRegistry.registers.get(depId);
        target._pendingDI || (target._pendingDI = []);
        if (!theRegister) {
            let resolveSchedule = ()=>{};
            const scheduledPending = new Promise((resolve)=>resolveSchedule = resolve);
            dependencyRegistry.awaiters.push(()=>resolveSchedule());
            target._pendingDI.push(()=>scheduledPending.then(()=>pending()));
        } else target._pendingDI.push(pending);
        // result
        Reflect.defineProperty(target, propertyKey, {
            get: ()=>dependencyRegistry.instances.get(depId),
            enumerable: false,
            configurable: false
        });
    };
}
function Vendor(id) {
    return Inject(id);
}
function Observable(registerName, noInitial) {
    return function(target, propertyKey) {
        const valueKey = `_${propertyKey}Value`;
        const registerKey = registerName || `${propertyKey}Changed`;
        const onChangedHandlers = [];
        Reflect.defineProperty(target, valueKey, {
            value: undefined,
            writable: true,
            enumerable: false,
            configurable: false
        });
        Reflect.defineProperty(target, registerKey, {
            value: (cb)=>{
                const index = onChangedHandlers.length;
                // register the handler
                onChangedHandlers[index] = cb;
                // initial
                const currentVal = target[valueKey];
                if (!noInitial && currentVal !== undefined) onChangedHandlers[index](currentVal, undefined);
                // unsubcribe
                return ()=>onChangedHandlers.splice(index, 1);
            },
            enumerable: false,
            configurable: false
        });
        Reflect.defineProperty(target, propertyKey, {
            get: ()=>target[valueKey],
            set: (newVal)=>{
                let oldVal = target[valueKey];
                oldVal = !oldVal || typeof oldVal !== "object" ? oldVal : JSON.parse(JSON.stringify(oldVal));
                target[valueKey] = newVal;
                onChangedHandlers.forEach((handler)=>handler && handler(newVal, oldVal));
            },
            enumerable: false,
            configurable: false
        });
    };
}
function Observe() {
    return function(target, propertyKey) {
        Reflect.defineProperty(target, propertyKey, {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            value: new (0, _observable.Observer)(target),
            enumerable: false,
            configurable: false
        });
    };
}

},{"lit/decorators.js":"bCPKi","./methods":"i8LWY","./consts":"03InB","./observable":"6ctPT","../dev/di-checker":"65hZr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i8LWY":[function(require,module,exports) {
/* eslint-disable @typescript-eslint/no-explicit-any */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "varName", ()=>varName);
parcelHelpers.export(exports, "isClass", ()=>isClass);
parcelHelpers.export(exports, "getDIRegistry", ()=>getDIRegistry);
parcelHelpers.export(exports, "getAppInstance", ()=>getAppInstance);
parcelHelpers.export(exports, "getConfigs", ()=>getConfigs);
parcelHelpers.export(exports, "registerGlobalHook", ()=>registerGlobalHook);
parcelHelpers.export(exports, "getGlobalHooks", ()=>getGlobalHooks);
parcelHelpers.export(exports, "runGlobalHooks", ()=>runGlobalHooks);
parcelHelpers.export(exports, "getAppSplashscreen", ()=>getAppSplashscreen);
parcelHelpers.export(exports, "hideAppSplashscreen", ()=>hideAppSplashscreen);
var _consts = require("./consts");
function varName(className) {
    return className[0].toLowerCase() + className.substring(1);
}
function isClass(input) {
    return typeof input === "function" && /^class\s/.test(Function.prototype.toString.call(input));
}
function getDIRegistry() {
    return (0, _consts.GLOBAL).$tiniDIRegistry || ((0, _consts.GLOBAL).$tiniDIRegistry = {
        registers: new Map(),
        instances: new Map(),
        awaiters: []
    });
}
function getAppInstance(fallbackToGlobal) {
    const app = document.querySelector((0, _consts.APP_ROOT));
    if (!app && !fallbackToGlobal) throw 0, _consts.NO_APP_ERROR;
    return app || (0, _consts.GLOBAL);
}
function getConfigs() {
    const appOrGlobal = getAppInstance(true);
    return appOrGlobal.$configs || appOrGlobal.$tiniConfigs || null;
}
function registerGlobalHook(componentTypeOrTypes, hookCycleOrCycles, hookAction) {
    // init the registry
    (0, _consts.GLOBAL).$tiniLHRegistry || ((0, _consts.GLOBAL).$tiniLHRegistry = {});
    const registry = (0, _consts.GLOBAL).$tiniLHRegistry;
    // cycles & types
    const componentTypes = typeof componentTypeOrTypes === "string" ? [
        componentTypeOrTypes
    ] : componentTypeOrTypes;
    const hookCycles = typeof hookCycleOrCycles === "string" ? [
        hookCycleOrCycles
    ] : hookCycleOrCycles;
    // organize
    for(let i = 0; i < componentTypes.length; i++){
        const type = componentTypes[i];
        if (!registry[type]) registry[type] = {};
        for(let j = 0; j < hookCycles.length; j++){
            const cycle = hookCycles[j];
            if (!registry[type][cycle]) registry[type][cycle] = [];
            registry[type][cycle].push(hookAction);
        }
    }
    // result
    return registry;
}
function getGlobalHooks(type, cycle) {
    var _a, _b;
    return (_b = (_a = (0, _consts.GLOBAL).$tiniLHRegistry) === null || _a === void 0 ? void 0 : _a[type]) === null || _b === void 0 ? void 0 : _b[cycle];
}
function runGlobalHooks(cycle, component) {
    const globalHooks = getGlobalHooks(component.componentType, cycle);
    if (!(globalHooks === null || globalHooks === void 0 ? void 0 : globalHooks.length)) return;
    const appOrGlobal = getAppInstance(true);
    globalHooks.forEach((action)=>action(component, appOrGlobal, (0, _consts.GLOBAL).$tiniAppOptions));
}
function getAppSplashscreen() {
    return document.getElementById((0, _consts.APP_SPLASHSCREEN_ID));
}
function hideAppSplashscreen() {
    const node = getAppSplashscreen();
    if (!node) return;
    if (node.hide instanceof Function) node.hide();
    else node.remove();
}

},{"./consts":"03InB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"03InB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GLOBAL", ()=>GLOBAL);
parcelHelpers.export(exports, "APP_ROOT", ()=>APP_ROOT);
parcelHelpers.export(exports, "ROUTER_OUTLET_ID", ()=>ROUTER_OUTLET_ID);
parcelHelpers.export(exports, "APP_ROOT_TEMPLATE", ()=>APP_ROOT_TEMPLATE);
parcelHelpers.export(exports, "APP_SPLASHSCREEN_ID", ()=>APP_SPLASHSCREEN_ID);
parcelHelpers.export(exports, "NO_APP_ERROR", ()=>NO_APP_ERROR);
parcelHelpers.export(exports, "NO_REGISTER_ERROR", ()=>NO_REGISTER_ERROR);
var _lit = require("lit");
const GLOBAL = window;
const APP_ROOT = "app-root";
const ROUTER_OUTLET_ID = "router-outlet";
const APP_ROOT_TEMPLATE = (0, _lit.html)`<div id="${ROUTER_OUTLET_ID}"></div>`;
const APP_SPLASHSCREEN_ID = "splashscreen";
const NO_APP_ERROR = new Error("No TiniJS app available.");
const NO_REGISTER_ERROR = (id)=>new Error(`No register for the dependency "${id}".`);

},{"lit":"4antt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ctPT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Observer", ()=>Observer);
class Observer {
    constructor(host){
        this.unsubscribes = [];
        this._host = host;
        host.addController(this);
    }
    subscribe(...unsubscribes) {
        this.unsubscribes = unsubscribes;
    }
    hostDisconnected() {
        this.unsubscribes.forEach((unsubscribe)=>unsubscribe());
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"65hZr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _methods = require("../lib/methods");
exports.default = function(id, dependency, instance) {
    const paramsMatchingArr = dependency.toString().match(/(constructor\()([\s\S]*?)\)/);
    if ((0, _methods.isClass)(dependency) && paramsMatchingArr && paramsMatchingArr[2]) {
        const params = paramsMatchingArr[2].split(",").map((item)=>item.trim());
        const missingIds = [];
        for(let j = 0; j < params.length; j++){
            const param = params[j];
            const memberValue = instance[param];
            if (memberValue === undefined) missingIds.push(param);
        }
        if (missingIds.length) console.error(new Error(`
Dependencies are missing from the service [${id}] or provided in a wrong order.
Please provide them in 'app/providers.ts' or correcting its order:
      {
        ${id}: {
          provider: () => import('...'),
          deps: ['${params.join("', '")}']
        }
      }
`));
    }
};

},{"../lib/methods":"i8LWY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e92N9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hsQiU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventEmitter", ()=>EventEmitter);
parcelHelpers.export(exports, "Output", ()=>Output);
class EventEmitter {
    constructor(host, eventName){
        this._host = host;
        this._eventName = eventName;
    }
    emit(payload, customEventInit = {}) {
        return this._host.dispatchEvent(new CustomEvent(this._eventName, {
            detail: payload,
            bubbles: true,
            composed: true,
            cancelable: true,
            ...customEventInit
        }));
    }
}
function Output() {
    return function(_, propertyKey, descriptor) {
        descriptor || (descriptor = {});
        descriptor.enumerable = false;
        descriptor.configurable = false;
        descriptor.get = function() {
            return new EventEmitter(this, propertyKey);
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return descriptor;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"18CK6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Input", ()=>(0, _decorators.property));
parcelHelpers.export(exports, "Reactive", ()=>(0, _decorators.state));
parcelHelpers.export(exports, "Query", ()=>(0, _decorators.query));
parcelHelpers.export(exports, "QueryAll", ()=>(0, _decorators.queryAll));
parcelHelpers.export(exports, "QueryAsync", ()=>(0, _decorators.queryAsync));
parcelHelpers.export(exports, "TiniComponent", ()=>TiniComponent);
parcelHelpers.export(exports, "asset", ()=>asset);
parcelHelpers.export(exports, "unistylus", ()=>unistylus);
var _lit = require("lit");
var _methods = require("./methods");
var _decorators = require("lit/decorators");
const TiniComponentMixin = (superClass)=>{
    class TiniComponentChild extends superClass {
        get _dependenciesResolved() {
            return this._pendingDI && this._pendingDI.length === 0;
        }
        constructor(...args){
            var _a;
            super(...args);
            this._dependenciesAvailable = !!((_a = this._pendingDI) === null || _a === void 0 ? void 0 : _a.length);
        }
        connectedCallback() {
            super.connectedCallback();
            // global hooks
            (0, _methods.runGlobalHooks)("onCreate" /* LIFECYCLE_HOOKS.ON_CREATE */ , this);
            // component hook
            if (this.onCreate) this.onCreate();
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            // global hooks
            (0, _methods.runGlobalHooks)("onDestroy" /* LIFECYCLE_HOOKS.ON_DESTROY */ , this);
            // component hook
            if (this.onDestroy) this.onDestroy();
        }
        willUpdate() {
            // global hooks
            (0, _methods.runGlobalHooks)("onChanges" /* LIFECYCLE_HOOKS.ON_CHANGES */ , this);
            // component hook
            if (this.onChanges) this.onChanges();
        }
        firstUpdated() {
            // process children rendering
            const root = this.shadowRoot;
            const children = root.querySelectorAll("[await]");
            if (children.length) {
                const childUpdatedPromises = Array.from(children).filter((item)=>!!item && !!item.childrenFirstUpdated).map((item)=>{
                    let resolveSchedule = ()=>{};
                    const originalchildrenFirstUpdated = item.childrenFirstUpdated;
                    item.childrenFirstUpdated = ()=>{
                        originalchildrenFirstUpdated.bind(item)();
                        resolveSchedule();
                    };
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    return new Promise((resolve)=>resolveSchedule = resolve);
                });
                Promise.all(childUpdatedPromises).then(()=>this.childrenFirstUpdated());
            } else this.childrenFirstUpdated();
            // global hooks
            (0, _methods.runGlobalHooks)("onReady" /* LIFECYCLE_HOOKS.ON_READY */ , this);
            // component hook
            if (this.onReady) this.onReady();
        }
        updated() {
            // global hooks
            (0, _methods.runGlobalHooks)("onRenders" /* LIFECYCLE_HOOKS.ON_RENDERS */ , this);
            // component hook
            if (this.onRenders) this.onRenders();
        }
        childrenFirstUpdated() {
            // global hooks
            (0, _methods.runGlobalHooks)("onChildrenReady" /* LIFECYCLE_HOOKS.ON_CHILDREN_READY */ , this);
            // component hook
            if (this.onChildrenReady) this.onChildrenReady();
        }
        async scheduleUpdate() {
            const digest = async ()=>{
                this._pendingDI = []; // marked as resolved
                // component hook
                if (this.onInit) await this.onInit();
                // global hooks
                (0, _methods.runGlobalHooks)("onInit" /* LIFECYCLE_HOOKS.ON_INIT */ , this);
                // continue
                this._initialized = true; // mark as initialized
                super.scheduleUpdate();
            };
            // C: has dependencies but all are resolved
            if (this._initialized && this._dependenciesResolved) super.scheduleUpdate();
            else if (!this._dependenciesAvailable) await digest();
            else {
                const dependencies = this._pendingDI || [];
                for(let i = 0; i < dependencies.length; i++)await dependencies[i]();
                await digest();
            }
        }
    }
    return TiniComponentChild;
};
const TiniComponent = TiniComponentMixin((0, _lit.LitElement));
function asset(path) {
    return path;
}
const unistylus = (classNames)=>{
    return classNames;
};

},{"lit":"4antt","./methods":"i8LWY","lit/decorators":"bCPKi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hAG7Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _decorators = require("./lib/decorators");
parcelHelpers.exportAll(_decorators, exports);
var _methods = require("./lib/methods");
parcelHelpers.exportAll(_methods, exports);
var _types = require("./lib/types");
parcelHelpers.exportAll(_types, exports);
var _main = require("./lib/main");
parcelHelpers.exportAll(_main, exports);

},{"./lib/decorators":"78geW","./lib/methods":"5fpe9","./lib/types":"lj8YD","./lib/main":"64fgZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"78geW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UseMeta", ()=>UseMeta);
var _methods = require("./methods");
function UseMeta() {
    return function(target, propertyKey) {
        Reflect.defineProperty(target, propertyKey, {
            get: ()=>(0, _methods.getMeta)(),
            enumerable: false,
            configurable: false
        });
    };
}

},{"./methods":"5fpe9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5fpe9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getMeta", ()=>getMeta);
/*
 * Ngx-useful Meta: https://github.com/lamnhan/ngx-useful/blob/main/projects/useful/src/lib/services/meta/meta.service.ts
 */ parcelHelpers.export(exports, "getMetaTagContent", ()=>getMetaTagContent);
parcelHelpers.export(exports, "getLinkTagHref", ()=>getLinkTagHref);
parcelHelpers.export(exports, "changePageTitle", ()=>changePageTitle);
parcelHelpers.export(exports, "changePageLang", ()=>changePageLang);
parcelHelpers.export(exports, "changeLinkTags", ()=>changeLinkTags);
parcelHelpers.export(exports, "changeMetaTags", ()=>changeMetaTags);
/*
 * Angular Meta: https://github.com/angular/angular/blob/15.0.4/packages/platform-browser/src/browser/meta.ts
 */ parcelHelpers.export(exports, "addMetaTag", ()=>addMetaTag);
parcelHelpers.export(exports, "addMetaTags", ()=>addMetaTags);
parcelHelpers.export(exports, "getMetaTag", ()=>getMetaTag);
parcelHelpers.export(exports, "getMetaTags", ()=>getMetaTags);
parcelHelpers.export(exports, "updateMetaTag", ()=>updateMetaTag);
parcelHelpers.export(exports, "removeMetaTag", ()=>removeMetaTag);
var _core = require("@tinijs/core");
function getMeta() {
    const appOrGlobal = (0, _core.getAppInstance)(true);
    return appOrGlobal.$meta || appOrGlobal.$tiniMeta || null;
}
function getMetaTagContent(attrSelector) {
    var _a;
    return (_a = document.querySelector(`meta[${attrSelector}]`)) === null || _a === void 0 ? void 0 : _a.getAttribute("content");
}
function getLinkTagHref(rel) {
    var _a;
    return (_a = document.querySelector(`link[rel="${rel}"]`)) === null || _a === void 0 ? void 0 : _a.getAttribute("href");
}
function changePageTitle(title) {
    return document.title = title || "";
}
function changePageLang(code) {
    return document.documentElement.setAttribute("lang", code);
}
function changeLinkTags(items) {
    for (const item of items){
        const { rel , href  } = item;
        let node = document.querySelector(`link[rel=${rel}]`);
        if (!node) {
            // create
            node = document.createElement("link");
            node.setAttribute("rel", rel);
            node.setAttribute("href", href);
            document.head.appendChild(node);
        } else // update
        node.setAttribute("href", href);
    }
}
function changeMetaTags(metas) {
    const { url , title , description , image , locale , authorName , authorUrl , createdAt , updatedAt , ogType , ogSiteName , fbAppId , twitterCard , twitterCreator , twitterSite  } = metas;
    // update links and meta
    if (url) {
        removeMetaTag('itemprop="url"');
        changeLinkTags([
            {
                rel: "canonical",
                href: url
            }
        ]);
        updateMetaTag({
            itemprop: "url",
            content: url
        });
        updateMetaTag({
            property: "og:url",
            content: url
        });
    }
    if (title) {
        removeMetaTag('itemprop="name"');
        updateMetaTag({
            itemprop: "name",
            content: title
        });
        updateMetaTag({
            property: "og:title",
            content: title
        });
    }
    if (description) {
        removeMetaTag('itemprop="description"');
        updateMetaTag({
            name: "description",
            content: description
        });
        updateMetaTag({
            itemprop: "description",
            content: description
        });
        updateMetaTag({
            property: "og:description",
            content: description
        });
    }
    if (image) {
        removeMetaTag('itemprop="image"');
        updateMetaTag({
            itemprop: "image",
            content: image
        });
        updateMetaTag({
            property: "og:image",
            content: image
        });
    }
    if (locale) {
        removeMetaTag('itemprop="inLanguage"');
        updateMetaTag({
            itemprop: "inLanguage",
            content: locale
        });
        updateMetaTag({
            property: "og:locale",
            content: locale
        });
    }
    if (authorName) {
        removeMetaTag('itemprop="author"');
        updateMetaTag({
            itemprop: "author",
            content: authorName
        });
    }
    if (authorUrl) changeLinkTags([
        {
            rel: "author",
            href: authorUrl
        }
    ]);
    if (createdAt) {
        removeMetaTag('itemprop="dateCreated"');
        removeMetaTag('itemprop="datePublished"');
        updateMetaTag({
            itemprop: "dateCreated",
            content: createdAt
        });
        updateMetaTag({
            itemprop: "datePublished",
            content: createdAt
        });
    }
    if (updatedAt) {
        removeMetaTag('itemprop="dateModified"');
        updateMetaTag({
            itemprop: "dateModified",
            content: updatedAt
        });
    }
    if (ogType) updateMetaTag({
        property: "og:type",
        content: ogType
    });
    if (ogSiteName) updateMetaTag({
        property: "og:site_name",
        content: ogSiteName
    });
    if (fbAppId) updateMetaTag({
        property: "fb:app_id",
        content: fbAppId
    });
    if (twitterCard) updateMetaTag({
        name: "twitter:card",
        content: twitterCard
    });
    if (twitterCreator) updateMetaTag({
        name: "twitter:creator",
        content: twitterCreator
    });
    if (twitterSite) updateMetaTag({
        name: "twitter:site",
        content: twitterSite
    });
}
function addMetaTag(tag, forceCreation = false) {
    if (!tag) return null;
    return _getOrCreateElement(tag, forceCreation);
}
function addMetaTags(tags, forceCreation = false) {
    if (!tags) return [];
    return tags.reduce((result, tag)=>{
        if (tag) result.push(_getOrCreateElement(tag, forceCreation));
        return result;
    }, []);
}
function getMetaTag(attrSelector) {
    if (!attrSelector) return null;
    return document.querySelector(`meta[${attrSelector}]`) || null;
}
function getMetaTags(attrSelector) {
    if (!attrSelector) return [];
    const list /*NodeList*/  = document.querySelectorAll(`meta[${attrSelector}]`);
    return list ? [].slice.call(list) : [];
}
function updateMetaTag(tag, selector) {
    if (!tag) return null;
    selector = selector || _parseSelector(tag);
    const meta = getMetaTag(selector);
    if (meta) return _setMetaElementAttributes(tag, meta);
    return _getOrCreateElement(tag, true);
}
function removeMetaTag(attrSelector) {
    _removeTagElement(getMetaTag(attrSelector));
}
function _removeTagElement(meta) {
    if (meta) meta.remove();
}
function _setMetaElementAttributes(tag, el) {
    Object.keys(tag).forEach((prop)=>el.setAttribute(_getMetaKeyMap(prop), tag[prop]));
    return el;
}
function _parseSelector(tag) {
    const attr = tag.name ? "name" : "property";
    return `${attr}="${tag[attr]}"`;
}
function _containsAttributes(tag, elem) {
    return Object.keys(tag).every((key)=>elem.getAttribute(_getMetaKeyMap(key)) === tag[key]);
}
function _getMetaKeyMap(prop) {
    const META_KEYS_MAP = {
        httpEquiv: "http-equiv"
    };
    return META_KEYS_MAP[prop] || prop;
}
function _getOrCreateElement(meta, forceCreation = false) {
    if (!forceCreation) {
        const selector = _parseSelector(meta);
        const elem = getMetaTags(selector).filter((elem)=>_containsAttributes(meta, elem))[0];
        if (elem !== undefined) return elem;
    }
    const element = document.createElement("meta");
    _setMetaElementAttributes(meta, element);
    const head = document.getElementsByTagName("head")[0];
    head.appendChild(element);
    return element;
}

},{"@tinijs/core":"cUOty","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lj8YD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"64fgZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TINI_METAS", ()=>TINI_METAS);
parcelHelpers.export(exports, "initMetas", ()=>initMetas);
parcelHelpers.export(exports, "Meta", ()=>Meta);
var _methods = require("./methods");
const TINI_METAS = {
    url: "https://tinijs.dev",
    title: "TiniJS App",
    description: "A tiny Javascript framework.",
    image: "https://tinijs.dev/images/featured.jpg",
    locale: "en-US",
    lang: "en",
    authorName: "TiniJS",
    authorUrl: "https://tinijs.dev/about",
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    ogType: "website",
    ogSiteName: "TiniJS App",
    fbAppId: "000000000000000",
    twitterCard: "summary_large_image",
    twitterCreator: "@tini_js",
    twitterSite: "@tini_js"
};
function initMetas(options) {
    return new Meta(options);
}
class Meta {
    constructor(options = {}){
        this.locale = TINI_METAS.locale;
        const { suffix , suffixConnector , suffixTranslations , metas , metasTranslations  } = options;
        this.suffix = suffix;
        this.suffixConnector = suffixConnector;
        this.suffixTranslations = suffixTranslations;
        this.metas = metas || this.extractDefaultMetas();
        this.metasTranslations = metasTranslations;
    }
    changeLocale(locale) {
        this.locale = locale;
    }
    getSuffix() {
        var _a;
        return ((_a = this.suffixTranslations) === null || _a === void 0 ? void 0 : _a[this.locale || TINI_METAS.locale]) || this.suffix;
    }
    getMetas() {
        var _a;
        return ((_a = this.metasTranslations) === null || _a === void 0 ? void 0 : _a[this.locale || TINI_METAS.locale]) || this.metas;
    }
    setHomeMetas() {
        return this.setPageMetas({}, true);
    }
    setPageMetas(pageMetas = {}, noSuffix) {
        const customMetas = pageMetas;
        // image
        if (!customMetas.image && pageMetas.images) customMetas.image = (pageMetas.images.xl || pageMetas.images.default).src;
        // author name and url
        if ((!customMetas.authorName || !customMetas.authorUrl) && pageMetas.authors) {
            const firstAuthorId = Object.keys(pageMetas.authors)[0];
            if (firstAuthorId) {
                const author = pageMetas.authors[firstAuthorId];
                // authorName
                if (!customMetas.authorName) customMetas.authorName = author.name;
                // authorUrl
                if (!customMetas.authorUrl) customMetas.authorUrl = author.url;
            }
        }
        // apply metas
        const metas = this.processMetaData(customMetas, noSuffix);
        (0, _methods.changePageTitle)(metas.title || TINI_METAS.title);
        (0, _methods.changePageLang)(metas.lang || TINI_METAS.lang);
        (0, _methods.changeMetaTags)(metas);
        // result
        return metas;
    }
    extractDefaultMetas() {
        const url = (0, _methods.getMetaTagContent)('itemprop="url"') || TINI_METAS.url;
        const title = (0, _methods.getMetaTagContent)('itemprop="name"') || TINI_METAS.title;
        const description = (0, _methods.getMetaTagContent)('itemprop="description"') || TINI_METAS.description;
        const image = (0, _methods.getMetaTagContent)('itemprop="image"') || TINI_METAS.image;
        const locale = (0, _methods.getMetaTagContent)('itemprop="inLanguage"') || TINI_METAS.locale;
        const lang = document.documentElement.getAttribute("lang") || locale.split("-")[0] || TINI_METAS.lang;
        const authorName = (0, _methods.getMetaTagContent)('itemprop="author"') || TINI_METAS.authorName;
        const authorUrl = (0, _methods.getLinkTagHref)("author") || TINI_METAS.authorUrl;
        const createdAt = (0, _methods.getMetaTagContent)('itemprop="dateCreated"') || TINI_METAS.createdAt;
        const updatedAt = (0, _methods.getMetaTagContent)('itemprop="dateModified"') || TINI_METAS.updatedAt;
        const ogType = (0, _methods.getMetaTagContent)('itemprop="og:type"') || TINI_METAS.ogType;
        const ogSiteName = (0, _methods.getMetaTagContent)('itemprop="og:site_name"') || TINI_METAS.ogSiteName;
        const fbAppId = (0, _methods.getMetaTagContent)('itemprop="fb:app_id"') || TINI_METAS.fbAppId;
        const twitterCard = (0, _methods.getMetaTagContent)('name="twitter:card"') || TINI_METAS.twitterCard;
        const twitterCreator = (0, _methods.getMetaTagContent)('name="twitter:creator"') || TINI_METAS.twitterCreator;
        const twitterSite = (0, _methods.getMetaTagContent)('name="twitter:site"') || TINI_METAS.twitterSite;
        return {
            url,
            title,
            description,
            image,
            locale,
            lang,
            authorName,
            authorUrl,
            createdAt,
            updatedAt,
            ogType,
            ogSiteName,
            fbAppId,
            twitterCard,
            twitterCreator,
            twitterSite
        };
    }
    processMetaData(customMetas, noSuffix) {
        const appSuffix = this.getSuffix();
        const appMetas = this.getMetas();
        // custom
        const url = customMetas["url"] || location.href;
        let title = customMetas["title"] || appMetas["title"];
        // add suffix
        if (appSuffix && !noSuffix) title = `${title}${this.suffixConnector || " — "}${appSuffix}`;
        const description = customMetas["description"] || appMetas["description"];
        const image = customMetas["image"] || appMetas["image"];
        const locale = customMetas["locale"] || appMetas["locale"];
        const lang = customMetas["lang"] || (locale === null || locale === void 0 ? void 0 : locale.split("-")[0]) || appMetas["lang"];
        const authorName = customMetas["authorName"] || appMetas["authorName"];
        const authorUrl = customMetas["authorUrl"] || appMetas["authorUrl"];
        const createdAt = customMetas["createdAt"] || appMetas["createdAt"];
        const updatedAt = customMetas["updatedAt"] || appMetas["updatedAt"];
        const ogType = customMetas["ogType"] || appMetas["ogType"];
        const twitterCard = customMetas["twitterCard"] || appMetas["twitterCard"];
        const twitterCreator = customMetas["twitterCreator"] || appMetas["twitterCreator"];
        // default (from index.html)
        const ogSiteName = appMetas["ogSiteName"];
        const fbAppId = appMetas["fbAppId"];
        const twitterSite = appMetas["twitterSite"];
        return {
            url,
            title,
            description,
            image,
            locale,
            lang,
            authorName,
            authorUrl,
            createdAt,
            updatedAt,
            ogType,
            ogSiteName,
            fbAppId,
            twitterCard,
            twitterCreator,
            twitterSite
        };
    }
}

},{"./methods":"5fpe9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"wWiMg":[function(require,module,exports) {
// forward @vaadin/router exports
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _router = require("@vaadin/router");
parcelHelpers.exportAll(_router, exports);
// lib
var _decorators = require("./lib/decorators");
parcelHelpers.exportAll(_decorators, exports);
var _methods = require("./lib/methods");
parcelHelpers.exportAll(_methods, exports);
var _consts = require("./lib/consts");
parcelHelpers.exportAll(_consts, exports);
var _types = require("./lib/types");
parcelHelpers.exportAll(_types, exports);
var _main = require("./lib/main");
parcelHelpers.exportAll(_main, exports);

},{"@vaadin/router":"kVZrF","./lib/decorators":"dkNYO","./lib/methods":"8NJuH","./lib/consts":"heua6","./lib/types":"4DRFq","./lib/main":"8x40v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kVZrF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Resolver", ()=>Resolver);
parcelHelpers.export(exports, "Router", ()=>Router);
function toArray(objectOrArray) {
    objectOrArray = objectOrArray || [];
    return Array.isArray(objectOrArray) ? objectOrArray : [
        objectOrArray
    ];
}
function log(msg) {
    return `[Vaadin.Router] ${msg}`;
}
function logValue(value) {
    if (typeof value !== "object") return String(value);
    const stringType = Object.prototype.toString.call(value).match(/ (.*)\]$/)[1];
    if (stringType === "Object" || stringType === "Array") return `${stringType} ${JSON.stringify(value)}`;
    else return stringType;
}
const MODULE = "module";
const NOMODULE = "nomodule";
const bundleKeys = [
    MODULE,
    NOMODULE
];
function ensureBundle(src) {
    if (!src.match(/.+\.[m]?js$/)) throw new Error(log(`Unsupported type for bundle "${src}": .js or .mjs expected.`));
}
function ensureRoute(route) {
    if (!route || !isString(route.path)) throw new Error(log(`Expected route config to be an object with a "path" string property, or an array of such objects`));
    const bundle = route.bundle;
    const stringKeys = [
        "component",
        "redirect",
        "bundle"
    ];
    if (!isFunction(route.action) && !Array.isArray(route.children) && !isFunction(route.children) && !isObject(bundle) && !stringKeys.some((key)=>isString(route[key]))) throw new Error(log(`Expected route config "${route.path}" to include either "${stringKeys.join('", "')}" ` + `or "action" function but none found.`));
    if (bundle) {
        if (isString(bundle)) ensureBundle(bundle);
        else if (!bundleKeys.some((key)=>key in bundle)) throw new Error(log('Expected route bundle to include either "' + NOMODULE + '" or "' + MODULE + '" keys, or both'));
        else bundleKeys.forEach((key)=>key in bundle && ensureBundle(bundle[key]));
    }
    if (route.redirect) [
        "bundle",
        "component"
    ].forEach((overriddenProp)=>{
        if (overriddenProp in route) console.warn(log(`Route config "${route.path}" has both "redirect" and "${overriddenProp}" properties, ` + `and "redirect" will always override the latter. Did you mean to only use "${overriddenProp}"?`));
    });
}
function ensureRoutes(routes) {
    toArray(routes).forEach((route)=>ensureRoute(route));
}
function loadScript(src, key) {
    let script = document.head.querySelector('script[src="' + src + '"][async]');
    if (!script) {
        script = document.createElement("script");
        script.setAttribute("src", src);
        if (key === MODULE) script.setAttribute("type", MODULE);
        else if (key === NOMODULE) script.setAttribute(NOMODULE, "");
        script.async = true;
    }
    return new Promise((resolve, reject)=>{
        script.onreadystatechange = script.onload = (e)=>{
            script.__dynamicImportLoaded = true;
            resolve(e);
        };
        script.onerror = (e)=>{
            if (script.parentNode) script.parentNode.removeChild(script);
            reject(e);
        };
        if (script.parentNode === null) document.head.appendChild(script);
        else if (script.__dynamicImportLoaded) resolve();
    });
}
function loadBundle(bundle) {
    if (isString(bundle)) return loadScript(bundle);
    else return Promise.race(bundleKeys.filter((key)=>key in bundle).map((key)=>loadScript(bundle[key], key)));
}
function fireRouterEvent(type, detail) {
    return !window.dispatchEvent(new CustomEvent(`vaadin-router-${type}`, {
        cancelable: type === "go",
        detail
    }));
}
function isObject(o) {
    // guard against null passing the typeof check
    return typeof o === "object" && !!o;
}
function isFunction(f) {
    return typeof f === "function";
}
function isString(s) {
    return typeof s === "string";
}
function getNotFoundError(context) {
    const error = new Error(log(`Page not found (${context.pathname})`));
    error.context = context;
    error.code = 404;
    return error;
}
const notFoundResult = new class NotFoundResult {
}();
/* istanbul ignore next: coverage is calculated in Chrome, this code is for IE */ function getAnchorOrigin(anchor) {
    // IE11: on HTTP and HTTPS the default port is not included into
    // window.location.origin, so won't include it here either.
    const port = anchor.port;
    const protocol = anchor.protocol;
    const defaultHttp = protocol === "http:" && port === "80";
    const defaultHttps = protocol === "https:" && port === "443";
    const host = defaultHttp || defaultHttps ? anchor.hostname // does not include the port number (e.g. www.example.org)
     : anchor.host; // does include the port number (e.g. www.example.org:80)
    return `${protocol}//${host}`;
}
// The list of checks is not complete:
//  - SVG support is missing
//  - the 'rel' attribute is not considered
function vaadinRouterGlobalClickHandler(event) {
    // ignore the click if the default action is prevented
    if (event.defaultPrevented) return;
    // ignore the click if not with the primary mouse button
    if (event.button !== 0) return;
    // ignore the click if a modifier key is pressed
    if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) return;
    // find the <a> element that the click is at (or within)
    let anchor = event.target;
    const path = event.composedPath ? event.composedPath() : event.path || [];
    // FIXME(web-padawan): `Symbol.iterator` used by webcomponentsjs is broken for arrays
    // example to check: `for...of` loop here throws the "Not yet implemented" error
    for(let i = 0; i < path.length; i++){
        const target = path[i];
        if (target.nodeName && target.nodeName.toLowerCase() === "a") {
            anchor = target;
            break;
        }
    }
    while(anchor && anchor.nodeName.toLowerCase() !== "a")anchor = anchor.parentNode;
    // ignore the click if not at an <a> element
    if (!anchor || anchor.nodeName.toLowerCase() !== "a") return;
    // ignore the click if the <a> element has a non-default target
    if (anchor.target && anchor.target.toLowerCase() !== "_self") return;
    // ignore the click if the <a> element has the 'download' attribute
    if (anchor.hasAttribute("download")) return;
    // ignore the click if the <a> element has the 'router-ignore' attribute
    if (anchor.hasAttribute("router-ignore")) return;
    // ignore the click if the target URL is a fragment on the current page
    if (anchor.pathname === window.location.pathname && anchor.hash !== "") return;
    // ignore the click if the target is external to the app
    // In IE11 HTMLAnchorElement does not have the `origin` property
    const origin = anchor.origin || getAnchorOrigin(anchor);
    if (origin !== window.location.origin) return;
    // if none of the above, convert the click into a navigation event
    const { pathname , search , hash  } = anchor;
    if (fireRouterEvent("go", {
        pathname,
        search,
        hash
    })) {
        event.preventDefault();
        // for a click event, the scroll is reset to the top position.
        if (event && event.type === "click") window.scrollTo(0, 0);
    }
}
/**
 * A navigation trigger for Vaadin Router that translated clicks on `<a>` links
 * into Vaadin Router navigation events.
 *
 * Only regular clicks on in-app links are translated (primary mouse button, no
 * modifier keys, the target href is within the app's URL space).
 *
 * @memberOf Router.NavigationTrigger
 * @type {NavigationTrigger}
 */ const CLICK = {
    activate () {
        window.document.addEventListener("click", vaadinRouterGlobalClickHandler);
    },
    inactivate () {
        window.document.removeEventListener("click", vaadinRouterGlobalClickHandler);
    }
};
// PopStateEvent constructor shim
const isIE = /Trident/.test(navigator.userAgent);
/* istanbul ignore next: coverage is calculated in Chrome, this code is for IE */ if (isIE && !isFunction(window.PopStateEvent)) {
    window.PopStateEvent = function(inType, params) {
        params = params || {};
        var e = document.createEvent("Event");
        e.initEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable));
        e.state = params.state || null;
        return e;
    };
    window.PopStateEvent.prototype = window.Event.prototype;
}
function vaadinRouterGlobalPopstateHandler(event) {
    if (event.state === "vaadin-router-ignore") return;
    const { pathname , search , hash  } = window.location;
    fireRouterEvent("go", {
        pathname,
        search,
        hash
    });
}
/**
 * A navigation trigger for Vaadin Router that translates popstate events into
 * Vaadin Router navigation events.
 *
 * @memberOf Router.NavigationTrigger
 * @type {NavigationTrigger}
 */ const POPSTATE = {
    activate () {
        window.addEventListener("popstate", vaadinRouterGlobalPopstateHandler);
    },
    inactivate () {
        window.removeEventListener("popstate", vaadinRouterGlobalPopstateHandler);
    }
};
/**
 * Expose `pathToRegexp`.
 */ var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;
/**
 * Default configs.
 */ var DEFAULT_DELIMITER = "/";
var DEFAULT_DELIMITERS = "./";
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */ var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    "(\\\\.)",
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
    // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
    "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"
].join("|"), "g");
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */ function parse(str, options) {
    var tokens = [];
    var key = 0;
    var index = 0;
    var path = "";
    var defaultDelimiter = options && options.delimiter || DEFAULT_DELIMITER;
    var delimiters = options && options.delimiters || DEFAULT_DELIMITERS;
    var pathEscaped = false;
    var res;
    while((res = PATH_REGEXP.exec(str)) !== null){
        var m = res[0];
        var escaped = res[1];
        var offset = res.index;
        path += str.slice(index, offset);
        index = offset + m.length;
        // Ignore already escaped sequences.
        if (escaped) {
            path += escaped[1];
            pathEscaped = true;
            continue;
        }
        var prev = "";
        var next = str[index];
        var name = res[2];
        var capture = res[3];
        var group = res[4];
        var modifier = res[5];
        if (!pathEscaped && path.length) {
            var k = path.length - 1;
            if (delimiters.indexOf(path[k]) > -1) {
                prev = path[k];
                path = path.slice(0, k);
            }
        }
        // Push the current path onto the tokens.
        if (path) {
            tokens.push(path);
            path = "";
            pathEscaped = false;
        }
        var partial = prev !== "" && next !== undefined && next !== prev;
        var repeat = modifier === "+" || modifier === "*";
        var optional = modifier === "?" || modifier === "*";
        var delimiter = prev || defaultDelimiter;
        var pattern = capture || group;
        tokens.push({
            name: name || key++,
            prefix: prev,
            delimiter: delimiter,
            optional: optional,
            repeat: repeat,
            partial: partial,
            pattern: pattern ? escapeGroup(pattern) : "[^" + escapeString(delimiter) + "]+?"
        });
    }
    // Push any remaining characters.
    if (path || index < str.length) tokens.push(path + str.substr(index));
    return tokens;
}
/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */ function compile(str, options) {
    return tokensToFunction(parse(str, options));
}
/**
 * Expose a method for transforming tokens into the path function.
 */ function tokensToFunction(tokens) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length);
    // Compile all the patterns before compilation.
    for(var i = 0; i < tokens.length; i++)if (typeof tokens[i] === "object") matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$");
    return function(data, options) {
        var path = "";
        var encode = options && options.encode || encodeURIComponent;
        for(var i = 0; i < tokens.length; i++){
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var segment;
            if (Array.isArray(value)) {
                if (!token.repeat) throw new TypeError('Expected "' + token.name + '" to not repeat, but got array');
                if (value.length === 0) {
                    if (token.optional) continue;
                    throw new TypeError('Expected "' + token.name + '" to not be empty');
                }
                for(var j = 0; j < value.length; j++){
                    segment = encode(value[j], token);
                    if (!matches[i].test(segment)) throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"');
                    path += (j === 0 ? token.prefix : token.delimiter) + segment;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
                segment = encode(String(value), token);
                if (!matches[i].test(segment)) throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
                path += token.prefix + segment;
                continue;
            }
            if (token.optional) {
                // Prepend partial segment prefixes.
                if (token.partial) path += token.prefix;
                continue;
            }
            throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? "an array" : "a string"));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */ function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */ function escapeGroup(group) {
    return group.replace(/([=!:$/()])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */ function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */ function regexpToRegexp(path, keys) {
    if (!keys) return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) for(var i = 0; i < groups.length; i++)keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        pattern: null
    });
    return path;
}
/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */ function arrayToRegexp(path, keys, options) {
    var parts = [];
    for(var i = 0; i < path.length; i++)parts.push(pathToRegexp(path[i], keys, options).source);
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */ function stringToRegexp(path, keys, options) {
    return tokensToRegExp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */ function tokensToRegExp(tokens, keys, options) {
    options = options || {};
    var strict = options.strict;
    var start = options.start !== false;
    var end = options.end !== false;
    var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
    var delimiters = options.delimiters || DEFAULT_DELIMITERS;
    var endsWith = [].concat(options.endsWith || []).map(escapeString).concat("$").join("|");
    var route = start ? "^" : "";
    var isEndDelimited = tokens.length === 0;
    // Iterate over the tokens and create our regexp string.
    for(var i = 0; i < tokens.length; i++){
        var token = tokens[i];
        if (typeof token === "string") {
            route += escapeString(token);
            isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
        } else {
            var capture = token.repeat ? "(?:" + token.pattern + ")(?:" + escapeString(token.delimiter) + "(?:" + token.pattern + "))*" : token.pattern;
            if (keys) keys.push(token);
            if (token.optional) {
                if (token.partial) route += escapeString(token.prefix) + "(" + capture + ")?";
                else route += "(?:" + escapeString(token.prefix) + "(" + capture + "))?";
            } else route += escapeString(token.prefix) + "(" + capture + ")";
        }
    }
    if (end) {
        if (!strict) route += "(?:" + delimiter + ")?";
        route += endsWith === "$" ? "$" : "(?=" + endsWith + ")";
    } else {
        if (!strict) route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        if (!isEndDelimited) route += "(?=" + delimiter + "|" + endsWith + ")";
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */ function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp) return regexpToRegexp(path, keys);
    if (Array.isArray(path)) return arrayToRegexp(/** @type {!Array} */ path, keys, options);
    return stringToRegexp(/** @type {string} */ path, keys, options);
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ const { hasOwnProperty  } = Object.prototype;
const cache = new Map();
// see https://github.com/pillarjs/path-to-regexp/issues/148
cache.set("|false", {
    keys: [],
    pattern: /(?:)/
});
function decodeParam(val) {
    try {
        return decodeURIComponent(val);
    } catch (err) {
        return val;
    }
}
function matchPath(routepath, path, exact, parentKeys, parentParams) {
    exact = !!exact;
    const cacheKey = `${routepath}|${exact}`;
    let regexp = cache.get(cacheKey);
    if (!regexp) {
        const keys = [];
        regexp = {
            keys,
            pattern: pathToRegexp_1(routepath, keys, {
                end: exact,
                strict: routepath === ""
            })
        };
        cache.set(cacheKey, regexp);
    }
    const m = regexp.pattern.exec(path);
    if (!m) return null;
    const params = Object.assign({}, parentParams);
    for(let i = 1; i < m.length; i++){
        const key = regexp.keys[i - 1];
        const prop = key.name;
        const value = m[i];
        if (value !== undefined || !hasOwnProperty.call(params, prop)) {
            if (key.repeat) params[prop] = value ? value.split(key.delimiter).map(decodeParam) : [];
            else params[prop] = value ? decodeParam(value) : value;
        }
    }
    return {
        path: m[0],
        keys: (parentKeys || []).concat(regexp.keys),
        params
    };
}
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ /**
 * Traverses the routes tree and matches its nodes to the given pathname from
 * the root down to the leaves. Each match consumes a part of the pathname and
 * the matching process continues for as long as there is a matching child
 * route for the remaining part of the pathname.
 *
 * The returned value is a lazily evaluated iterator.
 *
 * The leading "/" in a route path matters only for the root of the routes
 * tree (or if all parent routes are ""). In all other cases a leading "/" in
 * a child route path has no significance.
 *
 * The trailing "/" in a _route path_ matters only for the leaves of the
 * routes tree. A leaf route with a trailing "/" matches only a pathname that
 * also has a trailing "/".
 *
 * The trailing "/" in a route path does not affect matching of child routes
 * in any way.
 *
 * The trailing "/" in a _pathname_ generally does not matter (except for
 * the case of leaf nodes described above).
 *
 * The "" and "/" routes have special treatment:
 *  1. as a single route
 *     the "" and "/" routes match only the "" and "/" pathnames respectively
 *  2. as a parent in the routes tree
 *     the "" route matches any pathname without consuming any part of it
 *     the "/" route matches any absolute pathname consuming its leading "/"
 *  3. as a leaf in the routes tree
 *     the "" and "/" routes match only if the entire pathname is consumed by
 *         the parent routes chain. In this case "" and "/" are equivalent.
 *  4. several directly nested "" or "/" routes
 *     - directly nested "" or "/" routes are 'squashed' (i.e. nesting two
 *       "/" routes does not require a double "/" in the pathname to match)
 *     - if there are only "" in the parent routes chain, no part of the
 *       pathname is consumed, and the leading "/" in the child routes' paths
 *       remains significant
 *
 * Side effect:
 *   - the routes tree { path: '' } matches only the '' pathname
 *   - the routes tree { path: '', children: [ { path: '' } ] } matches any
 *     pathname (for the tree root)
 *
 * Prefix matching can be enabled also by `children: true`.
 */ function matchRoute(route, pathname, ignoreLeadingSlash, parentKeys, parentParams) {
    let match;
    let childMatches;
    let childIndex = 0;
    let routepath = route.path || "";
    if (routepath.charAt(0) === "/") {
        if (ignoreLeadingSlash) routepath = routepath.substr(1);
        ignoreLeadingSlash = true;
    }
    return {
        next (routeToSkip) {
            if (route === routeToSkip) return {
                done: true
            };
            const children = route.__children = route.__children || route.children;
            if (!match) {
                match = matchPath(routepath, pathname, !children, parentKeys, parentParams);
                if (match) return {
                    done: false,
                    value: {
                        route,
                        keys: match.keys,
                        params: match.params,
                        path: match.path
                    }
                };
            }
            if (match && children) while(childIndex < children.length){
                if (!childMatches) {
                    const childRoute = children[childIndex];
                    childRoute.parent = route;
                    let matchedLength = match.path.length;
                    if (matchedLength > 0 && pathname.charAt(matchedLength) === "/") matchedLength += 1;
                    childMatches = matchRoute(childRoute, pathname.substr(matchedLength), ignoreLeadingSlash, match.keys, match.params);
                }
                const childMatch = childMatches.next(routeToSkip);
                if (!childMatch.done) return {
                    done: false,
                    value: childMatch.value
                };
                childMatches = null;
                childIndex++;
            }
            return {
                done: true
            };
        }
    };
}
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ function resolveRoute(context) {
    if (isFunction(context.route.action)) return context.route.action(context);
    return undefined;
}
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ function isChildRoute(parentRoute, childRoute) {
    let route = childRoute;
    while(route){
        route = route.parent;
        if (route === parentRoute) return true;
    }
    return false;
}
function generateErrorMessage(currentContext) {
    let errorMessage = `Path '${currentContext.pathname}' is not properly resolved due to an error.`;
    const routePath = (currentContext.route || {}).path;
    if (routePath) errorMessage += ` Resolution had failed on route: '${routePath}'`;
    return errorMessage;
}
function updateChainForRoute(context, match) {
    const { route , path  } = match;
    if (route && !route.__synthetic) {
        const item = {
            path,
            route
        };
        if (!context.chain) context.chain = [];
        else // Discard old items
        if (route.parent) {
            let i = context.chain.length;
            while(i-- && context.chain[i].route && context.chain[i].route !== route.parent)context.chain.pop();
        }
        context.chain.push(item);
    }
}
/**
 */ class Resolver {
    constructor(routes, options = {}){
        if (Object(routes) !== routes) throw new TypeError("Invalid routes");
        this.baseUrl = options.baseUrl || "";
        this.errorHandler = options.errorHandler;
        this.resolveRoute = options.resolveRoute || resolveRoute;
        this.context = Object.assign({
            resolver: this
        }, options.context);
        this.root = Array.isArray(routes) ? {
            path: "",
            __children: routes,
            parent: null,
            __synthetic: true
        } : routes;
        this.root.parent = null;
    }
    /**
   * Returns the current list of routes (as a shallow copy). Adding / removing
   * routes to / from the returned array does not affect the routing config,
   * but modifying the route objects does.
   *
   * @return {!Array<!Router.Route>}
   */ getRoutes() {
        return [
            ...this.root.__children
        ];
    }
    /**
   * Sets the routing config (replacing the existing one).
   *
   * @param {!Array<!Router.Route>|!Router.Route} routes a single route or an array of those
   *    (the array is shallow copied)
   */ setRoutes(routes) {
        ensureRoutes(routes);
        const newRoutes = [
            ...toArray(routes)
        ];
        this.root.__children = newRoutes;
    }
    /**
   * Appends one or several routes to the routing config and returns the
   * effective routing config after the operation.
   *
   * @param {!Array<!Router.Route>|!Router.Route} routes a single route or an array of those
   *    (the array is shallow copied)
   * @return {!Array<!Router.Route>}
   * @protected
   */ addRoutes(routes) {
        ensureRoutes(routes);
        this.root.__children.push(...toArray(routes));
        return this.getRoutes();
    }
    /**
   * Removes all existing routes from the routing config.
   */ removeRoutes() {
        this.setRoutes([]);
    }
    /**
   * Asynchronously resolves the given pathname, i.e. finds all routes matching
   * the pathname and tries resolving them one after another in the order they
   * are listed in the routes config until the first non-null result.
   *
   * Returns a promise that is fulfilled with the return value of an object that consists of the first
   * route handler result that returns something other than `null` or `undefined` and context used to get this result.
   *
   * If no route handlers return a non-null result, or if no route matches the
   * given pathname the returned promise is rejected with a 'page not found'
   * `Error`.
   *
   * @param {!string|!{pathname: !string}} pathnameOrContext the pathname to
   *    resolve or a context object with a `pathname` property and other
   *    properties to pass to the route resolver functions.
   * @return {!Promise<any>}
   */ resolve(pathnameOrContext) {
        const context = Object.assign({}, this.context, isString(pathnameOrContext) ? {
            pathname: pathnameOrContext
        } : pathnameOrContext);
        const match = matchRoute(this.root, this.__normalizePathname(context.pathname), this.baseUrl);
        const resolve = this.resolveRoute;
        let matches = null;
        let nextMatches = null;
        let currentContext = context;
        function next(resume, parent = matches.value.route, prevResult) {
            const routeToSkip = prevResult === null && matches.value.route;
            matches = nextMatches || match.next(routeToSkip);
            nextMatches = null;
            if (!resume) {
                if (matches.done || !isChildRoute(parent, matches.value.route)) {
                    nextMatches = matches;
                    return Promise.resolve(notFoundResult);
                }
            }
            if (matches.done) return Promise.reject(getNotFoundError(context));
            currentContext = Object.assign(currentContext ? {
                chain: currentContext.chain ? currentContext.chain.slice(0) : []
            } : {}, context, matches.value);
            updateChainForRoute(currentContext, matches.value);
            return Promise.resolve(resolve(currentContext)).then((resolution)=>{
                if (resolution !== null && resolution !== undefined && resolution !== notFoundResult) {
                    currentContext.result = resolution.result || resolution;
                    return currentContext;
                }
                return next(resume, parent, resolution);
            });
        }
        context.next = next;
        return Promise.resolve().then(()=>next(true, this.root)).catch((error)=>{
            const errorMessage = generateErrorMessage(currentContext);
            if (!error) error = new Error(errorMessage);
            else console.warn(errorMessage);
            error.context = error.context || currentContext;
            // DOMException has its own code which is read-only
            if (!(error instanceof DOMException)) error.code = error.code || 500;
            if (this.errorHandler) {
                currentContext.result = this.errorHandler(error);
                return currentContext;
            }
            throw error;
        });
    }
    /**
   * URL constructor polyfill hook. Creates and returns an URL instance.
   */ static __createUrl(url, base) {
        return new URL(url, base);
    }
    /**
   * If the baseUrl property is set, transforms the baseUrl and returns the full
   * actual `base` string for using in the `new URL(path, base);` and for
   * prepernding the paths with. The returned base ends with a trailing slash.
   *
   * Otherwise, returns empty string.
   */ get __effectiveBaseUrl() {
        return this.baseUrl ? this.constructor.__createUrl(this.baseUrl, document.baseURI || document.URL).href.replace(/[^\/]*$/, "") : "";
    }
    /**
   * If the baseUrl is set, matches the pathname with the router’s baseUrl,
   * and returns the local pathname with the baseUrl stripped out.
   *
   * If the pathname does not match the baseUrl, returns undefined.
   *
   * If the `baseUrl` is not set, returns the unmodified pathname argument.
   */ __normalizePathname(pathname) {
        if (!this.baseUrl) // No base URL, no need to transform the pathname.
        return pathname;
        const base = this.__effectiveBaseUrl;
        const normalizedUrl = this.constructor.__createUrl(pathname, base).href;
        if (normalizedUrl.slice(0, base.length) === base) return normalizedUrl.slice(base.length);
    }
}
Resolver.pathToRegexp = pathToRegexp_1;
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ const { pathToRegexp: pathToRegexp$1  } = Resolver;
const cache$1 = new Map();
function cacheRoutes(routesByName, route, routes) {
    const name = route.name || route.component;
    if (name) {
        if (routesByName.has(name)) routesByName.get(name).push(route);
        else routesByName.set(name, [
            route
        ]);
    }
    if (Array.isArray(routes)) for(let i = 0; i < routes.length; i++){
        const childRoute = routes[i];
        childRoute.parent = route;
        cacheRoutes(routesByName, childRoute, childRoute.__children || childRoute.children);
    }
}
function getRouteByName(routesByName, routeName) {
    const routes = routesByName.get(routeName);
    if (routes && routes.length > 1) throw new Error(`Duplicate route with name "${routeName}".` + ` Try seting unique 'name' route properties.`);
    return routes && routes[0];
}
function getRoutePath(route) {
    let path = route.path;
    path = Array.isArray(path) ? path[0] : path;
    return path !== undefined ? path : "";
}
function generateUrls(router, options = {}) {
    if (!(router instanceof Resolver)) throw new TypeError("An instance of Resolver is expected");
    const routesByName = new Map();
    return (routeName, params)=>{
        let route = getRouteByName(routesByName, routeName);
        if (!route) {
            routesByName.clear(); // clear cache
            cacheRoutes(routesByName, router.root, router.root.__children);
            route = getRouteByName(routesByName, routeName);
            if (!route) throw new Error(`Route "${routeName}" not found`);
        }
        let regexp = cache$1.get(route.fullPath);
        if (!regexp) {
            let fullPath = getRoutePath(route);
            let rt = route.parent;
            while(rt){
                const path = getRoutePath(rt);
                if (path) fullPath = path.replace(/\/$/, "") + "/" + fullPath.replace(/^\//, "");
                rt = rt.parent;
            }
            const tokens = pathToRegexp$1.parse(fullPath);
            const toPath = pathToRegexp$1.tokensToFunction(tokens);
            const keys = Object.create(null);
            for(let i = 0; i < tokens.length; i++)if (!isString(tokens[i])) keys[tokens[i].name] = true;
            regexp = {
                toPath,
                keys
            };
            cache$1.set(fullPath, regexp);
            route.fullPath = fullPath;
        }
        let url = regexp.toPath(params, options) || "/";
        if (options.stringifyQueryParams && params) {
            const queryParams = {};
            const keys = Object.keys(params);
            for(let i = 0; i < keys.length; i++){
                const key = keys[i];
                if (!regexp.keys[key]) queryParams[key] = params[key];
            }
            const query = options.stringifyQueryParams(queryParams);
            if (query) url += query.charAt(0) === "?" ? query : `?${query}`;
        }
        return url;
    };
}
/**
 * @typedef NavigationTrigger
 * @type {object}
 * @property {function()} activate
 * @property {function()} inactivate
 */ /** @type {Array<NavigationTrigger>} */ let triggers = [];
function setNavigationTriggers(newTriggers) {
    triggers.forEach((trigger)=>trigger.inactivate());
    newTriggers.forEach((trigger)=>trigger.activate());
    triggers = newTriggers;
}
const willAnimate = (elem)=>{
    const name = getComputedStyle(elem).getPropertyValue("animation-name");
    return name && name !== "none";
};
const waitForAnimation = (elem, cb)=>{
    const listener = ()=>{
        elem.removeEventListener("animationend", listener);
        cb();
    };
    elem.addEventListener("animationend", listener);
};
function animate(elem, className) {
    elem.classList.add(className);
    return new Promise((resolve)=>{
        if (willAnimate(elem)) {
            const rect = elem.getBoundingClientRect();
            const size = `height: ${rect.bottom - rect.top}px; width: ${rect.right - rect.left}px`;
            elem.setAttribute("style", `position: absolute; ${size}`);
            waitForAnimation(elem, ()=>{
                elem.classList.remove(className);
                elem.removeAttribute("style");
                resolve();
            });
        } else {
            elem.classList.remove(className);
            resolve();
        }
    });
}
const MAX_REDIRECT_COUNT = 256;
function isResultNotEmpty(result) {
    return result !== null && result !== undefined;
}
function copyContextWithoutNext(context) {
    const copy = Object.assign({}, context);
    delete copy.next;
    return copy;
}
function createLocation({ pathname ="" , search ="" , hash ="" , chain =[] , params ={} , redirectFrom , resolver  }, route) {
    const routes = chain.map((item)=>item.route);
    return {
        baseUrl: resolver && resolver.baseUrl || "",
        pathname,
        search,
        hash,
        routes,
        route: route || routes.length && routes[routes.length - 1] || null,
        params,
        redirectFrom,
        getUrl: (userParams = {})=>getPathnameForRouter(Router.pathToRegexp.compile(getMatchedPath(routes))(Object.assign({}, params, userParams)), resolver)
    };
}
function createRedirect(context, pathname) {
    const params = Object.assign({}, context.params);
    return {
        redirect: {
            pathname,
            from: context.pathname,
            params
        }
    };
}
function renderElement(context, element) {
    element.location = createLocation(context);
    const index = context.chain.map((item)=>item.route).indexOf(context.route);
    context.chain[index].element = element;
    return element;
}
function runCallbackIfPossible(callback, args, thisArg) {
    if (isFunction(callback)) return callback.apply(thisArg, args);
}
function amend(amendmentFunction, args, element) {
    return (amendmentResult)=>{
        if (amendmentResult && (amendmentResult.cancel || amendmentResult.redirect)) return amendmentResult;
        if (element) return runCallbackIfPossible(element[amendmentFunction], args, element);
    };
}
function processNewChildren(newChildren, route) {
    if (!Array.isArray(newChildren) && !isObject(newChildren)) throw new Error(log(`Incorrect "children" value for the route ${route.path}: expected array or object, but got ${newChildren}`));
    route.__children = [];
    const childRoutes = toArray(newChildren);
    for(let i = 0; i < childRoutes.length; i++){
        ensureRoute(childRoutes[i]);
        route.__children.push(childRoutes[i]);
    }
}
function removeDomNodes(nodes) {
    if (nodes && nodes.length) {
        const parent = nodes[0].parentNode;
        for(let i = 0; i < nodes.length; i++)parent.removeChild(nodes[i]);
    }
}
function getPathnameForRouter(pathname, router) {
    const base = router.__effectiveBaseUrl;
    return base ? router.constructor.__createUrl(pathname.replace(/^\//, ""), base).pathname : pathname;
}
function getMatchedPath(chain) {
    return chain.map((item)=>item.path).reduce((a, b)=>{
        if (b.length) return a.replace(/\/$/, "") + "/" + b.replace(/^\//, "");
        return a;
    }, "");
}
/**
 * A simple client-side router for single-page applications. It uses
 * express-style middleware and has a first-class support for Web Components and
 * lazy-loading. Works great in Polymer and non-Polymer apps.
 *
 * Use `new Router(outlet, options)` to create a new Router instance.
 *
 * * The `outlet` parameter is a reference to the DOM node to render
 *   the content into.
 *
 * * The `options` parameter is an optional object with options. The following
 *   keys are supported:
 *   * `baseUrl` — the initial value for [
 *     the `baseUrl` property
 *   ](#/classes/Router#property-baseUrl)
 *
 * The Router instance is automatically subscribed to navigation events
 * on `window`.
 *
 * See [Live Examples](#/classes/Router/demos/demo/index.html) for the detailed usage demo and code snippets.
 *
 * See also detailed API docs for the following methods, for the advanced usage:
 *
 * * [setOutlet](#/classes/Router#method-setOutlet) – should be used to configure the outlet.
 * * [setTriggers](#/classes/Router#method-setTriggers) – should be used to configure the navigation events.
 * * [setRoutes](#/classes/Router#method-setRoutes) – should be used to configure the routes.
 *
 * Only `setRoutes` has to be called manually, others are automatically invoked when creating a new instance.
 *
 * @extends Resolver
 * @demo demo/index.html
 * @summary JavaScript class that renders different DOM content depending on
 *    a given path. It can re-render when triggered or automatically on
 *    'popstate' and / or 'click' events.
 */ class Router extends Resolver {
    /**
   * Creates a new Router instance with a given outlet, and
   * automatically subscribes it to navigation events on the `window`.
   * Using a constructor argument or a setter for outlet is equivalent:
   *
   * ```
   * const router = new Router();
   * router.setOutlet(outlet);
   * ```
   * @param {?Node=} outlet
   * @param {?RouterOptions=} options
   */ constructor(outlet, options){
        const baseElement = document.head.querySelector("base");
        const baseHref = baseElement && baseElement.getAttribute("href");
        super([], Object.assign({
            // Default options
            baseUrl: baseHref && Resolver.__createUrl(baseHref, document.URL).pathname.replace(/[^\/]*$/, "")
        }, options));
        this.resolveRoute = (context)=>this.__resolveRoute(context);
        const triggers = Router.NavigationTrigger;
        Router.setTriggers.apply(Router, Object.keys(triggers).map((key)=>triggers[key]));
        /**
     * The base URL for all routes in the router instance. By default,
     * if the base element exists in the `<head>`, vaadin-router
     * takes the `<base href>` attribute value, resolves against current `document.URL`
     * and gets the `pathname` from the result.
     *
     * @public
     * @type {string}
     */ this.baseUrl;
        /**
     * A promise that is settled after the current render cycle completes. If
     * there is no render cycle in progress the promise is immediately settled
     * with the last render cycle result.
     *
     * @public
     * @type {!Promise<!RouterLocation>}
     */ this.ready;
        this.ready = Promise.resolve(outlet);
        /**
     * Contains read-only information about the current router location:
     * pathname, active routes, parameters. See the
     * [Location type declaration](#/classes/RouterLocation)
     * for more details.
     *
     * @public
     * @type {!RouterLocation}
     */ this.location;
        this.location = createLocation({
            resolver: this
        });
        this.__lastStartedRenderId = 0;
        this.__navigationEventHandler = this.__onNavigationEvent.bind(this);
        this.setOutlet(outlet);
        this.subscribe();
        // Using WeakMap instead of WeakSet because WeakSet is not supported by IE11
        this.__createdByRouter = new WeakMap();
        this.__addedByRouter = new WeakMap();
    }
    __resolveRoute(context) {
        const route = context.route;
        let callbacks = Promise.resolve();
        if (isFunction(route.children)) callbacks = callbacks.then(()=>route.children(copyContextWithoutNext(context))).then((children)=>{
            // The route.children() callback might have re-written the
            // route.children property instead of returning a value
            if (!isResultNotEmpty(children) && !isFunction(route.children)) children = route.children;
            processNewChildren(children, route);
        });
        const commands = {
            redirect: (path)=>createRedirect(context, path),
            component: (component)=>{
                const element = document.createElement(component);
                this.__createdByRouter.set(element, true);
                return element;
            }
        };
        return callbacks.then(()=>{
            if (this.__isLatestRender(context)) return runCallbackIfPossible(route.action, [
                context,
                commands
            ], route);
        }).then((result)=>{
            if (isResultNotEmpty(result)) {
                // Actions like `() => import('my-view.js')` are not expected to
                // end the resolution, despite the result is not empty. Checking
                // the result with a whitelist of values that end the resolution.
                if (result instanceof HTMLElement || result.redirect || result === notFoundResult) return result;
            }
            if (isString(route.redirect)) return commands.redirect(route.redirect);
            if (route.bundle) return loadBundle(route.bundle).then(()=>{}, ()=>{
                throw new Error(log(`Bundle not found: ${route.bundle}. Check if the file name is correct`));
            });
        }).then((result)=>{
            if (isResultNotEmpty(result)) return result;
            if (isString(route.component)) return commands.component(route.component);
        });
    }
    /**
   * Sets the router outlet (the DOM node where the content for the current
   * route is inserted). Any content pre-existing in the router outlet is
   * removed at the end of each render pass.
   *
   * NOTE: this method is automatically invoked first time when creating a new Router instance.
   *
   * @param {?Node} outlet the DOM node where the content for the current route
   *     is inserted.
   */ setOutlet(outlet) {
        if (outlet) this.__ensureOutlet(outlet);
        this.__outlet = outlet;
    }
    /**
   * Returns the current router outlet. The initial value is `undefined`.
   *
   * @return {?Node} the current router outlet (or `undefined`)
   */ getOutlet() {
        return this.__outlet;
    }
    /**
   * Sets the routing config (replacing the existing one) and triggers a
   * navigation event so that the router outlet is refreshed according to the
   * current `window.location` and the new routing config.
   *
   * Each route object may have the following properties, listed here in the processing order:
   * * `path` – the route path (relative to the parent route if any) in the
   * [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths").
   *
   * * `children` – an array of nested routes or a function that provides this
   * array at the render time. The function can be synchronous or asynchronous:
   * in the latter case the render is delayed until the returned promise is
   * resolved. The `children` function is executed every time when this route is
   * being rendered. This allows for dynamic route structures (e.g. backend-defined),
   * but it might have a performance impact as well. In order to avoid calling
   * the function on subsequent renders, you can override the `children` property
   * of the route object and save the calculated array there
   * (via `context.route.children = [ route1, route2, ...];`).
   * Parent routes are fully resolved before resolving the children. Children
   * 'path' values are relative to the parent ones.
   *
   * * `action` – the action that is executed before the route is resolved.
   * The value for this property should be a function, accepting `context`
   * and `commands` parameters described below. If present, this function is
   * always invoked first, disregarding of the other properties' presence.
   * The action can return a result directly or within a `Promise`, which
   * resolves to the result. If the action result is an `HTMLElement` instance,
   * a `commands.component(name)` result, a `commands.redirect(path)` result,
   * or a `context.next()` result, the current route resolution is finished,
   * and other route config properties are ignored.
   * See also **Route Actions** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `redirect` – other route's path to redirect to. Passes all route parameters to the redirect target.
   * The target route should also be defined.
   * See also **Redirects** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `bundle` – string containing the path to `.js` or `.mjs` bundle to load before resolving the route,
   * or the object with "module" and "nomodule" keys referring to different bundles.
   * Each bundle is only loaded once. If "module" and "nomodule" are set, only one bundle is loaded,
   * depending on whether the browser supports ES modules or not.
   * The property is ignored when either an `action` returns the result or `redirect` property is present.
   * Any error, e.g. 404 while loading bundle will cause route resolution to throw.
   * See also **Code Splitting** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `component` – the tag name of the Web Component to resolve the route to.
   * The property is ignored when either an `action` returns the result or `redirect` property is present.
   * If route contains the `component` property (or an action that return a component)
   * and its child route also contains the `component` property, child route's component
   * will be rendered as a light dom child of a parent component.
   *
   * * `name` – the string name of the route to use in the
   * [`router.urlForName(name, params)`](#/classes/Router#method-urlForName)
   * navigation helper method.
   *
   * For any route function (`action`, `children`) defined, the corresponding `route` object is available inside the callback
   * through the `this` reference. If you need to access it, make sure you define the callback as a non-arrow function
   * because arrow functions do not have their own `this` reference.
   *
   * `context` object that is passed to `action` function holds the following properties:
   * * `context.pathname` – string with the pathname being resolved
   *
   * * `context.search` – search query string
   *
   * * `context.hash` – hash string
   *
   * * `context.params` – object with route parameters
   *
   * * `context.route` – object that holds the route that is currently being rendered.
   *
   * * `context.next()` – function for asynchronously getting the next route
   * contents from the resolution chain (if any)
   *
   * `commands` object that is passed to `action` function has
   * the following methods:
   *
   * * `commands.redirect(path)` – function that creates a redirect data
   * for the path specified.
   *
   * * `commands.component(component)` – function that creates a new HTMLElement
   * with current context. Note: the component created by this function is reused if visiting the same path twice in row.
   *
   *
   * @param {!Array<!Route>|!Route} routes a single route or an array of those
   * @param {?boolean} skipRender configure the router but skip rendering the
   *     route corresponding to the current `window.location` values
   *
   * @return {!Promise<!Node>}
   */ setRoutes(routes, skipRender = false) {
        this.__previousContext = undefined;
        this.__urlForName = undefined;
        super.setRoutes(routes);
        if (!skipRender) this.__onNavigationEvent();
        return this.ready;
    }
    /**
   * Asynchronously resolves the given pathname and renders the resolved route
   * component into the router outlet. If no router outlet is set at the time of
   * calling this method, or at the time when the route resolution is completed,
   * a `TypeError` is thrown.
   *
   * Returns a promise that is fulfilled with the router outlet DOM Node after
   * the route component is created and inserted into the router outlet, or
   * rejected if no route matches the given path.
   *
   * If another render pass is started before the previous one is completed, the
   * result of the previous render pass is ignored.
   *
   * @param {!string|!{pathname: !string, search: ?string, hash: ?string}} pathnameOrContext
   *    the pathname to render or a context object with a `pathname` property,
   *    optional `search` and `hash` properties, and other properties
   *    to pass to the resolver.
   * @param {boolean=} shouldUpdateHistory
   *    update browser history with the rendered location
   * @return {!Promise<!Node>}
   */ render(pathnameOrContext, shouldUpdateHistory) {
        const renderId = ++this.__lastStartedRenderId;
        const context = Object.assign({
            search: "",
            hash: ""
        }, isString(pathnameOrContext) ? {
            pathname: pathnameOrContext
        } : pathnameOrContext, {
            __renderId: renderId
        });
        // Find the first route that resolves to a non-empty result
        this.ready = this.resolve(context)// Process the result of this.resolve() and handle all special commands:
        // (redirect / prevent / component). If the result is a 'component',
        // then go deeper and build the entire chain of nested components matching
        // the pathname. Also call all 'on before' callbacks along the way.
        .then((context)=>this.__fullyResolveChain(context)).then((context)=>{
            if (this.__isLatestRender(context)) {
                const previousContext = this.__previousContext;
                // Check if the render was prevented and make an early return in that case
                if (context === previousContext) {
                    // Replace the history with the previous context
                    // to make sure the URL stays the same.
                    this.__updateBrowserHistory(previousContext, true);
                    return this.location;
                }
                this.location = createLocation(context);
                if (shouldUpdateHistory) // Replace only if first render redirects, so that we don’t leave
                // the redirecting record in the history
                this.__updateBrowserHistory(context, renderId === 1);
                fireRouterEvent("location-changed", {
                    router: this,
                    location: this.location
                });
                // Skip detaching/re-attaching there are no render changes
                if (context.__skipAttach) {
                    this.__copyUnchangedElements(context, previousContext);
                    this.__previousContext = context;
                    return this.location;
                }
                this.__addAppearingContent(context, previousContext);
                const animationDone = this.__animateIfNeeded(context);
                this.__runOnAfterEnterCallbacks(context);
                this.__runOnAfterLeaveCallbacks(context, previousContext);
                return animationDone.then(()=>{
                    if (this.__isLatestRender(context)) {
                        // If there is another render pass started after this one,
                        // the 'disappearing content' would be removed when the other
                        // render pass calls `this.__addAppearingContent()`
                        this.__removeDisappearingContent();
                        this.__previousContext = context;
                        return this.location;
                    }
                });
            }
        }).catch((error)=>{
            if (renderId === this.__lastStartedRenderId) {
                if (shouldUpdateHistory) this.__updateBrowserHistory(context);
                removeDomNodes(this.__outlet && this.__outlet.children);
                this.location = createLocation(Object.assign(context, {
                    resolver: this
                }));
                fireRouterEvent("error", Object.assign({
                    router: this,
                    error
                }, context));
                throw error;
            }
        });
        return this.ready;
    }
    // `topOfTheChainContextBeforeRedirects` is a context coming from Resolver.resolve().
    // It would contain a 'redirect' route or the first 'component' route that
    // matched the pathname. There might be more child 'component' routes to be
    // resolved and added into the chain. This method would find and add them.
    // `contextBeforeRedirects` is the context containing such a child component
    // route. It's only necessary when this method is called recursively (otherwise
    // it's the same as the 'top of the chain' context).
    //
    // Apart from building the chain of child components, this method would also
    // handle 'redirect' routes, call 'onBefore' callbacks and handle 'prevent'
    // and 'redirect' callback results.
    __fullyResolveChain(topOfTheChainContextBeforeRedirects, contextBeforeRedirects = topOfTheChainContextBeforeRedirects) {
        return this.__findComponentContextAfterAllRedirects(contextBeforeRedirects)// `contextAfterRedirects` is always a context with an `HTMLElement` result
        // In other cases the promise gets rejected and .then() is not called
        .then((contextAfterRedirects)=>{
            const redirectsHappened = contextAfterRedirects !== contextBeforeRedirects;
            const topOfTheChainContextAfterRedirects = redirectsHappened ? contextAfterRedirects : topOfTheChainContextBeforeRedirects;
            const matchedPath = getPathnameForRouter(getMatchedPath(contextAfterRedirects.chain), contextAfterRedirects.resolver);
            const isFound = matchedPath === contextAfterRedirects.pathname;
            // Recursive method to try matching more child and sibling routes
            const findNextContextIfAny = (context, parent = context.route, prevResult)=>{
                return context.next(undefined, parent, prevResult).then((nextContext)=>{
                    if (nextContext === null || nextContext === notFoundResult) {
                        // Next context is not found in children, ...
                        if (isFound) // ...but original context is already fully matching - use it
                        return context;
                        else if (parent.parent !== null) // ...and there is no full match yet - step up to check siblings
                        return findNextContextIfAny(context, parent.parent, nextContext);
                        else return nextContext;
                    }
                    return nextContext;
                });
            };
            return findNextContextIfAny(contextAfterRedirects).then((nextContext)=>{
                if (nextContext === null || nextContext === notFoundResult) throw getNotFoundError(topOfTheChainContextAfterRedirects);
                return nextContext && nextContext !== notFoundResult && nextContext !== contextAfterRedirects ? this.__fullyResolveChain(topOfTheChainContextAfterRedirects, nextContext) : this.__amendWithOnBeforeCallbacks(contextAfterRedirects);
            });
        });
    }
    __findComponentContextAfterAllRedirects(context) {
        const result = context.result;
        if (result instanceof HTMLElement) {
            renderElement(context, result);
            return Promise.resolve(context);
        } else if (result.redirect) return this.__redirect(result.redirect, context.__redirectCount, context.__renderId).then((context)=>this.__findComponentContextAfterAllRedirects(context));
        else if (result instanceof Error) return Promise.reject(result);
        else return Promise.reject(new Error(log(`Invalid route resolution result for path "${context.pathname}". ` + `Expected redirect object or HTML element, but got: "${logValue(result)}". ` + `Double check the action return value for the route.`)));
    }
    __amendWithOnBeforeCallbacks(contextWithFullChain) {
        return this.__runOnBeforeCallbacks(contextWithFullChain).then((amendedContext)=>{
            if (amendedContext === this.__previousContext || amendedContext === contextWithFullChain) return amendedContext;
            return this.__fullyResolveChain(amendedContext);
        });
    }
    __runOnBeforeCallbacks(newContext) {
        const previousContext = this.__previousContext || {};
        const previousChain = previousContext.chain || [];
        const newChain = newContext.chain;
        let callbacks = Promise.resolve();
        const prevent = ()=>({
                cancel: true
            });
        const redirect = (pathname)=>createRedirect(newContext, pathname);
        newContext.__divergedChainIndex = 0;
        newContext.__skipAttach = false;
        if (previousChain.length) {
            for(let i = 0; i < Math.min(previousChain.length, newChain.length); i = ++newContext.__divergedChainIndex){
                if (previousChain[i].route !== newChain[i].route || previousChain[i].path !== newChain[i].path && previousChain[i].element !== newChain[i].element || !this.__isReusableElement(previousChain[i].element, newChain[i].element)) break;
            }
            // Skip re-attaching and notifications if element and chain do not change
            newContext.__skipAttach = // Same route chain
            newChain.length === previousChain.length && newContext.__divergedChainIndex == newChain.length && // Same element
            this.__isReusableElement(newContext.result, previousContext.result);
            if (newContext.__skipAttach) {
                // execute onBeforeLeave for changed segment element when skipping attach
                for(let i = newChain.length - 1; i >= 0; i--)callbacks = this.__runOnBeforeLeaveCallbacks(callbacks, newContext, {
                    prevent
                }, previousChain[i]);
                // execute onBeforeEnter for changed segment element when skipping attach
                for(let i = 0; i < newChain.length; i++){
                    callbacks = this.__runOnBeforeEnterCallbacks(callbacks, newContext, {
                        prevent,
                        redirect
                    }, newChain[i]);
                    previousChain[i].element.location = createLocation(newContext, previousChain[i].route);
                }
            } else // execute onBeforeLeave when NOT skipping attach
            for(let i = previousChain.length - 1; i >= newContext.__divergedChainIndex; i--)callbacks = this.__runOnBeforeLeaveCallbacks(callbacks, newContext, {
                prevent
            }, previousChain[i]);
        }
        // execute onBeforeEnter when NOT skipping attach
        if (!newContext.__skipAttach) for(let i = 0; i < newChain.length; i++){
            if (i < newContext.__divergedChainIndex) {
                if (i < previousChain.length && previousChain[i].element) previousChain[i].element.location = createLocation(newContext, previousChain[i].route);
            } else {
                callbacks = this.__runOnBeforeEnterCallbacks(callbacks, newContext, {
                    prevent,
                    redirect
                }, newChain[i]);
                if (newChain[i].element) newChain[i].element.location = createLocation(newContext, newChain[i].route);
            }
        }
        return callbacks.then((amendmentResult)=>{
            if (amendmentResult) {
                if (amendmentResult.cancel) {
                    this.__previousContext.__renderId = newContext.__renderId;
                    return this.__previousContext;
                }
                if (amendmentResult.redirect) return this.__redirect(amendmentResult.redirect, newContext.__redirectCount, newContext.__renderId);
            }
            return newContext;
        });
    }
    __runOnBeforeLeaveCallbacks(callbacks, newContext, commands, chainElement) {
        const location = createLocation(newContext);
        return callbacks.then((result)=>{
            if (this.__isLatestRender(newContext)) {
                const afterLeaveFunction = amend("onBeforeLeave", [
                    location,
                    commands,
                    this
                ], chainElement.element);
                return afterLeaveFunction(result);
            }
        }).then((result)=>{
            if (!(result || {}).redirect) return result;
        });
    }
    __runOnBeforeEnterCallbacks(callbacks, newContext, commands, chainElement) {
        const location = createLocation(newContext, chainElement.route);
        return callbacks.then((result)=>{
            if (this.__isLatestRender(newContext)) {
                const beforeEnterFunction = amend("onBeforeEnter", [
                    location,
                    commands,
                    this
                ], chainElement.element);
                return beforeEnterFunction(result);
            }
        });
    }
    __isReusableElement(element, otherElement) {
        if (element && otherElement) return this.__createdByRouter.get(element) && this.__createdByRouter.get(otherElement) ? element.localName === otherElement.localName : element === otherElement;
        return false;
    }
    __isLatestRender(context) {
        return context.__renderId === this.__lastStartedRenderId;
    }
    __redirect(redirectData, counter, renderId) {
        if (counter > MAX_REDIRECT_COUNT) throw new Error(log(`Too many redirects when rendering ${redirectData.from}`));
        return this.resolve({
            pathname: this.urlForPath(redirectData.pathname, redirectData.params),
            redirectFrom: redirectData.from,
            __redirectCount: (counter || 0) + 1,
            __renderId: renderId
        });
    }
    __ensureOutlet(outlet = this.__outlet) {
        if (!(outlet instanceof Node)) throw new TypeError(log(`Expected router outlet to be a valid DOM Node (but got ${outlet})`));
    }
    __updateBrowserHistory({ pathname , search ="" , hash =""  }, replace) {
        if (window.location.pathname !== pathname || window.location.search !== search || window.location.hash !== hash) {
            const changeState = replace ? "replaceState" : "pushState";
            window.history[changeState](null, document.title, pathname + search + hash);
            window.dispatchEvent(new PopStateEvent("popstate", {
                state: "vaadin-router-ignore"
            }));
        }
    }
    __copyUnchangedElements(context, previousContext) {
        // Find the deepest common parent between the last and the new component
        // chains. Update references for the unchanged elements in the new chain
        let deepestCommonParent = this.__outlet;
        for(let i = 0; i < context.__divergedChainIndex; i++){
            const unchangedElement = previousContext && previousContext.chain[i].element;
            if (unchangedElement) {
                if (unchangedElement.parentNode === deepestCommonParent) {
                    context.chain[i].element = unchangedElement;
                    deepestCommonParent = unchangedElement;
                } else break;
            }
        }
        return deepestCommonParent;
    }
    __addAppearingContent(context, previousContext) {
        this.__ensureOutlet();
        // If the previous 'entering' animation has not completed yet,
        // stop it and remove that content from the DOM before adding new one.
        this.__removeAppearingContent();
        // Copy reusable elements from the previousContext to current
        const deepestCommonParent = this.__copyUnchangedElements(context, previousContext);
        // Keep two lists of DOM elements:
        //  - those that should be removed once the transition animation is over
        //  - and those that should remain
        this.__appearingContent = [];
        this.__disappearingContent = Array.from(deepestCommonParent.children).filter(// Only remove layout content that was added by router
        (e)=>this.__addedByRouter.get(e) && // Do not remove the result element to avoid flickering
            e !== context.result);
        // Add new elements (starting after the deepest common parent) to the DOM.
        // That way only the components that are actually different between the two
        // locations are added to the DOM (and those that are common remain in the
        // DOM without first removing and then adding them again).
        let parentElement = deepestCommonParent;
        for(let i = context.__divergedChainIndex; i < context.chain.length; i++){
            const elementToAdd = context.chain[i].element;
            if (elementToAdd) {
                parentElement.appendChild(elementToAdd);
                this.__addedByRouter.set(elementToAdd, true);
                if (parentElement === deepestCommonParent) this.__appearingContent.push(elementToAdd);
                parentElement = elementToAdd;
            }
        }
    }
    __removeDisappearingContent() {
        if (this.__disappearingContent) removeDomNodes(this.__disappearingContent);
        this.__disappearingContent = null;
        this.__appearingContent = null;
    }
    __removeAppearingContent() {
        if (this.__disappearingContent && this.__appearingContent) {
            removeDomNodes(this.__appearingContent);
            this.__disappearingContent = null;
            this.__appearingContent = null;
        }
    }
    __runOnAfterLeaveCallbacks(currentContext, targetContext) {
        if (!targetContext) return;
        // REVERSE iteration: from Z to A
        for(let i = targetContext.chain.length - 1; i >= currentContext.__divergedChainIndex; i--){
            if (!this.__isLatestRender(currentContext)) break;
            const currentComponent = targetContext.chain[i].element;
            if (!currentComponent) continue;
            try {
                const location = createLocation(currentContext);
                runCallbackIfPossible(currentComponent.onAfterLeave, [
                    location,
                    {},
                    targetContext.resolver
                ], currentComponent);
            } finally{
                if (this.__disappearingContent.indexOf(currentComponent) > -1) removeDomNodes(currentComponent.children);
            }
        }
    }
    __runOnAfterEnterCallbacks(currentContext) {
        // forward iteration: from A to Z
        for(let i = currentContext.__divergedChainIndex; i < currentContext.chain.length; i++){
            if (!this.__isLatestRender(currentContext)) break;
            const currentComponent = currentContext.chain[i].element || {};
            const location = createLocation(currentContext, currentContext.chain[i].route);
            runCallbackIfPossible(currentComponent.onAfterEnter, [
                location,
                {},
                currentContext.resolver
            ], currentComponent);
        }
    }
    __animateIfNeeded(context) {
        const from = (this.__disappearingContent || [])[0];
        const to = (this.__appearingContent || [])[0];
        const promises = [];
        const chain = context.chain;
        let config;
        for(let i = chain.length; i > 0; i--)if (chain[i - 1].route.animate) {
            config = chain[i - 1].route.animate;
            break;
        }
        if (from && to && config) {
            const leave = isObject(config) && config.leave || "leaving";
            const enter = isObject(config) && config.enter || "entering";
            promises.push(animate(from, leave));
            promises.push(animate(to, enter));
        }
        return Promise.all(promises).then(()=>context);
    }
    /**
   * Subscribes this instance to navigation events on the `window`.
   *
   * NOTE: beware of resource leaks. For as long as a router instance is
   * subscribed to navigation events, it won't be garbage collected.
   */ subscribe() {
        window.addEventListener("vaadin-router-go", this.__navigationEventHandler);
    }
    /**
   * Removes the subscription to navigation events created in the `subscribe()`
   * method.
   */ unsubscribe() {
        window.removeEventListener("vaadin-router-go", this.__navigationEventHandler);
    }
    __onNavigationEvent(event) {
        const { pathname , search , hash  } = event ? event.detail : window.location;
        if (isString(this.__normalizePathname(pathname))) {
            if (event && event.preventDefault) event.preventDefault();
            this.render({
                pathname,
                search,
                hash
            }, true);
        }
    }
    /**
   * Configures what triggers Router navigation events:
   *  - `POPSTATE`: popstate events on the current `window`
   *  - `CLICK`: click events on `<a>` links leading to the current page
   *
   * This method is invoked with the pre-configured values when creating a new Router instance.
   * By default, both `POPSTATE` and `CLICK` are enabled. This setup is expected to cover most of the use cases.
   *
   * See the `router-config.js` for the default navigation triggers config. Based on it, you can
   * create the own one and only import the triggers you need, instead of pulling in all the code,
   * e.g. if you want to handle `click` differently.
   *
   * See also **Navigation Triggers** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * @param {...NavigationTrigger} triggers
   */ static setTriggers(...triggers) {
        setNavigationTriggers(triggers);
    }
    /**
   * Generates a URL for the route with the given name, optionally performing
   * substitution of parameters.
   *
   * The route is searched in all the Router instances subscribed to
   * navigation events.
   *
   * **Note:** For child route names, only array children are considered.
   * It is not possible to generate URLs using a name for routes set with
   * a children function.
   *
   * @function urlForName
   * @param {!string} name the route name or the route’s `component` name.
   * @param {Params=} params Optional object with route path parameters.
   * Named parameters are passed by name (`params[name] = value`), unnamed
   * parameters are passed by index (`params[index] = value`).
   *
   * @return {string}
   */ urlForName(name, params) {
        if (!this.__urlForName) this.__urlForName = generateUrls(this);
        return getPathnameForRouter(this.__urlForName(name, params), this);
    }
    /**
   * Generates a URL for the given route path, optionally performing
   * substitution of parameters.
   *
   * @param {!string} path string route path declared in [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths").
   * @param {Params=} params Optional object with route path parameters.
   * Named parameters are passed by name (`params[name] = value`), unnamed
   * parameters are passed by index (`params[index] = value`).
   *
   * @return {string}
   */ urlForPath(path, params) {
        return getPathnameForRouter(Router.pathToRegexp.compile(path)(params), this);
    }
    /**
   * Triggers navigation to a new path. Returns a boolean without waiting until
   * the navigation is complete. Returns `true` if at least one `Router`
   * has handled the navigation (was subscribed and had `baseUrl` matching
   * the `path` argument), otherwise returns `false`.
   *
   * @param {!string|!{pathname: !string, search: (string|undefined), hash: (string|undefined)}} path
   *   a new in-app path string, or an URL-like object with `pathname`
   *   string property, and optional `search` and `hash` string properties.
   * @return {boolean}
   */ static go(path) {
        const { pathname , search , hash  } = isString(path) ? this.__createUrl(path, "http://a") // some base to omit origin
         : path;
        return fireRouterEvent("go", {
            pathname,
            search,
            hash
        });
    }
}
const DEV_MODE_CODE_REGEXP = /\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;
const FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;
function isMinified() {
    function test() {
        /** vaadin-dev-mode:start
    return false;
    vaadin-dev-mode:end **/ return true;
    }
    return uncommentAndRun(test);
}
function isDevelopmentMode() {
    try {
        if (isForcedDevelopmentMode()) return true;
        if (!isLocalhost()) return false;
        if (FlowClients) return !isFlowProductionMode();
        return !isMinified();
    } catch (e) {
        // Some error in this code, assume production so no further actions will be taken
        return false;
    }
}
function isForcedDevelopmentMode() {
    return localStorage.getItem("vaadin.developmentmode.force");
}
function isLocalhost() {
    return [
        "localhost",
        "127.0.0.1"
    ].indexOf(window.location.hostname) >= 0;
}
function isFlowProductionMode() {
    if (FlowClients) {
        const productionModeApps = Object.keys(FlowClients).map((key)=>FlowClients[key]).filter((client)=>client.productionMode);
        if (productionModeApps.length > 0) return true;
    }
    return false;
}
function uncommentAndRun(callback, args) {
    if (typeof callback !== "function") return;
    const match = DEV_MODE_CODE_REGEXP.exec(callback.toString());
    if (match) try {
        // requires CSP: script-src 'unsafe-eval'
        callback = new Function(match[1]);
    } catch (e) {
        // eat the exception
        console.log("vaadin-development-mode-detector: uncommentAndRun() failed", e);
    }
    return callback(args);
}
// A guard against polymer-modulizer removing the window.Vaadin
// initialization above.
window["Vaadin"] = window["Vaadin"] || {};
/**
 * Inspects the source code of the given `callback` function for
 * specially-marked _commented_ code. If such commented code is found in the
 * callback source, uncomments and runs that code instead of the callback
 * itself. Otherwise runs the callback as is.
 *
 * The optional arguments are passed into the callback / uncommented code,
 * the result is returned.
 *
 * See the `isMinified()` function source code in this file for an example.
 *
 */ const runIfDevelopmentMode = function(callback, args) {
    if (window.Vaadin.developmentMode) return uncommentAndRun(callback, args);
};
if (window.Vaadin.developmentMode === undefined) window.Vaadin.developmentMode = isDevelopmentMode();
/* This file is autogenerated from src/vaadin-usage-statistics.tpl.html */ function maybeGatherAndSendStats() {
/** vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.0';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/ }
const usageStatistics = function() {
    if (typeof runIfDevelopmentMode === "function") return runIfDevelopmentMode(maybeGatherAndSendStats);
};
window.Vaadin = window.Vaadin || {};
window.Vaadin.registrations = window.Vaadin.registrations || [];
window.Vaadin.registrations.push({
    is: "@vaadin/router",
    version: "1.7.4"
});
usageStatistics();
Router.NavigationTrigger = {
    POPSTATE,
    CLICK
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dkNYO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UseRouter", ()=>UseRouter);
parcelHelpers.export(exports, "UseNavIndicator", ()=>UseNavIndicator);
var _methods = require("./methods");
function UseRouter() {
    return function(target, propertyKey) {
        Reflect.defineProperty(target, propertyKey, {
            get: ()=>(0, _methods.getRouter)(),
            enumerable: false,
            configurable: false
        });
    };
}
function UseNavIndicator() {
    return function(target, propertyKey) {
        Reflect.defineProperty(target, propertyKey, {
            get: ()=>(0, _methods.getNavIndicator)(),
            enumerable: false,
            configurable: false
        });
    };
}

},{"./methods":"8NJuH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8NJuH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCurrentRoute", ()=>isCurrentRoute);
parcelHelpers.export(exports, "getRouter", ()=>getRouter);
parcelHelpers.export(exports, "getNavIndicator", ()=>getNavIndicator);
parcelHelpers.export(exports, "showNavIndicator", ()=>showNavIndicator);
parcelHelpers.export(exports, "hideNavIndicator", ()=>hideNavIndicator);
var _core = require("@tinijs/core");
var _consts = require("./consts");
function isCurrentRoute(router, context) {
    const { pathname: currPathname , search: currSearch , hash: currHash  } = router.__previousContext || {};
    const { pathname , search , hash  } = context || {};
    return pathname === currPathname && search === currSearch && hash === currHash;
}
function getRouter() {
    const appOrGlobal = (0, _core.getAppInstance)(true);
    return appOrGlobal.$router || appOrGlobal.$tiniRouter || null;
}
function getNavIndicator() {
    const app = (0, _core.getAppInstance)();
    if (!app) return null;
    const root = app.renderRoot;
    return root.querySelector((0, _consts.NAV_INDICATOR)) || root.querySelector(`#${(0, _consts.NAV_INDICATOR_ID)}`);
}
function showNavIndicator() {
    const node = getNavIndicator();
    if (!node) return;
    if (node.show instanceof Function) node.show();
    else node.classList.add((0, _consts.CLASS_ACTIVE));
}
function hideNavIndicator() {
    const node = getNavIndicator();
    if (!node) return;
    if (node.hide instanceof Function) node.hide();
    else node.classList.remove((0, _consts.CLASS_ACTIVE));
}

},{"@tinijs/core":"cUOty","./consts":"heua6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"heua6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NAV_INDICATOR_ID", ()=>NAV_INDICATOR_ID);
parcelHelpers.export(exports, "NAV_INDICATOR", ()=>NAV_INDICATOR);
parcelHelpers.export(exports, "CLASS_ACTIVE", ()=>CLASS_ACTIVE);
const NAV_INDICATOR_ID = "nav-indicator";
const NAV_INDICATOR = `app-${NAV_INDICATOR_ID}`;
const CLASS_ACTIVE = "active";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4DRFq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8x40v":[function(require,module,exports) {
/* eslint-disable @typescript-eslint/no-explicit-any */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerRoutes", ()=>registerRoutes);
var _router = require("@vaadin/router");
var _core = require("@tinijs/core");
var _methods = require("./methods");
function registerRoutes(routes) {
    var _a;
    const app = (0, _core.getAppInstance)();
    const router = new (0, _router.Router)(app.renderRoot.querySelector(`#${(0, _core.ROUTER_OUTLET_ID)}`));
    router.setRoutes(routes);
    // handle nav indicator
    if ((_a = (0, _core.GLOBAL).$tiniAppOptions) === null || _a === void 0 ? void 0 : _a.navIndicator) {
        router._indicatorSchedule = null;
        // exit
        (0, _core.registerGlobalHook)("page" /* COMPONENT_TYPES.PAGE */ , "onChildrenReady" /* LIFECYCLE_HOOKS.ON_CHILDREN_READY */ , ()=>{
            if (router._indicatorSchedule === null) return;
            (0, _methods.hideNavIndicator)();
            // cancel schedule (if scheduled)
            clearTimeout(router._indicatorSchedule);
            router._indicatorSchedule = null;
        });
        // entry
        window.addEventListener("vaadin-router-go", (e)=>{
            if ((0, _methods.isCurrentRoute)(router, e.detail)) return;
            router._indicatorSchedule = setTimeout(()=>(0, _methods.showNavIndicator)(), 500);
        });
    }
    // result
    return router;
}

},{"@vaadin/router":"kVZrF","@tinijs/core":"cUOty","./methods":"8NJuH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a3Yx0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _decorators = require("./lib/decorators");
parcelHelpers.exportAll(_decorators, exports);
var _subscription = require("./lib/subscription");
parcelHelpers.exportAll(_subscription, exports);
var _types = require("./lib/types");
parcelHelpers.exportAll(_types, exports);
var _main = require("./lib/main");
parcelHelpers.exportAll(_main, exports);

},{"./lib/decorators":"6ybKg","./lib/subscription":"lxwKJ","./lib/types":"dZddT","./lib/main":"4BITV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ybKg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SubscribeStore", ()=>SubscribeStore);
parcelHelpers.export(exports, "UseStore", ()=>UseStore);
parcelHelpers.export(exports, "UseStates", ()=>UseStates);
var _subscription = require("./subscription");
var _main = require("./main");
function SubscribeStore() {
    return function(target, propertyKey) {
        Reflect.defineProperty(target, propertyKey, {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            value: new (0, _subscription.StoreSubscription)(target),
            enumerable: false,
            configurable: false
        });
    };
}
function UseStore() {
    return function(target, propertyKey) {
        Reflect.defineProperty(target, propertyKey, {
            get: ()=>(0, _main.getStore)(),
            enumerable: false,
            configurable: false
        });
    };
}
function UseStates() {
    return function(target, propertyKey) {
        Reflect.defineProperty(target, propertyKey, {
            get: ()=>{
                var _a;
                return (_a = (0, _main.getStore)()) === null || _a === void 0 ? void 0 : _a.get();
            },
            enumerable: false,
            configurable: false
        });
    };
}

},{"./subscription":"lxwKJ","./main":"4BITV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxwKJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StoreSubscription", ()=>StoreSubscription);
var _main = require("./main");
class StoreSubscription {
    constructor(host){
        this._host = host;
        host.addController(this);
    }
    subscribe(cb) {
        var _a;
        if (!this.unsubscribe) this.unsubscribe = (_a = this.store) === null || _a === void 0 ? void 0 : _a.subscribe((states)=>cb(states));
    }
    get(...keyPath) {
        var _a;
        return (_a = this.store) === null || _a === void 0 ? void 0 : _a.get(...keyPath);
    }
    commit(transaction, payload, ...keyPath) {
        var _a;
        return (_a = this.store) === null || _a === void 0 ? void 0 : _a.commit(transaction, payload, ...keyPath);
    }
    hostConnected() {
        this.store = (0, _main.getStore)();
    }
    hostDisconnected() {
        if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = undefined;
        }
    }
}

},{"./main":"4BITV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4BITV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStore", ()=>createStore);
parcelHelpers.export(exports, "getStore", ()=>getStore);
var _tinyx = require("tinyx");
var _core = require("@tinijs/core");
function createStore(states) {
    return (0, _tinyx.tx)(states);
}
function getStore() {
    const appOrGlobal = (0, _core.getAppInstance)(true);
    return appOrGlobal.$store || appOrGlobal.$tiniStore || null;
}

},{"tinyx":"b6oKY","@tinijs/core":"cUOty","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6oKY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deepFreeze", ()=>deepFreeze);
parcelHelpers.export(exports, "getIn", ()=>getIn);
parcelHelpers.export(exports, "setIn", ()=>setIn);
parcelHelpers.export(exports, "updateIn", ()=>updateIn);
parcelHelpers.export(exports, "deleteIn", ()=>deleteIn);
parcelHelpers.export(exports, "produce", ()=>produce);
parcelHelpers.export(exports, "writable", ()=>writable);
parcelHelpers.export(exports, "tx", ()=>tx);
parcelHelpers.export(exports, "derived", ()=>derived);
parcelHelpers.export(exports, "select", ()=>select);
const frozen = ()=>{
    throw new TypeError("Object is frozen");
};
const deepFreeze = (o)=>{
    if (typeof o !== "object" || !o || Object.isFrozen(o)) return o;
    if (![
        Object,
        Array,
        Map,
        Set
    ].some((C)=>C.prototype === Object.getPrototypeOf(o))) return o;
    if (o instanceof Map || o instanceof Set) {
        for (let method of [
            "add",
            "set",
            "clear",
            "delete"
        ])Object.defineProperty(o, method, {
            value: frozen
        });
        [
            ...Object.freeze(o)
        ].forEach(deepFreeze);
    } else Object.keys(Object.freeze(o)).forEach((key)=>deepFreeze(o[key]));
    return o;
};
const getIn = (o, ...keyPath)=>{
    if (!keyPath.length) return o;
    if (o === null || o === undefined) return undefined;
    let [key, ...path] = keyPath;
    return getIn(o instanceof Map ? o.get(key) : o[key], ...path);
};
const setIn = (o, ...keyPath)=>{
    let value = keyPath.pop();
    if (!keyPath.length) return deepFreeze(value);
    let [key, ...path] = keyPath;
    if (o instanceof Map) return deepFreeze(new Map(o).set(key, setIn(o.get(key), ...path, value)));
    return deepFreeze(Object.assign(o instanceof Array ? [] : {}, o, {
        [key]: setIn(o && o[key], ...path, value)
    }));
};
const updateIn = (o, ...keyPath)=>{
    let updater = keyPath.pop();
    let oldValue = getIn(o, ...keyPath), newValue = updater(oldValue);
    return oldValue === newValue ? o : setIn(o, ...keyPath, newValue);
};
const deleteIn = (o, key, ...path)=>{
    if (!o || typeof o !== "object") return o;
    if (!path.length) {
        if (o instanceof Map) (o = new Map(o)).delete(key);
        else if (o instanceof Set) (o = new Set(o)).delete(key);
        else delete (o = o instanceof Array ? [
            ...o
        ] : {
            ...o
        })[key];
        return deepFreeze(o);
    }
    return setIn(o, key, deleteIn(getIn(o, key), ...path));
};
const prepend = (push, prefixPath)=>push && (({ path , ...rest })=>push({
            path: [
                ...prefixPath,
                ...path
            ],
            ...rest
        }));
const produce = (mutation, record)=>(state)=>{
        const ops = {
            get: (...path)=>getIn(state, ...path),
            set: (...path)=>{
                const newValue = path.pop();
                const oldValue = getIn(state, ...path);
                if (newValue === oldValue) return state;
                if (record) record({
                    path,
                    oldValue,
                    newValue
                });
                return state = setIn(state, ...path, newValue);
            },
            update: (...path)=>{
                const updater = path.pop();
                const oldValue = getIn(state, ...path);
                const newValue = updater(oldValue);
                if (newValue === oldValue) return state;
                if (record) record({
                    path,
                    oldValue,
                    newValue
                });
                return state = setIn(state, ...path, newValue);
            },
            remove: (...path)=>{
                if (record) record({
                    path,
                    oldValue: getIn(state, ...path)
                });
                return state = deleteIn(state, ...path);
            },
            apply: (...path)=>{
                let innerMutation = path.pop();
                return state = updateIn(state, ...path, produce(innerMutation, prepend(record, path)));
            }
        };
        if (mutation) mutation(ops);
        return state;
    };
const writable = (value, equals = (a, b)=>a === b)=>{
    const subscribers = new Set();
    const subscribe = (subscriber)=>{
        subscribers.add(subscriber);
        subscriber(value);
        return ()=>subscribers.delete(subscriber);
    };
    const set = (newValue)=>{
        if (equals(newValue, value)) return false;
        value = newValue;
        for (let subscriber of subscribers)subscriber(value);
        return true;
    };
    return {
        subscribe,
        set,
        get: ()=>value,
        update: (updater)=>set(updater(value))
    };
};
const tx = (initialState)=>{
    const { subscribe , get , update  } = writable(deepFreeze(initialState));
    return {
        subscribe,
        get: (...keyPath)=>getIn(get(), ...keyPath),
        commit: (transaction, payload, ...keyPath)=>{
            let changes = [];
            update((state)=>updateIn(state, ...keyPath, produce(transaction(payload), prepend((r)=>changes.push(r), keyPath))));
            return changes;
        }
    };
};
const derived = ({ subscribe , get  }, selector, equals = (a, b)=>a === b)=>{
    const derivedStore = writable(undefined, equals);
    const compute = (state)=>derivedStore.set(selector(state));
    let subscriberCount = 0;
    let stop;
    return {
        subscribe: (subscriber)=>{
            if (0 === subscriberCount++) stop = subscribe(compute);
            const unsubscribe = derivedStore.subscribe(subscriber);
            return ()=>{
                unsubscribe();
                if (--subscriberCount === 0) stop();
            };
        },
        get: (...keyPath)=>{
            if (subscriberCount === 0) compute(get());
            return getIn(derivedStore.get(), ...keyPath);
        }
    };
};
const select = ({ subscribe , get , commit  }, selector)=>{
    const derivedStore = derived({
        subscribe,
        get
    }, (state)=>get(...selector(state)));
    return {
        ...derivedStore,
        commit: (transaction, payload, ...keyPath)=>{
            const root = selector(get());
            return commit(transaction, payload, ...root, ...keyPath).map(({ path , ...rest })=>({
                    path: path.slice(root.length),
                    ...rest
                }));
        }
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZddT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8jP2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    env: "development"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"16eSy":[function(require,module,exports) {
/* eslint-disable @typescript-eslint/ban-ts-comment */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const providers = {
};
exports.default = providers;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"28Dv0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const routes = [
    {
        path: "",
        component: "layout-default",
        children: [
            {
                path: "",
                component: "page-home"
            },
            {
                path: "(.*)",
                component: "page-oops"
            }
        ]
    }
];
exports.default = routes;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"472ls":[function(require,module,exports) {
// null = use the extracted values from index.html
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "metas", ()=>metas);
const metas = null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dFxV1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const states = {
    key: "value"
};
exports.default = states;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Rf7Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DefaultLayout", ()=>DefaultLayout);
var _core = require("@tinijs/core");
var _header = require("../components/header");
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let DefaultLayout = class DefaultLayout extends (0, _core.TiniComponent) {
    render() {
        return (0, _core.html)`
      <app-header></app-header>
      <div class="page"><slot></slot></div>
    `;
    }
};
DefaultLayout = __decorate([
    (0, _core.Layout)("layout-default")
], DefaultLayout);

},{"@tinijs/core":"cUOty","../components/header":"2h2Mw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2h2Mw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HeaderComponent", ()=>HeaderComponent);
var _core = require("@tinijs/core");
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let HeaderComponent = class HeaderComponent extends (0, _core.TiniComponent) {
    render() {
        return (0, _core.html)`
      <header>
        <div class="left">
          <a href="/">
            <img src=${new URL(require("58658e07e01a95a1"))} alt="Raksul Sample" />
            <h1>Raksul Sample</h1>
          </a>
        </div>
        <div class="right">
          <a href="https://github.com/lamnhan/raksul-sample/tree/remastered" target="_blank">Source code</a>
        </div>
      </header>
    `;
    }
};
HeaderComponent.styles = [
    (0, _core.css)`*,
*::before,
*::after {
  box-sizing: border-box;
}

[hidden] {
  display: none !important;
}

a {
  font-family: var(--font-body);
  font-size: var(--size-font);
  color: var(--color-primary);
  text-decoration: underline;
}

a:hover {
  color: var(--color-primary-shade);
}

a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

img {
  vertical-align: middle;
}

h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  font-family: var(--font-head);
  color: var(--color-foreground);
  font-weight: 500;
  font-size: 2.5rem;
}`,
    (0, _core.css)`:host {
  margin: 0;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--color-primary);
  color: var(--color-light);
}
header .left a {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  text-decoration: none;
}
header .left a img {
  width: 2rem;
  height: 2rem;
}
header .left a h1 {
  color: var(--color-light);
  font-size: 1.25rem;
  margin: 0 0 0 0.5rem;
}
header .right a {
  color: var(--color-light);
  text-decoration: none;
}
header .right a:hover {
  text-decoration: underline;
}`
];
HeaderComponent = __decorate([
    (0, _core.Component)("app-header")
], HeaderComponent);

},{"@tinijs/core":"cUOty","58658e07e01a95a1":"dAq4u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dAq4u":[function(require,module,exports) {
module.exports = require("b287136f6f7e09b4").getBundleURL("fPE0S") + "logo.a55c8f57.svg" + "?" + Date.now();

},{"b287136f6f7e09b4":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"5VnDu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HomePage", ()=>HomePage);
var _core = require("@tinijs/core");
var _welcome = require("../components/welcome");
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let HomePage = class HomePage extends (0, _core.TiniComponent) {
    render() {
        return (0, _core.html)`<app-welcome></app-welcome>`;
    }
};
HomePage.styles = [
    (0, _core.css)`*,
*::before,
*::after {
  box-sizing: border-box;
}

[hidden] {
  display: none !important;
}`,
    (0, _core.css)`:host {
  text-align: center;
}`
];
HomePage = __decorate([
    (0, _core.Page)("page-home")
], HomePage);

},{"@tinijs/core":"cUOty","../components/welcome":"3lG8c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3lG8c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WelcomeComponent", ()=>WelcomeComponent);
var _core = require("@tinijs/core");
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let WelcomeComponent = class WelcomeComponent extends (0, _core.TiniComponent) {
    render() {
        return (0, _core.html)`<h1>Hello world! 👋</h1>`;
    }
};
WelcomeComponent = __decorate([
    (0, _core.Component)("app-welcome")
], WelcomeComponent);

},{"@tinijs/core":"cUOty","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e51no":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OopsPage", ()=>OopsPage);
var _core = require("@tinijs/core");
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let OopsPage = class OopsPage extends (0, _core.TiniComponent) {
    constructor(){
        super(...arguments);
        this.metas = {
            title: "Oops",
            description: "Error 404, not found!"
        };
    }
    render() {
        return (0, _core.html)`<h1 style="text-align: center;">Oops 🫣!</h1>`;
    }
};
OopsPage = __decorate([
    (0, _core.Page)("page-oops")
], OopsPage);

},{"@tinijs/core":"cUOty","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jXcmj","bXLqa"], "bXLqa", "parcelRequirec720")

//# sourceMappingURL=index.7568b1b3.js.map
