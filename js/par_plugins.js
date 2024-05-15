!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t()
}(this, function () {
  "use strict";
  const D = 1e3, j = "transitionend", N = t => {
      let i = t.getAttribute("data-bs-target");
      if (!i || "#" === i) {
        let e = t.getAttribute("href");
        if (!e || !e.includes("#") && !e.startsWith(".")) {
          return null;
        }
        e.includes("#") && !e.startsWith("#") && (e = "#" + e.split("#")[1]), i = e && "#" !== e ? e.trim() : null
      }
      return i
    }, F = e => {
      e = N(e);
      return e && document.querySelector(e) ? e : null
    }, r = e => {
      e = N(e);
      return e ? document.querySelector(e) : null
    }, H = e => {
      e.dispatchEvent(new Event(j))
    },
    o = e => !(!e || "object" != typeof e) && void 0 !== (e = void 0 !== e.jquery ? e[0] : e).nodeType,
    n = e => o(e) ? e.jquery ? e[0] : e : "string" == typeof e && 0 < e.length ? document.querySelector(e) : null,
    s = e => {
      if (!o(e) || 0 === e.getClientRects().length) {
        return !1;
      }
      var t = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
        i = e.closest("details:not([open])");
      if (!i) {
        return t;
      }
      if (i !== e) {
        e = e.closest("summary");
        if (e && e.parentNode !== i) {
          return !1;
        }
        if (null === e) {
          return !1
        }
      }
      return t
    },
    a = e => !e || e.nodeType !== Node.ELEMENT_NODE || (!!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled"))),
    q = e => {
      return document.documentElement.attachShadow ? "function" == typeof e.getRootNode ? (t = e.getRootNode()) instanceof ShadowRoot ? t : null : e instanceof ShadowRoot ? e : e.parentNode ? q(e.parentNode) : null : null;
      var t
    }, B = () => {
    }, R = e => {
      e.offsetHeight
    },
    W = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
    Y = [], l = () => "rtl" === document.documentElement.dir;
  var e = s => {
    var e;
    e = () => {
      const e = W();
      if (e) {
        const t = s.NAME, i = e.fn[t];
        e.fn[t] = s.jQueryInterface, e.fn[t].Constructor = s, e.fn[t].noConflict = () => (e.fn[t] = i, s.jQueryInterface)
      }
    }, "loading" === document.readyState ? (Y.length || document.addEventListener("DOMContentLoaded", () => {
      for (const e of Y) {
        e()
      }
    }), Y.push(e)) : e()
  };
  const c = e => {
    "function" == typeof e && e()
  }, V = (i, s, e = !0) => {
    if (e) {
      e = (e => {
        if (!e) {
          return 0;
        }
        let {
          transitionDuration: t,
          transitionDelay: i
        } = window.getComputedStyle(e);
        var e = Number.parseFloat(t), s = Number.parseFloat(i);
        return e || s ? (t = t.split(",")[0], i = i.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(i)) * D) : 0
      })(s) + 5;
      let t = !1;
      const n = ({target: e}) => {
        e === s && (t = !0, s.removeEventListener(j, n), c(i))
      };
      s.addEventListener(j, n), setTimeout(() => {
        t || H(s)
      }, e)
    }
    else {
      c(i)
    }
  }, X = (e, t, i, s) => {
    var n = e.length;
    let r = e.indexOf(t);
    return -1 === r ? !i && s ? e[n - 1] : e[0] : (r += i ? 1 : -1, s && (r = (r + n) % n), e[Math.max(0, Math.min(r, n - 1))])
  }, G = /[^.]*(?=\..*)\.|.*/, U = /\..*/, Q = /::\d+$/, K = {};
  let Z = 1;
  const J = {mouseenter: "mouseover", mouseleave: "mouseout"},
    ee = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function te(e, t) {
    return t && t + "::" + Z++ || e.uidEvent || Z++
  }

  function ie(e) {
    var t = te(e);
    return e.uidEvent = t, K[t] = K[t] || {}, K[t]
  }

  function se(e, t, i = null) {
    return Object.values(e).find(e => e.callable === t && e.delegationSelector === i)
  }

  function ne(e, t, i) {
    var s = "string" == typeof t, t = !s && t || i;
    let n = ae(e);
    return [s, t, n = ee.has(n) ? n : e]
  }

  function re(s, n, r, o, a) {
    if ("string" == typeof n && s) {
      let [e, t, i] = ne(n, r, o);
      var l;
      n in J && (t = (l = t, function (e) {
        if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) {
          return l.call(this, e)
        }
      }));
      const m = ie(s), f = m[i] || (m[i] = {}), g = se(f, t, e ? r : null);
      if (g) {
        g.oneOff = g.oneOff && a;
      }
      else {
        var c, d, u, h, p, o = te(t, n.replace(G, ""));
        const v = e ? (u = s, h = r, p = t, function t(i) {
          var s = u.querySelectorAll(h);
          for (let e = i["target"]; e && e !== this; e = e.parentNode) {
            for (const n of s) {
              if (n === e) {
                return le(i, {delegateTarget: e}), t.oneOff && y.off(u, i.type, h, p), p.apply(e, [i])
              }
            }
          }
        }) : (c = s, d = t, function e(t) {
          return le(t, {delegateTarget: c}), e.oneOff && y.off(c, t.type, d), d.apply(c, [t])
        });
        v.delegationSelector = e ? r : null, v.callable = t, v.oneOff = a, v.uidEvent = o, f[o] = v, s.addEventListener(i, v, e)
      }
    }
  }

  function oe(e, t, i, s, n) {
    s = se(t[i], s, n);
    s && (e.removeEventListener(i, s, Boolean(n)), delete t[i][s.uidEvent])
  }

  function ae(e) {
    return e = e.replace(U, ""), J[e] || e
  }

  const y = {
    on(e, t, i, s) {
      re(e, t, i, s, !1)
    }, one(e, t, i, s) {
      re(e, t, i, s, !0)
    }, off(e, t, i, s) {
      if ("string" == typeof t && e) {
        var [s, n, r] = ne(t, i, s), o = r !== t, a = ie(e), l = a[r] || {},
          c = t.startsWith(".");
        if (void 0 !== n) {
          return Object.keys(l).length ? void oe(e, a, r, n, s ? i : null) : void 0;
        }
        if (c) {
          for (const v of Object.keys(a)) {
            d = f = m = p = h = u = void 0;
            var d, u = e, h = a, p = v, m = t.slice(1), f = h[p] || {};
            for (const y of Object.keys(f)) {
              y.includes(m) && oe(u, h, p, (d = f[y]).callable, d.delegationSelector)
            }
          }
        }
        for (const b of Object.keys(l)) {
          var g = b.replace(Q, "");
          o && !t.includes(g) || oe(e, a, r, (g = l[b]).callable, g.delegationSelector)
        }
      }
    }, trigger(e, t, i) {
      if ("string" != typeof t || !e) {
        return null;
      }
      const s = W();
      let n = null, r = !0, o = !0, a = !1,
        l = (t !== ae(t) && s && (n = s.Event(t, i), s(e).trigger(n), r = !n.isPropagationStopped(), o = !n.isImmediatePropagationStopped(), a = n.isDefaultPrevented()), new Event(t, {
          bubbles: r,
          cancelable: !0
        }));
      return l = le(l, i), a && l.preventDefault(), o && e.dispatchEvent(l), l.defaultPrevented && n && n.preventDefault(), l
    }
  };

  function le(t, e) {
    for (const [i, s] of Object.entries(e || {})) {
      try {
        t[i] = s
      }
      catch (e) {
        Object.defineProperty(t, i, {
          configurable: !0, get() {
            return s
          }
        })
      }
    }
    return t
  }

  const d = new Map, ce = {
    set(e, t, i) {
      d.has(e) || d.set(e, new Map);
      const s = d.get(e);
      s.has(t) || 0 === s.size ? s.set(t, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
    }, get(e, t) {
      return d.has(e) && d.get(e).get(t) || null
    }, remove(e, t) {
      if (d.has(e)) {
        const i = d.get(e);
        i.delete(t), 0 === i.size && d.delete(e)
      }
    }
  };

  function de(t) {
    if ("true" === t) {
      return !0;
    }
    if ("false" === t) {
      return !1;
    }
    if (t === Number(t).toString()) {
      return Number(t);
    }
    if ("" === t || "null" === t) {
      return null;
    }
    if ("string" != typeof t) {
      return t;
    }
    try {
      return JSON.parse(decodeURIComponent(t))
    }
    catch (e) {
      return t
    }
  }

  function ue(e) {
    return e.replace(/[A-Z]/g, e => "-" + e.toLowerCase())
  }

  const u = {
    setDataAttribute(e, t, i) {
      e.setAttribute("data-bs-" + ue(t), i)
    }, removeDataAttribute(e, t) {
      e.removeAttribute("data-bs-" + ue(t))
    }, getDataAttributes(t) {
      if (!t) {
        return {};
      }
      const i = {};
      for (const s of Object.keys(t.dataset).filter(e => e.startsWith("bs") && !e.startsWith("bsConfig"))) {
        let e = s.replace(/^bs/, "");
        e = e.charAt(0).toLowerCase() + e.slice(1, e.length), i[e] = de(t.dataset[s])
      }
      return i
    }, getDataAttribute(e, t) {
      return de(e.getAttribute("data-bs-" + ue(t)))
    }
  };

  class he {
    static get Default() {
      return {}
    }

    static get DefaultType() {
      return {}
    }

    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!')
    }

    _getConfig(e) {
      return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
    }

    _configAfterMerge(e) {
      return e
    }

    _mergeConfigObj(e, t) {
      var i = o(t) ? u.getDataAttribute(t, "config") : {};
      return {...this.constructor.Default, ..."object" == typeof i ? i : {}, ...o(t) ? u.getDataAttributes(t) : {}, ..."object" == typeof e ? e : {}}
    }

    _typeCheckConfig(e, t = this.constructor.DefaultType) {
      for (const n of Object.keys(t)) {
        var i = t[n], s = e[n],
          s = o(s) ? "element" : null == (s = s) ? "" + s : Object.prototype.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
        if (!new RegExp(i).test(s)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${s}" but expected type "${i}".`)
        }
      }
    }
  }

  class t extends he {
    constructor(e, t) {
      super(), (e = n(e)) && (this._element = e, this._config = this._getConfig(t), ce.set(this._element, this.constructor.DATA_KEY, this))
    }

    static get VERSION() {
      return "5.2.2"
    }

    static get DATA_KEY() {
      return "bs." + this.NAME
    }

    static get EVENT_KEY() {
      return "." + this.DATA_KEY
    }

    static getInstance(e) {
      return ce.get(n(e), this.DATA_KEY)
    }

    static getOrCreateInstance(e, t = {}) {
      return this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
    }

    static eventName(e) {
      return "" + e + this.EVENT_KEY
    }

    dispose() {
      ce.remove(this._element, this.constructor.DATA_KEY), y.off(this._element, this.constructor.EVENT_KEY);
      for (const e of Object.getOwnPropertyNames(this)) {
        this[e] = null
      }
    }

    _queueCallback(e, t, i = !0) {
      V(e, t, i)
    }

    _getConfig(e) {
      return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
    }
  }

  var pe = (i, s = "hide") => {
    var e = "click.dismiss" + i.EVENT_KEY;
    const n = i.NAME;
    y.on(document, e, `[data-bs-dismiss="${n}"]`, function (e) {
      if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), !a(this)) {
        e = r(this) || this.closest("." + n);
        const t = i.getOrCreateInstance(e);
        t[s]()
      }
    })
  };

  class me extends t {
    static get NAME() {
      return "alert"
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = me.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) {
            throw new TypeError(`No method named "${t}"`);
          }
          e[t](this)
        }
      })
    }

    close() {
      var e;
      y.trigger(this._element, "close.bs.alert").defaultPrevented || (this._element.classList.remove("show"), e = this._element.classList.contains("fade"), this._queueCallback(() => this._destroyElement(), this._element, e))
    }

    _destroyElement() {
      this._element.remove(), y.trigger(this._element, "closed.bs.alert"), this.dispose()
    }
  }

  pe(me, "close"), e(me);
  const fe = '[data-bs-toggle="button"]';

  class ge extends t {
    static get NAME() {
      return "button"
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = ge.getOrCreateInstance(this);
        "toggle" === t && e[t]()
      })
    }

    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
    }
  }

  y.on(document, "click.bs.button.data-api", fe, e => {
    e.preventDefault();
    e = e.target.closest(fe);
    const t = ge.getOrCreateInstance(e);
    t.toggle()
  }), e(ge);
  const h = {
    find(e, t = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(t, e))
    }, findOne(e, t = document.documentElement) {
      return Element.prototype.querySelector.call(t, e)
    }, children(e, t) {
      return [].concat(...e.children).filter(e => e.matches(t))
    }, parents(e, t) {
      const i = [];
      let s = e.parentNode.closest(t);
      for (; s;) {
        i.push(s), s = s.parentNode.closest(t);
      }
      return i
    }, prev(e, t) {
      let i = e.previousElementSibling;
      for (; i;) {
        if (i.matches(t)) {
          return [i];
        }
        i = i.previousElementSibling
      }
      return []
    }, next(e, t) {
      let i = e.nextElementSibling;
      for (; i;) {
        if (i.matches(t)) {
          return [i];
        }
        i = i.nextElementSibling
      }
      return []
    }, focusableChildren(e) {
      var t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(e => e + ':not([tabindex^="-"])').join(",");
      return this.find(t, e).filter(e => !a(e) && s(e))
    }
  }, i = ".bs.swipe", ve = (i, i, i, i, i, {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  }), ye = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };

  class be extends he {
    constructor(e, t) {
      super(), (this._element = e) && be.isSupported() && (this._config = this._getConfig(t), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
    }

    static get Default() {
      return ve
    }

    static get DefaultType() {
      return ye
    }

    static get NAME() {
      return "swipe"
    }

    static isSupported() {
      return "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints
    }

    dispose() {
      y.off(this._element, i)
    }

    _start(e) {
      this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : this._deltaX = e.touches[0].clientX
    }

    _end(e) {
      this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), c(this._config.endCallback)
    }

    _move(e) {
      this._deltaX = e.touches && 1 < e.touches.length ? 0 : e.touches[0].clientX - this._deltaX
    }

    _handleSwipe() {
      var e = Math.abs(this._deltaX);
      e <= 40 || (e = e / this._deltaX, this._deltaX = 0, e && c(0 < e ? this._config.rightCallback : this._config.leftCallback))
    }

    _initEvents() {
      this._supportPointerEvents ? (y.on(this._element, "pointerdown.bs.swipe", e => this._start(e)), y.on(this._element, "pointerup.bs.swipe", e => this._end(e)), this._element.classList.add("pointer-event")) : (y.on(this._element, "touchstart.bs.swipe", e => this._start(e)), y.on(this._element, "touchmove.bs.swipe", e => this._move(e)), y.on(this._element, "touchend.bs.swipe", e => this._end(e)))
    }

    _eventIsPointerPenTouch(e) {
      return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType)
    }
  }

  var p = ".bs.carousel";
  const we = "next", m = "prev", f = "left", xe = "right", _e = "slid" + p;
  const Te = "carousel", Ee = "active", Se = ".active", Ce = ".carousel-item";
  Se, Ce;
  const ke = {ArrowLeft: xe, ArrowRight: f}, Ae = {
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    ride: !1,
    touch: !0,
    wrap: !0
  }, Me = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };

  class Pe extends t {
    constructor(e, t) {
      super(e, t), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = h.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === Te && this.cycle()
    }

    static get Default() {
      return Ae
    }

    static get DefaultType() {
      return Me
    }

    static get NAME() {
      return "carousel"
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = Pe.getOrCreateInstance(this, t);
        if ("number" == typeof t) {
          e.to(t);
        }
        else if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) {
            throw new TypeError(`No method named "${t}"`);
          }
          e[t]()
        }
      })
    }

    next() {
      this._slide(we)
    }

    nextWhenVisible() {
      !document.hidden && s(this._element) && this.next()
    }

    prev() {
      this._slide(m)
    }

    pause() {
      this._isSliding && H(this._element), this._clearInterval()
    }

    cycle() {
      this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval)
    }

    _maybeEnableCycle() {
      this._config.ride && (this._isSliding ? y.one(this._element, _e, () => this.cycle()) : this.cycle())
    }

    to(e) {
      var t, i = this._getItems();
      e > i.length - 1 || e < 0 || (this._isSliding ? y.one(this._element, _e, () => this.to(e)) : (t = this._getItemIndex(this._getActive())) !== e && (t = t < e ? we : m, this._slide(t, i[e])))
    }

    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
    }

    _configAfterMerge(e) {
      return e.defaultInterval = e.interval, e
    }

    _addEventListeners() {
      this._config.keyboard && y.on(this._element, "keydown.bs.carousel", e => this._keydown(e)), "hover" === this._config.pause && (y.on(this._element, "mouseenter.bs.carousel", () => this.pause()), y.on(this._element, "mouseleave.bs.carousel", () => this._maybeEnableCycle())), this._config.touch && be.isSupported() && this._addTouchEventListeners()
    }

    _addTouchEventListeners() {
      for (const t of h.find(".carousel-item img", this._element)) {
        y.on(t, "dragstart.bs.carousel", e => e.preventDefault());
      }
      var e = {
        leftCallback: () => this._slide(this._directionToOrder(f)),
        rightCallback: () => this._slide(this._directionToOrder(xe)),
        endCallback: () => {
          "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval))
        }
      };
      this._swipeHelper = new be(this._element, e)
    }

    _keydown(e) {
      var t;
      /input|textarea/i.test(e.target.tagName) || (t = ke[e.key]) && (e.preventDefault(), this._slide(this._directionToOrder(t)))
    }

    _getItemIndex(e) {
      return this._getItems().indexOf(e)
    }

    _setActiveIndicatorElement(e) {
      if (this._indicatorsElement) {
        const t = h.findOne(Se, this._indicatorsElement),
          i = (t.classList.remove(Ee), t.removeAttribute("aria-current"), h.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement));
        i && (i.classList.add(Ee), i.setAttribute("aria-current", "true"))
      }
    }

    _updateInterval() {
      const e = this._activeElement || this._getActive();
      var t;
      e && (t = Number.parseInt(e.getAttribute("data-bs-interval"), 10), this._config.interval = t || this._config.defaultInterval)
    }

    _slide(t, e = null) {
      if (!this._isSliding) {
        const s = this._getActive();
        var i = t === we;
        const n = e || X(this._getItems(), s, i, this._config.wrap);
        if (n !== s) {
          const r = this._getItemIndex(n),
            o = e => y.trigger(this._element, e, {
              relatedTarget: n,
              direction: this._orderToDirection(t),
              from: this._getItemIndex(s),
              to: r
            });
          e = o("slide.bs.carousel");
          if (!e.defaultPrevented && s && n) {
            e = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(r), this._activeElement = n;
            const a = i ? "carousel-item-start" : "carousel-item-end",
              l = i ? "carousel-item-next" : "carousel-item-prev";
            n.classList.add(l), R(n), s.classList.add(a), n.classList.add(a);
            this._queueCallback(() => {
              n.classList.remove(a, l), n.classList.add(Ee), s.classList.remove(Ee, l, a), this._isSliding = !1, o(_e)
            }, s, this._isAnimated()), e && this.cycle()
          }
        }
      }
    }

    _isAnimated() {
      return this._element.classList.contains("slide")
    }

    _getActive() {
      return h.findOne(".active.carousel-item", this._element)
    }

    _getItems() {
      return h.find(Ce, this._element)
    }

    _clearInterval() {
      this._interval && (clearInterval(this._interval), this._interval = null)
    }

    _directionToOrder(e) {
      return l() ? e === f ? m : we : e === f ? we : m
    }

    _orderToDirection(e) {
      return l() ? e === m ? f : xe : e === m ? xe : f
    }
  }

  y.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function (e) {
    const t = r(this);
    if (t && t.classList.contains(Te)) {
      e.preventDefault();
      const i = Pe.getOrCreateInstance(t);
      e = this.getAttribute("data-bs-slide-to");
      return e ? (i.to(e), void i._maybeEnableCycle()) : ("next" === u.getDataAttribute(this, "slide") ? i.next() : i.prev(), void i._maybeEnableCycle())
    }
  }), y.on(window, "load.bs.carousel.data-api", () => {
    for (const e of h.find('[data-bs-ride="carousel"]')) {
      Pe.getOrCreateInstance(e)
    }
  }), e(Pe);
  const Ie = "show", g = "collapse", Le = "collapsing",
    Oe = (g, g, '[data-bs-toggle="collapse"]'), $e = {parent: null, toggle: !0},
    ze = {parent: "(null|element)", toggle: "boolean"};

  class De extends t {
    constructor(e, t) {
      super(e, t), this._isTransitioning = !1, this._triggerArray = [];
      for (const n of h.find(Oe)) {
        var i = F(n), s = h.find(i).filter(e => e === this._element);
        null !== i && s.length && this._triggerArray.push(n)
      }
      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
    }

    static get Default() {
      return $e
    }

    static get DefaultType() {
      return ze
    }

    static get NAME() {
      return "collapse"
    }

    static jQueryInterface(t) {
      const i = {};
      return "string" == typeof t && /show|hide/.test(t) && (i.toggle = !1), this.each(function () {
        const e = De.getOrCreateInstance(this, i);
        if ("string" == typeof t) {
          if (void 0 === e[t]) {
            throw new TypeError(`No method named "${t}"`);
          }
          e[t]()
        }
      })
    }

    toggle() {
      this._isShown() ? this.hide() : this.show()
    }

    show() {
      if (!this._isTransitioning && !this._isShown()) {
        let e = [];
        if (!(e = this._config.parent ? this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(e => e !== this._element).map(e => De.getOrCreateInstance(e, {toggle: !1})) : e).length || !e[0]._isTransitioning) {
          var t = y.trigger(this._element, "show.bs.collapse");
          if (!t.defaultPrevented) {
            for (const s of e) {
              s.hide();
            }
            const i = this._getDimension();
            this._element.classList.remove(g), this._element.classList.add(Le), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            t = "scroll" + (i[0].toUpperCase() + i.slice(1));
            this._queueCallback(() => {
              this._isTransitioning = !1, this._element.classList.remove(Le), this._element.classList.add(g, Ie), this._element.style[i] = "", y.trigger(this._element, "shown.bs.collapse")
            }, this._element, !0), this._element.style[i] = this._element[t] + "px"
          }
        }
      }
    }

    hide() {
      if (!this._isTransitioning && this._isShown()) {
        var e = y.trigger(this._element, "hide.bs.collapse");
        if (!e.defaultPrevented) {
          e = this._getDimension();
          this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", R(this._element), this._element.classList.add(Le), this._element.classList.remove(g, Ie);
          for (const i of this._triggerArray) {
            var t = r(i);
            t && !this._isShown(t) && this._addAriaAndCollapsedClass([i], !1)
          }
          this._isTransitioning = !0;
          this._element.style[e] = "", this._queueCallback(() => {
            this._isTransitioning = !1, this._element.classList.remove(Le), this._element.classList.add(g), y.trigger(this._element, "hidden.bs.collapse")
          }, this._element, !0)
        }
      }
    }

    _isShown(e = this._element) {
      return e.classList.contains(Ie)
    }

    _configAfterMerge(e) {
      return e.toggle = Boolean(e.toggle), e.parent = n(e.parent), e
    }

    _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
    }

    _initializeChildren() {
      if (this._config.parent) {
        for (const t of this._getFirstLevelChildren(Oe)) {
          var e = r(t);
          e && this._addAriaAndCollapsedClass([t], this._isShown(e))
        }
      }
    }

    _getFirstLevelChildren(e) {
      const t = h.find(":scope .collapse .collapse", this._config.parent);
      return h.find(e, this._config.parent).filter(e => !t.includes(e))
    }

    _addAriaAndCollapsedClass(e, t) {
      if (e.length) {
        for (const i of e) {
          i.classList.toggle("collapsed", !t), i.setAttribute("aria-expanded", t)
        }
      }
    }
  }

  y.on(document, "click.bs.collapse.data-api", Oe, function (e) {
    ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
    e = F(this);
    for (const t of h.find(e)) {
      De.getOrCreateInstance(t, {toggle: !1}).toggle()
    }
  }), e(De);
  var k = "top", A = "bottom", M = "right", P = "left", je = "auto",
    Ne = [k, A, M, P], I = "start", Fe = "end", He = "clippingParents",
    qe = "viewport", Be = "popper", Re = "reference",
    We = Ne.reduce(function (e, t) {
      return e.concat([t + "-" + I, t + "-" + Fe])
    }, []), Ye = [].concat(Ne, [je]).reduce(function (e, t) {
      return e.concat([t, t + "-" + I, t + "-" + Fe])
    }, []), p = "beforeRead", Ve = "afterRead", Xe = "beforeMain",
    Ge = "afterMain", Ue = "beforeWrite", Qe = "afterWrite",
    Ke = [p, "read", Ve, Xe, "main", Ge, Ue, "write", Qe];

  function v(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
  }

  function b(e) {
    return null == e ? window : "[object Window]" !== e.toString() ? (t = e.ownerDocument) && t.defaultView || window : e;
    var t
  }

  function w(e) {
    return e instanceof b(e).Element || e instanceof Element
  }

  function x(e) {
    return e instanceof b(e).HTMLElement || e instanceof HTMLElement
  }

  function Ze(e) {
    if ("undefined" != typeof ShadowRoot) {
      return e instanceof b(e).ShadowRoot || e instanceof ShadowRoot
    }
  }

  var Je = {
    name: "applyStyles", enabled: !0, phase: "write", fn: function (e) {
      var n = e.state;
      Object.keys(n.elements).forEach(function (e) {
        var t = n.styles[e] || {}, i = n.attributes[e] || {}, s = n.elements[e];
        x(s) && v(s) && (Object.assign(s.style, t), Object.keys(i).forEach(function (e) {
          var t = i[e];
          !1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? "" : t)
        }))
      })
    }, effect: function (e) {
      var s = e.state, n = {
        popper: {
          position: s.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        }, arrow: {position: "absolute"}, reference: {}
      };
      return Object.assign(s.elements.popper.style, n.popper), s.styles = n, s.elements.arrow && Object.assign(s.elements.arrow.style, n.arrow), function () {
        Object.keys(s.elements).forEach(function (e) {
          var t = s.elements[e], i = s.attributes[e] || {},
            e = Object.keys((s.styles.hasOwnProperty(e) ? s.styles : n)[e]).reduce(function (e, t) {
              return e[t] = "", e
            }, {});
          x(t) && v(t) && (Object.assign(t.style, e), Object.keys(i).forEach(function (e) {
            t.removeAttribute(e)
          }))
        })
      }
    }, requires: ["computeStyles"]
  };

  function L(e) {
    return e.split("-")[0]
  }

  var C = Math.max, et = Math.min, tt = Math.round;

  function it() {
    var e = navigator.userAgentData;
    return null != e && e.brands ? e.brands.map(function (e) {
      return e.brand + "/" + e.version
    }).join(" ") : navigator.userAgent
  }

  function st() {
    return !/^((?!chrome|android).)*safari/i.test(it())
  }

  function nt(e, t, i) {
    void 0 === t && (t = !1), void 0 === i && (i = !1);
    var s = e.getBoundingClientRect(), n = 1, r = 1;
    t && x(e) && (n = 0 < e.offsetWidth && tt(s.width) / e.offsetWidth || 1, r = 0 < e.offsetHeight && tt(s.height) / e.offsetHeight || 1);
    t = (w(e) ? b(e) : window).visualViewport, e = !st() && i, i = (s.left + (e && t ? t.offsetLeft : 0)) / n, e = (s.top + (e && t ? t.offsetTop : 0)) / r, t = s.width / n, n = s.height / r;
    return {
      width: t,
      height: n,
      top: e,
      right: i + t,
      bottom: e + n,
      left: i,
      x: i,
      y: e
    }
  }

  function rt(e) {
    var t = nt(e), i = e.offsetWidth, s = e.offsetHeight;
    return Math.abs(t.width - i) <= 1 && (i = t.width), Math.abs(t.height - s) <= 1 && (s = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: i,
      height: s
    }
  }

  function ot(e, t) {
    var i = t.getRootNode && t.getRootNode();
    if (e.contains(t)) {
      return !0;
    }
    if (i && Ze(i)) {
      var s = t;
      do {
        if (s && e.isSameNode(s)) {
          return !0
        }
      } while (s = s.parentNode || s.host)
    }
    return !1
  }

  function _(e) {
    return b(e).getComputedStyle(e)
  }

  function T(e) {
    return ((w(e) ? e.ownerDocument : e.document) || window.document).documentElement
  }

  function at(e) {
    return "html" === v(e) ? e : e.assignedSlot || e.parentNode || (Ze(e) ? e.host : null) || T(e)
  }

  function lt(e) {
    return x(e) && "fixed" !== _(e).position ? e.offsetParent : null
  }

  function ct(e) {
    for (var t, i = b(e), s = lt(e); s && (t = s, 0 <= ["table", "td", "th"].indexOf(v(t))) && "static" === _(s).position;) {
      s = lt(s);
    }
    return (!s || "html" !== v(s) && ("body" !== v(s) || "static" !== _(s).position)) && (s || function (e) {
      var t = /firefox/i.test(it()), i = /Trident/i.test(it());
      if (i && x(e) && "fixed" === _(e).position) {
        return null;
      }
      var s = at(e);
      for (Ze(s) && (s = s.host); x(s) && ["html", "body"].indexOf(v(s)) < 0;) {
        var n = _(s);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || t && "filter" === n.willChange || t && n.filter && "none" !== n.filter) {
          return s;
        }
        s = s.parentNode
      }
      return null
    }(e)) || i
  }

  function dt(e) {
    return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y"
  }

  function ut(e, t, i) {
    return C(e, et(t, i))
  }

  function ht() {
    return {top: 0, right: 0, bottom: 0, left: 0}
  }

  function pt(e) {
    return Object.assign({}, ht(), e)
  }

  function mt(i, e) {
    return e.reduce(function (e, t) {
      return e[t] = i, e
    }, {})
  }

  var ft = {
    name: "arrow", enabled: !0, phase: "main", fn: function (e) {
      var t, i, s, n, r = e.state, o = e.name, e = e.options,
        a = r.elements.arrow, l = r.modifiersData.popperOffsets,
        c = dt(d = L(r.placement)),
        d = 0 <= [P, M].indexOf(d) ? "height" : "width";
      a && l && (e = e.padding, i = r, i = pt("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, i.rects, {placement: i.placement})) : e) ? e : mt(e, Ne)), e = rt(a), n = "y" === c ? k : P, s = "y" === c ? A : M, t = r.rects.reference[d] + r.rects.reference[c] - l[c] - r.rects.popper[d], l = l[c] - r.rects.reference[c], a = (a = ct(a)) ? "y" === c ? a.clientHeight || 0 : a.clientWidth || 0 : 0, n = i[n], i = a - e[d] - i[s], n = ut(n, s = a / 2 - e[d] / 2 + (t / 2 - l / 2), i), r.modifiersData[o] = ((a = {})[c] = n, a.centerOffset = n - s, a))
    }, effect: function (e) {
      var t = e.state;
      null != (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e) && ("string" != typeof e || (e = t.elements.popper.querySelector(e))) && ot(t.elements.popper, e) && (t.elements.arrow = e)
    }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"]
  };

  function gt(e) {
    return e.split("-")[1]
  }

  var vt = {top: "auto", right: "auto", bottom: "auto", left: "auto"};

  function yt(e) {
    var t, i, s, n = e.popper, r = e.popperRect, o = e.placement,
      a = e.variation, l = e.offsets, c = e.position, d = e.gpuAcceleration,
      u = e.adaptive, h = e.roundOffsets, e = e.isFixed, p = l.x,
      p = void 0 === p ? 0 : p, m = l.y, m = void 0 === m ? 0 : m,
      f = "function" == typeof h ? h({x: p, y: m}) : {x: p, y: m},
      f = (p = f.x, m = f.y, l.hasOwnProperty("x")), l = l.hasOwnProperty("y"),
      g = P, v = k, y = window,
      n = (u && (i = "clientHeight", t = "clientWidth", (s = ct(n)) === b(n) && "static" !== _(s = T(n)).position && "absolute" === c && (i = "scrollHeight", t = "scrollWidth"), o !== k && (o !== P && o !== M || a !== Fe) || (v = A, m = (m - ((e && s === y && y.visualViewport ? y.visualViewport.height : s[i]) - r.height)) * (d ? 1 : -1)), o !== P && (o !== k && o !== A || a !== Fe) || (g = M, p = (p - ((e && s === y && y.visualViewport ? y.visualViewport.width : s[t]) - r.width)) * (d ? 1 : -1))), Object.assign({position: c}, u && vt)),
      e = !0 === h ? (o = (i = {
        x: p,
        y: m
      }).x, i = i.y, a = window.devicePixelRatio || 1, {
        x: tt(o * a) / a || 0,
        y: tt(i * a) / a || 0
      }) : {x: p, y: m};
    return p = e.x, m = e.y, d ? Object.assign({}, n, ((s = {})[v] = l ? "0" : "", s[g] = f ? "0" : "", s.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", s)) : Object.assign({}, n, ((t = {})[v] = l ? m + "px" : "", t[g] = f ? p + "px" : "", t.transform = "", t))
  }

  var bt = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (e) {
      var t = e.state, e = e.options,
        i = void 0 === (i = e.gpuAcceleration) || i,
        s = void 0 === (s = e.adaptive) || s,
        e = void 0 === (e = e.roundOffsets) || e, i = {
          placement: L(t.placement),
          variation: gt(t.placement),
          popper: t.elements.popper,
          popperRect: t.rects.popper,
          gpuAcceleration: i,
          isFixed: "fixed" === t.options.strategy
        };
      null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, yt(Object.assign({}, i, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: s,
        roundOffsets: e
      })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, yt(Object.assign({}, i, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: e
      })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {"data-popper-placement": t.placement})
    },
    data: {}
  }, wt = {passive: !0};
  var xt = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {
    },
    effect: function (e) {
      var t = e.state, i = e.instance, s = (e = e.options).scroll,
        n = void 0 === s || s, r = void 0 === (s = e.resize) || s,
        o = b(t.elements.popper),
        a = [].concat(t.scrollParents.reference, t.scrollParents.popper);
      return n && a.forEach(function (e) {
        e.addEventListener("scroll", i.update, wt)
      }), r && o.addEventListener("resize", i.update, wt), function () {
        n && a.forEach(function (e) {
          e.removeEventListener("scroll", i.update, wt)
        }), r && o.removeEventListener("resize", i.update, wt)
      }
    },
    data: {}
  }, _t = {left: "right", right: "left", bottom: "top", top: "bottom"};

  function Tt(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return _t[e]
    })
  }

  var Et = {start: "end", end: "start"};

  function St(e) {
    return e.replace(/start|end/g, function (e) {
      return Et[e]
    })
  }

  function Ct(e) {
    e = b(e);
    return {scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset}
  }

  function kt(e) {
    return nt(T(e)).left + Ct(e).scrollLeft
  }

  function At(e) {
    var e = _(e), t = e.overflow, i = e.overflowX, e = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(t + e + i)
  }

  function Mt(e, t) {
    void 0 === t && (t = []);
    var i = function e(t) {
        return 0 <= ["html", "body", "#document"].indexOf(v(t)) ? t.ownerDocument.body : x(t) && At(t) ? t : e(at(t))
      }(e), e = i === (null == (e = e.ownerDocument) ? void 0 : e.body), s = b(i),
      s = e ? [s].concat(s.visualViewport || [], At(i) ? i : []) : i,
      i = t.concat(s);
    return e ? i : i.concat(Mt(at(s)))
  }

  function Pt(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    })
  }

  function It(e, t, i) {
    return t === qe ? Pt((n = i, o = b(s = e), a = T(s), o = o.visualViewport, l = a.clientWidth, a = a.clientHeight, d = c = 0, o && (l = o.width, a = o.height, ((r = st()) || !r && "fixed" === n) && (c = o.offsetLeft, d = o.offsetTop)), {
      width: l,
      height: a,
      x: c + kt(s),
      y: d
    })) : w(t) ? ((n = nt(r = t, !1, "fixed" === (n = i))).top = n.top + r.clientTop, n.left = n.left + r.clientLeft, n.bottom = n.top + r.clientHeight, n.right = n.left + r.clientWidth, n.width = r.clientWidth, n.height = r.clientHeight, n.x = n.left, n.y = n.top, n) : Pt((o = T(e), l = T(o), a = Ct(o), c = null == (c = o.ownerDocument) ? void 0 : c.body, s = C(l.scrollWidth, l.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0), d = C(l.scrollHeight, l.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0), o = -a.scrollLeft + kt(o), a = -a.scrollTop, "rtl" === _(c || l).direction && (o += C(l.clientWidth, c ? c.clientWidth : 0) - s), {
      width: s,
      height: d,
      x: o,
      y: a
    }));
    var s, n, r, o, a, l, c, d
  }

  function Lt(i, e, t, s) {
    var n,
      r = "clippingParents" === e ? (o = Mt(at(r = i)), w(n = 0 <= ["absolute", "fixed"].indexOf(_(r).position) && x(r) ? ct(r) : r) ? o.filter(function (e) {
        return w(e) && ot(e, n) && "body" !== v(e)
      }) : []) : [].concat(e), o = [].concat(r, [t]), e = o[0],
      t = o.reduce(function (e, t) {
        t = It(i, t, s);
        return e.top = C(t.top, e.top), e.right = et(t.right, e.right), e.bottom = et(t.bottom, e.bottom), e.left = C(t.left, e.left), e
      }, It(i, e, s));
    return t.width = t.right - t.left, t.height = t.bottom - t.top, t.x = t.left, t.y = t.top, t
  }

  function Ot(e) {
    var t, i = e.reference, s = e.element, e = e.placement, n = e ? L(e) : null,
      e = e ? gt(e) : null, r = i.x + i.width / 2 - s.width / 2,
      o = i.y + i.height / 2 - s.height / 2;
    switch (n) {
      case k:
        t = {x: r, y: i.y - s.height};
        break;
      case A:
        t = {x: r, y: i.y + i.height};
        break;
      case M:
        t = {x: i.x + i.width, y: o};
        break;
      case P:
        t = {x: i.x - s.width, y: o};
        break;
      default:
        t = {x: i.x, y: i.y}
    }
    var a = n ? dt(n) : null;
    if (null != a) {
      var l = "y" === a ? "height" : "width";
      switch (e) {
        case I:
          t[a] = t[a] - (i[l] / 2 - s[l] / 2);
          break;
        case Fe:
          t[a] = t[a] + (i[l] / 2 - s[l] / 2)
      }
    }
    return t
  }

  function $t(e, t) {
    var s, t = t = void 0 === t ? {} : t, i = t.placement,
      i = void 0 === i ? e.placement : i, n = t.strategy,
      n = void 0 === n ? e.strategy : n, r = t.boundary,
      r = void 0 === r ? He : r, o = t.rootBoundary, o = void 0 === o ? qe : o,
      a = t.elementContext, a = void 0 === a ? Be : a, l = t.altBoundary,
      l = void 0 !== l && l, t = t.padding, t = void 0 === t ? 0 : t,
      t = pt("number" != typeof t ? t : mt(t, Ne)), c = e.rects.popper,
      l = e.elements[l ? a === Be ? Re : Be : a],
      l = Lt(w(l) ? l : l.contextElement || T(e.elements.popper), r, o, n),
      r = nt(e.elements.reference),
      o = Ot({reference: r, element: c, strategy: "absolute", placement: i}),
      n = Pt(Object.assign({}, c, o)), c = a === Be ? n : r, d = {
        top: l.top - c.top + t.top,
        bottom: c.bottom - l.bottom + t.bottom,
        left: l.left - c.left + t.left,
        right: c.right - l.right + t.right
      }, o = e.modifiersData.offset;
    return a === Be && o && (s = o[i], Object.keys(d).forEach(function (e) {
      var t = 0 <= [M, A].indexOf(e) ? 1 : -1,
        i = 0 <= [k, A].indexOf(e) ? "y" : "x";
      d[e] += s[i] * t
    })), d
  }

  var zt = {
    name: "flip", enabled: !0, phase: "main", fn: function (e) {
      var u = e.state, t = e.options, e = e.name;
      if (!u.modifiersData[e]._skip) {
        for (var i = t.mainAxis, s = void 0 === i || i, i = t.altAxis, n = void 0 === i || i, i = t.fallbackPlacements, h = t.padding, p = t.boundary, m = t.rootBoundary, r = t.altBoundary, o = t.flipVariations, f = void 0 === o || o, g = t.allowedAutoPlacements, o = u.options.placement, t = L(o), i = i || (t === o || !f ? [Tt(o)] : function (e) {
          if (L(e) === je) {
            return [];
          }
          var t = Tt(e);
          return [St(e), t, St(t)]
        }(o)), a = [o].concat(i).reduce(function (e, t) {
          return e.concat(L(t) === je ? (i = u, s = (e = e = void 0 === (e = {
            placement: t,
            boundary: p,
            rootBoundary: m,
            padding: h,
            flipVariations: f,
            allowedAutoPlacements: g
          }) ? {} : e).placement, n = e.boundary, r = e.rootBoundary, o = e.padding, a = e.flipVariations, l = void 0 === (e = e.allowedAutoPlacements) ? Ye : e, c = gt(s), e = c ? a ? We : We.filter(function (e) {
            return gt(e) === c
          }) : Ne, d = (s = 0 === (s = e.filter(function (e) {
            return 0 <= l.indexOf(e)
          })).length ? e : s).reduce(function (e, t) {
            return e[t] = $t(i, {
              placement: t,
              boundary: n,
              rootBoundary: r,
              padding: o
            })[L(t)], e
          }, {}), Object.keys(d).sort(function (e, t) {
            return d[e] - d[t]
          })) : t);
          var i, s, n, r, o, a, l, c, d
        }, []), l = u.rects.reference, c = u.rects.popper, d = new Map, v = !0, y = a[0], b = 0; b < a.length; b++) {
          var w = a[b], x = L(w), _ = gt(w) === I, T = 0 <= [k, A].indexOf(x),
            E = T ? "width" : "height", S = $t(u, {
              placement: w,
              boundary: p,
              rootBoundary: m,
              altBoundary: r,
              padding: h
            }), T = T ? _ ? M : P : _ ? A : k,
            _ = (l[E] > c[E] && (T = Tt(T)), Tt(T)), E = [];
          if (s && E.push(S[x] <= 0), n && E.push(S[T] <= 0, S[_] <= 0), E.every(function (e) {
            return e
          })) {
            y = w, v = !1;
            break
          }
          d.set(w, E)
        }
        if (v) {
          for (var C = f ? 3 : 1; 0 < C; C--) {
            if ("break" === function (t) {
              var e = a.find(function (e) {
                e = d.get(e);
                if (e) {
                  return e.slice(0, t).every(function (e) {
                    return e
                  })
                }
              });
              if (e) {
                return y = e, "break"
              }
            }(C)) {
              break;
            }
          }
        }
        u.placement !== y && (u.modifiersData[e]._skip = !0, u.placement = y, u.reset = !0)
      }
    }, requiresIfExists: ["offset"], data: {_skip: !1}
  };

  function Dt(e, t, i) {
    return {
      top: e.top - t.height - (i = void 0 === i ? {x: 0, y: 0} : i).y,
      right: e.right - t.width + i.x,
      bottom: e.bottom - t.height + i.y,
      left: e.left - t.width - i.x
    }
  }

  function jt(t) {
    return [k, M, A, P].some(function (e) {
      return 0 <= t[e]
    })
  }

  var Nt = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function (e) {
      var t = e.state, e = e.name, i = t.rects.reference, s = t.rects.popper,
        n = t.modifiersData.preventOverflow,
        r = $t(t, {elementContext: "reference"}), o = $t(t, {altBoundary: !0}),
        r = Dt(r, i), i = Dt(o, s, n), o = jt(r), s = jt(i);
      t.modifiersData[e] = {
        referenceClippingOffsets: r,
        popperEscapeOffsets: i,
        isReferenceHidden: o,
        hasPopperEscaped: s
      }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": o,
        "data-popper-escaped": s
      })
    }
  };
  var Ft = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (e) {
      var o = e.state, t = e.options, e = e.name,
        a = void 0 === (t = t.offset) ? [0, 0] : t,
        t = Ye.reduce(function (e, t) {
          var i, s, n, r;
          return e[t] = (t = t, i = o.rects, s = a, n = L(t), r = 0 <= [P, k].indexOf(n) ? -1 : 1, t = (i = "function" == typeof s ? s(Object.assign({}, i, {placement: t})) : s)[0] || 0, s = (i[1] || 0) * r, 0 <= [P, M].indexOf(n) ? {
            x: s,
            y: t
          } : {x: t, y: s}), e
        }, {}), i = (s = t[o.placement]).x, s = s.y;
      null != o.modifiersData.popperOffsets && (o.modifiersData.popperOffsets.x += i, o.modifiersData.popperOffsets.y += s), o.modifiersData[e] = t
    }
  };
  var Ht = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function (e) {
      var t = e.state, e = e.name;
      t.modifiersData[e] = Ot({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
      })
    },
    data: {}
  };
  var qt = {
    name: "preventOverflow", enabled: !0, phase: "main", fn: function (e) {
      var t, i, s, n, r, o, a, l, c, d = e.state, u = e.options, e = e.name,
        h = void 0 === (h = u.mainAxis) || h,
        p = void 0 !== (p = u.altAxis) && p, m = u.boundary, f = u.rootBoundary,
        g = u.altBoundary, v = u.padding, y = void 0 === (y = u.tether) || y,
        u = void 0 === (u = u.tetherOffset) ? 0 : u,
        m = $t(d, {boundary: m, rootBoundary: f, padding: v, altBoundary: g}),
        f = L(d.placement), g = !(v = gt(d.placement)), b = dt(f),
        w = "x" === b ? "y" : "x", x = d.modifiersData.popperOffsets,
        _ = d.rects.reference, T = d.rects.popper,
        u = "number" == typeof (u = "function" == typeof u ? u(Object.assign({}, d.rects, {placement: d.placement})) : u) ? {
          mainAxis: u,
          altAxis: u
        } : Object.assign({mainAxis: 0, altAxis: 0}, u),
        E = d.modifiersData.offset ? d.modifiersData.offset[d.placement] : null,
        S = {x: 0, y: 0};
      x && (h && (h = "y" === b ? "height" : "width", o = (a = x[b]) + m[i = "y" === b ? k : P], l = a - m[c = "y" === b ? A : M], t = y ? -T[h] / 2 : 0, n = (v === I ? _ : T)[h], v = v === I ? -T[h] : -_[h], r = d.elements.arrow, r = y && r ? rt(r) : {
        width: 0,
        height: 0
      }, i = (s = d.modifiersData["arrow#persistent"] ? d.modifiersData["arrow#persistent"].padding : ht())[i], s = s[c], c = ut(0, _[h], r[h]), r = g ? _[h] / 2 - t - c - i - u.mainAxis : n - c - i - u.mainAxis, n = g ? -_[h] / 2 + t + c + s + u.mainAxis : v + c + s + u.mainAxis, g = (i = d.elements.arrow && ct(d.elements.arrow)) ? "y" === b ? i.clientTop || 0 : i.clientLeft || 0 : 0, v = a + n - (t = null != (h = null == E ? void 0 : E[b]) ? h : 0), c = ut(y ? et(o, a + r - t - g) : o, a, y ? C(l, v) : l), x[b] = c, S[b] = c - a), p && (s = "y" == w ? "height" : "width", n = (i = x[w]) + m["x" === b ? k : P], h = i - m["x" === b ? A : M], r = -1 !== [k, P].indexOf(f), g = null != (t = null == E ? void 0 : E[w]) ? t : 0, o = r ? n : i - _[s] - T[s] - g + u.altAxis, v = r ? i + _[s] + T[s] - g - u.altAxis : h, a = y && r ? (l = ut(l = o, i, c = v), c < l ? c : l) : ut(y ? o : n, i, y ? v : h), x[w] = a, S[w] = a - i), d.modifiersData[e] = S)
    }, requiresIfExists: ["offset"]
  };

  function Bt(e, t, i) {
    void 0 === i && (i = !1);
    var s = x(t),
      n = x(t) && (o = (n = t).getBoundingClientRect(), r = tt(o.width) / n.offsetWidth || 1, o = tt(o.height) / n.offsetHeight || 1, 1 !== r || 1 !== o),
      r = T(t), o = nt(e, n, i), e = {scrollLeft: 0, scrollTop: 0},
      a = {x: 0, y: 0};
    return !s && i || ("body" === v(t) && !At(r) || (e = (s = t) !== b(s) && x(s) ? {
      scrollLeft: s.scrollLeft,
      scrollTop: s.scrollTop
    } : Ct(s)), x(t) ? ((a = nt(t, !0)).x += t.clientLeft, a.y += t.clientTop) : r && (a.x = kt(r))), {
      x: o.left + e.scrollLeft - a.x,
      y: o.top + e.scrollTop - a.y,
      width: o.width,
      height: o.height
    }
  }

  function Rt(e) {
    var i = new Map, s = new Set, n = [];
    return e.forEach(function (e) {
      i.set(e.name, e)
    }), e.forEach(function (e) {
      s.has(e.name) || !function t(e) {
        s.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
          s.has(e) || (e = i.get(e)) && t(e)
        }), n.push(e)
      }(e)
    }), n
  }

  var Wt = {placement: "bottom", modifiers: [], strategy: "absolute"};

  function Yt() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
      t[i] = arguments[i];
    }
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect)
    })
  }

  function Vt(e) {
    var e = e = void 0 === e ? {} : e, t = e.defaultModifiers,
      u = void 0 === t ? [] : t, t = e.defaultOptions,
      h = void 0 === t ? Wt : t;
    return function (s, n, t) {
      void 0 === t && (t = h);
      var i, r, o = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Wt, h),
        modifiersData: {},
        elements: {reference: s, popper: n},
        attributes: {},
        styles: {}
      }, a = [], l = !1, c = {
        state: o, setOptions: function (e) {
          var i, t, e = "function" == typeof e ? e(o.options) : e,
            e = (d(), o.options = Object.assign({}, h, o.options, e), o.scrollParents = {
              reference: w(s) ? Mt(s) : s.contextElement ? Mt(s.contextElement) : [],
              popper: Mt(n)
            }, e = [].concat(u, o.options.modifiers), t = e.reduce(function (e, t) {
              var i = e[t.name];
              return e[t.name] = i ? Object.assign({}, i, t, {
                options: Object.assign({}, i.options, t.options),
                data: Object.assign({}, i.data, t.data)
              }) : t, e
            }, {}), e = Object.keys(t).map(function (e) {
              return t[e]
            }), i = Rt(e), Ke.reduce(function (e, t) {
              return e.concat(i.filter(function (e) {
                return e.phase === t
              }))
            }, []));
          return o.orderedModifiers = e.filter(function (e) {
            return e.enabled
          }), o.orderedModifiers.forEach(function (e) {
            var t = e.name, i = e.options, e = e.effect;
            "function" == typeof e && (e = e({
              state: o,
              name: t,
              instance: c,
              options: void 0 === i ? {} : i
            }), a.push(e || function () {
            }))
          }), c.update()
        }, forceUpdate: function () {
          if (!l) {
            var e = o.elements, t = e.reference, e = e.popper;
            if (Yt(t, e)) {
              o.rects = {
                reference: Bt(t, ct(e), "fixed" === o.options.strategy),
                popper: rt(e)
              }, o.reset = !1, o.placement = o.options.placement, o.orderedModifiers.forEach(function (e) {
                return o.modifiersData[e.name] = Object.assign({}, e.data)
              });
              for (var i, s, n, r = 0; r < o.orderedModifiers.length; r++) {
                !0 === o.reset ? (o.reset = !1, r = -1) : (i = (n = o.orderedModifiers[r]).fn, s = n.options, n = n.name, "function" == typeof i && (o = i({
                  state: o,
                  options: void 0 === s ? {} : s,
                  name: n,
                  instance: c
                }) || o))
              }
            }
          }
        }, update: (i = function () {
          return new Promise(function (e) {
            c.forceUpdate(), e(o)
          })
        }, function () {
          return r = r || new Promise(function (e) {
            Promise.resolve().then(function () {
              r = void 0, e(i())
            })
          })
        }), destroy: function () {
          d(), l = !0
        }
      };
      return Yt(s, n) && c.setOptions(t).then(function (e) {
        !l && t.onFirstUpdate && t.onFirstUpdate(e)
      }), c;

      function d() {
        a.forEach(function (e) {
          return e()
        }), a = []
      }
    }
  }

  var Xt = Vt({defaultModifiers: [xt, Ht, bt, Je, Ft, zt, qt, ft, Nt]});
  const Gt = Object.freeze(Object.defineProperty({
    __proto__: null,
    popperGenerator: Vt,
    detectOverflow: $t,
    createPopperBase: Vt(),
    createPopper: Xt,
    createPopperLite: Vt({defaultModifiers: [xt, Ht, bt, Je]}),
    top: k,
    bottom: A,
    right: M,
    left: P,
    auto: je,
    basePlacements: Ne,
    start: I,
    end: Fe,
    clippingParents: He,
    viewport: qe,
    popper: Be,
    reference: Re,
    variationPlacements: We,
    placements: Ye,
    beforeRead: p,
    read: "read",
    afterRead: Ve,
    beforeMain: Xe,
    main: "main",
    afterMain: Ge,
    beforeWrite: Ue,
    write: "write",
    afterWrite: Qe,
    modifierPhases: Ke,
    applyStyles: Je,
    arrow: ft,
    computeStyles: bt,
    eventListeners: xt,
    flip: zt,
    hide: Nt,
    offset: Ft,
    popperOffsets: Ht,
    preventOverflow: qt
  }, Symbol.toStringTag, {value: "Module"})), Ut = "dropdown";
  p = ".bs.dropdown", Ve = ".data-api";
  const Qt = "ArrowDown";
  Xe = "click" + p + Ve, Ge = "keydown" + p + Ve;
  const Kt = "show",
    E = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    Zt = (E, ".dropdown-menu"), Jt = l() ? "top-end" : "top-start",
    ei = l() ? "top-start" : "top-end",
    ti = l() ? "bottom-end" : "bottom-start",
    ii = l() ? "bottom-start" : "bottom-end",
    si = l() ? "left-start" : "right-start",
    ni = l() ? "right-start" : "left-start", ri = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle"
    }, oi = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)"
    };

  class S extends t {
    constructor(e, t) {
      super(e, t), this._popper = null, this._parent = this._element.parentNode, this._menu = h.next(this._element, Zt)[0] || h.prev(this._element, Zt)[0] || h.findOne(Zt, this._parent), this._inNavbar = this._detectNavbar()
    }

    static get Default() {
      return ri
    }

    static get DefaultType() {
      return oi
    }

    static get NAME() {
      return Ut
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = S.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) {
            throw new TypeError(`No method named "${t}"`);
          }
          e[t]()
        }
      })
    }

    static clearMenus(e) {
      if (2 !== e.button && ("keyup" !== e.type || "Tab" === e.key)) {
        for (const i of h.find('[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled).show')) {
          const s = S.getInstance(i);
          if (s && !1 !== s._config.autoClose) {
            const n = e.composedPath();
            var t = n.includes(s._menu);
            if (!(n.includes(s._element) || "inside" === s._config.autoClose && !t || "outside" === s._config.autoClose && t || s._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName)))) {
              const r = {relatedTarget: s._element};
              "click" === e.type && (r.clickEvent = e), s._completeHide(r)
            }
          }
        }
      }
    }

    static dataApiKeydownHandler(e) {
      var t = /input|textarea/i.test(e.target.tagName), i = "Escape" === e.key,
        s = ["ArrowUp", Qt].includes(e.key);
      if ((s || i) && (!t || i)) {
        e.preventDefault();
        const n = this.matches(E) ? this : h.prev(this, E)[0] || h.next(this, E)[0] || h.findOne(E, e.delegateTarget.parentNode),
          r = S.getOrCreateInstance(n);
        if (s) {
          return e.stopPropagation(), r.show(), void r._selectMenuItem(e);
        }
        r._isShown() && (e.stopPropagation(), r.hide(), n.focus())
      }
    }

    toggle() {
      return this._isShown() ? this.hide() : this.show()
    }

    show() {
      if (!a(this._element) && !this._isShown()) {
        var e = {relatedTarget: this._element},
          t = y.trigger(this._element, "show.bs.dropdown", e);
        if (!t.defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) {
            for (const i of [].concat(...document.body.children)) {
              y.on(i, "mouseover", B);
            }
          }
          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Kt), this._element.classList.add(Kt), y.trigger(this._element, "shown.bs.dropdown", e)
        }
      }
    }

    hide() {
      var e;
      !a(this._element) && this._isShown() && (e = {relatedTarget: this._element}, this._completeHide(e))
    }

    dispose() {
      this._popper && this._popper.destroy(), super.dispose()
    }

    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
    }

    _completeHide(e) {
      var t = y.trigger(this._element, "hide.bs.dropdown", e);
      if (!t.defaultPrevented) {
        if ("ontouchstart" in document.documentElement) {
          for (const i of [].concat(...document.body.children)) {
            y.off(i, "mouseover", B);
          }
        }
        this._popper && this._popper.destroy(), this._menu.classList.remove(Kt), this._element.classList.remove(Kt), this._element.setAttribute("aria-expanded", "false"), u.removeDataAttribute(this._menu, "popper"), y.trigger(this._element, "hidden.bs.dropdown", e)
      }
    }

    _getConfig(e) {
      if ("object" != typeof (e = super._getConfig(e)).reference || o(e.reference) || "function" == typeof e.reference.getBoundingClientRect) {
        return e;
      }
      throw new TypeError(Ut.toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.')
    }

    _createPopper() {
      if (void 0 === Gt) {
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      }
      let e = this._element;
      "parent" === this._config.reference ? e = this._parent : o(this._config.reference) ? e = n(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
      var t = this._getPopperConfig();
      this._popper = Xt(e, this._menu, t)
    }

    _isShown() {
      return this._menu.classList.contains(Kt)
    }

    _getPlacement() {
      const e = this._parent;
      if (e.classList.contains("dropend")) {
        return si;
      }
      if (e.classList.contains("dropstart")) {
        return ni;
      }
      if (e.classList.contains("dropup-center")) {
        return "top";
      }
      if (e.classList.contains("dropdown-center")) {
        return "bottom";
      }
      var t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return e.classList.contains("dropup") ? t ? ei : Jt : t ? ii : ti
    }

    _detectNavbar() {
      return null !== this._element.closest(".navbar")
    }

    _getOffset() {
      const t = this._config["offset"];
      return "string" == typeof t ? t.split(",").map(e => Number.parseInt(e, 10)) : "function" == typeof t ? e => t(e, this._element) : t
    }

    _getPopperConfig() {
      const e = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {boundary: this._config.boundary}
        }, {name: "offset", options: {offset: this._getOffset()}}]
      };
      return !this._inNavbar && "static" !== this._config.display || (u.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{
        name: "applyStyles",
        enabled: !1
      }]), {...e, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig}
    }

    _selectMenuItem({key: e, target: t}) {
      const i = h.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(e => s(e));
      i.length && X(i, t, e === Qt, !i.includes(t)).focus()
    }
  }

  y.on(document, Ge, E, S.dataApiKeydownHandler), y.on(document, Ge, Zt, S.dataApiKeydownHandler), y.on(document, Xe, S.clearMenus), y.on(document, "keyup.bs.dropdown.data-api", S.clearMenus), y.on(document, Xe, E, function (e) {
    e.preventDefault(), S.getOrCreateInstance(this).toggle()
  }), e(S);
  const ai = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    li = ".sticky-top", ci = "padding-right", di = "margin-right";

  class ui {
    constructor() {
      this._element = document.body
    }

    getWidth() {
      var e = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - e)
    }

    hide() {
      const t = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, ci, e => e + t), this._setElementAttributes(ai, ci, e => e + t), this._setElementAttributes(li, di, e => e - t)
    }

    reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, ci), this._resetElementAttributes(ai, ci), this._resetElementAttributes(li, di)
    }

    isOverflowing() {
      return 0 < this.getWidth()
    }

    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
    }

    _setElementAttributes(e, i, s) {
      const n = this.getWidth();
      this._applyManipulationCallback(e, e => {
        var t;
        e !== this._element && window.innerWidth > e.clientWidth + n || (this._saveInitialAttribute(e, i), t = window.getComputedStyle(e).getPropertyValue(i), e.style.setProperty(i, s(Number.parseFloat(t)) + "px"))
      })
    }

    _saveInitialAttribute(e, t) {
      var i = e.style.getPropertyValue(t);
      i && u.setDataAttribute(e, t, i)
    }

    _resetElementAttributes(e, i) {
      this._applyManipulationCallback(e, e => {
        var t = u.getDataAttribute(e, i);
        null === t ? e.style.removeProperty(i) : (u.removeDataAttribute(e, i), e.style.setProperty(i, t))
      })
    }

    _applyManipulationCallback(e, t) {
      if (o(e)) {
        t(e);
      }
      else {
        for (const i of h.find(e, this._element)) {
          t(i)
        }
      }
    }
  }

  const hi = "backdrop", pi = "mousedown.bs." + hi, mi = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body"
  }, fi = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };

  class gi extends he {
    constructor(e) {
      super(), this._config = this._getConfig(e), this._isAppended = !1, this._element = null
    }

    static get Default() {
      return mi
    }

    static get DefaultType() {
      return fi
    }

    static get NAME() {
      return hi
    }

    show(e) {
      if (this._config.isVisible) {
        this._append();
        const t = this._getElement();
        this._config.isAnimated && R(t), t.classList.add("show"), this._emulateAnimation(() => {
          c(e)
        })
      }
      else {
        c(e)
      }
    }

    hide(e) {
      this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
        this.dispose(), c(e)
      })) : c(e)
    }

    dispose() {
      this._isAppended && (y.off(this._element, pi), this._element.remove(), this._isAppended = !1)
    }

    _getElement() {
      if (!this._element) {
        const e = document.createElement("div");
        e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e
      }
      return this._element
    }

    _configAfterMerge(e) {
      return e.rootElement = n(e.rootElement), e
    }

    _append() {
      var e;
      this._isAppended || (e = this._getElement(), this._config.rootElement.append(e), y.on(e, pi, () => {
        c(this._config.clickCallback)
      }), this._isAppended = !0)
    }

    _emulateAnimation(e) {
      V(e, this._getElement(), this._config.isAnimated)
    }
  }

  const vi = ".bs.focustrap", yi = (vi, vi, "backward"),
    bi = {autofocus: !0, trapElement: null},
    wi = {autofocus: "boolean", trapElement: "element"};

  class xi extends he {
    constructor(e) {
      super(), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null
    }

    static get Default() {
      return bi
    }

    static get DefaultType() {
      return wi
    }

    static get NAME() {
      return "focustrap"
    }

    activate() {
      this._isActive || (this._config.autofocus && this._config.trapElement.focus(), y.off(document, vi), y.on(document, "focusin.bs.focustrap", e => this._handleFocusin(e)), y.on(document, "keydown.tab.bs.focustrap", e => this._handleKeydown(e)), this._isActive = !0)
    }

    deactivate() {
      this._isActive && (this._isActive = !1, y.off(document, vi))
    }

    _handleFocusin(e) {
      const t = this._config["trapElement"];
      if (e.target !== document && e.target !== t && !t.contains(e.target)) {
        const i = h.focusableChildren(t);
        (0 === i.length ? t : this._lastTabNavDirection === yi ? i[i.length - 1] : i[0]).focus()
      }
    }

    _handleKeydown(e) {
      "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? yi : "forward")
    }
  }

  const O = ".bs.modal";
  O, O;
  const _i = "hidden" + O, Ti = "show" + O;
  O, O, O, O, O;
  O;
  const Ei = "modal-open", Si = "modal-static";
  const Ci = {backdrop: !0, focus: !0, keyboard: !0},
    ki = {backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean"};

  class Ai extends t {
    constructor(e, t) {
      super(e, t), this._dialog = h.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new ui, this._addEventListeners()
    }

    static get Default() {
      return Ci
    }

    static get DefaultType() {
      return ki
    }

    static get NAME() {
      return "modal"
    }

    static jQueryInterface(t, i) {
      return this.each(function () {
        const e = Ai.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) {
            throw new TypeError(`No method named "${t}"`);
          }
          e[t](i)
        }
      })
    }

    toggle(e) {
      return this._isShown ? this.hide() : this.show(e)
    }

    show(e) {
      this._isShown || this._isTransitioning || y.trigger(this._element, Ti, {relatedTarget: e}).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Ei), this._adjustDialog(), this._backdrop.show(() => this._showElement(e)))
    }

    hide() {
      !this._isShown || this._isTransitioning || y.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove("show"), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()))
    }

    dispose() {
      for (const e of [window, this._dialog]) {
        y.off(e, O);
      }
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }

    handleUpdate() {
      this._adjustDialog()
    }

    _initializeBackDrop() {
      return new gi({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated()
      })
    }

    _initializeFocusTrap() {
      return new xi({trapElement: this._element})
    }

    _showElement(e) {
      document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
      const t = h.findOne(".modal-body", this._dialog);
      t && (t.scrollTop = 0), R(this._element), this._element.classList.add("show");
      this._queueCallback(() => {
        this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, y.trigger(this._element, "shown.bs.modal", {relatedTarget: e})
      }, this._dialog, this._isAnimated())
    }

    _addEventListeners() {
      y.on(this._element, "keydown.dismiss.bs.modal", e => {
        if ("Escape" === e.key) {
          return this._config.keyboard ? (e.preventDefault(), void this.hide()) : void this._triggerBackdropTransition()
        }
      }), y.on(window, "resize.bs.modal", () => {
        this._isShown && !this._isTransitioning && this._adjustDialog()
      }), y.on(this._element, "mousedown.dismiss.bs.modal", t => {
        y.one(this._element, "click.dismiss.bs.modal", e => {
          this._element === t.target && this._element === e.target && ("static" === this._config.backdrop ? this._triggerBackdropTransition() : this._config.backdrop && this.hide())
        })
      })
    }

    _hideModal() {
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
        document.body.classList.remove(Ei), this._resetAdjustments(), this._scrollBar.reset(), y.trigger(this._element, _i)
      })
    }

    _isAnimated() {
      return this._element.classList.contains("fade")
    }

    _triggerBackdropTransition() {
      var e = y.trigger(this._element, "hidePrevented.bs.modal");
      if (!e.defaultPrevented) {
        e = this._element.scrollHeight > document.documentElement.clientHeight;
        const t = this._element.style.overflowY;
        "hidden" === t || this._element.classList.contains(Si) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(Si), this._queueCallback(() => {
          this._element.classList.remove(Si), this._queueCallback(() => {
            this._element.style.overflowY = t
          }, this._dialog)
        }, this._dialog), this._element.focus())
      }
    }

    _adjustDialog() {
      var e,
        t = this._element.scrollHeight > document.documentElement.clientHeight,
        i = this._scrollBar.getWidth(), s = 0 < i;
      s && !t && (e = l() ? "paddingLeft" : "paddingRight", this._element.style[e] = i + "px"), !s && t && (e = l() ? "paddingRight" : "paddingLeft", this._element.style[e] = i + "px")
    }

    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
    }
  }

  y.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (e) {
    const t = r(this);
    ["A", "AREA"].includes(this.tagName) && e.preventDefault(), y.one(t, Ti, e => {
      e.defaultPrevented || y.one(t, _i, () => {
        s(this) && this.focus()
      })
    });
    e = h.findOne(".modal.show");
    e && Ai.getInstance(e).hide();
    const i = Ai.getOrCreateInstance(t);
    i.toggle(this)
  }), pe(Ai), e(Ai);
  Ue = ".bs.offcanvas";
  const Mi = "showing", Pi = ".offcanvas.show", Ii = "hidePrevented" + Ue,
    Li = "hidden" + Ue;
  const Oi = {backdrop: !0, keyboard: !0, scroll: !1},
    $i = {backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean"};

  class $ extends t {
    constructor(e, t) {
      super(e, t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
    }

    static get Default() {
      return Oi
    }

    static get DefaultType() {
      return $i
    }

    static get NAME() {
      return "offcanvas"
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = $.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) {
            throw new TypeError(`No method named "${t}"`);
          }
          e[t](this)
        }
      })
    }

    toggle(e) {
      return this._isShown ? this.hide() : this.show(e)
    }

    show(e) {
      this._isShown || y.trigger(this._element, "show.bs.offcanvas", {relatedTarget: e}).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new ui).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Mi), this._queueCallback(() => {
        this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add("show"), this._element.classList.remove(Mi), y.trigger(this._element, "shown.bs.offcanvas", {relatedTarget: e})
      }, this._element, !0))
    }

    hide() {
      this._isShown && !y.trigger(this._element, "hide.bs.offcanvas").defaultPrevented && (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add("hiding"), this._backdrop.hide(), this._queueCallback(() => {
        this._element.classList.remove("show", "hiding"), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new ui).reset(), y.trigger(this._element, Li)
      }, this._element, !0))
    }

    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }

    _initializeBackDrop() {
      var e = Boolean(this._config.backdrop);
      return new gi({
        className: "offcanvas-backdrop",
        isVisible: e,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: e ? () => {
          "static" === this._config.backdrop ? y.trigger(this._element, Ii) : this.hide()
        } : null
      })
    }

    _initializeFocusTrap() {
      return new xi({trapElement: this._element})
    }

    _addEventListeners() {
      y.on(this._element, "keydown.dismiss.bs.offcanvas", e => {
        "Escape" === e.key && (this._config.keyboard ? this.hide() : y.trigger(this._element, Ii))
      })
    }
  }

  y.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (e) {
    var t = r(this);
    if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), !a(this)) {
      y.one(t, Li, () => {
        s(this) && this.focus()
      });
      e = h.findOne(Pi);
      e && e !== t && $.getInstance(e).hide();
      const i = $.getOrCreateInstance(t);
      i.toggle(this)
    }
  }), y.on(window, "load.bs.offcanvas.data-api", () => {
    for (const e of h.find(Pi)) {
      $.getOrCreateInstance(e).show()
    }
  }), y.on(window, "resize.bs.offcanvas", () => {
    for (const e of h.find("[aria-modal][class*=show][class*=offcanvas-]")) {
      "fixed" !== getComputedStyle(e).position && $.getOrCreateInstance(e).hide()
    }
  }), pe($), e($);
  const zi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
  const Di = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    ji = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  Qe = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };

  function Ni(e, t, i) {
    if (!e.length) {
      return e;
    }
    if (i && "function" == typeof i) {
      return i(e);
    }
    const s = new window.DOMParser, n = s.parseFromString(e, "text/html");
    for (const l of [].concat(...n.body.querySelectorAll("*"))) {
      var r = l.nodeName.toLowerCase();
      if (Object.keys(t).includes(r)) {
        var o = [].concat(...l.attributes),
          a = [].concat(t["*"] || [], t[r] || []);
        for (const c of o) {
          ((e, t) => {
            const i = e.nodeName.toLowerCase();
            return t.includes(i) ? !zi.has(i) || Boolean(Di.test(e.nodeValue) || ji.test(e.nodeValue)) : t.filter(e => e instanceof RegExp).some(e => e.test(i))
          })(c, a) || l.removeAttribute(c.nodeName)
        }
      }
      else {
        l.remove()
      }
    }
    return n.body.innerHTML
  }

  const Fi = {
    allowList: Qe,
    content: {},
    extraClass: "",
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: "<div></div>"
  }, Hi = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  }, qi = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };

  class Bi extends he {
    constructor(e) {
      super(), this._config = this._getConfig(e)
    }

    static get Default() {
      return Fi
    }

    static get DefaultType() {
      return Hi
    }

    static get NAME() {
      return "TemplateFactory"
    }

    getContent() {
      return Object.values(this._config.content).map(e => this._resolvePossibleFunction(e)).filter(Boolean)
    }

    hasContent() {
      return 0 < this.getContent().length
    }

    changeContent(e) {
      return this._checkContent(e), this._config.content = {...this._config.content, ...e}, this
    }

    toHtml() {
      const e = document.createElement("div");
      e.innerHTML = this._maybeSanitize(this._config.template);
      for (var [t, i] of Object.entries(this._config.content)) {
        this._setContent(e, i, t);
      }
      const s = e.children[0],
        n = this._resolvePossibleFunction(this._config.extraClass);
      return n && s.classList.add(...n.split(" ")), s
    }

    _typeCheckConfig(e) {
      super._typeCheckConfig(e), this._checkContent(e.content)
    }

    _checkContent(e) {
      for (var [t, i] of Object.entries(e)) {
        super._typeCheckConfig({
          selector: t,
          entry: i
        }, qi)
      }
    }

    _setContent(e, t, i) {
      const s = h.findOne(i, e);
      s && ((t = this._resolvePossibleFunction(t)) ? o(t) ? this._putElementInTemplate(n(t), s) : this._config.html ? s.innerHTML = this._maybeSanitize(t) : s.textContent = t : s.remove())
    }

    _maybeSanitize(e) {
      return this._config.sanitize ? Ni(e, this._config.allowList, this._config.sanitizeFn) : e
    }

    _resolvePossibleFunction(e) {
      return "function" == typeof e ? e(this) : e
    }

    _putElementInTemplate(e, t) {
      if (this._config.html) {
        return t.innerHTML = "", void t.append(e);
      }
      t.textContent = e.textContent
    }
  }

  const Ri = new Set(["sanitize", "allowList", "sanitizeFn"]), Wi = "fade";
  const Yi = "show", Vi = "hide.bs.modal", Xi = "hover", Gi = "focus", Ui = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: l() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: l() ? "right" : "left"
  }, Qi = {
    allowList: Qe,
    animation: !0,
    boundary: "clippingParents",
    container: !1,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: !1,
    offset: [0, 0],
    placement: "top",
    popperConfig: null,
    sanitize: !0,
    sanitizeFn: null,
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
  }, Ki = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
  };

  class Zi extends t {
    constructor(e, t) {
      if (void 0 === Gt) {
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      }
      super(e, t), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
    }

    static get Default() {
      return Qi
    }

    static get DefaultType() {
      return Ki
    }

    static get NAME() {
      return "tooltip"
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = Zi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) {
            throw new TypeError(`No method named "${t}"`);
          }
          e[t]()
        }
      })
    }

    enable() {
      this._isEnabled = !0
    }

    disable() {
      this._isEnabled = !1
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled
    }

    toggle() {
      this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter())
    }

    dispose() {
      clearTimeout(this._timeout), y.off(this._element.closest(".modal"), Vi, this._hideModalHandler), this.tip && this.tip.remove(), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
    }

    show() {
      if ("none" === this._element.style.display) {
        throw new Error("Please use show on visible elements");
      }
      if (this._isWithContent() && this._isEnabled) {
        var e = y.trigger(this._element, this.constructor.eventName("show"));
        const i = q(this._element);
        var t = (i || this._element.ownerDocument.documentElement).contains(this._element);
        if (!e.defaultPrevented && t) {
          this.tip && (this.tip.remove(), this.tip = null);
          const s = this._getTipElement(),
            n = (this._element.setAttribute("aria-describedby", s.getAttribute("id")), this._config)["container"];
          if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(s), y.trigger(this._element, this.constructor.eventName("inserted"))), this._popper ? this._popper.update() : this._popper = this._createPopper(s), s.classList.add(Yi), "ontouchstart" in document.documentElement) {
            for (const r of [].concat(...document.body.children)) {
              y.on(r, "mouseover", B);
            }
          }
          this._queueCallback(() => {
            y.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1
          }, this.tip, this._isAnimated())
        }
      }
    }

    hide() {
      if (this._isShown()) {
        var e = y.trigger(this._element, this.constructor.eventName("hide"));
        if (!e.defaultPrevented) {
          const t = this._getTipElement();
          if (t.classList.remove(Yi), "ontouchstart" in document.documentElement) {
            for (const i of [].concat(...document.body.children)) {
              y.off(i, "mouseover", B);
            }
          }
          this._activeTrigger.click = !1, this._activeTrigger[Gi] = !1, this._activeTrigger[Xi] = !1, this._isHovered = null;
          this._queueCallback(() => {
            this._isWithActiveTrigger() || (this._isHovered || t.remove(), this._element.removeAttribute("aria-describedby"), y.trigger(this._element, this.constructor.eventName("hidden")), this._disposePopper())
          }, this.tip, this._isAnimated())
        }
      }
    }

    update() {
      this._popper && this._popper.update()
    }

    _isWithContent() {
      return Boolean(this._getTitle())
    }

    _getTipElement() {
      return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
    }

    _createTipElement(e) {
      const t = this._getTemplateFactory(e).toHtml();
      if (!t) {
        return null;
      }
      t.classList.remove(Wi, Yi), t.classList.add(`bs-${this.constructor.NAME}-auto`);
      e = (e => {
        for (; e += Math.floor(1e6 * Math.random()), document.getElementById(e);) {
          ;
        }
        return e
      })(this.constructor.NAME).toString();
      return t.setAttribute("id", e), this._isAnimated() && t.classList.add(Wi), t
    }

    setContent(e) {
      this._newContent = e, this._isShown() && (this._disposePopper(), this.show())
    }

    _getTemplateFactory(e) {
      return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new Bi({
        ...this._config,
        content: e,
        extraClass: this._resolvePossibleFunction(this._config.customClass)
      }), this._templateFactory
    }

    _getContentForTemplate() {
      return {".tooltip-inner": this._getTitle()}
    }

    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
    }

    _initializeOnDelegatedTarget(e) {
      return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
    }

    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(Wi)
    }

    _isShown() {
      return this.tip && this.tip.classList.contains(Yi)
    }

    _createPopper(e) {
      const t = "function" == typeof this._config.placement ? this._config.placement.call(this, e, this._element) : this._config.placement;
      var i = Ui[t.toUpperCase()];
      return Xt(this._element, e, this._getPopperConfig(i))
    }

    _getOffset() {
      const t = this._config["offset"];
      return "string" == typeof t ? t.split(",").map(e => Number.parseInt(e, 10)) : "function" == typeof t ? e => t(e, this._element) : t
    }

    _resolvePossibleFunction(e) {
      return "function" == typeof e ? e.call(this._element) : e
    }

    _getPopperConfig(e) {
      e = {
        placement: e,
        modifiers: [{
          name: "flip",
          options: {fallbackPlacements: this._config.fallbackPlacements}
        }, {
          name: "offset",
          options: {offset: this._getOffset()}
        }, {
          name: "preventOverflow",
          options: {boundary: this._config.boundary}
        }, {
          name: "arrow",
          options: {element: `.${this.constructor.NAME}-arrow`}
        }, {
          name: "preSetPlacement",
          enabled: !0,
          phase: "beforeMain",
          fn: e => {
            this._getTipElement().setAttribute("data-popper-placement", e.state.placement)
          }
        }]
      };
      return {...e, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig}
    }

    _setListeners() {
      var e, t;
      for (const i of this._config.trigger.split(" ")) {
        "click" === i ? y.on(this._element, this.constructor.eventName("click"), this._config.selector, e => {
          const t = this._initializeOnDelegatedTarget(e);
          t.toggle()
        }) : "manual" !== i && (e = i === Xi ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), t = i === Xi ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout"), y.on(this._element, e, this._config.selector, e => {
          const t = this._initializeOnDelegatedTarget(e);
          t._activeTrigger["focusin" === e.type ? Gi : Xi] = !0, t._enter()
        }), y.on(this._element, t, this._config.selector, e => {
          const t = this._initializeOnDelegatedTarget(e);
          t._activeTrigger["focusout" === e.type ? Gi : Xi] = t._element.contains(e.relatedTarget), t._leave()
        }));
      }
      this._hideModalHandler = () => {
        this._element && this.hide()
      }, y.on(this._element.closest(".modal"), Vi, this._hideModalHandler)
    }

    _fixTitle() {
      var e = this._element.getAttribute("title");
      e && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e), this._element.setAttribute("data-bs-original-title", e), this._element.removeAttribute("title"))
    }

    _enter() {
      this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(() => {
        this._isHovered && this.show()
      }, this._config.delay.show))
    }

    _leave() {
      this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
        this._isHovered || this.hide()
      }, this._config.delay.hide))
    }

    _setTimeout(e, t) {
      clearTimeout(this._timeout), this._timeout = setTimeout(e, t)
    }

    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0)
    }

    _getConfig(e) {
      const t = u.getDataAttributes(this._element);
      for (const i of Object.keys(t)) {
        Ri.has(i) && delete t[i];
      }
      return e = {...t, ..."object" == typeof e && e ? e : {}}, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
    }

    _configAfterMerge(e) {
      return e.container = !1 === e.container ? document.body : n(e.container), "number" == typeof e.delay && (e.delay = {
        show: e.delay,
        hide: e.delay
      }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), e
    }

    _getDelegateConfig() {
      const e = {};
      for (const t in this._config) {
        this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
      }
      return e.selector = !1, e.trigger = "manual", e
    }

    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null)
    }
  }

  e(Zi);
  const Ji = {
    ...Zi.Default,
    content: "",
    offset: [0, 8],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
  }, es = {...Zi.DefaultType, content: "(null|string|element|function)"};

  class ts extends Zi {
    static get Default() {
      return Ji
    }

    static get DefaultType() {
      return es
    }

    static get NAME() {
      return "popover"
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = ts.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) {
            throw new TypeError(`No method named "${t}"`);
          }
          e[t]()
        }
      })
    }

    _isWithContent() {
      return this._getTitle() || this._getContent()
    }

    _getContentForTemplate() {
      return {
        ".popover-header": this._getTitle(),
        ".popover-body": this._getContent()
      }
    }

    _getContent() {
      return this._resolvePossibleFunction(this._config.content)
    }
  }

  e(ts);
  Je = ".bs.scrollspy";
  const is = "click" + Je;
  const ss = "active", ns = "[href]";
  const rs = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: !1,
    target: null,
    threshold: [.1, .5, 1]
  }, os = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };

  class as extends t {
    constructor(e, t) {
      super(e, t), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      }, this.refresh()
    }

    static get Default() {
      return rs
    }

    static get DefaultType() {
      return os
    }

    static get NAME() {
      return "scrollspy"
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = as.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) {
            throw new TypeError(`No method named "${t}"`);
          }
          e[t]()
        }
      })
    }

    refresh() {
      this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
      for (const e of this._observableSections.values()) {
        this._observer.observe(e)
      }
    }

    dispose() {
      this._observer.disconnect(), super.dispose()
    }

    _configAfterMerge(e) {
      return e.target = n(e.target) || document.body, e.rootMargin = e.offset ? e.offset + "px 0px -30%" : e.rootMargin, "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map(e => Number.parseFloat(e))), e
    }

    _maybeEnableSmoothScroll() {
      this._config.smoothScroll && (y.off(this._config.target, is), y.on(this._config.target, is, ns, e => {
        var t = this._observableSections.get(e.target.hash);
        if (t) {
          e.preventDefault();
          const i = this._rootElement || window;
          e = t.offsetTop - this._element.offsetTop;
          i.scrollTo ? i.scrollTo({
            top: e,
            behavior: "smooth"
          }) : i.scrollTop = e
        }
      }))
    }

    _getNewObserver() {
      var e = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver(e => this._observerCallback(e), e)
    }

    _observerCallback(e) {
      const t = e => this._targetLinks.get("#" + e.target.id);
      var i = e => {
          this._previousScrollData.visibleEntryTop = e.target.offsetTop, this._process(t(e))
        }, s = (this._rootElement || document.documentElement).scrollTop,
        n = s >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = s;
      for (const o of e) {
        if (o.isIntersecting) {
          var r = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (n && r) {
            if (i(o), s) {
              continue;
            }
            return
          }
          n || r || i(o)
        }
        else {
          this._activeTarget = null, this._clearActiveClass(t(o))
        }
      }
    }

    _initializeTargetsAndObservables() {
      var e;
      this._targetLinks = new Map, this._observableSections = new Map;
      for (const t of h.find(ns, this._config.target)) {
        t.hash && !a(t) && (e = h.findOne(t.hash, this._element), s(e) && (this._targetLinks.set(t.hash, t), this._observableSections.set(t.hash, e)))
      }
    }

    _process(e) {
      this._activeTarget !== e && (this._clearActiveClass(this._config.target), (this._activeTarget = e).classList.add(ss), this._activateParents(e), y.trigger(this._element, "activate.bs.scrollspy", {relatedTarget: e}))
    }

    _activateParents(e) {
      if (e.classList.contains("dropdown-item")) {
        h.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(ss);
      }
      else {
        for (const t of h.parents(e, ".nav, .list-group")) {
          for (const i of h.prev(t, ".nav-link, .nav-item > .nav-link, .list-group-item")) {
            i.classList.add(ss)
          }
        }
      }
    }

    _clearActiveClass(e) {
      e.classList.remove(ss);
      for (const t of h.find(ns + "." + ss, e)) {
        t.classList.remove(ss)
      }
    }
  }

  y.on(window, "load.bs.scrollspy.data-api", () => {
    for (const e of h.find('[data-bs-spy="scroll"]')) {
      as.getOrCreateInstance(e)
    }
  }), e(as);
  const ls = "ArrowRight", cs = "ArrowDown", z = "active", ds = "show";
  ft = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  const us = '.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ' + ft;
  z, z, z;

  class hs extends t {
    constructor(e) {
      super(e), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), y.on(this._element, "keydown.bs.tab", e => this._keydown(e)))
    }

    static get NAME() {
      return "tab"
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = hs.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) {
            throw new TypeError(`No method named "${t}"`);
          }
          e[t]()
        }
      })
    }

    show() {
      var e, t, i = this._element;
      this._elemIsActive(i) || (t = (e = this._getActiveElem()) ? y.trigger(e, "hide.bs.tab", {relatedTarget: i}) : null, y.trigger(i, "show.bs.tab", {relatedTarget: e}).defaultPrevented || t && t.defaultPrevented || (this._deactivate(e, i), this._activate(i, e)))
    }

    _activate(e, t) {
      e && (e.classList.add(z), this._activate(r(e)), this._queueCallback(() => {
        "tab" !== e.getAttribute("role") ? e.classList.add(ds) : (e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), y.trigger(e, "shown.bs.tab", {relatedTarget: t}))
      }, e, e.classList.contains("fade")))
    }

    _deactivate(e, t) {
      e && (e.classList.remove(z), e.blur(), this._deactivate(r(e)), this._queueCallback(() => {
        "tab" !== e.getAttribute("role") ? e.classList.remove(ds) : (e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), y.trigger(e, "hidden.bs.tab", {relatedTarget: t}))
      }, e, e.classList.contains("fade")))
    }

    _keydown(e) {
      if (["ArrowLeft", ls, "ArrowUp", cs].includes(e.key)) {
        e.stopPropagation(), e.preventDefault();
        var t = [ls, cs].includes(e.key);
        const i = X(this._getChildren().filter(e => !a(e)), e.target, t, !0);
        i && (i.focus({preventScroll: !0}), hs.getOrCreateInstance(i).show())
      }
    }

    _getChildren() {
      return h.find(us, this._parent)
    }

    _getActiveElem() {
      return this._getChildren().find(e => this._elemIsActive(e)) || null
    }

    _setInitialAttributes(e, t) {
      this._setAttributeIfNotExists(e, "role", "tablist");
      for (const i of t) {
        this._setInitialAttributesOnChild(i)
      }
    }

    _setInitialAttributesOnChild(e) {
      e = this._getInnerElement(e);
      var t = this._elemIsActive(e), i = this._getOuterElement(e);
      e.setAttribute("aria-selected", t), i !== e && this._setAttributeIfNotExists(i, "role", "presentation"), t || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e)
    }

    _setInitialAttributesOnTargetPanel(e) {
      var t = r(e);
      t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", "#" + e.id))
    }

    _toggleDropDown(e, s) {
      const n = this._getOuterElement(e);
      n.classList.contains("dropdown") && ((e = (e, t) => {
        const i = h.findOne(e, n);
        i && i.classList.toggle(t, s)
      })(".dropdown-toggle", z), e(".dropdown-menu", ds), n.setAttribute("aria-expanded", s))
    }

    _setAttributeIfNotExists(e, t, i) {
      e.hasAttribute(t) || e.setAttribute(t, i)
    }

    _elemIsActive(e) {
      return e.classList.contains(z)
    }

    _getInnerElement(e) {
      return e.matches(us) ? e : h.findOne(us, e)
    }

    _getOuterElement(e) {
      return e.closest(".nav-item, .list-group-item") || e
    }
  }

  y.on(document, "click.bs.tab", ft, function (e) {
    ["A", "AREA"].includes(this.tagName) && e.preventDefault(), a(this) || hs.getOrCreateInstance(this).show()
  }), y.on(window, "load.bs.tab", () => {
    for (const e of h.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) {
      hs.getOrCreateInstance(e)
    }
  }), e(hs);
  const ps = "show", ms = "showing",
    fs = {animation: "boolean", autohide: "boolean", delay: "number"},
    gs = {animation: !0, autohide: !0, delay: 5e3};

  class vs extends t {
    constructor(e, t) {
      super(e, t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
    }

    static get Default() {
      return gs
    }

    static get DefaultType() {
      return fs
    }

    static get NAME() {
      return "toast"
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = vs.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) {
            throw new TypeError(`No method named "${t}"`);
          }
          e[t](this)
        }
      })
    }

    show() {
      y.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), R(this._element), this._element.classList.add(ps, ms), this._queueCallback(() => {
        this._element.classList.remove(ms), y.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
      }, this._element, this._config.animation))
    }

    hide() {
      this.isShown() && !y.trigger(this._element, "hide.bs.toast").defaultPrevented && (this._element.classList.add(ms), this._queueCallback(() => {
        this._element.classList.add("hide"), this._element.classList.remove(ms, ps), y.trigger(this._element, "hidden.bs.toast")
      }, this._element, this._config.animation))
    }

    dispose() {
      this._clearTimeout(), this.isShown() && this._element.classList.remove(ps), super.dispose()
    }

    isShown() {
      return this._element.classList.contains(ps)
    }

    _maybeScheduleHide() {
      !this._config.autohide || this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
        this.hide()
      }, this._config.delay))
    }

    _onInteraction(e, t) {
      switch (e.type) {
        case"mouseover":
        case"mouseout":
          this._hasMouseInteraction = t;
          break;
        case"focusin":
        case"focusout":
          this._hasKeyboardInteraction = t
      }
      t ? this._clearTimeout() : (e = e.relatedTarget, this._element === e || this._element.contains(e) || this._maybeScheduleHide())
    }

    _setListeners() {
      y.on(this._element, "mouseover.bs.toast", e => this._onInteraction(e, !0)), y.on(this._element, "mouseout.bs.toast", e => this._onInteraction(e, !1)), y.on(this._element, "focusin.bs.toast", e => this._onInteraction(e, !0)), y.on(this._element, "focusout.bs.toast", e => this._onInteraction(e, !1))
    }

    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null
    }
  }

  return pe(vs), e(vs), {
    Alert: me,
    Button: ge,
    Carousel: Pe,
    Collapse: De,
    Dropdown: S,
    Modal: Ai,
    Offcanvas: $,
    Popover: ts,
    ScrollSpy: as,
    Tab: hs,
    Toast: vs,
    Tooltip: Zi
  }
}), function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ClipboardJS = t() : e.ClipboardJS = t()
}(this, function () {
  return i = {
    686: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return s
        }
      });
      var t = i(279), o = i.n(t), t = i(370), a = i.n(t), t = i(817),
        l = i.n(t);

      function c(e) {
        try {
          document.execCommand(e)
        }
        catch (e) {
          return
        }
      }

      function d(e) {
        return e = l()(e), c("cut"), e
      }

      function u(e) {
        var t, i, s,
          n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {container: document.body},
          r = "";
        return "string" == typeof e ? (t = e, i = "rtl" === document.documentElement.getAttribute("dir"), (s = document.createElement("textarea")).style.fontSize = "12pt", s.style.border = "0", s.style.padding = "0", s.style.margin = "0", s.style.position = "absolute", s.style[i ? "right" : "left"] = "-9999px", i = window.pageYOffset || document.documentElement.scrollTop, s.style.top = "".concat(i, "px"), s.setAttribute("readonly", ""), s.value = t, n.container.appendChild(s), r = l()(s), c("copy"), s.remove()) : (r = l()(e), c("copy")), r
      }

      function h(e) {
        return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function p(e) {
        return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function m(e, t) {
        for (var i = 0; i < t.length; i++) {
          var s = t[i];
          s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
      }

      function f(e, t) {
        return (f = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e
        })(e, t)
      }

      function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
      }

      function v(e, t) {
        if (e = "data-clipboard-".concat(e), t.hasAttribute(e)) {
          return t.getAttribute(e)
        }
      }

      var s = function () {
        var e = r, t = o();
        if ("function" != typeof t && null !== t) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && f(e, t);
        i = r, s = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) {
            return !1;
          }
          if (Reflect.construct.sham) {
            return !1;
          }
          if ("function" == typeof Proxy) {
            return !0;
          }
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
            })), !0
          }
          catch (e) {
            return !1
          }
        }();
        var i, s, n = function () {
          var e = g(i),
            t = s ? (t = g(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
            e = this;
          if (!t || "object" !== p(t) && "function" != typeof t) {
            if (void 0 !== e) {
              return e;
            }
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }
          return t
        };

        function r(e, t) {
          var i;
          if (this instanceof r) {
            return (i = n.call(this)).resolveOptions(t), i.listenClick(e), i;
          }
          throw new TypeError("Cannot call a class as a function")
        }

        return e = [{
          key: "copy", value: function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {container: document.body};
            return u(e, t)
          }
        }, {key: "cut", value: d}, {
          key: "isSupported", value: function () {
            var e = "string" == typeof (e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]) ? [e] : e,
              t = !!document.queryCommandSupported;
            return e.forEach(function (e) {
              t = t && !!document.queryCommandSupported(e)
            }), t
          }
        }], m((t = r).prototype, [{
          key: "resolveOptions", value: function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === p(e.container) ? e.container : document.body
          }
        }, {
          key: "listenClick", value: function (e) {
            var t = this;
            this.listener = a()(e, "click", function (e) {
              return t.onClick(e)
            })
          }
        }, {
          key: "onClick", value: function (e) {
            var t = e.delegateTarget || e.currentTarget, e = function () {
              var e = void 0 === (i = (s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).action) ? "copy" : i,
                t = s.container, i = s.target, s = s.text;
              if ("copy" !== e && "cut" !== e) {
                throw new Error('Invalid "action" value, use either "copy" or "cut"');
              }
              if (void 0 !== i) {
                if (!i || "object" !== h(i) || 1 !== i.nodeType) {
                  throw new Error('Invalid "target" value, use a valid Element');
                }
                if ("copy" === e && i.hasAttribute("disabled")) {
                  throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                }
                if ("cut" === e && (i.hasAttribute("readonly") || i.hasAttribute("disabled"))) {
                  throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                }
              }
              return s ? u(s, {container: t}) : i ? "cut" === e ? d(i) : u(i, {container: t}) : void 0
            }({
              action: this.action(t),
              container: this.container,
              target: this.target(t),
              text: this.text(t)
            });
            this.emit(e ? "success" : "error", {
              action: this.action,
              text: e,
              trigger: t,
              clearSelection: function () {
                t && t.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges()
              }
            })
          }
        }, {
          key: "defaultAction", value: function (e) {
            return v("action", e)
          }
        }, {
          key: "defaultTarget", value: function (e) {
            if (e = v("target", e)) {
              return document.querySelector(e)
            }
          }
        }, {
          key: "defaultText", value: function (e) {
            return v("text", e)
          }
        }, {
          key: "destroy", value: function () {
            this.listener.destroy()
          }
        }]), m(t, e), r
      }()
    }, 828: function (e) {
      var t;
      "undefined" == typeof Element || Element.prototype.matches || ((t = Element.prototype).matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector), e.exports = function (e, t) {
        for (; e && 9 !== e.nodeType;) {
          if ("function" == typeof e.matches && e.matches(t)) {
            return e;
          }
          e = e.parentNode
        }
      }
    }, 438: function (e, t, i) {
      var o = i(828);

      function r(e, t, i, s, n) {
        var r = function (t, i, e, s) {
          return function (e) {
            e.delegateTarget = o(e.target, i), e.delegateTarget && s.call(t, e)
          }
        }.apply(this, arguments);
        return e.addEventListener(i, r, n), {
          destroy: function () {
            e.removeEventListener(i, r, n)
          }
        }
      }

      e.exports = function (e, t, i, s, n) {
        return "function" == typeof e.addEventListener ? r.apply(null, arguments) : "function" == typeof i ? r.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function (e) {
          return r(e, t, i, s, n)
        }))
      }
    }, 879: function (e, i) {
      i.node = function (e) {
        return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
      }, i.nodeList = function (e) {
        var t = Object.prototype.toString.call(e);
        return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || i.node(e[0]))
      }, i.string = function (e) {
        return "string" == typeof e || e instanceof String
      }, i.fn = function (e) {
        return "[object Function]" === Object.prototype.toString.call(e)
      }
    }, 370: function (e, t, i) {
      var c = i(879), d = i(438);
      e.exports = function (e, t, i) {
        if (!e && !t && !i) {
          throw new Error("Missing required arguments");
        }
        if (!c.string(t)) {
          throw new TypeError("Second argument must be a String");
        }
        if (!c.fn(i)) {
          throw new TypeError("Third argument must be a Function");
        }
        if (c.node(e)) {
          return (o = e).addEventListener(a = t, l = i), {
            destroy: function () {
              o.removeEventListener(a, l)
            }
          };
        }
        if (c.nodeList(e)) {
          return s = e, n = t, r = i, Array.prototype.forEach.call(s, function (e) {
            e.addEventListener(n, r)
          }), {
            destroy: function () {
              Array.prototype.forEach.call(s, function (e) {
                e.removeEventListener(n, r)
              })
            }
          };
        }
        if (c.string(e)) {
          return d(document.body, e, t, i);
        }
        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
        var s, n, r, o, a, l
      }
    }, 817: function (e) {
      e.exports = function (e) {
        var t,
          i = "SELECT" === e.nodeName ? (e.focus(), e.value) : "INPUT" === e.nodeName || "TEXTAREA" === e.nodeName ? ((t = e.hasAttribute("readonly")) || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), t || e.removeAttribute("readonly"), e.value) : (e.hasAttribute("contenteditable") && e.focus(), i = window.getSelection(), (t = document.createRange()).selectNodeContents(e), i.removeAllRanges(), i.addRange(t), i.toString());
        return i
      }
    }, 279: function (e) {
      function t() {
      }

      t.prototype = {
        on: function (e, t, i) {
          var s = this.e || (this.e = {});
          return (s[e] || (s[e] = [])).push({fn: t, ctx: i}), this
        }, once: function (e, t, i) {
          var s = this;

          function n() {
            s.off(e, n), t.apply(i, arguments)
          }

          return n._ = t, this.on(e, n, i)
        }, emit: function (e) {
          for (var t = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[e] || []).slice(), s = 0, n = i.length; s < n; s++) {
            i[s].fn.apply(i[s].ctx, t);
          }
          return this
        }, off: function (e, t) {
          var i = this.e || (this.e = {}), s = i[e], n = [];
          if (s && t) {
            for (var r = 0, o = s.length; r < o; r++) {
              s[r].fn !== t && s[r].fn._ !== t && n.push(s[r]);
            }
          }
          return n.length ? i[e] = n : delete i[e], this
        }
      }, e.exports = t, e.exports.TinyEmitter = t
    }
  }, n = {}, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return s.d(t, {a: t}), t
  }, s.d = function (e, t) {
    for (var i in t) {
      s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, {
        enumerable: !0,
        get: t[i]
      })
    }
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, s(686).default;

  function s(e) {
    if (n[e]) {
      return n[e].exports;
    }
    var t = n[e] = {exports: {}};
    return i[e](t, t.exports, s), t.exports
  }

  var i, n
}), function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.counterUp = t() : e.counterUp = t()
}(self, function () {
  return (() => {
    "use strict";
    var s = {
      d: (e, t) => {
        for (var i in t) {
          s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, {
            enumerable: !0,
            get: t[i]
          })
        }
      }, o: (e, t) => Object.prototype.hasOwnProperty.call(e, t), r: e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
      }
    }, e = {};
    s.r(e), s.d(e, {default: () => t, divideNumbers: () => l});
    const t = (e, t = {}) => {
      const {action: i = "start", duration: s = 1e3, delay: n = 16} = t;
      if ("stop" === i) {
        a(e);
      }
      else if (a(e), /[0-9]/.test(e.innerHTML)) {
        const r = l(e.innerHTML, {
            duration: s || e.getAttribute("data-duration"),
            delay: n || e.getAttribute("data-delay")
          }),
          o = (e._countUpOrigInnerHTML = e.innerHTML, e.innerHTML = r[0] || "&nbsp;", e.style.visibility = "visible", function () {
            e.innerHTML = r.shift() || "&nbsp;", r.length ? (clearTimeout(e.countUpTimeout), e.countUpTimeout = setTimeout(o, n)) : e._countUpOrigInnerHTML = void 0
          });
        e.countUpTimeout = setTimeout(o, n)
      }
    }, a = e => {
      clearTimeout(e.countUpTimeout), e._countUpOrigInnerHTML && (e.innerHTML = e._countUpOrigInnerHTML, e._countUpOrigInnerHTML = void 0), e.style.visibility = ""
    }, l = (e, t = {}) => {
      const {duration: n = 1e3, delay: i = 16} = t, r = n / i,
        o = e.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/), a = [];
      for (let e = 0; e < r; e++) {
        a.push("");
      }
      for (let t = 0; t < o.length; t++) {
        if (/([0-9.][,.0-9]*[0-9]*)/.test(o[t]) && !/<[^>]+>/.test(o[t])) {
          let i = o[t];
          const n = [...i.matchAll(/[.,]/g)].map(e => ({
            char: e[0],
            i: i.length - e.index - 1
          })).sort((e, t) => e.i - t.i);
          i = i.replace(/[.,]/g, "");
          let s = a.length - 1;
          for (let t = r; 1 <= t; t--) {
            let e = parseInt(i / r * t, 10);
            e = n.reduce((e, {
              char: t,
              i
            }) => e.length <= i ? e : e.slice(0, -i) + t + e.slice(-i), e.toString()), a[s--] += e
          }
        }
        else {
          for (let e = 0; e < r; e++) {
            a[e] += o[t];
          }
        }
      }
      return a[a.length] = e.toString(), a
    };
    return e
  })()
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).GLightbox = t()
}(this, function () {
  "use strict";

  function t(e) {
    return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function o(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  function s(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
    }
  }

  function e(e, t, i) {
    t && s(e.prototype, t), i && s(e, i)
  }

  var a = Date.now();

  function c(e) {
    var t = {}, i = !0, s = 0, n = arguments.length;
    for ("[object Boolean]" === Object.prototype.toString.call(e) && (i = e, s++); s < n; s++) {
      r = void 0;
      var r, o = arguments[s];
      for (r in o) {
        Object.prototype.hasOwnProperty.call(o, r) && (i && "[object Object]" === Object.prototype.toString.call(o[r]) ? t[r] = c(!0, t[r], o[r]) : t[r] = o[r])
      }
    }
    return t
  }

  function h(e, t) {
    if (0 != M(e = A(e = !H(e) && e !== window && e !== document ? e : [e]) || d(e) ? e : [e])) {
      if (A(e) && !d(e)) {
        for (var i = e.length, s = 0; s < i && !1 !== t.call(e[s], e[s], s, e); s++) {
          ;
        }
      }
      else if (d(e)) {
        for (var n in e) {
          if (w(e, n) && !1 === t.call(e[n], e[n], n, e)) {
            break
          }
        }
      }
    }
  }

  function E(e, t, i) {
    var s = 1 < arguments.length && void 0 !== t ? t : null,
      n = 2 < arguments.length && void 0 !== i ? i : null,
      t = e[a] = e[a] || [], r = {all: t, evt: null, found: null};
    return s && n && 0 < M(t) && h(t, function (e, t) {
      if (e.eventName == s && e.fn.toString() == n.toString()) {
        return r.found = !0, r.evt = t, !1
      }
    }), r
  }

  function L(i, e, t) {
    var e = 1 < arguments.length && void 0 !== e ? e : {}, s = e.onElement,
      n = e.withCallback, r = e.avoidDuplicate, o = void 0 === r || r,
      r = e.once, a = void 0 !== r && r, r = e.useCapture,
      l = void 0 !== r && r, c = 2 < arguments.length ? t : void 0, d = s || [];

    function u(e) {
      F(n) && n.call(c, e, this), a && u.destroy()
    }

    return b(d) && (d = document.querySelectorAll(d)), u.destroy = function () {
      h(d, function (e) {
        var t = E(e, i, u);
        t.found && t.all.splice(t.evt, 1), e.removeEventListener && e.removeEventListener(i, u, l)
      })
    }, h(d, function (e) {
      var t = E(e, i, u);
      (e.addEventListener && o && !t.found || !o) && (e.addEventListener(i, u, l), t.all.push({
        eventName: i,
        fn: u
      }))
    }), u
  }

  function O(t, e) {
    h(e.split(" "), function (e) {
      return t.classList.add(e)
    })
  }

  function $(t, e) {
    h(e.split(" "), function (e) {
      return t.classList.remove(e)
    })
  }

  function z(e, t) {
    return e.classList.contains(t)
  }

  function D(e, t) {
    for (; e !== document.body;) {
      if (!(e = e.parentElement)) {
        return !1;
      }
      if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) {
        return e
      }
    }
  }

  function j(t, e, i) {
    var s, e = 1 < arguments.length && void 0 !== e ? e : "",
      n = 2 < arguments.length && void 0 !== i && i;
    t && "" !== e && ("none" === e ? F(n) && n() : (i = function () {
      var e, t = document.createElement("fakeelement"), i = {
        animation: "animationend",
        OAnimation: "oAnimationEnd",
        MozAnimation: "animationend",
        WebkitAnimation: "webkitAnimationEnd"
      };
      for (e in i) {
        if (void 0 !== t.style[e]) {
          return i[e]
        }
      }
    }(), h(s = e.split(" "), function (e) {
      O(t, "g" + e)
    }), L(i, {
      onElement: t,
      avoidDuplicate: !1,
      once: !0,
      withCallback: function (e, t) {
        h(s, function (e) {
          $(t, "g" + e)
        }), F(n) && n()
      }
    })))
  }

  function N(e, t) {
    t = 1 < arguments.length && void 0 !== t ? t : "";
    if ("" === t) {
      return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
    }
    e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t
  }

  function S(e) {
    e.style.display = "block"
  }

  function l(e) {
    e.style.display = "none"
  }

  function g(e) {
    var t = document.createDocumentFragment(),
      i = document.createElement("div");
    for (i.innerHTML = e; i.firstChild;) {
      t.appendChild(i.firstChild);
    }
    return t
  }

  function W() {
    return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
  }

  function v(e, t, i, s) {
    var n, r;
    e() ? t() : (i = i || 100, r = setInterval(function () {
      e() && (clearInterval(r), n && clearTimeout(n), t())
    }, i), s && (n = setTimeout(function () {
      clearInterval(r)
    }, s)))
  }

  function C(e, t, i) {
    if (q(e)) {
      console.error("Inject assets error");
    }
    else if (F(t) && (i = t, t = !1), b(t) && t in window) {
      F(i) && i();
    }
    else {
      var s;
      if (-1 !== e.indexOf(".css")) {
        if ((s = document.querySelectorAll('link[href="' + e + '"]')) && 0 < s.length) {
          return void (F(i) && i());
        }
        var n = document.getElementsByTagName("head")[0],
          r = n.querySelectorAll('link[rel="stylesheet"]'),
          o = document.createElement("link");
        return o.rel = "stylesheet", o.type = "text/css", o.href = e, o.media = "all", r ? n.insertBefore(o, r[0]) : n.appendChild(o), void (F(i) && i())
      }
      if ((s = document.querySelectorAll('script[src="' + e + '"]')) && 0 < s.length) {
        if (F(i)) {
          if (b(t)) {
            return void v(function () {
              return void 0 !== window[t]
            }, function () {
              i()
            });
          }
          i()
        }
      }
      else {
        r = document.createElement("script");
        r.type = "text/javascript", r.src = e, r.onload = function () {
          if (F(i)) {
            if (b(t)) {
              return v(function () {
                return void 0 !== window[t]
              }, function () {
                i()
              }), !1;
            }
            i()
          }
        }, document.body.appendChild(r)
      }
    }
  }

  function y() {
    return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)
  }

  function F(e) {
    return "function" == typeof e
  }

  function b(e) {
    return "string" == typeof e
  }

  function H(e) {
    return e && e.nodeType && 1 == e.nodeType
  }

  function k(e) {
    return Array.isArray(e)
  }

  function A(e) {
    return e && e.length && isFinite(e.length)
  }

  function d(e) {
    return "object" === t(e) && null != e && !F(e) && !k(e)
  }

  function q(e) {
    return null == e
  }

  function w(e, t) {
    return null !== e && hasOwnProperty.call(e, t)
  }

  function M(e) {
    if (d(e)) {
      if (e.keys) {
        return e.keys().length;
      }
      var t, i = 0;
      for (t in e) {
        w(e, t) && i++;
      }
      return i
    }
    return e.length
  }

  function B(e) {
    return !isNaN(parseFloat(e)) && isFinite(e)
  }

  function Y(e) {
    var e = 0 < arguments.length && void 0 !== e ? e : -1,
      t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
    if (!t.length) {
      return !1;
    }
    if (1 == t.length) {
      return t[0];
    }
    "string" == typeof e && (e = parseInt(e));
    var i = [], t = (h(t, function (e) {
      i.push(e.getAttribute("data-taborder"))
    }), Math.max.apply(Math, i.map(function (e) {
      return parseInt(e)
    }))), s = e < 0 ? 1 : e + 1;
    t < s && (s = "1");
    e = i.filter(function (e) {
      return e >= parseInt(s)
    }).sort()[0];
    return document.querySelector('.gbtn[data-taborder="'.concat(e, '"]'))
  }

  function u(e) {
    return Math.sqrt(e.x * e.x + e.y * e.y)
  }

  function P(e, t) {
    n = t;
    var i, s,
      n = 0 == (s = u(i = e) * u(n)) ? 0 : (1 < (i = (i.x * n.x + i.y * n.y) / s) && (i = 1), Math.acos(i));
    return 0 < e.x * t.y - t.x * e.y && (n *= -1), 180 * n / Math.PI
  }

  e(i, [{
    key: "add", value: function (e) {
      this.handlers.push(e)
    }
  }, {
    key: "del", value: function (e) {
      e || (this.handlers = []);
      for (var t = this.handlers.length; 0 <= t; t--) {
        this.handlers[t] === e && this.handlers.splice(t, 1)
      }
    }
  }, {
    key: "dispatch", value: function () {
      for (var e = 0, t = this.handlers.length; e < t; e++) {
        var i = this.handlers[e];
        "function" == typeof i && i.apply(this.el, arguments)
      }
    }
  }]);
  var I = i;

  function i(e) {
    o(this, i), this.handlers = [], this.el = e
  }

  function n(e, t) {
    e = new I(e);
    return e.add(t), e
  }

  e(r, [{
    key: "start", value: function (e) {
      var t, i;
      e.touches && (e.target && e.target.nodeName && 0 <= ["a", "button", "input"].indexOf(e.target.nodeName.toLowerCase()) ? console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase()) : (this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = 0 < this.delta && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now, t = this.preV, 1 < e.touches.length && (this._cancelLongTap(), this._cancelSingleTap(), i = {
        x: e.touches[1].pageX - this.x1,
        y: e.touches[1].pageY - this.y1
      }, t.x = i.x, t.y = i.y, this.pinchStartLen = u(t), this.multipointStart.dispatch(e, this.element)), this._preventTap = !1, this.longTapTimeout = setTimeout(function () {
        this.longTap.dispatch(e, this.element), this._preventTap = !0
      }.bind(this), 750)))
    }
  }, {
    key: "move", value: function (e) {
      var t, i, s, n, r, o, a;
      e.touches && (o = this.preV, t = e.touches.length, i = e.touches[0].pageX, s = e.touches[0].pageY, this.isDoubleTap = !1, 1 < t ? (n = e.touches[1].pageX, r = e.touches[1].pageY, a = {
        x: e.touches[1].pageX - i,
        y: e.touches[1].pageY - s
      }, null !== o.x && (0 < this.pinchStartLen && (e.zoom = u(a) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = P(a, o), this.rotate.dispatch(e, this.element)), o.x = a.x, o.y = a.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (i - this.x2 + n - this.sx2) / 2, e.deltaY = (s - this.y2 + r - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = n, this.sy2 = r) : (null !== this.x2 ? (e.deltaX = i - this.x2, e.deltaY = s - this.y2, o = Math.abs(this.x1 - this.x2), a = Math.abs(this.y1 - this.y2), (10 < o || 10 < a) && (this._preventTap = !0)) : (e.deltaX = 0, e.deltaY = 0), this.pressMove.dispatch(e, this.element)), this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = i, this.y2 = s, 1 < t && e.preventDefault())
    }
  }, {
    key: "end", value: function (e) {
      var t;
      e.changedTouches && (this._cancelLongTap(), t = this, e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && 30 < Math.abs(this.x1 - this.x2) || this.y2 && 30 < Math.abs(this.y1 - this.y2) ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function () {
        t.swipe.dispatch(e, t.element)
      }, 0)) : (this.tapTimeout = setTimeout(function () {
        t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1)
      }, 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout(function () {
        t.singleTap.dispatch(e, t.element)
      }, 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null)
    }
  }, {
    key: "cancelAll", value: function () {
      this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout)
    }
  }, {
    key: "cancel", value: function (e) {
      this.cancelAll(), this.touchCancel.dispatch(e, this.element)
    }
  }, {
    key: "_cancelLongTap", value: function () {
      clearTimeout(this.longTapTimeout)
    }
  }, {
    key: "_cancelSingleTap", value: function () {
      clearTimeout(this.singleTapTimeout)
    }
  }, {
    key: "_swipeDirection", value: function (e, t, i, s) {
      return Math.abs(e - t) >= Math.abs(i - s) ? 0 < e - t ? "Left" : "Right" : 0 < i - s ? "Up" : "Down"
    }
  }, {
    key: "on", value: function (e, t) {
      this[e] && this[e].add(t)
    }
  }, {
    key: "off", value: function (e, t) {
      this[e] && this[e].del(t)
    }
  }, {
    key: "destroy", value: function () {
      return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null
    }
  }]);
  var V = r;

  function r(e, t) {
    o(this, r), this.element = "string" == typeof e ? document.querySelector(e) : e, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
      x: null,
      y: null
    }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;

    function i() {
    }

    this.rotate = n(this.element, t.rotate || i), this.touchStart = n(this.element, t.touchStart || i), this.multipointStart = n(this.element, t.multipointStart || i), this.multipointEnd = n(this.element, t.multipointEnd || i), this.pinch = n(this.element, t.pinch || i), this.swipe = n(this.element, t.swipe || i), this.tap = n(this.element, t.tap || i), this.doubleTap = n(this.element, t.doubleTap || i), this.longTap = n(this.element, t.longTap || i), this.singleTap = n(this.element, t.singleTap || i), this.pressMove = n(this.element, t.pressMove || i), this.twoFingerPressMove = n(this.element, t.twoFingerPressMove || i), this.touchMove = n(this.element, t.touchMove || i), this.touchEnd = n(this.element, t.touchEnd || i), this.touchCancel = n(this.element, t.touchCancel || i), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
      x: null,
      y: null
    }
  }

  function R(e) {
    var t = function () {
        var e, t = document.createElement("fakeelement"), i = {
          transition: "transitionend",
          OTransition: "oTransitionEnd",
          MozTransition: "transitionend",
          WebkitTransition: "webkitTransitionEnd"
        };
        for (e in i) {
          if (void 0 !== t.style[e]) {
            return i[e]
          }
        }
      }(),
      i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      s = z(e, "gslide-media") ? e : e.querySelector(".gslide-media"),
      n = D(s, ".ginner-container"), e = e.querySelector(".gslide-description");
    O(s = 769 < i ? n : s, "greset"), N(s, "translate3d(0, 0, 0)"), L(t, {
      onElement: s,
      once: !0,
      withCallback: function (e, t) {
        $(s, "greset")
      }
    }), s.style.opacity = "", e && (e.style.opacity = "")
  }

  e(p, [{
    key: "zoomIn", value: function () {
      var e, t = this.widowWidth();
      this.zoomedIn || t <= 768 || ((e = this.img).setAttribute("data-style", e.getAttribute("style")), e.style.maxWidth = e.naturalWidth + "px", e.style.maxHeight = e.naturalHeight + "px", e.naturalWidth > t && (t = t / 2 - e.naturalWidth / 2, this.setTranslate(this.img.parentNode, t, 0)), this.slide.classList.add("zoomed"), this.zoomedIn = !0)
    }
  }, {
    key: "zoomOut", value: function () {
      this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose()
    }
  }, {
    key: "dragStart", value: function (e) {
      e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1
    }
  }, {
    key: "dragEnd", value: function (e) {
      var t = this;
      e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout(function () {
        t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging")
      }, 100)
    }
  }, {
    key: "drag", value: function (e) {
      this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY))
    }
  }, {
    key: "onMove", value: function (e) {
      var t;
      this.zoomedIn && (t = e.clientX - this.img.naturalWidth / 2, e = e.clientY - this.img.naturalHeight / 2, this.setTranslate(this.img, t, e))
    }
  }, {
    key: "setTranslate", value: function (e, t, i) {
      e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)"
    }
  }, {
    key: "widowWidth", value: function () {
      return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }
  }]);
  var X = p;

  function p(e, t) {
    var i = this,
      s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (o(this, p), this.img = e, this.slide = t, this.onclose = s, this.img.setZoomEvents) {
      return !1;
    }
    this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function (e) {
      return i.dragStart(e)
    }, !1), this.img.addEventListener("mouseup", function (e) {
      return i.dragEnd(e)
    }, !1), this.img.addEventListener("mousemove", function (e) {
      return i.drag(e)
    }, !1), this.img.addEventListener("click", function (e) {
      return i.slide.classList.contains("dragging-nav") ? (i.zoomOut(), !1) : i.zoomedIn ? void (i.zoomedIn && !i.dragging && i.zoomOut()) : i.zoomIn()
    }, !1), this.img.setZoomEvents = !0
  }

  e(m, [{
    key: "dragStart", value: function (e) {
      var t;
      this.slide.classList.contains("zoomed") ? this.active = !1 : ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), t = e.target.nodeName.toLowerCase(), e.target.classList.contains("nodrag") || D(e.target, ".nodrag") || -1 !== ["input", "select", "textarea", "button", "a"].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && D(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = D(e.target, ".ginner-container"))))
    }
  }, {
    key: "dragEnd", value: function (e) {
      var t = this;
      e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout(function () {
        t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = ""
      }, 100)
    }
  }, {
    key: "drag", value: function (e) {
      if (this.active) {
        e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
        var e = Math.abs(this.currentX), t = Math.abs(this.currentY);
        if (0 < e && e >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
          this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
          var i = this.shouldChange();
          if (!this.instance.settings.dragAutoSnap && i && (this.doSlideChange = i), this.instance.settings.dragAutoSnap && i) {
            return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == i && this.instance.prevSlide(), void ("left" == i && this.instance.nextSlide())
          }
        }
        0 < this.toleranceY && 0 < t && e <= t && (!this.lastDirection || "y" == this.lastDirection) && (this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY), i = this.shouldClose(), !this.instance.settings.dragAutoSnap && i && (this.doSlideClose = !0), this.instance.settings.dragAutoSnap && i && this.instance.close())
      }
    }
  }, {
    key: "shouldChange", value: function () {
      var e, t = !1;
      return Math.abs(this.currentX) >= this.toleranceX && (("left" == (e = 0 < this.currentX ? "right" : "left") && this.slide !== this.slide.parentNode.lastChild || "right" == e && this.slide !== this.slide.parentNode.firstChild) && (t = e)), t
    }
  }, {
    key: "shouldClose", value: function () {
      var e = !1;
      return e = Math.abs(this.currentY) >= this.toleranceY ? !0 : e
    }
  }, {
    key: "setTranslate", value: function (e, t, i) {
      e.style.transition = 3 < arguments.length && void 0 !== arguments[3] && arguments[3] ? "all .2s ease" : "", e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)")
    }
  }]);
  var G = m;

  function m() {
    var t = this,
      e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
      i = (o(this, m), e.dragEl), s = e.toleranceX, s = void 0 === s ? 40 : s,
      n = e.toleranceY, n = void 0 === n ? 65 : n, r = e.slide,
      r = void 0 === r ? null : r, e = e.instance, e = void 0 === e ? null : e;
    this.el = i, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = s, this.toleranceY = n, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = r, this.instance = e, this.el.addEventListener("mousedown", function (e) {
      return t.dragStart(e)
    }, !1), this.el.addEventListener("mouseup", function (e) {
      return t.dragEnd(e)
    }, !1), this.el.addEventListener("mousemove", function (e) {
      return t.drag(e)
    }, !1)
  }

  function U(e) {
    var t = D(e.target, ".gslide-media");
    "enterfullscreen" === e.type && O(t, "fullscreen"), "exitfullscreen" === e.type && $(t, "fullscreen")
  }

  function Q(e, t, i, s) {
    var n, r, o, e = e.querySelector(".gslide-media"), a = (s = {
      url: t.href,
      callback: s
    }, a = s.url, n = s.allow, r = s.callback, s = s.appendTo, (o = document.createElement("iframe")).className = "vimeo-video gvideo", o.src = a, o.style.width = "100%", o.style.height = "100%", n && o.setAttribute("allow", n), o.onload = function () {
      o.onload = null, O(o, "node-ready"), F(r) && r()
    }, s && s.appendChild(o), o);
    e.parentNode.style.maxWidth = t.width, e.parentNode.style.height = t.height, e.appendChild(a)
  }

  e(f, [{
    key: "sourceType", value: function (e) {
      var t = e;
      if (null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/)) {
        return "image";
      }
      if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) {
        return "video";
      }
      if (e.match(/vimeo\.com\/([0-9]*)/)) {
        return "video";
      }
      if (null !== e.match(/\.(mp4|ogg|webm|mov)/)) {
        return "video";
      }
      if (null !== e.match(/\.(mp3|wav|wma|aac|ogg)/)) {
        return "audio";
      }
      if (-1 < e.indexOf("#") && "" !== t.split("#").pop().trim()) {
        return "inline";
      }
      return -1 < e.indexOf("goajax=true") ? "ajax" : "external"
    }
  }, {
    key: "parseConfig", value: function (s, n) {
      var r = this, o = c({descPosition: n.descPosition}, this.defaults);
      if (d(s) && !H(s)) {
        return w(s, "type") || (w(s, "content") && s.content ? s.type = "inline" : w(s, "href") && (s.type = this.sourceType(s.href))), t = c(o, s), this.setSize(t, n), t;
      }
      var a, e, t = "", l = s.getAttribute("data-glightbox"),
        i = s.nodeName.toLowerCase();
      if ("a" === i && (t = s.href), "img" === i && (t = s.src, o.alt = s.alt), o.href = t, h(o, function (e, t) {
        w(n, t) && "width" !== t && (o[t] = n[t]);
        var i = s.dataset[t];
        q(i) || (o[t] = r.sanitizeValue(i))
      }), o.content && (o.type = "inline"), !o.type && t && (o.type = this.sourceType(t)), q(l) ? (o.title || "a" != i || (q(t = s.title) || "" === t || (o.title = t)), o.title || "img" != i || (q(t = s.alt) || "" === t || (o.title = t))) : (a = [], h(o, function (e, t) {
        a.push(";\\s?" + t)
      }), a = a.join("\\s?:|"), "" !== l.trim() && h(o, function (e, t) {
        var i = l, s = new RegExp("s?" + t + "s?:s?(.*?)(" + a + "s?:|$)"),
          i = i.match(s);
        i && i.length && i[1] && (s = i[1].trim().replace(/;\s*$/, ""), o[t] = r.sanitizeValue(s))
      })), o.description && "." === o.description.substring(0, 1)) {
        try {
          e = document.querySelector(o.description).innerHTML
        }
        catch (e) {
          if (!(e instanceof DOMException)) {
            throw e
          }
        }
        e && (o.description = e)
      }
      return o.description || (i = s.querySelector(".glightbox-desc")) && (o.description = i.innerHTML), this.setSize(o, n, s), this.slideConfig = o
    }
  }, {
    key: "setSize", value: function (e, t) {
      var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
        s = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width),
        t = this.checkSize(t.height);
      return e.width = w(e, "width") && "" !== e.width ? this.checkSize(e.width) : s, e.height = w(e, "height") && "" !== e.height ? this.checkSize(e.height) : t, i && "image" == e.type && (e._hasCustomWidth = !!i.dataset.width, e._hasCustomHeight = !!i.dataset.height), e
    }
  }, {
    key: "checkSize", value: function (e) {
      return B(e) ? "".concat(e, "px") : e
    }
  }, {
    key: "sanitizeValue", value: function (e) {
      return "true" !== e && "false" !== e ? e : "true" === e
    }
  }]);
  var K = f;

  function f() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
    o(this, f), this.defaults = {
      href: "",
      sizes: "",
      srcset: "",
      title: "",
      type: "",
      videoProvider: "",
      description: "",
      alt: "",
      descPosition: "bottom",
      effect: "",
      width: "",
      height: "",
      content: !1,
      zoomable: !0,
      draggable: !0
    }, d(e) && (this.defaults = c(this.defaults, e))
  }

  e(_, [{
    key: "setContent", value: function () {
      var t = this,
        i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
        e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
      if (z(i, "loaded")) {
        return !1;
      }
      var s, n = this.instance.settings, r = this.slideConfig, o = y(),
        a = (F(n.beforeSlideLoad) && n.beforeSlideLoad({
          index: this.index,
          slide: i,
          player: !1
        }), r.type), l = r.descPosition, c = i.querySelector(".gslide-media"),
        d = i.querySelector(".gslide-title"),
        u = i.querySelector(".gslide-desc"),
        h = i.querySelector(".gdesc-inner"), p = e,
        m = "gSlideTitle_" + this.index, f = "gSlideDesc_" + this.index;
      if (F(n.afterSlideLoad) && (p = function () {
        F(e) && e(), n.afterSlideLoad({
          index: t.index,
          slide: i,
          player: t.instance.getSlidePlayerInstance(t.index)
        })
      }), "" == r.title && "" == r.description ? h && h.parentNode.parentNode.removeChild(h.parentNode) : (d && "" !== r.title ? (d.id = m, d.innerHTML = r.title) : d.parentNode.removeChild(d), u && "" !== r.description ? (u.id = f, o && 0 < n.moreLength ? (r.smallDescription = this.slideShortDesc(r.description, n.moreLength, n.moreText), u.innerHTML = r.smallDescription, this.descriptionEvents(u, r)) : u.innerHTML = r.description) : u.parentNode.removeChild(u), O(c.parentNode, "desc-".concat(l)), O(h.parentNode, "description-".concat(l))), O(c, "gslide-".concat(a)), O(i, "loaded"), "video" === a) {
        !function (t, i, s, n) {
          var r = this, e = t.querySelector(".ginner-container"),
            o = "gvideo" + s, a = t.querySelector(".gslide-media"),
            l = this.getAllPlayers(),
            c = (O(e, "gvideo-container"), a.insertBefore(g('<div class="gvideo-wrapper"></div>'), a.firstChild), t.querySelector(".gvideo-wrapper")),
            d = (C(this.settings.plyr.css, "Plyr"), i.href),
            u = null == i ? void 0 : i.videoProvider, h = !1;
          a.style.maxWidth = i.width, C(this.settings.plyr.js, "Plyr", function () {
            "local" !== (u = !(u = !u && d.match(/vimeo\.com\/([0-9]*)/) ? "vimeo" : u) && (d.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || d.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || d.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) ? "youtube" : u) && u || (u = "local", e = '<video id="' + o + '" ', e = (e = (e += 'style="background:#000; max-width: '.concat(i.width, ';" ')) + 'preload="metadata" poster="' + i.poster + '" x-webkit-airplay="allow" playsinline controls class="gvideo-local">') + '<source src="'.concat(d, '">'), h = g(e += "</video>"));
            var e = h || g('<div id="'.concat(o, '" data-plyr-provider="').concat(u, '" data-plyr-embed-id="').concat(d, '"></div>')),
              e = (O(c, "".concat(u, "-video gvideo")), c.appendChild(e), c.setAttribute("data-id", o), c.setAttribute("data-index", s), w(r.settings.plyr, "config") ? r.settings.plyr.config : {}),
              e = new Plyr("#" + o, e);
            e.on("ready", function (e) {
              l[o] = e.detail.plyr, F(n) && n()
            }), v(function () {
              return t.querySelector("iframe") && "true" == t.querySelector("iframe").dataset.ready
            }, function () {
              r.resize(t)
            }), e.on("enterfullscreen", U), e.on("exitfullscreen", U)
          })
        }.apply(this.instance, [i, r, this.index, p]);
      }
      else {
        if ("external" !== a) {
          return "inline" === a ? (function (e, t, i, s) {
            var n, r = this, e = e.querySelector(".gslide-media"),
              o = !(!w(t, "href") || !t.href) && t.href.split("#").pop().trim(),
              a = !(!w(t, "content") || !t.content) && t.content;
            if (a && (b(a) && (n = g('<div class="ginlined-content">'.concat(a, "</div>"))), H(a) && ("none" == a.style.display && (a.style.display = "block"), (l = document.createElement("div")).className = "ginlined-content", l.appendChild(a), n = l)), o) {
              a = document.getElementById(o);
              if (!a) {
                return !1;
              }
              var l = a.cloneNode(!0);
              l.style.height = t.height, l.style.maxWidth = t.width, O(l, "ginlined-content"), n = l
            }
            if (!n) {
              return console.error("Unable to append inline slide content", t), !1;
            }
            e.style.height = t.height, e.style.width = t.width, e.appendChild(n), this.events["inlineclose" + o] = L("click", {
              onElement: e.querySelectorAll(".gtrigger-close"),
              withCallback: function (e) {
                e.preventDefault(), r.close()
              }
            }), F(s) && s()
          }.apply(this.instance, [i, r, this.index, p]), void (r.draggable && new G({
            dragEl: i.querySelector(".gslide-inline"),
            toleranceX: n.dragToleranceX,
            toleranceY: n.dragToleranceY,
            slide: i,
            instance: this.instance
          }))) : "image" === a ? (d = r, f = this.index, s = function () {
            var e = i.querySelector("img");
            r.draggable && new G({
              dragEl: e,
              toleranceX: n.dragToleranceX,
              toleranceY: n.dragToleranceY,
              slide: i,
              instance: t.instance
            }), r.zoomable && e.naturalWidth > e.offsetWidth && (O(e, "zoomable"), new X(e, i, function () {
              t.instance.resize()
            })), F(p) && p()
          }, m = (m = i).querySelector(".gslide-media"), o = new Image, u = "gSlideTitle_" + f, f = "gSlideDesc_" + f, o.addEventListener("load", function () {
            F(s) && s()
          }, !1), o.src = d.href, "" != d.sizes && "" != d.srcset && (o.sizes = d.sizes, o.srcset = d.srcset), o.alt = "", q(d.alt) || "" === d.alt || (o.alt = d.alt), "" !== d.title && o.setAttribute("aria-labelledby", u), "" !== d.description && o.setAttribute("aria-describedby", f), d.hasOwnProperty("_hasCustomWidth") && d._hasCustomWidth && (o.style.width = d.width), d.hasOwnProperty("_hasCustomHeight") && d._hasCustomHeight && (o.style.height = d.height), void m.insertBefore(o, m.firstChild)) : void (F(p) && p());
        }
        Q.apply(this, [i, r, this.index, p])
      }
    }
  }, {
    key: "slideShortDesc", value: function (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 50,
        i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        s = document.createElement("div");
      s.innerHTML = e;
      var n = i;
      if ((e = s.innerText.trim()).length <= t) {
        return e;
      }
      e = e.substr(0, t - 1);
      return n ? (s = null, e + '... <a href="#" class="desc-more">' + i + "</a>") : e
    }
  }, {
    key: "descriptionEvents", value: function (e, r) {
      var o = this, e = e.querySelector(".desc-more");
      if (!e) {
        return !1;
      }
      L("click", {
        onElement: e, withCallback: function (e, t) {
          e.preventDefault();
          var i = document.body, s = D(t, ".gslide-desc");
          if (!s) {
            return !1;
          }
          s.innerHTML = r.description, O(i, "gdesc-open");
          var n = L("click", {
            onElement: [i, D(s, ".gslide-description")],
            withCallback: function (e, t) {
              "a" !== e.target.nodeName.toLowerCase() && ($(i, "gdesc-open"), O(i, "gdesc-closed"), s.innerHTML = r.smallDescription, o.descriptionEvents(s, r), setTimeout(function () {
                $(i, "gdesc-closed")
              }, 400), n.destroy())
            }
          })
        }
      })
    }
  }, {
    key: "create", value: function () {
      return g(this.instance.settings.slideHTML)
    }
  }, {
    key: "getConfig", value: function () {
      H(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
      var e = new K(this.instance.settings.slideExtraAttributes);
      return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig
    }
  }]);
  var x = _;

  function _(e, t, i) {
    o(this, _), this.element = e, this.instance = t, this.index = i
  }

  var Z = y(),
    J = null !== y() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints,
    ee = document.getElementsByTagName("html")[0], te = {
      selector: ".glightbox",
      elements: null,
      skin: "clean",
      theme: "clean",
      closeButton: !0,
      startAt: null,
      autoplayVideos: !0,
      autofocusVideos: !0,
      descPosition: "bottom",
      width: "900px",
      height: "506px",
      videosWidth: "960px",
      beforeSlideChange: null,
      afterSlideChange: null,
      beforeSlideLoad: null,
      afterSlideLoad: null,
      slideInserted: null,
      slideRemoved: null,
      slideExtraAttributes: null,
      onOpen: null,
      onClose: null,
      loop: !1,
      zoomable: !0,
      draggable: !0,
      dragAutoSnap: !1,
      dragToleranceX: 40,
      dragToleranceY: 65,
      preload: !0,
      oneSlidePerOpen: !1,
      touchNavigation: !0,
      touchFollowAxis: !0,
      keyboardNavigation: !0,
      closeOnOutsideClick: !0,
      plugins: !1,
      plyr: {
        css: "https://cdn.plyr.io/3.6.12/plyr.css",
        js: "https://cdn.plyr.io/3.6.12/plyr.js",
        config: {
          ratio: "16:9",
          fullscreen: {enabled: !0, iosNative: !0},
          youtube: {noCookie: !0, rel: 0, showinfo: 0, iv_load_policy: 3},
          vimeo: {byline: !1, portrait: !1, title: !1, transparent: !1}
        }
      },
      openEffect: "zoom",
      closeEffect: "zoom",
      slideEffect: "slide",
      moreText: "See more",
      moreLength: 60,
      cssEfects: {
        fade: {in: "fadeIn", out: "fadeOut"},
        zoom: {in: "zoomIn", out: "zoomOut"},
        slide: {in: "slideInRight", out: "slideOutLeft"},
        slideBack: {in: "slideInLeft", out: "slideOutRight"},
        none: {in: "none", out: "none"}
      },
      svg: {
        close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
        next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
        prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
      },
      slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
      lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'
    }, ie = (e(T, [{
      key: "init", value: function () {
        var i = this, e = this.getSelector();
        e && (this.baseEvents = L("click", {
          onElement: e,
          withCallback: function (e, t) {
            e.preventDefault(), i.open(t)
          }
        })), this.elements = this.getElements()
      }
    }, {
      key: "open", value: function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
          t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        if (0 === this.elements.length) {
          return !1;
        }
        this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
        var s, n, r, o, i, a, l, c, d, u, h, p, m, f, g, v, y, b, w, x, _, T, E,
          S, C, k, A, M, P, t = B(t) ? t : this.settings.startAt,
          I = (H(e) && ((I = e.getAttribute("data-gallery")) && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, I)), q(t) && (t = this.getElementIndex(e)) < 0 && (t = 0)), B(t) || (t = 0), this.build(), j(this.overlay, "none" === this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in), document.body);
        0 < window.innerWidth - document.documentElement.clientWidth && ((e = document.createElement("style")).type = "text/css", e.className = "gcss-styles", document.head.appendChild(e), O(I, "gscrollbar-fixer")), O(I, "glightbox-open"), O(ee, "glightbox-open"), Z && (O(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide", this.settings.autoplayVideos = !1), this.showSlide(t, !0), 1 === this.elements.length ? (O(this.prevButton, "glightbox-button-hidden"), O(this.nextButton, "glightbox-button-hidden")) : ($(this.prevButton, "glightbox-button-hidden"), $(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), F(this.settings.onOpen) && this.settings.onOpen(), J && this.settings.touchNavigation && ((s = this).events.hasOwnProperty("touch") || (e = W(), n = e.width, r = e.height, c = o = !1, v = g = f = m = l = a = i = null, T = _ = p = h = !(u = d = 1), E = {}, S = {}, k = C = x = w = 0, e = document.getElementById("glightbox-slider"), M = document.querySelector(".goverlay"), e = new V(e, {
          touchStart: function (e) {
            o = !0, (z(e.targetTouches[0].target, "ginner-container") || D(e.targetTouches[0].target, ".gslide-desc") || "a" == e.targetTouches[0].target.nodeName.toLowerCase()) && (o = !1), (o = D(e.targetTouches[0].target, ".gslide-inline") && !z(e.targetTouches[0].target.parentNode, "gslide-inline") ? !1 : o) && (S = e.targetTouches[0], E.pageX = e.targetTouches[0].pageX, E.pageY = e.targetTouches[0].pageY, C = e.targetTouches[0].clientX, k = e.targetTouches[0].clientY, i = s.activeSlide, a = i.querySelector(".gslide-media"), A = i.querySelector(".gslide-inline"), l = null, z(a, "gslide-image") && (l = a.querySelector("img")), 769 < (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) && (a = i.querySelector(".ginner-container")), $(M, "greset"), 20 < e.pageX && e.pageX < window.innerWidth - 20 || e.preventDefault())
          }, touchMove: function (e) {
            if (o && (S = e.targetTouches[0], !h && !p)) {
              if (A && A.offsetHeight > r) {
                var t = E.pageX - S.pageX;
                if (Math.abs(t) <= 13) {
                  return !1
                }
              }
              c = !0;
              var i, t = e.targetTouches[0].clientX,
                e = e.targetTouches[0].clientY, t = C - t, e = k - e;
              if (Math.abs(t) > Math.abs(e) ? T = !(_ = !1) : _ = !(T = !1), y = S.pageX - E.pageX, w = 100 * y / n, b = S.pageY - E.pageY, x = 100 * b / r, _ && l && (i = 1 - Math.abs(b) / r, M.style.opacity = i, s.settings.touchFollowAxis && (w = 0)), T && (i = 1 - Math.abs(y) / n, a.style.opacity = i, s.settings.touchFollowAxis && (x = 0)), !l) {
                return N(a, "translate3d(".concat(w, "%, 0, 0)"));
              }
              N(a, "translate3d(".concat(w, "%, ").concat(x, "%, 0)"))
            }
          }, touchEnd: function () {
            var e, t;
            if (o) {
              return c = !1, p || h ? (g = m, void (v = f)) : (e = Math.abs(parseInt(x)), t = Math.abs(parseInt(w)), 29 < e && l ? void s.close() : e < 29 && t < 25 ? (O(M, "greset"), M.style.opacity = 1, R(a)) : void 0)
            }
          }, multipointEnd: function () {
            setTimeout(function () {
              h = !1
            }, 50)
          }, multipointStart: function () {
            h = !0, d = u || 1
          }, pinch: function (e) {
            if (!l || c) {
              return !1;
            }
            h = !0, l.scaleX = l.scaleY = d * e.zoom;
            e = d * e.zoom;
            if (p = !0, e <= 1) {
              return p = !1, e = 1, f = m = g = v = null, void l.setAttribute("style", "");
            }
            l.style.transform = "scale3d(".concat(e = 4.5 < e ? 4.5 : e, ", ").concat(e, ", 1)"), u = e
          }, pressMove: function (e) {
            var t, i;
            p && !h && (i = S.pageX - E.pageX, t = S.pageY - E.pageY, g && (i += g), v && (t += v), m = i, f = t, i = "translate3d(".concat(i, "px, ").concat(t, "px, 0)"), u && (i += " scale3d(".concat(u, ", ").concat(u, ", 1)")), N(l, i))
          }, swipe: function (e) {
            if (!p) {
              if (h) {
                h = !1;
              }
              else {
                if ("Left" == e.direction) {
                  if (s.index == s.elements.length - 1) {
                    return R(a);
                  }
                  s.nextSlide()
                }
                if ("Right" == e.direction) {
                  if (0 == s.index) {
                    return R(a);
                  }
                  s.prevSlide()
                }
              }
            }
          }
        }), s.events.touch = e)), this.settings.keyboardNavigation && !(P = this).events.hasOwnProperty("keyboard") && (P.events.keyboard = L("keydown", {
          onElement: window,
          withCallback: function (e, t) {
            var i = (e = e || window.event).keyCode;
            if (9 == i) {
              var s = document.querySelector(".gbtn.focused");
              if (!s) {
                var n = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                if ("input" == n || "textarea" == n || "button" == n) {
                  return
                }
              }
              e.preventDefault();
              n = document.querySelectorAll(".gbtn[data-taborder]");
              if (!n || n.length <= 0) {
                return;
              }
              if (!s) {
                return void ((e = Y()) && (e.focus(), O(e, "focused")));
              }
              n = Y(s.getAttribute("data-taborder"));
              $(s, "focused"), n && (n.focus(), O(n, "focused"))
            }
            39 == i && P.nextSlide(), 37 == i && P.prevSlide(), 27 == i && P.close()
          }
        }))
      }
    }, {
      key: "openAt", value: function () {
        this.open(null, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0)
      }
    }, {
      key: "showSlide", value: function () {
        var e, t = this,
          i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
          s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          n = (S(this.loader), this.index = parseInt(i), this.slidesContainer.querySelector(".current")),
          r = (n && $(n, "current"), this.slideAnimateOut(), this.slidesContainer.querySelectorAll(".gslide")[i]);
        z(r, "loaded") ? (this.slideAnimateIn(r, s), l(this.loader)) : (S(this.loader), n = this.elements[i], e = {
          index: this.index,
          slide: r,
          slideNode: r,
          slideConfig: n.slideConfig,
          slideIndex: this.index,
          trigger: n.node,
          player: null
        }, this.trigger("slide_before_load", e), n.instance.setContent(r, function () {
          l(t.loader), t.resize(), t.slideAnimateIn(r, s), t.trigger("slide_after_load", e)
        })), this.slideDescription = r.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && z(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(i + 1), this.preloadSlide(i - 1)), this.updateNavigationClasses(), this.activeSlide = r
      }
    }, {
      key: "preloadSlide", value: function (e) {
        var t = this;
        if (e < 0 || e > this.elements.length - 1) {
          return !1;
        }
        if (q(this.elements[e])) {
          return !1;
        }
        var i = this.slidesContainer.querySelectorAll(".gslide")[e];
        if (z(i, "loaded")) {
          return !1;
        }
        var s = this.elements[e], n = s.type, r = {
          index: e,
          slide: i,
          slideNode: i,
          slideConfig: s.slideConfig,
          slideIndex: e,
          trigger: s.node,
          player: null
        };
        this.trigger("slide_before_load", r), "video" === n || "external" === n ? setTimeout(function () {
          s.instance.setContent(i, function () {
            t.trigger("slide_after_load", r)
          })
        }, 200) : s.instance.setContent(i, function () {
          t.trigger("slide_after_load", r)
        })
      }
    }, {
      key: "prevSlide", value: function () {
        this.goToSlide(this.index - 1)
      }
    }, {
      key: "nextSlide", value: function () {
        this.goToSlide(this.index + 1)
      }
    }, {
      key: "goToSlide", value: function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) {
          return !1;
        }
        e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e)
      }
    }, {
      key: "insertSlide", value: function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : -1,
          e = (t < 0 && (t = this.elements.length), new x(e, this, t)),
          i = e.getConfig(), s = c({}, i), n = e.create(),
          r = this.elements.length - 1,
          e = (s.index = t, s.node = !1, s.instance = e, s.slideConfig = i, this.elements.splice(t, 0, s), null),
          o = null;
        this.slidesContainer && (r < t ? this.slidesContainer.appendChild(n) : (r = this.slidesContainer.querySelectorAll(".gslide")[t], this.slidesContainer.insertBefore(n, r)), (this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t), 0 === this.index && 0 === t && (this.index = 1), this.updateNavigationClasses(), e = this.slidesContainer.querySelectorAll(".gslide")[t], o = this.getSlidePlayerInstance(t), s.slideNode = e), this.trigger("slide_inserted", {
          index: t,
          slide: e,
          slideNode: e,
          slideConfig: i,
          slideIndex: t,
          trigger: null,
          player: o
        }), F(this.settings.slideInserted) && this.settings.slideInserted({
          index: t,
          slide: e,
          player: o
        })
      }
    }, {
      key: "removeSlide", value: function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : -1;
        if (e < 0 || e > this.elements.length - 1) {
          return !1;
        }
        var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
        t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), F(this.settings.slideRemoved) && this.settings.slideRemoved(e)
      }
    }, {
      key: "slideAnimateIn", value: function (e, t) {
        var i = this, s = e.querySelector(".gslide-media"),
          n = e.querySelector(".gslide-description"), r = {
            index: this.prevActiveSlideIndex,
            slide: this.prevActiveSlide,
            slideNode: this.prevActiveSlide,
            slideIndex: this.prevActiveSlide,
            slideConfig: q(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
            trigger: q(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
          }, o = {
            index: this.index,
            slide: this.activeSlide,
            slideNode: this.activeSlide,
            slideConfig: this.elements[this.index].slideConfig,
            slideIndex: this.index,
            trigger: this.elements[this.index].node,
            player: this.getSlidePlayerInstance(this.index)
          };
        0 < s.offsetWidth && n && (l(n), n.style.display = ""), $(e, this.effectsClasses), t ? j(e, this.settings.cssEfects[this.settings.openEffect].in, function () {
          i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
            prev: r,
            current: o
          }), F(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [r, o])
        }) : (n = "none" !== (s = this.settings.slideEffect) ? this.settings.cssEfects[s].in : s, this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (n = this.settings.cssEfects.slideBack.in), j(e, n, function () {
          i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
            prev: r,
            current: o
          }), F(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [r, o])
        })), setTimeout(function () {
          i.resize(e)
        }, 100), O(e, "current")
      }
    }, {
      key: "slideAnimateOut", value: function () {
        if (!this.prevActiveSlide) {
          return !1;
        }
        var s = this.prevActiveSlide,
          e = ($(s, this.effectsClasses), O(s, "prev"), this.settings.slideEffect),
          e = "none" !== e ? this.settings.cssEfects[e].out : e;
        this.slidePlayerPause(s), this.trigger("slide_before_change", {
          prev: {
            index: this.prevActiveSlideIndex,
            slide: this.prevActiveSlide,
            slideNode: this.prevActiveSlide,
            slideIndex: this.prevActiveSlideIndex,
            slideConfig: q(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
            trigger: q(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
          },
          current: {
            index: this.index,
            slide: this.activeSlide,
            slideNode: this.activeSlide,
            slideIndex: this.index,
            slideConfig: this.elements[this.index].slideConfig,
            trigger: this.elements[this.index].node,
            player: this.getSlidePlayerInstance(this.index)
          }
        }), F(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{
          index: this.prevActiveSlideIndex,
          slide: this.prevActiveSlide,
          player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
        }, {
          index: this.index,
          slide: this.activeSlide,
          player: this.getSlidePlayerInstance(this.index)
        }]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (e = this.settings.cssEfects.slideBack.out), j(s, e, function () {
          var e = s.querySelector(".ginner-container"),
            t = s.querySelector(".gslide-media"),
            i = s.querySelector(".gslide-description");
          e.style.transform = "", t.style.transform = "", $(t, "greset"), t.style.opacity = "", i && (i.style.opacity = ""), $(s, "prev")
        })
      }
    }, {
      key: "getAllPlayers", value: function () {
        return this.videoPlayers
      }
    }, {
      key: "getSlidePlayerInstance", value: function (e) {
        var e = "gvideo" + e, t = this.getAllPlayers();
        return !(!w(t, e) || !t[e]) && t[e]
      }
    }, {
      key: "stopSlideVideo", value: function (e) {
        H(e) && (t = e.querySelector(".gvideo-wrapper")) && (e = t.getAttribute("data-index")), console.log("stopSlideVideo is deprecated, use slidePlayerPause");
        var t = this.getSlidePlayerInstance(e);
        t && t.playing && t.pause()
      }
    }, {
      key: "slidePlayerPause", value: function (e) {
        H(e) && (t = e.querySelector(".gvideo-wrapper")) && (e = t.getAttribute("data-index"));
        var t = this.getSlidePlayerInstance(e);
        t && t.playing && t.pause()
      }
    }, {
      key: "playSlideVideo", value: function (e) {
        H(e) && (t = e.querySelector(".gvideo-wrapper")) && (e = t.getAttribute("data-index")), console.log("playSlideVideo is deprecated, use slidePlayerPlay");
        var t = this.getSlidePlayerInstance(e);
        t && !t.playing && t.play()
      }
    }, {
      key: "slidePlayerPlay", value: function (e) {
        var t;
        (!Z || null != (t = this.settings.plyr.config) && t.muted) && (H(e) && (t = e.querySelector(".gvideo-wrapper")) && (e = t.getAttribute("data-index")), (t = this.getSlidePlayerInstance(e)) && !t.playing && (t.play(), this.settings.autofocusVideos && t.elements.container.focus()))
      }
    }, {
      key: "setElements", value: function (e) {
        var n = this, r = (this.settings.elements = !1, []);
        e && e.length && h(e, function (e, t) {
          var e = new x(e, n, t), i = e.getConfig(), s = c({}, i);
          s.slideConfig = i, s.instance = e, s.index = t, r.push(s)
        }), this.elements = r, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (h(this.elements, function () {
          var e = g(n.settings.slideHTML);
          n.slidesContainer.appendChild(e)
        }), this.showSlide(0, !0)))
      }
    }, {
      key: "getElementIndex", value: function (i) {
        var s = !1;
        return h(this.elements, function (e, t) {
          if (w(e, "node") && e.node == i) {
            return s = t, !0
          }
        }), s
      }
    }, {
      key: "getElements", value: function () {
        var r = this, o = [],
          e = (this.elements = this.elements || [], !q(this.settings.elements) && k(this.settings.elements) && this.settings.elements.length && h(this.settings.elements, function (e, t) {
            var e = new x(e, r, t), i = e.getConfig(), s = c({}, i);
            s.node = !1, s.index = t, s.instance = e, s.slideConfig = i, o.push(s)
          }), !1);
        return (e = this.getSelector() ? document.querySelectorAll(this.getSelector()) : e) && h(e, function (e, t) {
          var i = new x(e, r, t), s = i.getConfig(), n = c({}, s);
          n.node = e, n.index = t, n.instance = i, n.slideConfig = s, n.gallery = e.getAttribute("data-gallery"), o.push(n)
        }), o
      }
    }, {
      key: "getGalleryElements", value: function (e, t) {
        return e.filter(function (e) {
          return e.gallery == t
        })
      }
    }, {
      key: "getSelector", value: function () {
        return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector)
      }
    }, {
      key: "getActiveSlide", value: function () {
        return this.slidesContainer.querySelectorAll(".gslide")[this.index]
      }
    }, {
      key: "getActiveSlideIndex", value: function () {
        return this.index
      }
    }, {
      key: "getAnimationClasses", value: function () {
        var e, t, i = [];
        for (e in this.settings.cssEfects) {
          this.settings.cssEfects.hasOwnProperty(e) && (t = this.settings.cssEfects[e], i.push("g".concat(t.in)), i.push("g".concat(t.out)));
        }
        return i.join(" ")
      }
    }, {
      key: "build", value: function () {
        var i = this;
        if (this.built) {
          return !1;
        }
        var e = document.body.childNodes, t = [], e = (h(e, function (e) {
            e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (t.push(e), e.setAttribute("aria-hidden", "true"))
          }), w(this.settings.svg, "next") ? this.settings.svg.next : ""),
          s = w(this.settings.svg, "prev") ? this.settings.svg.prev : "",
          n = w(this.settings.svg, "close") ? this.settings.svg.close : "",
          r = this.settings.lightboxHTML,
          e = (r = g(r = (r = (r = r.replace(/{nextSVG}/g, e)).replace(/{prevSVG}/g, s)).replace(/{closeSVG}/g, n)), document.body.appendChild(r), document.getElementById("glightbox-body")),
          s = (this.modal = e).querySelector(".gclose");
        this.prevButton = e.querySelector(".gprev"), this.nextButton = e.querySelector(".gnext"), this.overlay = e.querySelector(".goverlay"), this.loader = e.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = t, this.events = {}, O(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && s && (this.events.close = L("click", {
          onElement: s,
          withCallback: function (e, t) {
            e.preventDefault(), i.close()
          }
        })), s && !this.settings.closeButton && s.parentNode.removeChild(s), this.nextButton && (this.events.next = L("click", {
          onElement: this.nextButton,
          withCallback: function (e, t) {
            e.preventDefault(), i.nextSlide()
          }
        })), this.prevButton && (this.events.prev = L("click", {
          onElement: this.prevButton,
          withCallback: function (e, t) {
            e.preventDefault(), i.prevSlide()
          }
        })), this.settings.closeOnOutsideClick && (this.events.outClose = L("click", {
          onElement: e,
          withCallback: function (e, t) {
            i.preventOutsideClick || z(document.body, "glightbox-mobile") || D(e.target, ".ginner-container") || D(e.target, ".gbtn") || z(e.target, "gnext") || z(e.target, "gprev") || i.close()
          }
        })), h(this.elements, function (e, t) {
          i.slidesContainer.appendChild(e.instance.create()), e.slideNode = i.slidesContainer.querySelectorAll(".gslide")[t]
        }), J && (O(document.body, "glightbox-touch"), this.settings.autoplayVideos = !1), this.events.resize = L("resize", {
          onElement: window,
          withCallback: function () {
            i.resize()
          }
        }), this.built = !0
      }
    }, {
      key: "resize", value: function () {
        var e, t, i, s, n, r, o,
          a = (a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null) || this.activeSlide;
        a && !z(a, "zoomed") && (i = W(), e = a.querySelector(".gvideo-wrapper"), a = a.querySelector(".gslide-image"), t = this.slideDescription, r = i.width, i = i.height, (r <= 768 ? O : $)(document.body, "glightbox-mobile"), (e || a) && (s = !1, t && (z(t, "description-bottom") || z(t, "description-top")) && !z(t, "gabsolute") && (s = !0), a && (r <= 768 ? a.querySelector("img") : s && (n = t.offsetHeight, (a = a.querySelector("img")).setAttribute("style", "max-height: calc(100vh - ".concat(n, "px)")), t.setAttribute("style", "max-width: ".concat(a.offsetWidth, "px;")))), e && ((n = w(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "") || (a = e.clientWidth, o = e.clientHeight, n = "".concat(a / (a = a / o), ":").concat(o / a)), o = n.split(":"), a = this.settings.videosWidth, n = this.settings.videosWidth, o = (n = B(a) || -1 !== a.indexOf("px") ? parseInt(a) : -1 !== a.indexOf("vw") ? r * parseInt(a) / 100 : -1 !== a.indexOf("vh") ? i * parseInt(a) / 100 : -1 !== a.indexOf("%") ? r * parseInt(a) / 100 : parseInt(e.clientWidth)) / (parseInt(o[0]) / parseInt(o[1])), o = Math.floor(o), s && (i -= t.offsetHeight), r < n || i < o || i < o && n < r ? (o = e.offsetWidth, n = e.offsetHeight, e.parentNode.setAttribute("style", "max-width: ".concat((o = {
          width: o * (r = i / n),
          height: n * r
        }).width, "px")), s && t.setAttribute("style", "max-width: ".concat(o.width, "px;"))) : (e.parentNode.style.maxWidth = "".concat(a), s && t.setAttribute("style", "max-width: ".concat(a, ";"))))))
      }
    }, {
      key: "reload", value: function () {
        this.init()
      }
    }, {
      key: "updateNavigationClasses", value: function () {
        var e = this.loop();
        $(this.nextButton, "disabled"), $(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (O(this.prevButton, "disabled"), O(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || O(this.nextButton, "disabled") : O(this.prevButton, "disabled")
      }
    }, {
      key: "loop", value: function () {
        var e = w(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
        return e = w(this.settings, "loop") ? this.settings.loop : e
      }
    }, {
      key: "close", value: function () {
        var i = this;
        if (!this.lightboxOpen) {
          if (this.events) {
            for (var e in this.events) {
              this.events.hasOwnProperty(e) && this.events[e].destroy();
            }
            this.events = null
          }
          return !1
        }
        if (this.closing) {
          return !1;
        }
        this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && h(this.bodyHiddenChildElms, function (e) {
          e.removeAttribute("aria-hidden")
        }), O(this.modal, "glightbox-closing"), j(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), j(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function () {
          if (i.activeSlide = null, i.prevActiveSlideIndex = null, i.prevActiveSlide = null, i.built = !1, i.events) {
            for (var e in i.events) {
              i.events.hasOwnProperty(e) && i.events[e].destroy();
            }
            i.events = null
          }
          var t = document.body,
            t = ($(ee, "glightbox-open"), $(t, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), i.modal.parentNode.removeChild(i.modal), i.trigger("close"), F(i.settings.onClose) && i.settings.onClose(), document.querySelector(".gcss-styles"));
          t && t.parentNode.removeChild(t), i.lightboxOpen = !1, i.closing = null
        })
      }
    }, {
      key: "destroy", value: function () {
        this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy()
      }
    }, {
      key: "on", value: function (e, t) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
        if (!e || !F(t)) {
          throw new TypeError("Event name and callback must be defined");
        }
        this.apiEvents.push({evt: e, once: i, callback: t})
      }
    }, {
      key: "once", value: function (e, t) {
        this.on(e, t, !0)
      }
    }, {
      key: "trigger", value: function (n) {
        var t = this,
          r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
          o = [];
        h(this.apiEvents, function (e, t) {
          var i = e.evt, s = e.once, e = e.callback;
          i == n && (e(r), s && o.push(t))
        }), o.length && h(o, function (e) {
          return t.apiEvents.splice(e, 1)
        })
      }
    }, {
      key: "clearAllEvents", value: function () {
        this.apiEvents.splice(0, this.apiEvents.length)
      }
    }, {
      key: "version", value: function () {
        return "3.1.0"
      }
    }]), T);

  function T() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
    o(this, T), this.customOptions = e, this.settings = c(te, e), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1
  }

  return function () {
    var e = new ie(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
    return e.init(), e
  }
}), function (e, t) {
  "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.Headhesive = t()
}(this, function () {
  "use strict";

  function e(i, s) {
    function n() {
      d = l(), c = null, a = i.apply(r, o), r = o = null
    }

    var r, o, a, l = Date.now || function () {
      return (new Date).getTime()
    }, c = null, d = 0;
    return function () {
      var e = l(), t = s - (e - d);
      return r = this, o = arguments, t <= 0 ? (clearTimeout(c), c = null, d = e, a = i.apply(r, o), r = o = null) : c = c || setTimeout(n, t), a
    }
  }

  function t(e, t) {
    "querySelector" in document && "addEventListener" in window && (this.visible = !1, this.options = {
      offset: 300,
      offsetSide: "top",
      classes: {
        clone: "headhesive",
        stick: "headhesive--stick",
        unstick: "headhesive--unstick"
      },
      throttle: 250,
      onInit: function () {
      },
      onStick: function () {
      },
      onUnstick: function () {
      },
      onDestroy: function () {
      }
    }, this.elem = "string" == typeof e ? document.querySelector(e) : e, this.options = s(this.options, t), this.init())
  }

  var s = function (e, t) {
    for (var i in t) {
      t.hasOwnProperty(i) && (e[i] = "object" == typeof t[i] ? s(e[i], t[i]) : t[i]);
    }
    return e
  };
  return t.prototype = {
    constructor: t, init: function () {
      if (this.clonedElem = this.elem.cloneNode(!0), this.clonedElem.className += " " + this.options.classes.clone, document.body.insertBefore(this.clonedElem, document.body.firstChild), "number" == typeof this.options.offset) {
        this.scrollOffset = this.options.offset;
      }
      else {
        if ("string" != typeof this.options.offset) {
          throw new Error("Invalid offset: " + this.options.offset);
        }
        this._setScrollOffset()
      }
      this._throttleUpdate = e(this.update.bind(this), this.options.throttle), this._throttleScrollOffset = e(this._setScrollOffset.bind(this), this.options.throttle), window.addEventListener("scroll", this._throttleUpdate, !1), window.addEventListener("resize", this._throttleScrollOffset, !1), this.options.onInit.call(this)
    }, _setScrollOffset: function () {
      "string" == typeof this.options.offset && (this.scrollOffset = function (e, t) {
        for (var i = 0, s = e.offsetHeight; e;) {
          i += e.offsetTop, e = e.offsetParent;
        }
        return "bottom" === t && (i += s), i
      }(document.querySelector(this.options.offset), this.options.offsetSide))
    }, destroy: function () {
      document.body.removeChild(this.clonedElem), window.removeEventListener("scroll", this._throttleUpdate), window.removeEventListener("resize", this._throttleScrollOffset), this.options.onDestroy.call(this)
    }, stick: function () {
      this.visible || (this.clonedElem.className = this.clonedElem.className.replace(new RegExp("(^|\\s)*" + this.options.classes.unstick + "(\\s|$)*", "g"), ""), this.clonedElem.className += " " + this.options.classes.stick, this.visible = !0, this.options.onStick.call(this))
    }, unstick: function () {
      this.visible && (this.clonedElem.className = this.clonedElem.className.replace(new RegExp("(^|\\s)*" + this.options.classes.stick + "(\\s|$)*", "g"), ""), this.clonedElem.className += " " + this.options.classes.unstick, this.visible = !1, this.options.onUnstick.call(this))
    }, update: function () {
      (void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop) > this.scrollOffset ? this.stick() : this.unstick()
    }
  }, t
}), function (e, t) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
  function e() {
  }

  var t = e.prototype;
  return t.on = function (e, t) {
    var i;
    if (e && t) {
      return -1 == (i = (i = this._events = this._events || {})[e] = i[e] || []).indexOf(t) && i.push(t), this
    }
  }, t.once = function (e, t) {
    var i;
    if (e && t) {
      return this.on(e, t), ((i = this._onceEvents = this._onceEvents || {})[e] = i[e] || {})[t] = !0, this
    }
  }, t.off = function (e, t) {
    e = this._events && this._events[e];
    if (e && e.length) {
      return -1 != (t = e.indexOf(t)) && e.splice(t, 1), this
    }
  }, t.emitEvent = function (e, t) {
    var i = this._events && this._events[e];
    if (i && i.length) {
      i = i.slice(0), t = t || [];
      for (var s = this._onceEvents && this._onceEvents[e], n = 0; n < i.length; n++) {
        var r = i[n];
        s && s[r] && (this.off(e, r), delete s[r]), r.apply(this, t)
      }
      return this
    }
  }, t.allOff = function () {
    delete this._events, delete this._onceEvents
  }, e
}), function (t, i) {
  "use strict";
  "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (e) {
    return i(t, e)
  }) : "object" == typeof module && module.exports ? module.exports = i(t, require("ev-emitter")) : t.imagesLoaded = i(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, function (t, e) {
  function r(e, t) {
    for (var i in t) {
      e[i] = t[i];
    }
    return e
  }

  function o(e, t, i) {
    if (!(this instanceof o)) {
      return new o(e, t, i);
    }
    var s, n = e;
    return (n = "string" == typeof e ? document.querySelectorAll(e) : n) ? (this.elements = (s = n, Array.isArray(s) ? s : "object" == typeof s && "number" == typeof s.length ? c.call(s) : [s]), this.options = r({}, this.options), "function" == typeof t ? i = t : r(this.options, t), i && this.on("always", i), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(this.check.bind(this))) : void l.error("Bad element for imagesLoaded " + (n || e))
  }

  function i(e) {
    this.img = e
  }

  function s(e, t) {
    this.url = e, this.element = t, this.img = new Image
  }

  var a = t.jQuery, l = t.console, c = Array.prototype.slice,
    d = ((o.prototype = Object.create(e.prototype)).options = {}, o.prototype.getImages = function () {
      this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function (e) {
      "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
      var t = e.nodeType;
      if (t && d[t]) {
        for (var i = e.querySelectorAll("img"), s = 0; s < i.length; s++) {
          var n = i[s];
          this.addImage(n)
        }
        if ("string" == typeof this.options.background) {
          for (var r = e.querySelectorAll(this.options.background), s = 0; s < r.length; s++) {
            var o = r[s];
            this.addElementBackgroundImages(o)
          }
        }
      }
    }, {1: !0, 9: !0, 11: !0});
  return o.prototype.addElementBackgroundImages = function (e) {
    var t = getComputedStyle(e);
    if (t) {
      for (var i = /url\((['"])?(.*?)\1\)/gi, s = i.exec(t.backgroundImage); null !== s;) {
        var n = s && s[2];
        n && this.addBackground(n, e), s = i.exec(t.backgroundImage)
      }
    }
  }, o.prototype.addImage = function (e) {
    e = new i(e);
    this.images.push(e)
  }, o.prototype.addBackground = function (e, t) {
    e = new s(e, t);
    this.images.push(e)
  }, o.prototype.check = function () {
    function t(e, t, i) {
      setTimeout(function () {
        s.progress(e, t, i)
      })
    }

    var s = this;
    return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (e) {
      e.once("progress", t), e.check()
    }) : void this.complete()
  }, o.prototype.progress = function (e, t, i) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, e, t)
  }, o.prototype.complete = function () {
    var e = this.hasAnyBroken ? "fail" : "done";
    this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred && (e = this.hasAnyBroken ? "reject" : "resolve", this.jqDeferred[e](this))
  }, (i.prototype = Object.create(e.prototype)).check = function () {
    return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src))
  }, i.prototype.getIsImageComplete = function () {
    return this.img.complete && this.img.naturalWidth
  }, i.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
  }, i.prototype.handleEvent = function (e) {
    var t = "on" + e.type;
    this[t] && this[t](e)
  }, i.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents()
  }, i.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents()
  }, i.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, (s.prototype = Object.create(i.prototype)).check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
  }, s.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
  }, (o.makeJQueryPlugin = function (e) {
    (e = e || t.jQuery) && ((a = e).fn.imagesLoaded = function (e, t) {
      return new o(this, e, t).jqDeferred.promise(a(this))
    })
  })(), o
}), function (t, i) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (e) {
    return i(t, e)
  }) : "object" == typeof module && module.exports ? module.exports = i(t, require("jquery")) : t.jQueryBridget = i(t, t.jQuery)
}(window, function (e, t) {
  "use strict";

  function i(l, c, d) {
    (d = d || t || e.jQuery) && (c.prototype.option || (c.prototype.option = function (e) {
      d.isPlainObject(e) && (this.options = d.extend(!0, this.options, e))
    }), d.fn[l] = function (e) {
      var t, s, n, r, o, a;
      return "string" == typeof e ? (t = u.call(arguments, 1), n = t, o = "$()." + l + '("' + (s = e) + '")', (t = this).each(function (e, t) {
        var i, t = d.data(t, l);
        t ? (i = t[s]) && "_" != s.charAt(0) ? (i = i.apply(t, n), r = void 0 === r ? i : r) : h(o + " is not a valid method") : h(l + " not initialized. Cannot call methods, i.e. " + o)
      }), void 0 !== r ? r : t) : (a = e, this.each(function (e, t) {
        var i = d.data(t, l);
        i ? (i.option(a), i._init()) : (i = new c(t, a), d.data(t, l, i))
      }), this)
    }, s(d))
  }

  function s(e) {
    e && !e.bridget && (e.bridget = i)
  }

  var u = Array.prototype.slice, n = e.console, h = void 0 === n ? function () {
  } : function (e) {
    n.error(e)
  };
  return s(t || e.jQuery), i
}), function (e, t) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
  function e() {
  }

  var t = e.prototype;
  return t.on = function (e, t) {
    var i;
    if (e && t) {
      return -1 == (i = (i = this._events = this._events || {})[e] = i[e] || []).indexOf(t) && i.push(t), this
    }
  }, t.once = function (e, t) {
    var i;
    if (e && t) {
      return this.on(e, t), ((i = this._onceEvents = this._onceEvents || {})[e] = i[e] || {})[t] = !0, this
    }
  }, t.off = function (e, t) {
    e = this._events && this._events[e];
    if (e && e.length) {
      return -1 != (t = e.indexOf(t)) && e.splice(t, 1), this
    }
  }, t.emitEvent = function (e, t) {
    var i = this._events && this._events[e];
    if (i && i.length) {
      i = i.slice(0), t = t || [];
      for (var s = this._onceEvents && this._onceEvents[e], n = 0; n < i.length; n++) {
        var r = i[n];
        s && s[r] && (this.off(e, r), delete s[r]), r.apply(this, t)
      }
      return this
    }
  }, t.allOff = function () {
    delete this._events, delete this._onceEvents
  }, e
}), function (e, t) {
  "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, function () {
  "use strict";

  function g(e) {
    var t = parseFloat(e);
    return -1 == e.indexOf("%") && !isNaN(t) && t
  }

  function v(e) {
    e = getComputedStyle(e);
    return e || t("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
  }

  function y(e) {
    if (_ || (_ = !0, (d = document.createElement("div")).style.width = "200px", d.style.padding = "1px 2px 3px 4px", d.style.borderStyle = "solid", d.style.borderWidth = "1px 2px 3px 4px", d.style.boxSizing = "border-box", (c = document.body || document.documentElement).appendChild(d), r = v(d), b = 200 == Math.round(g(r.width)), y.isBoxSizeOuter = b, c.removeChild(d)), (e = "string" == typeof e ? document.querySelector(e) : e) && "object" == typeof e && e.nodeType) {
      var t = v(e);
      if ("none" == t.display) {
        for (var i = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        }, s = 0; s < x; s++) {
          i[w[s]] = 0;
        }
        return i
      }
      var n = {};
      n.width = e.offsetWidth, n.height = e.offsetHeight;
      for (var r = n.isBorderBox = "border-box" == t.boxSizing, o = 0; o < x; o++) {
        var a = w[o], l = t[a], l = parseFloat(l);
        n[a] = isNaN(l) ? 0 : l
      }
      var c = n.paddingLeft + n.paddingRight,
        d = n.paddingTop + n.paddingBottom, e = n.marginLeft + n.marginRight,
        u = n.marginTop + n.marginBottom,
        h = n.borderLeftWidth + n.borderRightWidth,
        p = n.borderTopWidth + n.borderBottomWidth, m = r && b, f = g(t.width),
        f = (!1 !== f && (n.width = f + (m ? 0 : c + h)), g(t.height));
      return !1 !== f && (n.height = f + (m ? 0 : d + p)), n.innerWidth = n.width - (c + h), n.innerHeight = n.height - (d + p), n.outerWidth = n.width + e, n.outerHeight = n.height + u, n
    }
    var d, c, r
  }

  var b, t = "undefined" == typeof console ? function () {
    } : function (e) {
      console.error(e)
    },
    w = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
    x = w.length, _ = !1;
  return y
}), function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, function () {
  "use strict";
  var i = function () {
    var e = window.Element.prototype;
    if (e.matches) {
      return "matches";
    }
    if (e.matchesSelector) {
      return "matchesSelector";
    }
    for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
      var s = t[i] + "MatchesSelector";
      if (e[s]) {
        return s
      }
    }
  }();
  return function (e, t) {
    return e[i](t)
  }
}), function (t, i) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (e) {
    return i(t, e)
  }) : "object" == typeof module && module.exports ? module.exports = i(t, require("desandro-matches-selector")) : t.fizzyUIUtils = i(t, t.matchesSelector)
}(window, function (i, r) {
  var l = {
    extend: function (e, t) {
      for (var i in t) {
        e[i] = t[i];
      }
      return e
    }, modulo: function (e, t) {
      return (e % t + t) % t
    }
  }, t = Array.prototype.slice, c = (l.makeArray = function (e) {
    return Array.isArray(e) ? e : null == e ? [] : "object" == typeof e && "number" == typeof e.length ? t.call(e) : [e]
  }, l.removeFrom = function (e, t) {
    t = e.indexOf(t);
    -1 != t && e.splice(t, 1)
  }, l.getParent = function (e, t) {
    for (; e.parentNode && e != document.body;) {
      if (e = e.parentNode, r(e, t)) {
        return e
      }
    }
  }, l.getQueryElement = function (e) {
    return "string" == typeof e ? document.querySelector(e) : e
  }, l.handleEvent = function (e) {
    var t = "on" + e.type;
    this[t] && this[t](e)
  }, l.filterFindElements = function (e, s) {
    e = l.makeArray(e);
    var n = [];
    return e.forEach(function (e) {
      if (e instanceof HTMLElement) {
        if (s) {
          r(e, s) && n.push(e);
          for (var t = e.querySelectorAll(s), i = 0; i < t.length; i++) {
            n.push(t[i])
          }
        }
        else {
          n.push(e)
        }
      }
    }), n
  }, l.debounceMethod = function (e, t, s) {
    s = s || 100;
    var n = e.prototype[t], r = t + "Timeout";
    e.prototype[t] = function () {
      var e = this[r], t = (clearTimeout(e), arguments), i = this;
      this[r] = setTimeout(function () {
        n.apply(i, t), delete i[r]
      }, s)
    }
  }, l.docReady = function (e) {
    var t = document.readyState;
    "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
  }, l.toDashed = function (e) {
    return e.replace(/(.)([A-Z])/g, function (e, t, i) {
      return t + "-" + i
    }).toLowerCase()
  }, i.console);
  return l.htmlInit = function (o, a) {
    l.docReady(function () {
      var e = l.toDashed(a), s = "data-" + e,
        t = document.querySelectorAll("[" + s + "]"),
        e = document.querySelectorAll(".js-" + e),
        t = l.makeArray(t).concat(l.makeArray(e)), n = s + "-options",
        r = i.jQuery;
      t.forEach(function (t) {
        var e, i = t.getAttribute(s) || t.getAttribute(n);
        try {
          e = i && JSON.parse(i)
        }
        catch (e) {
          return void (c && c.error("Error parsing " + s + " on " + t.className + ": " + e))
        }
        i = new o(t, e);
        r && r.data(t, a, i)
      })
    })
  }, l
}), function (e, t) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
}(window, function (e, t) {
  "use strict";

  function i(e, t) {
    e && (this.element = e, this.layout = t, this.position = {
      x: 0,
      y: 0
    }, this._create())
  }

  var s = document.documentElement.style,
    n = "string" == typeof s.transition ? "transition" : "WebkitTransition",
    s = "string" == typeof s.transform ? "transform" : "WebkitTransform", r = {
      WebkitTransition: "webkitTransitionEnd",
      transition: "transitionend"
    }[n], o = {
      transform: s,
      transition: n,
      transitionDuration: n + "Duration",
      transitionProperty: n + "Property",
      transitionDelay: n + "Delay"
    }, e = i.prototype = Object.create(e.prototype),
    a = (e.constructor = i, e._create = function () {
      this._transn = {
        ingProperties: {},
        clean: {},
        onEnd: {}
      }, this.css({position: "absolute"})
    }, e.handleEvent = function (e) {
      var t = "on" + e.type;
      this[t] && this[t](e)
    }, e.getSize = function () {
      this.size = t(this.element)
    }, e.css = function (e) {
      var t, i = this.element.style;
      for (t in e) {
        i[o[t] || t] = e[t]
      }
    }, e.getPosition = function () {
      var e = getComputedStyle(this.element),
        t = this.layout._getOption("originLeft"),
        i = this.layout._getOption("originTop"), s = e[t ? "left" : "right"],
        e = e[i ? "top" : "bottom"], n = parseFloat(s), r = parseFloat(e),
        o = this.layout.size;
      -1 != s.indexOf("%") && (n = n / 100 * o.width), -1 != e.indexOf("%") && (r = r / 100 * o.height), n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r, n -= t ? o.paddingLeft : o.paddingRight, r -= i ? o.paddingTop : o.paddingBottom, this.position.x = n, this.position.y = r
    }, e.layoutPosition = function () {
      var e = this.layout.size, t = {},
        i = this.layout._getOption("originLeft"),
        s = this.layout._getOption("originTop"), n = i ? "right" : "left",
        r = this.position.x + e[i ? "paddingLeft" : "paddingRight"],
        i = (t[i ? "left" : "right"] = this.getXValue(r), t[n] = "", s ? "paddingTop" : "paddingBottom"),
        r = s ? "bottom" : "top", n = this.position.y + e[i];
      t[s ? "top" : "bottom"] = this.getYValue(n), t[r] = "", this.css(t), this.emitEvent("layout", [this])
    }, e.getXValue = function (e) {
      var t = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
    }, e.getYValue = function (e) {
      var t = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
    }, e._transitionTo = function (e, t) {
      this.getPosition();
      var i = this.position.x, s = this.position.y,
        n = e == this.position.x && t == this.position.y;
      this.setPosition(e, t), n && !this.isTransitioning ? this.layoutPosition() : ((n = {}).transform = this.getTranslate(e - i, t - s), this.transition({
        to: n,
        onTransitionEnd: {transform: this.layoutPosition},
        isCleaning: !0
      }))
    }, e.getTranslate = function (e, t) {
      return "translate3d(" + (e = this.layout._getOption("originLeft") ? e : -e) + "px, " + (t = this.layout._getOption("originTop") ? t : -t) + "px, 0)"
    }, e.goTo = function (e, t) {
      this.setPosition(e, t), this.layoutPosition()
    }, e.moveTo = e._transitionTo, e.setPosition = function (e, t) {
      this.position.x = parseFloat(e), this.position.y = parseFloat(t)
    }, e._nonTransition = function (e) {
      for (var t in this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd) {
        e.onTransitionEnd[t].call(this)
      }
    }, e.transition = function (e) {
      if (parseFloat(this.layout.options.transitionDuration)) {
        var t, i = this._transn;
        for (t in e.onTransitionEnd) {
          i.onEnd[t] = e.onTransitionEnd[t];
        }
        for (t in e.to) {
          i.ingProperties[t] = !0, e.isCleaning && (i.clean[t] = !0);
        }
        e.from && (this.css(e.from), this.element.offsetHeight, 0), this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
      }
      else {
        this._nonTransition(e)
      }
    }, "opacity," + s.replace(/([A-Z])/g, function (e) {
      return "-" + e.toLowerCase()
    })), l = (e.enableTransition = function () {
      var e;
      this.isTransitioning || (e = "number" == typeof (e = this.layout.options.transitionDuration) ? e + "ms" : e, this.css({
        transitionProperty: a,
        transitionDuration: e,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(r, this, !1))
    }, e.onwebkitTransitionEnd = function (e) {
      this.ontransitionend(e)
    }, e.onotransitionend = function (e) {
      this.ontransitionend(e)
    }, {"-webkit-transform": "transform"}),
    c = (e.ontransitionend = function (e) {
      var t, i;
      e.target === this.element && (t = this._transn, i = l[e.propertyName] || e.propertyName, delete t.ingProperties[i], function (e) {
        for (var t in e) {
          return;
        }
        return 1
      }(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[i]), i in t.onEnd && (t.onEnd[i].call(this), delete t.onEnd[i]), this.emitEvent("transitionEnd", [this]))
    }, e.disableTransition = function () {
      this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1
    }, e._removeStyles = function (e) {
      var t, i = {};
      for (t in e) {
        i[t] = "";
      }
      this.css(i)
    }, {transitionProperty: "", transitionDuration: "", transitionDelay: ""});
  return e.removeTransitionStyles = function () {
    this.css(c)
  }, e.stagger = function (e) {
    e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
  }, e.removeElem = function () {
    this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
  }, e.remove = function () {
    return n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
      this.removeElem()
    }), void this.hide()) : void this.removeElem()
  }, e.reveal = function () {
    delete this.isHidden, this.css({display: ""});
    var e = this.layout.options, t = {};
    t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
      from: e.hiddenStyle,
      to: e.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: t
    })
  }, e.onRevealTransitionEnd = function () {
    this.isHidden || this.emitEvent("reveal")
  }, e.getHideRevealTransitionEndProperty = function (e) {
    var t, e = this.layout.options[e];
    if (e.opacity) {
      return "opacity";
    }
    for (t in e) {
      return t
    }
  }, e.hide = function () {
    this.isHidden = !0, this.css({display: ""});
    var e = this.layout.options, t = {};
    t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
      from: e.visibleStyle,
      to: e.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: t
    })
  }, e.onHideTransitionEnd = function () {
    this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
  }, e.destroy = function () {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    })
  }, i
}), function (n, r) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (e, t, i, s) {
    return r(n, e, t, i, s)
  }) : "object" == typeof module && module.exports ? module.exports = r(n, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : n.Outlayer = r(n, n.EvEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item)
}(window, function (e, t, n, s, r) {
  "use strict";

  function o(e, t) {
    var i = s.getQueryElement(e);
    i ? (this.element = i, c && (this.$element = c(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(t), t = ++d, this.element.outlayerGUID = t, (u[t] = this)._create(), this._getOption("initLayout") && this.layout()) : l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || e))
  }

  function a(e) {
    function t() {
      e.apply(this, arguments)
    }

    return (t.prototype = Object.create(e.prototype)).constructor = t
  }

  function i() {
  }

  var l = e.console, c = e.jQuery, d = 0, u = {},
    h = (o.namespace = "outlayer", o.Item = r, o.defaults = {
      containerStyle: {position: "relative"},
      initLayout: !0,
      originLeft: !0,
      originTop: !0,
      resize: !0,
      resizeContainer: !0,
      transitionDuration: "0.4s",
      hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
      visibleStyle: {opacity: 1, transform: "scale(1)"}
    }, o.prototype), p = (s.extend(h, t.prototype), h.option = function (e) {
      s.extend(this.options, e)
    }, h._getOption = function (e) {
      var t = this.constructor.compatOptions[e];
      return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
    }, o.compatOptions = {
      initLayout: "isInitLayout",
      horizontal: "isHorizontal",
      layoutInstant: "isLayoutInstant",
      originLeft: "isOriginLeft",
      originTop: "isOriginTop",
      resize: "isResizeBound",
      resizeContainer: "isResizingContainer"
    }, h._create = function () {
      this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, h.reloadItems = function () {
      this.items = this._itemize(this.element.children)
    }, h._itemize = function (e) {
      for (var t = this._filterFindItemElements(e), i = this.constructor.Item, s = [], n = 0; n < t.length; n++) {
        var r = new i(t[n], this);
        s.push(r)
      }
      return s
    }, h._filterFindItemElements = function (e) {
      return s.filterFindElements(e, this.options.itemSelector)
    }, h.getItemElements = function () {
      return this.items.map(function (e) {
        return e.element
      })
    }, h.layout = function () {
      this._resetLayout(), this._manageStamps();
      var e = this._getOption("layoutInstant"),
        e = void 0 !== e ? e : !this._isLayoutInited;
      this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, h._init = h.layout, h._resetLayout = function () {
      this.getSize()
    }, h.getSize = function () {
      this.size = n(this.element)
    }, h._getMeasurement = function (e, t) {
      var i, s = this.options[e];
      s ? ("string" == typeof s ? i = this.element.querySelector(s) : s instanceof HTMLElement && (i = s), this[e] = i ? n(i)[t] : s) : this[e] = 0
    }, h.layoutItems = function (e, t) {
      e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
    }, h._getItemsForLayout = function (e) {
      return e.filter(function (e) {
        return !e.isIgnored
      })
    }, h._layoutItems = function (e, i) {
      var s;
      this._emitCompleteOnItems("layout", e), e && e.length && (s = [], e.forEach(function (e) {
        var t = this._getItemLayoutPosition(e);
        t.item = e, t.isInstant = i || e.isLayoutInstant, s.push(t)
      }, this), this._processLayoutQueue(s))
    }, h._getItemLayoutPosition = function () {
      return {x: 0, y: 0}
    }, h._processLayoutQueue = function (e) {
      this.updateStagger(), e.forEach(function (e, t) {
        this._positionItem(e.item, e.x, e.y, e.isInstant, t)
      }, this)
    }, h.updateStagger = function () {
      var e = this.options.stagger;
      return null == e ? void (this.stagger = 0) : (this.stagger = function (e) {
        if ("number" == typeof e) {
          return e;
        }
        var t = (e = e.match(/(^\d*\.?\d*)(\w*)/)) && e[1], e = e && e[2];
        return t.length ? parseFloat(t) * (p[e] || 1) : 0
      }(e), this.stagger)
    }, h._positionItem = function (e, t, i, s, n) {
      s ? e.goTo(t, i) : (e.stagger(n * this.stagger), e.moveTo(t, i))
    }, h._postLayout = function () {
      this.resizeContainer()
    }, h.resizeContainer = function () {
      var e;
      this._getOption("resizeContainer") && (e = this._getContainerSize()) && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
    }, h._getContainerSize = i, h._setContainerMeasure = function (e, t) {
      var i;
      void 0 !== e && ((i = this.size).isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px")
    }, h._emitCompleteOnItems = function (t, e) {
      function i() {
        r.dispatchEvent(t + "Complete", null, [e])
      }

      function s() {
        ++n == o && i()
      }

      var n, r = this, o = e.length;
      e && o ? (n = 0, e.forEach(function (e) {
        e.once(t, s)
      })) : i()
    }, h.dispatchEvent = function (e, t, i) {
      var s = t ? [t].concat(i) : i;
      this.emitEvent(e, s), c && (this.$element = this.$element || c(this.element), t ? ((s = c.Event(t)).type = e, this.$element.trigger(s, i)) : this.$element.trigger(e, i))
    }, h.ignore = function (e) {
      e = this.getItem(e);
      e && (e.isIgnored = !0)
    }, h.unignore = function (e) {
      e = this.getItem(e);
      e && delete e.isIgnored
    }, h.stamp = function (e) {
      (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
    }, h.unstamp = function (e) {
      (e = this._find(e)) && e.forEach(function (e) {
        s.removeFrom(this.stamps, e), this.unignore(e)
      }, this)
    }, h._find = function (e) {
      if (e) {
        return "string" == typeof e && (e = this.element.querySelectorAll(e)), s.makeArray(e)
      }
    }, h._manageStamps = function () {
      this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, h._getBoundingRect = function () {
      var e = this.element.getBoundingClientRect(), t = this.size;
      this._boundingRect = {
        left: e.left + t.paddingLeft + t.borderLeftWidth,
        top: e.top + t.paddingTop + t.borderTopWidth,
        right: e.right - (t.paddingRight + t.borderRightWidth),
        bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
      }
    }, h._manageStamp = i, h._getElementOffset = function (e) {
      var t = e.getBoundingClientRect(), i = this._boundingRect, e = n(e);
      return {
        left: t.left - i.left - e.marginLeft,
        top: t.top - i.top - e.marginTop,
        right: i.right - t.right - e.marginRight,
        bottom: i.bottom - t.bottom - e.marginBottom
      }
    }, h.handleEvent = s.handleEvent, h.bindResize = function () {
      e.addEventListener("resize", this), this.isResizeBound = !0
    }, h.unbindResize = function () {
      e.removeEventListener("resize", this), this.isResizeBound = !1
    }, h.onresize = function () {
      this.resize()
    }, s.debounceMethod(o, "onresize", 100), h.resize = function () {
      this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, h.needsResizeLayout = function () {
      var e = n(this.element);
      return this.size && e && e.innerWidth !== this.size.innerWidth
    }, h.addItems = function (e) {
      e = this._itemize(e);
      return e.length && (this.items = this.items.concat(e)), e
    }, h.appended = function (e) {
      e = this.addItems(e);
      e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, h.prepended = function (e) {
      var t, e = this._itemize(e);
      e.length && (t = this.items.slice(0), this.items = e.concat(t), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(t))
    }, h.reveal = function (e) {
      var i;
      this._emitCompleteOnItems("reveal", e), e && e.length && (i = this.updateStagger(), e.forEach(function (e, t) {
        e.stagger(t * i), e.reveal()
      }))
    }, h.hide = function (e) {
      var i;
      this._emitCompleteOnItems("hide", e), e && e.length && (i = this.updateStagger(), e.forEach(function (e, t) {
        e.stagger(t * i), e.hide()
      }))
    }, h.revealItemElements = function (e) {
      e = this.getItems(e);
      this.reveal(e)
    }, h.hideItemElements = function (e) {
      e = this.getItems(e);
      this.hide(e)
    }, h.getItem = function (e) {
      for (var t = 0; t < this.items.length; t++) {
        var i = this.items[t];
        if (i.element == e) {
          return i
        }
      }
    }, h.getItems = function (e) {
      e = s.makeArray(e);
      var t = [];
      return e.forEach(function (e) {
        e = this.getItem(e);
        e && t.push(e)
      }, this), t
    }, h.remove = function (e) {
      e = this.getItems(e);
      this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (e) {
        e.remove(), s.removeFrom(this.items, e)
      }, this)
    }, h.destroy = function () {
      var e = this.element.style,
        e = (e.height = "", e.position = "", e.width = "", this.items.forEach(function (e) {
          e.destroy()
        }), this.unbindResize(), this.element.outlayerGUID);
      delete u[e], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
    }, o.data = function (e) {
      e = (e = s.getQueryElement(e)) && e.outlayerGUID;
      return e && u[e]
    }, o.create = function (e, t) {
      var i = a(o);
      return i.defaults = s.extend({}, o.defaults), s.extend(i.defaults, t), i.compatOptions = s.extend({}, o.compatOptions), i.namespace = e, i.data = o.data, i.Item = a(r), s.htmlInit(i, e), c && c.bridget && c.bridget(e, i), i
    }, {ms: 1, s: 1e3});
  return o.Item = r, o
}), function (e, t) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.Item = t(e.Outlayer))
}(window, function (e) {
  "use strict";

  function t() {
    e.Item.apply(this, arguments)
  }

  var i = t.prototype = Object.create(e.Item.prototype), s = i._create,
    n = (i._create = function () {
      this.id = this.layout.itemGUID++, s.call(this), this.sortData = {}
    }, i.updateSortData = function () {
      if (!this.isIgnored) {
        this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
        var e, t = this.layout.options.getSortData, i = this.layout._sorters;
        for (e in t) {
          var s = i[e];
          this.sortData[e] = s(this.element, this)
        }
      }
    }, i.destroy);
  return i.destroy = function () {
    n.apply(this, arguments), this.css({display: ""})
  }, t
}), function (e, t) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("get-size"), require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.LayoutMode = t(e.getSize, e.Outlayer))
}(window, function (t, i) {
  "use strict";

  function s(e) {
    (this.isotope = e) && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
  }

  var n = s.prototype;
  return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (e) {
    n[e] = function () {
      return i.prototype[e].apply(this.isotope, arguments)
    }
  }), n.needsVerticalResizeLayout = function () {
    var e = t(this.isotope.element);
    return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
  }, n._getMeasurement = function () {
    this.isotope._getMeasurement.apply(this, arguments)
  }, n.getColumnWidth = function () {
    this.getSegmentSize("column", "Width")
  }, n.getRowHeight = function () {
    this.getSegmentSize("row", "Height")
  }, n.getSegmentSize = function (e, t) {
    var i, e = e + t, s = "outer" + t;
    this._getMeasurement(e, s), this[e] || (i = this.getFirstItemSize(), this[e] = i && i[s] || this.isotope.size["inner" + t])
  }, n.getFirstItemSize = function () {
    var e = this.isotope.filteredItems[0];
    return e && e.element && t(e.element)
  }, n.layout = function () {
    this.isotope.layout.apply(this.isotope, arguments)
  }, n.getSize = function () {
    this.isotope.getSize(), this.size = this.isotope.size
  }, s.modes = {}, s.create = function (e, t) {
    function i() {
      s.apply(this, arguments)
    }

    return (i.prototype = Object.create(n)).constructor = i, t && (i.options = t), s.modes[i.prototype.namespace = e] = i
  }, s
}), function (e, t) {
  "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
}(window, function (e, a) {
  var e = e.create("masonry"),
    t = (e.compatOptions.fitWidth = "isFitWidth", e.prototype);
  return t._resetLayout = function () {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
    for (var e = 0; e < this.cols; e++) {
      this.colYs.push(0);
    }
    this.maxY = 0, this.horizontalColIndex = 0
  }, t.measureColumns = function () {
    this.getContainerWidth(), this.columnWidth || (e = (e = this.items[0]) && e.element, this.columnWidth = e && a(e).outerWidth || this.containerWidth);
    var e = this.columnWidth += this.gutter,
      t = this.containerWidth + this.gutter, i = t / e, t = e - t % e,
      i = Math[t && t < 1 ? "round" : "floor"](i);
    this.cols = Math.max(i, 1)
  }, t.getContainerWidth = function () {
    var e = this._getOption("fitWidth") ? this.element.parentNode : this.element,
      e = a(e);
    this.containerWidth = e && e.innerWidth
  }, t._getItemLayoutPosition = function (e) {
    e.getSize();
    for (var t = e.size.outerWidth % this.columnWidth, t = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth), t = Math.min(t, this.cols), i = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](t, e), s = {
      x: this.columnWidth * i.col,
      y: i.y
    }, n = i.y + e.size.outerHeight, r = t + i.col, o = i.col; o < r; o++) {
      this.colYs[o] = n;
    }
    return s
  }, t._getTopColPosition = function (e) {
    var e = this._getTopColGroup(e), t = Math.min.apply(Math, e);
    return {col: e.indexOf(t), y: t}
  }, t._getTopColGroup = function (e) {
    if (e < 2) {
      return this.colYs;
    }
    for (var t = [], i = this.cols + 1 - e, s = 0; s < i; s++) {
      t[s] = this._getColGroupY(s, e);
    }
    return t
  }, t._getColGroupY = function (e, t) {
    if (t < 2) {
      return this.colYs[e];
    }
    e = this.colYs.slice(e, e + t);
    return Math.max.apply(Math, e)
  }, t._getHorizontalColPosition = function (e, t) {
    var i = this.horizontalColIndex % this.cols,
      i = 1 < e && i + e > this.cols ? 0 : i,
      t = t.size.outerWidth && t.size.outerHeight;
    return this.horizontalColIndex = t ? i + e : this.horizontalColIndex, {
      col: i,
      y: this._getColGroupY(i, e)
    }
  }, t._manageStamp = function (e) {
    var t = a(e), e = this._getElementOffset(e),
      i = this._getOption("originLeft") ? e.left : e.right,
      s = i + t.outerWidth, i = Math.floor(i / this.columnWidth),
      i = Math.max(0, i), n = Math.floor(s / this.columnWidth);
    n -= s % this.columnWidth ? 0 : 1;
    for (var n = Math.min(this.cols - 1, n), r = (this._getOption("originTop") ? e.top : e.bottom) + t.outerHeight, o = i; o <= n; o++) {
      this.colYs[o] = Math.max(r, this.colYs[o])
    }
  }, t._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    var e = {height: this.maxY};
    return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
  }, t._getContainerFitWidth = function () {
    for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) {
      e++;
    }
    return (this.cols - e) * this.columnWidth - this.gutter
  }, t.needsResizeLayout = function () {
    var e = this.containerWidth;
    return this.getContainerWidth(), e != this.containerWidth
  }, e
}), function (e, t) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(e.Isotope.LayoutMode, e.Masonry)
}(window, function (e, t) {
  "use strict";
  var i, e = e.create("masonry"), s = e.prototype,
    n = {_getElementOffset: !0, layout: !0, _getMeasurement: !0};
  for (i in t.prototype) {
    n[i] || (s[i] = t.prototype[i]);
  }
  var r = s.measureColumns, o = (s.measureColumns = function () {
    this.items = this.isotope.filteredItems, r.call(this)
  }, s._getOption);
  return s._getOption = function (e) {
    return "fitWidth" == e ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : o.apply(this.isotope, arguments)
  }, e
}), function (e, t) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, function (e) {
  "use strict";
  var e = e.create("fitRows"), t = e.prototype;
  return t._resetLayout = function () {
    this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
  }, t._getItemLayoutPosition = function (e) {
    e.getSize();
    var t = e.size.outerWidth + this.gutter,
      i = this.isotope.size.innerWidth + this.gutter,
      i = (0 !== this.x && t + this.x > i && (this.x = 0, this.y = this.maxY), {
        x: this.x,
        y: this.y
      });
    return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight), this.x += t, i
  }, t._getContainerSize = function () {
    return {height: this.maxY}
  }, e
}), function (e, t) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, function (e) {
  "use strict";
  var e = e.create("vertical", {horizontalAlignment: 0}), t = e.prototype;
  return t._resetLayout = function () {
    this.y = 0
  }, t._getItemLayoutPosition = function (e) {
    e.getSize();
    var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment,
      i = this.y;
    return this.y += e.size.outerHeight, {x: t, y: i}
  }, t._getContainerSize = function () {
    return {height: this.y}
  }, e
}), function (o, a) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (e, t, i, s, n, r) {
    return a(o, e, 0, i, s, n, r)
  }) : "object" == typeof module && module.exports ? module.exports = a(o, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : o.Isotope = a(o, o.Outlayer, o.getSize, o.matchesSelector, o.fizzyUIUtils, o.Isotope.Item, o.Isotope.LayoutMode)
}(window, function (e, i, t, s, r, n, o) {
  var a = e.jQuery, l = String.prototype.trim ? function (e) {
      return e.trim()
    } : function (e) {
      return e.replace(/^\s+|\s+$/g, "")
    }, c = i.create("isotope", {
      layoutMode: "masonry",
      isJQueryFiltering: !0,
      sortAscending: !0
    }), e = (c.Item = n, c.LayoutMode = o, c.prototype),
    d = (e._create = function () {
      for (var e in this.itemGUID = 0, this._sorters = {}, this._getSorters(), i.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], o.modes) {
        this._initLayoutMode(e)
      }
    }, e.reloadItems = function () {
      this.itemGUID = 0, i.prototype.reloadItems.call(this)
    }, e._itemize = function () {
      for (var e = i.prototype._itemize.apply(this, arguments), t = 0; t < e.length; t++) {
        e[t].id = this.itemGUID++;
      }
      return this._updateItemsSortData(e), e
    }, e._initLayoutMode = function (e) {
      var t = o.modes[e], i = this.options[e] || {};
      this.options[e] = t.options ? r.extend(t.options, i) : i, this.modes[e] = new t(this)
    }, e.layout = function () {
      return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, e._layout = function () {
      var e = this._getIsInstant();
      this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, e), this._isLayoutInited = !0
    }, e.arrange = function (e) {
      this.option(e), this._getIsInstant();
      e = this._filter(this.items);
      this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, e._init = e.arrange, e._hideReveal = function (e) {
      this.reveal(e.needReveal), this.hide(e.needHide)
    }, e._getIsInstant = function () {
      var e = this._getOption("layoutInstant"),
        e = void 0 !== e ? e : !this._isLayoutInited;
      return this._isInstant = e
    }, e._bindArrangeComplete = function () {
      function e() {
        t && i && s && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
      }

      var t, i, s, n = this;
      this.once("layoutComplete", function () {
        t = !0, e()
      }), this.once("hideComplete", function () {
        i = !0, e()
      }), this.once("revealComplete", function () {
        s = !0, e()
      })
    }, e._filter = function (e) {
      for (var t = this.options.filter, i = [], s = [], n = [], r = this._getFilterTest(t || "*"), o = 0; o < e.length; o++) {
        var a, l = e[o];
        l.isIgnored || ((a = r(l)) && i.push(l), a && l.isHidden ? s.push(l) : a || l.isHidden || n.push(l))
      }
      return {matches: i, needReveal: s, needHide: n}
    }, e._getFilterTest = function (t) {
      return a && this.options.isJQueryFiltering ? function (e) {
        return a(e.element).is(t)
      } : "function" == typeof t ? function (e) {
        return t(e.element)
      } : function (e) {
        return s(e.element, t)
      }
    }, e.updateSortData = function (e) {
      e = e ? (e = r.makeArray(e), this.getItems(e)) : this.items;
      this._getSorters(), this._updateItemsSortData(e)
    }, e._getSorters = function () {
      var e, t = this.options.getSortData;
      for (e in t) {
        var i = t[e];
        this._sorters[e] = d(i)
      }
    }, e._updateItemsSortData = function (e) {
      for (var t = e && e.length, i = 0; t && i < t; i++) {
        e[i].updateSortData()
      }
    }, function (e) {
      if ("string" != typeof e) {
        return e;
      }
      var t, i, s = (e = l(e).split(" "))[0],
        n = (n = s.match(/^\[(.+)\]$/)) && n[1],
        r = (i = s, (t = n) ? function (e) {
          return e.getAttribute(t)
        } : function (e) {
          e = e.querySelector(i);
          return e && e.textContent
        }), o = c.sortDataParsers[e[1]];
      return o ? function (e) {
        return e && o(r(e))
      } : function (e) {
        return e && r(e)
      }
    }), u = (c.sortDataParsers = {
      parseInt: function (e) {
        return parseInt(e, 10)
      }, parseFloat: function (e) {
        return parseFloat(e)
      }
    }, e._sort = function () {
      var e, o, a;
      this.options.sortBy && (e = r.makeArray(this.options.sortBy), this._getIsSameSortBy(e) || (this.sortHistory = e.concat(this.sortHistory)), o = this.sortHistory, a = this.options.sortAscending, this.filteredItems.sort(function (e, t) {
        for (var i = 0; i < o.length; i++) {
          var s = o[i], n = e.sortData[s], r = t.sortData[s];
          if (r < n || n < r) {
            return (r < n ? 1 : -1) * ((void 0 !== a[s] ? a[s] : a) ? 1 : -1)
          }
        }
        return 0
      }))
    }, e._getIsSameSortBy = function (e) {
      for (var t = 0; t < e.length; t++) {
        if (e[t] != this.sortHistory[t]) {
          return !1;
        }
      }
      return !0
    }, e._mode = function () {
      var e = this.options.layoutMode, t = this.modes[e];
      if (t) {
        return t.options = this.options[e], t;
      }
      throw new Error("No layout mode: " + e)
    }, e._resetLayout = function () {
      i.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, e._getItemLayoutPosition = function (e) {
      return this._mode()._getItemLayoutPosition(e)
    }, e._manageStamp = function (e) {
      this._mode()._manageStamp(e)
    }, e._getContainerSize = function () {
      return this._mode()._getContainerSize()
    }, e.needsResizeLayout = function () {
      return this._mode().needsResizeLayout()
    }, e.appended = function (e) {
      var e = this.addItems(e);
      e.length && (e = this._filterRevealAdded(e), this.filteredItems = this.filteredItems.concat(e))
    }, e.prepended = function (e) {
      var t, e = this._itemize(e);
      e.length && (this._resetLayout(), this._manageStamps(), t = this._filterRevealAdded(e), this.layoutItems(this.filteredItems), this.filteredItems = t.concat(this.filteredItems), this.items = e.concat(this.items))
    }, e._filterRevealAdded = function (e) {
      e = this._filter(e);
      return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, e.insert = function (e) {
      var t = this.addItems(e);
      if (t.length) {
        for (var i, s = t.length, n = 0; n < s; n++) {
          i = t[n], this.element.appendChild(i.element);
        }
        e = this._filter(t).matches;
        for (n = 0; n < s; n++) {
          t[n].isLayoutInstant = !0;
        }
        for (this.arrange(), n = 0; n < s; n++) {
          delete t[n].isLayoutInstant;
        }
        this.reveal(e)
      }
    }, e.remove);
  return e.remove = function (e) {
    e = r.makeArray(e);
    var t = this.getItems(e);
    u.call(this, e);
    for (var i = t && t.length, s = 0; i && s < i; s++) {
      var n = t[s];
      r.removeFrom(this.filteredItems, n)
    }
  }, e.shuffle = function () {
    for (var e = 0; e < this.items.length; e++) {
      this.items[e].sortData.random = Math.random();
    }
    this.options.sortBy = "random", this._sort(), this._layout()
  }, e._noTransition = function (e, t) {
    var i = this.options.transitionDuration,
      e = (this.options.transitionDuration = 0, e.apply(this, t));
    return this.options.transitionDuration = i, e
  }, e.getFilteredItemElements = function () {
    return this.filteredItems.map(function (e) {
      return e.element
    })
  }, c
});

class DoubleCenterException {
  constructor() {
    window.console.error('iTooltip Error: positionX and positionY properties cannot be "center" at the same time.')
  }
}

class iTooltip {
  constructor(e = "*") {
    this.objects = document.querySelectorAll("*" !== e ? e : "*[title]")
  }

  init(e = {}) {
    if (this.settings = Object.assign({
      className: "tooltip",
      indentX: 10,
      indentY: 15,
      positionX: "right",
      positionY: "bottom"
    }, e), "center" === this.settings.positionX && "center" === this.settings.positionY) {
      throw new DoubleCenterException;
    }
    this.objects.forEach(e => {
      e.getAttribute("title") && (e.addEventListener("mouseenter", e => this.createTooltip(e)), e.addEventListener("mouseleave", e => this.removeTooltip(e)))
    })
  }

  createTooltip(e) {
    const t = e.target;
    this.tooltip = document.createElement("div"), this.tooltip.classList.add(this.settings.className), this.tooltip.innerHTML = t.getAttribute("title");
    var i = e.target.className.split(" ").find(e => e.startsWith("itooltip-"));
    i && this.tooltip.classList.add(i), this.tooltip.style.position = "absolute", this.changePosition(e), t.removeAttribute("title"), document.body.appendChild(this.tooltip), t.addEventListener("mousemove", e => this.changePosition(e))
  }

  removeTooltip(e) {
    e.target.setAttribute("title", this.tooltip.innerHTML), this.tooltip.remove()
  }

  changePosition(e) {
    var [t, i] = this.getSizeTooltip(), s = this.getEdges(e),
      n = window.pageYOffset || document.documentElement.scrollTop;
    let r = e.pageY, o = void e.pageX;
    if (o = "right" === this.settings.positionX ? s.right <= t ? e.clientX - t - this.settings.indentX : e.clientX + this.settings.indentX : "left" === this.settings.positionX ? s.left <= t ? s.left + this.settings.indentX : e.clientX - t - this.settings.indentX : s.left <= Math.round(t / 2) ? e.clientX - s.left : e.clientX - Math.round(t / 2), "top" === this.settings.positionY) {
      r = s.top <= i ? n + e.clientY + this.settings.indentY : e.pageY - i - this.settings.indentY;
    }
    else if ("bottom" === this.settings.positionY) {
      r = s.bottom < i && s.top > i + this.settings.indentY ? e.pageY - i - this.settings.indentY : n + e.clientY + this.settings.indentY;
    }
    else {
      let e = Math.round(i / 2);
      s.bottom <= e && (e = Math.round(i - s.bottom)), s.top <= e && (e = s.top), r -= e
    }
    this.tooltip.style.top = r + "px", this.tooltip.style.left = o + "px"
  }

  getSizeTooltip() {
    var e = this.tooltip.getBoundingClientRect();
    return [e.right - e.left, e.bottom - e.top]
  }

  getEdges(e) {
    var t = document.documentElement;
    return {
      left: e.clientX,
      right: t.clientWidth - e.clientX,
      top: e.clientY,
      bottom: t.clientHeight - e.clientY
    }
  }
}

!function () {
  "use strict";

  function t(e) {
    if (!e) {
      throw new Error("No options passed to Waypoint constructor");
    }
    if (!e.element) {
      throw new Error("No element option passed to Waypoint constructor");
    }
    if (!e.handler) {
      throw new Error("No handler option passed to Waypoint constructor");
    }
    this.key = "waypoint-" + i, this.options = t.Adapter.extend({}, t.defaults, e), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = e.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), r[this.key] = this, i += 1
  }

  var i = 0, r = {};
  t.prototype.queueTrigger = function (e) {
    this.group.queueTrigger(this, e)
  }, t.prototype.trigger = function (e) {
    this.enabled && this.callback && this.callback.apply(this, e)
  }, t.prototype.destroy = function () {
    this.context.remove(this), this.group.remove(this), delete r[this.key]
  }, t.prototype.disable = function () {
    return this.enabled = !1, this
  }, t.prototype.enable = function () {
    return this.context.refresh(), this.enabled = !0, this
  }, t.prototype.next = function () {
    return this.group.next(this)
  }, t.prototype.previous = function () {
    return this.group.previous(this)
  }, t.invokeAll = function (e) {
    var t, i = [];
    for (t in r) {
      i.push(r[t]);
    }
    for (var s = 0, n = i.length; s < n; s++) {
      i[s][e]()
    }
  }, t.destroyAll = function () {
    t.invokeAll("destroy")
  }, t.disableAll = function () {
    t.invokeAll("disable")
  }, t.enableAll = function () {
    for (var e in t.Context.refreshAll(), r) {
      r[e].enabled = !0;
    }
    return this
  }, t.refreshAll = function () {
    t.Context.refreshAll()
  }, t.viewportHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight
  }, t.viewportWidth = function () {
    return document.documentElement.clientWidth
  }, t.adapters = [], t.defaults = {
    context: window,
    continuous: !0,
    enabled: !0,
    group: "default",
    horizontal: !1,
    offset: 0
  }, t.offsetAliases = {
    "bottom-in-view": function () {
      return this.context.innerHeight() - this.adapter.outerHeight()
    }, "right-in-view": function () {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }, window.Waypoint = t
}(), function () {
  "use strict";

  function t(e) {
    window.setTimeout(e, 1e3 / 60)
  }

  function i(e) {
    this.element = e, this.Adapter = p.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + s, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }, this.waypoints = {
      vertical: {},
      horizontal: {}
    }, e.waypointContextKey = this.key, n[e.waypointContextKey] = this, s += 1, p.windowContext || (p.windowContext = !0, p.windowContext = new i(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
  }

  var s = 0, n = {}, p = window.Waypoint, e = window.onload;
  i.prototype.add = function (e) {
    var t = e.options.horizontal ? "horizontal" : "vertical";
    this.waypoints[t][e.key] = e, this.refresh()
  }, i.prototype.checkEmpty = function () {
    var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
      t = this.Adapter.isEmptyObject(this.waypoints.vertical),
      i = this.element == this.element.window;
    e && t && !i && (this.adapter.off(".waypoints"), delete n[this.key])
  }, i.prototype.createThrottledResizeHandler = function () {
    function e() {
      t.handleResize(), t.didResize = !1
    }

    var t = this;
    this.adapter.on("resize.waypoints", function () {
      t.didResize || (t.didResize = !0, p.requestAnimationFrame(e))
    })
  }, i.prototype.createThrottledScrollHandler = function () {
    function e() {
      t.handleScroll(), t.didScroll = !1
    }

    var t = this;
    this.adapter.on("scroll.waypoints", function () {
      t.didScroll && !p.isTouch || (t.didScroll = !0, p.requestAnimationFrame(e))
    })
  }, i.prototype.handleResize = function () {
    p.Context.refreshAll()
  }, i.prototype.handleScroll = function () {
    var e, t, i = {}, s = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: "right",
        backward: "left"
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: "down",
        backward: "up"
      }
    };
    for (e in s) {
      var n, r = s[e], o = r.newScroll > r.oldScroll ? r.forward : r.backward;
      for (n in this.waypoints[e]) {
        var a, l, c = this.waypoints[e][n];
        null !== c.triggerPoint && (a = r.oldScroll < c.triggerPoint, l = r.newScroll >= c.triggerPoint, (a && l || !a && !l) && (c.queueTrigger(o), i[c.group.id] = c.group))
      }
    }
    for (t in i) {
      i[t].flushTriggers();
    }
    this.oldScroll = {x: s.horizontal.newScroll, y: s.vertical.newScroll}
  }, i.prototype.innerHeight = function () {
    return this.element == this.element.window ? p.viewportHeight() : this.adapter.innerHeight()
  }, i.prototype.remove = function (e) {
    delete this.waypoints[e.axis][e.key], this.checkEmpty()
  }, i.prototype.innerWidth = function () {
    return this.element == this.element.window ? p.viewportWidth() : this.adapter.innerWidth()
  }, i.prototype.destroy = function () {
    var e, t = [];
    for (e in this.waypoints) {
      for (var i in this.waypoints[e]) {
        t.push(this.waypoints[e][i]);
      }
    }
    for (var s = 0, n = t.length; s < n; s++) {
      t[s].destroy()
    }
  }, i.prototype.refresh = function () {
    var e, t, i = this.element == this.element.window,
      s = i ? void 0 : this.adapter.offset(), n = {};
    for (t in this.handleScroll(), e = {
      horizontal: {
        contextOffset: i ? 0 : s.left,
        contextScroll: i ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: "right",
        backward: "left",
        offsetProp: "left"
      },
      vertical: {
        contextOffset: i ? 0 : s.top,
        contextScroll: i ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: "down",
        backward: "up",
        offsetProp: "top"
      }
    }) {
      var r, o = e[t];
      for (r in this.waypoints[t]) {
        var a, l = this.waypoints[t][r], c = l.options.offset,
          d = l.triggerPoint, u = 0, h = null == d;
        l.element !== l.element.window && (u = l.adapter.offset()[o.offsetProp]), "function" == typeof c ? c = c.apply(l) : "string" == typeof c && (c = parseFloat(c), -1 < l.options.offset.indexOf("%") && (c = Math.ceil(o.contextDimension * c / 100))), a = o.contextScroll - o.contextOffset, l.triggerPoint = Math.floor(u + a - c), u = d < o.oldScroll, a = l.triggerPoint >= o.oldScroll, c = !u && !a, !h && (u && a) ? (l.queueTrigger(o.backward), n[l.group.id] = l.group) : (!h && c || h && o.oldScroll >= l.triggerPoint) && (l.queueTrigger(o.forward), n[l.group.id] = l.group)
      }
    }
    return p.requestAnimationFrame(function () {
      for (var e in n) {
        n[e].flushTriggers()
      }
    }), this
  }, i.findOrCreateByElement = function (e) {
    return i.findByElement(e) || new i(e)
  }, i.refreshAll = function () {
    for (var e in n) {
      n[e].refresh()
    }
  }, i.findByElement = function (e) {
    return n[e.waypointContextKey]
  }, window.onload = function () {
    e && e(), i.refreshAll()
  }, p.requestAnimationFrame = function (e) {
    (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
  }, p.Context = i
}(), function () {
  "use strict";

  function r(e, t) {
    return e.triggerPoint - t.triggerPoint
  }

  function o(e, t) {
    return t.triggerPoint - e.triggerPoint
  }

  function t(e) {
    this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
  }

  var i = {vertical: {}, horizontal: {}}, s = window.Waypoint;
  t.prototype.add = function (e) {
    this.waypoints.push(e)
  }, t.prototype.clearTriggerQueues = function () {
    this.triggerQueues = {up: [], down: [], left: [], right: []}
  }, t.prototype.flushTriggers = function () {
    for (var e in this.triggerQueues) {
      var t = this.triggerQueues[e];
      t.sort("up" === e || "left" === e ? o : r);
      for (var i = 0, s = t.length; i < s; i += 1) {
        var n = t[i];
        !n.options.continuous && i !== t.length - 1 || n.trigger([e])
      }
    }
    this.clearTriggerQueues()
  }, t.prototype.next = function (e) {
    this.waypoints.sort(r);
    e = s.Adapter.inArray(e, this.waypoints);
    return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1]
  }, t.prototype.previous = function (e) {
    this.waypoints.sort(r);
    e = s.Adapter.inArray(e, this.waypoints);
    return e ? this.waypoints[e - 1] : null
  }, t.prototype.queueTrigger = function (e, t) {
    this.triggerQueues[t].push(e)
  }, t.prototype.remove = function (e) {
    e = s.Adapter.inArray(e, this.waypoints);
    -1 < e && this.waypoints.splice(e, 1)
  }, t.prototype.first = function () {
    return this.waypoints[0]
  }, t.prototype.last = function () {
    return this.waypoints[this.waypoints.length - 1]
  }, t.findOrCreate = function (e) {
    return i[e.axis][e.name] || new t(e)
  }, s.Group = t
}(), function () {
  "use strict";

  function i(e) {
    return e === e.window
  }

  function s(e) {
    return i(e) ? e : e.defaultView
  }

  function e(e) {
    this.element = e, this.handlers = {}
  }

  var t = window.Waypoint;
  e.prototype.innerHeight = function () {
    return i(this.element) ? this.element.innerHeight : this.element.clientHeight
  }, e.prototype.innerWidth = function () {
    return i(this.element) ? this.element.innerWidth : this.element.clientWidth
  }, e.prototype.off = function (e, t) {
    function i(e, t, i) {
      for (var s = 0, n = t.length - 1; s < n; s++) {
        var r = t[s];
        i && i !== r || e.removeEventListener(r)
      }
    }

    var e = e.split("."), s = e[0], n = e[1], r = this.element;
    if (n && this.handlers[n] && s) {
      i(r, this.handlers[n][s], t), this.handlers[n][s] = [];
    }
    else if (s) {
      for (var o in this.handlers) {
        i(r, this.handlers[o][s] || [], t), this.handlers[o][s] = [];
      }
    }
    else if (n && this.handlers[n]) {
      for (var a in this.handlers[n]) {
        i(r, this.handlers[n][a], t);
      }
      this.handlers[n] = {}
    }
  }, e.prototype.offset = function () {
    if (!this.element.ownerDocument) {
      return null;
    }
    var e = this.element.ownerDocument.documentElement,
      t = s(this.element.ownerDocument), i = {top: 0, left: 0};
    return {
      top: (i = this.element.getBoundingClientRect ? this.element.getBoundingClientRect() : i).top + t.pageYOffset - e.clientTop,
      left: i.left + t.pageXOffset - e.clientLeft
    }
  }, e.prototype.on = function (e, t) {
    var e = e.split("."), i = e[0], e = e[1] || "__default",
      e = this.handlers[e] = this.handlers[e] || {};
    (e[i] = e[i] || []).push(t), this.element.addEventListener(i, t)
  }, e.prototype.outerHeight = function (e) {
    var t = this.innerHeight();
    return e && !i(this.element) && (e = window.getComputedStyle(this.element), t = (t += parseInt(e.marginTop, 10)) + parseInt(e.marginBottom, 10)), t
  }, e.prototype.outerWidth = function (e) {
    var t = this.innerWidth();
    return e && !i(this.element) && (e = window.getComputedStyle(this.element), t = (t += parseInt(e.marginLeft, 10)) + parseInt(e.marginRight, 10)), t
  }, e.prototype.scrollLeft = function () {
    var e = s(this.element);
    return e ? e.pageXOffset : this.element.scrollLeft
  }, e.prototype.scrollTop = function () {
    var e = s(this.element);
    return e ? e.pageYOffset : this.element.scrollTop
  }, e.extend = function () {
    for (var e = Array.prototype.slice.call(arguments), t = 1, i = e.length; t < i; t++) {
      s = void 0;
      n = void 0;
      r = void 0;
      var s = e[0];
      var n = e[t];
      if ("object" == typeof s && "object" == typeof n) {
        for (var r in n) {
          n.hasOwnProperty(r) && (s[r] = n[r])
        }
      }
    }
    return e[0]
  }, e.inArray = function (e, t, i) {
    return null == t ? -1 : t.indexOf(e, i)
  }, e.isEmptyObject = function (e) {
    for (var t in e) {
      return !1;
    }
    return !0
  }, t.adapters.push({name: "noframework", Adapter: e}), t.Adapter = e
}(), function (e) {
  var t, n, i, s, r = navigator.userAgent;

  function o() {
    clearTimeout(t), t = setTimeout(i, 99)
  }

  function a() {
    o(), s && s.addListener && s.addListener(o)
  }

  e.HTMLPictureElement && /ecko/.test(r) && r.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", (n = document.createElement("source"), i = function () {
    for (var e = document.querySelectorAll("picture > img, img[srcset][sizes]"), t = 0; t < e.length; t++) {
      !function (e) {
        var t, i, s = e.parentNode;
        "PICTURE" === s.nodeName.toUpperCase() ? (t = n.cloneNode(), s.insertBefore(t, s.firstElementChild), setTimeout(function () {
          s.removeChild(t)
        })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, i = e.sizes, e.sizes += ",100vw", setTimeout(function () {
          e.sizes = i
        }))
      }(e[t])
    }
  }, s = e.matchMedia && matchMedia("(orientation: landscape)"), n.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a), o))
}(window), function (e, r) {
  "use strict";

  function m(e) {
    return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e
  }

  function D(e, t) {
    return e.res - t.res
  }

  function w(e, t) {
    var i, s, n;
    if (e && t) {
      for (n = _.parseSet(t), e = _.makeUrl(e), i = 0; i < n.length; i++) {
        if (e === _.makeUrl(n[i].url)) {
          s = n[i];
          break
        }
      }
    }
    return s
  }

  function j(t, d) {
    function e(e) {
      var e = e.exec(t.substring(a));
      return e ? (e = e[0], a += e.length, e) : void 0
    }

    function i() {
      for (var e, t, i, s, n, r, o, a = !1, l = {}, c = 0; c < h.length; c++) {
        s = (n = h[c])[n.length - 1], n = n.substring(0, n.length - 1), r = parseInt(n, 10), o = parseFloat(n), ne.test(n) && "w" === s ? ((e || t) && (a = !0), 0 === r ? a = !0 : e = r) : re.test(n) && "x" === s ? ((e || t || i) && (a = !0), o < 0 ? a = !0 : t = o) : ne.test(n) && "h" === s ? ((i || t) && (a = !0), 0 === r ? a = !0 : i = r) : a = !0;
      }
      a || (l.url = u, e && (l.w = e), t && (l.d = t), i && (l.h = i), i || t || e || (l.d = 1), 1 === l.d && (d.has1x = !0), l.set = d, p.push(l))
    }

    for (var u, h, s, n, r, o = t.length, a = 0, p = []; ;) {
      if (e(te), o <= a) {
        return p;
      }
      u = e(ie), h = [], "," === u.slice(-1) ? (u = u.replace(se, ""), i()) : function () {
        for (e(ee), s = "", n = "in descriptor"; ;) {
          if (r = t.charAt(a), "in descriptor" === n) {
            if (m(r)) {
              s && (h.push(s), s = "", n = "after descriptor");
            }
            else {
              if ("," === r) {
                return a += 1, s && h.push(s), i();
              }
              if ("(" === r) {
                s += r, n = "in parens";
              }
              else {
                if ("" === r) {
                  return s && h.push(s), i();
                }
                s += r
              }
            }
          }
          else if ("in parens" === n) {
            if (")" === r) {
              s += r, n = "in descriptor";
            }
            else {
              if ("" === r) {
                return h.push(s), i();
              }
              s += r
            }
          }
          else if ("after descriptor" === n && !m(r)) {
            if ("" === r) {
              return i();
            }
            n = "in descriptor", --a
          }
          a += 1
        }
      }()
    }
  }

  function N(e) {
    for (var t, i, s, n = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i, r = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i, o = function (e) {
      function t() {
        n && (r.push(n), n = "")
      }

      function i() {
        r[0] && (o.push(r), r = [])
      }

      for (var s, n = "", r = [], o = [], a = 0, l = 0, c = !1; ;) {
        if ("" === (s = e.charAt(l))) {
          return t(), i(), o;
        }
        if (c) {
          "*" === s && "/" === e[l + 1] ? (c = !1, l += 2, t()) : l += 1;
        }
        else {
          if (m(s)) {
            if (e.charAt(l - 1) && m(e.charAt(l - 1)) || !n) {
              l += 1;
              continue
            }
            if (0 === a) {
              t(), l += 1;
              continue
            }
            s = " "
          }
          else if ("(" === s) {
            a += 1;
          }
          else if (")" === s) {
            --a;
          }
          else {
            if ("," === s) {
              t(), i(), l += 1;
              continue
            }
            if ("/" === s && "*" === e.charAt(l + 1)) {
              c = !0, l += 2;
              continue
            }
          }
          n += s, l += 1
        }
      }
    }(e), a = o.length, l = 0; l < a; l++) {
      if (i = (t = o[l])[t.length - 1], s = i, n.test(s) && 0 <= parseFloat(s) || (r.test(s) || ("0" === s || "-0" === s || "+0" === s))) {
        if (s = i, t.pop(), 0 === t.length) {
          return s;
        }
        if (t = t.join(" "), _.matchesMedia(t)) {
          return s
        }
      }
    }
    return "100vw"
  }

  r.createElement("picture");

  function t() {
  }

  function i(e, t, i, s) {
    e.addEventListener ? e.addEventListener(t, i, s || !1) : e.attachEvent && e.attachEvent("on" + t, i)
  }

  function s(t) {
    var i = {};
    return function (e) {
      return e in i || (i[e] = t(e)), i[e]
    }
  }

  function x(e, t) {
    return e.w ? (e.cWidth = _.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e
  }

  var n, F, o, H, q, B, R, a, l, W, Y, c, d, u, h, p, _ = {}, f = !1,
    g = r.createElement("img"), v = g.getAttribute, V = g.setAttribute,
    X = g.removeAttribute, y = r.documentElement, b = {}, T = {algorithm: ""},
    E = "data-pfsrc", G = E + "set", S = navigator.userAgent,
    U = /rident/.test(S) || /ecko/.test(S) && S.match(/rv\:(\d+)/) && 35 < RegExp.$1,
    C = "currentSrc", Q = /\s+\+?\d+(e\d+)?w/, K = /(\([^)]+\))?\s*(.+)/,
    k = e.picturefillCFG, Z = "font-size:100%!important;", A = !0, M = {},
    P = {}, I = e.devicePixelRatio, L = {px: 1, in: 96},
    J = r.createElement("a"), O = !1, ee = /^[ \t\n\r\u000c]+/,
    te = /^[, \t\n\r\u000c]+/, ie = /^[^ \t\n\r\u000c]+/, se = /[,]+$/,
    ne = /^\d+$/, re = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
    oe = (H = /^([\d\.]+)(em|vw|px)$/, q = s(function (e) {
      return "return " + function () {
        for (var e = arguments, t = 0, i = e[0]; ++t in e;) {
          i = i.replace(e[t], e[++t]);
        }
        return i
      }((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
    }), function (e, t) {
      var i;
      if (!(e in M)) {
        if (M[e] = !1, t && (i = e.match(H))) {
          M[e] = i[1] * L[i[2]];
        }
        else {
          try {
            M[e] = new Function("e", q(e))(L)
          }
          catch (e) {
          }
        }
      }
      return M[e]
    }), $ = function (e) {
      if (f) {
        var t, i, s, n = e || {};
        if (n.elements && 1 === n.elements.nodeType && ("IMG" === n.elements.nodeName.toUpperCase() ? n.elements = [n.elements] : (n.context = n.elements, n.elements = null)), s = (t = n.elements || _.qsa(n.context || r, n.reevaluate || n.reselect ? _.sel : _.selShort)).length) {
          for (_.setupRun(n), O = !0, i = 0; i < s; i++) {
            _.fillImg(t[i], n);
          }
          _.teardownRun(n)
        }
      }
    };

  function z() {
    var e = r.readyState || "";
    c = setTimeout(z, "loading" === e ? 200 : 999), r.body && (_.fillImgs(), (B = B || Y.test(e)) && clearTimeout(c))
  }

  function ae() {
    var e = new Date - W;
    e < a ? l = setTimeout(ae, a - e) : (l = null, R())
  }

  function le() {
    2 === u.width && (_.supSizes = !0), F = _.supSrcset && !_.supSizes, f = !0, setTimeout($)
  }

  e.console && console.warn, C in g || (C = "src"), b["image/jpeg"] = !0, b["image/gif"] = !0, b["image/png"] = !0, b["image/svg+xml"] = r.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), _.ns = ("pf" + (new Date).getTime()).substr(0, 9), _.supSrcset = "srcset" in g, _.supSizes = "sizes" in g, _.supPicture = !!e.HTMLPictureElement, _.supSrcset && _.supPicture && !_.supSizes && (S = r.createElement("img"), g.srcset = "data:,a", S.src = "data:,a", _.supSrcset = g.complete === S.complete, _.supPicture = _.supSrcset && _.supPicture), _.supSrcset && !_.supSizes ? (g = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", (u = r.createElement("img")).onload = le, u.onerror = le, u.setAttribute("sizes", "9px"), u.srcset = g + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", u.src = g) : f = !0, _.selShort = "picture>img,img[srcset]", _.sel = _.selShort, _.cfg = T, _.DPR = I || 1, _.u = L, _.types = b, _.setSize = t, _.makeUrl = s(function (e) {
    return J.href = e, J.href
  }), _.qsa = function (e, t) {
    return "querySelector" in e ? e.querySelectorAll(t) : []
  }, _.matchesMedia = function () {
    return e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? _.matchesMedia = function (e) {
      return !e || matchMedia(e).matches
    } : _.matchesMedia = _.mMQ, _.matchesMedia.apply(this, arguments)
  }, _.mMQ = function (e) {
    return !e || oe(e)
  }, _.calcLength = function (e) {
    e = oe(e, !0) || !1;
    return e = e < 0 ? !1 : e
  }, _.supportsType = function (e) {
    return !e || b[e]
  }, _.parseSize = s(function (e) {
    e = (e || "").match(K);
    return {media: e && e[1], length: e && e[2]}
  }), _.parseSet = function (e) {
    return e.cands || (e.cands = j(e.srcset, e)), e.cands
  }, _.getEmValue = function () {
    var e, t, i, s;
    return !n && (e = r.body) && (t = r.createElement("div"), i = y.style.cssText, s = e.style.cssText, t.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", y.style.cssText = Z, e.style.cssText = Z, e.appendChild(t), n = t.offsetWidth, e.removeChild(t), n = parseFloat(n, 10), y.style.cssText = i, e.style.cssText = s), n || 16
  }, _.calcListLength = function (e) {
    var t;
    return e in P && !T.uT || (t = _.calcLength(N(e)), P[e] = t || L.width), P[e]
  }, _.setRes = function (e) {
    if (e) {
      for (var t, i = 0, s = (t = _.parseSet(e)).length; i < s; i++) {
        x(t[i], e.sizes);
      }
    }
    return t
  }, _.setRes.res = x, _.applySetCandidate = function (e, t) {
    if (e.length) {
      var i, s, n, r, o, a, l = t[_.ns], c = _.DPR, d = l.curSrc || t[C],
        u = l.curCan || (y = t, u = d, b = e[0].set, (b = w(u, b = !b && u ? (b = y[_.ns].sets) && b[b.length - 1] : b)) && (u = _.makeUrl(u), y[_.ns].curSrc = u, (y[_.ns].curCan = b).res || x(b, b.set.sizes)), b);
      if (u && u.set === e[0].set && ((a = U && !t.complete && u.res - .1 > c) || (u.cached = !0, u.res >= c && (o = u))), !o) {
        for (e.sort(D), o = e[(r = e.length) - 1], s = 0; s < r; s++) {
          if ((i = e[s]).res >= c) {
            o = e[n = s - 1] && (a || d !== _.makeUrl(i.url)) && (h = e[n].res, p = i.res, m = c, f = e[n].cached, v = g = void 0, f = "saveData" === T.algorithm ? 2.7 < h ? m + 1 : (v = (p - m) * (g = Math.pow(h - .6, 1.5)), f && (v += .1 * g), h + v) : 1 < m ? Math.sqrt(h * p) : h, m < f) ? e[n] : i;
            break
          }
        }
      }
      o && (y = _.makeUrl(o.url), l.curSrc = y, l.curCan = o, y !== d && _.setSrc(t, o), _.setSize(t))
    }
    var h, p, m, f, g, v, y, u, b
  }, _.setSrc = function (e, t) {
    e.src = t.url, "image/svg+xml" === t.set.type && (t = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = t))
  }, _.getSet = function (e) {
    for (var t, i, s = !1, n = e[_.ns].sets, r = 0; r < n.length && !s; r++) {
      if ((t = n[r]).srcset && _.matchesMedia(t.media) && (i = _.supportsType(t.type))) {
        s = t = "pending" === i ? i : t;
        break
      }
    }
    return s
  }, _.parseSets = function (e, t, i) {
    var s, n, r, o, a = t && "PICTURE" === t.nodeName.toUpperCase(),
      l = e[_.ns];
    if (void 0 !== l.src && !i.src || (l.src = v.call(e, "src"), l.src ? V.call(e, E, l.src) : X.call(e, E)), void 0 !== l.srcset && !i.srcset && _.supSrcset && !e.srcset || (s = v.call(e, "srcset"), l.srcset = s, o = !0), l.sets = [], a) {
      l.pic = !0;
      for (var c = l.sets, d, u, h = (i = t).getElementsByTagName("source"), p = 0, m = h.length; p < m; p++) {
        (d = h[p])[_.ns] = !0, (u = d.getAttribute("srcset")) && c.push({
          srcset: u,
          media: d.getAttribute("media"),
          type: d.getAttribute("type"),
          sizes: d.getAttribute("sizes")
        })
      }
    }
    l.srcset ? (n = {
      srcset: l.srcset,
      sizes: v.call(e, "sizes")
    }, l.sets.push(n), (r = (F || l.src) && Q.test(l.srcset || "")) || !l.src || w(l.src, n) || n.has1x || (n.srcset += ", " + l.src, n.cands.push({
      url: l.src,
      d: 1,
      set: n
    }))) : l.src && l.sets.push({
      srcset: l.src,
      sizes: null
    }), l.curCan = null, l.curSrc = void 0, l.supported = !(a || n && !_.supSrcset || r && !_.supSizes), o && _.supSrcset && !l.supported && (s ? (V.call(e, G, s), e.srcset = "") : X.call(e, G)), l.supported && !l.srcset && (!l.src && e.src || e.src !== _.makeUrl(l.src)) && (null === l.src ? e.removeAttribute("src") : e.src = l.src), l.parsed = !0
  }, _.fillImg = function (e, t) {
    var i, s = t.reselect || t.reevaluate;
    e[_.ns] || (e[_.ns] = {}), i = e[_.ns], !s && i.evaled === o || (i.parsed && !t.reevaluate || _.parseSets(e, e.parentNode, t), i.supported ? i.evaled = o : (s = e, t = _.getSet(s), i = !1, "pending" !== t && (i = o, t && (t = _.setRes(t), _.applySetCandidate(t, s))), s[_.ns].evaled = i))
  }, _.setupRun = function () {
    O && !A && I === e.devicePixelRatio || (A = !1, I = e.devicePixelRatio, M = {}, P = {}, _.DPR = I || 1, L.width = Math.max(e.innerWidth || 0, y.clientWidth), L.height = Math.max(e.innerHeight || 0, y.clientHeight), L.vw = L.width / 100, L.vh = L.height / 100, o = [L.height, L.width, I].join("-"), L.em = _.getEmValue(), L.rem = L.em)
  }, _.supPicture ? ($ = t, _.fillImg = t) : (Y = e.attachEvent ? /d$|^c/ : /d$|^c|^i/, c = setTimeout(z, r.body ? 9 : 99), d = y.clientHeight, i(e, "resize", (R = function () {
    A = Math.max(e.innerWidth || 0, y.clientWidth) !== L.width || y.clientHeight !== d, d = y.clientHeight, A && _.fillImgs()
  }, a = 99, function () {
    W = new Date, l = l || setTimeout(ae, a)
  })), i(r, "readystatechange", z)), _.picturefill = $, _.fillImgs = $, _.teardownRun = t, $._ = _, e.picturefillCFG = {
    pf: _,
    push: function (e) {
      var t = e.shift();
      "function" == typeof _[t] ? _[t].apply(_, e) : (T[t] = e[0], O && _.fillImgs({reselect: !0}))
    }
  };
  for (; k && k.length;) {
    e.picturefillCFG.push(k.shift());
  }
  e.picturefill = $, "object" == typeof module && "object" == typeof module.exports ? module.exports = $ : "function" == typeof define && define.amd && define("picturefill", function () {
    return $
  }), _.supPicture || (b["image/webp"] = (h = "image/webp", S = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==", (p = new e.Image).onerror = function () {
    b[h] = !1, $()
  }, p.onload = function () {
    b[h] = 1 === p.width, $()
  }, p.src = S, "pending"))
}(window, document), "object" == typeof navigator && function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Plyr = t()
}(this, function () {
  "use strict";

  function r(e, t, i) {
    t in e ? Object.defineProperty(e, t, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = i
  }

  function e(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
    }
  }

  function t(t, e) {
    var i, s = Object.keys(t);
    return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(t), e && (i = i.filter(function (e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    })), s.push.apply(s, i)), s
  }

  function F(s) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2 ? t(Object(n), !0).forEach(function (e) {
        var t, i;
        t = s, i = n[e = e], e in t ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = i
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach(function (e) {
        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(n, e))
      })
    }
    return s
  }

  var H = {addCSS: !0, thumbWidth: 15, watch: !0};

  function s(e) {
    return null != e ? e.constructor : null
  }

  function q(e) {
    return W(e, Element)
  }

  function B(e) {
    return W(e, Event)
  }

  function R(e) {
    return Y(e) || (X(e) || G(e) || U(e)) && !e.length || V(e) && !Object.keys(e).length
  }

  var W = function (e, t) {
    return !!(e && t && e instanceof t)
  }, Y = function (e) {
    return null == e
  }, V = function (e) {
    return s(e) === Object
  }, X = function (e) {
    return s(e) === String
  }, G = function (e) {
    return Array.isArray(e)
  }, U = function (e) {
    return W(e, NodeList)
  }, Q = X, K = G, Z = U;
  J = [{
    key: "setup", value: function (i) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        e = null;
      if (R(i) || Q(i) ? e = Array.from(document.querySelectorAll(Q(i) ? i : 'input[type="range"]')) : q(i) ? e = [i] : Z(i) ? e = Array.from(i) : K(i) && (e = i.filter(q)), R(e)) {
        return null;
      }
      var s = F({}, H, {}, t);
      return Q(i) && s.watch && new MutationObserver(function (e) {
        Array.from(e).forEach(function (e) {
          Array.from(e.addedNodes).forEach(function (e) {
            var t;
            q(e) && (t = i, function () {
              return Array.from(document.querySelectorAll(t)).includes(this)
            }.call(e, t)) && new o(e, s)
          })
        })
      }).observe(document.body, {
        childList: !0,
        subtree: !0
      }), e.map(function (e) {
        return new o(e, t)
      })
    }
  }, {
    key: "enabled", get: function () {
      return "ontouchstart" in document.documentElement
    }
  }], e((Je = o).prototype, [{
    key: "init", value: function () {
      o.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
    }
  }, {
    key: "destroy", value: function () {
      o.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null)
    }
  }, {
    key: "listeners", value: function (e) {
      var t = this, i = e ? "addEventListener" : "removeEventListener";
      ["touchstart", "touchmove", "touchend"].forEach(function (e) {
        t.element[i](e, function (e) {
          return t.set(e)
        }, !1)
      })
    }
  }, {
    key: "get", value: function (e) {
      if (!o.enabled || !B(e)) {
        return null;
      }
      var t = e.target, e = e.changedTouches[0],
        i = parseFloat(t.getAttribute("min")) || 0,
        s = parseFloat(t.getAttribute("max")) || 100,
        n = parseFloat(t.getAttribute("step")) || 1,
        t = t.getBoundingClientRect(),
        r = 100 / t.width * (this.config.thumbWidth / 2) / 100;
      return (e = 100 / t.width * (e.clientX - t.left)) < 0 ? e = 0 : 100 < e && (e = 100), e < 50 ? e -= (100 - 2 * e) * r : 50 < e && (e += 2 * (e - 50) * r), i + (t = e / 100 * (s - i), (r = n) < 1 ? (e = (e = "".concat(r).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)) ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0, parseFloat(t.toFixed(e))) : Math.round(t / r) * r)
    }
  }, {
    key: "set", value: function (e) {
      var t;
      o.enabled && B(e) && !e.target.disabled && (e.preventDefault(), e.target.value = this.get(e), t = e.target, e = "touchend" === e.type ? "change" : "input", t && e && (e = new Event(e, {bubbles: !0}), t.dispatchEvent(e)))
    }
  }]), e(Je, J);
  var J, ee = o;

  function o(e, t) {
    if (!(this instanceof o)) {
      throw new TypeError("Cannot call a class as a function");
    }
    q(e) ? this.element = e : Q(e) && (this.element = document.querySelector(e)), q(this.element) && R(this.element.rangeTouch) && (this.config = F({}, H, {}, t), this.init())
  }

  const te = e => null != e ? e.constructor : null,
    i = (e, t) => Boolean(e && t && e instanceof t), ie = e => null == e,
    se = e => te(e) === Object, ne = e => te(e) === String,
    re = e => te(e) === Function, oe = e => Array.isArray(e),
    ae = e => i(e, NodeList),
    le = e => ie(e) || (ne(e) || oe(e) || ae(e)) && !e.length || se(e) && !Object.keys(e).length;
  var a = ie, n = se, y = e => te(e) === Number && !Number.isNaN(e), l = ne,
    b = e => te(e) === Boolean, c = re, h = oe, ce = ae,
    w = e => null !== e && "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument,
    d = e => i(e, Event), u = e => i(e, KeyboardEvent),
    de = e => i(e, TextTrack) || !ie(e) && ne(e.kind), ue = e => {
      if (i(e, window.URL)) {
        return !0;
      }
      if (!ne(e)) {
        return !1;
      }
      let t = e;
      e.startsWith("http://") && e.startsWith("https://") || (t = "http://" + e);
      try {
        return !le(new URL(t).hostname)
      }
      catch (e) {
        return !1
      }
    }, x = le;
  const he = (() => {
    const t = document.createElement("span"), e = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    }, i = Object.keys(e).find(e => void 0 !== t.style[e]);
    return !!l(i) && e[i]
  })();

  function pe(e, t) {
    setTimeout(() => {
      try {
        e.hidden = !0, e.offsetHeight, e.hidden = !1
      }
      catch (e) {
      }
    }, t)
  }

  const p = {
    isIE: Boolean(window.document.documentMode),
    isEdge: window.navigator.userAgent.includes("Edge"),
    isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
    isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
    isIos: "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints || /(iPad|iPhone|iPod)/gi.test(navigator.platform)
  };

  function me(e, t) {
    return t.split(".").reduce((e, t) => e && e[t], e)
  }

  function m(t = {}, ...e) {
    if (!e.length) {
      return t;
    }
    const i = e.shift();
    return n(i) ? (Object.keys(i).forEach(e => {
      n(i[e]) ? (Object.keys(t).includes(e) || Object.assign(t, {[e]: {}}), m(t[e], i[e])) : Object.assign(t, {[e]: i[e]})
    }), m(t, ...e)) : t
  }

  function fe(e, r) {
    e = e.length ? e : [e];
    Array.from(e).reverse().forEach((e, t) => {
      const i = 0 < t ? r.cloneNode(!0) : r, s = e.parentNode,
        n = e.nextSibling;
      i.appendChild(e), n ? s.insertBefore(i, n) : s.appendChild(i)
    })
  }

  function ge(i, e) {
    w(i) && !x(e) && Object.entries(e).filter(([, e]) => !a(e)).forEach(([e, t]) => i.setAttribute(e, t))
  }

  function _(e, t, i) {
    const s = document.createElement(e);
    return n(t) && ge(s, t), l(i) && (s.innerText = i), s
  }

  function ve(e, t, i, s) {
    w(t) && t.appendChild(_(e, i, s))
  }

  function f(e) {
    ce(e) || h(e) ? Array.from(e).forEach(f) : w(e) && w(e.parentNode) && e.parentNode.removeChild(e)
  }

  function ye(t) {
    if (w(t)) {
      let e = t.childNodes["length"];
      for (; 0 < e;) {
        t.removeChild(t.lastChild), --e
      }
    }
  }

  function be(e, t) {
    return w(t) && w(t.parentNode) && w(e) ? (t.parentNode.replaceChild(e, t), e) : null
  }

  function g(e, t) {
    if (!l(e) || x(e)) {
      return {};
    }
    const o = {}, a = m({}, t);
    return e.split(",").forEach(e => {
      const t = e.trim(), i = t.replace(".", ""),
        s = t.replace(/[[\]]/g, "").split("="), [n] = s,
        r = 1 < s.length ? s[1].replace(/["']/g, "") : "";
      switch (t.charAt(0)) {
        case".":
          l(a.class) ? o.class = a.class + " " + i : o.class = i;
          break;
        case"#":
          o.id = t.replace("#", "");
          break;
        case"[":
          o[n] = r
      }
    }), m(a, o)
  }

  function v(t, i) {
    if (w(t)) {
      let e = i;
      b(e) || (e = !t.hidden), t.hidden = e
    }
  }

  function T(t, i, s) {
    if (ce(t)) {
      return Array.from(t).map(e => T(e, i, s));
    }
    if (w(t)) {
      let e = void 0 !== s ? s ? "add" : "remove" : "toggle";
      return t.classList[e](i), t.classList.contains(i)
    }
    return !1
  }

  function we(e, t) {
    return w(e) && e.classList.contains(t)
  }

  function E(e, t) {
    const i = Element["prototype"];
    return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function () {
      return Array.from(document.querySelectorAll(t)).includes(this)
    }).call(e, t)
  }

  function S(e) {
    return this.elements.container.querySelectorAll(e)
  }

  function C(e) {
    return this.elements.container.querySelector(e)
  }

  function xe(e = null, t = !1) {
    w(e) && (e.focus({preventScroll: !0}), t && T(e, this.config.classNames.tabFocus))
  }

  const _e = {
    "audio/ogg": "vorbis",
    "audio/wav": "1",
    "video/webm": "vp8, vorbis",
    "video/mp4": "avc1.42E01E, mp4a.40.2",
    "video/ogg": "theora"
  }, k = {
    audio: "canPlayType" in document.createElement("audio"),
    video: "canPlayType" in document.createElement("video"),
    check(e, t, i) {
      i = p.isIPhone && i && k.playsinline, t = k[e] || "html5" !== t;
      return {
        api: t,
        ui: t && k.rangeInput && ("video" !== e || !p.isIPhone || i)
      }
    },
    pip: !(p.isIPhone || !c(_("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || _("video").disablePictureInPicture)),
    airplay: c(window.WebKitPlaybackTargetAvailabilityEvent),
    playsinline: "playsInline" in document.createElement("video"),
    mime(e) {
      if (x(e)) {
        return !1;
      }
      var [t] = e.split("/");
      let i = e;
      if (!this.isHTML5 || t !== this.type) {
        return !1;
      }
      Object.keys(_e).includes(i) && (i += `; codecs="${_e[e]}"`);
      try {
        return Boolean(i && this.media.canPlayType(i).replace(/no/, ""))
      }
      catch (e) {
        return !1
      }
    },
    textTracks: "textTracks" in document.createElement("video"),
    rangeInput: (() => {
      const e = document.createElement("input");
      return (e.type = "range") === e.type
    })(),
    touch: "ontouchstart" in document.documentElement,
    transitions: !1 !== he,
    reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
  }, Te = (() => {
    let e = !1;
    try {
      var t = Object.defineProperty({}, "passive", {get: () => (e = !0, null)});
      window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
    }
    catch (e) {
    }
    return e
  })();

  function A(i, e, s, n = !1, r = !0, o = !1) {
    if (i && "addEventListener" in i && !x(e) && c(s)) {
      const a = e.split(" ");
      let t = o;
      Te && (t = {passive: r, capture: o}), a.forEach(e => {
        this && this.eventListeners && n && this.eventListeners.push({
          element: i,
          type: e,
          callback: s,
          options: t
        }), i[n ? "addEventListener" : "removeEventListener"](e, s, t)
      })
    }
  }

  function M(e, t = "", i, s = !0, n = !1) {
    A.call(this, e, t, i, !0, s, n)
  }

  function Ee(e, t = "", i, s = !0, n = !1) {
    A.call(this, e, t, i, !1, s, n)
  }

  function Se(t, i = "", s, n = !0, r = !1) {
    const o = (...e) => {
      Ee(t, i, o, n, r), s.apply(this, e)
    };
    A.call(this, t, i, o, !0, n, r)
  }

  function P(e, t = "", i = !1, s = {}) {
    w(e) && !x(t) && (t = new CustomEvent(t, {
      bubbles: i,
      detail: {...s, plyr: this}
    }), e.dispatchEvent(t))
  }

  function I(e) {
    var t;
    t = e, i(t, Promise) && re(t.then) && e.then(null, () => {
    })
  }

  function Ce(i) {
    return h(i) ? i.filter((e, t) => i.indexOf(e) === t) : i
  }

  function ke(e, i) {
    return h(e) && e.length ? e.reduce((e, t) => Math.abs(t - i) < Math.abs(e - i) ? t : e) : null
  }

  function Ae(e) {
    return !(!window || !window.CSS) && window.CSS.supports(e)
  }

  const Me = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((e, [t, i]) => ({
    ...e,
    [t / i]: [t, i]
  }), {});

  function Pe(e) {
    return (h(e) || l(e) && e.includes(":")) && (h(e) ? e : e.split(":")).map(Number).every(y)
  }

  function Ie(e) {
    if (!h(e) || !e.every(y)) {
      return null;
    }
    const [t, i] = e, s = (e, t) => 0 === t ? e : s(t, e % t), n = s(t, i);
    return [t / n, i / n]
  }

  function Le(e) {
    const t = e => Pe(e) ? e.split(":").map(Number) : null;
    let i = t(e);
    if (null === (i = null === i ? t(this.config.ratio) : i) && !x(this.embed) && h(this.embed.ratio) && ({ratio: i} = this.embed), null === i && this.isHTML5) {
      const {videoWidth: e, videoHeight: t} = this.media;
      i = [e, t]
    }
    return Ie(i)
  }

  function Oe(e) {
    if (!this.isVideo) {
      return {};
    }
    const t = this.elements["wrapper"], i = Le.call(this, e);
    if (!h(i)) {
      return {};
    }
    var [e, s] = Ie(i), n = 100 / e * s;
    if (Ae(`aspect-ratio: ${e}/` + s) ? t.style.aspectRatio = e + "/" + s : t.style.paddingBottom = n + "%", this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
      const e = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
        i = (e - n) / (e / 50);
      this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = `translateY(-${i}%)`
    }
    else {
      this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
    }
    return {padding: n, ratio: i}
  }

  function $e(e, t, i = .05) {
    var s = e / t, n = ke(Object.keys(Me), s);
    return Math.abs(n - s) <= i ? Me[n] : [e, t]
  }

  const L = {
    getSources() {
      return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(e => {
        e = e.getAttribute("type");
        return !!x(e) || k.mime.call(this, e)
      }) : []
    }, getQualityOptions() {
      return this.config.quality.forced ? this.config.quality.options : L.getSources.call(this).map(e => Number(e.getAttribute("size"))).filter(Boolean)
    }, setup() {
      if (this.isHTML5) {
        const a = this;
        a.options.speed = a.config.speed.options, x(this.config.ratio) || Oe.call(a), Object.defineProperty(a.media, "quality", {
          get() {
            const e = L.getSources.call(a).find(e => e.getAttribute("src") === a.source);
            return e && Number(e.getAttribute("size"))
          }, set(t) {
            if (a.quality !== t) {
              if (a.config.quality.forced && c(a.config.quality.onChange)) {
                a.config.quality.onChange(t);
              }
              else {
                const e = L.getSources.call(a).find(e => Number(e.getAttribute("size")) === t);
                if (!e) {
                  return;
                }
                const {
                  currentTime: i,
                  paused: s,
                  preload: n,
                  readyState: r,
                  playbackRate: o
                } = a.media;
                a.media.src = e.getAttribute("src"), "none" === n && !r || (a.once("loadedmetadata", () => {
                  a.speed = o, a.currentTime = i, s || I(a.play())
                }), a.media.load())
              }
              P.call(a, a.media, "qualitychange", !1, {quality: t})
            }
          }
        })
      }
    }, cancelRequests() {
      this.isHTML5 && (f(L.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
    }
  };

  function ze(e, ...i) {
    return x(e) ? e : e.toString().replace(/{(\d+)}/g, (e, t) => i[t].toString())
  }

  const De = (e = "", t = "", i = "") => e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString()),
    je = (e = "") => e.toString().replace(/\w\S*/g, e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase());

  function Ne(e) {
    const t = document.createElement("div");
    return t.appendChild(e), t.innerHTML
  }

  const Fe = {
    pip: "PIP",
    airplay: "AirPlay",
    html5: "HTML5",
    vimeo: "Vimeo",
    youtube: "YouTube"
  }, O = {
    get(e = "", t = {}) {
      if (x(e) || x(t)) {
        return "";
      }
      let i = me(t.i18n, e);
      if (x(i)) {
        return Object.keys(Fe).includes(e) ? Fe[e] : "";
      }
      e = {"{seektime}": t.seekTime, "{title}": t.title};
      return Object.entries(e).forEach(([e, t]) => {
        i = De(i, e, t)
      }), i
    }
  };

  class He {
    constructor(e) {
      r(this, "get", e => {
        if (!He.supported || !this.enabled) {
          return null;
        }
        var t = window.localStorage.getItem(this.key);
        if (x(t)) {
          return null;
        }
        t = JSON.parse(t);
        return l(e) && e.length ? t[e] : t
      }), r(this, "set", t => {
        if (He.supported && this.enabled && n(t)) {
          let e = this.get();
          m(e = x(e) ? {} : e, t);
          try {
            window.localStorage.setItem(this.key, JSON.stringify(e))
          }
          catch (t) {
          }
        }
      }), this.enabled = e.config.storage.enabled, this.key = e.config.storage.key
    }

    static get supported() {
      try {
        if (!("localStorage" in window)) {
          return !1;
        }
        var e = "___test";
        return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0
      }
      catch (e) {
        return !1
      }
    }
  }

  function qe(e, s = "text") {
    return new Promise((t, i) => {
      try {
        const i = new XMLHttpRequest;
        if (!("withCredentials" in i)) {
          return;
        }
        i.addEventListener("load", () => {
          if ("text" === s) {
            try {
              t(JSON.parse(i.responseText))
            }
            catch (e) {
              t(i.responseText)
            }
          }
          else {
            t(i.response)
          }
        }), i.addEventListener("error", () => {
          throw new Error(i.status)
        }), i.open("GET", e, !0), i.responseType = s, i.send()
      }
      catch (e) {
        i(e)
      }
    })
  }

  function Be(e, t) {
    if (l(e)) {
      const i = l(t);
      const s = () => null !== document.getElementById(t), n = (e, t) => {
        e.innerHTML = t, i && s() || document.body.insertAdjacentElement("afterbegin", e)
      };
      if (!i || !s()) {
        const s = He.supported, r = document.createElement("div");
        if (r.setAttribute("hidden", ""), i && r.setAttribute("id", t), s) {
          const e = window.localStorage.getItem("cache-" + t);
          if (null !== e) {
            const t = JSON.parse(e);
            n(r, t.content)
          }
        }
        qe(e).then(e => {
          if (!x(e)) {
            if (s) {
              try {
                window.localStorage.setItem("cache-" + t, JSON.stringify({content: e}))
              }
              catch (e) {
              }
            }
            n(r, e)
          }
        }).catch(() => {
        })
      }
    }
  }

  const Re = e => Math.trunc(e / 60 / 60 % 60, 10);

  function We(e = 0, t = !1, i = !1) {
    if (!y(e)) {
      return We(void 0, t, i);
    }
    var s = e => ("0" + e).slice(-2);
    let n = Re(e);
    var r = Math.trunc(e / 60 % 60, 10), o = Math.trunc(e % 60, 10);
    return n = t || 0 < n ? n + ":" : "", (i && 0 < e ? "-" : "") + n + s(r) + ":" + s(o)
  }

  const $ = {
    getIconUrl() {
      var e = new URL(this.config.iconUrl, window.location),
        t = window.location.host || window.top.location.host,
        e = e.host !== t || p.isIE && !window.svg4everybody;
      return {url: this.config.iconUrl, cors: e}
    },
    findElements() {
      try {
        return this.elements.controls = C.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
          play: S.call(this, this.config.selectors.buttons.play),
          pause: C.call(this, this.config.selectors.buttons.pause),
          restart: C.call(this, this.config.selectors.buttons.restart),
          rewind: C.call(this, this.config.selectors.buttons.rewind),
          fastForward: C.call(this, this.config.selectors.buttons.fastForward),
          mute: C.call(this, this.config.selectors.buttons.mute),
          pip: C.call(this, this.config.selectors.buttons.pip),
          airplay: C.call(this, this.config.selectors.buttons.airplay),
          settings: C.call(this, this.config.selectors.buttons.settings),
          captions: C.call(this, this.config.selectors.buttons.captions),
          fullscreen: C.call(this, this.config.selectors.buttons.fullscreen)
        }, this.elements.progress = C.call(this, this.config.selectors.progress), this.elements.inputs = {
          seek: C.call(this, this.config.selectors.inputs.seek),
          volume: C.call(this, this.config.selectors.inputs.volume)
        }, this.elements.display = {
          buffer: C.call(this, this.config.selectors.display.buffer),
          currentTime: C.call(this, this.config.selectors.display.currentTime),
          duration: C.call(this, this.config.selectors.display.duration)
        }, w(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector("." + this.config.classNames.tooltip)), !0
      }
      catch (e) {
        return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
      }
    },
    createIcon(e, t) {
      const i = "http://www.w3.org/2000/svg", s = $.getIconUrl.call(this),
        n = `${s.cors ? "" : s.url}#` + this.config.iconPrefix,
        r = document.createElementNS(i, "svg"), o = (ge(r, m(t, {
          "aria-hidden": "true",
          focusable: "false"
        })), document.createElementNS(i, "use")), a = n + "-" + e;
      return "href" in o && o.setAttributeNS("http://www.w3.org/1999/xlink", "href", a), o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), r.appendChild(o), r
    },
    createLabel(e, t = {}) {
      e = O.get(e, this.config);
      return _("span", {
        ...t,
        class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
      }, e)
    },
    createBadge(e) {
      if (x(e)) {
        return null;
      }
      const t = _("span", {class: this.config.classNames.menu.value});
      return t.appendChild(_("span", {class: this.config.classNames.menu.badge}, e)), t
    },
    createButton(e, t) {
      const i = m({}, t);
      let s = function (e = "") {
        let t = e.toString();
        return (t = function (e = "") {
          e = e.toString(), e = De(e, "-", " ");
          return e = De(e, "_", " "), e = je(e), De(e, " ", "")
        }(t)).charAt(0).toLowerCase() + t.slice(1)
      }(e);
      const n = {
        element: "button",
        toggle: !1,
        label: null,
        icon: null,
        labelPressed: null,
        iconPressed: null
      };
      switch (["element", "icon", "label"].forEach(e => {
        Object.keys(i).includes(e) && (n[e] = i[e], delete i[e])
      }), "button" !== n.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some(e => e === this.config.classNames.control) || m(i, {class: i.class + " " + this.config.classNames.control}) : i.class = this.config.classNames.control, e) {
        case"play":
          n.toggle = !0, n.label = "play", n.labelPressed = "pause", n.icon = "play", n.iconPressed = "pause";
          break;
        case"mute":
          n.toggle = !0, n.label = "mute", n.labelPressed = "unmute", n.icon = "volume", n.iconPressed = "muted";
          break;
        case"captions":
          n.toggle = !0, n.label = "enableCaptions", n.labelPressed = "disableCaptions", n.icon = "captions-off", n.iconPressed = "captions-on";
          break;
        case"fullscreen":
          n.toggle = !0, n.label = "enterFullscreen", n.labelPressed = "exitFullscreen", n.icon = "enter-fullscreen", n.iconPressed = "exit-fullscreen";
          break;
        case"play-large":
          i.class += ` ${this.config.classNames.control}--overlaid`, s = "play", n.label = "play", n.icon = "play";
          break;
        default:
          x(n.label) && (n.label = s), x(n.icon) && (n.icon = e)
      }
      const r = _(n.element);
      return n.toggle ? (r.appendChild($.createIcon.call(this, n.iconPressed, {class: "icon--pressed"})), r.appendChild($.createIcon.call(this, n.icon, {class: "icon--not-pressed"})), r.appendChild($.createLabel.call(this, n.labelPressed, {class: "label--pressed"})), r.appendChild($.createLabel.call(this, n.label, {class: "label--not-pressed"}))) : (r.appendChild($.createIcon.call(this, n.icon)), r.appendChild($.createLabel.call(this, n.label))), m(i, g(this.config.selectors.buttons[s], i)), ge(r, i), "play" === s ? (h(this.elements.buttons[s]) || (this.elements.buttons[s] = []), this.elements.buttons[s].push(r)) : this.elements.buttons[s] = r, r
    },
    createRange(e, t) {
      t = _("input", m(g(this.config.selectors.inputs[e]), {
        type: "range",
        min: 0,
        max: 100,
        step: .01,
        value: 0,
        autocomplete: "off",
        role: "slider",
        "aria-label": O.get(e, this.config),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": 0
      }, t));
      return this.elements.inputs[e] = t, $.updateRangeFill.call(this, t), ee.setup(t), t
    },
    createProgress(e, t) {
      const i = _("progress", m(g(this.config.selectors.display[e]), {
        min: 0,
        max: 100,
        value: 0,
        role: "progressbar",
        "aria-hidden": !0
      }, t));
      if ("volume" !== e) {
        i.appendChild(_("span", null, "0"));
        const t = {played: "played", buffer: "buffered"}[e],
          s = t ? O.get(t, this.config) : "";
        i.innerText = "% " + s.toLowerCase()
      }
      return this.elements.display[e] = i
    },
    createTime(e, t) {
      t = g(this.config.selectors.display[e], t), t = _("div", m(t, {
        class: `${t.class || ""} ${this.config.classNames.display.time} `.trim(),
        "aria-label": O.get(e, this.config)
      }), "00:00");
      return this.elements.display[e] = t
    },
    bindMenuItemShortcuts(s, e) {
      M.call(this, s, "keydown keyup", t => {
        if (["Space", "ArrowUp", "ArrowDown", "ArrowRight"].includes(t.key) && (t.preventDefault(), t.stopPropagation(), "keydown" !== t.type)) {
          var i = E(s, '[role="menuitemradio"]');
          if (!i && ["Space", "ArrowRight"].includes(t.key)) {
            $.showMenuPanel.call(this, e, !0);
          }
          else {
            let e;
            "Space" !== t.key && ("ArrowDown" === t.key || i && "ArrowRight" === t.key ? (e = s.nextElementSibling, w(e) || (e = s.parentNode.firstElementChild)) : (e = s.previousElementSibling, w(e) || (e = s.parentNode.lastElementChild)), xe.call(this, e, !0))
          }
        }
      }, !1), M.call(this, s, "keyup", e => {
        "Return" === e.key && $.focusFirstMenuItem.call(this, null, !0)
      })
    },
    createMenuItem({
                     value: t,
                     list: e,
                     type: i,
                     title: s,
                     badge: n = null,
                     checked: r = !1
                   }) {
      const o = g(this.config.selectors.inputs[i]), a = _("button", m(o, {
        type: "button",
        role: "menuitemradio",
        class: (this.config.classNames.control + " " + (o.class || "")).trim(),
        "aria-checked": r,
        value: t
      })), l = _("span");
      l.innerHTML = s, w(n) && l.appendChild(n), a.appendChild(l), Object.defineProperty(a, "checked", {
        enumerable: !0,
        get: () => "true" === a.getAttribute("aria-checked"),
        set(e) {
          e && Array.from(a.parentNode.children).filter(e => E(e, '[role="menuitemradio"]')).forEach(e => e.setAttribute("aria-checked", "false")), a.setAttribute("aria-checked", e ? "true" : "false")
        }
      }), this.listeners.bind(a, "click keyup", e => {
        if (!u(e) || "Space" === e.key) {
          switch (e.preventDefault(), e.stopPropagation(), a.checked = !0, i) {
            case"language":
              this.currentTrack = Number(t);
              break;
            case"quality":
              this.quality = t;
              break;
            case"speed":
              this.speed = parseFloat(t)
          }
          $.showMenuPanel.call(this, "home", u(e))
        }
      }, i, !1), $.bindMenuItemShortcuts.call(this, a, i), e.appendChild(a)
    },
    formatTime(e = 0, t = !1) {
      return y(e) ? We(e, 0 < Re(this.duration), t) : e
    },
    updateTimeDisplay(e = null, t = 0, i = !1) {
      w(e) && y(t) && (e.innerText = $.formatTime(t, i))
    },
    updateVolume() {
      this.supported.ui && (w(this.elements.inputs.volume) && $.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), w(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
    },
    setRange(e, t = 0) {
      w(e) && (e.value = t, $.updateRangeFill.call(this, e))
    },
    updateProgress(e) {
      if (this.supported.ui && d(e)) {
        var t, i, s = (e, t) => {
          const i = y(t) ? t : 0, s = w(e) ? e : this.elements.display.buffer;
          if (w(s)) {
            s.value = i;
            const e = s.getElementsByTagName("span")[0];
            w(e) && (e.childNodes[0].nodeValue = i)
          }
        };
        if (e) {
          switch (e.type) {
            case"timeupdate":
            case"seeking":
            case"seeked":
              t = this.currentTime, i = this.duration, t = 0 === t || 0 === i || Number.isNaN(t) || Number.isNaN(i) ? 0 : (t / i * 100).toFixed(2), "timeupdate" === e.type && $.setRange.call(this, this.elements.inputs.seek, t);
              break;
            case"playing":
            case"progress":
              s(this.elements.display.buffer, 100 * this.buffered)
          }
        }
      }
    },
    updateRangeFill(e) {
      const t = d(e) ? e.target : e;
      if (w(t) && "range" === t.getAttribute("type")) {
        if (E(t, this.config.selectors.inputs.seek)) {
          t.setAttribute("aria-valuenow", this.currentTime);
          const e = $.formatTime(this.currentTime),
            i = $.formatTime(this.duration),
            s = O.get("seekLabel", this.config);
          t.setAttribute("aria-valuetext", s.replace("{currentTime}", e).replace("{duration}", i))
        }
        else if (E(t, this.config.selectors.inputs.volume)) {
          const e = 100 * t.value;
          t.setAttribute("aria-valuenow", e), t.setAttribute("aria-valuetext", e.toFixed(1) + "%")
        }
        else {
          t.setAttribute("aria-valuenow", t.value);
        }
        p.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%")
      }
    },
    updateSeekTooltip(t) {
      if (this.config.tooltips.seek && w(this.elements.inputs.seek) && w(this.elements.display.seekTooltip) && 0 !== this.duration) {
        const s = this.elements.display.seekTooltip,
          n = this.config.classNames.tooltip + "--visible", r = e => T(s, n, e);
        if (this.touch) {
          r(!1);
        }
        else {
          let e = 0;
          var i = this.elements.progress.getBoundingClientRect();
          if (d(t)) {
            e = 100 / i.width * (t.pageX - i.left);
          }
          else {
            if (!we(s, n)) {
              return;
            }
            e = parseFloat(s.style.left, 10)
          }
          e < 0 ? e = 0 : 100 < e && (e = 100);
          const o = this.duration / 100 * e;
          s.innerText = $.formatTime(o);
          i = null == (i = this.config.markers) || null == (i = i.points) ? void 0 : i.find(({time: e}) => e === Math.round(o));
          i && s.insertAdjacentHTML("afterbegin", i.label + "<br>"), s.style.left = e + "%", d(t) && ["mouseenter", "mouseleave"].includes(t.type) && r("mouseenter" === t.type)
        }
      }
    },
    timeUpdate(e) {
      var t = !w(this.elements.display.duration) && this.config.invertTime;
      $.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || $.updateProgress.call(this, e)
    },
    durationUpdate() {
      if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
        if (this.duration >= 2 ** 32) {
          return v(this.elements.display.currentTime, !0), void v(this.elements.progress, !0);
        }
        w(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
        var e = w(this.elements.display.duration);
        !e && this.config.displayDuration && this.paused && $.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && $.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), this.config.markers.enabled && $.setMarkers.call(this), $.updateSeekTooltip.call(this)
      }
    },
    toggleMenuButton(e, t) {
      v(this.elements.settings.buttons[e], !t)
    },
    updateSetting(e, t, i) {
      const s = this.elements.settings.panels[e];
      let n = null, r = t;
      if ("captions" === e) {
        n = this.currentTrack;
      }
      else {
        if (n = x(i) ? this[e] : i, x(n) && (n = this.config[e].default), !x(this.options[e]) && !this.options[e].includes(n)) {
          return void this.debug.warn(`Unsupported value of '${n}' for ` + e);
        }
        if (!this.config[e].options.includes(n)) {
          return void this.debug.warn(`Disabled value of '${n}' for ` + e)
        }
      }
      if (w(r) || (r = s && s.querySelector('[role="menu"]')), w(r)) {
        this.elements.settings.buttons[e].querySelector("." + this.config.classNames.menu.value).innerHTML = $.getLabel.call(this, e, n);
        const o = r && r.querySelector(`[value="${n}"]`);
        w(o) && (o.checked = !0)
      }
    },
    getLabel(e, t) {
      switch (e) {
        case"speed":
          return 1 === t ? O.get("normal", this.config) : t + "&times;";
        case"quality":
          if (y(t)) {
            const e = O.get("qualityLabel." + t, this.config);
            return e.length ? e : t + "p"
          }
          return je(t);
        case"captions":
          return z.getLabel.call(this);
        default:
          return null
      }
    },
    setQualityMenu(e) {
      if (w(this.elements.settings.panels.quality)) {
        const t = "quality",
          i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
        h(e) && (this.options.quality = Ce(e).filter(e => this.config.quality.options.includes(e)));
        e = !x(this.options.quality) && 1 < this.options.quality.length;
        if ($.toggleMenuButton.call(this, t, e), ye(i), $.checkMenu.call(this), e) {
          const s = e => {
            e = O.get("qualityBadge." + e, this.config);
            return e.length ? $.createBadge.call(this, e) : null
          };
          this.options.quality.sort((e, t) => {
            const i = this.config.quality.options;
            return i.indexOf(e) > i.indexOf(t) ? 1 : -1
          }).forEach(e => {
            $.createMenuItem.call(this, {
              value: e,
              list: i,
              type: t,
              title: $.getLabel.call(this, "quality", e),
              badge: s(e)
            })
          }), $.updateSetting.call(this, t, i)
        }
      }
    },
    setCaptionsMenu() {
      if (w(this.elements.settings.panels.captions)) {
        const i = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
          e = z.getTracks.call(this), t = Boolean(e.length);
        if ($.toggleMenuButton.call(this, "captions", t), ye(i), $.checkMenu.call(this), t) {
          const s = e.map((e, t) => ({
            value: t,
            checked: this.captions.toggled && this.currentTrack === t,
            title: z.getLabel.call(this, e),
            badge: e.language && $.createBadge.call(this, e.language.toUpperCase()),
            list: i,
            type: "language"
          }));
          s.unshift({
            value: -1,
            checked: !this.captions.toggled,
            title: O.get("disabled", this.config),
            list: i,
            type: "language"
          }), s.forEach($.createMenuItem.bind(this)), $.updateSetting.call(this, "captions", i)
        }
      }
    },
    setSpeedMenu() {
      if (w(this.elements.settings.panels.speed)) {
        const t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
        this.options.speed = this.options.speed.filter(e => e >= this.minimumSpeed && e <= this.maximumSpeed);
        var e = !x(this.options.speed) && 1 < this.options.speed.length;
        $.toggleMenuButton.call(this, "speed", e), ye(t), $.checkMenu.call(this), e && (this.options.speed.forEach(e => {
          $.createMenuItem.call(this, {
            value: e,
            list: t,
            type: "speed",
            title: $.getLabel.call(this, "speed", e)
          })
        }), $.updateSetting.call(this, "speed", t))
      }
    },
    checkMenu() {
      var e = this.elements.settings["buttons"],
        e = !x(e) && Object.values(e).some(e => !e.hidden);
      v(this.elements.settings.menu, !e)
    },
    focusFirstMenuItem(t, i = !1) {
      if (!this.elements.settings.popup.hidden) {
        let e = t;
        t = (e = w(e) ? e : Object.values(this.elements.settings.panels).find(e => !e.hidden)).querySelector('[role^="menuitem"]');
        xe.call(this, t, i)
      }
    },
    toggleMenu(t) {
      const i = this.elements.settings["popup"],
        s = this.elements.buttons.settings;
      if (w(i) && w(s)) {
        const n = i["hidden"];
        let e = n;
        if (b(t)) {
          e = t;
        }
        else if (u(t) && "Escape" === t.key) {
          e = !1;
        }
        else if (d(t)) {
          const n = c(t.composedPath) ? t.composedPath()[0] : t.target,
            r = i.contains(n);
          if (r || !r && t.target !== s && e) {
            return
          }
        }
        s.setAttribute("aria-expanded", e), v(i, !e), T(this.elements.container, this.config.classNames.menu.open, e), e && u(t) ? $.focusFirstMenuItem.call(this, null, !0) : e || n || xe.call(this, s, u(t))
      }
    },
    getMenuSize(e) {
      const t = e.cloneNode(!0);
      t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
      var e = t.scrollWidth, i = t.scrollHeight;
      return f(t), {width: e, height: i}
    },
    showMenuPanel(e = "", t = !1) {
      var i = this.elements.container.querySelector(`#plyr-settings-${this.id}-` + e);
      if (w(i)) {
        const s = i.parentNode, n = Array.from(s.children).find(e => !e.hidden);
        if (k.transitions && !k.reducedMotion) {
          s.style.width = n.scrollWidth + "px", s.style.height = n.scrollHeight + "px";
          const e = $.getMenuSize.call(this, i), t = e => {
            e.target === s && ["width", "height"].includes(e.propertyName) && (s.style.width = "", s.style.height = "", Ee.call(this, s, he, t))
          };
          M.call(this, s, he, t), s.style.width = e.width + "px", s.style.height = e.height + "px"
        }
        v(n, !0), v(i, !1), $.focusFirstMenuItem.call(this, i, t)
      }
    },
    setDownloadUrl() {
      const e = this.elements.buttons.download;
      w(e) && e.setAttribute("href", this.download)
    },
    create(a) {
      const {
          bindMenuItemShortcuts: l,
          createButton: i,
          createProgress: e,
          createRange: s,
          createTime: c,
          setQualityMenu: t,
          setSpeedMenu: n,
          showMenuPanel: d
        } = $,
        r = (this.elements.controls = null, h(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large")), _("div", g(this.config.selectors.controls.wrapper))),
        u = (this.elements.controls = r, {class: "plyr__controls__item"});
      return Ce(h(this.config.controls) ? this.config.controls : []).forEach(t => {
        if ("restart" === t && r.appendChild(i.call(this, "restart", u)), "rewind" === t && r.appendChild(i.call(this, "rewind", u)), "play" === t && r.appendChild(i.call(this, "play", u)), "fast-forward" === t && r.appendChild(i.call(this, "fast-forward", u)), "progress" === t) {
          const l = _("div", {class: u.class + " plyr__progress__container"}),
            i = _("div", g(this.config.selectors.progress));
          if (i.appendChild(s.call(this, "seek", {id: "plyr-seek-" + a.id})), i.appendChild(e.call(this, "buffer")), this.config.tooltips.seek) {
            const a = _("span", {class: this.config.classNames.tooltip}, "00:00");
            i.appendChild(a), this.elements.display.seekTooltip = a
          }
          this.elements.progress = i, l.appendChild(this.elements.progress), r.appendChild(l)
        }
        if ("current-time" === t && r.appendChild(c.call(this, "currentTime", u)), "duration" === t && r.appendChild(c.call(this, "duration", u)), "mute" === t || "volume" === t) {
          let e = this.elements["volume"];
          if (w(e) && r.contains(e) || (e = _("div", m({}, u, {class: (u.class + " plyr__volume").trim()})), this.elements.volume = e, r.appendChild(e)), "mute" === t && e.appendChild(i.call(this, "mute")), "volume" === t && !p.isIos) {
            const i = {max: 1, step: .05, value: this.config.volume};
            e.appendChild(s.call(this, "volume", m(i, {id: "plyr-volume-" + a.id})))
          }
        }
        if ("captions" === t && r.appendChild(i.call(this, "captions", u)), "settings" === t && !x(this.config.settings)) {
          const e = _("div", m({}, u, {
              class: (u.class + " plyr__menu").trim(),
              hidden: ""
            })), s = (e.appendChild(i.call(this, "settings", {
              "aria-haspopup": !0,
              "aria-controls": "plyr-settings-" + a.id,
              "aria-expanded": !1
            })), _("div", {
              class: "plyr__menu__container",
              id: "plyr-settings-" + a.id,
              hidden: ""
            })), c = _("div"), t = _("div", {id: `plyr-settings-${a.id}-home`}),
            o = _("div", {role: "menu"});
          t.appendChild(o), c.appendChild(t), this.elements.settings.panels.home = t, this.config.settings.forEach(e => {
            const t = _("button", m(g(this.config.selectors.buttons.settings), {
                type: "button",
                class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                role: "menuitem",
                "aria-haspopup": !0,
                hidden: ""
              })), i = (l.call(this, t, e), M.call(this, t, "click", () => {
                d.call(this, e, !1)
              }), _("span", null, O.get(e, this.config))),
              s = _("span", {class: this.config.classNames.menu.value}),
              n = (s.innerHTML = a[e], i.appendChild(s), t.appendChild(i), o.appendChild(t), _("div", {
                id: `plyr-settings-${a.id}-` + e,
                hidden: ""
              })), r = _("button", {
                type: "button",
                class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
              });
            r.appendChild(_("span", {"aria-hidden": !0}, O.get(e, this.config))), r.appendChild(_("span", {class: this.config.classNames.hidden}, O.get("menuBack", this.config))), M.call(this, n, "keydown", e => {
              "ArrowLeft" === e.key && (e.preventDefault(), e.stopPropagation(), d.call(this, "home", !0))
            }, !1), M.call(this, r, "click", () => {
              d.call(this, "home", !1)
            }), n.appendChild(r), n.appendChild(_("div", {role: "menu"})), c.appendChild(n), this.elements.settings.buttons[e] = t, this.elements.settings.panels[e] = n
          }), s.appendChild(c), e.appendChild(s), r.appendChild(e), this.elements.settings.popup = s, this.elements.settings.menu = e
        }
        if ("pip" === t && k.pip && r.appendChild(i.call(this, "pip", u)), "airplay" === t && k.airplay && r.appendChild(i.call(this, "airplay", u)), "download" === t) {
          const a = m({}, u, {
              element: "a",
              href: this.download,
              target: "_blank"
            }),
            l = (this.isHTML5 && (a.download = ""), this.config.urls)["download"];
          !ue(l) && this.isEmbed && m(a, {
            icon: "logo-" + this.provider,
            label: this.provider
          }), r.appendChild(i.call(this, "download", a))
        }
        "fullscreen" === t && r.appendChild(i.call(this, "fullscreen", u))
      }), this.isHTML5 && t.call(this, L.getQualityOptions.call(this)), n.call(this), r
    },
    inject() {
      if (this.config.loadSprite) {
        const t = $.getIconUrl.call(this);
        t.cors && Be(t.url, "sprite-plyr")
      }
      this.id = Math.floor(1e4 * Math.random());
      let t = null;
      this.elements.controls = null;
      const e = {
        id: this.id,
        seektime: this.config.seekTime,
        title: this.config.title
      };
      let i = !0;
      c(this.config.controls) && (this.config.controls = this.config.controls.call(this, e)), this.config.controls || (this.config.controls = []), w(this.config.controls) || l(this.config.controls) ? t = this.config.controls : (t = $.create.call(this, {
        id: this.id,
        seektime: this.config.seekTime,
        speed: this.speed,
        quality: this.quality,
        captions: z.getLabel.call(this)
      }), i = !1);
      let s;
      if (i && l(this.config.controls) && (t = (() => {
        let i = t;
        return Object.entries(e).forEach(([e, t]) => {
          i = De(i, `{${e}}`, t)
        }), i
      })()), l(this.config.selectors.controls.container) && (s = document.querySelector(this.config.selectors.controls.container)), (s = w(s) ? s : this.elements.container)[w(t) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", t), w(this.elements.controls) || $.findElements.call(this), !x(this.elements.buttons)) {
        const t = t => {
          const i = this.config.classNames.controlPressed;
          Object.defineProperty(t, "pressed", {
            enumerable: !0,
            get: () => we(t, i),
            set(e = !1) {
              T(t, i, e)
            }
          })
        };
        Object.values(this.elements.buttons).filter(Boolean).forEach(e => {
          h(e) || ce(e) ? Array.from(e).filter(Boolean).forEach(t) : t(e)
        })
      }
      if (p.isEdge && pe(s), this.config.tooltips.controls) {
        const {classNames: t, selectors: e} = this.config,
          i = `${e.controls.wrapper} ${e.labels} .` + t.hidden,
          s = S.call(this, i);
        Array.from(s).forEach(e => {
          T(e, this.config.classNames.hidden, !1), T(e, this.config.classNames.tooltip, !0)
        })
      }
    },
    setMediaMetadata() {
      try {
        "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({
          title: this.config.mediaMetadata.title,
          artist: this.config.mediaMetadata.artist,
          album: this.config.mediaMetadata.album,
          artwork: this.config.mediaMetadata.artwork
        }))
      }
      catch (e) {
      }
    },
    setMarkers() {
      var e;
      if (this.duration && !this.elements.markers) {
        const t = null == (e = this.config.markers) || null == (e = e.points) ? void 0 : e.filter(({time: e}) => 0 < e && e < this.duration);
        if (null != t && t.length) {
          const i = document.createDocumentFragment(),
            n = document.createDocumentFragment();
          let s = null;
          const r = this.config.classNames.tooltip + "--visible",
            o = e => T(s, r, e);
          t.forEach(e => {
            const t = _("span", {class: this.config.classNames.marker}, ""),
              i = e.time / this.duration * 100 + "%";
            s && (t.addEventListener("mouseenter", () => {
              e.label || (s.style.left = i, s.innerHTML = e.label, o(!0))
            }), t.addEventListener("mouseleave", () => {
              o(!1)
            })), t.addEventListener("click", () => {
              this.currentTime = e.time
            }), t.style.left = i, n.appendChild(t)
          }), i.appendChild(n), this.config.tooltips.seek || (s = _("span", {class: this.config.classNames.tooltip}, ""), i.appendChild(s)), this.elements.markers = {
            points: n,
            tip: s
          }, this.elements.progress.appendChild(i)
        }
      }
    }
  };

  function Ye(e, t = !0) {
    let i = e;
    if (t) {
      const e = document.createElement("a");
      e.href = i, i = e.href
    }
    try {
      return new URL(i)
    }
    catch (e) {
      return null
    }
  }

  function Ve(e) {
    const i = new URLSearchParams;
    return n(e) && Object.entries(e).forEach(([e, t]) => {
      i.set(e, t)
    }), i
  }

  const z = {
      setup() {
        if (this.supported.ui) {
          if (!this.isVideo || this.isYouTube || this.isHTML5 && !k.textTracks) {
            h(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && $.setCaptionsMenu.call(this);
          }
          else {
            var i;
            if (w(this.elements.captions) || (this.elements.captions = _("div", g(this.config.selectors.captions)), s = this.elements.captions, i = this.elements.wrapper, w(s) && w(i) && i.parentNode.insertBefore(s, i.nextSibling)), p.isIE && window.URL) {
              const s = this.media.querySelectorAll("track");
              Array.from(s).forEach(t => {
                var e = t.getAttribute("src"), i = Ye(e);
                null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && qe(e, "blob").then(e => {
                  t.setAttribute("src", window.URL.createObjectURL(e))
                }).catch(() => {
                  f(t)
                })
              })
            }
            var s = Ce((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(e => e.split("-")[0]));
            let e = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase(),
              t = ("auto" === e && ([e] = s), this.storage.get("captions"));
            if (b(t) || ({active: t} = this.config.captions), Object.assign(this.captions, {
              toggled: !1,
              active: t,
              language: e,
              languages: s
            }), this.isHTML5) {
              const s = this.config.captions.update ? "addtrack removetrack" : "removetrack";
              M.call(this, this.media.textTracks, s, z.update.bind(this))
            }
            setTimeout(z.update.bind(this), 0)
          }
        }
      }, update() {
        const e = z.getTracks.call(this, !0), {
          active: t,
          language: i,
          meta: s,
          currentTrackNode: n
        } = this.captions, r = Boolean(e.find(e => e.language === i));
        this.isHTML5 && this.isVideo && e.filter(e => !s.get(e)).forEach(e => {
          this.debug.log("Track added", e), s.set(e, {default: "showing" === e.mode}), "showing" === e.mode && (e.mode = "hidden"), M.call(this, e, "cuechange", () => z.updateCues.call(this))
        }), (r && this.language !== i || !e.includes(n)) && (z.setLanguage.call(this, i), z.toggle.call(this, t && r)), this.elements && T(this.elements.container, this.config.classNames.captions.enabled, !x(e)), h(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && $.setCaptionsMenu.call(this)
      }, toggle(e, t = !0) {
        if (this.supported.ui) {
          const i = this.captions["toggled"],
            s = this.config.classNames.captions.active, n = a(e) ? !i : e;
          if (n !== i) {
            if (t || (this.captions.active = n, this.storage.set({captions: n})), !this.language && n && !t) {
              const e = z.getTracks.call(this),
                t = z.findTrack.call(this, [this.captions.language, ...this.captions.languages], !0);
              return this.captions.language = t.language, void z.set.call(this, e.indexOf(t))
            }
            this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n), T(this.elements.container, s, n), this.captions.toggled = n, $.updateSetting.call(this, "captions"), P.call(this, this.media, n ? "captionsenabled" : "captionsdisabled")
          }
          setTimeout(() => {
            n && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden")
          })
        }
      }, set(e, t = !0) {
        var i, s = z.getTracks.call(this);
        -1 !== e ? y(e) ? e in s ? (this.captions.currentTrack !== e && (i = ((s = s[this.captions.currentTrack = e]) || {})["language"], this.captions.currentTrackNode = s, $.updateSetting.call(this, "captions"), t || (this.captions.language = i, this.storage.set({language: i})), this.isVimeo && this.embed.enableTextTrack(i), P.call(this, this.media, "languagechange")), z.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && z.updateCues.call(this)) : this.debug.warn("Track not found", e) : this.debug.warn("Invalid caption argument", e) : z.toggle.call(this, !1, t)
      }, setLanguage(e, t = !0) {
        if (l(e)) {
          var i = e.toLowerCase();
          this.captions.language = i;
          const s = z.getTracks.call(this), n = z.findTrack.call(this, [i]);
          z.set.call(this, s.indexOf(n), t)
        }
        else {
          this.debug.warn("Invalid language argument", e)
        }
      }, getTracks(t = !1) {
        return Array.from((this.media || {}).textTracks || []).filter(e => !this.isHTML5 || t || this.captions.meta.has(e)).filter(e => ["captions", "subtitles"].includes(e.kind))
      }, findTrack(e, t = !1) {
        const i = z.getTracks.call(this),
          s = e => Number((this.captions.meta.get(e) || {}).default),
          n = Array.from(i).sort((e, t) => s(t) - s(e));
        let r;
        return e.every(t => !(r = n.find(e => e.language === t))), r || (t ? n[0] : void 0)
      }, getCurrentTrack() {
        return z.getTracks.call(this)[this.currentTrack]
      }, getLabel(e) {
        let t = e;
        return !de(t) && k.textTracks && this.captions.toggled && (t = z.getCurrentTrack.call(this)), de(t) ? x(t.label) ? x(t.language) ? O.get("enabled", this.config) : e.language.toUpperCase() : t.label : O.get("disabled", this.config)
      }, updateCues(t) {
        if (this.supported.ui) {
          if (w(this.elements.captions)) {
            if (a(t) || Array.isArray(t)) {
              let e = t;
              if (!e) {
                const t = z.getCurrentTrack.call(this);
                e = Array.from((t || {}).activeCues || []).map(e => e.getCueAsHTML()).map(Ne)
              }
              var i = e.map(e => e.trim()).join("\n");
              if (i !== this.elements.captions.innerHTML) {
                ye(this.elements.captions);
                const t = _("span", g(this.config.selectors.caption));
                t.innerHTML = i, this.elements.captions.appendChild(t), P.call(this, this.media, "cuechange")
              }
            }
            else {
              this.debug.warn("updateCues: Invalid input", t);
            }
          }
          else {
            this.debug.warn("No captions element to render to")
          }
        }
      }
    }, Xe = {
      enabled: !0,
      title: "",
      debug: !1,
      autoplay: !1,
      autopause: !0,
      playsinline: !0,
      seekTime: 10,
      volume: 1,
      muted: !1,
      duration: null,
      displayDuration: !0,
      invertTime: !0,
      toggleInvert: !0,
      ratio: null,
      clickToPlay: !0,
      hideControls: !0,
      resetOnEnd: !1,
      disableContextMenu: !0,
      loadSprite: !0,
      iconPrefix: "plyr",
      iconUrl: "https://cdn.plyr.io/3.7.2/plyr.svg",
      blankVideo: "https://cdn.plyr.io/static/blank.mp4",
      quality: {
        default: 576,
        options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
        forced: !1,
        onChange: null
      },
      loop: {active: !1},
      speed: {selected: 1, options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]},
      keyboard: {focused: !0, global: !1},
      tooltips: {controls: !1, seek: !0},
      captions: {active: !1, language: "auto", update: !1},
      fullscreen: {enabled: !0, fallback: !0, iosNative: !1},
      storage: {enabled: !0, key: "plyr"},
      controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
      settings: ["captions", "quality", "speed"],
      i18n: {
        restart: "Restart",
        rewind: "Rewind {seektime}s",
        play: "Play",
        pause: "Pause",
        fastForward: "Forward {seektime}s",
        seek: "Seek",
        seekLabel: "{currentTime} of {duration}",
        played: "Played",
        buffered: "Buffered",
        currentTime: "Current time",
        duration: "Duration",
        volume: "Volume",
        mute: "Mute",
        unmute: "Unmute",
        enableCaptions: "Enable captions",
        disableCaptions: "Disable captions",
        download: "Download",
        enterFullscreen: "Enter fullscreen",
        exitFullscreen: "Exit fullscreen",
        frameTitle: "Player for {title}",
        captions: "Captions",
        settings: "Settings",
        pip: "PIP",
        menuBack: "Go back to previous menu",
        speed: "Speed",
        normal: "Normal",
        quality: "Quality",
        loop: "Loop",
        start: "Start",
        end: "End",
        all: "All",
        reset: "Reset",
        disabled: "Disabled",
        enabled: "Enabled",
        advertisement: "Ad",
        qualityBadge: {
          2160: "4K",
          1440: "HD",
          1080: "HD",
          720: "HD",
          576: "SD",
          480: "SD"
        }
      },
      urls: {
        download: null,
        vimeo: {
          sdk: "https://player.vimeo.com/api/player.js",
          iframe: "https://player.vimeo.com/video/{0}?{1}",
          api: "https://vimeo.com/api/oembed.json?url={0}"
        },
        youtube: {
          sdk: "https://www.youtube.com/iframe_api",
          api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
        },
        googleIMA: {sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"}
      },
      listeners: {
        seek: null,
        play: null,
        pause: null,
        restart: null,
        rewind: null,
        fastForward: null,
        mute: null,
        volume: null,
        captions: null,
        download: null,
        fullscreen: null,
        pip: null,
        airplay: null,
        speed: null,
        quality: null,
        loop: null,
        language: null
      },
      events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
      selectors: {
        editable: "input, textarea, select, [contenteditable]",
        container: ".plyr",
        controls: {container: null, wrapper: ".plyr__controls"},
        labels: "[data-plyr]",
        buttons: {
          play: '[data-plyr="play"]',
          pause: '[data-plyr="pause"]',
          restart: '[data-plyr="restart"]',
          rewind: '[data-plyr="rewind"]',
          fastForward: '[data-plyr="fast-forward"]',
          mute: '[data-plyr="mute"]',
          captions: '[data-plyr="captions"]',
          download: '[data-plyr="download"]',
          fullscreen: '[data-plyr="fullscreen"]',
          pip: '[data-plyr="pip"]',
          airplay: '[data-plyr="airplay"]',
          settings: '[data-plyr="settings"]',
          loop: '[data-plyr="loop"]'
        },
        inputs: {
          seek: '[data-plyr="seek"]',
          volume: '[data-plyr="volume"]',
          speed: '[data-plyr="speed"]',
          language: '[data-plyr="language"]',
          quality: '[data-plyr="quality"]'
        },
        display: {
          currentTime: ".plyr__time--current",
          duration: ".plyr__time--duration",
          buffer: ".plyr__progress__buffer",
          loop: ".plyr__progress__loop",
          volume: ".plyr__volume--display"
        },
        progress: ".plyr__progress",
        captions: ".plyr__captions",
        caption: ".plyr__caption"
      },
      classNames: {
        type: "plyr--{0}",
        provider: "plyr--{0}",
        video: "plyr__video-wrapper",
        embed: "plyr__video-embed",
        videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
        embedContainer: "plyr__video-embed__container",
        poster: "plyr__poster",
        posterEnabled: "plyr__poster-enabled",
        ads: "plyr__ads",
        control: "plyr__control",
        controlPressed: "plyr__control--pressed",
        playing: "plyr--playing",
        paused: "plyr--paused",
        stopped: "plyr--stopped",
        loading: "plyr--loading",
        hover: "plyr--hover",
        tooltip: "plyr__tooltip",
        cues: "plyr__cues",
        marker: "plyr__progress__marker",
        hidden: "plyr__sr-only",
        hideControls: "plyr--hide-controls",
        isIos: "plyr--is-ios",
        isTouch: "plyr--is-touch",
        uiSupported: "plyr--full-ui",
        noTransition: "plyr--no-transition",
        display: {time: "plyr__time"},
        menu: {
          value: "plyr__menu__value",
          badge: "plyr__badge",
          open: "plyr--menu-open"
        },
        captions: {
          enabled: "plyr--captions-enabled",
          active: "plyr--captions-active"
        },
        fullscreen: {
          enabled: "plyr--fullscreen-enabled",
          fallback: "plyr--fullscreen-fallback"
        },
        pip: {supported: "plyr--pip-supported", active: "plyr--pip-active"},
        airplay: {
          supported: "plyr--airplay-supported",
          active: "plyr--airplay-active"
        },
        tabFocus: "plyr__tab-focus",
        previewThumbnails: {
          thumbContainer: "plyr__preview-thumb",
          thumbContainerShown: "plyr__preview-thumb--is-shown",
          imageContainer: "plyr__preview-thumb__image-container",
          timeContainer: "plyr__preview-thumb__time-container",
          scrubbingContainer: "plyr__preview-scrubbing",
          scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
        }
      },
      attributes: {
        embed: {
          provider: "data-plyr-provider",
          id: "data-plyr-embed-id",
          hash: "data-plyr-embed-hash"
        }
      },
      ads: {enabled: !1, publisherId: "", tagUrl: ""},
      previewThumbnails: {enabled: !1, src: ""},
      vimeo: {
        byline: !1,
        portrait: !1,
        title: !1,
        speed: !0,
        transparent: !1,
        customControls: !0,
        referrerPolicy: null,
        premium: !1
      },
      youtube: {
        rel: 0,
        showinfo: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        customControls: !0,
        noCookie: !1
      },
      mediaMetadata: {title: "", artist: "", album: "", artwork: []},
      markers: {enabled: !1, points: []}
    }, Ge = "picture-in-picture",
    D = {html5: "html5", youtube: "youtube", vimeo: "vimeo"}, Ue = () => {
    };

  class Qe {
    constructor(e = !1) {
      this.enabled = window.console && e, this.enabled && this.log("Debugging enabled")
    }

    get log() {
      return this.enabled ? Function.prototype.bind.call(console.log, console) : Ue
    }

    get warn() {
      return this.enabled ? Function.prototype.bind.call(console.warn, console) : Ue
    }

    get error() {
      return this.enabled ? Function.prototype.bind.call(console.error, console) : Ue
    }
  }

  class j {
    constructor(e) {
      r(this, "onChange", () => {
        if (this.enabled) {
          const t = this.player.elements.buttons.fullscreen;
          w(t) && (t.pressed = this.active);
          var e = this.target === this.player.media ? this.target : this.player.elements.container;
          P.call(this.player, e, this.active ? "enterfullscreen" : "exitfullscreen", !0)
        }
      }), r(this, "toggleFallback", (t = !1) => {
        if (t ? this.scrollPosition = {
          x: window.scrollX || 0,
          y: window.scrollY || 0
        } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = t ? "hidden" : "", T(this.target, this.player.config.classNames.fullscreen.fallback, t), p.isIos) {
          let e = document.head.querySelector('meta[name="viewport"]');
          const s = "viewport-fit=cover";
          e || (e = document.createElement("meta")).setAttribute("name", "viewport");
          var i = l(e.content) && e.content.includes(s);
          t ? (this.cleanupViewport = !i, i || (e.content += "," + s)) : this.cleanupViewport && (e.content = e.content.split(",").filter(e => e.trim() !== s).join(","))
        }
        this.onChange()
      }), r(this, "trapFocus", e => {
        if (!p.isIos && this.active && "Tab" === e.key) {
          const t = document.activeElement,
            i = S.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"), [s] = i,
            n = i[i.length - 1];
          t !== n || e.shiftKey ? t === s && e.shiftKey && (n.focus(), e.preventDefault()) : (s.focus(), e.preventDefault())
        }
      }), r(this, "update", () => {
        var e;
        this.enabled ? (e = this.forceFallback ? "Fallback (forced)" : j.native ? "Native" : "Fallback", this.player.debug.log(e + " fullscreen enabled")) : this.player.debug.log("Fullscreen not supported and fallback disabled"), T(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
      }), r(this, "enter", () => {
        this.enabled && (p.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !j.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? x(this.prefix) || this.target[this.prefix + "Request" + this.property]() : this.target.requestFullscreen({navigationUI: "hide"}))
      }), r(this, "exit", () => {
        var e;
        this.enabled && (p.isIos && this.player.config.fullscreen.iosNative ? (this.target.webkitExitFullscreen(), I(this.player.play())) : !j.native || this.forceFallback ? this.toggleFallback(!1) : this.prefix ? x(this.prefix) || (e = "moz" === this.prefix ? "Cancel" : "Exit", document[this.prefix + e + this.property]()) : (document.cancelFullScreen || document.exitFullscreen).call(document))
      }), r(this, "toggle", () => {
        this.active ? this.exit() : this.enter()
      }), this.player = e, this.prefix = j.prefix, this.property = j.property, this.scrollPosition = {
        x: 0,
        y: 0
      }, this.forceFallback = "force" === e.config.fullscreen.fallback, this.player.elements.fullscreen = e.config.fullscreen.container && function (e, t) {
        const i = Element["prototype"];
        return (i.closest || function () {
          let e = this;
          do {
            if (E.matches(e, t)) {
              return e
            }
          } while (null !== (e = e.parentElement || e.parentNode) && 1 === e.nodeType);
          return null
        }).call(e, t)
      }(this.player.elements.container, e.config.fullscreen.container), M.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : this.prefix + "fullscreenchange", () => {
        this.onChange()
      }), M.call(this.player, this.player.elements.container, "dblclick", e => {
        w(this.player.elements.controls) && this.player.elements.controls.contains(e.target) || this.player.listeners.proxy(e, this.toggle, "fullscreen")
      }), M.call(this, this.player.elements.container, "keydown", e => this.trapFocus(e)), this.update()
    }

    static get native() {
      return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
    }

    static get prefix() {
      if (c(document.exitFullscreen)) {
        return "";
      }
      let t = "";
      return ["webkit", "moz", "ms"].some(e => !(!c(document[e + "ExitFullscreen"]) && !c(document[e + "CancelFullScreen"]) || (t = e, 0))), t
    }

    static get property() {
      return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
    }

    get usingNative() {
      return j.native && !this.forceFallback
    }

    get enabled() {
      return (j.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
    }

    get active() {
      if (!this.enabled) {
        return !1;
      }
      if (!j.native || this.forceFallback) {
        return we(this.target, this.player.config.classNames.fullscreen.fallback);
      }
      var e = this.prefix ? this.target.getRootNode()["" + this.prefix + this.property + "Element"] : this.target.getRootNode().fullscreenElement;
      return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target
    }

    get target() {
      return p.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
    }
  }

  function Ke(n, r = 1) {
    return new Promise((e, t) => {
      const i = new Image, s = () => {
        delete i.onload, delete i.onerror, (i.naturalWidth >= r ? e : t)(i)
      };
      Object.assign(i, {onload: s, onerror: s, src: n})
    })
  }

  const N = {
    addStyleHook() {
      T(this.elements.container, this.config.selectors.container.replace(".", ""), !0), T(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
    }, toggleNativeControls(e = !1) {
      e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
    }, build() {
      if (this.listeners.media(), !this.supported.ui) {
        return this.debug.warn(`Basic support only for ${this.provider} ` + this.type), void N.toggleNativeControls.call(this, !0);
      }
      w(this.elements.controls) || ($.inject.call(this), this.listeners.controls()), N.toggleNativeControls.call(this), this.isHTML5 && z.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, $.updateVolume.call(this), $.timeUpdate.call(this), $.durationUpdate.call(this), N.checkPlaying.call(this), T(this.elements.container, this.config.classNames.pip.supported, k.pip && this.isHTML5 && this.isVideo), T(this.elements.container, this.config.classNames.airplay.supported, k.airplay && this.isHTML5), T(this.elements.container, this.config.classNames.isIos, p.isIos), T(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(() => {
        P.call(this, this.media, "ready")
      }, 0), N.setTitle.call(this), this.poster && N.setPoster.call(this, this.poster, !1).catch(() => {
      }), this.config.duration && $.durationUpdate.call(this), this.config.mediaMetadata && $.setMediaMetadata.call(this)
    }, setTitle() {
      let t = O.get("play", this.config);
      if (l(this.config.title) && !x(this.config.title) && (t += ", " + this.config.title), Array.from(this.elements.buttons.play || []).forEach(e => {
        e.setAttribute("aria-label", t)
      }), this.isEmbed) {
        const t = C.call(this, "iframe");
        if (w(t)) {
          const e = x(this.config.title) ? "video" : this.config.title,
            i = O.get("frameTitle", this.config);
          t.setAttribute("title", i.replace("{title}", e))
        }
      }
    }, togglePoster(e) {
      T(this.elements.container, this.config.classNames.posterEnabled, e)
    }, setPoster(t, e = !0) {
      return e && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", t), this.elements.poster.removeAttribute("hidden"), function () {
        return new Promise(e => this.ready ? setTimeout(e, 0) : M.call(this, this.elements.container, "ready", e)).then(() => {
        })
      }.call(this).then(() => Ke(t)).catch(e => {
        throw t === this.poster && N.togglePoster.call(this, !1), e
      }).then(() => {
        if (t !== this.poster) {
          throw new Error("setPoster cancelled by later call to setPoster")
        }
      }).then(() => (Object.assign(this.elements.poster.style, {
        backgroundImage: `url('${t}')`,
        backgroundSize: ""
      }), N.togglePoster.call(this, !0), t)))
    }, checkPlaying(e) {
      T(this.elements.container, this.config.classNames.playing, this.playing), T(this.elements.container, this.config.classNames.paused, this.paused), T(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(e => {
        Object.assign(e, {pressed: this.playing}), e.setAttribute("aria-label", O.get(this.playing ? "pause" : "play", this.config))
      }), d(e) && "timeupdate" === e.type || N.toggleControls.call(this)
    }, checkLoading(e) {
      this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(() => {
        T(this.elements.container, this.config.classNames.loading, this.loading), N.toggleControls.call(this)
      }, this.loading ? 250 : 0)
    }, toggleControls(e) {
      var t, i = this.elements["controls"];
      i && this.config.hideControls && (t = this.touch && this.lastSeekTime + 2e3 > Date.now(), this.toggleControls(Boolean(e || this.loading || this.paused || i.pressed || i.hover || t)))
    }, migrateStyles() {
      Object.values({...this.media.style}).filter(e => !x(e) && l(e) && e.startsWith("--plyr")).forEach(e => {
        this.elements.container.style.setProperty(e, this.media.style.getPropertyValue(e)), this.media.style.removeProperty(e)
      }), x(this.media.style) && this.media.removeAttribute("style")
    }
  };

  class Ze {
    constructor(e) {
      r(this, "firstTouch", () => {
        const e = this["player"], t = e["elements"];
        e.touch = !0, T(t.container, e.config.classNames.isTouch, !0)
      }), r(this, "setTabFocus", e => {
        const t = this["player"], i = t["elements"], {
          key: s,
          type: n,
          timeStamp: r
        } = e;
        clearTimeout(this.focusTimer), "keydown" === n && "Tab" !== s || ("keydown" === n && (this.lastKeyDown = r), e = r - this.lastKeyDown <= 20, "focus" === n && !e || (e = t.config.classNames.tabFocus, T(S.call(t, "." + e), e, !1), "focusout" !== n && (this.focusTimer = setTimeout(() => {
          var e = document.activeElement;
          i.container.contains(e) && T(document.activeElement, t.config.classNames.tabFocus, !0)
        }, 10))))
      }), r(this, "global", (e = !0) => {
        var t = this["player"];
        t.config.keyboard.global && A.call(t, window, "keydown keyup", this.handleKey, e, !1), A.call(t, document.body, "click", this.toggleMenu, e), Se.call(t, document.body, "touchstart", this.firstTouch), A.call(t, document.body, "keydown focus blur focusout", this.setTabFocus, e, !1, !0)
      }), r(this, "container", () => {
        const a = this["player"], {config: e, elements: l, timers: s} = a,
          i = (!e.keyboard.global && e.keyboard.focused && M.call(a, l.container, "keydown keyup", this.handleKey, !1), M.call(a, l.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", e => {
            const t = l["controls"];
            t && "enterfullscreen" === e.type && (t.pressed = !1, t.hover = !1);
            let i = 0;
            ["touchstart", "touchmove", "mousemove"].includes(e.type) && (N.toggleControls.call(a, !0), i = a.touch ? 3e3 : 2e3), clearTimeout(s.controls), s.controls = setTimeout(() => N.toggleControls.call(a, !1), i)
          }), () => {
            if (a.isVimeo && !a.config.vimeo.premium) {
              const i = l.wrapper,
                s = a.fullscreen["active"], [n, r] = Le.call(a),
                o = Ae(`aspect-ratio: ${n} / ` + r);
              var e, t;
              s ? ([t, e] = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)], t = n / r < t / e, o ? (i.style.width = t ? "auto" : "100%", i.style.height = t ? "100%" : "auto") : (i.style.maxWidth = t ? e / r * n + "px" : null, i.style.margin = t ? "0 auto" : null)) : o ? (i.style.width = null, i.style.height = null) : (i.style.maxWidth = null, i.style.margin = null)
            }
          }), n = () => {
            clearTimeout(s.resized), s.resized = setTimeout(i, 50)
          };
        M.call(a, l.container, "enterfullscreen exitfullscreen", e => {
          var t = a.fullscreen["target"];
          t !== l.container || !a.isEmbed && x(a.config.ratio) || (i(), ("enterfullscreen" === e.type ? M : Ee).call(a, window, "resize", n))
        })
      }), r(this, "media", () => {
        const i = this["player"], s = i["elements"];
        if (M.call(i, i.media, "timeupdate seeking seeked", e => $.timeUpdate.call(i, e)), M.call(i, i.media, "durationchange loadeddata loadedmetadata", e => $.durationUpdate.call(i, e)), M.call(i, i.media, "ended", () => {
          i.isHTML5 && i.isVideo && i.config.resetOnEnd && (i.restart(), i.pause())
        }), M.call(i, i.media, "progress playing seeking seeked", e => $.updateProgress.call(i, e)), M.call(i, i.media, "volumechange", e => $.updateVolume.call(i, e)), M.call(i, i.media, "playing play pause ended emptied timeupdate", e => N.checkPlaying.call(i, e)), M.call(i, i.media, "waiting canplay seeked playing", e => N.checkLoading.call(i, e)), i.supported.ui && i.config.clickToPlay && !i.isAudio) {
          const t = C.call(i, "." + i.config.classNames.video);
          if (!w(t)) {
            return;
          }
          M.call(i, s.container, "click", e => {
            ![s.container, t].includes(e.target) && !t.contains(e.target) || i.touch && i.config.hideControls || (i.ended ? (this.proxy(e, i.restart, "restart"), this.proxy(e, () => {
              I(i.play())
            }, "play")) : this.proxy(e, () => {
              I(i.togglePlay())
            }, "play"))
          })
        }
        i.supported.ui && i.config.disableContextMenu && M.call(i, s.wrapper, "contextmenu", e => {
          e.preventDefault()
        }, !1), M.call(i, i.media, "volumechange", () => {
          i.storage.set({volume: i.volume, muted: i.muted})
        }), M.call(i, i.media, "ratechange", () => {
          $.updateSetting.call(i, "speed"), i.storage.set({speed: i.speed})
        }), M.call(i, i.media, "qualitychange", e => {
          $.updateSetting.call(i, "quality", null, e.detail.quality)
        }), M.call(i, i.media, "ready qualitychange", () => {
          $.setDownloadUrl.call(i)
        });
        const t = i.config.events.concat(["keyup", "keydown"]).join(" ");
        M.call(i, i.media, t, e => {
          let {detail: t = {}} = e;
          "error" === e.type && (t = i.media.error), P.call(i, s.container, e.type, !0, t)
        })
      }), r(this, "proxy", (e, t, i) => {
        const s = this["player"], n = s.config.listeners[i];
        let r = !0;
        !1 !== (r = c(n) ? n.call(s, e) : r) && c(t) && t.call(s, e)
      }), r(this, "bind", (e, t, i, s, n = !0) => {
        var r = this["player"], o = r.config.listeners[s], o = c(o);
        M.call(r, e, t, e => this.proxy(e, i, s), n && !o)
      }), r(this, "controls", () => {
        const o = this["player"], s = o["elements"],
          t = p.isIE ? "change" : "input";
        if (s.buttons.play && Array.from(s.buttons.play).forEach(e => {
          this.bind(e, "click", () => {
            I(o.togglePlay())
          }, "play")
        }), this.bind(s.buttons.restart, "click", o.restart, "restart"), this.bind(s.buttons.rewind, "click", () => {
          o.lastSeekTime = Date.now(), o.rewind()
        }, "rewind"), this.bind(s.buttons.fastForward, "click", () => {
          o.lastSeekTime = Date.now(), o.forward()
        }, "fastForward"), this.bind(s.buttons.mute, "click", () => {
          o.muted = !o.muted
        }, "mute"), this.bind(s.buttons.captions, "click", () => o.toggleCaptions()), this.bind(s.buttons.download, "click", () => {
          P.call(o, o.media, "download")
        }, "download"), this.bind(s.buttons.fullscreen, "click", () => {
          o.fullscreen.toggle()
        }, "fullscreen"), this.bind(s.buttons.pip, "click", () => {
          o.pip = "toggle"
        }, "pip"), this.bind(s.buttons.airplay, "click", o.airplay, "airplay"), this.bind(s.buttons.settings, "click", e => {
          e.stopPropagation(), e.preventDefault(), $.toggleMenu.call(o, e)
        }, null, !1), this.bind(s.buttons.settings, "keyup", e => {
          ["Space", "Enter"].includes(e.key) && ("Enter" !== e.key ? (e.preventDefault(), e.stopPropagation(), $.toggleMenu.call(o, e)) : $.focusFirstMenuItem.call(o, null, !0))
        }, null, !1), this.bind(s.settings.menu, "keydown", e => {
          "Escape" === e.key && $.toggleMenu.call(o, e)
        }), this.bind(s.inputs.seek, "mousedown mousemove", e => {
          var t = s.progress.getBoundingClientRect(),
            t = 100 / t.width * (e.pageX - t.left);
          e.currentTarget.setAttribute("seek-value", t)
        }), this.bind(s.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", e => {
          const t = e.currentTarget, i = "play-on-seeked";
          var s;
          u(e) && !["ArrowLeft", "ArrowRight"].includes(e.key) || (o.lastSeekTime = Date.now(), s = t.hasAttribute(i), e = ["mouseup", "touchend", "keyup"].includes(e.type), s && e ? (t.removeAttribute(i), I(o.play())) : !e && o.playing && (t.setAttribute(i, ""), o.pause()))
        }), p.isIos) {
          const s = S.call(o, 'input[type="range"]');
          Array.from(s).forEach(e => this.bind(e, t, e => pe(e.target)))
        }
        this.bind(s.inputs.seek, t, e => {
          const t = e.currentTarget;
          let i = t.getAttribute("seek-value");
          x(i) && (i = t.value), t.removeAttribute("seek-value"), o.currentTime = i / t.max * o.duration
        }, "seek"), this.bind(s.progress, "mouseenter mouseleave mousemove", e => $.updateSeekTooltip.call(o, e)), this.bind(s.progress, "mousemove touchmove", e => {
          const t = o["previewThumbnails"];
          t && t.loaded && t.startMove(e)
        }), this.bind(s.progress, "mouseleave touchend click", () => {
          const e = o["previewThumbnails"];
          e && e.loaded && e.endMove(!1, !0)
        }), this.bind(s.progress, "mousedown touchstart", e => {
          const t = o["previewThumbnails"];
          t && t.loaded && t.startScrubbing(e)
        }), this.bind(s.progress, "mouseup touchend", e => {
          const t = o["previewThumbnails"];
          t && t.loaded && t.endScrubbing(e)
        }), p.isWebkit && Array.from(S.call(o, 'input[type="range"]')).forEach(e => {
          this.bind(e, "input", e => $.updateRangeFill.call(o, e.target))
        }), o.config.toggleInvert && !w(s.display.duration) && this.bind(s.display.currentTime, "click", () => {
          0 !== o.currentTime && (o.config.invertTime = !o.config.invertTime, $.timeUpdate.call(o))
        }), this.bind(s.inputs.volume, t, e => {
          o.volume = e.target.value
        }, "volume"), this.bind(s.controls, "mouseenter mouseleave", e => {
          s.controls.hover = !o.touch && "mouseenter" === e.type
        }), s.fullscreen && Array.from(s.fullscreen.children).filter(e => !e.contains(s.container)).forEach(e => {
          this.bind(e, "mouseenter mouseleave", e => {
            s.controls && (s.controls.hover = !o.touch && "mouseenter" === e.type)
          })
        }), this.bind(s.controls, "mousedown mouseup touchstart touchend touchcancel", e => {
          s.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
        }), this.bind(s.controls, "focusin", () => {
          const {config: e, timers: t} = o;
          T(s.controls, e.classNames.noTransition, !0), N.toggleControls.call(o, !0), setTimeout(() => {
            T(s.controls, e.classNames.noTransition, !1)
          }, 0);
          var i = this.touch ? 3e3 : 4e3;
          clearTimeout(t.controls), t.controls = setTimeout(() => N.toggleControls.call(o, !1), i)
        }), this.bind(s.inputs.volume, "wheel", e => {
          const t = e.webkitDirectionInvertedFromDevice, [i, s] = [e.deltaX, -e.deltaY].map(e => t ? -e : e),
            n = Math.sign(Math.abs(i) > Math.abs(s) ? i : s);
          o.increaseVolume(n / 50);
          var r = o.media["volume"];
          (1 === n && r < 1 || -1 === n && 0 < r) && e.preventDefault()
        }, "volume", !1)
      }), this.player = e, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
    }

    handleKey(e) {
      const t = this["player"], i = t["elements"], {
        key: s,
        type: n,
        altKey: r,
        ctrlKey: o,
        metaKey: a,
        shiftKey: l
      } = e, c = "keydown" === n, d = c && s === this.lastKey;
      var u;
      if (!(r || o || a || l) && s) {
        if (c) {
          const n = document.activeElement;
          if (w(n)) {
            const s = t.config.selectors["editable"], r = i.inputs["seek"];
            if (n !== r && E(n, s)) {
              return;
            }
            if ("Space" === e.key && E(n, 'button, [role^="menuitem"]')) {
              return
            }
          }
          switch (["Space", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"].includes(s) && (e.preventDefault(), e.stopPropagation()), s) {
            case"0":
            case"1":
            case"2":
            case"3":
            case"4":
            case"5":
            case"6":
            case"7":
            case"8":
            case"9":
              d || (u = parseInt(s, 10), t.currentTime = t.duration / 10 * u);
              break;
            case"Space":
            case"k":
              d || I(t.togglePlay());
              break;
            case"ArrowUp":
              t.increaseVolume(.1);
              break;
            case"ArrowDown":
              t.decreaseVolume(.1);
              break;
            case"m":
              d || (t.muted = !t.muted);
              break;
            case"ArrowRight":
              t.forward();
              break;
            case"ArrowLeft":
              t.rewind();
              break;
            case"f":
              t.fullscreen.toggle();
              break;
            case"c":
              d || t.toggleCaptions();
              break;
            case"l":
              t.loop = !t.loop
          }
          "Escape" === s && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = s
        }
        else {
          this.lastKey = null
        }
      }
    }

    toggleMenu(e) {
      $.toggleMenu.call(this.player, e)
    }
  }

  var Je, et = function () {
    var p = function () {
    }, o = {}, d = {}, u = {};

    function a(e, t) {
      if (e) {
        var i = u[e];
        if (d[e] = t, i) {
          for (; i.length;) {
            i[0](e, t), i.splice(0, 1)
          }
        }
      }
    }

    function h(e, t) {
      e.call && (e = {success: e}), t.length ? (e.error || p)(t) : (e.success || p)(e)
    }

    function l(e, s, t) {
      for (var n = (e = e.push ? e : [e]).length, i = n, r = [], o = function (e, t, i) {
        if ("e" == t && r.push(e), "b" == t) {
          if (!i) {
            return;
          }
          r.push(e)
        }
        --n || s(r)
      }, a = 0; a < i; a++) {
        !function i(s, n, r, o) {
          var a, l, e = document, t = r.async, c = (r.numRetries || 0) + 1,
            d = r.before || p, u = s.replace(/[\?|#].*$/, ""),
            h = s.replace(/^(css|img)!/, "");
          o = o || 0, /(^css!|\.css$)/.test(u) ? ((l = e.createElement("link")).rel = "stylesheet", l.href = h, (a = "hideFocus" in l) && l.relList && (a = 0, l.rel = "preload", l.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(u) ? (l = e.createElement("img")).src = h : ((l = e.createElement("script")).src = s, l.async = void 0 === t || t), l.onload = l.onerror = l.onbeforeload = function (e) {
            var t = e.type[0];
            if (a) {
              try {
                l.sheet.cssText.length || (t = "e")
              }
              catch (e) {
                18 != e.code && (t = "e")
              }
            }
            if ("e" == t) {
              if ((o += 1) < c) {
                return i(s, n, r, o)
              }
            }
            else if ("preload" == l.rel && "style" == l.as) {
              return l.rel = "stylesheet";
            }
            n(s, t, e.defaultPrevented)
          }, !1 !== d(s, l) && e.head.appendChild(l)
        }(e[a], o, t)
      }
    }

    function m(e, t, i) {
      var s, n;
      if (t && t.trim && (s = t), n = (s ? i : t) || {}, s) {
        if (s in o) {
          throw"LoadJS";
        }
        o[s] = !0
      }

      function r(t, i) {
        l(e, function (e) {
          h(n, e), t && h({success: t, error: i}, e), a(s, e)
        }, n)
      }

      if (n.returnPromise) {
        return new Promise(r);
      }
      r()
    }

    return m.ready = function (e, t) {
      var i = e, s = function (e) {
        h(t, e)
      };
      i = i.push ? i : [i];
      for (var n, r, o = [], a = i.length, l = a, c = function (e, t) {
        t.length && o.push(e), --l || s(o)
      }; a--;) {
        n = i[a], (r = d[n]) ? c(n, r) : (u[n] = u[n] || []).push(c);
      }
      return m
    }, m.done = function (e) {
      a(e, [])
    }, m.reset = function () {
      o = {}, d = {}, u = {}
    }, m.isDefined = function (e) {
      return e in o
    }, m
  }();

  function tt(i) {
    return new Promise((e, t) => {
      et(i, {success: e, error: t})
    })
  }

  function it(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, P.call(this, this.media, e ? "play" : "pause"))
  }

  const st = {
    setup() {
      const t = this;
      T(t.elements.wrapper, t.config.classNames.embed, !0), t.options.speed = t.config.speed.options, Oe.call(t), n(window.Vimeo) ? st.ready.call(t) : tt(t.config.urls.vimeo.sdk).then(() => {
        st.ready.call(t)
      }).catch(e => {
        t.debug.warn("Vimeo SDK (player.js) failed to load", e)
      })
    }, ready() {
      const o = this, e = o.config.vimeo, {
        premium: t,
        referrerPolicy: i,
        ...s
      } = e;
      let n = o.media.getAttribute("src"), r = "";
      var a = (r = x(n) ? (n = o.media.getAttribute(o.config.attributes.embed.id), o.media.getAttribute(o.config.attributes.embed.hash)) : (a = n.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/)) && 5 === a.length ? a[4] : null) ? {h: r} : {},
        l = (t && Object.assign(s, {
          controls: !1,
          sidedock: !1
        }), Ve({
          loop: o.config.loop.active,
          autoplay: o.autoplay,
          muted: o.muted,
          gesture: "media",
          playsinline: !this.config.fullscreen.iosNative, ...a, ...s
        })),
        c = x(c = n) ? null : !y(Number(c)) && c.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : c;
      const d = _("iframe"), u = ze(o.config.urls.vimeo.iframe, c, l);
      if (d.setAttribute("src", u), d.setAttribute("allowfullscreen", ""), d.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), x(i) || d.setAttribute("referrerPolicy", i), t || !e.customControls) {
        d.setAttribute("data-poster", o.poster), o.media = be(d, o.media);
      }
      else {
        const e = _("div", {
          class: o.config.classNames.embedContainer,
          "data-poster": o.poster
        });
        e.appendChild(d), o.media = be(e, o.media)
      }
      e.customControls || qe(ze(o.config.urls.vimeo.api, u)).then(e => {
        !x(e) && e.thumbnail_url && N.setPoster.call(o, e.thumbnail_url).catch(() => {
        })
      }), o.embed = new window.Vimeo.Player(d, {
        autopause: o.config.autopause,
        muted: o.muted
      }), o.media.paused = !0, o.media.currentTime = 0, o.supported.ui && o.embed.disableTextTrack(), o.media.play = () => (it.call(o, !0), o.embed.play()), o.media.pause = () => (it.call(o, !1), o.embed.pause()), o.media.stop = () => {
        o.pause(), o.currentTime = 0
      };
      let h = o.media["currentTime"],
        p = (Object.defineProperty(o.media, "currentTime", {
          get: () => h,
          set(e) {
            const {embed: t, media: i, paused: s, volume: n} = o,
              r = s && !t.hasPlayed;
            i.seeking = !0, P.call(o, i, "seeking"), Promise.resolve(r && t.setVolume(0)).then(() => t.setCurrentTime(e)).then(() => r && t.pause()).then(() => r && t.setVolume(n)).catch(() => {
            })
          }
        }), o.config.speed.selected),
        m = (Object.defineProperty(o.media, "playbackRate", {
          get: () => p,
          set(e) {
            o.embed.setPlaybackRate(e).then(() => {
              p = e, P.call(o, o.media, "ratechange")
            }).catch(() => {
              o.options.speed = [1]
            })
          }
        }), o.config)["volume"], f = (Object.defineProperty(o.media, "volume", {
          get: () => m, set(e) {
            o.embed.setVolume(e).then(() => {
              m = e, P.call(o, o.media, "volumechange")
            })
          }
        }), o.config)["muted"];
      Object.defineProperty(o.media, "muted", {
        get: () => f, set(e) {
          const t = !!b(e) && e;
          o.embed.setVolume(t ? 0 : o.config.volume).then(() => {
            f = t, P.call(o, o.media, "volumechange")
          })
        }
      });
      let g, v = o.config["loop"];
      Object.defineProperty(o.media, "loop", {
        get: () => v, set(e) {
          const t = b(e) ? e : o.config.loop.active;
          o.embed.setLoop(t).then(() => {
            v = t
          })
        }
      }), o.embed.getVideoUrl().then(e => {
        g = e, $.setDownloadUrl.call(o)
      }).catch(e => {
        this.debug.warn(e)
      }), Object.defineProperty(o.media, "currentSrc", {get: () => g}), Object.defineProperty(o.media, "ended", {get: () => o.currentTime === o.duration}), Promise.all([o.embed.getVideoWidth(), o.embed.getVideoHeight()]).then(e => {
        var [e, t] = e;
        o.embed.ratio = $e(e, t), Oe.call(this)
      }), o.embed.setAutopause(o.config.autopause).then(e => {
        o.config.autopause = e
      }), o.embed.getVideoTitle().then(e => {
        o.config.title = e, N.setTitle.call(this)
      }), o.embed.getCurrentTime().then(e => {
        h = e, P.call(o, o.media, "timeupdate")
      }), o.embed.getDuration().then(e => {
        o.media.duration = e, P.call(o, o.media, "durationchange")
      }), o.embed.getTextTracks().then(e => {
        o.media.textTracks = e, z.setup.call(o)
      }), o.embed.on("cuechange", ({cues: e = []}) => {
        e = e.map(e => {
          {
            e = e.text;
            const t = document.createDocumentFragment(),
              i = document.createElement("div");
            return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText
          }
        });
        z.updateCues.call(o, e)
      }), o.embed.on("loaded", () => {
        o.embed.getPaused().then(e => {
          it.call(o, !e), e || P.call(o, o.media, "playing")
        }), w(o.embed.element) && o.supported.ui && o.embed.element.setAttribute("tabindex", -1)
      }), o.embed.on("bufferstart", () => {
        P.call(o, o.media, "waiting")
      }), o.embed.on("bufferend", () => {
        P.call(o, o.media, "playing")
      }), o.embed.on("play", () => {
        it.call(o, !0), P.call(o, o.media, "playing")
      }), o.embed.on("pause", () => {
        it.call(o, !1)
      }), o.embed.on("timeupdate", e => {
        o.media.seeking = !1, h = e.seconds, P.call(o, o.media, "timeupdate")
      }), o.embed.on("progress", e => {
        o.media.buffered = e.percent, P.call(o, o.media, "progress"), 1 === parseInt(e.percent, 10) && P.call(o, o.media, "canplaythrough"), o.embed.getDuration().then(e => {
          e !== o.media.duration && (o.media.duration = e, P.call(o, o.media, "durationchange"))
        })
      }), o.embed.on("seeked", () => {
        o.media.seeking = !1, P.call(o, o.media, "seeked")
      }), o.embed.on("ended", () => {
        o.media.paused = !0, P.call(o, o.media, "ended")
      }), o.embed.on("error", e => {
        o.media.error = e, P.call(o, o.media, "error")
      }), e.customControls && setTimeout(() => N.build.call(o), 0)
    }
  };

  function nt(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, P.call(this, this.media, e ? "play" : "pause"))
  }

  const rt = {
    setup() {
      if (T(this.elements.wrapper, this.config.classNames.embed, !0), n(window.YT) && c(window.YT.Player)) {
        rt.ready.call(this);
      }
      else {
        const e = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          c(e) && e(), rt.ready.call(this)
        }, tt(this.config.urls.youtube.sdk).catch(e => {
          this.debug.warn("YouTube API failed to load", e)
        })
      }
    }, getTitle(e) {
      qe(ze(this.config.urls.youtube.api, e)).then(e => {
        var t, i;
        n(e) && ({
          title: e,
          height: t,
          width: i
        } = e, this.config.title = e, N.setTitle.call(this), this.embed.ratio = $e(i, t)), Oe.call(this)
      }).catch(() => {
        Oe.call(this)
      })
    }, ready() {
      const r = this, o = r.config.youtube,
        e = r.media && r.media.getAttribute("id");
      if (x(e) || !e.startsWith("youtube-")) {
        let e = r.media.getAttribute("src");
        x(e) && (e = r.media.getAttribute(this.config.attributes.embed.id));
        const a = x(t = e) ? null : t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : t;
        var t = _("div", {
          id: r.provider + "-" + Math.floor(1e4 * Math.random()),
          "data-poster": o.customControls ? r.poster : void 0
        });
        if (r.media = be(t, r.media), o.customControls) {
          const o = e => `https://i.ytimg.com/vi/${a}/${e}default.jpg`;
          Ke(o("maxres"), 121).catch(() => Ke(o("sd"), 121)).catch(() => Ke(o("hq"))).then(e => N.setPoster.call(r, e.src)).then(e => {
            e.includes("maxres") || (r.elements.poster.style.backgroundSize = "cover")
          }).catch(() => {
          })
        }
        r.embed = new window.YT.Player(r.media, {
          videoId: a,
          host: o.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0,
          playerVars: m({}, {
            autoplay: r.config.autoplay ? 1 : 0,
            hl: r.config.hl,
            controls: r.supported.ui && o.customControls ? 0 : 1,
            disablekb: 1,
            playsinline: r.config.fullscreen.iosNative ? 0 : 1,
            cc_load_policy: r.captions.active ? 1 : 0,
            cc_lang_pref: r.config.captions.language,
            widget_referrer: window ? window.location.href : null
          }, o),
          events: {
            onError(e) {
              var t;
              r.media.error || (t = {
                2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                101: "The owner of the requested video does not allow it to be played in embedded players.",
                150: "The owner of the requested video does not allow it to be played in embedded players."
              }[e = e.data] || "An unknown error occured", r.media.error = {
                code: e,
                message: t
              }, P.call(r, r.media, "error"))
            }, onPlaybackRateChange(e) {
              const t = e.target;
              r.media.playbackRate = t.getPlaybackRate(), P.call(r, r.media, "ratechange")
            }, onReady(e) {
              if (!c(r.media.play)) {
                const s = e.target;
                rt.getTitle.call(r, a), r.media.play = () => {
                  nt.call(r, !0), s.playVideo()
                }, r.media.pause = () => {
                  nt.call(r, !1), s.pauseVideo()
                }, r.media.stop = () => {
                  s.stopVideo()
                }, r.media.duration = s.getDuration(), r.media.paused = !0, r.media.currentTime = 0, Object.defineProperty(r.media, "currentTime", {
                  get: () => Number(s.getCurrentTime()),
                  set(e) {
                    r.paused && !r.embed.hasPlayed && r.embed.mute(), r.media.seeking = !0, P.call(r, r.media, "seeking"), s.seekTo(e)
                  }
                }), Object.defineProperty(r.media, "playbackRate", {
                  get: () => s.getPlaybackRate(),
                  set(e) {
                    s.setPlaybackRate(e)
                  }
                });
                let t = r.config["volume"],
                  i = (Object.defineProperty(r.media, "volume", {
                    get: () => t,
                    set(e) {
                      t = e, s.setVolume(100 * t), P.call(r, r.media, "volumechange")
                    }
                  }), r.config)["muted"];
                Object.defineProperty(r.media, "muted", {
                  get: () => i, set(e) {
                    e = b(e) ? e : i;
                    i = e, s[e ? "mute" : "unMute"](), s.setVolume(100 * t), P.call(r, r.media, "volumechange")
                  }
                }), Object.defineProperty(r.media, "currentSrc", {get: () => s.getVideoUrl()}), Object.defineProperty(r.media, "ended", {get: () => r.currentTime === r.duration});
                const n = s.getAvailablePlaybackRates();
                r.options.speed = n.filter(e => r.config.speed.options.includes(e)), r.supported.ui && o.customControls && r.media.setAttribute("tabindex", -1), P.call(r, r.media, "timeupdate"), P.call(r, r.media, "durationchange"), clearInterval(r.timers.buffering), r.timers.buffering = setInterval(() => {
                  r.media.buffered = s.getVideoLoadedFraction(), (null === r.media.lastBuffered || r.media.lastBuffered < r.media.buffered) && P.call(r, r.media, "progress"), r.media.lastBuffered = r.media.buffered, 1 === r.media.buffered && (clearInterval(r.timers.buffering), P.call(r, r.media, "canplaythrough"))
                }, 200), o.customControls && setTimeout(() => N.build.call(r), 50)
              }
            }, onStateChange(e) {
              const t = e.target;
              switch (clearInterval(r.timers.playing), r.media.seeking && [1, 2].includes(e.data) && (r.media.seeking = !1, P.call(r, r.media, "seeked")), e.data) {
                case-1:
                  P.call(r, r.media, "timeupdate"), r.media.buffered = t.getVideoLoadedFraction(), P.call(r, r.media, "progress");
                  break;
                case 0:
                  nt.call(r, !1), r.media.loop ? (t.stopVideo(), t.playVideo()) : P.call(r, r.media, "ended");
                  break;
                case 1:
                  o.customControls && !r.config.autoplay && r.media.paused && !r.embed.hasPlayed ? r.media.pause() : (nt.call(r, !0), P.call(r, r.media, "playing"), r.timers.playing = setInterval(() => {
                    P.call(r, r.media, "timeupdate")
                  }, 50), r.media.duration !== t.getDuration() && (r.media.duration = t.getDuration(), P.call(r, r.media, "durationchange")));
                  break;
                case 2:
                  r.muted || r.embed.unMute(), nt.call(r, !1);
                  break;
                case 3:
                  P.call(r, r.media, "waiting")
              }
              P.call(r, r.elements.container, "statechange", !1, {code: e.data})
            }
          }
        })
      }
    }
  }, ot = {
    setup() {
      this.media ? (T(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), T(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && T(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = _("div", {class: this.config.classNames.video}), fe(this.media, this.elements.wrapper), this.elements.poster = _("div", {class: this.config.classNames.poster}), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? L.setup.call(this) : this.isYouTube ? rt.setup.call(this) : this.isVimeo && st.setup.call(this)) : this.debug.warn("No media element found!")
    }
  };

  class at {
    constructor(e) {
      r(this, "load", () => {
        this.enabled && (n(window.google) && n(window.google.ima) ? this.ready() : tt(this.player.config.urls.googleIMA.sdk).then(() => {
          this.ready()
        }).catch(() => {
          this.trigger("error", new Error("Google IMA SDK failed to load"))
        }))
      }), r(this, "ready", () => {
        this.enabled || (this.manager && this.manager.destroy(), this.elements.displayContainer && this.elements.displayContainer.destroy(), this.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(() => {
          this.clearSafetyTimer("onAdsManagerLoaded()")
        }), this.listeners(), this.setupIMA()
      }), r(this, "setupIMA", () => {
        this.elements.container = _("div", {class: this.player.config.classNames.ads}), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, e => this.onAdsManagerLoaded(e), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e => this.onAdError(e), !1), this.requestAds()
      }), r(this, "requestAds", () => {
        var e = this.player.elements["container"];
        try {
          const t = new google.ima.AdsRequest;
          t.adTagUrl = this.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t)
        }
        catch (e) {
          this.onAdError(e)
        }
      }), r(this, "pollCountdown", (e = !1) => {
        if (!e) {
          return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
        }
        this.countdownTimer = setInterval(() => {
          var e = We(Math.max(this.manager.getRemainingTime(), 0)),
            e = O.get("advertisement", this.player.config) + " - " + e;
          this.elements.container.setAttribute("data-badge-text", e)
        }, 100)
      }), r(this, "onAdsManagerLoaded", e => {
        if (this.enabled) {
          const t = new google.ima.AdsRenderingSettings;
          t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, this.manager = e.getAdsManager(this.player, t), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e => this.onAdError(e)), Object.keys(google.ima.AdEvent.Type).forEach(e => {
            this.manager.addEventListener(google.ima.AdEvent.Type[e], e => this.onAdEvent(e))
          }), this.trigger("loaded")
        }
      }), r(this, "addCuePoints", () => {
        x(this.cuePoints) || this.cuePoints.forEach(e => {
          if (0 !== e && -1 !== e && e < this.player.duration) {
            const t = this.player.elements.progress;
            if (w(t)) {
              const i = 100 / this.player.duration * e,
                s = _("span", {class: this.player.config.classNames.cues});
              s.style.left = i.toString() + "%", t.appendChild(s)
            }
          }
        })
      }), r(this, "onAdEvent", e => {
        const t = this.player.elements["container"], i = e.getAd(),
          s = e.getAdData();
        switch (n = e.type, P.call(this.player, this.player.media, "ads" + n.replace(/_/g, "").toLowerCase()), e.type) {
          case google.ima.AdEvent.Type.LOADED:
            this.trigger("loaded"), this.pollCountdown(!0), i.isLinear() || (i.width = t.offsetWidth, i.height = t.offsetHeight);
            break;
          case google.ima.AdEvent.Type.STARTED:
            this.manager.setVolume(this.player.volume);
            break;
          case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            this.player.ended ? this.loadAds() : this.loader.contentComplete();
            break;
          case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
            this.pauseContent();
            break;
          case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
            this.pollCountdown(), this.resumeContent();
            break;
          case google.ima.AdEvent.Type.LOG:
            s.adError && this.player.debug.warn("Non-fatal ad error: " + s.adError.getMessage())
        }
        var n
      }), r(this, "onAdError", e => {
        this.cancel(), this.player.debug.warn("Ads error", e)
      }), r(this, "listeners", () => {
        const e = this.player.elements["container"];
        let s;
        this.player.on("canplay", () => {
          this.addCuePoints()
        }), this.player.on("ended", () => {
          this.loader.contentComplete()
        }), this.player.on("timeupdate", () => {
          s = this.player.currentTime
        }), this.player.on("seeked", () => {
          const i = this.player.currentTime;
          x(this.cuePoints) || this.cuePoints.forEach((e, t) => {
            s < e && e < i && (this.manager.discardAdBreak(), this.cuePoints.splice(t, 1))
          })
        }), window.addEventListener("resize", () => {
          this.manager && this.manager.resize(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL)
        })
      }), r(this, "play", () => {
        const e = this.player.elements["container"];
        this.managerPromise || this.resumeContent(), this.managerPromise.then(() => {
          this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
          try {
            this.initialized || (this.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = !0
          }
          catch (e) {
            this.onAdError(e)
          }
        }).catch(() => {
        })
      }), r(this, "resumeContent", () => {
        this.elements.container.style.zIndex = "", this.playing = !1, I(this.player.media.play())
      }), r(this, "pauseContent", () => {
        this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause()
      }), r(this, "cancel", () => {
        this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
      }), r(this, "loadAds", () => {
        this.managerPromise.then(() => {
          this.manager && this.manager.destroy(), this.managerPromise = new Promise(e => {
            this.on("loaded", e), this.player.debug.log(this.manager)
          }), this.initialized = !1, this.requestAds()
        }).catch(() => {
        })
      }), r(this, "trigger", (e, ...t) => {
        const i = this.events[e];
        h(i) && i.forEach(e => {
          c(e) && e.apply(this, t)
        })
      }), r(this, "on", (e, t) => (h(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this)), r(this, "startSafetyTimer", (e, t) => {
        this.player.debug.log("Safety timer invoked from: " + t), this.safetyTimer = setTimeout(() => {
          this.cancel(), this.clearSafetyTimer("startSafetyTimer()")
        }, e)
      }), r(this, "clearSafetyTimer", e => {
        a(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: " + e), clearTimeout(this.safetyTimer), this.safetyTimer = null)
      }), this.player = e, this.config = e.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
        container: null,
        displayContainer: null
      }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((e, t) => {
        this.on("loaded", e), this.on("error", t)
      }), this.load()
    }

    get enabled() {
      var e = this["config"];
      return this.player.isHTML5 && this.player.isVideo && e.enabled && (!x(e.publisherId) || ue(e.tagUrl))
    }

    get tagUrl() {
      var e = this["config"];
      return ue(e.tagUrl) ? e.tagUrl : "https://go.aniview.com/api/adserver6/vast/?" + Ve({
        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
        AV_CHANNELID: "5a0458dc28a06145e4519d21",
        AV_URL: window.location.hostname,
        cb: Date.now(),
        AV_WIDTH: 640,
        AV_HEIGHT: 480,
        AV_CDIM2: e.publisherId
      })
    }
  }

  function lt(e = 0, t = 0, i = 255) {
    return Math.min(Math.max(e, t), i)
  }

  const ct = (e, t) => {
    const i = {};
    return e > t.width / t.height ? (i.width = t.width, i.height = 1 / e * t.width) : (i.height = t.height, i.width = e * t.height), i
  };

  class dt {
    constructor(e) {
      r(this, "load", () => {
        this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(() => {
          this.enabled && (this.render(), this.determineContainerAutoSizing(), this.loaded = !0)
        })
      }), r(this, "getThumbnails", () => new Promise(e => {
        const t = this.player.config.previewThumbnails["src"];
        if (x(t)) {
          throw new Error("Missing previewThumbnails.src config attribute");
        }
        const i = () => {
          this.thumbnails.sort((e, t) => e.height - t.height), this.player.debug.log("Preview thumbnails", this.thumbnails), e()
        };
        if (c(t)) {
          t(e => {
            this.thumbnails = e, i()
          });
        }
        else {
          const e = (l(t) ? [t] : t).map(e => this.getThumbnail(e));
          Promise.all(e).then(i)
        }
      })), r(this, "getThumbnail", n => new Promise(s => {
        qe(n).then(e => {
          const t = {
              frames: (e => {
                const t = [];
                return e.split(/\r\n\r\n|\n\n|\r\r/).forEach(e => {
                  const i = {};
                  e.split(/\r\n|\n|\r/).forEach(e => {
                    if (y(i.startTime)) {
                      if (!x(e.trim()) && x(i.text)) {
                        const t = e.trim().split("#xywh=");
                        [i.text] = t, t[1] && ([i.x, i.y, i.w, i.h] = t[1].split(","))
                      }
                    }
                    else {
                      e = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                      e && (i.startTime = 60 * Number(e[1] || 0) * 60 + 60 * Number(e[2]) + Number(e[3]) + Number("0." + e[4]), i.endTime = 60 * Number(e[6] || 0) * 60 + 60 * Number(e[7]) + Number(e[8]) + Number("0." + e[9]))
                    }
                  }), i.text && t.push(i)
                }), t
              })(e), height: null, urlPrefix: ""
            },
            i = (t.frames[0].text.startsWith("/") || t.frames[0].text.startsWith("http://") || t.frames[0].text.startsWith("https://") || (t.urlPrefix = n.substring(0, n.lastIndexOf("/") + 1)), new Image);
          i.onload = () => {
            t.height = i.naturalHeight, t.width = i.naturalWidth, this.thumbnails.push(t), s()
          }, i.src = t.urlPrefix + t.frames[0].text
        })
      })), r(this, "startMove", e => {
        var t;
        this.loaded && d(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration && ("touchmove" === e.type ? this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100) : (t = 100 / (t = this.player.elements.progress.getBoundingClientRect()).width * (e.pageX - t.left), this.seekTime = this.player.media.duration * (t / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = We(this.seekTime), (t = null == (t = this.player.config.markers) || null == (e = t.points) ? void 0 : e.find(({time: e}) => e === Math.round(this.seekTime))) && this.elements.thumb.time.insertAdjacentHTML("afterbegin", t.label + "<br>")), this.showImageAtCurrentTime())
      }), r(this, "endMove", () => {
        this.toggleThumbContainer(!1, !0)
      }), r(this, "startScrubbing", e => {
        !a(e.button) && !1 !== e.button && 0 !== e.button || (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()))
      }), r(this, "endScrubbing", () => {
        this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : Se.call(this.player, this.player.media, "timeupdate", () => {
          this.mouseDown || this.toggleScrubbingContainer(!1)
        })
      }), r(this, "listeners", () => {
        this.player.on("play", () => {
          this.toggleThumbContainer(!1, !0)
        }), this.player.on("seeked", () => {
          this.toggleThumbContainer(!1)
        }), this.player.on("timeupdate", () => {
          this.lastTime = this.player.media.currentTime
        })
      }), r(this, "render", () => {
        this.elements.thumb.container = _("div", {class: this.player.config.classNames.previewThumbnails.thumbContainer}), this.elements.thumb.imageContainer = _("div", {class: this.player.config.classNames.previewThumbnails.imageContainer}), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
        const e = _("div", {class: this.player.config.classNames.previewThumbnails.timeContainer});
        this.elements.thumb.time = _("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.imageContainer.appendChild(e), w(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = _("div", {class: this.player.config.classNames.previewThumbnails.scrubbingContainer}), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
      }), r(this, "destroy", () => {
        this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
      }), r(this, "showImageAtCurrentTime", () => {
        this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
        const i = this.thumbnails[0].frames.findIndex(e => this.seekTime >= e.startTime && this.seekTime <= e.endTime),
          e = 0 <= i;
        let s = 0;
        this.mouseDown || this.toggleThumbContainer(e), e && (this.thumbnails.forEach((e, t) => {
          this.loadedImages.includes(e.frames[i].text) && (s = t)
        }), i !== this.showingThumb && (this.showingThumb = i, this.loadImage(s)))
      }), r(this, "loadImage", (e = 0) => {
        const t = this.showingThumb, i = this.thumbnails[e], s = i["urlPrefix"],
          n = i.frames[t], r = i.frames[t].text, o = s + r;
        if (this.currentImageElement && this.currentImageElement.dataset.filename === r) {
          this.showImage(this.currentImageElement, n, e, t, r, !1), this.currentImageElement.dataset.index = t, this.removeOldImages(this.currentImageElement);
        }
        else {
          this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
          const i = new Image;
          i.src = o, i.dataset.index = t, i.dataset.filename = r, this.showingThumbFilename = r, this.player.debug.log("Loading image: " + o), i.onload = () => this.showImage(i, n, e, t, r, !0), this.loadingImage = i, this.removeOldImages(i)
        }
      }), r(this, "showImage", (e, t, i, s, n, r = !0) => {
        this.player.debug.log(`Showing thumb: ${n}. num: ${s}. qual: ${i}. newimg: ` + r), this.setImageSizeAndOffset(e, t), r && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(n) || this.loadedImages.push(n)), this.preloadNearby(s, !0).then(this.preloadNearby(s, !1)).then(this.getHigherQuality(i, e, t, n))
      }), r(this, "removeOldImages", i => {
        Array.from(this.currentImageContainer.children).forEach(e => {
          if ("img" === e.tagName.toLowerCase()) {
            var t = this.usingSprites ? 500 : 1e3;
            if (e.dataset.index !== i.dataset.index && !e.dataset.deleting) {
              e.dataset.deleting = !0;
              const i = this["currentImageContainer"];
              setTimeout(() => {
                i.removeChild(e), this.player.debug.log("Removing thumb: " + e.dataset.filename)
              }, t)
            }
          }
        })
      }), r(this, "preloadNearby", (t, i = !0) => new Promise(r => {
        setTimeout(() => {
          const n = this.thumbnails[0].frames[t].text;
          if (this.showingThumbFilename === n) {
            let e,
              s = (e = i ? this.thumbnails[0].frames.slice(t) : this.thumbnails[0].frames.slice(0, t).reverse(), !1);
            e.forEach(e => {
              const t = e.text;
              if (t !== n && !this.loadedImages.includes(t)) {
                s = !0, this.player.debug.log("Preloading thumb filename: " + t);
                const e = this.thumbnails[0]["urlPrefix"], n = e + t,
                  i = new Image;
                i.src = n, i.onload = () => {
                  this.player.debug.log("Preloaded thumb filename: " + t), this.loadedImages.includes(t) || this.loadedImages.push(t), r()
                }
              }
            }), s || r()
          }
        }, 300)
      })), r(this, "getHigherQuality", (t, i, s, n) => {
        if (t < this.thumbnails.length - 1) {
          let e = i.naturalHeight;
          (e = this.usingSprites ? s.h : e) < this.thumbContainerHeight && setTimeout(() => {
            this.showingThumbFilename === n && (this.player.debug.log("Showing higher quality thumb for: " + n), this.loadImage(t + 1))
          }, 300)
        }
      }), r(this, "toggleThumbContainer", (e = !1, t = !1) => {
        var i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
        this.elements.thumb.container.classList.toggle(i, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null)
      }), r(this, "toggleScrubbingContainer", (e = !1) => {
        var t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
        this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null)
      }), r(this, "determineContainerAutoSizing", () => {
        (20 < this.elements.thumb.imageContainer.clientHeight || 20 < this.elements.thumb.imageContainer.clientWidth) && (this.sizeSpecifiedInCSS = !0)
      }), r(this, "setThumbContainerSizeAndPos", () => {
        const e = this.elements.thumb["imageContainer"];
        var t;
        this.sizeSpecifiedInCSS ? 20 < e.clientHeight && e.clientWidth < 20 ? (t = Math.floor(e.clientHeight * this.thumbAspectRatio), e.style.width = t + "px") : e.clientHeight < 20 && 20 < e.clientWidth && (t = Math.floor(e.clientWidth / this.thumbAspectRatio), e.style.height = t + "px") : (t = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio), e.style.height = this.thumbContainerHeight + "px", e.style.width = t + "px"), this.setThumbContainerPos()
      }), r(this, "setThumbContainerPos", () => {
        const e = this.player.elements.progress.getBoundingClientRect(),
          t = this.player.elements.container.getBoundingClientRect(),
          i = this.elements.thumb["container"], s = t.left - e.left + 10,
          n = t.right - e.left - i.clientWidth - 10,
          r = this.mousePosX - e.left - i.clientWidth / 2, o = lt(r, s, n);
        i.style.left = o + "px", i.style.setProperty("--preview-arrow-offset", r - o + "px")
      }), r(this, "setScrubbingContainerSize", () => {
        var {
          width: e,
          height: t
        } = ct(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        });
        this.elements.scrubbing.container.style.width = e + "px", this.elements.scrubbing.container.style.height = t + "px"
      }), r(this, "setImageSizeAndOffset", (e, t) => {
        var i;
        this.usingSprites && (i = this.thumbContainerHeight / t.h, e.style.height = e.naturalHeight * i + "px", e.style.width = e.naturalWidth * i + "px", e.style.left = `-${t.x * i}px`, e.style.top = `-${t.y * i}px`)
      }), this.player = e, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
        thumb: {},
        scrubbing: {}
      }, this.load()
    }

    get enabled() {
      return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
    }

    get currentImageContainer() {
      return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
    }

    get usingSprites() {
      return Object.keys(this.thumbnails[0].frames[0]).includes("w")
    }

    get thumbAspectRatio() {
      return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
    }

    get thumbContainerHeight() {
      var e;
      return this.mouseDown ? (e = ct(this.thumbAspectRatio, {
        width: this.player.media.clientWidth,
        height: this.player.media.clientHeight
      })["height"], e) : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
    }

    get currentImageElement() {
      return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
    }

    set currentImageElement(e) {
      this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
    }
  }

  const ut = {
    insertElements(t, e) {
      l(e) ? ve(t, this.media, {src: e}) : h(e) && e.forEach(e => {
        ve(t, this.media, e)
      })
    }, change(r) {
      me(r, "sources.length") ? (L.cancelRequests.call(this), this.destroy.call(this, () => {
        this.options.quality = [], f(this.media), this.media = null, w(this.elements.container) && this.elements.container.removeAttribute("class");
        var {sources: e, type: t} = r, [{provider: i = D.html5, src: s}] = e,
          n = "html5" === i ? t : "div", s = "html5" === i ? {} : {src: s};
        Object.assign(this, {
          provider: i,
          type: t,
          supported: k.check(t, i, this.config.playsinline),
          media: _(n, s)
        }), this.elements.container.appendChild(this.media), b(r.autoplay) && (this.config.autoplay = r.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), x(r.poster) || (this.poster = r.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), N.addStyleHook.call(this), this.isHTML5 && ut.insertElements.call(this, "source", e), this.config.title = r.title, ot.setup.call(this), this.isHTML5 && Object.keys(r).includes("tracks") && ut.insertElements.call(this, "track", r.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && N.build.call(this), this.isHTML5 && this.media.load(), x(r.previewThumbnails) || (Object.assign(this.config.previewThumbnails, r.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new dt(this))), this.fullscreen.update()
      }, !0)) : this.debug.warn("Invalid source format")
    }
  };

  class ht {
    constructor(e, t) {
      if (r(this, "play", () => c(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(() => this.ads.play()).catch(() => I(this.media.play())), this.media.play()) : null), r(this, "pause", () => this.playing && c(this.media.pause) ? this.media.pause() : null), r(this, "togglePlay", e => (b(e) ? e : !this.playing) ? this.play() : this.pause()), r(this, "stop", () => {
        this.isHTML5 ? (this.pause(), this.restart()) : c(this.media.stop) && this.media.stop()
      }), r(this, "restart", () => {
        this.currentTime = 0
      }), r(this, "rewind", e => {
        this.currentTime -= y(e) ? e : this.config.seekTime
      }), r(this, "forward", e => {
        this.currentTime += y(e) ? e : this.config.seekTime
      }), r(this, "increaseVolume", e => {
        var t = this.media.muted ? 0 : this.volume;
        this.volume = t + (y(e) ? e : 0)
      }), r(this, "decreaseVolume", e => {
        this.increaseVolume(-e)
      }), r(this, "airplay", () => {
        k.airplay && this.media.webkitShowPlaybackTargetPicker()
      }), r(this, "toggleControls", e => {
        if (!this.supported.ui || this.isAudio) {
          return !1;
        }
        var t = we(this.elements.container, this.config.classNames.hideControls),
          i = T(this.elements.container, this.config.classNames.hideControls, void 0 === e ? void 0 : !e);
        if (i && h(this.config.controls) && this.config.controls.includes("settings") && !x(this.config.settings) && $.toggleMenu.call(this, !1), i !== t) {
          const e = i ? "controlshidden" : "controlsshown";
          P.call(this, this.media, e)
        }
        return !i
      }), r(this, "on", (e, t) => {
        M.call(this, this.elements.container, e, t)
      }), r(this, "once", (e, t) => {
        Se.call(this, this.elements.container, e, t)
      }), r(this, "off", (e, t) => {
        Ee(this.elements.container, e, t)
      }), r(this, "destroy", (e, t = !1) => {
        var i;
        this.ready && (i = () => {
          document.body.style.overflow = "", this.embed = null, t ? (Object.keys(this.elements).length && (f(this.elements.buttons.play), f(this.elements.captions), f(this.elements.controls), f(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), c(e) && e()) : (function () {
            this && this.eventListeners && (this.eventListeners.forEach(e => {
              const {element: t, type: i, callback: s, options: n} = e;
              t.removeEventListener(i, s, n)
            }), this.eventListeners = [])
          }.call(this), L.cancelRequests.call(this), be(this.elements.original, this.elements.container), P.call(this, this.elements.original, "destroyed", !0), c(e) && e.call(this.elements.original), this.ready = !1, setTimeout(() => {
            this.elements = null, this.media = null
          }, 200))
        }, this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (N.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && c(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200)))
      }), r(this, "supports", e => k.mime.call(this, e)), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = k.touch, this.media = e, l(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || ce(this.media) || h(this.media)) && (this.media = this.media[0]), this.config = m({}, Xe, ht.defaults, t || {}, (() => {
        try {
          return JSON.parse(this.media.getAttribute("data-plyr-config"))
        }
        catch (e) {
          return {}
        }
      })()), this.elements = {
        container: null,
        fullscreen: null,
        captions: null,
        buttons: {},
        display: {},
        progress: {},
        inputs: {},
        settings: {popup: null, menu: null, panels: {}, buttons: {}}
      }, this.captions = {
        active: null,
        currentTrack: -1,
        meta: new WeakMap
      }, this.fullscreen = {active: !1}, this.options = {
        speed: [],
        quality: []
      }, this.debug = new Qe(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", k), a(this.media) || !w(this.media)) {
        this.debug.error("Setup failed: no suitable element passed");
      }
      else if (this.media.plyr) {
        this.debug.warn("Target already setup");
      }
      else if (this.config.enabled) {
        if (k.check().api) {
          const n = this.media.cloneNode(!0);
          n.autoplay = !1, this.elements.original = n;
          var i, s = this.media.tagName.toLowerCase();
          let e = null, t = null;
          switch (s) {
            case"div":
              if (e = this.media.querySelector("iframe"), w(e)) {
                if (t = Ye(e.getAttribute("src")), this.provider = (i = t.toString(), /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(i) ? D.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(i) ? D.vimeo : null), this.elements.container = this.media, this.media = e, this.elements.container.className = "", t.search.length) {
                  const r = ["1", "true"];
                  r.includes(t.searchParams.get("autoplay")) && (this.config.autoplay = !0), r.includes(t.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = r.includes(t.searchParams.get("playsinline")), this.config.youtube.hl = t.searchParams.get("hl")) : this.config.playsinline = !0
                }
              }
              else {
                this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
              }
              if (x(this.provider) || !Object.values(D).includes(this.provider)) {
                return void this.debug.error("Setup failed: Invalid provider");
              }
              this.type = "video";
              break;
            case"video":
            case"audio":
              this.type = s, this.provider = D.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
              break;
            default:
              return void this.debug.error("Setup failed: unsupported type")
          }
          this.supported = k.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new Ze(this), this.storage = new He(this), this.media.plyr = this, w(this.elements.container) || (this.elements.container = _("div", {tabindex: 0}), fe(this.media, this.elements.container)), N.migrateStyles.call(this), N.addStyleHook.call(this), ot.setup.call(this), this.config.debug && M.call(this, this.elements.container, this.config.events.join(" "), e => {
            this.debug.log("event: " + e.type)
          }), this.fullscreen = new j(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && N.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new at(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", () => I(this.play())), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new dt(this))) : this.debug.error("Setup failed: no support")
        }
        else {
          this.debug.error("Setup failed: no support");
        }
      }
      else {
        this.debug.error("Setup failed: disabled by config")
      }
    }

    get isHTML5() {
      return this.provider === D.html5
    }

    get isEmbed() {
      return this.isYouTube || this.isVimeo
    }

    get isYouTube() {
      return this.provider === D.youtube
    }

    get isVimeo() {
      return this.provider === D.vimeo
    }

    get isVideo() {
      return "video" === this.type
    }

    get isAudio() {
      return "audio" === this.type
    }

    get playing() {
      return Boolean(this.ready && !this.paused && !this.ended)
    }

    get paused() {
      return Boolean(this.media.paused)
    }

    get stopped() {
      return Boolean(this.paused && 0 === this.currentTime)
    }

    get ended() {
      return Boolean(this.media.ended)
    }

    get currentTime() {
      return Number(this.media.currentTime)
    }

    set currentTime(e) {
      var t;
      this.duration && (t = y(e) && 0 < e, this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`))
    }

    get buffered() {
      const e = this.media["buffered"];
      return y(e) ? e : e && e.length && 0 < this.duration ? e.end(0) / this.duration : 0
    }

    get seeking() {
      return Boolean(this.media.seeking)
    }

    get duration() {
      var e = parseFloat(this.config.duration), t = (this.media || {}).duration,
        t = y(t) && t !== 1 / 0 ? t : 0;
      return e || t
    }

    get volume() {
      return Number(this.media.volume)
    }

    set volume(e) {
      let t = e;
      l(t) && (t = Number(t)), y(t) || (t = this.storage.get("volume")), y(t) || ({volume: t} = this.config), (t = 1 < t ? 1 : t) < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !x(e) && this.muted && 0 < t && (this.muted = !1)
    }

    get muted() {
      return Boolean(this.media.muted)
    }

    set muted(e) {
      let t = e;
      b(t) || (t = this.storage.get("muted")), b(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
    }

    get hasAudio() {
      return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
    }

    get speed() {
      return Number(this.media.playbackRate)
    }

    set speed(e) {
      let t = null;
      y(e) && (t = e), y(t) || (t = this.storage.get("speed"));
      var {minimumSpeed: e, maximumSpeed: i} = this;
      t = lt(t = y(t) ? t : this.config.speed.selected, e, i), this.config.speed.selected = t, setTimeout(() => {
        this.media && (this.media.playbackRate = t)
      }, 0)
    }

    get minimumSpeed() {
      return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? .5 : .0625
    }

    get maximumSpeed() {
      return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16
    }

    get quality() {
      return this.media.quality
    }

    set quality(i) {
      const s = this.config.quality, n = this.options.quality;
      if (n.length) {
        let e = [!x(i) && Number(i), this.storage.get("quality"), s.selected, s.default].find(y),
          t = !0;
        if (!n.includes(e)) {
          const i = ke(n, e);
          this.debug.warn(`Unsupported quality option: ${e}, using ${i} instead`), e = i, t = !1
        }
        s.selected = e, this.media.quality = e, t && this.storage.set({quality: e})
      }
    }

    get loop() {
      return Boolean(this.media.loop)
    }

    set loop(e) {
      e = b(e) ? e : this.config.loop.active;
      this.config.loop.active = e, this.media.loop = e
    }

    get source() {
      return this.media.currentSrc
    }

    set source(e) {
      ut.change.call(this, e)
    }

    get download() {
      var e = this.config.urls["download"];
      return ue(e) ? e : this.source
    }

    set download(e) {
      ue(e) && (this.config.urls.download = e, $.setDownloadUrl.call(this))
    }

    get poster() {
      return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
    }

    set poster(e) {
      this.isVideo ? N.setPoster.call(this, e, !1).catch(() => {
      }) : this.debug.warn("Poster can only be set for video")
    }

    get ratio() {
      if (!this.isVideo) {
        return null;
      }
      const e = Ie(Le.call(this));
      return h(e) ? e.join(":") : e
    }

    set ratio(e) {
      this.isVideo ? l(e) && Pe(e) ? (this.config.ratio = Ie(e), Oe.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e})`) : this.debug.warn("Aspect ratio can only be set for video")
    }

    get autoplay() {
      return Boolean(this.config.autoplay)
    }

    set autoplay(e) {
      this.config.autoplay = b(e) ? e : this.config.autoplay
    }

    get currentTrack() {
      var {toggled: e, currentTrack: t} = this.captions;
      return e ? t : -1
    }

    set currentTrack(e) {
      z.set.call(this, e, !1), z.setup.call(this)
    }

    get language() {
      return (z.getCurrentTrack.call(this) || {}).language
    }

    set language(e) {
      z.setLanguage.call(this, e, !1)
    }

    get pip() {
      return k.pip ? x(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Ge : null
    }

    set pip(e) {
      k.pip && (e = b(e) ? e : !this.pip, c(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(e ? Ge : "inline"), c(this.media.requestPictureInPicture) && (!this.pip && e ? this.media.requestPictureInPicture() : this.pip && !e && document.exitPictureInPicture()))
    }

    static supported(e, t, i) {
      return k.check(e, t, i)
    }

    static loadSprite(e, t) {
      return Be(e, t)
    }

    static setup(e, t = {}) {
      let i = null;
      return l(e) ? i = Array.from(document.querySelectorAll(e)) : ce(e) ? i = Array.from(e) : h(e) && (i = e.filter(w)), x(i) ? null : i.map(e => new ht(e, t))
    }

    toggleCaptions(e) {
      z.toggle.call(this, e, !1)
    }

    setPreviewThumbnails(e) {
      this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e), this.config.previewThumbnails.enabled && (this.previewThumbnails = new dt(this))
    }
  }

  return ht.defaults = (Je = Xe, JSON.parse(JSON.stringify(Je))), ht
});
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
  Prism = function (l) {
    var c = /\blang(?:uage)?-([\w-]+)\b/i, t = 0, e = {}, $ = {
      manual: l.Prism && l.Prism.manual,
      disableWorkerMessageHandler: l.Prism && l.Prism.disableWorkerMessageHandler,
      util: {
        encode: function e(t) {
          return t instanceof z ? new z(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
        }, type: function (e) {
          return Object.prototype.toString.call(e).slice(8, -1)
        }, objId: function (e) {
          return e.__id || Object.defineProperty(e, "__id", {value: ++t}), e.__id
        }, clone: function i(e, s) {
          var n, t;
          switch (s = s || {}, $.util.type(e)) {
            case"Object":
              if (t = $.util.objId(e), s[t]) {
                return s[t];
              }
              for (var r in n = {}, s[t] = n, e) {
                e.hasOwnProperty(r) && (n[r] = i(e[r], s));
              }
              return n;
            case"Array":
              return t = $.util.objId(e), s[t] || (n = [], s[t] = n, e.forEach(function (e, t) {
                n[t] = i(e, s)
              }), n);
            default:
              return e
          }
        }, getLanguage: function (e) {
          for (; e && !c.test(e.className);) {
            e = e.parentElement;
          }
          return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none"
        }, currentScript: function () {
          if ("undefined" == typeof document) {
            return null;
          }
          if ("currentScript" in document) {
            return document.currentScript;
          }
          try {
            throw new Error
          }
          catch (e) {
            var t = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e.stack) || [])[1];
            if (t) {
              var i, s = document.getElementsByTagName("script");
              for (i in s) {
                if (s[i].src == t) {
                  return s[i]
                }
              }
            }
            return null
          }
        }, isActive: function (e, t, i) {
          for (var s = "no-" + t; e;) {
            var n = e.classList;
            if (n.contains(t)) {
              return !0;
            }
            if (n.contains(s)) {
              return !1;
            }
            e = e.parentElement
          }
          return !!i
        }
      },
      languages: {
        plain: e,
        plaintext: e,
        text: e,
        txt: e,
        extend: function (e, t) {
          var i, s = $.util.clone($.languages[e]);
          for (i in t) {
            s[i] = t[i];
          }
          return s
        },
        insertBefore: function (i, e, t, s) {
          var n, r = (s = s || $.languages)[i], o = {};
          for (n in r) {
            if (r.hasOwnProperty(n)) {
              if (n == e) {
                for (var a in t) {
                  t.hasOwnProperty(a) && (o[a] = t[a]);
                }
              }
              t.hasOwnProperty(n) || (o[n] = r[n])
            }
          }
          var l = s[i];
          return s[i] = o, $.languages.DFS($.languages, function (e, t) {
            t === l && e != i && (this[e] = o)
          }), o
        },
        DFS: function e(t, i, s, n) {
          n = n || {};
          var r, o, a, l = $.util.objId;
          for (r in t) {
            t.hasOwnProperty(r) && (i.call(t, r, t[r], s || r), o = t[r], "Object" !== (a = $.util.type(o)) || n[l(o)] ? "Array" !== a || n[l(o)] || (n[l(o)] = !0, e(o, i, r, n)) : (n[l(o)] = !0, e(o, i, null, n)))
          }
        }
      },
      plugins: {},
      highlightAll: function (e, t) {
        $.highlightAllUnder(document, e, t)
      },
      highlightAllUnder: function (e, t, i) {
        var s = {
          callback: i,
          container: e,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        $.hooks.run("before-highlightall", s), s.elements = Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)), $.hooks.run("before-all-elements-highlight", s);
        for (var n, r = 0; n = s.elements[r++];) {
          $.highlightElement(n, !0 === t, s.callback)
        }
      },
      highlightElement: function (e, t, i) {
        var s = $.util.getLanguage(e), n = $.languages[s],
          r = (e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + s, e.parentElement),
          o = (r && "pre" === r.nodeName.toLowerCase() && (r.className = r.className.replace(c, "").replace(/\s+/g, " ") + " language-" + s), {
            element: e,
            language: s,
            grammar: n,
            code: e.textContent
          });

        function a(e) {
          o.highlightedCode = e, $.hooks.run("before-insert", o), o.element.innerHTML = o.highlightedCode, $.hooks.run("after-highlight", o), $.hooks.run("complete", o), i && i.call(o.element)
        }

        if ($.hooks.run("before-sanity-check", o), (r = o.element.parentElement) && "pre" === r.nodeName.toLowerCase() && !r.hasAttribute("tabindex") && r.setAttribute("tabindex", "0"), !o.code) {
          return $.hooks.run("complete", o), void (i && i.call(o.element));
        }
        $.hooks.run("before-highlight", o), o.grammar ? t && l.Worker ? ((s = new Worker($.filename)).onmessage = function (e) {
          a(e.data)
        }, s.postMessage(JSON.stringify({
          language: o.language,
          code: o.code,
          immediateClose: !0
        }))) : a($.highlight(o.code, o.grammar, o.language)) : a($.util.encode(o.code))
      },
      highlight: function (e, t, i) {
        e = {code: e, grammar: t, language: i};
        return $.hooks.run("before-tokenize", e), e.tokens = $.tokenize(e.code, e.grammar), $.hooks.run("after-tokenize", e), z.stringify($.util.encode(e.tokens), e.language)
      },
      tokenize: function (e, t) {
        var i = t.rest;
        if (i) {
          for (var s in i) {
            t[s] = i[s];
          }
          delete t.rest
        }
        for (var n = new d, r = (j(n, n.head, e), function e(t, i, s, n, r, o) {
          for (var a in s) {
            if (s.hasOwnProperty(a) && s[a]) {
              for (var l = s[a], l = Array.isArray(l) ? l : [l], c = 0; c < l.length; ++c) {
                if (o && o.cause == a + "," + c) {
                  return;
                }
                var d, u = l[c], h = u.inside, p = !!u.lookbehind,
                  m = !!u.greedy,
                  f = u.alias;
                m && !u.pattern.global && (d = u.pattern.toString().match(/[imsuy]*$/)[0], u.pattern = RegExp(u.pattern.source, d + "g"));
                for (var g = u.pattern || u, v = n.next, y = r; v !== i.tail && !(o && y >= o.reach); y += v.value.length, v = v.next) {
                  var b = v.value;
                  if (i.length > t.length) {
                    return;
                  }
                  if (!(b instanceof z)) {
                    var w, x = 1;
                    if (m) {
                      if (!(w = D(g, y, t, p))) {
                        break;
                      }
                      var _ = w.index, T = w.index + w[0].length, E = y;
                      for (E += v.value.length; E <= _;) {
                        E += (v = v.next).value.length;
                      }
                      if (y = E -= v.value.length, v.value instanceof z) {
                        continue;
                      }
                      for (var S = v; S !== i.tail && (E < T || "string" == typeof S.value); S = S.next) {
                        x++, E += S.value.length;
                      }
                      x--, b = t.slice(y, E), w.index -= y
                    }
                    else if (!(w = D(g, 0, b, p))) {
                      continue;
                    }
                    for (var _ = w.index, C = w[0], k = b.slice(0, _), A = b.slice(_ + C.length), b = y + b.length, M = (o && b > o.reach && (o.reach = b), v.prev), P = (k && (M = j(i, M, k), y += k.length), O = L = I = k = P = void 0, i), k = M, I = x, L = k.next, O = 0; O < I && L !== P.tail; O++) {
                      L = L.next;
                    }
                    (k.next = L).prev = k, P.length -= O;
                    v = j(i, M, new z(a, h ? $.tokenize(C, h) : C, f, C));
                    A && j(i, v, A), 1 < x && (e(t, i, s, v.prev, y, k = {
                      cause: a + "," + c,
                      reach: b
                    }), o && k.reach > o.reach && (o.reach = k.reach))
                  }
                }
              }
            }
          }
        }(e, n, t, n.head, 0), n), o = [], a = r.head.next; a !== r.tail;) {
          o.push(a.value), a = a.next;
        }
        return o
      },
      hooks: {
        all: {}, add: function (e, t) {
          var i = $.hooks.all;
          i[e] = i[e] || [], i[e].push(t)
        }, run: function (e, t) {
          var i = $.hooks.all[e];
          if (i && i.length) {
            for (var s, n = 0; s = i[n++];) {
              s(t)
            }
          }
        }
      },
      Token: z
    };

    function z(e, t, i, s) {
      this.type = e, this.content = t, this.alias = i, this.length = 0 | (s || "").length
    }

    function D(e, t, i, s) {
      e.lastIndex = t;
      t = e.exec(i);
      return t && s && t[1] && (e = t[1].length, t.index += e, t[0] = t[0].slice(e)), t
    }

    function d() {
      var e = {value: null, prev: null, next: null},
        t = {value: null, prev: e, next: null};
      e.next = t, this.head = e, this.tail = t, this.length = 0
    }

    function j(e, t, i) {
      var s = t.next, i = {value: i, prev: t, next: s};
      return t.next = i, s.prev = i, e.length++, i
    }

    if (l.Prism = $, z.stringify = function t(e, i) {
      if ("string" == typeof e) {
        return e;
      }
      var s;
      if (Array.isArray(e)) {
        return s = "", e.forEach(function (e) {
          s += t(e, i)
        }), s;
      }
      var n, r = {
          type: e.type,
          content: t(e.content, i),
          tag: "span",
          classes: ["token", e.type],
          attributes: {},
          language: i
        }, e = e.alias,
        o = (e && (Array.isArray(e) ? Array.prototype.push.apply(r.classes, e) : r.classes.push(e)), $.hooks.run("wrap", r), "");
      for (n in r.attributes) {
        o += " " + n + '="' + (r.attributes[n] || "").replace(/"/g, "&quot;") + '"';
      }
      return "<" + r.tag + ' class="' + r.classes.join(" ") + '"' + o + ">" + r.content + "</" + r.tag + ">"
    }, !l.document) {
      return !l.addEventListener || $.disableWorkerMessageHandler || l.addEventListener("message", function (e) {
        var e = JSON.parse(e.data), t = e.language, i = e.code,
          e = e.immediateClose;
        l.postMessage($.highlight(i, $.languages[t], t)), e && l.close()
      }, !1), $;
    }
    var i, e = $.util.currentScript();

    function s() {
      $.manual || $.highlightAll()
    }

    return e && ($.filename = e.src, e.hasAttribute("data-manual") && ($.manual = !0)), $.manual || ("loading" === (i = document.readyState) || "interactive" === i && e && e.defer ? document.addEventListener("DOMContentLoaded", s) : window.requestAnimationFrame ? window.requestAnimationFrame(s) : window.setTimeout(s, 16)), $
  }(_self),
  $jscomp = ("undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: {
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
        },
        string: {pattern: /"[^"]*"|'[^']*'/, greedy: !0},
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/,
        name: /[^\s<>'"]+/
      }
    },
    cdata: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {punctuation: [{pattern: /^=/, alias: "attr-equals"}, /"|'/]}
        },
        punctuation: /\/?>/,
        "attr-name": {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}
      }
    },
    entity: [{
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity"
    }, /&#x?[\da-f]{1,8};/i]
  }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function (e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
  }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function (e, t) {
      var i = {}, i = (i["language-" + t] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: Prism.languages[t]
      }, i.cdata = /^<!\[CDATA\[|\]\]>$/i, {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: i
        }
      }), t = (i["language-" + t] = {
        pattern: /[\s\S]+/,
        inside: Prism.languages[t]
      }, {});
      t[e] = {
        pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function () {
          return e
        }), "i"), lookbehind: !0, greedy: !0, inside: i
      }, Prism.languages.insertBefore("markup", "cdata", t)
    }
  }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
    value: function (e, t) {
      Prism.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp("(^|[\"'\\s])(?:" + e + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [t, "language-" + t],
                inside: Prism.languages[t]
              }, punctuation: [{pattern: /^=/, alias: "attr-equals"}, /"|'/]
            }
          }
        }
      })
    }
  }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml, !function (e) {
    var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,
      t = (e.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: !0,
              alias: "selector"
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: !0
            }
          }
        },
        url: {
          pattern: RegExp("\\burl\\((?:" + t.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
          greedy: !0,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {pattern: RegExp("^" + t.source + "$"), alias: "url"}
          }
        },
        selector: {
          pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
          lookbehind: !0
        },
        string: {pattern: t, greedy: !0},
        property: {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: !0
        },
        important: /!important\b/i,
        function: {pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0},
        punctuation: /[(){};:,]/
      }, e.languages.css.atrule.inside.rest = e.languages.css, e.languages.markup);
    t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"))
  }(Prism), Prism.languages.clike = {
    comment: [{
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0,
      greedy: !0
    }, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0}],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {punctuation: /[.\\]/}
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [Prism.languages.clike["class-name"], {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
      lookbehind: !0
    }],
    keyword: [{
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: !0
    }, {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0
    }],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: Prism.languages.regex
        }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/
      }
    },
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [{
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    }, {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: Prism.languages.javascript
    }, {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    }, {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), Prism.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {pattern: /^`|`$/, alias: "string"},
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            }, rest: Prism.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    }
  }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), Prism.languages.js = Prism.languages.javascript, !function (p) {
    function m(e, t) {
      return "___" + e.toUpperCase() + t + "___"
    }

    Object.defineProperties(p.languages["markup-templating"] = {}, {
      buildPlaceholders: {
        value: function (s, n, e, r) {
          var o;
          s.language === n && (o = s.tokenStack = [], s.code = s.code.replace(e, function (e) {
            if ("function" == typeof r && !r(e)) {
              return e;
            }
            for (var t, i = o.length; -1 !== s.code.indexOf(t = m(n, i));) {
              ++i;
            }
            return o[i] = e, t
          }), s.grammar = p.languages.markup)
        }
      }, tokenizePlaceholders: {
        value: function (c, d) {
          var u, h;
          c.language === d && c.tokenStack && (c.grammar = p.languages[d], u = 0, h = Object.keys(c.tokenStack), function e(t) {
            for (var i = 0; i < t.length && !(u >= h.length); i++) {
              var s, n, r, o, a, l = t[i];
              "string" == typeof l || l.content && "string" == typeof l.content ? (s = h[u], r = c.tokenStack[s], o = "string" == typeof l ? l : l.content, s = m(d, s), -1 < (a = o.indexOf(s)) && (++u, n = o.substring(0, a), r = new p.Token(d, p.tokenize(r, c.grammar), "language-" + d, r), o = o.substring(a + s.length), a = [], n && a.push.apply(a, e([n])), a.push(r), o && a.push.apply(a, e([o])), "string" == typeof l ? t.splice.apply(t, [i, 1].concat(a)) : l.content = a)) : l.content && e(l.content)
            }
            return t
          }(c.tokens))
        }
      }
    })
  }(Prism), !function (t) {
    var e = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/, i = [{
        pattern: /\b(?:false|true)\b/i,
        alias: "boolean"
      }, {
        pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
        greedy: !0,
        lookbehind: !0
      }, {
        pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
        greedy: !0,
        lookbehind: !0
      }, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],
      s = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      n = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
      r = /[{}\[\](),:;]/, o = (t.languages.php = {
        delimiter: {pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i, alias: "important"},
        comment: e,
        variable: /\$+(?:\w+\b|(?=\{))/i,
        package: {
          pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
          lookbehind: !0,
          inside: {punctuation: /\\/}
        },
        "class-name-definition": {
          pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
          lookbehind: !0,
          alias: "class-name"
        },
        "function-definition": {
          pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
          lookbehind: !0,
          alias: "function"
        },
        keyword: [{
          pattern: /(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i,
          alias: "type-casting",
          greedy: !0,
          lookbehind: !0
        }, {
          pattern: /([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i,
          alias: "type-hint",
          greedy: !0,
          lookbehind: !0
        }, {
          pattern: /([(,?]\s*[\w|]\|\s*)(?:null|false)\b(?=\s*\$)/i,
          alias: "type-hint",
          greedy: !0,
          lookbehind: !0
        }, {
          pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i,
          alias: "return-type",
          greedy: !0,
          lookbehind: !0
        }, {
          pattern: /(\)\s*:\s*(?:\?\s*)?[\w|]\|\s*)(?:null|false)\b/i,
          alias: "return-type",
          greedy: !0,
          lookbehind: !0
        }, {
          pattern: /\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i,
          alias: "type-declaration",
          greedy: !0
        }, {
          pattern: /(\|\s*)(?:null|false)\b/i,
          alias: "type-declaration",
          greedy: !0,
          lookbehind: !0
        }, {
          pattern: /\b(?:parent|self|static)(?=\s*::)/i,
          alias: "static-context",
          greedy: !0
        }, {
          pattern: /(\byield\s+)from\b/i,
          lookbehind: !0
        }, /\bclass\b/i, {
          pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
          lookbehind: !0
        }],
        "argument-name": {
          pattern: /([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i,
          lookbehind: !0
        },
        "class-name": [{
          pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
          greedy: !0,
          lookbehind: !0
        }, {
          pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
          greedy: !0,
          lookbehind: !0
        }, {
          pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
          greedy: !0
        }, {
          pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
          alias: "class-name-fully-qualified",
          greedy: !0,
          lookbehind: !0,
          inside: {punctuation: /\\/}
        }, {
          pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
          alias: "class-name-fully-qualified",
          greedy: !0,
          inside: {punctuation: /\\/}
        }, {
          pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
          alias: "class-name-fully-qualified",
          greedy: !0,
          lookbehind: !0,
          inside: {punctuation: /\\/}
        }, {
          pattern: /\b[a-z_]\w*(?=\s*\$)/i,
          alias: "type-declaration",
          greedy: !0
        }, {
          pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
          alias: ["class-name-fully-qualified", "type-declaration"],
          greedy: !0,
          inside: {punctuation: /\\/}
        }, {
          pattern: /\b[a-z_]\w*(?=\s*::)/i,
          alias: "static-context",
          greedy: !0
        }, {
          pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
          alias: ["class-name-fully-qualified", "static-context"],
          greedy: !0,
          inside: {punctuation: /\\/}
        }, {
          pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
          alias: "type-hint",
          greedy: !0,
          lookbehind: !0
        }, {
          pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
          alias: ["class-name-fully-qualified", "type-hint"],
          greedy: !0,
          lookbehind: !0,
          inside: {punctuation: /\\/}
        }, {
          pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
          alias: "return-type",
          greedy: !0,
          lookbehind: !0
        }, {
          pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
          alias: ["class-name-fully-qualified", "return-type"],
          greedy: !0,
          lookbehind: !0,
          inside: {punctuation: /\\/}
        }],
        constant: i,
        function: {
          pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
          lookbehind: !0,
          inside: {punctuation: /\\/}
        },
        property: {pattern: /(->\s*)\w+/, lookbehind: !0},
        number: s,
        operator: n,
        punctuation: r
      }, {
        pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
        lookbehind: !0,
        inside: t.languages.php
      }), o = [{
        pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
        alias: "nowdoc-string",
        greedy: !0,
        inside: {
          delimiter: {
            pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
            alias: "symbol",
            inside: {punctuation: /^<<<'?|[';]$/}
          }
        }
      }, {
        pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
        alias: "heredoc-string",
        greedy: !0,
        inside: {
          delimiter: {
            pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
            alias: "symbol",
            inside: {punctuation: /^<<<"?|[";]$/}
          }, interpolation: o
        }
      }, {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        alias: "backtick-quoted-string",
        greedy: !0
      }, {
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        alias: "single-quoted-string",
        greedy: !0
      }, {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        alias: "double-quoted-string",
        greedy: !0,
        inside: {interpolation: o}
      }];
    t.languages.insertBefore("php", "variable", {
      string: o,
      attribute: {
        pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
        greedy: !0,
        inside: {
          "attribute-content": {
            pattern: /^(#\[)[\s\S]+(?=\]$)/,
            lookbehind: !0,
            inside: {
              comment: e,
              string: o,
              "attribute-class-name": [{
                pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                alias: "class-name",
                greedy: !0,
                lookbehind: !0
              }, {
                pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                alias: ["class-name", "class-name-fully-qualified"],
                greedy: !0,
                lookbehind: !0,
                inside: {punctuation: /\\/}
              }],
              constant: i,
              number: s,
              operator: n,
              punctuation: r
            }
          }, delimiter: {pattern: /^#\[|\]$/, alias: "punctuation"}
        }
      }
    }), t.hooks.add("before-tokenize", function (e) {
      /<\?/.test(e.code) && t.languages["markup-templating"].buildPlaceholders(e, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/gi)
    }), t.hooks.add("after-tokenize", function (e) {
      t.languages["markup-templating"].tokenizePlaceholders(e, "php")
    })
  }(Prism), !function (e) {
    e.languages.sass = e.languages.extend("css", {
      comment: {
        pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
        lookbehind: !0,
        greedy: !0
      }
    }), e.languages.insertBefore("sass", "atrule", {
      "atrule-line": {
        pattern: /^(?:[ \t]*)[@+=].+/m,
        greedy: !0,
        inside: {atrule: /(?:@[\w-]+|[+=])/m}
      }
    }), delete e.languages.sass.atrule;
    var t = /\$[-\w]+|#\{\$[-\w]+\}/,
      i = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
        pattern: /(\s)-(?=\s)/,
        lookbehind: !0
      }];
    e.languages.insertBefore("sass", "property", {
      "variable-line": {
        pattern: /^[ \t]*\$.+/m,
        greedy: !0,
        inside: {punctuation: /:/, variable: t, operator: i}
      },
      "property-line": {
        pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
        greedy: !0,
        inside: {
          property: [/[^:\s]+(?=\s*:)/, {
            pattern: /(:)[^:\s]+/,
            lookbehind: !0
          }],
          punctuation: /:/,
          variable: t,
          operator: i,
          important: e.languages.sass.important
        }
      }
    }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", {
      selector: {
        pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
        lookbehind: !0,
        greedy: !0
      }
    })
  }(Prism), Prism.languages.scss = Prism.languages.extend("css", {
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: !0
    },
    atrule: {
      pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
      inside: {rule: /@[\w-]+/}
    },
    url: /(?:[-a-z]+-)?url(?=\()/i,
    selector: {
      pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/m,
      inside: {
        parent: {pattern: /&/, alias: "important"},
        placeholder: /%[-\w]+/,
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
      }
    },
    property: {
      pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
      inside: {variable: /\$[-\w]+|#\{\$[-\w]+\}/}
    }
  }), Prism.languages.insertBefore("scss", "atrule", {
    keyword: [/@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i, {
      pattern: /( )(?:from|through)(?= )/,
      lookbehind: !0
    }]
  }), Prism.languages.insertBefore("scss", "important", {variable: /\$[-\w]+|#\{\$[-\w]+\}/}), Prism.languages.insertBefore("scss", "function", {
    "module-modifier": {
      pattern: /\b(?:as|with|show|hide)\b/i,
      alias: "keyword"
    },
    placeholder: {pattern: /%[-\w]+/, alias: "selector"},
    statement: {pattern: /\B!(?:default|optional)\b/i, alias: "keyword"},
    boolean: /\b(?:true|false)\b/,
    null: {pattern: /\bnull\b/, alias: "keyword"},
    operator: {
      pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
      lookbehind: !0
    }
  }), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss, !function (e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).ProgressBar = e()
  }(function () {
    return function s(n, r, o) {
      function a(i, e) {
        if (!r[i]) {
          if (!n[i]) {
            var t = "function" == typeof require && require;
            if (!e && t) {
              return t(i, !0);
            }
            if (l) {
              return l(i, !0);
            }
            e = new Error("Cannot find module '" + i + "'");
            throw e.code = "MODULE_NOT_FOUND", e
          }
          t = r[i] = {exports: {}};
          n[i][0].call(t.exports, function (e) {
            var t = n[i][1][e];
            return a(t || e)
          }, t, t.exports, s, n, r, o)
        }
        return r[i].exports
      }

      for (var l = "function" == typeof require && require, e = 0; e < o.length; e++) {
        a(o[e]);
      }
      return a
    }({
      1: [function (e, E, S) {
        !function () {
          var c, o, a, r, n, l, s, d, t, u, h,
            y = this || Function("return this")(), p = function () {
              "use strict";

              function n() {
              }

              function r(e, t) {
                for (var i in e) {
                  Object.hasOwnProperty.call(e, i) && t(i)
                }
              }

              function o(t, i) {
                return r(i, function (e) {
                  t[e] = i[e]
                }), t
              }

              function a(t, i) {
                r(i, function (e) {
                  void 0 === t[e] && (t[e] = i[e])
                })
              }

              function u(e, t, i, s, n, r, o) {
                var a, l, c = e < r ? 0 : (e - r) / n;
                for (a in t) {
                  t.hasOwnProperty(a) && (l = o[a], l = "function" == typeof l ? l : p[l], t[a] = d(i[a], s[a], l, c));
                }
                return t
              }

              function d(e, t, i, s) {
                return e + (t - e) * i(s)
              }

              function h(t, i) {
                var s = e.prototype.filter, n = t._filterArgs;
                r(s, function (e) {
                  void 0 !== s[e][i] && s[e][i].apply(t, n)
                })
              }

              function l(e, t, i, s, n, r, o, a, l, c, d) {
                g = t + i + s, m = Math.min(d || v(), g), f = g <= m, g = s - (g - m), e.isPlaying() && (f ? (l(o, e._attachment, g), e.stop(!0)) : (e._scheduleId = c(e._timeoutHandler, 1e3 / 60), h(e, "beforeTween"), m < t + i ? u(1, n, r, o, 1, 1, a) : u(m, n, r, o, s, t + i, a), h(e, "afterTween"), l(n, e._attachment, g)))
              }

              function c(e, t) {
                var i = {}, s = typeof t;
                return r(e, "string" == s || "function" == s ? function (e) {
                  i[e] = t
                } : function (e) {
                  i[e] || (i[e] = t[e] || "linear")
                }), i
              }

              function e(e, t) {
                this._currentState = e || {}, this._configured = !1, this._scheduleFunction = i, void 0 !== t && this.setConfig(t)
              }

              var p, m, f, g, t = Date.now || function () {
                  return +new Date
                },
                v = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : t,
                i = "undefined" != typeof window && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame) || setTimeout;
              return e.prototype.tween = function (e) {
                return this._isTweening ? this : (void 0 === e && this._configured || this.setConfig(e), this._timestamp = v(), this._start(this.get(), this._attachment), this.resume())
              }, e.prototype.setConfig = function (e) {
                e = e || {}, this._configured = !0, this._attachment = e.attachment, this._pausedAtTime = null, this._scheduleId = null, this._delay = e.delay || 0, this._start = e.start || n, this._step = e.step || n, this._finish = e.finish || n, this._duration = e.duration || 500, this._currentState = o({}, e.from) || this.get(), this._originalState = this.get(), this._targetState = o({}, e.to) || this.get();
                var t = this, i = (this._timeoutHandler = function () {
                  l(t, t._timestamp, t._delay, t._duration, t._currentState, t._originalState, t._targetState, t._easing, t._step, t._scheduleFunction)
                }, this._currentState), s = this._targetState;
                return a(s, i), this._easing = c(i, e.easing || "linear"), this._filterArgs = [i, this._originalState, s, this._easing], h(this, "tweenCreated"), this
              }, e.prototype.get = function () {
                return o({}, this._currentState)
              }, e.prototype.set = function (e) {
                this._currentState = e
              }, e.prototype.pause = function () {
                return this._pausedAtTime = v(), this._isPaused = !0, this
              }, e.prototype.resume = function () {
                return this._isPaused && (this._timestamp += v() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0, this._timeoutHandler(), this
              }, e.prototype.seek = function (e) {
                e = Math.max(e, 0);
                var t = v();
                return this._timestamp + e === 0 || (this._timestamp = t - e, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, l(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, t), this.pause())), this
              }, e.prototype.stop = function (e) {
                return this._isTweening = !1, this._isPaused = !1, this._timeoutHandler = n, (y.cancelAnimationFrame || y.webkitCancelAnimationFrame || y.oCancelAnimationFrame || y.msCancelAnimationFrame || y.mozCancelRequestAnimationFrame || y.clearTimeout)(this._scheduleId), e && (h(this, "beforeTween"), u(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), h(this, "afterTween"), h(this, "afterTweenEnd"), this._finish.call(this, this._currentState, this._attachment)), this
              }, e.prototype.isPlaying = function () {
                return this._isTweening && !this._isPaused
              }, e.prototype.setScheduleFunction = function (e) {
                this._scheduleFunction = e
              }, e.prototype.dispose = function () {
                for (var e in this) {
                  this.hasOwnProperty(e) && delete this[e]
                }
              }, e.prototype.filter = {}, p = e.prototype.formula = {
                linear: function (e) {
                  return e
                }
              }, o(e, {
                now: v,
                each: r,
                tweenProps: u,
                tweenProp: d,
                applyFilter: h,
                shallowCopy: o,
                defaults: a,
                composeEasingObject: c
              }), "function" == typeof SHIFTY_DEBUG_NOW && (y.timeoutHandler = l), "object" == typeof S ? E.exports = e : void 0 === y.Tweenable && (y.Tweenable = e), e
            }();

          function m(i) {
            c.each(i, function (e) {
              var t = i[e];
              "string" == typeof t && t.match(s) && (i[e] = g(s, t, f))
            })
          }

          function f(e) {
            return 3 === (e = (e = e).replace(/#/, "")).length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t[0] = i(e.substr(0, 2)), t[1] = i(e.substr(2, 2)), t[2] = i(e.substr(4, 2)), "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")"
          }

          function i(e) {
            return parseInt(e, 16)
          }

          function g(e, t, i) {
            var s = t.match(e), n = t.replace(e, d);
            if (s) {
              for (var r, o = s.length, a = 0; a < o; a++) {
                r = s.shift(), n = n.replace(d, i(r));
              }
            }
            return n
          }

          function v(e) {
            for (var t = e.match(r), i = t.length, s = e.match(l)[0], n = 0; n < i; n++) {
              s += parseInt(t[n], 10) + ",";
            }
            return s.slice(0, -1) + ")"
          }

          function b(n) {
            var r = {};
            return c.each(n, function (e) {
              var t, i, s = n[e];
              "string" == typeof s && (t = _(s), r[e] = {
                formatString: ((i = (s = s).match(a)) ? 1 !== i.length && !s[0].match(o) || i.unshift("") : i = ["", ""], i.join(d)),
                chunkNames: function (e, t) {
                  for (var i = [], s = e.length, n = 0; n < s; n++) {
                    i.push("_" + t + "_" + n);
                  }
                  return i
                }(t, e)
              })
            }), r
          }

          function w(n, r) {
            c.each(r, function (e) {
              for (var t = _(n[e]), i = t.length, s = 0; s < i; s++) {
                n[r[e].chunkNames[s]] = +t[s];
              }
              delete n[e]
            })
          }

          function x(i, s) {
            c.each(s, function (e) {
              i[e];
              var t = function (e, t) {
                u.length = 0;
                for (var i = t.length, s = 0; s < i; s++) {
                  u.push(e[t[s]]);
                }
                return u
              }(function (e, t) {
                for (var i, s = {}, n = t.length, r = 0; r < n; r++) {
                  i = t[r], s[i] = e[i], delete e[i];
                }
                return s
              }(i, s[e].chunkNames), s[e].chunkNames), t = function (e, t) {
                for (var i = e, s = t.length, n = 0; n < s; n++) {
                  i = i.replace(d, +t[n].toFixed(4));
                }
                return i
              }(s[e].formatString, t);
              i[e] = g(n, t, v)
            })
          }

          function _(e) {
            return e.match(r)
          }

          function T(e, t, i, s, n, r) {
            function l(e) {
              return ((d * e + u) * e + h) * e
            }

            function c(e) {
              return 0 <= e ? e : 0 - e
            }

            var d = 0, u = 0, h = 0, o = 0, a = 0, p = 0,
              d = 1 - (h = 3 * t) - (u = 3 * (s - t) - h),
              o = 1 - (p = 3 * i) - (a = 3 * (n - i) - p);
            return s = function (e, t) {
              var i, s, n, r, o, a;
              for (n = e, a = 0; a < 8; a++) {
                if (c(r = l(n) - e) < t) {
                  return n;
                }
                if (c(o = function (e) {
                  return (3 * d * e + 2 * u) * e + h
                }(n)) < 1e-6) {
                  break;
                }
                n -= r / o
              }
              if (s = 1, (i = 0) > (n = e)) {
                return i;
              }
              if (s < n) {
                return s;
              }
              for (; i < s;) {
                if (c((r = l(n)) - e) < t) {
                  return n;
                }
                r < e ? i = n : s = n, n = .5 * (s - i) + i
              }
              return n
            }(s = e, 1 / (200 * r)), ((o * s + a) * s + p) * s
          }

          p.shallowCopy(p.prototype.formula, {
            easeInQuad: function (e) {
              return Math.pow(e, 2)
            }, easeOutQuad: function (e) {
              return -(Math.pow(e - 1, 2) - 1)
            }, easeInOutQuad: function (e) {
              return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
            }, easeInCubic: function (e) {
              return Math.pow(e, 3)
            }, easeOutCubic: function (e) {
              return Math.pow(e - 1, 3) + 1
            }, easeInOutCubic: function (e) {
              return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
            }, easeInQuart: function (e) {
              return Math.pow(e, 4)
            }, easeOutQuart: function (e) {
              return -(Math.pow(e - 1, 4) - 1)
            }, easeInOutQuart: function (e) {
              return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
            }, easeInQuint: function (e) {
              return Math.pow(e, 5)
            }, easeOutQuint: function (e) {
              return Math.pow(e - 1, 5) + 1
            }, easeInOutQuint: function (e) {
              return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
            }, easeInSine: function (e) {
              return 1 - Math.cos(e * (Math.PI / 2))
            }, easeOutSine: function (e) {
              return Math.sin(e * (Math.PI / 2))
            }, easeInOutSine: function (e) {
              return -.5 * (Math.cos(Math.PI * e) - 1)
            }, easeInExpo: function (e) {
              return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
            }, easeOutExpo: function (e) {
              return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
            }, easeInOutExpo: function (e) {
              return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
            }, easeInCirc: function (e) {
              return -(Math.sqrt(1 - e * e) - 1)
            }, easeOutCirc: function (e) {
              return Math.sqrt(1 - Math.pow(e - 1, 2))
            }, easeInOutCirc: function (e) {
              return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }, easeOutBounce: function (e) {
              return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }, easeInBack: function (e) {
              return e * e * (2.70158 * e - 1.70158)
            }, easeOutBack: function (e) {
              return --e * e * (2.70158 * e + 1.70158) + 1
            }, easeInOutBack: function (e) {
              var t = 1.70158;
              return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
            }, elastic: function (e) {
              return -1 * Math.pow(4, -8 * e) * Math.sin((6 * e - 1) * (2 * Math.PI) / 2) + 1
            }, swingFromTo: function (e) {
              var t = 1.70158;
              return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
            }, swingFrom: function (e) {
              return e * e * (2.70158 * e - 1.70158)
            }, swingTo: function (e) {
              return --e * e * (2.70158 * e + 1.70158) + 1
            }, bounce: function (e) {
              return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }, bouncePast: function (e) {
              return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }, easeFromTo: function (e) {
              return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
            }, easeFrom: function (e) {
              return Math.pow(e, 4)
            }, easeTo: function (e) {
              return Math.pow(e, .25)
            }
          }), p.setBezierFunction = function (e, t, i, s, n) {
            r = t, o = i, a = s, l = n;
            var r, o, a, l, c = function (e) {
              return T(e, r, o, a, l, 1)
            };
            return c.displayName = e, c.x1 = t, c.y1 = i, c.x2 = s, c.y2 = n, p.prototype.formula[e] = c
          }, p.unsetBezierFunction = function (e) {
            delete p.prototype.formula[e]
          }, (h = new p)._filterArgs = [], p.interpolate = function (e, t, i, s, n) {
            var r = p.shallowCopy({}, e), n = n || 0,
              s = p.composeEasingObject(e, s || "linear"),
              o = (h.set({}), h._filterArgs),
              o = (o.length = 0, o[0] = r, o[1] = e, o[2] = t, o[3] = s, p.applyFilter(h, "tweenCreated"), p.applyFilter(h, "beforeTween"), p.tweenProps(i, r, e, t, 1, n, s));
            return p.applyFilter(h, "afterTween"), o
          }, c = p, o = /(\d|\-|\.)/, a = /([^\-0-9\.]+)/g, r = /[0-9.\-]+/g, n = new RegExp("rgb\\(" + r.source + /,\s*/.source + r.source + /,\s*/.source + r.source + "\\)", "g"), l = /^.*\(/, s = /#([0-9]|[a-f]){3,6}/gi, d = "VAL", t = [], u = [], c.prototype.filter.token = {
            tweenCreated: function (e, t, i, s) {
              m(e), m(t), m(i), this._tokenData = b(e)
            }, beforeTween: function (e, t, i, s) {
              var a, l;
              a = s, l = this._tokenData, c.each(l, function (e) {
                var t = l[e].chunkNames, i = t.length, s = a[e];
                if ("string" == typeof s) {
                  for (var n = s.split(" "), r = n[n.length - 1], o = 0; o < i; o++) {
                    a[t[o]] = n[o] || r;
                  }
                }
                else {
                  for (o = 0; o < i; o++) {
                    a[t[o]] = s;
                  }
                }
                delete a[e]
              }), w(e, this._tokenData), w(t, this._tokenData), w(i, this._tokenData)
            }, afterTween: function (e, t, i, s) {
              var o, a;
              x(e, this._tokenData), x(t, this._tokenData), x(i, this._tokenData), o = s, a = this._tokenData, c.each(a, function (e) {
                var t = a[e].chunkNames, i = t.length, s = o[t[0]];
                if ("string" == typeof s) {
                  for (var n = "", r = 0; r < i; r++) {
                    n += " " + o[t[r]], delete o[t[r]];
                  }
                  o[e] = n.substr(1)
                }
                else {
                  o[e] = s
                }
              })
            }
          }
        }.call(null)
      }, {}], 2: [function (e, t, i) {
        function s(e, t) {
          this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}", this.containerAspectRatio = 1, n.apply(this, arguments)
        }

        var n = e("./shape"), r = e("./utils");
        ((s.prototype = new n).constructor = s).prototype._pathString = function (e) {
          var t = e.strokeWidth,
            e = 50 - (t = e.trailWidth && e.trailWidth > e.strokeWidth ? e.trailWidth : t) / 2;
          return r.render(this._pathTemplate, {radius: e, "2radius": 2 * e})
        }, s.prototype._trailString = function (e) {
          return this._pathString(e)
        }, t.exports = s
      }, {"./shape": 7, "./utils": 8}], 3: [function (e, t, i) {
        function s(e, t) {
          this._pathTemplate = "M 0,{center} L 100,{center}", n.apply(this, arguments)
        }

        var n = e("./shape"), r = e("./utils");
        ((s.prototype = new n).constructor = s).prototype._initializeSvg = function (e, t) {
          e.setAttribute("viewBox", "0 0 100 " + t.strokeWidth), e.setAttribute("preserveAspectRatio", "none")
        }, s.prototype._pathString = function (e) {
          return r.render(this._pathTemplate, {center: e.strokeWidth / 2})
        }, s.prototype._trailString = function (e) {
          return this._pathString(e)
        }, t.exports = s
      }, {"./shape": 7, "./utils": 8}], 4: [function (e, t, i) {
        t.exports = {
          Line: e("./line"),
          Circle: e("./circle"),
          SemiCircle: e("./semicircle"),
          Path: e("./path"),
          Shape: e("./shape"),
          utils: e("./utils")
        }
      }, {
        "./circle": 2,
        "./line": 3,
        "./path": 5,
        "./semicircle": 6,
        "./shape": 7,
        "./utils": 8
      }], 5: [function (e, t, i) {
        function s(e, t) {
          if (!(this instanceof s)) {
            throw new Error("Constructor was called without new keyword");
          }
          t = l.extend({
            duration: 800,
            easing: "linear",
            from: {},
            to: {},
            step: function () {
            }
          }, t), e = l.isString(e) ? document.querySelector(e) : e, this.path = e, this._opts = t, this._tweenable = null, e = this.path.getTotalLength(), this.path.style.strokeDasharray = e + " " + e, this.set(0)
        }

        var a = e("shifty"), l = e("./utils"), n = {
          easeIn: "easeInCubic",
          easeOut: "easeOutCubic",
          easeInOut: "easeInOutCubic"
        };
        s.prototype.value = function () {
          var e = this._getComputedDashOffset(), t = this.path.getTotalLength();
          return parseFloat((1 - e / t).toFixed(6), 10)
        }, s.prototype.set = function (e) {
          this.stop(), this.path.style.strokeDashoffset = this._progressToOffset(e);
          var t, i = this._opts.step;
          l.isFunction(i) && (t = this._easing(this._opts.easing), i(this._calculateTo(e, t), this._opts.shape || this, this._opts.attachment))
        }, s.prototype.stop = function () {
          this._stopTween(), this.path.style.strokeDashoffset = this._getComputedDashOffset()
        }, s.prototype.animate = function (e, i, t) {
          i = i || {}, l.isFunction(i) && (t = i, i = {});
          var s = l.extend({}, i), n = l.extend({}, this._opts),
            n = (i = l.extend(n, i), this._easing(i.easing)),
            s = this._resolveFromAndTo(e, n, s),
            r = (this.stop(), this.path.getBoundingClientRect(), this._getComputedDashOffset()),
            e = this._progressToOffset(e), o = this;
          this._tweenable = new a, this._tweenable.tween({
            from: l.extend({offset: r}, s.from),
            to: l.extend({offset: e}, s.to),
            duration: i.duration,
            easing: n,
            step: function (e) {
              o.path.style.strokeDashoffset = e.offset;
              var t = i.shape || o;
              i.step(e, t, i.attachment)
            },
            finish: function (e) {
              l.isFunction(t) && t()
            }
          })
        }, s.prototype._getComputedDashOffset = function () {
          var e = window.getComputedStyle(this.path, null);
          return parseFloat(e.getPropertyValue("stroke-dashoffset"), 10)
        }, s.prototype._progressToOffset = function (e) {
          var t = this.path.getTotalLength();
          return t - e * t
        }, s.prototype._resolveFromAndTo = function (e, t, i) {
          return i.from && i.to ? {
            from: i.from,
            to: i.to
          } : {from: this._calculateFrom(t), to: this._calculateTo(e, t)}
        }, s.prototype._calculateFrom = function (e) {
          return a.interpolate(this._opts.from, this._opts.to, this.value(), e)
        }, s.prototype._calculateTo = function (e, t) {
          return a.interpolate(this._opts.from, this._opts.to, e, t)
        }, s.prototype._stopTween = function () {
          null !== this._tweenable && (this._tweenable.stop(), this._tweenable = null)
        }, s.prototype._easing = function (e) {
          return n.hasOwnProperty(e) ? n[e] : e
        }, t.exports = s
      }, {"./utils": 8, shifty: 1}], 6: [function (e, t, i) {
        function s(e, t) {
          this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0", this.containerAspectRatio = 2, n.apply(this, arguments)
        }

        var n = e("./shape"), r = e("./circle"), o = e("./utils");
        ((s.prototype = new n).constructor = s).prototype._initializeSvg = function (e, t) {
          e.setAttribute("viewBox", "0 0 100 50")
        }, s.prototype._initializeTextContainer = function (e, t, i) {
          e.text.style && (i.style.top = "auto", i.style.bottom = "0", e.text.alignToBottom ? o.setStyle(i, "transform", "translate(-50%, 0)") : o.setStyle(i, "transform", "translate(-50%, 50%)"))
        }, s.prototype._pathString = r.prototype._pathString, s.prototype._trailString = r.prototype._trailString, t.exports = s
      }, {"./circle": 2, "./shape": 7, "./utils": 8}], 7: [function (e, t, i) {
        function n(e, t) {
          if (!(this instanceof n)) {
            throw new Error("Constructor was called without new keyword");
          }
          if (0 !== arguments.length) {
            this._opts = o.extend({
              color: "#555",
              strokeWidth: 1,
              trailColor: null,
              trailWidth: null,
              fill: null,
              text: {
                style: {
                  color: null,
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  padding: 0,
                  margin: 0,
                  transform: {prefix: !0, value: "translate(-50%, -50%)"}
                },
                autoStyleContainer: !0,
                alignToBottom: !0,
                value: null,
                className: "progressbar-text"
              },
              svgStyle: {display: "block", width: "100%"},
              warnings: !1
            }, t, !0), o.isObject(t) && void 0 !== t.svgStyle && (this._opts.svgStyle = t.svgStyle), o.isObject(t) && o.isObject(t.text) && void 0 !== t.text.style && (this._opts.text.style = t.text.style);
            var i = this._createSvgView(this._opts),
              s = o.isString(e) ? document.querySelector(e) : e;
            if (!s) {
              throw new Error("Container does not exist: " + e);
            }
            this._container = s, this._container.appendChild(i.svg), this._opts.warnings && this._warnContainerAspectRatio(this._container), this._opts.svgStyle && o.setStyles(i.svg, this._opts.svgStyle), this.svg = i.svg, this.path = i.path, this.trail = i.trail, this.text = null;
            s = o.extend({attachment: void 0, shape: this}, this._opts);
            this._progressPath = new r(i.path, s), o.isObject(this._opts.text) && null !== this._opts.text.value && this.setText(this._opts.text.value)
          }
        }

        var r = e("./path"), o = e("./utils"), s = "Object is destroyed";
        n.prototype.animate = function (e, t, i) {
          if (null === this._progressPath) {
            throw new Error(s);
          }
          this._progressPath.animate(e, t, i)
        }, n.prototype.stop = function () {
          if (null === this._progressPath) {
            throw new Error(s);
          }
          void 0 !== this._progressPath && this._progressPath.stop()
        }, n.prototype.destroy = function () {
          if (null === this._progressPath) {
            throw new Error(s);
          }
          this.stop(), this.svg.parentNode.removeChild(this.svg), this.svg = null, this.path = null, this.trail = null, (this._progressPath = null) !== this.text && (this.text.parentNode.removeChild(this.text), this.text = null)
        }, n.prototype.set = function (e) {
          if (null === this._progressPath) {
            throw new Error(s);
          }
          this._progressPath.set(e)
        }, n.prototype.value = function () {
          if (null === this._progressPath) {
            throw new Error(s);
          }
          return void 0 === this._progressPath ? 0 : this._progressPath.value()
        }, n.prototype.setText = function (e) {
          if (null === this._progressPath) {
            throw new Error(s);
          }
          null === this.text && (this.text = this._createTextContainer(this._opts, this._container), this._container.appendChild(this.text)), o.isObject(e) ? (o.removeChildren(this.text), this.text.appendChild(e)) : this.text.innerHTML = e
        }, n.prototype._createSvgView = function (e) {
          var t = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            i = (this._initializeSvg(t, e), null),
            e = ((e.trailColor || e.trailWidth) && (i = this._createTrail(e), t.appendChild(i)), this._createPath(e));
          return t.appendChild(e), {svg: t, path: e, trail: i}
        }, n.prototype._initializeSvg = function (e, t) {
          e.setAttribute("viewBox", "0 0 100 100")
        }, n.prototype._createPath = function (e) {
          var t = this._pathString(e);
          return this._createPathElement(t, e)
        }, n.prototype._createTrail = function (e) {
          var t = this._trailString(e), e = o.extend({}, e);
          return e.trailColor || (e.trailColor = "#eee"), e.trailWidth || (e.trailWidth = e.strokeWidth), e.color = e.trailColor, e.strokeWidth = e.trailWidth, e.fill = null, this._createPathElement(t, e)
        }, n.prototype._createPathElement = function (e, t) {
          var i = document.createElementNS("http://www.w3.org/2000/svg", "path");
          return i.setAttribute("d", e), i.setAttribute("stroke", t.color), i.setAttribute("stroke-width", t.strokeWidth), t.fill ? i.setAttribute("fill", t.fill) : i.setAttribute("fill-opacity", "0"), i
        }, n.prototype._createTextContainer = function (e, t) {
          var i = document.createElement("div"),
            s = (i.className = e.text.className, e.text.style);
          return s && (e.text.autoStyleContainer && (t.style.position = "relative"), o.setStyles(i, s), s.color || (i.style.color = e.color)), this._initializeTextContainer(e, t, i), i
        }, n.prototype._initializeTextContainer = function (e, t, i) {
        }, n.prototype._pathString = function (e) {
          throw new Error("Override this function for each progress bar")
        }, n.prototype._trailString = function (e) {
          throw new Error("Override this function for each progress bar")
        }, n.prototype._warnContainerAspectRatio = function (e) {
          var t, i, s;
          this.containerAspectRatio && (t = window.getComputedStyle(e, null), i = parseFloat(t.getPropertyValue("width"), 10), s = parseFloat(t.getPropertyValue("height"), 10), o.floatEquals(this.containerAspectRatio, i / s) || (console.warn("Incorrect aspect ratio of container", "#" + e.id, "detected:", t.getPropertyValue("width") + "(width)", "/", t.getPropertyValue("height") + "(height)", "=", i / s), console.warn("Aspect ratio of should be", this.containerAspectRatio)))
        }, t.exports = n
      }, {"./path": 5, "./utils": 8}], 8: [function (e, t, i) {
        function s(e, t, i) {
          for (var s = e.style, n = 0; n < o.length; ++n) {
            s[o[n] + r(t)] = i;
          }
          s[t] = i
        }

        function r(e) {
          return e.charAt(0).toUpperCase() + e.slice(1)
        }

        function a(e) {
          return "[object Array]" !== Object.prototype.toString.call(e) && ("object" == typeof e && !!e)
        }

        function n(e, t) {
          for (var i in e) {
            e.hasOwnProperty(i) && t(e[i], i)
          }
        }

        var o = "Webkit Moz O ms".split(" ");
        t.exports = {
          extend: function e(t, i, s) {
            for (var n in t = t || {}, s = s || !1, i = i || {}) {
              var r, o;
              i.hasOwnProperty(n) && (r = t[n], o = i[n], s && a(r) && a(o) ? t[n] = e(r, o, s) : t[n] = o)
            }
            return t
          }, render: function (e, t) {
            var i, s, n, r = e;
            for (i in t) {
              t.hasOwnProperty(i) && (s = t[i], n = new RegExp("\\{" + i + "\\}", "g"), r = r.replace(n, s));
            }
            return r
          }, setStyle: s, setStyles: function (i, e) {
            n(e, function (e, t) {
              null != e && (a(e) && !0 === e.prefix ? s(i, t, e.value) : i.style[t] = e)
            })
          }, capitalize: r, isString: function (e) {
            return "string" == typeof e || e instanceof String
          }, isFunction: function (e) {
            return "function" == typeof e
          }, isObject: a, forEachObject: n, floatEquals: function (e, t) {
            return Math.abs(e - t) < .001
          }, removeChildren: function (e) {
            for (; e.firstChild;) {
              e.removeChild(e.firstChild)
            }
          }
        }
      }, {}]
    }, {}, [4])(4)
  }), !function (e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Rellax = t()
  }("undefined" != typeof window ? window : global, function () {
    function u(e, t) {
      var T = Object.create(u.prototype), r = 0, E = 0, o = 0, S = 0, C = [],
        k = !0,
        i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (e) {
          return setTimeout(e, 1e3 / 60)
        }, s = null, n = !1;
      try {
        var a = Object.defineProperty({}, "passive", {
          get: function () {
            n = !0
          }
        });
        window.addEventListener("testPassive", null, a), window.removeEventListener("testPassive", null, a)
      }
      catch (e) {
      }
      var l = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout,
        c = window.transformProp || function () {
          var e = document.createElement("div");
          if (null === e.style.transform) {
            var t, i = ["Webkit", "Moz", "ms"];
            for (t in i) {
              if (void 0 !== e.style[i[t] + "Transform"]) {
                return i[t] + "Transform"
              }
            }
          }
          return "transform"
        }();
      if (T.options = {
        speed: -2,
        verticalSpeed: null,
        horizontalSpeed: null,
        breakpoints: [576, 768, 1201],
        center: !1,
        wrapper: null,
        relativeToWrapper: !1,
        round: !0,
        vertical: !0,
        horizontal: !1,
        verticalScrollAxis: "y",
        horizontalScrollAxis: "x",
        callback: function () {
        }
      }, t && Object.keys(t).forEach(function (e) {
        T.options[e] = t[e]
      }), t && t.breakpoints && function () {
        if (3 === T.options.breakpoints.length && Array.isArray(T.options.breakpoints)) {
          var t, i = !0, s = !0;
          if (T.options.breakpoints.forEach(function (e) {
            "number" != typeof e && (s = !1), null !== t && e < t && (i = !1), t = e
          }), i && s) {
            return
          }
        }
        T.options.breakpoints = [576, 768, 1201], console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")
      }(), 0 < (a = "string" == typeof (e = e || ".rellax") ? document.querySelectorAll(e) : [e]).length) {
        if (T.elems = a, T.options.wrapper && !T.options.wrapper.nodeType) {
          if (!(a = document.querySelector(T.options.wrapper))) {
            return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
          }
          T.options.wrapper = a
        }

        function A() {
          for (var e = 0; e < C.length; e++) {
            T.elems[e].style.cssText = C[e].style;
          }
          for (C = [], E = window.innerHeight, S = window.innerWidth, e = T.options.breakpoints, M = S < e[0] ? "xs" : S >= e[0] && S < e[1] ? "sm" : S >= e[1] && S < e[2] ? "md" : "lg", P(), e = 0; e < T.elems.length; e++) {
            var t = void 0, i = T.elems[e],
              s = i.getAttribute("data-rellax-percentage"),
              n = i.getAttribute("data-rellax-speed"),
              r = i.getAttribute("data-rellax-xs-speed"),
              o = i.getAttribute("data-rellax-mobile-speed"),
              a = i.getAttribute("data-rellax-tablet-speed"),
              l = i.getAttribute("data-rellax-desktop-speed"),
              c = i.getAttribute("data-rellax-vertical-speed"),
              d = i.getAttribute("data-rellax-horizontal-speed"),
              u = i.getAttribute("data-rellax-vertical-scroll-axis"),
              h = i.getAttribute("data-rellax-horizontal-scroll-axis"),
              p = i.getAttribute("data-rellax-zindex") || 0,
              m = i.getAttribute("data-rellax-min"),
              f = i.getAttribute("data-rellax-max"),
              g = i.getAttribute("data-rellax-min-x"),
              v = i.getAttribute("data-rellax-max-x"),
              y = i.getAttribute("data-rellax-min-y"),
              b = i.getAttribute("data-rellax-max-y"), w = !0,
              x = (r || o || a || l ? t = {
                xs: r,
                sm: o,
                md: a,
                lg: l
              } : w = !1, r = T.options.wrapper ? T.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop, T.options.relativeToWrapper && (r = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - T.options.wrapper.offsetTop), T.options.vertical && (s || T.options.center) ? r : 0),
              _ = T.options.horizontal && (s || T.options.center) ? T.options.wrapper ? T.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0,
              r = x + i.getBoundingClientRect().top,
              o = i.clientHeight || i.offsetHeight || i.scrollHeight,
              a = _ + i.getBoundingClientRect().left,
              l = i.clientWidth || i.offsetWidth || i.scrollWidth,
              x = s || (x - r + E) / (o + E), s = s || (_ - a + S) / (l + S);
            T.options.center && (x = s = .5), t = w && null !== t[M] ? Number(t[M]) : n || T.options.speed, c = c || T.options.verticalSpeed, d = d || T.options.horizontalSpeed, u = u || T.options.verticalScrollAxis, h = h || T.options.horizontalScrollAxis, n = I(s, x, t, c, d), i = i.style.cssText, w = "", (s = /transform\s*:/i.exec(i)) && (w = (s = (w = i.slice(s.index)).indexOf(";")) ? " " + w.slice(11, s).replace(/\s/g, "") : " " + w.slice(11).replace(/\s/g, "")), C.push({
              baseX: n.x,
              baseY: n.y,
              top: r,
              left: a,
              height: o,
              width: l,
              speed: t,
              verticalSpeed: c,
              horizontalSpeed: d,
              verticalScrollAxis: u,
              horizontalScrollAxis: h,
              style: i,
              transform: w,
              zindex: p,
              min: m,
              max: f,
              minX: g,
              maxX: v,
              minY: y,
              maxY: b
            })
          }
          O(), k && (window.addEventListener("resize", A), k = !1, L())
        }

        var M, P = function () {
          var e = r, t = o;
          return r = T.options.wrapper ? T.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset, o = T.options.wrapper ? T.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset, !!(e != (r = T.options.relativeToWrapper ? ((document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset) - T.options.wrapper.offsetTop : r) && T.options.vertical || t != o && T.options.horizontal)
        }, I = function (e, t, i, s, n) {
          var r = {};
          return e = 100 * (n || i) * (1 - e), t = 100 * (s || i) * (1 - t), r.x = T.options.round ? Math.round(e) : Math.round(100 * e) / 100, r.y = T.options.round ? Math.round(t) : Math.round(100 * t) / 100, r
        }, d = function () {
          window.removeEventListener("resize", d), window.removeEventListener("orientationchange", d), (T.options.wrapper || window).removeEventListener("scroll", d), (T.options.wrapper || document).removeEventListener("touchmove", d), s = i(L)
        }, L = function () {
          P() && !1 === k ? (O(), s = i(L)) : (s = null, window.addEventListener("resize", d), window.addEventListener("orientationchange", d), (T.options.wrapper || window).addEventListener("scroll", d, !!n && {passive: !0}), (T.options.wrapper || document).addEventListener("touchmove", d, !!n && {passive: !0}))
        }, O = function () {
          for (var e = 0; e < T.elems.length; e++) {
            var t = C[e].verticalScrollAxis.toLowerCase(),
              i = C[e].horizontalScrollAxis.toLowerCase(),
              s = -1 != t.indexOf("x") ? r : 0,
              t = -1 != t.indexOf("y") ? r : 0,
              n = -1 != i.indexOf("x") ? o : 0,
              i = -1 != i.indexOf("y") ? o : 0;
            i = (s = I((s + n - C[e].left + S) / (C[e].width + S), (t + i - C[e].top + E) / (C[e].height + E), C[e].speed, C[e].verticalSpeed, C[e].horizontalSpeed)).y - C[e].baseY, t = s.x - C[e].baseX, null !== C[e].min && (T.options.vertical && !T.options.horizontal && (i = i <= C[e].min ? C[e].min : i), T.options.horizontal && !T.options.vertical && (t = t <= C[e].min ? C[e].min : t)), null != C[e].minY && (i = i <= C[e].minY ? C[e].minY : i), null != C[e].minX && (t = t <= C[e].minX ? C[e].minX : t), null !== C[e].max && (T.options.vertical && !T.options.horizontal && (i = i >= C[e].max ? C[e].max : i), T.options.horizontal && !T.options.vertical && (t = t >= C[e].max ? C[e].max : t)), null != C[e].maxY && (i = i >= C[e].maxY ? C[e].maxY : i), null != C[e].maxX && (t = t >= C[e].maxX ? C[e].maxX : t), T.elems[e].style[c] = "translate3d(" + (T.options.horizontal ? t : "0") + "px," + (T.options.vertical ? i : "0") + "px," + C[e].zindex + "px) " + C[e].transform
          }
          T.options.callback(s)
        };
        return T.destroy = function () {
          for (var e = 0; e < T.elems.length; e++) {
            T.elems[e].style.cssText = C[e].style;
          }
          k || (window.removeEventListener("resize", A), k = !0), l(s), s = null
        }, A(), T.refresh = A, T
      }
      console.warn("Rellax: The elements you're trying to select don't exist.")
    }

    return u
  }), !function (e, t) {
    "use strict";

    function i(e, t) {
      var i = {
        animation: "animated fadeIn",
        speed: 2e3,
        separator: ",",
        hoverStop: !1,
        clickChange: !1,
        loopCount: "infinite",
        autoRun: !0,
        onInit: !1,
        onChange: !1,
        onComplete: !1
      };
      if (this.options = "object" == typeof t ? function (e, t) {
        for (var i in t) {
          t.hasOwnProperty(i) && (e[i] = t[i]);
        }
        return e
      }(i, t) : i, void 0 === e) {
        throw new Error('ReplaceMe [constructor]: "element" parameter is required');
      }
      if ("object" == typeof e) {
        this.element = e;
      }
      else {
        if ("string" != typeof e) {
          throw new Error('ReplaceMe [constructor]: wrong "element" parameter');
        }
        this.element = document.querySelector(e)
      }
      this.init()
    }

    i.prototype.init = function () {
      "function" == typeof this.options.onInit && this.options.onInit(), this.words = this.escapeHTML(this.element.innerHTML).split(this.options.separator), this.count = this.words.length, this.position = this.loopCount = 0, this.running = !1, this.bindAll(), !0 === this.options.autoRun && this.start()
    }, i.prototype.bindAll = function () {
      !0 === this.options.hoverStop && (this.element.addEventListener("mouseover", this.pause.bind(this)), this.element.addEventListener("mouseout", this.start.bind(this))), !0 === this.options.clickChange && this.element.addEventListener("click", this.change.bind(this))
    }, i.prototype.changeAnimation = function () {
      this.change(), this.loop = setTimeout(this.changeAnimation.bind(this), this.options.speed)
    }, i.prototype.start = function () {
      !0 !== this.running && (this.running = !0, this.changeWord(this.words[this.position]), this.position++), this.loop = setTimeout(this.changeAnimation.bind(this), this.options.speed)
    }, i.prototype.change = function () {
      return this.position > this.count - 1 && (this.position = 0, this.loopCount++, this.loopCount >= this.options.loopCount) ? void this.stop() : (this.changeWord(this.words[this.position]), this.position++, void ("function" == typeof this.options.onChange && this.options.onChange()))
    }, i.prototype.stop = function () {
      this.running = !1, this.position = this.loopCount = 0, this.pause(), "function" == typeof this.options.onComplete && this.options.onComplete()
    }, i.prototype.pause = function () {
      clearTimeout(this.loop)
    }, i.prototype.changeWord = function (e) {
      this.element.innerHTML = '<span class="' + this.options.animation + '" style="display:inline-block;">' + e + "</span>"
    }, i.prototype.escapeHTML = function (e) {
      var t = /<\/?\w+\s*[^>]*>/g;
      return !0 === t.test(e) ? e.replace(t, "") : e
    }, e.ReplaceMe = i, "function" == typeof t && t.fn.extend({
      ReplaceMe: function (e) {
        return this.each(function () {
          new i(this, e)
        })
      }
    })
  }(window, window.jQuery), $jscomp || {}),
  $jscomp$lookupPolyfilledValue = ($jscomp.scope = {}, $jscomp.arrayIteratorImpl = function (e) {
    var t = 0;
    return function () {
      return t < e.length ? {done: !1, value: e[t++]} : {done: !0}
    }
  }, $jscomp.arrayIterator = function (e) {
    return {next: $jscomp.arrayIteratorImpl(e)}
  }, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.ISOLATE_POLYFILLS = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, t, i) {
    return e == Array.prototype || e == Object.prototype || (e[t] = i.value), e
  }, $jscomp.getGlobal = function (e) {
    e = ["object" == typeof globalThis && globalThis, e, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var t = 0; t < e.length; ++t) {
      var i = e[t];
      if (i && i.Math == Math) {
        return i
      }
    }
    throw Error("Cannot find global object")
  }, $jscomp.global = $jscomp.getGlobal(this), $jscomp.IS_SYMBOL_NATIVE = "function" == typeof Symbol && "symbol" == typeof Symbol("x"), $jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE, $jscomp.polyfills = {}, $jscomp.propertyToPolyfillSymbol = {}, $jscomp.POLYFILL_PREFIX = "$jscp$", function (e, t) {
    var i = $jscomp.propertyToPolyfillSymbol[t];
    return null != i && void 0 !== (i = e[i]) ? i : e[t]
  }), scrollCue = ($jscomp.polyfill = function (e, t, i, s) {
    t && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(e, t, i, s) : $jscomp.polyfillUnisolated(e, t, i, s))
  }, $jscomp.polyfillUnisolated = function (e, t, i, s) {
    for (i = $jscomp.global, e = e.split("."), s = 0; s < e.length - 1; s++) {
      var n = e[s];
      n in i || (i[n] = {}), i = i[n]
    }
    (t = t(s = i[e = e[e.length - 1]])) != s && null != t && $jscomp.defineProperty(i, e, {
      configurable: !0,
      writable: !0,
      value: t
    })
  }, $jscomp.polyfillIsolated = function (e, t, i, s) {
    var n = e.split(".");
    e = 1 === n.length, s = n[0], s = !e && s in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var r = 0; r < n.length - 1; r++) {
      var o = n[r];
      o in s || (s[o] = {}), s = s[o]
    }
    n = n[n.length - 1], null != (t = t(i = $jscomp.IS_SYMBOL_NATIVE && "es6" === i ? s[n] : null)) && (e ? $jscomp.defineProperty($jscomp.polyfills, n, {
      configurable: !0,
      writable: !0,
      value: t
    }) : t !== i && ($jscomp.propertyToPolyfillSymbol[n] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(n) : $jscomp.POLYFILL_PREFIX + n, n = $jscomp.propertyToPolyfillSymbol[n], $jscomp.defineProperty(s, n, {
      configurable: !0,
      writable: !0,
      value: t
    })))
  }, $jscomp.initSymbol = function () {
  }, $jscomp.polyfill("Symbol", function (e) {
    if (e) {
      return e;
    }

    function t(e, t) {
      this.$jscomp$symbol$id_ = e, $jscomp.defineProperty(this, "description", {
        configurable: !0,
        writable: !0,
        value: t
      })
    }

    function i(e) {
      if (this instanceof i) {
        throw new TypeError("Symbol is not a constructor");
      }
      return new t("jscomp_symbol_" + (e || "") + "_" + s++, e)
    }

    t.prototype.toString = function () {
      return this.$jscomp$symbol$id_
    };
    var s = 0;
    return i
  }, "es6", "es3"), $jscomp.initSymbolIterator = function () {
  }, $jscomp.polyfill("Symbol.iterator", function (e) {
    if (e) {
      return e;
    }
    e = Symbol("Symbol.iterator");
    for (var t = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), i = 0; i < t.length; i++) {
      var s = $jscomp.global[t[i]];
      "function" == typeof s && "function" != typeof s.prototype[e] && $jscomp.defineProperty(s.prototype, e, {
        configurable: !0,
        writable: !0,
        value: function () {
          return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
        }
      })
    }
    return e
  }, "es6", "es3"), $jscomp.initSymbolAsyncIterator = function () {
  }, $jscomp.iteratorPrototype = function (e) {
    return (e = {next: e})[Symbol.iterator] = function () {
      return this
    }, e
  }, $jscomp.iteratorFromArray = function (t, i) {
    t instanceof String && (t += "");
    var s = 0, n = {
      next: function () {
        var e;
        return s < t.length ? (e = s++, {
          value: i(e, t[e]),
          done: !1
        }) : (n.next = function () {
          return {done: !0, value: void 0}
        }, n.next())
      }
    };
    return n[Symbol.iterator] = function () {
      return n
    }, n
  }, $jscomp.polyfill("Array.prototype.keys", function (e) {
    return e || function () {
      return $jscomp.iteratorFromArray(this, function (e) {
        return e
      })
    }
  }, "es6", "es3"), function () {
    var r, n, o, a = {}, s = 0, l = !0, c = !0, d = !1, t = !1, i = {
      duration: 600,
      interval: -.7,
      percentage: .75,
      enable: !0,
      docSlider: !1,
      pageChangeReset: !1
    }, a = {
      setEvents: function (e) {
        function t() {
          l && (requestAnimationFrame(function () {
            l = !0, c && (a.setQuery(), a.runQuery())
          }), l = !1)
        }

        if (c && !e && window.addEventListener("load", a.runQuery), window.addEventListener("scroll", t), d) {
          e = docSlider.getElements().pages;
          for (var i = 0; i < e.length; i++) {
            e[i].addEventListener("scroll", function (e) {
              if (docSlider.getCurrentIndex() + "" !== (e = e.target.getAttribute("data-ds-index"))) {
                return !1;
              }
              docSlider._getWheelEnable() && t()
            })
          }
        }
        window.addEventListener("resize", function () {
          0 < s && clearTimeout(s), s = setTimeout(function () {
            c && (a.searchElements(), a.setQuery(), a.runQuery())
          }, 200)
        })
      }, setOptions: function (t, i) {
        var s = {};
        if (void 0 !== t) {
          return Object.keys(t).forEach(function (e) {
            "[object Object]" === Object.prototype.toString.call(t[e]) ? s[e] = a.setOptions(t[e], i[e]) : (s[e] = t[e], void 0 !== i && void 0 !== i[e] && (s[e] = i[e]))
          }), s
        }
      }, searchElements: function () {
        r = [];
        for (var e = document.querySelectorAll("[data-cues]:not([data-disabled])"), t = 0; t < e.length; t++) {
          for (var i = e[t], s = 0; s < i.children.length; s++) {
            var n = i.children[s];
            a.setAttrPtoC(n, "data-cue", i, "data-cues", ""), a.setAttrPtoC(n, "data-duration", i, "data-duration", !1), a.setAttrPtoC(n, "data-interval", i, "data-interval", !1), a.setAttrPtoC(n, "data-sort", i, "data-sort", !1), a.setAttrPtoC(n, "data-addClass", i, "data-addClass", !1), a.setAttrPtoC(n, "data-group", i, "data-group", !1), a.setAttrPtoC(n, "data-delay", i, "data-delay", !1)
          }
          i.setAttribute("data-disabled", "true")
        }
        for (e = document.querySelectorAll('[data-cue]:not([data-show="true"])'), t = 0; t < e.length; t++) {
          i = e[t], r.push({
            elm: i,
            cue: a.getAttr(i, "data-cue", "fadeIn"),
            duration: Number(a.getAttr(i, "data-duration", o.duration)),
            interval: Number(a.getAttr(i, "data-interval", o.interval)),
            order: a.getOrderNumber(i),
            sort: a.getAttr(i, "data-sort", null),
            addClass: a.getAttr(i, "data-addClass", null),
            group: a.getAttr(i, "data-group", null),
            delay: Number(a.getAttr(i, "data-delay", 0))
          });
        }
        if (d) {
          for (e = docSlider.getElements().pages.length, t = 0; t < e; t++) {
            for (i = document.querySelectorAll('[data-ds-index="' + t + '"] [data-cue]:not([data-scpage])'), s = 0; s < i.length; s++) {
              i[s].setAttribute("data-scpage", t)
            }
          }
        }
      }, sortElements: function () {
        for (var e = arguments[0], r = [].slice.call(arguments).slice(1), t = {$jscomp$loop$prop$i$4: 0}; t.$jscomp$loop$prop$i$4 < r.length; (t = {$jscomp$loop$prop$i$4: t.$jscomp$loop$prop$i$4}).$jscomp$loop$prop$i$4++) {
          e.sort(function (n) {
            return function (e, t) {
              var i = void 0 === r[n.$jscomp$loop$prop$i$4][1] || r[n.$jscomp$loop$prop$i$4][1],
                s = r[n.$jscomp$loop$prop$i$4][0];
              return e[s] > t[s] ? i ? 1 : -1 : e[s] < t[s] ? i ? -1 : 1 : 0
            }
          }(t))
        }
      }, randElements: function (e) {
        for (var t = e.length - 1; 0 < t; t--) {
          var i = Math.floor(Math.random() * (t + 1)), s = e[t];
          e[t] = e[i], e[i] = s
        }
        return e
      }, setDurationValue: function (e, t, i) {
        return void 0 === t ? e : (t = t.duration, (e = -1 === (i + "").indexOf(".") ? e + t + i : e + t + t * i) < 0 ? 0 : e)
      }, getOrderNumber: function (e) {
        return e.hasAttribute("data-order") ? 0 <= (e = Number(e.getAttribute("data-order"))) ? e : Math.pow(2, 53) - 1 + e : Math.pow(2, 52) - 1
      }, setAttrPtoC: function (e, t, i, s, n) {
        i.hasAttribute(s) ? e.hasAttribute(t) || e.setAttribute(t, i.getAttribute(s)) : !1 !== n && e.setAttribute(t, n)
      }, getAttr: function (e, t, i) {
        return e.hasAttribute(t) ? e.getAttribute(t) : i
      }, getOffsetTop: function (e) {
        return e.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop)
      }, setClassNames: function (e, t) {
        if (t) {
          t = t.split(" ");
          for (var i = 0; i < t.length; i++) {
            e.classList.add(t[i])
          }
        }
      }, setQuery: function () {
        n = {};
        for (var e = 0; e < r.length; e++) {
          var t = r[e], i = t.group || "$" + a.getOffsetTop(t.elm);
          if (!t.elm.hasAttribute("data-show")) {
            if (d) {
              var s = t.elm.getAttribute("data-scpage");
              if (s !== docSlider.getCurrentIndex() + "" && null !== s) {
                continue
              }
            }
            void 0 === n[i] && (n[i] = []), n[i].push(t)
          }
        }
      }, runQuery: function () {
        for (var e = Object.keys(n), t = {}, i = 0; i < e.length; t = {
          $jscomp$loop$prop$elms$6: t.$jscomp$loop$prop$elms$6,
          $jscomp$loop$prop$interval$7: t.$jscomp$loop$prop$interval$7
        }, i++) {
          if (t.$jscomp$loop$prop$elms$6 = n[e[i]], a.isElementIn(t.$jscomp$loop$prop$elms$6[0].elm)) {
            "reverse" === t.$jscomp$loop$prop$elms$6[0].sort ? t.$jscomp$loop$prop$elms$6.reverse() : "random" === t.$jscomp$loop$prop$elms$6[0].sort && a.randElements(t.$jscomp$loop$prop$elms$6), a.sortElements(t.$jscomp$loop$prop$elms$6, ["order"]);
            for (var s = t.$jscomp$loop$prop$interval$7 = 0; s < t.$jscomp$loop$prop$elms$6.length; s++) {
              !function (t) {
                return function (e) {
                  t.$jscomp$loop$prop$elms$6[e].elm.setAttribute("data-show", "true"), a.setClassNames(t.$jscomp$loop$prop$elms$6[e].elm, t.$jscomp$loop$prop$elms$6[e].addClass), t.$jscomp$loop$prop$interval$7 = a.setDurationValue(t.$jscomp$loop$prop$interval$7, t.$jscomp$loop$prop$elms$6[e - 1], t.$jscomp$loop$prop$elms$6[e].interval), t.$jscomp$loop$prop$elms$6[e].elm.style.animationName = t.$jscomp$loop$prop$elms$6[e].cue, t.$jscomp$loop$prop$elms$6[e].elm.style.animationDuration = t.$jscomp$loop$prop$elms$6[e].duration + "ms", t.$jscomp$loop$prop$elms$6[e].elm.style.animationTimingFunction = "ease", t.$jscomp$loop$prop$elms$6[e].elm.style.animationDelay = t.$jscomp$loop$prop$interval$7 + t.$jscomp$loop$prop$elms$6[e].delay + "ms", t.$jscomp$loop$prop$elms$6[e].elm.style.animationDirection = "normal", t.$jscomp$loop$prop$elms$6[e].elm.style.animationFillMode = "both"
                }
              }(t)(s);
            }
            delete n[e[i]]
          }
        }
      }, isElementIn: function (e) {
        var t = e.hasAttribute("data-scpage") ? a.isScrollEndWithDocSlider : a.isScrollEnd;
        return window.pageYOffset > a.getOffsetTop(e) - window.innerHeight * o.percentage || t()
      }, isScrollEnd: function () {
        var e = window.document.documentElement;
        return (window.document.body.scrollTop || e.scrollTop) >= e.scrollHeight - e.clientHeight
      }, isScrollEndWithDocSlider: function () {
        var e = docSlider.getCurrentPage();
        return e.scrollTop >= e.scrollHeight - e.clientHeight
      }
    };
    return {
      init: function (e) {
        o = a.setOptions(i, e), c = o.enable, d = o.docSlider, t = o.pageChangeReset, d || (a.setEvents(), a.searchElements(), a.setQuery())
      }, update: function () {
        c && (a.searchElements(), a.setQuery(), a.runQuery())
      }, enable: function (e) {
        c = void 0 === e ? !c : e, scrollCue.update()
      }, _hasDocSlider: function () {
        return d
      }, _hasPageChangeReset: function () {
        return t
      }, _initWithDocSlider: function (e) {
        a.setEvents(e), a.searchElements(), a.setQuery()
      }, _updateWithDocSlider: function () {
        c && (a.setQuery(), a.runQuery())
      }, _searchElements: function () {
        a.searchElements()
      }
    }
  }());

function polyfill() {
  var e, s, a, l, i, t, c = window, d = document;

  function u(e, t) {
    this.scrollLeft = e, this.scrollTop = t
  }

  function n(e) {
    if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) {
      return !0;
    }
    if ("object" == typeof e && "smooth" === e.behavior) {
      return !1;
    }
    throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
  }

  function r(e, t) {
    return "Y" === t ? e.clientHeight + i < e.scrollHeight : "X" === t ? e.clientWidth + i < e.scrollWidth : void 0
  }

  function o(e, t) {
    e = c.getComputedStyle(e, null)["overflow" + t];
    return "auto" === e || "scroll" === e
  }

  function h(e) {
    for (; e !== d.body && !1 === (i = void 0, i = r(t = e, "Y") && o(t, "Y"), t = r(t, "X") && o(t, "X"), i || t);) {
      e = e.parentNode || e.host;
    }
    var t, i;
    return e
  }

  function p(e) {
    var t, i = (l() - e.startTime) / s;
    i = i = 1 < i ? 1 : i, i = .5 * (1 - Math.cos(Math.PI * i)), t = e.startX + (e.x - e.startX) * i, i = e.startY + (e.y - e.startY) * i, e.method.call(e.scrollable, t, i), t === e.x && i === e.y || c.requestAnimationFrame(p.bind(c, e))
  }

  function m(e, t, i) {
    var s, n, r, o = l(),
      e = e === d.body ? (n = (s = c).scrollX || c.pageXOffset, r = c.scrollY || c.pageYOffset, a.scroll) : (n = (s = e).scrollLeft, r = e.scrollTop, u);
    p({
      scrollable: s,
      method: e,
      startTime: o,
      startX: n,
      startY: r,
      x: t,
      y: i
    })
  }

  "scrollBehavior" in d.documentElement.style && !0 !== c.__forceSmoothScrollPolyfill__ || (e = c.HTMLElement || c.Element, s = 468, a = {
    scroll: c.scroll || c.scrollTo,
    scrollBy: c.scrollBy,
    elementScroll: e.prototype.scroll || u,
    scrollIntoView: e.prototype.scrollIntoView
  }, l = c.performance && c.performance.now ? c.performance.now.bind(c.performance) : Date.now, t = c.navigator.userAgent, i = new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(t) ? 1 : 0, c.scroll = c.scrollTo = function () {
    void 0 !== arguments[0] && (!0 === n(arguments[0]) ? a.scroll.call(c, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : c.scrollX || c.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : c.scrollY || c.pageYOffset) : m.call(c, d.body, void 0 !== arguments[0].left ? ~~arguments[0].left : c.scrollX || c.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : c.scrollY || c.pageYOffset))
  }, c.scrollBy = function () {
    void 0 !== arguments[0] && (n(arguments[0]) ? a.scrollBy.call(c, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : m.call(c, d.body, ~~arguments[0].left + (c.scrollX || c.pageXOffset), ~~arguments[0].top + (c.scrollY || c.pageYOffset)))
  }, e.prototype.scroll = e.prototype.scrollTo = function () {
    if (void 0 !== arguments[0]) {
      if (!0 === n(arguments[0])) {
        if ("number" == typeof arguments[0] && void 0 === arguments[1]) {
          throw new SyntaxError("Value could not be converted");
        }
        a.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
      }
      else {
        var e = arguments[0].left, t = arguments[0].top;
        m.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
      }
    }
  }, e.prototype.scrollBy = function () {
    void 0 !== arguments[0] && (!0 === n(arguments[0]) ? a.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop) : this.scroll({
      left: ~~arguments[0].left + this.scrollLeft,
      top: ~~arguments[0].top + this.scrollTop,
      behavior: arguments[0].behavior
    }))
  }, e.prototype.scrollIntoView = function () {
    var e, t, i;
    !0 === n(arguments[0]) ? a.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]) : (t = (e = h(this)).getBoundingClientRect(), i = this.getBoundingClientRect(), e !== d.body ? (m.call(this, e, e.scrollLeft + i.left - t.left, e.scrollTop + i.top - t.top), "fixed" !== c.getComputedStyle(e).position && c.scrollBy({
      left: t.left,
      top: t.top,
      behavior: "smooth"
    })) : c.scrollBy({left: i.left, top: i.top, behavior: "smooth"}))
  })
}

"object" == typeof exports && "undefined" != typeof module ? module.exports = {polyfill: polyfill} : polyfill(), function (a, h) {
  var t, n, p = "createElement", y = "getElementsByTagName", b = "length",
    w = "style", m = "title", f = "undefined", x = "setAttribute",
    _ = "getAttribute", T = null, g = "__svgInject", E = "--inject-",
    v = new RegExp(E + "\\d+", "g"), S = "LOAD_FAIL", C = "SVG_INVALID",
    q = ["src", "alt", "onload", "onerror"], k = h[p]("a"),
    A = typeof SVGRect != f,
    u = {useCache: !0, copyAttributes: !0, makeIdsUnique: !0}, M = {
      clipPath: ["clip-path"],
      "color-profile": T,
      cursor: T,
      filter: T,
      linearGradient: ["fill", "stroke"],
      marker: ["marker", "marker-end", "marker-mid", "marker-start"],
      mask: T,
      pattern: ["fill", "stroke"],
      radialGradient: ["fill", "stroke"]
    }, B = 1, c = 2, P = 1;

  function I(e) {
    return (t = t || new XMLSerializer).serializeToString(e)
  }

  function L(e, t) {
    var i, s, n, r = E + P++, o = /url\("?#([a-zA-Z][\w:.-]*)"?\)/g,
      a = e.querySelectorAll("[id]"), l = t ? [] : T, c = {}, d = [], u = !1;
    if (a[b]) {
      for (v = 0; v < a[b]; v++) {
        (s = a[v].localName) in M && (c[s] = 1);
      }
      for (s in c) {
        (M[s] || [s]).forEach(function (e) {
          d.indexOf(e) < 0 && d.push(e)
        });
      }
      d[b] && d.push(w);
      for (var h, p, m, f = e[y]("*"), g = e, v = -1; g != T;) {
        if (g.localName == w) {
          (m = (p = g.textContent) && p.replace(o, function (e, t) {
            return l && (l[t] = 1), "url(#" + t + r + ")"
          })) !== p && (g.textContent = m);
        }
        else if (g.hasAttributes()) {
          for (n = 0; n < d[b]; n++) {
            h = d[n], (m = (p = g[_](h)) && p.replace(o, function (e, t) {
              return l && (l[t] = 1), "url(#" + t + r + ")"
            })) !== p && g[x](h, m);
          }
          ["xlink:href", "href"].forEach(function (e) {
            var t = g[_](e);
            /^\s*#/.test(t) && (t = t.trim(), g[x](e, t + r), l && (l[t.substring(1)] = 1))
          })
        }
        g = f[++v]
      }
      for (v = 0; v < a[b]; v++) {
        i = a[v], l && !l[i.id] || (i.id += r, u = !0)
      }
    }
    return u
  }

  function O(e, t, i, s) {
    if (t) {
      t[x]("data-inject-url", i);
      i = e.parentNode;
      if (i) {
        if (s.copyAttributes) {
          var n = e;
          var r = t;
          for (var o, a = n.attributes, l = 0; l < a[b]; l++) {
            var c, d, u = (o = a[l]).name;
            -1 == q.indexOf(u) && (o = o.value, u == m ? ((d = r.firstElementChild) && d.localName.toLowerCase() == m ? c = d : (c = h[p + "NS"]("http://www.w3.org/2000/svg", m), r.insertBefore(c, d)), c.textContent = o) : r[x](u, o))
          }
        }
        n = s.beforeInject, t = n && n(e, t) || t, i = (i.replaceChild(t, e), e[g] = B, z(e), s.afterInject);
        i && i(e, t)
      }
    }
    else {
      D(e, s)
    }
  }

  function d() {
    for (var e = {}, t = arguments, i = 0; i < t[b]; i++) {
      var s, n = t[i];
      for (s in n) {
        n.hasOwnProperty(s) && (e[s] = n[s])
      }
    }
    return e
  }

  function $(e, t) {
    if (t) {
      var i;
      try {
        s = e, i = (n = n || new DOMParser).parseFromString(s, "text/xml")
      }
      catch (e) {
        return T
      }
      return i[y]("parsererror")[b] ? T : i.documentElement
    }
    var s, t = h.createElement("div");
    return t.innerHTML = e, t.firstElementChild
  }

  function z(e) {
    e.removeAttribute("onload")
  }

  function s(e) {
    console.error("SVGInject: " + e)
  }

  function i(e, t, i) {
    e[g] = c, i.onFail ? i.onFail(e, t) : s(t)
  }

  function D(e, t) {
    z(e), i(e, C, t)
  }

  function j(e, t) {
    z(e), i(e, "SVG_NOT_SUPPORTED", t)
  }

  function N(e, t) {
    i(e, S, t)
  }

  function F(e) {
    e.onload = T, e.onerror = T
  }

  function H() {
    s("no img element")
  }

  var e = function e(t, i) {
    var s, n, r = d(u, i), m = {};

    function o(o, a) {
      a = d(r, a);

      function e(t) {
        function e() {
          var e = a.onAllFinish;
          e && e(), t && t()
        }

        if (o && typeof o[b] != f) {
          var i = 0, s = o[b];
          if (0 == s) {
            e();
          }
          else {
            function n() {
              ++i == s && e()
            }

            for (var r = 0; r < s; r++) {
              l(o[r], a, n)
            }
          }
        }
        else {
          l(o, a, e)
        }
      }

      return typeof Promise == f ? e() : new Promise(e)
    }

    function l(r, o, e) {
      if (r) {
        var t = r[g];
        if (t) {
          Array.isArray(t) ? t.push(e) : e();
        }
        else {
          if (F(r), !A) {
            return j(r, o), e();
          }
          t = o.beforeLoad, t = t && t(r) || r[_]("src");
          if (!t) {
            return "" === t && N(r, o), e();
          }

          function a() {
            e(), i.forEach(function (e) {
              e()
            })
          }

          function n(t) {
            c && (m[l].forEach(function (e) {
              e(t)
            }), m[l] = t)
          }

          var i = [], l = (r[g] = i, k.href = t, k.href), c = o.useCache,
            d = o.makeIdsUnique;
          if (c) {
            function s(e) {
              var t, i, s, n;
              e === S ? N(r, o) : e === C ? D(r, o) : (i = e[0], s = e[1], n = e[2], d && (i === T ? (i = L(t = $(s, !1), !1), e[0] = i, e[2] = i && I(t)) : i && (s = n.replace(v, E + P++))), t = t || $(s, !1), O(r, t, l, o)), a()
            }

            if (typeof (t = m[l]) != f) {
              return t.isCallbackQueue ? t.push(s) : s(t);
            }
            (t = []).isCallbackQueue = !0, m[l] = t
          }
          u = function (e, t) {
            var i, e = e instanceof Document ? e.documentElement : $(t, !0),
              s = o.afterLoad;
            s && (s = s(e, t) || e) && (t = (i = "string" == typeof s) ? s : I(e), e = i ? $(s, !0) : s), e instanceof SVGElement ? (i = T, d && (i = L(e, !1)), c && (s = i && I(e), n([i, t, s])), O(r, e, l, o)) : (D(r, o), n(C)), a()
          }, h = function () {
            N(r, o), n(S), a()
          }, (t = l) && ((p = new XMLHttpRequest).onreadystatechange = function () {
            var e;
            4 == p.readyState && (200 == (e = p.status) ? u(p.responseXML, p.responseText.trim()) : (400 <= e || 0 == e) && h())
          }, p.open("GET", t, !0), p.send())
        }
      }
      else {
        H();
      }
      var u, h, p
    }

    return A && (i = 'img[onload^="' + t + '("]{visibility:hidden;}', (n = h[y]("head")[0]) && ((s = h[p](w)).type = "text/css", s.appendChild(h.createTextNode(i)), n.appendChild(s))), o.setOptions = function (e) {
      r = d(r, e)
    }, o.create = e, o.err = function (e, t) {
      e ? e[g] != c && (F(e), A ? (z(e), N(e, r)) : j(e, r), t && (z(e), e.src = t)) : H()
    }, a[t] = o
  }("SVGInject");
  "object" == typeof module && "object" == typeof module.exports && (module.exports = e)
}(window, document), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, function () {
  "use strict";

  function s(e) {
    return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
  }

  function n(t, i) {
    void 0 === t && (t = {}), void 0 === i && (i = {}), Object.keys(i).forEach(e => {
      void 0 === t[e] ? t[e] = i[e] : s(i[e]) && s(t[e]) && 0 < Object.keys(i[e]).length && n(t[e], i[e])
    })
  }

  const t = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      }, nodeName: ""
    },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({
      initEvent() {
      }
    }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName: () => []
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };

  function E() {
    var e = "undefined" != typeof document ? document : {};
    return n(e, t), e
  }

  const D = {
    document: t,
    navigator: {userAgent: ""},
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      }, pushState() {
      }, go() {
      }, back() {
      }
    },
    CustomEvent: function () {
      return this
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle: () => ({getPropertyValue: () => ""}),
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia: () => ({}),
    requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e)
    }
  };

  function I() {
    var e = "undefined" != typeof window ? window : {};
    return n(e, D), e
  }

  class o extends Array {
    constructor(e) {
      if ("number" != typeof e) {
        super(...e || []);
        {
          var t = this;
          const i = t.__proto__;
          void Object.defineProperty(t, "__proto__", {
            get: () => i, set(e) {
              i.__proto__ = e
            }
          })
        }
      }
      else {
        super(e)
      }
    }
  }

  function r(e) {
    const t = [];
    return (e = void 0 === e ? [] : e).forEach(e => {
      Array.isArray(e) ? t.push(...r(e)) : t.push(e)
    }), t
  }

  function a(e, t) {
    return Array.prototype.filter.call(e, t)
  }

  function L(e, t) {
    const i = I(), s = E();
    let n = [];
    if (!t && e instanceof o) {
      return e;
    }
    if (!e) {
      return new o(n);
    }
    if ("string" == typeof e) {
      const i = e.trim();
      if (0 <= i.indexOf("<") && 0 <= i.indexOf(">")) {
        let e = "div";
        0 === i.indexOf("<li") && (e = "ul"), 0 === i.indexOf("<tr") && (e = "tbody"), 0 !== i.indexOf("<td") && 0 !== i.indexOf("<th") || (e = "tr"), 0 === i.indexOf("<tbody") && (e = "table"), 0 === i.indexOf("<option") && (e = "select");
        const t = s.createElement(e);
        t.innerHTML = i;
        for (let e = 0; e < t.childNodes.length; e += 1) {
          n.push(t.childNodes[e])
        }
      }
      else {
        n = function (e, t) {
          if ("string" != typeof e) {
            return [e];
          }
          const i = [], s = t.querySelectorAll(e);
          for (let e = 0; e < s.length; e += 1) {
            i.push(s[e]);
          }
          return i
        }(e.trim(), t || s)
      }
    }
    else if (e.nodeType || e === i || e === s) {
      n.push(e);
    }
    else if (Array.isArray(e)) {
      if (e instanceof o) {
        return e;
      }
      n = e
    }
    return new o(function (t) {
      const i = [];
      for (let e = 0; e < t.length; e += 1) {
        -1 === i.indexOf(t[e]) && i.push(t[e]);
      }
      return i
    }(n))
  }

  L.fn = o.prototype;
  const i = {
    addClass: function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }
      const s = r(t.map(e => e.split(" ")));
      return this.forEach(e => {
        e.classList.add(...s)
      }), this
    }, removeClass: function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }
      const s = r(t.map(e => e.split(" ")));
      return this.forEach(e => {
        e.classList.remove(...s)
      }), this
    }, hasClass: function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }
      const s = r(t.map(e => e.split(" ")));
      return 0 < a(this, t => 0 < s.filter(e => t.classList.contains(e)).length).length
    }, toggleClass: function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }
      const s = r(t.map(e => e.split(" ")));
      this.forEach(t => {
        s.forEach(e => {
          t.classList.toggle(e)
        })
      })
    }, attr: function (t, i) {
      if (1 === arguments.length && "string" == typeof t) {
        return this[0] ? this[0].getAttribute(t) : void 0;
      }
      for (let e = 0; e < this.length; e += 1) {
        if (2 === arguments.length) {
          this[e].setAttribute(t, i);
        }
        else {
          for (const i in t) {
            this[e][i] = t[i], this[e].setAttribute(i, t[i]);
          }
        }
      }
      return this
    }, removeAttr: function (t) {
      for (let e = 0; e < this.length; e += 1) {
        this[e].removeAttribute(t);
      }
      return this
    }, transform: function (t) {
      for (let e = 0; e < this.length; e += 1) {
        this[e].style.transform = t;
      }
      return this
    }, transition: function (t) {
      for (let e = 0; e < this.length; e += 1) {
        this[e].style.transitionDuration = "string" != typeof t ? t + "ms" : t;
      }
      return this
    }, on: function () {
      for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++) {
        i[e] = arguments[e];
      }
      let [s, n, r, o] = i;

      function a(t) {
        var e = t.target;
        if (e) {
          const i = t.target.dom7EventData || [];
          if (i.indexOf(t) < 0 && i.unshift(t), L(e).is(n)) {
            r.apply(e, i);
          }
          else {
            const t = L(e).parents();
            for (let e = 0; e < t.length; e += 1) {
              L(t[e]).is(n) && r.apply(t[e], i)
            }
          }
        }
      }

      function l(e) {
        const t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
      }

      "function" == typeof i[1] && ([s, r, o] = i, n = void 0), o = o || !1;
      var c = s.split(" ");
      let d;
      for (let e = 0; e < this.length; e += 1) {
        const i = this[e];
        if (n) {
          for (d = 0; d < c.length; d += 1) {
            const t = c[d];
            i.dom7LiveListeners || (i.dom7LiveListeners = {}), i.dom7LiveListeners[t] || (i.dom7LiveListeners[t] = []), i.dom7LiveListeners[t].push({
              listener: r,
              proxyListener: a
            }), i.addEventListener(t, a, o)
          }
        }
        else {
          for (d = 0; d < c.length; d += 1) {
            const t = c[d];
            i.dom7Listeners || (i.dom7Listeners = {}), i.dom7Listeners[t] || (i.dom7Listeners[t] = []), i.dom7Listeners[t].push({
              listener: r,
              proxyListener: l
            }), i.addEventListener(t, l, o)
          }
        }
      }
      return this
    }, off: function () {
      for (var e = arguments.length, i = new Array(e), s = 0; s < e; s++) {
        i[s] = arguments[s];
      }
      let [t, n, r, o] = i;
      "function" == typeof i[1] && ([t, r, o] = i, n = void 0), o = o || !1;
      var a = t.split(" ");
      for (let e = 0; e < a.length; e += 1) {
        const i = a[e];
        for (let e = 0; e < this.length; e += 1) {
          const s = this[e];
          let t;
          if (!n && s.dom7Listeners ? t = s.dom7Listeners[i] : n && s.dom7LiveListeners && (t = s.dom7LiveListeners[i]), t && t.length) {
            for (let e = t.length - 1; 0 <= e; --e) {
              const n = t[e];
              (r && n.listener === r || r && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === r || !r) && (s.removeEventListener(i, n.proxyListener, o), t.splice(e, 1))
            }
          }
        }
      }
      return this
    }, trigger: function () {
      const t = I();
      for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++) {
        s[n] = arguments[n];
      }
      const r = s[0].split(" "), o = s[1];
      for (let e = 0; e < r.length; e += 1) {
        const n = r[e];
        for (let e = 0; e < this.length; e += 1) {
          const r = this[e];
          if (t.CustomEvent) {
            const i = new t.CustomEvent(n, {
              detail: o,
              bubbles: !0,
              cancelable: !0
            });
            r.dom7EventData = s.filter((e, t) => 0 < t), r.dispatchEvent(i), r.dom7EventData = [], delete r.dom7EventData
          }
        }
      }
      return this
    }, transitionEnd: function (i) {
      const s = this;
      return i && s.on("transitionend", function e(t) {
        t.target === this && (i.call(this, t), s.off("transitionend", e))
      }), this
    }, outerWidth: function (e) {
      if (0 < this.length) {
        if (e) {
          const e = this.styles();
          return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
        }
        return this[0].offsetWidth
      }
      return null
    }, outerHeight: function (e) {
      if (0 < this.length) {
        if (e) {
          const e = this.styles();
          return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
        }
        return this[0].offsetHeight
      }
      return null
    }, styles: function () {
      const e = I();
      return this[0] ? e.getComputedStyle(this[0], null) : {}
    }, offset: function () {
      if (0 < this.length) {
        const e = I(), t = E(), i = this[0], s = i.getBoundingClientRect(),
          n = t.body, r = i.clientTop || n.clientTop || 0,
          o = i.clientLeft || n.clientLeft || 0,
          a = i === e ? e.scrollY : i.scrollTop,
          l = i === e ? e.scrollX : i.scrollLeft;
        return {top: s.top + a - r, left: s.left + l - o}
      }
      return null
    }, css: function (e, t) {
      const i = I();
      let s;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (s = 0; s < this.length; s += 1) {
            for (const t in e) {
              this[s].style[t] = e[t];
            }
          }
          return this
        }
        if (this[0]) {
          return i.getComputedStyle(this[0], null).getPropertyValue(e)
        }
      }
      if (2 !== arguments.length || "string" != typeof e) {
        return this;
      }
      for (s = 0; s < this.length; s += 1) {
        this[s].style[e] = t;
      }
      return this
    }, each: function (i) {
      return i && this.forEach((e, t) => {
        i.apply(e, [e, t])
      }), this
    }, html: function (t) {
      if (void 0 === t) {
        return this[0] ? this[0].innerHTML : null;
      }
      for (let e = 0; e < this.length; e += 1) {
        this[e].innerHTML = t;
      }
      return this
    }, text: function (t) {
      if (void 0 === t) {
        return this[0] ? this[0].textContent.trim() : null;
      }
      for (let e = 0; e < this.length; e += 1) {
        this[e].textContent = t;
      }
      return this
    }, is: function (e) {
      const t = I(), i = E(), s = this[0];
      let n, r;
      if (!s || void 0 === e) {
        return !1;
      }
      if ("string" == typeof e) {
        if (s.matches) {
          return s.matches(e);
        }
        if (s.webkitMatchesSelector) {
          return s.webkitMatchesSelector(e);
        }
        if (s.msMatchesSelector) {
          return s.msMatchesSelector(e);
        }
        for (n = L(e), r = 0; r < n.length; r += 1) {
          if (n[r] === s) {
            return !0;
          }
        }
        return !1
      }
      if (e === i) {
        return s === i;
      }
      if (e === t) {
        return s === t;
      }
      if (e.nodeType || e instanceof o) {
        for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1) {
          if (n[r] === s) {
            return !0;
          }
        }
        return !1
      }
      return !1
    }, index: function () {
      let e, t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }
        return e
      }
    }, eq: function (e) {
      if (void 0 === e) {
        return this;
      }
      var t = this.length;
      return L(t - 1 < e ? [] : e < 0 ? (t = t + e) < 0 ? [] : [this[t]] : [this[e]])
    }, append: function () {
      var i;
      const s = E();
      for (let e = 0; e < arguments.length; e += 1) {
        i = e < 0 || arguments.length <= e ? void 0 : arguments[e];
        for (let t = 0; t < this.length; t += 1) {
          if ("string" == typeof i) {
            const E = s.createElement("div");
            for (E.innerHTML = i; E.firstChild;) {
              this[t].appendChild(E.firstChild)
            }
          }
          else if (i instanceof o) {
            for (let e = 0; e < i.length; e += 1) {
              this[t].appendChild(i[e]);
            }
          }
          else {
            this[t].appendChild(i)
          }
        }
      }
      return this
    }, prepend: function (e) {
      const t = E();
      let i, s;
      for (i = 0; i < this.length; i += 1) {
        if ("string" == typeof e) {
          const E = t.createElement("div");
          for (E.innerHTML = e, s = E.childNodes.length - 1; 0 <= s; --s) {
            this[i].insertBefore(E.childNodes[s], this[i].childNodes[0])
          }
        }
        else if (e instanceof o) {
          for (s = 0; s < e.length; s += 1) {
            this[i].insertBefore(e[s], this[i].childNodes[0]);
          }
        }
        else {
          this[i].insertBefore(e, this[i].childNodes[0]);
        }
      }
      return this
    }, next: function (e) {
      return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? L([this[0].nextElementSibling]) : L([]) : this[0].nextElementSibling ? L([this[0].nextElementSibling]) : L([]) : L([])
    }, nextAll: function (e) {
      const t = [];
      let i = this[0];
      if (!i) {
        return L([]);
      }
      for (; i.nextElementSibling;) {
        var s = i.nextElementSibling;
        e && !L(s).is(e) || t.push(s), i = s
      }
      return L(t)
    }, prev: function (e) {
      var t;
      return 0 < this.length ? (t = this[0], e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? L([t.previousElementSibling]) : L([]) : t.previousElementSibling ? L([t.previousElementSibling]) : L([])) : L([])
    }, prevAll: function (e) {
      const t = [];
      let i = this[0];
      if (!i) {
        return L([]);
      }
      for (; i.previousElementSibling;) {
        var s = i.previousElementSibling;
        e && !L(s).is(e) || t.push(s), i = s
      }
      return L(t)
    }, parent: function (t) {
      const i = [];
      for (let e = 0; e < this.length; e += 1) {
        null === this[e].parentNode || t && !L(this[e].parentNode).is(t) || i.push(this[e].parentNode);
      }
      return L(i)
    }, parents: function (i) {
      const s = [];
      for (let t = 0; t < this.length; t += 1) {
        let e = this[t].parentNode;
        for (; e;) {
          i && !L(e).is(i) || s.push(e), e = e.parentNode
        }
      }
      return L(s)
    }, closest: function (e) {
      let t = this;
      return void 0 === e ? L([]) : t = t.is(e) ? t : t.parents(e).eq(0)
    }, find: function (t) {
      const i = [];
      for (let e = 0; e < this.length; e += 1) {
        var s = this[e].querySelectorAll(t);
        for (let e = 0; e < s.length; e += 1) {
          i.push(s[e])
        }
      }
      return L(i)
    }, children: function (t) {
      const i = [];
      for (let e = 0; e < this.length; e += 1) {
        var s = this[e].children;
        for (let e = 0; e < s.length; e += 1) {
          t && !L(s[e]).is(t) || i.push(s[e])
        }
      }
      return L(i)
    }, filter: function (e) {
      return L(a(this, e))
    }, remove: function () {
      for (let e = 0; e < this.length; e += 1) {
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      }
      return this
    }
  };

  function S(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t)
  }

  function v() {
    return Date.now()
  }

  function O(e, t) {
    void 0 === t && (t = "x");
    const i = I();
    let s, n, r;
    const o = function (e) {
      const t = I();
      let i;
      return i = (i = !(i = t.getComputedStyle ? t.getComputedStyle(e, null) : i) && e.currentStyle ? e.currentStyle : i) || e.style
    }(e);
    return i.WebKitCSSMatrix ? (6 < (n = o.transform || o.webkitTransform).split(",").length && (n = n.split(", ").map(e => e.replace(",", ".")).join(", ")), r = new i.WebKitCSSMatrix("none" === n ? "" : n)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = r.toString().split(",")), "x" === t && (n = i.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), (n = "y" === t ? i.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5]) : n) || 0
  }

  function c(e) {
    return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
  }

  function m(e) {
    const i = Object(arguments.length <= 0 ? void 0 : e),
      t = ["__proto__", "constructor", "prototype"];
    for (let e = 1; e < arguments.length; e += 1) {
      var s = e < 0 || arguments.length <= e ? void 0 : arguments[e];
      if (null != s && (a = s, !("undefined" != typeof window && void 0 !== window.HTMLElement ? a instanceof HTMLElement : a && (1 === a.nodeType || 11 === a.nodeType)))) {
        var n = Object.keys(Object(s)).filter(e => t.indexOf(e) < 0);
        for (let e = 0, t = n.length; e < t; e += 1) {
          var r = n[e], o = Object.getOwnPropertyDescriptor(s, r);
          void 0 !== o && o.enumerable && (c(i[r]) && c(s[r]) ? s[r].__swiper__ ? i[r] = s[r] : m(i[r], s[r]) : !c(i[r]) && c(s[r]) ? (i[r] = {}, s[r].__swiper__ ? i[r] = s[r] : m(i[r], s[r])) : i[r] = s[r])
        }
      }
    }
    var a;
    return i
  }

  function C(e, t, i) {
    e.style.setProperty(t, i)
  }

  function y(e) {
    let {swiper: i, targetPosition: s, side: n} = e;
    const r = I(), o = -i.translate;
    let a, l = null;
    const c = i.params.speed,
      d = (i.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(i.cssModeFrameID), s > o ? "next" : "prev"),
      u = (e, t) => "next" === d && t <= e || "prev" === d && e <= t,
      h = () => {
        a = (new Date).getTime(), null === l && (l = a);
        var e = Math.max(Math.min((a - l) / c, 1), 0),
          e = .5 - Math.cos(e * Math.PI) / 2;
        let t = o + e * (s - o);
        if (u(t, s) && (t = s), i.wrapperEl.scrollTo({[n]: t}), u(t, s)) {
          return i.wrapperEl.style.overflow = "hidden", i.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
            i.wrapperEl.style.overflow = "", i.wrapperEl.scrollTo({[n]: t})
          }), void r.cancelAnimationFrame(i.cssModeFrameID);
        }
        i.cssModeFrameID = r.requestAnimationFrame(h)
      };
    h()
  }

  let e, d, u;

  function f() {
    return e = e || function () {
      const i = I(), e = E();
      return {
        smoothScroll: e.documentElement && "scrollBehavior" in e.documentElement.style,
        touch: !!("ontouchstart" in i || i.DocumentTouch && e instanceof i.DocumentTouch),
        passiveListener: function () {
          let e = !1;
          try {
            var t = Object.defineProperty({}, "passive", {
              get() {
                e = !0
              }
            });
            i.addEventListener("testPassiveListener", null, t)
          }
          catch (e) {
          }
          return e
        }(),
        gestures: "ongesturestart" in i
      }
    }()
  }

  function l(e) {
    let {swiper: t, runCallbacks: i, direction: s, step: n} = e;
    var {activeIndex: e, previousIndex: r} = t;
    let o = s;
    if (o = o || (r < e ? "next" : e < r ? "prev" : "reset"), t.emit("transition" + n), i && e !== r) {
      if ("reset" === o) {
        return t.emit("slideResetTransition" + n);
      }
      t.emit("slideChangeTransition" + n), "next" === o ? t.emit("slideNextTransition" + n) : t.emit("slidePrevTransition" + n)
    }
  }

  function h() {
    var e, t, i = this, {params: s, el: n} = i;
    n && 0 === n.offsetWidth || (s.breakpoints && i.setBreakpoint(), {
      allowSlideNext: n,
      allowSlidePrev: e,
      snapGrid: t
    } = i, i.allowSlideNext = !0, i.allowSlidePrev = !0, i.updateSize(), i.updateSlides(), i.updateSlidesClasses(), ("auto" === s.slidesPerView || 1 < s.slidesPerView) && i.isEnd && !i.isBeginning && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0), i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.run(), i.allowSlidePrev = e, i.allowSlideNext = n, i.params.watchOverflow && t !== i.snapGrid && i.checkOverflow())
  }

  Object.keys(i).forEach(e => {
    Object.defineProperty(L.fn, e, {value: i[e], writable: !0})
  });
  let p = !1;

  function j() {
  }

  const g = (e, t) => {
    const i = E(), {
        params: s,
        touchEvents: n,
        el: r,
        wrapperEl: o,
        device: a,
        support: l
      } = e, c = !!s.nested,
      d = "on" === t ? "addEventListener" : "removeEventListener", u = t;
    if (l.touch) {
      const t = !("touchstart" !== n.start || !l.passiveListener || !s.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      r[d](n.start, e.onTouchStart, t), r[d](n.move, e.onTouchMove, l.passiveListener ? {
        passive: !1,
        capture: c
      } : c), r[d](n.end, e.onTouchEnd, t), n.cancel && r[d](n.cancel, e.onTouchEnd, t)
    }
    else {
      r[d](n.start, e.onTouchStart, !1), i[d](n.move, e.onTouchMove, c), i[d](n.end, e.onTouchEnd, !1);
    }
    (s.preventClicks || s.preventClicksPropagation) && r[d]("click", e.onClick, !0), s.cssMode && o[d]("scroll", e.onScroll), s.updateOnWindowResize ? e[u](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", h, !0) : e[u]("observerUpdate", h, !0)
  }, b = (e, t) => e.grid && t.grid && 1 < t.grid.rows;
  var w = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: !0,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };
  const x = {
    eventsEmitter: {
      on(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) {
          return s;
        }
        if ("function" != typeof t) {
          return s;
        }
        const n = i ? "unshift" : "push";
        return e.split(" ").forEach(e => {
          s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][n](t)
        }), s
      }, once(s, n, e) {
        const r = this;
        return !r.eventsListeners || r.destroyed || "function" != typeof n ? r : (o.__emitterProxy = n, r.on(s, o, e));

        function o() {
          r.off(s, o), o.__emitterProxy && delete o.__emitterProxy;
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
            t[i] = arguments[i];
          }
          n.apply(r, t)
        }
      }, onAny(e, t) {
        if (!this.eventsListeners || this.destroyed) {
          return this;
        }
        if ("function" != typeof e) {
          return this;
        }
        t = t ? "unshift" : "push";
        return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[t](e), this
      }, offAny(e) {
        if (!this.eventsListeners || this.destroyed) {
          return this;
        }
        if (!this.eventsAnyListeners) {
          return this;
        }
        e = this.eventsAnyListeners.indexOf(e);
        return 0 <= e && this.eventsAnyListeners.splice(e, 1), this
      }, off(e, s) {
        const n = this;
        return !n.eventsListeners || n.destroyed || n.eventsListeners && e.split(" ").forEach(i => {
          void 0 === s ? n.eventsListeners[i] = [] : n.eventsListeners[i] && n.eventsListeners[i].forEach((e, t) => {
            (e === s || e.__emitterProxy && e.__emitterProxy === s) && n.eventsListeners[i].splice(t, 1)
          })
        }), n
      }, emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) {
          return e;
        }
        if (!e.eventsListeners) {
          return e;
        }
        let t, i, s;
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) {
          r[o] = arguments[o];
        }
        return s = "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], i = r.slice(1, r.length), e) : (t = r[0].events, i = r[0].data, r[0].context || e), i.unshift(s), (Array.isArray(t) ? t : t.split(" ")).forEach(t => {
          e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e => {
            e.apply(s, [t, ...i])
          }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(e => {
            e.apply(s, i)
          })
        }), e
      }
    }, update: {
      updateSize: function () {
        var e = this;
        let t, i;
        const s = e.$el;
        t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : s[0].clientWidth, i = void 0 !== e.params.height && null !== e.params.height ? e.params.height : s[0].clientHeight, 0 === t && e.isHorizontal() || 0 === i && e.isVertical() || (t = t - parseInt(s.css("padding-left") || 0, 10) - parseInt(s.css("padding-right") || 0, 10), i = i - parseInt(s.css("padding-top") || 0, 10) - parseInt(s.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(i) && (i = 0), Object.assign(e, {
          width: t,
          height: i,
          size: e.isHorizontal() ? t : i
        }))
      }, updateSlides: function () {
        const i = this;

        function s(e) {
          return i.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
          }[e]
        }

        function n(e, t) {
          return parseFloat(e.getPropertyValue(s(t)) || 0)
        }

        const r = i.params, {
            $wrapperEl: o,
            size: a,
            rtlTranslate: l,
            wrongRTL: c
          } = i, d = i.virtual && r.virtual.enabled,
          e = (d ? i.virtual : i).slides.length,
          u = o.children("." + i.params.slideClass),
          h = (d ? i.virtual.slides : u).length;
        let p = [];
        const m = [], f = [];
        let g = r.slidesOffsetBefore,
          v = ("function" == typeof g && (g = r.slidesOffsetBefore.call(i)), r.slidesOffsetAfter);
        "function" == typeof v && (v = r.slidesOffsetAfter.call(i));
        var y = i.snapGrid.length, b = i.slidesGrid.length;
        let w = r.spaceBetween, x = -g, _ = 0, T = 0;
        if (void 0 !== a) {
          "string" == typeof w && 0 <= w.indexOf("%") && (w = parseFloat(w.replace("%", "")) / 100 * a), i.virtualSize = -w, l ? u.css({
            marginLeft: "",
            marginBottom: "",
            marginTop: ""
          }) : u.css({
            marginRight: "",
            marginBottom: "",
            marginTop: ""
          }), r.centeredSlides && r.cssMode && (C(i.wrapperEl, "--swiper-centered-offset-before", ""), C(i.wrapperEl, "--swiper-centered-offset-after", ""));
          var E = r.grid && 1 < r.grid.rows && i.grid;
          let t;
          E && i.grid.initSlides(h);
          var S = "auto" === r.slidesPerView && r.breakpoints && 0 < Object.keys(r.breakpoints).filter(e => void 0 !== r.breakpoints[e].slidesPerView).length;
          for (let e = 0; e < h; e += 1) {
            t = 0;
            const l = u.eq(e);
            if (E && i.grid.updateSlide(e, l, h, s), "none" !== l.css("display")) {
              if ("auto" === r.slidesPerView) {
                S && (u[e].style[s("width")] = "");
                const a = getComputedStyle(l[0]), c = l[0].style.transform,
                  d = l[0].style.webkitTransform;
                if (c && (l[0].style.transform = "none"), d && (l[0].style.webkitTransform = "none"), r.roundLengths) {
                  t = i.isHorizontal() ? l.outerWidth(!0) : l.outerHeight(!0);
                }
                else {
                  const i = n(a, "width"), s = n(a, "padding-left"),
                    r = n(a, "padding-right"), o = n(a, "margin-left"),
                    c = n(a, "margin-right"),
                    d = a.getPropertyValue("box-sizing");
                  if (d && "border-box" === d) {
                    t = i + o + c;
                  }
                  else {
                    const {clientWidth: n, offsetWidth: a} = l[0];
                    t = i + s + r + o + c + (a - n)
                  }
                }
                c && (l[0].style.transform = c), d && (l[0].style.webkitTransform = d), r.roundLengths && (t = Math.floor(t))
              }
              else {
                t = (a - (r.slidesPerView - 1) * w) / r.slidesPerView, r.roundLengths && (t = Math.floor(t)), u[e] && (u[e].style[s("width")] = t + "px");
              }
              u[e] && (u[e].swiperSlideSize = t), f.push(t), r.centeredSlides ? (x = x + t / 2 + _ / 2 + w, 0 === _ && 0 !== e && (x = x - a / 2 - w), 0 === e && (x = x - a / 2 - w), Math.abs(x) < .001 && (x = 0), r.roundLengths && (x = Math.floor(x)), T % r.slidesPerGroup == 0 && p.push(x), m.push(x)) : (r.roundLengths && (x = Math.floor(x)), (T - Math.min(i.params.slidesPerGroupSkip, T)) % i.params.slidesPerGroup == 0 && p.push(x), m.push(x), x = x + t + w), i.virtualSize += t + w, _ = t, T += 1
            }
          }
          if (i.virtualSize = Math.max(i.virtualSize, a) + v, l && c && ("slide" === r.effect || "coverflow" === r.effect) && o.css({width: i.virtualSize + r.spaceBetween + "px"}), r.setWrapperSize && o.css({[s("width")]: i.virtualSize + r.spaceBetween + "px"}), E && i.grid.updateWrapperSize(t, p, s), !r.centeredSlides) {
            const s = [];
            for (let t = 0; t < p.length; t += 1) {
              let e = p[t];
              r.roundLengths && (e = Math.floor(e)), p[t] <= i.virtualSize - a && s.push(e)
            }
            p = s, 1 < Math.floor(i.virtualSize - a) - Math.floor(p[p.length - 1]) && p.push(i.virtualSize - a)
          }
          if (0 === p.length && (p = [0]), 0 !== r.spaceBetween) {
            const n = i.isHorizontal() && l ? "marginLeft" : s("marginRight");
            u.filter((e, t) => !r.cssMode || t !== u.length - 1).css({[n]: w + "px"})
          }
          if (r.centeredSlides && r.centeredSlidesBounds) {
            let t = 0;
            f.forEach(e => {
              t += e + (r.spaceBetween || 0)
            });
            const s = (t -= r.spaceBetween) - a;
            p = p.map(e => e < 0 ? -g : e > s ? s + v : e)
          }
          if (r.centerInsufficientSlides) {
            let t = 0;
            if (f.forEach(e => {
              t += e + (r.spaceBetween || 0)
            }), (t -= r.spaceBetween) < a) {
              const s = (a - t) / 2;
              p.forEach((e, t) => {
                p[t] = e - s
              }), m.forEach((e, t) => {
                m[t] = e + s
              })
            }
          }
          if (Object.assign(i, {
            slides: u,
            snapGrid: p,
            slidesGrid: m,
            slidesSizesGrid: f
          }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
            C(i.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"), C(i.wrapperEl, "--swiper-centered-offset-after", i.size / 2 - f[f.length - 1] / 2 + "px");
            const s = -i.snapGrid[0], n = -i.slidesGrid[0];
            i.snapGrid = i.snapGrid.map(e => e + s), i.slidesGrid = i.slidesGrid.map(e => e + n)
          }
          if (h !== e && i.emit("slidesLengthChange"), p.length !== y && (i.params.watchOverflow && i.checkOverflow(), i.emit("snapGridLengthChange")), m.length !== b && i.emit("slidesGridLengthChange"), r.watchSlidesProgress && i.updateSlidesOffset(), !(d || r.cssMode || "slide" !== r.effect && "fade" !== r.effect)) {
            const s = r.containerModifierClass + "backface-hidden",
              n = i.$el.hasClass(s);
            h <= r.maxBackfaceHiddenSlides ? n || i.$el.addClass(s) : n && i.$el.removeClass(s)
          }
        }
      }, updateAutoHeight: function (e) {
        const i = this, t = [], s = i.virtual && i.params.virtual.enabled;
        let n, r = 0;
        "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
        var o = t => (s ? i.slides.filter(e => parseInt(e.getAttribute("data-swiper-slide-index"), 10) === t) : i.slides.eq(t))[0];
        if ("auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView) {
          if (i.params.centeredSlides) {
            (i.visibleSlides || L([])).each(e => {
              t.push(e)
            });
          }
          else {
            for (n = 0; n < Math.ceil(i.params.slidesPerView); n += 1) {
              const e = i.activeIndex + n;
              if (e > i.slides.length && !s) {
                break;
              }
              t.push(o(e))
            }
          }
        }
        else {
          t.push(o(i.activeIndex));
        }
        for (n = 0; n < t.length; n += 1) {
          if (void 0 !== t[n]) {
            const e = t[n].offsetHeight;
            r = e > r ? e : r
          }
        }
        !r && 0 !== r || i.$wrapperEl.css("height", r + "px")
      }, updateSlidesOffset: function () {
        const t = this.slides;
        for (let e = 0; e < t.length; e += 1) {
          t[e].swiperSlideOffset = this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop
        }
      }, updateSlidesProgress: function (e) {
        void 0 === e && (e = this && this.translate || 0);
        const s = this, n = s.params, {
          slides: r,
          rtlTranslate: o,
          snapGrid: a
        } = s;
        if (0 !== r.length) {
          void 0 === r[0].swiperSlideOffset && s.updateSlidesOffset();
          let i = o ? e : -e;
          r.removeClass(n.slideVisibleClass), s.visibleSlidesIndexes = [], s.visibleSlides = [];
          for (let t = 0; t < r.length; t += 1) {
            const l = r[t];
            let e = l.swiperSlideOffset;
            n.cssMode && n.centeredSlides && (e -= r[0].swiperSlideOffset);
            const L = (i + (n.centeredSlides ? s.minTranslate() : 0) - e) / (l.swiperSlideSize + n.spaceBetween),
              c = (i - a[0] + (n.centeredSlides ? s.minTranslate() : 0) - e) / (l.swiperSlideSize + n.spaceBetween),
              d = -(i - e), u = d + s.slidesSizesGrid[t];
            (0 <= d && d < s.size - 1 || 1 < u && u <= s.size || d <= 0 && u >= s.size) && (s.visibleSlides.push(l), s.visibleSlidesIndexes.push(t), r.eq(t).addClass(n.slideVisibleClass)), l.progress = o ? -L : L, l.originalProgress = o ? -c : c
          }
          s.visibleSlides = L(s.visibleSlides)
        }
      }, updateProgress: function (e) {
        var t = this;
        if (void 0 === e) {
          const i = t.rtlTranslate ? -1 : 1;
          e = t && t.translate && t.translate * i || 0
        }
        const i = t.params, s = t.maxTranslate() - t.minTranslate();
        let {progress: n, isBeginning: r, isEnd: o} = t;
        var a = r, l = o;
        o = 0 == s ? (n = 0, r = !0) : (n = (e - t.minTranslate()) / s, r = n <= 0, 1 <= n), Object.assign(t, {
          progress: n,
          isBeginning: r,
          isEnd: o
        }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), r && !a && t.emit("reachBeginning toEdge"), o && !l && t.emit("reachEnd toEdge"), (a && !r || l && !o) && t.emit("fromEdge"), t.emit("progress", n)
      }, updateSlidesClasses: function () {
        const {
          slides: e,
          params: t,
          $wrapperEl: i,
          activeIndex: s,
          realIndex: n
        } = this, r = this.virtual && t.virtual.enabled;
        let o,
          a = (e.removeClass(`${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ` + t.slideDuplicatePrevClass), (o = r ? this.$wrapperEl.find(`.${t.slideClass}[data-swiper-slide-index="${s}"]`) : e.eq(s)).addClass(t.slideActiveClass), t.loop && (o.hasClass(t.slideDuplicateClass) ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${n}"]`) : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${n}"]`)).addClass(t.slideDuplicateActiveClass), o.nextAll("." + t.slideClass).eq(0).addClass(t.slideNextClass)),
          l = (t.loop && 0 === a.length && (a = e.eq(0)).addClass(t.slideNextClass), o.prevAll("." + t.slideClass).eq(0).addClass(t.slidePrevClass));
        t.loop && 0 === l.length && (l = e.eq(-1)).addClass(t.slidePrevClass), t.loop && ((a.hasClass(t.slideDuplicateClass) ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`) : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`)).addClass(t.slideDuplicateNextClass), (l.hasClass(t.slideDuplicateClass) ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`) : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`)).addClass(t.slideDuplicatePrevClass)), this.emitSlidesClasses()
      }, updateActiveIndex: function (e) {
        const t = this, i = t.rtlTranslate ? t.translate : -t.translate, {
          slidesGrid: s,
          snapGrid: n,
          params: r,
          activeIndex: o,
          realIndex: a,
          snapIndex: l
        } = t;
        let c, d = e;
        if (void 0 === d) {
          for (let e = 0; e < s.length; e += 1) {
            void 0 !== s[e + 1] ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2 ? d = e : i >= s[e] && i < s[e + 1] && (d = e + 1) : i >= s[e] && (d = e);
          }
          r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
        }
        if (0 <= n.indexOf(i)) {
          c = n.indexOf(i);
        }
        else {
          const e = Math.min(r.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / r.slidesPerGroup)
        }
        c >= n.length && (c = n.length - 1), d === o ? c !== l && (t.snapIndex = c, t.emit("snapIndexChange")) : (e = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10), Object.assign(t, {
          snapIndex: c,
          realIndex: e,
          previousIndex: o,
          activeIndex: d
        }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), a !== e && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange"))
      }, updateClickedSlide: function (e) {
        var t = this, i = t.params, s = L(e).closest("." + i.slideClass)[0];
        let n, r = !1;
        if (s) {
          for (let e = 0; e < t.slides.length; e += 1) {
            if (t.slides[e] === s) {
              r = !0, n = e;
              break
            }
          }
        }
        if (!s || !r) {
          return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
        }
        t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(s).attr("data-swiper-slide-index"), 10) : t.clickedIndex = n, i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
      }
    }, translate: {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var {params: t, rtlTranslate: i, translate: s, $wrapperEl: n} = this;
        if (t.virtualTranslate) {
          return i ? -s : s;
        }
        if (t.cssMode) {
          return s;
        }
        let r = O(n[0], e);
        return (r = i ? -r : r) || 0
      }, setTranslate: function (e, t) {
        const i = this, {
          rtlTranslate: s,
          params: n,
          $wrapperEl: r,
          wrapperEl: o,
          progress: a
        } = i;
        let l = 0, c = 0;
        i.isHorizontal() ? l = s ? -e : e : c = e, n.roundLengths && (l = Math.floor(l), c = Math.floor(c)), n.cssMode ? o[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -c : n.virtualTranslate || r.transform(`translate3d(${l}px, ${c}px, 0px)`), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : c;
        var d = i.maxTranslate() - i.minTranslate();
        (0 == d ? 0 : (e - i.minTranslate()) / d) !== a && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
      }, minTranslate: function () {
        return -this.snapGrid[0]
      }, maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1]
      }, translateTo: function (e, t, i, s, n) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
        const r = this, {params: o, wrapperEl: a} = r;
        if (r.animating && o.preventInteractionOnTransition) {
          return !1;
        }
        var l = r.minTranslate(), c = r.maxTranslate(),
          l = s && l < e ? l : s && e < c ? c : e;
        if (r.updateProgress(l), o.cssMode) {
          const e = r.isHorizontal();
          if (0 === t) {
            a[e ? "scrollLeft" : "scrollTop"] = -l;
          }
          else {
            if (!r.support.smoothScroll) {
              return y({
                swiper: r,
                targetPosition: -l,
                side: e ? "left" : "top"
              }), !0;
            }
            a.scrollTo({[e ? "left" : "top"]: -l, behavior: "smooth"})
          }
          return !0
        }
        return 0 === t ? (r.setTransition(0), r.setTranslate(l), i && (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(l), i && (r.emit("beforeTransitionStart", t, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"))
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
      }
    }, transition: {
      setTransition: function (e, t) {
        this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
      }, transitionStart: function (e, t) {
        void 0 === e && (e = !0);
        var i = this["params"];
        i.cssMode || (i.autoHeight && this.updateAutoHeight(), l({
          swiper: this,
          runCallbacks: e,
          direction: t,
          step: "Start"
        }))
      }, transitionEnd: function (e, t) {
        void 0 === e && (e = !0);
        var i = this["params"];
        this.animating = !1, i.cssMode || (this.setTransition(0), l({
          swiper: this,
          runCallbacks: e,
          direction: t,
          step: "End"
        }))
      }
    }, slide: {
      slideTo: function (e, t, i, s, n) {
        if (void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "number" != typeof (e = void 0 === e ? 0 : e) && "string" != typeof e) {
          throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
        }
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t)) {
            throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
          }
          e = t
        }
        const r = this;
        let o = e;
        o < 0 && (o = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: h,
          wrapperEl: p,
          enabled: m
        } = r;
        if (r.animating && a.preventInteractionOnTransition || !m && !s && !n) {
          return !1;
        }
        e = Math.min(r.params.slidesPerGroupSkip, o);
        let f = e + Math.floor((o - e) / r.params.slidesPerGroup);
        f >= l.length && (f = l.length - 1), (u || a.initialSlide || 0) === (d || 0) && i && r.emit("beforeSlideChangeStart");
        var g = -l[f];
        if (r.updateProgress(g), a.normalizeSlideIndex) {
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * g), i = Math.floor(100 * c[e]),
              s = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1] ? t >= i && t < s - (s - i) / 2 ? o = e : t >= i && t < s && (o = e + 1) : t >= i && (o = e)
          }
        }
        if (r.initialized && o !== u) {
          if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) {
            return !1;
          }
          if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (u || 0) !== o) {
            return !1
          }
        }
        let v;
        if (v = o > u ? "next" : o < u ? "prev" : "reset", h && -g === r.translate || !h && g === r.translate) {
          return r.updateActiveIndex(o), a.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== a.effect && r.setTranslate(g), "reset" != v && (r.transitionStart(i, v), r.transitionEnd(i, v)), !1;
        }
        if (a.cssMode) {
          const e = r.isHorizontal(), i = h ? g : -g;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), p[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame(() => {
              r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
            })
          }
          else {
            if (!r.support.smoothScroll) {
              return y({
                swiper: r,
                targetPosition: i,
                side: e ? "left" : "top"
              }), !0;
            }
            p.scrollTo({[e ? "left" : "top"]: i, behavior: "smooth"})
          }
          return !0
        }
        return r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, v), 0 === t ? r.transitionEnd(i, v) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, v))
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
      }, slideToLoop: function (e, t, i, s) {
        if (void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "string" == typeof (e = void 0 === e ? 0 : e)) {
          const t = parseInt(e, 10);
          if (!isFinite(t)) {
            throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
          }
          e = t
        }
        let n = e;
        return this.params.loop && (n += this.loopedSlides), this.slideTo(n, t, i, s)
      }, slideNext: function (e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var s = this, {animating: n, enabled: r, params: o} = s;
        if (!r) {
          return s;
        }
        let a = o.slidesPerGroup;
        "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
        r = s.activeIndex < o.slidesPerGroupSkip ? 1 : a;
        if (o.loop) {
          if (n && o.loopPreventsSlide) {
            return !1;
          }
          s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
        }
        return o.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + r, e, t, i)
      }, slidePrev: function (e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const s = this, {
          params: n,
          animating: r,
          snapGrid: o,
          slidesGrid: a,
          rtlTranslate: l,
          enabled: c
        } = s;
        if (!c) {
          return s;
        }
        if (n.loop) {
          if (r && n.loopPreventsSlide) {
            return !1;
          }
          s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
        }

        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
        }

        const u = d(l ? s.translate : -s.translate), h = o.map(e => d(e));
        let p = o[h.indexOf(u) - 1];
        if (void 0 === p && n.cssMode) {
          let i;
          o.forEach((e, t) => {
            u >= e && (i = t)
          }), void 0 !== i && (p = o[0 < i ? i - 1 : i])
        }
        let m = 0;
        if (void 0 !== p && ((m = a.indexOf(p)) < 0 && (m = s.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (m = m - s.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), n.rewind && s.isBeginning) {
          const n = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
          return s.slideTo(n, e, t, i)
        }
        return s.slideTo(m, e, t, i)
      }, slideReset: function (e, t, i) {
        return void 0 === e && (e = this.params.speed), this.slideTo(this.activeIndex, e, t = void 0 === t ? !0 : t, i)
      }, slideToClosest: function (e, t, i, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
        var n = this;
        let r = n.activeIndex;
        var o = Math.min(n.params.slidesPerGroupSkip, r),
          o = o + Math.floor((r - o) / n.params.slidesPerGroup),
          a = n.rtlTranslate ? n.translate : -n.translate;
        if (a >= n.snapGrid[o]) {
          const e = n.snapGrid[o];
          a - e > (n.snapGrid[o + 1] - e) * s && (r += n.params.slidesPerGroup)
        }
        else {
          const e = n.snapGrid[o - 1];
          a - e <= (n.snapGrid[o] - e) * s && (r -= n.params.slidesPerGroup)
        }
        return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, e, t, i)
      }, slideToClickedSlide: function () {
        const e = this, {params: t, $wrapperEl: i} = e,
          s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
        let n, r = e.clickedIndex;
        t.loop ? e.animating || (n = parseInt(L(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - s / 2 || r > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), r = i.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), S(() => {
          e.slideTo(r)
        })) : e.slideTo(r) : r > e.slides.length - s ? (e.loopFix(), r = i.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), S(() => {
          e.slideTo(r)
        })) : e.slideTo(r)) : e.slideTo(r)
      }
    }, loop: {
      loopCreate: function () {
        const t = this, i = E(), {params: s, $wrapperEl: e} = t,
          n = 0 < e.children().length ? L(e.children()[0].parentNode) : e;
        n.children(`.${s.slideClass}.` + s.slideDuplicateClass).remove();
        let r = n.children("." + s.slideClass);
        if (s.loopFillGroupWithBlank) {
          const t = s.slidesPerGroup - r.length % s.slidesPerGroup;
          if (t !== s.slidesPerGroup) {
            for (let e = 0; e < t; e += 1) {
              const t = L(i.createElement("div")).addClass(s.slideClass + " " + s.slideBlankClass);
              n.append(t)
            }
            r = n.children("." + s.slideClass)
          }
        }
        "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = r.length), t.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), t.loopedSlides += s.loopAdditionalSlides, t.loopedSlides > r.length && t.params.loopedSlidesLimit && (t.loopedSlides = r.length);
        const o = [], a = [];
        r.each((e, t) => {
          L(e).attr("data-swiper-slide-index", t)
        });
        for (let e = 0; e < t.loopedSlides; e += 1) {
          const t = e - Math.floor(e / r.length) * r.length;
          a.push(r.eq(t)[0]), o.unshift(r.eq(r.length - t - 1)[0])
        }
        for (let e = 0; e < a.length; e += 1) {
          n.append(L(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        }
        for (let e = o.length - 1; 0 <= e; --e) {
          n.prepend(L(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
        }
      }, loopFix: function () {
        var e = this, {
          activeIndex: t,
          slides: i,
          loopedSlides: s,
          allowSlidePrev: n,
          allowSlideNext: r,
          snapGrid: o,
          rtlTranslate: a
        } = (e.emit("beforeLoopFix"), e);
        let l;
        e.allowSlidePrev = !0, e.allowSlideNext = !0;
        o = -o[t] - e.getTranslate();
        t < s ? (l = i.length - 3 * s + t, l += s, e.slideTo(l, 0, !1, !0) && 0 != o && e.setTranslate((a ? -e.translate : e.translate) - o)) : t >= i.length - s && (l = -i.length + t + s, l += s, e.slideTo(l, 0, !1, !0) && 0 != o && e.setTranslate((a ? -e.translate : e.translate) - o)), e.allowSlidePrev = n, e.allowSlideNext = r, e.emit("loopFix")
      }, loopDestroy: function () {
        const {$wrapperEl: e, params: t, slides: i} = this;
        e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.` + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
      }
    }, grabCursor: {
      setGrabCursor: function (e) {
        if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
          const t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
          t.style.cursor = "move", t.style.cursor = e ? "grabbing" : "grab"
        }
      }, unsetGrabCursor: function () {
        this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this["container" === this.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
      }
    }, events: {
      attachEvents: function () {
        const e = this, t = E(), {params: i, support: s} = e;
        e.onTouchStart = function (e) {
          const s = this, n = E(), r = I(), o = s.touchEventsData, {
            params: a,
            touches: l,
            enabled: t
          } = s;
          if (t && (!s.animating || !a.preventInteractionOnTransition)) {
            !s.animating && a.cssMode && a.loop && s.loopFix();
            let t = e,
              i = L((t = t.originalEvent ? t.originalEvent : t).target);
            if (("wrapper" !== a.touchEventsTarget || i.closest(s.wrapperEl).length) && (o.isTouchEvent = "touchstart" === t.type, (o.isTouchEvent || !("which" in t) || 3 !== t.which) && !(!o.isTouchEvent && "button" in t && 0 < t.button || o.isTouched && o.isMoved))) {
              a.noSwipingClass && "" !== a.noSwipingClass && t.target && t.target.shadowRoot && e.path && e.path[0] && (i = L(e.path[0]));
              var c = a.noSwipingSelector || "." + a.noSwipingClass,
                d = !(!t.target || !t.target.shadowRoot);
              if (a.noSwiping && (d ? function (s, e) {
                return function e(t) {
                  if (!t || t === E() || t === I()) {
                    return null;
                  }
                  var i = (t = t.assignedSlot ? t.assignedSlot : t).closest(s);
                  return i || t.getRootNode ? i || e(t.getRootNode().host) : null
                }(e = void 0 === e ? this : e)
              }(c, i[0]) : i.closest(c)[0])) {
                s.allowClick = !0;
              }
              else if (!a.swipeHandler || i.closest(a.swipeHandler)[0]) {
                l.currentX = ("touchstart" === t.type ? t.targetTouches[0] : t).pageX, l.currentY = ("touchstart" === t.type ? t.targetTouches[0] : t).pageY;
                var d = l.currentX, c = l.currentY,
                  u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                  h = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                if (u && (d <= h || d >= r.innerWidth - h)) {
                  if ("prevent" !== u) {
                    return;
                  }
                  e.preventDefault()
                }
                if (Object.assign(o, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0
                }), l.startX = d, l.startY = c, o.touchStartTime = v(), s.allowClick = !0, s.updateSize(), s.swipeDirection = void 0, 0 < a.threshold && (o.allowThresholdMove = !1), "touchstart" !== t.type) {
                  let e = !0;
                  i.is(o.focusableElements) && (e = !1, "SELECT" === i[0].nodeName && (o.isTouched = !1)), n.activeElement && L(n.activeElement).is(o.focusableElements) && n.activeElement !== i[0] && n.activeElement.blur();
                  const E = e && s.allowTouchMove && a.touchStartPreventDefault;
                  !a.touchStartForcePreventDefault && !E || i[0].isContentEditable || t.preventDefault()
                }
                s.params.freeMode && s.params.freeMode.enabled && s.freeMode && s.animating && !a.cssMode && s.freeMode.onTouchStart(), s.emit("touchStart", t)
              }
            }
          }
        }.bind(e), e.onTouchMove = function (n) {
          const e = E(), r = this, o = r.touchEventsData, {
            params: a,
            touches: l,
            rtlTranslate: c,
            enabled: t
          } = r;
          if (t) {
            let s = n;
            if (s.originalEvent && (s = s.originalEvent), o.isTouched) {
              if (!o.isTouchEvent || "touchmove" === s.type) {
                var n = "touchmove" === s.type && s.targetTouches && (s.targetTouches[0] || s.changedTouches[0]),
                  d = ("touchmove" === s.type ? n : s).pageX,
                  n = ("touchmove" === s.type ? n : s).pageY;
                if (s.preventedByNestedSwiper) {
                  return l.startX = d, void (l.startY = n);
                }
                if (!r.allowTouchMove) {
                  return L(s.target).is(o.focusableElements) || (r.allowClick = !1), void (o.isTouched && (Object.assign(l, {
                    startX: d,
                    startY: n,
                    currentX: d,
                    currentY: n
                  }), o.touchStartTime = v()));
                }
                if (o.isTouchEvent && a.touchReleaseOnEdges && !a.loop) {
                  if (r.isVertical()) {
                    if (n < l.startY && r.translate <= r.maxTranslate() || n > l.startY && r.translate >= r.minTranslate()) {
                      return o.isTouched = !1, void (o.isMoved = !1)
                    }
                  }
                  else if (d < l.startX && r.translate <= r.maxTranslate() || d > l.startX && r.translate >= r.minTranslate()) {
                    return;
                  }
                }
                if (o.isTouchEvent && e.activeElement && s.target === e.activeElement && L(s.target).is(o.focusableElements)) {
                  return o.isMoved = !0, void (r.allowClick = !1);
                }
                if (o.allowTouchCallbacks && r.emit("touchMove", s), !(s.targetTouches && 1 < s.targetTouches.length)) {
                  l.currentX = d, l.currentY = n;
                  var i, d = l.currentX - l.startX, n = l.currentY - l.startY;
                  if (!(r.params.threshold && Math.sqrt(d ** 2 + n ** 2) < r.params.threshold)) {
                    if (void 0 === o.isScrolling && (r.isHorizontal() && l.currentY === l.startY || r.isVertical() && l.currentX === l.startX ? o.isScrolling = !1 : 25 <= d * d + n * n && (i = 180 * Math.atan2(Math.abs(n), Math.abs(d)) / Math.PI, o.isScrolling = r.isHorizontal() ? i > a.touchAngle : 90 - i > a.touchAngle)), o.isScrolling && r.emit("touchMoveOpposite", s), void 0 !== o.startMoving || l.currentX === l.startX && l.currentY === l.startY || (o.startMoving = !0), o.isScrolling) {
                      o.isTouched = !1;
                    }
                    else if (o.startMoving) {
                      r.allowClick = !1, !a.cssMode && s.cancelable && s.preventDefault(), a.touchMoveStopPropagation && !a.nested && s.stopPropagation(), o.isMoved || (a.loop && !a.cssMode && r.loopFix(), o.startTranslate = r.getTranslate(), r.setTransition(0), r.animating && r.$wrapperEl.trigger("webkitTransitionEnd transitionend"), o.allowMomentumBounce = !1, !a.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", s)), r.emit("sliderMove", s), o.isMoved = !0;
                      let e = r.isHorizontal() ? d : n,
                        t = (l.diff = e, e *= a.touchRatio, c && (e = -e), r.swipeDirection = 0 < e ? "prev" : "next", o.currentTranslate = e + o.startTranslate, !0),
                        i = a.resistanceRatio;
                      if (a.touchReleaseOnEdges && (i = 0), 0 < e && o.currentTranslate > r.minTranslate() ? (t = !1, a.resistance && (o.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + o.startTranslate + e) ** i)) : e < 0 && o.currentTranslate < r.maxTranslate() && (t = !1, a.resistance && (o.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - o.startTranslate - e) ** i)), t && (s.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && o.currentTranslate < o.startTranslate && (o.currentTranslate = o.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && o.currentTranslate > o.startTranslate && (o.currentTranslate = o.startTranslate), r.allowSlidePrev || r.allowSlideNext || (o.currentTranslate = o.startTranslate), 0 < a.threshold) {
                        if (!(Math.abs(e) > a.threshold || o.allowThresholdMove)) {
                          return void (o.currentTranslate = o.startTranslate);
                        }
                        if (!o.allowThresholdMove) {
                          return o.allowThresholdMove = !0, l.startX = l.currentX, l.startY = l.currentY, o.currentTranslate = o.startTranslate, void (l.diff = r.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY)
                        }
                      }
                      a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && r.freeMode || a.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), r.params.freeMode && a.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(o.currentTranslate), r.setTranslate(o.currentTranslate))
                    }
                  }
                }
              }
            }
            else {
              o.startMoving && o.isScrolling && r.emit("touchMoveOpposite", s)
            }
          }
        }.bind(e), e.onTouchEnd = function (r) {
          const o = this, e = o.touchEventsData, {
            params: a,
            touches: t,
            rtlTranslate: i,
            slidesGrid: l,
            enabled: s
          } = o;
          if (s) {
            let n = r;
            if (n.originalEvent && (n = n.originalEvent), e.allowTouchCallbacks && o.emit("touchEnd", n), e.allowTouchCallbacks = !1, !e.isTouched) {
              return e.isMoved && a.grabCursor && o.setGrabCursor(!1), e.isMoved = !1, void (e.startMoving = !1);
            }
            a.grabCursor && e.isMoved && e.isTouched && (!0 === o.allowSlideNext || !0 === o.allowSlidePrev) && o.setGrabCursor(!1);
            var c, d = v(), u = d - e.touchStartTime;
            if (o.allowClick) {
              const r = n.path || n.composedPath && n.composedPath();
              o.updateClickedSlide(r && r[0] || n.target), o.emit("tap click", n), u < 300 && d - e.lastClickTime < 300 && o.emit("doubleTap doubleClick", n)
            }
            if (e.lastClickTime = v(), S(() => {
              o.destroyed || (o.allowClick = !0)
            }), !e.isTouched || !e.isMoved || !o.swipeDirection || 0 === t.diff || e.currentTranslate === e.startTranslate) {
              return e.isTouched = !1, e.isMoved = !1, void (e.startMoving = !1);
            }
            if (e.isTouched = !1, e.isMoved = !1, e.startMoving = !1, c = a.followFinger ? i ? o.translate : -o.translate : -e.currentTranslate, !a.cssMode) {
              if (o.params.freeMode && a.freeMode.enabled) {
                o.freeMode.onTouchEnd({currentPos: c});
              }
              else {
                let t = 0, i = o.slidesSizesGrid[0];
                for (let e = 0; e < l.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
                  const o = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                  void 0 !== l[e + o] ? c >= l[e] && c < l[e + o] && (t = e, i = l[e + o] - l[e]) : c >= l[e] && (t = e, i = l[l.length - 1] - l[l.length - 2])
                }
                let e = null, s = null;
                a.rewind && (o.isBeginning ? s = o.params.virtual && o.params.virtual.enabled && o.virtual ? o.virtual.slides.length - 1 : o.slides.length - 1 : o.isEnd && (e = 0));
                r = (c - l[t]) / i, d = t < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                u > a.longSwipesMs ? a.longSwipes ? ("next" === o.swipeDirection && (r >= a.longSwipesRatio ? o.slideTo(a.rewind && o.isEnd ? e : t + d) : o.slideTo(t)), "prev" === o.swipeDirection && (r > 1 - a.longSwipesRatio ? o.slideTo(t + d) : null !== s && r < 0 && Math.abs(r) > a.longSwipesRatio ? o.slideTo(s) : o.slideTo(t))) : o.slideTo(o.activeIndex) : a.shortSwipes ? !o.navigation || n.target !== o.navigation.nextEl && n.target !== o.navigation.prevEl ? ("next" === o.swipeDirection && o.slideTo(null !== e ? e : t + d), "prev" === o.swipeDirection && o.slideTo(null !== s ? s : t)) : n.target === o.navigation.nextEl ? o.slideTo(t + d) : o.slideTo(t) : o.slideTo(o.activeIndex)
              }
            }
          }
        }.bind(e), i.cssMode && (e.onScroll = function () {
          var e = this, {wrapperEl: t, rtlTranslate: i, enabled: s} = e;
          s && (e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses(), (0 == (s = e.maxTranslate() - e.minTranslate()) ? 0 : (e.translate - e.minTranslate()) / s) !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1))
        }.bind(e)), e.onClick = function (e) {
          this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
        }.bind(e), s.touch && !p && (t.addEventListener("touchstart", j), p = !0), g(e, "on")
      }, detachEvents: function () {
        g(this, "off")
      }
    }, breakpoints: {
      setBreakpoint: function () {
        const s = this, {
          activeIndex: e,
          initialized: t,
          loopedSlides: i = 0,
          params: n,
          $el: r
        } = s, o = n.breakpoints;
        if (o && 0 !== Object.keys(o).length) {
          var a = s.getBreakpoint(o, s.params.breakpointsBase, s.el);
          if (a && s.currentBreakpoint !== a) {
            const d = (a in o ? o[a] : void 0) || s.originalParams, u = b(s, n),
              h = b(s, d), p = n.enabled;
            u && !h ? (r.removeClass(`${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`), s.emitContainerClasses()) : !u && h && (r.addClass(n.containerModifierClass + "grid"), (d.grid.fill && "column" === d.grid.fill || !d.grid.fill && "column" === n.grid.fill) && r.addClass(n.containerModifierClass + "grid-column"), s.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(e => {
              var t = n[e] && n[e].enabled, i = d[e] && d[e].enabled;
              t && !i && s[e].disable(), !t && i && s[e].enable()
            });
            var l = d.direction && d.direction !== n.direction,
              c = n.loop && (d.slidesPerView !== n.slidesPerView || l),
              l = (l && t && s.changeDirection(), m(s.params, d), s.params.enabled);
            Object.assign(s, {
              allowTouchMove: s.params.allowTouchMove,
              allowSlideNext: s.params.allowSlideNext,
              allowSlidePrev: s.params.allowSlidePrev
            }), p && !l ? s.disable() : !p && l && s.enable(), s.currentBreakpoint = a, s.emit("_beforeBreakpoint", d), c && t && (s.loopDestroy(), s.loopCreate(), s.updateSlides(), s.slideTo(e - i + s.loopedSlides, 0, !1)), s.emit("breakpoint", d)
          }
        }
      }, getBreakpoint: function (e, i, s) {
        if (void 0 === i && (i = "window"), e && ("container" !== i || s)) {
          let t = !1;
          const n = I(), r = "window" === i ? n.innerHeight : s.clientHeight,
            o = Object.keys(e).map(e => {
              var t;
              return "string" == typeof e && 0 === e.indexOf("@") ? (t = parseFloat(e.substr(1)), {
                value: r * t,
                point: e
              }) : {value: e, point: e}
            });
          o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < o.length; e += 1) {
            const {point: I, value: r} = o[e];
            "window" === i ? n.matchMedia(`(min-width: ${r}px)`).matches && (t = I) : r <= s.clientWidth && (t = I)
          }
          return t || "max"
        }
      }
    }, checkOverflow: {
      checkOverflow: function () {
        const e = this, {isLocked: t, params: i} = e,
          s = i["slidesOffsetBefore"];
        if (s) {
          const t = e.slides.length - 1,
            i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
          e.isLocked = e.size > i
        }
        else {
          e.isLocked = 1 === e.snapGrid.length;
        }
        !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
      }
    }, classes: {
      addClasses: function () {
        const {
          classNames: e,
          params: t,
          rtl: i,
          $el: s,
          device: n,
          support: r
        } = this, o = function (e, i) {
          const s = [];
          return e.forEach(t => {
            "object" == typeof t ? Object.keys(t).forEach(e => {
              t[e] && s.push(i + e)
            }) : "string" == typeof t && s.push(i + t)
          }), s
        }(["initialized", t.direction, {"pointer-events": !r.touch}, {"free-mode": this.params.freeMode && t.freeMode.enabled}, {autoheight: t.autoHeight}, {rtl: i}, {grid: t.grid && 1 < t.grid.rows}, {"grid-column": t.grid && 1 < t.grid.rows && "column" === t.grid.fill}, {android: n.android}, {ios: n.ios}, {"css-mode": t.cssMode}, {centered: t.cssMode && t.centeredSlides}, {"watch-progress": t.watchSlidesProgress}], t.containerModifierClass);
        e.push(...o), s.addClass([...e].join(" ")), this.emitContainerClasses()
      }, removeClasses: function () {
        const {$el: e, classNames: t} = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses()
      }
    }, images: {
      loadImage: function (e, t, i, s, n, r) {
        const o = I();
        let a;

        function l() {
          r && r()
        }

        !(L(e).parent("picture")[0] || e.complete && n) && t ? ((a = new o.Image).onload = l, a.onerror = l, s && (a.sizes = s), i && (a.srcset = i), t && (a.src = t)) : l()
      }, preloadImages: function () {
        const t = this;

        function i() {
          null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
        }

        t.imagesToLoad = t.$el.find("img");
        for (let e = 0; e < t.imagesToLoad.length; e += 1) {
          const s = t.imagesToLoad[e];
          t.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, i)
        }
      }
    }
  }, _ = {};

  class T {
    constructor() {
      let t, i;
      for (var p, e = arguments.length, s = new Array(e), n = 0; n < e; n++) {
        s[n] = arguments[n];
      }
      if (1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? i = s[0] : [t, i] = s, i = m({}, i = i || {}), t && !i.el && (i.el = t), i.el && 1 < L(i.el).length) {
        const t = [];
        return L(i.el).each(e => {
          e = m({}, i, {el: e});
          t.push(new T(e))
        }), t
      }
      const r = this,
        o = (r.__swiper__ = !0, r.support = f(), r.device = (void 0 === (p = {userAgent: i.userAgent}) && (p = {}), d = d || function () {
          var e = (void 0 === p ? {} : p)["userAgent"];
          const t = f(), i = I(), s = i.navigator.platform,
            n = e || i.navigator.userAgent, r = {ios: !1, android: !1},
            o = i.screen.width, a = i.screen.height,
            l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let c = n.match(/(iPad).*OS\s([\d_]+)/);
          var e = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            d = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), u = "Win32" === s;
          let h = "MacIntel" === s;
          return !c && h && t.touch && 0 <= ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + a) && (c = (c = n.match(/(Version)\/([\d.]+)/)) || [0, 1, "13_0_0"], h = !1), l && !u && (r.os = "android", r.android = !0), (c || d || e) && (r.os = "ios", r.ios = !0), r
        }()), r.browser = u = u || function () {
          const t = I();
          return {
            isSafari: function () {
              const e = t.navigator.userAgent.toLowerCase();
              return 0 <= e.indexOf("safari") && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
          }
        }(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules), {});
      r.modules.forEach(e => {
        var s, n;
        e({
          swiper: r,
          extendParams: (s = i, n = o, function (e) {
            void 0 === e && (e = {});
            var t = Object.keys(e)[0], i = e[t];
            "object" == typeof i && null !== i && (0 <= ["navigation", "pagination", "scrollbar"].indexOf(t) && !0 === s[t] && (s[t] = {auto: !0}), t in s && "enabled" in i && (!0 === s[t] && (s[t] = {enabled: !0}), "object" != typeof s[t] || "enabled" in s[t] || (s[t].enabled = !0), s[t] || (s[t] = {enabled: !1}))), m(n, e)
          }),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r)
        })
      });
      var a, l = m({}, w, o);
      return r.params = m({}, l, _, i), r.originalParams = m({}, r.params), r.passedParams = m({}, i), r.params && r.params.on && Object.keys(r.params.on).forEach(e => {
        r.on(e, r.params.on[e])
      }), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = L, Object.assign(r, {
        enabled: r.params.enabled,
        el: t,
        classNames: [],
        slides: L(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: () => "horizontal" === r.params.direction,
        isVertical: () => "vertical" === r.params.direction,
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: r.params.allowSlideNext,
        allowSlidePrev: r.params.allowSlidePrev,
        touchEvents: (l = ["touchstart", "touchmove", "touchend", "touchcancel"], a = ["pointerdown", "pointermove", "pointerup"], r.touchEventsTouch = {
          start: l[0],
          move: l[1],
          end: l[2],
          cancel: l[3]
        }, r.touchEventsDesktop = {
          start: a[0],
          move: a[1],
          end: a[2]
        }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: r.params.focusableElements,
          lastClickTime: v(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: !0,
        allowTouchMove: r.params.allowTouchMove,
        touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
        imagesToLoad: [],
        imagesLoaded: 0
      }), r.emit("_swiper"), r.params.init && r.init(), r
    }

    static get extendedDefaults() {
      return _
    }

    static get defaults() {
      return w
    }

    static extendDefaults(e) {
      m(_, e)
    }

    static installModule(e) {
      T.prototype.__modules__ || (T.prototype.__modules__ = []);
      const t = T.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
    }

    static use(e) {
      return Array.isArray(e) ? e.forEach(e => T.installModule(e)) : T.installModule(e), T
    }

    enable() {
      this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
    }

    disable() {
      this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
    }

    setProgress(e, t) {
      e = Math.min(Math.max(e, 0), 1);
      var i = this.minTranslate(), e = (this.maxTranslate() - i) * e + i;
      this.translateTo(e, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
    }

    emitContainerClasses() {
      const t = this;
      if (t.params._emitClasses && t.el) {
        const e = t.el.className.split(" ").filter(e => 0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass));
        t.emit("_containerClasses", e.join(" "))
      }
    }

    getSlideClasses(e) {
      const t = this;
      return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
    }

    emitSlidesClasses() {
      const i = this;
      if (i.params._emitClasses && i.el) {
        const s = [];
        i.slides.each(e => {
          var t = i.getSlideClasses(e);
          s.push({slideEl: e, classNames: t}), i.emit("_slideClass", e, t)
        }), i.emit("_slideClasses", s)
      }
    }

    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      var {
        params: i,
        slides: s,
        slidesGrid: n,
        slidesSizesGrid: r,
        size: o,
        activeIndex: a
      } = this;
      let l = 1;
      if (i.centeredSlides) {
        let t, i = s[a].swiperSlideSize;
        for (let e = a + 1; e < s.length; e += 1) {
          s[e] && !t && (i += s[e].swiperSlideSize, l += 1, i > o && (t = !0));
        }
        for (let e = a - 1; 0 <= e; --e) {
          s[e] && !t && (i += s[e].swiperSlideSize, l += 1, i > o && (t = !0))
        }
      }
      else if ("current" === e) {
        for (let e = a + 1; e < s.length; e += 1) {
          (t ? n[e] + r[e] - n[a] < o : n[e] - n[a] < o) && (l += 1);
        }
      }
      else {
        for (let e = a - 1; 0 <= e; --e) {
          n[a] - n[e] < o && (l += 1);
        }
      }
      return l
    }

    update() {
      const t = this;
      var e, i;

      function s() {
        var e = t.rtlTranslate ? -1 * t.translate : t.translate,
          e = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
        t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses()
      }

      t && !t.destroyed && ({
        snapGrid: e,
        params: i
      } = t, i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode && t.params.freeMode.enabled ? (s(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || 1 < t.params.slidesPerView) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && e !== t.snapGrid && t.checkOverflow(), t.emit("update"))
    }

    changeDirection(t, e) {
      void 0 === e && (e = !0);
      var i = this, s = i.params.direction;
      return (t = t || ("horizontal" === s ? "vertical" : "horizontal")) === s || "horizontal" !== t && "vertical" !== t || (i.$el.removeClass("" + i.params.containerModifierClass + s).addClass("" + i.params.containerModifierClass + t), i.emitContainerClasses(), i.params.direction = t, i.slides.each(e => {
        "vertical" === t ? e.style.width = "" : e.style.height = ""
      }), i.emit("changeDirection"), e && i.update()), i
    }

    changeLanguageDirection(e) {
      var t = this;
      t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(t.params.containerModifierClass + "rtl"), t.el.dir = "rtl") : (t.$el.removeClass(t.params.containerModifierClass + "rtl"), t.el.dir = "ltr"), t.update())
    }

    mount(t) {
      const e = this;
      if (e.mounted) {
        return !0;
      }
      const i = L(t || e.params.el);
      if (!(t = i[0])) {
        return !1;
      }
      t.swiper = e;
      const s = () => "." + (e.params.wrapperClass || "").trim().split(" ").join(".");
      let n = (() => {
        if (t && t.shadowRoot && t.shadowRoot.querySelector) {
          const e = L(t.shadowRoot.querySelector(s()));
          return e.children = e => i.children(e), e
        }
        return (i.children ? i : L(i)).children(s())
      })();
      if (0 === n.length && e.params.createElements) {
        const t = E().createElement("div");
        n = L(t), t.className = e.params.wrapperClass, i.append(t), i.children("." + e.params.slideClass).each(e => {
          n.append(e)
        })
      }
      return Object.assign(e, {
        $el: i,
        el: t,
        $wrapperEl: n,
        wrapperEl: n[0],
        mounted: !0,
        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction"),
        rtlTranslate: "horizontal" === e.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction")),
        wrongRTL: "-webkit-box" === n.css("display")
      }), !0
    }

    init(e) {
      var t = this;
      return t.initialized || !1 !== t.mount(e) && (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
    }

    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const i = this, {params: s, $el: n, $wrapperEl: r, slides: o} = i;
      if (void 0 !== i.params && !i.destroyed) {
        if (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), n.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
          i.off(e)
        }), !1 !== e) {
          i.$el[0].swiper = null;
          {
            const a = i;
            Object.keys(a).forEach(e => {
              try {
                a[e] = null
              }
              catch (e) {
              }
              try {
                delete a[e]
              }
              catch (e) {
              }
            })
          }
        }
        i.destroyed = !0
      }
      return null
    }
  }

  function k(i, s, n, r) {
    const o = E();
    return i.params.createElements && Object.keys(r).forEach(t => {
      if (!n[t] && !0 === n.auto) {
        let e = i.$el.children("." + r[t])[0];
        e || ((e = o.createElement("div")).className = r[t], i.$el.append(e)), n[t] = e, s[t] = e
      }
    }), n
  }

  function A(e) {
    return "." + (e = void 0 === e ? "" : e).trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")
  }

  function M(e) {
    const {
      effect: i,
      swiper: s,
      on: t,
      setTranslate: n,
      setTransition: r,
      overwriteParams: o,
      perspective: a,
      recreateShadows: l,
      getEffectParams: c
    } = e;
    let d;
    t("beforeInit", () => {
      var e;
      s.params.effect === i && (s.classNames.push("" + s.params.containerModifierClass + i), a && a() && s.classNames.push(s.params.containerModifierClass + "3d"), e = o ? o() : {}, Object.assign(s.params, e), Object.assign(s.originalParams, e))
    }), t("setTranslate", () => {
      s.params.effect === i && n()
    }), t("setTransition", (e, t) => {
      s.params.effect === i && r(t)
    }), t("transitionEnd", () => {
      s.params.effect === i && l && c && c().slideShadows && (s.slides.each(e => {
        s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
      }), l())
    }), t("virtualUpdate", () => {
      s.params.effect === i && (s.slides.length || (d = !0), requestAnimationFrame(() => {
        d && s.slides && s.slides.length && (n(), d = !1)
      }))
    })
  }

  function P(e, t) {
    return e.transformEl ? t.find(e.transformEl).css({
      "backface-visibility": "hidden",
      "-webkit-backface-visibility": "hidden"
    }) : t
  }

  function $(e) {
    let {swiper: s, duration: t, transformEl: n, allSlides: r} = e;
    const {slides: o, activeIndex: a, $wrapperEl: l} = s;
    if (s.params.virtualTranslate && 0 !== t) {
      let e, i = !1;
      (e = r ? n ? o.find(n) : o : n ? o.eq(a).find(n) : o.eq(a)).transitionEnd(() => {
        if (!i && s && !s.destroyed) {
          i = !0, s.animating = !1;
          var t = ["webkitTransitionEnd", "transitionend"];
          for (let e = 0; e < t.length; e += 1) {
            l.trigger(t[e])
          }
        }
      })
    }
  }

  function z(e, t, i) {
    const s = "swiper-slide-shadow" + (i ? "-" + i : ""),
      n = e.transformEl ? t.find(e.transformEl) : t;
    let r = n.children("." + s);
    return r.length || (r = L(`<div class="swiper-slide-shadow${i ? "-" + i : ""}"></div>`), n.append(r)), r
  }

  return Object.keys(x).forEach(t => {
    Object.keys(x[t]).forEach(e => {
      T.prototype[e] = x[t][e]
    })
  }), T.use([function (e) {
    let {swiper: r, on: t, emit: i} = e;
    const s = I();
    let n = null, o = null;
    const a = () => {
      r && !r.destroyed && r.initialized && (i("beforeResize"), i("resize"))
    }, l = () => {
      r && !r.destroyed && r.initialized && i("orientationchange")
    };
    t("init", () => {
      r.params.resizeObserver && void 0 !== s.ResizeObserver ? r && !r.destroyed && r.initialized && (n = new ResizeObserver(i => {
        o = s.requestAnimationFrame(() => {
          var {width: e, height: t} = r;
          let s = e, n = t;
          i.forEach(e => {
            var {contentBoxSize: e, contentRect: t, target: i} = e;
            i && i !== r.el || (s = t ? t.width : (e[0] || e).inlineSize, n = t ? t.height : (e[0] || e).blockSize)
          }), s === e && n === t || a()
        })
      })).observe(r.el) : (s.addEventListener("resize", a), s.addEventListener("orientationchange", l))
    }), t("destroy", () => {
      o && s.cancelAnimationFrame(o), n && n.unobserve && r.el && (n.unobserve(r.el), n = null), s.removeEventListener("resize", a), s.removeEventListener("orientationchange", l)
    })
  }, function (e) {
    let {swiper: i, extendParams: t, on: s, emit: n} = e;

    function r(e, t) {
      void 0 === t && (t = {});
      const i = new (a.MutationObserver || a.WebkitMutationObserver)(e => {
        var t;
        1 === e.length ? n("observerUpdate", e[0]) : (t = function () {
          n("observerUpdate", e[0])
        }, a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0))
      });
      i.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), o.push(i)
    }

    const o = [], a = I();
    t({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), s("init", () => {
      if (i.params.observer) {
        if (i.params.observeParents) {
          var t = i.$el.parents();
          for (let e = 0; e < t.length; e += 1) {
            r(t[e])
          }
        }
        r(i.$el[0], {childList: i.params.observeSlideChildren}), r(i.$wrapperEl[0], {attributes: !1})
      }
    }), s("destroy", () => {
      o.forEach(e => {
        e.disconnect()
      }), o.splice(0, o.length)
    })
  }]), T.use([function (e) {
    let t, {swiper: x, extendParams: i, on: s, emit: _} = e;

    function T(e, t) {
      const i = x.params.virtual;
      if (i.cache && x.virtual.cache[t]) {
        return x.virtual.cache[t];
      }
      const s = i.renderSlide ? L(i.renderSlide.call(x, e, t)) : L(`<div class="${x.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
      return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (x.virtual.cache[t] = s), s
    }

    function o(t) {
      const {
        slidesPerView: e,
        slidesPerGroup: i,
        centeredSlides: s
      } = x.params, {
        addSlidesBefore: n,
        addSlidesAfter: r
      } = x.params.virtual, {
        from: o,
        to: a,
        slides: l,
        slidesGrid: c,
        offset: d
      } = x.virtual;
      x.params.cssMode || x.updateActiveIndex();
      var u = x.activeIndex || 0;
      let h, p, m;
      h = x.rtlTranslate ? "right" : x.isHorizontal() ? "left" : "top", m = s ? (p = Math.floor(e / 2) + i + r, Math.floor(e / 2) + i + n) : (p = e + (i - 1) + r, i + n);
      const f = Math.max((u || 0) - m, 0),
        g = Math.min((u || 0) + p, l.length - 1),
        v = (x.slidesGrid[f] || 0) - (x.slidesGrid[0] || 0);

      function y() {
        x.updateSlides(), x.updateProgress(), x.updateSlidesClasses(), x.lazy && x.params.lazy.enabled && x.lazy.load(), _("virtualUpdate")
      }

      if (Object.assign(x.virtual, {
        from: f,
        to: g,
        offset: v,
        slidesGrid: x.slidesGrid
      }), o === f && a === g && !t) {
        return x.slidesGrid !== c && v !== d && x.slides.css(h, v + "px"), x.updateProgress(), void _("virtualUpdate");
      }
      if (x.params.virtual.renderExternal) {
        return x.params.virtual.renderExternal.call(x, {
          offset: v,
          from: f,
          to: g,
          slides: function () {
            const t = [];
            for (let e = f; e <= g; e += 1) {
              t.push(l[e]);
            }
            return t
          }()
        }), void (x.params.virtual.renderExternalUpdate ? y() : _("virtualUpdate"));
      }
      const b = [], w = [];
      if (t) {
        x.$wrapperEl.find("." + x.params.slideClass).remove();
      }
      else {
        for (let e = o; e <= a; e += 1) {
          (e < f || e > g) && x.$wrapperEl.find(`.${x.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
        }
      }
      for (let e = 0; e < l.length; e += 1) {
        e >= f && e <= g && (void 0 === a || t ? w.push(e) : (e > a && w.push(e), e < o && b.push(e)));
      }
      w.forEach(e => {
        x.$wrapperEl.append(T(l[e], e))
      }), b.sort((e, t) => t - e).forEach(e => {
        x.$wrapperEl.prepend(T(l[e], e))
      }), x.$wrapperEl.children(".swiper-slide").css(h, v + "px"), y()
    }

    i({
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    }), x.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: []
    }, s("beforeInit", () => {
      x.params.virtual.enabled && (x.virtual.slides = x.params.virtual.slides, x.classNames.push(x.params.containerModifierClass + "virtual"), x.params.watchSlidesProgress = !0, x.originalParams.watchSlidesProgress = !0, x.params.initialSlide || o())
    }), s("setTranslate", () => {
      x.params.virtual.enabled && (x.params.cssMode && !x._immediateVirtual ? (clearTimeout(t), t = setTimeout(() => {
        o()
      }, 100)) : o())
    }), s("init update resize", () => {
      x.params.virtual.enabled && x.params.cssMode && C(x.wrapperEl, "--swiper-virtual-size", x.virtualSize + "px")
    }), Object.assign(x.virtual, {
      appendSlide: function (t) {
        if ("object" == typeof t && "length" in t) {
          for (let e = 0; e < t.length; e += 1) {
            t[e] && x.virtual.slides.push(t[e]);
          }
        }
        else {
          x.virtual.slides.push(t);
        }
        o(!0)
      }, prependSlide: function (s) {
        const n = x.activeIndex;
        let e = n + 1, r = 1;
        if (Array.isArray(s)) {
          for (let e = 0; e < s.length; e += 1) {
            s[e] && x.virtual.slides.unshift(s[e]);
          }
          e = n + s.length, r = s.length
        }
        else {
          x.virtual.slides.unshift(s);
        }
        if (x.params.virtual.cache) {
          const s = x.virtual.cache, n = {};
          Object.keys(s).forEach(e => {
            const t = s[e], i = t.attr("data-swiper-slide-index");
            i && t.attr("data-swiper-slide-index", parseInt(i, 10) + r), n[parseInt(e, 10) + r] = t
          }), x.virtual.cache = n
        }
        o(!0), x.slideTo(e, 0)
      }, removeSlide: function (i) {
        if (null != i) {
          let t = x.activeIndex;
          if (Array.isArray(i)) {
            for (let e = i.length - 1; 0 <= e; --e) {
              x.virtual.slides.splice(i[e], 1), x.params.virtual.cache && delete x.virtual.cache[i[e]], i[e] < t && --t, t = Math.max(t, 0);
            }
          }
          else {
            x.virtual.slides.splice(i, 1), x.params.virtual.cache && delete x.virtual.cache[i], i < t && --t, t = Math.max(t, 0);
          }
          o(!0), x.slideTo(t, 0)
        }
      }, removeAllSlides: function () {
        x.virtual.slides = [], x.params.virtual.cache && (x.virtual.cache = {}), o(!0), x.slideTo(0, 0)
      }, update: o
    })
  }, function (e) {
    let {swiper: u, extendParams: t, on: i, emit: h} = e;
    const p = E(), m = I();

    function s(t) {
      if (u.enabled) {
        const i = u["rtlTranslate"];
        let e = t;
        const s = (e = e.originalEvent ? e.originalEvent : e).keyCode || e.charCode,
          n = u.params.keyboard.pageUpDown, r = n && 33 === s,
          o = n && 34 === s, a = 37 === s, l = 39 === s, c = 38 === s,
          d = 40 === s;
        if (!u.allowSlideNext && (u.isHorizontal() && l || u.isVertical() && d || o)) {
          return !1;
        }
        if (!u.allowSlidePrev && (u.isHorizontal() && a || u.isVertical() && c || r)) {
          return !1;
        }
        if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || p.activeElement && p.activeElement.nodeName && ("input" === p.activeElement.nodeName.toLowerCase() || "textarea" === p.activeElement.nodeName.toLowerCase()))) {
          if (u.params.keyboard.onlyInViewport && (r || o || a || l || c || d)) {
            let t = !1;
            if (0 < u.$el.parents("." + u.params.slideClass).length && 0 === u.$el.parents("." + u.params.slideActiveClass).length) {
              return;
            }
            const e = u.$el, s = e[0].clientWidth, n = e[0].clientHeight,
              h = m.innerWidth, p = m.innerHeight, r = u.$el.offset(),
              o = (i && (r.left -= u.$el[0].scrollLeft), [[r.left, r.top], [r.left + s, r.top], [r.left, r.top + n], [r.left + s, r.top + n]]);
            for (let e = 0; e < o.length; e += 1) {
              const i = o[e];
              0 <= i[0] && i[0] <= h && 0 <= i[1] && i[1] <= p && (0 === i[0] && 0 === i[1] || (t = !0))
            }
            if (!t) {
              return
            }
          }
          u.isHorizontal() ? ((r || o || a || l) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), ((o || l) && !i || (r || a) && i) && u.slideNext(), ((r || a) && !i || (o || l) && i) && u.slidePrev()) : ((r || o || c || d) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (o || d) && u.slideNext(), (r || c) && u.slidePrev()), h("keyPress", s)
        }
      }
    }

    function n() {
      u.keyboard.enabled || (L(p).on("keydown", s), u.keyboard.enabled = !0)
    }

    function r() {
      u.keyboard.enabled && (L(p).off("keydown", s), u.keyboard.enabled = !1)
    }

    u.keyboard = {enabled: !1}, t({
      keyboard: {
        enabled: !1,
        onlyInViewport: !0,
        pageUpDown: !0
      }
    }), i("init", () => {
      u.params.keyboard.enabled && n()
    }), i("destroy", () => {
      u.keyboard.enabled && r()
    }), Object.assign(u.keyboard, {enable: n, disable: r})
  }, function (e) {
    let {swiper: c, extendParams: t, on: i, emit: d} = e;
    const s = I();
    let u;
    t({
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null
      }
    }), c.mousewheel = {enabled: !1};
    let h, n = v();
    const p = [];

    function r() {
      c.enabled && (c.mouseEntered = !0)
    }

    function o() {
      c.enabled && (c.mouseEntered = !1)
    }

    function m(e) {
      c.params.mousewheel.thresholdDelta && e.delta < c.params.mousewheel.thresholdDelta || c.params.mousewheel.thresholdTime && v() - n < c.params.mousewheel.thresholdTime || 6 <= e.delta && v() - n < 60 || (e.direction < 0 ? c.isEnd && !c.params.loop || c.animating || (c.slideNext(), d("scroll", e.raw)) : c.isBeginning && !c.params.loop || c.animating || (c.slidePrev(), d("scroll", e.raw)), n = (new s.Date).getTime())
    }

    function a(s) {
      let n = s, r = !0;
      if (c.enabled) {
        var o = c.params.mousewheel;
        c.params.cssMode && n.preventDefault();
        let e = c.$el;
        if ("container" !== c.params.mousewheel.eventsTarget && (e = L(c.params.mousewheel.eventsTarget)), !c.mouseEntered && !e[0].contains(n.target) && !o.releaseOnEdges) {
          return !0;
        }
        n.originalEvent && (n = n.originalEvent);
        let t = 0;
        var a = c.rtlTranslate ? -1 : 1, l = function (e) {
          let t = 0, i = 0, s = 0, n = 0;
          return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, n = 10 * i, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = n, n = 0), (s || n) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, n *= 40) : (s *= 800, n *= 800)), s && !t && (t = s < 1 ? -1 : 1), n && !i && (i = n < 1 ? -1 : 1), {
            spinX: t,
            spinY: i,
            pixelX: s,
            pixelY: n
          }
        }(n);
        if (o.forceToAxis) {
          if (c.isHorizontal()) {
            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) {
              return !0;
            }
            t = -l.pixelX * a
          }
          else {
            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) {
              return !0;
            }
            t = -l.pixelY
          }
        }
        else {
          t = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * a : -l.pixelY;
        }
        if (0 === t) {
          return !0;
        }
        o.invert && (t = -t);
        let i = c.getTranslate() + t * o.sensitivity;
        if ((i = i >= c.minTranslate() ? c.minTranslate() : i) <= c.maxTranslate() && (i = c.maxTranslate()), (r = !!c.params.loop || !(i === c.minTranslate() || i === c.maxTranslate())) && c.params.nested && n.stopPropagation(), c.params.freeMode && c.params.freeMode.enabled) {
          const s = {time: v(), delta: Math.abs(t), direction: Math.sign(t)},
            r = h && s.time < h.time + 500 && s.delta <= h.delta && s.direction === h.direction;
          if (!r) {
            h = void 0, c.params.loop && c.loopFix();
            let e = c.getTranslate() + t * o.sensitivity;
            const L = c.isBeginning, v = c.isEnd;
            if ((e = e >= c.minTranslate() ? c.minTranslate() : e) <= c.maxTranslate() && (e = c.maxTranslate()), c.setTransition(0), c.setTranslate(e), c.updateProgress(), c.updateActiveIndex(), c.updateSlidesClasses(), (!L && c.isBeginning || !v && c.isEnd) && c.updateSlidesClasses(), c.params.freeMode.sticky) {
              clearTimeout(u), u = void 0, 15 <= p.length && p.shift();
              const n = p.length ? p[p.length - 1] : void 0, r = p[0];
              if (p.push(s), n && (s.delta > n.delta || s.direction !== n.direction)) {
                p.splice(0);
              }
              else if (15 <= p.length && s.time - r.time < 500 && 1 <= r.delta - s.delta && s.delta <= 6) {
                const n = 0 < t ? .8 : .2;
                h = s, p.splice(0), u = S(() => {
                  c.slideToClosest(c.params.speed, !0, void 0, n)
                }, 0)
              }
              u = u || S(() => {
                h = s, p.splice(0), c.slideToClosest(c.params.speed, !0, void 0, .5)
              }, 500)
            }
            if (r || d("scroll", n), c.params.autoplay && c.params.autoplayDisableOnInteraction && c.autoplay.stop(), e === c.minTranslate() || e === c.maxTranslate()) {
              return !0
            }
          }
        }
        else {
          const n = {
              time: v(),
              delta: Math.abs(t),
              direction: Math.sign(t),
              raw: s
            },
            r = (2 <= p.length && p.shift(), p.length ? p[p.length - 1] : void 0);
          if (p.push(n), (!r || n.direction !== r.direction || n.delta > r.delta || n.time > r.time + 150) && m(n), function (e) {
            var t = c.params.mousewheel;
            if (e.direction < 0) {
              if (c.isEnd && !c.params.loop && t.releaseOnEdges) {
                return 1
              }
            }
            else if (c.isBeginning && !c.params.loop && t.releaseOnEdges) {
              return 1
            }
          }(n)) {
            return !0
          }
        }
        return n.preventDefault ? n.preventDefault() : n.returnValue = !1, !1
      }
    }

    function l(e) {
      let t = c.$el;
      (t = "container" !== c.params.mousewheel.eventsTarget ? L(c.params.mousewheel.eventsTarget) : t)[e]("mouseenter", r), t[e]("mouseleave", o), t[e]("wheel", a)
    }

    function f() {
      return c.params.cssMode ? (c.wrapperEl.removeEventListener("wheel", a), !0) : !c.mousewheel.enabled && (l("on"), c.mousewheel.enabled = !0)
    }

    function g() {
      return c.params.cssMode ? (c.wrapperEl.addEventListener(event, a), !0) : !!c.mousewheel.enabled && (l("off"), !(c.mousewheel.enabled = !1))
    }

    i("init", () => {
      !c.params.mousewheel.enabled && c.params.cssMode && g(), c.params.mousewheel.enabled && f()
    }), i("destroy", () => {
      c.params.cssMode && f(), c.mousewheel.enabled && g()
    }), Object.assign(c.mousewheel, {enable: f, disable: g})
  }, function (e) {
    let {swiper: r, extendParams: t, on: i, emit: o} = e;

    function s(e) {
      let t;
      return e && (t = L(e), r.params.uniqueNavElements && "string" == typeof e && 1 < t.length && 1 === r.$el.find(e).length && (t = r.$el.find(e))), t
    }

    function n(e, t) {
      var i = r.params.navigation;
      e && 0 < e.length && (e[t ? "addClass" : "removeClass"](i.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t), r.params.watchOverflow && r.enabled && e[r.isLocked ? "addClass" : "removeClass"](i.lockClass))
    }

    function a() {
      var e, t;
      r.params.loop || ({
        $nextEl: e,
        $prevEl: t
      } = r.navigation, n(t, r.isBeginning && !r.params.rewind), n(e, r.isEnd && !r.params.rewind))
    }

    function l(e) {
      e.preventDefault(), r.isBeginning && !r.params.loop && !r.params.rewind || (r.slidePrev(), o("navigationPrev"))
    }

    function c(e) {
      e.preventDefault(), r.isEnd && !r.params.loop && !r.params.rewind || (r.slideNext(), o("navigationNext"))
    }

    function d() {
      var e = r.params.navigation;
      if (r.params.navigation = k(r, r.originalParams.navigation, r.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), e.nextEl || e.prevEl) {
        const t = s(e.nextEl), i = s(e.prevEl);
        t && 0 < t.length && t.on("click", c), i && 0 < i.length && i.on("click", l), Object.assign(r.navigation, {
          $nextEl: t,
          nextEl: t && t[0],
          $prevEl: i,
          prevEl: i && i[0]
        }), r.enabled || (t && t.addClass(e.lockClass), i && i.addClass(e.lockClass))
      }
    }

    function u() {
      const {$nextEl: e, $prevEl: t} = r.navigation;
      e && e.length && (e.off("click", c), e.removeClass(r.params.navigation.disabledClass)), t && t.length && (t.off("click", l), t.removeClass(r.params.navigation.disabledClass))
    }

    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    }), r.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null
    }, i("init", () => {
      !1 === r.params.navigation.enabled ? h() : (d(), a())
    }), i("toEdge fromEdge lock unlock", () => {
      a()
    }), i("destroy", () => {
      u()
    }), i("enable disable", () => {
      const {$nextEl: e, $prevEl: t} = r.navigation;
      e && e[r.enabled ? "removeClass" : "addClass"](r.params.navigation.lockClass), t && t[r.enabled ? "removeClass" : "addClass"](r.params.navigation.lockClass)
    }), i("click", (e, t) => {
      const {$nextEl: i, $prevEl: s} = r.navigation, n = t.target;
      if (r.params.navigation.hideOnClick && !L(n).is(s) && !L(n).is(i) && (!(r.pagination && r.params.pagination && r.params.pagination.clickable) || r.pagination.el !== n && !r.pagination.el.contains(n))) {
        let e;
        i ? e = i.hasClass(r.params.navigation.hiddenClass) : s && (e = s.hasClass(r.params.navigation.hiddenClass)), o(!0 === e ? "navigationShow" : "navigationHide"), i && i.toggleClass(r.params.navigation.hiddenClass), s && s.toggleClass(r.params.navigation.hiddenClass)
      }
    });
    const h = () => {
      r.$el.addClass(r.params.navigation.navigationDisabledClass), u()
    };
    Object.assign(r.navigation, {
      enable: () => {
        r.$el.removeClass(r.params.navigation.navigationDisabledClass), d(), a()
      }, disable: h, update: a, init: d, destroy: u
    })
  }, function (e) {
    let {swiper: c, extendParams: t, on: i, emit: d} = e;
    e = "swiper-pagination";
    let u, h = (t({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: e => e,
        formatFractionTotal: e => e,
        bulletClass: e + "-bullet",
        bulletActiveClass: e + "-bullet-active",
        modifierClass: e + "-",
        currentClass: e + "-current",
        totalClass: e + "-total",
        hiddenClass: e + "-hidden",
        progressbarFillClass: e + "-progressbar-fill",
        progressbarOppositeClass: e + "-progressbar-opposite",
        clickableClass: e + "-clickable",
        lockClass: e + "-lock",
        horizontalClass: e + "-horizontal",
        verticalClass: e + "-vertical",
        paginationDisabledClass: e + "-disabled"
      }
    }), c.pagination = {el: null, $el: null, bullets: []}, 0);

    function r() {
      return !c.params.pagination.el || !c.pagination.el || !c.pagination.$el || 0 === c.pagination.$el.length
    }

    function p(e, t) {
      var i = c.params.pagination["bulletActiveClass"];
      e[t]().addClass(i + "-" + t)[t]().addClass(i + `-${t}-` + t)
    }

    function s() {
      const t = c.rtl, o = c.params.pagination;
      if (!r()) {
        const a = (c.virtual && c.params.virtual.enabled ? c.virtual : c).slides.length,
          l = c.pagination.$el;
        let r;
        var i = c.params.loop ? Math.ceil((a - 2 * c.loopedSlides) / c.params.slidesPerGroup) : c.snapGrid.length;
        if (c.params.loop ? ((r = Math.ceil((c.activeIndex - c.loopedSlides) / c.params.slidesPerGroup)) > a - 1 - 2 * c.loopedSlides && (r -= a - 2 * c.loopedSlides), r > i - 1 && (r -= i), r < 0 && "bullets" !== c.params.paginationType && (r = i + r)) : r = void 0 !== c.snapIndex ? c.snapIndex : c.activeIndex || 0, "bullets" === o.type && c.pagination.bullets && 0 < c.pagination.bullets.length) {
          const a = c.pagination.bullets;
          let s, n, e;
          if (o.dynamicBullets && (u = a.eq(0)[c.isHorizontal() ? "outerWidth" : "outerHeight"](!0), l.css(c.isHorizontal() ? "width" : "height", u * (o.dynamicMainBullets + 4) + "px"), 1 < o.dynamicMainBullets && void 0 !== c.previousIndex && ((h += r - (c.previousIndex - c.loopedSlides || 0)) > o.dynamicMainBullets - 1 ? h = o.dynamicMainBullets - 1 : h < 0 && (h = 0)), s = Math.max(r - h, 0), n = s + (Math.min(a.length, o.dynamicMainBullets) - 1), e = (n + s) / 2), a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => "" + o.bulletActiveClass + e).join(" ")), 1 < l.length) {
            a.each(e => {
              const t = L(e), i = t.index();
              i === r && t.addClass(o.bulletActiveClass), o.dynamicBullets && (i >= s && i <= n && t.addClass(o.bulletActiveClass + "-main"), i === s && p(t, "prev"), i === n && p(t, "next"))
            });
          }
          else {
            const t = a.eq(r), l = t.index();
            if (t.addClass(o.bulletActiveClass), o.dynamicBullets) {
              const t = a.eq(s), u = a.eq(n);
              for (let e = s; e <= n; e += 1) {
                a.eq(e).addClass(o.bulletActiveClass + "-main");
              }
              if (c.params.loop) {
                if (l >= a.length) {
                  for (let e = o.dynamicMainBullets; 0 <= e; --e) {
                    a.eq(a.length - e).addClass(o.bulletActiveClass + "-main");
                  }
                  a.eq(a.length - o.dynamicMainBullets - 1).addClass(o.bulletActiveClass + "-prev")
                }
                else {
                  p(t, "prev"), p(u, "next");
                }
              }
              else {
                p(t, "prev"), p(u, "next")
              }
            }
          }
          if (o.dynamicBullets) {
            const d = Math.min(a.length, o.dynamicMainBullets + 4),
              l = (u * d - u) / 2 - e * u, h = t ? "right" : "left";
            a.css(c.isHorizontal() ? h : "top", l + "px")
          }
        }
        if ("fraction" === o.type && (l.find(A(o.currentClass)).text(o.formatFractionCurrent(r + 1)), l.find(A(o.totalClass)).text(o.formatFractionTotal(i))), "progressbar" === o.type) {
          var s = o.progressbarOpposite ? c.isHorizontal() ? "vertical" : "horizontal" : c.isHorizontal() ? "horizontal" : "vertical";
          const a = (r + 1) / i;
          let e = 1, t = 1;
          "horizontal" == s ? e = a : t = a, l.find(A(o.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${e}) scaleY(${t})`).transition(c.params.speed)
        }
        "custom" === o.type && o.renderCustom ? (l.html(o.renderCustom(c, r + 1, i)), d("paginationRender", l[0])) : d("paginationUpdate", l[0]), c.params.watchOverflow && c.enabled && l[c.isLocked ? "addClass" : "removeClass"](o.lockClass)
      }
    }

    function n() {
      const s = c.params.pagination;
      if (!r()) {
        const e = (c.virtual && c.params.virtual.enabled ? c.virtual : c).slides.length,
          n = c.pagination.$el;
        let i = "";
        if ("bullets" === s.type) {
          let t = c.params.loop ? Math.ceil((e - 2 * c.loopedSlides) / c.params.slidesPerGroup) : c.snapGrid.length;
          c.params.freeMode && c.params.freeMode.enabled && !c.params.loop && t > e && (t = e);
          for (let e = 0; e < t; e += 1) {
            s.renderBullet ? i += s.renderBullet.call(c, e, s.bulletClass) : i += `<${s.bulletElement} class="${s.bulletClass}"></${s.bulletElement}>`;
          }
          n.html(i), c.pagination.bullets = n.find(A(s.bulletClass))
        }
        "fraction" === s.type && (i = s.renderFraction ? s.renderFraction.call(c, s.currentClass, s.totalClass) : `<span class="${s.currentClass}"></span> / <span class="${s.totalClass}"></span>`, n.html(i)), "progressbar" === s.type && (i = s.renderProgressbar ? s.renderProgressbar.call(c, s.progressbarFillClass) : `<span class="${s.progressbarFillClass}"></span>`, n.html(i)), "custom" !== s.type && d("paginationRender", c.pagination.$el[0])
      }
    }

    function o() {
      c.params.pagination = k(c, c.originalParams.pagination, c.params.pagination, {el: "swiper-pagination"});
      const t = c.params.pagination;
      if (t.el) {
        let e = L(t.el);
        0 !== e.length && (c.params.uniqueNavElements && "string" == typeof t.el && 1 < e.length && (1 < (e = c.$el.find(t.el)).length && (e = e.filter(e => L(e).parents(".swiper")[0] === c.el))), "bullets" === t.type && t.clickable && e.addClass(t.clickableClass), e.addClass(t.modifierClass + t.type), e.addClass(c.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (e.addClass("" + t.modifierClass + t.type + "-dynamic"), h = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && e.addClass(t.progressbarOppositeClass), t.clickable && e.on("click", A(t.bulletClass), function (e) {
          e.preventDefault();
          let t = L(this).index() * c.params.slidesPerGroup;
          c.params.loop && (t += c.loopedSlides), c.slideTo(t)
        }), Object.assign(c.pagination, {
          $el: e,
          el: e[0]
        }), c.enabled || e.addClass(t.lockClass))
      }
    }

    function a() {
      var e = c.params.pagination;
      if (!r()) {
        const t = c.pagination.$el;
        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), t.removeClass(c.isHorizontal() ? e.horizontalClass : e.verticalClass), c.pagination.bullets && c.pagination.bullets.removeClass && c.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", A(e.bulletClass))
      }
    }

    i("init", () => {
      !1 === c.params.pagination.enabled ? l() : (o(), n(), s())
    }), i("activeIndexChange", () => {
      !c.params.loop && void 0 !== c.snapIndex || s()
    }), i("snapIndexChange", () => {
      c.params.loop || s()
    }), i("slidesLengthChange", () => {
      c.params.loop && (n(), s())
    }), i("snapGridLengthChange", () => {
      c.params.loop || (n(), s())
    }), i("destroy", () => {
      a()
    }), i("enable disable", () => {
      const e = c.pagination["$el"];
      e && e[c.enabled ? "removeClass" : "addClass"](c.params.pagination.lockClass)
    }), i("lock unlock", () => {
      s()
    }), i("click", (e, t) => {
      const i = t.target, s = c.pagination["$el"];
      if (c.params.pagination.el && c.params.pagination.hideOnClick && s && 0 < s.length && !L(i).hasClass(c.params.pagination.bulletClass) && (!c.navigation || !(c.navigation.nextEl && i === c.navigation.nextEl || c.navigation.prevEl && i === c.navigation.prevEl))) {
        const e = s.hasClass(c.params.pagination.hiddenClass);
        d(!0 === e ? "paginationShow" : "paginationHide"), s.toggleClass(c.params.pagination.hiddenClass)
      }
    });
    const l = () => {
      c.$el.addClass(c.params.pagination.paginationDisabledClass), c.pagination.$el && c.pagination.$el.addClass(c.params.pagination.paginationDisabledClass), a()
    };
    Object.assign(c.pagination, {
      enable: () => {
        c.$el.removeClass(c.params.pagination.paginationDisabledClass), c.pagination.$el && c.pagination.$el.removeClass(c.params.pagination.paginationDisabledClass), o(), n(), s()
      }, disable: l, render: n, update: s, init: o, destroy: a
    })
  }, function (e) {
    let {swiper: c, extendParams: t, on: i, emit: o} = e;
    const d = E();
    let a, l, u, s, h = !1, p = null, m = null;

    function n() {
      if (c.params.scrollbar.el && c.scrollbar.el) {
        const {scrollbar: i, rtlTranslate: s, progress: n} = c, {
          $dragEl: r,
          $el: o
        } = i, a = c.params.scrollbar;
        let e = l, t = (u - l) * n;
        s ? 0 < (t = -t) ? (e = l - t, t = 0) : -t + l > u && (e = u + t) : t < 0 ? (e = l + t, t = 0) : t + l > u && (e = u - t), c.isHorizontal() ? (r.transform(`translate3d(${t}px, 0, 0)`), r[0].style.width = e + "px") : (r.transform(`translate3d(0px, ${t}px, 0)`), r[0].style.height = e + "px"), a.hide && (clearTimeout(p), o[0].style.opacity = 1, p = setTimeout(() => {
          o[0].style.opacity = 0, o.transition(400)
        }, 1e3))
      }
    }

    function r() {
      if (c.params.scrollbar.el && c.scrollbar.el) {
        const e = c["scrollbar"], {$dragEl: t, $el: i} = e;
        t[0].style.width = "", t[0].style.height = "", u = c.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, s = c.size / (c.virtualSize + c.params.slidesOffsetBefore - (c.params.centeredSlides ? c.snapGrid[0] : 0)), l = "auto" === c.params.scrollbar.dragSize ? u * s : parseInt(c.params.scrollbar.dragSize, 10), c.isHorizontal() ? t[0].style.width = l + "px" : t[0].style.height = l + "px", i[0].style.display = 1 <= s ? "none" : "", c.params.scrollbar.hide && (i[0].style.opacity = 0), c.params.watchOverflow && c.enabled && e.$el[c.isLocked ? "addClass" : "removeClass"](c.params.scrollbar.lockClass)
      }
    }

    function f(e) {
      return c.isHorizontal() ? ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientX : ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientY
    }

    function g(e) {
      const {scrollbar: t, rtlTranslate: i} = c, s = t["$el"];
      let n;
      n = (f(e) - s.offset()[c.isHorizontal() ? "left" : "top"] - (null !== a ? a : l / 2)) / (u - l), n = Math.max(Math.min(n, 1), 0), i && (n = 1 - n);
      e = c.minTranslate() + (c.maxTranslate() - c.minTranslate()) * n;
      c.updateProgress(e), c.setTranslate(e), c.updateActiveIndex(), c.updateSlidesClasses()
    }

    function v(e) {
      const t = c.params.scrollbar, {scrollbar: i, $wrapperEl: s} = c, {
        $el: n,
        $dragEl: r
      } = i;
      h = !0, a = e.target === r[0] || e.target === r ? f(e) - e.target.getBoundingClientRect()[c.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), g(e), clearTimeout(m), n.transition(0), t.hide && n.css("opacity", 1), c.params.cssMode && c.$wrapperEl.css("scroll-snap-type", "none"), o("scrollbarDragStart", e)
    }

    function y(e) {
      const {scrollbar: t, $wrapperEl: i} = c, {$el: s, $dragEl: n} = t;
      h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, g(e), i.transition(0), s.transition(0), n.transition(0), o("scrollbarDragMove", e))
    }

    function b(e) {
      const t = c.params.scrollbar, {scrollbar: i, $wrapperEl: s} = c,
        n = i["$el"];
      h && (h = !1, c.params.cssMode && (c.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(m), m = S(() => {
        n.css("opacity", 0), n.transition(400)
      }, 1e3)), o("scrollbarDragEnd", e), t.snapOnRelease && c.slideToClosest())
    }

    function w(e) {
      var {
        scrollbar: t,
        touchEventsTouch: i,
        touchEventsDesktop: s,
        params: n,
        support: r
      } = c, t = t.$el;
      if (t) {
        const o = t[0], a = !(!r.passiveListener || !n.passiveListeners) && {
          passive: !1,
          capture: !1
        }, l = !(!r.passiveListener || !n.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        o && (t = "on" === e ? "addEventListener" : "removeEventListener", r.touch ? (o[t](i.start, v, a), o[t](i.move, y, a), o[t](i.end, b, l)) : (o[t](s.start, v, a), d[t](s.move, y, a), d[t](s.end, b, l)))
      }
    }

    function x() {
      const {scrollbar: i, $el: s} = c;
      c.params.scrollbar = k(c, c.originalParams.scrollbar, c.params.scrollbar, {el: "swiper-scrollbar"});
      var n = c.params.scrollbar;
      if (n.el) {
        let e = L(n.el),
          t = ((e = c.params.uniqueNavElements && "string" == typeof n.el && 1 < e.length && 1 === s.find(n.el).length ? s.find(n.el) : e).addClass(c.isHorizontal() ? n.horizontalClass : n.verticalClass), e.find("." + c.params.scrollbar.dragClass));
        0 === t.length && (t = L(`<div class="${c.params.scrollbar.dragClass}"></div>`), e.append(t)), Object.assign(i, {
          $el: e,
          el: e[0],
          $dragEl: t,
          dragEl: t[0]
        }), n.draggable && c.params.scrollbar.el && c.scrollbar.el && w("on"), e && e[c.enabled ? "removeClass" : "addClass"](c.params.scrollbar.lockClass)
      }
    }

    function _() {
      const e = c.params.scrollbar, t = c.scrollbar.$el;
      t && t.removeClass(c.isHorizontal() ? e.horizontalClass : e.verticalClass), c.params.scrollbar.el && c.scrollbar.el && w("off")
    }

    t({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical"
      }
    }), c.scrollbar = {
      el: null,
      dragEl: null,
      $el: null,
      $dragEl: null
    }, i("init", () => {
      !1 === c.params.scrollbar.enabled ? T() : (x(), r(), n())
    }), i("update resize observerUpdate lock unlock", () => {
      r()
    }), i("setTranslate", () => {
      n()
    }), i("setTransition", (e, t) => {
      t = t, c.params.scrollbar.el && c.scrollbar.el && c.scrollbar.$dragEl.transition(t)
    }), i("enable disable", () => {
      const e = c.scrollbar["$el"];
      e && e[c.enabled ? "removeClass" : "addClass"](c.params.scrollbar.lockClass)
    }), i("destroy", () => {
      _()
    });
    const T = () => {
      c.$el.addClass(c.params.scrollbar.scrollbarDisabledClass), c.scrollbar.$el && c.scrollbar.$el.addClass(c.params.scrollbar.scrollbarDisabledClass), _()
    };
    Object.assign(c.scrollbar, {
      enable: () => {
        c.$el.removeClass(c.params.scrollbar.scrollbarDisabledClass), c.scrollbar.$el && c.scrollbar.$el.removeClass(c.params.scrollbar.scrollbarDisabledClass), x(), r(), n()
      }, disable: T, updateSize: r, setTranslate: n, init: x, destroy: _
    })
  }, function (e) {
    let {swiper: d, extendParams: t, on: i} = e;
    t({parallax: {enabled: !1}});
    const r = (e, t) => {
      const i = d["rtl"], s = L(e), n = i ? -1 : 1,
        r = s.attr("data-swiper-parallax") || "0";
      let o = s.attr("data-swiper-parallax-x"),
        a = s.attr("data-swiper-parallax-y");
      var l = s.attr("data-swiper-parallax-scale"),
        c = s.attr("data-swiper-parallax-opacity");
      if (o || a ? (o = o || "0", a = a || "0") : d.isHorizontal() ? (o = r, a = "0") : (a = r, o = "0"), o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t * n + "%" : o * t * n + "px", a = 0 <= a.indexOf("%") ? parseInt(a, 10) * t + "%" : a * t + "px", null != c) {
        const e = c - (c - 1) * (1 - Math.abs(t));
        s[0].style.opacity = e
      }
      if (null == l) {
        s.transform(`translate3d(${o}, ${a}, 0px)`);
      }
      else {
        const e = l - (l - 1) * (1 - Math.abs(t));
        s.transform(`translate3d(${o}, ${a}, 0px) scale(${e})`)
      }
    }, s = () => {
      const {$el: e, slides: t, progress: s, snapGrid: n} = d;
      e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
        r(e, s)
      }), t.each((e, t) => {
        let i = e.progress;
        1 < d.params.slidesPerGroup && "auto" !== d.params.slidesPerView && (i += Math.ceil(t / 2) - s * (n.length - 1)), i = Math.min(Math.max(i, -1), 1), L(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
          r(e, i)
        })
      })
    };
    i("beforeInit", () => {
      d.params.parallax.enabled && (d.params.watchSlidesProgress = !0, d.originalParams.watchSlidesProgress = !0)
    }), i("init", () => {
      d.params.parallax.enabled && s()
    }), i("setTranslate", () => {
      d.params.parallax.enabled && s()
    }), i("setTransition", (e, t) => {
      if (d.params.parallax.enabled) {
        var s = t;
        void 0 === s && (s = d.params.speed);
        const i = d["$el"];
        i.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
          const t = L(e);
          let i = parseInt(t.attr("data-swiper-parallax-duration"), 10) || s;
          0 === s && (i = 0), t.transition(i)
        })
      }
    })
  }, function (e) {
    let {swiper: x, extendParams: t, on: i, emit: s} = e;
    const _ = I();
    t({
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    }), x.zoom = {enabled: !1};
    let n, r, o, T = 1, a = !1;
    const E = {
      $slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      $imageEl: void 0,
      $imageWrapEl: void 0,
      maxRatio: 3
    }, S = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {}
    }, l = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0
    };
    let c = 1;

    function d(e) {
      if (e.targetTouches.length < 2) {
        return 1;
      }
      var t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY,
        s = e.targetTouches[1].pageX, e = e.targetTouches[1].pageY;
      return Math.sqrt((s - t) ** 2 + (e - i) ** 2)
    }

    function u(e) {
      var t = x.support, i = x.params.zoom;
      if (r = !1, o = !1, !t.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) {
          return;
        }
        r = !0, E.scaleStart = d(e)
      }
      E.$slideEl && E.$slideEl.length || (E.$slideEl = L(e.target).closest("." + x.params.slideClass), 0 === E.$slideEl.length && (E.$slideEl = x.slides.eq(x.activeIndex)), E.$imageEl = E.$slideEl.find("." + i.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), E.$imageWrapEl = E.$imageEl.parent("." + i.containerClass), E.maxRatio = E.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== E.$imageWrapEl.length) ? (E.$imageEl && E.$imageEl.transition(0), a = !0) : E.$imageEl = void 0
    }

    function h(e) {
      const t = x.support, i = x.params.zoom, s = x.zoom;
      if (!t.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) {
          return;
        }
        o = !0, E.scaleMove = d(e)
      }
      E.$imageEl && 0 !== E.$imageEl.length ? (t.gestures ? s.scale = e.scale * T : s.scale = E.scaleMove / E.scaleStart * T, s.scale > E.maxRatio && (s.scale = E.maxRatio - 1 + (s.scale - E.maxRatio + 1) ** .5), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - (i.minRatio - s.scale + 1) ** .5), E.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`)) : "gesturechange" === e.type && u(e)
    }

    function p(e) {
      const t = x.device, i = x.support, s = x.params.zoom, n = x.zoom;
      if (!i.gestures) {
        if (!r || !o) {
          return;
        }
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android) {
          return;
        }
        r = !1, o = !1
      }
      E.$imageEl && 0 !== E.$imageEl.length && (n.scale = Math.max(Math.min(n.scale, E.maxRatio), s.minRatio), E.$imageEl.transition(x.params.speed).transform(`translate3d(0,0,0) scale(${n.scale})`), T = n.scale, a = !1, 1 === n.scale && (E.$slideEl = void 0))
    }

    function m(e) {
      var t = x.zoom;
      if (E.$imageEl && 0 !== E.$imageEl.length && (x.allowClick = !1, S.isTouched && E.$slideEl)) {
        S.isMoved || (S.width = E.$imageEl[0].offsetWidth, S.height = E.$imageEl[0].offsetHeight, S.startX = O(E.$imageWrapEl[0], "x") || 0, S.startY = O(E.$imageWrapEl[0], "y") || 0, E.slideWidth = E.$slideEl[0].offsetWidth, E.slideHeight = E.$slideEl[0].offsetHeight, E.$imageWrapEl.transition(0));
        var i = S.width * t.scale, t = S.height * t.scale;
        if (!(i < E.slideWidth && t < E.slideHeight)) {
          if (S.minX = Math.min(E.slideWidth / 2 - i / 2, 0), S.maxX = -S.minX, S.minY = Math.min(E.slideHeight / 2 - t / 2, 0), S.maxY = -S.minY, S.touchesCurrent.x = ("touchmove" === e.type ? e.targetTouches[0] : e).pageX, S.touchesCurrent.y = ("touchmove" === e.type ? e.targetTouches[0] : e).pageY, !S.isMoved && !a) {
            if (x.isHorizontal() && (Math.floor(S.minX) === Math.floor(S.startX) && S.touchesCurrent.x < S.touchesStart.x || Math.floor(S.maxX) === Math.floor(S.startX) && S.touchesCurrent.x > S.touchesStart.x)) {
              return void (S.isTouched = !1);
            }
            if (!x.isHorizontal() && (Math.floor(S.minY) === Math.floor(S.startY) && S.touchesCurrent.y < S.touchesStart.y || Math.floor(S.maxY) === Math.floor(S.startY) && S.touchesCurrent.y > S.touchesStart.y)) {
              return void (S.isTouched = !1)
            }
          }
          e.cancelable && e.preventDefault(), e.stopPropagation(), S.isMoved = !0, S.currentX = S.touchesCurrent.x - S.touchesStart.x + S.startX, S.currentY = S.touchesCurrent.y - S.touchesStart.y + S.startY, S.currentX < S.minX && (S.currentX = S.minX + 1 - (S.minX - S.currentX + 1) ** .8), S.currentX > S.maxX && (S.currentX = S.maxX - 1 + (S.currentX - S.maxX + 1) ** .8), S.currentY < S.minY && (S.currentY = S.minY + 1 - (S.minY - S.currentY + 1) ** .8), S.currentY > S.maxY && (S.currentY = S.maxY - 1 + (S.currentY - S.maxY + 1) ** .8), l.prevPositionX || (l.prevPositionX = S.touchesCurrent.x), l.prevPositionY || (l.prevPositionY = S.touchesCurrent.y), l.prevTime || (l.prevTime = Date.now()), l.x = (S.touchesCurrent.x - l.prevPositionX) / (Date.now() - l.prevTime) / 2, l.y = (S.touchesCurrent.y - l.prevPositionY) / (Date.now() - l.prevTime) / 2, Math.abs(S.touchesCurrent.x - l.prevPositionX) < 2 && (l.x = 0), Math.abs(S.touchesCurrent.y - l.prevPositionY) < 2 && (l.y = 0), l.prevPositionX = S.touchesCurrent.x, l.prevPositionY = S.touchesCurrent.y, l.prevTime = Date.now(), E.$imageWrapEl.transform(`translate3d(${S.currentX}px, ${S.currentY}px,0)`)
        }
      }
    }

    function f() {
      const e = x.zoom;
      E.$slideEl && x.previousIndex !== x.activeIndex && (E.$imageEl && E.$imageEl.transform("translate3d(0,0,0) scale(1)"), E.$imageWrapEl && E.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, T = 1, E.$slideEl = void 0, E.$imageEl = void 0, E.$imageWrapEl = void 0)
    }

    function g(y) {
      const b = x.zoom, w = x.params.zoom;
      if (E.$slideEl || (y && y.target && (E.$slideEl = L(y.target).closest("." + x.params.slideClass)), E.$slideEl || (x.params.virtual && x.params.virtual.enabled && x.virtual ? E.$slideEl = x.$wrapperEl.children("." + x.params.slideActiveClass) : E.$slideEl = x.slides.eq(x.activeIndex)), E.$imageEl = E.$slideEl.find("." + w.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), E.$imageWrapEl = E.$imageEl.parent("." + w.containerClass)), E.$imageEl && 0 !== E.$imageEl.length && E.$imageWrapEl && 0 !== E.$imageWrapEl.length) {
        let e, t, i, s, n, r, o, a, l, c, d, u, h, p, m, f, g, v;
        x.params.cssMode && (x.wrapperEl.style.overflow = "hidden", x.wrapperEl.style.touchAction = "none"), E.$slideEl.addClass("" + w.zoomedSlideClass), t = void 0 === S.touchesStart.x && y ? (e = ("touchend" === y.type ? y.changedTouches[0] : y).pageX, ("touchend" === y.type ? y.changedTouches[0] : y).pageY) : (e = S.touchesStart.x, S.touchesStart.y), b.scale = E.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, T = E.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, y ? (g = E.$slideEl[0].offsetWidth, v = E.$slideEl[0].offsetHeight, i = E.$slideEl.offset().left + _.scrollX, s = E.$slideEl.offset().top + _.scrollY, n = i + g / 2 - e, r = s + v / 2 - t, l = E.$imageEl[0].offsetWidth, c = E.$imageEl[0].offsetHeight, d = l * b.scale, u = c * b.scale, m = -(h = Math.min(g / 2 - d / 2, 0)), f = -(p = Math.min(v / 2 - u / 2, 0)), o = n * b.scale, a = r * b.scale, (o = o < h ? h : o) > m && (o = m), (a = a < p ? p : a) > f && (a = f)) : (o = 0, a = 0), E.$imageWrapEl.transition(300).transform(`translate3d(${o}px, ${a}px,0)`), E.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${b.scale})`)
      }
    }

    function v() {
      const e = x.zoom, t = x.params.zoom;
      E.$slideEl || (x.params.virtual && x.params.virtual.enabled && x.virtual ? E.$slideEl = x.$wrapperEl.children("." + x.params.slideActiveClass) : E.$slideEl = x.slides.eq(x.activeIndex), E.$imageEl = E.$slideEl.find("." + t.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), E.$imageWrapEl = E.$imageEl.parent("." + t.containerClass)), E.$imageEl && 0 !== E.$imageEl.length && E.$imageWrapEl && 0 !== E.$imageWrapEl.length && (x.params.cssMode && (x.wrapperEl.style.overflow = "", x.wrapperEl.style.touchAction = ""), e.scale = 1, T = 1, E.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), E.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), E.$slideEl.removeClass("" + t.zoomedSlideClass), E.$slideEl = void 0)
    }

    function y(e) {
      var t = x.zoom;
      t.scale && 1 !== t.scale ? v() : g(e)
    }

    function b() {
      var e = x.support;
      return {
        passiveListener: !("touchstart" !== x.touchEvents.start || !e.passiveListener || !x.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
        activeListenerWithCapture: !e.passiveListener || {
          passive: !1,
          capture: !0
        }
      }
    }

    function w() {
      return "." + x.params.slideClass
    }

    function C(e) {
      var t = b()["passiveListener"], i = w();
      x.$wrapperEl[e]("gesturestart", i, u, t), x.$wrapperEl[e]("gesturechange", i, h, t), x.$wrapperEl[e]("gestureend", i, p, t)
    }

    function k() {
      n || (n = !0, C("on"))
    }

    function A() {
      n && (n = !1, C("off"))
    }

    function M() {
      const e = x.zoom;
      var t, i, s, n;
      e.enabled || (e.enabled = !0, t = x.support, {
        passiveListener: i,
        activeListenerWithCapture: s
      } = b(), n = w(), t.gestures ? (x.$wrapperEl.on(x.touchEvents.start, k, i), x.$wrapperEl.on(x.touchEvents.end, A, i)) : "touchstart" === x.touchEvents.start && (x.$wrapperEl.on(x.touchEvents.start, n, u, i), x.$wrapperEl.on(x.touchEvents.move, n, h, s), x.$wrapperEl.on(x.touchEvents.end, n, p, i), x.touchEvents.cancel && x.$wrapperEl.on(x.touchEvents.cancel, n, p, i)), x.$wrapperEl.on(x.touchEvents.move, "." + x.params.zoom.containerClass, m, s))
    }

    function P() {
      const e = x.zoom;
      var t, i, s, n;
      e.enabled && (t = x.support, {
        passiveListener: i,
        activeListenerWithCapture: s
      } = (e.enabled = !1, b()), n = w(), t.gestures ? (x.$wrapperEl.off(x.touchEvents.start, k, i), x.$wrapperEl.off(x.touchEvents.end, A, i)) : "touchstart" === x.touchEvents.start && (x.$wrapperEl.off(x.touchEvents.start, n, u, i), x.$wrapperEl.off(x.touchEvents.move, n, h, s), x.$wrapperEl.off(x.touchEvents.end, n, p, i), x.touchEvents.cancel && x.$wrapperEl.off(x.touchEvents.cancel, n, p, i)), x.$wrapperEl.off(x.touchEvents.move, "." + x.params.zoom.containerClass, m, s))
    }

    Object.defineProperty(x.zoom, "scale", {
      get: () => c, set(e) {
        var t, i;
        c !== e && (t = E.$imageEl ? E.$imageEl[0] : void 0, i = E.$slideEl ? E.$slideEl[0] : void 0, s("zoomChange", e, t, i)), c = e
      }
    }), i("init", () => {
      x.params.zoom.enabled && M()
    }), i("destroy", () => {
      P()
    }), i("touchStart", (e, t) => {
      var i;
      x.zoom.enabled && (t = t, i = x.device, E.$imageEl && 0 !== E.$imageEl.length && !S.isTouched && (i.android && t.cancelable && t.preventDefault(), S.isTouched = !0, S.touchesStart.x = ("touchstart" === t.type ? t.targetTouches[0] : t).pageX, S.touchesStart.y = ("touchstart" === t.type ? t.targetTouches[0] : t).pageY))
    }), i("touchEnd", (e, t) => {
      if (x.zoom.enabled) {
        var i = x.zoom;
        if (E.$imageEl && 0 !== E.$imageEl.length) {
          if (!S.isTouched || !S.isMoved) {
            return void (S.isTouched = !1, S.isMoved = !1);
          }
          S.isTouched = !1, S.isMoved = !1;
          let e = 300, t = 300;
          var s = l.x * e, s = S.currentX + s, n = l.y * t, n = S.currentY + n,
            r = (0 !== l.x && (e = Math.abs((s - S.currentX) / l.x)), 0 !== l.y && (t = Math.abs((n - S.currentY) / l.y)), Math.max(e, t)),
            s = (S.currentX = s, S.currentY = n, S.width * i.scale),
            n = S.height * i.scale;
          S.minX = Math.min(E.slideWidth / 2 - s / 2, 0), S.maxX = -S.minX, S.minY = Math.min(E.slideHeight / 2 - n / 2, 0), S.maxY = -S.minY, S.currentX = Math.max(Math.min(S.currentX, S.maxX), S.minX), S.currentY = Math.max(Math.min(S.currentY, S.maxY), S.minY), E.$imageWrapEl.transition(r).transform(`translate3d(${S.currentX}px, ${S.currentY}px,0)`)
        }
      }
    }), i("doubleTap", (e, t) => {
      !x.animating && x.params.zoom.enabled && x.zoom.enabled && x.params.zoom.toggle && y(t)
    }), i("transitionEnd", () => {
      x.zoom.enabled && x.params.zoom.enabled && f()
    }), i("slideChange", () => {
      x.zoom.enabled && x.params.zoom.enabled && x.params.cssMode && f()
    }), Object.assign(x.zoom, {enable: M, disable: P, in: g, out: v, toggle: y})
  }, function (e) {
    let {swiper: d, extendParams: t, on: i, emit: u} = e, c = (t({
      lazy: {
        checkInView: !1,
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        scrollingElement: "",
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    }), !(d.lazy = {})), h = !1;

    function p(e, a) {
      void 0 === a && (a = !0);
      const l = d.params.lazy;
      if (void 0 !== e && 0 !== d.slides.length) {
        const c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children(`.${d.params.slideClass}[data-swiper-slide-index="${e}"]`) : d.slides.eq(e),
          t = c.find(`.${l.elementClass}:not(.${l.loadedClass}):not(.${l.loadingClass})`);
        !c.hasClass(l.elementClass) || c.hasClass(l.loadedClass) || c.hasClass(l.loadingClass) || t.push(c[0]), 0 !== t.length && t.each(e => {
          const t = L(e),
            i = (t.addClass(l.loadingClass), t.attr("data-background")),
            s = t.attr("data-src"), n = t.attr("data-srcset"),
            r = t.attr("data-sizes"), o = t.parent("picture");
          d.loadImage(t[0], s || i, n, r, !1, () => {
            var e;
            null == d || !d || d && !d.params || d.destroyed || (i ? (t.css("background-image", `url("${i}")`), t.removeAttr("data-background")) : (n && (t.attr("srcset", n), t.removeAttr("data-srcset")), r && (t.attr("sizes", r), t.removeAttr("data-sizes")), o.length && o.children("source").each(e => {
              const t = L(e);
              t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
            }), s && (t.attr("src", s), t.removeAttr("data-src"))), t.addClass(l.loadedClass).removeClass(l.loadingClass), c.find("." + l.preloaderClass).remove(), d.params.loop && a && (e = c.attr("data-swiper-slide-index"), c.hasClass(d.params.slideDuplicateClass) ? p(d.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${d.params.slideDuplicateClass})`).index(), !1) : p(d.$wrapperEl.children(`.${d.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)), u("lazyImageReady", c[0], t[0]), d.params.autoHeight && d.updateAutoHeight())
          }), u("lazyImageLoad", c[0], t[0])
        })
      }
    }

    function m() {
      const {$wrapperEl: t, params: i, slides: s, activeIndex: n} = d,
        r = d.virtual && i.virtual.enabled, e = i.lazy;
      let o = i.slidesPerView;

      function a(e) {
        if (r) {
          if (t.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]`).length) {
            return 1
          }
        }
        else if (s[e]) {
          return 1
        }
      }

      function l(e) {
        return r ? L(e).attr("data-swiper-slide-index") : L(e).index()
      }

      if ("auto" === o && (o = 0), h = h || !0, d.params.watchSlidesProgress) {
        t.children("." + i.slideVisibleClass).each(e => {
          p(r ? L(e).attr("data-swiper-slide-index") : L(e).index())
        });
      }
      else if (1 < o) {
        for (let e = n; e < n + o; e += 1) {
          a(e) && p(e);
        }
      }
      else {
        p(n);
      }
      if (e.loadPrevNext) {
        if (1 < o || e.loadPrevNextAmount && 1 < e.loadPrevNextAmount) {
          const t = e.loadPrevNextAmount, d = Math.ceil(o),
            i = Math.min(n + d + Math.max(t, d), s.length),
            r = Math.max(n - Math.max(d, t), 0);
          for (let e = n + d; e < i; e += 1) {
            a(e) && p(e);
          }
          for (let e = r; e < n; e += 1) {
            a(e) && p(e)
          }
        }
        else {
          const d = t.children("." + i.slideNextClass),
            s = (0 < d.length && p(l(d)), t.children("." + i.slidePrevClass));
          0 < s.length && p(l(s))
        }
      }
    }

    function f() {
      var e = I();
      if (d && !d.destroyed) {
        const s = d.params.lazy.scrollingElement ? L(d.params.lazy.scrollingElement) : L(e),
          n = s[0] === e, r = n ? e.innerWidth : s[0].offsetWidth,
          o = n ? e.innerHeight : s[0].offsetHeight, a = d.$el.offset(),
          l = d["rtlTranslate"];
        let t = !1;
        l && (a.left -= d.$el[0].scrollLeft);
        var i = [[a.left, a.top], [a.left + d.width, a.top], [a.left, a.top + d.height], [a.left + d.width, a.top + d.height]];
        for (let e = 0; e < i.length; e += 1) {
          const d = i[e];
          0 <= d[0] && d[0] <= r && 0 <= d[1] && d[1] <= o && (0 === d[0] && 0 === d[1] || (t = !0))
        }
        e = !("touchstart" !== d.touchEvents.start || !d.support.passiveListener || !d.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        t ? (m(), s.off("scroll", f, e)) : c || (c = !0, s.on("scroll", f, e))
      }
    }

    i("beforeInit", () => {
      d.params.lazy.enabled && d.params.preloadImages && (d.params.preloadImages = !1)
    }), i("init", () => {
      d.params.lazy.enabled && (d.params.lazy.checkInView ? f : m)()
    }), i("scroll", () => {
      d.params.freeMode && d.params.freeMode.enabled && !d.params.freeMode.sticky && m()
    }), i("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
      d.params.lazy.enabled && (d.params.lazy.checkInView ? f : m)()
    }), i("transitionStart", () => {
      d.params.lazy.enabled && (d.params.lazy.loadOnTransitionStart || !d.params.lazy.loadOnTransitionStart && !h) && (d.params.lazy.checkInView ? f : m)()
    }), i("transitionEnd", () => {
      d.params.lazy.enabled && !d.params.lazy.loadOnTransitionStart && (d.params.lazy.checkInView ? f : m)()
    }), i("slideChange", () => {
      var {
        lazy: e,
        cssMode: t,
        watchSlidesProgress: i,
        touchReleaseOnEdges: s,
        resistanceRatio: n
      } = d.params;
      e.enabled && (t || i && (s || 0 === n)) && m()
    }), i("destroy", () => {
      d.$el && d.$el.find("." + d.params.lazy.loadingClass).removeClass(d.params.lazy.loadingClass)
    }), Object.assign(d.lazy, {load: m, loadInSlide: p})
  }, function (e) {
    let {swiper: a, extendParams: t, on: i} = e;

    function l(e, t) {
      const i = function () {
        let i, s, n;
        return (e, t) => {
          for (s = -1, i = e.length; 1 < i - s;) {
            e[n = i + s >> 1] <= t ? s = n : i = n;
          }
          return i
        }
      }();
      let s, n;
      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (n = i(this.x, e), s = n - 1, (e - this.x[s]) * (this.y[n] - this.y[s]) / (this.x[n] - this.x[s]) + this.y[s]) : 0
      }, this
    }

    function s() {
      a.controller.control && a.controller.spline && (a.controller.spline = void 0, delete a.controller.spline)
    }

    t({
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    }), a.controller = {control: void 0}, i("beforeInit", () => {
      a.controller.control = a.params.controller.control
    }), i("update", () => {
      s()
    }), i("resize", () => {
      s()
    }), i("observerUpdate", () => {
      s()
    }), i("setTranslate", (e, t, i) => {
      a.controller.control && a.controller.setTranslate(t, i)
    }), i("setTransition", (e, t, i) => {
      a.controller.control && a.controller.setTransition(t, i)
    }), Object.assign(a.controller, {
      setTranslate: function (e, t) {
        var i = a.controller.control;
        let s, n;
        var r = a.constructor;

        function o(e) {
          var t, i = a.rtlTranslate ? -a.translate : a.translate;
          "slide" === a.params.controller.by && (t = e, a.controller.spline || (a.controller.spline = a.params.loop ? new l(a.slidesGrid, t.slidesGrid) : new l(a.snapGrid, t.snapGrid)), n = -a.controller.spline.interpolate(-i)), n && "container" !== a.params.controller.by || (s = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), n = (i - a.minTranslate()) * s + e.minTranslate()), a.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, a), e.updateActiveIndex(), e.updateSlidesClasses()
        }

        if (Array.isArray(i)) {
          for (let e = 0; e < i.length; e += 1) {
            i[e] !== t && i[e] instanceof r && o(i[e]);
          }
        }
        else {
          i instanceof r && t !== i && o(i)
        }
      }, setTransition: function (t, e) {
        const i = a.constructor, s = a.controller.control;
        let n;

        function r(e) {
          e.setTransition(t, a), 0 !== t && (e.transitionStart(), e.params.autoHeight && S(() => {
            e.updateAutoHeight()
          }), e.$wrapperEl.transitionEnd(() => {
            s && (e.params.loop && "slide" === a.params.controller.by && e.loopFix(), e.transitionEnd())
          }))
        }

        if (Array.isArray(s)) {
          for (n = 0; n < s.length; n += 1) {
            s[n] !== e && s[n] instanceof i && r(s[n]);
          }
        }
        else {
          s instanceof i && e !== s && r(s)
        }
      }
    })
  }, function (e) {
    let {swiper: o, extendParams: t, on: i} = e, a = (t({
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group",
        id: null
      }
    }), null);

    function s(e) {
      const t = a;
      0 !== t.length && (t.html(""), t.html(e))
    }

    function n(e) {
      e.attr("tabIndex", "0")
    }

    function r(e) {
      e.attr("tabIndex", "-1")
    }

    function l(e, t) {
      e.attr("role", t)
    }

    function c(e, t) {
      e.attr("aria-roledescription", t)
    }

    function d(e, t) {
      e.attr("aria-label", t)
    }

    function u(e) {
      e.attr("aria-disabled", !0)
    }

    function h(e) {
      e.attr("aria-disabled", !1)
    }

    function p(e) {
      if (13 === e.keyCode || 32 === e.keyCode) {
        const t = o.params.a11y, i = L(e.target);
        o.navigation && o.navigation.$nextEl && i.is(o.navigation.$nextEl) && (o.isEnd && !o.params.loop || o.slideNext(), o.isEnd ? s(t.lastSlideMessage) : s(t.nextSlideMessage)), o.navigation && o.navigation.$prevEl && i.is(o.navigation.$prevEl) && (o.isBeginning && !o.params.loop || o.slidePrev(), o.isBeginning ? s(t.firstSlideMessage) : s(t.prevSlideMessage)), o.pagination && i.is(A(o.params.pagination.bulletClass)) && i[0].click()
      }
    }

    function m() {
      return o.pagination && o.pagination.bullets && o.pagination.bullets.length
    }

    function f() {
      return m() && o.params.pagination.clickable
    }

    const g = (e, t, i) => {
      n(e), "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", p)), d(e, i), e.attr("aria-controls", t)
    }, v = e => {
      var t, i, e = e.target.closest("." + o.params.slideClass);
      e && o.slides.includes(e) && (t = o.slides.indexOf(e) === o.activeIndex, i = o.params.watchSlidesProgress && o.visibleSlides && o.visibleSlides.includes(e), t || i || (o.isHorizontal() ? o.el.scrollLeft = 0 : o.el.scrollTop = 0, o.slideTo(o.slides.indexOf(e), 0)))
    }, y = () => {
      const n = o.params.a11y,
        r = (n.itemRoleDescriptionMessage && c(L(o.slides), n.itemRoleDescriptionMessage), n.slideRole && l(L(o.slides), n.slideRole), (o.params.loop ? o.slides.filter(e => !e.classList.contains(o.params.slideDuplicateClass)) : o.slides).length);
      n.slideLabelMessage && o.slides.each((e, t) => {
        const i = L(e),
          s = o.params.loop ? parseInt(i.attr("data-swiper-slide-index"), 10) : t;
        d(i, n.slideLabelMessage.replace(/\{\{index\}\}/, s + 1).replace(/\{\{slidesLength\}\}/, r))
      })
    };
    i("beforeInit", () => {
      a = L(`<span class="${o.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
    }), i("afterInit", () => {
      if (o.params.a11y.enabled) {
        var i = o.params.a11y, s = (o.$el.append(a), o.$el);
        i.containerRoleDescriptionMessage && c(s, i.containerRoleDescriptionMessage), i.containerMessage && d(s, i.containerMessage);
        const n = o.$wrapperEl,
          r = i.id || n.attr("id") || "swiper-wrapper-" + "x".repeat(s = void 0 === (s = 16) ? 16 : s).replace(/x/g, () => Math.round(16 * Math.random()).toString(16));
        s = o.params.autoplay && o.params.autoplay.enabled ? "off" : "polite";
        let e, t;
        n.attr("id", r), n.attr("aria-live", s), y(), o.navigation && o.navigation.$nextEl && (e = o.navigation.$nextEl), o.navigation && o.navigation.$prevEl && (t = o.navigation.$prevEl), e && e.length && g(e, r, i.nextSlideMessage), t && t.length && g(t, r, i.prevSlideMessage), f() && o.pagination.$el.on("keydown", A(o.params.pagination.bulletClass), p), o.$el.on("focus", v, !0)
      }
    }), i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      o.params.a11y.enabled && y()
    }), i("fromEdge toEdge afterInit lock unlock", () => {
      var e, t;
      o.params.a11y.enabled && !o.params.loop && !o.params.rewind && o.navigation && ({
        $nextEl: e,
        $prevEl: t
      } = o.navigation, t && 0 < t.length && (o.isBeginning ? (u(t), r(t)) : (h(t), n(t))), e && 0 < e.length && (o.isEnd ? (u(e), r(e)) : (h(e), n(e))))
    }), i("paginationUpdate", () => {
      if (o.params.a11y.enabled) {
        const i = o.params.a11y;
        m() && o.pagination.bullets.each(e => {
          const t = L(e);
          o.params.pagination.clickable && (n(t), o.params.pagination.renderBullet || (l(t, "button"), d(t, i.paginationBulletMessage.replace(/\{\{index\}\}/, t.index() + 1)))), t.is("." + o.params.pagination.bulletActiveClass) ? t.attr("aria-current", "true") : t.removeAttr("aria-current")
        })
      }
    }), i("destroy", () => {
      if (o.params.a11y.enabled) {
        let e, t;
        a && 0 < a.length && a.remove(), o.navigation && o.navigation.$nextEl && (e = o.navigation.$nextEl), o.navigation && o.navigation.$prevEl && (t = o.navigation.$prevEl), e && e.off("keydown", p), t && t.off("keydown", p), f() && o.pagination.$el.off("keydown", A(o.params.pagination.bulletClass), p), o.$el.off("focus", v, !0)
      }
    })
  }, function (e) {
    let {swiper: o, extendParams: t, on: i} = e, a = (t({
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides",
        keepQuery: !1
      }
    }), !1), s = {};
    const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
      n = e => {
        var t = I();
        let i;
        e = (i = e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(e => "" !== e), t = e.length;
        return {key: e[t - 2], value: e[t - 1]}
      }, r = (i, s) => {
        const n = I();
        if (a && o.params.history.enabled) {
          let e;
          e = o.params.url ? new URL(o.params.url) : n.location;
          const r = o.slides.eq(s);
          let t = l(r.attr("data-history"));
          if (0 < o.params.history.root.length) {
            let e = o.params.history.root;
            "/" === e[e.length - 1] && (e = e.slice(0, e.length - 1)), t = e + `/${i}/` + t
          }
          else {
            e.pathname.includes(i) || (t = i + "/" + t);
          }
          o.params.history.keepQuery && (t += e.search);
          s = n.history.state;
          s && s.value === t || (o.params.history.replaceState ? n.history.replaceState({value: t}, null, t) : n.history.pushState({value: t}, null, t))
        }
      }, c = (i, s, n) => {
        if (s) {
          for (let e = 0, t = o.slides.length; e < t; e += 1) {
            const r = o.slides.eq(e);
            if (l(r.attr("data-history")) === s && !r.hasClass(o.params.slideDuplicateClass)) {
              const s = r.index();
              o.slideTo(s, i, n)
            }
          }
        }
        else {
          o.slideTo(0, i, n)
        }
      }, d = () => {
        s = n(o.params.url), c(o.params.speed, s.value, !1)
      };
    i("init", () => {
      if (o.params.history.enabled) {
        const e = I();
        if (o.params.history) {
          if (!e.history || !e.history.pushState) {
            return void (o.params.history.enabled = !1, o.params.hashNavigation.enabled = !0);
          }
          a = !0, ((s = n(o.params.url)).key || s.value) && (c(0, s.value, o.params.runCallbacksOnInit), o.params.history.replaceState || e.addEventListener("popstate", d))
        }
      }
    }), i("destroy", () => {
      if (o.params.history.enabled) {
        const e = I();
        o.params.history.replaceState || e.removeEventListener("popstate", d)
      }
    }), i("transitionEnd _freeModeNoMomentumRelease", () => {
      a && r(o.params.history.key, o.activeIndex)
    }), i("slideChange", () => {
      a && o.params.cssMode && r(o.params.history.key, o.activeIndex)
    })
  }, function (e) {
    let {swiper: n, extendParams: t, emit: i, on: s} = e, r = !1;
    const o = E(), a = I(), l = (t({
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    }), () => {
      i("hashChange");
      var e = o.location.hash.replace("#", "");
      e !== n.slides.eq(n.activeIndex).attr("data-hash") && void 0 !== (e = n.$wrapperEl.children(`.${n.params.slideClass}[data-hash="${e}"]`).index()) && n.slideTo(e)
    }), c = () => {
      if (r && n.params.hashNavigation.enabled) {
        if (n.params.hashNavigation.replaceState && a.history && a.history.replaceState) {
          a.history.replaceState(null, null, "#" + n.slides.eq(n.activeIndex).attr("data-hash") || ""), i("hashSet");
        }
        else {
          const e = n.slides.eq(n.activeIndex),
            t = e.attr("data-hash") || e.attr("data-history");
          o.location.hash = t || "", i("hashSet")
        }
      }
    };
    s("init", () => {
      if (n.params.hashNavigation.enabled && !(!n.params.hashNavigation.enabled || n.params.history && n.params.history.enabled)) {
        r = !0;
        const i = o.location.hash.replace("#", "");
        if (i) {
          for (let e = 0, t = n.slides.length; e < t; e += 1) {
            const s = n.slides.eq(e);
            if ((s.attr("data-hash") || s.attr("data-history")) === i && !s.hasClass(n.params.slideDuplicateClass)) {
              const i = s.index();
              n.slideTo(i, 0, n.params.runCallbacksOnInit, !0)
            }
          }
        }
        n.params.hashNavigation.watchState && L(a).on("hashchange", l)
      }
    }), s("destroy", () => {
      n.params.hashNavigation.enabled && n.params.hashNavigation.watchState && L(a).off("hashchange", l)
    }), s("transitionEnd _freeModeNoMomentumRelease", () => {
      r && c()
    }), s("slideChange", () => {
      r && n.params.cssMode && c()
    })
  }, function (e) {
    let i, {swiper: s, extendParams: t, on: n, emit: r} = e;

    function o() {
      if (!s.size) {
        return s.autoplay.running = !1, void (s.autoplay.paused = !1);
      }
      const e = s.slides.eq(s.activeIndex);
      let t = s.params.autoplay.delay;
      e.attr("data-swiper-autoplay") && (t = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(i), i = S(() => {
        let e;
        s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), r("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? l() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), r("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), r("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), r("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? l() : (e = s.slideTo(0, s.params.speed, !0, !0), r("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), r("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && o()
      }, t)
    }

    function a() {
      return void 0 === i && !s.autoplay.running && (s.autoplay.running = !0, r("autoplayStart"), o(), !0)
    }

    function l() {
      return !!s.autoplay.running && void 0 !== i && (i && (clearTimeout(i), i = void 0), s.autoplay.running = !1, r("autoplayStop"), !0)
    }

    function c(e) {
      !s.autoplay.running || s.autoplay.paused || (i && clearTimeout(i), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(e => {
        s.$wrapperEl[0].addEventListener(e, u)
      }) : (s.autoplay.paused = !1, o()))
    }

    function d() {
      var e = E();
      "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (o(), s.autoplay.paused = !1)
    }

    function u(e) {
      s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(e => {
        s.$wrapperEl[0].removeEventListener(e, u)
      }), s.autoplay.paused = !1, (s.autoplay.running ? o : l)())
    }

    function h() {
      s.params.autoplay.disableOnInteraction ? l() : (r("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach(e => {
        s.$wrapperEl[0].removeEventListener(e, u)
      })
    }

    function p() {
      s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, r("autoplayResume"), o())
    }

    s.autoplay = {running: !1, paused: !1}, t({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    }), n("init", () => {
      s.params.autoplay.enabled && (a(), E().addEventListener("visibilitychange", d), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", h), s.$el.on("mouseleave", p)))
    }), n("beforeTransitionStart", (e, t, i) => {
      s.autoplay.running && (i || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : l())
    }), n("sliderFirstMove", () => {
      s.autoplay.running && (s.params.autoplay.disableOnInteraction ? l : c)()
    }), n("touchEnd", () => {
      s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && o()
    }), n("destroy", () => {
      s.$el.off("mouseenter", h), s.$el.off("mouseleave", p), s.autoplay.running && l(), E().removeEventListener("visibilitychange", d)
    }), Object.assign(s.autoplay, {pause: c, run: o, start: a, stop: l})
  }, function (e) {
    let {swiper: l, extendParams: t, on: i} = e, s = (t({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs"
      }
    }), !1), n = !1;

    function r() {
      var e = l.thumbs.swiper;
      if (e && !e.destroyed) {
        const i = e.clickedIndex, s = e.clickedSlide;
        if (!(s && L(s).hasClass(l.params.thumbs.slideThumbActiveClass) || null == i)) {
          let t;
          if (t = e.params.loop ? parseInt(L(e.clickedSlide).attr("data-swiper-slide-index"), 10) : i, l.params.loop) {
            let e = l.activeIndex;
            l.slides.eq(e).hasClass(l.params.slideDuplicateClass) && (l.loopFix(), l._clientLeft = l.$wrapperEl[0].clientLeft, e = l.activeIndex);
            const i = l.slides.eq(e).prevAll(`[data-swiper-slide-index="${t}"]`).eq(0).index(),
              s = l.slides.eq(e).nextAll(`[data-swiper-slide-index="${t}"]`).eq(0).index();
            t = void 0 === i || void 0 !== s && s - e < e - i ? s : i
          }
          l.slideTo(t)
        }
      }
    }

    function o() {
      var e = l.params["thumbs"];
      if (s) {
        return !1;
      }
      s = !0;
      const t = l.constructor;
      return e.swiper instanceof t ? (l.thumbs.swiper = e.swiper, Object.assign(l.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(l.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })) : c(e.swiper) && (e = Object.assign({}, e.swiper), Object.assign(e, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), l.thumbs.swiper = new t(e), n = !0), l.thumbs.swiper.$el.addClass(l.params.thumbs.thumbsContainerClass), l.thumbs.swiper.on("tap", r), !0
    }

    function a(s) {
      const n = l.thumbs.swiper;
      if (n && !n.destroyed) {
        const a = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView;
        let t = 1;
        var i = l.params.thumbs.slideThumbActiveClass;
        if (1 < l.params.slidesPerView && !l.params.centeredSlides && (t = l.params.slidesPerView), l.params.thumbs.multipleActiveThumbs || (t = 1), t = Math.floor(t), n.slides.removeClass(i), n.params.loop || n.params.virtual && n.params.virtual.enabled) {
          for (let e = 0; e < t; e += 1) {
            n.$wrapperEl.children(`[data-swiper-slide-index="${l.realIndex + e}"]`).addClass(i);
          }
        }
        else {
          for (let e = 0; e < t; e += 1) {
            n.slides.eq(l.realIndex + e).addClass(i);
          }
        }
        var r = l.params.thumbs.autoScrollOffset, o = r && !n.params.loop;
        if (l.realIndex !== n.realIndex || o) {
          let e, t, i = n.activeIndex;
          if (n.params.loop) {
            n.slides.eq(i).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, i = n.activeIndex);
            const s = n.slides.eq(i).prevAll(`[data-swiper-slide-index="${l.realIndex}"]`).eq(0).index(),
              a = n.slides.eq(i).nextAll(`[data-swiper-slide-index="${l.realIndex}"]`).eq(0).index();
            e = void 0 === s ? a : void 0 === a ? s : a - i == i - s ? 1 < n.params.slidesPerGroup ? a : i : a - i < i - s ? a : s, t = l.activeIndex > l.previousIndex ? "next" : "prev"
          }
          else {
            e = l.realIndex, t = e > l.previousIndex ? "next" : "prev";
          }
          o && (e += "next" === t ? r : -1 * r), n.visibleSlidesIndexes && n.visibleSlidesIndexes.indexOf(e) < 0 && (n.params.centeredSlides ? e = e > i ? e - Math.floor(a / 2) + 1 : e + Math.floor(a / 2) - 1 : e > i && n.params.slidesPerGroup, n.slideTo(e, s ? 0 : void 0))
        }
      }
    }

    l.thumbs = {swiper: null}, i("beforeInit", () => {
      var e = l.params["thumbs"];
      e && e.swiper && (o(), a(!0))
    }), i("slideChange update resize observerUpdate", () => {
      a()
    }), i("setTransition", (e, t) => {
      const i = l.thumbs.swiper;
      i && !i.destroyed && i.setTransition(t)
    }), i("beforeDestroy", () => {
      const e = l.thumbs.swiper;
      e && !e.destroyed && n && e.destroy()
    }), Object.assign(l.thumbs, {init: o, update: a})
  }, function (e) {
    let {swiper: h, extendParams: t, emit: p, once: m} = e;
    t({
      freeMode: {
        enabled: !1,
        momentum: !0,
        momentumRatio: 1,
        momentumBounce: !0,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: !1,
        minimumVelocity: .02
      }
    }), Object.assign(h, {
      freeMode: {
        onTouchStart: function () {
          var e = h.getTranslate();
          h.setTranslate(e), h.setTransition(0), h.touchEventsData.velocities.length = 0, h.freeMode.onTouchEnd({currentPos: h.rtl ? h.translate : -h.translate})
        }, onTouchMove: function () {
          const {touchEventsData: e, touches: t} = h;
          0 === e.velocities.length && e.velocities.push({
            position: t[h.isHorizontal() ? "startX" : "startY"],
            time: e.touchStartTime
          }), e.velocities.push({
            position: t[h.isHorizontal() ? "currentX" : "currentY"],
            time: v()
          })
        }, onTouchEnd: function (r) {
          let o = r["currentPos"];
          const {
            params: a,
            $wrapperEl: l,
            rtlTranslate: c,
            snapGrid: d,
            touchEventsData: u
          } = h, e = v() - u.touchStartTime;
          if (o < -h.minTranslate()) {
            h.slideTo(h.activeIndex);
          }
          else if (o > -h.maxTranslate()) {
            h.slides.length < d.length ? h.slideTo(d.length - 1) : h.slideTo(h.slides.length - 1);
          }
          else {
            if (a.freeMode.momentum) {
              if (1 < u.velocities.length) {
                const r = u.velocities.pop(), o = u.velocities.pop(),
                  p = r.position - o.position, m = r.time - o.time;
                h.velocity = p / m, h.velocity /= 2, Math.abs(h.velocity) < a.freeMode.minimumVelocity && (h.velocity = 0), (150 < m || 300 < v() - r.time) && (h.velocity = 0)
              }
              else {
                h.velocity = 0;
              }
              h.velocity *= a.freeMode.momentumVelocityRatio, u.velocities.length = 0;
              let e = 1e3 * a.freeMode.momentumRatio;
              const o = h.velocity * e;
              let i = h.translate + o;
              c && (i = -i);
              let t, s = !1;
              r = 20 * Math.abs(h.velocity) * a.freeMode.momentumBounceRatio;
              let n;
              if (i < h.maxTranslate()) {
                a.freeMode.momentumBounce ? (i + h.maxTranslate() < -r && (i = h.maxTranslate() - r), t = h.maxTranslate(), s = !0, u.allowMomentumBounce = !0) : i = h.maxTranslate(), a.loop && a.centeredSlides && (n = !0);
              }
              else if (i > h.minTranslate()) {
                a.freeMode.momentumBounce ? (i - h.minTranslate() > r && (i = h.minTranslate() + r), t = h.minTranslate(), s = !0, u.allowMomentumBounce = !0) : i = h.minTranslate(), a.loop && a.centeredSlides && (n = !0);
              }
              else if (a.freeMode.sticky) {
                let t;
                for (let e = 0; e < d.length; e += 1) {
                  if (d[e] > -i) {
                    t = e;
                    break
                  }
                }
                i = -(i = Math.abs(d[t] - i) < Math.abs(d[t - 1] - i) || "next" === h.swipeDirection ? d[t] : d[t - 1])
              }
              if (n && m("transitionEnd", () => {
                h.loopFix()
              }), 0 !== h.velocity) {
                if (e = c ? Math.abs((-i - h.translate) / h.velocity) : Math.abs((i - h.translate) / h.velocity), a.freeMode.sticky) {
                  const o = Math.abs((c ? -i : i) - h.translate),
                    p = h.slidesSizesGrid[h.activeIndex];
                  e = o < p ? a.speed : o < 2 * p ? 1.5 * a.speed : 2.5 * a.speed
                }
              }
              else if (a.freeMode.sticky) {
                return void h.slideToClosest();
              }
              a.freeMode.momentumBounce && s ? (h.updateProgress(t), h.setTransition(e), h.setTranslate(i), h.transitionStart(!0, h.swipeDirection), h.animating = !0, l.transitionEnd(() => {
                h && !h.destroyed && u.allowMomentumBounce && (p("momentumBounce"), h.setTransition(a.speed), setTimeout(() => {
                  h.setTranslate(t), l.transitionEnd(() => {
                    h && !h.destroyed && h.transitionEnd()
                  })
                }, 0))
              })) : h.velocity ? (p("_freeModeNoMomentumRelease"), h.updateProgress(i), h.setTransition(e), h.setTranslate(i), h.transitionStart(!0, h.swipeDirection), h.animating || (h.animating = !0, l.transitionEnd(() => {
                h && !h.destroyed && h.transitionEnd()
              }))) : h.updateProgress(i), h.updateActiveIndex(), h.updateSlidesClasses()
            }
            else {
              if (a.freeMode.sticky) {
                return void h.slideToClosest();
              }
              a.freeMode && p("_freeModeNoMomentumRelease")
            }
            (!a.freeMode.momentum || e >= a.longSwipesMs) && (h.updateProgress(), h.updateActiveIndex(), h.updateSlidesClasses())
          }
        }
      }
    })
  }, function (e) {
    let u, h, p, {swiper: m, extendParams: t} = e;
    t({grid: {rows: 1, fill: "column"}}), m.grid = {
      initSlides: e => {
        var t = m.params["slidesPerView"], {rows: i, fill: s} = m.params.grid;
        h = u / i, p = Math.floor(e / i), u = Math.floor(e / i) === e / i ? e : Math.ceil(e / i) * i, "auto" !== t && "row" === s && (u = Math.max(u, t * i))
      }, updateSlide: (e, t, i, s) => {
        var {slidesPerGroup: n, spaceBetween: r} = m.params, {
          rows: o,
          fill: a
        } = m.params.grid;
        let l, c, d;
        if ("row" === a && 1 < n) {
          const h = Math.floor(e / (n * o)), p = e - o * n * h,
            m = 0 === h ? n : Math.min(Math.ceil((i - h * o * n) / o), n);
          d = Math.floor(p / m), l = (c = p - d * m + h * n) + d * u / o, t.css({
            "-webkit-order": l,
            order: l
          })
        }
        else {
          "column" === a ? (c = Math.floor(e / o), d = e - c * o, (c > p || c === p && d === o - 1) && ((d += 1) >= o && (d = 0, c += 1))) : (d = Math.floor(e / h), c = e - d * h);
        }
        t.css(s("margin-top"), 0 !== d ? r && r + "px" : "")
      }, updateWrapperSize: (i, s, e) => {
        var {spaceBetween: t, centeredSlides: n, roundLengths: r} = m.params,
          o = m.params.grid["rows"];
        if (m.virtualSize = (i + t) * u, m.virtualSize = Math.ceil(m.virtualSize / o) - t, m.$wrapperEl.css({[e("width")]: m.virtualSize + t + "px"}), n) {
          s.splice(0, s.length);
          const i = [];
          for (let t = 0; t < s.length; t += 1) {
            let e = s[t];
            r && (e = Math.floor(e)), s[t] < m.virtualSize + s[0] && i.push(e)
          }
          s.push(...i)
        }
      }
    }
  }, function (e) {
    e = e.swiper;
    Object.assign(e, {
      appendSlide: function (t) {
        const {$wrapperEl: i, params: e} = this;
        if (e.loop && this.loopDestroy(), "object" == typeof t && "length" in t) {
          for (let e = 0; e < t.length; e += 1) {
            t[e] && i.append(t[e]);
          }
        }
        else {
          i.append(t);
        }
        e.loop && this.loopCreate(), e.observer || this.update()
      }.bind(e), prependSlide: function (t) {
        const {params: e, $wrapperEl: i, activeIndex: s} = this;
        e.loop && this.loopDestroy();
        let n = s + 1;
        if ("object" == typeof t && "length" in t) {
          for (let e = 0; e < t.length; e += 1) {
            t[e] && i.prepend(t[e]);
          }
          n = s + t.length
        }
        else {
          i.prepend(t);
        }
        e.loop && this.loopCreate(), e.observer || this.update(), this.slideTo(n, 0, !1)
      }.bind(e), addSlide: function (t, i) {
        const s = this, {$wrapperEl: n, params: r, activeIndex: e} = s;
        let o = e;
        r.loop && (o -= s.loopedSlides, s.loopDestroy(), s.slides = n.children("." + r.slideClass));
        var a = s.slides.length;
        if (t <= 0) {
          s.prependSlide(i);
        }
        else if (a <= t) {
          s.appendSlide(i);
        }
        else {
          let e = o > t ? o + 1 : o;
          const l = [];
          for (let e = a - 1; e >= t; --e) {
            const t = s.slides.eq(e);
            t.remove(), l.unshift(t)
          }
          if ("object" == typeof i && "length" in i) {
            for (let e = 0; e < i.length; e += 1) {
              i[e] && n.append(i[e]);
            }
            e = o > t ? o + i.length : o
          }
          else {
            n.append(i);
          }
          for (let e = 0; e < l.length; e += 1) {
            n.append(l[e]);
          }
          r.loop && s.loopCreate(), r.observer || s.update(), r.loop ? s.slideTo(e + s.loopedSlides, 0, !1) : s.slideTo(e, 0, !1)
        }
      }.bind(e), removeSlide: function (t) {
        const i = this, {params: e, $wrapperEl: s, activeIndex: n} = i;
        let r = n;
        e.loop && (r -= i.loopedSlides, i.loopDestroy(), i.slides = s.children("." + e.slideClass));
        let o, a = r;
        if ("object" == typeof t && "length" in t) {
          for (let e = 0; e < t.length; e += 1) {
            o = t[e], i.slides[o] && i.slides.eq(o).remove(), o < a && --a;
          }
          a = Math.max(a, 0)
        }
        else {
          o = t, i.slides[o] && i.slides.eq(o).remove(), o < a && --a, a = Math.max(a, 0);
        }
        e.loop && i.loopCreate(), e.observer || i.update(), e.loop ? i.slideTo(a + i.loopedSlides, 0, !1) : i.slideTo(a, 0, !1)
      }.bind(e), removeAllSlides: function () {
        const t = [];
        for (let e = 0; e < this.slides.length; e += 1) {
          t.push(e);
        }
        this.removeSlide(t)
      }.bind(e)
    })
  }, function (e) {
    let {swiper: o, extendParams: t, on: i} = e;
    t({fadeEffect: {crossFade: !1, transformEl: null}}), M({
      effect: "fade",
      swiper: o,
      on: i,
      setTranslate: () => {
        const s = o["slides"], n = o.params.fadeEffect;
        for (let i = 0; i < s.length; i += 1) {
          const s = o.slides.eq(i);
          let e = -s[0].swiperSlideOffset,
            t = (o.params.virtualTranslate || (e -= o.translate), 0);
          o.isHorizontal() || (t = e, e = 0);
          var r = o.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(s[0].progress), 0) : 1 + Math.min(Math.max(s[0].progress, -1), 0);
          P(n, s).css({opacity: r}).transform(`translate3d(${e}px, ${t}px, 0px)`)
        }
      },
      setTransition: e => {
        var t = o.params.fadeEffect["transformEl"];
        (t ? o.slides.find(t) : o.slides).transition(e), $({
          swiper: o,
          duration: e,
          transformEl: t,
          allSlides: !0
        })
      },
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !o.params.cssMode
      })
    })
  }, function (e) {
    let {swiper: f, extendParams: t, on: i} = e;
    t({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    });
    const g = (e, t, i) => {
      let s = i ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
        n = i ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
      0 === s.length && (s = L(`<div class="swiper-slide-shadow-${i ? "left" : "top"}"></div>`), e.append(s)), 0 === n.length && (n = L(`<div class="swiper-slide-shadow-${i ? "right" : "bottom"}"></div>`), e.append(n)), s.length && (s[0].style.opacity = Math.max(-t, 0)), n.length && (n[0].style.opacity = Math.max(t, 0))
    };
    M({
      effect: "cube",
      swiper: f,
      on: i,
      setTranslate: () => {
        const {
            $el: e,
            $wrapperEl: t,
            slides: a,
            width: i,
            height: s,
            rtlTranslate: l,
            size: c,
            browser: n
          } = f, d = f.params.cubeEffect, u = f.isHorizontal(),
          h = f.virtual && f.params.virtual.enabled;
        let r, p = 0;
        d.shadow && (u ? (0 === (r = t.find(".swiper-cube-shadow")).length && (r = L('<div class="swiper-cube-shadow"></div>'), t.append(r)), r.css({height: i + "px"})) : 0 === (r = e.find(".swiper-cube-shadow")).length && (r = L('<div class="swiper-cube-shadow"></div>'), e.append(r)));
        for (let o = 0; o < a.length; o += 1) {
          const f = a.eq(o);
          let e = o,
            t = 90 * (e = h ? parseInt(f.attr("data-swiper-slide-index"), 10) : e),
            i = Math.floor(t / 360);
          l && (t = -t, i = Math.floor(-t / 360));
          const L = Math.max(Math.min(f[0].progress, 1), -1);
          let s = 0, n = 0, r = 0;
          e % 4 == 0 ? (s = 4 * -i * c, r = 0) : (e - 1) % 4 == 0 ? (s = 0, r = 4 * -i * c) : (e - 2) % 4 == 0 ? (s = c + 4 * i * c, r = c) : (e - 3) % 4 == 0 && (s = -c, r = 3 * c + 4 * c * i), l && (s = -s), u || (n = s, s = 0);
          var m = `rotateX(${u ? 0 : -t}deg) rotateY(${u ? t : 0}deg) translate3d(${s}px, ${n}px, ${r}px)`;
          L <= 1 && -1 < L && (p = 90 * e + 90 * L, l && (p = 90 * -e - 90 * L)), f.transform(m), d.slideShadows && g(f, L, u)
        }
        if (t.css({
          "-webkit-transform-origin": `50% 50% -${c / 2}px`,
          "transform-origin": `50% 50% -${c / 2}px`
        }), d.shadow) {
          if (u) {
            r.transform(`translate3d(0px, ${i / 2 + d.shadowOffset}px, ${-i / 2}px) rotateX(90deg) rotateZ(0deg) scale(${d.shadowScale})`);
          }
          else {
            const e = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90),
              f = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
              t = d.shadowScale, a = d.shadowScale / f, g = d.shadowOffset;
            r.transform(`scale3d(${t}, 1, ${a}) translate3d(0px, ${s / 2 + g}px, ${-s / 2 / a}px) rotateX(-90deg)`)
          }
        }
        var o = n.isSafari || n.isWebView ? -c / 2 : 0;
        t.transform(`translate3d(0px,0,${o}px) rotateX(${f.isHorizontal() ? 0 : p}deg) rotateY(${f.isHorizontal() ? -p : 0}deg)`), t[0].style.setProperty("--swiper-cube-translate-z", o + "px")
      },
      setTransition: e => {
        const {$el: t, slides: i} = f;
        i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), f.params.cubeEffect.shadow && !f.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
      },
      recreateShadows: () => {
        const i = f.isHorizontal();
        f.slides.each(e => {
          var t = Math.max(Math.min(e.progress, 1), -1);
          g(L(e), t, i)
        })
      },
      getEffectParams: () => f.params.cubeEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: !1,
        virtualTranslate: !0
      })
    })
  }, function (e) {
    let {swiper: u, extendParams: t, on: i} = e;
    t({flipEffect: {slideShadows: !0, limitRotation: !0, transformEl: null}});
    const h = (e, t, i) => {
      let s = u.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
        n = u.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
      0 === s.length && (s = z(i, e, u.isHorizontal() ? "left" : "top")), 0 === n.length && (n = z(i, e, u.isHorizontal() ? "right" : "bottom")), s.length && (s[0].style.opacity = Math.max(-t, 0)), n.length && (n[0].style.opacity = Math.max(t, 0))
    };
    M({
      effect: "flip",
      swiper: u,
      on: i,
      setTranslate: () => {
        const {slides: o, rtlTranslate: a} = u, l = u.params.flipEffect;
        for (let r = 0; r < o.length; r += 1) {
          const d = o.eq(r);
          let e = d[0].progress;
          u.params.flipEffect.limitRotation && (e = Math.max(Math.min(d[0].progress, 1), -1));
          var c = d[0].swiperSlideOffset;
          let t = -180 * e, i = 0, s = u.params.cssMode ? -c - u.translate : -c,
            n = 0;
          u.isHorizontal() ? a && (t = -t) : (n = s, s = 0, i = -t, t = 0), d[0].style.zIndex = -Math.abs(Math.round(e)) + o.length, l.slideShadows && h(d, e, l);
          c = `translate3d(${s}px, ${n}px, 0px) rotateX(${i}deg) rotateY(${t}deg)`;
          P(l, d).transform(c)
        }
      },
      setTransition: e => {
        var t = u.params.flipEffect["transformEl"];
        (t ? u.slides.find(t) : u.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), $({
          swiper: u,
          duration: e,
          transformEl: t
        })
      },
      recreateShadows: () => {
        const s = u.params.flipEffect;
        u.slides.each(e => {
          var t = L(e);
          let i = t[0].progress;
          u.params.flipEffect.limitRotation && (i = Math.max(Math.min(e.progress, 1), -1)), h(t, i, s)
        })
      },
      getEffectParams: () => u.params.flipEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !u.params.cssMode
      })
    })
  }, function (e) {
    let {swiper: b, extendParams: t, on: i} = e;
    t({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0,
        transformEl: null
      }
    }), M({
      effect: "coverflow",
      swiper: b,
      on: i,
      setTranslate: () => {
        const {width: e, height: l, slides: c, slidesSizesGrid: d} = b,
          u = b.params.coverflowEffect, h = b.isHorizontal(), p = b.translate,
          m = h ? e / 2 - p : l / 2 - p, f = h ? u.rotate : -u.rotate,
          g = u.depth;
        for (let a = 0, e = c.length; a < e; a += 1) {
          const b = c.eq(a), l = d[a],
            p = (m - b[0].swiperSlideOffset - l / 2) / l,
            y = "function" == typeof u.modifier ? u.modifier(p) : p * u.modifier;
          let e = h ? f * y : 0, t = h ? 0 : f * y, i = -g * Math.abs(y),
            s = u.stretch,
            n = ("string" == typeof s && -1 !== s.indexOf("%") && (s = parseFloat(u.stretch) / 100 * l), h ? 0 : s * y),
            r = h ? s * y : 0, o = 1 - (1 - u.scale) * Math.abs(y);
          Math.abs(r) < .001 && (r = 0), Math.abs(n) < .001 && (n = 0), Math.abs(i) < .001 && (i = 0), Math.abs(e) < .001 && (e = 0), Math.abs(t) < .001 && (t = 0), Math.abs(o) < .001 && (o = 0);
          var v = `translate3d(${r}px,${n}px,${i}px)  rotateX(${t}deg) rotateY(${e}deg) scale(${o})`;
          if (P(u, b).transform(v), b[0].style.zIndex = 1 - Math.abs(Math.round(y)), u.slideShadows) {
            let e = h ? b.find(".swiper-slide-shadow-left") : b.find(".swiper-slide-shadow-top"),
              t = h ? b.find(".swiper-slide-shadow-right") : b.find(".swiper-slide-shadow-bottom");
            0 === e.length && (e = z(u, b, h ? "left" : "top")), 0 === t.length && (t = z(u, b, h ? "right" : "bottom")), e.length && (e[0].style.opacity = 0 < y ? y : 0), t.length && (t[0].style.opacity = 0 < -y ? -y : 0)
          }
        }
      },
      setTransition: e => {
        var t = b.params.coverflowEffect["transformEl"];
        (t ? b.slides.find(t) : b.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
      },
      perspective: () => !0,
      overwriteParams: () => ({watchSlidesProgress: !0})
    })
  }, function (e) {
    let {swiper: b, extendParams: t, on: i} = e;
    t({
      creativeEffect: {
        transformEl: null,
        limitProgress: 1,
        shadowPerProgress: !1,
        progressMultiplier: 1,
        perspective: !0,
        prev: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1},
        next: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1}
      }
    });
    M({
      effect: "creative",
      swiper: b,
      on: i,
      setTranslate: () => {
        const {slides: n, $wrapperEl: e, slidesSizesGrid: r} = b,
          o = b.params.creativeEffect, a = o["progressMultiplier"],
          l = b.params.centeredSlides;
        if (l) {
          const n = r[0] / 2 - b.params.slidesOffsetBefore || 0;
          e.transform(`translateX(calc(50% - ${n}px))`)
        }
        for (let s = 0; s < n.length; s += 1) {
          const r = n.eq(s), p = r[0].progress,
            m = Math.min(Math.max(r[0].progress, -o.limitProgress), o.limitProgress);
          let e = m;
          l || (e = Math.min(Math.max(r[0].originalProgress, -o.limitProgress), o.limitProgress));
          const f = r[0].swiperSlideOffset,
            g = [b.params.cssMode ? -f - b.translate : -f, 0, 0], v = [0, 0, 0];
          let t = !1, i = (b.isHorizontal() || (g[1] = g[0], g[0] = 0), {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          });
          m < 0 ? (i = o.next, t = !0) : 0 < m && (i = o.prev, t = !0), g.forEach((e, t) => {
            g[t] = `calc(${e}px + (${e = i.translate[t], "string" == typeof e ? e : e + "px"} * ${Math.abs(m * a)}))`
          }), v.forEach((e, t) => {
            v[t] = i.rotate[t] * Math.abs(m * a)
          }), r[0].style.zIndex = -Math.abs(Math.round(p)) + n.length;
          var c = g.join(", "),
            d = `rotateX(${v[0]}deg) rotateY(${v[1]}deg) rotateZ(${v[2]}deg)`,
            u = e < 0 ? `scale(${1 + (1 - i.scale) * e * a})` : `scale(${1 - (1 - i.scale) * e * a})`,
            h = e < 0 ? 1 + (1 - i.opacity) * e * a : 1 - (1 - i.opacity) * e * a,
            c = `translate3d(${c}) ${d} ` + u;
          if (t && i.shadow || !t) {
            let e = r.children(".swiper-slide-shadow");
            if ((e = 0 === e.length && i.shadow ? z(o, r) : e).length) {
              const b = o.shadowPerProgress ? m * (1 / o.limitProgress) : m;
              e[0].style.opacity = Math.min(Math.max(Math.abs(b), 0), 1)
            }
          }
          const y = P(o, r);
          y.transform(c).css({opacity: h}), i.origin && y.css("transform-origin", i.origin)
        }
      },
      setTransition: e => {
        var t = b.params.creativeEffect["transformEl"];
        (t ? b.slides.find(t) : b.slides).transition(e).find(".swiper-slide-shadow").transition(e), $({
          swiper: b,
          duration: e,
          transformEl: t,
          allSlides: !0
        })
      },
      perspective: () => b.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !b.params.cssMode
      })
    })
  }, function (e) {
    let {swiper: b, extendParams: t, on: i} = e;
    t({cardsEffect: {slideShadows: !0, transformEl: null, rotate: !0}}), M({
      effect: "cards",
      swiper: b,
      on: i,
      setTranslate: () => {
        const {slides: a, activeIndex: l} = b, c = b.params.cardsEffect, {
          startTranslate: d,
          isTouched: u
        } = b.touchEventsData, h = b.translate;
        for (let o = 0; o < a.length; o += 1) {
          const g = a.eq(o), v = g[0].progress,
            y = Math.min(Math.max(v, -4), 4);
          let e = g[0].swiperSlideOffset,
            t = (b.params.centeredSlides && !b.params.cssMode && b.$wrapperEl.transform(`translateX(${b.minTranslate()}px)`), b.params.centeredSlides && b.params.cssMode && (e -= a[0].swiperSlideOffset), b.params.cssMode ? -e - b.translate : -e),
            i = 0;
          var p = -100 * Math.abs(y);
          let s = 1, n = -2 * y, r = 8 - .75 * Math.abs(y);
          var m = b.virtual && b.params.virtual.enabled ? b.virtual.from + o : o,
            f = (m === l || m === l - 1) && 0 < y && y < 1 && (u || b.params.cssMode) && h < d,
            m = (m === l || m === l + 1) && y < 0 && -1 < y && (u || b.params.cssMode) && d < h;
          if (f || m) {
            const a = (1 - Math.abs((Math.abs(y) - .5) / .5)) ** .5;
            n += -28 * y * a, s += -.5 * a, r += 96 * a, i = -25 * a * Math.abs(y) + "%"
          }
          if (t = y < 0 ? `calc(${t}px + (${r * Math.abs(y)}%))` : 0 < y ? `calc(${t}px + (-${r * Math.abs(y)}%))` : t + "px", !b.isHorizontal()) {
            const a = i;
            i = t, t = a
          }
          f = y < 0 ? "" + (1 + (1 - s) * y) : "" + (1 - (1 - s) * y), m = `
        translate3d(${t}, ${i}, ${p}px)
        rotateZ(${c.rotate ? n : 0}deg)
        scale(${f})
      `;
          if (c.slideShadows) {
            let e = g.find(".swiper-slide-shadow");
            (e = 0 === e.length ? z(c, g) : e).length && (e[0].style.opacity = Math.min(Math.max((Math.abs(y) - .5) / .5, 0), 1))
          }
          g[0].style.zIndex = -Math.abs(Math.round(v)) + a.length, P(c, g).transform(m)
        }
      },
      setTransition: e => {
        var t = b.params.cardsEffect["transformEl"];
        (t ? b.slides.find(t) : b.slides).transition(e).find(".swiper-slide-shadow").transition(e), $({
          swiper: b,
          duration: e,
          transformEl: t
        })
      },
      perspective: () => !0,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !b.params.cssMode
      })
    })
  }]), T
});
var Typer = function (e) {
  var t = (this.element = e).dataset.delim || ",",
    i = e.dataset.words || "override these,sample typing",
    i = (this.words = i.split(t).filter(e => e), this.delayVariance = parseInt(e.dataset.delayVariance) || 0, this.delay = parseInt(e.dataset.delay) || 200, this.loop = e.dataset.loop || "true", "false" === this.loop && (this.loop = 1), this.deleteDelay = e.dataset.deletedelay || e.dataset.deleteDelay || 800, this.progress = {
      word: 0,
      char: 0,
      building: !0,
      looped: 0
    }, this.typing = !0, e.dataset.colors || "black");
  this.colors = i.split(","), this.element.style.color = this.colors[0], this.colorIndex = 0, this.doTyping()
}, Cursor = (Typer.prototype.start = function () {
  this.typing || (this.typing = !0, this.doTyping())
}, Typer.prototype.stop = function () {
  this.typing = !1
}, Typer.prototype.doTyping = function () {
  var e, t = this.element, i = this.progress, s = i.word, n = i.char,
    n = [...this.words[s]].slice(0, n).join(""),
    r = (2 * Math.random() - 1) * this.delayVariance + this.delay;
  this.cursor && (this.cursor.element.style.opacity = "1", this.cursor.on = !0, clearInterval(this.cursor.interval), this.cursor.interval = setInterval(() => this.cursor.updateBlinkState(), 400)), t.innerHTML = n, i.building ? (e = i.char === this.words[s].length) ? i.building = !1 : i.char += 1 : 0 === i.char ? (i.building = !0, i.word = (i.word + 1) % this.words.length, this.colorIndex = (this.colorIndex + 1) % this.colors.length, this.element.style.color = this.colors[this.colorIndex]) : --i.char, i.word === this.words.length - 1 && (i.looped += 1), !i.building && this.loop <= i.looped && (this.typing = !1), setTimeout(() => {
    this.typing && this.doTyping()
  }, e ? this.deleteDelay : r)
}, function (e) {
  this.element = e, this.cursorDisplay = e.dataset.cursordisplay || e.dataset.cursorDisplay || "|", e.innerHTML = this.cursorDisplay, this.on = !0, e.style.transition = "all 0.1s", this.interval = setInterval(() => this.updateBlinkState(), 400)
});

function TyperSetup() {
  var e, t, i, s, n = {};
  for (e of document.getElementsByClassName("typer")) {
    n[e.id] = new Typer(e);
  }
  for (t of document.getElementsByClassName("typer-stop")) {
    let e = n[t.dataset.owner];
    t.onclick = () => e.stop()
  }
  for (i of document.getElementsByClassName("typer-start")) {
    let e = n[i.dataset.owner];
    i.onclick = () => e.start()
  }
  for (s of document.getElementsByClassName("cursor")) {
    let e = new Cursor(s);
    e.owner = n[s.dataset.owner]
  }
}

Cursor.prototype.updateBlinkState = function () {
  this.on ? (this.element.style.opacity = "0", this.on = !1) : (this.element.style.opacity = "1", this.on = !0)
}, TyperSetup();
