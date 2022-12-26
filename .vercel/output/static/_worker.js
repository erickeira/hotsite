var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// <define:__CONFIG__>
var define_CONFIG_default;
var init_define_CONFIG = __esm({
  "<define:__CONFIG__>"() {
    define_CONFIG_default = { version: 3, routes: [{ src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$", headers: { Location: "/$1" }, status: 308, continue: true }, { src: "/_next/__private/trace", dest: "/404", status: 404, continue: true }, { src: "/404/?", status: 404, continue: true, missing: [{ type: "header", key: "x-prerender-revalidate" }] }, { src: "/500", status: 500, continue: true }, { handle: "filesystem" }, { src: "/_next/data/(.*)", dest: "/_next/data/$1", check: true }, { handle: "resource" }, { src: "/.*", status: 404 }, { handle: "miss" }, { src: "/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+", status: 404, check: true, dest: "$0" }, { handle: "rewrite" }, { src: "/_next/data/(.*)", dest: "/404", status: 404 }, { handle: "hit" }, { src: "/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|99ki0IZzCAeGTnrcDp0no)/.+", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }, { src: "/index", headers: { "x-matched-path": "/" }, continue: true, important: true }, { src: "/((?!index$).*)", headers: { "x-matched-path": "/$1" }, continue: true, important: true }, { handle: "error" }, { src: "/.*", dest: "/404", status: 404 }, { src: "/.*", dest: "/500", status: 500 }], images: { domains: [], sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 16, 32, 48, 64, 96, 128, 256, 384], remotePatterns: [], minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;" }, overrides: { "404.html": { path: "404", contentType: "text/html; charset=utf-8" }, "500.html": { path: "500", contentType: "text/html; charset=utf-8" } } };
  }
});

// node_modules/@cloudflare/next-on-pages/templates/_worker.js/globals.js
var init_globals = __esm({
  "node_modules/@cloudflare/next-on-pages/templates/_worker.js/globals.js"() {
    globalThis.process = { env: { NODE_ENV: "production" } };
  }
});

// ../../../../../private/var/folders/f2/wxtrqvqx3ms_nbk6mf806f3m0000gn/T/cqmlrxl0hgd/index.func.js
var index_func_exports = {};
__export(index_func_exports, {
  default: () => index_func_default
});
var _ENTRIES, index_func_default;
var init_index_func = __esm({
  "../../../../../private/var/folders/f2/wxtrqvqx3ms_nbk6mf806f3m0000gn/T/cqmlrxl0hgd/index.func.js"() {
    init_define_CONFIG();
    init_globals();
    init_functions_0az05mjkvxsf();
    _ENTRIES = {};
    self.__BUILD_MANIFEST = { polyfillFiles: ["static/chunks/polyfills-c67a75d1b6f99dc8.js"], devFiles: [], ampDevFiles: [], lowPriorityFiles: ["static/99ki0IZzCAeGTnrcDp0no/_buildManifest.js", "static/99ki0IZzCAeGTnrcDp0no/_ssgManifest.js"], rootMainFiles: [], pages: { "/": ["static/chunks/webpack-8fa1640cc84ba8fe.js", "static/chunks/framework-c177813b50544101.js", "static/chunks/main-db2e19ef8ac40d4f.js", "static/chunks/pages/index-8c61ec8997efc5f0.js"], "/_app": ["static/chunks/webpack-8fa1640cc84ba8fe.js", "static/chunks/framework-c177813b50544101.js", "static/chunks/main-db2e19ef8ac40d4f.js", "static/css/876d048b5dab7c28.css", "static/chunks/pages/_app-657ed7a84922f3b3.js"], "/_error": ["static/chunks/webpack-8fa1640cc84ba8fe.js", "static/chunks/framework-c177813b50544101.js", "static/chunks/main-db2e19ef8ac40d4f.js", "static/chunks/pages/_error-8353112a01355ec2.js"] }, ampFirstPages: [] };
    self.__REACT_LOADABLE_MANIFEST = {};
    self.__FONT_LOADER_MANIFEST = { pages: {}, app: {} };
    (() => {
      "use strict";
      var __webpack_modules__ = {};
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) {
          return cachedModule.exports;
        }
        var module = __webpack_module_cache__[moduleId] = {
          exports: {}
        };
        var threw = true;
        try {
          __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
          threw = false;
        } finally {
          if (threw)
            delete __webpack_module_cache__[moduleId];
        }
        return module.exports;
      }
      __webpack_require__.m = __webpack_modules__;
      (() => {
        var deferred = [];
        __webpack_require__.O = (result, chunkIds, fn, priority) => {
          if (chunkIds) {
            priority = priority || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
              deferred[i] = deferred[i - 1];
            deferred[i] = [chunkIds, fn, priority];
            return;
          }
          var notFulfilled = Infinity;
          for (var i = 0; i < deferred.length; i++) {
            var [chunkIds, fn, priority] = deferred[i];
            var fulfilled = true;
            for (var j = 0; j < chunkIds.length; j++) {
              if ((priority & false || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => __webpack_require__.O[key](chunkIds[j]))) {
                chunkIds.splice(j--, 1);
              } else {
                fulfilled = false;
                if (priority < notFulfilled)
                  notFulfilled = priority;
              }
            }
            if (fulfilled) {
              deferred.splice(i--, 1);
              var r = fn();
              if (r !== void 0)
                result = r;
            }
          }
          return result;
        };
      })();
      (() => {
        __webpack_require__.n = (module) => {
          var getter = module && module.__esModule ? () => module["default"] : () => module;
          __webpack_require__.d(getter, { a: getter });
          return getter;
        };
      })();
      (() => {
        __webpack_require__.d = (exports, definition) => {
          for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
              Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
            }
          }
        };
      })();
      (() => {
        __webpack_require__.g = function() {
          if (typeof globalThis === "object")
            return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e) {
            if (typeof window === "object")
              return window;
          }
        }();
      })();
      (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
      })();
      (() => {
        __webpack_require__.r = (exports) => {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
          }
          Object.defineProperty(exports, "__esModule", { value: true });
        };
      })();
      (() => {
        var installedChunks = {
          993: 0
        };
        __webpack_require__.O.j = (chunkId) => installedChunks[chunkId] === 0;
        var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
          var [chunkIds, moreModules, runtime] = data;
          var moduleId, chunkId, i = 0;
          if (chunkIds.some((id) => installedChunks[id] !== 0)) {
            for (moduleId in moreModules) {
              if (__webpack_require__.o(moreModules, moduleId)) {
                __webpack_require__.m[moduleId] = moreModules[moduleId];
              }
            }
            if (runtime)
              var result = runtime(__webpack_require__);
          }
          if (parentChunkLoadingFunction)
            parentChunkLoadingFunction(data);
          for (; i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
              installedChunks[chunkId][0]();
            }
            installedChunks[chunkId] = 0;
          }
          return __webpack_require__.O(result);
        };
        var chunkLoadingGlobal = self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || [];
        chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
        chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
      })();
    })();
    (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], { 350: () => {
    }, 876: (e, t, r) => {
      var _a, _b;
      "use strict";
      let n, a, i;
      r.r(t), r.d(t, { ComponentMod: () => nP, default: () => nk });
      var o, s, l = {};
      r.r(l), r.d(l, { default: () => np, getStaticProps: () => nf });
      var u = {};
      r.r(u), r.d(u, { default: () => ny, runtime: () => ng });
      var c = {};
      r.r(c), r.d(c, { default: () => nw });
      class d extends Error {
        constructor({ page: e10 }) {
          super(`The middleware "${e10}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
        }
      }
      class h extends Error {
        constructor() {
          super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
        }
      }
      class p extends Error {
        constructor() {
          super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
        }
      }
      function f(e10) {
        let t10 = new Headers();
        for (let [r10, n2] of Object.entries(e10)) {
          let a2 = Array.isArray(n2) ? n2 : [n2];
          for (let i2 of a2)
            void 0 !== i2 && t10.append(r10, i2);
        }
        return t10;
      }
      function m(e10) {
        var t10, r10, n2, a2, i2, o2 = [], s2 = 0;
        function l2() {
          for (; s2 < e10.length && /\s/.test(e10.charAt(s2)); )
            s2 += 1;
          return s2 < e10.length;
        }
        for (; s2 < e10.length; ) {
          for (t10 = s2, i2 = false; l2(); )
            if ("," === (r10 = e10.charAt(s2))) {
              for (n2 = s2, s2 += 1, l2(), a2 = s2; s2 < e10.length && "=" !== (r10 = e10.charAt(s2)) && ";" !== r10 && "," !== r10; )
                s2 += 1;
              s2 < e10.length && "=" === e10.charAt(s2) ? (i2 = true, s2 = a2, o2.push(e10.substring(t10, n2)), t10 = s2) : s2 = n2 + 1;
            } else
              s2 += 1;
          (!i2 || s2 >= e10.length) && o2.push(e10.substring(t10, e10.length));
        }
        return o2;
      }
      function g(e10) {
        let t10 = {};
        if (e10)
          for (let [r10, n2] of e10.entries())
            t10[r10] = n2, "set-cookie" === r10.toLowerCase() && (t10[r10] = m(n2));
        return t10;
      }
      function y(e10) {
        try {
          return String(new URL(String(e10)));
        } catch (t10) {
          throw Error(`URL is malformed "${String(e10)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, { cause: t10 });
        }
      }
      let v = Symbol("response"), b = Symbol("passThrough"), x = Symbol("waitUntil");
      class w {
        constructor(e10) {
          __publicField(this, _a, []);
          __publicField(this, _b, false);
        }
        respondWith(e10) {
          this[v] || (this[v] = Promise.resolve(e10));
        }
        passThroughOnException() {
          this[b] = true;
        }
        waitUntil(e10) {
          this[x].push(e10);
        }
      }
      _a = x, _b = b;
      class S extends w {
        constructor(e10) {
          super(e10.request), this.sourcePage = e10.page;
        }
        get request() {
          throw new d({ page: this.sourcePage });
        }
        respondWith() {
          throw new d({ page: this.sourcePage });
        }
      }
      function _(e10, t10, r10) {
        let n2;
        if (e10)
          for (let a2 of (r10 && (r10 = r10.toLowerCase()), e10)) {
            var i2, o2;
            let s2 = null == (i2 = a2.domain) ? void 0 : i2.split(":")[0].toLowerCase();
            if (t10 === s2 || r10 === a2.defaultLocale.toLowerCase() || (null == (o2 = a2.locales) ? void 0 : o2.some((e11) => e11.toLowerCase() === r10))) {
              n2 = a2;
              break;
            }
          }
        return n2;
      }
      function C(e10) {
        return e10.replace(/\/$/, "") || "/";
      }
      function E(e10) {
        let t10 = e10.indexOf("#"), r10 = e10.indexOf("?"), n2 = r10 > -1 && (t10 < 0 || r10 < t10);
        return n2 || t10 > -1 ? { pathname: e10.substring(0, n2 ? r10 : t10), query: n2 ? e10.substring(r10, t10 > -1 ? t10 : void 0) : "", hash: t10 > -1 ? e10.slice(t10) : "" } : { pathname: e10, query: "", hash: "" };
      }
      function R(e10, t10) {
        if (!e10.startsWith("/") || !t10)
          return e10;
        let { pathname: r10, query: n2, hash: a2 } = E(e10);
        return `${t10}${r10}${n2}${a2}`;
      }
      function P(e10, t10) {
        if (!e10.startsWith("/") || !t10)
          return e10;
        let { pathname: r10, query: n2, hash: a2 } = E(e10);
        return `${r10}${t10}${n2}${a2}`;
      }
      function k(e10, t10) {
        if ("string" != typeof e10)
          return false;
        let { pathname: r10 } = E(e10);
        return r10 === t10 || r10.startsWith(t10 + "/");
      }
      function T(e10, t10, r10, n2) {
        return t10 && t10 !== r10 && (n2 || !k(e10.toLowerCase(), `/${t10.toLowerCase()}`) && !k(e10.toLowerCase(), "/api")) ? R(e10, `/${t10}`) : e10;
      }
      function A(e10) {
        let t10 = T(e10.pathname, e10.locale, e10.buildId ? void 0 : e10.defaultLocale, e10.ignorePrefix);
        return (e10.buildId || !e10.trailingSlash) && (t10 = C(t10)), e10.buildId && (t10 = P(R(t10, `/_next/data/${e10.buildId}`), "/" === e10.pathname ? "index.json" : ".json")), t10 = R(t10, e10.basePath), !e10.buildId && e10.trailingSlash ? t10.endsWith("/") ? t10 : P(t10, "/") : C(t10);
      }
      function $(e10, t10) {
        var r10;
        return null == (r10 = !Array.isArray(null == t10 ? void 0 : t10.host) && (null == t10 ? void 0 : t10.host) || e10.hostname) ? void 0 : r10.split(":")[0].toLowerCase();
      }
      function O(e10, t10) {
        let r10;
        let n2 = e10.split("/");
        return (t10 || []).some((t11) => !!n2[1] && n2[1].toLowerCase() === t11.toLowerCase() && (r10 = t11, n2.splice(1, 1), e10 = n2.join("/") || "/", true)), { pathname: e10, detectedLocale: r10 };
      }
      function I(e10, t10) {
        if (k(e10, t10)) {
          let r10 = e10.slice(t10.length);
          return r10.startsWith("/") ? r10 : `/${r10}`;
        }
        return e10;
      }
      function L(e10, t10) {
        var r10;
        let { basePath: n2, i18n: a2, trailingSlash: i2 } = null != (r10 = t10.nextConfig) ? r10 : {}, o2 = { pathname: e10, trailingSlash: "/" !== e10 ? e10.endsWith("/") : i2 };
        if (n2 && k(o2.pathname, n2) && (o2.pathname = I(o2.pathname, n2), o2.basePath = n2), true === t10.parseData && o2.pathname.startsWith("/_next/data/") && o2.pathname.endsWith(".json")) {
          let s2 = o2.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/"), l2 = s2[0];
          o2.pathname = "index" !== s2[1] ? `/${s2.slice(1).join("/")}` : "/", o2.buildId = l2;
        }
        if (a2) {
          let u2 = O(o2.pathname, a2.locales);
          o2.locale = null == u2 ? void 0 : u2.detectedLocale, o2.pathname = (null == u2 ? void 0 : u2.pathname) || o2.pathname;
        }
        return o2;
      }
      let j = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;
      function M(e10, t10) {
        return new URL(String(e10).replace(j, "localhost"), t10 && String(t10).replace(j, "localhost"));
      }
      let F = Symbol("NextURLInternal");
      class D {
        constructor(e10, t10, r10) {
          let n2, a2;
          "object" == typeof t10 && "pathname" in t10 || "string" == typeof t10 ? (n2 = t10, a2 = r10 || {}) : a2 = r10 || t10 || {}, this[F] = { url: M(e10, n2 ?? a2.base), options: a2, basePath: "" }, this.analyzeUrl();
        }
        analyzeUrl() {
          var e10, t10, r10, n2, a2;
          let i2 = L(this[F].url.pathname, { nextConfig: this[F].options.nextConfig, parseData: true });
          this[F].domainLocale = _(null == (e10 = this[F].options.nextConfig) ? void 0 : null == (t10 = e10.i18n) ? void 0 : t10.domains, $(this[F].url, this[F].options.headers));
          let o2 = (null == (r10 = this[F].domainLocale) ? void 0 : r10.defaultLocale) || (null == (n2 = this[F].options.nextConfig) ? void 0 : null == (a2 = n2.i18n) ? void 0 : a2.defaultLocale);
          this[F].url.pathname = i2.pathname, this[F].defaultLocale = o2, this[F].basePath = i2.basePath ?? "", this[F].buildId = i2.buildId, this[F].locale = i2.locale ?? o2, this[F].trailingSlash = i2.trailingSlash;
        }
        formatPathname() {
          return A({ basePath: this[F].basePath, buildId: this[F].buildId, defaultLocale: this[F].options.forceLocale ? void 0 : this[F].defaultLocale, locale: this[F].locale, pathname: this[F].url.pathname, trailingSlash: this[F].trailingSlash });
        }
        formatSearch() {
          return this[F].url.search;
        }
        get buildId() {
          return this[F].buildId;
        }
        set buildId(e10) {
          this[F].buildId = e10;
        }
        get locale() {
          return this[F].locale ?? "";
        }
        set locale(e10) {
          var t10, r10;
          if (!this[F].locale || !(null == (t10 = this[F].options.nextConfig) ? void 0 : null == (r10 = t10.i18n) ? void 0 : r10.locales.includes(e10)))
            throw TypeError(`The NextURL configuration includes no locale "${e10}"`);
          this[F].locale = e10;
        }
        get defaultLocale() {
          return this[F].defaultLocale;
        }
        get domainLocale() {
          return this[F].domainLocale;
        }
        get searchParams() {
          return this[F].url.searchParams;
        }
        get host() {
          return this[F].url.host;
        }
        set host(e10) {
          this[F].url.host = e10;
        }
        get hostname() {
          return this[F].url.hostname;
        }
        set hostname(e10) {
          this[F].url.hostname = e10;
        }
        get port() {
          return this[F].url.port;
        }
        set port(e10) {
          this[F].url.port = e10;
        }
        get protocol() {
          return this[F].url.protocol;
        }
        set protocol(e10) {
          this[F].url.protocol = e10;
        }
        get href() {
          let e10 = this.formatPathname(), t10 = this.formatSearch();
          return `${this.protocol}//${this.host}${e10}${t10}${this.hash}`;
        }
        set href(e10) {
          this[F].url = M(e10), this.analyzeUrl();
        }
        get origin() {
          return this[F].url.origin;
        }
        get pathname() {
          return this[F].url.pathname;
        }
        set pathname(e10) {
          this[F].url.pathname = e10;
        }
        get hash() {
          return this[F].url.hash;
        }
        set hash(e10) {
          this[F].url.hash = e10;
        }
        get search() {
          return this[F].url.search;
        }
        set search(e10) {
          this[F].url.search = e10;
        }
        get password() {
          return this[F].url.password;
        }
        set password(e10) {
          this[F].url.password = e10;
        }
        get username() {
          return this[F].url.username;
        }
        set username(e10) {
          this[F].url.username = e10;
        }
        get basePath() {
          return this[F].basePath;
        }
        set basePath(e10) {
          this[F].basePath = e10.startsWith("/") ? e10 : `/${e10}`;
        }
        toString() {
          return this.href;
        }
        toJSON() {
          return this.href;
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { href: this.href, origin: this.origin, protocol: this.protocol, username: this.username, password: this.password, host: this.host, hostname: this.hostname, port: this.port, pathname: this.pathname, search: this.search, searchParams: this.searchParams, hash: this.hash };
        }
        clone() {
          return new D(String(this), this[F].options);
        }
      }
      let N = ["strict", "lax", "none"];
      function q(e10) {
        return e10 = e10.toLowerCase(), N.includes(e10) ? e10 : void 0;
      }
      function U(e10) {
        let t10 = {};
        for (let r10 in e10)
          e10[r10] && (t10[r10] = e10[r10]);
        return t10;
      }
      function B(e10) {
        let t10 = ["path" in e10 && e10.path && `Path=${e10.path}`, "expires" in e10 && e10.expires && `Expires=${e10.expires.toUTCString()}`, "maxAge" in e10 && e10.maxAge && `Max-Age=${e10.maxAge}`, "domain" in e10 && e10.domain && `Domain=${e10.domain}`, "secure" in e10 && e10.secure && "Secure", "httpOnly" in e10 && e10.httpOnly && "HttpOnly", "sameSite" in e10 && e10.sameSite && `SameSite=${e10.sameSite}`].filter(Boolean);
        return `${e10.name}=${encodeURIComponent(e10.value ?? "")}; ${t10.join("; ")}`;
      }
      function z(e10) {
        let t10 = /* @__PURE__ */ new Map();
        for (let r10 of e10.split(/; */)) {
          if (!r10)
            continue;
          let [n2, a2] = r10.split("=", 2);
          t10.set(n2, decodeURIComponent(a2 ?? "true"));
        }
        return t10;
      }
      function H(e10) {
        if (!e10)
          return;
        let [[t10, r10], ...n2] = z(e10), { domain: a2, expires: i2, httponly: o2, maxage: s2, path: l2, samesite: u2, secure: c2 } = Object.fromEntries(n2.map(([e11, t11]) => [e11.toLowerCase(), t11])), d2 = { name: t10, value: decodeURIComponent(r10), domain: a2, ...i2 && { expires: new Date(i2) }, ...o2 && { httpOnly: true }, ..."string" == typeof s2 && { maxAge: Number(s2) }, path: l2, ...u2 && { sameSite: q(u2) }, ...c2 && { secure: true } };
        return U(d2);
      }
      class W {
        constructor(e10) {
          __publicField(this, "_parsed", /* @__PURE__ */ new Map());
          this._headers = e10;
          let t10 = e10.get("cookie");
          if (t10) {
            let r10 = z(t10);
            for (let [n2, a2] of r10)
              this._parsed.set(n2, { name: n2, value: a2 });
          }
        }
        [Symbol.iterator]() {
          return this._parsed[Symbol.iterator]();
        }
        get size() {
          return this._parsed.size;
        }
        get(...e10) {
          let t10 = "string" == typeof e10[0] ? e10[0] : e10[0].name;
          return this._parsed.get(t10);
        }
        getAll(...e10) {
          var t10;
          let r10 = Array.from(this._parsed);
          if (!e10.length)
            return r10.map(([e11, t11]) => t11);
          let n2 = "string" == typeof e10[0] ? e10[0] : null == (t10 = e10[0]) ? void 0 : t10.name;
          return r10.filter(([e11]) => e11 === n2).map(([e11, t11]) => t11);
        }
        has(e10) {
          return this._parsed.has(e10);
        }
        set(...e10) {
          let [t10, r10] = 1 === e10.length ? [e10[0].name, e10[0].value] : e10, n2 = this._parsed;
          return n2.set(t10, { name: t10, value: r10 }), this._headers.set("cookie", Array.from(n2).map(([e11, t11]) => B(t11)).join("; ")), this;
        }
        delete(e10) {
          let t10 = this._parsed, r10 = Array.isArray(e10) ? e10.map((e11) => t10.delete(e11)) : t10.delete(e10);
          return this._headers.set("cookie", Array.from(t10).map(([e11, t11]) => B(t11)).join("; ")), r10;
        }
        clear() {
          return this.delete(Array.from(this._parsed.keys())), this;
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
        }
      }
      function V(e10, t10) {
        for (let [, r10] of (t10.delete("set-cookie"), e10)) {
          let n2 = B(r10);
          t10.append("set-cookie", n2);
        }
      }
      function G(e10 = { name: "", value: "" }) {
        return e10.maxAge && (e10.expires = new Date(Date.now() + 1e3 * e10.maxAge)), (null === e10.path || void 0 === e10.path) && (e10.path = "/"), e10;
      }
      class Y {
        constructor(e10) {
          __publicField(this, "_parsed", /* @__PURE__ */ new Map());
          this._headers = e10;
          let t10 = this._headers.getAll("set-cookie");
          for (let r10 of t10) {
            let n2 = H(r10);
            n2 && this._parsed.set(n2.name, n2);
          }
        }
        get(...e10) {
          let t10 = "string" == typeof e10[0] ? e10[0] : e10[0].name;
          return this._parsed.get(t10);
        }
        getAll(...e10) {
          var t10;
          let r10 = Array.from(this._parsed.values());
          if (!e10.length)
            return r10;
          let n2 = "string" == typeof e10[0] ? e10[0] : null == (t10 = e10[0]) ? void 0 : t10.name;
          return r10.filter((e11) => e11.name === n2);
        }
        set(...e10) {
          let [t10, r10, n2] = 1 === e10.length ? [e10[0].name, e10[0].value, e10[0]] : e10, a2 = this._parsed;
          return a2.set(t10, G({ name: t10, value: r10, ...n2 })), V(a2, this._headers), this;
        }
        delete(...e10) {
          let t10 = "string" == typeof e10[0] ? e10[0] : e10[0].name;
          return this.set({ name: t10, value: "", expires: new Date(0) });
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
        }
      }
      let J = Symbol("internal request");
      class Z extends Request {
        constructor(e10, t10 = {}) {
          let r10 = "string" != typeof e10 && "url" in e10 ? e10.url : String(e10);
          y(r10), super(r10, t10), this[J] = { cookies: new W(this.headers), geo: t10.geo || {}, ip: t10.ip, url: new D(r10, { headers: g(this.headers), nextConfig: t10.nextConfig }) };
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { cookies: this.cookies, geo: this.geo, ip: this.ip, nextUrl: this.nextUrl, url: this.url, bodyUsed: this.bodyUsed, cache: this.cache, credentials: this.credentials, destination: this.destination, headers: Object.fromEntries(this.headers), integrity: this.integrity, keepalive: this.keepalive, method: this.method, mode: this.mode, redirect: this.redirect, referrer: this.referrer, referrerPolicy: this.referrerPolicy, signal: this.signal };
        }
        get cookies() {
          return this[J].cookies;
        }
        get geo() {
          return this[J].geo;
        }
        get ip() {
          return this[J].ip;
        }
        get nextUrl() {
          return this[J].url;
        }
        get page() {
          throw new h();
        }
        get ua() {
          throw new p();
        }
        get url() {
          return this[J].url.toString();
        }
      }
      let X = Symbol("internal response"), K = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
      function Q(e10, t10) {
        var r10;
        if (null == e10 ? void 0 : null == (r10 = e10.request) ? void 0 : r10.headers) {
          if (!(e10.request.headers instanceof Headers))
            throw Error("request.headers must be an instance of Headers");
          let n2 = [];
          for (let [a2, i2] of e10.request.headers)
            t10.set("x-middleware-request-" + a2, i2), n2.push(a2);
          t10.set("x-middleware-override-headers", n2.join(","));
        }
      }
      class ee extends Response {
        constructor(e10, t10 = {}) {
          super(e10, t10), this[X] = { cookies: new Y(this.headers), url: t10.url ? new D(t10.url, { headers: g(this.headers), nextConfig: t10.nextConfig }) : void 0 };
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { cookies: this.cookies, url: this.url, body: this.body, bodyUsed: this.bodyUsed, headers: Object.fromEntries(this.headers), ok: this.ok, redirected: this.redirected, status: this.status, statusText: this.statusText, type: this.type };
        }
        get cookies() {
          return this[X].cookies;
        }
        static json(e10, t10) {
          let r10 = Response.json(e10, t10);
          return new ee(r10.body, r10);
        }
        static redirect(e10, t10) {
          let r10 = "number" == typeof t10 ? t10 : (null == t10 ? void 0 : t10.status) ?? 307;
          if (!K.has(r10))
            throw RangeError('Failed to execute "redirect" on "response": Invalid status code');
          let n2 = "object" == typeof t10 ? t10 : {}, a2 = new Headers(null == n2 ? void 0 : n2.headers);
          return a2.set("Location", y(e10)), new ee(null, { ...n2, headers: a2, status: r10 });
        }
        static rewrite(e10, t10) {
          let r10 = new Headers(null == t10 ? void 0 : t10.headers);
          return r10.set("x-middleware-rewrite", y(e10)), Q(t10, r10), new ee(null, { ...t10, headers: r10 });
        }
        static next(e10) {
          let t10 = new Headers(null == e10 ? void 0 : e10.headers);
          return t10.set("x-middleware-next", "1"), Q(e10, t10), new ee(null, { ...e10, headers: t10 });
        }
      }
      function et(e10, t10) {
        let r10 = "string" == typeof t10 ? new URL(t10) : t10, n2 = new URL(e10, t10), a2 = `${r10.protocol}//${r10.host}`;
        return `${n2.protocol}//${n2.host}` === a2 ? n2.toString().replace(a2, "") : n2.toString();
      }
      let er = ["__nextFallback", "__nextLocale", "__nextDefaultLocale", "__nextIsNotFound"], en = ["__nextDataReq"];
      function ea(e10) {
        for (let t10 of er)
          delete e10[t10];
      }
      function ei(e10, t10) {
        for (let r10 of er)
          e10.delete(r10);
        if (t10)
          for (let n2 of en)
            e10.delete(n2);
        return e10;
      }
      function eo(e10) {
        return e10.split("/").reduce((e11, t10, r10, n2) => !t10 || t10.startsWith("(") && t10.endsWith(")") || t10.startsWith("@") || "page" === t10 && r10 === n2.length - 1 ? e11 : e11 + `/${t10}`, "");
      }
      function es(e10, t10) {
        return t10 ? e10.replace(/\.rsc($|\?)/, "") : e10;
      }
      let el = "Next-Router-State-Tree", eu = "Next-Router-Prefetch", ec = "x-vercel-sc-headers", ed = `RSC, ${el}, ${eu}`, eh = [["RSC"], [el], [eu]];
      class ep extends Z {
        constructor(e10) {
          super(e10.input, e10.init), this.sourcePage = e10.page;
        }
        get request() {
          throw new d({ page: this.sourcePage });
        }
        respondWith() {
          throw new d({ page: this.sourcePage });
        }
        waitUntil() {
          throw new d({ page: this.sourcePage });
        }
      }
      let ef = [["RSC"], [el], [eu], [ec]];
      async function em(e10) {
        let t10 = void 0 !== self.__BUILD_MANIFEST;
        e10.request.url = es(e10.request.url, true);
        let r10 = new D(e10.request.url, { headers: e10.request.headers, nextConfig: e10.request.nextConfig }), n2 = r10.buildId;
        r10.buildId = "";
        let a2 = e10.request.headers["x-nextjs-data"];
        a2 && "/index" === r10.pathname && (r10.pathname = "/");
        let i2 = f(e10.request.headers);
        if (!t10)
          for (let o2 of ef)
            i2.delete(o2.toString().toLowerCase());
        ei(r10.searchParams, true);
        let s2 = new ep({ page: e10.page, input: String(r10), init: { body: e10.request.body, geo: e10.request.geo, headers: i2, ip: e10.request.ip, method: e10.request.method, nextConfig: e10.request.nextConfig } });
        a2 && Object.defineProperty(s2, "__isData", { enumerable: false, value: true });
        let l2 = new S({ request: s2, page: e10.page }), u2 = await e10.handler(s2, l2);
        if (u2 && !(u2 instanceof Response))
          throw TypeError("Expected an instance of Response to be returned");
        let c2 = null == u2 ? void 0 : u2.headers.get("x-middleware-rewrite");
        if (u2 && c2) {
          let d2 = new D(c2, { forceLocale: true, headers: e10.request.headers, nextConfig: e10.request.nextConfig });
          d2.host === s2.nextUrl.host && (d2.buildId = n2 || d2.buildId, u2.headers.set("x-middleware-rewrite", String(d2))), a2 && u2.headers.set("x-nextjs-rewrite", et(String(d2), String(r10)));
        }
        let h2 = null == u2 ? void 0 : u2.headers.get("Location");
        if (u2 && h2) {
          let p2 = new D(h2, { forceLocale: false, headers: e10.request.headers, nextConfig: e10.request.nextConfig });
          u2 = new Response(u2.body, u2), p2.host === s2.nextUrl.host && (p2.buildId = n2 || p2.buildId, u2.headers.set("Location", String(p2))), a2 && (u2.headers.delete("Location"), u2.headers.set("x-nextjs-redirect", et(String(p2), String(r10))));
        }
        return { response: u2 || ee.next(), waitUntil: Promise.all(l2[x]) };
      }
      function eg(e10) {
        return `The edge runtime does not support Node.js '${e10}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
      }
      function ey(e10) {
        let t10 = new Proxy(function() {
        }, { get(t11, r10) {
          if ("then" === r10)
            return {};
          throw Error(eg(e10));
        }, construct() {
          throw Error(eg(e10));
        }, apply(r10, n2, a2) {
          if ("function" == typeof a2[0])
            return a2[0](t10);
          throw Error(eg(e10));
        } });
        return new Proxy({}, { get: () => t10 });
      }
      function ev() {
        process !== r.g.process && (process.env = r.g.process.env, r.g.process = process), Object.defineProperty(globalThis, "__import_unsupported", { value: ey, enumerable: false, configurable: true });
      }
      function eb(e10) {
        return new TextEncoder().encode(e10).buffer.byteLength;
      }
      function ex(e10, t10, r10, n2, a2, i2, o2) {
        try {
          var s2 = e10[i2](o2), l2 = s2.value;
        } catch (u2) {
          r10(u2);
          return;
        }
        s2.done ? t10(l2) : Promise.resolve(l2).then(n2, a2);
      }
      function ew(e10) {
        return function() {
          var t10 = this, r10 = arguments;
          return new Promise(function(n2, a2) {
            var i2 = e10.apply(t10, r10);
            function o2(e11) {
              ex(i2, n2, a2, o2, s2, "next", e11);
            }
            function s2(e11) {
              ex(i2, n2, a2, o2, s2, "throw", e11);
            }
            o2(void 0);
          });
        };
      }
      function eS(e10) {
        let t10, r10 = false;
        return (...n2) => (r10 || (r10 = true, t10 = e10(...n2)), t10);
      }
      function e_(e10) {
        return "string" == typeof e10 ? e10 : e10.displayName || e10.name || "Unknown";
      }
      function eC(e10) {
        return e10.finished || e10.headersSent;
      }
      function eE(e10) {
        let t10 = e10.split("?"), r10 = t10[0];
        return r10.replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t10[1] ? `?${t10.slice(1).join("?")}` : "");
      }
      function eR(e10, t10) {
        return eP.apply(this, arguments);
      }
      function eP() {
        return (eP = ew(function* (e10, t10) {
          let r10 = t10.res || t10.ctx && t10.ctx.res;
          if (!e10.getInitialProps)
            return t10.ctx && t10.Component ? { pageProps: yield eR(t10.Component, t10.ctx) } : {};
          let n2 = yield e10.getInitialProps(t10);
          if (r10 && eC(r10))
            return n2;
          if (!n2) {
            let a2 = `"${e_(e10)}.getInitialProps()" should resolve to an object. But found "${n2}" instead.`;
            throw Error(a2);
          }
          return n2;
        })).apply(this, arguments);
      }
      let ek = "undefined" != typeof performance;
      ek && ["mark", "measure", "getEntriesByName"].every((e10) => "function" == typeof performance[e10]);
      class eT extends Error {
      }
      class eA extends Error {
      }
      class e$ extends Error {
        constructor(e10, t10) {
          super(), this.message = `Failed to load static file for page: ${e10} ${t10}`;
        }
      }
      var eO = r(334), eI = r(987);
      let eL = { client: "client", server: "server", edgeServer: "edge-server" };
      eL.client, eL.server, eL.edgeServer;
      let ej = ["/_document", "/_app", "/_error"], eM = "__NEXT_BUILTIN_DOCUMENT__";
      Symbol("polyfills");
      let eF = [{ url: "https://fonts.googleapis.com/", preconnect: "https://fonts.gstatic.com" }, { url: "https://use.typekit.net", preconnect: "https://use.typekit.net" }], eD = ["/500"], eN = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
      function eq(e10) {
        return e10.statusCode || (e10.permanent ? 308 : 307);
      }
      let eU = "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props", eB = { edge: "edge", experimentalEdge: "experimental-edge", nodejs: "nodejs" };
      function ez(e10) {
        return e10 === eB.experimentalEdge || e10 === eB.edge;
      }
      let eH = /\/\[[^/]+?\](?=\/|$)/;
      function eW(e10) {
        return eH.test(e10);
      }
      class eV {
        insert(e10) {
          this._insert(e10.split("/").filter(Boolean), [], false);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e10 = "/") {
          let t10 = [...this.children.keys()].sort();
          null !== this.slugName && t10.splice(t10.indexOf("[]"), 1), null !== this.restSlugName && t10.splice(t10.indexOf("[...]"), 1), null !== this.optionalRestSlugName && t10.splice(t10.indexOf("[[...]]"), 1);
          let r10 = t10.map((t11) => this.children.get(t11)._smoosh(`${e10}${t11}/`)).reduce((e11, t11) => [...e11, ...t11], []);
          if (null !== this.slugName && r10.push(...this.children.get("[]")._smoosh(`${e10}[${this.slugName}]/`)), !this.placeholder) {
            let n2 = "/" === e10 ? "/" : e10.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(`You cannot define a route with the same specificity as a optional catch-all route ("${n2}" and "${n2}[[...${this.optionalRestSlugName}]]").`);
            r10.unshift(n2);
          }
          return null !== this.restSlugName && r10.push(...this.children.get("[...]")._smoosh(`${e10}[...${this.restSlugName}]/`)), null !== this.optionalRestSlugName && r10.push(...this.children.get("[[...]]")._smoosh(`${e10}[[...${this.optionalRestSlugName}]]/`)), r10;
        }
        _insert(e10, t10, r10) {
          if (0 === e10.length) {
            this.placeholder = false;
            return;
          }
          if (r10)
            throw Error("Catch-all must be the last part of the URL.");
          let n2 = e10[0];
          if (n2.startsWith("[") && n2.endsWith("]")) {
            let o2 = function(e11, r11) {
              if (null !== e11 && e11 !== r11)
                throw Error(`You cannot use different slug names for the same dynamic path ('${e11}' !== '${r11}').`);
              t10.forEach((e12) => {
                if (e12 === r11)
                  throw Error(`You cannot have the same slug name "${r11}" repeat within a single dynamic path`);
                if (e12.replace(/\W/g, "") === n2.replace(/\W/g, ""))
                  throw Error(`You cannot have the slug names "${e12}" and "${r11}" differ only by non-word symbols within a single dynamic path`);
              }), t10.push(r11);
            };
            let a2 = n2.slice(1, -1), i2 = false;
            if (a2.startsWith("[") && a2.endsWith("]") && (a2 = a2.slice(1, -1), i2 = true), a2.startsWith("...") && (a2 = a2.substring(3), r10 = true), a2.startsWith("[") || a2.endsWith("]"))
              throw Error(`Segment names may not start or end with extra brackets ('${a2}').`);
            if (a2.startsWith("."))
              throw Error(`Segment names may not start with erroneous periods ('${a2}').`);
            if (r10) {
              if (i2) {
                if (null != this.restSlugName)
                  throw Error(`You cannot use both an required and optional catch-all route at the same level ("[...${this.restSlugName}]" and "${e10[0]}" ).`);
                o2(this.optionalRestSlugName, a2), this.optionalRestSlugName = a2, n2 = "[[...]]";
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(`You cannot use both an optional and required catch-all route at the same level ("[[...${this.optionalRestSlugName}]]" and "${e10[0]}").`);
                o2(this.restSlugName, a2), this.restSlugName = a2, n2 = "[...]";
              }
            } else {
              if (i2)
                throw Error(`Optional route parameters are not yet supported ("${e10[0]}").`);
              o2(this.slugName, a2), this.slugName = a2, n2 = "[]";
            }
          }
          this.children.has(n2) || this.children.set(n2, new eV()), this.children.get(n2)._insert(e10.slice(1), t10, r10);
        }
        constructor() {
          this.placeholder = true, this.children = /* @__PURE__ */ new Map(), this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null;
        }
      }
      function eG(e10) {
        let t10 = new eV();
        return e10.forEach((e11) => t10.insert(e11)), t10.smoosh();
      }
      function eY(e10) {
        return function() {
          let t10 = e10.cookie;
          if (!t10)
            return {};
          let { parse: n2 } = r(738);
          return n2(Array.isArray(t10) ? t10.join(";") : t10);
        };
      }
      function eJ(e10, t10) {
        return { isManualRevalidate: e10.headers["x-prerender-revalidate"] === t10.previewModeId, revalidateOnlyGenerated: !!e10.headers["x-prerender-revalidate-if-generated"] };
      }
      function eZ({ req: e10 }, t10, r10) {
        let n2 = { configurable: true, enumerable: true }, a2 = { ...n2, writable: true };
        Object.defineProperty(e10, t10, { ...n2, get: () => {
          let n3 = r10();
          return Object.defineProperty(e10, t10, { ...a2, value: n3 }), n3;
        }, set: (r11) => {
          Object.defineProperty(e10, t10, { ...a2, value: r11 });
        } });
      }
      Symbol("__next_preview_data"), Symbol("__prerender_bypass");
      let eX = Symbol("NextRequestMeta");
      function eK(e10, t10) {
        let r10 = e10[eX] || {};
        return "string" == typeof t10 ? r10[t10] : r10;
      }
      function eQ(e10, t10) {
        return e10[eX] = t10, eK(e10);
      }
      function e0(e10, t10, r10) {
        let n2 = eK(e10);
        return n2[t10] = r10, eQ(e10, n2);
      }
      function e1(e10) {
        let t10 = {};
        for (let r10 of ["__nextDefaultLocale", "__nextFallback", "__nextLocale", "__nextSsgPath", "_nextBubbleNoFallback", "__nextDataReq"])
          r10 in e10 && (t10[r10] = e10[r10]);
        return t10;
      }
      function e2(e10) {
        return "/api" === e10 || Boolean(null == e10 ? void 0 : e10.startsWith("/api/"));
      }
      function e3() {
        return (e3 = Object.assign || function(e10) {
          for (var t10 = 1; t10 < arguments.length; t10++) {
            var r10 = arguments[t10];
            for (var n2 in r10)
              Object.prototype.hasOwnProperty.call(r10, n2) && (e10[n2] = r10[n2]);
          }
          return e10;
        }).apply(this, arguments);
      }
      function e4() {
        return e3.apply(this, arguments);
      }
      var e8 = r(329);
      function e5(e10, t10) {
        let r10 = [], n2 = (0, e8.Bo)(e10, r10, { delimiter: "/", sensitive: false, strict: null == t10 ? void 0 : t10.strict }), a2 = (0, e8.WS)((null == t10 ? void 0 : t10.regexModifier) ? RegExp(t10.regexModifier(n2.source), n2.flags) : n2, r10);
        return (e11, n3) => {
          let i2 = null != e11 && a2(e11);
          if (!i2)
            return false;
          if (null == t10 ? void 0 : t10.removeUnnamedParams)
            for (let o2 of r10)
              "number" == typeof o2.name && delete i2.params[o2.name];
          return e4({}, n3, i2.params);
        };
      }
      let e9 = /[|\\{}()[\]^$+*?.-]/, e6 = /[|\\{}()[\]^$+*?.-]/g;
      function e7(e10) {
        return e9.test(e10) ? e10.replace(e6, "\\$&") : e10;
      }
      function te(e10) {
        let t10 = {};
        return e10.forEach((e11, r10) => {
          void 0 === t10[r10] ? t10[r10] = e11 : Array.isArray(t10[r10]) ? t10[r10].push(e11) : t10[r10] = [t10[r10], e11];
        }), t10;
      }
      function tt(e10, t10) {
        let r10 = new URL("http://n"), n2 = t10 ? new URL(t10, r10) : e10.startsWith(".") ? new URL("http://n") : r10, { pathname: a2, searchParams: i2, search: o2, hash: s2, href: l2, origin: u2 } = new URL(e10, n2);
        if (u2 !== r10.origin)
          throw Error(`invariant: invalid relative URL, router received ${e10}`);
        return { pathname: a2, query: te(i2), search: o2, hash: s2, href: l2.slice(r10.origin.length) };
      }
      function tr(e10) {
        if (e10.startsWith("/"))
          return tt(e10);
        let t10 = new URL(e10);
        return { hash: t10.hash, hostname: t10.hostname, href: t10.href, pathname: t10.pathname, port: t10.port, protocol: t10.protocol, query: te(t10.searchParams), search: t10.search };
      }
      function tn(e10) {
        let t10 = "";
        for (let r10 = 0; r10 < e10.length; r10++) {
          let n2 = e10.charCodeAt(r10);
          (n2 > 64 && n2 < 91 || n2 > 96 && n2 < 123) && (t10 += e10[r10]);
        }
        return t10;
      }
      function ta(e10, t10) {
        return e10.replace(RegExp(`:${e7(t10)}`, "g"), `__ESC_COLON_${t10}`);
      }
      function ti(e10) {
        return e10.replace(/__ESC_COLON_/gi, ":");
      }
      function to(e10, t10, r10 = [], n2 = []) {
        let a2 = {}, i2 = (r11) => {
          let n3;
          let i3 = r11.key;
          switch (r11.type) {
            case "header":
              i3 = i3.toLowerCase(), n3 = e10.headers[i3];
              break;
            case "cookie":
              n3 = e10.cookies[r11.key];
              break;
            case "query":
              n3 = t10[i3];
              break;
            case "host": {
              let { host: o3 } = (null == e10 ? void 0 : e10.headers) || {}, s2 = null == o3 ? void 0 : o3.split(":")[0].toLowerCase();
              n3 = s2;
            }
          }
          if (!r11.value && n3)
            return a2[tn(i3)] = n3, true;
          if (n3) {
            let l2 = RegExp(`^${r11.value}$`), u2 = Array.isArray(n3) ? n3.slice(-1)[0].match(l2) : n3.match(l2);
            if (u2)
              return Array.isArray(u2) && (u2.groups ? Object.keys(u2.groups).forEach((e11) => {
                a2[e11] = u2.groups[e11];
              }) : "host" === r11.type && u2[0] && (a2.host = u2[0])), true;
          }
          return false;
        }, o2 = r10.every((e11) => i2(e11)) && !n2.some((e11) => i2(e11));
        return !!o2 && a2;
      }
      function ts(e10, t10) {
        if (!e10.includes(":"))
          return e10;
        for (let r10 of Object.keys(t10))
          e10.includes(`:${r10}`) && (e10 = e10.replace(RegExp(`:${r10}\\*`, "g"), `:${r10}--ESCAPED_PARAM_ASTERISKS`).replace(RegExp(`:${r10}\\?`, "g"), `:${r10}--ESCAPED_PARAM_QUESTION`).replace(RegExp(`:${r10}\\+`, "g"), `:${r10}--ESCAPED_PARAM_PLUS`).replace(RegExp(`:${r10}(?!\\w)`, "g"), `--ESCAPED_PARAM_COLON${r10}`));
        return e10 = e10.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1").replace(/--ESCAPED_PARAM_PLUS/g, "+").replace(/--ESCAPED_PARAM_COLON/g, ":").replace(/--ESCAPED_PARAM_QUESTION/g, "?").replace(/--ESCAPED_PARAM_ASTERISKS/g, "*"), (0, e8.MY)(`/${e10}`, { validate: false })(t10).slice(1);
      }
      function tl(e10) {
        let t10;
        let r10 = Object.assign({}, e10.query);
        delete r10.__nextLocale, delete r10.__nextDefaultLocale, delete r10.__nextDataReq;
        let n2 = e10.destination;
        for (let a2 of Object.keys(e4({}, e10.params, r10)))
          n2 = ta(n2, a2);
        let i2 = tr(n2), o2 = i2.query, s2 = ti(`${i2.pathname}${i2.hash || ""}`), l2 = ti(i2.hostname || ""), u2 = [], c2 = [];
        (0, e8.Bo)(s2, u2), (0, e8.Bo)(l2, c2);
        let d2 = [];
        u2.forEach((e11) => d2.push(e11.name)), c2.forEach((e11) => d2.push(e11.name));
        let h2 = (0, e8.MY)(s2, { validate: false }), p2 = (0, e8.MY)(l2, { validate: false });
        for (let [f2, m2] of Object.entries(o2))
          Array.isArray(m2) ? o2[f2] = m2.map((t11) => ts(ti(t11), e10.params)) : "string" == typeof m2 && (o2[f2] = ts(ti(m2), e10.params));
        let g2 = Object.keys(e10.params).filter((e11) => "nextInternalLocale" !== e11);
        if (e10.appendParamsToQuery && !g2.some((e11) => d2.includes(e11)))
          for (let y2 of g2)
            y2 in o2 || (o2[y2] = e10.params[y2]);
        try {
          t10 = h2(e10.params);
          let [v2, b2] = t10.split("#");
          i2.hostname = p2(e10.params), i2.pathname = v2, i2.hash = `${b2 ? "#" : ""}${b2 || ""}`, delete i2.search;
        } catch (x2) {
          if (x2.message.match(/Expected .*? to not repeat, but got an array/))
            throw Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");
          throw x2;
        }
        return i2.query = e4({}, r10, i2.query), { newUrl: t10, destQuery: o2, parsedDestination: i2 };
      }
      class tu {
        constructor({ headers: e10 = [], fsRoutes: t10 = [], rewrites: r10 = { beforeFiles: [], afterFiles: [], fallback: [] }, redirects: n2 = [], catchAllRoute: a2, catchAllMiddleware: i2 = [], dynamicRoutes: o2 = [], pageChecker: s2, useFileSystemPublicRoutes: l2, nextConfig: u2 }) {
          __publicField(this, "context", /* @__PURE__ */ new WeakMap());
          this.nextConfig = u2, this.headers = e10, this.fsRoutes = [...t10], this.rewrites = r10, this.redirects = n2, this.pageChecker = s2, this.catchAllRoute = a2, this.catchAllMiddleware = i2, this.dynamicRoutes = o2, this.useFileSystemPublicRoutes = l2, this.compiledRoutes = this.compileRoutes(), this.needsRecompilation = false;
        }
        async checkPage(e10, t10) {
          t10 = O(t10, this.locales).pathname;
          let r10 = this.context.get(e10);
          if (!r10)
            throw Error("Invariant: request is not available inside the context, this is an internal error please open an issue.");
          if (void 0 !== r10.pageChecks[t10])
            return r10.pageChecks[t10];
          let n2 = await this.pageChecker(t10);
          return r10.pageChecks[t10] = n2, n2;
        }
        get locales() {
          var e10;
          return (null == (e10 = this.nextConfig.i18n) ? void 0 : e10.locales) || [];
        }
        get basePath() {
          return this.nextConfig.basePath || "";
        }
        setDynamicRoutes(e10) {
          this.dynamicRoutes = e10, this.needsRecompilation = true;
        }
        setCatchallMiddleware(e10) {
          this.catchAllMiddleware = e10, this.needsRecompilation = true;
        }
        addFsRoute(e10) {
          this.fsRoutes.unshift(e10), this.needsRecompilation = true;
        }
        compileRoutes() {
          let [e10] = this.catchAllMiddleware;
          return [...e10 ? this.fsRoutes.filter((e11) => "_next/data catchall" === e11.name).map((e11) => ({ ...e11, name: "_next/data normalizing", check: false })) : [], ...this.headers, ...this.redirects, ...this.useFileSystemPublicRoutes && e10 ? [e10] : [], ...this.rewrites.beforeFiles, ...this.fsRoutes, ...this.useFileSystemPublicRoutes ? [{ type: "route", name: "page checker", match: e5("/:path*"), fn: async (e11, t10, r10, n2, a2) => {
            let i2 = C(n2.pathname || "/");
            return i2 && await this.checkPage(e11, i2) ? this.catchAllRoute.fn(e11, t10, r10, n2, a2) : { finished: false };
          } }] : [], ...this.rewrites.afterFiles, ...this.rewrites.fallback.length ? [{ type: "route", name: "dynamic route/page check", match: e5("/:path*"), fn: async (e11, t10, r10, n2, a2) => ({ finished: await this.checkFsRoutes(e11, t10, n2, a2) }) }, ...this.rewrites.fallback] : [], ...this.useFileSystemPublicRoutes ? [this.catchAllRoute] : []];
        }
        async checkFsRoutes(e10, t10, r10, n2) {
          let a2 = r10.pathname, i2 = I(a2, this.basePath);
          for (let o2 of this.fsRoutes) {
            let s2 = o2.match(i2);
            if (s2) {
              r10.pathname = i2;
              let { finished: l2 } = await o2.fn(e10, t10, s2, r10);
              if (l2)
                return true;
              r10.pathname = a2;
            }
          }
          let u2 = await this.checkPage(e10, i2);
          if (!u2) {
            let c2 = O(i2, this.locales).pathname;
            for (let d2 of this.dynamicRoutes)
              d2.match(c2) && (u2 = true);
          }
          if (u2) {
            let h2 = this.catchAllRoute.match(r10.pathname);
            if (!h2)
              throw Error("Invariant: could not match params, this is an internal error please open an issue.");
            r10.pathname = i2, r10.query._nextBubbleNoFallback = "1";
            let { finished: p2 } = await this.catchAllRoute.fn(e10, t10, h2, r10, n2);
            return p2;
          }
          return false;
        }
        async execute(e10, t10, r10, n2) {
          if (this.needsRecompilation && (this.compiledRoutes = this.compileRoutes(), this.needsRecompilation = false), this.context.has(e10))
            throw Error(`Invariant: request has already been processed: ${e10.url}, this is an internal error please open an issue.`);
          this.context.set(e10, { pageChecks: {} });
          try {
            let a2 = { ...r10, query: { ...r10.query } };
            for (let i2 of this.compiledRoutes) {
              var o2;
              if (n2 && "rewrite" !== i2.type)
                continue;
              let s2 = a2.pathname, l2 = L(s2, { nextConfig: this.nextConfig, parseData: false });
              if (l2.locale && !i2.matchesLocaleAPIRoutes && e2(l2.pathname))
                continue;
              eK(e10, "_nextHadBasePath") && (l2.basePath = this.basePath);
              let u2 = l2.basePath;
              i2.matchesBasePath || (l2.basePath = ""), i2.matchesLocale && a2.query.__nextLocale && !l2.locale && (l2.locale = a2.query.__nextLocale), !i2.matchesLocale && l2.locale === (null == (o2 = this.nextConfig.i18n) ? void 0 : o2.defaultLocale) && l2.locale && (l2.locale = void 0), i2.matchesTrailingSlash && eK(e10, "__nextHadTrailingSlash") && (l2.trailingSlash = true);
              let c2 = A({ ignorePrefix: true, ...l2 }), d2 = i2.match(c2);
              if ((i2.has || i2.missing) && d2) {
                let h2 = to(e10, a2.query, i2.has, i2.missing);
                h2 ? Object.assign(d2, h2) : d2 = false;
              }
              if ((!d2 || !this.basePath || i2.matchesBasePath || eK(e10, "_nextDidRewrite") || u2) && d2) {
                let p2 = "_next/data normalizing" === i2.name;
                p2 && e0(e10, "_nextDataNormalizing", true), a2.pathname = c2;
                let f2 = await i2.fn(e10, t10, d2, a2, n2);
                if (p2 && e0(e10, "_nextDataNormalizing", false), f2.finished || (f2.pathname ? a2.pathname = f2.pathname : a2.pathname = s2, f2.query && (a2.query = { ...e1(a2.query), ...f2.query }), i2.check && await this.checkFsRoutes(e10, t10, a2)))
                  return true;
              }
            }
            return false;
          } finally {
            this.context.delete(e10);
          }
        }
      }
      function tc(e10, t10) {
        if (t10.private || t10.stateful)
          (t10.private || !e10.hasHeader("Cache-Control")) && e10.setHeader("Cache-Control", "private, no-cache, no-store, max-age=0, must-revalidate");
        else if ("number" == typeof t10.revalidate) {
          if (t10.revalidate < 1)
            throw Error(`invariant: invalid Cache-Control duration provided: ${t10.revalidate} < 1`);
          e10.setHeader("Cache-Control", `s-maxage=${t10.revalidate}, stale-while-revalidate`);
        } else
          false === t10.revalidate && e10.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");
      }
      function td(e10) {
        return ej.includes(e10);
      }
      function th(e10) {
        return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(e10);
      }
      const _tp = class {
        constructor(e10, { contentType: t10 } = {}) {
          this._result = e10, this._contentType = t10;
        }
        contentType() {
          return this._contentType;
        }
        toUnchunkedString() {
          if ("string" != typeof this._result)
            throw Error("invariant: dynamic responses cannot be unchunked. This is a bug in Next.js");
          return this._result;
        }
        pipe(e10) {
          if ("string" == typeof this._result)
            throw Error("invariant: static responses cannot be piped. This is a bug in Next.js");
          let t10 = this._result, r10 = "function" == typeof e10.flush ? () => e10.flush() : () => {
          };
          return (async () => {
            let n2 = t10.getReader(), a2 = false;
            try {
              for (; ; ) {
                let { done: i2, value: o2 } = await n2.read();
                if (i2) {
                  e10.end();
                  return;
                }
                a2 = true, e10.write(o2), r10();
              }
            } catch (s2) {
              throw a2 && e10.destroy(s2), s2;
            }
          })();
        }
        isDynamic() {
          return "string" != typeof this._result;
        }
        static fromStatic(e10) {
          return new _tp(e10);
        }
      };
      let tp = _tp;
      __publicField(tp, "empty", _tp.fromStatic(""));
      function tf(e10) {
        return e10.replace(/\\/g, "/");
      }
      function tm(e10) {
        let t10 = tf(e10);
        return t10.startsWith("/index/") && !eW(t10) ? t10.slice(6) : "/index" !== t10 ? t10 : "/";
      }
      n = r(844).Z;
      let tg = { wait: n.cyan("wait") + "  -", error: n.red("error") + " -", warn: n.yellow("warn") + "  -", ready: n.green("ready") + " -", info: n.cyan("info") + "  -", event: n.magenta("event") + " -", trace: n.magenta("trace") + " -" };
      function ty(...e10) {
        console.warn(tg.warn, ...e10);
      }
      function tv(e10, t10) {
        return e10.replace(RegExp(`([/#?]${t10 ? "|%(2f|23|3f)" : ""})`, "gi"), (e11) => encodeURIComponent(e11));
      }
      function tb(e10) {
        let t10 = e10.startsWith("[") && e10.endsWith("]");
        t10 && (e10 = e10.slice(1, -1));
        let r10 = e10.startsWith("...");
        return r10 && (e10 = e10.slice(3)), { key: e10, repeat: r10, optional: t10 };
      }
      function tx(e10) {
        let t10 = C(e10).slice(1).split("/"), r10 = {}, n2 = 1;
        return { parameterizedRoute: t10.map((e11) => {
          if (!(e11.startsWith("[") && e11.endsWith("]")))
            return `/${e7(e11)}`;
          {
            let { key: t11, optional: a2, repeat: i2 } = tb(e11.slice(1, -1));
            return r10[t11] = { pos: n2++, repeat: i2, optional: a2 }, i2 ? a2 ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
          }
        }).join(""), groups: r10 };
      }
      function tw(e10) {
        let { parameterizedRoute: t10, groups: r10 } = tx(e10);
        return { re: RegExp(`^${t10}(?:/)?$`), groups: r10 };
      }
      function tS() {
        let e10 = 97, t10 = 1;
        return () => {
          let r10 = "";
          for (let n2 = 0; n2 < t10; n2++)
            r10 += String.fromCharCode(e10), ++e10 > 122 && (t10++, e10 = 97);
          return r10;
        };
      }
      function t_(e10) {
        let t10 = C(e10).slice(1).split("/"), r10 = tS(), n2 = {};
        return { namedParameterizedRoute: t10.map((e11) => {
          if (!(e11.startsWith("[") && e11.endsWith("]")))
            return `/${e7(e11)}`;
          {
            let { key: t11, optional: a2, repeat: i2 } = tb(e11.slice(1, -1)), o2 = t11.replace(/\W/g, ""), s2 = false;
            return (0 === o2.length || o2.length > 30) && (s2 = true), isNaN(parseInt(o2.slice(0, 1))) || (s2 = true), s2 && (o2 = r10()), n2[o2] = t11, i2 ? a2 ? `(?:/(?<${o2}>.+?))?` : `/(?<${o2}>.+?)` : `/(?<${o2}>[^/]+?)`;
          }
        }).join(""), routeKeys: n2 };
      }
      function tC(e10) {
        let t10 = t_(e10);
        return e4({}, tw(e10), { namedRegex: `^${t10.namedParameterizedRoute}(?:/)?$`, routeKeys: t10.routeKeys });
      }
      function tE({ re: e10, groups: t10 }) {
        return (r10) => {
          let n2 = e10.exec(r10);
          if (!n2)
            return false;
          let a2 = (e11) => {
            try {
              return decodeURIComponent(e11);
            } catch (t11) {
              throw new eT("failed to decode param");
            }
          }, i2 = {};
          return Object.keys(t10).forEach((e11) => {
            let r11 = t10[e11], o2 = n2[r11.pos];
            void 0 !== o2 && (i2[e11] = ~o2.indexOf("/") ? o2.split("/").map((e12) => a2(e12)) : r11.repeat ? [a2(o2)] : a2(o2));
          }), i2;
        };
      }
      function tR(e10, t10, r10) {
        let n2 = /* @__PURE__ */ new Map(), a2 = e10.replace(/[ \t]/g, "");
        if (t10) {
          let i2 = 0;
          for (let o2 of t10) {
            let s2 = o2.toLowerCase();
            if (n2.set(s2, { orig: o2, pos: i2++ }), r10.prefixMatch) {
              let l2 = s2.split("-");
              for (; l2.pop(), l2.length > 0; ) {
                let u2 = l2.join("-");
                n2.has(u2) || n2.set(u2, { orig: o2, pos: i2++ });
              }
            }
          }
        }
        let c2 = a2.split(","), d2 = [], h2 = /* @__PURE__ */ new Set();
        for (let p2 = 0; p2 < c2.length; ++p2) {
          let f2 = c2[p2];
          if (!f2)
            continue;
          let m2 = f2.split(";");
          if (m2.length > 2)
            throw Error(`Invalid ${r10.type} header`);
          let g2 = m2[0].toLowerCase();
          if (!g2)
            throw Error(`Invalid ${r10.type} header`);
          let y2 = { token: g2, pos: p2, q: 1 };
          if (t10 && n2.has(g2) && (y2.pref = n2.get(g2).pos), h2.add(y2.token), 2 === m2.length) {
            let v2 = m2[1], [b2, x2] = v2.split("=");
            if (!x2 || "q" !== b2 && "Q" !== b2)
              throw Error(`Invalid ${r10.type} header`);
            let w2 = parseFloat(x2);
            if (0 === w2)
              continue;
            Number.isFinite(w2) && w2 <= 1 && w2 >= 1e-3 && (y2.q = w2);
          }
          d2.push(y2);
        }
        d2.sort((e11, t11) => t11.q !== e11.q ? t11.q - e11.q : t11.pref !== e11.pref ? void 0 === e11.pref ? 1 : void 0 === t11.pref ? -1 : e11.pref - t11.pref : e11.pos - t11.pos);
        let S2 = d2.map((e11) => e11.token);
        if (!t10 || !t10.length)
          return S2;
        let _2 = [];
        for (let C2 of S2)
          if ("*" === C2)
            for (let [E2, R2] of n2)
              h2.has(E2) || _2.push(R2.orig);
          else {
            let P2 = C2.toLowerCase();
            n2.has(P2) && _2.push(n2.get(P2).orig);
          }
        return _2;
      }
      function tP(e10 = "", t10) {
        return tR(e10, t10, { type: "accept-language", prefixMatch: true })[0] || "";
      }
      function tk(e10, t10) {
        let { NEXT_LOCALE: r10 } = e10.cookies || {};
        return r10 ? t10.find((e11) => r10.toLowerCase() === e11.toLowerCase()) : void 0;
      }
      var tT = r(738), tA = r.n(tT);
      function t$(e10, t10, r10, n2, a2) {
        if (n2 && t10 && a2) {
          let i2 = (0, eI.parse)(e10.url, true);
          for (let o2 of (delete i2.search, r10 || Object.keys(a2.groups)))
            delete i2.query[o2];
          e10.url = (0, eI.format)(i2);
        }
      }
      function tO(e10, t10, r10) {
        if (!r10)
          return e10;
        for (let n2 of Object.keys(r10.groups)) {
          let { optional: a2, repeat: i2 } = r10.groups[n2], o2 = `[${i2 ? "..." : ""}${n2}]`;
          a2 && (o2 = `[${o2}]`);
          let s2 = e10.indexOf(o2);
          if (s2 > -1) {
            let l2;
            let u2 = t10[n2];
            l2 = Array.isArray(u2) ? u2.map((e11) => e11 && encodeURIComponent(e11)).join("/") : u2 ? encodeURIComponent(u2) : "", e10 = e10.slice(0, s2) + l2 + e10.slice(s2 + o2.length);
          }
        }
        return e10;
      }
      function tI({ page: e10, i18n: t10, basePath: r10, rewrites: n2, pageIsDynamic: a2, trailingSlash: i2 }) {
        let o2, s2, l2;
        return a2 && (l2 = (s2 = tE(o2 = tC(e10)))(e10)), { handleLocale: function(e11, n3, a3, i3, o3) {
          let s3, l3;
          if (!t10)
            return;
          let u2 = a3.pathname || "/", c2 = t10.defaultLocale, d2 = tk(e11, t10.locales);
          try {
            s3 = false !== t10.localeDetection ? tP(e11.headers["accept-language"], t10.locales) : d2;
          } catch (h2) {
            s3 = d2;
          }
          let { host: p2 } = e11.headers || {}, f2 = p2 && p2.split(":")[0].toLowerCase(), m2 = _(t10.domains, f2);
          m2 && (d2 = c2 = m2.defaultLocale, e0(e11, "__nextIsLocaleDomain", true)), d2 = d2 || s3;
          let g2 = O(u2, t10.locales);
          if (i3 = O(i3, t10.locales).pathname, g2.detectedLocale && (d2 = g2.detectedLocale, e11.url = (0, eI.format)({ ...a3, pathname: g2.pathname }), e0(e11, "__nextStrippedLocale", true), a3.pathname = g2.pathname), m2) {
            let y2 = g2.detectedLocale ? d2 : s3, v2 = _(t10.domains, void 0, y2);
            v2 && v2.domain !== m2.domain && (l3 = `http${v2.http ? "" : "s"}://${v2.domain}/${y2 === v2.defaultLocale ? "" : y2}`);
          }
          let b2 = tm(u2), x2 = !d2 || d2.toLowerCase() === c2.toLowerCase();
          if (d2 = d2 || t10.defaultLocale, !o3 && !e11.headers["x-vercel-id"] && false !== t10.localeDetection && (l3 || !x2 && "/" === b2)) {
            n3.setHeader("Location", (0, eI.format)({ ...a3, pathname: l3 || `${r10}/${d2}` })), n3.statusCode = 307, n3.end();
            return;
          }
          return d2 = g2.detectedLocale || m2 && m2.defaultLocale || c2, { defaultLocale: c2, detectedLocale: d2, routeNoAssetPath: i3 };
        }, handleRewrites: function(o3, l3) {
          let u2 = {}, c2 = l3.pathname, d2 = (n3) => {
            let d3 = e5(n3.source + (i2 ? "(/)?" : ""), { removeUnnamedParams: true, strict: true }), h2 = d3(l3.pathname);
            if ((n3.has || n3.missing) && h2) {
              let p2 = to(o3, l3.query, n3.has, n3.missing);
              p2 ? Object.assign(h2, p2) : h2 = false;
            }
            if (h2) {
              let { parsedDestination: f2, destQuery: m2 } = tl({ appendParamsToQuery: true, destination: n3.destination, params: h2, query: l3.query });
              if (f2.protocol)
                return true;
              if (Object.assign(u2, m2, h2), Object.assign(l3.query, f2.query), delete f2.query, Object.assign(l3, f2), c2 = l3.pathname, r10 && (c2 = c2.replace(RegExp(`^${r10}`), "") || "/"), t10) {
                let g2 = O(c2, t10.locales);
                c2 = g2.pathname, l3.query.nextInternalLocale = g2.detectedLocale || h2.nextInternalLocale;
              }
              if (c2 === e10)
                return true;
              if (a2 && s2) {
                let y2 = s2(c2);
                if (y2)
                  return l3.query = { ...l3.query, ...y2 }, true;
              }
            }
            return false;
          };
          for (let h2 of n2.beforeFiles || [])
            d2(h2);
          if (c2 !== e10) {
            let p2 = false;
            for (let f2 of n2.afterFiles || [])
              if (p2 = d2(f2))
                break;
            if (!p2 && !(() => {
              let t11 = C(c2 || "");
              return t11 === C(e10) || (null == s2 ? void 0 : s2(t11));
            })()) {
              for (let m2 of n2.fallback || [])
                if (p2 = d2(m2))
                  break;
            }
          }
          return u2;
        }, handleBasePath: function(e11, t11) {
          e11.url = e11.url.replace(RegExp(`^${r10}`), "") || "/", t11.pathname = t11.pathname.replace(RegExp(`^${r10}`), "") || "/";
        }, defaultRouteRegex: o2, dynamicRouteMatcher: s2, defaultRouteMatches: l2, getParamsFromRouteMatches: function(e11, r11, n3) {
          return tE(function() {
            let { groups: e12, routeKeys: a3 } = o2;
            return { re: { exec: (i3) => {
              let o3 = (0, eO.parse)(i3), s3 = t10 && n3 && o3["1"] === n3, l3 = Object.keys(a3 || {}), u2 = (e13) => {
                if (t10) {
                  let a4 = Array.isArray(e13), i4 = a4 ? e13[0] : e13;
                  if ("string" == typeof i4 && t10.locales.some((e14) => e14.toLowerCase() === i4.toLowerCase() && (n3 = e14, r11.locale = n3, true)))
                    return a4 && e13.splice(0, 1), !a4 || 0 === e13.length;
                }
                return false;
              };
              return l3.every((e13) => o3[e13]) ? l3.reduce((t11, r12) => {
                let n4 = null == a3 ? void 0 : a3[r12];
                return n4 && !u2(o3[r12]) && (t11[e12[n4].pos] = o3[r12]), t11;
              }, {}) : Object.keys(o3).reduce((e13, t11) => {
                if (!u2(o3[t11])) {
                  let r12 = t11;
                  return s3 && (r12 = parseInt(t11, 10) - 1 + ""), Object.assign(e13, { [r12]: o3[t11] });
                }
                return e13;
              }, {});
            } }, groups: e12 };
          }())(e11.headers["x-now-route-matches"]);
        }, normalizeDynamicRouteParams: function(e11, t11) {
          let r11 = true;
          return o2 ? (e11 = Object.keys(o2.groups).reduce((n3, a3) => {
            let i3 = e11[a3];
            "string" == typeof i3 && (i3 = es(i3, true)), Array.isArray(i3) && (i3 = i3.map((e12) => ("string" == typeof e12 && (e12 = es(e12, true)), e12)));
            let s3 = l2[a3], u2 = o2.groups[a3].optional, c2 = Array.isArray(s3) ? s3.some((e12) => Array.isArray(i3) ? i3.some((t12) => t12.includes(e12)) : null == i3 ? void 0 : i3.includes(e12)) : null == i3 ? void 0 : i3.includes(s3);
            return (c2 || void 0 === i3 && !(u2 && t11)) && (r11 = false), u2 && (!i3 || Array.isArray(i3) && 1 === i3.length && ("index" === i3[0] || i3[0] === `[[...${a3}]]`)) && (i3 = void 0, delete e11[a3]), i3 && "string" == typeof i3 && o2.groups[a3].repeat && (i3 = i3.split("/")), i3 && (n3[a3] = i3), n3;
          }, {}), { params: e11, hasValidParams: r11 }) : { params: e11, hasValidParams: false };
        }, normalizeVercelUrl: (e11, t11, r11) => t$(e11, t11, r11, a2, o2), interpolateDynamicPath: (e11, t11) => tO(e11, t11, o2) };
      }
      function tL(e10) {
        return Object.prototype.toString.call(e10);
      }
      function tj(e10) {
        if ("[object Object]" !== tL(e10))
          return false;
        let t10 = Object.getPrototypeOf(e10);
        return null === t10 || t10.hasOwnProperty("isPrototypeOf");
      }
      function tM(e10) {
        return "object" == typeof e10 && null !== e10 && "name" in e10 && "message" in e10;
      }
      function tF(e10) {
        return tM(e10) ? e10 : Error(tj(e10) ? JSON.stringify(e10) : e10 + "");
      }
      class tD extends Error {
      }
      class tN extends Error {
        constructor(e10) {
          super(), this.innerError = e10;
        }
      }
      class tq {
        constructor(e10) {
          __publicField(this, "customErrorNo404Warn", eS(() => {
            ty(`You have added a custom /_error page without a custom /404 page. This prevents the 404 page from being auto statically optimized.
See here for info: https://nextjs.org/docs/messages/custom-error-no-custom-404`);
          }));
          var t10, r10;
          let { dir: n2 = ".", quiet: a2 = false, conf: i2, dev: o2 = false, minimalMode: s2 = false, customServer: l2 = true, hostname: u2, port: c2 } = e10;
          this.serverOptions = e10, this.dir = n2, this.quiet = a2, this.loadEnvConfig({ dev: o2 }), this.nextConfig = i2, this.hostname = u2, this.port = c2, this.distDir = this.nextConfig.distDir, this.publicDir = this.getPublicDir(), this.hasStaticDir = !s2 && this.getHasStaticDir();
          let { serverRuntimeConfig: d2 = {}, publicRuntimeConfig: h2, assetPrefix: p2, generateEtags: f2 } = this.nextConfig;
          this.buildId = this.getBuildId(), this.minimalMode = s2 || !!process.env.NEXT_PRIVATE_MINIMAL_MODE, this.hasAppDir = !!this.nextConfig.experimental.appDir && this.getHasAppDir(o2);
          let m2 = this.hasAppDir;
          this.serverComponentManifest = m2 ? this.getServerComponentManifest() : void 0, this.serverCSSManifest = m2 ? this.getServerCSSManifest() : void 0, this.fontLoaderManifest = this.nextConfig.experimental.fontLoaders ? this.getFontLoaderManifest() : void 0, this.renderOpts = { poweredByHeader: this.nextConfig.poweredByHeader, canonicalBase: this.nextConfig.amp.canonicalBase || "", buildId: this.buildId, generateEtags: f2, previewProps: this.getPreviewProps(), customServer: true === l2 || void 0, ampOptimizerConfig: null == (t10 = this.nextConfig.experimental.amp) ? void 0 : t10.optimizer, basePath: this.nextConfig.basePath, images: this.nextConfig.images, optimizeFonts: this.nextConfig.optimizeFonts, fontManifest: this.nextConfig.optimizeFonts && !o2 ? this.getFontManifest() : void 0, optimizeCss: this.nextConfig.experimental.optimizeCss, nextScriptWorkers: this.nextConfig.experimental.nextScriptWorkers, disableOptimizedLoading: !!this.nextConfig.experimental.runtime || this.nextConfig.experimental.disableOptimizedLoading, domainLocales: null == (r10 = this.nextConfig.i18n) ? void 0 : r10.domains, distDir: this.distDir, runtime: this.nextConfig.experimental.runtime, serverComponents: m2, crossOrigin: this.nextConfig.crossOrigin ? this.nextConfig.crossOrigin : void 0, largePageDataBytes: this.nextConfig.experimental.largePageDataBytes }, Object.keys(h2).length > 0 && (this.renderOpts.runtimeConfig = h2), this.pagesManifest = this.getPagesManifest(), this.appPathsManifest = this.getAppPathsManifest(), this.customRoutes = this.getCustomRoutes(), this.router = new tu(this.generateRoutes()), this.setAssetPrefix(p2), this.responseCache = this.getResponseCache({ dev: o2 });
        }
        logError(e10) {
          this.quiet || console.error(e10);
        }
        async handleRequest(e10, t10, r10) {
          try {
            var n2, a2, i2;
            let o2 = t10.originalResponse || t10, s2 = o2.setHeader.bind(o2);
            o2.setHeader = (t11, r11) => {
              if ("set-cookie" === t11.toLowerCase()) {
                let n3 = eK(e10, "_nextMiddlewareCookie");
                n3 && Array.isArray(r11) && r11.every((e11, t12) => e11 === n3[t12]) || (r11 = [...n3 || [], ..."string" == typeof r11 ? [r11] : Array.isArray(r11) ? r11 : []]);
              }
              return s2(t11, r11);
            };
            let l2 = (e10.url || "").split("?"), u2 = l2[0];
            if (null == u2 ? void 0 : u2.match(/(\\|\/\/)/)) {
              let c2 = eE(e10.url);
              t10.redirect(c2, 308).body(c2).send();
              return;
            }
            eZ({ req: e10 }, "cookies", eY(e10.headers)), r10 && "object" == typeof r10 || (r10 = (0, eI.parse)(e10.url, true)), "string" == typeof r10.query && (r10.query = (0, eO.parse)(r10.query)), this.minimalMode && e10.url.endsWith(".rsc") && (r10.query.__nextDataReq = "1"), e10.url = es(e10.url, this.hasAppDir), r10.pathname = es(r10.pathname || "", this.hasAppDir), this.attachRequestMeta(e10, r10);
            let d2 = _(null == (n2 = this.nextConfig.i18n) ? void 0 : n2.domains, $(r10, e10.headers)), h2 = (null == d2 ? void 0 : d2.defaultLocale) || (null == (a2 = this.nextConfig.i18n) ? void 0 : a2.defaultLocale), p2 = tr(e10.url.replace(/^\/+/, "/")), f2 = L(p2.pathname, { nextConfig: this.nextConfig });
            if (p2.pathname = f2.pathname, f2.basePath && (e10.url = I(e10.url, this.nextConfig.basePath), e0(e10, "_nextHadBasePath", true)), this.minimalMode && "string" == typeof e10.headers["x-matched-path"])
              try {
                this.hasAppDir && (e10.url.match(/^\/index($|\?)/) && (e10.url = e10.url.replace(/^\/index/, "/")), r10.pathname = "/index" === r10.pathname ? "/" : r10.pathname);
                let m2 = es(new URL(e10.headers["x-matched-path"], "http://localhost").pathname, this.hasAppDir), g2 = new URL(e10.url, "http://localhost").pathname;
                g2.startsWith("/_next/data/") && (r10.query.__nextDataReq = "1");
                let y2 = this.stripNextDataPath(g2);
                if (m2 = this.stripNextDataPath(m2, false), this.nextConfig.i18n) {
                  let v2 = O(m2, this.nextConfig.i18n.locales);
                  m2 = v2.pathname, v2.detectedLocale && (r10.query.__nextLocale = v2.detectedLocale);
                }
                let b2 = m2 = tm(m2);
                if (!eW(b2) && !await this.hasPage(C(b2))) {
                  for (let x2 of this.dynamicRoutes || [])
                    if (x2.match(b2)) {
                      b2 = x2.page;
                      break;
                    }
                }
                let w2 = eW(b2), S2 = tI({ pageIsDynamic: w2, page: b2, i18n: this.nextConfig.i18n, basePath: this.nextConfig.basePath, rewrites: this.customRoutes.rewrites });
                h2 && !f2.locale && (r10.pathname = `/${h2}${r10.pathname}`);
                let E2 = r10.pathname, R2 = S2.handleRewrites(e10, r10), P2 = Object.keys(R2), k2 = E2 !== r10.pathname;
                if (k2 && (e0(e10, "_nextRewroteUrl", r10.pathname), e0(e10, "_nextDidRewrite", true)), w2) {
                  let T2 = {}, A2 = S2.normalizeDynamicRouteParams(r10.query);
                  if (!A2.hasValidParams && w2 && !eW(y2)) {
                    let j2 = null == S2.dynamicRouteMatcher ? void 0 : S2.dynamicRouteMatcher(y2);
                    j2 && (S2.normalizeDynamicRouteParams(j2), Object.assign(A2.params, j2), A2.hasValidParams = true);
                  }
                  if (A2.hasValidParams && (T2 = A2.params), e10.headers["x-now-route-matches"] && eW(m2) && !A2.hasValidParams) {
                    let M2 = {}, F2 = S2.getParamsFromRouteMatches(e10, M2, r10.query.__nextLocale || "");
                    M2.locale && (r10.query.__nextLocale = M2.locale), (A2 = S2.normalizeDynamicRouteParams(F2, true)).hasValidParams && (T2 = A2.params);
                  }
                  w2 && S2.defaultRouteMatches && y2 === b2 && !A2.hasValidParams && !S2.normalizeDynamicRouteParams({ ...T2 }, true).hasValidParams && (T2 = S2.defaultRouteMatches), T2 && (m2 = S2.interpolateDynamicPath(b2, T2), e10.url = S2.interpolateDynamicPath(e10.url, T2)), Object.assign(r10.query, T2);
                }
                (w2 || k2) && S2.normalizeVercelUrl(e10, true, [...P2, ...Object.keys((null == (i2 = S2.defaultRouteRegex) ? void 0 : i2.groups) || {})]), r10.pathname = `${this.nextConfig.basePath || ""}${"/" === m2 && this.nextConfig.basePath ? "" : m2}`, p2.pathname = r10.pathname;
              } catch (D2) {
                if (D2 instanceof eT || D2 instanceof eA)
                  return t10.statusCode = 400, this.renderError(null, e10, t10, "/_error", {});
                throw D2;
              }
            return e0(e10, "__nextHadTrailingSlash", f2.trailingSlash), e0(e10, "__nextIsLocaleDomain", Boolean(d2)), r10.query.__nextDefaultLocale = h2, f2.locale && (e10.url = (0, eI.format)(p2), e0(e10, "__nextStrippedLocale", true)), (!this.minimalMode || !r10.query.__nextLocale) && (f2.locale || h2) && (r10.query.__nextLocale = f2.locale || h2), t10.statusCode = 200, await this.run(e10, t10, r10);
          } catch (N2) {
            if (N2 && "object" == typeof N2 && "ERR_INVALID_URL" === N2.code || N2 instanceof eT || N2 instanceof eA)
              return t10.statusCode = 400, this.renderError(null, e10, t10, "/_error", {});
            if (this.minimalMode || this.renderOpts.dev)
              throw N2;
            this.logError(tF(N2)), t10.statusCode = 500, t10.body("Internal Server Error").send();
          }
        }
        getRequestHandler() {
          return this.handleRequest.bind(this);
        }
        async handleUpgrade(e10, t10, r10) {
        }
        setAssetPrefix(e10) {
          this.renderOpts.assetPrefix = e10 ? e10.replace(/\/$/, "") : "";
        }
        async prepare() {
        }
        async close() {
        }
        getPreviewProps() {
          return this.getPrerenderManifest().preview;
        }
        async _beforeCatchAllRender(e10, t10, r10, n2) {
          return false;
        }
        getDynamicRoutes() {
          let e10 = /* @__PURE__ */ new Set();
          return eG([...Object.keys(this.appPathRoutes || {}), ...Object.keys(this.pagesManifest)].map((e11) => {
            var t10;
            return O(e11, null == (t10 = this.nextConfig.i18n) ? void 0 : t10.locales).pathname;
          })).map((t10) => e10.has(t10) || !eW(t10) ? null : (e10.add(t10), { page: t10, match: tE(tw(t10)) })).filter((e11) => Boolean(e11));
        }
        getAppPathRoutes() {
          let e10 = {};
          return Object.keys(this.appPathsManifest || {}).forEach((t10) => {
            let r10 = eo(t10) || "/";
            e10[r10] || (e10[r10] = []), e10[r10].push(t10);
          }), e10;
        }
        async run(e10, t10, r10) {
          this.handleCompression(e10, t10);
          try {
            let n2 = await this.router.execute(e10, t10, r10);
            if (n2)
              return;
          } catch (a2) {
            if (a2 instanceof eT || a2 instanceof eA)
              return t10.statusCode = 400, this.renderError(null, e10, t10, "/_error", {});
            throw a2;
          }
          await this.render404(e10, t10, r10);
        }
        async pipe(e10, t10) {
          let r10 = th(t10.req.headers["user-agent"] || ""), n2 = { ...t10, renderOpts: { ...this.renderOpts, supportsDynamicHTML: !r10, isBot: !!r10 } }, a2 = await e10(n2);
          if (null === a2)
            return;
          let { req: i2, res: o2 } = n2, { body: s2, type: l2, revalidateOptions: u2 } = a2;
          if (!o2.sent) {
            let { generateEtags: c2, poweredByHeader: d2, dev: h2 } = this.renderOpts;
            return h2 && o2.setHeader("Cache-Control", "no-store, must-revalidate"), this.sendRenderResult(i2, o2, { result: s2, type: l2, generateEtags: c2, poweredByHeader: d2, options: u2 });
          }
        }
        async getStaticHTML(e10, t10) {
          let r10 = await e10({ ...t10, renderOpts: { ...this.renderOpts, supportsDynamicHTML: false } });
          return null === r10 ? null : r10.body.toUnchunkedString();
        }
        async render(e10, t10, r10, n2 = {}, a2, i2 = false) {
          var o2;
          return (r10.startsWith("/") || console.warn(`Cannot render page with path "${r10}", did you mean "/${r10}"?. See more info here: https://nextjs.org/docs/messages/render-no-starting-slash`), this.renderOpts.customServer && "/index" === r10 && !await this.hasPage("/index") && (r10 = "/"), !i2 && !this.minimalMode && !n2.__nextDataReq && ((null == (o2 = e10.url) ? void 0 : o2.match(/^\/_next\//)) || this.hasStaticDir && e10.url.match(/^\/static\//))) ? this.handleRequest(e10, t10, a2) : (this.renderOpts.customServer && this.handleCompression(e10, t10), td(r10)) ? this.render404(e10, t10, a2) : this.pipe((e11) => this.renderToResponse(e11), { req: e10, res: t10, pathname: r10, query: n2 });
        }
        async getStaticPaths({ pathname: e10 }) {
          var t10;
          let r10 = null == (t10 = this.getPrerenderManifest().dynamicRoutes[e10]) ? void 0 : t10.fallback;
          return { staticPaths: void 0, fallbackMode: "string" == typeof r10 ? "static" : null === r10 ? "blocking" : r10 };
        }
        async renderToResponseWithComponents({ req: e10, res: t10, pathname: r10, renderOpts: n2 }, { components: a2, query: i2 }) {
          var o2, s2, l2, u2, c2;
          let d2, h2;
          let p2 = "/404" === r10, f2 = "/500" === r10, m2 = a2.isAppPath, g2 = !!a2.getServerSideProps, y2 = !!a2.getStaticPaths, v2 = !!(null == (o2 = a2.Component) ? void 0 : o2.getInitialProps), b2 = !!a2.getStaticProps, x2 = (0, eI.parse)(e10.url || "").pathname || "/", w2 = eK(e10, "_nextRewroteUrl") || x2;
          if (m2) {
            let S2 = await this.getStaticPaths({ pathname: r10, originalAppPath: a2.pathname });
            d2 = S2.staticPaths, h2 = S2.fallbackMode;
            let _2 = void 0 !== h2;
            if (_2 && (y2 = true), _2 || (null == d2 ? void 0 : d2.includes(w2)))
              b2 = true;
            else if (!this.renderOpts.dev) {
              let E2 = this.getPrerenderManifest();
              b2 = b2 || !!E2.routes["/index" === r10 ? "/" : r10];
            }
          }
          let R2 = !!(i2.__nextDataReq || e10.headers["x-nextjs-data"] && this.serverOptions.webServerConfig) && (b2 || g2);
          if (!b2 && e10.headers["x-middleware-prefetch"])
            return t10.setHeader("x-middleware-skip", "1"), t10.body("{}").send(), null;
          if (m2 && (t10.setHeader("vary", ed), b2 && e10.headers.rsc && (this.minimalMode || (R2 = true), !ez(n2.runtime) || this.serverOptions.webServerConfig)))
            for (let P2 of eh)
              delete e10.headers[P2.toString().toLowerCase()];
          delete i2.__nextDataReq, b2 && this.minimalMode && e10.headers["x-matched-path"] && e10.url.startsWith("/_next/data") && (e10.url = this.stripNextDataPath(e10.url)), e10.headers["x-nextjs-data"] && (!t10.statusCode || 200 === t10.statusCode) && t10.setHeader("x-nextjs-matched-path", `${i2.__nextLocale ? `/${i2.__nextLocale}` : ""}${r10}`);
          let k2 = Boolean(this.serverComponentManifest && e10.headers.rsc);
          if (!p2 || R2 || k2 || (t10.statusCode = 404), eD.includes(r10) && (t10.statusCode = parseInt(r10.slice(1), 10)), !p2 && !f2 && "/_error" !== r10 && "HEAD" !== e10.method && "GET" !== e10.method && ("string" == typeof a2.Component || b2))
            return t10.statusCode = 405, t10.setHeader("Allow", ["GET", "HEAD"]), await this.renderError(null, e10, t10, r10), null;
          if ("string" == typeof a2.Component)
            return { type: "html", body: tp.fromStatic(a2.Component) };
          if (i2.amp || delete i2.amp, true === n2.supportsDynamicHTML) {
            let T2 = th(e10.headers["user-agent"] || ""), A2 = "function" != typeof (null == (c2 = a2.Document) ? void 0 : c2.getInitialProps) || eM in a2.Document;
            n2.supportsDynamicHTML = !b2 && !T2 && !i2.amp && A2, n2.isBot = T2;
          }
          let $2 = b2 ? null == (s2 = this.nextConfig.i18n) ? void 0 : s2.defaultLocale : i2.__nextDefaultLocale, I2 = i2.__nextLocale, L2 = null == (l2 = this.nextConfig.i18n) ? void 0 : l2.locales, j2 = false, M2 = false;
          b2 && ({ isManualRevalidate: j2, revalidateOnlyGenerated: M2 } = eJ(e10, this.renderOpts.previewProps)), b2 && this.minimalMode && e10.headers["x-matched-path"] && (w2 = x2), x2 = C(x2), w2 = O(C(w2), null == (u2 = this.nextConfig.i18n) ? void 0 : u2.locales).pathname, R2 && (w2 = this.stripNextDataPath(w2), x2 = this.stripNextDataPath(x2));
          let F2 = !b2 || n2.supportsDynamicHTML ? null : `${I2 ? `/${I2}` : ""}${("/" === r10 || "/" === w2) && I2 ? "" : w2}${i2.amp ? ".amp" : ""}`;
          (p2 || f2) && b2 && (F2 = `${I2 ? `/${I2}` : ""}${r10}${i2.amp ? ".amp" : ""}`), F2 && (F2 = "/index" === (F2 = F2.split("/").map((e11) => {
            try {
              e11 = tv(decodeURIComponent(e11), true);
            } catch (t11) {
              throw new eT("failed to decode param");
            }
            return e11;
          }).join("/")) && "/" === r10 ? "/" : F2);
          let D2 = this.getIncrementalCache({ requestHeaders: Object.assign({}, e10.headers) });
          this.nextConfig.experimental.fetchCache && (!ez(n2.runtime) || this.serverOptions.webServerConfig) && delete e10.headers[ec];
          let N2 = false, q2 = async () => {
            let o3, s3, l3, u3, c3;
            let d3 = (0, eI.parse)(e10.url || "", true).query;
            n2.params && Object.keys(n2.params).forEach((e11) => {
              delete d3[e11];
            });
            let h3 = "/" !== x2 && this.nextConfig.trailingSlash, p3 = (0, eI.format)({ pathname: `${w2}${h3 ? "/" : ""}`, query: d3 }), f3 = { ...a2, ...n2, ...m2 && this.nextConfig.experimental.fetchCache ? { incrementalCache: D2, isRevalidate: this.minimalMode || N2 } : {}, isDataReq: R2, resolvedUrl: p3, locale: I2, locales: L2, defaultLocale: $2, resolvedAsPath: g2 || v2 ? (0, eI.format)({ pathname: `${x2}${h3 ? "/" : ""}`, query: d3 }) : p3 };
            (b2 || y2) && (f3.supportsDynamicHTML = false);
            let S2 = await this.renderHTML(e10, t10, r10, i2, f3);
            if (o3 = f3.pageData, s3 = f3.revalidate, l3 = f3.isNotFound, u3 = f3.isRedirect, l3)
              c3 = null;
            else if (u3)
              c3 = { kind: "REDIRECT", props: o3 };
            else {
              if (!S2)
                return null;
              c3 = { kind: "PAGE", html: S2, pageData: o3 };
            }
            return { revalidate: s3, value: c3 };
          }, U2 = await this.responseCache.get(F2, async (n3, a3) => {
            if (this.renderOpts.dev, eW(r10), n3 || t10.sent, a3 && (N2 = true), d2 || ({ staticPaths: d2, fallbackMode: h2 } = y2 ? await this.getStaticPaths({ pathname: r10 }) : { staticPaths: void 0, fallbackMode: false }), "static" === h2 && th(e10.headers["user-agent"] || "") && (h2 = "blocking"), j2 && M2 && !a3 && !this.minimalMode)
              return await this.render404(e10, t10), null;
            j2 && (false !== h2 || a3) && (h2 = "blocking");
            let i3 = await q2();
            return i3 ? { ...i3, revalidate: void 0 !== i3.revalidate ? i3.revalidate : 1 } : null;
          }, { incrementalCache: D2, isManualRevalidate: j2, isPrefetch: "prefetch" === e10.headers.purpose });
          if (!U2) {
            if (F2 && !(j2 && M2))
              throw Error("invariant: cache entry required but not generated");
            return null;
          }
          b2 && !this.minimalMode && t10.setHeader("x-nextjs-cache", j2 ? "REVALIDATED" : U2.isMiss ? "MISS" : U2.isStale ? "STALE" : "HIT");
          let { revalidate: B2, value: z2 } = U2, H2 = void 0 === B2 || this.renderOpts.dev && (!g2 || R2) ? void 0 : { private: p2 && z2, stateful: !b2, revalidate: B2 };
          if (z2) {
            if ("REDIRECT" === z2.kind)
              return (H2 && tc(t10, H2), R2) ? { type: "json", body: tp.fromStatic(JSON.stringify(z2.props)), revalidateOptions: H2 } : (await ((e11) => {
                let r11 = { destination: e11.pageProps.__N_REDIRECT, statusCode: e11.pageProps.__N_REDIRECT_STATUS, basePath: e11.pageProps.__N_REDIRECT_BASE_PATH }, n3 = eq(r11), { basePath: a3 } = this.nextConfig;
                a3 && false !== r11.basePath && r11.destination.startsWith("/") && (r11.destination = `${a3}${r11.destination}`), r11.destination.startsWith("/") && (r11.destination = eE(r11.destination)), t10.redirect(r11.destination, n3).body(r11.destination).send();
              })(z2.props), null);
            if ("IMAGE" !== z2.kind)
              return { type: R2 ? m2 ? "rsc" : "json" : "html", body: R2 ? tp.fromStatic(m2 ? z2.pageData : JSON.stringify(z2.pageData)) : z2.html, revalidateOptions: H2 };
            throw Error("invariant SSG should not return an image cache value");
          }
          return (H2 && tc(t10, H2), R2) ? (t10.statusCode = 404, t10.body('{"notFound":true}').send(), null) : (this.renderOpts.dev && (i2.__nextNotFoundSrcPage = r10), await this.render404(e10, t10, { pathname: r10, query: i2 }, false), null);
        }
        stripNextDataPath(e10, t10 = true) {
          if (e10.includes(this.buildId)) {
            let r10 = e10.substring(e10.indexOf(this.buildId) + this.buildId.length);
            e10 = tm(r10.replace(/\.json$/, ""));
          }
          if (this.nextConfig.i18n && t10) {
            let { locales: n2 } = this.nextConfig.i18n;
            return O(e10, n2).pathname;
          }
          return e10;
        }
        getOriginalAppPaths(e10) {
          if (this.hasAppDir) {
            var t10;
            let r10 = null == (t10 = this.appPathRoutes) ? void 0 : t10[e10];
            return r10 || null;
          }
          return null;
        }
        async renderPageComponent(e10, t10) {
          var r10;
          let { query: n2, pathname: a2 } = e10, i2 = this.getOriginalAppPaths(a2), o2 = Array.isArray(i2), s2 = a2;
          o2 && (s2 = i2[0]);
          let l2 = await this.findPageComponents({ pathname: s2, query: n2, params: e10.renderOpts.params || {}, isAppPath: o2, appPaths: i2, sriEnabled: !!(null == (r10 = this.nextConfig.experimental.sri) ? void 0 : r10.algorithm) });
          if (l2)
            try {
              return await this.renderToResponseWithComponents(e10, l2);
            } catch (c2) {
              let u2 = c2 instanceof tD;
              if (!u2 || u2 && t10)
                throw c2;
            }
          return false;
        }
        async renderToResponse(e10) {
          let { res: t10, query: r10, pathname: n2 } = e10, a2 = n2, i2 = !!r10._nextBubbleNoFallback;
          delete r10._nextBubbleNoFallback;
          try {
            if (!eW(a2)) {
              let o2 = await this.renderPageComponent(e10, i2);
              if (false !== o2)
                return o2;
            }
            if (this.dynamicRoutes)
              for (let s2 of this.dynamicRoutes) {
                let l2 = s2.match(n2);
                if (!l2)
                  continue;
                a2 = s2.page;
                let u2 = await this.renderPageComponent({ ...e10, pathname: a2, renderOpts: { ...e10.renderOpts, params: l2 } }, i2);
                if (false !== u2)
                  return u2;
              }
            if (this.serverOptions.webServerConfig) {
              e10.pathname = this.serverOptions.webServerConfig.page;
              let c2 = await this.renderPageComponent(e10, i2);
              if (false !== c2)
                return c2;
            }
          } catch (f2) {
            let d2 = tF(f2);
            if (f2 instanceof e$)
              throw console.error("Invariant: failed to load static page", JSON.stringify({ page: a2, url: e10.req.url, matchedPath: e10.req.headers["x-matched-path"], initUrl: eK(e10.req, "__NEXT_INIT_URL"), didRewrite: eK(e10.req, "_nextDidRewrite"), rewroteUrl: eK(e10.req, "_nextRewroteUrl") }, null, 2)), d2;
            if (d2 instanceof tD && i2)
              throw d2;
            if (d2 instanceof eT || d2 instanceof eA)
              return t10.statusCode = 400, await this.renderErrorToResponse(e10, d2);
            t10.statusCode = 500, await this.hasPage("/500") && (e10.query.__nextCustomErrorRender = "1", await this.renderErrorToResponse(e10, d2), delete e10.query.__nextCustomErrorRender);
            let h2 = d2 instanceof tN;
            if (!h2) {
              if (this.minimalMode, this.renderOpts.dev)
                throw tM(d2) && (d2.page = a2), d2;
              this.logError(tF(d2));
            }
            let p2 = await this.renderErrorToResponse(e10, h2 ? d2.innerError : d2);
            return p2;
          }
          return this.router.catchAllMiddleware[0] && e10.req.headers["x-nextjs-data"] && (!t10.statusCode || 200 === t10.statusCode || 404 === t10.statusCode) ? (t10.setHeader("x-nextjs-matched-path", `${r10.__nextLocale ? `/${r10.__nextLocale}` : ""}${n2}`), t10.statusCode = 200, t10.setHeader("content-type", "application/json"), t10.body("{}"), t10.send(), null) : (t10.statusCode = 404, this.renderErrorToResponse(e10, null));
        }
        async renderToHTML(e10, t10, r10, n2 = {}) {
          return this.getStaticHTML((e11) => this.renderToResponse(e11), { req: e10, res: t10, pathname: r10, query: n2 });
        }
        async renderError(e10, t10, r10, n2, a2 = {}, i2 = true) {
          return i2 && r10.setHeader("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate"), this.pipe(async (t11) => {
            let n3 = await this.renderErrorToResponse(t11, e10);
            if (this.minimalMode && 500 === r10.statusCode)
              throw e10;
            return n3;
          }, { req: t10, res: r10, pathname: n2, query: a2 });
        }
        async renderErrorToResponse(e10, t10) {
          let { res: r10, query: n2 } = e10;
          try {
            let a2 = null, i2 = 404 === r10.statusCode;
            i2 && await this.hasPage("/404") && (a2 = await this.findPageComponents({ pathname: "/404", query: n2, params: {}, isAppPath: false }));
            let o2 = `/${r10.statusCode}`;
            !e10.query.__nextCustomErrorRender && !a2 && eD.includes(o2) && ("/500" !== o2 || !this.renderOpts.dev) && (a2 = await this.findPageComponents({ pathname: o2, query: n2, params: {}, isAppPath: false })), a2 || (a2 = await this.findPageComponents({ pathname: "/_error", query: n2, params: {}, isAppPath: false }), o2 = "/_error");
            try {
              return await this.renderToResponseWithComponents({ ...e10, pathname: o2, renderOpts: { ...e10.renderOpts, err: t10 } }, a2);
            } catch (s2) {
              if (s2 instanceof tD)
                throw Error("invariant: failed to render error page");
              throw s2;
            }
          } catch (d2) {
            let l2 = tF(d2), u2 = l2 instanceof tN;
            u2 || this.logError(l2), r10.statusCode = 500;
            let c2 = await this.getFallbackErrorComponents();
            if (c2)
              return this.renderToResponseWithComponents({ ...e10, pathname: "/_error", renderOpts: { ...e10.renderOpts, err: u2 ? l2.innerError : l2 } }, { query: n2, components: c2 });
            return { type: "html", body: tp.fromStatic("Internal Server Error") };
          }
        }
        async renderErrorToHTML(e10, t10, r10, n2, a2 = {}) {
          return this.getStaticHTML((t11) => this.renderErrorToResponse(t11, e10), { req: t10, res: r10, pathname: n2, query: a2 });
        }
        async getFallbackErrorComponents() {
          return null;
        }
        async render404(e10, t10, r10, n2 = true) {
          let { pathname: a2, query: i2 } = r10 || (0, eI.parse)(e10.url, true);
          return this.nextConfig.i18n && (i2.__nextLocale = i2.__nextLocale || this.nextConfig.i18n.defaultLocale, i2.__nextDefaultLocale = i2.__nextDefaultLocale || this.nextConfig.i18n.defaultLocale), t10.statusCode = 404, this.renderError(null, e10, t10, a2, i2, n2);
        }
      }
      let tU = (e10) => {
        let t10 = e10.length, r10 = 0, n2 = 0, a2 = 8997, i2 = 0, o2 = 33826, s2 = 0, l2 = 40164, u2 = 0, c2 = 52210;
        for (; r10 < t10; )
          a2 ^= e10.charCodeAt(r10++), n2 = 435 * a2, i2 = 435 * o2, s2 = 435 * l2, u2 = 435 * c2, s2 += a2 << 8, u2 += o2 << 8, i2 += n2 >>> 16, a2 = 65535 & n2, s2 += i2 >>> 16, o2 = 65535 & i2, c2 = u2 + (s2 >>> 16) & 65535, l2 = 65535 & s2;
        return (15 & c2) * 281474976710656 + 4294967296 * l2 + 65536 * o2 + (a2 ^ c2 >> 4);
      }, tB = (e10, t10 = false) => {
        let r10 = t10 ? 'W/"' : '"';
        return r10 + tU(e10).toString(36) + e10.length.toString(36) + '"';
      };
      class tz {
        constructor(e10) {
          this.pendingResponses = /* @__PURE__ */ new Map(), this.minimalMode = e10;
        }
        get(e10, t10, r10) {
          var n2;
          let a2 = e10 ? `${e10}-${r10.isManualRevalidate ? "1" : "0"}` : null, i2 = a2 ? this.pendingResponses.get(a2) : null;
          if (i2)
            return i2;
          let o2 = () => {
          }, s2 = () => {
          }, l2 = new Promise((e11, t11) => {
            o2 = e11, s2 = t11;
          });
          a2 && this.pendingResponses.set(a2, l2);
          let u2 = false, c2 = (e11) => {
            a2 && this.pendingResponses.set(a2, Promise.resolve(e11)), u2 || (u2 = true, o2(e11));
          };
          return a2 && this.minimalMode && (null == (n2 = this.previousCacheItem) ? void 0 : n2.key) === a2 && this.previousCacheItem.expiresAt > Date.now() ? (c2(this.previousCacheItem.entry), this.pendingResponses.delete(a2), l2) : ((async () => {
            try {
              let n3 = await t10(u2, false), i3 = null === n3 ? null : { ...n3, isMiss: true };
              r10.isManualRevalidate || c2(i3), e10 && n3 && void 0 !== n3.revalidate ? this.previousCacheItem = { key: a2 || e10, entry: n3, expiresAt: Date.now() + 1e3 } : this.previousCacheItem = void 0, r10.isManualRevalidate && c2(i3);
            } catch (o3) {
              u2 ? console.error(o3) : s2(o3);
            } finally {
              a2 && this.pendingResponses.delete(a2);
            }
          })(), l2);
        }
      }
      function tH(e10, t10 = "") {
        return e10 = e10.replace(/\\/g, "/"), (e10 = t10 && e10.endsWith(t10) ? e10.slice(0, -t10.length) : e10).startsWith("/index/") && !eW(e10) ? e10 = e10.slice(6) : "/index" === e10 && (e10 = "/"), e10;
      }
      class tW extends tq {
        constructor(e10) {
          super(e10), Object.assign(this.renderOpts, e10.webServerConfig.extendRenderOpts);
        }
        handleCompression() {
        }
        getIncrementalCache() {
          return {};
        }
        getResponseCache() {
          return new tz(this.minimalMode);
        }
        getCustomRoutes() {
          return { headers: [], rewrites: { fallback: [], afterFiles: [], beforeFiles: [] }, redirects: [] };
        }
        async run(e10, t10, r10) {
          super.run(e10, t10, r10);
        }
        async hasPage(e10) {
          return e10 === this.serverOptions.webServerConfig.page;
        }
        getPublicDir() {
          return "";
        }
        getBuildId() {
          return this.serverOptions.webServerConfig.extendRenderOpts.buildId;
        }
        loadEnvConfig() {
        }
        getHasAppDir() {
          return "app" === this.serverOptions.webServerConfig.pagesType;
        }
        getHasStaticDir() {
          return false;
        }
        async getFallback() {
          return "";
        }
        getFontManifest() {
        }
        getPagesManifest() {
          return { [this.serverOptions.webServerConfig.page]: "" };
        }
        getAppPathsManifest() {
          return { [this.serverOptions.webServerConfig.page]: "" };
        }
        getFilesystemPaths() {
          return /* @__PURE__ */ new Set();
        }
        attachRequestMeta(e10, t10) {
          e0(e10, "__NEXT_INIT_QUERY", { ...t10.query });
        }
        getPrerenderManifest() {
          return { version: 3, routes: {}, dynamicRoutes: {}, notFoundRoutes: [], preview: { previewModeId: "", previewModeSigningKey: "", previewModeEncryptionKey: "" } };
        }
        getServerComponentManifest() {
          return this.serverOptions.webServerConfig.extendRenderOpts.serverComponentManifest;
        }
        getServerCSSManifest() {
          return this.serverOptions.webServerConfig.extendRenderOpts.serverCSSManifest;
        }
        getFontLoaderManifest() {
          return this.serverOptions.webServerConfig.extendRenderOpts.fontLoaderManifest;
        }
        generateRoutes() {
          let e10 = [{ match: e5("/_next/data/:path*"), type: "route", name: "_next/data catchall", check: true, fn: async (e11, t11, r11, n2) => {
            if (!r11.path || r11.path[0] !== this.buildId)
              return await this.render404(e11, t11, n2), { finished: true };
            r11.path.shift();
            let a2 = r11.path[r11.path.length - 1];
            if ("string" != typeof a2 || !a2.endsWith(".json"))
              return await this.render404(e11, t11, n2), { finished: true };
            let i2 = `/${r11.path.join("/")}`;
            if (i2 = tH(i2, ".json"), this.router.catchAllMiddleware[0] && (this.nextConfig.trailingSlash && !i2.endsWith("/") && (i2 += "/"), !this.nextConfig.trailingSlash && i2.length > 1 && i2.endsWith("/") && (i2 = i2.substring(0, i2.length - 1))), this.nextConfig.i18n) {
              let { host: o2 } = (null == e11 ? void 0 : e11.headers) || {}, s2 = null == o2 ? void 0 : o2.split(":")[0].toLowerCase(), l2 = O(i2, this.nextConfig.i18n.locales), { defaultLocale: u2 } = _(this.nextConfig.i18n.domains, s2) || {}, c2 = "";
              if (l2.detectedLocale && (i2 = l2.pathname, c2 = l2.detectedLocale), n2.query.__nextLocale = c2, n2.query.__nextDefaultLocale = u2 || this.nextConfig.i18n.defaultLocale, !c2 && !this.router.catchAllMiddleware[0])
                return n2.query.__nextLocale = n2.query.__nextDefaultLocale, await this.render404(e11, t11, n2), { finished: true };
            }
            return { pathname: i2, query: { ...n2.query, __nextDataReq: "1" }, finished: false };
          } }, { match: e5("/_next/:path*"), type: "route", name: "_next catchall", fn: async (e11, t11, r11, n2) => (await this.render404(e11, t11, n2), { finished: true }) }], t10 = { match: e5("/:path*"), type: "route", matchesLocale: true, name: "Catchall render", fn: async (e11, t11, r11, n2) => {
            let { pathname: a2, query: i2 } = n2;
            if (!a2)
              throw Error("pathname is undefined");
            if (a2 !== this.serverOptions.webServerConfig.page && eW(a2 = this.serverOptions.webServerConfig.page)) {
              let o2 = tC(a2);
              a2 = tO(a2, i2, o2), t$(e11, true, Object.keys(o2.routeKeys), true, o2);
            }
            if (a2 = C(a2), this.nextConfig.i18n) {
              var s2;
              let l2 = O(a2, null == (s2 = this.nextConfig.i18n) ? void 0 : s2.locales);
              l2.detectedLocale && (a2 = l2.pathname, n2.query.__nextLocale = l2.detectedLocale);
            }
            let u2 = !!i2._nextBubbleNoFallback;
            e2(a2) && delete i2._nextBubbleNoFallback;
            try {
              return await this.render(e11, t11, a2, i2, n2, true), { finished: true };
            } catch (c2) {
              if (c2 instanceof tD && u2)
                return { finished: false };
              throw c2;
            }
          } }, { useFileSystemPublicRoutes: r10 } = this.nextConfig;
          return r10 && (this.appPathRoutes = this.getAppPathRoutes(), this.dynamicRoutes = this.getDynamicRoutes()), { headers: [], fsRoutes: e10, rewrites: { beforeFiles: [], afterFiles: [], fallback: [] }, redirects: [], catchAllRoute: t10, catchAllMiddleware: [], useFileSystemPublicRoutes: r10, dynamicRoutes: this.dynamicRoutes, pageChecker: this.hasPage.bind(this), nextConfig: this.nextConfig };
        }
        async handleApiRequest() {
          return false;
        }
        async renderHTML(e10, t10, r10, n2, a2) {
          let { pagesRenderToHTML: i2, appRenderToHTML: o2 } = this.serverOptions.webServerConfig, s2 = i2 || o2;
          if (s2)
            return await s2({ url: e10.url, cookies: e10.cookies, headers: e10.headers }, {}, r10, n2, Object.assign(a2, { disableOptimizedLoading: true, runtime: "experimental-edge" }));
          throw Error("Invariant: curRenderToHTML is missing");
        }
        async sendRenderResult(e10, t10, r10) {
          t10.setHeader("X-Edge-Runtime", "1"), r10.poweredByHeader && "html" === r10.type && t10.setHeader("X-Powered-By", "Next.js");
          let n2 = r10.result.contentType();
          if (t10.getHeader("Content-Type") || t10.setHeader("Content-Type", n2 || ("json" === r10.type ? "application/json" : "text/html; charset=utf-8")), r10.result.isDynamic()) {
            let a2 = t10.transformStream.writable.getWriter();
            r10.result.pipe({ write: (e11) => a2.write(e11), end: () => a2.close(), destroy: (e11) => a2.abort(e11), cork: () => {
            }, uncork: () => {
            } });
          } else {
            let i2 = await r10.result.toUnchunkedString();
            t10.setHeader("Content-Length", String(eb(i2))), r10.generateEtags && t10.setHeader("ETag", tB(i2)), t10.body(i2);
          }
          t10.send();
        }
        async runApi() {
          return true;
        }
        async findPageComponents({ pathname: e10, query: t10, params: r10 }) {
          let n2 = await this.serverOptions.webServerConfig.loadComponent(e10);
          return n2 ? { query: { ...t10 || {}, ...r10 || {} }, components: n2 } : null;
        }
      }
      class tV {
        constructor(e10, t10, r10) {
          this.method = e10, this.url = t10, this.body = r10;
        }
        get cookies() {
          return this._cookies ? this._cookies : this._cookies = eY(this.headers)();
        }
      }
      class tG {
        constructor(e10) {
          this.destination = e10;
        }
        redirect(e10, t10) {
          return this.setHeader("Location", e10), this.statusCode = t10, 308 === t10 && this.setHeader("Refresh", `0;url=${e10}`), this;
        }
      }
      class tY extends tV {
        constructor(e10) {
          let t10 = new URL(e10.url);
          for (let [r10, n2] of (super(e10.method, t10.href.slice(t10.origin.length), e10.clone().body), this.request = e10, this.headers = {}, e10.headers.entries()))
            this.headers[r10] = n2;
        }
        async parseBody(e10) {
          throw Error("parseBody is not implemented in the web runtime");
        }
      }
      class tJ extends tG {
        get sent() {
          return this._sent;
        }
        constructor(e10 = new TransformStream()) {
          super(e10.writable), this.transformStream = e10, this.headers = new Headers(), this.textBody = void 0, this._sent = false, this.sendPromise = new Promise((e11) => {
            this.sendResolve = e11;
          }), this.response = this.sendPromise.then(() => new Response(this.textBody ?? this.transformStream.readable, { headers: this.headers, status: this.statusCode, statusText: this.statusMessage }));
        }
        setHeader(e10, t10) {
          for (let r10 of (this.headers.delete(e10), Array.isArray(t10) ? t10 : [t10]))
            this.headers.append(e10, r10);
          return this;
        }
        getHeaderValues(e10) {
          var t10;
          return null == (t10 = this.getHeader(e10)) ? void 0 : t10.split(",").map((e11) => e11.trimStart());
        }
        getHeader(e10) {
          return this.headers.get(e10) ?? void 0;
        }
        hasHeader(e10) {
          return this.headers.has(e10);
        }
        appendHeader(e10, t10) {
          return this.headers.append(e10, t10), this;
        }
        body(e10) {
          return this.textBody = e10, this;
        }
        send() {
          var e10;
          null == (e10 = this.sendResolve) || e10.call(this), this._sent = true;
        }
        toResponse() {
          return this.response;
        }
      }
      function tZ({ dev: e10, page: t10, appMod: r10, pageMod: n2, errorMod: a2, error500Mod: i2, pagesType: o2, Document: s2, buildManifest: l2, reactLoadableManifest: u2, appRenderToHTML: c2, pagesRenderToHTML: d2, serverComponentManifest: h2, subresourceIntegrityManifest: p2, serverCSSManifest: f2, config: m2, buildId: g2, fontLoaderManifest: y2 }) {
        let v2 = "app" === o2, b2 = { dev: e10, buildManifest: l2, reactLoadableManifest: u2, subresourceIntegrityManifest: p2, fontLoaderManifest: y2, Document: s2, App: null == r10 ? void 0 : r10.default }, x2 = new tW({ dev: e10, conf: m2, minimalMode: true, webServerConfig: { page: t10, pagesType: o2, extendRenderOpts: { buildId: g2, runtime: eB.experimentalEdge, supportsDynamicHTML: true, disableOptimizedLoading: true, serverComponentManifest: h2, serverCSSManifest: f2 }, appRenderToHTML: c2, pagesRenderToHTML: d2, loadComponent: async (e11) => v2 ? null : e11 === t10 ? { ...b2, Component: n2.default, pageConfig: n2.config || {}, getStaticProps: n2.getStaticProps, getServerSideProps: n2.getServerSideProps, getStaticPaths: n2.getStaticPaths, ComponentMod: n2, pathname: e11 } : "/500" === e11 && i2 ? { ...b2, Component: i2.default, pageConfig: i2.config || {}, getStaticProps: i2.getStaticProps, getServerSideProps: i2.getServerSideProps, getStaticPaths: i2.getStaticPaths, ComponentMod: i2, pathname: e11 } : "/_error" === e11 ? { ...b2, Component: a2.default, pageConfig: a2.config || {}, getStaticProps: a2.getStaticProps, getServerSideProps: a2.getServerSideProps, getStaticPaths: a2.getStaticPaths, ComponentMod: a2, pathname: e11 } : null } }), w2 = x2.getRequestHandler();
        return async function(e11) {
          let t11 = new tY(e11), r11 = new tJ();
          return w2(t11, r11), await r11.toResponse();
        };
      }
      var tX = r(294);
      function tK(e10) {
        return e10.startsWith("/") ? e10 : `/${e10}`;
      }
      function tQ(e10) {
        let t10 = tK(/^\/index(\/|$)/.test(e10) && !eW(e10) ? `/index${e10}` : "/" === e10 ? "/index" : e10);
        return t10;
      }
      function t0(e10, t10) {
        let r10 = tm(tQ(t10));
        return e10.pages[r10] || (console.warn(`Could not find files for ${r10} in .next/build-manifest.json`), []);
      }
      let t1 = { "&": "\\u0026", ">": "\\u003e", "<": "\\u003c", "\u2028": "\\u2028", "\u2029": "\\u2029" }, t2 = /[&><\u2028\u2029]/g;
      function t3(e10) {
        return e10.replace(t2, (e11) => t1[e11]);
      }
      let t4 = (0, tX.createContext)(null);
      function t8(e10, t10, r10) {
        let n2 = t0(e10, "/_app"), a2 = t0(e10, t10);
        return { sharedFiles: n2, pageFiles: a2, allFiles: [.../* @__PURE__ */ new Set([...n2, ...a2])] };
      }
      function t5(e10, t10) {
        let { assetPrefix: r10, buildManifest: n2, devOnlyCacheBusterQueryString: a2, disableOptimizedLoading: i2, crossOrigin: o2 } = e10;
        return n2.polyfillFiles.filter((e11) => e11.endsWith(".js") && !e11.endsWith(".module.js")).map((e11) => tX.createElement("script", { key: e11, defer: !i2, nonce: t10.nonce, crossOrigin: t10.crossOrigin || o2, noModule: true, src: `${r10}/_next/${e11}${a2}` }));
      }
      function t9(e10, t10, r10) {
        let { dynamicImports: n2, assetPrefix: a2, isDevelopment: i2, devOnlyCacheBusterQueryString: o2, disableOptimizedLoading: s2, crossOrigin: l2 } = e10;
        return n2.map((e11) => !e11.endsWith(".js") || r10.allFiles.includes(e11) ? null : tX.createElement("script", { async: !i2 && s2, defer: !s2, key: e11, src: `${a2}/_next/${encodeURI(e11)}${o2}`, nonce: t10.nonce, crossOrigin: t10.crossOrigin || l2 }));
      }
      function t6(e10, t10, r10) {
        var n2;
        let { assetPrefix: a2, buildManifest: i2, isDevelopment: o2, devOnlyCacheBusterQueryString: s2, disableOptimizedLoading: l2, crossOrigin: u2 } = e10, c2 = r10.allFiles.filter((e11) => e11.endsWith(".js")), d2 = null == (n2 = i2.lowPriorityFiles) ? void 0 : n2.filter((e11) => e11.endsWith(".js"));
        return [...c2, ...d2].map((e11) => tX.createElement("script", { key: e11, src: `${a2}/_next/${encodeURI(e11)}${s2}`, nonce: t10.nonce, async: !o2 && l2, defer: !l2, crossOrigin: t10.crossOrigin || u2 }));
      }
      function t7(e10, t10) {
        let { assetPrefix: r10, scriptLoader: n2, crossOrigin: a2, nextScriptWorkers: i2 } = e10;
        return null;
      }
      function re(e10, t10) {
        let { scriptLoader: r10, disableOptimizedLoading: n2, crossOrigin: a2 } = e10, i2 = t7(e10, t10), o2 = (r10.beforeInteractive || []).filter((e11) => e11.src).map((e11, r11) => {
          let { strategy: i3, ...o3 } = e11;
          return tX.createElement("script", Object.assign({}, o3, { key: o3.src || r11, defer: o3.defer ?? !n2, nonce: t10.nonce, "data-nscript": "beforeInteractive", crossOrigin: t10.crossOrigin || a2 }));
        });
        return tX.createElement(tX.Fragment, null, i2, o2);
      }
      function rt(e10) {
        let { crossOrigin: t10, nonce: r10, ...n2 } = e10;
        return n2;
      }
      function rr(e10, t10) {
        return e10 || `${t10}${t10.includes("?") ? "&" : "?"}amp=1`;
      }
      function rn(e10, t10, r10 = "") {
        if (!e10)
          return { preconnect: null, preload: null };
        let n2 = e10.pages["/_app"], a2 = e10.pages[t10], i2 = [...n2 ?? [], ...a2 ?? []], o2 = !!(0 === i2.length && (n2 || a2));
        return { preconnect: o2 ? tX.createElement("link", { rel: "preconnect", href: "/", crossOrigin: "anonymous" }) : null, preload: i2 ? i2.map((e11) => {
          let t11 = /\.(woff|woff2|eot|ttf|otf)$/.exec(e11)[1];
          return tX.createElement("link", { key: e11, rel: "preload", href: `${r10}/_next/${encodeURI(e11)}`, as: "font", type: `font/${t11}`, crossOrigin: "anonymous" });
        }) : null };
      }
      class ra extends tX.Component {
        getCssLinks(e10) {
          let { assetPrefix: t10, devOnlyCacheBusterQueryString: r10, dynamicImports: n2, crossOrigin: a2, optimizeCss: i2, optimizeFonts: o2 } = this.context, s2 = e10.allFiles.filter((e11) => e11.endsWith(".css")), l2 = new Set(e10.sharedFiles), u2 = /* @__PURE__ */ new Set([]), c2 = Array.from(new Set(n2.filter((e11) => e11.endsWith(".css"))));
          if (c2.length) {
            let d2 = new Set(s2);
            c2 = c2.filter((e11) => !(d2.has(e11) || l2.has(e11))), u2 = new Set(c2), s2.push(...c2);
          }
          let h2 = [];
          return s2.forEach((e11) => {
            let n3 = l2.has(e11);
            i2 || h2.push(tX.createElement("link", { key: `${e11}-preload`, nonce: this.props.nonce, rel: "preload", href: `${t10}/_next/${encodeURI(e11)}${r10}`, as: "style", crossOrigin: this.props.crossOrigin || a2 }));
            let o3 = u2.has(e11);
            h2.push(tX.createElement("link", { key: e11, nonce: this.props.nonce, rel: "stylesheet", href: `${t10}/_next/${encodeURI(e11)}${r10}`, crossOrigin: this.props.crossOrigin || a2, "data-n-g": o3 ? void 0 : n3 ? "" : void 0, "data-n-p": o3 ? void 0 : n3 ? void 0 : "" }));
          }), o2 && (h2 = this.makeStylesheetInert(h2)), 0 === h2.length ? null : h2;
        }
        getPreloadDynamicChunks() {
          let { dynamicImports: e10, assetPrefix: t10, devOnlyCacheBusterQueryString: r10, crossOrigin: n2 } = this.context;
          return e10.map((e11) => e11.endsWith(".js") ? tX.createElement("link", { rel: "preload", key: e11, href: `${t10}/_next/${encodeURI(e11)}${r10}`, as: "script", nonce: this.props.nonce, crossOrigin: this.props.crossOrigin || n2 }) : null).filter(Boolean);
        }
        getPreloadMainLinks(e10) {
          let { assetPrefix: t10, devOnlyCacheBusterQueryString: r10, scriptLoader: n2, crossOrigin: a2 } = this.context, i2 = e10.allFiles.filter((e11) => e11.endsWith(".js"));
          return [...(n2.beforeInteractive || []).map((e11) => tX.createElement("link", { key: e11.src, nonce: this.props.nonce, rel: "preload", href: e11.src, as: "script", crossOrigin: this.props.crossOrigin || a2 })), ...i2.map((e11) => tX.createElement("link", { key: e11, nonce: this.props.nonce, rel: "preload", href: `${t10}/_next/${encodeURI(e11)}${r10}`, as: "script", crossOrigin: this.props.crossOrigin || a2 }))];
        }
        getBeforeInteractiveInlineScripts() {
          let { scriptLoader: e10 } = this.context, { nonce: t10, crossOrigin: r10 } = this.props;
          return (e10.beforeInteractive || []).filter((e11) => !e11.src && (e11.dangerouslySetInnerHTML || e11.children)).map((e11, n2) => {
            let { strategy: a2, children: i2, dangerouslySetInnerHTML: o2, src: s2, ...l2 } = e11, u2 = "";
            return o2 && o2.__html ? u2 = o2.__html : i2 && (u2 = "string" == typeof i2 ? i2 : Array.isArray(i2) ? i2.join("") : ""), tX.createElement("script", Object.assign({}, l2, { dangerouslySetInnerHTML: { __html: u2 }, key: l2.id || n2, nonce: t10, "data-nscript": "beforeInteractive", crossOrigin: r10 || void 0 }));
          });
        }
        getDynamicChunks(e10) {
          return t9(this.context, this.props, e10);
        }
        getPreNextScripts() {
          return re(this.context, this.props);
        }
        getScripts(e10) {
          return t6(this.context, this.props, e10);
        }
        getPolyfillScripts() {
          return t5(this.context, this.props);
        }
        makeStylesheetInert(e10) {
          return tX.Children.map(e10, (e11) => {
            var t10, r10;
            if ((null == e11 ? void 0 : e11.type) === "link" && (null == e11 ? void 0 : null == (t10 = e11.props) ? void 0 : t10.href) && eF.some(({ url: t11 }) => {
              var r11, n2;
              return null == e11 ? void 0 : null == (r11 = e11.props) ? void 0 : null == (n2 = r11.href) ? void 0 : n2.startsWith(t11);
            })) {
              let n2 = { ...e11.props || {}, "data-href": e11.props.href, href: void 0 };
              return tX.cloneElement(e11, n2);
            }
            if (null == e11 ? void 0 : null == (r10 = e11.props) ? void 0 : r10.children) {
              let a2 = { ...e11.props || {}, children: this.makeStylesheetInert(e11.props.children) };
              return tX.cloneElement(e11, a2);
            }
            return e11;
          }).filter(Boolean);
        }
        render() {
          let { styles: e10, ampPath: t10, inAmpMode: r10, hybridAmp: n2, canonicalBase: a2, __NEXT_DATA__: i2, dangerousAsPath: o2, headTags: s2, unstable_runtimeJS: l2, unstable_JsPreload: u2, disableOptimizedLoading: c2, optimizeCss: d2, optimizeFonts: h2, assetPrefix: p2, fontLoaderManifest: f2 } = this.context, m2 = false === l2, g2 = false === u2 || !c2;
          this.context.docComponentsRendered.Head = true;
          let { head: y2 } = this.context, v2 = [], b2 = [];
          y2 && (y2.forEach((e11) => {
            e11 && "link" === e11.type && "preload" === e11.props.rel && "style" === e11.props.as ? v2.push(e11) : e11 && b2.push(e11);
          }), y2 = v2.concat(b2));
          let x2 = tX.Children.toArray(this.props.children).filter(Boolean);
          h2 && (x2 = this.makeStylesheetInert(x2));
          let w2 = false;
          y2 = tX.Children.map(y2 || [], (e11) => {
            if (!e11)
              return e11;
            let { type: t11, props: r11 } = e11;
            return "link" === t11 && "amphtml" === r11.rel && (w2 = true), e11;
          });
          let S2 = t8(this.context.buildManifest, this.context.__NEXT_DATA__.page, false), _2 = rn(f2, o2, p2);
          return tX.createElement("head", Object.assign({}, rt(this.props)), this.context.isDevelopment && tX.createElement(tX.Fragment, null, tX.createElement("style", { "data-next-hide-fouc": true, "data-ampdevmode": void 0, dangerouslySetInnerHTML: { __html: "body{display:none}" } }), tX.createElement("noscript", { "data-next-hide-fouc": true, "data-ampdevmode": void 0 }, tX.createElement("style", { dangerouslySetInnerHTML: { __html: "body{display:block}" } }))), y2, tX.createElement("meta", { name: "next-head-count", content: tX.Children.count(y2 || []).toString() }), x2, h2 && tX.createElement("meta", { name: "next-font-preconnect" }), _2.preconnect, _2.preload, false, tX.createElement(tX.Fragment, null, !w2 && n2 && tX.createElement("link", { rel: "amphtml", href: a2 + rr(t10, o2) }), this.getBeforeInteractiveInlineScripts(), !d2 && this.getCssLinks(S2), !d2 && tX.createElement("noscript", { "data-n-css": this.props.nonce ?? "" }), !m2 && !g2 && this.getPreloadDynamicChunks(), !m2 && !g2 && this.getPreloadMainLinks(S2), !c2 && !m2 && this.getPolyfillScripts(), !c2 && !m2 && this.getPreNextScripts(), !c2 && !m2 && this.getDynamicChunks(S2), !c2 && !m2 && this.getScripts(S2), d2 && this.getCssLinks(S2), d2 && tX.createElement("noscript", { "data-n-css": this.props.nonce ?? "" }), this.context.isDevelopment && tX.createElement("noscript", { id: "__next_css__DO_NOT_USE__" }), e10 || null), tX.createElement(tX.Fragment, {}, ...s2 || []));
        }
      }
      __publicField(ra, "contextType", t4);
      function ri(e10, t10, r10) {
        var n2, a2, i2, o2;
        if (!r10.children)
          return;
        let s2 = [], l2 = Array.isArray(r10.children) ? r10.children : [r10.children], u2 = null == (n2 = l2.find((e11) => e11.type === ra)) ? void 0 : null == (a2 = n2.props) ? void 0 : a2.children, c2 = null == (i2 = l2.find((e11) => "body" === e11.type)) ? void 0 : null == (o2 = i2.props) ? void 0 : o2.children, d2 = [...Array.isArray(u2) ? u2 : [u2], ...Array.isArray(c2) ? c2 : [c2]];
        tX.Children.forEach(d2, (t11) => {
          var r11;
          if (t11 && (null == (r11 = t11.type) ? void 0 : r11.__nextScript)) {
            if ("beforeInteractive" === t11.props.strategy) {
              e10.beforeInteractive = (e10.beforeInteractive || []).concat([{ ...t11.props }]);
              return;
            }
            if (["lazyOnload", "afterInteractive", "worker"].includes(t11.props.strategy)) {
              s2.push(t11.props);
              return;
            }
          }
        }), t10.scriptLoader = s2;
      }
      const _ro = class extends tX.Component {
        getDynamicChunks(e10) {
          return t9(this.context, this.props, e10);
        }
        getPreNextScripts() {
          return re(this.context, this.props);
        }
        getScripts(e10) {
          return t6(this.context, this.props, e10);
        }
        getPolyfillScripts() {
          return t5(this.context, this.props);
        }
        static getInlineScriptSource(e10) {
          let { __NEXT_DATA__: t10, largePageDataBytes: n2 } = e10;
          try {
            let a2 = JSON.stringify(t10), i2 = new TextEncoder().encode(a2).buffer.byteLength, o2 = r(395).Z;
            return n2 && i2 > n2 && console.warn(`Warning: data for page "${t10.page}"${t10.page === e10.dangerousAsPath ? "" : ` (path "${e10.dangerousAsPath}")`} is ${o2(i2)} which exceeds the threshold of ${o2(n2)}, this amount of data can reduce performance.
See more info here: https://nextjs.org/docs/messages/large-page-data`), t3(a2);
          } catch (s2) {
            if (tM(s2) && -1 !== s2.message.indexOf("circular structure"))
              throw Error(`Circular structure in "getInitialProps" result of page "${t10.page}". https://nextjs.org/docs/messages/circular-structure`);
            throw s2;
          }
        }
        render() {
          let { assetPrefix: e10, inAmpMode: t10, buildManifest: r10, unstable_runtimeJS: n2, docComponentsRendered: a2, devOnlyCacheBusterQueryString: i2, disableOptimizedLoading: o2, crossOrigin: s2 } = this.context, l2 = false === n2;
          a2.NextScript = true;
          let u2 = t8(this.context.buildManifest, this.context.__NEXT_DATA__.page, false);
          return tX.createElement(tX.Fragment, null, !l2 && r10.devFiles ? r10.devFiles.map((t11) => tX.createElement("script", { key: t11, src: `${e10}/_next/${encodeURI(t11)}${i2}`, nonce: this.props.nonce, crossOrigin: this.props.crossOrigin || s2 })) : null, l2 ? null : tX.createElement("script", { id: "__NEXT_DATA__", type: "application/json", nonce: this.props.nonce, crossOrigin: this.props.crossOrigin || s2, dangerouslySetInnerHTML: { __html: _ro.getInlineScriptSource(this.context) } }), o2 && !l2 && this.getPolyfillScripts(), o2 && !l2 && this.getPreNextScripts(), o2 && !l2 && this.getDynamicChunks(u2), o2 && !l2 && this.getScripts(u2));
        }
      };
      let ro = _ro;
      __publicField(ro, "contextType", t4);
      function rs(e10) {
        let { inAmpMode: t10, docComponentsRendered: r10, locale: n2, scriptLoader: a2, __NEXT_DATA__: i2 } = (0, tX.useContext)(t4);
        return r10.Html = true, ri(a2, i2, e10), tX.createElement("html", Object.assign({}, e10, { lang: e10.lang || n2 || void 0, amp: void 0, "data-ampdevmode": void 0 }));
      }
      function rl() {
        let { docComponentsRendered: e10 } = (0, tX.useContext)(t4);
        return e10.Main = true, tX.createElement("next-js-internal-body-render-target", null);
      }
      class ru extends tX.Component {
        static getInitialProps(e10) {
          return e10.defaultGetInitialProps(e10);
        }
        render() {
          return tX.createElement(rs, null, tX.createElement(ra, null), tX.createElement("body", null, tX.createElement(rl, null), tX.createElement(ro, null)));
        }
      }
      let rc = function() {
        return tX.createElement(rs, null, tX.createElement(ra, null), tX.createElement("body", null, tX.createElement(rl, null), tX.createElement(ro, null)));
      };
      ru[eM] = rc;
      var rd = r(762), rh = r(973);
      let rp = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
      class rf extends Error {
        constructor(e10, t10, r10, n2) {
          super(r10 ? `Error serializing \`${r10}\` returned from \`${t10}\` in "${e10}".
Reason: ${n2}` : `Error serializing props returned from \`${t10}\` in "${e10}".
Reason: ${n2}`);
        }
      }
      function rm(e10, t10, r10) {
        if (!tj(r10))
          throw new rf(e10, t10, "", `Props must be returned as a plain object from ${t10}: \`{ props: { ... } }\` (received: \`${tL(r10)}\`).`);
        function n2(r11, n3, a2) {
          if (r11.has(n3))
            throw new rf(e10, t10, a2, `Circular references cannot be expressed in JSON (references: \`${r11.get(n3) || "(self)"}\`).`);
          r11.set(n3, a2);
        }
        return function r11(a2, i2, o2) {
          let s2 = typeof i2;
          if (null === i2 || "boolean" === s2 || "number" === s2 || "string" === s2)
            return true;
          if ("undefined" === s2)
            throw new rf(e10, t10, o2, "`undefined` cannot be serialized as JSON. Please use `null` or omit this value.");
          if (tj(i2)) {
            if (n2(a2, i2, o2), Object.entries(i2).every(([e11, t11]) => {
              let n3 = rp.test(e11) ? `${o2}.${e11}` : `${o2}[${JSON.stringify(e11)}]`, i3 = new Map(a2);
              return r11(i3, e11, n3) && r11(i3, t11, n3);
            }))
              return true;
            throw new rf(e10, t10, o2, "invariant: Unknown error encountered in Object.");
          }
          if (Array.isArray(i2)) {
            if (n2(a2, i2, o2), i2.every((e11, t11) => {
              let n3 = new Map(a2);
              return r11(n3, e11, `${o2}[${t11}]`);
            }))
              return true;
            throw new rf(e10, t10, o2, "invariant: Unknown error encountered in Array.");
          }
          throw new rf(e10, t10, o2, "`" + s2 + "`" + ("object" === s2 ? ` ("${Object.prototype.toString.call(i2)}")` : "") + " cannot be serialized as JSON. Please only return JSON serializable data types.");
        }(/* @__PURE__ */ new Map(), r10, "");
      }
      let rg = tX.createContext({}), ry = () => {
      }, rv = () => {
      };
      function rb(e10) {
        var t10;
        let { headManager: r10, reduceComponentsToState: n2 } = e10;
        function a2() {
          if (r10 && r10.mountedInstances) {
            let t11 = tX.Children.toArray(Array.from(r10.mountedInstances).filter(Boolean));
            r10.updateHead(n2(t11, e10));
          }
        }
        return null == r10 || null == (t10 = r10.mountedInstances) || t10.add(e10.children), a2(), ry(() => {
          var t11;
          return null == r10 || null == (t11 = r10.mountedInstances) || t11.add(e10.children), () => {
            var t12;
            null == r10 || null == (t12 = r10.mountedInstances) || t12.delete(e10.children);
          };
        }), ry(() => (r10 && (r10._pendingUpdate = a2), () => {
          r10 && (r10._pendingUpdate = a2);
        })), rv(() => (r10 && r10._pendingUpdate && (r10._pendingUpdate(), r10._pendingUpdate = null), () => {
          r10 && r10._pendingUpdate && (r10._pendingUpdate(), r10._pendingUpdate = null);
        })), null;
      }
      let rx = tX.createContext({});
      function rw({ ampFirst: e10 = false, hybrid: t10 = false, hasQuery: r10 = false } = {}) {
        return e10 || t10 && r10;
      }
      function rS(e10 = false) {
        let t10 = [tX.createElement("meta", { charSet: "utf-8" })];
        return e10 || t10.push(tX.createElement("meta", { name: "viewport", content: "width=device-width" })), t10;
      }
      function r_(e10, t10) {
        return "string" == typeof t10 || "number" == typeof t10 ? e10 : t10.type === tX.Fragment ? e10.concat(tX.Children.toArray(t10.props.children).reduce((e11, t11) => "string" == typeof t11 || "number" == typeof t11 ? e11 : e11.concat(t11), [])) : e10.concat(t10);
      }
      let rC = ["name", "httpEquiv", "charSet", "itemProp"];
      function rE() {
        let e10 = /* @__PURE__ */ new Set(), t10 = /* @__PURE__ */ new Set(), r10 = /* @__PURE__ */ new Set(), n2 = {};
        return (a2) => {
          let i2 = true, o2 = false;
          if (a2.key && "number" != typeof a2.key && a2.key.indexOf("$") > 0) {
            o2 = true;
            let s2 = a2.key.slice(a2.key.indexOf("$") + 1);
            e10.has(s2) ? i2 = false : e10.add(s2);
          }
          switch (a2.type) {
            case "title":
            case "base":
              t10.has(a2.type) ? i2 = false : t10.add(a2.type);
              break;
            case "meta":
              for (let l2 = 0, u2 = rC.length; l2 < u2; l2++) {
                let c2 = rC[l2];
                if (a2.props.hasOwnProperty(c2)) {
                  if ("charSet" === c2)
                    r10.has(c2) ? i2 = false : r10.add(c2);
                  else {
                    let d2 = a2.props[c2], h2 = n2[c2] || /* @__PURE__ */ new Set();
                    ("name" !== c2 || !o2) && h2.has(d2) ? i2 = false : (h2.add(d2), n2[c2] = h2);
                  }
                }
              }
          }
          return i2;
        };
      }
      function rR(e10, t10) {
        let { inAmpMode: r10 } = t10;
        return e10.reduce(r_, []).reverse().concat(rS(r10).reverse()).filter(rE()).reverse().map((e11, t11) => {
          let n2 = e11.key || t11;
          if (!r10 && "link" === e11.type && e11.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some((t12) => e11.props.href.startsWith(t12))) {
            let a2 = e4({}, e11.props || {});
            return a2["data-href"] = a2.href, a2.href = void 0, a2["data-optimized-fonts"] = true, tX.cloneElement(e11, a2);
          }
          return tX.cloneElement(e11, { key: n2 });
        });
      }
      function rP({ children: e10 }) {
        let t10 = (0, tX.useContext)(rg), r10 = (0, tX.useContext)(rx);
        return tX.createElement(rb, { reduceComponentsToState: rR, headManager: r10, inAmpMode: rw(t10) }, e10);
      }
      let rk = tX.createContext(null), rT = [], rA = [], r$ = false;
      function rO(e10) {
        let t10 = e10(), r10 = { loading: true, loaded: null, error: null };
        return r10.promise = t10.then((e11) => (r10.loading = false, r10.loaded = e11, e11)).catch((e11) => {
          throw r10.loading = false, r10.error = e11, e11;
        }), r10;
      }
      function rI(e10, t10) {
        let r10 = Object.assign({ loader: null, loading: null, delay: 200, timeout: null, webpack: null, modules: null }, t10);
        r10.lazy = tX.lazy(r10.loader);
        let n2 = null;
        function a2() {
          if (!n2) {
            let t11 = new rL(e10, r10);
            n2 = { getCurrentValue: t11.getCurrentValue.bind(t11), subscribe: t11.subscribe.bind(t11), retry: t11.retry.bind(t11), promise: t11.promise.bind(t11) };
          }
          return n2.promise();
        }
        function i2(e11) {
          !function() {
            a2();
            let e12 = tX.useContext(rk);
            e12 && Array.isArray(r10.modules) && r10.modules.forEach((t12) => {
              e12(t12);
            });
          }();
          let t11 = tX.createElement(r10.loading, { isLoading: true, pastDelay: true, error: null });
          return tX.createElement(tX.Suspense, { fallback: t11 }, tX.createElement(r10.lazy, e11));
        }
        return rT.push(a2), i2.preload = () => a2(), i2.displayName = "LoadableComponent", i2;
      }
      class rL {
        promise() {
          return this._res.promise;
        }
        retry() {
          this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = { pastDelay: false, timedOut: false };
          let { _res: e10, _opts: t10 } = this;
          e10.loading && ("number" == typeof t10.delay && (0 === t10.delay ? this._state.pastDelay = true : this._delay = setTimeout(() => {
            this._update({ pastDelay: true });
          }, t10.delay)), "number" == typeof t10.timeout && (this._timeout = setTimeout(() => {
            this._update({ timedOut: true });
          }, t10.timeout))), this._res.promise.then(() => {
            this._update({}), this._clearTimeouts();
          }).catch((e11) => {
            this._update({}), this._clearTimeouts();
          }), this._update({});
        }
        _update(e10) {
          this._state = e4({}, this._state, { error: this._res.error, loaded: this._res.loaded, loading: this._res.loading }, e10), this._callbacks.forEach((e11) => e11());
        }
        _clearTimeouts() {
          clearTimeout(this._delay), clearTimeout(this._timeout);
        }
        getCurrentValue() {
          return this._state;
        }
        subscribe(e10) {
          return this._callbacks.add(e10), () => {
            this._callbacks.delete(e10);
          };
        }
        constructor(e10, t10) {
          this._loadFn = e10, this._opts = t10, this._callbacks = /* @__PURE__ */ new Set(), this._delay = null, this._timeout = null, this.retry();
        }
      }
      function rj(e10) {
        return rI(rO, e10);
      }
      function rM(e10, t10) {
        let r10 = [];
        for (; e10.length; ) {
          let n2 = e10.pop();
          r10.push(n2(t10));
        }
        return Promise.all(r10).then(() => {
          if (e10.length)
            return rM(e10, t10);
        });
      }
      rj.preloadAll = () => new Promise((e10, t10) => {
        rM(rT).then(e10, t10);
      }), rj.preloadReady = (e10 = []) => new Promise((t10) => {
        let r10 = () => (r$ = true, t10());
        rM(rA, e10).then(r10, r10);
      });
      let rF = tX.createContext(null);
      function rD(e10) {
        return null != e10;
      }
      let rN = globalThis.setTimeout;
      function rq(e10) {
        return new TextEncoder().encode(e10);
      }
      function rU(e10, t10) {
        return t10 ? t10.decode(e10, { stream: true }) : new TextDecoder().decode(e10);
      }
      function rB(e10) {
        let { readable: t10, writable: r10 } = new TransformStream(), n2 = Promise.resolve();
        for (let a2 = 0; a2 < e10.length; ++a2)
          n2 = n2.then(() => e10[a2].pipeTo(r10, { preventClose: a2 + 1 < e10.length }));
        return t10;
      }
      function rz(e10) {
        let { readable: t10, writable: r10 } = new TransformStream(), n2 = r10.getWriter();
        return e10.forEach((e11) => n2.write(rq(e11))), n2.close(), t10;
      }
      async function rH(e10) {
        let t10 = e10.getReader(), r10 = new TextDecoder(), n2 = "";
        for (; ; ) {
          let { done: a2, value: i2 } = await t10.read();
          if (a2)
            return n2;
          n2 += rU(i2, r10);
        }
      }
      function rW(e10 = (e11) => e11) {
        let t10 = "", r10 = null, n2 = (n3) => (r10 || (r10 = new Promise((a3) => {
          setTimeout(async () => {
            let i2 = await e10(t10);
            n3.enqueue(rq(i2)), t10 = "", r10 = null, a3();
          }, 0);
        })), r10), a2 = new TextDecoder();
        return new TransformStream({ transform(e11, r11) {
          t10 += rU(e11, a2), n2(r11);
        }, flush() {
          if (r10)
            return r10;
        } });
      }
      function rV(e10) {
        return new TransformStream({ async transform(t10, r10) {
          let n2 = rq(await e10());
          r10.enqueue(n2), r10.enqueue(t10);
        } });
      }
      function rG({ ReactDOMServer: e10, element: t10, streamOptions: r10 }) {
        return e10.renderToReadableStream(t10, r10);
      }
      function rY(e10) {
        let t10 = false, r10 = false;
        return new TransformStream({ async transform(n2, a2) {
          if (r10) {
            a2.enqueue(n2);
            return;
          }
          let i2 = await e10();
          if (t10)
            a2.enqueue(rq(i2)), a2.enqueue(n2), r10 = true;
          else {
            let o2 = rU(n2), s2 = o2.indexOf("</head>");
            if (-1 !== s2) {
              let l2 = o2.slice(0, s2) + i2 + o2.slice(s2);
              a2.enqueue(rq(l2)), r10 = true, t10 = true;
            }
          }
          t10 ? rN(() => {
            r10 = false;
          }) : a2.enqueue(n2);
        } });
      }
      function rJ(e10) {
        let t10 = false, r10 = null;
        return new TransformStream({ transform(n2, a2) {
          a2.enqueue(n2), !t10 && e10 && (t10 = true, r10 = new Promise((t11) => {
            setTimeout(() => {
              a2.enqueue(rq(e10)), t11();
            });
          }));
        }, flush(n2) {
          if (r10)
            return r10;
          !t10 && e10 && (t10 = true, n2.enqueue(rq(e10)));
        } });
      }
      function rZ(e10) {
        let t10 = null;
        return new TransformStream({ transform(r10, n2) {
          if (n2.enqueue(r10), !t10) {
            let a2 = e10.getReader();
            t10 = new Promise((e11) => setTimeout(async () => {
              try {
                for (; ; ) {
                  let { done: t11, value: r11 } = await a2.read();
                  if (t11)
                    return e11();
                  n2.enqueue(r11);
                }
              } catch (i2) {
                n2.error(i2);
              }
              e11();
            }, 0));
          }
        }, flush() {
          if (t10)
            return t10;
        } });
      }
      function rX(e10) {
        return new TransformStream({ flush(t10) {
          e10 && t10.enqueue(rq(e10));
        } });
      }
      function rK(e10 = "", t10) {
        let r10 = false, n2 = false;
        return new TransformStream({ async transform(e11, t11) {
          if (!r10 || !n2) {
            let a2 = rU(e11);
            !r10 && a2.includes("<html") && (r10 = true), !n2 && a2.includes("<body") && (n2 = true);
          }
          t11.enqueue(e11);
        }, flush(a2) {
          let i2 = [r10 ? null : "html", n2 ? null : "body"].filter(rD);
          i2.length > 0 && a2.enqueue(rq(`<script>self.__next_root_layout_missing_tags_error=${JSON.stringify({ missingTags: i2, assetPrefix: e10 ?? "", tree: t10() })}<\/script>`));
        } });
      }
      async function rQ(e10, { suffix: t10, dataStream: r10, generateStaticHTML: n2, getServerInsertedHTML: a2, serverInsertedHTMLToHead: i2, validateRootLayout: o2 }) {
        let s2 = "</body></html>", l2 = t10 ? t10.split(s2)[0] : null;
        n2 && await e10.allReady;
        let u2 = [rW(), a2 && !i2 ? rV(a2) : null, null != l2 ? rJ(l2) : null, r10 ? rZ(r10) : null, null != l2 ? rX(s2) : null, rY(async () => {
          let e11 = a2 && i2 ? await a2() : "";
          return e11;
        }), o2 ? rK(o2.assetPrefix, o2.getTree) : null].filter(rD);
        return u2.reduce((e11, t11) => e11.pipeThrough(t11), e10);
      }
      let r0 = { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], path: "/_next/image", loader: "default", loaderFile: "", domains: [], disableStaticImages: false, minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", remotePatterns: [], unoptimized: false }, r1 = tX.createContext(r0);
      var r2 = r(971), r3 = r.n(r2);
      function r4(e10, t10) {
        if (null == e10)
          return {};
        var r10, n2, a2 = {}, i2 = Object.keys(e10);
        for (n2 = 0; n2 < i2.length; n2++)
          r10 = i2[n2], t10.indexOf(r10) >= 0 || (a2[r10] = e10[r10]);
        return a2;
      }
      let r8 = (0, tX.createContext)(null), r5 = (0, tX.createContext)(null);
      function r9(e10) {
        return { back() {
          e10.back();
        }, forward() {
          e10.forward();
        }, refresh() {
          e10.reload();
        }, push(t10) {
          e10.push(t10);
        }, replace(t10) {
          e10.replace(t10);
        }, prefetch(t10) {
          e10.prefetch(t10);
        } };
      }
      function r6(e10) {
        let t10 = new URLSearchParams();
        for (let [r10, n2] of Object.entries(e10))
          if (Array.isArray(n2))
            for (let a2 of n2)
              t10.append(r10, a2);
          else
            void 0 !== n2 && t10.append(r10, n2);
        return t10;
      }
      function r7(e10) {
        return e10.isReady && e10.query ? r6(e10.query) : new URLSearchParams();
      }
      function ne(e10) {
        var { children: t10, router: r10 } = e10, n2 = r4(e10, ["children", "router"]);
        let a2 = (0, tX.useRef)(n2.isAutoExport), i2 = (0, tX.useMemo)(() => {
          let e11;
          let t11 = a2.current;
          if (t11 && (a2.current = false), eW(r10.pathname) && (r10.isFallback || t11 && !r10.isReady))
            return null;
          try {
            e11 = new URL(r10.asPath, "http://f");
          } catch (n3) {
            return "/";
          }
          return e11.pathname;
        }, [r10.asPath, r10.isFallback, r10.isReady, r10.pathname]);
        return tX.createElement(r5.Provider, { value: i2 }, t10);
      }
      !function(e10) {
        e10.LAZY_INITIALIZED = "LAZYINITIALIZED", e10.DATA_FETCH = "DATAFETCH", e10.READY = "READY";
      }(o || (o = {}));
      let nt = tX.createContext(null), nr = "<!DOCTYPE html>";
      function nn() {
        throw Error('No router instance found. you should only use "next/router" inside the client side of your app. https://nextjs.org/docs/messages/no-router-instance');
      }
      async function na(e10) {
        let t10 = await rd.renderToReadableStream(e10);
        return await t10.allReady, rH(t10);
      }
      a = console.warn.bind(console), i = async (e10, t10) => t10;
      class ni {
        constructor(e10, t10, r10, { isFallback: n2 }, a2, i2, o2, s2, l2, u2, c2, d2) {
          this.route = e10.replace(/\/$/, "") || "/", this.pathname = e10, this.query = t10, this.asPath = r10, this.isFallback = n2, this.basePath = i2, this.locale = o2, this.locales = s2, this.defaultLocale = l2, this.isReady = a2, this.domainLocales = u2, this.isPreview = !!c2, this.isLocaleDomain = !!d2;
        }
        push() {
          nn();
        }
        replace() {
          nn();
        }
        reload() {
          nn();
        }
        back() {
          nn();
        }
        forward() {
          nn();
        }
        prefetch() {
          nn();
        }
        beforePopState() {
          nn();
        }
      }
      function no(e10, t10, r10) {
        return tX.createElement(e10, Object.assign({ Component: t10 }, r10));
      }
      let ns = (e10, t10) => {
        let r10 = `invalid-${e10.toLocaleLowerCase()}-value`;
        return `Additional keys were returned from \`${e10}\`. Properties intended for your component must be nested under the \`props\` key, e.g.:

	return { props: { title: 'My Title', content: '...' } }

Keys that need to be moved: ${t10.join(", ")}.
Read more: https://nextjs.org/docs/messages/${r10}`;
      };
      function nl(e10, t10, r10) {
        let { destination: n2, permanent: a2, statusCode: i2, basePath: o2 } = e10, s2 = [], l2 = void 0 !== i2, u2 = void 0 !== a2;
        u2 && l2 ? s2.push("`permanent` and `statusCode` can not both be provided") : u2 && "boolean" != typeof a2 ? s2.push("`permanent` must be `true` or `false`") : l2 && !eN.has(i2) && s2.push(`\`statusCode\` must undefined or one of ${[...eN].join(", ")}`);
        let c2 = typeof n2;
        "string" !== c2 && s2.push(`\`destination\` should be string but received ${c2}`);
        let d2 = typeof o2;
        if ("undefined" !== d2 && "boolean" !== d2 && s2.push(`\`basePath\` should be undefined or a false, received ${d2}`), s2.length > 0)
          throw Error(`Invalid redirect object returned from ${r10} for ${t10.url}
` + s2.join(" and ") + "\nSee more info here: https://nextjs.org/docs/messages/invalid-redirect-gssp");
      }
      function nu(e10) {
        return { name: e10.name, source: "server", message: r3()(e10.message), stack: e10.stack };
      }
      function nc(e10, t10) {
        return e10 ? nu(t10) : { name: "Internal Server Error.", message: "500 - Internal Server Error.", statusCode: 500 };
      }
      async function nd(e10, t10, n2, o2, s2) {
        let l2, u2, c2;
        s2.devOnlyCacheBusterQueryString = s2.dev ? s2.devOnlyCacheBusterQueryString || `?ts=${Date.now()}` : "", o2 = Object.assign({}, o2);
        let { err: d2, dev: h2 = false, ampPath: p2 = "", pageConfig: f2 = {}, buildManifest: m2, reactLoadableManifest: g2, ErrorDebug: y2, getStaticProps: v2, getStaticPaths: b2, getServerSideProps: x2, isDataReq: w2, params: S2, previewProps: _2, basePath: C2, devOnlyCacheBusterQueryString: E2, supportsDynamicHTML: R2, images: P2, runtime: k2, App: T2 } = s2, A2 = s2.Document, $2 = s2.Component, O2 = !!o2.__nextFallback, I2 = o2.__nextNotFoundSrcPage;
        ea(o2);
        let L2 = !!v2, j2 = L2 && s2.nextExport, M2 = T2.getInitialProps === T2.origGetInitialProps, F2 = !!(null == $2 ? void 0 : $2.getInitialProps), D2 = null == $2 ? void 0 : $2.unstable_scriptLoader, N2 = eW(n2), q2 = "/_error" === n2 && $2.getInitialProps === $2.origGetInitialProps;
        s2.nextExport && F2 && !q2 && a(`Detected getInitialProps on page '${n2}' while running "next export". It's recommended to use getStaticProps which has a more correct behavior for static exporting.
Read more: https://nextjs.org/docs/messages/get-initial-props-export`);
        let U2 = !F2 && M2 && !L2 && !x2;
        if (F2 && L2)
          throw Error(`You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps ${n2}`);
        if (F2 && x2)
          throw Error(`You can not use getInitialProps with getServerSideProps. Please remove getInitialProps. ${n2}`);
        if (x2 && L2)
          throw Error(`You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps ${n2}`);
        if (b2 && !N2)
          throw Error(`getStaticPaths is only allowed for dynamic SSG pages and was found on '${n2}'.
Read more: https://nextjs.org/docs/messages/non-dynamic-getstaticpaths-usage`);
        if (b2 && !L2)
          throw Error(`getStaticPaths was added without a getStaticProps in ${n2}. Without getStaticProps, getStaticPaths does nothing`);
        if (L2 && N2 && !b2)
          throw Error(`getStaticPaths is required for dynamic SSG pages and is missing for '${n2}'.
Read more: https://nextjs.org/docs/messages/invalid-getstaticpaths-value`);
        let B2 = s2.resolvedAsPath || e10.url;
        if (h2) {
          let { isValidElementType: z2 } = r(Object(function() {
            var e11 = Error("Cannot find module 'next/dist/compiled/react-is'");
            throw e11.code = "MODULE_NOT_FOUND", e11;
          }()));
          if (!z2($2))
            throw Error(`The default export is not a React Component in page: "${n2}"`);
          if (!z2(T2))
            throw Error('The default export is not a React Component in page: "/_app"');
          if (!z2(A2))
            throw Error('The default export is not a React Component in page: "/_document"');
          if ((U2 || O2) && (o2 = { ...o2.amp ? { amp: o2.amp } : {} }, B2 = `${n2}${e10.url.endsWith("/") && "/" !== n2 && !N2 ? "/" : ""}`, e10.url = n2), "/404" === n2 && (F2 || x2))
            throw Error(`\`pages/404\` ${eU}`);
          if (eD.includes(n2) && (F2 || x2))
            throw Error(`\`pages${n2}\` ${eU}`);
        }
        for (let H2 of ["getStaticProps", "getServerSideProps", "getStaticPaths"])
          if (null == $2 ? void 0 : $2[H2])
            throw Error(`page ${n2} ${H2} can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`);
        await rj.preloadAll();
        let W2 = new ni(n2, o2, B2, { isFallback: O2 }, !!(x2 || F2 || !M2 && !L2), C2, s2.locale, s2.locales, s2.defaultLocale, s2.domainLocales, l2, eK(e10, "__nextIsLocaleDomain")), V2 = r9(W2), G2 = {}, Y2 = (0, rh.createStyleRegistry)(), J2 = { ampFirst: true === f2.amp, hasQuery: Boolean(o2.amp), hybrid: "hybrid" === f2.amp }, Z2 = rS(false), X2 = [], K2 = {};
        D2 && (K2.beforeInteractive = [].concat(D2()).filter((e11) => "beforeInteractive" === e11.props.strategy).map((e11) => e11.props));
        let Q2 = ({ children: e11 }) => tX.createElement(nt.Provider, { value: V2 }, tX.createElement(r8.Provider, { value: r7(W2) }, tX.createElement(ne, { router: W2, isAutoExport: U2 }, tX.createElement(rF.Provider, { value: W2 }, tX.createElement(rg.Provider, { value: J2 }, tX.createElement(rx.Provider, { value: { updateHead: (e12) => {
          Z2 = e12;
        }, updateScripts: (e12) => {
          G2 = e12;
        }, scripts: K2, mountedInstances: /* @__PURE__ */ new Set() } }, tX.createElement(rk.Provider, { value: (e12) => X2.push(e12) }, tX.createElement(rh.StyleRegistry, { registry: Y2 }, tX.createElement(r1.Provider, { value: P2 }, e11))))))))), ee2 = () => null, et2 = ({ children: e11 }) => tX.createElement(tX.Fragment, null, tX.createElement(ee2, null), tX.createElement(Q2, null, tX.createElement(tX.Fragment, null, h2 ? tX.createElement(tX.Fragment, null, e11, tX.createElement(ee2, null)) : e11, tX.createElement(ee2, null)))), er2 = { err: d2, req: U2 ? void 0 : e10, res: U2 ? void 0 : t10, pathname: n2, query: o2, asPath: B2, locale: s2.locale, locales: s2.locales, defaultLocale: s2.defaultLocale, AppTree: (e11) => tX.createElement(et2, null, no(T2, $2, { ...e11, router: W2 })), defaultGetInitialProps: async (e11, t11 = {}) => {
          let r10 = (e12) => (t12) => tX.createElement(e12, Object.assign({}, t12)), { html: n3, head: a2 } = await e11.renderPage({ enhanceApp: r10 }), i2 = Y2.styles({ nonce: t11.nonce });
          return Y2.flush(), { html: n3, head: a2, styles: i2 };
        } }, en2 = !L2 && (s2.nextExport || h2 && (U2 || O2)), ei2 = () => {
          let e11 = Y2.styles();
          return Y2.flush(), tX.createElement(tX.Fragment, null, e11);
        };
        if (c2 = await eR(T2, { AppTree: er2.AppTree, Component: $2, router: W2, ctx: er2 }), (L2 || x2) && l2 && (c2.__N_PREVIEW = true), L2 && (c2.__N_SSG = true), L2 && !O2) {
          let eo2;
          try {
            eo2 = await v2({ ...N2 ? { params: o2 } : void 0, ...l2 ? { preview: true, previewData: u2 } : void 0, locales: s2.locales, locale: s2.locale, defaultLocale: s2.defaultLocale });
          } catch (es2) {
            throw es2 && "ENOENT" === es2.code && delete es2.code, es2;
          }
          if (null == eo2)
            throw Error("Your `getStaticProps` function did not return an object. Did you forget to add a `return`?");
          let el2 = Object.keys(eo2).filter((e11) => "revalidate" !== e11 && "props" !== e11 && "redirect" !== e11 && "notFound" !== e11);
          if (el2.includes("unstable_revalidate"))
            throw Error("The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.");
          if (el2.length)
            throw Error(ns("getStaticProps", el2));
          if ("notFound" in eo2 && eo2.notFound) {
            if ("/404" === n2)
              throw Error('The /404 page can not return notFound in "getStaticProps", please remove it to continue!');
            s2.isNotFound = true;
          }
          if ("redirect" in eo2 && eo2.redirect && "object" == typeof eo2.redirect) {
            if (nl(eo2.redirect, e10, "getStaticProps"), j2)
              throw Error(`\`redirect\` can not be returned from getStaticProps during prerendering (${e10.url})
See more info here: https://nextjs.org/docs/messages/gsp-redirect-during-prerender`);
            eo2.props = { __N_REDIRECT: eo2.redirect.destination, __N_REDIRECT_STATUS: eq(eo2.redirect) }, void 0 !== eo2.redirect.basePath && (eo2.props.__N_REDIRECT_BASE_PATH = eo2.redirect.basePath), s2.isRedirect = true;
          }
          if ((h2 || j2) && !s2.isNotFound && !rm(n2, "getStaticProps", eo2.props))
            throw Error("invariant: getStaticProps did not return valid props. Please report this.");
          if ("revalidate" in eo2) {
            if ("number" == typeof eo2.revalidate) {
              if (Number.isInteger(eo2.revalidate)) {
                if (eo2.revalidate <= 0)
                  throw Error(`A page's revalidate option can not be less than or equal to zero for ${e10.url}. A revalidate option of zero means to revalidate after _every_ request, and implies stale data cannot be tolerated.

To never revalidate, you can set revalidate to \`false\` (only ran once at build-time).
To revalidate as soon as possible, you can set the value to \`1\`.`);
                eo2.revalidate > 31536e3 && console.warn(`Warning: A page's revalidate option was set to more than a year for ${e10.url}. This may have been done in error.
To only run getStaticProps at build-time and not revalidate at runtime, you can set \`revalidate\` to \`false\`!`);
              } else
                throw Error(`A page's revalidate option must be seconds expressed as a natural number for ${e10.url}. Mixed numbers, such as '${eo2.revalidate}', cannot be used.
Try changing the value to '${Math.ceil(eo2.revalidate)}' or using \`Math.ceil()\` if you're computing the value.`);
            } else if (true === eo2.revalidate)
              eo2.revalidate = 1;
            else if (false === eo2.revalidate || void 0 === eo2.revalidate)
              eo2.revalidate = false;
            else
              throw Error(`A page's revalidate option must be seconds expressed as a natural number. Mixed numbers and strings cannot be used. Received '${JSON.stringify(eo2.revalidate)}' for ${e10.url}`);
          } else
            eo2.revalidate = false;
          if (c2.pageProps = Object.assign({}, c2.pageProps, "props" in eo2 ? eo2.props : void 0), s2.revalidate = "revalidate" in eo2 ? eo2.revalidate : void 0, s2.pageData = c2, s2.isNotFound)
            return null;
        }
        if (x2 && (c2.__N_SSP = true), x2 && !O2) {
          let eu2;
          let ec2 = false;
          try {
            eu2 = await x2({ req: e10, res: t10, query: o2, resolvedUrl: s2.resolvedUrl, ...N2 ? { params: S2 } : void 0, ...false !== u2 ? { preview: true, previewData: u2 } : void 0, locales: s2.locales, locale: s2.locale, defaultLocale: s2.defaultLocale });
          } catch (ed2) {
            throw tM(ed2) && "ENOENT" === ed2.code && delete ed2.code, ed2;
          }
          if (null == eu2)
            throw Error("Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?");
          eu2.props instanceof Promise && (ec2 = true);
          let eh2 = Object.keys(eu2).filter((e11) => "props" !== e11 && "redirect" !== e11 && "notFound" !== e11);
          if (eu2.unstable_notFound)
            throw Error(`unstable_notFound has been renamed to notFound, please update the field to continue. Page: ${n2}`);
          if (eu2.unstable_redirect)
            throw Error(`unstable_redirect has been renamed to redirect, please update the field to continue. Page: ${n2}`);
          if (eh2.length)
            throw Error(ns("getServerSideProps", eh2));
          if ("notFound" in eu2 && eu2.notFound) {
            if ("/404" === n2)
              throw Error('The /404 page can not return notFound in "getStaticProps", please remove it to continue!');
            return s2.isNotFound = true, null;
          }
          if ("redirect" in eu2 && "object" == typeof eu2.redirect && (nl(eu2.redirect, e10, "getServerSideProps"), eu2.props = { __N_REDIRECT: eu2.redirect.destination, __N_REDIRECT_STATUS: eq(eu2.redirect) }, void 0 !== eu2.redirect.basePath && (eu2.props.__N_REDIRECT_BASE_PATH = eu2.redirect.basePath), s2.isRedirect = true), ec2 && (eu2.props = await eu2.props), (h2 || j2) && !rm(n2, "getServerSideProps", eu2.props))
            throw Error("invariant: getServerSideProps did not return valid props. Please report this.");
          c2.pageProps = Object.assign({}, c2.pageProps, eu2.props), s2.pageData = c2;
        }
        if (w2 && !L2 || s2.isRedirect)
          return tp.fromStatic(JSON.stringify(c2));
        if (O2 && (c2.pageProps = {}), eC(t10) && !L2)
          return null;
        let ep2 = m2;
        if (U2 && N2) {
          let ef2 = tm(tQ(n2));
          ef2 in ep2.pages && (ep2 = { ...ep2, pages: { ...ep2.pages, [ef2]: [...ep2.pages[ef2], ...ep2.lowPriorityFiles.filter((e11) => e11.includes("_buildManifest"))] }, lowPriorityFiles: ep2.lowPriorityFiles.filter((e11) => !e11.includes("_buildManifest")) });
        }
        let em2 = ({ children: e11 }) => tX.createElement("div", { id: "__next" }, e11), eg2 = true !== R2, ey2 = async () => {
          let e11, t11, r10;
          let n3 = A2[eM];
          if (A2.getInitialProps && !n3)
            throw Error("`getInitialProps` in Document component is not supported with the Edge Runtime.");
          if (A2.getInitialProps) {
            if (n3)
              A2 = n3;
            else
              throw Error("`getInitialProps` in Document component is not supported with React Server Components.");
          }
          let a2 = (e12, t12) => er2.err && y2 ? tX.createElement(em2, null, tX.createElement(y2, { error: er2.err })) : tX.createElement(em2, null, tX.createElement(et2, null, no(e12 || T2, t12 || $2, { ...c2, router: W2 }))), i2 = async (e12, t12) => {
            let r11 = a2(e12, t12);
            return await rG({ ReactDOMServer: rd, element: r11, streamOptions: { onError(e13) {
              if ((null == e13 ? void 0 : e13.digest) === "DYNAMIC_SERVER_USAGE")
                return e13.digest;
            } } });
          }, o3 = (e12, t12) => {
            let r11 = async () => na(ei2());
            return rQ(e12, { suffix: t12, dataStream: void 0, generateStaticHTML: eg2, getServerInsertedHTML: r11, serverInsertedHTMLToHead: false });
          };
          {
            let s3 = await i2(T2, $2);
            e11 = (e12) => o3(s3, e12), t11 = {};
          }
          let { docProps: l3 } = t11 || {}, u3 = (e12) => A2();
          return r10 = Y2.styles(), Y2.flush(), { bodyResult: e11, documentElement: u3, head: Z2, headTags: [], styles: r10 };
        }, ev2 = await ey2();
        if (!ev2)
          return null;
        let eb2 = /* @__PURE__ */ new Set(), ex2 = /* @__PURE__ */ new Set();
        for (let ew2 of X2) {
          let eS2 = g2[ew2];
          eS2 && (eb2.add(eS2.id), eS2.files.forEach((e11) => {
            ex2.add(e11);
          }));
        }
        let e_2 = J2.hybrid, { assetPrefix: eE2, buildId: eP2, customServer: ek2, defaultLocale: eT2, disableOptimizedLoading: eA2, domainLocales: e$2, locale: eO2, locales: eI2, runtimeConfig: eL2 } = s2, ej2 = { __NEXT_DATA__: { props: c2, page: n2, query: o2, buildId: eP2, assetPrefix: "" === eE2 ? void 0 : eE2, runtimeConfig: eL2, nextExport: true === en2 || void 0, autoExport: true === U2 || void 0, isFallback: O2, dynamicIds: 0 === eb2.size ? void 0 : Array.from(eb2), err: s2.err ? nc(h2, s2.err) : void 0, gsp: !!v2 || void 0, gssp: !!x2 || void 0, customServer: ek2, gip: !!F2 || void 0, appGip: !M2 || void 0, locale: eO2, locales: eI2, defaultLocale: eT2, domainLocales: e$2, isPreview: true === l2 || void 0, notFoundSrcPage: I2 && h2 ? I2 : void 0 }, buildManifest: ep2, docComponentsRendered: {}, dangerousAsPath: W2.asPath, canonicalBase: !s2.ampPath && eK(e10, "__nextStrippedLocale") ? `${s2.canonicalBase || ""}/${s2.locale}` : s2.canonicalBase, ampPath: p2, inAmpMode: false, isDevelopment: !!h2, hybridAmp: e_2, dynamicImports: Array.from(ex2), assetPrefix: eE2, unstable_runtimeJS: f2.unstable_runtimeJS, unstable_JsPreload: f2.unstable_JsPreload, devOnlyCacheBusterQueryString: E2, scriptLoader: G2, locale: eO2, disableOptimizedLoading: eA2, head: ev2.head, headTags: ev2.headTags, styles: ev2.styles, crossOrigin: s2.crossOrigin, optimizeCss: s2.optimizeCss, optimizeFonts: s2.optimizeFonts, nextScriptWorkers: s2.nextScriptWorkers, runtime: k2, largePageDataBytes: s2.largePageDataBytes, fontLoaderManifest: s2.fontLoaderManifest }, eF2 = tX.createElement(rg.Provider, { value: J2 }, tX.createElement(t4.Provider, { value: ej2 }, ev2.documentElement(ej2))), eN2 = await na(eF2), [eB2, ez2] = eN2.split("<next-js-internal-body-render-target></next-js-internal-body-render-target>"), eH2 = [];
        eN2.startsWith(nr) || eH2.push(nr), eH2.push(eB2);
        let eV2 = [rz(eH2), await ev2.bodyResult(ez2)], eG2 = (e11) => i(n2, e11, s2, { inAmpMode: false, hybridAmp: e_2 });
        if (eg2) {
          let eY2 = await rH(rB(eV2)), eJ2 = await eG2(eY2);
          return new tp(eJ2);
        }
        return new tp(rB(eV2).pipeThrough(rW(eG2)));
      }
      var nh = r(893);
      function np(e10) {
        let { result: t10 } = e10;
        return (0, nh.jsx)("div", { style: { marginLeft: 50, marginTop: 50 }, children: t10 });
      }
      async function nf(e10) {
        return { props: { result: "Funcionando" } };
      }
      var nm = r(764);
      let ng = "experimental-edge";
      function ny({ Component: e10, pageProps: t10 }) {
        return (0, nh.jsx)(e10, { ...t10 });
      }
      let nv = { 400: "Bad Request", 404: "This page could not be found", 405: "Method Not Allowed", 500: "Internal Server Error" };
      function nb({ res: e10, err: t10 }) {
        let r10 = e10 && e10.statusCode ? e10.statusCode : t10 ? t10.statusCode : 404;
        return { statusCode: r10 };
      }
      let nx = { error: { fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif', height: "100vh", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, desc: { display: "inline-block", textAlign: "left", lineHeight: "49px", height: "49px", verticalAlign: "middle" }, h1: { display: "inline-block", margin: 0, marginRight: "20px", padding: "0 23px 0 0", fontSize: "24px", fontWeight: 500, verticalAlign: "top", lineHeight: "49px" }, h2: { fontSize: "14px", fontWeight: "normal", lineHeight: "49px", margin: 0, padding: 0 } };
      class nw extends (s = tX.Component) {
        render() {
          let { statusCode: e10, withDarkMode: t10 = true } = this.props, r10 = this.props.title || nv[e10] || "An unexpected error has occurred";
          return tX.createElement("div", { style: nx.error }, tX.createElement(rP, null, tX.createElement("title", null, e10 ? `${e10}: ${r10}` : "Application error: a client-side exception has occurred")), tX.createElement("div", null, tX.createElement("style", { dangerouslySetInnerHTML: { __html: `
                body { margin: 0; color: #000; background: #fff; }
                .next-error-h1 {
                  border-right: 1px solid rgba(0, 0, 0, .3);
                }

                ${t10 ? `@media (prefers-color-scheme: dark) {
                  body { color: #fff; background: #000; }
                  .next-error-h1 {
                    border-right: 1px solid rgba(255, 255, 255, .3);
                  }
                }` : ""}` } }), e10 ? tX.createElement("h1", { className: "next-error-h1", style: nx.h1 }, e10) : null, tX.createElement("div", { style: nx.desc }, tX.createElement("h2", { style: nx.h2 }, this.props.title || e10 ? r10 : tX.createElement(tX.Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))));
        }
      }
      nw.displayName = "ErrorPage", nw.getInitialProps = nb, nw.origGetInitialProps = nb, ev();
      let nS = self.__BUILD_MANIFEST, n_ = self.__REACT_LOADABLE_MANIFEST;
      self.__RSC_MANIFEST, self.__RSC_CSS_MANIFEST;
      let nC = self.__SUBRESOURCE_INTEGRITY_MANIFEST, nE = self.__FONT_LOADER_MANIFEST, nR = tZ({ pageType: "pages", dev: false, page: "/", appMod: u, pageMod: l, errorMod: c, error500Mod: null, Document: ru, buildManifest: nS, appRenderToHTML: null, pagesRenderToHTML: nd, reactLoadableManifest: n_, serverComponentManifest: null, serverCSSManifest: null, subresourceIntegrityManifest: nC, config: { env: {}, webpack: null, webpackDevMiddleware: null, eslint: { ignoreDuringBuilds: false }, typescript: { ignoreBuildErrors: false, tsconfigPath: "tsconfig.json" }, distDir: ".next", cleanDistDir: true, assetPrefix: "", configOrigin: "next.config.js", useFileSystemPublicRoutes: true, generateEtags: true, pageExtensions: ["tsx", "ts", "jsx", "js"], target: "server", poweredByHeader: true, compress: true, analyticsId: "", images: { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], path: "/_next/image", loader: "default", loaderFile: "", domains: [], disableStaticImages: false, minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", remotePatterns: [], unoptimized: false }, devIndicators: { buildActivity: true, buildActivityPosition: "bottom-right" }, onDemandEntries: { maxInactiveAge: 15e3, pagesBufferLength: 2 }, amp: { canonicalBase: "" }, basePath: "", sassOptions: {}, trailingSlash: false, i18n: null, productionBrowserSourceMaps: false, optimizeFonts: true, excludeDefaultMomentLocales: true, serverRuntimeConfig: {}, publicRuntimeConfig: {}, reactStrictMode: true, httpAgentOptions: { keepAlive: true }, outputFileTracing: true, staticPageGenerationTimeout: 60, swcMinify: true, experimental: { fetchCache: false, middlewarePrefetch: "flexible", optimisticClientCache: true, runtime: "experimental-edge", manualClientBasePath: false, legacyBrowsers: false, newNextLinkBehavior: true, cpus: 5, sharedPool: true, profiling: false, isrFlushToDisk: true, workerThreads: false, pageEnv: false, optimizeCss: false, nextScriptWorkers: false, scrollRestoration: false, externalDir: false, disableOptimizedLoading: false, gzipSize: true, swcFileReading: true, craCompat: false, esmExternals: true, appDir: false, isrMemoryCacheSize: 52428800, fullySpecified: false, outputFileTracingRoot: "/Users/infoshop/Documents/Nextjs/hotsite", swcTraceProfiling: false, forceSwcTransforms: false, largePageDataBytes: 128e3, enableUndici: false, adjustFontFallbacks: false, adjustFontFallbacksWithSizeAdjust: false, fontLoaders: [{ loader: "@next/font/google" }, { loader: "@next/font/local" }] }, configFile: "/Users/infoshop/Documents/Nextjs/hotsite/next.config.js", configFileName: "next.config.js" }, buildId: "99ki0IZzCAeGTnrcDp0no", fontLoaderManifest: nE }), nP = l;
      function nk(e10) {
        return em({ ...e10, handler: nR });
      }
    }, 971: (e) => {
      "use strict";
      var t = "/";
      (() => {
        var r = { 511: (e2) => {
          e2.exports = ({ onlyFirst: e3 = false } = {}) => RegExp("[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))", e3 ? void 0 : "g");
        }, 532: (e2, t2, r2) => {
          let n2 = r2(511);
          e2.exports = (e3) => "string" == typeof e3 ? e3.replace(n2(), "") : e3;
        } }, n = {};
        function a(e2) {
          var t2 = n[e2];
          if (void 0 !== t2)
            return t2.exports;
          var i2 = n[e2] = { exports: {} }, o = true;
          try {
            r[e2](i2, i2.exports, a), o = false;
          } finally {
            o && delete n[e2];
          }
          return i2.exports;
        }
        a.ab = t + "/";
        var i = a(532);
        e.exports = i;
      })();
    }, 628: (e, t, r) => {
      r(350);
      var n, a = r(294), i = function(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }(a);
      function o(e2, t2) {
        for (var r2 = 0; r2 < t2.length; r2++) {
          var n2 = t2[r2];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, n2.key, n2);
        }
      }
      function s(e2, t2, r2) {
        return t2 && o(e2.prototype, t2), r2 && o(e2, r2), e2;
      }
      var l = "undefined" != typeof process && process.env && true, u = function(e2) {
        return "[object String]" === Object.prototype.toString.call(e2);
      }, c = function() {
        function e2(e3) {
          var t3 = void 0 === e3 ? {} : e3, r2 = t3.name, n2 = void 0 === r2 ? "stylesheet" : r2, a2 = t3.optimizeForSpeed, i2 = void 0 === a2 ? l : a2;
          d(u(n2), "`name` must be a string"), this._name = n2, this._deletedRulePlaceholder = "#" + n2 + "-deleted-rule____{}", d("boolean" == typeof i2, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = i2, this._serverSheet = void 0, this._tags = [], this._injected = false, this._rulesCount = 0, this._nonce = null;
        }
        var t2 = e2.prototype;
        return t2.setOptimizeForSpeed = function(e3) {
          d("boolean" == typeof e3, "`setOptimizeForSpeed` accepts a boolean"), d(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e3, this.inject();
        }, t2.isOptimizeForSpeed = function() {
          return this._optimizeForSpeed;
        }, t2.inject = function() {
          var e3 = this;
          d(!this._injected, "sheet already injected"), this._injected = true, this._serverSheet = { cssRules: [], insertRule: function(t3, r2) {
            return "number" == typeof r2 ? e3._serverSheet.cssRules[r2] = { cssText: t3 } : e3._serverSheet.cssRules.push({ cssText: t3 }), r2;
          }, deleteRule: function(t3) {
            e3._serverSheet.cssRules[t3] = null;
          } };
        }, t2.getSheetForTag = function(e3) {
          if (e3.sheet)
            return e3.sheet;
          for (var t3 = 0; t3 < document.styleSheets.length; t3++)
            if (document.styleSheets[t3].ownerNode === e3)
              return document.styleSheets[t3];
        }, t2.getSheet = function() {
          return this.getSheetForTag(this._tags[this._tags.length - 1]);
        }, t2.insertRule = function(e3, t3) {
          return d(u(e3), "`insertRule` accepts only strings"), "number" != typeof t3 && (t3 = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e3, t3), this._rulesCount++;
        }, t2.replaceRule = function(e3, t3) {
          this._optimizeForSpeed;
          var r2 = this._serverSheet;
          if (t3.trim() || (t3 = this._deletedRulePlaceholder), !r2.cssRules[e3])
            return e3;
          r2.deleteRule(e3);
          try {
            r2.insertRule(t3, e3);
          } catch (n2) {
            l || console.warn("StyleSheet: illegal rule: \n\n" + t3 + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), r2.insertRule(this._deletedRulePlaceholder, e3);
          }
          return e3;
        }, t2.deleteRule = function(e3) {
          this._serverSheet.deleteRule(e3);
        }, t2.flush = function() {
          this._injected = false, this._rulesCount = 0, this._serverSheet.cssRules = [];
        }, t2.cssRules = function() {
          return this._serverSheet.cssRules;
        }, t2.makeStyleTag = function(e3, t3, r2) {
          t3 && d(u(t3), "makeStyleTag accepts only strings as second parameter");
          var n2 = document.createElement("style");
          this._nonce && n2.setAttribute("nonce", this._nonce), n2.type = "text/css", n2.setAttribute("data-" + e3, ""), t3 && n2.appendChild(document.createTextNode(t3));
          var a2 = document.head || document.getElementsByTagName("head")[0];
          return r2 ? a2.insertBefore(n2, r2) : a2.appendChild(n2), n2;
        }, s(e2, [{ key: "length", get: function() {
          return this._rulesCount;
        } }]), e2;
      }();
      function d(e2, t2) {
        if (!e2)
          throw Error("StyleSheet: " + t2 + ".");
      }
      var h = function(e2) {
        for (var t2 = 5381, r2 = e2.length; r2; )
          t2 = 33 * t2 ^ e2.charCodeAt(--r2);
        return t2 >>> 0;
      }, p = function(e2) {
        return e2.replace(/\/style/gi, "\\/style");
      }, f = {};
      function m(e2, t2) {
        if (!t2)
          return "jsx-" + e2;
        var r2 = String(t2), n2 = e2 + r2;
        return f[n2] || (f[n2] = "jsx-" + h(e2 + "-" + r2)), f[n2];
      }
      function g(e2, t2) {
        var r2 = e2 + (t2 = p(t2));
        return f[r2] || (f[r2] = t2.replace(/__jsx-style-dynamic-selector/g, e2)), f[r2];
      }
      function y(e2, t2) {
        return void 0 === t2 && (t2 = {}), e2.map(function(e3) {
          var r2 = e3[0], n2 = e3[1];
          return i.default.createElement("style", { id: "__" + r2, key: "__" + r2, nonce: t2.nonce ? t2.nonce : void 0, dangerouslySetInnerHTML: { __html: n2 } });
        });
      }
      var v = function() {
        function e2(e3) {
          var t3 = void 0 === e3 ? {} : e3, r2 = t3.styleSheet, n2 = void 0 === r2 ? null : r2, a2 = t3.optimizeForSpeed, i2 = void 0 !== a2 && a2;
          this._sheet = n2 || new c({ name: "styled-jsx", optimizeForSpeed: i2 }), this._sheet.inject(), n2 && "boolean" == typeof i2 && (this._sheet.setOptimizeForSpeed(i2), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
        }
        var t2 = e2.prototype;
        return t2.add = function(e3) {
          var t3 = this;
          void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e3.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed());
          var r2 = this.getIdAndRules(e3), n2 = r2.styleId, a2 = r2.rules;
          if (n2 in this._instancesCounts) {
            this._instancesCounts[n2] += 1;
            return;
          }
          var i2 = a2.map(function(e4) {
            return t3._sheet.insertRule(e4);
          }).filter(function(e4) {
            return -1 !== e4;
          });
          this._indices[n2] = i2, this._instancesCounts[n2] = 1;
        }, t2.remove = function(e3) {
          var t3 = this, r2 = this.getIdAndRules(e3).styleId;
          if (b(r2 in this._instancesCounts, "styleId: `" + r2 + "` not found"), this._instancesCounts[r2] -= 1, this._instancesCounts[r2] < 1) {
            var n2 = this._fromServer && this._fromServer[r2];
            n2 ? (n2.parentNode.removeChild(n2), delete this._fromServer[r2]) : (this._indices[r2].forEach(function(e4) {
              return t3._sheet.deleteRule(e4);
            }), delete this._indices[r2]), delete this._instancesCounts[r2];
          }
        }, t2.update = function(e3, t3) {
          this.add(t3), this.remove(e3);
        }, t2.flush = function() {
          this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
        }, t2.cssRules = function() {
          var e3 = this, t3 = this._fromServer ? Object.keys(this._fromServer).map(function(t4) {
            return [t4, e3._fromServer[t4]];
          }) : [], r2 = this._sheet.cssRules();
          return t3.concat(Object.keys(this._indices).map(function(t4) {
            return [t4, e3._indices[t4].map(function(e4) {
              return r2[e4].cssText;
            }).join(e3._optimizeForSpeed ? "" : "\n")];
          }).filter(function(e4) {
            return Boolean(e4[1]);
          }));
        }, t2.styles = function(e3) {
          return y(this.cssRules(), e3);
        }, t2.getIdAndRules = function(e3) {
          var t3 = e3.children, r2 = e3.dynamic, n2 = e3.id;
          if (r2) {
            var a2 = m(n2, r2);
            return { styleId: a2, rules: Array.isArray(t3) ? t3.map(function(e4) {
              return g(a2, e4);
            }) : [g(a2, t3)] };
          }
          return { styleId: m(n2), rules: Array.isArray(t3) ? t3 : [t3] };
        }, t2.selectFromServer = function() {
          return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e3, t3) {
            return e3[t3.id.slice(2)] = t3, e3;
          }, {});
        }, e2;
      }();
      function b(e2, t2) {
        if (!e2)
          throw Error("StyleSheetRegistry: " + t2 + ".");
      }
      var x = a.createContext(null);
      function w() {
        return new v();
      }
      function S(e2) {
        var t2 = e2.registry, r2 = e2.children, n2 = a.useContext(x), o2 = a.useState(function() {
          return n2 || t2 || w();
        })[0];
        return i.default.createElement(x.Provider, { value: o2 }, r2);
      }
      x.displayName = "StyleSheetContext";
      var _ = i.default.useInsertionEffect || i.default.useLayoutEffect, C = void 0;
      t.StyleRegistry = S, t.createStyleRegistry = w;
    }, 973: (e, t, r) => {
      "use strict";
      e.exports = r(628);
    }, 738: (e) => {
      var t = "/";
      (() => {
        "use strict";
        "undefined" != typeof __nccwpck_require__ && (__nccwpck_require__.ab = t + "/");
        var r = {};
        (() => {
          var e2 = r;
          e2.parse = o, e2.serialize = s;
          var t2 = decodeURIComponent, n = encodeURIComponent, a = /; */, i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
          function o(e3, r2) {
            if ("string" != typeof e3)
              throw TypeError("argument str must be a string");
            for (var n2 = {}, i2 = e3.split(a), o2 = (r2 || {}).decode || t2, s2 = 0; s2 < i2.length; s2++) {
              var u = i2[s2], c = u.indexOf("=");
              if (!(c < 0)) {
                var d = u.substr(0, c).trim(), h = u.substr(++c, u.length).trim();
                '"' == h[0] && (h = h.slice(1, -1)), void 0 == n2[d] && (n2[d] = l(h, o2));
              }
            }
            return n2;
          }
          function s(e3, t3, r2) {
            var a2 = r2 || {}, o2 = a2.encode || n;
            if ("function" != typeof o2)
              throw TypeError("option encode is invalid");
            if (!i.test(e3))
              throw TypeError("argument name is invalid");
            var s2 = o2(t3);
            if (s2 && !i.test(s2))
              throw TypeError("argument val is invalid");
            var l2 = e3 + "=" + s2;
            if (null != a2.maxAge) {
              var u = a2.maxAge - 0;
              if (isNaN(u) || !isFinite(u))
                throw TypeError("option maxAge is invalid");
              l2 += "; Max-Age=" + Math.floor(u);
            }
            if (a2.domain) {
              if (!i.test(a2.domain))
                throw TypeError("option domain is invalid");
              l2 += "; Domain=" + a2.domain;
            }
            if (a2.path) {
              if (!i.test(a2.path))
                throw TypeError("option path is invalid");
              l2 += "; Path=" + a2.path;
            }
            if (a2.expires) {
              if ("function" != typeof a2.expires.toUTCString)
                throw TypeError("option expires is invalid");
              l2 += "; Expires=" + a2.expires.toUTCString();
            }
            if (a2.httpOnly && (l2 += "; HttpOnly"), a2.secure && (l2 += "; Secure"), a2.sameSite)
              switch ("string" == typeof a2.sameSite ? a2.sameSite.toLowerCase() : a2.sameSite) {
                case true:
                case "strict":
                  l2 += "; SameSite=Strict";
                  break;
                case "lax":
                  l2 += "; SameSite=Lax";
                  break;
                case "none":
                  l2 += "; SameSite=None";
                  break;
                default:
                  throw TypeError("option sameSite is invalid");
              }
            return l2;
          }
          function l(e3, t3) {
            try {
              return t3(e3);
            } catch (r2) {
              return e3;
            }
          }
        })(), e.exports = r;
      })();
    }, 764: () => {
    }, 987: (e, t, r) => {
      var n = "/";
      !function() {
        var t2 = { 477: function(e2) {
          "use strict";
          e2.exports = r(334);
        } }, a = {};
        function i(e2) {
          var r2 = a[e2];
          if (void 0 !== r2)
            return r2.exports;
          var n2 = a[e2] = { exports: {} }, o2 = true;
          try {
            t2[e2](n2, n2.exports, i), o2 = false;
          } finally {
            o2 && delete a[e2];
          }
          return n2.exports;
        }
        i.ab = n + "/";
        var o = {};
        !function() {
          var e2, t3 = o, r2 = (e2 = i(477)) && "object" == typeof e2 && "default" in e2 ? e2.default : e2, n2 = /https?|ftp|gopher|file/;
          function a2(e3) {
            "string" == typeof e3 && (e3 = v(e3));
            var t4, a3, i2, o2, s2, l2, u2, c2, d2, h2 = (a3 = (t4 = e3).auth, i2 = t4.hostname, o2 = t4.protocol || "", s2 = t4.pathname || "", l2 = t4.hash || "", u2 = t4.query || "", c2 = false, a3 = a3 ? encodeURIComponent(a3).replace(/%3A/i, ":") + "@" : "", t4.host ? c2 = a3 + t4.host : i2 && (c2 = a3 + (~i2.indexOf(":") ? "[" + i2 + "]" : i2), t4.port && (c2 += ":" + t4.port)), u2 && "object" == typeof u2 && (u2 = r2.encode(u2)), d2 = t4.search || u2 && "?" + u2 || "", o2 && ":" !== o2.substr(-1) && (o2 += ":"), t4.slashes || (!o2 || n2.test(o2)) && false !== c2 ? (c2 = "//" + (c2 || ""), s2 && "/" !== s2[0] && (s2 = "/" + s2)) : c2 || (c2 = ""), l2 && "#" !== l2[0] && (l2 = "#" + l2), d2 && "?" !== d2[0] && (d2 = "?" + d2), { protocol: o2, host: c2, pathname: s2 = s2.replace(/[?#]/g, encodeURIComponent), search: d2 = d2.replace("#", "%23"), hash: l2 });
            return "" + h2.protocol + h2.host + h2.pathname + h2.search + h2.hash;
          }
          var s = "http://", l = s + "w.w", u = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i, c = /https?|ftp|gopher|file/;
          function d(e3, t4) {
            var r3 = "string" == typeof e3 ? v(e3) : e3;
            e3 = "object" == typeof e3 ? a2(e3) : e3;
            var n3 = v(t4), i2 = "";
            r3.protocol && !r3.slashes && (i2 = r3.protocol, e3 = e3.replace(r3.protocol, ""), i2 += "/" === t4[0] || "/" === e3[0] ? "/" : ""), i2 && n3.protocol && (i2 = "", n3.slashes || (i2 = n3.protocol, t4 = t4.replace(n3.protocol, "")));
            var o2 = e3.match(u);
            o2 && !n3.protocol && (e3 = e3.substr((i2 = o2[1] + (o2[2] || "")).length), /^\/\/[^/]/.test(t4) && (i2 = i2.slice(0, -1)));
            var d2 = new URL(e3, l + "/"), h2 = new URL(t4, d2).toString().replace(l, ""), p2 = n3.protocol || r3.protocol;
            return p2 += r3.slashes || n3.slashes ? "//" : "", !i2 && p2 ? h2 = h2.replace(s, p2) : i2 && (h2 = h2.replace(s, "")), c.test(h2) || ~t4.indexOf(".") || "/" === e3.slice(-1) || "/" === t4.slice(-1) || "/" !== h2.slice(-1) || (h2 = h2.slice(0, -1)), i2 && (h2 = i2 + ("/" === h2[0] ? h2.substr(1) : h2)), h2;
          }
          function h() {
          }
          h.prototype.parse = v, h.prototype.format = a2, h.prototype.resolve = d, h.prototype.resolveObject = d;
          var p = /^https?|ftp|gopher|file/, f = /^(.*?)([#?].*)/, m = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i, g = /^([a-z0-9.+-]*:)?\/\/\/*/i, y = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
          function v(e3, t4, n3) {
            if (void 0 === t4 && (t4 = false), void 0 === n3 && (n3 = false), e3 && "object" == typeof e3 && e3 instanceof h)
              return e3;
            var i2 = (e3 = e3.trim()).match(f);
            e3 = i2 ? i2[1].replace(/\\/g, "/") + i2[2] : e3.replace(/\\/g, "/"), y.test(e3) && "/" !== e3.slice(-1) && (e3 += "/");
            var o2 = !/(^javascript)/.test(e3) && e3.match(m), s2 = g.test(e3), u2 = "";
            o2 && (p.test(o2[1]) || (u2 = o2[1].toLowerCase(), e3 = "" + o2[2] + o2[3]), o2[2] || (s2 = false, p.test(o2[1]) ? (u2 = o2[1], e3 = "" + o2[3]) : e3 = "//" + o2[3]), 3 !== o2[2].length && 1 !== o2[2].length || (u2 = o2[1], e3 = "/" + o2[3]));
            var c2, d2 = (i2 ? i2[1] : e3).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/), v2 = d2 && d2[1], b = new h(), x = "", w = "";
            try {
              c2 = new URL(e3);
            } catch (_) {
              x = _, u2 || n3 || !/^\/\//.test(e3) || /^\/\/.+[@.]/.test(e3) || (w = "/", e3 = e3.substr(1));
              try {
                c2 = new URL(e3, l);
              } catch (S) {
                return b.protocol = u2, b.href = u2, b;
              }
            }
            b.slashes = s2 && !w, b.host = "w.w" === c2.host ? "" : c2.host, b.hostname = "w.w" === c2.hostname ? "" : c2.hostname.replace(/(\[|\])/g, ""), b.protocol = x ? u2 || null : c2.protocol, b.search = c2.search.replace(/\\/g, "%5C"), b.hash = c2.hash.replace(/\\/g, "%5C");
            var C = e3.split("#");
            !b.search && ~C[0].indexOf("?") && (b.search = "?"), b.hash || "" !== C[1] || (b.hash = "#"), b.query = t4 ? r2.decode(c2.search.substr(1)) : b.search.substr(1), b.pathname = w + (o2 ? c2.pathname.replace(/['^|`]/g, function(e4) {
              return "%" + e4.charCodeAt().toString(16).toUpperCase();
            }).replace(/((?:%[0-9A-F]{2})+)/g, function(e4, t5) {
              try {
                return decodeURIComponent(t5).split("").map(function(e5) {
                  var t6 = e5.charCodeAt();
                  return t6 > 256 || /^[a-z0-9]$/i.test(e5) ? e5 : "%" + t6.toString(16).toUpperCase();
                }).join("");
              } catch (r3) {
                return t5;
              }
            }) : c2.pathname), "about:" === b.protocol && "blank" === b.pathname && (b.protocol = "", b.pathname = ""), x && "/" !== e3[0] && (b.pathname = b.pathname.substr(1)), u2 && !p.test(u2) && "/" !== e3.slice(-1) && "/" === b.pathname && (b.pathname = ""), b.path = b.pathname + b.search, b.auth = [c2.username, c2.password].map(decodeURIComponent).filter(Boolean).join(":"), b.port = c2.port, v2 && !b.host.endsWith(v2) && (b.host += v2, b.port = v2.slice(1)), b.href = w ? "" + b.pathname + b.search + b.hash : a2(b);
            var E = /^(file)/.test(b.href) ? ["host", "hostname"] : [];
            return Object.keys(b).forEach(function(e4) {
              ~E.indexOf(e4) || (b[e4] = b[e4] || null);
            }), b;
          }
          t3.parse = v, t3.format = a2, t3.resolve = d, t3.resolveObject = function(e3, t4) {
            return v(d(e3, t4));
          }, t3.Url = h;
        }(), e.exports = o;
      }();
    }, 329: (e, t) => {
      "use strict";
      var r;
      function n(e2) {
        for (var t2 = [], r2 = 0; r2 < e2.length; ) {
          var n2 = e2[r2];
          if ("*" === n2 || "+" === n2 || "?" === n2) {
            t2.push({ type: "MODIFIER", index: r2, value: e2[r2++] });
            continue;
          }
          if ("\\" === n2) {
            t2.push({ type: "ESCAPED_CHAR", index: r2++, value: e2[r2++] });
            continue;
          }
          if ("{" === n2) {
            t2.push({ type: "OPEN", index: r2, value: e2[r2++] });
            continue;
          }
          if ("}" === n2) {
            t2.push({ type: "CLOSE", index: r2, value: e2[r2++] });
            continue;
          }
          if (":" === n2) {
            for (var a2 = "", i2 = r2 + 1; i2 < e2.length; ) {
              var o2 = e2.charCodeAt(i2);
              if (o2 >= 48 && o2 <= 57 || o2 >= 65 && o2 <= 90 || o2 >= 97 && o2 <= 122 || 95 === o2) {
                a2 += e2[i2++];
                continue;
              }
              break;
            }
            if (!a2)
              throw TypeError("Missing parameter name at " + r2);
            t2.push({ type: "NAME", index: r2, value: a2 }), r2 = i2;
            continue;
          }
          if ("(" === n2) {
            var s2 = 1, l2 = "", i2 = r2 + 1;
            if ("?" === e2[i2])
              throw TypeError('Pattern cannot start with "?" at ' + i2);
            for (; i2 < e2.length; ) {
              if ("\\" === e2[i2]) {
                l2 += e2[i2++] + e2[i2++];
                continue;
              }
              if (")" === e2[i2]) {
                if (0 == --s2) {
                  i2++;
                  break;
                }
              } else if ("(" === e2[i2] && (s2++, "?" !== e2[i2 + 1]))
                throw TypeError("Capturing groups are not allowed at " + i2);
              l2 += e2[i2++];
            }
            if (s2)
              throw TypeError("Unbalanced pattern at " + r2);
            if (!l2)
              throw TypeError("Missing pattern at " + r2);
            t2.push({ type: "PATTERN", index: r2, value: l2 }), r2 = i2;
            continue;
          }
          t2.push({ type: "CHAR", index: r2, value: e2[r2++] });
        }
        return t2.push({ type: "END", index: r2, value: "" }), t2;
      }
      function a(e2, t2) {
        void 0 === t2 && (t2 = {});
        for (var r2 = n(e2), a2 = t2.prefixes, i2 = void 0 === a2 ? "./" : a2, o2 = "[^" + l(t2.delimiter || "/#?") + "]+?", s2 = [], u2 = 0, c2 = 0, d2 = "", h2 = function(e3) {
          if (c2 < r2.length && r2[c2].type === e3)
            return r2[c2++].value;
        }, p2 = function(e3) {
          var t3 = h2(e3);
          if (void 0 !== t3)
            return t3;
          var n2 = r2[c2];
          throw TypeError("Unexpected " + n2.type + " at " + n2.index + ", expected " + e3);
        }, f2 = function() {
          for (var e3, t3 = ""; e3 = h2("CHAR") || h2("ESCAPED_CHAR"); )
            t3 += e3;
          return t3;
        }; c2 < r2.length; ) {
          var m = h2("CHAR"), g = h2("NAME"), y = h2("PATTERN");
          if (g || y) {
            var v = m || "";
            -1 === i2.indexOf(v) && (d2 += v, v = ""), d2 && (s2.push(d2), d2 = ""), s2.push({ name: g || u2++, prefix: v, suffix: "", pattern: y || o2, modifier: h2("MODIFIER") || "" });
            continue;
          }
          var b = m || h2("ESCAPED_CHAR");
          if (b) {
            d2 += b;
            continue;
          }
          if (d2 && (s2.push(d2), d2 = ""), h2("OPEN")) {
            var v = f2(), x = h2("NAME") || "", w = h2("PATTERN") || "", S = f2();
            p2("CLOSE"), s2.push({ name: x || (w ? u2++ : ""), pattern: x && !w ? o2 : w, prefix: v, suffix: S, modifier: h2("MODIFIER") || "" });
            continue;
          }
          p2("END");
        }
        return s2;
      }
      function i(e2, t2) {
        return o(a(e2, t2), t2);
      }
      function o(e2, t2) {
        void 0 === t2 && (t2 = {});
        var r2 = u(t2), n2 = t2.encode, a2 = void 0 === n2 ? function(e3) {
          return e3;
        } : n2, i2 = t2.validate, o2 = void 0 === i2 || i2, s2 = e2.map(function(e3) {
          if ("object" == typeof e3)
            return RegExp("^(?:" + e3.pattern + ")$", r2);
        });
        return function(t3) {
          for (var r3 = "", n3 = 0; n3 < e2.length; n3++) {
            var i3 = e2[n3];
            if ("string" == typeof i3) {
              r3 += i3;
              continue;
            }
            var l2 = t3 ? t3[i3.name] : void 0, u2 = "?" === i3.modifier || "*" === i3.modifier, c2 = "*" === i3.modifier || "+" === i3.modifier;
            if (Array.isArray(l2)) {
              if (!c2)
                throw TypeError('Expected "' + i3.name + '" to not repeat, but got an array');
              if (0 === l2.length) {
                if (u2)
                  continue;
                throw TypeError('Expected "' + i3.name + '" to not be empty');
              }
              for (var d2 = 0; d2 < l2.length; d2++) {
                var h2 = a2(l2[d2], i3);
                if (o2 && !s2[n3].test(h2))
                  throw TypeError('Expected all "' + i3.name + '" to match "' + i3.pattern + '", but got "' + h2 + '"');
                r3 += i3.prefix + h2 + i3.suffix;
              }
              continue;
            }
            if ("string" == typeof l2 || "number" == typeof l2) {
              var h2 = a2(String(l2), i3);
              if (o2 && !s2[n3].test(h2))
                throw TypeError('Expected "' + i3.name + '" to match "' + i3.pattern + '", but got "' + h2 + '"');
              r3 += i3.prefix + h2 + i3.suffix;
              continue;
            }
            if (!u2) {
              var p2 = c2 ? "an array" : "a string";
              throw TypeError('Expected "' + i3.name + '" to be ' + p2);
            }
          }
          return r3;
        };
      }
      function s(e2, t2, r2) {
        void 0 === r2 && (r2 = {});
        var n2 = r2.decode, a2 = void 0 === n2 ? function(e3) {
          return e3;
        } : n2;
        return function(r3) {
          var n3 = e2.exec(r3);
          if (!n3)
            return false;
          for (var i2 = n3[0], o2 = n3.index, s2 = /* @__PURE__ */ Object.create(null), l2 = 1; l2 < n3.length; l2++)
            !function(e3) {
              if (void 0 !== n3[e3]) {
                var r4 = t2[e3 - 1];
                "*" === r4.modifier || "+" === r4.modifier ? s2[r4.name] = n3[e3].split(r4.prefix + r4.suffix).map(function(e4) {
                  return a2(e4, r4);
                }) : s2[r4.name] = a2(n3[e3], r4);
              }
            }(l2);
          return { path: i2, index: o2, params: s2 };
        };
      }
      function l(e2) {
        return e2.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function u(e2) {
        return e2 && e2.sensitive ? "" : "i";
      }
      function c(e2, t2) {
        if (!t2)
          return e2;
        var r2 = e2.source.match(/\((?!\?)/g);
        if (r2)
          for (var n2 = 0; n2 < r2.length; n2++)
            t2.push({ name: n2, prefix: "", suffix: "", modifier: "", pattern: "" });
        return e2;
      }
      function d(e2, t2, r2) {
        return RegExp("(?:" + e2.map(function(e3) {
          return f(e3, t2, r2).source;
        }).join("|") + ")", u(r2));
      }
      function h(e2, t2, r2) {
        return p(a(e2, r2), t2, r2);
      }
      function p(e2, t2, r2) {
        void 0 === r2 && (r2 = {});
        for (var n2 = r2.strict, a2 = void 0 !== n2 && n2, i2 = r2.start, o2 = r2.end, s2 = r2.encode, c2 = void 0 === s2 ? function(e3) {
          return e3;
        } : s2, d2 = "[" + l(r2.endsWith || "") + "]|$", h2 = "[" + l(r2.delimiter || "/#?") + "]", p2 = void 0 === i2 || i2 ? "^" : "", f2 = 0; f2 < e2.length; f2++) {
          var m = e2[f2];
          if ("string" == typeof m)
            p2 += l(c2(m));
          else {
            var g = l(c2(m.prefix)), y = l(c2(m.suffix));
            if (m.pattern) {
              if (t2 && t2.push(m), g || y) {
                if ("+" === m.modifier || "*" === m.modifier) {
                  var v = "*" === m.modifier ? "?" : "";
                  p2 += "(?:" + g + "((?:" + m.pattern + ")(?:" + y + g + "(?:" + m.pattern + "))*)" + y + ")" + v;
                } else
                  p2 += "(?:" + g + "(" + m.pattern + ")" + y + ")" + m.modifier;
              } else
                p2 += "(" + m.pattern + ")" + m.modifier;
            } else
              p2 += "(?:" + g + y + ")" + m.modifier;
          }
        }
        if (void 0 === o2 || o2)
          a2 || (p2 += h2 + "?"), p2 += r2.endsWith ? "(?=" + d2 + ")" : "$";
        else {
          var b = e2[e2.length - 1], x = "string" == typeof b ? h2.indexOf(b[b.length - 1]) > -1 : void 0 === b;
          a2 || (p2 += "(?:" + h2 + "(?=" + d2 + "))?"), x || (p2 += "(?=" + h2 + "|" + d2 + ")");
        }
        return RegExp(p2, u(r2));
      }
      function f(e2, t2, r2) {
        return e2 instanceof RegExp ? c(e2, t2) : Array.isArray(e2) ? d(e2, t2, r2) : h(e2, t2, r2);
      }
      t.MY = i, t.WS = s, t.Bo = f;
    }, 334: (e) => {
      var t = "/";
      !function() {
        "use strict";
        var r, n = { 815: function(e2) {
          e2.exports = function(e3, r2, n2, a2) {
            r2 = r2 || "&", n2 = n2 || "=";
            var i2 = {};
            if ("string" != typeof e3 || 0 === e3.length)
              return i2;
            var o2 = /\+/g;
            e3 = e3.split(r2);
            var s = 1e3;
            a2 && "number" == typeof a2.maxKeys && (s = a2.maxKeys);
            var l = e3.length;
            s > 0 && l > s && (l = s);
            for (var u = 0; u < l; ++u) {
              var c, d, h, p, f = e3[u].replace(o2, "%20"), m = f.indexOf(n2);
              (m >= 0 ? (c = f.substr(0, m), d = f.substr(m + 1)) : (c = f, d = ""), h = decodeURIComponent(c), p = decodeURIComponent(d), Object.prototype.hasOwnProperty.call(i2, h)) ? t2(i2[h]) ? i2[h].push(p) : i2[h] = [i2[h], p] : i2[h] = p;
            }
            return i2;
          };
          var t2 = Array.isArray || function(e3) {
            return "[object Array]" === Object.prototype.toString.call(e3);
          };
        }, 577: function(e2) {
          var t2 = function(e3) {
            switch (typeof e3) {
              case "string":
                return e3;
              case "boolean":
                return e3 ? "true" : "false";
              case "number":
                return isFinite(e3) ? e3 : "";
              default:
                return "";
            }
          };
          e2.exports = function(e3, i2, o2, s) {
            return (i2 = i2 || "&", o2 = o2 || "=", null === e3 && (e3 = void 0), "object" == typeof e3) ? n2(a2(e3), function(a3) {
              var s2 = encodeURIComponent(t2(a3)) + o2;
              return r2(e3[a3]) ? n2(e3[a3], function(e4) {
                return s2 + encodeURIComponent(t2(e4));
              }).join(i2) : s2 + encodeURIComponent(t2(e3[a3]));
            }).join(i2) : s ? encodeURIComponent(t2(s)) + o2 + encodeURIComponent(t2(e3)) : "";
          };
          var r2 = Array.isArray || function(e3) {
            return "[object Array]" === Object.prototype.toString.call(e3);
          };
          function n2(e3, t3) {
            if (e3.map)
              return e3.map(t3);
            for (var r3 = [], n3 = 0; n3 < e3.length; n3++)
              r3.push(t3(e3[n3], n3));
            return r3;
          }
          var a2 = Object.keys || function(e3) {
            var t3 = [];
            for (var r3 in e3)
              Object.prototype.hasOwnProperty.call(e3, r3) && t3.push(r3);
            return t3;
          };
        } }, a = {};
        function i(e2) {
          var t2 = a[e2];
          if (void 0 !== t2)
            return t2.exports;
          var r2 = a[e2] = { exports: {} }, o2 = true;
          try {
            n[e2](r2, r2.exports, i), o2 = false;
          } finally {
            o2 && delete a[e2];
          }
          return r2.exports;
        }
        i.ab = t + "/";
        var o = {};
        (r = o).decode = r.parse = i(815), r.encode = r.stringify = i(577), e.exports = o;
      }();
    }, 395: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      let n = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], a = (e2, t2) => {
        let r2 = e2;
        return "string" == typeof t2 ? r2 = e2.toLocaleString(t2) : true === t2 && (r2 = e2.toLocaleString()), r2;
      };
      function i(e2, t2) {
        if (!Number.isFinite(e2))
          throw TypeError(`Expected a finite number, got ${typeof e2}: ${e2}`);
        if ((t2 = Object.assign({}, t2)).signed && 0 === e2)
          return " 0 B";
        let r2 = e2 < 0, i2 = r2 ? "-" : t2.signed ? "+" : "";
        if (r2 && (e2 = -e2), e2 < 1) {
          let o = a(e2, t2.locale);
          return i2 + o + " B";
        }
        let s = Math.min(Math.floor(Math.log10(e2) / 3), n.length - 1);
        e2 = Number((e2 / Math.pow(1e3, s)).toPrecision(3));
        let l = a(e2, t2.locale), u = n[s];
        return i2 + l + " " + u;
      }
    }, 844: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      let n = new Proxy((e2) => e2, { get: (e2, t2) => ["hex", "rgb", "ansi256", "bgHex", "bgRgb", "bgAnsi256"].includes(t2) ? () => n : n }), a = n;
    }, 698: (e, t, r) => {
      "use strict";
      var n = r(294);
      function a(e10) {
        for (var t10 = "https://reactjs.org/docs/error-decoder.html?invariant=" + e10, r2 = 1; r2 < arguments.length; r2++)
          t10 += "&args[]=" + encodeURIComponent(arguments[r2]);
        return "Minified React error #" + e10 + "; visit " + t10 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var i = null, o = 0;
      function s(e10, t10) {
        if (0 !== t10.length) {
          if (512 < t10.length)
            0 < o && (e10.enqueue(new Uint8Array(i.buffer, 0, o)), i = new Uint8Array(512), o = 0), e10.enqueue(t10);
          else {
            var r2 = i.length - o;
            r2 < t10.length && (0 === r2 ? e10.enqueue(i) : (i.set(t10.subarray(0, r2), o), e10.enqueue(i), t10 = t10.subarray(r2)), i = new Uint8Array(512), o = 0), i.set(t10, o), o += t10.length;
          }
        }
      }
      function l(e10, t10) {
        return s(e10, t10), true;
      }
      function u(e10) {
        i && 0 < o && (e10.enqueue(new Uint8Array(i.buffer, 0, o)), i = null, o = 0);
      }
      var c = new TextEncoder();
      function d(e10) {
        return c.encode(e10);
      }
      function h(e10) {
        return c.encode(e10);
      }
      function p(e10, t10) {
        "function" == typeof e10.error ? e10.error(t10) : e10.close();
      }
      var f = Object.prototype.hasOwnProperty, m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, g = {}, y = {};
      function v(e10) {
        return !!f.call(y, e10) || !f.call(g, e10) && (m.test(e10) ? y[e10] = true : (g[e10] = true, false));
      }
      function b(e10, t10, r2, n2, a2, i2, o2) {
        this.acceptsBooleans = 2 === t10 || 3 === t10 || 4 === t10, this.attributeName = n2, this.attributeNamespace = a2, this.mustUseProperty = r2, this.propertyName = e10, this.type = t10, this.sanitizeURL = i2, this.removeEmptyString = o2;
      }
      var x = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e10) {
        x[e10] = new b(e10, 0, false, e10, null, false, false);
      }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e10) {
        var t10 = e10[0];
        x[t10] = new b(t10, 1, false, e10[1], null, false, false);
      }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e10) {
        x[e10] = new b(e10, 2, false, e10.toLowerCase(), null, false, false);
      }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e10) {
        x[e10] = new b(e10, 2, false, e10, null, false, false);
      }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e10) {
        x[e10] = new b(e10, 3, false, e10.toLowerCase(), null, false, false);
      }), ["checked", "multiple", "muted", "selected"].forEach(function(e10) {
        x[e10] = new b(e10, 3, true, e10, null, false, false);
      }), ["capture", "download"].forEach(function(e10) {
        x[e10] = new b(e10, 4, false, e10, null, false, false);
      }), ["cols", "rows", "size", "span"].forEach(function(e10) {
        x[e10] = new b(e10, 6, false, e10, null, false, false);
      }), ["rowSpan", "start"].forEach(function(e10) {
        x[e10] = new b(e10, 5, false, e10.toLowerCase(), null, false, false);
      });
      var w = /[\-:]([a-z])/g;
      function S(e10) {
        return e10[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e10) {
        var t10 = e10.replace(w, S);
        x[t10] = new b(t10, 1, false, e10, null, false, false);
      }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e10) {
        var t10 = e10.replace(w, S);
        x[t10] = new b(t10, 1, false, e10, "http://www.w3.org/1999/xlink", false, false);
      }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e10) {
        var t10 = e10.replace(w, S);
        x[t10] = new b(t10, 1, false, e10, "http://www.w3.org/XML/1998/namespace", false, false);
      }), ["tabIndex", "crossOrigin"].forEach(function(e10) {
        x[e10] = new b(e10, 1, false, e10.toLowerCase(), null, false, false);
      }), x.xlinkHref = new b("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), ["src", "href", "action", "formAction"].forEach(function(e10) {
        x[e10] = new b(e10, 1, false, e10.toLowerCase(), null, true, true);
      });
      var _ = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, C = ["Webkit", "ms", "Moz", "O"];
      Object.keys(_).forEach(function(e10) {
        C.forEach(function(t10) {
          _[t10 = t10 + e10.charAt(0).toUpperCase() + e10.substring(1)] = _[e10];
        });
      });
      var E = /["'&<>]/;
      function R(e10) {
        if ("boolean" == typeof e10 || "number" == typeof e10)
          return "" + e10;
        e10 = "" + e10;
        var t10 = E.exec(e10);
        if (t10) {
          var r2, n2 = "", a2 = 0;
          for (r2 = t10.index; r2 < e10.length; r2++) {
            switch (e10.charCodeAt(r2)) {
              case 34:
                t10 = "&quot;";
                break;
              case 38:
                t10 = "&amp;";
                break;
              case 39:
                t10 = "&#x27;";
                break;
              case 60:
                t10 = "&lt;";
                break;
              case 62:
                t10 = "&gt;";
                break;
              default:
                continue;
            }
            a2 !== r2 && (n2 += e10.substring(a2, r2)), a2 = r2 + 1, n2 += t10;
          }
          e10 = a2 !== r2 ? n2 + e10.substring(a2, r2) : n2;
        }
        return e10;
      }
      var P = /([A-Z])/g, k = /^ms-/, T = Array.isArray, A = h("<script>"), $ = h("<\/script>"), O = h('<script src="'), I = h('<script type="module" src="'), L = h('" async=""><\/script>'), j = /(<\/|<)(s)(cript)/gi;
      function M(e10, t10, r2, n2) {
        return "" + t10 + ("s" === r2 ? "\\u0073" : "\\u0053") + n2;
      }
      function F(e10, t10, r2, n2, a2) {
        e10 = void 0 === e10 ? "" : e10, t10 = void 0 === t10 ? A : h('<script nonce="' + R(t10) + '">');
        var i2 = [];
        if (void 0 !== r2 && i2.push(t10, d(("" + r2).replace(j, M)), $), void 0 !== n2)
          for (r2 = 0; r2 < n2.length; r2++)
            i2.push(O, d(R(n2[r2])), L);
        if (void 0 !== a2)
          for (n2 = 0; n2 < a2.length; n2++)
            i2.push(I, d(R(a2[n2])), L);
        return { bootstrapChunks: i2, startInlineScript: t10, placeholderPrefix: h(e10 + "P:"), segmentPrefix: h(e10 + "S:"), boundaryPrefix: e10 + "B:", idPrefix: e10, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false };
      }
      function D(e10, t10) {
        return { insertionMode: e10, selectedValue: t10 };
      }
      function N(e10) {
        return D("http://www.w3.org/2000/svg" === e10 ? 2 : "http://www.w3.org/1998/Math/MathML" === e10 ? 3 : 0, null);
      }
      function q(e10, t10, r2) {
        switch (t10) {
          case "select":
            return D(1, null != r2.value ? r2.value : r2.defaultValue);
          case "svg":
            return D(2, null);
          case "math":
            return D(3, null);
          case "foreignObject":
            return D(1, null);
          case "table":
            return D(4, null);
          case "thead":
          case "tbody":
          case "tfoot":
            return D(5, null);
          case "colgroup":
            return D(7, null);
          case "tr":
            return D(6, null);
        }
        return 4 <= e10.insertionMode || 0 === e10.insertionMode ? D(1, null) : e10;
      }
      var U = h("<!-- -->");
      function B(e10, t10, r2, n2) {
        return "" === t10 ? n2 : (n2 && e10.push(U), e10.push(d(R(t10))), true);
      }
      var z = /* @__PURE__ */ new Map(), H = h(' style="'), W = h(":"), V = h(";");
      function G(e10, t10, r2) {
        if ("object" != typeof r2)
          throw Error(a(62));
        for (var n2 in t10 = true, r2)
          if (f.call(r2, n2)) {
            var i2 = r2[n2];
            if (null != i2 && "boolean" != typeof i2 && "" !== i2) {
              if (0 === n2.indexOf("--")) {
                var o2 = d(R(n2));
                i2 = d(R(("" + i2).trim()));
              } else {
                o2 = n2;
                var s2 = z.get(o2);
                void 0 !== s2 || (s2 = h(R(o2.replace(P, "-$1").toLowerCase().replace(k, "-ms-"))), z.set(o2, s2)), o2 = s2, i2 = "number" == typeof i2 ? 0 === i2 || f.call(_, n2) ? d("" + i2) : d(i2 + "px") : d(R(("" + i2).trim()));
              }
              t10 ? (t10 = false, e10.push(H, o2, W, i2)) : e10.push(V, o2, W, i2);
            }
          }
        t10 || e10.push(Z);
      }
      var Y = h(" "), J = h('="'), Z = h('"'), X = h('=""');
      function K(e10, t10, r2, n2) {
        switch (r2) {
          case "style":
            G(e10, t10, n2);
            return;
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            return;
        }
        if (!(2 < r2.length) || "o" !== r2[0] && "O" !== r2[0] || "n" !== r2[1] && "N" !== r2[1]) {
          if (null !== (t10 = x.hasOwnProperty(r2) ? x[r2] : null)) {
            switch (typeof n2) {
              case "function":
              case "symbol":
                return;
              case "boolean":
                if (!t10.acceptsBooleans)
                  return;
            }
            switch (r2 = d(t10.attributeName), t10.type) {
              case 3:
                n2 && e10.push(Y, r2, X);
                break;
              case 4:
                true === n2 ? e10.push(Y, r2, X) : false !== n2 && e10.push(Y, r2, J, d(R(n2)), Z);
                break;
              case 5:
                isNaN(n2) || e10.push(Y, r2, J, d(R(n2)), Z);
                break;
              case 6:
                !isNaN(n2) && 1 <= n2 && e10.push(Y, r2, J, d(R(n2)), Z);
                break;
              default:
                t10.sanitizeURL && (n2 = "" + n2), e10.push(Y, r2, J, d(R(n2)), Z);
            }
          } else if (v(r2)) {
            switch (typeof n2) {
              case "function":
              case "symbol":
                return;
              case "boolean":
                if ("data-" !== (t10 = r2.toLowerCase().slice(0, 5)) && "aria-" !== t10)
                  return;
            }
            e10.push(Y, d(r2), J, d(R(n2)), Z);
          }
        }
      }
      var Q = h(">"), ee = h("/>");
      function et(e10, t10, r2) {
        if (null != t10) {
          if (null != r2)
            throw Error(a(60));
          if ("object" != typeof t10 || !("__html" in t10))
            throw Error(a(61));
          null != (t10 = t10.__html) && e10.push(d("" + t10));
        }
      }
      function er(e10) {
        var t10 = "";
        return n.Children.forEach(e10, function(e11) {
          null != e11 && (t10 += e11);
        }), t10;
      }
      var en = h(' selected=""');
      function ea(e10, t10, r2, n2) {
        e10.push(el(r2));
        var a2, i2 = r2 = null;
        for (a2 in t10)
          if (f.call(t10, a2)) {
            var o2 = t10[a2];
            if (null != o2)
              switch (a2) {
                case "children":
                  r2 = o2;
                  break;
                case "dangerouslySetInnerHTML":
                  i2 = o2;
                  break;
                default:
                  K(e10, n2, a2, o2);
              }
          }
        return e10.push(Q), et(e10, i2, r2), "string" == typeof r2 ? (e10.push(d(R(r2))), null) : r2;
      }
      var ei = h("\n"), eo = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, es = /* @__PURE__ */ new Map();
      function el(e10) {
        var t10 = es.get(e10);
        if (void 0 === t10) {
          if (!eo.test(e10))
            throw Error(a(65, e10));
          t10 = h("<" + e10), es.set(e10, t10);
        }
        return t10;
      }
      var eu = h("<!DOCTYPE html>");
      function ec(e10, t10, r2, n2, i2) {
        switch (t10) {
          case "select":
            e10.push(el("select"));
            var o2 = null, s2 = null;
            for (h2 in r2)
              if (f.call(r2, h2)) {
                var l2 = r2[h2];
                if (null != l2)
                  switch (h2) {
                    case "children":
                      o2 = l2;
                      break;
                    case "dangerouslySetInnerHTML":
                      s2 = l2;
                      break;
                    case "defaultValue":
                    case "value":
                      break;
                    default:
                      K(e10, n2, h2, l2);
                  }
              }
            return e10.push(Q), et(e10, s2, o2), o2;
          case "option":
            s2 = i2.selectedValue, e10.push(el("option"));
            var u2 = l2 = null, c2 = null, h2 = null;
            for (o2 in r2)
              if (f.call(r2, o2)) {
                var p2 = r2[o2];
                if (null != p2)
                  switch (o2) {
                    case "children":
                      l2 = p2;
                      break;
                    case "selected":
                      c2 = p2;
                      break;
                    case "dangerouslySetInnerHTML":
                      h2 = p2;
                      break;
                    case "value":
                      u2 = p2;
                    default:
                      K(e10, n2, o2, p2);
                  }
              }
            if (null != s2) {
              if (r2 = null !== u2 ? "" + u2 : er(l2), T(s2)) {
                for (n2 = 0; n2 < s2.length; n2++)
                  if ("" + s2[n2] === r2) {
                    e10.push(en);
                    break;
                  }
              } else
                "" + s2 === r2 && e10.push(en);
            } else
              c2 && e10.push(en);
            return e10.push(Q), et(e10, h2, l2), l2;
          case "textarea":
            for (l2 in e10.push(el("textarea")), h2 = s2 = o2 = null, r2)
              if (f.call(r2, l2) && null != (u2 = r2[l2]))
                switch (l2) {
                  case "children":
                    h2 = u2;
                    break;
                  case "value":
                    o2 = u2;
                    break;
                  case "defaultValue":
                    s2 = u2;
                    break;
                  case "dangerouslySetInnerHTML":
                    throw Error(a(91));
                  default:
                    K(e10, n2, l2, u2);
                }
            if (null === o2 && null !== s2 && (o2 = s2), e10.push(Q), null != h2) {
              if (null != o2)
                throw Error(a(92));
              if (T(h2) && 1 < h2.length)
                throw Error(a(93));
              o2 = "" + h2;
            }
            return "string" == typeof o2 && "\n" === o2[0] && e10.push(ei), null !== o2 && e10.push(d(R("" + o2))), null;
          case "input":
            for (s2 in e10.push(el("input")), u2 = h2 = l2 = o2 = null, r2)
              if (f.call(r2, s2) && null != (c2 = r2[s2]))
                switch (s2) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(a(399, "input"));
                  case "defaultChecked":
                    u2 = c2;
                    break;
                  case "defaultValue":
                    l2 = c2;
                    break;
                  case "checked":
                    h2 = c2;
                    break;
                  case "value":
                    o2 = c2;
                    break;
                  default:
                    K(e10, n2, s2, c2);
                }
            return null !== h2 ? K(e10, n2, "checked", h2) : null !== u2 && K(e10, n2, "checked", u2), null !== o2 ? K(e10, n2, "value", o2) : null !== l2 && K(e10, n2, "value", l2), e10.push(ee), null;
          case "menuitem":
            for (var m2 in e10.push(el("menuitem")), r2)
              if (f.call(r2, m2) && null != (o2 = r2[m2]))
                switch (m2) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(a(400));
                  default:
                    K(e10, n2, m2, o2);
                }
            return e10.push(Q), null;
          case "title":
            for (p2 in e10.push(el("title")), o2 = null, r2)
              if (f.call(r2, p2) && null != (s2 = r2[p2]))
                switch (p2) {
                  case "children":
                    o2 = s2;
                    break;
                  case "dangerouslySetInnerHTML":
                    throw Error(a(434));
                  default:
                    K(e10, n2, p2, s2);
                }
            return e10.push(Q), o2;
          case "listing":
          case "pre":
            for (u2 in e10.push(el(t10)), s2 = o2 = null, r2)
              if (f.call(r2, u2) && null != (l2 = r2[u2]))
                switch (u2) {
                  case "children":
                    o2 = l2;
                    break;
                  case "dangerouslySetInnerHTML":
                    s2 = l2;
                    break;
                  default:
                    K(e10, n2, u2, l2);
                }
            if (e10.push(Q), null != s2) {
              if (null != o2)
                throw Error(a(60));
              if ("object" != typeof s2 || !("__html" in s2))
                throw Error(a(61));
              null != (r2 = s2.__html) && ("string" == typeof r2 && 0 < r2.length && "\n" === r2[0] ? e10.push(ei, d(r2)) : e10.push(d("" + r2)));
            }
            return "string" == typeof o2 && "\n" === o2[0] && e10.push(ei), o2;
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            for (var g2 in e10.push(el(t10)), r2)
              if (f.call(r2, g2) && null != (o2 = r2[g2]))
                switch (g2) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(a(399, t10));
                  default:
                    K(e10, n2, g2, o2);
                }
            return e10.push(ee), null;
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return ea(e10, r2, t10, n2);
          case "html":
            return 0 === i2.insertionMode && e10.push(eu), ea(e10, r2, t10, n2);
          default:
            if (-1 === t10.indexOf("-") && "string" != typeof r2.is)
              return ea(e10, r2, t10, n2);
            for (c2 in e10.push(el(t10)), s2 = o2 = null, r2)
              if (f.call(r2, c2) && null != (l2 = r2[c2]))
                switch (c2) {
                  case "children":
                    o2 = l2;
                    break;
                  case "dangerouslySetInnerHTML":
                    s2 = l2;
                    break;
                  case "style":
                    G(e10, n2, l2);
                    break;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                    break;
                  default:
                    v(c2) && "function" != typeof l2 && "symbol" != typeof l2 && e10.push(Y, d(c2), J, d(R(l2)), Z);
                }
            return e10.push(Q), et(e10, s2, o2), o2;
        }
      }
      var ed = h("</"), eh = h(">"), ep = h('<template id="'), ef = h('"></template>'), em = h("<!--$-->"), eg = h('<!--$?--><template id="'), ey = h('"></template>'), ev = h("<!--$!-->"), eb = h("<!--/$-->"), ex = h("<template"), ew = h('"'), eS = h(' data-dgst="');
      h(' data-msg="'), h(' data-stck="');
      var e_ = h("></template>");
      function eC(e10, t10, r2) {
        if (s(e10, eg), null === r2)
          throw Error(a(395));
        return s(e10, r2), l(e10, ey);
      }
      var eE = h('<div hidden id="'), eR = h('">'), eP = h("</div>"), ek = h('<svg aria-hidden="true" style="display:none" id="'), eT = h('">'), eA = h("</svg>"), e$ = h('<math aria-hidden="true" style="display:none" id="'), eO = h('">'), eI = h("</math>"), eL = h('<table hidden id="'), ej = h('">'), eM = h("</table>"), eF = h('<table hidden><tbody id="'), eD = h('">'), eN = h("</tbody></table>"), eq = h('<table hidden><tr id="'), eU = h('">'), eB = h("</tr></table>"), ez = h('<table hidden><colgroup id="'), eH = h('">'), eW = h("</colgroup></table>");
      function eV(e10, t10, r2, n2) {
        switch (r2.insertionMode) {
          case 0:
          case 1:
            return s(e10, eE), s(e10, t10.segmentPrefix), s(e10, d(n2.toString(16))), l(e10, eR);
          case 2:
            return s(e10, ek), s(e10, t10.segmentPrefix), s(e10, d(n2.toString(16))), l(e10, eT);
          case 3:
            return s(e10, e$), s(e10, t10.segmentPrefix), s(e10, d(n2.toString(16))), l(e10, eO);
          case 4:
            return s(e10, eL), s(e10, t10.segmentPrefix), s(e10, d(n2.toString(16))), l(e10, ej);
          case 5:
            return s(e10, eF), s(e10, t10.segmentPrefix), s(e10, d(n2.toString(16))), l(e10, eD);
          case 6:
            return s(e10, eq), s(e10, t10.segmentPrefix), s(e10, d(n2.toString(16))), l(e10, eU);
          case 7:
            return s(e10, ez), s(e10, t10.segmentPrefix), s(e10, d(n2.toString(16))), l(e10, eH);
          default:
            throw Error(a(397));
        }
      }
      function eG(e10, t10) {
        switch (t10.insertionMode) {
          case 0:
          case 1:
            return l(e10, eP);
          case 2:
            return l(e10, eA);
          case 3:
            return l(e10, eI);
          case 4:
            return l(e10, eM);
          case 5:
            return l(e10, eN);
          case 6:
            return l(e10, eB);
          case 7:
            return l(e10, eW);
          default:
            throw Error(a(397));
        }
      }
      var eY = h('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), eJ = h('$RS("'), eZ = h('","'), eX = h('")<\/script>'), eK = h('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), eQ = h('$RC("'), e0 = h('","'), e1 = h('")<\/script>'), e2 = h('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), e3 = h('$RX("'), e4 = h('"'), e8 = h(")<\/script>"), e5 = h(","), e9 = /[<\u2028\u2029]/g;
      function e6(e10) {
        return JSON.stringify(e10).replace(e9, function(e11) {
          switch (e11) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
          }
        });
      }
      var e7 = Object.assign, te = Symbol.for("react.element"), tt = Symbol.for("react.portal"), tr = Symbol.for("react.fragment"), tn = Symbol.for("react.strict_mode"), ta = Symbol.for("react.profiler"), ti = Symbol.for("react.provider"), to = Symbol.for("react.context"), ts = Symbol.for("react.forward_ref"), tl = Symbol.for("react.suspense"), tu = Symbol.for("react.suspense_list"), tc = Symbol.for("react.memo"), td = Symbol.for("react.lazy"), th = Symbol.for("react.scope"), tp = Symbol.for("react.debug_trace_mode"), tf = Symbol.for("react.legacy_hidden"), tm = Symbol.for("react.default_value"), tg = Symbol.iterator;
      function ty(e10) {
        if (null == e10)
          return null;
        if ("function" == typeof e10)
          return e10.displayName || e10.name || null;
        if ("string" == typeof e10)
          return e10;
        switch (e10) {
          case tr:
            return "Fragment";
          case tt:
            return "Portal";
          case ta:
            return "Profiler";
          case tn:
            return "StrictMode";
          case tl:
            return "Suspense";
          case tu:
            return "SuspenseList";
        }
        if ("object" == typeof e10)
          switch (e10.$$typeof) {
            case to:
              return (e10.displayName || "Context") + ".Consumer";
            case ti:
              return (e10._context.displayName || "Context") + ".Provider";
            case ts:
              var t10 = e10.render;
              return (e10 = e10.displayName) || (e10 = "" !== (e10 = t10.displayName || t10.name || "") ? "ForwardRef(" + e10 + ")" : "ForwardRef"), e10;
            case tc:
              return null !== (t10 = e10.displayName || null) ? t10 : ty(e10.type) || "Memo";
            case td:
              t10 = e10._payload, e10 = e10._init;
              try {
                return ty(e10(t10));
              } catch (r2) {
              }
          }
        return null;
      }
      var tv = {};
      function tb(e10, t10) {
        if (!(e10 = e10.contextTypes))
          return tv;
        var r2, n2 = {};
        for (r2 in e10)
          n2[r2] = t10[r2];
        return n2;
      }
      var tx = null;
      function tw(e10, t10) {
        if (e10 !== t10) {
          e10.context._currentValue = e10.parentValue, e10 = e10.parent;
          var r2 = t10.parent;
          if (null === e10) {
            if (null !== r2)
              throw Error(a(401));
          } else {
            if (null === r2)
              throw Error(a(401));
            tw(e10, r2);
          }
          t10.context._currentValue = t10.value;
        }
      }
      function tS(e10) {
        e10.context._currentValue = e10.parentValue, null !== (e10 = e10.parent) && tS(e10);
      }
      function t_(e10) {
        var t10 = e10.parent;
        null !== t10 && t_(t10), e10.context._currentValue = e10.value;
      }
      function tC(e10, t10) {
        if (e10.context._currentValue = e10.parentValue, null === (e10 = e10.parent))
          throw Error(a(402));
        e10.depth === t10.depth ? tw(e10, t10) : tC(e10, t10);
      }
      function tE(e10, t10) {
        var r2 = t10.parent;
        if (null === r2)
          throw Error(a(402));
        e10.depth === r2.depth ? tw(e10, r2) : tE(e10, r2), t10.context._currentValue = t10.value;
      }
      function tR(e10) {
        var t10 = tx;
        t10 !== e10 && (null === t10 ? t_(e10) : null === e10 ? tS(t10) : t10.depth === e10.depth ? tw(t10, e10) : t10.depth > e10.depth ? tC(t10, e10) : tE(t10, e10), tx = e10);
      }
      var tP = { isMounted: function() {
        return false;
      }, enqueueSetState: function(e10, t10) {
        null !== (e10 = e10._reactInternals).queue && e10.queue.push(t10);
      }, enqueueReplaceState: function(e10, t10) {
        (e10 = e10._reactInternals).replace = true, e10.queue = [t10];
      }, enqueueForceUpdate: function() {
      } };
      function tk(e10, t10, r2, n2) {
        var a2 = void 0 !== e10.state ? e10.state : null;
        e10.updater = tP, e10.props = r2, e10.state = a2;
        var i2 = { queue: [], replace: false };
        e10._reactInternals = i2;
        var o2 = t10.contextType;
        if (e10.context = "object" == typeof o2 && null !== o2 ? o2._currentValue : n2, "function" == typeof (o2 = t10.getDerivedStateFromProps) && (a2 = null == (o2 = o2(r2, a2)) ? a2 : e7({}, a2, o2), e10.state = a2), "function" != typeof t10.getDerivedStateFromProps && "function" != typeof e10.getSnapshotBeforeUpdate && ("function" == typeof e10.UNSAFE_componentWillMount || "function" == typeof e10.componentWillMount)) {
          if (t10 = e10.state, "function" == typeof e10.componentWillMount && e10.componentWillMount(), "function" == typeof e10.UNSAFE_componentWillMount && e10.UNSAFE_componentWillMount(), t10 !== e10.state && tP.enqueueReplaceState(e10, e10.state, null), null !== i2.queue && 0 < i2.queue.length) {
            if (t10 = i2.queue, o2 = i2.replace, i2.queue = null, i2.replace = false, o2 && 1 === t10.length)
              e10.state = t10[0];
            else {
              for (i2 = o2 ? t10[0] : e10.state, a2 = true, o2 = o2 ? 1 : 0; o2 < t10.length; o2++) {
                var s2 = t10[o2];
                null != (s2 = "function" == typeof s2 ? s2.call(e10, i2, r2, n2) : s2) && (a2 ? (a2 = false, i2 = e7({}, i2, s2)) : e7(i2, s2));
              }
              e10.state = i2;
            }
          } else
            i2.queue = null;
        }
      }
      var tT = { id: 1, overflow: "" };
      function tA(e10, t10, r2) {
        var n2 = e10.id;
        e10 = e10.overflow;
        var a2 = 32 - t$(n2) - 1;
        n2 &= ~(1 << a2), r2 += 1;
        var i2 = 32 - t$(t10) + a2;
        if (30 < i2) {
          var o2 = a2 - a2 % 5;
          return i2 = (n2 & (1 << o2) - 1).toString(32), n2 >>= o2, a2 -= o2, { id: 1 << 32 - t$(t10) + a2 | r2 << a2 | n2, overflow: i2 + e10 };
        }
        return { id: 1 << i2 | r2 << a2 | n2, overflow: e10 };
      }
      var t$ = Math.clz32 ? Math.clz32 : tL, tO = Math.log, tI = Math.LN2;
      function tL(e10) {
        return 0 == (e10 >>>= 0) ? 32 : 31 - (tO(e10) / tI | 0) | 0;
      }
      function tj(e10, t10) {
        return e10 === t10 && (0 !== e10 || 1 / e10 == 1 / t10) || e10 != e10 && t10 != t10;
      }
      var tM = "function" == typeof Object.is ? Object.is : tj, tF = null, tD = null, tN = null, tq = null, tU = false, tB = false, tz = 0, tH = null, tW = 0;
      function tV() {
        if (null === tF)
          throw Error(a(321));
        return tF;
      }
      function tG() {
        if (0 < tW)
          throw Error(a(312));
        return { memoizedState: null, queue: null, next: null };
      }
      function tY() {
        return null === tq ? null === tN ? (tU = false, tN = tq = tG()) : (tU = true, tq = tN) : null === tq.next ? (tU = false, tq = tq.next = tG()) : (tU = true, tq = tq.next), tq;
      }
      function tJ() {
        tD = tF = null, tB = false, tN = null, tW = 0, tq = tH = null;
      }
      function tZ(e10, t10) {
        return "function" == typeof t10 ? t10(e10) : t10;
      }
      function tX(e10, t10, r2) {
        if (tF = tV(), tq = tY(), tU) {
          var n2 = tq.queue;
          if (t10 = n2.dispatch, null !== tH && void 0 !== (r2 = tH.get(n2))) {
            tH.delete(n2), n2 = tq.memoizedState;
            do
              n2 = e10(n2, r2.action), r2 = r2.next;
            while (null !== r2);
            return tq.memoizedState = n2, [n2, t10];
          }
          return [tq.memoizedState, t10];
        }
        return e10 = e10 === tZ ? "function" == typeof t10 ? t10() : t10 : void 0 !== r2 ? r2(t10) : t10, tq.memoizedState = e10, e10 = (e10 = tq.queue = { last: null, dispatch: null }).dispatch = tQ.bind(null, tF, e10), [tq.memoizedState, e10];
      }
      function tK(e10, t10) {
        if (tF = tV(), tq = tY(), t10 = void 0 === t10 ? null : t10, null !== tq) {
          var r2 = tq.memoizedState;
          if (null !== r2 && null !== t10) {
            var n2 = r2[1];
            e:
              if (null === n2)
                n2 = false;
              else {
                for (var a2 = 0; a2 < n2.length && a2 < t10.length; a2++)
                  if (!tM(t10[a2], n2[a2])) {
                    n2 = false;
                    break e;
                  }
                n2 = true;
              }
            if (n2)
              return r2[0];
          }
        }
        return e10 = e10(), tq.memoizedState = [e10, t10], e10;
      }
      function tQ(e10, t10, r2) {
        if (25 <= tW)
          throw Error(a(301));
        if (e10 === tF) {
          if (tB = true, e10 = { action: r2, next: null }, null === tH && (tH = /* @__PURE__ */ new Map()), void 0 === (r2 = tH.get(t10)))
            tH.set(t10, e10);
          else {
            for (t10 = r2; null !== t10.next; )
              t10 = t10.next;
            t10.next = e10;
          }
        }
      }
      function t0() {
        throw Error(a(394));
      }
      function t1() {
      }
      var t2 = { readContext: function(e10) {
        return e10._currentValue;
      }, useContext: function(e10) {
        return tV(), e10._currentValue;
      }, useMemo: tK, useReducer: tX, useRef: function(e10) {
        tF = tV();
        var t10 = (tq = tY()).memoizedState;
        return null === t10 ? (e10 = { current: e10 }, tq.memoizedState = e10) : t10;
      }, useState: function(e10) {
        return tX(tZ, e10);
      }, useInsertionEffect: t1, useLayoutEffect: function() {
      }, useCallback: function(e10, t10) {
        return tK(function() {
          return e10;
        }, t10);
      }, useImperativeHandle: t1, useEffect: t1, useDebugValue: t1, useDeferredValue: function(e10) {
        return tV(), e10;
      }, useTransition: function() {
        return tV(), [false, t0];
      }, useId: function() {
        var e10 = tD.treeContext, t10 = e10.overflow;
        e10 = ((e10 = e10.id) & ~(1 << 32 - t$(e10) - 1)).toString(32) + t10;
        var r2 = t3;
        if (null === r2)
          throw Error(a(404));
        return t10 = tz++, e10 = ":" + r2.idPrefix + "R" + e10, 0 < t10 && (e10 += "H" + t10.toString(32)), e10 + ":";
      }, useMutableSource: function(e10, t10) {
        return tV(), t10(e10._source);
      }, useSyncExternalStore: function(e10, t10, r2) {
        if (void 0 === r2)
          throw Error(a(407));
        return r2();
      } }, t3 = null, t4 = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
      function t8(e10) {
        return console.error(e10), null;
      }
      function t5() {
      }
      function t9(e10, t10, r2, n2, a2, i2, o2, s2, l2) {
        var u2 = [], c2 = /* @__PURE__ */ new Set();
        return (r2 = t7(t10 = { destination: null, responseState: t10, progressiveChunkSize: void 0 === n2 ? 12800 : n2, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: c2, pingedTasks: u2, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: void 0 === a2 ? t8 : a2, onAllReady: void 0 === i2 ? t5 : i2, onShellReady: void 0 === o2 ? t5 : o2, onShellError: void 0 === s2 ? t5 : s2, onFatalError: void 0 === l2 ? t5 : l2 }, 0, null, r2, false, false)).parentFlushed = true, u2.push(e10 = t6(t10, e10, null, r2, c2, tv, null, tT)), t10;
      }
      function t6(e10, t10, r2, n2, a2, i2, o2, s2) {
        e10.allPendingTasks++, null === r2 ? e10.pendingRootTasks++ : r2.pendingTasks++;
        var l2 = { node: t10, ping: function() {
          var t11 = e10.pingedTasks;
          t11.push(l2), 1 === t11.length && rp(e10);
        }, blockedBoundary: r2, blockedSegment: n2, abortSet: a2, legacyContext: i2, context: o2, treeContext: s2 };
        return a2.add(l2), l2;
      }
      function t7(e10, t10, r2, n2, a2, i2) {
        return { status: 0, id: -1, index: t10, parentFlushed: false, chunks: [], children: [], formatContext: n2, boundary: r2, lastPushedText: a2, textEmbedded: i2 };
      }
      function re(e10, t10) {
        if (null != (e10 = e10.onError(t10)) && "string" != typeof e10)
          throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e10 + '" instead');
        return e10;
      }
      function rt(e10, t10) {
        var r2 = e10.onShellError;
        r2(t10), (r2 = e10.onFatalError)(t10), null !== e10.destination ? (e10.status = 2, p(e10.destination, t10)) : (e10.status = 1, e10.fatalError = t10);
      }
      function rr(e10, t10, r2, n2, a2) {
        for (tF = {}, tD = t10, tz = 0, e10 = r2(n2, a2); tB; )
          tB = false, tz = 0, tW += 1, tq = null, e10 = r2(n2, a2);
        return tJ(), e10;
      }
      function rn(e10, t10, r2, n2) {
        var i2 = r2.render(), o2 = n2.childContextTypes;
        if (null != o2) {
          var s2 = t10.legacyContext;
          if ("function" != typeof r2.getChildContext)
            n2 = s2;
          else {
            for (var l2 in r2 = r2.getChildContext())
              if (!(l2 in o2))
                throw Error(a(108, ty(n2) || "Unknown", l2));
            n2 = e7({}, s2, r2);
          }
          t10.legacyContext = n2, ro(e10, t10, i2), t10.legacyContext = s2;
        } else
          ro(e10, t10, i2);
      }
      function ra(e10, t10) {
        if (e10 && e10.defaultProps)
          for (var r2 in t10 = e7({}, t10), e10 = e10.defaultProps)
            void 0 === t10[r2] && (t10[r2] = e10[r2]);
        return t10;
      }
      function ri(e10, t10, r2, n2, i2) {
        if ("function" == typeof r2) {
          if (r2.prototype && r2.prototype.isReactComponent) {
            i2 = tb(r2, t10.legacyContext);
            var o2 = r2.contextType;
            tk(o2 = new r2(n2, "object" == typeof o2 && null !== o2 ? o2._currentValue : i2), r2, n2, i2), rn(e10, t10, o2, r2);
          } else {
            o2 = tb(r2, t10.legacyContext);
            var s2 = 0 !== tz;
            if ("object" == typeof (i2 = rr(e10, t10, r2, n2, o2)) && null !== i2 && "function" == typeof i2.render && void 0 === i2.$$typeof)
              tk(i2, r2, n2, o2), rn(e10, t10, i2, r2);
            else if (s2) {
              n2 = t10.treeContext, t10.treeContext = tA(n2, 1, 0);
              try {
                ro(e10, t10, i2);
              } finally {
                t10.treeContext = n2;
              }
            } else
              ro(e10, t10, i2);
          }
        } else if ("string" == typeof r2) {
          switch (o2 = ec((i2 = t10.blockedSegment).chunks, r2, n2, e10.responseState, i2.formatContext), i2.lastPushedText = false, s2 = i2.formatContext, i2.formatContext = q(s2, r2, n2), rl(e10, t10, o2), i2.formatContext = s2, r2) {
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "input":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
              break;
            default:
              i2.chunks.push(ed, d(r2), eh);
          }
          i2.lastPushedText = false;
        } else {
          switch (r2) {
            case tf:
            case tp:
            case tn:
            case ta:
            case tr:
            case tu:
              ro(e10, t10, n2.children);
              return;
            case th:
              throw Error(a(343));
            case tl:
              e: {
                r2 = t10.blockedBoundary, i2 = t10.blockedSegment, o2 = n2.fallback, n2 = n2.children;
                var l2 = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: s2 = /* @__PURE__ */ new Set(), errorDigest: null }, u2 = t7(e10, i2.chunks.length, l2, i2.formatContext, false, false);
                i2.children.push(u2), i2.lastPushedText = false;
                var c2 = t7(e10, 0, null, i2.formatContext, false, false);
                c2.parentFlushed = true, t10.blockedBoundary = l2, t10.blockedSegment = c2;
                try {
                  if (rl(e10, t10, n2), c2.lastPushedText && c2.textEmbedded && c2.chunks.push(U), c2.status = 1, rd(l2, c2), 0 === l2.pendingTasks)
                    break e;
                } catch (h2) {
                  c2.status = 4, l2.forceClientRender = true, l2.errorDigest = re(e10, h2);
                } finally {
                  t10.blockedBoundary = r2, t10.blockedSegment = i2;
                }
                t10 = t6(e10, o2, r2, u2, s2, t10.legacyContext, t10.context, t10.treeContext), e10.pingedTasks.push(t10);
              }
              return;
          }
          if ("object" == typeof r2 && null !== r2)
            switch (r2.$$typeof) {
              case ts:
                if (n2 = rr(e10, t10, r2.render, n2, i2), 0 !== tz) {
                  r2 = t10.treeContext, t10.treeContext = tA(r2, 1, 0);
                  try {
                    ro(e10, t10, n2);
                  } finally {
                    t10.treeContext = r2;
                  }
                } else
                  ro(e10, t10, n2);
                return;
              case tc:
                n2 = ra(r2 = r2.type, n2), ri(e10, t10, r2, n2, i2);
                return;
              case ti:
                if (i2 = n2.children, r2 = r2._context, n2 = n2.value, o2 = r2._currentValue, r2._currentValue = n2, tx = n2 = { parent: s2 = tx, depth: null === s2 ? 0 : s2.depth + 1, context: r2, parentValue: o2, value: n2 }, t10.context = n2, ro(e10, t10, i2), null === (e10 = tx))
                  throw Error(a(403));
                n2 = e10.parentValue, e10.context._currentValue = n2 === tm ? e10.context._defaultValue : n2, e10 = tx = e10.parent, t10.context = e10;
                return;
              case to:
                n2 = (n2 = n2.children)(r2._currentValue), ro(e10, t10, n2);
                return;
              case td:
                n2 = ra(r2 = (i2 = r2._init)(r2._payload), n2), ri(e10, t10, r2, n2, void 0);
                return;
            }
          throw Error(a(130, null == r2 ? r2 : typeof r2, ""));
        }
      }
      function ro(e10, t10, r2) {
        if (t10.node = r2, "object" == typeof r2 && null !== r2) {
          switch (r2.$$typeof) {
            case te:
              ri(e10, t10, r2.type, r2.props, r2.ref);
              return;
            case tt:
              throw Error(a(257));
            case td:
              var n2 = r2._init;
              ro(e10, t10, r2 = n2(r2._payload));
              return;
          }
          if (T(r2)) {
            rs(e10, t10, r2);
            return;
          }
          if ((n2 = null === r2 || "object" != typeof r2 ? null : "function" == typeof (n2 = tg && r2[tg] || r2["@@iterator"]) ? n2 : null) && (n2 = n2.call(r2))) {
            if (!(r2 = n2.next()).done) {
              var i2 = [];
              do
                i2.push(r2.value), r2 = n2.next();
              while (!r2.done);
              rs(e10, t10, i2);
            }
            return;
          }
          throw Error(a(31, "[object Object]" === (e10 = Object.prototype.toString.call(r2)) ? "object with keys {" + Object.keys(r2).join(", ") + "}" : e10));
        }
        "string" == typeof r2 ? (n2 = t10.blockedSegment).lastPushedText = B(t10.blockedSegment.chunks, r2, e10.responseState, n2.lastPushedText) : "number" == typeof r2 && ((n2 = t10.blockedSegment).lastPushedText = B(t10.blockedSegment.chunks, "" + r2, e10.responseState, n2.lastPushedText));
      }
      function rs(e10, t10, r2) {
        for (var n2 = r2.length, a2 = 0; a2 < n2; a2++) {
          var i2 = t10.treeContext;
          t10.treeContext = tA(i2, n2, a2);
          try {
            rl(e10, t10, r2[a2]);
          } finally {
            t10.treeContext = i2;
          }
        }
      }
      function rl(e10, t10, r2) {
        var n2 = t10.blockedSegment.formatContext, a2 = t10.legacyContext, i2 = t10.context;
        try {
          return ro(e10, t10, r2);
        } catch (l2) {
          if (tJ(), "object" == typeof l2 && null !== l2 && "function" == typeof l2.then) {
            r2 = l2;
            var o2 = t10.blockedSegment, s2 = t7(e10, o2.chunks.length, null, o2.formatContext, o2.lastPushedText, true);
            o2.children.push(s2), o2.lastPushedText = false, e10 = t6(e10, t10.node, t10.blockedBoundary, s2, t10.abortSet, t10.legacyContext, t10.context, t10.treeContext).ping, r2.then(e10, e10), t10.blockedSegment.formatContext = n2, t10.legacyContext = a2, t10.context = i2, tR(i2);
          } else
            throw t10.blockedSegment.formatContext = n2, t10.legacyContext = a2, t10.context = i2, tR(i2), l2;
        }
      }
      function ru(e10) {
        var t10 = e10.blockedBoundary;
        (e10 = e10.blockedSegment).status = 3, rh(this, t10, e10);
      }
      function rc(e10, t10, r2) {
        var n2 = e10.blockedBoundary;
        e10.blockedSegment.status = 3, null === n2 ? (t10.allPendingTasks--, 2 !== t10.status && (t10.status = 2, null !== t10.destination && t10.destination.close())) : (n2.pendingTasks--, n2.forceClientRender || (n2.forceClientRender = true, e10 = void 0 === r2 ? Error(a(432)) : r2, n2.errorDigest = t10.onError(e10), n2.parentFlushed && t10.clientRenderedBoundaries.push(n2)), n2.fallbackAbortableTasks.forEach(function(e11) {
          return rc(e11, t10, r2);
        }), n2.fallbackAbortableTasks.clear(), t10.allPendingTasks--, 0 === t10.allPendingTasks && (n2 = t10.onAllReady)());
      }
      function rd(e10, t10) {
        if (0 === t10.chunks.length && 1 === t10.children.length && null === t10.children[0].boundary) {
          var r2 = t10.children[0];
          r2.id = t10.id, r2.parentFlushed = true, 1 === r2.status && rd(e10, r2);
        } else
          e10.completedSegments.push(t10);
      }
      function rh(e10, t10, r2) {
        if (null === t10) {
          if (r2.parentFlushed) {
            if (null !== e10.completedRootSegment)
              throw Error(a(389));
            e10.completedRootSegment = r2;
          }
          e10.pendingRootTasks--, 0 === e10.pendingRootTasks && (e10.onShellError = t5, (t10 = e10.onShellReady)());
        } else
          t10.pendingTasks--, t10.forceClientRender || (0 === t10.pendingTasks ? (r2.parentFlushed && 1 === r2.status && rd(t10, r2), t10.parentFlushed && e10.completedBoundaries.push(t10), t10.fallbackAbortableTasks.forEach(ru, e10), t10.fallbackAbortableTasks.clear()) : r2.parentFlushed && 1 === r2.status && (rd(t10, r2), 1 === t10.completedSegments.length && t10.parentFlushed && e10.partialBoundaries.push(t10)));
        e10.allPendingTasks--, 0 === e10.allPendingTasks && (e10 = e10.onAllReady)();
      }
      function rp(e10) {
        if (2 !== e10.status) {
          var t10 = tx, r2 = t4.current;
          t4.current = t2;
          var n2 = t3;
          t3 = e10.responseState;
          try {
            var a2, i2 = e10.pingedTasks;
            for (a2 = 0; a2 < i2.length; a2++) {
              var o2 = i2[a2], s2 = o2.blockedSegment;
              if (0 === s2.status) {
                tR(o2.context);
                try {
                  ro(e10, o2, o2.node), s2.lastPushedText && s2.textEmbedded && s2.chunks.push(U), o2.abortSet.delete(o2), s2.status = 1, rh(e10, o2.blockedBoundary, s2);
                } catch (d2) {
                  if (tJ(), "object" == typeof d2 && null !== d2 && "function" == typeof d2.then) {
                    var l2 = o2.ping;
                    d2.then(l2, l2);
                  } else {
                    o2.abortSet.delete(o2), s2.status = 4;
                    var u2 = o2.blockedBoundary, c2 = re(e10, d2);
                    null === u2 ? rt(e10, d2) : (u2.pendingTasks--, u2.forceClientRender || (u2.forceClientRender = true, u2.errorDigest = c2, u2.parentFlushed && e10.clientRenderedBoundaries.push(u2))), e10.allPendingTasks--, 0 === e10.allPendingTasks && (0, e10.onAllReady)();
                  }
                } finally {
                }
              }
            }
            i2.splice(0, a2), null !== e10.destination && rb(e10, e10.destination);
          } catch (h2) {
            re(e10, h2), rt(e10, h2);
          } finally {
            t3 = n2, t4.current = r2, r2 === t2 && tR(t10);
          }
        }
      }
      function rf(e10, t10, r2) {
        switch (r2.parentFlushed = true, r2.status) {
          case 0:
            var n2 = r2.id = e10.nextSegmentId++;
            return r2.lastPushedText = false, r2.textEmbedded = false, e10 = e10.responseState, s(t10, ep), s(t10, e10.placeholderPrefix), s(t10, e10 = d(n2.toString(16))), l(t10, ef);
          case 1:
            r2.status = 2;
            var i2 = true;
            n2 = r2.chunks;
            var o2 = 0;
            r2 = r2.children;
            for (var u2 = 0; u2 < r2.length; u2++) {
              for (i2 = r2[u2]; o2 < i2.index; o2++)
                s(t10, n2[o2]);
              i2 = rm(e10, t10, i2);
            }
            for (; o2 < n2.length - 1; o2++)
              s(t10, n2[o2]);
            return o2 < n2.length && (i2 = l(t10, n2[o2])), i2;
          default:
            throw Error(a(390));
        }
      }
      function rm(e10, t10, r2) {
        var n2 = r2.boundary;
        if (null === n2)
          return rf(e10, t10, r2);
        if (n2.parentFlushed = true, n2.forceClientRender)
          n2 = n2.errorDigest, l(t10, ev), s(t10, ex), n2 && (s(t10, eS), s(t10, d(R(n2))), s(t10, ew)), l(t10, e_), rf(e10, t10, r2);
        else if (0 < n2.pendingTasks) {
          n2.rootSegmentID = e10.nextSegmentId++, 0 < n2.completedSegments.length && e10.partialBoundaries.push(n2);
          var i2 = e10.responseState, o2 = i2.nextSuspenseID++;
          i2 = h(i2.boundaryPrefix + o2.toString(16)), n2 = n2.id = i2, eC(t10, e10.responseState, n2), rf(e10, t10, r2);
        } else if (n2.byteSize > e10.progressiveChunkSize)
          n2.rootSegmentID = e10.nextSegmentId++, e10.completedBoundaries.push(n2), eC(t10, e10.responseState, n2.id), rf(e10, t10, r2);
        else {
          if (l(t10, em), 1 !== (r2 = n2.completedSegments).length)
            throw Error(a(391));
          rm(e10, t10, r2[0]);
        }
        return l(t10, eb);
      }
      function rg(e10, t10, r2) {
        return eV(t10, e10.responseState, r2.formatContext, r2.id), rm(e10, t10, r2), eG(t10, r2.formatContext);
      }
      function ry(e10, t10, r2) {
        for (var n2 = r2.completedSegments, i2 = 0; i2 < n2.length; i2++)
          rv(e10, t10, r2, n2[i2]);
        if (n2.length = 0, e10 = e10.responseState, n2 = r2.id, r2 = r2.rootSegmentID, s(t10, e10.startInlineScript), e10.sentCompleteBoundaryFunction ? s(t10, eQ) : (e10.sentCompleteBoundaryFunction = true, s(t10, eK)), null === n2)
          throw Error(a(395));
        return r2 = d(r2.toString(16)), s(t10, n2), s(t10, e0), s(t10, e10.segmentPrefix), s(t10, r2), l(t10, e1);
      }
      function rv(e10, t10, r2, n2) {
        if (2 === n2.status)
          return true;
        var i2 = n2.id;
        if (-1 === i2) {
          if (-1 === (n2.id = r2.rootSegmentID))
            throw Error(a(392));
          return rg(e10, t10, n2);
        }
        return rg(e10, t10, n2), s(t10, (e10 = e10.responseState).startInlineScript), e10.sentCompleteSegmentFunction ? s(t10, eJ) : (e10.sentCompleteSegmentFunction = true, s(t10, eY)), s(t10, e10.segmentPrefix), s(t10, i2 = d(i2.toString(16))), s(t10, eZ), s(t10, e10.placeholderPrefix), s(t10, i2), l(t10, eX);
      }
      function rb(e10, t10) {
        i = new Uint8Array(512), o = 0;
        try {
          var r2 = e10.completedRootSegment;
          if (null !== r2 && 0 === e10.pendingRootTasks) {
            rm(e10, t10, r2), e10.completedRootSegment = null;
            var n2 = e10.responseState.bootstrapChunks;
            for (r2 = 0; r2 < n2.length - 1; r2++)
              s(t10, n2[r2]);
            r2 < n2.length && l(t10, n2[r2]);
          }
          var c2, h2 = e10.clientRenderedBoundaries;
          for (c2 = 0; c2 < h2.length; c2++) {
            var p2 = h2[c2];
            n2 = t10;
            var f2 = e10.responseState, m2 = p2.id, g2 = p2.errorDigest, y2 = p2.errorMessage, v2 = p2.errorComponentStack;
            if (s(n2, f2.startInlineScript), f2.sentClientRenderFunction ? s(n2, e3) : (f2.sentClientRenderFunction = true, s(n2, e2)), null === m2)
              throw Error(a(395));
            if (s(n2, m2), s(n2, e4), (g2 || y2 || v2) && (s(n2, e5), s(n2, d(e6(g2 || "")))), (y2 || v2) && (s(n2, e5), s(n2, d(e6(y2 || "")))), v2 && (s(n2, e5), s(n2, d(e6(v2)))), !l(n2, e8)) {
              e10.destination = null, c2++, h2.splice(0, c2);
              return;
            }
          }
          h2.splice(0, c2);
          var b2 = e10.completedBoundaries;
          for (c2 = 0; c2 < b2.length; c2++)
            if (!ry(e10, t10, b2[c2])) {
              e10.destination = null, c2++, b2.splice(0, c2);
              return;
            }
          b2.splice(0, c2), u(t10), i = new Uint8Array(512), o = 0;
          var x2 = e10.partialBoundaries;
          for (c2 = 0; c2 < x2.length; c2++) {
            var w2 = x2[c2];
            e: {
              h2 = e10, p2 = t10;
              var S2 = w2.completedSegments;
              for (f2 = 0; f2 < S2.length; f2++)
                if (!rv(h2, p2, w2, S2[f2])) {
                  f2++, S2.splice(0, f2);
                  var _2 = false;
                  break e;
                }
              S2.splice(0, f2), _2 = true;
            }
            if (!_2) {
              e10.destination = null, c2++, x2.splice(0, c2);
              return;
            }
          }
          x2.splice(0, c2);
          var C2 = e10.completedBoundaries;
          for (c2 = 0; c2 < C2.length; c2++)
            if (!ry(e10, t10, C2[c2])) {
              e10.destination = null, c2++, C2.splice(0, c2);
              return;
            }
          C2.splice(0, c2);
        } finally {
          u(t10), 0 === e10.allPendingTasks && 0 === e10.pingedTasks.length && 0 === e10.clientRenderedBoundaries.length && 0 === e10.completedBoundaries.length && t10.close();
        }
      }
      function rx(e10, t10) {
        try {
          var r2 = e10.abortableTasks;
          r2.forEach(function(r3) {
            return rc(r3, e10, t10);
          }), r2.clear(), null !== e10.destination && rb(e10, e10.destination);
        } catch (n2) {
          re(e10, n2), rt(e10, n2);
        }
      }
      t.renderToReadableStream = function(e10, t10) {
        return new Promise(function(r2, n2) {
          var a2, i2, o2 = new Promise(function(e11, t11) {
            i2 = e11, a2 = t11;
          }), s2 = t9(e10, F(t10 ? t10.identifierPrefix : void 0, t10 ? t10.nonce : void 0, t10 ? t10.bootstrapScriptContent : void 0, t10 ? t10.bootstrapScripts : void 0, t10 ? t10.bootstrapModules : void 0), N(t10 ? t10.namespaceURI : void 0), t10 ? t10.progressiveChunkSize : void 0, t10 ? t10.onError : void 0, i2, function() {
            var e11 = new ReadableStream({ type: "bytes", pull: function(e12) {
              if (1 === s2.status)
                s2.status = 2, p(e12, s2.fatalError);
              else if (2 !== s2.status && null === s2.destination) {
                s2.destination = e12;
                try {
                  rb(s2, e12);
                } catch (t11) {
                  re(s2, t11), rt(s2, t11);
                }
              }
            }, cancel: function() {
              rx(s2);
            } }, { highWaterMark: 0 });
            e11.allReady = o2, r2(e11);
          }, function(e11) {
            o2.catch(function() {
            }), n2(e11);
          }, a2);
          if (t10 && t10.signal) {
            var l2 = t10.signal, u2 = function() {
              rx(s2, l2.reason), l2.removeEventListener("abort", u2);
            };
            l2.addEventListener("abort", u2);
          }
          rp(s2);
        });
      }, t.version = "18.2.0";
    }, 762: (e, t, r) => {
      "use strict";
      var n, a;
      n = r(475), a = r(698), t.version = n.version, t.renderToString = n.renderToString, t.renderToStaticMarkup = n.renderToStaticMarkup, t.renderToNodeStream = n.renderToNodeStream, t.renderToStaticNodeStream = n.renderToStaticNodeStream, t.renderToReadableStream = a.renderToReadableStream;
    }, 251: (e, t, r) => {
      "use strict";
      var n, a = r(294), i = Symbol.for("react.element"), o = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: true, ref: true, __self: true, __source: true };
      function c(e2, t2, r2) {
        var n2, a2 = {}, o2 = null, c2 = null;
        for (n2 in void 0 !== r2 && (o2 = "" + r2), void 0 !== t2.key && (o2 = "" + t2.key), void 0 !== t2.ref && (c2 = t2.ref), t2)
          s.call(t2, n2) && !u.hasOwnProperty(n2) && (a2[n2] = t2[n2]);
        if (e2 && e2.defaultProps)
          for (n2 in t2 = e2.defaultProps)
            void 0 === a2[n2] && (a2[n2] = t2[n2]);
        return { $$typeof: i, type: e2, key: o2, ref: c2, props: a2, _owner: l.current };
      }
      t.jsx = c;
    }, 408: (e, t) => {
      "use strict";
      var r = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.iterator;
      function f(e2) {
        return null === e2 || "object" != typeof e2 ? null : "function" == typeof (e2 = p && e2[p] || e2["@@iterator"]) ? e2 : null;
      }
      var m = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } }, g = Object.assign, y = {};
      function v(e2, t2, r2) {
        this.props = e2, this.context = t2, this.refs = y, this.updater = r2 || m;
      }
      function b() {
      }
      function x(e2, t2, r2) {
        this.props = e2, this.context = t2, this.refs = y, this.updater = r2 || m;
      }
      v.prototype.isReactComponent = {}, v.prototype.setState = function(e2, t2) {
        if ("object" != typeof e2 && "function" != typeof e2 && null != e2)
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e2, t2, "setState");
      }, v.prototype.forceUpdate = function(e2) {
        this.updater.enqueueForceUpdate(this, e2, "forceUpdate");
      }, b.prototype = v.prototype;
      var w = x.prototype = new b();
      w.constructor = x, g(w, v.prototype), w.isPureReactComponent = true;
      var S = Array.isArray, _ = Object.prototype.hasOwnProperty, C = { current: null }, E = { key: true, ref: true, __self: true, __source: true };
      function R(e2, t2, n2) {
        var a2, i2 = {}, o2 = null, s2 = null;
        if (null != t2)
          for (a2 in void 0 !== t2.ref && (s2 = t2.ref), void 0 !== t2.key && (o2 = "" + t2.key), t2)
            _.call(t2, a2) && !E.hasOwnProperty(a2) && (i2[a2] = t2[a2]);
        var l2 = arguments.length - 2;
        if (1 === l2)
          i2.children = n2;
        else if (1 < l2) {
          for (var u2 = Array(l2), c2 = 0; c2 < l2; c2++)
            u2[c2] = arguments[c2 + 2];
          i2.children = u2;
        }
        if (e2 && e2.defaultProps)
          for (a2 in l2 = e2.defaultProps)
            void 0 === i2[a2] && (i2[a2] = l2[a2]);
        return { $$typeof: r, type: e2, key: o2, ref: s2, props: i2, _owner: C.current };
      }
      function P(e2, t2) {
        return { $$typeof: r, type: e2.type, key: t2, ref: e2.ref, props: e2.props, _owner: e2._owner };
      }
      function k(e2) {
        return "object" == typeof e2 && null !== e2 && e2.$$typeof === r;
      }
      function T(e2) {
        var t2 = { "=": "=0", ":": "=2" };
        return "$" + e2.replace(/[=:]/g, function(e3) {
          return t2[e3];
        });
      }
      var A = /\/+/g;
      function $(e2, t2) {
        return "object" == typeof e2 && null !== e2 && null != e2.key ? T("" + e2.key) : t2.toString(36);
      }
      function O(e2, t2, a2, i2, o2) {
        var s2 = typeof e2;
        ("undefined" === s2 || "boolean" === s2) && (e2 = null);
        var l2 = false;
        if (null === e2)
          l2 = true;
        else
          switch (s2) {
            case "string":
            case "number":
              l2 = true;
              break;
            case "object":
              switch (e2.$$typeof) {
                case r:
                case n:
                  l2 = true;
              }
          }
        if (l2)
          return o2 = o2(l2 = e2), e2 = "" === i2 ? "." + $(l2, 0) : i2, S(o2) ? (a2 = "", null != e2 && (a2 = e2.replace(A, "$&/") + "/"), O(o2, t2, a2, "", function(e3) {
            return e3;
          })) : null != o2 && (k(o2) && (o2 = P(o2, a2 + (!o2.key || l2 && l2.key === o2.key ? "" : ("" + o2.key).replace(A, "$&/") + "/") + e2)), t2.push(o2)), 1;
        if (l2 = 0, i2 = "" === i2 ? "." : i2 + ":", S(e2))
          for (var u2 = 0; u2 < e2.length; u2++) {
            s2 = e2[u2];
            var c2 = i2 + $(s2, u2);
            l2 += O(s2, t2, a2, c2, o2);
          }
        else if ("function" == typeof (c2 = f(e2)))
          for (e2 = c2.call(e2), u2 = 0; !(s2 = e2.next()).done; )
            c2 = i2 + $(s2 = s2.value, u2++), l2 += O(s2, t2, a2, c2, o2);
        else if ("object" === s2)
          throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === (t2 = String(e2)) ? "object with keys {" + Object.keys(e2).join(", ") + "}" : t2) + "). If you meant to render a collection of children, use an array instead.");
        return l2;
      }
      function I(e2, t2, r2) {
        if (null == e2)
          return e2;
        var n2 = [], a2 = 0;
        return O(e2, n2, "", "", function(e3) {
          return t2.call(r2, e3, a2++);
        }), n2;
      }
      function L(e2) {
        if (-1 === e2._status) {
          var t2 = e2._result;
          (t2 = t2()).then(function(t3) {
            (0 === e2._status || -1 === e2._status) && (e2._status = 1, e2._result = t3);
          }, function(t3) {
            (0 === e2._status || -1 === e2._status) && (e2._status = 2, e2._result = t3);
          }), -1 === e2._status && (e2._status = 0, e2._result = t2);
        }
        if (1 === e2._status)
          return e2._result.default;
        throw e2._result;
      }
      var j = { current: null }, M = { transition: null }, F = { ReactCurrentDispatcher: j, ReactCurrentBatchConfig: M, ReactCurrentOwner: C };
      t.Children = { map: I, forEach: function(e2, t2, r2) {
        I(e2, function() {
          t2.apply(this, arguments);
        }, r2);
      }, count: function(e2) {
        var t2 = 0;
        return I(e2, function() {
          t2++;
        }), t2;
      }, toArray: function(e2) {
        return I(e2, function(e3) {
          return e3;
        }) || [];
      }, only: function(e2) {
        if (!k(e2))
          throw Error("React.Children.only expected to receive a single React element child.");
        return e2;
      } }, t.Component = v, t.Fragment = a, t.Profiler = o, t.PureComponent = x, t.StrictMode = i, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F, t.cloneElement = function(e2, t2, n2) {
        if (null == e2)
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e2 + ".");
        var a2 = g({}, e2.props), i2 = e2.key, o2 = e2.ref, s2 = e2._owner;
        if (null != t2) {
          if (void 0 !== t2.ref && (o2 = t2.ref, s2 = C.current), void 0 !== t2.key && (i2 = "" + t2.key), e2.type && e2.type.defaultProps)
            var l2 = e2.type.defaultProps;
          for (u2 in t2)
            _.call(t2, u2) && !E.hasOwnProperty(u2) && (a2[u2] = void 0 === t2[u2] && void 0 !== l2 ? l2[u2] : t2[u2]);
        }
        var u2 = arguments.length - 2;
        if (1 === u2)
          a2.children = n2;
        else if (1 < u2) {
          l2 = Array(u2);
          for (var c2 = 0; c2 < u2; c2++)
            l2[c2] = arguments[c2 + 2];
          a2.children = l2;
        }
        return { $$typeof: r, type: e2.type, key: i2, ref: o2, props: a2, _owner: s2 };
      }, t.createContext = function(e2) {
        return (e2 = { $$typeof: l, _currentValue: e2, _currentValue2: e2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: s, _context: e2 }, e2.Consumer = e2;
      }, t.createElement = R, t.createFactory = function(e2) {
        var t2 = R.bind(null, e2);
        return t2.type = e2, t2;
      }, t.createRef = function() {
        return { current: null };
      }, t.forwardRef = function(e2) {
        return { $$typeof: u, render: e2 };
      }, t.isValidElement = k, t.lazy = function(e2) {
        return { $$typeof: h, _payload: { _status: -1, _result: e2 }, _init: L };
      }, t.memo = function(e2, t2) {
        return { $$typeof: d, type: e2, compare: void 0 === t2 ? null : t2 };
      }, t.startTransition = function(e2) {
        var t2 = M.transition;
        M.transition = {};
        try {
          e2();
        } finally {
          M.transition = t2;
        }
      }, t.unstable_act = function() {
        throw Error("act(...) is not supported in production builds of React.");
      }, t.useCallback = function(e2, t2) {
        return j.current.useCallback(e2, t2);
      }, t.useContext = function(e2) {
        return j.current.useContext(e2);
      }, t.useDebugValue = function() {
      }, t.useDeferredValue = function(e2) {
        return j.current.useDeferredValue(e2);
      }, t.useEffect = function(e2, t2) {
        return j.current.useEffect(e2, t2);
      }, t.useId = function() {
        return j.current.useId();
      }, t.useImperativeHandle = function(e2, t2, r2) {
        return j.current.useImperativeHandle(e2, t2, r2);
      }, t.useInsertionEffect = function(e2, t2) {
        return j.current.useInsertionEffect(e2, t2);
      }, t.useLayoutEffect = function(e2, t2) {
        return j.current.useLayoutEffect(e2, t2);
      }, t.useMemo = function(e2, t2) {
        return j.current.useMemo(e2, t2);
      }, t.useReducer = function(e2, t2, r2) {
        return j.current.useReducer(e2, t2, r2);
      }, t.useRef = function(e2) {
        return j.current.useRef(e2);
      }, t.useState = function(e2) {
        return j.current.useState(e2);
      }, t.useSyncExternalStore = function(e2, t2, r2) {
        return j.current.useSyncExternalStore(e2, t2, r2);
      }, t.useTransition = function() {
        return j.current.useTransition();
      }, t.version = "18.2.0";
    }, 294: (e, t, r) => {
      "use strict";
      e.exports = r(408);
    }, 893: (e, t, r) => {
      "use strict";
      e.exports = r(251);
    }, 475: (e) => {
      "use strict";
      e.exports = {};
    } }, (e) => {
      var t = e(e.s = 876);
      (_ENTRIES = "undefined" == typeof _ENTRIES ? {} : _ENTRIES)["middleware_pages/index"] = t;
    }]);
    index_func_default = function() {
      const module = { exports: {}, loaded: false };
      const fn = function(module2, exports) {
        var d = Object.defineProperty;
        var m = (e) => d(e, "__esModule", { value: true });
        var y = (e, r) => {
          m(e);
          for (var t in r)
            d(e, t, { get: r[t], enumerable: true });
        };
        y(exports, { default: () => x });
        function h(e) {
          let r = {};
          return e && e.forEach((t, i) => {
            r[i] = t, i.toLowerCase() === "set-cookie" && (r[i] = C(t));
          }), r;
        }
        function C(e) {
          let r = [], t = 0, i, a, p, n, s;
          function c() {
            for (; t < e.length && /\s/.test(e.charAt(t)); )
              t += 1;
            return t < e.length;
          }
          function o() {
            return a = e.charAt(t), a !== "=" && a !== ";" && a !== ",";
          }
          for (; t < e.length; ) {
            for (i = t, s = false; c(); )
              if (a = e.charAt(t), a === ",") {
                for (p = t, t += 1, c(), n = t; t < e.length && o(); )
                  t += 1;
                t < e.length && e.charAt(t) === "=" ? (s = true, t = n, r.push(e.substring(i, p)), i = t) : t = p + 1;
              } else
                t += 1;
            (!s || t >= e.length) && r.push(e.substring(i, e.length));
          }
          return r;
        }
        function x(e) {
          let r = e.staticRoutes.map((i) => ({ regexp: new RegExp(i.namedRegex), page: i.page })), t = e.dynamicRoutes?.map((i) => ({ regexp: new RegExp(i.namedRegex), page: i.page })) || [];
          return async function(a, p) {
            let n = new URL(a.url).pathname, s = {};
            if (e.nextConfig?.basePath && n.startsWith(e.nextConfig.basePath) && (n = n.replace(e.nextConfig.basePath, "") || "/"), e.nextConfig?.i18n)
              for (let o of e.nextConfig.i18n.locales) {
                let g = new RegExp(`^/${o}($|/)`, "i");
                if (n.match(g)) {
                  n = n.replace(g, "/") || "/";
                  break;
                }
              }
            for (let o of r)
              if (o.regexp.exec(n)) {
                s.name = o.page;
                break;
              }
            if (!s.name) {
              let o = R(n);
              for (let g of t || []) {
                if (o && !R(g.page))
                  continue;
                let f = g.regexp.exec(n);
                if (f) {
                  s = { name: g.page, params: f.groups };
                  break;
                }
              }
            }
            let c = await _ENTRIES[`middleware_${e.name}`].default.call({}, { request: { url: a.url, method: a.method, headers: h(a.headers), ip: u(a.headers, l.Ip), geo: { city: u(a.headers, l.City, true), country: u(a.headers, l.Country, true), latitude: u(a.headers, l.Latitude), longitude: u(a.headers, l.Longitude), region: u(a.headers, l.Region, true) }, nextConfig: e.nextConfig, page: s, body: a.body } });
            return p.waitUntil(c.waitUntil), c.response;
          };
        }
        function u(e, r, t = false) {
          let i = e.get(r) || void 0;
          return t && i ? decodeURIComponent(i) : i;
        }
        function R(e) {
          return e === "/api" || e.startsWith("/api/");
        }
        var l;
        (function(n) {
          n.City = "x-vercel-ip-city", n.Country = "x-vercel-ip-country", n.Ip = "x-real-ip", n.Latitude = "x-vercel-ip-latitude", n.Longitude = "x-vercel-ip-longitude", n.Region = "x-vercel-ip-country-region";
        })(l || (l = {}));
      };
      fn(module, module.exports);
      return module.exports;
    }.call({}).default(
      { "name": "pages/index", "staticRoutes": [{ "page": "/", "regex": "^/(?:/)?$", "routeKeys": {}, "namedRegex": "^/(?:/)?$" }], "dynamicRoutes": [], "nextConfig": { "basePath": "" } }
    );
  }
});

// ../../../../../private/var/folders/f2/wxtrqvqx3ms_nbk6mf806f3m0000gn/T/cqmlrxl0hgd/api/hello.func.js
var hello_func_exports = {};
__export(hello_func_exports, {
  default: () => hello_func_default
});
var _ENTRIES2, hello_func_default;
var init_hello_func = __esm({
  "../../../../../private/var/folders/f2/wxtrqvqx3ms_nbk6mf806f3m0000gn/T/cqmlrxl0hgd/api/hello.func.js"() {
    init_define_CONFIG();
    init_globals();
    init_functions_0az05mjkvxsf();
    _ENTRIES2 = {};
    (() => {
      "use strict";
      var __webpack_modules__ = {};
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) {
          return cachedModule.exports;
        }
        var module = __webpack_module_cache__[moduleId] = {
          exports: {}
        };
        var threw = true;
        try {
          __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
          threw = false;
        } finally {
          if (threw)
            delete __webpack_module_cache__[moduleId];
        }
        return module.exports;
      }
      __webpack_require__.m = __webpack_modules__;
      (() => {
        var deferred = [];
        __webpack_require__.O = (result, chunkIds, fn, priority) => {
          if (chunkIds) {
            priority = priority || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
              deferred[i] = deferred[i - 1];
            deferred[i] = [chunkIds, fn, priority];
            return;
          }
          var notFulfilled = Infinity;
          for (var i = 0; i < deferred.length; i++) {
            var [chunkIds, fn, priority] = deferred[i];
            var fulfilled = true;
            for (var j = 0; j < chunkIds.length; j++) {
              if ((priority & false || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => __webpack_require__.O[key](chunkIds[j]))) {
                chunkIds.splice(j--, 1);
              } else {
                fulfilled = false;
                if (priority < notFulfilled)
                  notFulfilled = priority;
              }
            }
            if (fulfilled) {
              deferred.splice(i--, 1);
              var r = fn();
              if (r !== void 0)
                result = r;
            }
          }
          return result;
        };
      })();
      (() => {
        __webpack_require__.n = (module) => {
          var getter = module && module.__esModule ? () => module["default"] : () => module;
          __webpack_require__.d(getter, { a: getter });
          return getter;
        };
      })();
      (() => {
        __webpack_require__.d = (exports, definition) => {
          for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
              Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
            }
          }
        };
      })();
      (() => {
        __webpack_require__.g = function() {
          if (typeof globalThis === "object")
            return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e) {
            if (typeof window === "object")
              return window;
          }
        }();
      })();
      (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
      })();
      (() => {
        __webpack_require__.r = (exports) => {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
          }
          Object.defineProperty(exports, "__esModule", { value: true });
        };
      })();
      (() => {
        var installedChunks = {
          993: 0
        };
        __webpack_require__.O.j = (chunkId) => installedChunks[chunkId] === 0;
        var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
          var [chunkIds, moreModules, runtime] = data;
          var moduleId, chunkId, i = 0;
          if (chunkIds.some((id) => installedChunks[id] !== 0)) {
            for (moduleId in moreModules) {
              if (__webpack_require__.o(moreModules, moduleId)) {
                __webpack_require__.m[moduleId] = moreModules[moduleId];
              }
            }
            if (runtime)
              var result = runtime(__webpack_require__);
          }
          if (parentChunkLoadingFunction)
            parentChunkLoadingFunction(data);
          for (; i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
              installedChunks[chunkId][0]();
            }
            installedChunks[chunkId] = 0;
          }
          return __webpack_require__.O(result);
        };
        var chunkLoadingGlobal = self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || [];
        chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
        chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
      })();
    })();
    (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[453], { 694: (e, t, r) => {
      var _a, _b;
      "use strict";
      r.r(t), r.d(t, { default: () => eo });
      class s extends Error {
        constructor({ page: e2 }) {
          super(`The middleware "${e2}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
        }
      }
      class n extends Error {
        constructor() {
          super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
        }
      }
      class o extends Error {
        constructor() {
          super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
        }
      }
      function i(e2) {
        let t2 = new Headers();
        for (let [r2, s2] of Object.entries(e2)) {
          let n2 = Array.isArray(s2) ? s2 : [s2];
          for (let o2 of n2)
            void 0 !== o2 && t2.append(r2, o2);
        }
        return t2;
      }
      function a(e2) {
        var t2, r2, s2, n2, o2, i2 = [], a2 = 0;
        function l2() {
          for (; a2 < e2.length && /\s/.test(e2.charAt(a2)); )
            a2 += 1;
          return a2 < e2.length;
        }
        for (; a2 < e2.length; ) {
          for (t2 = a2, o2 = false; l2(); )
            if ("," === (r2 = e2.charAt(a2))) {
              for (s2 = a2, a2 += 1, l2(), n2 = a2; a2 < e2.length && "=" !== (r2 = e2.charAt(a2)) && ";" !== r2 && "," !== r2; )
                a2 += 1;
              a2 < e2.length && "=" === e2.charAt(a2) ? (o2 = true, a2 = n2, i2.push(e2.substring(t2, s2)), t2 = a2) : a2 = s2 + 1;
            } else
              a2 += 1;
          (!o2 || a2 >= e2.length) && i2.push(e2.substring(t2, e2.length));
        }
        return i2;
      }
      function l(e2) {
        let t2 = {};
        if (e2)
          for (let [r2, s2] of e2.entries())
            t2[r2] = s2, "set-cookie" === r2.toLowerCase() && (t2[r2] = a(s2));
        return t2;
      }
      function h(e2) {
        try {
          return String(new URL(String(e2)));
        } catch (t2) {
          throw Error(`URL is malformed "${String(e2)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, { cause: t2 });
        }
      }
      let u = Symbol("response"), d = Symbol("passThrough"), c = Symbol("waitUntil");
      class p {
        constructor(e2) {
          __publicField(this, _a, []);
          __publicField(this, _b, false);
        }
        respondWith(e2) {
          this[u] || (this[u] = Promise.resolve(e2));
        }
        passThroughOnException() {
          this[d] = true;
        }
        waitUntil(e2) {
          this[c].push(e2);
        }
      }
      _a = c, _b = d;
      class f extends p {
        constructor(e2) {
          super(e2.request), this.sourcePage = e2.page;
        }
        get request() {
          throw new s({ page: this.sourcePage });
        }
        respondWith() {
          throw new s({ page: this.sourcePage });
        }
      }
      function g(e2, t2, r2) {
        let s2;
        if (e2)
          for (let n2 of (r2 && (r2 = r2.toLowerCase()), e2)) {
            var o2, i2;
            let a2 = null == (o2 = n2.domain) ? void 0 : o2.split(":")[0].toLowerCase();
            if (t2 === a2 || r2 === n2.defaultLocale.toLowerCase() || (null == (i2 = n2.locales) ? void 0 : i2.some((e3) => e3.toLowerCase() === r2))) {
              s2 = n2;
              break;
            }
          }
        return s2;
      }
      function m(e2) {
        return e2.replace(/\/$/, "") || "/";
      }
      function w(e2) {
        let t2 = e2.indexOf("#"), r2 = e2.indexOf("?"), s2 = r2 > -1 && (t2 < 0 || r2 < t2);
        return s2 || t2 > -1 ? { pathname: e2.substring(0, s2 ? r2 : t2), query: s2 ? e2.substring(r2, t2 > -1 ? t2 : void 0) : "", hash: t2 > -1 ? e2.slice(t2) : "" } : { pathname: e2, query: "", hash: "" };
      }
      function x(e2, t2) {
        if (!e2.startsWith("/") || !t2)
          return e2;
        let { pathname: r2, query: s2, hash: n2 } = w(e2);
        return `${t2}${r2}${s2}${n2}`;
      }
      function b(e2, t2) {
        if (!e2.startsWith("/") || !t2)
          return e2;
        let { pathname: r2, query: s2, hash: n2 } = w(e2);
        return `${r2}${t2}${s2}${n2}`;
      }
      function y(e2, t2) {
        if ("string" != typeof e2)
          return false;
        let { pathname: r2 } = w(e2);
        return r2 === t2 || r2.startsWith(t2 + "/");
      }
      function v(e2, t2, r2, s2) {
        return t2 && t2 !== r2 && (s2 || !y(e2.toLowerCase(), `/${t2.toLowerCase()}`) && !y(e2.toLowerCase(), "/api")) ? x(e2, `/${t2}`) : e2;
      }
      function S(e2) {
        let t2 = v(e2.pathname, e2.locale, e2.buildId ? void 0 : e2.defaultLocale, e2.ignorePrefix);
        return (e2.buildId || !e2.trailingSlash) && (t2 = m(t2)), e2.buildId && (t2 = b(x(t2, `/_next/data/${e2.buildId}`), "/" === e2.pathname ? "index.json" : ".json")), t2 = x(t2, e2.basePath), !e2.buildId && e2.trailingSlash ? t2.endsWith("/") ? t2 : b(t2, "/") : m(t2);
      }
      function _(e2, t2) {
        var r2;
        return null == (r2 = !Array.isArray(null == t2 ? void 0 : t2.host) && (null == t2 ? void 0 : t2.host) || e2.hostname) ? void 0 : r2.split(":")[0].toLowerCase();
      }
      function L(e2, t2) {
        let r2;
        let s2 = e2.split("/");
        return (t2 || []).some((t3) => !!s2[1] && s2[1].toLowerCase() === t3.toLowerCase() && (r2 = t3, s2.splice(1, 1), e2 = s2.join("/") || "/", true)), { pathname: e2, detectedLocale: r2 };
      }
      function C(e2, t2) {
        if (y(e2, t2)) {
          let r2 = e2.slice(t2.length);
          return r2.startsWith("/") ? r2 : `/${r2}`;
        }
        return e2;
      }
      function $(e2, t2) {
        var r2;
        let { basePath: s2, i18n: n2, trailingSlash: o2 } = null != (r2 = t2.nextConfig) ? r2 : {}, i2 = { pathname: e2, trailingSlash: "/" !== e2 ? e2.endsWith("/") : o2 };
        if (s2 && y(i2.pathname, s2) && (i2.pathname = C(i2.pathname, s2), i2.basePath = s2), true === t2.parseData && i2.pathname.startsWith("/_next/data/") && i2.pathname.endsWith(".json")) {
          let a2 = i2.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/"), l2 = a2[0];
          i2.pathname = "index" !== a2[1] ? `/${a2.slice(1).join("/")}` : "/", i2.buildId = l2;
        }
        if (n2) {
          let h2 = L(i2.pathname, n2.locales);
          i2.locale = null == h2 ? void 0 : h2.detectedLocale, i2.pathname = (null == h2 ? void 0 : h2.pathname) || i2.pathname;
        }
        return i2;
      }
      let P = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;
      function q(e2, t2) {
        return new URL(String(e2).replace(P, "localhost"), t2 && String(t2).replace(P, "localhost"));
      }
      let R = Symbol("NextURLInternal");
      class j {
        constructor(e2, t2, r2) {
          let s2, n2;
          "object" == typeof t2 && "pathname" in t2 || "string" == typeof t2 ? (s2 = t2, n2 = r2 || {}) : n2 = r2 || t2 || {}, this[R] = { url: q(e2, s2 ?? n2.base), options: n2, basePath: "" }, this.analyzeUrl();
        }
        analyzeUrl() {
          var e2, t2, r2, s2, n2;
          let o2 = $(this[R].url.pathname, { nextConfig: this[R].options.nextConfig, parseData: true });
          this[R].domainLocale = g(null == (e2 = this[R].options.nextConfig) ? void 0 : null == (t2 = e2.i18n) ? void 0 : t2.domains, _(this[R].url, this[R].options.headers));
          let i2 = (null == (r2 = this[R].domainLocale) ? void 0 : r2.defaultLocale) || (null == (s2 = this[R].options.nextConfig) ? void 0 : null == (n2 = s2.i18n) ? void 0 : n2.defaultLocale);
          this[R].url.pathname = o2.pathname, this[R].defaultLocale = i2, this[R].basePath = o2.basePath ?? "", this[R].buildId = o2.buildId, this[R].locale = o2.locale ?? i2, this[R].trailingSlash = o2.trailingSlash;
        }
        formatPathname() {
          return S({ basePath: this[R].basePath, buildId: this[R].buildId, defaultLocale: this[R].options.forceLocale ? void 0 : this[R].defaultLocale, locale: this[R].locale, pathname: this[R].url.pathname, trailingSlash: this[R].trailingSlash });
        }
        formatSearch() {
          return this[R].url.search;
        }
        get buildId() {
          return this[R].buildId;
        }
        set buildId(e2) {
          this[R].buildId = e2;
        }
        get locale() {
          return this[R].locale ?? "";
        }
        set locale(e2) {
          var t2, r2;
          if (!this[R].locale || !(null == (t2 = this[R].options.nextConfig) ? void 0 : null == (r2 = t2.i18n) ? void 0 : r2.locales.includes(e2)))
            throw TypeError(`The NextURL configuration includes no locale "${e2}"`);
          this[R].locale = e2;
        }
        get defaultLocale() {
          return this[R].defaultLocale;
        }
        get domainLocale() {
          return this[R].domainLocale;
        }
        get searchParams() {
          return this[R].url.searchParams;
        }
        get host() {
          return this[R].url.host;
        }
        set host(e2) {
          this[R].url.host = e2;
        }
        get hostname() {
          return this[R].url.hostname;
        }
        set hostname(e2) {
          this[R].url.hostname = e2;
        }
        get port() {
          return this[R].url.port;
        }
        set port(e2) {
          this[R].url.port = e2;
        }
        get protocol() {
          return this[R].url.protocol;
        }
        set protocol(e2) {
          this[R].url.protocol = e2;
        }
        get href() {
          let e2 = this.formatPathname(), t2 = this.formatSearch();
          return `${this.protocol}//${this.host}${e2}${t2}${this.hash}`;
        }
        set href(e2) {
          this[R].url = q(e2), this.analyzeUrl();
        }
        get origin() {
          return this[R].url.origin;
        }
        get pathname() {
          return this[R].url.pathname;
        }
        set pathname(e2) {
          this[R].url.pathname = e2;
        }
        get hash() {
          return this[R].url.hash;
        }
        set hash(e2) {
          this[R].url.hash = e2;
        }
        get search() {
          return this[R].url.search;
        }
        set search(e2) {
          this[R].url.search = e2;
        }
        get password() {
          return this[R].url.password;
        }
        set password(e2) {
          this[R].url.password = e2;
        }
        get username() {
          return this[R].url.username;
        }
        set username(e2) {
          this[R].url.username = e2;
        }
        get basePath() {
          return this[R].basePath;
        }
        set basePath(e2) {
          this[R].basePath = e2.startsWith("/") ? e2 : `/${e2}`;
        }
        toString() {
          return this.href;
        }
        toJSON() {
          return this.href;
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { href: this.href, origin: this.origin, protocol: this.protocol, username: this.username, password: this.password, host: this.host, hostname: this.hostname, port: this.port, pathname: this.pathname, search: this.search, searchParams: this.searchParams, hash: this.hash };
        }
        clone() {
          return new j(String(this), this[R].options);
        }
      }
      let I = ["strict", "lax", "none"];
      function k(e2) {
        return e2 = e2.toLowerCase(), I.includes(e2) ? e2 : void 0;
      }
      function E(e2) {
        let t2 = {};
        for (let r2 in e2)
          e2[r2] && (t2[r2] = e2[r2]);
        return t2;
      }
      function U(e2) {
        let t2 = ["path" in e2 && e2.path && `Path=${e2.path}`, "expires" in e2 && e2.expires && `Expires=${e2.expires.toUTCString()}`, "maxAge" in e2 && e2.maxAge && `Max-Age=${e2.maxAge}`, "domain" in e2 && e2.domain && `Domain=${e2.domain}`, "secure" in e2 && e2.secure && "Secure", "httpOnly" in e2 && e2.httpOnly && "HttpOnly", "sameSite" in e2 && e2.sameSite && `SameSite=${e2.sameSite}`].filter(Boolean);
        return `${e2.name}=${encodeURIComponent(e2.value ?? "")}; ${t2.join("; ")}`;
      }
      function A(e2) {
        let t2 = /* @__PURE__ */ new Map();
        for (let r2 of e2.split(/; */)) {
          if (!r2)
            continue;
          let [s2, n2] = r2.split("=", 2);
          t2.set(s2, decodeURIComponent(n2 ?? "true"));
        }
        return t2;
      }
      function T(e2) {
        if (!e2)
          return;
        let [[t2, r2], ...s2] = A(e2), { domain: n2, expires: o2, httponly: i2, maxage: a2, path: l2, samesite: h2, secure: u2 } = Object.fromEntries(s2.map(([e3, t3]) => [e3.toLowerCase(), t3])), d2 = { name: t2, value: decodeURIComponent(r2), domain: n2, ...o2 && { expires: new Date(o2) }, ...i2 && { httpOnly: true }, ..."string" == typeof a2 && { maxAge: Number(a2) }, path: l2, ...h2 && { sameSite: k(h2) }, ...u2 && { secure: true } };
        return E(d2);
      }
      class O {
        constructor(e2) {
          __publicField(this, "_parsed", /* @__PURE__ */ new Map());
          this._headers = e2;
          let t2 = e2.get("cookie");
          if (t2) {
            let r2 = A(t2);
            for (let [s2, n2] of r2)
              this._parsed.set(s2, { name: s2, value: n2 });
          }
        }
        [Symbol.iterator]() {
          return this._parsed[Symbol.iterator]();
        }
        get size() {
          return this._parsed.size;
        }
        get(...e2) {
          let t2 = "string" == typeof e2[0] ? e2[0] : e2[0].name;
          return this._parsed.get(t2);
        }
        getAll(...e2) {
          var t2;
          let r2 = Array.from(this._parsed);
          if (!e2.length)
            return r2.map(([e3, t3]) => t3);
          let s2 = "string" == typeof e2[0] ? e2[0] : null == (t2 = e2[0]) ? void 0 : t2.name;
          return r2.filter(([e3]) => e3 === s2).map(([e3, t3]) => t3);
        }
        has(e2) {
          return this._parsed.has(e2);
        }
        set(...e2) {
          let [t2, r2] = 1 === e2.length ? [e2[0].name, e2[0].value] : e2, s2 = this._parsed;
          return s2.set(t2, { name: t2, value: r2 }), this._headers.set("cookie", Array.from(s2).map(([e3, t3]) => U(t3)).join("; ")), this;
        }
        delete(e2) {
          let t2 = this._parsed, r2 = Array.isArray(e2) ? e2.map((e3) => t2.delete(e3)) : t2.delete(e2);
          return this._headers.set("cookie", Array.from(t2).map(([e3, t3]) => U(t3)).join("; ")), r2;
        }
        clear() {
          return this.delete(Array.from(this._parsed.keys())), this;
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
        }
      }
      function N(e2, t2) {
        for (let [, r2] of (t2.delete("set-cookie"), e2)) {
          let s2 = U(r2);
          t2.append("set-cookie", s2);
        }
      }
      function D(e2 = { name: "", value: "" }) {
        return e2.maxAge && (e2.expires = new Date(Date.now() + 1e3 * e2.maxAge)), (null === e2.path || void 0 === e2.path) && (e2.path = "/"), e2;
      }
      class W {
        constructor(e2) {
          __publicField(this, "_parsed", /* @__PURE__ */ new Map());
          this._headers = e2;
          let t2 = this._headers.getAll("set-cookie");
          for (let r2 of t2) {
            let s2 = T(r2);
            s2 && this._parsed.set(s2.name, s2);
          }
        }
        get(...e2) {
          let t2 = "string" == typeof e2[0] ? e2[0] : e2[0].name;
          return this._parsed.get(t2);
        }
        getAll(...e2) {
          var t2;
          let r2 = Array.from(this._parsed.values());
          if (!e2.length)
            return r2;
          let s2 = "string" == typeof e2[0] ? e2[0] : null == (t2 = e2[0]) ? void 0 : t2.name;
          return r2.filter((e3) => e3.name === s2);
        }
        set(...e2) {
          let [t2, r2, s2] = 1 === e2.length ? [e2[0].name, e2[0].value, e2[0]] : e2, n2 = this._parsed;
          return n2.set(t2, D({ name: t2, value: r2, ...s2 })), N(n2, this._headers), this;
        }
        delete(...e2) {
          let t2 = "string" == typeof e2[0] ? e2[0] : e2[0].name;
          return this.set({ name: t2, value: "", expires: new Date(0) });
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
        }
      }
      let H = Symbol("internal request");
      class M extends Request {
        constructor(e2, t2 = {}) {
          let r2 = "string" != typeof e2 && "url" in e2 ? e2.url : String(e2);
          h(r2), super(r2, t2), this[H] = { cookies: new O(this.headers), geo: t2.geo || {}, ip: t2.ip, url: new j(r2, { headers: l(this.headers), nextConfig: t2.nextConfig }) };
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { cookies: this.cookies, geo: this.geo, ip: this.ip, nextUrl: this.nextUrl, url: this.url, bodyUsed: this.bodyUsed, cache: this.cache, credentials: this.credentials, destination: this.destination, headers: Object.fromEntries(this.headers), integrity: this.integrity, keepalive: this.keepalive, method: this.method, mode: this.mode, redirect: this.redirect, referrer: this.referrer, referrerPolicy: this.referrerPolicy, signal: this.signal };
        }
        get cookies() {
          return this[H].cookies;
        }
        get geo() {
          return this[H].geo;
        }
        get ip() {
          return this[H].ip;
        }
        get nextUrl() {
          return this[H].url;
        }
        get page() {
          throw new n();
        }
        get ua() {
          throw new o();
        }
        get url() {
          return this[H].url.toString();
        }
      }
      let z = Symbol("internal response"), F = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
      function J(e2, t2) {
        var r2;
        if (null == e2 ? void 0 : null == (r2 = e2.request) ? void 0 : r2.headers) {
          if (!(e2.request.headers instanceof Headers))
            throw Error("request.headers must be an instance of Headers");
          let s2 = [];
          for (let [n2, o2] of e2.request.headers)
            t2.set("x-middleware-request-" + n2, o2), s2.push(n2);
          t2.set("x-middleware-override-headers", s2.join(","));
        }
      }
      class B extends Response {
        constructor(e2, t2 = {}) {
          super(e2, t2), this[z] = { cookies: new W(this.headers), url: t2.url ? new j(t2.url, { headers: l(this.headers), nextConfig: t2.nextConfig }) : void 0 };
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { cookies: this.cookies, url: this.url, body: this.body, bodyUsed: this.bodyUsed, headers: Object.fromEntries(this.headers), ok: this.ok, redirected: this.redirected, status: this.status, statusText: this.statusText, type: this.type };
        }
        get cookies() {
          return this[z].cookies;
        }
        static json(e2, t2) {
          let r2 = Response.json(e2, t2);
          return new B(r2.body, r2);
        }
        static redirect(e2, t2) {
          let r2 = "number" == typeof t2 ? t2 : (null == t2 ? void 0 : t2.status) ?? 307;
          if (!F.has(r2))
            throw RangeError('Failed to execute "redirect" on "response": Invalid status code');
          let s2 = "object" == typeof t2 ? t2 : {}, n2 = new Headers(null == s2 ? void 0 : s2.headers);
          return n2.set("Location", h(e2)), new B(null, { ...s2, headers: n2, status: r2 });
        }
        static rewrite(e2, t2) {
          let r2 = new Headers(null == t2 ? void 0 : t2.headers);
          return r2.set("x-middleware-rewrite", h(e2)), J(t2, r2), new B(null, { ...t2, headers: r2 });
        }
        static next(e2) {
          let t2 = new Headers(null == e2 ? void 0 : e2.headers);
          return t2.set("x-middleware-next", "1"), J(e2, t2), new B(null, { ...e2, headers: t2 });
        }
      }
      function G(e2, t2) {
        let r2 = "string" == typeof t2 ? new URL(t2) : t2, s2 = new URL(e2, t2), n2 = `${r2.protocol}//${r2.host}`;
        return `${s2.protocol}//${s2.host}` === n2 ? s2.toString().replace(n2, "") : s2.toString();
      }
      let K = ["__nextFallback", "__nextLocale", "__nextDefaultLocale", "__nextIsNotFound"], Q = ["__nextDataReq"];
      function V(e2, t2) {
        for (let r2 of K)
          e2.delete(r2);
        if (t2)
          for (let s2 of Q)
            e2.delete(s2);
        return e2;
      }
      function X(e2, t2) {
        return t2 ? e2.replace(/\.rsc($|\?)/, "") : e2;
      }
      class Y extends M {
        constructor(e2) {
          super(e2.input, e2.init), this.sourcePage = e2.page;
        }
        get request() {
          throw new s({ page: this.sourcePage });
        }
        respondWith() {
          throw new s({ page: this.sourcePage });
        }
        waitUntil() {
          throw new s({ page: this.sourcePage });
        }
      }
      let Z = [["RSC"], ["Next-Router-State-Tree"], ["Next-Router-Prefetch"], ["x-vercel-sc-headers"]];
      async function ee(e2) {
        let t2 = void 0 !== self.__BUILD_MANIFEST;
        e2.request.url = X(e2.request.url, true);
        let r2 = new j(e2.request.url, { headers: e2.request.headers, nextConfig: e2.request.nextConfig }), s2 = r2.buildId;
        r2.buildId = "";
        let n2 = e2.request.headers["x-nextjs-data"];
        n2 && "/index" === r2.pathname && (r2.pathname = "/");
        let o2 = i(e2.request.headers);
        if (!t2)
          for (let a2 of Z)
            o2.delete(a2.toString().toLowerCase());
        V(r2.searchParams, true);
        let l2 = new Y({ page: e2.page, input: String(r2), init: { body: e2.request.body, geo: e2.request.geo, headers: o2, ip: e2.request.ip, method: e2.request.method, nextConfig: e2.request.nextConfig } });
        n2 && Object.defineProperty(l2, "__isData", { enumerable: false, value: true });
        let h2 = new f({ request: l2, page: e2.page }), u2 = await e2.handler(l2, h2);
        if (u2 && !(u2 instanceof Response))
          throw TypeError("Expected an instance of Response to be returned");
        let d2 = null == u2 ? void 0 : u2.headers.get("x-middleware-rewrite");
        if (u2 && d2) {
          let p2 = new j(d2, { forceLocale: true, headers: e2.request.headers, nextConfig: e2.request.nextConfig });
          p2.host === l2.nextUrl.host && (p2.buildId = s2 || p2.buildId, u2.headers.set("x-middleware-rewrite", String(p2))), n2 && u2.headers.set("x-nextjs-rewrite", G(String(p2), String(r2)));
        }
        let g2 = null == u2 ? void 0 : u2.headers.get("Location");
        if (u2 && g2) {
          let m2 = new j(g2, { forceLocale: false, headers: e2.request.headers, nextConfig: e2.request.nextConfig });
          u2 = new Response(u2.body, u2), m2.host === l2.nextUrl.host && (m2.buildId = s2 || m2.buildId, u2.headers.set("Location", String(m2))), n2 && (u2.headers.delete("Location"), u2.headers.set("x-nextjs-redirect", G(String(m2), String(r2))));
        }
        return { response: u2 || B.next(), waitUntil: Promise.all(h2[c]) };
      }
      function et(e2) {
        return `The edge runtime does not support Node.js '${e2}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
      }
      function er(e2) {
        let t2 = new Proxy(function() {
        }, { get(t3, r2) {
          if ("then" === r2)
            return {};
          throw Error(et(e2));
        }, construct() {
          throw Error(et(e2));
        }, apply(r2, s2, n2) {
          if ("function" == typeof n2[0])
            return n2[0](t2);
          throw Error(et(e2));
        } });
        return new Proxy({}, { get: () => t2 });
      }
      process !== r.g.process && (process.env = r.g.process.env, r.g.process = process), Object.defineProperty(globalThis, "__import_unsupported", { value: er, enumerable: false, configurable: true });
      var es = r(737), en = es.middleware || es.default;
      if ("function" != typeof en)
        throw Error('The Edge Function "pages/api/hello" must export a `default` function');
      function eo(e2) {
        return ee({ ...e2, page: "/api/hello", handler: en });
      }
    }, 737: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { config: () => s, default: () => n });
      let s = { runtime: "experimental-edge" };
      async function n(e2) {
        return new Response(JSON.stringify({ name: "John Doe" }), { status: 200, headers: { "Content-Type": "application/json" } });
      }
    } }, (e) => {
      var t = e(e.s = 694);
      (_ENTRIES2 = "undefined" == typeof _ENTRIES2 ? {} : _ENTRIES2)["middleware_pages/api/hello"] = t;
    }]);
    hello_func_default = function() {
      const module = { exports: {}, loaded: false };
      const fn = function(module2, exports) {
        var d = Object.defineProperty;
        var m = (e) => d(e, "__esModule", { value: true });
        var y = (e, r) => {
          m(e);
          for (var t in r)
            d(e, t, { get: r[t], enumerable: true });
        };
        y(exports, { default: () => x });
        function h(e) {
          let r = {};
          return e && e.forEach((t, i) => {
            r[i] = t, i.toLowerCase() === "set-cookie" && (r[i] = C(t));
          }), r;
        }
        function C(e) {
          let r = [], t = 0, i, a, p, n, s;
          function c() {
            for (; t < e.length && /\s/.test(e.charAt(t)); )
              t += 1;
            return t < e.length;
          }
          function o() {
            return a = e.charAt(t), a !== "=" && a !== ";" && a !== ",";
          }
          for (; t < e.length; ) {
            for (i = t, s = false; c(); )
              if (a = e.charAt(t), a === ",") {
                for (p = t, t += 1, c(), n = t; t < e.length && o(); )
                  t += 1;
                t < e.length && e.charAt(t) === "=" ? (s = true, t = n, r.push(e.substring(i, p)), i = t) : t = p + 1;
              } else
                t += 1;
            (!s || t >= e.length) && r.push(e.substring(i, e.length));
          }
          return r;
        }
        function x(e) {
          let r = e.staticRoutes.map((i) => ({ regexp: new RegExp(i.namedRegex), page: i.page })), t = e.dynamicRoutes?.map((i) => ({ regexp: new RegExp(i.namedRegex), page: i.page })) || [];
          return async function(a, p) {
            let n = new URL(a.url).pathname, s = {};
            if (e.nextConfig?.basePath && n.startsWith(e.nextConfig.basePath) && (n = n.replace(e.nextConfig.basePath, "") || "/"), e.nextConfig?.i18n)
              for (let o of e.nextConfig.i18n.locales) {
                let g = new RegExp(`^/${o}($|/)`, "i");
                if (n.match(g)) {
                  n = n.replace(g, "/") || "/";
                  break;
                }
              }
            for (let o of r)
              if (o.regexp.exec(n)) {
                s.name = o.page;
                break;
              }
            if (!s.name) {
              let o = R(n);
              for (let g of t || []) {
                if (o && !R(g.page))
                  continue;
                let f = g.regexp.exec(n);
                if (f) {
                  s = { name: g.page, params: f.groups };
                  break;
                }
              }
            }
            let c = await _ENTRIES2[`middleware_${e.name}`].default.call({}, { request: { url: a.url, method: a.method, headers: h(a.headers), ip: u(a.headers, l.Ip), geo: { city: u(a.headers, l.City, true), country: u(a.headers, l.Country, true), latitude: u(a.headers, l.Latitude), longitude: u(a.headers, l.Longitude), region: u(a.headers, l.Region, true) }, nextConfig: e.nextConfig, page: s, body: a.body } });
            return p.waitUntil(c.waitUntil), c.response;
          };
        }
        function u(e, r, t = false) {
          let i = e.get(r) || void 0;
          return t && i ? decodeURIComponent(i) : i;
        }
        function R(e) {
          return e === "/api" || e.startsWith("/api/");
        }
        var l;
        (function(n) {
          n.City = "x-vercel-ip-city", n.Country = "x-vercel-ip-country", n.Ip = "x-real-ip", n.Latitude = "x-vercel-ip-latitude", n.Longitude = "x-vercel-ip-longitude", n.Region = "x-vercel-ip-country-region";
        })(l || (l = {}));
      };
      fn(module, module.exports);
      return module.exports;
    }.call({}).default(
      { "name": "pages/api/hello", "staticRoutes": [{ "page": "/", "regex": "^/(?:/)?$", "routeKeys": {}, "namedRegex": "^/(?:/)?$" }], "dynamicRoutes": [], "nextConfig": { "basePath": "" } }
    );
  }
});

// ../../../../../var/folders/f2/wxtrqvqx3ms_nbk6mf806f3m0000gn/T/functions-0az05mjkvxsf.js
var __FUNCTIONS__, __MIDDLEWARE__;
var init_functions_0az05mjkvxsf = __esm({
  "../../../../../var/folders/f2/wxtrqvqx3ms_nbk6mf806f3m0000gn/T/functions-0az05mjkvxsf.js"() {
    __FUNCTIONS__ = { "index": { matchers: [{ "regexp": "^/$" }], entrypoint: (init_index_func(), __toCommonJS(index_func_exports)) }, "api/hello": { matchers: [{ "regexp": "^/api/hello$" }], entrypoint: (init_hello_func(), __toCommonJS(hello_func_exports)) } };
    __MIDDLEWARE__ = {};
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    init_define_CONFIG();
    init_globals();
    init_functions_0az05mjkvxsf();
    exports.parse = parse2;
    exports.serialize = serialize;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse2(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var dec = opt.decode || decode;
      var index = 0;
      while (index < str.length) {
        var eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key = str.slice(index, eqIdx).trim();
        if (void 0 === obj[key]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key] = tryDecode(val, dec);
        }
        index = endIdx + 1;
      }
      return obj;
    }
    function serialize(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/@cloudflare/next-on-pages/templates/_worker.js/index.ts
init_define_CONFIG();
init_globals();
init_functions_0az05mjkvxsf();
var import_cookie = __toESM(require_cookie());
var hasField = ({
  request,
  url,
  cookies
}, has) => {
  switch (has.type) {
    case "host": {
      return url.host === has.value;
    }
    case "header": {
      if (has.value !== void 0) {
        return request.headers.get(has.key)?.match(has.value);
      }
      return request.headers.has(has.key);
    }
    case "cookie": {
      const cookie = cookies[has.key];
      if (has.value !== void 0) {
        return cookie?.match(has.value);
      }
      return cookie !== void 0;
    }
    case "query": {
      if (has.value !== void 0) {
        return url.searchParams.get(has.key)?.match(has.value);
      }
      return url.searchParams.has(has.key);
    }
  }
};
var routesMatcher = ({ request }, routes) => {
  const url = new URL(request.url);
  const cookies = (0, import_cookie.parse)(request.headers.get("cookie") || "");
  const matchingRoutes = [];
  for (const route of routes || []) {
    if ("methods" in route) {
      const requestMethod = request.method.toLowerCase();
      const foundMatch = route.methods.find(
        (method) => method.toLowerCase() === requestMethod
      );
      if (!foundMatch) {
        continue;
      }
    }
    if ("has" in route) {
      const okay = route.has.every(
        (has) => hasField({ request, url, cookies }, has)
      );
      if (!okay) {
        continue;
      }
    }
    if ("missing" in route) {
      const notOkay = route.missing.find(
        (has) => hasField({ request, url, cookies }, has)
      );
      if (notOkay) {
        continue;
      }
    }
    let caseSensitive = false;
    if ("caseSensitive" in route && route.caseSensitive) {
      caseSensitive = true;
    }
    if ("src" in route) {
      const regExp = new RegExp(route.src, caseSensitive ? void 0 : "i");
      const match = url.pathname.match(regExp);
      if (match) {
        matchingRoutes.push(route);
      }
    } else {
      matchingRoutes.push(route);
    }
  }
  return matchingRoutes;
};
var worker_default = {
  async fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    const routes = routesMatcher({ request }, define_CONFIG_default.routes);
    for (const route of routes) {
      if ("middlewarePath" in route && route.middlewarePath in __MIDDLEWARE__) {
        return await __MIDDLEWARE__[route.middlewarePath].entrypoint.default(
          request,
          context
        );
      }
    }
    for (const { matchers, entrypoint } of Object.values(__FUNCTIONS__)) {
      let found = false;
      for (const matcher of matchers) {
        if (matcher.regexp) {
          const regexp = new RegExp(matcher?.regexp);
          if (pathname.match(regexp) || `${pathname}/page`.replace("//page", "/page").match(regexp)) {
            found = true;
            break;
          }
        }
      }
      if (found) {
        return entrypoint.default(request, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  worker_default as default,
  routesMatcher
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/*!
* cookie
* Copyright(c) 2012-2014 Roman Shtylman
* Copyright(c) 2015 Douglas Christopher Wilson
* MIT Licensed
*/
/**
* @license React
* react-dom-server.browser.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
