/*! For license information please see bundle.83a9c93fdfb467be2329.js.LICENSE.txt */
(() => {
  var e = {
      168: () => {
        function e(t) {
          return (
            (e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            e(t)
          );
        }
        function t(e) {
          var i = "function" == typeof Map ? new Map() : void 0;
          return (
            (t = function (e) {
              if (
                null === e ||
                !(function (e) {
                  try {
                    return (
                      -1 !== Function.toString.call(e).indexOf("[native code]")
                    );
                  } catch (t) {
                    return "function" == typeof e;
                  }
                })(e)
              )
                return e;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== i) {
                if (i.has(e)) return i.get(e);
                i.set(e, t);
              }
              function t() {
                return (function (e, t, o) {
                  if (n()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, t);
                  var a = new (e.bind.apply(e, i))();
                  return o && r(a, o.prototype), a;
                })(e, arguments, o(this).constructor);
              }
              return (
                (t.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                r(t, e)
              );
            }),
            t(e)
          );
        }
        function n() {
          try {
            var e = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (e) {}
          return (n = function () {
            return !!e;
          })();
        }
        function r(e, t) {
          return (
            (r = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            r(e, t)
          );
        }
        function o(e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            o(e)
          );
        }
        var i = (function (t) {
          function i() {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              ((t = (function (t, r, i) {
                return (
                  (r = o(r)),
                  (function (t, n) {
                    if (n && ("object" == e(n) || "function" == typeof n))
                      return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (e) {
                      if (void 0 === e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return e;
                    })(t);
                  })(
                    t,
                    n()
                      ? Reflect.construct(r, i || [], o(t).constructor)
                      : r.apply(t, i),
                  )
                );
              })(this, i)).innerHTML =
                '\n        <footer>\n            <div class="footer-container">\n                <p>by <strong>Syaekh</strong></p>\n                <div class="social-icons">\n                    <a href="https://github.com/Syaekhul" target="_blank">\n                        <i class="fa-brands fa-github"></i>\n                    </a>\n                    <a href="https://instagram.com/syaekh_m" target="_blank">\n                        <i class="fa-brands fa-instagram"></i>\n                    </a>\n                </div>\n            </div>\n        </footer>    \n            '),
              t
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && r(e, t);
            })(i, t),
            (a = i),
            Object.defineProperty(a, "prototype", { writable: !1 }),
            a
          );
          var a;
        })(t(HTMLElement));
        customElements.define("footer-bar", i);
      },
      366: () => {
        function e(t) {
          return (
            (e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            e(t)
          );
        }
        function t(e, t) {
          for (var r = 0; r < t.length; r++) {
            var o = t[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, n(o.key), o);
          }
        }
        function n(t) {
          var n = (function (t) {
            if ("object" != e(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, "string");
              if ("object" != e(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(t);
          })(t);
          return "symbol" == e(n) ? n : n + "";
        }
        function r(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (r = function (e) {
              if (
                null === e ||
                !(function (e) {
                  try {
                    return (
                      -1 !== Function.toString.call(e).indexOf("[native code]")
                    );
                  } catch (t) {
                    return "function" == typeof e;
                  }
                })(e)
              )
                return e;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, n);
              }
              function n() {
                return (function (e, t, n) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, t);
                  var a = new (e.bind.apply(e, r))();
                  return n && i(a, n.prototype), a;
                })(e, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(n, e)
              );
            }),
            r(e)
          );
        }
        function o() {
          try {
            var e = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (e) {}
          return (o = function () {
            return !!e;
          })();
        }
        function i(e, t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            i(e, t)
          );
        }
        function a(e) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            a(e)
          );
        }
        var s = (function (n) {
          function r() {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r),
              (t = (function (t, n, r) {
                return (
                  (n = a(n)),
                  (function (t, n) {
                    if (n && ("object" == e(n) || "function" == typeof n))
                      return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (e) {
                      if (void 0 === e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return e;
                    })(t);
                  })(
                    t,
                    o()
                      ? Reflect.construct(n, r || [], a(t).constructor)
                      : n.apply(t, r),
                  )
                );
              })(this, r)).render(),
              t
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && i(e, t);
            })(r, n),
            (s = r),
            (l = [
              {
                key: "render",
                value: function () {
                  this.innerHTML =
                    '\n      <header>\n        <nav>\n          <slot>Notes-Apps</slot> \n        </nav>\n        <div class="button-container">\n          <button class="add-note-btn">\n            <i class="fa-solid fa-plus"></i> \n          </button>\n          <button class="note-archive">\n            <i class="fa-solid fa-box-archive"></i>\n          </button>\n          <button id="dark-mode-toggle">\n            <i class="fa-regular fa-moon"></i> \n          </button>\n        </div>\n      </header>\n    ';
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  var e = this;
                  (this.darkModeButton =
                    this.querySelector("#dark-mode-toggle")),
                    (this.darkModeIcon =
                      this.darkModeButton.querySelector("i")),
                    "dark" === localStorage.getItem("theme") &&
                      (document.body.classList.add("dark-mode"),
                      this.classList.add("dark-mode"),
                      this.darkModeIcon.classList.replace("fa-moon", "fa-sun")),
                    this.darkModeButton.addEventListener("click", function () {
                      return e.toggleDarkMode();
                    }),
                    (this.addNoteButton = this.querySelector(".add-note-btn")),
                    this.addNoteButton.addEventListener("click", function () {
                      return e.openModal();
                    }),
                    (this.archivedButton = this.querySelector(".note-archive")),
                    this.archivedButton.addEventListener("click", function () {
                      return e.openArchive();
                    });
                },
              },
              {
                key: "toggleDarkMode",
                value: function () {
                  document.body.classList.toggle("dark-mode"),
                    this.classList.toggle("dark-mode");
                  var e = document.querySelector("note-list");
                  e && e.classList.toggle("dark-mode"),
                    document.body.classList.contains("dark-mode")
                      ? (localStorage.setItem("theme", "dark"),
                        this.darkModeIcon.classList.replace(
                          "fa-moon",
                          "fa-sun",
                        ))
                      : (localStorage.setItem("theme", "light"),
                        this.darkModeIcon.classList.replace(
                          "fa-sun",
                          "fa-moon",
                        ));
                },
              },
              {
                key: "openModal",
                value: function () {
                  var e = document.querySelector("add-note");
                  e && e.showModal();
                },
              },
              {
                key: "openArchive",
                value: function () {
                  var e = document.querySelector("note-list");
                  e &&
                    ("active" === e.dataset.page
                      ? (e.dataset.page = "archived")
                      : (e.dataset.page = "active"),
                    e.render());
                },
              },
            ]) && t(s.prototype, l),
            Object.defineProperty(s, "prototype", { writable: !1 }),
            s
          );
          var s, l;
        })(r(HTMLElement));
        customElements.define("header-bar", s);
      },
      465: function (e) {
        (e.exports = (function () {
          "use strict";
          function e(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object",
            );
          }
          function t(t, n) {
            return t.get(e(t, n));
          }
          function n(e, t, n) {
            (function (e, t) {
              if (t.has(e))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object",
                );
            })(e, t),
              t.set(e, n);
          }
          const r = {},
            o = (e) =>
              new Promise((t) => {
                if (!e) return t();
                const n = window.scrollX,
                  o = window.scrollY;
                (r.restoreFocusTimeout = setTimeout(() => {
                  r.previousActiveElement instanceof HTMLElement
                    ? (r.previousActiveElement.focus(),
                      (r.previousActiveElement = null))
                    : document.body && document.body.focus(),
                    t();
                }, 100)),
                  window.scrollTo(n, o);
              }),
            i = "swal2-",
            a = [
              "container",
              "shown",
              "height-auto",
              "iosfix",
              "popup",
              "modal",
              "no-backdrop",
              "no-transition",
              "toast",
              "toast-shown",
              "show",
              "hide",
              "close",
              "title",
              "html-container",
              "actions",
              "confirm",
              "deny",
              "cancel",
              "default-outline",
              "footer",
              "icon",
              "icon-content",
              "image",
              "input",
              "file",
              "range",
              "select",
              "radio",
              "checkbox",
              "label",
              "textarea",
              "inputerror",
              "input-label",
              "validation-message",
              "progress-steps",
              "active-progress-step",
              "progress-step",
              "progress-step-line",
              "loader",
              "loading",
              "styled",
              "top",
              "top-start",
              "top-end",
              "top-left",
              "top-right",
              "center",
              "center-start",
              "center-end",
              "center-left",
              "center-right",
              "bottom",
              "bottom-start",
              "bottom-end",
              "bottom-left",
              "bottom-right",
              "grow-row",
              "grow-column",
              "grow-fullscreen",
              "rtl",
              "timer-progress-bar",
              "timer-progress-bar-container",
              "scrollbar-measure",
              "icon-success",
              "icon-warning",
              "icon-info",
              "icon-question",
              "icon-error",
              "draggable",
              "dragging",
            ].reduce((e, t) => ((e[t] = i + t), e), {}),
            s = ["success", "warning", "info", "question", "error"].reduce(
              (e, t) => ((e[t] = i + t), e),
              {},
            ),
            l = "SweetAlert2:",
            c = (e) => e.charAt(0).toUpperCase() + e.slice(1),
            u = (e) => {
              console.warn(`${l} ${"object" == typeof e ? e.join(" ") : e}`);
            },
            d = (e) => {
              console.error(`${l} ${e}`);
            },
            h = [],
            p = function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              var n;
              (n = `"${e}" is deprecated and will be removed in the next major release.${t ? ` Use "${t}" instead.` : ""}`),
                h.includes(n) || (h.push(n), u(n));
            },
            m = (e) => ("function" == typeof e ? e() : e),
            f = (e) => e && "function" == typeof e.toPromise,
            w = (e) => (f(e) ? e.toPromise() : Promise.resolve(e)),
            g = (e) => e && Promise.resolve(e) === e,
            b = () => document.body.querySelector(`.${a.container}`),
            v = (e) => {
              const t = b();
              return t ? t.querySelector(e) : null;
            },
            y = (e) => v(`.${e}`),
            _ = () => y(a.popup),
            k = () => y(a.icon),
            x = () => y(a.title),
            E = () => y(a["html-container"]),
            T = () => y(a.image),
            C = () => y(a["progress-steps"]),
            L = () => y(a["validation-message"]),
            S = () => v(`.${a.actions} .${a.confirm}`),
            O = () => v(`.${a.actions} .${a.cancel}`),
            A = () => v(`.${a.actions} .${a.deny}`),
            P = () => v(`.${a.loader}`),
            j = () => y(a.actions),
            B = () => y(a.footer),
            $ = () => y(a["timer-progress-bar"]),
            N = () => y(a.close),
            M = () => {
              const e = _();
              if (!e) return [];
              const t = e.querySelectorAll(
                  '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])',
                ),
                n = Array.from(t).sort((e, t) => {
                  const n = parseInt(e.getAttribute("tabindex") || "0"),
                    r = parseInt(t.getAttribute("tabindex") || "0");
                  return n > r ? 1 : n < r ? -1 : 0;
                }),
                r = e.querySelectorAll(
                  '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',
                ),
                o = Array.from(r).filter(
                  (e) => "-1" !== e.getAttribute("tabindex"),
                );
              return [...new Set(n.concat(o))].filter((e) => ee(e));
            },
            D = () =>
              R(document.body, a.shown) &&
              !R(document.body, a["toast-shown"]) &&
              !R(document.body, a["no-backdrop"]),
            I = () => {
              const e = _();
              return !!e && R(e, a.toast);
            },
            q = (e, t) => {
              if (((e.textContent = ""), t)) {
                const n = new DOMParser().parseFromString(t, "text/html"),
                  r = n.querySelector("head");
                r &&
                  Array.from(r.childNodes).forEach((t) => {
                    e.appendChild(t);
                  });
                const o = n.querySelector("body");
                o &&
                  Array.from(o.childNodes).forEach((t) => {
                    t instanceof HTMLVideoElement ||
                    t instanceof HTMLAudioElement
                      ? e.appendChild(t.cloneNode(!0))
                      : e.appendChild(t);
                  });
              }
            },
            R = (e, t) => {
              if (!t) return !1;
              const n = t.split(/\s+/);
              for (let t = 0; t < n.length; t++)
                if (!e.classList.contains(n[t])) return !1;
              return !0;
            },
            H = (e, t, n) => {
              if (
                (((e, t) => {
                  Array.from(e.classList).forEach((n) => {
                    Object.values(a).includes(n) ||
                      Object.values(s).includes(n) ||
                      Object.values(t.showClass || {}).includes(n) ||
                      e.classList.remove(n);
                  });
                })(e, t),
                !t.customClass)
              )
                return;
              const r = t.customClass[n];
              r &&
                ("string" == typeof r || r.forEach
                  ? U(e, r)
                  : u(
                      `Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof r}"`,
                    ));
            },
            z = (e, t) => {
              if (!t) return null;
              switch (t) {
                case "select":
                case "textarea":
                case "file":
                  return e.querySelector(`.${a.popup} > .${a[t]}`);
                case "checkbox":
                  return e.querySelector(`.${a.popup} > .${a.checkbox} input`);
                case "radio":
                  return (
                    e.querySelector(
                      `.${a.popup} > .${a.radio} input:checked`,
                    ) ||
                    e.querySelector(
                      `.${a.popup} > .${a.radio} input:first-child`,
                    )
                  );
                case "range":
                  return e.querySelector(`.${a.popup} > .${a.range} input`);
                default:
                  return e.querySelector(`.${a.popup} > .${a.input}`);
              }
            },
            F = (e) => {
              if ((e.focus(), "file" !== e.type)) {
                const t = e.value;
                (e.value = ""), (e.value = t);
              }
            },
            V = (e, t, n) => {
              e &&
                t &&
                ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)),
                t.forEach((t) => {
                  Array.isArray(e)
                    ? e.forEach((e) => {
                        n ? e.classList.add(t) : e.classList.remove(t);
                      })
                    : n
                      ? e.classList.add(t)
                      : e.classList.remove(t);
                }));
            },
            U = (e, t) => {
              V(e, t, !0);
            },
            Y = (e, t) => {
              V(e, t, !1);
            },
            G = (e, t) => {
              const n = Array.from(e.children);
              for (let e = 0; e < n.length; e++) {
                const r = n[e];
                if (r instanceof HTMLElement && R(r, t)) return r;
              }
            },
            Z = (e, t, n) => {
              n === `${parseInt(n)}` && (n = parseInt(n)),
                n || 0 === parseInt(n)
                  ? e.style.setProperty(t, "number" == typeof n ? `${n}px` : n)
                  : e.style.removeProperty(t);
            },
            W = function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "flex";
              e && (e.style.display = t);
            },
            X = (e) => {
              e && (e.style.display = "none");
            },
            K = function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "block";
              e &&
                new MutationObserver(() => {
                  Q(e, e.innerHTML, t);
                }).observe(e, { childList: !0, subtree: !0 });
            },
            J = (e, t, n, r) => {
              const o = e.querySelector(t);
              o && o.style.setProperty(n, r);
            },
            Q = function (e, t) {
              t
                ? W(
                    e,
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "flex",
                  )
                : X(e);
            },
            ee = (e) =>
              !(
                !e ||
                !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
              ),
            te = (e) => !!(e.scrollHeight > e.clientHeight),
            ne = (e) => {
              const t = window.getComputedStyle(e),
                n = parseFloat(t.getPropertyValue("animation-duration") || "0"),
                r = parseFloat(
                  t.getPropertyValue("transition-duration") || "0",
                );
              return n > 0 || r > 0;
            },
            re = function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              const n = $();
              n &&
                ee(n) &&
                (t && ((n.style.transition = "none"), (n.style.width = "100%")),
                setTimeout(() => {
                  (n.style.transition = `width ${e / 1e3}s linear`),
                    (n.style.width = "0%");
                }, 10));
            },
            oe =
              `\n <div aria-labelledby="${a.title}" aria-describedby="${a["html-container"]}" class="${a.popup}" tabindex="-1">\n   <button type="button" class="${a.close}"></button>\n   <ul class="${a["progress-steps"]}"></ul>\n   <div class="${a.icon}"></div>\n   <img class="${a.image}" />\n   <h2 class="${a.title}" id="${a.title}"></h2>\n   <div class="${a["html-container"]}" id="${a["html-container"]}"></div>\n   <input class="${a.input}" id="${a.input}" />\n   <input type="file" class="${a.file}" />\n   <div class="${a.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${a.select}" id="${a.select}"></select>\n   <div class="${a.radio}"></div>\n   <label class="${a.checkbox}">\n     <input type="checkbox" id="${a.checkbox}" />\n     <span class="${a.label}"></span>\n   </label>\n   <textarea class="${a.textarea}" id="${a.textarea}"></textarea>\n   <div class="${a["validation-message"]}" id="${a["validation-message"]}"></div>\n   <div class="${a.actions}">\n     <div class="${a.loader}"></div>\n     <button type="button" class="${a.confirm}"></button>\n     <button type="button" class="${a.deny}"></button>\n     <button type="button" class="${a.cancel}"></button>\n   </div>\n   <div class="${a.footer}"></div>\n   <div class="${a["timer-progress-bar-container"]}">\n     <div class="${a["timer-progress-bar"]}"></div>\n   </div>\n </div>\n`.replace(
                /(^|\n)\s*/g,
                "",
              ),
            ie = () => {
              r.currentInstance.resetValidationMessage();
            },
            ae = (e) => {
              const t = (() => {
                const e = b();
                return (
                  !!e &&
                  (e.remove(),
                  Y(
                    [document.documentElement, document.body],
                    [a["no-backdrop"], a["toast-shown"], a["has-column"]],
                  ),
                  !0)
                );
              })();
              if (
                "undefined" == typeof window ||
                "undefined" == typeof document
              )
                return void d("SweetAlert2 requires document to initialize");
              const n = document.createElement("div");
              (n.className = a.container),
                t && U(n, a["no-transition"]),
                q(n, oe),
                (n.dataset.swal2Theme = e.theme);
              const r =
                "string" == typeof (o = e.target)
                  ? document.querySelector(o)
                  : o;
              var o;
              r.appendChild(n),
                ((e) => {
                  const t = _();
                  t.setAttribute("role", e.toast ? "alert" : "dialog"),
                    t.setAttribute(
                      "aria-live",
                      e.toast ? "polite" : "assertive",
                    ),
                    e.toast || t.setAttribute("aria-modal", "true");
                })(e),
                ((e) => {
                  "rtl" === window.getComputedStyle(e).direction &&
                    U(b(), a.rtl);
                })(r),
                (() => {
                  const e = _(),
                    t = G(e, a.input),
                    n = G(e, a.file),
                    r = e.querySelector(`.${a.range} input`),
                    o = e.querySelector(`.${a.range} output`),
                    i = G(e, a.select),
                    s = e.querySelector(`.${a.checkbox} input`),
                    l = G(e, a.textarea);
                  (t.oninput = ie),
                    (n.onchange = ie),
                    (i.onchange = ie),
                    (s.onchange = ie),
                    (l.oninput = ie),
                    (r.oninput = () => {
                      ie(), (o.value = r.value);
                    }),
                    (r.onchange = () => {
                      ie(), (o.value = r.value);
                    });
                })();
            },
            se = (e, t) => {
              e instanceof HTMLElement
                ? t.appendChild(e)
                : "object" == typeof e
                  ? le(e, t)
                  : e && q(t, e);
            },
            le = (e, t) => {
              e.jquery ? ce(t, e) : q(t, e.toString());
            },
            ce = (e, t) => {
              if (((e.textContent = ""), 0 in t))
                for (let n = 0; n in t; n++) e.appendChild(t[n].cloneNode(!0));
              else e.appendChild(t.cloneNode(!0));
            },
            ue = (e, t) => {
              const n = j(),
                r = P();
              n &&
                r &&
                (t.showConfirmButton || t.showDenyButton || t.showCancelButton
                  ? W(n)
                  : X(n),
                H(n, t, "actions"),
                (function (e, t, n) {
                  const r = S(),
                    o = A(),
                    i = O();
                  r &&
                    o &&
                    i &&
                    (de(r, "confirm", n),
                    de(o, "deny", n),
                    de(i, "cancel", n),
                    (function (e, t, n, r) {
                      r.buttonsStyling
                        ? (U([e, t, n], a.styled),
                          r.confirmButtonColor &&
                            ((e.style.backgroundColor = r.confirmButtonColor),
                            U(e, a["default-outline"])),
                          r.denyButtonColor &&
                            ((t.style.backgroundColor = r.denyButtonColor),
                            U(t, a["default-outline"])),
                          r.cancelButtonColor &&
                            ((n.style.backgroundColor = r.cancelButtonColor),
                            U(n, a["default-outline"])))
                        : Y([e, t, n], a.styled);
                    })(r, o, i, n),
                    n.reverseButtons &&
                      (n.toast
                        ? (e.insertBefore(i, r), e.insertBefore(o, r))
                        : (e.insertBefore(i, t),
                          e.insertBefore(o, t),
                          e.insertBefore(r, t))));
                })(n, r, t),
                q(r, t.loaderHtml || ""),
                H(r, t, "loader"));
            };
          function de(e, t, n) {
            const r = c(t);
            Q(e, n[`show${r}Button`], "inline-block"),
              q(e, n[`${t}ButtonText`] || ""),
              e.setAttribute("aria-label", n[`${t}ButtonAriaLabel`] || ""),
              (e.className = a[t]),
              H(e, n, `${t}Button`);
          }
          const he = (e, t) => {
            const n = b();
            n &&
              ((function (e, t) {
                "string" == typeof t
                  ? (e.style.background = t)
                  : t ||
                    U(
                      [document.documentElement, document.body],
                      a["no-backdrop"],
                    );
              })(n, t.backdrop),
              (function (e, t) {
                t &&
                  (t in a
                    ? U(e, a[t])
                    : (u(
                        'The "position" parameter is not valid, defaulting to "center"',
                      ),
                      U(e, a.center)));
              })(n, t.position),
              (function (e, t) {
                t && U(e, a[`grow-${t}`]);
              })(n, t.grow),
              H(n, t, "container"));
          };
          var pe = { innerParams: new WeakMap(), domCache: new WeakMap() };
          const me = [
              "input",
              "file",
              "range",
              "select",
              "radio",
              "checkbox",
              "textarea",
            ],
            fe = (e) => {
              if (!e.input) return;
              if (!ke[e.input])
                return void d(
                  `Unexpected type of input! Expected ${Object.keys(ke).join(" | ")}, got "${e.input}"`,
                );
              const t = ye(e.input);
              if (!t) return;
              const n = ke[e.input](t, e);
              W(t),
                e.inputAutoFocus &&
                  setTimeout(() => {
                    F(n);
                  });
            },
            we = (e, t) => {
              const n = _();
              if (!n) return;
              const r = z(n, e);
              if (r) {
                ((e) => {
                  for (let t = 0; t < e.attributes.length; t++) {
                    const n = e.attributes[t].name;
                    ["id", "type", "value", "style"].includes(n) ||
                      e.removeAttribute(n);
                  }
                })(r);
                for (const e in t) r.setAttribute(e, t[e]);
              }
            },
            ge = (e) => {
              if (!e.input) return;
              const t = ye(e.input);
              t && H(t, e, "input");
            },
            be = (e, t) => {
              !e.placeholder &&
                t.inputPlaceholder &&
                (e.placeholder = t.inputPlaceholder);
            },
            ve = (e, t, n) => {
              if (n.inputLabel) {
                const r = document.createElement("label"),
                  o = a["input-label"];
                r.setAttribute("for", e.id),
                  (r.className = o),
                  "object" == typeof n.customClass &&
                    U(r, n.customClass.inputLabel),
                  (r.innerText = n.inputLabel),
                  t.insertAdjacentElement("beforebegin", r);
              }
            },
            ye = (e) => {
              const t = _();
              if (t) return G(t, a[e] || a.input);
            },
            _e = (e, t) => {
              ["string", "number"].includes(typeof t)
                ? (e.value = `${t}`)
                : g(t) ||
                  u(
                    `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`,
                  );
            },
            ke = {};
          (ke.text =
            ke.email =
            ke.password =
            ke.number =
            ke.tel =
            ke.url =
            ke.search =
            ke.date =
            ke["datetime-local"] =
            ke.time =
            ke.week =
            ke.month =
              (e, t) => (
                _e(e, t.inputValue),
                ve(e, e, t),
                be(e, t),
                (e.type = t.input),
                e
              )),
            (ke.file = (e, t) => (ve(e, e, t), be(e, t), e)),
            (ke.range = (e, t) => {
              const n = e.querySelector("input"),
                r = e.querySelector("output");
              return (
                _e(n, t.inputValue),
                (n.type = t.input),
                _e(r, t.inputValue),
                ve(n, e, t),
                e
              );
            }),
            (ke.select = (e, t) => {
              if (((e.textContent = ""), t.inputPlaceholder)) {
                const n = document.createElement("option");
                q(n, t.inputPlaceholder),
                  (n.value = ""),
                  (n.disabled = !0),
                  (n.selected = !0),
                  e.appendChild(n);
              }
              return ve(e, e, t), e;
            }),
            (ke.radio = (e) => ((e.textContent = ""), e)),
            (ke.checkbox = (e, t) => {
              const n = z(_(), "checkbox");
              (n.value = "1"), (n.checked = Boolean(t.inputValue));
              const r = e.querySelector("span");
              return q(r, t.inputPlaceholder || t.inputLabel), n;
            }),
            (ke.textarea = (e, t) => {
              _e(e, t.inputValue), be(e, t), ve(e, e, t);
              return (
                setTimeout(() => {
                  if ("MutationObserver" in window) {
                    const n = parseInt(window.getComputedStyle(_()).width);
                    new MutationObserver(() => {
                      if (!document.body.contains(e)) return;
                      const r =
                        e.offsetWidth +
                        ((o = e),
                        parseInt(window.getComputedStyle(o).marginLeft) +
                          parseInt(window.getComputedStyle(o).marginRight));
                      var o;
                      r > n
                        ? (_().style.width = `${r}px`)
                        : Z(_(), "width", t.width);
                    }).observe(e, {
                      attributes: !0,
                      attributeFilter: ["style"],
                    });
                  }
                }),
                e
              );
            });
          const xe = (e, t) => {
              const n = E();
              n &&
                (K(n),
                H(n, t, "htmlContainer"),
                t.html
                  ? (se(t.html, n), W(n, "block"))
                  : t.text
                    ? ((n.textContent = t.text), W(n, "block"))
                    : X(n),
                ((e, t) => {
                  const n = _();
                  if (!n) return;
                  const r = pe.innerParams.get(e),
                    o = !r || t.input !== r.input;
                  me.forEach((e) => {
                    const r = G(n, a[e]);
                    r &&
                      (we(e, t.inputAttributes),
                      (r.className = a[e]),
                      o && X(r));
                  }),
                    t.input && (o && fe(t), ge(t));
                })(e, t));
            },
            Ee = (e, t) => {
              for (const [n, r] of Object.entries(s)) t.icon !== n && Y(e, r);
              U(e, t.icon && s[t.icon]), Le(e, t), Te(), H(e, t, "icon");
            },
            Te = () => {
              const e = _();
              if (!e) return;
              const t = window
                  .getComputedStyle(e)
                  .getPropertyValue("background-color"),
                n = e.querySelectorAll(
                  "[class^=swal2-success-circular-line], .swal2-success-fix",
                );
              for (let e = 0; e < n.length; e++) n[e].style.backgroundColor = t;
            },
            Ce = (e, t) => {
              if (!t.icon && !t.iconHtml) return;
              let n = e.innerHTML,
                r = "";
              t.iconHtml
                ? (r = Se(t.iconHtml))
                : "success" === t.icon
                  ? ((r =
                      '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n'),
                    (n = n.replace(/ style=".*?"/g, "")))
                  : "error" === t.icon
                    ? (r =
                        '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n')
                    : t.icon &&
                      (r = Se(
                        { question: "?", warning: "!", info: "i" }[t.icon],
                      )),
                n.trim() !== r.trim() && q(e, r);
            },
            Le = (e, t) => {
              if (t.iconColor) {
                (e.style.color = t.iconColor),
                  (e.style.borderColor = t.iconColor);
                for (const n of [
                  ".swal2-success-line-tip",
                  ".swal2-success-line-long",
                  ".swal2-x-mark-line-left",
                  ".swal2-x-mark-line-right",
                ])
                  J(e, n, "background-color", t.iconColor);
                J(e, ".swal2-success-ring", "border-color", t.iconColor);
              }
            },
            Se = (e) => `<div class="${a["icon-content"]}">${e}</div>`;
          let Oe = !1,
            Ae = 0,
            Pe = 0,
            je = 0,
            Be = 0;
          const $e = (e) => {
              const t = _();
              if (e.target === t || k().contains(e.target)) {
                Oe = !0;
                const n = De(e);
                (Ae = n.clientX),
                  (Pe = n.clientY),
                  (je = parseInt(t.style.insetInlineStart) || 0),
                  (Be = parseInt(t.style.insetBlockStart) || 0),
                  U(t, "swal2-dragging");
              }
            },
            Ne = (e) => {
              const t = _();
              if (Oe) {
                let { clientX: n, clientY: r } = De(e);
                (t.style.insetInlineStart = `${je + (n - Ae)}px`),
                  (t.style.insetBlockStart = `${Be + (r - Pe)}px`);
              }
            },
            Me = () => {
              const e = _();
              (Oe = !1), Y(e, "swal2-dragging");
            },
            De = (e) => {
              let t = 0,
                n = 0;
              return (
                e.type.startsWith("mouse")
                  ? ((t = e.clientX), (n = e.clientY))
                  : e.type.startsWith("touch") &&
                    ((t = e.touches[0].clientX), (n = e.touches[0].clientY)),
                { clientX: t, clientY: n }
              );
            },
            Ie = (e, t) => {
              const n = b(),
                r = _();
              if (n && r) {
                if (t.toast) {
                  Z(n, "width", t.width), (r.style.width = "100%");
                  const e = P();
                  e && r.insertBefore(e, k());
                } else Z(r, "width", t.width);
                Z(r, "padding", t.padding),
                  t.color && (r.style.color = t.color),
                  t.background && (r.style.background = t.background),
                  X(L()),
                  qe(r, t),
                  t.draggable && !t.toast
                    ? (U(r, a.draggable),
                      ((e) => {
                        e.addEventListener("mousedown", $e),
                          document.body.addEventListener("mousemove", Ne),
                          e.addEventListener("mouseup", Me),
                          e.addEventListener("touchstart", $e),
                          document.body.addEventListener("touchmove", Ne),
                          e.addEventListener("touchend", Me);
                      })(r))
                    : (Y(r, a.draggable),
                      ((e) => {
                        e.removeEventListener("mousedown", $e),
                          document.body.removeEventListener("mousemove", Ne),
                          e.removeEventListener("mouseup", Me),
                          e.removeEventListener("touchstart", $e),
                          document.body.removeEventListener("touchmove", Ne),
                          e.removeEventListener("touchend", Me);
                      })(r));
              }
            },
            qe = (e, t) => {
              const n = t.showClass || {};
              (e.className = `${a.popup} ${ee(e) ? n.popup : ""}`),
                t.toast
                  ? (U(
                      [document.documentElement, document.body],
                      a["toast-shown"],
                    ),
                    U(e, a.toast))
                  : U(e, a.modal),
                H(e, t, "popup"),
                "string" == typeof t.customClass && U(e, t.customClass),
                t.icon && U(e, a[`icon-${t.icon}`]);
            },
            Re = (e) => {
              const t = document.createElement("li");
              return U(t, a["progress-step"]), q(t, e), t;
            },
            He = (e) => {
              const t = document.createElement("li");
              return (
                U(t, a["progress-step-line"]),
                e.progressStepsDistance &&
                  Z(t, "width", e.progressStepsDistance),
                t
              );
            },
            ze = (e, t) => {
              Ie(0, t),
                he(0, t),
                ((e, t) => {
                  const n = C();
                  if (!n) return;
                  const { progressSteps: r, currentProgressStep: o } = t;
                  r && 0 !== r.length && void 0 !== o
                    ? (W(n),
                      (n.textContent = ""),
                      o >= r.length &&
                        u(
                          "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)",
                        ),
                      r.forEach((e, i) => {
                        const s = Re(e);
                        if (
                          (n.appendChild(s),
                          i === o && U(s, a["active-progress-step"]),
                          i !== r.length - 1)
                        ) {
                          const e = He(t);
                          n.appendChild(e);
                        }
                      }))
                    : X(n);
                })(0, t),
                ((e, t) => {
                  const n = pe.innerParams.get(e),
                    r = k();
                  if (r) {
                    if (n && t.icon === n.icon) return Ce(r, t), void Ee(r, t);
                    if (t.icon || t.iconHtml) {
                      if (t.icon && -1 === Object.keys(s).indexOf(t.icon))
                        return (
                          d(
                            `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`,
                          ),
                          void X(r)
                        );
                      W(r),
                        Ce(r, t),
                        Ee(r, t),
                        U(r, t.showClass && t.showClass.icon),
                        window
                          .matchMedia("(prefers-color-scheme: dark)")
                          .addEventListener("change", Te);
                    } else X(r);
                  }
                })(e, t),
                ((e, t) => {
                  const n = T();
                  n &&
                    (t.imageUrl
                      ? (W(n, ""),
                        n.setAttribute("src", t.imageUrl),
                        n.setAttribute("alt", t.imageAlt || ""),
                        Z(n, "width", t.imageWidth),
                        Z(n, "height", t.imageHeight),
                        (n.className = a.image),
                        H(n, t, "image"))
                      : X(n));
                })(0, t),
                ((e, t) => {
                  const n = x();
                  n &&
                    (K(n),
                    Q(n, t.title || t.titleText, "block"),
                    t.title && se(t.title, n),
                    t.titleText && (n.innerText = t.titleText),
                    H(n, t, "title"));
                })(0, t),
                ((e, t) => {
                  const n = N();
                  n &&
                    (q(n, t.closeButtonHtml || ""),
                    H(n, t, "closeButton"),
                    Q(n, t.showCloseButton),
                    n.setAttribute("aria-label", t.closeButtonAriaLabel || ""));
                })(0, t),
                xe(e, t),
                ue(0, t),
                ((e, t) => {
                  const n = B();
                  n &&
                    (K(n),
                    Q(n, t.footer, "block"),
                    t.footer && se(t.footer, n),
                    H(n, t, "footer"));
                })(0, t);
              const n = _();
              "function" == typeof t.didRender && n && t.didRender(n),
                r.eventEmitter.emit("didRender", n);
            },
            Fe = () => {
              var e;
              return null === (e = S()) || void 0 === e ? void 0 : e.click();
            },
            Ve = Object.freeze({
              cancel: "cancel",
              backdrop: "backdrop",
              close: "close",
              esc: "esc",
              timer: "timer",
            }),
            Ue = (e) => {
              e.keydownTarget &&
                e.keydownHandlerAdded &&
                (e.keydownTarget.removeEventListener(
                  "keydown",
                  e.keydownHandler,
                  { capture: e.keydownListenerCapture },
                ),
                (e.keydownHandlerAdded = !1));
            },
            Ye = (e, t) => {
              var n;
              const r = M();
              if (r.length)
                return (
                  (e += t) === r.length
                    ? (e = 0)
                    : -1 === e && (e = r.length - 1),
                  void r[e].focus()
                );
              null === (n = _()) || void 0 === n || n.focus();
            },
            Ge = ["ArrowRight", "ArrowDown"],
            Ze = ["ArrowLeft", "ArrowUp"],
            We = (e, t, n) => {
              e &&
                (t.isComposing ||
                  229 === t.keyCode ||
                  (e.stopKeydownPropagation && t.stopPropagation(),
                  "Enter" === t.key
                    ? Xe(t, e)
                    : "Tab" === t.key
                      ? Ke(t)
                      : [...Ge, ...Ze].includes(t.key)
                        ? Je(t.key)
                        : "Escape" === t.key && Qe(t, e, n)));
            },
            Xe = (e, t) => {
              if (!m(t.allowEnterKey)) return;
              const n = z(_(), t.input);
              if (
                e.target &&
                n &&
                e.target instanceof HTMLElement &&
                e.target.outerHTML === n.outerHTML
              ) {
                if (["textarea", "file"].includes(t.input)) return;
                Fe(), e.preventDefault();
              }
            },
            Ke = (e) => {
              const t = e.target,
                n = M();
              let r = -1;
              for (let e = 0; e < n.length; e++)
                if (t === n[e]) {
                  r = e;
                  break;
                }
              e.shiftKey ? Ye(r, -1) : Ye(r, 1),
                e.stopPropagation(),
                e.preventDefault();
            },
            Je = (e) => {
              const t = j(),
                n = S(),
                r = A(),
                o = O();
              if (!(t && n && r && o)) return;
              const i = [n, r, o];
              if (
                document.activeElement instanceof HTMLElement &&
                !i.includes(document.activeElement)
              )
                return;
              const a = Ge.includes(e)
                ? "nextElementSibling"
                : "previousElementSibling";
              let s = document.activeElement;
              if (s) {
                for (let e = 0; e < t.children.length; e++) {
                  if (((s = s[a]), !s)) return;
                  if (s instanceof HTMLButtonElement && ee(s)) break;
                }
                s instanceof HTMLButtonElement && s.focus();
              }
            },
            Qe = (e, t, n) => {
              m(t.allowEscapeKey) && (e.preventDefault(), n(Ve.esc));
            };
          var et = {
            swalPromiseResolve: new WeakMap(),
            swalPromiseReject: new WeakMap(),
          };
          const tt = () => {
              Array.from(document.body.children).forEach((e) => {
                e.hasAttribute("data-previous-aria-hidden")
                  ? (e.setAttribute(
                      "aria-hidden",
                      e.getAttribute("data-previous-aria-hidden") || "",
                    ),
                    e.removeAttribute("data-previous-aria-hidden"))
                  : e.removeAttribute("aria-hidden");
              });
            },
            nt = "undefined" != typeof window && !!window.GestureEvent,
            rt = () => {
              const e = b();
              if (!e) return;
              let t;
              (e.ontouchstart = (e) => {
                t = ot(e);
              }),
                (e.ontouchmove = (e) => {
                  t && (e.preventDefault(), e.stopPropagation());
                });
            },
            ot = (e) => {
              const t = e.target,
                n = b(),
                r = E();
              return !(
                !n ||
                !r ||
                it(e) ||
                at(e) ||
                (t !== n &&
                  (te(n) ||
                    !(t instanceof HTMLElement) ||
                    "INPUT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    (te(r) && r.contains(t))))
              );
            },
            it = (e) =>
              e.touches &&
              e.touches.length &&
              "stylus" === e.touches[0].touchType,
            at = (e) => e.touches && e.touches.length > 1;
          let st = null;
          const lt = (e) => {
            null === st &&
              (document.body.scrollHeight > window.innerHeight ||
                "scroll" === e) &&
              ((st = parseInt(
                window
                  .getComputedStyle(document.body)
                  .getPropertyValue("padding-right"),
              )),
              (document.body.style.paddingRight = `${
                st +
                (() => {
                  const e = document.createElement("div");
                  (e.className = a["scrollbar-measure"]),
                    document.body.appendChild(e);
                  const t = e.getBoundingClientRect().width - e.clientWidth;
                  return document.body.removeChild(e), t;
                })()
              }px`));
          };
          function ct(e, t, n, i) {
            I() ? gt(e, i) : (o(n).then(() => gt(e, i)), Ue(r)),
              nt
                ? (t.setAttribute("style", "display:none !important"),
                  t.removeAttribute("class"),
                  (t.innerHTML = ""))
                : t.remove(),
              D() &&
                (null !== st &&
                  ((document.body.style.paddingRight = `${st}px`), (st = null)),
                (() => {
                  if (R(document.body, a.iosfix)) {
                    const e = parseInt(document.body.style.top, 10);
                    Y(document.body, a.iosfix),
                      (document.body.style.top = ""),
                      (document.body.scrollTop = -1 * e);
                  }
                })(),
                tt()),
              Y(
                [document.documentElement, document.body],
                [a.shown, a["height-auto"], a["no-backdrop"], a["toast-shown"]],
              );
          }
          function ut(e) {
            e = mt(e);
            const t = et.swalPromiseResolve.get(this),
              n = dt(this);
            this.isAwaitingPromise
              ? e.isDismissed || (pt(this), t(e))
              : n && t(e);
          }
          const dt = (e) => {
            const t = _();
            if (!t) return !1;
            const n = pe.innerParams.get(e);
            if (!n || R(t, n.hideClass.popup)) return !1;
            Y(t, n.showClass.popup), U(t, n.hideClass.popup);
            const r = b();
            return (
              Y(r, n.showClass.backdrop),
              U(r, n.hideClass.backdrop),
              ft(e, t, n),
              !0
            );
          };
          function ht(e) {
            const t = et.swalPromiseReject.get(this);
            pt(this), t && t(e);
          }
          const pt = (e) => {
              e.isAwaitingPromise &&
                (delete e.isAwaitingPromise,
                pe.innerParams.get(e) || e._destroy());
            },
            mt = (e) =>
              void 0 === e
                ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
                : Object.assign(
                    { isConfirmed: !1, isDenied: !1, isDismissed: !1 },
                    e,
                  ),
            ft = (e, t, n) => {
              var o;
              const i = b(),
                a = ne(t);
              "function" == typeof n.willClose && n.willClose(t),
                null === (o = r.eventEmitter) ||
                  void 0 === o ||
                  o.emit("willClose", t),
                a
                  ? wt(e, t, i, n.returnFocus, n.didClose)
                  : ct(e, i, n.returnFocus, n.didClose);
            },
            wt = (e, t, n, o, i) => {
              r.swalCloseEventFinishedCallback = ct.bind(null, e, n, o, i);
              const a = function (e) {
                var n;
                e.target === t &&
                  (null === (n = r.swalCloseEventFinishedCallback) ||
                    void 0 === n ||
                    n.call(r),
                  delete r.swalCloseEventFinishedCallback,
                  t.removeEventListener("animationend", a),
                  t.removeEventListener("transitionend", a));
              };
              t.addEventListener("animationend", a),
                t.addEventListener("transitionend", a);
            },
            gt = (e, t) => {
              setTimeout(() => {
                var n;
                "function" == typeof t && t.bind(e.params)(),
                  null === (n = r.eventEmitter) ||
                    void 0 === n ||
                    n.emit("didClose"),
                  e._destroy && e._destroy();
              });
            },
            bt = (e) => {
              let t = _();
              if ((t || new Jn(), (t = _()), !t)) return;
              const n = P();
              I() ? X(k()) : vt(t, e),
                W(n),
                t.setAttribute("data-loading", "true"),
                t.setAttribute("aria-busy", "true"),
                t.focus();
            },
            vt = (e, t) => {
              const n = j(),
                r = P();
              n &&
                r &&
                (!t && ee(S()) && (t = S()),
                W(n),
                t &&
                  (X(t),
                  r.setAttribute("data-button-to-replace", t.className),
                  n.insertBefore(r, t)),
                U([e, n], a.loading));
            },
            yt = (e) => (e.checked ? 1 : 0),
            _t = (e) => (e.checked ? e.value : null),
            kt = (e) =>
              e.files && e.files.length
                ? null !== e.getAttribute("multiple")
                  ? e.files
                  : e.files[0]
                : null,
            xt = (e, t) => {
              const n = _();
              if (!n) return;
              const r = (e) => {
                "select" === t.input
                  ? (function (e, t, n) {
                      const r = G(e, a.select);
                      if (!r) return;
                      const o = (e, t, r) => {
                        const o = document.createElement("option");
                        (o.value = r),
                          q(o, t),
                          (o.selected = Ct(r, n.inputValue)),
                          e.appendChild(o);
                      };
                      t.forEach((e) => {
                        const t = e[0],
                          n = e[1];
                        if (Array.isArray(n)) {
                          const e = document.createElement("optgroup");
                          (e.label = t),
                            (e.disabled = !1),
                            r.appendChild(e),
                            n.forEach((t) => o(e, t[1], t[0]));
                        } else o(r, n, t);
                      }),
                        r.focus();
                    })(n, Tt(e), t)
                  : "radio" === t.input &&
                    (function (e, t, n) {
                      const r = G(e, a.radio);
                      if (!r) return;
                      t.forEach((e) => {
                        const t = e[0],
                          o = e[1],
                          i = document.createElement("input"),
                          s = document.createElement("label");
                        (i.type = "radio"),
                          (i.name = a.radio),
                          (i.value = t),
                          Ct(t, n.inputValue) && (i.checked = !0);
                        const l = document.createElement("span");
                        q(l, o),
                          (l.className = a.label),
                          s.appendChild(i),
                          s.appendChild(l),
                          r.appendChild(s);
                      });
                      const o = r.querySelectorAll("input");
                      o.length && o[0].focus();
                    })(n, Tt(e), t);
              };
              f(t.inputOptions) || g(t.inputOptions)
                ? (bt(S()),
                  w(t.inputOptions).then((t) => {
                    e.hideLoading(), r(t);
                  }))
                : "object" == typeof t.inputOptions
                  ? r(t.inputOptions)
                  : d(
                      "Unexpected type of inputOptions! Expected object, Map or Promise, got " +
                        typeof t.inputOptions,
                    );
            },
            Et = (e, t) => {
              const n = e.getInput();
              n &&
                (X(n),
                w(t.inputValue)
                  .then((r) => {
                    (n.value =
                      "number" === t.input ? `${parseFloat(r) || 0}` : `${r}`),
                      W(n),
                      n.focus(),
                      e.hideLoading();
                  })
                  .catch((t) => {
                    d(`Error in inputValue promise: ${t}`),
                      (n.value = ""),
                      W(n),
                      n.focus(),
                      e.hideLoading();
                  }));
            };
          const Tt = (e) => {
              const t = [];
              return (
                e instanceof Map
                  ? e.forEach((e, n) => {
                      let r = e;
                      "object" == typeof r && (r = Tt(r)), t.push([n, r]);
                    })
                  : Object.keys(e).forEach((n) => {
                      let r = e[n];
                      "object" == typeof r && (r = Tt(r)), t.push([n, r]);
                    }),
                t
              );
            },
            Ct = (e, t) => !!t && t.toString() === e.toString(),
            Lt = (e, t) => {
              const n = pe.innerParams.get(e);
              if (!n.input)
                return void d(
                  `The "input" parameter is needed to be set when using returnInputValueOn${c(t)}`,
                );
              const r = e.getInput(),
                o = ((e, t) => {
                  const n = e.getInput();
                  if (!n) return null;
                  switch (t.input) {
                    case "checkbox":
                      return yt(n);
                    case "radio":
                      return _t(n);
                    case "file":
                      return kt(n);
                    default:
                      return t.inputAutoTrim ? n.value.trim() : n.value;
                  }
                })(e, n);
              n.inputValidator
                ? St(e, o, t)
                : r && !r.checkValidity()
                  ? (e.enableButtons(),
                    e.showValidationMessage(
                      n.validationMessage || r.validationMessage,
                    ))
                  : "deny" === t
                    ? Ot(e, o)
                    : jt(e, o);
            },
            St = (e, t, n) => {
              const r = pe.innerParams.get(e);
              e.disableInput(),
                Promise.resolve()
                  .then(() => w(r.inputValidator(t, r.validationMessage)))
                  .then((r) => {
                    e.enableButtons(),
                      e.enableInput(),
                      r
                        ? e.showValidationMessage(r)
                        : "deny" === n
                          ? Ot(e, t)
                          : jt(e, t);
                  });
            },
            Ot = (e, t) => {
              const n = pe.innerParams.get(e || void 0);
              n.showLoaderOnDeny && bt(A()),
                n.preDeny
                  ? ((e.isAwaitingPromise = !0),
                    Promise.resolve()
                      .then(() => w(n.preDeny(t, n.validationMessage)))
                      .then((n) => {
                        !1 === n
                          ? (e.hideLoading(), pt(e))
                          : e.close({
                              isDenied: !0,
                              value: void 0 === n ? t : n,
                            });
                      })
                      .catch((t) => Pt(e || void 0, t)))
                  : e.close({ isDenied: !0, value: t });
            },
            At = (e, t) => {
              e.close({ isConfirmed: !0, value: t });
            },
            Pt = (e, t) => {
              e.rejectPromise(t);
            },
            jt = (e, t) => {
              const n = pe.innerParams.get(e || void 0);
              n.showLoaderOnConfirm && bt(),
                n.preConfirm
                  ? (e.resetValidationMessage(),
                    (e.isAwaitingPromise = !0),
                    Promise.resolve()
                      .then(() => w(n.preConfirm(t, n.validationMessage)))
                      .then((n) => {
                        ee(L()) || !1 === n
                          ? (e.hideLoading(), pt(e))
                          : At(e, void 0 === n ? t : n);
                      })
                      .catch((t) => Pt(e || void 0, t)))
                  : At(e, t);
            };
          function Bt() {
            const e = pe.innerParams.get(this);
            if (!e) return;
            const t = pe.domCache.get(this);
            X(t.loader),
              I() ? e.icon && W(k()) : $t(t),
              Y([t.popup, t.actions], a.loading),
              t.popup.removeAttribute("aria-busy"),
              t.popup.removeAttribute("data-loading"),
              (t.confirmButton.disabled = !1),
              (t.denyButton.disabled = !1),
              (t.cancelButton.disabled = !1);
          }
          const $t = (e) => {
            const t = e.popup.getElementsByClassName(
              e.loader.getAttribute("data-button-to-replace"),
            );
            t.length
              ? W(t[0], "inline-block")
              : !ee(S()) && !ee(A()) && !ee(O()) && X(e.actions);
          };
          function Nt() {
            const e = pe.innerParams.get(this),
              t = pe.domCache.get(this);
            return t ? z(t.popup, e.input) : null;
          }
          function Mt(e, t, n) {
            const r = pe.domCache.get(e);
            t.forEach((e) => {
              r[e].disabled = n;
            });
          }
          function Dt(e, t) {
            const n = _();
            if (n && e)
              if ("radio" === e.type) {
                const e = n.querySelectorAll(`[name="${a.radio}"]`);
                for (let n = 0; n < e.length; n++) e[n].disabled = t;
              } else e.disabled = t;
          }
          function It() {
            Mt(this, ["confirmButton", "denyButton", "cancelButton"], !1);
          }
          function qt() {
            Mt(this, ["confirmButton", "denyButton", "cancelButton"], !0);
          }
          function Rt() {
            Dt(this.getInput(), !1);
          }
          function Ht() {
            Dt(this.getInput(), !0);
          }
          function zt(e) {
            const t = pe.domCache.get(this),
              n = pe.innerParams.get(this);
            q(t.validationMessage, e),
              (t.validationMessage.className = a["validation-message"]),
              n.customClass &&
                n.customClass.validationMessage &&
                U(t.validationMessage, n.customClass.validationMessage),
              W(t.validationMessage);
            const r = this.getInput();
            r &&
              (r.setAttribute("aria-invalid", "true"),
              r.setAttribute("aria-describedby", a["validation-message"]),
              F(r),
              U(r, a.inputerror));
          }
          function Ft() {
            const e = pe.domCache.get(this);
            e.validationMessage && X(e.validationMessage);
            const t = this.getInput();
            t &&
              (t.removeAttribute("aria-invalid"),
              t.removeAttribute("aria-describedby"),
              Y(t, a.inputerror));
          }
          const Vt = {
              title: "",
              titleText: "",
              text: "",
              html: "",
              footer: "",
              icon: void 0,
              iconColor: void 0,
              iconHtml: void 0,
              template: void 0,
              toast: !1,
              draggable: !1,
              animation: !0,
              theme: "light",
              showClass: {
                popup: "swal2-show",
                backdrop: "swal2-backdrop-show",
                icon: "swal2-icon-show",
              },
              hideClass: {
                popup: "swal2-hide",
                backdrop: "swal2-backdrop-hide",
                icon: "swal2-icon-hide",
              },
              customClass: {},
              target: "body",
              color: void 0,
              backdrop: !0,
              heightAuto: !0,
              allowOutsideClick: !0,
              allowEscapeKey: !0,
              allowEnterKey: !0,
              stopKeydownPropagation: !0,
              keydownListenerCapture: !1,
              showConfirmButton: !0,
              showDenyButton: !1,
              showCancelButton: !1,
              preConfirm: void 0,
              preDeny: void 0,
              confirmButtonText: "OK",
              confirmButtonAriaLabel: "",
              confirmButtonColor: void 0,
              denyButtonText: "No",
              denyButtonAriaLabel: "",
              denyButtonColor: void 0,
              cancelButtonText: "Cancel",
              cancelButtonAriaLabel: "",
              cancelButtonColor: void 0,
              buttonsStyling: !0,
              reverseButtons: !1,
              focusConfirm: !0,
              focusDeny: !1,
              focusCancel: !1,
              returnFocus: !0,
              showCloseButton: !1,
              closeButtonHtml: "&times;",
              closeButtonAriaLabel: "Close this dialog",
              loaderHtml: "",
              showLoaderOnConfirm: !1,
              showLoaderOnDeny: !1,
              imageUrl: void 0,
              imageWidth: void 0,
              imageHeight: void 0,
              imageAlt: "",
              timer: void 0,
              timerProgressBar: !1,
              width: void 0,
              padding: void 0,
              background: void 0,
              input: void 0,
              inputPlaceholder: "",
              inputLabel: "",
              inputValue: "",
              inputOptions: {},
              inputAutoFocus: !0,
              inputAutoTrim: !0,
              inputAttributes: {},
              inputValidator: void 0,
              returnInputValueOnDeny: !1,
              validationMessage: void 0,
              grow: !1,
              position: "center",
              progressSteps: [],
              currentProgressStep: void 0,
              progressStepsDistance: void 0,
              willOpen: void 0,
              didOpen: void 0,
              didRender: void 0,
              willClose: void 0,
              didClose: void 0,
              didDestroy: void 0,
              scrollbarPadding: !0,
            },
            Ut = [
              "allowEscapeKey",
              "allowOutsideClick",
              "background",
              "buttonsStyling",
              "cancelButtonAriaLabel",
              "cancelButtonColor",
              "cancelButtonText",
              "closeButtonAriaLabel",
              "closeButtonHtml",
              "color",
              "confirmButtonAriaLabel",
              "confirmButtonColor",
              "confirmButtonText",
              "currentProgressStep",
              "customClass",
              "denyButtonAriaLabel",
              "denyButtonColor",
              "denyButtonText",
              "didClose",
              "didDestroy",
              "draggable",
              "footer",
              "hideClass",
              "html",
              "icon",
              "iconColor",
              "iconHtml",
              "imageAlt",
              "imageHeight",
              "imageUrl",
              "imageWidth",
              "preConfirm",
              "preDeny",
              "progressSteps",
              "returnFocus",
              "reverseButtons",
              "showCancelButton",
              "showCloseButton",
              "showConfirmButton",
              "showDenyButton",
              "text",
              "title",
              "titleText",
              "theme",
              "willClose",
            ],
            Yt = { allowEnterKey: void 0 },
            Gt = [
              "allowOutsideClick",
              "allowEnterKey",
              "backdrop",
              "draggable",
              "focusConfirm",
              "focusDeny",
              "focusCancel",
              "returnFocus",
              "heightAuto",
              "keydownListenerCapture",
            ],
            Zt = (e) => Object.prototype.hasOwnProperty.call(Vt, e),
            Wt = (e) => -1 !== Ut.indexOf(e),
            Xt = (e) => Yt[e],
            Kt = (e) => {
              Zt(e) || u(`Unknown parameter "${e}"`);
            },
            Jt = (e) => {
              Gt.includes(e) &&
                u(`The parameter "${e}" is incompatible with toasts`);
            },
            Qt = (e) => {
              const t = Xt(e);
              t && p(e, t);
            },
            en = (e) => {
              !1 === e.backdrop &&
                e.allowOutsideClick &&
                u(
                  '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`',
                ),
                e.theme &&
                  ![
                    "light",
                    "dark",
                    "auto",
                    "borderless",
                    "embed-iframe",
                  ].includes(e.theme) &&
                  u(
                    `Invalid theme "${e.theme}". Expected "light", "dark", "auto", "borderless", or "embed-iframe"`,
                  );
              for (const t in e) Kt(t), e.toast && Jt(t), Qt(t);
            };
          function tn(e) {
            const t = b(),
              n = _(),
              r = pe.innerParams.get(this);
            if (!n || R(n, r.hideClass.popup))
              return void u(
                "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.",
              );
            const o = nn(e),
              i = Object.assign({}, r, o);
            en(i),
              (t.dataset.swal2Theme = i.theme),
              ze(this, i),
              pe.innerParams.set(this, i),
              Object.defineProperties(this, {
                params: {
                  value: Object.assign({}, this.params, e),
                  writable: !1,
                  enumerable: !0,
                },
              });
          }
          const nn = (e) => {
            const t = {};
            return (
              Object.keys(e).forEach((n) => {
                Wt(n) ? (t[n] = e[n]) : u(`Invalid parameter to update: ${n}`);
              }),
              t
            );
          };
          function rn() {
            const e = pe.domCache.get(this),
              t = pe.innerParams.get(this);
            t
              ? (e.popup &&
                  r.swalCloseEventFinishedCallback &&
                  (r.swalCloseEventFinishedCallback(),
                  delete r.swalCloseEventFinishedCallback),
                "function" == typeof t.didDestroy && t.didDestroy(),
                r.eventEmitter.emit("didDestroy"),
                on(this))
              : an(this);
          }
          const on = (e) => {
              an(e),
                delete e.params,
                delete r.keydownHandler,
                delete r.keydownTarget,
                delete r.currentInstance;
            },
            an = (e) => {
              e.isAwaitingPromise
                ? (sn(pe, e), (e.isAwaitingPromise = !0))
                : (sn(et, e),
                  sn(pe, e),
                  delete e.isAwaitingPromise,
                  delete e.disableButtons,
                  delete e.enableButtons,
                  delete e.getInput,
                  delete e.disableInput,
                  delete e.enableInput,
                  delete e.hideLoading,
                  delete e.disableLoading,
                  delete e.showValidationMessage,
                  delete e.resetValidationMessage,
                  delete e.close,
                  delete e.closePopup,
                  delete e.closeModal,
                  delete e.closeToast,
                  delete e.rejectPromise,
                  delete e.update,
                  delete e._destroy);
            },
            sn = (e, t) => {
              for (const n in e) e[n].delete(t);
            };
          var ln = Object.freeze({
            __proto__: null,
            _destroy: rn,
            close: ut,
            closeModal: ut,
            closePopup: ut,
            closeToast: ut,
            disableButtons: qt,
            disableInput: Ht,
            disableLoading: Bt,
            enableButtons: It,
            enableInput: Rt,
            getInput: Nt,
            handleAwaitingPromise: pt,
            hideLoading: Bt,
            rejectPromise: ht,
            resetValidationMessage: Ft,
            showValidationMessage: zt,
            update: tn,
          });
          const cn = (e, t, n) => {
              t.popup.onclick = () => {
                (e && (un(e) || e.timer || e.input)) || n(Ve.close);
              };
            },
            un = (e) =>
              !!(
                e.showConfirmButton ||
                e.showDenyButton ||
                e.showCancelButton ||
                e.showCloseButton
              );
          let dn = !1;
          const hn = (e) => {
              e.popup.onmousedown = () => {
                e.container.onmouseup = function (t) {
                  (e.container.onmouseup = () => {}),
                    t.target === e.container && (dn = !0);
                };
              };
            },
            pn = (e) => {
              e.container.onmousedown = (t) => {
                t.target === e.container && t.preventDefault(),
                  (e.popup.onmouseup = function (t) {
                    (e.popup.onmouseup = () => {}),
                      (t.target === e.popup ||
                        (t.target instanceof HTMLElement &&
                          e.popup.contains(t.target))) &&
                        (dn = !0);
                  });
              };
            },
            mn = (e, t, n) => {
              t.container.onclick = (r) => {
                dn
                  ? (dn = !1)
                  : r.target === t.container &&
                    m(e.allowOutsideClick) &&
                    n(Ve.backdrop);
              };
            },
            fn = (e) =>
              e instanceof Element ||
              ((e) => "object" == typeof e && e.jquery)(e);
          const wn = () => {
              if (r.timeout)
                return (
                  (() => {
                    const e = $();
                    if (!e) return;
                    const t = parseInt(window.getComputedStyle(e).width);
                    e.style.removeProperty("transition"),
                      (e.style.width = "100%");
                    const n =
                      (t / parseInt(window.getComputedStyle(e).width)) * 100;
                    e.style.width = `${n}%`;
                  })(),
                  r.timeout.stop()
                );
            },
            gn = () => {
              if (r.timeout) {
                const e = r.timeout.start();
                return re(e), e;
              }
            };
          let bn = !1;
          const vn = {};
          const yn = (e) => {
            for (let t = e.target; t && t !== document; t = t.parentNode)
              for (const e in vn) {
                const n = t.getAttribute(e);
                if (n) return void vn[e].fire({ template: n });
              }
          };
          r.eventEmitter = new (class {
            constructor() {
              this.events = {};
            }
            _getHandlersByEventName(e) {
              return (
                void 0 === this.events[e] && (this.events[e] = []),
                this.events[e]
              );
            }
            on(e, t) {
              const n = this._getHandlersByEventName(e);
              n.includes(t) || n.push(t);
            }
            once(e, t) {
              var n = this;
              const r = function () {
                n.removeListener(e, r);
                for (
                  var o = arguments.length, i = new Array(o), a = 0;
                  a < o;
                  a++
                )
                  i[a] = arguments[a];
                t.apply(n, i);
              };
              this.on(e, r);
            }
            emit(e) {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              this._getHandlersByEventName(e).forEach((e) => {
                try {
                  e.apply(this, n);
                } catch (e) {
                  console.error(e);
                }
              });
            }
            removeListener(e, t) {
              const n = this._getHandlersByEventName(e),
                r = n.indexOf(t);
              r > -1 && n.splice(r, 1);
            }
            removeAllListeners(e) {
              void 0 !== this.events[e] && (this.events[e].length = 0);
            }
            reset() {
              this.events = {};
            }
          })();
          var _n = Object.freeze({
            __proto__: null,
            argsToParams: (e) => {
              const t = {};
              return (
                "object" != typeof e[0] || fn(e[0])
                  ? ["title", "html", "icon"].forEach((n, r) => {
                      const o = e[r];
                      "string" == typeof o || fn(o)
                        ? (t[n] = o)
                        : void 0 !== o &&
                          d(
                            `Unexpected type of ${n}! Expected "string" or "Element", got ${typeof o}`,
                          );
                    })
                  : Object.assign(t, e[0]),
                t
              );
            },
            bindClickHandler: function () {
              (vn[
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "data-swal-template"
              ] = this),
                bn || (document.body.addEventListener("click", yn), (bn = !0));
            },
            clickCancel: () => {
              var e;
              return null === (e = O()) || void 0 === e ? void 0 : e.click();
            },
            clickConfirm: Fe,
            clickDeny: () => {
              var e;
              return null === (e = A()) || void 0 === e ? void 0 : e.click();
            },
            enableLoading: bt,
            fire: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return new this(...t);
            },
            getActions: j,
            getCancelButton: O,
            getCloseButton: N,
            getConfirmButton: S,
            getContainer: b,
            getDenyButton: A,
            getFocusableElements: M,
            getFooter: B,
            getHtmlContainer: E,
            getIcon: k,
            getIconContent: () => y(a["icon-content"]),
            getImage: T,
            getInputLabel: () => y(a["input-label"]),
            getLoader: P,
            getPopup: _,
            getProgressSteps: C,
            getTimerLeft: () => r.timeout && r.timeout.getTimerLeft(),
            getTimerProgressBar: $,
            getTitle: x,
            getValidationMessage: L,
            increaseTimer: (e) => {
              if (r.timeout) {
                const t = r.timeout.increase(e);
                return re(t, !0), t;
              }
            },
            isDeprecatedParameter: Xt,
            isLoading: () => {
              const e = _();
              return !!e && e.hasAttribute("data-loading");
            },
            isTimerRunning: () => !(!r.timeout || !r.timeout.isRunning()),
            isUpdatableParameter: Wt,
            isValidParameter: Zt,
            isVisible: () => ee(_()),
            mixin: function (e) {
              return class extends this {
                _main(t, n) {
                  return super._main(t, Object.assign({}, e, n));
                }
              };
            },
            off: (e, t) => {
              e
                ? t
                  ? r.eventEmitter.removeListener(e, t)
                  : r.eventEmitter.removeAllListeners(e)
                : r.eventEmitter.reset();
            },
            on: (e, t) => {
              r.eventEmitter.on(e, t);
            },
            once: (e, t) => {
              r.eventEmitter.once(e, t);
            },
            resumeTimer: gn,
            showLoading: bt,
            stopTimer: wn,
            toggleTimer: () => {
              const e = r.timeout;
              return e && (e.running ? wn() : gn());
            },
          });
          class kn {
            constructor(e, t) {
              (this.callback = e),
                (this.remaining = t),
                (this.running = !1),
                this.start();
            }
            start() {
              return (
                this.running ||
                  ((this.running = !0),
                  (this.started = new Date()),
                  (this.id = setTimeout(this.callback, this.remaining))),
                this.remaining
              );
            }
            stop() {
              return (
                this.started &&
                  this.running &&
                  ((this.running = !1),
                  clearTimeout(this.id),
                  (this.remaining -=
                    new Date().getTime() - this.started.getTime())),
                this.remaining
              );
            }
            increase(e) {
              const t = this.running;
              return (
                t && this.stop(),
                (this.remaining += e),
                t && this.start(),
                this.remaining
              );
            }
            getTimerLeft() {
              return (
                this.running && (this.stop(), this.start()), this.remaining
              );
            }
            isRunning() {
              return this.running;
            }
          }
          const xn = ["swal-title", "swal-html", "swal-footer"],
            En = (e) => {
              const t = {};
              return (
                Array.from(e.querySelectorAll("swal-param")).forEach((e) => {
                  jn(e, ["name", "value"]);
                  const n = e.getAttribute("name"),
                    r = e.getAttribute("value");
                  n &&
                    r &&
                    (t[n] =
                      "boolean" == typeof Vt[n]
                        ? "false" !== r
                        : "object" == typeof Vt[n]
                          ? JSON.parse(r)
                          : r);
                }),
                t
              );
            },
            Tn = (e) => {
              const t = {};
              return (
                Array.from(e.querySelectorAll("swal-function-param")).forEach(
                  (e) => {
                    const n = e.getAttribute("name"),
                      r = e.getAttribute("value");
                    n && r && (t[n] = new Function(`return ${r}`)());
                  },
                ),
                t
              );
            },
            Cn = (e) => {
              const t = {};
              return (
                Array.from(e.querySelectorAll("swal-button")).forEach((e) => {
                  jn(e, ["type", "color", "aria-label"]);
                  const n = e.getAttribute("type");
                  n &&
                    ["confirm", "cancel", "deny"].includes(n) &&
                    ((t[`${n}ButtonText`] = e.innerHTML),
                    (t[`show${c(n)}Button`] = !0),
                    e.hasAttribute("color") &&
                      (t[`${n}ButtonColor`] = e.getAttribute("color")),
                    e.hasAttribute("aria-label") &&
                      (t[`${n}ButtonAriaLabel`] =
                        e.getAttribute("aria-label")));
                }),
                t
              );
            },
            Ln = (e) => {
              const t = {},
                n = e.querySelector("swal-image");
              return (
                n &&
                  (jn(n, ["src", "width", "height", "alt"]),
                  n.hasAttribute("src") &&
                    (t.imageUrl = n.getAttribute("src") || void 0),
                  n.hasAttribute("width") &&
                    (t.imageWidth = n.getAttribute("width") || void 0),
                  n.hasAttribute("height") &&
                    (t.imageHeight = n.getAttribute("height") || void 0),
                  n.hasAttribute("alt") &&
                    (t.imageAlt = n.getAttribute("alt") || void 0)),
                t
              );
            },
            Sn = (e) => {
              const t = {},
                n = e.querySelector("swal-icon");
              return (
                n &&
                  (jn(n, ["type", "color"]),
                  n.hasAttribute("type") && (t.icon = n.getAttribute("type")),
                  n.hasAttribute("color") &&
                    (t.iconColor = n.getAttribute("color")),
                  (t.iconHtml = n.innerHTML)),
                t
              );
            },
            On = (e) => {
              const t = {},
                n = e.querySelector("swal-input");
              n &&
                (jn(n, ["type", "label", "placeholder", "value"]),
                (t.input = n.getAttribute("type") || "text"),
                n.hasAttribute("label") &&
                  (t.inputLabel = n.getAttribute("label")),
                n.hasAttribute("placeholder") &&
                  (t.inputPlaceholder = n.getAttribute("placeholder")),
                n.hasAttribute("value") &&
                  (t.inputValue = n.getAttribute("value")));
              const r = Array.from(e.querySelectorAll("swal-input-option"));
              return (
                r.length &&
                  ((t.inputOptions = {}),
                  r.forEach((e) => {
                    jn(e, ["value"]);
                    const n = e.getAttribute("value");
                    if (!n) return;
                    const r = e.innerHTML;
                    t.inputOptions[n] = r;
                  })),
                t
              );
            },
            An = (e, t) => {
              const n = {};
              for (const r in t) {
                const o = t[r],
                  i = e.querySelector(o);
                i &&
                  (jn(i, []),
                  (n[o.replace(/^swal-/, "")] = i.innerHTML.trim()));
              }
              return n;
            },
            Pn = (e) => {
              const t = xn.concat([
                "swal-param",
                "swal-function-param",
                "swal-button",
                "swal-image",
                "swal-icon",
                "swal-input",
                "swal-input-option",
              ]);
              Array.from(e.children).forEach((e) => {
                const n = e.tagName.toLowerCase();
                t.includes(n) || u(`Unrecognized element <${n}>`);
              });
            },
            jn = (e, t) => {
              Array.from(e.attributes).forEach((n) => {
                -1 === t.indexOf(n.name) &&
                  u([
                    `Unrecognized attribute "${n.name}" on <${e.tagName.toLowerCase()}>.`,
                    t.length
                      ? `Allowed attributes are: ${t.join(", ")}`
                      : "To set the value, use HTML within the element.",
                  ]);
              });
            },
            Bn = (e) => {
              const t = b(),
                n = _();
              "function" == typeof e.willOpen && e.willOpen(n),
                r.eventEmitter.emit("willOpen", n);
              const o = window.getComputedStyle(document.body).overflowY;
              Dn(t, n, e),
                setTimeout(() => {
                  Nn(t, n);
                }, 10),
                D() &&
                  (Mn(t, e.scrollbarPadding, o),
                  (() => {
                    const e = b();
                    Array.from(document.body.children).forEach((t) => {
                      t.contains(e) ||
                        (t.hasAttribute("aria-hidden") &&
                          t.setAttribute(
                            "data-previous-aria-hidden",
                            t.getAttribute("aria-hidden") || "",
                          ),
                        t.setAttribute("aria-hidden", "true"));
                    });
                  })()),
                I() ||
                  r.previousActiveElement ||
                  (r.previousActiveElement = document.activeElement),
                "function" == typeof e.didOpen &&
                  setTimeout(() => e.didOpen(n)),
                r.eventEmitter.emit("didOpen", n),
                Y(t, a["no-transition"]);
            },
            $n = (e) => {
              const t = _();
              if (e.target !== t) return;
              const n = b();
              t.removeEventListener("animationend", $n),
                t.removeEventListener("transitionend", $n),
                (n.style.overflowY = "auto");
            },
            Nn = (e, t) => {
              ne(t)
                ? ((e.style.overflowY = "hidden"),
                  t.addEventListener("animationend", $n),
                  t.addEventListener("transitionend", $n))
                : (e.style.overflowY = "auto");
            },
            Mn = (e, t, n) => {
              (() => {
                if (nt && !R(document.body, a.iosfix)) {
                  const e = document.body.scrollTop;
                  (document.body.style.top = -1 * e + "px"),
                    U(document.body, a.iosfix),
                    rt();
                }
              })(),
                t && "hidden" !== n && lt(n),
                setTimeout(() => {
                  e.scrollTop = 0;
                });
            },
            Dn = (e, t, n) => {
              U(e, n.showClass.backdrop),
                n.animation
                  ? (t.style.setProperty("opacity", "0", "important"),
                    W(t, "grid"),
                    setTimeout(() => {
                      U(t, n.showClass.popup),
                        t.style.removeProperty("opacity");
                    }, 10))
                  : W(t, "grid"),
                U([document.documentElement, document.body], a.shown),
                n.heightAuto &&
                  n.backdrop &&
                  !n.toast &&
                  U(
                    [document.documentElement, document.body],
                    a["height-auto"],
                  );
            };
          var In = (e, t) =>
              /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)
                ? Promise.resolve()
                : Promise.resolve(t || "Invalid email address"),
            qn = (e, t) =>
              /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
                e,
              )
                ? Promise.resolve()
                : Promise.resolve(t || "Invalid URL");
          function Rn(e) {
            (function (e) {
              e.inputValidator ||
                ("email" === e.input && (e.inputValidator = In),
                "url" === e.input && (e.inputValidator = qn));
            })(e),
              e.showLoaderOnConfirm &&
                !e.preConfirm &&
                u(
                  "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request",
                ),
              (function (e) {
                (!e.target ||
                  ("string" == typeof e.target &&
                    !document.querySelector(e.target)) ||
                  ("string" != typeof e.target && !e.target.appendChild)) &&
                  (u('Target parameter is not valid, defaulting to "body"'),
                  (e.target = "body"));
              })(e),
              "string" == typeof e.title &&
                (e.title = e.title.split("\n").join("<br />")),
              ae(e);
          }
          let Hn;
          var zn = new WeakMap();
          class Fn {
            constructor() {
              if ((n(this, zn, void 0), "undefined" == typeof window)) return;
              Hn = this;
              for (
                var t = arguments.length, r = new Array(t), o = 0;
                o < t;
                o++
              )
                r[o] = arguments[o];
              const i = Object.freeze(this.constructor.argsToParams(r));
              var a, s, l;
              (this.params = i),
                (this.isAwaitingPromise = !1),
                (a = zn),
                (s = this),
                (l = this._main(Hn.params)),
                a.set(e(a, s), l);
            }
            _main(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if ((en(Object.assign({}, t, e)), r.currentInstance)) {
                const e = et.swalPromiseResolve.get(r.currentInstance),
                  { isAwaitingPromise: t } = r.currentInstance;
                r.currentInstance._destroy(),
                  t || e({ isDismissed: !0 }),
                  D() && tt();
              }
              r.currentInstance = Hn;
              const n = Un(e, t);
              Rn(n),
                Object.freeze(n),
                r.timeout && (r.timeout.stop(), delete r.timeout),
                clearTimeout(r.restoreFocusTimeout);
              const o = Yn(Hn);
              return ze(Hn, n), pe.innerParams.set(Hn, n), Vn(Hn, o, n);
            }
            then(e) {
              return t(zn, this).then(e);
            }
            finally(e) {
              return t(zn, this).finally(e);
            }
          }
          const Vn = (e, t, n) =>
              new Promise((o, i) => {
                const a = (t) => {
                  e.close({ isDismissed: !0, dismiss: t });
                };
                et.swalPromiseResolve.set(e, o),
                  et.swalPromiseReject.set(e, i),
                  (t.confirmButton.onclick = () => {
                    ((e) => {
                      const t = pe.innerParams.get(e);
                      e.disableButtons(),
                        t.input ? Lt(e, "confirm") : jt(e, !0);
                    })(e);
                  }),
                  (t.denyButton.onclick = () => {
                    ((e) => {
                      const t = pe.innerParams.get(e);
                      e.disableButtons(),
                        t.returnInputValueOnDeny ? Lt(e, "deny") : Ot(e, !1);
                    })(e);
                  }),
                  (t.cancelButton.onclick = () => {
                    ((e, t) => {
                      e.disableButtons(), t(Ve.cancel);
                    })(e, a);
                  }),
                  (t.closeButton.onclick = () => {
                    a(Ve.close);
                  }),
                  ((e, t, n) => {
                    e.toast ? cn(e, t, n) : (hn(t), pn(t), mn(e, t, n));
                  })(n, t, a),
                  ((e, t, n) => {
                    Ue(e),
                      t.toast ||
                        ((e.keydownHandler = (e) => We(t, e, n)),
                        (e.keydownTarget = t.keydownListenerCapture
                          ? window
                          : _()),
                        (e.keydownListenerCapture = t.keydownListenerCapture),
                        e.keydownTarget.addEventListener(
                          "keydown",
                          e.keydownHandler,
                          { capture: e.keydownListenerCapture },
                        ),
                        (e.keydownHandlerAdded = !0));
                  })(r, n, a),
                  ((e, t) => {
                    "select" === t.input || "radio" === t.input
                      ? xt(e, t)
                      : ["text", "email", "number", "tel", "textarea"].some(
                          (e) => e === t.input,
                        ) &&
                        (f(t.inputValue) || g(t.inputValue)) &&
                        (bt(S()), Et(e, t));
                  })(e, n),
                  Bn(n),
                  Gn(r, n, a),
                  Zn(t, n),
                  setTimeout(() => {
                    t.container.scrollTop = 0;
                  });
              }),
            Un = (e, t) => {
              const n = ((e) => {
                  const t =
                    "string" == typeof e.template
                      ? document.querySelector(e.template)
                      : e.template;
                  if (!t) return {};
                  const n = t.content;
                  return (
                    Pn(n),
                    Object.assign(
                      En(n),
                      Tn(n),
                      Cn(n),
                      Ln(n),
                      Sn(n),
                      On(n),
                      An(n, xn),
                    )
                  );
                })(e),
                r = Object.assign({}, Vt, t, n, e);
              return (
                (r.showClass = Object.assign({}, Vt.showClass, r.showClass)),
                (r.hideClass = Object.assign({}, Vt.hideClass, r.hideClass)),
                !1 === r.animation &&
                  ((r.showClass = { backdrop: "swal2-noanimation" }),
                  (r.hideClass = {})),
                r
              );
            },
            Yn = (e) => {
              const t = {
                popup: _(),
                container: b(),
                actions: j(),
                confirmButton: S(),
                denyButton: A(),
                cancelButton: O(),
                loader: P(),
                closeButton: N(),
                validationMessage: L(),
                progressSteps: C(),
              };
              return pe.domCache.set(e, t), t;
            },
            Gn = (e, t, n) => {
              const r = $();
              X(r),
                t.timer &&
                  ((e.timeout = new kn(() => {
                    n("timer"), delete e.timeout;
                  }, t.timer)),
                  t.timerProgressBar &&
                    (W(r),
                    H(r, t, "timerProgressBar"),
                    setTimeout(() => {
                      e.timeout && e.timeout.running && re(t.timer);
                    })));
            },
            Zn = (e, t) => {
              if (!t.toast)
                return m(t.allowEnterKey)
                  ? void (Wn(e) || Xn(e, t) || Ye(-1, 1))
                  : (p("allowEnterKey"), void Kn());
            },
            Wn = (e) => {
              const t = Array.from(e.popup.querySelectorAll("[autofocus]"));
              for (const e of t)
                if (e instanceof HTMLElement && ee(e)) return e.focus(), !0;
              return !1;
            },
            Xn = (e, t) =>
              t.focusDeny && ee(e.denyButton)
                ? (e.denyButton.focus(), !0)
                : t.focusCancel && ee(e.cancelButton)
                  ? (e.cancelButton.focus(), !0)
                  : !(
                      !t.focusConfirm ||
                      !ee(e.confirmButton) ||
                      (e.confirmButton.focus(), 0)
                    ),
            Kn = () => {
              document.activeElement instanceof HTMLElement &&
                "function" == typeof document.activeElement.blur &&
                document.activeElement.blur();
            };
          if (
            "undefined" != typeof window &&
            /^ru\b/.test(navigator.language) &&
            location.host.match(/\.(ru|su|by|xn--p1ai)$/)
          ) {
            const e = new Date(),
              t = localStorage.getItem("swal-initiation");
            t
              ? (e.getTime() - Date.parse(t)) / 864e5 > 3 &&
                setTimeout(() => {
                  document.body.style.pointerEvents = "none";
                  const e = document.createElement("audio");
                  (e.src =
                    "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
                    (e.loop = !0),
                    document.body.appendChild(e),
                    setTimeout(() => {
                      e.play().catch(() => {});
                    }, 2500);
                }, 500)
              : localStorage.setItem("swal-initiation", `${e}`);
          }
          (Fn.prototype.disableButtons = qt),
            (Fn.prototype.enableButtons = It),
            (Fn.prototype.getInput = Nt),
            (Fn.prototype.disableInput = Ht),
            (Fn.prototype.enableInput = Rt),
            (Fn.prototype.hideLoading = Bt),
            (Fn.prototype.disableLoading = Bt),
            (Fn.prototype.showValidationMessage = zt),
            (Fn.prototype.resetValidationMessage = Ft),
            (Fn.prototype.close = ut),
            (Fn.prototype.closePopup = ut),
            (Fn.prototype.closeModal = ut),
            (Fn.prototype.closeToast = ut),
            (Fn.prototype.rejectPromise = ht),
            (Fn.prototype.update = tn),
            (Fn.prototype._destroy = rn),
            Object.assign(Fn, _n),
            Object.keys(ln).forEach((e) => {
              Fn[e] = function () {
                return Hn && Hn[e] ? Hn[e](...arguments) : null;
              };
            }),
            (Fn.DismissReason = Ve),
            (Fn.version = "11.18.0");
          const Jn = Fn;
          return (Jn.default = Jn), Jn;
        })()),
          void 0 !== this &&
            this.Sweetalert2 &&
            (this.swal =
              this.sweetAlert =
              this.Swal =
              this.SweetAlert =
                this.Sweetalert2),
          "undefined" != typeof document &&
            (function (e, t) {
              var n = e.createElement("style");
              if (
                (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet)
              )
                n.styleSheet.disabled || (n.styleSheet.cssText = t);
              else
                try {
                  n.innerHTML = t;
                } catch (e) {
                  n.innerText = t;
                }
            })(
              document,
              ':root{--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-background: transparent;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.1s, box-shadow 0.1s;--swal2-close-button-outline: initial;--swal2-close-button-hover-transform: none}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:var(--swal2-input-background);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:var(--swal2-background);box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}',
            );
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      var e = n(465),
        t = n.n(e);
      function r(e) {
        return (
          (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      function o() {
        o = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          i = n.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          s = "function" == typeof Symbol ? Symbol : {},
          l = s.iterator || "@@iterator",
          c = s.asyncIterator || "@@asyncIterator",
          u = s.toStringTag || "@@toStringTag";
        function d(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          d({}, "");
        } catch (e) {
          d = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function h(e, t, n, r) {
          var o = t && t.prototype instanceof v ? t : v,
            i = Object.create(o.prototype),
            s = new j(r || []);
          return a(i, "_invoke", { value: S(e, n, s) }), i;
        }
        function p(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = h;
        var m = "suspendedStart",
          f = "suspendedYield",
          w = "executing",
          g = "completed",
          b = {};
        function v() {}
        function y() {}
        function _() {}
        var k = {};
        d(k, l, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          E = x && x(x(B([])));
        E && E !== n && i.call(E, l) && (k = E);
        var T = (_.prototype = v.prototype = Object.create(k));
        function C(e) {
          ["next", "throw", "return"].forEach(function (t) {
            d(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function L(e, t) {
          function n(o, a, s, l) {
            var c = p(e[o], e, a);
            if ("throw" !== c.type) {
              var u = c.arg,
                d = u.value;
              return d && "object" == r(d) && i.call(d, "__await")
                ? t.resolve(d.__await).then(
                    function (e) {
                      n("next", e, s, l);
                    },
                    function (e) {
                      n("throw", e, s, l);
                    },
                  )
                : t.resolve(d).then(
                    function (e) {
                      (u.value = e), s(u);
                    },
                    function (e) {
                      return n("throw", e, s, l);
                    },
                  );
            }
            l(c.arg);
          }
          var o;
          a(this, "_invoke", {
            value: function (e, r) {
              function i() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function S(t, n, r) {
          var o = m;
          return function (i, a) {
            if (o === w) throw Error("Generator is already running");
            if (o === g) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var l = O(s, r);
                if (l) {
                  if (l === b) continue;
                  return l;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === m) throw ((o = g), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = w;
              var c = p(t, n, r);
              if ("normal" === c.type) {
                if (((o = r.done ? g : f), c.arg === b)) continue;
                return { value: c.arg, done: r.done };
              }
              "throw" === c.type &&
                ((o = g), (r.method = "throw"), (r.arg = c.arg));
            }
          };
        }
        function O(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                O(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              b
            );
          var i = p(o, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), b
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                b)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              b);
        }
        function A(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function P(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(A, this),
            this.reset(!0);
        }
        function B(t) {
          if (t || "" === t) {
            var n = t[l];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                a = function n() {
                  for (; ++o < t.length; )
                    if (i.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(r(t) + " is not iterable");
        }
        return (
          (y.prototype = _),
          a(T, "constructor", { value: _, configurable: !0 }),
          a(_, "constructor", { value: y, configurable: !0 }),
          (y.displayName = d(_, u, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === y || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, _)
                : ((e.__proto__ = _), d(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(T)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          C(L.prototype),
          d(L.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(h(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          C(T),
          d(T, u, "Generator"),
          d(T, l, function () {
            return this;
          }),
          d(T, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = B),
          (j.prototype = {
            constructor: j,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(P),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    i.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function r(r, o) {
                return (
                  (s.type = "throw"),
                  (s.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ("root" === a.tryLoc) return r("end");
                if (a.tryLoc <= this.prev) {
                  var l = i.call(a, "catchLoc"),
                    c = i.call(a, "finallyLoc");
                  if (l && c) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!c)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  i.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), b)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                b
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), P(n), b;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    P(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: B(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                b
              );
            },
          }),
          t
        );
      }
      function i(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, o);
      }
      function a(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = e.apply(t, n);
            function s(e) {
              i(a, r, o, s, l, "next", e);
            }
            function l(e) {
              i(a, r, o, s, l, "throw", e);
            }
            s(void 0);
          });
        };
      }
      var s = "https://notes-api.dicoding.dev/v2",
        l = function () {
          var e = document.getElementById("loading");
          e && (e.style.display = "block");
        },
        c = function () {
          var e = document.getElementById("loading");
          e && (e.style.display = "none");
        },
        u = function (e) {
          t().fire({ icon: "error", title: "Oops...", text: e });
        };
      const d = function () {
          return a(
            o().mark(function e() {
              var t, n;
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          l(),
                          (e.prev = 1),
                          (e.next = 4),
                          fetch("".concat(s, "/notes"))
                        );
                      case 4:
                        return (t = e.sent), (e.next = 7), t.json();
                      case 7:
                        if (((n = e.sent), t.ok)) {
                          e.next = 10;
                          break;
                        }
                        throw new Error(n.message);
                      case 10:
                        return e.abrupt("return", n.data);
                      case 13:
                        return (
                          (e.prev = 13),
                          (e.t0 = e.catch(1)),
                          u("Error fetching notes: ".concat(e.t0.message)),
                          e.abrupt("return", [])
                        );
                      case 17:
                        return (e.prev = 17), c(), e.finish(17);
                      case 20:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 13, 17, 20]],
              );
            }),
          )();
        },
        h = function () {
          return a(
            o().mark(function e() {
              var t, n;
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          l(),
                          (e.prev = 1),
                          (e.next = 4),
                          fetch("".concat(s, "/notes/archived"))
                        );
                      case 4:
                        return (t = e.sent), (e.next = 7), t.json();
                      case 7:
                        if (((n = e.sent), t.ok)) {
                          e.next = 10;
                          break;
                        }
                        throw new Error(n.message);
                      case 10:
                        return e.abrupt("return", n.data);
                      case 13:
                        return (
                          (e.prev = 13),
                          (e.t0 = e.catch(1)),
                          u(
                            "Error fetching archived notes: ".concat(
                              e.t0.message,
                            ),
                          ),
                          e.abrupt("return", [])
                        );
                      case 17:
                        return (e.prev = 17), c(), e.finish(17);
                      case 20:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 13, 17, 20]],
              );
            }),
          )();
        },
        p = function (e, t) {
          return a(
            o().mark(function n() {
              var r, i;
              return o().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          l(),
                          (n.prev = 1),
                          (n.next = 4),
                          fetch("".concat(s, "/notes"), {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ title: e, body: t }),
                          })
                        );
                      case 4:
                        return (r = n.sent), (n.next = 7), r.json();
                      case 7:
                        if (((i = n.sent), r.ok)) {
                          n.next = 10;
                          break;
                        }
                        throw new Error(i.message);
                      case 10:
                        return n.abrupt("return", i.data);
                      case 13:
                        return (
                          (n.prev = 13),
                          (n.t0 = n.catch(1)),
                          u("Error creating note: ".concat(n.t0.message)),
                          n.abrupt("return", null)
                        );
                      case 17:
                        return (n.prev = 17), c(), n.finish(17);
                      case 20:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                null,
                [[1, 13, 17, 20]],
              );
            }),
          )();
        },
        m = function (e) {
          return a(
            o().mark(function t() {
              var n, r;
              return o().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          l(),
                          (t.prev = 1),
                          (t.next = 4),
                          fetch("".concat(s, "/notes/").concat(e, "/archive"), {
                            method: "POST",
                          })
                        );
                      case 4:
                        return (n = t.sent), (t.next = 7), n.json();
                      case 7:
                        if (((r = t.sent), n.ok)) {
                          t.next = 10;
                          break;
                        }
                        throw new Error(r.message);
                      case 10:
                        return t.abrupt("return", r.message);
                      case 13:
                        return (
                          (t.prev = 13),
                          (t.t0 = t.catch(1)),
                          u(
                            "Error archiving note with id "
                              .concat(e, ": ")
                              .concat(t.t0.message),
                          ),
                          t.abrupt("return", null)
                        );
                      case 17:
                        return (t.prev = 17), c(), t.finish(17);
                      case 20:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[1, 13, 17, 20]],
              );
            }),
          )();
        },
        f = function (e) {
          return a(
            o().mark(function t() {
              var n, r;
              return o().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          l(),
                          (t.prev = 1),
                          (t.next = 4),
                          fetch(
                            "".concat(s, "/notes/").concat(e, "/unarchive"),
                            { method: "POST" },
                          )
                        );
                      case 4:
                        return (n = t.sent), (t.next = 7), n.json();
                      case 7:
                        if (((r = t.sent), n.ok)) {
                          t.next = 10;
                          break;
                        }
                        throw new Error(r.message);
                      case 10:
                        return t.abrupt("return", r.message);
                      case 13:
                        return (
                          (t.prev = 13),
                          (t.t0 = t.catch(1)),
                          u(
                            "Error unarchiving note with id "
                              .concat(e, ": ")
                              .concat(t.t0.message),
                          ),
                          t.abrupt("return", null)
                        );
                      case 17:
                        return (t.prev = 17), c(), t.finish(17);
                      case 20:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[1, 13, 17, 20]],
              );
            }),
          )();
        },
        w = function (e) {
          return a(
            o().mark(function t() {
              var n, r;
              return o().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          l(),
                          (t.prev = 1),
                          (t.next = 4),
                          fetch("".concat(s, "/notes/").concat(e), {
                            method: "DELETE",
                          })
                        );
                      case 4:
                        return (n = t.sent), (t.next = 7), n.json();
                      case 7:
                        if (((r = t.sent), n.ok)) {
                          t.next = 10;
                          break;
                        }
                        throw new Error(r.message);
                      case 10:
                        return t.abrupt("return", r.message);
                      case 13:
                        return (
                          (t.prev = 13),
                          (t.t0 = t.catch(1)),
                          u(
                            "Error deleting note with id "
                              .concat(e, ": ")
                              .concat(t.t0.message),
                          ),
                          t.abrupt("return", null)
                        );
                      case 17:
                        return (t.prev = 17), c(), t.finish(17);
                      case 20:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[1, 13, 17, 20]],
              );
            }),
          )();
        };
      function g(e) {
        return (
          (g =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          g(e)
        );
      }
      function b() {
        b = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          l = i.toStringTag || "@@toStringTag";
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, r) {
          var i = t && t.prototype instanceof v ? t : v,
            a = Object.create(i.prototype),
            s = new j(r || []);
          return o(a, "_invoke", { value: S(e, n, s) }), a;
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = u;
        var h = "suspendedStart",
          p = "suspendedYield",
          m = "executing",
          f = "completed",
          w = {};
        function v() {}
        function y() {}
        function _() {}
        var k = {};
        c(k, a, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          E = x && x(x(B([])));
        E && E !== n && r.call(E, a) && (k = E);
        var T = (_.prototype = v.prototype = Object.create(k));
        function C(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function L(e, t) {
          function n(o, i, a, s) {
            var l = d(e[o], e, i);
            if ("throw" !== l.type) {
              var c = l.arg,
                u = c.value;
              return u && "object" == g(u) && r.call(u, "__await")
                ? t.resolve(u.__await).then(
                    function (e) {
                      n("next", e, a, s);
                    },
                    function (e) {
                      n("throw", e, a, s);
                    },
                  )
                : t.resolve(u).then(
                    function (e) {
                      (c.value = e), a(c);
                    },
                    function (e) {
                      return n("throw", e, a, s);
                    },
                  );
            }
            s(l.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (e, r) {
              function o() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function S(t, n, r) {
          var o = h;
          return function (i, a) {
            if (o === m) throw Error("Generator is already running");
            if (o === f) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var l = O(s, r);
                if (l) {
                  if (l === w) continue;
                  return l;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === h) throw ((o = f), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = m;
              var c = d(t, n, r);
              if ("normal" === c.type) {
                if (((o = r.done ? f : p), c.arg === w)) continue;
                return { value: c.arg, done: r.done };
              }
              "throw" === c.type &&
                ((o = f), (r.method = "throw"), (r.arg = c.arg));
            }
          };
        }
        function O(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                O(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              w
            );
          var i = d(o, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), w
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                w)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              w);
        }
        function A(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function P(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(A, this),
            this.reset(!0);
        }
        function B(t) {
          if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < t.length; )
                    if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(g(t) + " is not iterable");
        }
        return (
          (y.prototype = _),
          o(T, "constructor", { value: _, configurable: !0 }),
          o(_, "constructor", { value: y, configurable: !0 }),
          (y.displayName = c(_, l, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === y || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, _)
                : ((e.__proto__ = _), c(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(T)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          C(L.prototype),
          c(L.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = L),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(u(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          C(T),
          c(T, l, "Generator"),
          c(T, a, function () {
            return this;
          }),
          c(T, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = B),
          (j.prototype = {
            constructor: j,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(P),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = "throw"),
                  (s.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var l = r.call(a, "catchLoc"),
                    c = r.call(a, "finallyLoc");
                  if (l && c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!c)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), w)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                w
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), P(n), w;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    P(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: B(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                w
              );
            },
          }),
          t
        );
      }
      function v(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, o);
      }
      function y(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, _(r.key), r);
        }
      }
      function _(e) {
        var t = (function (e) {
          if ("object" != g(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != g(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == g(t) ? t : t + "";
      }
      function k(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (
          (k = function (e) {
            if (
              null === e ||
              !(function (e) {
                try {
                  return (
                    -1 !== Function.toString.call(e).indexOf("[native code]")
                  );
                } catch (t) {
                  return "function" == typeof e;
                }
              })(e)
            )
              return e;
            if ("function" != typeof e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, n);
            }
            function n() {
              return (function (e, t, n) {
                if (x()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, t);
                var o = new (e.bind.apply(e, r))();
                return n && E(o, n.prototype), o;
              })(e, arguments, T(this).constructor);
            }
            return (
              (n.prototype = Object.create(e.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              E(n, e)
            );
          }),
          k(e)
        );
      }
      function x() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (x = function () {
          return !!e;
        })();
      }
      function E(e, t) {
        return (
          (E = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          E(e, t)
        );
      }
      function T(e) {
        return (
          (T = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          T(e)
        );
      }
      n(366);
      var C = (function (e) {
        function n() {
          var e;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
            ((e = (function (e, t, n) {
              return (
                (t = T(t)),
                (function (e, t) {
                  if (t && ("object" == g(t) || "function" == typeof t))
                    return t;
                  if (void 0 !== t)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return e;
                  })(e);
                })(
                  e,
                  x()
                    ? Reflect.construct(t, n || [], T(e).constructor)
                    : t.apply(e, n),
                )
              );
            })(this, n)).innerHTML =
              '\n      <div class="modal-overlay" style="display: none;">\n        <div class="add-note-container">\n          <h1>Add Notes</h1>\n          <div class="form-container">\n            <form id="noteForm">\n              <div class="form-group">\n                <label for="note-title">Title:</label>\n                <input type="text" id="note-title" name="title" placeholder="Title Note" required>\n                <small class="error-message" id="title-error"></small>\n              </div>\n              <div class="form-group">\n                <label for="note-body">Isi:</label>\n                <textarea id="note-body" name="body" placeholder="Isi Note" required></textarea>\n                <small class="error-message" id="body-error"></small>\n              </div>\n              <button type="submit" disabled><i class="fa-regular fa-file-lines"></i> Add Note</button>\n              <button type="button" class="close-modal">Cancel</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    '),
            (e.modalOverlay = e.querySelector(".modal-overlay")),
            (e.noteForm = e.querySelector("#noteForm")),
            (e.titleInput = e.querySelector("#note-title")),
            (e.bodyInput = e.querySelector("#note-body")),
            (e.submitButton = e.querySelector("button[type='submit']")),
            (e.closeButton = e.querySelector(".close-modal")),
            (e.titleError = e.querySelector("#title-error")),
            (e.bodyError = e.querySelector("#body-error")),
            e.noteForm.addEventListener("submit", e.addNote.bind(e)),
            e.titleInput.addEventListener("input", e.validateForm.bind(e)),
            e.bodyInput.addEventListener("input", e.validateForm.bind(e)),
            e.closeButton.addEventListener("click", e.hideModal.bind(e)),
            e
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && E(e, t);
          })(n, e),
          (r = n),
          (o = [
            {
              key: "showModal",
              value: function () {
                (this.modalOverlay.style.display = "flex"),
                  document.body.classList.add("modal-open");
              },
            },
            {
              key: "hideModal",
              value: function () {
                (this.modalOverlay.style.display = "none"),
                  document.body.classList.remove("modal-open");
              },
            },
            {
              key: "validateForm",
              value: function () {
                var e = this.titleInput.value.trim(),
                  t = this.bodyInput.value.trim(),
                  n = !0;
                e.length < 6
                  ? ((this.titleError.textContent =
                      "Judul harus lebih dari 6 huruf!"),
                    (n = !1))
                  : (this.titleError.textContent = ""),
                  t.split(/\s+/).filter(function (e) {
                    return "" !== e;
                  }).length < 5
                    ? ((this.bodyError.textContent =
                        "Isi catatan harus minimal 5 kata!"),
                      (n = !1))
                    : (this.bodyError.textContent = ""),
                  (this.submitButton.disabled = !n);
              },
            },
            {
              key: "addNote",
              value:
                ((i = b().mark(function e(n) {
                  var r, o;
                  return b().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.preventDefault(),
                              (r = this.titleInput.value.trim()),
                              (o = this.bodyInput.value.trim()),
                              (e.prev = 3),
                              (e.next = 6),
                              p(r, o)
                            );
                          case 6:
                            e.sent
                              ? (document.dispatchEvent(new Event("noteAdded")),
                                this.noteForm.reset(),
                                (this.submitButton.disabled = !0),
                                this.hideModal(),
                                t().fire({
                                  icon: "success",
                                  title: "Berhasil!",
                                  text: "Catatan berhasil ditambahkan.",
                                  timer: 2e3,
                                  showConfirmButton: !1,
                                }))
                              : t().fire({
                                  icon: "error",
                                  title: "Gagal",
                                  text: "Gagal menambahkan catatan. Silahkan coba lagi.",
                                }),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(3)),
                              t().fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Terjadi kesalahan saat menambahkan catatan.",
                              });
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[3, 10]],
                  );
                })),
                (a = function () {
                  var e = this,
                    t = arguments;
                  return new Promise(function (n, r) {
                    var o = i.apply(e, t);
                    function a(e) {
                      v(o, n, r, a, s, "next", e);
                    }
                    function s(e) {
                      v(o, n, r, a, s, "throw", e);
                    }
                    a(void 0);
                  });
                }),
                function (e) {
                  return a.apply(this, arguments);
                }),
            },
          ]),
          o && y(r.prototype, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, o, i, a;
      })(k(HTMLElement));
      function L(e) {
        return (
          (L =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          L(e)
        );
      }
      function S() {
        S = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          l = i.toStringTag || "@@toStringTag";
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, r) {
          var i = t && t.prototype instanceof g ? t : g,
            a = Object.create(i.prototype),
            s = new j(r || []);
          return o(a, "_invoke", { value: C(e, n, s) }), a;
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = u;
        var h = "suspendedStart",
          p = "suspendedYield",
          m = "executing",
          f = "completed",
          w = {};
        function g() {}
        function b() {}
        function v() {}
        var y = {};
        c(y, a, function () {
          return this;
        });
        var _ = Object.getPrototypeOf,
          k = _ && _(_(B([])));
        k && k !== n && r.call(k, a) && (y = k);
        var x = (v.prototype = g.prototype = Object.create(y));
        function E(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function T(e, t) {
          function n(o, i, a, s) {
            var l = d(e[o], e, i);
            if ("throw" !== l.type) {
              var c = l.arg,
                u = c.value;
              return u && "object" == L(u) && r.call(u, "__await")
                ? t.resolve(u.__await).then(
                    function (e) {
                      n("next", e, a, s);
                    },
                    function (e) {
                      n("throw", e, a, s);
                    },
                  )
                : t.resolve(u).then(
                    function (e) {
                      (c.value = e), a(c);
                    },
                    function (e) {
                      return n("throw", e, a, s);
                    },
                  );
            }
            s(l.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (e, r) {
              function o() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function C(t, n, r) {
          var o = h;
          return function (i, a) {
            if (o === m) throw Error("Generator is already running");
            if (o === f) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var l = O(s, r);
                if (l) {
                  if (l === w) continue;
                  return l;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === h) throw ((o = f), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = m;
              var c = d(t, n, r);
              if ("normal" === c.type) {
                if (((o = r.done ? f : p), c.arg === w)) continue;
                return { value: c.arg, done: r.done };
              }
              "throw" === c.type &&
                ((o = f), (r.method = "throw"), (r.arg = c.arg));
            }
          };
        }
        function O(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                O(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              w
            );
          var i = d(o, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), w
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                w)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              w);
        }
        function A(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function P(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(A, this),
            this.reset(!0);
        }
        function B(t) {
          if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < t.length; )
                    if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(L(t) + " is not iterable");
        }
        return (
          (b.prototype = v),
          o(x, "constructor", { value: v, configurable: !0 }),
          o(v, "constructor", { value: b, configurable: !0 }),
          (b.displayName = c(v, l, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === b || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, v)
                : ((e.__proto__ = v), c(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(x)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          E(T.prototype),
          c(T.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = T),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new T(u(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          E(x),
          c(x, l, "Generator"),
          c(x, a, function () {
            return this;
          }),
          c(x, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = B),
          (j.prototype = {
            constructor: j,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(P),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = "throw"),
                  (s.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var l = r.call(a, "catchLoc"),
                    c = r.call(a, "finallyLoc");
                  if (l && c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!c)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), w)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                w
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), P(n), w;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    P(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: B(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                w
              );
            },
          }),
          t
        );
      }
      function O(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, o);
      }
      function A(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              O(i, r, o, a, s, "next", e);
            }
            function s(e) {
              O(i, r, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function P(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, j(r.key), r);
        }
      }
      function j(e) {
        var t = (function (e) {
          if ("object" != L(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != L(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == L(t) ? t : t + "";
      }
      function B(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (
          (B = function (e) {
            if (
              null === e ||
              !(function (e) {
                try {
                  return (
                    -1 !== Function.toString.call(e).indexOf("[native code]")
                  );
                } catch (t) {
                  return "function" == typeof e;
                }
              })(e)
            )
              return e;
            if ("function" != typeof e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, n);
            }
            function n() {
              return (function (e, t, n) {
                if ($()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, t);
                var o = new (e.bind.apply(e, r))();
                return n && N(o, n.prototype), o;
              })(e, arguments, M(this).constructor);
            }
            return (
              (n.prototype = Object.create(e.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              N(n, e)
            );
          }),
          B(e)
        );
      }
      function $() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return ($ = function () {
          return !!e;
        })();
      }
      function N(e, t) {
        return (
          (N = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          N(e, t)
        );
      }
      function M(e) {
        return (
          (M = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          M(e)
        );
      }
      customElements.define("add-note", C);
      var D = (function (e) {
        function n() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
            (function (e, t, n) {
              return (
                (t = M(t)),
                (function (e, t) {
                  if (t && ("object" == L(t) || "function" == typeof t))
                    return t;
                  if (void 0 !== t)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return e;
                  })(e);
                })(
                  e,
                  $()
                    ? Reflect.construct(t, n || [], M(e).constructor)
                    : t.apply(e, n),
                )
              );
            })(this, n)
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && N(e, t);
          })(n, e),
          (r = n),
          (o = [
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.render(),
                  document.addEventListener("noteAdded", function () {
                    return e.render();
                  }),
                  document.addEventListener("notesUpdated", function () {
                    return e.render();
                  });
              },
            },
            {
              key: "render",
              value:
                ((i = A(
                  S().mark(function e() {
                    var n, r;
                    return S().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((this.innerHTML =
                                  '\n      <div class="container">\n        <h1>Notes List</h1>\n        <div class="loading">\n          <div class="spinner"></div>\n          <p>Loading notes...</p>\n        </div>\n      </div>\n    '),
                                (e.prev = 1),
                                "archived" !=
                                  (n =
                                    "archived" === this.dataset.page
                                      ? "archived"
                                      : "active"))
                              ) {
                                e.next = 9;
                                break;
                              }
                              return (e.next = 6), h();
                            case 6:
                              (e.t0 = e.sent), (e.next = 12);
                              break;
                            case 9:
                              return (e.next = 11), d();
                            case 11:
                              e.t0 = e.sent;
                            case 12:
                              if ((r = e.t0).length) {
                                e.next = 16;
                                break;
                              }
                              return (
                                (this.innerHTML =
                                  '\n          <div class="container">\n            <h1>Notes List</h1>\n            <p>No notes available.</p>\n          </div>\n        '),
                                e.abrupt("return")
                              );
                            case 16:
                              (this.innerHTML =
                                '\n      <div class="container">\n        <h1>'
                                  .concat(
                                    "archived" === n
                                      ? "Archived Notes"
                                      : "Notes List",
                                    "</h1>\n        <ul>\n          ",
                                  )
                                  .concat(
                                    r
                                      .map(function (e) {
                                        return '\n              <li class="note-item" data-id="'
                                          .concat(
                                            e.id,
                                            '">\n                <h2>',
                                          )
                                          .concat(
                                            e.title,
                                            "</h2>\n                <p>",
                                          )
                                          .concat(
                                            e.body,
                                            "</p>\n                <small>Created at: ",
                                          )
                                          .concat(
                                            new Date(
                                              e.createdAt,
                                            ).toLocaleString(),
                                            '</small>\n                <div class="button-container">\n                <button class="archive-btn">\n                <i class="fa-regular ',
                                          )
                                          .concat(
                                            "archived" === n
                                              ? "fa-circle-up"
                                              : "fa-circle-down",
                                            '"></i>\n                  ',
                                          )
                                          .concat(
                                            "archived" === n
                                              ? "Unarchive"
                                              : "Archive",
                                            '\n                </button>\n                <button class="delete-btn"><i class="fa-regular fa-trash-can"></i>\n                  Delete\n                </button>\n                </div>\n              </li>\n            ',
                                          );
                                      })
                                      .join(""),
                                    "\n        </ul>\n      </div>\n      ",
                                  )),
                                this.querySelectorAll(".archive-btn").forEach(
                                  function (e) {
                                    e.addEventListener(
                                      "click",
                                      (function () {
                                        var e = A(
                                          S().mark(function e(t) {
                                            var r, o;
                                            return S().wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    if (
                                                      ((r =
                                                        t.target.closest(
                                                          ".note-item",
                                                        )),
                                                      (o = r.dataset.id),
                                                      "archived" !== n)
                                                    ) {
                                                      e.next = 7;
                                                      break;
                                                    }
                                                    return (e.next = 5), f(o);
                                                  case 5:
                                                    e.next = 9;
                                                    break;
                                                  case 7:
                                                    return (e.next = 9), m(o);
                                                  case 9:
                                                    document.dispatchEvent(
                                                      new Event("notesUpdated"),
                                                    );
                                                  case 10:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                          }),
                                        );
                                        return function (t) {
                                          return e.apply(this, arguments);
                                        };
                                      })(),
                                    );
                                  },
                                ),
                                this.querySelectorAll(".delete-btn").forEach(
                                  function (e) {
                                    e.addEventListener(
                                      "click",
                                      (function () {
                                        var e = A(
                                          S().mark(function e(n) {
                                            var r, o;
                                            return S().wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (r =
                                                        n.target.closest(
                                                          ".note-item",
                                                        )),
                                                      (o = r.dataset.id),
                                                      (e.next = 4),
                                                      t().fire({
                                                        title:
                                                          "Apakah kamu yakin?",
                                                        text: "Catatan yang dihapus tidak bisa dikembalikan!",
                                                        icon: "warning",
                                                        showCancelButton: !0,
                                                        confirmButtonColor:
                                                          "#d33",
                                                        cancelButtonColor:
                                                          "#3085d6",
                                                        confirmButtonText:
                                                          "Ya, hapus!",
                                                        cancelButtonText:
                                                          "Batal",
                                                      })
                                                    );
                                                  case 4:
                                                    if (!e.sent.isConfirmed) {
                                                      e.next = 10;
                                                      break;
                                                    }
                                                    return (e.next = 8), w(o);
                                                  case 8:
                                                    t().fire({
                                                      icon: "success",
                                                      title: "Dihapus!",
                                                      text: "Catatan berhasil dihapus.",
                                                      timer: 1500,
                                                      showConfirmButton: !1,
                                                    }),
                                                      document.dispatchEvent(
                                                        new Event(
                                                          "notesUpdated",
                                                        ),
                                                      );
                                                  case 10:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                          }),
                                        );
                                        return function (t) {
                                          return e.apply(this, arguments);
                                        };
                                      })(),
                                    );
                                  },
                                ),
                                (e.next = 25);
                              break;
                            case 21:
                              (e.prev = 21),
                                (e.t1 = e.catch(1)),
                                (this.innerHTML =
                                  '\n        <div class="container">\n          <h1>Notes List</h1>\n          <p>Failed to load notes. Please try again later.</p>\n        </div>\n      '),
                                console.error("Error fetching notes:", e.t1);
                            case 25:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[1, 21]],
                    );
                  }),
                )),
                function () {
                  return i.apply(this, arguments);
                }),
            },
          ]),
          o && P(r.prototype, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, o, i;
      })(B(HTMLElement));
      customElements.define("note-list", D), n(168);
      const I = "undefined" != typeof window,
        q = I ? window : null,
        R = I ? document : null,
        H = { replace: 0, none: 1, blend: 2 },
        z = Symbol(),
        F = Symbol(),
        V = Symbol(),
        U = Symbol(),
        Y = (Symbol(), Symbol()),
        G = 1e-11,
        Z = 1e12,
        W = 1e3,
        X = "",
        K = new Map();
      K.set("x", "translateX"),
        K.set("y", "translateY"),
        K.set("z", "translateZ");
      const J = [
          "translateX",
          "translateY",
          "translateZ",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "scale",
          "scaleX",
          "scaleY",
          "scaleZ",
          "skew",
          "skewX",
          "skewY",
          "perspective",
          "matrix",
          "matrix3d",
        ],
        Q = J.reduce((e, t) => ({ ...e, [t]: t + "(" }), {}),
        ee = () => {},
        te = /(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,
        ne = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,
        re =
          /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,
        oe =
          /hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,
        ie =
          /hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,
        ae = /[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,
        se = /^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,
        le = /([a-z])([A-Z])/g,
        ce = /(\w+)(\([^)]+\)+)/g,
        ue = {
          id: null,
          keyframes: null,
          playbackEase: null,
          playbackRate: 1,
          frameRate: 120,
          loop: 0,
          reversed: !1,
          alternate: !1,
          autoplay: !0,
          duration: W,
          delay: 0,
          loopDelay: 0,
          ease: "out(2)",
          composition: H.replace,
          modifier: (e) => e,
          onBegin: ee,
          onBeforeUpdate: ee,
          onUpdate: ee,
          onLoop: ee,
          onPause: ee,
          onComplete: ee,
          onRender: ee,
        },
        de = {
          defaults: ue,
          root: R,
          scope: null,
          precision: 4,
          timeScale: 1,
          tickThreshold: 200,
        },
        he = { version: "4.0.1", engine: null };
      I && (q.AnimeJS || (q.AnimeJS = []), q.AnimeJS.push(he));
      const pe = (e) => e.replace(le, "$1-$2").toLowerCase(),
        me = (e, t) => 0 === e.indexOf(t),
        fe = Date.now,
        we = Array.isArray,
        ge = (e) => e && e.constructor === Object,
        be = (e) => "number" == typeof e && !isNaN(e),
        ve = (e) => "string" == typeof e,
        ye = (e) => "function" == typeof e,
        _e = (e) => void 0 === e,
        ke = (e) => _e(e) || null === e,
        xe = (e) => I && e instanceof SVGElement,
        Ee = (e) => te.test(e),
        Te = (e) => me(e, "rgb"),
        Ce = (e) => me(e, "hsl"),
        Le = (e) => !de.defaults.hasOwnProperty(e),
        Se = (e) => (ve(e) ? parseFloat(e) : e),
        Oe = Math.pow,
        Ae = Math.sqrt,
        Pe = Math.sin,
        je = Math.cos,
        Be = Math.abs,
        $e = (Math.exp, Math.ceil),
        Ne = Math.floor,
        Me = Math.asin,
        De = (Math.max, Math.atan2, Math.PI),
        Ie = Math.round,
        qe = (e, t, n) => (e < t ? t : e > n ? n : e),
        Re = {},
        He = (e, t) => {
          if (t < 0) return e;
          if (!t) return Ie(e);
          let n = Re[t];
          return n || (n = Re[t] = 10 ** t), Ie(e * n) / n;
        },
        ze = (e, t, n) => e + (t - e) * n,
        Fe = (e) => (e === 1 / 0 ? Z : e === -1 / 0 ? -1e12 : e),
        Ve = (e) => (e < G ? G : e),
        Ue = (e) => (we(e) ? [...e] : e),
        Ye = (e, t, n, r = "_prev", o = "_next") => {
          let i = e._head,
            a = o;
          for (n && ((i = e._tail), (a = r)); i; ) {
            const e = i[a];
            t(i), (i = e);
          }
        },
        Ge = (e, t, n = "_prev", r = "_next") => {
          const o = t[n],
            i = t[r];
          o ? (o[r] = i) : (e._head = i),
            i ? (i[n] = o) : (e._tail = o),
            (t[n] = null),
            (t[r] = null);
        },
        Ze = (e, t, n, r = "_prev", o = "_next") => {
          let i = e._tail;
          for (; i && n && n(i, t); ) i = i[r];
          const a = i ? i[o] : e._head;
          i ? (i[o] = t) : (e._head = t),
            a ? (a[r] = t) : (e._tail = t),
            (t[r] = i),
            (t[o] = a);
        };
      class We {
        constructor(e = 0) {
          (this.deltaTime = 0),
            (this._currentTime = e),
            (this._elapsedTime = e),
            (this._startTime = e),
            (this._lastTime = e),
            (this._scheduledTime = 0),
            (this._frameDuration = He(W / 120, 0)),
            (this._fps = 120),
            (this._speed = 1),
            (this._hasChildren = !1),
            (this._head = null),
            (this._tail = null);
        }
        get fps() {
          return this._fps;
        }
        set fps(e) {
          const t = this._frameDuration,
            n = +e,
            r = n < G ? G : n,
            o = He(W / r, 0);
          (this._fps = r),
            (this._frameDuration = o),
            (this._scheduledTime += o - t);
        }
        get speed() {
          return this._speed;
        }
        set speed(e) {
          const t = +e;
          this._speed = t < G ? G : t;
        }
        requestTick(e) {
          const t = this._scheduledTime,
            n = this._elapsedTime;
          if (((this._elapsedTime += e - n), n < t)) return 0;
          const r = this._frameDuration,
            o = n - t;
          return (this._scheduledTime += o < r ? r : o), 1;
        }
        computeDeltaTime(e) {
          const t = e - this._lastTime;
          return (this.deltaTime = t), (this._lastTime = e), t;
        }
      }
      const Xe = (e, t, n, r, o) => {
          const i = e.parent,
            a = e.duration,
            s = e.completed,
            l = e.iterationDuration,
            c = e.iterationCount,
            u = e._currentIteration,
            d = e._loopDelay,
            h = e._reversed,
            p = e._alternate,
            m = e._hasChildren,
            f = e._delay,
            w = e._currentTime,
            g = f + l,
            b = t - f,
            v = qe(w, -f, a),
            y = qe(b, -f, a),
            _ = b - w,
            k = y > 0,
            x = y >= a,
            E = a <= G,
            T = 2 === o;
          let C = 0,
            L = b,
            S = 0;
          if (c > 1) {
            const t = ~~(y / (l + (x ? 0 : d)));
            (e._currentIteration = qe(t, 0, c)),
              x && e._currentIteration--,
              (C = e._currentIteration % 2),
              (L = y % (l + d) || 0);
          }
          const O = h ^ (p && C),
            A = e._ease;
          let P = x ? (O ? 0 : a) : O ? l - L : L;
          A && (P = l * A(P / l) || 0);
          const j = (i ? i.backwards : b < w) ? !O : !!O;
          if (
            ((e._currentTime = b),
            (e._iterationTime = P),
            (e.backwards = j),
            k && !e.began
              ? ((e.began = !0), n || (i && (j || !i.began)) || e.onBegin(e))
              : b <= 0 && (e.began = !1),
            n || m || !k || e._currentIteration === u || e.onLoop(e),
            T ||
              (1 === o &&
                ((t >= f && t <= g) ||
                  (t <= f && v > f) ||
                  (t >= g && v !== a))) ||
              (P >= g && v !== a) ||
              (P <= f && v > 0) ||
              (t <= v && v === a && s) ||
              (x && !s && E))
          ) {
            if ((k && (e.computeDeltaTime(v), n || e.onBeforeUpdate(e)), !m)) {
              const t = T || (j ? -1 * _ : _) >= de.tickThreshold,
                o = e._offset + (i ? i._offset : 0) + f + P;
              let a,
                s,
                l,
                c,
                u = e._head,
                d = 0;
              for (; u; ) {
                const e = u._composition,
                  n = u._currentTime,
                  i = u._changeDuration,
                  h = u._absoluteStartTime + u._changeDuration,
                  p = u._nextRep,
                  m = u._prevRep,
                  f = e !== H.none;
                if (
                  (t ||
                    ((n !== i || o <= h + (p ? p._delay : 0)) &&
                      (0 !== n || o >= u._absoluteStartTime))) &&
                  (!f ||
                    (!u._isOverridden &&
                      (!u._isOverlapped || o <= h) &&
                      (!p || p._isOverridden || o <= p._absoluteStartTime) &&
                      (!m ||
                        m._isOverridden ||
                        o >=
                          m._absoluteStartTime + m._changeDuration + u._delay)))
                ) {
                  const t = (u._currentTime = qe(P - u._startTime, 0, i)),
                    n = u._ease(t / u._updateDuration),
                    o = u._modifier,
                    h = u._valueType,
                    p = u._tweenType,
                    m = 0 === p,
                    w = 0 === h,
                    g = (w && m) || 0 === n || 1 === n ? -1 : de.precision;
                  let b, v;
                  if (w) b = v = o(He(ze(u._fromNumber, u._toNumber, n), g));
                  else if (1 === h)
                    (v = o(He(ze(u._fromNumber, u._toNumber, n), g))),
                      (b = `${v}${u._unit}`);
                  else if (2 === h) {
                    const e = u._fromNumbers,
                      t = u._toNumbers,
                      r = He(qe(o(ze(e[0], t[0], n)), 0, 255), 0),
                      i = He(qe(o(ze(e[1], t[1], n)), 0, 255), 0),
                      a = He(qe(o(ze(e[2], t[2], n)), 0, 255), 0),
                      s = qe(o(He(ze(e[3], t[3], n), g)), 0, 1);
                    if (((b = `rgba(${r},${i},${a},${s})`), f)) {
                      const e = u._numbers;
                      (e[0] = r), (e[1] = i), (e[2] = a), (e[3] = s);
                    }
                  } else if (3 === h) {
                    b = u._strings[0];
                    for (let e = 0, t = u._toNumbers.length; e < t; e++) {
                      const t = o(
                          He(ze(u._fromNumbers[e], u._toNumbers[e], n), g),
                        ),
                        r = u._strings[e + 1];
                      (b += `${r ? t + r : t}`), f && (u._numbers[e] = t);
                    }
                  }
                  if ((f && (u._number = v), r || e === H.blend)) u._value = b;
                  else {
                    const e = u.property;
                    (a = u.target),
                      m
                        ? (a[e] = b)
                        : 1 === p
                          ? a.setAttribute(e, b)
                          : ((s = a.style),
                            3 === p
                              ? (a !== l && ((l = a), (c = a[U])),
                                (c[e] = b),
                                (d = 1))
                              : 2 === p
                                ? (s[e] = b)
                                : 4 === p && s.setProperty(e, b)),
                      k && (S = 1);
                  }
                }
                if (d && u._renderTransforms) {
                  let e = X;
                  for (let t in c) e += `${Q[t]}${c[t]}) `;
                  (s.transform = e), (d = 0);
                }
                u = u._next;
              }
              !n && S && e.onRender(e);
            }
            !n && k && e.onUpdate(e);
          }
          return (
            i && E
              ? !n &&
                ((i.began && !j && b >= a && !s) || (j && b <= G && s)) &&
                (e.onComplete(e), (e.completed = !j))
              : k && x
                ? c === 1 / 0
                  ? (e._startTime += e.duration)
                  : e._currentIteration >= c - 1 &&
                    ((e.paused = !0),
                    s ||
                      m ||
                      ((e.completed = !0),
                      n ||
                        (i && (j || !i.began)) ||
                        (e.onComplete(e), e._resolve(e))))
                : (e.completed = !1),
            S
          );
        },
        Ke = (e, t, n, r, o) => {
          const i = e._currentIteration;
          if ((Xe(e, t, n, r, o), e._hasChildren)) {
            const a = e,
              s = a.backwards,
              l = r ? t : a._iterationTime,
              c = fe();
            let u = 0,
              d = !0;
            if (!r && a._currentIteration !== i) {
              const e = a.iterationDuration;
              Ye(a, (t) => {
                if (s) {
                  const r = t.duration,
                    o = t._offset + t._delay;
                  n || !(r <= G) || (o && o + r !== e) || t.onComplete(t);
                } else
                  !t.completed &&
                    !t.backwards &&
                    t._currentTime < t.iterationDuration &&
                    Xe(t, e, n, 1, 2),
                    (t.began = !1),
                    (t.completed = !1);
              }),
                n || a.onLoop(a);
            }
            Ye(
              a,
              (e) => {
                const t = He((l - e._offset) * e._speed, 12),
                  i = e._fps < a._fps ? e.requestTick(c) : o;
                (u += Xe(e, t, n, r, i)), !e.completed && d && (d = !1);
              },
              s,
            ),
              !n && u && a.onRender(a),
              d &&
                a._currentTime >= a.duration &&
                ((a.paused = !0),
                a.completed ||
                  ((a.completed = !0), n || (a.onComplete(a), a._resolve(a))));
          }
        },
        Je = { animation: null, update: ee },
        Qe = I ? requestAnimationFrame : setImmediate,
        et = I ? cancelAnimationFrame : clearImmediate;
      class tt extends We {
        constructor(e) {
          super(e),
            (this.useDefaultMainLoop = !0),
            (this.pauseOnDocumentHidden = !0),
            (this.defaults = ue),
            (this.paused = !(!I || !R.hidden)),
            (this.reqId = null);
        }
        update() {
          const e = (this._currentTime = fe());
          if (this.requestTick(e)) {
            this.computeDeltaTime(e);
            const t = this._speed,
              n = this._fps;
            let r = this._head;
            for (; r; ) {
              const o = r._next;
              r.paused
                ? (Ge(this, r),
                  (this._hasChildren = !!this._tail),
                  (r._running = !1),
                  r.completed && !r._cancelled && r.cancel())
                : Ke(
                    r,
                    (e - r._startTime) * r._speed * t,
                    0,
                    0,
                    r._fps < n ? r.requestTick(e) : 1,
                  ),
                (r = o);
            }
            Je.update();
          }
        }
        wake() {
          return (
            !this.useDefaultMainLoop ||
              this.reqId ||
              this.paused ||
              (this.reqId = Qe(rt)),
            this
          );
        }
        pause() {
          return (this.paused = !0), ot();
        }
        resume() {
          if (this.paused)
            return (
              (this.paused = !1), Ye(this, (e) => e.resetTime()), this.wake()
            );
        }
        get speed() {
          return this._speed * (1 === de.timeScale ? 1 : W);
        }
        set speed(e) {
          (this._speed = e * de.timeScale),
            Ye(this, (e) => (e.speed = e._speed));
        }
        get timeUnit() {
          return 1 === de.timeScale ? "ms" : "s";
        }
        set timeUnit(e) {
          const t = "s" === e,
            n = t ? 0.001 : 1;
          if (de.timeScale !== n) {
            (de.timeScale = n), (de.tickThreshold = 200 * n);
            const e = t ? 0.001 : W;
            (this.defaults.duration *= e), (this._speed *= e);
          }
        }
        get precision() {
          return de.precision;
        }
        set precision(e) {
          de.precision = e;
        }
      }
      const nt = (() => {
          const e = new tt(fe());
          return (
            I &&
              ((he.engine = e),
              R.addEventListener("visibilitychange", () => {
                e.pauseOnDocumentHidden && (R.hidden ? e.pause() : e.resume());
              })),
            e
          );
        })(),
        rt = () => {
          nt._head ? ((nt.reqId = Qe(rt)), nt.update()) : (nt.reqId = 0);
        },
        ot = () => (et(nt.reqId), (nt.reqId = 0), nt);
      function it(e) {
        const t = ve(e) ? de.root.querySelectorAll(e) : e;
        if (t instanceof NodeList || t instanceof HTMLCollection) return t;
      }
      function at(e) {
        if (ke(e)) return [];
        if (we(e)) {
          const t = e.flat(1 / 0),
            n = [];
          for (let e = 0, r = t.length; e < r; e++) {
            const r = t[e];
            if (!ke(r)) {
              const e = it(r);
              if (e)
                for (let t = 0, r = e.length; t < r; t++) {
                  const r = e[t];
                  if (!ke(r)) {
                    let e = !1;
                    for (let t = 0, o = n.length; t < o; t++)
                      if (n[t] === r) {
                        e = !0;
                        break;
                      }
                    e || n.push(r);
                  }
                }
              else {
                let e = !1;
                for (let t = 0, o = n.length; t < o; t++)
                  if (n[t] === r) {
                    e = !0;
                    break;
                  }
                e || n.push(r);
              }
            }
          }
          return n;
        }
        if (!I) return [e];
        const t = it(e);
        return t ? Array.from(t) : [e];
      }
      function st(e) {
        const t = at(e),
          n = t.length;
        if (n)
          for (let e = 0; e < n; e++) {
            const n = t[e];
            if (!n[z]) {
              n[z] = !0;
              const e = xe(n);
              (n.nodeType || e) && ((n[F] = !0), (n[V] = e), (n[U] = {}));
            }
          }
        return t;
      }
      const lt = ["opacity", "rotate", "overflow", "color"],
        ct = (e, t, n) => (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
              ? t
              : n < 2 / 3
                ? e + (t - e) * (2 / 3 - n) * 6
                : e
        ),
        ut = (e, t) => (_e(e) ? t : e),
        dt = (e, t, n, r, o) => {
          if (ye(e)) {
            const i = () => {
              const o = e(t, n, r);
              return isNaN(+o) ? o || 0 : +o;
            };
            return o && (o.func = i), i();
          }
          return e;
        },
        ht = (e, t) =>
          e[F]
            ? e[V] &&
              ((e, t) => {
                if (lt.includes(t)) return !1;
                if (e.getAttribute(t) || t in e) {
                  if ("scale" === t) {
                    const t = e.parentNode;
                    return t && "filter" === t.tagName;
                  }
                  return !0;
                }
              })(e, t)
              ? 1
              : J.includes(t) || K.get(t)
                ? 3
                : me(t, "--")
                  ? 4
                  : t in e.style
                    ? 2
                    : t in e
                      ? 0
                      : 1
            : 0,
        pt = (e, t, n) => {
          const r = e.style[t];
          r && n && (n[t] = r);
          const o = r || getComputedStyle(e[Y] || e).getPropertyValue(t);
          return "auto" === o ? "0" : o;
        },
        mt = (e, t, n, r) => {
          const o = _e(n) ? ht(e, t) : n;
          return 0 === o
            ? e[t] || 0
            : 1 === o
              ? e.getAttribute(t)
              : 3 === o
                ? ((e, t, n) => {
                    const r = e.style.transform;
                    let o;
                    if (r) {
                      const i = e[U];
                      let a;
                      for (; (a = ce.exec(r)); ) {
                        const e = a[1],
                          r = a[2].slice(1, -1);
                        (i[e] = r), e === t && ((o = r), n && (n[t] = r));
                      }
                    }
                    return r && !_e(o)
                      ? o
                      : me(t, "scale")
                        ? "1"
                        : me(t, "rotate") || me(t, "skew")
                          ? "0deg"
                          : "0px";
                  })(e, t, r)
                : 4 === o
                  ? pt(e, t, r).trimStart()
                  : pt(e, t, r);
        },
        ft = (e, t, n) => ("-" === n ? e - t : "+" === n ? e + t : e * t),
        wt = (e, t) => {
          if (
            ((t.t = 0),
            (t.n = 0),
            (t.u = null),
            (t.o = null),
            (t.d = null),
            (t.s = null),
            !e)
          )
            return t;
          const n = +e;
          if (isNaN(n)) {
            let n = e;
            "=" === n[1] && ((t.o = n[0]), (n = n.slice(2)));
            const i = !n.includes(" ") && se.exec(n);
            if (i) return (t.t = 1), (t.n = +i[1]), (t.u = i[2]), t;
            if (t.o) return (t.n = +n), t;
            if (Ee((o = n)) || Te(o) || Ce(o))
              return (
                (t.t = 2),
                (t.d = Te((r = n))
                  ? ((e) => {
                      const t = ne.exec(e) || re.exec(e),
                        n = _e(t[4]) ? 1 : +t[4];
                      return [+t[1], +t[2], +t[3], n];
                    })(r)
                  : Ee(r)
                    ? ((e) => {
                        const t = e.length,
                          n = 4 === t || 5 === t;
                        return [
                          +("0x" + e[1] + e[n ? 1 : 2]),
                          +("0x" + e[n ? 2 : 3] + e[n ? 2 : 4]),
                          +("0x" + e[n ? 3 : 5] + e[n ? 3 : 6]),
                          5 === t || 9 === t
                            ? +(
                                +("0x" + e[n ? 4 : 7] + e[n ? 4 : 8]) / 255
                              ).toFixed(3)
                            : 1,
                        ];
                      })(r)
                    : Ce(r)
                      ? ((e) => {
                          const t = oe.exec(e) || ie.exec(e),
                            n = +t[1] / 360,
                            r = +t[2] / 100,
                            o = +t[3] / 100,
                            i = _e(t[4]) ? 1 : +t[4];
                          let a, s, l;
                          if (0 === r) a = s = l = o;
                          else {
                            const e = o < 0.5 ? o * (1 + r) : o + r - o * r,
                              t = 2 * o - e;
                            (a = He(255 * ct(t, e, n + 1 / 3), 0)),
                              (s = He(255 * ct(t, e, n), 0)),
                              (l = He(255 * ct(t, e, n - 1 / 3), 0));
                          }
                          return [a, s, l, i];
                        })(r)
                      : [0, 0, 0, 1]),
                t
              );
            {
              const e = n.match(ae);
              return (
                (t.t = 3),
                (t.d = e ? e.map(Number) : []),
                (t.s = n.split(ae) || []),
                t
              );
            }
          }
          var r, o;
          return (t.n = n), t;
        },
        gt = (e, t) => (
          (t.t = e._valueType),
          (t.n = e._toNumber),
          (t.u = e._unit),
          (t.o = null),
          (t.d = Ue(e._toNumbers)),
          (t.s = Ue(e._strings)),
          t
        ),
        bt = { t: 0, n: 0, u: null, o: null, d: null, s: null },
        vt = { _rep: new WeakMap(), _add: new Map() },
        yt = (e, t, n = "_rep") => {
          const r = vt[n];
          let o = r.get(e);
          return (
            o || ((o = {}), r.set(e, o)),
            o[t] ? o[t] : (o[t] = { _head: null, _tail: null })
          );
        },
        _t = (e, t) =>
          e._isOverridden || e._absoluteStartTime > t._absoluteStartTime,
        kt = (e) => {
          (e._isOverlapped = 1),
            (e._isOverridden = 1),
            (e._changeDuration = G),
            (e._currentTime = G);
        },
        xt = (e, t) => {
          const n = e._composition;
          if (n === H.replace) {
            const n = e._absoluteStartTime;
            Ze(t, e, _t, "_prevRep", "_nextRep");
            const r = e._prevRep;
            if (r) {
              const t = r.parent,
                o = r._absoluteStartTime + r._changeDuration;
              if (
                e.parent.id !== t.id &&
                t.iterationCount > 1 &&
                o + (t.duration - t.iterationDuration) > n
              ) {
                kt(r);
                let e = r._prevRep;
                for (; e && e.parent.id === t.id; ) kt(e), (e = e._prevRep);
              }
              const i = n - e._delay;
              if (o > i) {
                const e = r._startTime,
                  t = o - (e + r._updateDuration);
                (r._changeDuration = i - t - e),
                  (r._currentTime = r._changeDuration),
                  (r._isOverlapped = 1),
                  r._changeDuration < G && kt(r);
              }
              let a = !0;
              if (
                (Ye(t, (e) => {
                  e._isOverlapped || (a = !1);
                }),
                a)
              ) {
                const e = t.parent;
                if (e) {
                  let n = !0;
                  Ye(e, (e) => {
                    e !== t &&
                      Ye(e, (e) => {
                        e._isOverlapped || (n = !1);
                      });
                  }),
                    n && e.cancel();
                } else t.cancel();
              }
            }
          } else if (n === H.blend) {
            const t = yt(e.target, e.property, "_add"),
              n = ((e) => {
                let t = Je.animation;
                return (
                  t ||
                    ((t = {
                      duration: G,
                      computeDeltaTime: ee,
                      _offset: 0,
                      _delay: 0,
                      _head: null,
                      _tail: null,
                    }),
                    (Je.animation = t),
                    (Je.update = () => {
                      e.forEach((e) => {
                        for (let t in e) {
                          const n = e[t],
                            r = n._head;
                          if (r) {
                            const e = r._valueType,
                              t =
                                3 === e || 2 === e ? Ue(r._fromNumbers) : null;
                            let o = r._fromNumber,
                              i = n._tail;
                            for (; i && i !== r; ) {
                              if (t)
                                for (
                                  let e = 0, n = i._numbers.length;
                                  e < n;
                                  e++
                                )
                                  t[e] += i._numbers[e];
                              else o += i._number;
                              i = i._prevAdd;
                            }
                            (r._toNumber = o), (r._toNumbers = t);
                          }
                        }
                      }),
                        Xe(t, 1, 1, 0, 2);
                    })),
                  t
                );
              })(vt._add);
            let r = t._head;
            r ||
              ((r = { ...e }),
              (r._composition = H.replace),
              (r._updateDuration = G),
              (r._startTime = 0),
              (r._numbers = Ue(e._fromNumbers)),
              (r._number = 0),
              (r._next = null),
              (r._prev = null),
              Ze(t, r),
              Ze(n, r));
            const o = e._toNumber;
            if (
              ((e._fromNumber = r._fromNumber - o),
              (e._toNumber = 0),
              (e._numbers = Ue(e._fromNumbers)),
              (e._number = 0),
              (r._fromNumber = o),
              e._toNumbers)
            ) {
              const t = Ue(e._toNumbers);
              t &&
                t.forEach((t, n) => {
                  (e._fromNumbers[n] = r._fromNumbers[n] - t),
                    (e._toNumbers[n] = 0);
                }),
                (r._fromNumbers = t);
            }
            Ze(t, e, null, "_prevAdd", "_nextAdd");
          }
          return e;
        },
        Et = (e) => {
          const t = e._composition;
          if (t !== H.none) {
            const n = e.target,
              r = e.property,
              o = vt._rep.get(n)[r];
            if ((Ge(o, e, "_prevRep", "_nextRep"), t === H.blend)) {
              const t = vt._add,
                o = t.get(n);
              if (!o) return;
              const i = o[r],
                a = Je.animation;
              Ge(i, e, "_prevAdd", "_nextAdd");
              const s = i._head;
              if (s && s === i._tail) {
                Ge(i, s, "_prevAdd", "_nextAdd"), Ge(a, s);
                let e = !0;
                for (let t in o)
                  if (o[t]._head) {
                    e = !1;
                    break;
                  }
                e && t.delete(n);
              }
            }
          }
          return e;
        },
        Tt = (e) => ((e.paused = !0), (e.began = !1), (e.completed = !1), e),
        Ct = (e) =>
          e._cancelled
            ? (e._hasChildren
                ? Ye(e, Ct)
                : Ye(e, (e) => {
                    e._composition !== H.none &&
                      xt(e, yt(e.target, e.property));
                  }),
              (e._cancelled = 0),
              e)
            : e;
      let Lt = 0;
      class St extends We {
        constructor(e = {}, t = null, n = 0) {
          super(0);
          const {
            id: r,
            delay: o,
            duration: i,
            reversed: a,
            alternate: s,
            loop: l,
            loopDelay: c,
            autoplay: u,
            frameRate: d,
            playbackRate: h,
            onComplete: p,
            onLoop: m,
            onPause: f,
            onBegin: w,
            onBeforeUpdate: g,
            onUpdate: b,
          } = e;
          de.scope && de.scope.revertibles.push(this);
          const v = t ? 0 : nt._elapsedTime,
            y = t ? t.defaults : de.defaults,
            _ = ye(o) || _e(o) ? y.delay : +o,
            k = ye(i) || _e(i) ? 1 / 0 : +i,
            x = ut(l, y.loop),
            E = ut(c, y.loopDelay),
            T = !0 === x || x === 1 / 0 || x < 0 ? 1 / 0 : x + 1;
          let C = 0;
          if (t) C = n;
          else {
            let e = fe();
            nt.paused && (nt.requestTick(e), (e = nt._elapsedTime)),
              (C = e - nt._startTime);
          }
          (this.id = _e(r) ? ++Lt : r),
            (this.parent = t),
            (this.duration = Fe((k + E) * T - E) || G),
            (this.backwards = !1),
            (this.paused = !0),
            (this.began = !1),
            (this.completed = !1),
            (this.onBegin = w || y.onBegin),
            (this.onBeforeUpdate = g || y.onBeforeUpdate),
            (this.onUpdate = b || y.onUpdate),
            (this.onLoop = m || y.onLoop),
            (this.onPause = f || y.onPause),
            (this.onComplete = p || y.onComplete),
            (this.iterationDuration = k),
            (this.iterationCount = T),
            (this._autoplay = !t && ut(u, y.autoplay)),
            (this._offset = C),
            (this._delay = _),
            (this._loopDelay = E),
            (this._iterationTime = 0),
            (this._currentIteration = 0),
            (this._resolve = ee),
            (this._running = !1),
            (this._reversed = +ut(a, y.reversed)),
            (this._reverse = this._reversed),
            (this._cancelled = 0),
            (this._alternate = ut(s, y.alternate)),
            (this._prev = null),
            (this._next = null),
            (this._elapsedTime = v),
            (this._startTime = v),
            (this._lastTime = v),
            (this._fps = ut(d, y.frameRate)),
            (this._speed = ut(h, y.playbackRate));
        }
        get cancelled() {
          return !!this._cancelled;
        }
        set cancelled(e) {
          e ? this.cancel() : this.reset(1).play();
        }
        get currentTime() {
          return qe(
            He(this._currentTime, de.precision),
            -this._delay,
            this.duration,
          );
        }
        set currentTime(e) {
          const t = this.paused;
          this.pause().seek(+e), t || this.resume();
        }
        get iterationCurrentTime() {
          return He(this._iterationTime, de.precision);
        }
        set iterationCurrentTime(e) {
          this.currentTime =
            this.iterationDuration * this._currentIteration + e;
        }
        get progress() {
          return qe(He(this._currentTime / this.duration, 5), 0, 1);
        }
        set progress(e) {
          this.currentTime = this.duration * e;
        }
        get iterationProgress() {
          return qe(He(this._iterationTime / this.iterationDuration, 5), 0, 1);
        }
        set iterationProgress(e) {
          const t = this.iterationDuration;
          this.currentTime = t * this._currentIteration + t * e;
        }
        get currentIteration() {
          return this._currentIteration;
        }
        set currentIteration(e) {
          this.currentTime =
            this.iterationDuration * qe(+e, 0, this.iterationCount - 1);
        }
        get reversed() {
          return !!this._reversed;
        }
        set reversed(e) {
          e ? this.reverse() : this.play();
        }
        get speed() {
          return super.speed;
        }
        set speed(e) {
          (super.speed = e), this.resetTime();
        }
        reset(e = 0) {
          return (
            Ct(this),
            this._reversed && !this._reverse && (this.reversed = !1),
            (this._iterationTime = this.iterationDuration),
            Ke(this, 0, 1, e, 2),
            Tt(this),
            this._hasChildren && Ye(this, Tt),
            this
          );
        }
        init(e = 0) {
          (this.fps = this._fps),
            (this.speed = this._speed),
            !e && this._hasChildren && Ke(this, this.duration, 1, e, 2),
            this.reset(e);
          const t = this._autoplay;
          return (
            !0 === t ? this.resume() : t && !_e(t.linked) && t.link(this), this
          );
        }
        resetTime() {
          const e = 1 / (this._speed * nt._speed);
          return (
            (this._startTime = fe() - (this._currentTime + this._delay) * e),
            this
          );
        }
        pause() {
          return this.paused || ((this.paused = !0), this.onPause(this)), this;
        }
        resume() {
          return this.paused
            ? ((this.paused = !1),
              this.duration <= G && !this._hasChildren
                ? Ke(this, G, 0, 0, 2)
                : (this._running ||
                    (Ze(nt, this),
                    (nt._hasChildren = !0),
                    (this._running = !0)),
                  this.resetTime(),
                  (this._startTime -= 12),
                  nt.wake()),
              this)
            : this;
        }
        restart() {
          return this.reset(0).resume();
        }
        seek(e, t = 0, n = 0) {
          Ct(this), (this.completed = !1);
          const r = this.paused;
          return (
            (this.paused = !0),
            Ke(this, e + this._delay, ~~t, ~~n, 1),
            r ? this : this.resume()
          );
        }
        alternate() {
          const e = this._reversed,
            t = this.iterationCount,
            n = this.iterationDuration,
            r = t === 1 / 0 ? Ne(Z / n) : t;
          return (
            (this._reversed = +(!this._alternate || r % 2 ? !e : e)),
            t === 1 / 0
              ? (this.iterationProgress = this._reversed
                  ? 1 - this.iterationProgress
                  : this.iterationProgress)
              : this.seek(n * r - this._currentTime),
            this.resetTime(),
            this
          );
        }
        play() {
          return this._reversed && this.alternate(), this.resume();
        }
        reverse() {
          return this._reversed || this.alternate(), this.resume();
        }
        cancel() {
          return (
            this._hasChildren ? Ye(this, (e) => e.cancel(), !0) : Ye(this, Et),
            (this._cancelled = 1),
            this.pause()
          );
        }
        stretch(e) {
          const t = this.duration;
          if (t === Ve(e)) return this;
          const n = e / t,
            r = e <= G;
          return (
            (this.duration = r ? G : Ve(Fe(He(t * n, 12)))),
            (this.iterationDuration = r
              ? G
              : Ve(Fe(He(this.iterationDuration * n, 12)))),
            (this._offset *= n),
            (this._delay *= n),
            (this._loopDelay *= n),
            this
          );
        }
        revert() {
          Ke(this, 0, 1, 0, 1);
          const e = this._autoplay;
          return (
            e && e.linked && e.linked === this && e.revert(), this.cancel()
          );
        }
        complete() {
          return this.seek(this.duration).cancel();
        }
        then(e = ee) {
          const t = this.then,
            n = () => {
              (this.then = null),
                e(this),
                (this.then = t),
                (this._resolve = ee);
            };
          return new Promise(
            (e) => (
              (this._resolve = () => e(n())),
              this.completed && this._resolve(),
              this
            ),
          );
        }
      }
      const Ot = (e) => e,
        At = (e, t, n) =>
          (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
        Pt = (e = 0.5, t = 0, n = 0.5, r = 1) =>
          e === t && n === r
            ? Ot
            : (o) =>
                0 === o || 1 === o
                  ? o
                  : At(
                      ((e, t, n) => {
                        let r,
                          o,
                          i = 0,
                          a = 1,
                          s = 0;
                        do {
                          (o = i + (a - i) / 2),
                            (r = At(o, t, n) - e),
                            r > 0 ? (a = o) : (i = o);
                        } while (Be(r) > 1e-7 && ++s < 100);
                        return o;
                      })(o, e, n),
                      t,
                      r,
                    ),
        jt = (e = 10, t) => {
          const n = t ? $e : Ne;
          return (t) => n(qe(t, 0, 1) * e) * (1 / e);
        },
        Bt = (...e) => {
          const t = e.length;
          if (!t) return Ot;
          const n = t - 1,
            r = e[0],
            o = e[n],
            i = [0],
            a = [Se(r)];
          for (let t = 1; t < n; t++) {
            const r = e[t],
              o = ve(r) ? r.trim().split(" ") : [r],
              s = o[0],
              l = o[1];
            i.push(_e(l) ? t / n : Se(l) / 100), a.push(Se(s));
          }
          return (
            a.push(Se(o)),
            i.push(1),
            function (e) {
              for (let t = 1, n = i.length; t < n; t++) {
                const n = i[t];
                if (e <= n) {
                  const r = i[t - 1],
                    o = a[t - 1];
                  return o + ((a[t] - o) * (e - r)) / (n - r);
                }
              }
              return a[a.length - 1];
            }
          );
        },
        $t = (e = 10, t = 1) => {
          const n = [0],
            r = e - 1;
          for (let e = 1; e < r; e++) {
            const o = n[e - 1],
              i = e / r,
              a = i * (1 - t) + (i + ((e + 1) / r - i) * Math.random()) * t;
            n.push(qe(a, o, 1));
          }
          return n.push(1), Bt(...n);
        },
        Nt = De / 2,
        Mt = 2 * De,
        Dt =
          (e = 1.68) =>
          (t) =>
            Oe(t, +e),
        It = {
          [X]: Dt,
          Quad: Dt(2),
          Cubic: Dt(3),
          Quart: Dt(4),
          Quint: Dt(5),
          Sine: (e) => 1 - je(e * Nt),
          Circ: (e) => 1 - Ae(1 - e * e),
          Expo: (e) => (e ? Oe(2, 10 * e - 10) : 0),
          Bounce: (e) => {
            let t,
              n = 4;
            for (; e < ((t = Oe(2, --n)) - 1) / 11; );
            return 1 / Oe(4, 3 - n) - 7.5625 * Oe((3 * t - 2) / 22 - e, 2);
          },
          Back:
            (e = 1.70158) =>
            (t) =>
              (+e + 1) * t * t * t - +e * t * t,
          Elastic: (e = 1, t = 0.3) => {
            const n = qe(+e, 1, 10),
              r = qe(+t, G, 2),
              o = (r / Mt) * Me(1 / n),
              i = Mt / r;
            return (e) =>
              0 === e || 1 === e
                ? e
                : -n * Oe(2, -10 * (1 - e)) * Pe((1 - e - o) * i);
          },
        },
        qt = {
          in: (e) => (t) => e(t),
          out: (e) => (t) => 1 - e(1 - t),
          inOut: (e) => (t) => (t < 0.5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2),
          outIn: (e) => (t) =>
            t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : (e(2 * t - 1) + 1) / 2,
        },
        Rt = (e, t, n) => {
          if (n[e]) return n[e];
          if (e.indexOf("(") <= -1) {
            const r =
              qt[e] || e.includes("Back") || e.includes("Elastic")
                ? t[e]()
                : t[e];
            return r ? (n[e] = r) : Ot;
          }
          {
            const r = e.slice(0, -1).split("("),
              o = t[r[0]];
            return o ? (n[e] = o(...r[1].split(","))) : Ot;
          }
        },
        Ht = (() => {
          const e = { linear: Bt, irregular: $t, steps: jt, cubicBezier: Pt };
          for (let t in qt)
            for (let n in It) {
              const r = It[n],
                o = qt[t];
              e[t + n] =
                n === X || "Back" === n || "Elastic" === n
                  ? (e, t) => o(r(e, t))
                  : o(r);
            }
          return e;
        })(),
        zt = { linear: Ot },
        Ft = (e) => (ye(e) ? e : ve(e) ? Rt(e, Ht, zt) : Ot),
        Vt = {},
        Ut = (e, t, n) => {
          if (3 === n) {
            return K.get(e) || e;
          }
          if (2 === n || (1 === n && xe(t) && e in t.style)) {
            const t = Vt[e];
            if (t) return t;
            {
              const t = e ? pe(e) : e;
              return (Vt[e] = t), t;
            }
          }
          return e;
        },
        Yt = { deg: 1, rad: 180 / De, turn: 360 },
        Gt = {},
        Zt = (e, t, n, r = !1) => {
          const o = t.u,
            i = t.n;
          if (1 === t.t && o === n) return t;
          const a = i + o + n,
            s = Gt[a];
          if (_e(s) || r) {
            let r;
            if (o in Yt) r = (i * Yt[o]) / Yt[n];
            else {
              const t = 100,
                a = e.cloneNode(),
                s = e.parentNode,
                l = s && s !== R ? s : R.body;
              l.appendChild(a);
              const c = a.style;
              c.width = t + o;
              const u = a.offsetWidth || t;
              c.width = t + n;
              const d = u / (a.offsetWidth || t);
              l.removeChild(a), (r = d * i);
            }
            (t.n = r), (Gt[a] = r);
          } else t.n = s;
          return t.t, (t.u = n), t;
        },
        Wt = (e) => {
          if (e._hasChildren) Ye(e, Wt, !0);
          else {
            const t = e;
            t.pause(),
              Ye(t, (e) => {
                const n = e.property,
                  r = e.target;
                if (r[F]) {
                  const o = r.style,
                    i = t._inlineStyles[n];
                  if (3 === e._tweenType) {
                    const t = r[U];
                    if (
                      (_e(i) || i === X ? delete t[n] : (t[n] = i),
                      e._renderTransforms)
                    )
                      if (Object.keys(t).length) {
                        let e = X;
                        for (let n in t) e += Q[n] + t[n] + ") ";
                        o.transform = e;
                      } else o.removeProperty("transform");
                  } else _e(i) || i === X ? o.removeProperty(n) : (o[n] = i);
                  t._tail === e &&
                    t.targets.forEach((e) => {
                      e.getAttribute &&
                        e.getAttribute("style") === X &&
                        e.removeAttribute("style");
                    });
                }
              });
          }
          return e;
        },
        Xt = { t: 0, n: 0, u: null, o: null, d: null, s: null },
        Kt = { t: 0, n: 0, u: null, o: null, d: null, s: null },
        Jt = { func: null },
        Qt = [null],
        en = [null, null],
        tn = { to: null };
      let nn,
        rn,
        on = 0;
      class an extends St {
        constructor(e, t, n, r, o = !1, i = 0, a = 0) {
          super(t, n, r);
          const s = st(e),
            l = s.length,
            c = t.keyframes,
            u = c
              ? ((e, t) => {
                  const n = { ...e };
                  for (let r in t) {
                    const o = e[r];
                    n[r] = _e(o) ? t[r] : o;
                  }
                  return n;
                })(
                  ((e, t) => {
                    const n = {};
                    if (we(e)) {
                      const t = []
                        .concat(...e.map((e) => Object.keys(e)))
                        .filter(Le);
                      for (let r = 0, o = t.length; r < o; r++) {
                        const o = t[r],
                          i = e.map((e) => {
                            const t = {};
                            for (let n in e) {
                              const r = e[n];
                              Le(n) ? n === o && (t.to = r) : (t[n] = r);
                            }
                            return t;
                          });
                        n[o] = i;
                      }
                    } else {
                      const r = ut(t.duration, de.defaults.duration),
                        o = Object.keys(e)
                          .map((t) => ({ o: parseFloat(t) / 100, p: e[t] }))
                          .sort((e, t) => e.o - t.o);
                      o.forEach((e) => {
                        const t = e.o,
                          o = e.p;
                        for (let e in o)
                          if (Le(e)) {
                            let i = n[e];
                            i || (i = n[e] = []);
                            const a = t * r;
                            let s = i.length,
                              l = i[s - 1];
                            const c = { to: o[e] };
                            let u = 0;
                            for (let e = 0; e < s; e++) u += i[e].duration;
                            1 === s && (c.from = l.to),
                              o.ease && (c.ease = o.ease),
                              (c.duration = a - (s ? u : 0)),
                              i.push(c);
                          }
                        return e;
                      });
                      for (let e in n) {
                        const t = n[e];
                        let r;
                        for (let e = 0, n = t.length; e < n; e++) {
                          const n = t[e],
                            o = n.ease;
                          (n.ease = r || void 0), (r = o);
                        }
                        t[0].duration || t.shift();
                      }
                    }
                    return n;
                  })(c, t),
                  t,
                )
              : t,
            {
              delay: d,
              duration: h,
              ease: p,
              playbackEase: m,
              modifier: f,
              composition: w,
              onRender: g,
            } = u,
            b = n ? n.defaults : de.defaults,
            v = ut(m, b.playbackEase),
            y = v ? Ft(v) : null,
            _ = !_e(p) && !_e(p.ease),
            k = _ ? p.ease : ut(p, y ? "linear" : b.ease),
            x = _ ? p.duration : ut(h, b.duration),
            E = ut(d, b.delay),
            T = f || b.modifier,
            C = _e(w) && l >= W ? H.none : _e(w) ? b.composition : w,
            L = {},
            S = this._offset + (n ? n._offset : 0);
          let O = NaN,
            A = NaN,
            P = 0,
            j = 0;
          for (let e = 0; e < l; e++) {
            const t = s[e],
              r = i || e,
              c = a || l;
            let d = NaN,
              h = NaN;
            for (let e in u)
              if (Le(e)) {
                const i = ht(t, e),
                  a = Ut(e, t, i);
                let s = u[e];
                const l = we(s);
                if ((o && !l && ((en[0] = s), (en[1] = s), (s = en)), l)) {
                  const e = s.length,
                    t = !ge(s[0]);
                  2 === e && t
                    ? ((tn.to = s), (Qt[0] = tn), (nn = Qt))
                    : e > 2 && t
                      ? ((nn = []),
                        s.forEach((e, t) => {
                          t
                            ? 1 === t
                              ? ((en[1] = e), nn.push(en))
                              : nn.push(e)
                            : (en[0] = e);
                        }))
                      : (nn = s);
                } else (Qt[0] = s), (nn = Qt);
                let p = null,
                  m = null,
                  f = NaN,
                  w = 0,
                  g = 0;
                for (let e = nn.length; g < e; g++) {
                  const o = nn[g];
                  ge(o) ? (rn = o) : ((tn.to = o), (rn = tn)), (Jt.func = null);
                  const s = dt(rn.to, t, r, c, Jt);
                  let l;
                  ge(s) && !_e(s.to) ? ((rn = s), (l = s.to)) : (l = s);
                  const u = dt(rn.from, t, r, c),
                    d = rn.ease,
                    h = !_e(d) && !_e(d.ease),
                    b = h ? d.ease : d || k,
                    v = h
                      ? d.duration
                      : dt(
                          ut(rn.duration, e > 1 ? dt(x, t, r, c) / e : x),
                          t,
                          r,
                          c,
                        ),
                    y = dt(ut(rn.delay, g ? 0 : E), t, r, c),
                    _ = dt(ut(rn.composition, C), t, r, c),
                    O = be(_) ? _ : H[_],
                    A = rn.modifier || T,
                    B = !_e(u),
                    $ = !_e(l),
                    N = we(l),
                    M = N || (B && $),
                    D = m ? w + y : y,
                    I = S + D;
                  j || (!B && !N) || (j = 1);
                  let q = m;
                  if (O !== H.none) {
                    p || (p = yt(t, a));
                    let e = p._head;
                    for (; e && !e._isOverridden && e._absoluteStartTime <= I; )
                      if (
                        ((q = e),
                        (e = e._nextRep),
                        e && e._absoluteStartTime >= I)
                      )
                        for (; e; ) kt(e), (e = e._nextRep);
                  }
                  if (
                    (M
                      ? (wt(N ? dt(l[0], t, r, c) : u, Xt),
                        wt(N ? dt(l[1], t, r, c, Jt) : l, Kt),
                        0 === Xt.t &&
                          (q
                            ? 1 === q._valueType &&
                              ((Xt.t = 1), (Xt.u = q._unit))
                            : (wt(mt(t, a, i, L), bt),
                              1 === bt.t && ((Xt.t = 1), (Xt.u = bt.u)))))
                      : ($
                          ? wt(l, Kt)
                          : m
                            ? gt(m, Kt)
                            : wt(
                                n && q && q.parent.parent === n
                                  ? q._value
                                  : mt(t, a, i, L),
                                Kt,
                              ),
                        B
                          ? wt(u, Xt)
                          : m
                            ? gt(m, Xt)
                            : wt(
                                n && q && q.parent.parent === n
                                  ? q._value
                                  : mt(t, a, i, L),
                                Xt,
                              )),
                    Xt.o &&
                      (Xt.n = ft(
                        q ? q._toNumber : wt(mt(t, a, i, L), bt).n,
                        Xt.n,
                        Xt.o,
                      )),
                    Kt.o && (Kt.n = ft(Xt.n, Kt.n, Kt.o)),
                    Xt.t !== Kt.t)
                  )
                    if (3 === Xt.t || 3 === Kt.t) {
                      const e = 3 === Xt.t ? Xt : Kt,
                        t = 3 === Xt.t ? Kt : Xt;
                      (t.t = 3), (t.s = Ue(e.s)), (t.d = e.d.map(() => t.n));
                    } else if (1 === Xt.t || 1 === Kt.t) {
                      const e = 1 === Xt.t ? Xt : Kt,
                        t = 1 === Xt.t ? Kt : Xt;
                      (t.t = 1), (t.u = e.u);
                    } else if (2 === Xt.t || 2 === Kt.t) {
                      const e = 2 === Xt.t ? Xt : Kt,
                        t = 2 === Xt.t ? Kt : Xt;
                      (t.t = 2), (t.s = e.s), (t.d = [0, 0, 0, 1]);
                    }
                  if (Xt.u !== Kt.u) {
                    let e = Kt.u ? Xt : Kt;
                    e = Zt(t, e, Kt.u ? Kt.u : Xt.u, !1);
                  }
                  if (Kt.d && Xt.d && Kt.d.length !== Xt.d.length) {
                    const e = Xt.d.length > Kt.d.length ? Xt : Kt,
                      t = e === Xt ? Kt : Xt;
                    (t.d = e.d.map((e, n) => (_e(t.d[n]) ? 0 : t.d[n]))),
                      (t.s = Ue(e.s));
                  }
                  const R = He(+v || G, 12),
                    z = {
                      parent: this,
                      id: on++,
                      property: a,
                      target: t,
                      _value: null,
                      _func: Jt.func,
                      _ease: Ft(b),
                      _fromNumbers: Ue(Xt.d),
                      _toNumbers: Ue(Kt.d),
                      _strings: Ue(Kt.s),
                      _fromNumber: Xt.n,
                      _toNumber: Kt.n,
                      _numbers: Ue(Xt.d),
                      _number: Xt.n,
                      _unit: Kt.u,
                      _modifier: A,
                      _currentTime: 0,
                      _startTime: D,
                      _delay: +y,
                      _updateDuration: R,
                      _changeDuration: R,
                      _absoluteStartTime: I,
                      _tweenType: i,
                      _valueType: Kt.t,
                      _composition: O,
                      _isOverlapped: 0,
                      _isOverridden: 0,
                      _renderTransforms: 0,
                      _prevRep: null,
                      _nextRep: null,
                      _prevAdd: null,
                      _nextAdd: null,
                      _prev: null,
                      _next: null,
                    };
                  O !== H.none && xt(z, p),
                    isNaN(f) && (f = z._startTime),
                    (w = He(D + R, 12)),
                    (m = z),
                    P++,
                    Ze(this, z);
                }
                (isNaN(A) || f < A) && (A = f),
                  (isNaN(O) || w > O) && (O = w),
                  3 === i && ((d = P - g), (h = P));
              }
            if (!isNaN(d)) {
              let e = 0;
              Ye(this, (t) => {
                e >= d &&
                  e < h &&
                  ((t._renderTransforms = 1),
                  t._composition === H.blend &&
                    Ye(Je.animation, (e) => {
                      e.id === t.id && (e._renderTransforms = 1);
                    })),
                  e++;
              });
            }
          }
          l ||
            console.warn(
              "No target found. Make sure the element you're trying to animate is accessible before creating your animation.",
            ),
            A
              ? (Ye(this, (e) => {
                  e._startTime - e._delay || (e._delay -= A),
                    (e._startTime -= A);
                }),
                (O -= A))
              : (A = 0),
            O || ((O = G), (this.iterationCount = 0)),
            (this.targets = s),
            (this.duration =
              O === G
                ? G
                : Fe(
                    (O + this._loopDelay) * this.iterationCount -
                      this._loopDelay,
                  ) || G),
            (this.onRender = g || b.onRender),
            (this._ease = y),
            (this._delay = A),
            (this.iterationDuration = O),
            (this._inlineStyles = L),
            !this._autoplay && j && this.onRender(this);
        }
        stretch(e) {
          const t = this.duration;
          if (t === Ve(e)) return this;
          const n = e / t;
          return (
            Ye(this, (e) => {
              (e._updateDuration = Ve(He(e._updateDuration * n, 12))),
                (e._changeDuration = Ve(He(e._changeDuration * n, 12))),
                (e._currentTime *= n),
                (e._startTime *= n),
                (e._absoluteStartTime *= n);
            }),
            super.stretch(e)
          );
        }
        refresh() {
          return (
            Ye(this, (e) => {
              const t = mt(e.target, e.property, e._tweenType);
              wt(t, bt),
                (e._fromNumbers = Ue(bt.d)),
                (e._fromNumber = bt.n),
                e._func &&
                  (wt(e._func(), Kt),
                  (e._toNumbers = Ue(Kt.d)),
                  (e._strings = Ue(Kt.s)),
                  (e._toNumber = Kt.n));
            }),
            this
          );
        }
        revert() {
          return super.revert(), Wt(this);
        }
        then(e) {
          return super.then(e);
        }
      }
      const sn = (e, t = 100) => {
          const n = [];
          for (let r = 0; r <= t; r++) n.push(e(r / t));
          return `linear(${n.join(", ")})`;
        },
        ln = { in: "ease-in", out: "ease-out", inOut: "ease-in-out" },
        cn = (() => {
          const e = {};
          for (let t in qt) e[t] = (e) => qt[t](Dt(e));
          return e;
        })(),
        un = (e) => {
          let t = ln[e];
          if (t) return t;
          if (((t = "linear"), ve(e)))
            if (
              me(e, "linear") ||
              me(e, "cubic-") ||
              me(e, "steps") ||
              me(e, "ease")
            )
              t = e;
            else if (me(e, "cubicB")) t = pe(e);
            else {
              const n = Rt(e, cn, ln);
              ye(n) && (t = n === Ot ? "linear" : sn(n));
            }
          else if (ye(e)) {
            const n = sn(e);
            n && (t = n);
          } else e.ease && (t = sn(e.ease));
          return (ln[e] = t);
        },
        dn = ["x", "y", "z"],
        hn = [
          "perspective",
          "width",
          "height",
          "margin",
          "padding",
          "top",
          "right",
          "bottom",
          "left",
          "borderWidth",
          "fontSize",
          "borderRadius",
          ...dn,
        ],
        pn = [
          ...dn,
          ...J.filter((e) => ["X", "Y", "Z"].some((t) => e.endsWith(t))),
        ];
      let mn =
        I && (_e(CSS) || !Object.hasOwnProperty.call(CSS, "registerProperty"));
      const fn = { _head: null, _tail: null },
        wn = (e, t, n) => {
          let r = fn._head;
          for (; r; ) {
            const o = r._next,
              i = r.$el === e,
              a = !t || r.property === t,
              s = !n || r.parent === n;
            if (i && a && s) {
              const e = r.animation;
              try {
                e.commitStyles();
              } catch {}
              e.cancel(), Ge(fn, r);
              const t = r.parent;
              t &&
                (t._completed++,
                t.animations.length === t._completed &&
                  ((t.completed = !0),
                  t.muteCallbacks ||
                    ((t.paused = !0), t.onComplete(t), t._resolve(t))));
            }
            r = o;
          }
        },
        gn = (e, t, n, r, o) => {
          const i = t.animate(r, o),
            a = o.delay + +o.duration * o.iterations;
          (i.playbackRate = e._speed),
            e.paused && i.pause(),
            e.duration < a && ((e.duration = a), (e.controlAnimation = i)),
            e.animations.push(i),
            wn(t, n),
            Ze(fn, {
              parent: e,
              animation: i,
              $el: t,
              property: n,
              _next: null,
              _prev: null,
            });
          const s = () => {
            wn(t, n, e);
          };
          return (i.onremove = s), (i.onfinish = s), i;
        },
        bn = (e, t, n, r, o) => {
          let i = dt(t, n, r, o);
          return be(i)
            ? hn.includes(e) || me(e, "translate")
              ? `${i}px`
              : me(e, "rotate") || me(e, "skew")
                ? `${i}deg`
                : `${i}`
            : i;
        },
        vn = (e, t, n, r, o, i) => {
          let a = "0";
          const s = _e(r) ? getComputedStyle(e)[t] : bn(t, r, e, o, i);
          return (
            (a = _e(n)
              ? we(r)
                ? r.map((n) => bn(t, n, e, o, i))
                : s
              : [bn(t, n, e, o, i), s]),
            a
          );
        };
      class yn {
        constructor(e, t) {
          de.scope && de.scope.revertibles.push(this),
            mn ||
              (J.forEach((e) => {
                const t = me(e, "skew"),
                  n = me(e, "scale"),
                  r = me(e, "rotate"),
                  o = me(e, "translate"),
                  i = r || t,
                  a = i
                    ? "<angle>"
                    : n
                      ? "<number>"
                      : o
                        ? "<length-percentage>"
                        : "*";
                CSS.registerProperty({
                  name: "--" + e,
                  syntax: a,
                  inherits: !1,
                  initialValue: o ? "0px" : i ? "0deg" : n ? "1" : "0",
                });
              }),
              (mn = !0));
          const n = st(e),
            r = n.length;
          r ||
            console.warn(
              "No target found. Make sure the element you're trying to animate is accessible before creating your animation.",
            );
          const o = ut(t.ease, un(de.defaults.ease)),
            i = o.ease && o,
            a = ut(t.autoplay, de.defaults.autoplay),
            s = !(!a || !a.link) && a,
            l = t.alternate && !0 === t.alternate,
            c = t.reversed && !0 === t.reversed,
            u = ut(t.loop, de.defaults.loop),
            d = !0 === u || u === 1 / 0 ? 1 / 0 : be(u) ? u + 1 : 1,
            h = l
              ? c
                ? "alternate-reverse"
                : "alternate"
              : c
                ? "reverse"
                : "normal",
            p = un(o),
            m = 1 === de.timeScale ? 1 : W;
          (this.targets = n),
            (this.animations = []),
            (this.controlAnimation = null),
            (this.onComplete = t.onComplete || ee),
            (this.duration = 0),
            (this.muteCallbacks = !1),
            (this.completed = !1),
            (this.paused = !a || !1 !== s),
            (this.reversed = c),
            (this.autoplay = a),
            (this._speed = ut(t.playbackRate, de.defaults.playbackRate)),
            (this._resolve = ee),
            (this._completed = 0),
            (this._inlineStyles = n.map((e) => e.getAttribute("style"))),
            n.forEach((e, n) => {
              const a = e[U],
                s = pn.some((e) => t.hasOwnProperty(e)),
                l =
                  (i
                    ? i.duration
                    : dt(ut(t.duration, de.defaults.duration), e, n, r)) * m,
                c = dt(ut(t.delay, de.defaults.delay), e, n, r) * m,
                u = ut(t.composition, "replace");
              for (let i in t) {
                if (!Le(i)) continue;
                const f = {},
                  w = {
                    iterations: d,
                    direction: h,
                    fill: "forwards",
                    easing: p,
                    duration: l,
                    delay: c,
                    composite: u,
                  },
                  g = t[i],
                  b = !!s && (J.includes(i) ? i : K.get(i));
                let v;
                if (ge(g)) {
                  const t = g,
                    s = ut(t.ease, o),
                    d = s.ease && s,
                    h = t.to,
                    p = t.from;
                  if (
                    ((w.duration =
                      (d ? d.duration : dt(ut(t.duration, l), e, n, r)) * m),
                    (w.delay = dt(ut(t.delay, c), e, n, r) * m),
                    (w.composite = ut(t.composition, u)),
                    (w.easing = un(s)),
                    (v = vn(e, i, p, h, n, r)),
                    b
                      ? ((f[`--${b}`] = v), (a[b] = v))
                      : (f[i] = vn(e, i, p, h, n, r)),
                    gn(this, e, i, f, w),
                    !_e(p))
                  )
                    if (b) {
                      const t = `--${b}`;
                      e.style.setProperty(t, f[t][0]);
                    } else e.style[i] = f[i][0];
                } else
                  (v = we(g)
                    ? g.map((t) => bn(i, t, e, n, r))
                    : bn(i, g, e, n, r)),
                    b ? ((f[`--${b}`] = v), (a[b] = v)) : (f[i] = v),
                    gn(this, e, i, f, w);
              }
              if (s) {
                let t = X;
                for (let e in a) t += `${Q[e]}var(--${e})) `;
                e.style.transform = t;
              }
            }),
            s && this.autoplay.link(this);
        }
        forEach(e) {
          const t = ve(e) ? (t) => t[e]() : e;
          return this.animations.forEach(t), this;
        }
        get speed() {
          return this._speed;
        }
        set speed(e) {
          (this._speed = +e), this.forEach((t) => (t.playbackRate = e));
        }
        get currentTime() {
          const e = this.controlAnimation,
            t = de.timeScale;
          return this.completed
            ? this.duration
            : e
              ? +e.currentTime * (1 === t ? 1 : t)
              : 0;
        }
        set currentTime(e) {
          const t = e * (1 === de.timeScale ? 1 : W);
          this.forEach((e) => (e.currentTime = t));
        }
        get progress() {
          return this.currentTime / this.duration;
        }
        set progress(e) {
          this.forEach((t) => (t.currentTime = e * this.duration || 0));
        }
        resume() {
          return this.paused
            ? ((this.paused = !1), this.forEach("play"))
            : this;
        }
        pause() {
          return this.paused
            ? this
            : ((this.paused = !0), this.forEach("pause"));
        }
        alternate() {
          return (
            (this.reversed = !this.reversed),
            this.forEach("reverse"),
            this.paused && this.forEach("pause"),
            this
          );
        }
        play() {
          return this.reversed && this.alternate(), this.resume();
        }
        reverse() {
          return this.reversed || this.alternate(), this.resume();
        }
        seek(e, t = !1) {
          return (
            t && (this.muteCallbacks = !0),
            e < this.duration && (this.completed = !1),
            (this.currentTime = e),
            (this.muteCallbacks = !1),
            this.paused && this.pause(),
            this
          );
        }
        restart() {
          return (this.completed = !1), this.seek(0, !0).resume();
        }
        commitStyles() {
          return this.forEach("commitStyles");
        }
        complete() {
          return this.seek(this.duration);
        }
        cancel() {
          return this.forEach("cancel"), this.pause();
        }
        revert() {
          return (
            this.cancel(),
            this.targets.forEach((e, t) =>
              e.setAttribute("style", this._inlineStyles[t]),
            ),
            this
          );
        }
        then(e = ee) {
          const t = this.then,
            n = () => {
              (this.then = null),
                e(this),
                (this.then = t),
                (this._resolve = ee);
            };
          return new Promise(
            (e) => (
              (this._resolve = () => e(n())),
              this.completed && this._resolve(),
              this
            ),
          );
        }
      }
      const _n = (e, t, n) => {
          let r = !1;
          return (
            Ye(
              t,
              (o) => {
                const i = o.target;
                if (e.includes(i)) {
                  const e = o.property,
                    a = o._tweenType,
                    s = Ut(n, i, a);
                  (!s || (s && s === e)) &&
                    (o.parent._tail === o &&
                      3 === o._tweenType &&
                      o._prev &&
                      3 === o._prev._tweenType &&
                      (o._prev._renderTransforms = 1),
                    Ge(t, o),
                    Et(o),
                    (r = !0));
                }
              },
              !0,
            ),
            r
          );
        },
        kn = (e, t, n) => {
          const r = at(e),
            o = t || nt,
            i = t && t.controlAnimation && t;
          for (let e = 0, t = r.length; e < t; e++) {
            const t = r[e];
            wn(t, n, i);
          }
          let a;
          if (o._hasChildren) {
            let t = 0;
            Ye(
              o,
              (i) => {
                if (!i._hasChildren)
                  if (((a = _n(r, i, n)), a && !i._head)) i.cancel(), Ge(o, i);
                  else {
                    const e = i._offset + i._delay + i.duration;
                    e > t && (t = e);
                  }
                i._head ? kn(e, i, n) : (i._hasChildren = !1);
              },
              !0,
            ),
              _e(o.iterationDuration) || (o.iterationDuration = t);
          } else a = _n(r, o, n);
          return (
            a && !o._head && ((o._hasChildren = !1), o.cancel && o.cancel()), r
          );
        },
        xn = (e, t, n) => {
          const r = 10 ** (n || 0);
          return Ne((Math.random() * (t - e + 1 / r) + e) * r) / r;
        },
        En =
          (e) =>
          (...t) => {
            const n = e(...t);
            return new Proxy(ee, {
              apply: (e, t, [r]) => n(r),
              get: (e, t) =>
                En((...e) => {
                  const r = Cn[t](...e);
                  return (e) => r(n(e));
                }),
            });
          },
        Tn =
          (e, t = 0) =>
          (...n) =>
            (n.length < e.length
              ? En(
                  (
                    (e, t = 0) =>
                    (...n) =>
                      t ? (t) => e(...n, t) : (t) => e(t, ...n)
                  )(e, t),
                )
              : e)(...n),
        Cn = {
          $: st,
          get: function (e, t, n) {
            const r = st(e);
            if (!r.length) return;
            const [o] = r,
              i = ht(o, t),
              a = Ut(t, o, i);
            let s = mt(o, a);
            if (_e(n)) return s;
            if ((wt(s, bt), 0 === bt.t || 1 === bt.t)) {
              if (!1 === n) return bt.n;
              {
                const e = Zt(o, bt, n, !1);
                return `${He(e.n, de.precision)}${e.u}`;
              }
            }
          },
          set: (e, t) => {
            if (!_e(t))
              return (
                (t.duration = G),
                (t.composition = ut(t.composition, H.none)),
                new an(e, t, null, 0, !0).resume()
              );
          },
          remove: kn,
          cleanInlineStyles: Wt,
          random: xn,
          randomPick: (e) => e[xn(0, e.length - 1)],
          shuffle: (e) => {
            let t,
              n,
              r = e.length;
            for (; r; ) (n = xn(0, --r)), (t = e[r]), (e[r] = e[n]), (e[n] = t);
            return e;
          },
          lerp: (e, t, n, r) => {
            let o = W / de.defaults.frameRate;
            if (!1 !== r) {
              const e = r || (nt._hasChildren && nt);
              e && e.deltaTime && (o = e.deltaTime);
            }
            const i = 1 - Math.exp(-n * o * 0.1);
            return n ? (1 === n ? t : (1 - i) * e + i * t) : e;
          },
          sync: (e = ee) =>
            new St(
              { duration: 1 * de.timeScale, onComplete: e },
              null,
              0,
            ).resume(),
          clamp: Tn(qe),
          round: Tn(He),
          snap: Tn((e, t) =>
            we(t)
              ? t.reduce((t, n) => (Be(n - e) < Be(t - e) ? n : t))
              : t
                ? Ie(e / t) * t
                : e,
          ),
          wrap: Tn(
            (e, t, n) => ((((e - t) % (n - t)) + (n - t)) % (n - t)) + t,
          ),
          interpolate: Tn(ze, 1),
          mapRange: Tn((e, t, n, r, o) => r + ((e - t) / (n - t)) * (o - r)),
          roundPad: Tn((e, t) => (+e).toFixed(t)),
          padStart: Tn((e, t, n) => `${e}`.padStart(t, n)),
          padEnd: Tn((e, t, n) => `${e}`.padEnd(t, n)),
          degToRad: Tn((e) => (e * De) / 180),
          radToDeg: Tn((e) => (180 * e) / De),
        };
      new Map(),
        new yn(".square", { x: 240, width: 75, rotate: ".75turn" }),
        d().then(function (e) {
          console.log(e);
        });
    })();
})();
