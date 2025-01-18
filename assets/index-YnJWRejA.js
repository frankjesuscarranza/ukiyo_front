var Nh = Object.defineProperty;
var Mh = (n, o, l) =>
  o in n
    ? Nh(n, o, { enumerable: !0, configurable: !0, writable: !0, value: l })
    : (n[o] = l);
var Ho = (n, o, l) => Mh(n, typeof o != "symbol" ? o + "" : o, l);
function Oh(n, o) {
  for (var l = 0; l < o.length; l++) {
    const s = o[l];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const u in s)
        if (u !== "default" && !(u in n)) {
          const f = Object.getOwnPropertyDescriptor(s, u);
          f &&
            Object.defineProperty(
              n,
              u,
              f.get ? f : { enumerable: !0, get: () => s[u] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) s(u);
  new MutationObserver((u) => {
    for (const f of u)
      if (f.type === "childList")
        for (const p of f.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && s(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(u) {
    const f = {};
    return (
      u.integrity && (f.integrity = u.integrity),
      u.referrerPolicy && (f.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : u.crossOrigin === "anonymous"
        ? (f.credentials = "omit")
        : (f.credentials = "same-origin"),
      f
    );
  }
  function s(u) {
    if (u.ep) return;
    u.ep = !0;
    const f = l(u);
    fetch(u.href, f);
  }
})();
function Ih(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var As = { exports: {} },
  Go = {},
  Ls = { exports: {} },
  Se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cd;
function zh() {
  if (cd) return Se;
  cd = 1;
  var n = Symbol.for("react.element"),
    o = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    f = Symbol.for("react.provider"),
    p = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    v = Symbol.for("react.memo"),
    k = Symbol.for("react.lazy"),
    C = Symbol.iterator;
  function E(w) {
    return w === null || typeof w != "object"
      ? null
      : ((w = (C && w[C]) || w["@@iterator"]),
        typeof w == "function" ? w : null);
  }
  var M = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    $ = Object.assign,
    R = {};
  function O(w, A, de) {
    (this.props = w),
      (this.context = A),
      (this.refs = R),
      (this.updater = de || M);
  }
  (O.prototype.isReactComponent = {}),
    (O.prototype.setState = function (w, A) {
      if (typeof w != "object" && typeof w != "function" && w != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, w, A, "setState");
    }),
    (O.prototype.forceUpdate = function (w) {
      this.updater.enqueueForceUpdate(this, w, "forceUpdate");
    });
  function F() {}
  F.prototype = O.prototype;
  function X(w, A, de) {
    (this.props = w),
      (this.context = A),
      (this.refs = R),
      (this.updater = de || M);
  }
  var H = (X.prototype = new F());
  (H.constructor = X), $(H, O.prototype), (H.isPureReactComponent = !0);
  var z = Array.isArray,
    _ = Object.prototype.hasOwnProperty,
    G = { current: null },
    K = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ue(w, A, de) {
    var pe,
      xe = {},
      me = null,
      $e = null;
    if (A != null)
      for (pe in (A.ref !== void 0 && ($e = A.ref),
      A.key !== void 0 && (me = "" + A.key),
      A))
        _.call(A, pe) && !K.hasOwnProperty(pe) && (xe[pe] = A[pe]);
    var Te = arguments.length - 2;
    if (Te === 1) xe.children = de;
    else if (1 < Te) {
      for (var Ie = Array(Te), nt = 0; nt < Te; nt++)
        Ie[nt] = arguments[nt + 2];
      xe.children = Ie;
    }
    if (w && w.defaultProps)
      for (pe in ((Te = w.defaultProps), Te))
        xe[pe] === void 0 && (xe[pe] = Te[pe]);
    return {
      $$typeof: n,
      type: w,
      key: me,
      ref: $e,
      props: xe,
      _owner: G.current,
    };
  }
  function ge(w, A) {
    return {
      $$typeof: n,
      type: w.type,
      key: A,
      ref: w.ref,
      props: w.props,
      _owner: w._owner,
    };
  }
  function h(w) {
    return typeof w == "object" && w !== null && w.$$typeof === n;
  }
  function D(w) {
    var A = { "=": "=0", ":": "=2" };
    return (
      "$" +
      w.replace(/[=:]/g, function (de) {
        return A[de];
      })
    );
  }
  var J = /\/+/g;
  function q(w, A) {
    return typeof w == "object" && w !== null && w.key != null
      ? D("" + w.key)
      : A.toString(36);
  }
  function oe(w, A, de, pe, xe) {
    var me = typeof w;
    (me === "undefined" || me === "boolean") && (w = null);
    var $e = !1;
    if (w === null) $e = !0;
    else
      switch (me) {
        case "string":
        case "number":
          $e = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case n:
            case o:
              $e = !0;
          }
      }
    if ($e)
      return (
        ($e = w),
        (xe = xe($e)),
        (w = pe === "" ? "." + q($e, 0) : pe),
        z(xe)
          ? ((de = ""),
            w != null && (de = w.replace(J, "$&/") + "/"),
            oe(xe, A, de, "", function (nt) {
              return nt;
            }))
          : xe != null &&
            (h(xe) &&
              (xe = ge(
                xe,
                de +
                  (!xe.key || ($e && $e.key === xe.key)
                    ? ""
                    : ("" + xe.key).replace(J, "$&/") + "/") +
                  w
              )),
            A.push(xe)),
        1
      );
    if ((($e = 0), (pe = pe === "" ? "." : pe + ":"), z(w)))
      for (var Te = 0; Te < w.length; Te++) {
        me = w[Te];
        var Ie = pe + q(me, Te);
        $e += oe(me, A, de, Ie, xe);
      }
    else if (((Ie = E(w)), typeof Ie == "function"))
      for (w = Ie.call(w), Te = 0; !(me = w.next()).done; )
        (me = me.value), (Ie = pe + q(me, Te++)), ($e += oe(me, A, de, Ie, xe));
    else if (me === "object")
      throw (
        ((A = String(w)),
        Error(
          "Objects are not valid as a React child (found: " +
            (A === "[object Object]"
              ? "object with keys {" + Object.keys(w).join(", ") + "}"
              : A) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return $e;
  }
  function we(w, A, de) {
    if (w == null) return w;
    var pe = [],
      xe = 0;
    return (
      oe(w, pe, "", "", function (me) {
        return A.call(de, me, xe++);
      }),
      pe
    );
  }
  function ve(w) {
    if (w._status === -1) {
      var A = w._result;
      (A = A()),
        A.then(
          function (de) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 1), (w._result = de));
          },
          function (de) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 2), (w._result = de));
          }
        ),
        w._status === -1 && ((w._status = 0), (w._result = A));
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var he = { current: null },
    V = { transition: null },
    W = {
      ReactCurrentDispatcher: he,
      ReactCurrentBatchConfig: V,
      ReactCurrentOwner: G,
    };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Se.Children = {
      map: we,
      forEach: function (w, A, de) {
        we(
          w,
          function () {
            A.apply(this, arguments);
          },
          de
        );
      },
      count: function (w) {
        var A = 0;
        return (
          we(w, function () {
            A++;
          }),
          A
        );
      },
      toArray: function (w) {
        return (
          we(w, function (A) {
            return A;
          }) || []
        );
      },
      only: function (w) {
        if (!h(w))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return w;
      },
    }),
    (Se.Component = O),
    (Se.Fragment = l),
    (Se.Profiler = u),
    (Se.PureComponent = X),
    (Se.StrictMode = s),
    (Se.Suspense = y),
    (Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W),
    (Se.act = Q),
    (Se.cloneElement = function (w, A, de) {
      if (w == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            w +
            "."
        );
      var pe = $({}, w.props),
        xe = w.key,
        me = w.ref,
        $e = w._owner;
      if (A != null) {
        if (
          (A.ref !== void 0 && ((me = A.ref), ($e = G.current)),
          A.key !== void 0 && (xe = "" + A.key),
          w.type && w.type.defaultProps)
        )
          var Te = w.type.defaultProps;
        for (Ie in A)
          _.call(A, Ie) &&
            !K.hasOwnProperty(Ie) &&
            (pe[Ie] = A[Ie] === void 0 && Te !== void 0 ? Te[Ie] : A[Ie]);
      }
      var Ie = arguments.length - 2;
      if (Ie === 1) pe.children = de;
      else if (1 < Ie) {
        Te = Array(Ie);
        for (var nt = 0; nt < Ie; nt++) Te[nt] = arguments[nt + 2];
        pe.children = Te;
      }
      return {
        $$typeof: n,
        type: w.type,
        key: xe,
        ref: me,
        props: pe,
        _owner: $e,
      };
    }),
    (Se.createContext = function (w) {
      return (
        (w = {
          $$typeof: p,
          _currentValue: w,
          _currentValue2: w,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (w.Provider = { $$typeof: f, _context: w }),
        (w.Consumer = w)
      );
    }),
    (Se.createElement = ue),
    (Se.createFactory = function (w) {
      var A = ue.bind(null, w);
      return (A.type = w), A;
    }),
    (Se.createRef = function () {
      return { current: null };
    }),
    (Se.forwardRef = function (w) {
      return { $$typeof: m, render: w };
    }),
    (Se.isValidElement = h),
    (Se.lazy = function (w) {
      return { $$typeof: k, _payload: { _status: -1, _result: w }, _init: ve };
    }),
    (Se.memo = function (w, A) {
      return { $$typeof: v, type: w, compare: A === void 0 ? null : A };
    }),
    (Se.startTransition = function (w) {
      var A = V.transition;
      V.transition = {};
      try {
        w();
      } finally {
        V.transition = A;
      }
    }),
    (Se.unstable_act = Q),
    (Se.useCallback = function (w, A) {
      return he.current.useCallback(w, A);
    }),
    (Se.useContext = function (w) {
      return he.current.useContext(w);
    }),
    (Se.useDebugValue = function () {}),
    (Se.useDeferredValue = function (w) {
      return he.current.useDeferredValue(w);
    }),
    (Se.useEffect = function (w, A) {
      return he.current.useEffect(w, A);
    }),
    (Se.useId = function () {
      return he.current.useId();
    }),
    (Se.useImperativeHandle = function (w, A, de) {
      return he.current.useImperativeHandle(w, A, de);
    }),
    (Se.useInsertionEffect = function (w, A) {
      return he.current.useInsertionEffect(w, A);
    }),
    (Se.useLayoutEffect = function (w, A) {
      return he.current.useLayoutEffect(w, A);
    }),
    (Se.useMemo = function (w, A) {
      return he.current.useMemo(w, A);
    }),
    (Se.useReducer = function (w, A, de) {
      return he.current.useReducer(w, A, de);
    }),
    (Se.useRef = function (w) {
      return he.current.useRef(w);
    }),
    (Se.useState = function (w) {
      return he.current.useState(w);
    }),
    (Se.useSyncExternalStore = function (w, A, de) {
      return he.current.useSyncExternalStore(w, A, de);
    }),
    (Se.useTransition = function () {
      return he.current.useTransition();
    }),
    (Se.version = "18.3.1"),
    Se
  );
}
var fd;
function iu() {
  return fd || ((fd = 1), (Ls.exports = zh())), Ls.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dd;
function Ah() {
  if (dd) return Go;
  dd = 1;
  var n = iu(),
    o = Symbol.for("react.element"),
    l = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, y, v) {
    var k,
      C = {},
      E = null,
      M = null;
    v !== void 0 && (E = "" + v),
      y.key !== void 0 && (E = "" + y.key),
      y.ref !== void 0 && (M = y.ref);
    for (k in y) s.call(y, k) && !f.hasOwnProperty(k) && (C[k] = y[k]);
    if (m && m.defaultProps)
      for (k in ((y = m.defaultProps), y)) C[k] === void 0 && (C[k] = y[k]);
    return {
      $$typeof: o,
      type: m,
      key: E,
      ref: M,
      props: C,
      _owner: u.current,
    };
  }
  return (Go.Fragment = l), (Go.jsx = p), (Go.jsxs = p), Go;
}
var pd;
function Lh() {
  return pd || ((pd = 1), (As.exports = Ah())), As.exports;
}
var te = Lh(),
  I = iu();
const qr = Ih(I),
  md = Oh({ __proto__: null, default: qr }, [I]);
var vl = {},
  Bs = { exports: {} },
  Pt = {},
  js = { exports: {} },
  Ds = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hd;
function Bh() {
  return (
    hd ||
      ((hd = 1),
      (function (n) {
        function o(V, W) {
          var Q = V.length;
          V.push(W);
          e: for (; 0 < Q; ) {
            var w = (Q - 1) >>> 1,
              A = V[w];
            if (0 < u(A, W)) (V[w] = W), (V[Q] = A), (Q = w);
            else break e;
          }
        }
        function l(V) {
          return V.length === 0 ? null : V[0];
        }
        function s(V) {
          if (V.length === 0) return null;
          var W = V[0],
            Q = V.pop();
          if (Q !== W) {
            V[0] = Q;
            e: for (var w = 0, A = V.length, de = A >>> 1; w < de; ) {
              var pe = 2 * (w + 1) - 1,
                xe = V[pe],
                me = pe + 1,
                $e = V[me];
              if (0 > u(xe, Q))
                me < A && 0 > u($e, xe)
                  ? ((V[w] = $e), (V[me] = Q), (w = me))
                  : ((V[w] = xe), (V[pe] = Q), (w = pe));
              else if (me < A && 0 > u($e, Q))
                (V[w] = $e), (V[me] = Q), (w = me);
              else break e;
            }
          }
          return W;
        }
        function u(V, W) {
          var Q = V.sortIndex - W.sortIndex;
          return Q !== 0 ? Q : V.id - W.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var f = performance;
          n.unstable_now = function () {
            return f.now();
          };
        } else {
          var p = Date,
            m = p.now();
          n.unstable_now = function () {
            return p.now() - m;
          };
        }
        var y = [],
          v = [],
          k = 1,
          C = null,
          E = 3,
          M = !1,
          $ = !1,
          R = !1,
          O = typeof setTimeout == "function" ? setTimeout : null,
          F = typeof clearTimeout == "function" ? clearTimeout : null,
          X = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function H(V) {
          for (var W = l(v); W !== null; ) {
            if (W.callback === null) s(v);
            else if (W.startTime <= V)
              s(v), (W.sortIndex = W.expirationTime), o(y, W);
            else break;
            W = l(v);
          }
        }
        function z(V) {
          if (((R = !1), H(V), !$))
            if (l(y) !== null) ($ = !0), ve(_);
            else {
              var W = l(v);
              W !== null && he(z, W.startTime - V);
            }
        }
        function _(V, W) {
          ($ = !1), R && ((R = !1), F(ue), (ue = -1)), (M = !0);
          var Q = E;
          try {
            for (
              H(W), C = l(y);
              C !== null && (!(C.expirationTime > W) || (V && !D()));

            ) {
              var w = C.callback;
              if (typeof w == "function") {
                (C.callback = null), (E = C.priorityLevel);
                var A = w(C.expirationTime <= W);
                (W = n.unstable_now()),
                  typeof A == "function"
                    ? (C.callback = A)
                    : C === l(y) && s(y),
                  H(W);
              } else s(y);
              C = l(y);
            }
            if (C !== null) var de = !0;
            else {
              var pe = l(v);
              pe !== null && he(z, pe.startTime - W), (de = !1);
            }
            return de;
          } finally {
            (C = null), (E = Q), (M = !1);
          }
        }
        var G = !1,
          K = null,
          ue = -1,
          ge = 5,
          h = -1;
        function D() {
          return !(n.unstable_now() - h < ge);
        }
        function J() {
          if (K !== null) {
            var V = n.unstable_now();
            h = V;
            var W = !0;
            try {
              W = K(!0, V);
            } finally {
              W ? q() : ((G = !1), (K = null));
            }
          } else G = !1;
        }
        var q;
        if (typeof X == "function")
          q = function () {
            X(J);
          };
        else if (typeof MessageChannel < "u") {
          var oe = new MessageChannel(),
            we = oe.port2;
          (oe.port1.onmessage = J),
            (q = function () {
              we.postMessage(null);
            });
        } else
          q = function () {
            O(J, 0);
          };
        function ve(V) {
          (K = V), G || ((G = !0), q());
        }
        function he(V, W) {
          ue = O(function () {
            V(n.unstable_now());
          }, W);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (V) {
            V.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            $ || M || (($ = !0), ve(_));
          }),
          (n.unstable_forceFrameRate = function (V) {
            0 > V || 125 < V
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ge = 0 < V ? Math.floor(1e3 / V) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return E;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return l(y);
          }),
          (n.unstable_next = function (V) {
            switch (E) {
              case 1:
              case 2:
              case 3:
                var W = 3;
                break;
              default:
                W = E;
            }
            var Q = E;
            E = W;
            try {
              return V();
            } finally {
              E = Q;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (V, W) {
            switch (V) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                V = 3;
            }
            var Q = E;
            E = V;
            try {
              return W();
            } finally {
              E = Q;
            }
          }),
          (n.unstable_scheduleCallback = function (V, W, Q) {
            var w = n.unstable_now();
            switch (
              (typeof Q == "object" && Q !== null
                ? ((Q = Q.delay),
                  (Q = typeof Q == "number" && 0 < Q ? w + Q : w))
                : (Q = w),
              V)
            ) {
              case 1:
                var A = -1;
                break;
              case 2:
                A = 250;
                break;
              case 5:
                A = 1073741823;
                break;
              case 4:
                A = 1e4;
                break;
              default:
                A = 5e3;
            }
            return (
              (A = Q + A),
              (V = {
                id: k++,
                callback: W,
                priorityLevel: V,
                startTime: Q,
                expirationTime: A,
                sortIndex: -1,
              }),
              Q > w
                ? ((V.sortIndex = Q),
                  o(v, V),
                  l(y) === null &&
                    V === l(v) &&
                    (R ? (F(ue), (ue = -1)) : (R = !0), he(z, Q - w)))
                : ((V.sortIndex = A), o(y, V), $ || M || (($ = !0), ve(_))),
              V
            );
          }),
          (n.unstable_shouldYield = D),
          (n.unstable_wrapCallback = function (V) {
            var W = E;
            return function () {
              var Q = E;
              E = W;
              try {
                return V.apply(this, arguments);
              } finally {
                E = Q;
              }
            };
          });
      })(Ds)),
    Ds
  );
}
var gd;
function jh() {
  return gd || ((gd = 1), (js.exports = Bh())), js.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yd;
function Dh() {
  if (yd) return Pt;
  yd = 1;
  var n = iu(),
    o = jh();
  function l(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var s = new Set(),
    u = {};
  function f(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var m = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    y = Object.prototype.hasOwnProperty,
    v =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    k = {},
    C = {};
  function E(e) {
    return y.call(C, e)
      ? !0
      : y.call(k, e)
      ? !1
      : v.test(e)
      ? (C[e] = !0)
      : ((k[e] = !0), !1);
  }
  function M(e, t, r, i) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return i
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function $(e, t, r, i) {
    if (t === null || typeof t > "u" || M(e, t, r, i)) return !0;
    if (i) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function R(e, t, r, i, a, c, d) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = i),
      (this.attributeNamespace = a),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = d);
  }
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      O[e] = new R(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      O[t] = new R(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      O[e] = new R(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      O[e] = new R(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        O[e] = new R(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      O[e] = new R(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      O[e] = new R(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      O[e] = new R(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      O[e] = new R(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var F = /[\-:]([a-z])/g;
  function X(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(F, X);
      O[t] = new R(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(F, X);
        O[t] = new R(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(F, X);
      O[t] = new R(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      O[e] = new R(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (O.xlinkHref = new R(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      O[e] = new R(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function H(e, t, r, i) {
    var a = O.hasOwnProperty(t) ? O[t] : null;
    (a !== null
      ? a.type !== 0
      : i ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      ($(t, r, a, i) && (r = null),
      i || a === null
        ? E(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : a.mustUseProperty
        ? (e[a.propertyName] = r === null ? (a.type === 3 ? !1 : "") : r)
        : ((t = a.attributeName),
          (i = a.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((a = a.type),
              (r = a === 3 || (a === 4 && r === !0) ? "" : "" + r),
              i ? e.setAttributeNS(i, t, r) : e.setAttribute(t, r))));
  }
  var z = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    _ = Symbol.for("react.element"),
    G = Symbol.for("react.portal"),
    K = Symbol.for("react.fragment"),
    ue = Symbol.for("react.strict_mode"),
    ge = Symbol.for("react.profiler"),
    h = Symbol.for("react.provider"),
    D = Symbol.for("react.context"),
    J = Symbol.for("react.forward_ref"),
    q = Symbol.for("react.suspense"),
    oe = Symbol.for("react.suspense_list"),
    we = Symbol.for("react.memo"),
    ve = Symbol.for("react.lazy"),
    he = Symbol.for("react.offscreen"),
    V = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (V && e[V]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Q = Object.assign,
    w;
  function A(e) {
    if (w === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        w = (t && t[1]) || "";
      }
    return (
      `
` +
      w +
      e
    );
  }
  var de = !1;
  function pe(e, t) {
    if (!e || de) return "";
    de = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (b) {
            var i = b;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (b) {
            i = b;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (b) {
          i = b;
        }
        e();
      }
    } catch (b) {
      if (b && i && typeof b.stack == "string") {
        for (
          var a = b.stack.split(`
`),
            c = i.stack.split(`
`),
            d = a.length - 1,
            g = c.length - 1;
          1 <= d && 0 <= g && a[d] !== c[g];

        )
          g--;
        for (; 1 <= d && 0 <= g; d--, g--)
          if (a[d] !== c[g]) {
            if (d !== 1 || g !== 1)
              do
                if ((d--, g--, 0 > g || a[d] !== c[g])) {
                  var S =
                    `
` + a[d].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      S.includes("<anonymous>") &&
                      (S = S.replace("<anonymous>", e.displayName)),
                    S
                  );
                }
              while (1 <= d && 0 <= g);
            break;
          }
      }
    } finally {
      (de = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? A(e) : "";
  }
  function xe(e) {
    switch (e.tag) {
      case 5:
        return A(e.type);
      case 16:
        return A("Lazy");
      case 13:
        return A("Suspense");
      case 19:
        return A("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = pe(e.type, !1)), e;
      case 11:
        return (e = pe(e.type.render, !1)), e;
      case 1:
        return (e = pe(e.type, !0)), e;
      default:
        return "";
    }
  }
  function me(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case K:
        return "Fragment";
      case G:
        return "Portal";
      case ge:
        return "Profiler";
      case ue:
        return "StrictMode";
      case q:
        return "Suspense";
      case oe:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case D:
          return (e.displayName || "Context") + ".Consumer";
        case h:
          return (e._context.displayName || "Context") + ".Provider";
        case J:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case we:
          return (
            (t = e.displayName || null), t !== null ? t : me(e.type) || "Memo"
          );
        case ve:
          (t = e._payload), (e = e._init);
          try {
            return me(e(t));
          } catch {}
      }
    return null;
  }
  function $e(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return me(t);
      case 8:
        return t === ue ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Te(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ie(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function nt(e) {
    var t = Ie(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      i = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var a = r.get,
        c = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (d) {
            (i = "" + d), c.call(this, d);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (d) {
            i = "" + d;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function $n(e) {
    e._valueTracker || (e._valueTracker = nt(e));
  }
  function er(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      i = "";
    return (
      e && (i = Ie(e) ? (e.checked ? "true" : "false") : e.value),
      (e = i),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function _n(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ln(e, t) {
    var r = t.checked;
    return Q({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function Cr(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      i = t.checked != null ? t.checked : t.defaultChecked;
    (r = Te(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: i,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function tr(e, t) {
    (t = t.checked), t != null && H(e, "checked", t, !1);
  }
  function rt(e, t) {
    tr(e, t);
    var r = Te(t.value),
      i = t.type;
    if (r != null)
      i === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Nn(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && Nn(e, t.type, Te(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function ct(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (
        !(
          (i !== "submit" && i !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r);
  }
  function Nn(e, t, r) {
    (t !== "number" || _n(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var vt = Array.isArray;
  function Dt(e, t, r, i) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
      for (r = 0; r < e.length; r++)
        (a = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== a && (e[r].selected = a),
          a && i && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Te(r), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          (e[a].selected = !0), i && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function fe(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return Q({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function io(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(l(92));
        if (vt(r)) {
          if (1 < r.length) throw Error(l(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: Te(r) };
  }
  function ai(e, t) {
    var r = Te(t.value),
      i = Te(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      i != null && (e.defaultValue = "" + i);
  }
  function si(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function ui(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? ui(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var nr,
    rr = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, i, a) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, i, a);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          nr = nr || document.createElement("div"),
            nr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = nr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Mn(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var an = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Zl = ["Webkit", "ms", "Moz", "O"];
  Object.keys(an).forEach(function (e) {
    Zl.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (an[t] = an[e]);
    });
  });
  function ci(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (an.hasOwnProperty(e) && an[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function xr(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var i = r.indexOf("--") === 0,
          a = ci(r, t[r], i);
        r === "float" && (r = "cssFloat"), i ? e.setProperty(r, a) : (e[r] = a);
      }
  }
  var le = Q(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function ie(e, t) {
    if (t) {
      if (le[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
    }
  }
  function Pe(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ke = null;
  function Le(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var St = null,
    wt = null,
    Ft = null;
  function ao(e) {
    if ((e = _o(e))) {
      if (typeof St != "function") throw Error(l(280));
      var t = e.stateNode;
      t && ((t = Oi(t)), St(e.stateNode, e.type, t));
    }
  }
  function kr(e) {
    wt ? (Ft ? Ft.push(e) : (Ft = [e])) : (wt = e);
  }
  function bu() {
    if (wt) {
      var e = wt,
        t = Ft;
      if (((Ft = wt = null), ao(e), t)) for (e = 0; e < t.length; e++) ao(t[e]);
    }
  }
  function $u(e, t) {
    return e(t);
  }
  function _u() {}
  var Jl = !1;
  function Nu(e, t, r) {
    if (Jl) return e(t, r);
    Jl = !0;
    try {
      return $u(e, t, r);
    } finally {
      (Jl = !1), (wt !== null || Ft !== null) && (_u(), bu());
    }
  }
  function so(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var i = Oi(r);
    if (i === null) return null;
    r = i[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) ||
          ((e = e.type),
          (i = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !i);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(l(231, t, typeof r));
    return r;
  }
  var ea = !1;
  if (m)
    try {
      var uo = {};
      Object.defineProperty(uo, "passive", {
        get: function () {
          ea = !0;
        },
      }),
        window.addEventListener("test", uo, uo),
        window.removeEventListener("test", uo, uo);
    } catch {
      ea = !1;
    }
  function Bp(e, t, r, i, a, c, d, g, S) {
    var b = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, b);
    } catch (B) {
      this.onError(B);
    }
  }
  var co = !1,
    fi = null,
    di = !1,
    ta = null,
    jp = {
      onError: function (e) {
        (co = !0), (fi = e);
      },
    };
  function Dp(e, t, r, i, a, c, d, g, S) {
    (co = !1), (fi = null), Bp.apply(jp, arguments);
  }
  function Fp(e, t, r, i, a, c, d, g, S) {
    if ((Dp.apply(this, arguments), co)) {
      if (co) {
        var b = fi;
        (co = !1), (fi = null);
      } else throw Error(l(198));
      di || ((di = !0), (ta = b));
    }
  }
  function or(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Mu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Ou(e) {
    if (or(e) !== e) throw Error(l(188));
  }
  function Wp(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = or(e)), t === null)) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var r = e, i = t; ; ) {
      var a = r.return;
      if (a === null) break;
      var c = a.alternate;
      if (c === null) {
        if (((i = a.return), i !== null)) {
          r = i;
          continue;
        }
        break;
      }
      if (a.child === c.child) {
        for (c = a.child; c; ) {
          if (c === r) return Ou(a), e;
          if (c === i) return Ou(a), t;
          c = c.sibling;
        }
        throw Error(l(188));
      }
      if (r.return !== i.return) (r = a), (i = c);
      else {
        for (var d = !1, g = a.child; g; ) {
          if (g === r) {
            (d = !0), (r = a), (i = c);
            break;
          }
          if (g === i) {
            (d = !0), (i = a), (r = c);
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = c.child; g; ) {
            if (g === r) {
              (d = !0), (r = c), (i = a);
              break;
            }
            if (g === i) {
              (d = !0), (i = c), (r = a);
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(l(189));
        }
      }
      if (r.alternate !== i) throw Error(l(190));
    }
    if (r.tag !== 3) throw Error(l(188));
    return r.stateNode.current === r ? e : t;
  }
  function Iu(e) {
    return (e = Wp(e)), e !== null ? zu(e) : null;
  }
  function zu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = zu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Au = o.unstable_scheduleCallback,
    Lu = o.unstable_cancelCallback,
    Vp = o.unstable_shouldYield,
    Up = o.unstable_requestPaint,
    Qe = o.unstable_now,
    Hp = o.unstable_getCurrentPriorityLevel,
    na = o.unstable_ImmediatePriority,
    Bu = o.unstable_UserBlockingPriority,
    pi = o.unstable_NormalPriority,
    Gp = o.unstable_LowPriority,
    ju = o.unstable_IdlePriority,
    mi = null,
    sn = null;
  function Kp(e) {
    if (sn && typeof sn.onCommitFiberRoot == "function")
      try {
        sn.onCommitFiberRoot(mi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Zt = Math.clz32 ? Math.clz32 : Yp,
    Qp = Math.log,
    Xp = Math.LN2;
  function Yp(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Qp(e) / Xp) | 0)) | 0;
  }
  var hi = 64,
    gi = 4194304;
  function fo(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function yi(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var i = 0,
      a = e.suspendedLanes,
      c = e.pingedLanes,
      d = r & 268435455;
    if (d !== 0) {
      var g = d & ~a;
      g !== 0 ? (i = fo(g)) : ((c &= d), c !== 0 && (i = fo(c)));
    } else (d = r & ~a), d !== 0 ? (i = fo(d)) : c !== 0 && (i = fo(c));
    if (i === 0) return 0;
    if (
      t !== 0 &&
      t !== i &&
      !(t & a) &&
      ((a = i & -i), (c = t & -t), a >= c || (a === 16 && (c & 4194240) !== 0))
    )
      return t;
    if ((i & 4 && (i |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= i; 0 < t; )
        (r = 31 - Zt(t)), (a = 1 << r), (i |= e[r]), (t &= ~a);
    return i;
  }
  function qp(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Zp(e, t) {
    for (
      var r = e.suspendedLanes,
        i = e.pingedLanes,
        a = e.expirationTimes,
        c = e.pendingLanes;
      0 < c;

    ) {
      var d = 31 - Zt(c),
        g = 1 << d,
        S = a[d];
      S === -1
        ? (!(g & r) || g & i) && (a[d] = qp(g, t))
        : S <= t && (e.expiredLanes |= g),
        (c &= ~g);
    }
  }
  function ra(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Du() {
    var e = hi;
    return (hi <<= 1), !(hi & 4194240) && (hi = 64), e;
  }
  function oa(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function po(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Zt(t)),
      (e[t] = r);
  }
  function Jp(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var a = 31 - Zt(r),
        c = 1 << a;
      (t[a] = 0), (i[a] = -1), (e[a] = -1), (r &= ~c);
    }
  }
  function ia(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var i = 31 - Zt(r),
        a = 1 << i;
      (a & t) | (e[i] & t) && (e[i] |= t), (r &= ~a);
    }
  }
  var Oe = 0;
  function Fu(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Wu,
    la,
    Vu,
    Uu,
    Hu,
    aa = !1,
    vi = [],
    On = null,
    In = null,
    zn = null,
    mo = new Map(),
    ho = new Map(),
    An = [],
    em =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Gu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        On = null;
        break;
      case "dragenter":
      case "dragleave":
        In = null;
        break;
      case "mouseover":
      case "mouseout":
        zn = null;
        break;
      case "pointerover":
      case "pointerout":
        mo.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ho.delete(t.pointerId);
    }
  }
  function go(e, t, r, i, a, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: i,
          nativeEvent: c,
          targetContainers: [a],
        }),
        t !== null && ((t = _o(t)), t !== null && la(t)),
        e)
      : ((e.eventSystemFlags |= i),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function tm(e, t, r, i, a) {
    switch (t) {
      case "focusin":
        return (On = go(On, e, t, r, i, a)), !0;
      case "dragenter":
        return (In = go(In, e, t, r, i, a)), !0;
      case "mouseover":
        return (zn = go(zn, e, t, r, i, a)), !0;
      case "pointerover":
        var c = a.pointerId;
        return mo.set(c, go(mo.get(c) || null, e, t, r, i, a)), !0;
      case "gotpointercapture":
        return (
          (c = a.pointerId), ho.set(c, go(ho.get(c) || null, e, t, r, i, a)), !0
        );
    }
    return !1;
  }
  function Ku(e) {
    var t = ir(e.target);
    if (t !== null) {
      var r = or(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Mu(r)), t !== null)) {
            (e.blockedOn = t),
              Hu(e.priority, function () {
                Vu(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Si(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = ua(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var i = new r.constructor(r.type, r);
        (ke = i), r.target.dispatchEvent(i), (ke = null);
      } else return (t = _o(r)), t !== null && la(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function Qu(e, t, r) {
    Si(e) && r.delete(t);
  }
  function nm() {
    (aa = !1),
      On !== null && Si(On) && (On = null),
      In !== null && Si(In) && (In = null),
      zn !== null && Si(zn) && (zn = null),
      mo.forEach(Qu),
      ho.forEach(Qu);
  }
  function yo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      aa ||
        ((aa = !0),
        o.unstable_scheduleCallback(o.unstable_NormalPriority, nm)));
  }
  function vo(e) {
    function t(a) {
      return yo(a, e);
    }
    if (0 < vi.length) {
      yo(vi[0], e);
      for (var r = 1; r < vi.length; r++) {
        var i = vi[r];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (
      On !== null && yo(On, e),
        In !== null && yo(In, e),
        zn !== null && yo(zn, e),
        mo.forEach(t),
        ho.forEach(t),
        r = 0;
      r < An.length;
      r++
    )
      (i = An[r]), i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < An.length && ((r = An[0]), r.blockedOn === null); )
      Ku(r), r.blockedOn === null && An.shift();
  }
  var Er = z.ReactCurrentBatchConfig,
    wi = !0;
  function rm(e, t, r, i) {
    var a = Oe,
      c = Er.transition;
    Er.transition = null;
    try {
      (Oe = 1), sa(e, t, r, i);
    } finally {
      (Oe = a), (Er.transition = c);
    }
  }
  function om(e, t, r, i) {
    var a = Oe,
      c = Er.transition;
    Er.transition = null;
    try {
      (Oe = 4), sa(e, t, r, i);
    } finally {
      (Oe = a), (Er.transition = c);
    }
  }
  function sa(e, t, r, i) {
    if (wi) {
      var a = ua(e, t, r, i);
      if (a === null) Pa(e, t, i, Ci, r), Gu(e, i);
      else if (tm(a, e, t, r, i)) i.stopPropagation();
      else if ((Gu(e, i), t & 4 && -1 < em.indexOf(e))) {
        for (; a !== null; ) {
          var c = _o(a);
          if (
            (c !== null && Wu(c),
            (c = ua(e, t, r, i)),
            c === null && Pa(e, t, i, Ci, r),
            c === a)
          )
            break;
          a = c;
        }
        a !== null && i.stopPropagation();
      } else Pa(e, t, i, null, r);
    }
  }
  var Ci = null;
  function ua(e, t, r, i) {
    if (((Ci = null), (e = Le(i)), (e = ir(e)), e !== null))
      if (((t = or(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Mu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Ci = e), null;
  }
  function Xu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Hp()) {
          case na:
            return 1;
          case Bu:
            return 4;
          case pi:
          case Gp:
            return 16;
          case ju:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ln = null,
    ca = null,
    xi = null;
  function Yu() {
    if (xi) return xi;
    var e,
      t = ca,
      r = t.length,
      i,
      a = "value" in Ln ? Ln.value : Ln.textContent,
      c = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++);
    var d = r - e;
    for (i = 1; i <= d && t[r - i] === a[c - i]; i++);
    return (xi = a.slice(e, 1 < i ? 1 - i : void 0));
  }
  function ki(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ei() {
    return !0;
  }
  function qu() {
    return !1;
  }
  function Nt(e) {
    function t(r, i, a, c, d) {
      (this._reactName = r),
        (this._targetInst = a),
        (this.type = i),
        (this.nativeEvent = c),
        (this.target = d),
        (this.currentTarget = null);
      for (var g in e)
        e.hasOwnProperty(g) && ((r = e[g]), (this[g] = r ? r(c) : c[g]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Ei
          : qu),
        (this.isPropagationStopped = qu),
        this
      );
    }
    return (
      Q(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = Ei));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Ei));
        },
        persist: function () {},
        isPersistent: Ei,
      }),
      t
    );
  }
  var Tr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    fa = Nt(Tr),
    So = Q({}, Tr, { view: 0, detail: 0 }),
    im = Nt(So),
    da,
    pa,
    wo,
    Ti = Q({}, So, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ha,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== wo &&
              (wo && e.type === "mousemove"
                ? ((da = e.screenX - wo.screenX), (pa = e.screenY - wo.screenY))
                : (pa = da = 0),
              (wo = e)),
            da);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : pa;
      },
    }),
    Zu = Nt(Ti),
    lm = Q({}, Ti, { dataTransfer: 0 }),
    am = Nt(lm),
    sm = Q({}, So, { relatedTarget: 0 }),
    ma = Nt(sm),
    um = Q({}, Tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    cm = Nt(um),
    fm = Q({}, Tr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    dm = Nt(fm),
    pm = Q({}, Tr, { data: 0 }),
    Ju = Nt(pm),
    mm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    hm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    gm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ym(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = gm[e])
      ? !!t[e]
      : !1;
  }
  function ha() {
    return ym;
  }
  var vm = Q({}, So, {
      key: function (e) {
        if (e.key) {
          var t = mm[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ki(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? hm[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ha,
      charCode: function (e) {
        return e.type === "keypress" ? ki(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ki(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Sm = Nt(vm),
    wm = Q({}, Ti, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ec = Nt(wm),
    Cm = Q({}, So, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ha,
    }),
    xm = Nt(Cm),
    km = Q({}, Tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Em = Nt(km),
    Tm = Q({}, Ti, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Pm = Nt(Tm),
    Rm = [9, 13, 27, 32],
    ga = m && "CompositionEvent" in window,
    Co = null;
  m && "documentMode" in document && (Co = document.documentMode);
  var bm = m && "TextEvent" in window && !Co,
    tc = m && (!ga || (Co && 8 < Co && 11 >= Co)),
    nc = " ",
    rc = !1;
  function oc(e, t) {
    switch (e) {
      case "keyup":
        return Rm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ic(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Pr = !1;
  function $m(e, t) {
    switch (e) {
      case "compositionend":
        return ic(t);
      case "keypress":
        return t.which !== 32 ? null : ((rc = !0), nc);
      case "textInput":
        return (e = t.data), e === nc && rc ? null : e;
      default:
        return null;
    }
  }
  function _m(e, t) {
    if (Pr)
      return e === "compositionend" || (!ga && oc(e, t))
        ? ((e = Yu()), (xi = ca = Ln = null), (Pr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return tc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Nm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function lc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Nm[e.type] : t === "textarea";
  }
  function ac(e, t, r, i) {
    kr(i),
      (t = _i(t, "onChange")),
      0 < t.length &&
        ((r = new fa("onChange", "change", null, r, i)),
        e.push({ event: r, listeners: t }));
  }
  var xo = null,
    ko = null;
  function Mm(e) {
    Tc(e, 0);
  }
  function Pi(e) {
    var t = Nr(e);
    if (er(t)) return e;
  }
  function Om(e, t) {
    if (e === "change") return t;
  }
  var sc = !1;
  if (m) {
    var ya;
    if (m) {
      var va = "oninput" in document;
      if (!va) {
        var uc = document.createElement("div");
        uc.setAttribute("oninput", "return;"),
          (va = typeof uc.oninput == "function");
      }
      ya = va;
    } else ya = !1;
    sc = ya && (!document.documentMode || 9 < document.documentMode);
  }
  function cc() {
    xo && (xo.detachEvent("onpropertychange", fc), (ko = xo = null));
  }
  function fc(e) {
    if (e.propertyName === "value" && Pi(ko)) {
      var t = [];
      ac(t, ko, e, Le(e)), Nu(Mm, t);
    }
  }
  function Im(e, t, r) {
    e === "focusin"
      ? (cc(), (xo = t), (ko = r), xo.attachEvent("onpropertychange", fc))
      : e === "focusout" && cc();
  }
  function zm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Pi(ko);
  }
  function Am(e, t) {
    if (e === "click") return Pi(t);
  }
  function Lm(e, t) {
    if (e === "input" || e === "change") return Pi(t);
  }
  function Bm(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Jt = typeof Object.is == "function" ? Object.is : Bm;
  function Eo(e, t) {
    if (Jt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      i = Object.keys(t);
    if (r.length !== i.length) return !1;
    for (i = 0; i < r.length; i++) {
      var a = r[i];
      if (!y.call(t, a) || !Jt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function dc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function pc(e, t) {
    var r = dc(e);
    e = 0;
    for (var i; r; ) {
      if (r.nodeType === 3) {
        if (((i = e + r.textContent.length), e <= t && i >= t))
          return { node: r, offset: t - e };
        e = i;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = dc(r);
    }
  }
  function mc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? mc(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function hc() {
    for (var e = window, t = _n(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = _n(e.document);
    }
    return t;
  }
  function Sa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function jm(e) {
    var t = hc(),
      r = e.focusedElem,
      i = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      mc(r.ownerDocument.documentElement, r)
    ) {
      if (i !== null && Sa(r)) {
        if (
          ((t = i.start),
          (e = i.end),
          e === void 0 && (e = t),
          "selectionStart" in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var a = r.textContent.length,
            c = Math.min(i.start, a);
          (i = i.end === void 0 ? c : Math.min(i.end, a)),
            !e.extend && c > i && ((a = i), (i = c), (c = a)),
            (a = pc(r, c));
          var d = pc(r, i);
          a &&
            d &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== d.node ||
              e.focusOffset !== d.offset) &&
            ((t = t.createRange()),
            t.setStart(a.node, a.offset),
            e.removeAllRanges(),
            c > i
              ? (e.addRange(t), e.extend(d.node, d.offset))
              : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Dm = m && "documentMode" in document && 11 >= document.documentMode,
    Rr = null,
    wa = null,
    To = null,
    Ca = !1;
  function gc(e, t, r) {
    var i =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Ca ||
      Rr == null ||
      Rr !== _n(i) ||
      ((i = Rr),
      "selectionStart" in i && Sa(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (To && Eo(To, i)) ||
        ((To = i),
        (i = _i(wa, "onSelect")),
        0 < i.length &&
          ((t = new fa("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: i }),
          (t.target = Rr))));
  }
  function Ri(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var br = {
      animationend: Ri("Animation", "AnimationEnd"),
      animationiteration: Ri("Animation", "AnimationIteration"),
      animationstart: Ri("Animation", "AnimationStart"),
      transitionend: Ri("Transition", "TransitionEnd"),
    },
    xa = {},
    yc = {};
  m &&
    ((yc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete br.animationend.animation,
      delete br.animationiteration.animation,
      delete br.animationstart.animation),
    "TransitionEvent" in window || delete br.transitionend.transition);
  function bi(e) {
    if (xa[e]) return xa[e];
    if (!br[e]) return e;
    var t = br[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in yc) return (xa[e] = t[r]);
    return e;
  }
  var vc = bi("animationend"),
    Sc = bi("animationiteration"),
    wc = bi("animationstart"),
    Cc = bi("transitionend"),
    xc = new Map(),
    kc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Bn(e, t) {
    xc.set(e, t), f(t, [e]);
  }
  for (var ka = 0; ka < kc.length; ka++) {
    var Ea = kc[ka],
      Fm = Ea.toLowerCase(),
      Wm = Ea[0].toUpperCase() + Ea.slice(1);
    Bn(Fm, "on" + Wm);
  }
  Bn(vc, "onAnimationEnd"),
    Bn(Sc, "onAnimationIteration"),
    Bn(wc, "onAnimationStart"),
    Bn("dblclick", "onDoubleClick"),
    Bn("focusin", "onFocus"),
    Bn("focusout", "onBlur"),
    Bn(Cc, "onTransitionEnd"),
    p("onMouseEnter", ["mouseout", "mouseover"]),
    p("onMouseLeave", ["mouseout", "mouseover"]),
    p("onPointerEnter", ["pointerout", "pointerover"]),
    p("onPointerLeave", ["pointerout", "pointerover"]),
    f(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    f(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    f(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    f(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    f(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Po =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Vm = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Po)
    );
  function Ec(e, t, r) {
    var i = e.type || "unknown-event";
    (e.currentTarget = r), Fp(i, t, void 0, e), (e.currentTarget = null);
  }
  function Tc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var i = e[r],
        a = i.event;
      i = i.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var d = i.length - 1; 0 <= d; d--) {
            var g = i[d],
              S = g.instance,
              b = g.currentTarget;
            if (((g = g.listener), S !== c && a.isPropagationStopped()))
              break e;
            Ec(a, g, b), (c = S);
          }
        else
          for (d = 0; d < i.length; d++) {
            if (
              ((g = i[d]),
              (S = g.instance),
              (b = g.currentTarget),
              (g = g.listener),
              S !== c && a.isPropagationStopped())
            )
              break e;
            Ec(a, g, b), (c = S);
          }
      }
    }
    if (di) throw ((e = ta), (di = !1), (ta = null), e);
  }
  function je(e, t) {
    var r = t[Ma];
    r === void 0 && (r = t[Ma] = new Set());
    var i = e + "__bubble";
    r.has(i) || (Pc(t, e, 2, !1), r.add(i));
  }
  function Ta(e, t, r) {
    var i = 0;
    t && (i |= 4), Pc(r, e, i, t);
  }
  var $i = "_reactListening" + Math.random().toString(36).slice(2);
  function Ro(e) {
    if (!e[$i]) {
      (e[$i] = !0),
        s.forEach(function (r) {
          r !== "selectionchange" && (Vm.has(r) || Ta(r, !1, e), Ta(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$i] || ((t[$i] = !0), Ta("selectionchange", !1, t));
    }
  }
  function Pc(e, t, r, i) {
    switch (Xu(t)) {
      case 1:
        var a = rm;
        break;
      case 4:
        a = om;
        break;
      default:
        a = sa;
    }
    (r = a.bind(null, t, r, e)),
      (a = void 0),
      !ea ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (a = !0),
      i
        ? a !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: a })
          : e.addEventListener(t, r, !0)
        : a !== void 0
        ? e.addEventListener(t, r, { passive: a })
        : e.addEventListener(t, r, !1);
  }
  function Pa(e, t, r, i, a) {
    var c = i;
    if (!(t & 1) && !(t & 2) && i !== null)
      e: for (;;) {
        if (i === null) return;
        var d = i.tag;
        if (d === 3 || d === 4) {
          var g = i.stateNode.containerInfo;
          if (g === a || (g.nodeType === 8 && g.parentNode === a)) break;
          if (d === 4)
            for (d = i.return; d !== null; ) {
              var S = d.tag;
              if (
                (S === 3 || S === 4) &&
                ((S = d.stateNode.containerInfo),
                S === a || (S.nodeType === 8 && S.parentNode === a))
              )
                return;
              d = d.return;
            }
          for (; g !== null; ) {
            if (((d = ir(g)), d === null)) return;
            if (((S = d.tag), S === 5 || S === 6)) {
              i = c = d;
              continue e;
            }
            g = g.parentNode;
          }
        }
        i = i.return;
      }
    Nu(function () {
      var b = c,
        B = Le(r),
        j = [];
      e: {
        var L = xc.get(e);
        if (L !== void 0) {
          var Y = fa,
            ee = e;
          switch (e) {
            case "keypress":
              if (ki(r) === 0) break e;
            case "keydown":
            case "keyup":
              Y = Sm;
              break;
            case "focusin":
              (ee = "focus"), (Y = ma);
              break;
            case "focusout":
              (ee = "blur"), (Y = ma);
              break;
            case "beforeblur":
            case "afterblur":
              Y = ma;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Y = Zu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = am;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = xm;
              break;
            case vc:
            case Sc:
            case wc:
              Y = cm;
              break;
            case Cc:
              Y = Em;
              break;
            case "scroll":
              Y = im;
              break;
            case "wheel":
              Y = Pm;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = dm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = ec;
          }
          var ne = (t & 4) !== 0,
            Xe = !ne && e === "scroll",
            T = ne ? (L !== null ? L + "Capture" : null) : L;
          ne = [];
          for (var x = b, P; x !== null; ) {
            P = x;
            var U = P.stateNode;
            if (
              (P.tag === 5 &&
                U !== null &&
                ((P = U),
                T !== null &&
                  ((U = so(x, T)), U != null && ne.push(bo(x, U, P)))),
              Xe)
            )
              break;
            x = x.return;
          }
          0 < ne.length &&
            ((L = new Y(L, ee, null, r, B)),
            j.push({ event: L, listeners: ne }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((L = e === "mouseover" || e === "pointerover"),
            (Y = e === "mouseout" || e === "pointerout"),
            L &&
              r !== ke &&
              (ee = r.relatedTarget || r.fromElement) &&
              (ir(ee) || ee[vn]))
          )
            break e;
          if (
            (Y || L) &&
            ((L =
              B.window === B
                ? B
                : (L = B.ownerDocument)
                ? L.defaultView || L.parentWindow
                : window),
            Y
              ? ((ee = r.relatedTarget || r.toElement),
                (Y = b),
                (ee = ee ? ir(ee) : null),
                ee !== null &&
                  ((Xe = or(ee)),
                  ee !== Xe || (ee.tag !== 5 && ee.tag !== 6)) &&
                  (ee = null))
              : ((Y = null), (ee = b)),
            Y !== ee)
          ) {
            if (
              ((ne = Zu),
              (U = "onMouseLeave"),
              (T = "onMouseEnter"),
              (x = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ne = ec),
                (U = "onPointerLeave"),
                (T = "onPointerEnter"),
                (x = "pointer")),
              (Xe = Y == null ? L : Nr(Y)),
              (P = ee == null ? L : Nr(ee)),
              (L = new ne(U, x + "leave", Y, r, B)),
              (L.target = Xe),
              (L.relatedTarget = P),
              (U = null),
              ir(B) === b &&
                ((ne = new ne(T, x + "enter", ee, r, B)),
                (ne.target = P),
                (ne.relatedTarget = Xe),
                (U = ne)),
              (Xe = U),
              Y && ee)
            )
              t: {
                for (ne = Y, T = ee, x = 0, P = ne; P; P = $r(P)) x++;
                for (P = 0, U = T; U; U = $r(U)) P++;
                for (; 0 < x - P; ) (ne = $r(ne)), x--;
                for (; 0 < P - x; ) (T = $r(T)), P--;
                for (; x--; ) {
                  if (ne === T || (T !== null && ne === T.alternate)) break t;
                  (ne = $r(ne)), (T = $r(T));
                }
                ne = null;
              }
            else ne = null;
            Y !== null && Rc(j, L, Y, ne, !1),
              ee !== null && Xe !== null && Rc(j, Xe, ee, ne, !0);
          }
        }
        e: {
          if (
            ((L = b ? Nr(b) : window),
            (Y = L.nodeName && L.nodeName.toLowerCase()),
            Y === "select" || (Y === "input" && L.type === "file"))
          )
            var re = Om;
          else if (lc(L))
            if (sc) re = Lm;
            else {
              re = zm;
              var ae = Im;
            }
          else
            (Y = L.nodeName) &&
              Y.toLowerCase() === "input" &&
              (L.type === "checkbox" || L.type === "radio") &&
              (re = Am);
          if (re && (re = re(e, b))) {
            ac(j, re, r, B);
            break e;
          }
          ae && ae(e, L, b),
            e === "focusout" &&
              (ae = L._wrapperState) &&
              ae.controlled &&
              L.type === "number" &&
              Nn(L, "number", L.value);
        }
        switch (((ae = b ? Nr(b) : window), e)) {
          case "focusin":
            (lc(ae) || ae.contentEditable === "true") &&
              ((Rr = ae), (wa = b), (To = null));
            break;
          case "focusout":
            To = wa = Rr = null;
            break;
          case "mousedown":
            Ca = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ca = !1), gc(j, r, B);
            break;
          case "selectionchange":
            if (Dm) break;
          case "keydown":
          case "keyup":
            gc(j, r, B);
        }
        var se;
        if (ga)
          e: {
            switch (e) {
              case "compositionstart":
                var ce = "onCompositionStart";
                break e;
              case "compositionend":
                ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ce = "onCompositionUpdate";
                break e;
            }
            ce = void 0;
          }
        else
          Pr
            ? oc(e, r) && (ce = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (ce = "onCompositionStart");
        ce &&
          (tc &&
            r.locale !== "ko" &&
            (Pr || ce !== "onCompositionStart"
              ? ce === "onCompositionEnd" && Pr && (se = Yu())
              : ((Ln = B),
                (ca = "value" in Ln ? Ln.value : Ln.textContent),
                (Pr = !0))),
          (ae = _i(b, ce)),
          0 < ae.length &&
            ((ce = new Ju(ce, e, null, r, B)),
            j.push({ event: ce, listeners: ae }),
            se
              ? (ce.data = se)
              : ((se = ic(r)), se !== null && (ce.data = se)))),
          (se = bm ? $m(e, r) : _m(e, r)) &&
            ((b = _i(b, "onBeforeInput")),
            0 < b.length &&
              ((B = new Ju("onBeforeInput", "beforeinput", null, r, B)),
              j.push({ event: B, listeners: b }),
              (B.data = se)));
      }
      Tc(j, t);
    });
  }
  function bo(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function _i(e, t) {
    for (var r = t + "Capture", i = []; e !== null; ) {
      var a = e,
        c = a.stateNode;
      a.tag === 5 &&
        c !== null &&
        ((a = c),
        (c = so(e, r)),
        c != null && i.unshift(bo(e, c, a)),
        (c = so(e, t)),
        c != null && i.push(bo(e, c, a))),
        (e = e.return);
    }
    return i;
  }
  function $r(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Rc(e, t, r, i, a) {
    for (var c = t._reactName, d = []; r !== null && r !== i; ) {
      var g = r,
        S = g.alternate,
        b = g.stateNode;
      if (S !== null && S === i) break;
      g.tag === 5 &&
        b !== null &&
        ((g = b),
        a
          ? ((S = so(r, c)), S != null && d.unshift(bo(r, S, g)))
          : a || ((S = so(r, c)), S != null && d.push(bo(r, S, g)))),
        (r = r.return);
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var Um = /\r\n?/g,
    Hm = /\u0000|\uFFFD/g;
  function bc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Um,
        `
`
      )
      .replace(Hm, "");
  }
  function Ni(e, t, r) {
    if (((t = bc(t)), bc(e) !== t && r)) throw Error(l(425));
  }
  function Mi() {}
  var Ra = null,
    ba = null;
  function $a(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var _a = typeof setTimeout == "function" ? setTimeout : void 0,
    Gm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    $c = typeof Promise == "function" ? Promise : void 0,
    Km =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof $c < "u"
        ? function (e) {
            return $c.resolve(null).then(e).catch(Qm);
          }
        : _a;
  function Qm(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Na(e, t) {
    var r = t,
      i = 0;
    do {
      var a = r.nextSibling;
      if ((e.removeChild(r), a && a.nodeType === 8))
        if (((r = a.data), r === "/$")) {
          if (i === 0) {
            e.removeChild(a), vo(t);
            return;
          }
          i--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || i++;
      r = a;
    } while (r);
    vo(t);
  }
  function jn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function _c(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var _r = Math.random().toString(36).slice(2),
    un = "__reactFiber$" + _r,
    $o = "__reactProps$" + _r,
    vn = "__reactContainer$" + _r,
    Ma = "__reactEvents$" + _r,
    Xm = "__reactListeners$" + _r,
    Ym = "__reactHandles$" + _r;
  function ir(e) {
    var t = e[un];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[vn] || r[un])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = _c(e); e !== null; ) {
            if ((r = e[un])) return r;
            e = _c(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function _o(e) {
    return (
      (e = e[un] || e[vn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Nr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Oi(e) {
    return e[$o] || null;
  }
  var Oa = [],
    Mr = -1;
  function Dn(e) {
    return { current: e };
  }
  function De(e) {
    0 > Mr || ((e.current = Oa[Mr]), (Oa[Mr] = null), Mr--);
  }
  function Be(e, t) {
    Mr++, (Oa[Mr] = e.current), (e.current = t);
  }
  var Fn = {},
    ft = Dn(Fn),
    Ct = Dn(!1),
    lr = Fn;
  function Or(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Fn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
      return i.__reactInternalMemoizedMaskedChildContext;
    var a = {},
      c;
    for (c in r) a[c] = t[c];
    return (
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      a
    );
  }
  function xt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Ii() {
    De(Ct), De(ft);
  }
  function Nc(e, t, r) {
    if (ft.current !== Fn) throw Error(l(168));
    Be(ft, t), Be(Ct, r);
  }
  function Mc(e, t, r) {
    var i = e.stateNode;
    if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
      return r;
    i = i.getChildContext();
    for (var a in i) if (!(a in t)) throw Error(l(108, $e(e) || "Unknown", a));
    return Q({}, r, i);
  }
  function zi(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Fn),
      (lr = ft.current),
      Be(ft, e),
      Be(Ct, Ct.current),
      !0
    );
  }
  function Oc(e, t, r) {
    var i = e.stateNode;
    if (!i) throw Error(l(169));
    r
      ? ((e = Mc(e, t, lr)),
        (i.__reactInternalMemoizedMergedChildContext = e),
        De(Ct),
        De(ft),
        Be(ft, e))
      : De(Ct),
      Be(Ct, r);
  }
  var Sn = null,
    Ai = !1,
    Ia = !1;
  function Ic(e) {
    Sn === null ? (Sn = [e]) : Sn.push(e);
  }
  function qm(e) {
    (Ai = !0), Ic(e);
  }
  function Wn() {
    if (!Ia && Sn !== null) {
      Ia = !0;
      var e = 0,
        t = Oe;
      try {
        var r = Sn;
        for (Oe = 1; e < r.length; e++) {
          var i = r[e];
          do i = i(!0);
          while (i !== null);
        }
        (Sn = null), (Ai = !1);
      } catch (a) {
        throw (Sn !== null && (Sn = Sn.slice(e + 1)), Au(na, Wn), a);
      } finally {
        (Oe = t), (Ia = !1);
      }
    }
    return null;
  }
  var Ir = [],
    zr = 0,
    Li = null,
    Bi = 0,
    Wt = [],
    Vt = 0,
    ar = null,
    wn = 1,
    Cn = "";
  function sr(e, t) {
    (Ir[zr++] = Bi), (Ir[zr++] = Li), (Li = e), (Bi = t);
  }
  function zc(e, t, r) {
    (Wt[Vt++] = wn), (Wt[Vt++] = Cn), (Wt[Vt++] = ar), (ar = e);
    var i = wn;
    e = Cn;
    var a = 32 - Zt(i) - 1;
    (i &= ~(1 << a)), (r += 1);
    var c = 32 - Zt(t) + a;
    if (30 < c) {
      var d = a - (a % 5);
      (c = (i & ((1 << d) - 1)).toString(32)),
        (i >>= d),
        (a -= d),
        (wn = (1 << (32 - Zt(t) + a)) | (r << a) | i),
        (Cn = c + e);
    } else (wn = (1 << c) | (r << a) | i), (Cn = e);
  }
  function za(e) {
    e.return !== null && (sr(e, 1), zc(e, 1, 0));
  }
  function Aa(e) {
    for (; e === Li; )
      (Li = Ir[--zr]), (Ir[zr] = null), (Bi = Ir[--zr]), (Ir[zr] = null);
    for (; e === ar; )
      (ar = Wt[--Vt]),
        (Wt[Vt] = null),
        (Cn = Wt[--Vt]),
        (Wt[Vt] = null),
        (wn = Wt[--Vt]),
        (Wt[Vt] = null);
  }
  var Mt = null,
    Ot = null,
    Fe = !1,
    en = null;
  function Ac(e, t) {
    var r = Kt(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function Lc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Mt = e), (Ot = jn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Mt = e), (Ot = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = ar !== null ? { id: wn, overflow: Cn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = Kt(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (Mt = e),
              (Ot = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function La(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ba(e) {
    if (Fe) {
      var t = Ot;
      if (t) {
        var r = t;
        if (!Lc(e, t)) {
          if (La(e)) throw Error(l(418));
          t = jn(r.nextSibling);
          var i = Mt;
          t && Lc(e, t)
            ? Ac(i, r)
            : ((e.flags = (e.flags & -4097) | 2), (Fe = !1), (Mt = e));
        }
      } else {
        if (La(e)) throw Error(l(418));
        (e.flags = (e.flags & -4097) | 2), (Fe = !1), (Mt = e);
      }
    }
  }
  function Bc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Mt = e;
  }
  function ji(e) {
    if (e !== Mt) return !1;
    if (!Fe) return Bc(e), (Fe = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !$a(e.type, e.memoizedProps))),
      t && (t = Ot))
    ) {
      if (La(e)) throw (jc(), Error(l(418)));
      for (; t; ) Ac(e, t), (t = jn(t.nextSibling));
    }
    if ((Bc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                Ot = jn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ot = null;
      }
    } else Ot = Mt ? jn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function jc() {
    for (var e = Ot; e; ) e = jn(e.nextSibling);
  }
  function Ar() {
    (Ot = Mt = null), (Fe = !1);
  }
  function ja(e) {
    en === null ? (en = [e]) : en.push(e);
  }
  var Zm = z.ReactCurrentBatchConfig;
  function No(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(l(309));
          var i = r.stateNode;
        }
        if (!i) throw Error(l(147, e));
        var a = i,
          c = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === c
          ? t.ref
          : ((t = function (d) {
              var g = a.refs;
              d === null ? delete g[c] : (g[c] = d);
            }),
            (t._stringRef = c),
            t);
      }
      if (typeof e != "string") throw Error(l(284));
      if (!r._owner) throw Error(l(290, e));
    }
    return e;
  }
  function Di(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        l(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Dc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Fc(e) {
    function t(T, x) {
      if (e) {
        var P = T.deletions;
        P === null ? ((T.deletions = [x]), (T.flags |= 16)) : P.push(x);
      }
    }
    function r(T, x) {
      if (!e) return null;
      for (; x !== null; ) t(T, x), (x = x.sibling);
      return null;
    }
    function i(T, x) {
      for (T = new Map(); x !== null; )
        x.key !== null ? T.set(x.key, x) : T.set(x.index, x), (x = x.sibling);
      return T;
    }
    function a(T, x) {
      return (T = Yn(T, x)), (T.index = 0), (T.sibling = null), T;
    }
    function c(T, x, P) {
      return (
        (T.index = P),
        e
          ? ((P = T.alternate),
            P !== null
              ? ((P = P.index), P < x ? ((T.flags |= 2), x) : P)
              : ((T.flags |= 2), x))
          : ((T.flags |= 1048576), x)
      );
    }
    function d(T) {
      return e && T.alternate === null && (T.flags |= 2), T;
    }
    function g(T, x, P, U) {
      return x === null || x.tag !== 6
        ? ((x = _s(P, T.mode, U)), (x.return = T), x)
        : ((x = a(x, P)), (x.return = T), x);
    }
    function S(T, x, P, U) {
      var re = P.type;
      return re === K
        ? B(T, x, P.props.children, U, P.key)
        : x !== null &&
          (x.elementType === re ||
            (typeof re == "object" &&
              re !== null &&
              re.$$typeof === ve &&
              Dc(re) === x.type))
        ? ((U = a(x, P.props)), (U.ref = No(T, x, P)), (U.return = T), U)
        : ((U = cl(P.type, P.key, P.props, null, T.mode, U)),
          (U.ref = No(T, x, P)),
          (U.return = T),
          U);
    }
    function b(T, x, P, U) {
      return x === null ||
        x.tag !== 4 ||
        x.stateNode.containerInfo !== P.containerInfo ||
        x.stateNode.implementation !== P.implementation
        ? ((x = Ns(P, T.mode, U)), (x.return = T), x)
        : ((x = a(x, P.children || [])), (x.return = T), x);
    }
    function B(T, x, P, U, re) {
      return x === null || x.tag !== 7
        ? ((x = gr(P, T.mode, U, re)), (x.return = T), x)
        : ((x = a(x, P)), (x.return = T), x);
    }
    function j(T, x, P) {
      if ((typeof x == "string" && x !== "") || typeof x == "number")
        return (x = _s("" + x, T.mode, P)), (x.return = T), x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case _:
            return (
              (P = cl(x.type, x.key, x.props, null, T.mode, P)),
              (P.ref = No(T, null, x)),
              (P.return = T),
              P
            );
          case G:
            return (x = Ns(x, T.mode, P)), (x.return = T), x;
          case ve:
            var U = x._init;
            return j(T, U(x._payload), P);
        }
        if (vt(x) || W(x))
          return (x = gr(x, T.mode, P, null)), (x.return = T), x;
        Di(T, x);
      }
      return null;
    }
    function L(T, x, P, U) {
      var re = x !== null ? x.key : null;
      if ((typeof P == "string" && P !== "") || typeof P == "number")
        return re !== null ? null : g(T, x, "" + P, U);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case _:
            return P.key === re ? S(T, x, P, U) : null;
          case G:
            return P.key === re ? b(T, x, P, U) : null;
          case ve:
            return (re = P._init), L(T, x, re(P._payload), U);
        }
        if (vt(P) || W(P)) return re !== null ? null : B(T, x, P, U, null);
        Di(T, P);
      }
      return null;
    }
    function Y(T, x, P, U, re) {
      if ((typeof U == "string" && U !== "") || typeof U == "number")
        return (T = T.get(P) || null), g(x, T, "" + U, re);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case _:
            return (
              (T = T.get(U.key === null ? P : U.key) || null), S(x, T, U, re)
            );
          case G:
            return (
              (T = T.get(U.key === null ? P : U.key) || null), b(x, T, U, re)
            );
          case ve:
            var ae = U._init;
            return Y(T, x, P, ae(U._payload), re);
        }
        if (vt(U) || W(U)) return (T = T.get(P) || null), B(x, T, U, re, null);
        Di(x, U);
      }
      return null;
    }
    function ee(T, x, P, U) {
      for (
        var re = null, ae = null, se = x, ce = (x = 0), lt = null;
        se !== null && ce < P.length;
        ce++
      ) {
        se.index > ce ? ((lt = se), (se = null)) : (lt = se.sibling);
        var be = L(T, se, P[ce], U);
        if (be === null) {
          se === null && (se = lt);
          break;
        }
        e && se && be.alternate === null && t(T, se),
          (x = c(be, x, ce)),
          ae === null ? (re = be) : (ae.sibling = be),
          (ae = be),
          (se = lt);
      }
      if (ce === P.length) return r(T, se), Fe && sr(T, ce), re;
      if (se === null) {
        for (; ce < P.length; ce++)
          (se = j(T, P[ce], U)),
            se !== null &&
              ((x = c(se, x, ce)),
              ae === null ? (re = se) : (ae.sibling = se),
              (ae = se));
        return Fe && sr(T, ce), re;
      }
      for (se = i(T, se); ce < P.length; ce++)
        (lt = Y(se, T, ce, P[ce], U)),
          lt !== null &&
            (e &&
              lt.alternate !== null &&
              se.delete(lt.key === null ? ce : lt.key),
            (x = c(lt, x, ce)),
            ae === null ? (re = lt) : (ae.sibling = lt),
            (ae = lt));
      return (
        e &&
          se.forEach(function (qn) {
            return t(T, qn);
          }),
        Fe && sr(T, ce),
        re
      );
    }
    function ne(T, x, P, U) {
      var re = W(P);
      if (typeof re != "function") throw Error(l(150));
      if (((P = re.call(P)), P == null)) throw Error(l(151));
      for (
        var ae = (re = null), se = x, ce = (x = 0), lt = null, be = P.next();
        se !== null && !be.done;
        ce++, be = P.next()
      ) {
        se.index > ce ? ((lt = se), (se = null)) : (lt = se.sibling);
        var qn = L(T, se, be.value, U);
        if (qn === null) {
          se === null && (se = lt);
          break;
        }
        e && se && qn.alternate === null && t(T, se),
          (x = c(qn, x, ce)),
          ae === null ? (re = qn) : (ae.sibling = qn),
          (ae = qn),
          (se = lt);
      }
      if (be.done) return r(T, se), Fe && sr(T, ce), re;
      if (se === null) {
        for (; !be.done; ce++, be = P.next())
          (be = j(T, be.value, U)),
            be !== null &&
              ((x = c(be, x, ce)),
              ae === null ? (re = be) : (ae.sibling = be),
              (ae = be));
        return Fe && sr(T, ce), re;
      }
      for (se = i(T, se); !be.done; ce++, be = P.next())
        (be = Y(se, T, ce, be.value, U)),
          be !== null &&
            (e &&
              be.alternate !== null &&
              se.delete(be.key === null ? ce : be.key),
            (x = c(be, x, ce)),
            ae === null ? (re = be) : (ae.sibling = be),
            (ae = be));
      return (
        e &&
          se.forEach(function (_h) {
            return t(T, _h);
          }),
        Fe && sr(T, ce),
        re
      );
    }
    function Xe(T, x, P, U) {
      if (
        (typeof P == "object" &&
          P !== null &&
          P.type === K &&
          P.key === null &&
          (P = P.props.children),
        typeof P == "object" && P !== null)
      ) {
        switch (P.$$typeof) {
          case _:
            e: {
              for (var re = P.key, ae = x; ae !== null; ) {
                if (ae.key === re) {
                  if (((re = P.type), re === K)) {
                    if (ae.tag === 7) {
                      r(T, ae.sibling),
                        (x = a(ae, P.props.children)),
                        (x.return = T),
                        (T = x);
                      break e;
                    }
                  } else if (
                    ae.elementType === re ||
                    (typeof re == "object" &&
                      re !== null &&
                      re.$$typeof === ve &&
                      Dc(re) === ae.type)
                  ) {
                    r(T, ae.sibling),
                      (x = a(ae, P.props)),
                      (x.ref = No(T, ae, P)),
                      (x.return = T),
                      (T = x);
                    break e;
                  }
                  r(T, ae);
                  break;
                } else t(T, ae);
                ae = ae.sibling;
              }
              P.type === K
                ? ((x = gr(P.props.children, T.mode, U, P.key)),
                  (x.return = T),
                  (T = x))
                : ((U = cl(P.type, P.key, P.props, null, T.mode, U)),
                  (U.ref = No(T, x, P)),
                  (U.return = T),
                  (T = U));
            }
            return d(T);
          case G:
            e: {
              for (ae = P.key; x !== null; ) {
                if (x.key === ae)
                  if (
                    x.tag === 4 &&
                    x.stateNode.containerInfo === P.containerInfo &&
                    x.stateNode.implementation === P.implementation
                  ) {
                    r(T, x.sibling),
                      (x = a(x, P.children || [])),
                      (x.return = T),
                      (T = x);
                    break e;
                  } else {
                    r(T, x);
                    break;
                  }
                else t(T, x);
                x = x.sibling;
              }
              (x = Ns(P, T.mode, U)), (x.return = T), (T = x);
            }
            return d(T);
          case ve:
            return (ae = P._init), Xe(T, x, ae(P._payload), U);
        }
        if (vt(P)) return ee(T, x, P, U);
        if (W(P)) return ne(T, x, P, U);
        Di(T, P);
      }
      return (typeof P == "string" && P !== "") || typeof P == "number"
        ? ((P = "" + P),
          x !== null && x.tag === 6
            ? (r(T, x.sibling), (x = a(x, P)), (x.return = T), (T = x))
            : (r(T, x), (x = _s(P, T.mode, U)), (x.return = T), (T = x)),
          d(T))
        : r(T, x);
    }
    return Xe;
  }
  var Lr = Fc(!0),
    Wc = Fc(!1),
    Fi = Dn(null),
    Wi = null,
    Br = null,
    Da = null;
  function Fa() {
    Da = Br = Wi = null;
  }
  function Wa(e) {
    var t = Fi.current;
    De(Fi), (e._currentValue = t);
  }
  function Va(e, t, r) {
    for (; e !== null; ) {
      var i = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
          : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function jr(e, t) {
    (Wi = e),
      (Da = Br = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (kt = !0), (e.firstContext = null));
  }
  function Ut(e) {
    var t = e._currentValue;
    if (Da !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Br === null)) {
        if (Wi === null) throw Error(l(308));
        (Br = e), (Wi.dependencies = { lanes: 0, firstContext: e });
      } else Br = Br.next = e;
    return t;
  }
  var ur = null;
  function Ua(e) {
    ur === null ? (ur = [e]) : ur.push(e);
  }
  function Vc(e, t, r, i) {
    var a = t.interleaved;
    return (
      a === null ? ((r.next = r), Ua(t)) : ((r.next = a.next), (a.next = r)),
      (t.interleaved = r),
      xn(e, i)
    );
  }
  function xn(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var Vn = !1;
  function Ha(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Uc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function kn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Un(e, t, r) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), Re & 2)) {
      var a = i.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (i.pending = t),
        xn(e, r)
      );
    }
    return (
      (a = i.interleaved),
      a === null ? ((t.next = t), Ua(i)) : ((t.next = a.next), (a.next = t)),
      (i.interleaved = t),
      xn(e, r)
    );
  }
  function Vi(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var i = t.lanes;
      (i &= e.pendingLanes), (r |= i), (t.lanes = r), ia(e, r);
    }
  }
  function Hc(e, t) {
    var r = e.updateQueue,
      i = e.alternate;
    if (i !== null && ((i = i.updateQueue), r === i)) {
      var a = null,
        c = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var d = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          c === null ? (a = c = d) : (c = c.next = d), (r = r.next);
        } while (r !== null);
        c === null ? (a = c = t) : (c = c.next = t);
      } else a = c = t;
      (r = {
        baseState: i.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: c,
        shared: i.shared,
        effects: i.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function Ui(e, t, r, i) {
    var a = e.updateQueue;
    Vn = !1;
    var c = a.firstBaseUpdate,
      d = a.lastBaseUpdate,
      g = a.shared.pending;
    if (g !== null) {
      a.shared.pending = null;
      var S = g,
        b = S.next;
      (S.next = null), d === null ? (c = b) : (d.next = b), (d = S);
      var B = e.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (g = B.lastBaseUpdate),
        g !== d &&
          (g === null ? (B.firstBaseUpdate = b) : (g.next = b),
          (B.lastBaseUpdate = S)));
    }
    if (c !== null) {
      var j = a.baseState;
      (d = 0), (B = b = S = null), (g = c);
      do {
        var L = g.lane,
          Y = g.eventTime;
        if ((i & L) === L) {
          B !== null &&
            (B = B.next =
              {
                eventTime: Y,
                lane: 0,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null,
              });
          e: {
            var ee = e,
              ne = g;
            switch (((L = t), (Y = r), ne.tag)) {
              case 1:
                if (((ee = ne.payload), typeof ee == "function")) {
                  j = ee.call(Y, j, L);
                  break e;
                }
                j = ee;
                break e;
              case 3:
                ee.flags = (ee.flags & -65537) | 128;
              case 0:
                if (
                  ((ee = ne.payload),
                  (L = typeof ee == "function" ? ee.call(Y, j, L) : ee),
                  L == null)
                )
                  break e;
                j = Q({}, j, L);
                break e;
              case 2:
                Vn = !0;
            }
          }
          g.callback !== null &&
            g.lane !== 0 &&
            ((e.flags |= 64),
            (L = a.effects),
            L === null ? (a.effects = [g]) : L.push(g));
        } else
          (Y = {
            eventTime: Y,
            lane: L,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            B === null ? ((b = B = Y), (S = j)) : (B = B.next = Y),
            (d |= L);
        if (((g = g.next), g === null)) {
          if (((g = a.shared.pending), g === null)) break;
          (L = g),
            (g = L.next),
            (L.next = null),
            (a.lastBaseUpdate = L),
            (a.shared.pending = null);
        }
      } while (!0);
      if (
        (B === null && (S = j),
        (a.baseState = S),
        (a.firstBaseUpdate = b),
        (a.lastBaseUpdate = B),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t;
        do (d |= a.lane), (a = a.next);
        while (a !== t);
      } else c === null && (a.shared.lanes = 0);
      (dr |= d), (e.lanes = d), (e.memoizedState = j);
    }
  }
  function Gc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var i = e[t],
          a = i.callback;
        if (a !== null) {
          if (((i.callback = null), (i = r), typeof a != "function"))
            throw Error(l(191, a));
          a.call(i);
        }
      }
  }
  var Mo = {},
    cn = Dn(Mo),
    Oo = Dn(Mo),
    Io = Dn(Mo);
  function cr(e) {
    if (e === Mo) throw Error(l(174));
    return e;
  }
  function Ga(e, t) {
    switch ((Be(Io, t), Be(Oo, e), Be(cn, Mo), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : lo(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = lo(t, e));
    }
    De(cn), Be(cn, t);
  }
  function Dr() {
    De(cn), De(Oo), De(Io);
  }
  function Kc(e) {
    cr(Io.current);
    var t = cr(cn.current),
      r = lo(t, e.type);
    t !== r && (Be(Oo, e), Be(cn, r));
  }
  function Ka(e) {
    Oo.current === e && (De(cn), De(Oo));
  }
  var Ve = Dn(0);
  function Hi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Qa = [];
  function Xa() {
    for (var e = 0; e < Qa.length; e++)
      Qa[e]._workInProgressVersionPrimary = null;
    Qa.length = 0;
  }
  var Gi = z.ReactCurrentDispatcher,
    Ya = z.ReactCurrentBatchConfig,
    fr = 0,
    Ue = null,
    et = null,
    ot = null,
    Ki = !1,
    zo = !1,
    Ao = 0,
    Jm = 0;
  function dt() {
    throw Error(l(321));
  }
  function qa(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!Jt(e[r], t[r])) return !1;
    return !0;
  }
  function Za(e, t, r, i, a, c) {
    if (
      ((fr = c),
      (Ue = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Gi.current = e === null || e.memoizedState === null ? rh : oh),
      (e = r(i, a)),
      zo)
    ) {
      c = 0;
      do {
        if (((zo = !1), (Ao = 0), 25 <= c)) throw Error(l(301));
        (c += 1),
          (ot = et = null),
          (t.updateQueue = null),
          (Gi.current = ih),
          (e = r(i, a));
      } while (zo);
    }
    if (
      ((Gi.current = Yi),
      (t = et !== null && et.next !== null),
      (fr = 0),
      (ot = et = Ue = null),
      (Ki = !1),
      t)
    )
      throw Error(l(300));
    return e;
  }
  function Ja() {
    var e = Ao !== 0;
    return (Ao = 0), e;
  }
  function fn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ot === null ? (Ue.memoizedState = ot = e) : (ot = ot.next = e), ot;
  }
  function Ht() {
    if (et === null) {
      var e = Ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = et.next;
    var t = ot === null ? Ue.memoizedState : ot.next;
    if (t !== null) (ot = t), (et = e);
    else {
      if (e === null) throw Error(l(310));
      (et = e),
        (e = {
          memoizedState: et.memoizedState,
          baseState: et.baseState,
          baseQueue: et.baseQueue,
          queue: et.queue,
          next: null,
        }),
        ot === null ? (Ue.memoizedState = ot = e) : (ot = ot.next = e);
    }
    return ot;
  }
  function Lo(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function es(e) {
    var t = Ht(),
      r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var i = et,
      a = i.baseQueue,
      c = r.pending;
    if (c !== null) {
      if (a !== null) {
        var d = a.next;
        (a.next = c.next), (c.next = d);
      }
      (i.baseQueue = a = c), (r.pending = null);
    }
    if (a !== null) {
      (c = a.next), (i = i.baseState);
      var g = (d = null),
        S = null,
        b = c;
      do {
        var B = b.lane;
        if ((fr & B) === B)
          S !== null &&
            (S = S.next =
              {
                lane: 0,
                action: b.action,
                hasEagerState: b.hasEagerState,
                eagerState: b.eagerState,
                next: null,
              }),
            (i = b.hasEagerState ? b.eagerState : e(i, b.action));
        else {
          var j = {
            lane: B,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null,
          };
          S === null ? ((g = S = j), (d = i)) : (S = S.next = j),
            (Ue.lanes |= B),
            (dr |= B);
        }
        b = b.next;
      } while (b !== null && b !== c);
      S === null ? (d = i) : (S.next = g),
        Jt(i, t.memoizedState) || (kt = !0),
        (t.memoizedState = i),
        (t.baseState = d),
        (t.baseQueue = S),
        (r.lastRenderedState = i);
    }
    if (((e = r.interleaved), e !== null)) {
      a = e;
      do (c = a.lane), (Ue.lanes |= c), (dr |= c), (a = a.next);
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function ts(e) {
    var t = Ht(),
      r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var i = r.dispatch,
      a = r.pending,
      c = t.memoizedState;
    if (a !== null) {
      r.pending = null;
      var d = (a = a.next);
      do (c = e(c, d.action)), (d = d.next);
      while (d !== a);
      Jt(c, t.memoizedState) || (kt = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (r.lastRenderedState = c);
    }
    return [c, i];
  }
  function Qc() {}
  function Xc(e, t) {
    var r = Ue,
      i = Ht(),
      a = t(),
      c = !Jt(i.memoizedState, a);
    if (
      (c && ((i.memoizedState = a), (kt = !0)),
      (i = i.queue),
      ns(Zc.bind(null, r, i, e), [e]),
      i.getSnapshot !== t || c || (ot !== null && ot.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        Bo(9, qc.bind(null, r, i, a, t), void 0, null),
        it === null)
      )
        throw Error(l(349));
      fr & 30 || Yc(r, t, a);
    }
    return a;
  }
  function Yc(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Ue.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ue.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function qc(e, t, r, i) {
    (t.value = r), (t.getSnapshot = i), Jc(t) && ef(e);
  }
  function Zc(e, t, r) {
    return r(function () {
      Jc(t) && ef(e);
    });
  }
  function Jc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Jt(e, r);
    } catch {
      return !0;
    }
  }
  function ef(e) {
    var t = xn(e, 1);
    t !== null && on(t, e, 1, -1);
  }
  function tf(e) {
    var t = fn();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Lo,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = nh.bind(null, Ue, e)),
      [t.memoizedState, e]
    );
  }
  function Bo(e, t, r, i) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: i, next: null }),
      (t = Ue.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ue.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((i = r.next), (r.next = e), (e.next = i), (t.lastEffect = e))),
      e
    );
  }
  function nf() {
    return Ht().memoizedState;
  }
  function Qi(e, t, r, i) {
    var a = fn();
    (Ue.flags |= e),
      (a.memoizedState = Bo(1 | t, r, void 0, i === void 0 ? null : i));
  }
  function Xi(e, t, r, i) {
    var a = Ht();
    i = i === void 0 ? null : i;
    var c = void 0;
    if (et !== null) {
      var d = et.memoizedState;
      if (((c = d.destroy), i !== null && qa(i, d.deps))) {
        a.memoizedState = Bo(t, r, c, i);
        return;
      }
    }
    (Ue.flags |= e), (a.memoizedState = Bo(1 | t, r, c, i));
  }
  function rf(e, t) {
    return Qi(8390656, 8, e, t);
  }
  function ns(e, t) {
    return Xi(2048, 8, e, t);
  }
  function of(e, t) {
    return Xi(4, 2, e, t);
  }
  function lf(e, t) {
    return Xi(4, 4, e, t);
  }
  function af(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function sf(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), Xi(4, 4, af.bind(null, t, e), r)
    );
  }
  function rs() {}
  function uf(e, t) {
    var r = Ht();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return i !== null && t !== null && qa(t, i[1])
      ? i[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function cf(e, t) {
    var r = Ht();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return i !== null && t !== null && qa(t, i[1])
      ? i[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function ff(e, t, r) {
    return fr & 21
      ? (Jt(r, t) ||
          ((r = Du()), (Ue.lanes |= r), (dr |= r), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (kt = !0)), (e.memoizedState = r));
  }
  function eh(e, t) {
    var r = Oe;
    (Oe = r !== 0 && 4 > r ? r : 4), e(!0);
    var i = Ya.transition;
    Ya.transition = {};
    try {
      e(!1), t();
    } finally {
      (Oe = r), (Ya.transition = i);
    }
  }
  function df() {
    return Ht().memoizedState;
  }
  function th(e, t, r) {
    var i = Qn(e);
    if (
      ((r = {
        lane: i,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      pf(e))
    )
      mf(t, r);
    else if (((r = Vc(e, t, r, i)), r !== null)) {
      var a = yt();
      on(r, e, i, a), hf(r, t, i);
    }
  }
  function nh(e, t, r) {
    var i = Qn(e),
      a = {
        lane: i,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (pf(e)) mf(t, a);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var d = t.lastRenderedState,
            g = c(d, r);
          if (((a.hasEagerState = !0), (a.eagerState = g), Jt(g, d))) {
            var S = t.interleaved;
            S === null
              ? ((a.next = a), Ua(t))
              : ((a.next = S.next), (S.next = a)),
              (t.interleaved = a);
            return;
          }
        } catch {
        } finally {
        }
      (r = Vc(e, t, a, i)),
        r !== null && ((a = yt()), on(r, e, i, a), hf(r, t, i));
    }
  }
  function pf(e) {
    var t = e.alternate;
    return e === Ue || (t !== null && t === Ue);
  }
  function mf(e, t) {
    zo = Ki = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function hf(e, t, r) {
    if (r & 4194240) {
      var i = t.lanes;
      (i &= e.pendingLanes), (r |= i), (t.lanes = r), ia(e, r);
    }
  }
  var Yi = {
      readContext: Ut,
      useCallback: dt,
      useContext: dt,
      useEffect: dt,
      useImperativeHandle: dt,
      useInsertionEffect: dt,
      useLayoutEffect: dt,
      useMemo: dt,
      useReducer: dt,
      useRef: dt,
      useState: dt,
      useDebugValue: dt,
      useDeferredValue: dt,
      useTransition: dt,
      useMutableSource: dt,
      useSyncExternalStore: dt,
      useId: dt,
      unstable_isNewReconciler: !1,
    },
    rh = {
      readContext: Ut,
      useCallback: function (e, t) {
        return (fn().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ut,
      useEffect: rf,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          Qi(4194308, 4, af.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return Qi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Qi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = fn();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var i = fn();
        return (
          (t = r !== void 0 ? r(t) : t),
          (i.memoizedState = i.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (i.queue = e),
          (e = e.dispatch = th.bind(null, Ue, e)),
          [i.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = fn();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: tf,
      useDebugValue: rs,
      useDeferredValue: function (e) {
        return (fn().memoizedState = e);
      },
      useTransition: function () {
        var e = tf(!1),
          t = e[0];
        return (e = eh.bind(null, e[1])), (fn().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var i = Ue,
          a = fn();
        if (Fe) {
          if (r === void 0) throw Error(l(407));
          r = r();
        } else {
          if (((r = t()), it === null)) throw Error(l(349));
          fr & 30 || Yc(i, t, r);
        }
        a.memoizedState = r;
        var c = { value: r, getSnapshot: t };
        return (
          (a.queue = c),
          rf(Zc.bind(null, i, c, e), [e]),
          (i.flags |= 2048),
          Bo(9, qc.bind(null, i, c, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = fn(),
          t = it.identifierPrefix;
        if (Fe) {
          var r = Cn,
            i = wn;
          (r = (i & ~(1 << (32 - Zt(i) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = Ao++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = Jm++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    oh = {
      readContext: Ut,
      useCallback: uf,
      useContext: Ut,
      useEffect: ns,
      useImperativeHandle: sf,
      useInsertionEffect: of,
      useLayoutEffect: lf,
      useMemo: cf,
      useReducer: es,
      useRef: nf,
      useState: function () {
        return es(Lo);
      },
      useDebugValue: rs,
      useDeferredValue: function (e) {
        var t = Ht();
        return ff(t, et.memoizedState, e);
      },
      useTransition: function () {
        var e = es(Lo)[0],
          t = Ht().memoizedState;
        return [e, t];
      },
      useMutableSource: Qc,
      useSyncExternalStore: Xc,
      useId: df,
      unstable_isNewReconciler: !1,
    },
    ih = {
      readContext: Ut,
      useCallback: uf,
      useContext: Ut,
      useEffect: ns,
      useImperativeHandle: sf,
      useInsertionEffect: of,
      useLayoutEffect: lf,
      useMemo: cf,
      useReducer: ts,
      useRef: nf,
      useState: function () {
        return ts(Lo);
      },
      useDebugValue: rs,
      useDeferredValue: function (e) {
        var t = Ht();
        return et === null ? (t.memoizedState = e) : ff(t, et.memoizedState, e);
      },
      useTransition: function () {
        var e = ts(Lo)[0],
          t = Ht().memoizedState;
        return [e, t];
      },
      useMutableSource: Qc,
      useSyncExternalStore: Xc,
      useId: df,
      unstable_isNewReconciler: !1,
    };
  function tn(e, t) {
    if (e && e.defaultProps) {
      (t = Q({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function os(e, t, r, i) {
    (t = e.memoizedState),
      (r = r(i, t)),
      (r = r == null ? t : Q({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var qi = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? or(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var i = yt(),
        a = Qn(e),
        c = kn(i, a);
      (c.payload = t),
        r != null && (c.callback = r),
        (t = Un(e, c, a)),
        t !== null && (on(t, e, a, i), Vi(t, e, a));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var i = yt(),
        a = Qn(e),
        c = kn(i, a);
      (c.tag = 1),
        (c.payload = t),
        r != null && (c.callback = r),
        (t = Un(e, c, a)),
        t !== null && (on(t, e, a, i), Vi(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = yt(),
        i = Qn(e),
        a = kn(r, i);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = Un(e, a, i)),
        t !== null && (on(t, e, i, r), Vi(t, e, i));
    },
  };
  function gf(e, t, r, i, a, c, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(i, c, d)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Eo(r, i) || !Eo(a, c)
        : !0
    );
  }
  function yf(e, t, r) {
    var i = !1,
      a = Fn,
      c = t.contextType;
    return (
      typeof c == "object" && c !== null
        ? (c = Ut(c))
        : ((a = xt(t) ? lr : ft.current),
          (i = t.contextTypes),
          (c = (i = i != null) ? Or(e, a) : Fn)),
      (t = new t(r, c)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = qi),
      (e.stateNode = t),
      (t._reactInternals = e),
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      t
    );
  }
  function vf(e, t, r, i) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, i),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, i),
      t.state !== e && qi.enqueueReplaceState(t, t.state, null);
  }
  function is(e, t, r, i) {
    var a = e.stateNode;
    (a.props = r), (a.state = e.memoizedState), (a.refs = {}), Ha(e);
    var c = t.contextType;
    typeof c == "object" && c !== null
      ? (a.context = Ut(c))
      : ((c = xt(t) ? lr : ft.current), (a.context = Or(e, c))),
      (a.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == "function" && (os(e, t, c, r), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function" ||
        (typeof a.UNSAFE_componentWillMount != "function" &&
          typeof a.componentWillMount != "function") ||
        ((t = a.state),
        typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" &&
          a.UNSAFE_componentWillMount(),
        t !== a.state && qi.enqueueReplaceState(a, a.state, null),
        Ui(e, r, a, i),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Fr(e, t) {
    try {
      var r = "",
        i = t;
      do (r += xe(i)), (i = i.return);
      while (i);
      var a = r;
    } catch (c) {
      a =
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function ls(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function as(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var lh = typeof WeakMap == "function" ? WeakMap : Map;
  function Sf(e, t, r) {
    (r = kn(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var i = t.value;
    return (
      (r.callback = function () {
        ol || ((ol = !0), (xs = i)), as(e, t);
      }),
      r
    );
  }
  function wf(e, t, r) {
    (r = kn(-1, r)), (r.tag = 3);
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var a = t.value;
      (r.payload = function () {
        return i(a);
      }),
        (r.callback = function () {
          as(e, t);
        });
    }
    var c = e.stateNode;
    return (
      c !== null &&
        typeof c.componentDidCatch == "function" &&
        (r.callback = function () {
          as(e, t),
            typeof i != "function" &&
              (Gn === null ? (Gn = new Set([this])) : Gn.add(this));
          var d = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: d !== null ? d : "",
          });
        }),
      r
    );
  }
  function Cf(e, t, r) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new lh();
      var a = new Set();
      i.set(t, a);
    } else (a = i.get(t)), a === void 0 && ((a = new Set()), i.set(t, a));
    a.has(r) || (a.add(r), (e = wh.bind(null, e, t, r)), t.then(e, e));
  }
  function xf(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function kf(e, t, r, i, a) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = a), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = kn(-1, 1)), (t.tag = 2), Un(r, t, 1))),
            (r.lanes |= 1)),
        e);
  }
  var ah = z.ReactCurrentOwner,
    kt = !1;
  function gt(e, t, r, i) {
    t.child = e === null ? Wc(t, null, r, i) : Lr(t, e.child, r, i);
  }
  function Ef(e, t, r, i, a) {
    r = r.render;
    var c = t.ref;
    return (
      jr(t, a),
      (i = Za(e, t, r, i, c, a)),
      (r = Ja()),
      e !== null && !kt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          En(e, t, a))
        : (Fe && r && za(t), (t.flags |= 1), gt(e, t, i, a), t.child)
    );
  }
  function Tf(e, t, r, i, a) {
    if (e === null) {
      var c = r.type;
      return typeof c == "function" &&
        !$s(c) &&
        c.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), Pf(e, t, c, i, a))
        : ((e = cl(r.type, null, i, t, t.mode, a)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), !(e.lanes & a))) {
      var d = c.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : Eo), r(d, i) && e.ref === t.ref)
      )
        return En(e, t, a);
    }
    return (
      (t.flags |= 1),
      (e = Yn(c, i)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Pf(e, t, r, i, a) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Eo(c, i) && e.ref === t.ref)
        if (((kt = !1), (t.pendingProps = i = c), (e.lanes & a) !== 0))
          e.flags & 131072 && (kt = !0);
        else return (t.lanes = e.lanes), En(e, t, a);
    }
    return ss(e, t, r, i, a);
  }
  function Rf(e, t, r) {
    var i = t.pendingProps,
      a = i.children,
      c = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Be(Vr, It),
          (It |= r);
      else {
        if (!(r & 1073741824))
          return (
            (e = c !== null ? c.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Be(Vr, It),
            (It |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (i = c !== null ? c.baseLanes : r),
          Be(Vr, It),
          (It |= i);
      }
    else
      c !== null ? ((i = c.baseLanes | r), (t.memoizedState = null)) : (i = r),
        Be(Vr, It),
        (It |= i);
    return gt(e, t, a, r), t.child;
  }
  function bf(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ss(e, t, r, i, a) {
    var c = xt(r) ? lr : ft.current;
    return (
      (c = Or(t, c)),
      jr(t, a),
      (r = Za(e, t, r, i, c, a)),
      (i = Ja()),
      e !== null && !kt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          En(e, t, a))
        : (Fe && i && za(t), (t.flags |= 1), gt(e, t, r, a), t.child)
    );
  }
  function $f(e, t, r, i, a) {
    if (xt(r)) {
      var c = !0;
      zi(t);
    } else c = !1;
    if ((jr(t, a), t.stateNode === null))
      Ji(e, t), yf(t, r, i), is(t, r, i, a), (i = !0);
    else if (e === null) {
      var d = t.stateNode,
        g = t.memoizedProps;
      d.props = g;
      var S = d.context,
        b = r.contextType;
      typeof b == "object" && b !== null
        ? (b = Ut(b))
        : ((b = xt(r) ? lr : ft.current), (b = Or(t, b)));
      var B = r.getDerivedStateFromProps,
        j =
          typeof B == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function";
      j ||
        (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
          typeof d.componentWillReceiveProps != "function") ||
        ((g !== i || S !== b) && vf(t, d, i, b)),
        (Vn = !1);
      var L = t.memoizedState;
      (d.state = L),
        Ui(t, i, d, a),
        (S = t.memoizedState),
        g !== i || L !== S || Ct.current || Vn
          ? (typeof B == "function" && (os(t, r, B, i), (S = t.memoizedState)),
            (g = Vn || gf(t, r, g, i, L, S, b))
              ? (j ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = i),
                (t.memoizedState = S)),
            (d.props = i),
            (d.state = S),
            (d.context = b),
            (i = g))
          : (typeof d.componentDidMount == "function" && (t.flags |= 4194308),
            (i = !1));
    } else {
      (d = t.stateNode),
        Uc(e, t),
        (g = t.memoizedProps),
        (b = t.type === t.elementType ? g : tn(t.type, g)),
        (d.props = b),
        (j = t.pendingProps),
        (L = d.context),
        (S = r.contextType),
        typeof S == "object" && S !== null
          ? (S = Ut(S))
          : ((S = xt(r) ? lr : ft.current), (S = Or(t, S)));
      var Y = r.getDerivedStateFromProps;
      (B =
        typeof Y == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function") ||
        (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
          typeof d.componentWillReceiveProps != "function") ||
        ((g !== j || L !== S) && vf(t, d, i, S)),
        (Vn = !1),
        (L = t.memoizedState),
        (d.state = L),
        Ui(t, i, d, a);
      var ee = t.memoizedState;
      g !== j || L !== ee || Ct.current || Vn
        ? (typeof Y == "function" && (os(t, r, Y, i), (ee = t.memoizedState)),
          (b = Vn || gf(t, r, b, i, L, ee, S) || !1)
            ? (B ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(i, ee, S),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(i, ee, S)),
              typeof d.componentDidUpdate == "function" && (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (g === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (g === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = ee)),
          (d.props = i),
          (d.state = ee),
          (d.context = S),
          (i = b))
        : (typeof d.componentDidUpdate != "function" ||
            (g === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (g === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1));
    }
    return us(e, t, r, i, c, a);
  }
  function us(e, t, r, i, a, c) {
    bf(e, t);
    var d = (t.flags & 128) !== 0;
    if (!i && !d) return a && Oc(t, r, !1), En(e, t, c);
    (i = t.stateNode), (ah.current = t);
    var g =
      d && typeof r.getDerivedStateFromError != "function" ? null : i.render();
    return (
      (t.flags |= 1),
      e !== null && d
        ? ((t.child = Lr(t, e.child, null, c)), (t.child = Lr(t, null, g, c)))
        : gt(e, t, g, c),
      (t.memoizedState = i.state),
      a && Oc(t, r, !0),
      t.child
    );
  }
  function _f(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Nc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Nc(e, t.context, !1),
      Ga(e, t.containerInfo);
  }
  function Nf(e, t, r, i, a) {
    return Ar(), ja(a), (t.flags |= 256), gt(e, t, r, i), t.child;
  }
  var cs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function fs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Mf(e, t, r) {
    var i = t.pendingProps,
      a = Ve.current,
      c = !1,
      d = (t.flags & 128) !== 0,
      g;
    if (
      ((g = d) ||
        (g = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      g
        ? ((c = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (a |= 1),
      Be(Ve, a & 1),
      e === null)
    )
      return (
        Ba(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((d = i.children),
            (e = i.fallback),
            c
              ? ((i = t.mode),
                (c = t.child),
                (d = { mode: "hidden", children: d }),
                !(i & 1) && c !== null
                  ? ((c.childLanes = 0), (c.pendingProps = d))
                  : (c = fl(d, i, 0, null)),
                (e = gr(e, i, r, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = fs(r)),
                (t.memoizedState = cs),
                e)
              : ds(t, d))
      );
    if (((a = e.memoizedState), a !== null && ((g = a.dehydrated), g !== null)))
      return sh(e, t, d, i, g, a, r);
    if (c) {
      (c = i.fallback), (d = t.mode), (a = e.child), (g = a.sibling);
      var S = { mode: "hidden", children: i.children };
      return (
        !(d & 1) && t.child !== a
          ? ((i = t.child),
            (i.childLanes = 0),
            (i.pendingProps = S),
            (t.deletions = null))
          : ((i = Yn(a, S)), (i.subtreeFlags = a.subtreeFlags & 14680064)),
        g !== null ? (c = Yn(g, c)) : ((c = gr(c, d, r, null)), (c.flags |= 2)),
        (c.return = t),
        (i.return = t),
        (i.sibling = c),
        (t.child = i),
        (i = c),
        (c = t.child),
        (d = e.child.memoizedState),
        (d =
          d === null
            ? fs(r)
            : {
                baseLanes: d.baseLanes | r,
                cachePool: null,
                transitions: d.transitions,
              }),
        (c.memoizedState = d),
        (c.childLanes = e.childLanes & ~r),
        (t.memoizedState = cs),
        i
      );
    }
    return (
      (c = e.child),
      (e = c.sibling),
      (i = Yn(c, { mode: "visible", children: i.children })),
      !(t.mode & 1) && (i.lanes = r),
      (i.return = t),
      (i.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = i),
      (t.memoizedState = null),
      i
    );
  }
  function ds(e, t) {
    return (
      (t = fl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Zi(e, t, r, i) {
    return (
      i !== null && ja(i),
      Lr(t, e.child, null, r),
      (e = ds(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function sh(e, t, r, i, a, c, d) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (i = ls(Error(l(422)))), Zi(e, t, d, i))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((c = i.fallback),
          (a = t.mode),
          (i = fl({ mode: "visible", children: i.children }, a, 0, null)),
          (c = gr(c, a, d, null)),
          (c.flags |= 2),
          (i.return = t),
          (c.return = t),
          (i.sibling = c),
          (t.child = i),
          t.mode & 1 && Lr(t, e.child, null, d),
          (t.child.memoizedState = fs(d)),
          (t.memoizedState = cs),
          c);
    if (!(t.mode & 1)) return Zi(e, t, d, null);
    if (a.data === "$!") {
      if (((i = a.nextSibling && a.nextSibling.dataset), i)) var g = i.dgst;
      return (
        (i = g), (c = Error(l(419))), (i = ls(c, i, void 0)), Zi(e, t, d, i)
      );
    }
    if (((g = (d & e.childLanes) !== 0), kt || g)) {
      if (((i = it), i !== null)) {
        switch (d & -d) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        (a = a & (i.suspendedLanes | d) ? 0 : a),
          a !== 0 &&
            a !== c.retryLane &&
            ((c.retryLane = a), xn(e, a), on(i, e, a, -1));
      }
      return bs(), (i = ls(Error(l(421)))), Zi(e, t, d, i);
    }
    return a.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Ch.bind(null, e)),
        (a._reactRetry = t),
        null)
      : ((e = c.treeContext),
        (Ot = jn(a.nextSibling)),
        (Mt = t),
        (Fe = !0),
        (en = null),
        e !== null &&
          ((Wt[Vt++] = wn),
          (Wt[Vt++] = Cn),
          (Wt[Vt++] = ar),
          (wn = e.id),
          (Cn = e.overflow),
          (ar = t)),
        (t = ds(t, i.children)),
        (t.flags |= 4096),
        t);
  }
  function Of(e, t, r) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Va(e.return, t, r);
  }
  function ps(e, t, r, i, a) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: r,
          tailMode: a,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = i),
        (c.tail = r),
        (c.tailMode = a));
  }
  function If(e, t, r) {
    var i = t.pendingProps,
      a = i.revealOrder,
      c = i.tail;
    if ((gt(e, t, i.children, r), (i = Ve.current), i & 2))
      (i = (i & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Of(e, r, t);
          else if (e.tag === 19) Of(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      i &= 1;
    }
    if ((Be(Ve, i), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (a) {
        case "forwards":
          for (r = t.child, a = null; r !== null; )
            (e = r.alternate),
              e !== null && Hi(e) === null && (a = r),
              (r = r.sibling);
          (r = a),
            r === null
              ? ((a = t.child), (t.child = null))
              : ((a = r.sibling), (r.sibling = null)),
            ps(t, !1, a, r, c);
          break;
        case "backwards":
          for (r = null, a = t.child, t.child = null; a !== null; ) {
            if (((e = a.alternate), e !== null && Hi(e) === null)) {
              t.child = a;
              break;
            }
            (e = a.sibling), (a.sibling = r), (r = a), (a = e);
          }
          ps(t, !0, r, null, c);
          break;
        case "together":
          ps(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ji(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function En(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (dr |= t.lanes),
      !(r & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (
        e = t.child, r = Yn(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = Yn(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function uh(e, t, r) {
    switch (t.tag) {
      case 3:
        _f(t), Ar();
        break;
      case 5:
        Kc(t);
        break;
      case 1:
        xt(t.type) && zi(t);
        break;
      case 4:
        Ga(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context,
          a = t.memoizedProps.value;
        Be(Fi, i._currentValue), (i._currentValue = a);
        break;
      case 13:
        if (((i = t.memoizedState), i !== null))
          return i.dehydrated !== null
            ? (Be(Ve, Ve.current & 1), (t.flags |= 128), null)
            : r & t.child.childLanes
            ? Mf(e, t, r)
            : (Be(Ve, Ve.current & 1),
              (e = En(e, t, r)),
              e !== null ? e.sibling : null);
        Be(Ve, Ve.current & 1);
        break;
      case 19:
        if (((i = (r & t.childLanes) !== 0), e.flags & 128)) {
          if (i) return If(e, t, r);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          Be(Ve, Ve.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Rf(e, t, r);
    }
    return En(e, t, r);
  }
  var zf, ms, Af, Lf;
  (zf = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }),
    (ms = function () {}),
    (Af = function (e, t, r, i) {
      var a = e.memoizedProps;
      if (a !== i) {
        (e = t.stateNode), cr(cn.current);
        var c = null;
        switch (r) {
          case "input":
            (a = ln(e, a)), (i = ln(e, i)), (c = []);
            break;
          case "select":
            (a = Q({}, a, { value: void 0 })),
              (i = Q({}, i, { value: void 0 })),
              (c = []);
            break;
          case "textarea":
            (a = fe(e, a)), (i = fe(e, i)), (c = []);
            break;
          default:
            typeof a.onClick != "function" &&
              typeof i.onClick == "function" &&
              (e.onclick = Mi);
        }
        ie(r, i);
        var d;
        r = null;
        for (b in a)
          if (!i.hasOwnProperty(b) && a.hasOwnProperty(b) && a[b] != null)
            if (b === "style") {
              var g = a[b];
              for (d in g) g.hasOwnProperty(d) && (r || (r = {}), (r[d] = ""));
            } else
              b !== "dangerouslySetInnerHTML" &&
                b !== "children" &&
                b !== "suppressContentEditableWarning" &&
                b !== "suppressHydrationWarning" &&
                b !== "autoFocus" &&
                (u.hasOwnProperty(b)
                  ? c || (c = [])
                  : (c = c || []).push(b, null));
        for (b in i) {
          var S = i[b];
          if (
            ((g = a != null ? a[b] : void 0),
            i.hasOwnProperty(b) && S !== g && (S != null || g != null))
          )
            if (b === "style")
              if (g) {
                for (d in g)
                  !g.hasOwnProperty(d) ||
                    (S && S.hasOwnProperty(d)) ||
                    (r || (r = {}), (r[d] = ""));
                for (d in S)
                  S.hasOwnProperty(d) &&
                    g[d] !== S[d] &&
                    (r || (r = {}), (r[d] = S[d]));
              } else r || (c || (c = []), c.push(b, r)), (r = S);
            else
              b === "dangerouslySetInnerHTML"
                ? ((S = S ? S.__html : void 0),
                  (g = g ? g.__html : void 0),
                  S != null && g !== S && (c = c || []).push(b, S))
                : b === "children"
                ? (typeof S != "string" && typeof S != "number") ||
                  (c = c || []).push(b, "" + S)
                : b !== "suppressContentEditableWarning" &&
                  b !== "suppressHydrationWarning" &&
                  (u.hasOwnProperty(b)
                    ? (S != null && b === "onScroll" && je("scroll", e),
                      c || g === S || (c = []))
                    : (c = c || []).push(b, S));
        }
        r && (c = c || []).push("style", r);
        var b = c;
        (t.updateQueue = b) && (t.flags |= 4);
      }
    }),
    (Lf = function (e, t, r, i) {
      r !== i && (t.flags |= 4);
    });
  function jo(e, t) {
    if (!Fe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var i = null; r !== null; )
            r.alternate !== null && (i = r), (r = r.sibling);
          i === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function pt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      i = 0;
    if (t)
      for (var a = e.child; a !== null; )
        (r |= a.lanes | a.childLanes),
          (i |= a.subtreeFlags & 14680064),
          (i |= a.flags & 14680064),
          (a.return = e),
          (a = a.sibling);
    else
      for (a = e.child; a !== null; )
        (r |= a.lanes | a.childLanes),
          (i |= a.subtreeFlags),
          (i |= a.flags),
          (a.return = e),
          (a = a.sibling);
    return (e.subtreeFlags |= i), (e.childLanes = r), t;
  }
  function ch(e, t, r) {
    var i = t.pendingProps;
    switch ((Aa(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return pt(t), null;
      case 1:
        return xt(t.type) && Ii(), pt(t), null;
      case 3:
        return (
          (i = t.stateNode),
          Dr(),
          De(Ct),
          De(ft),
          Xa(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (ji(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), en !== null && (Ts(en), (en = null)))),
          ms(e, t),
          pt(t),
          null
        );
      case 5:
        Ka(t);
        var a = cr(Io.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          Af(e, t, r, i, a),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(l(166));
            return pt(t), null;
          }
          if (((e = cr(cn.current)), ji(t))) {
            (i = t.stateNode), (r = t.type);
            var c = t.memoizedProps;
            switch (((i[un] = t), (i[$o] = c), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                je("cancel", i), je("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                je("load", i);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Po.length; a++) je(Po[a], i);
                break;
              case "source":
                je("error", i);
                break;
              case "img":
              case "image":
              case "link":
                je("error", i), je("load", i);
                break;
              case "details":
                je("toggle", i);
                break;
              case "input":
                Cr(i, c), je("invalid", i);
                break;
              case "select":
                (i._wrapperState = { wasMultiple: !!c.multiple }),
                  je("invalid", i);
                break;
              case "textarea":
                io(i, c), je("invalid", i);
            }
            ie(r, c), (a = null);
            for (var d in c)
              if (c.hasOwnProperty(d)) {
                var g = c[d];
                d === "children"
                  ? typeof g == "string"
                    ? i.textContent !== g &&
                      (c.suppressHydrationWarning !== !0 &&
                        Ni(i.textContent, g, e),
                      (a = ["children", g]))
                    : typeof g == "number" &&
                      i.textContent !== "" + g &&
                      (c.suppressHydrationWarning !== !0 &&
                        Ni(i.textContent, g, e),
                      (a = ["children", "" + g]))
                  : u.hasOwnProperty(d) &&
                    g != null &&
                    d === "onScroll" &&
                    je("scroll", i);
              }
            switch (r) {
              case "input":
                $n(i), ct(i, c, !0);
                break;
              case "textarea":
                $n(i), si(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (i.onclick = Mi);
            }
            (i = a), (t.updateQueue = i), i !== null && (t.flags |= 4);
          } else {
            (d = a.nodeType === 9 ? a : a.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = ui(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = d.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof i.is == "string"
                  ? (e = d.createElement(r, { is: i.is }))
                  : ((e = d.createElement(r)),
                    r === "select" &&
                      ((d = e),
                      i.multiple
                        ? (d.multiple = !0)
                        : i.size && (d.size = i.size)))
                : (e = d.createElementNS(e, r)),
              (e[un] = t),
              (e[$o] = i),
              zf(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((d = Pe(r, i)), r)) {
                case "dialog":
                  je("cancel", e), je("close", e), (a = i);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  je("load", e), (a = i);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Po.length; a++) je(Po[a], e);
                  a = i;
                  break;
                case "source":
                  je("error", e), (a = i);
                  break;
                case "img":
                case "image":
                case "link":
                  je("error", e), je("load", e), (a = i);
                  break;
                case "details":
                  je("toggle", e), (a = i);
                  break;
                case "input":
                  Cr(e, i), (a = ln(e, i)), je("invalid", e);
                  break;
                case "option":
                  a = i;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!i.multiple }),
                    (a = Q({}, i, { value: void 0 })),
                    je("invalid", e);
                  break;
                case "textarea":
                  io(e, i), (a = fe(e, i)), je("invalid", e);
                  break;
                default:
                  a = i;
              }
              ie(r, a), (g = a);
              for (c in g)
                if (g.hasOwnProperty(c)) {
                  var S = g[c];
                  c === "style"
                    ? xr(e, S)
                    : c === "dangerouslySetInnerHTML"
                    ? ((S = S ? S.__html : void 0), S != null && rr(e, S))
                    : c === "children"
                    ? typeof S == "string"
                      ? (r !== "textarea" || S !== "") && Mn(e, S)
                      : typeof S == "number" && Mn(e, "" + S)
                    : c !== "suppressContentEditableWarning" &&
                      c !== "suppressHydrationWarning" &&
                      c !== "autoFocus" &&
                      (u.hasOwnProperty(c)
                        ? S != null && c === "onScroll" && je("scroll", e)
                        : S != null && H(e, c, S, d));
                }
              switch (r) {
                case "input":
                  $n(e), ct(e, i, !1);
                  break;
                case "textarea":
                  $n(e), si(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + Te(i.value));
                  break;
                case "select":
                  (e.multiple = !!i.multiple),
                    (c = i.value),
                    c != null
                      ? Dt(e, !!i.multiple, c, !1)
                      : i.defaultValue != null &&
                        Dt(e, !!i.multiple, i.defaultValue, !0);
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Mi);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
            }
            i && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return pt(t), null;
      case 6:
        if (e && t.stateNode != null) Lf(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(l(166));
          if (((r = cr(Io.current)), cr(cn.current), ji(t))) {
            if (
              ((i = t.stateNode),
              (r = t.memoizedProps),
              (i[un] = t),
              (c = i.nodeValue !== r) && ((e = Mt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Ni(i.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ni(i.nodeValue, r, (e.mode & 1) !== 0);
              }
            c && (t.flags |= 4);
          } else
            (i = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(i)),
              (i[un] = t),
              (t.stateNode = i);
        }
        return pt(t), null;
      case 13:
        if (
          (De(Ve),
          (i = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Fe && Ot !== null && t.mode & 1 && !(t.flags & 128))
            jc(), Ar(), (t.flags |= 98560), (c = !1);
          else if (((c = ji(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(l(318));
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(l(317));
              c[un] = t;
            } else
              Ar(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            pt(t), (c = !1);
          } else en !== null && (Ts(en), (en = null)), (c = !0);
          if (!c) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = r), t)
          : ((i = i !== null),
            i !== (e !== null && e.memoizedState !== null) &&
              i &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || Ve.current & 1 ? tt === 0 && (tt = 3) : bs())),
            t.updateQueue !== null && (t.flags |= 4),
            pt(t),
            null);
      case 4:
        return (
          Dr(),
          ms(e, t),
          e === null && Ro(t.stateNode.containerInfo),
          pt(t),
          null
        );
      case 10:
        return Wa(t.type._context), pt(t), null;
      case 17:
        return xt(t.type) && Ii(), pt(t), null;
      case 19:
        if ((De(Ve), (c = t.memoizedState), c === null)) return pt(t), null;
        if (((i = (t.flags & 128) !== 0), (d = c.rendering), d === null))
          if (i) jo(c, !1);
          else {
            if (tt !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((d = Hi(e)), d !== null)) {
                  for (
                    t.flags |= 128,
                      jo(c, !1),
                      i = d.updateQueue,
                      i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      i = r,
                      r = t.child;
                    r !== null;

                  )
                    (c = r),
                      (e = i),
                      (c.flags &= 14680066),
                      (d = c.alternate),
                      d === null
                        ? ((c.childLanes = 0),
                          (c.lanes = e),
                          (c.child = null),
                          (c.subtreeFlags = 0),
                          (c.memoizedProps = null),
                          (c.memoizedState = null),
                          (c.updateQueue = null),
                          (c.dependencies = null),
                          (c.stateNode = null))
                        : ((c.childLanes = d.childLanes),
                          (c.lanes = d.lanes),
                          (c.child = d.child),
                          (c.subtreeFlags = 0),
                          (c.deletions = null),
                          (c.memoizedProps = d.memoizedProps),
                          (c.memoizedState = d.memoizedState),
                          (c.updateQueue = d.updateQueue),
                          (c.type = d.type),
                          (e = d.dependencies),
                          (c.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return Be(Ve, (Ve.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              Qe() > Ur &&
              ((t.flags |= 128), (i = !0), jo(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = Hi(d)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                jo(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !d.alternate &&
                  !Fe)
              )
                return pt(t), null;
            } else
              2 * Qe() - c.renderingStartTime > Ur &&
                r !== 1073741824 &&
                ((t.flags |= 128), (i = !0), jo(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((d.sibling = t.child), (t.child = d))
            : ((r = c.last),
              r !== null ? (r.sibling = d) : (t.child = d),
              (c.last = d));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = Qe()),
            (t.sibling = null),
            (r = Ve.current),
            Be(Ve, i ? (r & 1) | 2 : r & 1),
            t)
          : (pt(t), null);
      case 22:
      case 23:
        return (
          Rs(),
          (i = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
          i && t.mode & 1
            ? It & 1073741824 &&
              (pt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : pt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function fh(e, t) {
    switch ((Aa(t), t.tag)) {
      case 1:
        return (
          xt(t.type) && Ii(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Dr(),
          De(Ct),
          De(ft),
          Xa(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Ka(t), null;
      case 13:
        if (
          (De(Ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(l(340));
          Ar();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return De(Ve), null;
      case 4:
        return Dr(), null;
      case 10:
        return Wa(t.type._context), null;
      case 22:
      case 23:
        return Rs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var el = !1,
    mt = !1,
    dh = typeof WeakSet == "function" ? WeakSet : Set,
    Z = null;
  function Wr(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (i) {
          He(e, t, i);
        }
      else r.current = null;
  }
  function hs(e, t, r) {
    try {
      r();
    } catch (i) {
      He(e, t, i);
    }
  }
  var Bf = !1;
  function ph(e, t) {
    if (((Ra = wi), (e = hc()), Sa(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var i = r.getSelection && r.getSelection();
          if (i && i.rangeCount !== 0) {
            r = i.anchorNode;
            var a = i.anchorOffset,
              c = i.focusNode;
            i = i.focusOffset;
            try {
              r.nodeType, c.nodeType;
            } catch {
              r = null;
              break e;
            }
            var d = 0,
              g = -1,
              S = -1,
              b = 0,
              B = 0,
              j = e,
              L = null;
            t: for (;;) {
              for (
                var Y;
                j !== r || (a !== 0 && j.nodeType !== 3) || (g = d + a),
                  j !== c || (i !== 0 && j.nodeType !== 3) || (S = d + i),
                  j.nodeType === 3 && (d += j.nodeValue.length),
                  (Y = j.firstChild) !== null;

              )
                (L = j), (j = Y);
              for (;;) {
                if (j === e) break t;
                if (
                  (L === r && ++b === a && (g = d),
                  L === c && ++B === i && (S = d),
                  (Y = j.nextSibling) !== null)
                )
                  break;
                (j = L), (L = j.parentNode);
              }
              j = Y;
            }
            r = g === -1 || S === -1 ? null : { start: g, end: S };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      ba = { focusedElem: e, selectionRange: r }, wi = !1, Z = t;
      Z !== null;

    )
      if (((t = Z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (Z = e);
      else
        for (; Z !== null; ) {
          t = Z;
          try {
            var ee = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ee !== null) {
                    var ne = ee.memoizedProps,
                      Xe = ee.memoizedState,
                      T = t.stateNode,
                      x = T.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ne : tn(t.type, ne),
                        Xe
                      );
                    T.__reactInternalSnapshotBeforeUpdate = x;
                  }
                  break;
                case 3:
                  var P = t.stateNode.containerInfo;
                  P.nodeType === 1
                    ? (P.textContent = "")
                    : P.nodeType === 9 &&
                      P.documentElement &&
                      P.removeChild(P.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(l(163));
              }
          } catch (U) {
            He(t, t.return, U);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Z = e);
            break;
          }
          Z = t.return;
        }
    return (ee = Bf), (Bf = !1), ee;
  }
  function Do(e, t, r) {
    var i = t.updateQueue;
    if (((i = i !== null ? i.lastEffect : null), i !== null)) {
      var a = (i = i.next);
      do {
        if ((a.tag & e) === e) {
          var c = a.destroy;
          (a.destroy = void 0), c !== void 0 && hs(t, r, c);
        }
        a = a.next;
      } while (a !== i);
    }
  }
  function tl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var i = r.create;
          r.destroy = i();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function gs(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function jf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), jf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[un],
          delete t[$o],
          delete t[Ma],
          delete t[Xm],
          delete t[Ym])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Df(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ff(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Df(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ys(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = Mi));
    else if (i !== 4 && ((e = e.child), e !== null))
      for (ys(e, t, r), e = e.sibling; e !== null; )
        ys(e, t, r), (e = e.sibling);
  }
  function vs(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (i !== 4 && ((e = e.child), e !== null))
      for (vs(e, t, r), e = e.sibling; e !== null; )
        vs(e, t, r), (e = e.sibling);
  }
  var at = null,
    nn = !1;
  function Hn(e, t, r) {
    for (r = r.child; r !== null; ) Wf(e, t, r), (r = r.sibling);
  }
  function Wf(e, t, r) {
    if (sn && typeof sn.onCommitFiberUnmount == "function")
      try {
        sn.onCommitFiberUnmount(mi, r);
      } catch {}
    switch (r.tag) {
      case 5:
        mt || Wr(r, t);
      case 6:
        var i = at,
          a = nn;
        (at = null),
          Hn(e, t, r),
          (at = i),
          (nn = a),
          at !== null &&
            (nn
              ? ((e = at),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : at.removeChild(r.stateNode));
        break;
      case 18:
        at !== null &&
          (nn
            ? ((e = at),
              (r = r.stateNode),
              e.nodeType === 8
                ? Na(e.parentNode, r)
                : e.nodeType === 1 && Na(e, r),
              vo(e))
            : Na(at, r.stateNode));
        break;
      case 4:
        (i = at),
          (a = nn),
          (at = r.stateNode.containerInfo),
          (nn = !0),
          Hn(e, t, r),
          (at = i),
          (nn = a);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !mt &&
          ((i = r.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
        ) {
          a = i = i.next;
          do {
            var c = a,
              d = c.destroy;
            (c = c.tag),
              d !== void 0 && (c & 2 || c & 4) && hs(r, t, d),
              (a = a.next);
          } while (a !== i);
        }
        Hn(e, t, r);
        break;
      case 1:
        if (
          !mt &&
          (Wr(r, t),
          (i = r.stateNode),
          typeof i.componentWillUnmount == "function")
        )
          try {
            (i.props = r.memoizedProps),
              (i.state = r.memoizedState),
              i.componentWillUnmount();
          } catch (g) {
            He(r, t, g);
          }
        Hn(e, t, r);
        break;
      case 21:
        Hn(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((mt = (i = mt) || r.memoizedState !== null), Hn(e, t, r), (mt = i))
          : Hn(e, t, r);
        break;
      default:
        Hn(e, t, r);
    }
  }
  function Vf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new dh()),
        t.forEach(function (i) {
          var a = xh.bind(null, e, i);
          r.has(i) || (r.add(i), i.then(a, a));
        });
    }
  }
  function rn(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var i = 0; i < r.length; i++) {
        var a = r[i];
        try {
          var c = e,
            d = t,
            g = d;
          e: for (; g !== null; ) {
            switch (g.tag) {
              case 5:
                (at = g.stateNode), (nn = !1);
                break e;
              case 3:
                (at = g.stateNode.containerInfo), (nn = !0);
                break e;
              case 4:
                (at = g.stateNode.containerInfo), (nn = !0);
                break e;
            }
            g = g.return;
          }
          if (at === null) throw Error(l(160));
          Wf(c, d, a), (at = null), (nn = !1);
          var S = a.alternate;
          S !== null && (S.return = null), (a.return = null);
        } catch (b) {
          He(a, t, b);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Uf(t, e), (t = t.sibling);
  }
  function Uf(e, t) {
    var r = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((rn(t, e), dn(e), i & 4)) {
          try {
            Do(3, e, e.return), tl(3, e);
          } catch (ne) {
            He(e, e.return, ne);
          }
          try {
            Do(5, e, e.return);
          } catch (ne) {
            He(e, e.return, ne);
          }
        }
        break;
      case 1:
        rn(t, e), dn(e), i & 512 && r !== null && Wr(r, r.return);
        break;
      case 5:
        if (
          (rn(t, e),
          dn(e),
          i & 512 && r !== null && Wr(r, r.return),
          e.flags & 32)
        ) {
          var a = e.stateNode;
          try {
            Mn(a, "");
          } catch (ne) {
            He(e, e.return, ne);
          }
        }
        if (i & 4 && ((a = e.stateNode), a != null)) {
          var c = e.memoizedProps,
            d = r !== null ? r.memoizedProps : c,
            g = e.type,
            S = e.updateQueue;
          if (((e.updateQueue = null), S !== null))
            try {
              g === "input" && c.type === "radio" && c.name != null && tr(a, c),
                Pe(g, d);
              var b = Pe(g, c);
              for (d = 0; d < S.length; d += 2) {
                var B = S[d],
                  j = S[d + 1];
                B === "style"
                  ? xr(a, j)
                  : B === "dangerouslySetInnerHTML"
                  ? rr(a, j)
                  : B === "children"
                  ? Mn(a, j)
                  : H(a, B, j, b);
              }
              switch (g) {
                case "input":
                  rt(a, c);
                  break;
                case "textarea":
                  ai(a, c);
                  break;
                case "select":
                  var L = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!c.multiple;
                  var Y = c.value;
                  Y != null
                    ? Dt(a, !!c.multiple, Y, !1)
                    : L !== !!c.multiple &&
                      (c.defaultValue != null
                        ? Dt(a, !!c.multiple, c.defaultValue, !0)
                        : Dt(a, !!c.multiple, c.multiple ? [] : "", !1));
              }
              a[$o] = c;
            } catch (ne) {
              He(e, e.return, ne);
            }
        }
        break;
      case 6:
        if ((rn(t, e), dn(e), i & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          (a = e.stateNode), (c = e.memoizedProps);
          try {
            a.nodeValue = c;
          } catch (ne) {
            He(e, e.return, ne);
          }
        }
        break;
      case 3:
        if (
          (rn(t, e), dn(e), i & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            vo(t.containerInfo);
          } catch (ne) {
            He(e, e.return, ne);
          }
        break;
      case 4:
        rn(t, e), dn(e);
        break;
      case 13:
        rn(t, e),
          dn(e),
          (a = e.child),
          a.flags & 8192 &&
            ((c = a.memoizedState !== null),
            (a.stateNode.isHidden = c),
            !c ||
              (a.alternate !== null && a.alternate.memoizedState !== null) ||
              (Cs = Qe())),
          i & 4 && Vf(e);
        break;
      case 22:
        if (
          ((B = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((mt = (b = mt) || B), rn(t, e), (mt = b)) : rn(t, e),
          dn(e),
          i & 8192)
        ) {
          if (
            ((b = e.memoizedState !== null),
            (e.stateNode.isHidden = b) && !B && e.mode & 1)
          )
            for (Z = e, B = e.child; B !== null; ) {
              for (j = Z = B; Z !== null; ) {
                switch (((L = Z), (Y = L.child), L.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Do(4, L, L.return);
                    break;
                  case 1:
                    Wr(L, L.return);
                    var ee = L.stateNode;
                    if (typeof ee.componentWillUnmount == "function") {
                      (i = L), (r = L.return);
                      try {
                        (t = i),
                          (ee.props = t.memoizedProps),
                          (ee.state = t.memoizedState),
                          ee.componentWillUnmount();
                      } catch (ne) {
                        He(i, r, ne);
                      }
                    }
                    break;
                  case 5:
                    Wr(L, L.return);
                    break;
                  case 22:
                    if (L.memoizedState !== null) {
                      Kf(j);
                      continue;
                    }
                }
                Y !== null ? ((Y.return = L), (Z = Y)) : Kf(j);
              }
              B = B.sibling;
            }
          e: for (B = null, j = e; ; ) {
            if (j.tag === 5) {
              if (B === null) {
                B = j;
                try {
                  (a = j.stateNode),
                    b
                      ? ((c = a.style),
                        typeof c.setProperty == "function"
                          ? c.setProperty("display", "none", "important")
                          : (c.display = "none"))
                      : ((g = j.stateNode),
                        (S = j.memoizedProps.style),
                        (d =
                          S != null && S.hasOwnProperty("display")
                            ? S.display
                            : null),
                        (g.style.display = ci("display", d)));
                } catch (ne) {
                  He(e, e.return, ne);
                }
              }
            } else if (j.tag === 6) {
              if (B === null)
                try {
                  j.stateNode.nodeValue = b ? "" : j.memoizedProps;
                } catch (ne) {
                  He(e, e.return, ne);
                }
            } else if (
              ((j.tag !== 22 && j.tag !== 23) ||
                j.memoizedState === null ||
                j === e) &&
              j.child !== null
            ) {
              (j.child.return = j), (j = j.child);
              continue;
            }
            if (j === e) break e;
            for (; j.sibling === null; ) {
              if (j.return === null || j.return === e) break e;
              B === j && (B = null), (j = j.return);
            }
            B === j && (B = null),
              (j.sibling.return = j.return),
              (j = j.sibling);
          }
        }
        break;
      case 19:
        rn(t, e), dn(e), i & 4 && Vf(e);
        break;
      case 21:
        break;
      default:
        rn(t, e), dn(e);
    }
  }
  function dn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Df(r)) {
              var i = r;
              break e;
            }
            r = r.return;
          }
          throw Error(l(160));
        }
        switch (i.tag) {
          case 5:
            var a = i.stateNode;
            i.flags & 32 && (Mn(a, ""), (i.flags &= -33));
            var c = Ff(e);
            vs(e, c, a);
            break;
          case 3:
          case 4:
            var d = i.stateNode.containerInfo,
              g = Ff(e);
            ys(e, g, d);
            break;
          default:
            throw Error(l(161));
        }
      } catch (S) {
        He(e, e.return, S);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function mh(e, t, r) {
    (Z = e), Hf(e);
  }
  function Hf(e, t, r) {
    for (var i = (e.mode & 1) !== 0; Z !== null; ) {
      var a = Z,
        c = a.child;
      if (a.tag === 22 && i) {
        var d = a.memoizedState !== null || el;
        if (!d) {
          var g = a.alternate,
            S = (g !== null && g.memoizedState !== null) || mt;
          g = el;
          var b = mt;
          if (((el = d), (mt = S) && !b))
            for (Z = a; Z !== null; )
              (d = Z),
                (S = d.child),
                d.tag === 22 && d.memoizedState !== null
                  ? Qf(a)
                  : S !== null
                  ? ((S.return = d), (Z = S))
                  : Qf(a);
          for (; c !== null; ) (Z = c), Hf(c), (c = c.sibling);
          (Z = a), (el = g), (mt = b);
        }
        Gf(e);
      } else
        a.subtreeFlags & 8772 && c !== null ? ((c.return = a), (Z = c)) : Gf(e);
    }
  }
  function Gf(e) {
    for (; Z !== null; ) {
      var t = Z;
      if (t.flags & 8772) {
        var r = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                mt || tl(5, t);
                break;
              case 1:
                var i = t.stateNode;
                if (t.flags & 4 && !mt)
                  if (r === null) i.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : tn(t.type, r.memoizedProps);
                    i.componentDidUpdate(
                      a,
                      r.memoizedState,
                      i.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var c = t.updateQueue;
                c !== null && Gc(t, c, i);
                break;
              case 3:
                var d = t.updateQueue;
                if (d !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  Gc(t, d, r);
                }
                break;
              case 5:
                var g = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = g;
                  var S = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      S.autoFocus && r.focus();
                      break;
                    case "img":
                      S.src && (r.src = S.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var b = t.alternate;
                  if (b !== null) {
                    var B = b.memoizedState;
                    if (B !== null) {
                      var j = B.dehydrated;
                      j !== null && vo(j);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(l(163));
            }
          mt || (t.flags & 512 && gs(t));
        } catch (L) {
          He(t, t.return, L);
        }
      }
      if (t === e) {
        Z = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (Z = r);
        break;
      }
      Z = t.return;
    }
  }
  function Kf(e) {
    for (; Z !== null; ) {
      var t = Z;
      if (t === e) {
        Z = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (Z = r);
        break;
      }
      Z = t.return;
    }
  }
  function Qf(e) {
    for (; Z !== null; ) {
      var t = Z;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              tl(4, t);
            } catch (S) {
              He(t, r, S);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var a = t.return;
              try {
                i.componentDidMount();
              } catch (S) {
                He(t, a, S);
              }
            }
            var c = t.return;
            try {
              gs(t);
            } catch (S) {
              He(t, c, S);
            }
            break;
          case 5:
            var d = t.return;
            try {
              gs(t);
            } catch (S) {
              He(t, d, S);
            }
        }
      } catch (S) {
        He(t, t.return, S);
      }
      if (t === e) {
        Z = null;
        break;
      }
      var g = t.sibling;
      if (g !== null) {
        (g.return = t.return), (Z = g);
        break;
      }
      Z = t.return;
    }
  }
  var hh = Math.ceil,
    nl = z.ReactCurrentDispatcher,
    Ss = z.ReactCurrentOwner,
    Gt = z.ReactCurrentBatchConfig,
    Re = 0,
    it = null,
    qe = null,
    st = 0,
    It = 0,
    Vr = Dn(0),
    tt = 0,
    Fo = null,
    dr = 0,
    rl = 0,
    ws = 0,
    Wo = null,
    Et = null,
    Cs = 0,
    Ur = 1 / 0,
    Tn = null,
    ol = !1,
    xs = null,
    Gn = null,
    il = !1,
    Kn = null,
    ll = 0,
    Vo = 0,
    ks = null,
    al = -1,
    sl = 0;
  function yt() {
    return Re & 6 ? Qe() : al !== -1 ? al : (al = Qe());
  }
  function Qn(e) {
    return e.mode & 1
      ? Re & 2 && st !== 0
        ? st & -st
        : Zm.transition !== null
        ? (sl === 0 && (sl = Du()), sl)
        : ((e = Oe),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Xu(e.type))),
          e)
      : 1;
  }
  function on(e, t, r, i) {
    if (50 < Vo) throw ((Vo = 0), (ks = null), Error(l(185)));
    po(e, r, i),
      (!(Re & 2) || e !== it) &&
        (e === it && (!(Re & 2) && (rl |= r), tt === 4 && Xn(e, st)),
        Tt(e, i),
        r === 1 &&
          Re === 0 &&
          !(t.mode & 1) &&
          ((Ur = Qe() + 500), Ai && Wn()));
  }
  function Tt(e, t) {
    var r = e.callbackNode;
    Zp(e, t);
    var i = yi(e, e === it ? st : 0);
    if (i === 0)
      r !== null && Lu(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = i & -i), e.callbackPriority !== t)) {
      if ((r != null && Lu(r), t === 1))
        e.tag === 0 ? qm(Yf.bind(null, e)) : Ic(Yf.bind(null, e)),
          Km(function () {
            !(Re & 6) && Wn();
          }),
          (r = null);
      else {
        switch (Fu(i)) {
          case 1:
            r = na;
            break;
          case 4:
            r = Bu;
            break;
          case 16:
            r = pi;
            break;
          case 536870912:
            r = ju;
            break;
          default:
            r = pi;
        }
        r = od(r, Xf.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function Xf(e, t) {
    if (((al = -1), (sl = 0), Re & 6)) throw Error(l(327));
    var r = e.callbackNode;
    if (Hr() && e.callbackNode !== r) return null;
    var i = yi(e, e === it ? st : 0);
    if (i === 0) return null;
    if (i & 30 || i & e.expiredLanes || t) t = ul(e, i);
    else {
      t = i;
      var a = Re;
      Re |= 2;
      var c = Zf();
      (it !== e || st !== t) && ((Tn = null), (Ur = Qe() + 500), mr(e, t));
      do
        try {
          vh();
          break;
        } catch (g) {
          qf(e, g);
        }
      while (!0);
      Fa(),
        (nl.current = c),
        (Re = a),
        qe !== null ? (t = 0) : ((it = null), (st = 0), (t = tt));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((a = ra(e)), a !== 0 && ((i = a), (t = Es(e, a)))),
        t === 1)
      )
        throw ((r = Fo), mr(e, 0), Xn(e, i), Tt(e, Qe()), r);
      if (t === 6) Xn(e, i);
      else {
        if (
          ((a = e.current.alternate),
          !(i & 30) &&
            !gh(a) &&
            ((t = ul(e, i)),
            t === 2 && ((c = ra(e)), c !== 0 && ((i = c), (t = Es(e, c)))),
            t === 1))
        )
          throw ((r = Fo), mr(e, 0), Xn(e, i), Tt(e, Qe()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = i), t)) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            hr(e, Et, Tn);
            break;
          case 3:
            if (
              (Xn(e, i),
              (i & 130023424) === i && ((t = Cs + 500 - Qe()), 10 < t))
            ) {
              if (yi(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & i) !== i)) {
                yt(), (e.pingedLanes |= e.suspendedLanes & a);
                break;
              }
              e.timeoutHandle = _a(hr.bind(null, e, Et, Tn), t);
              break;
            }
            hr(e, Et, Tn);
            break;
          case 4:
            if ((Xn(e, i), (i & 4194240) === i)) break;
            for (t = e.eventTimes, a = -1; 0 < i; ) {
              var d = 31 - Zt(i);
              (c = 1 << d), (d = t[d]), d > a && (a = d), (i &= ~c);
            }
            if (
              ((i = a),
              (i = Qe() - i),
              (i =
                (120 > i
                  ? 120
                  : 480 > i
                  ? 480
                  : 1080 > i
                  ? 1080
                  : 1920 > i
                  ? 1920
                  : 3e3 > i
                  ? 3e3
                  : 4320 > i
                  ? 4320
                  : 1960 * hh(i / 1960)) - i),
              10 < i)
            ) {
              e.timeoutHandle = _a(hr.bind(null, e, Et, Tn), i);
              break;
            }
            hr(e, Et, Tn);
            break;
          case 5:
            hr(e, Et, Tn);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return Tt(e, Qe()), e.callbackNode === r ? Xf.bind(null, e) : null;
  }
  function Es(e, t) {
    var r = Wo;
    return (
      e.current.memoizedState.isDehydrated && (mr(e, t).flags |= 256),
      (e = ul(e, t)),
      e !== 2 && ((t = Et), (Et = r), t !== null && Ts(t)),
      e
    );
  }
  function Ts(e) {
    Et === null ? (Et = e) : Et.push.apply(Et, e);
  }
  function gh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var i = 0; i < r.length; i++) {
            var a = r[i],
              c = a.getSnapshot;
            a = a.value;
            try {
              if (!Jt(c(), a)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Xn(e, t) {
    for (
      t &= ~ws,
        t &= ~rl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - Zt(t),
        i = 1 << r;
      (e[r] = -1), (t &= ~i);
    }
  }
  function Yf(e) {
    if (Re & 6) throw Error(l(327));
    Hr();
    var t = yi(e, 0);
    if (!(t & 1)) return Tt(e, Qe()), null;
    var r = ul(e, t);
    if (e.tag !== 0 && r === 2) {
      var i = ra(e);
      i !== 0 && ((t = i), (r = Es(e, i)));
    }
    if (r === 1) throw ((r = Fo), mr(e, 0), Xn(e, t), Tt(e, Qe()), r);
    if (r === 6) throw Error(l(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      hr(e, Et, Tn),
      Tt(e, Qe()),
      null
    );
  }
  function Ps(e, t) {
    var r = Re;
    Re |= 1;
    try {
      return e(t);
    } finally {
      (Re = r), Re === 0 && ((Ur = Qe() + 500), Ai && Wn());
    }
  }
  function pr(e) {
    Kn !== null && Kn.tag === 0 && !(Re & 6) && Hr();
    var t = Re;
    Re |= 1;
    var r = Gt.transition,
      i = Oe;
    try {
      if (((Gt.transition = null), (Oe = 1), e)) return e();
    } finally {
      (Oe = i), (Gt.transition = r), (Re = t), !(Re & 6) && Wn();
    }
  }
  function Rs() {
    (It = Vr.current), De(Vr);
  }
  function mr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), Gm(r)), qe !== null))
      for (r = qe.return; r !== null; ) {
        var i = r;
        switch ((Aa(i), i.tag)) {
          case 1:
            (i = i.type.childContextTypes), i != null && Ii();
            break;
          case 3:
            Dr(), De(Ct), De(ft), Xa();
            break;
          case 5:
            Ka(i);
            break;
          case 4:
            Dr();
            break;
          case 13:
            De(Ve);
            break;
          case 19:
            De(Ve);
            break;
          case 10:
            Wa(i.type._context);
            break;
          case 22:
          case 23:
            Rs();
        }
        r = r.return;
      }
    if (
      ((it = e),
      (qe = e = Yn(e.current, null)),
      (st = It = t),
      (tt = 0),
      (Fo = null),
      (ws = rl = dr = 0),
      (Et = Wo = null),
      ur !== null)
    ) {
      for (t = 0; t < ur.length; t++)
        if (((r = ur[t]), (i = r.interleaved), i !== null)) {
          r.interleaved = null;
          var a = i.next,
            c = r.pending;
          if (c !== null) {
            var d = c.next;
            (c.next = a), (i.next = d);
          }
          r.pending = i;
        }
      ur = null;
    }
    return e;
  }
  function qf(e, t) {
    do {
      var r = qe;
      try {
        if ((Fa(), (Gi.current = Yi), Ki)) {
          for (var i = Ue.memoizedState; i !== null; ) {
            var a = i.queue;
            a !== null && (a.pending = null), (i = i.next);
          }
          Ki = !1;
        }
        if (
          ((fr = 0),
          (ot = et = Ue = null),
          (zo = !1),
          (Ao = 0),
          (Ss.current = null),
          r === null || r.return === null)
        ) {
          (tt = 1), (Fo = t), (qe = null);
          break;
        }
        e: {
          var c = e,
            d = r.return,
            g = r,
            S = t;
          if (
            ((t = st),
            (g.flags |= 32768),
            S !== null && typeof S == "object" && typeof S.then == "function")
          ) {
            var b = S,
              B = g,
              j = B.tag;
            if (!(B.mode & 1) && (j === 0 || j === 11 || j === 15)) {
              var L = B.alternate;
              L
                ? ((B.updateQueue = L.updateQueue),
                  (B.memoizedState = L.memoizedState),
                  (B.lanes = L.lanes))
                : ((B.updateQueue = null), (B.memoizedState = null));
            }
            var Y = xf(d);
            if (Y !== null) {
              (Y.flags &= -257),
                kf(Y, d, g, c, t),
                Y.mode & 1 && Cf(c, b, t),
                (t = Y),
                (S = b);
              var ee = t.updateQueue;
              if (ee === null) {
                var ne = new Set();
                ne.add(S), (t.updateQueue = ne);
              } else ee.add(S);
              break e;
            } else {
              if (!(t & 1)) {
                Cf(c, b, t), bs();
                break e;
              }
              S = Error(l(426));
            }
          } else if (Fe && g.mode & 1) {
            var Xe = xf(d);
            if (Xe !== null) {
              !(Xe.flags & 65536) && (Xe.flags |= 256),
                kf(Xe, d, g, c, t),
                ja(Fr(S, g));
              break e;
            }
          }
          (c = S = Fr(S, g)),
            tt !== 4 && (tt = 2),
            Wo === null ? (Wo = [c]) : Wo.push(c),
            (c = d);
          do {
            switch (c.tag) {
              case 3:
                (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                var T = Sf(c, S, t);
                Hc(c, T);
                break e;
              case 1:
                g = S;
                var x = c.type,
                  P = c.stateNode;
                if (
                  !(c.flags & 128) &&
                  (typeof x.getDerivedStateFromError == "function" ||
                    (P !== null &&
                      typeof P.componentDidCatch == "function" &&
                      (Gn === null || !Gn.has(P))))
                ) {
                  (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                  var U = wf(c, g, t);
                  Hc(c, U);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        ed(r);
      } catch (re) {
        (t = re), qe === r && r !== null && (qe = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Zf() {
    var e = nl.current;
    return (nl.current = Yi), e === null ? Yi : e;
  }
  function bs() {
    (tt === 0 || tt === 3 || tt === 2) && (tt = 4),
      it === null || (!(dr & 268435455) && !(rl & 268435455)) || Xn(it, st);
  }
  function ul(e, t) {
    var r = Re;
    Re |= 2;
    var i = Zf();
    (it !== e || st !== t) && ((Tn = null), mr(e, t));
    do
      try {
        yh();
        break;
      } catch (a) {
        qf(e, a);
      }
    while (!0);
    if ((Fa(), (Re = r), (nl.current = i), qe !== null)) throw Error(l(261));
    return (it = null), (st = 0), tt;
  }
  function yh() {
    for (; qe !== null; ) Jf(qe);
  }
  function vh() {
    for (; qe !== null && !Vp(); ) Jf(qe);
  }
  function Jf(e) {
    var t = rd(e.alternate, e, It);
    (e.memoizedProps = e.pendingProps),
      t === null ? ed(e) : (qe = t),
      (Ss.current = null);
  }
  function ed(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((r = fh(r, t)), r !== null)) {
          (r.flags &= 32767), (qe = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (tt = 6), (qe = null);
          return;
        }
      } else if (((r = ch(r, t, It)), r !== null)) {
        qe = r;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        qe = t;
        return;
      }
      qe = t = e;
    } while (t !== null);
    tt === 0 && (tt = 5);
  }
  function hr(e, t, r) {
    var i = Oe,
      a = Gt.transition;
    try {
      (Gt.transition = null), (Oe = 1), Sh(e, t, r, i);
    } finally {
      (Gt.transition = a), (Oe = i);
    }
    return null;
  }
  function Sh(e, t, r, i) {
    do Hr();
    while (Kn !== null);
    if (Re & 6) throw Error(l(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(l(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var c = r.lanes | r.childLanes;
    if (
      (Jp(e, c),
      e === it && ((qe = it = null), (st = 0)),
      (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
        il ||
        ((il = !0),
        od(pi, function () {
          return Hr(), null;
        })),
      (c = (r.flags & 15990) !== 0),
      r.subtreeFlags & 15990 || c)
    ) {
      (c = Gt.transition), (Gt.transition = null);
      var d = Oe;
      Oe = 1;
      var g = Re;
      (Re |= 4),
        (Ss.current = null),
        ph(e, r),
        Uf(r, e),
        jm(ba),
        (wi = !!Ra),
        (ba = Ra = null),
        (e.current = r),
        mh(r),
        Up(),
        (Re = g),
        (Oe = d),
        (Gt.transition = c);
    } else e.current = r;
    if (
      (il && ((il = !1), (Kn = e), (ll = a)),
      (c = e.pendingLanes),
      c === 0 && (Gn = null),
      Kp(r.stateNode),
      Tt(e, Qe()),
      t !== null)
    )
      for (i = e.onRecoverableError, r = 0; r < t.length; r++)
        (a = t[r]), i(a.value, { componentStack: a.stack, digest: a.digest });
    if (ol) throw ((ol = !1), (e = xs), (xs = null), e);
    return (
      ll & 1 && e.tag !== 0 && Hr(),
      (c = e.pendingLanes),
      c & 1 ? (e === ks ? Vo++ : ((Vo = 0), (ks = e))) : (Vo = 0),
      Wn(),
      null
    );
  }
  function Hr() {
    if (Kn !== null) {
      var e = Fu(ll),
        t = Gt.transition,
        r = Oe;
      try {
        if (((Gt.transition = null), (Oe = 16 > e ? 16 : e), Kn === null))
          var i = !1;
        else {
          if (((e = Kn), (Kn = null), (ll = 0), Re & 6)) throw Error(l(331));
          var a = Re;
          for (Re |= 4, Z = e.current; Z !== null; ) {
            var c = Z,
              d = c.child;
            if (Z.flags & 16) {
              var g = c.deletions;
              if (g !== null) {
                for (var S = 0; S < g.length; S++) {
                  var b = g[S];
                  for (Z = b; Z !== null; ) {
                    var B = Z;
                    switch (B.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Do(8, B, c);
                    }
                    var j = B.child;
                    if (j !== null) (j.return = B), (Z = j);
                    else
                      for (; Z !== null; ) {
                        B = Z;
                        var L = B.sibling,
                          Y = B.return;
                        if ((jf(B), B === b)) {
                          Z = null;
                          break;
                        }
                        if (L !== null) {
                          (L.return = Y), (Z = L);
                          break;
                        }
                        Z = Y;
                      }
                  }
                }
                var ee = c.alternate;
                if (ee !== null) {
                  var ne = ee.child;
                  if (ne !== null) {
                    ee.child = null;
                    do {
                      var Xe = ne.sibling;
                      (ne.sibling = null), (ne = Xe);
                    } while (ne !== null);
                  }
                }
                Z = c;
              }
            }
            if (c.subtreeFlags & 2064 && d !== null) (d.return = c), (Z = d);
            else
              e: for (; Z !== null; ) {
                if (((c = Z), c.flags & 2048))
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Do(9, c, c.return);
                  }
                var T = c.sibling;
                if (T !== null) {
                  (T.return = c.return), (Z = T);
                  break e;
                }
                Z = c.return;
              }
          }
          var x = e.current;
          for (Z = x; Z !== null; ) {
            d = Z;
            var P = d.child;
            if (d.subtreeFlags & 2064 && P !== null) (P.return = d), (Z = P);
            else
              e: for (d = x; Z !== null; ) {
                if (((g = Z), g.flags & 2048))
                  try {
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        tl(9, g);
                    }
                  } catch (re) {
                    He(g, g.return, re);
                  }
                if (g === d) {
                  Z = null;
                  break e;
                }
                var U = g.sibling;
                if (U !== null) {
                  (U.return = g.return), (Z = U);
                  break e;
                }
                Z = g.return;
              }
          }
          if (
            ((Re = a),
            Wn(),
            sn && typeof sn.onPostCommitFiberRoot == "function")
          )
            try {
              sn.onPostCommitFiberRoot(mi, e);
            } catch {}
          i = !0;
        }
        return i;
      } finally {
        (Oe = r), (Gt.transition = t);
      }
    }
    return !1;
  }
  function td(e, t, r) {
    (t = Fr(r, t)),
      (t = Sf(e, t, 1)),
      (e = Un(e, t, 1)),
      (t = yt()),
      e !== null && (po(e, 1, t), Tt(e, t));
  }
  function He(e, t, r) {
    if (e.tag === 3) td(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          td(t, e, r);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Gn === null || !Gn.has(i)))
          ) {
            (e = Fr(r, e)),
              (e = wf(t, e, 1)),
              (t = Un(t, e, 1)),
              (e = yt()),
              t !== null && (po(t, 1, e), Tt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function wh(e, t, r) {
    var i = e.pingCache;
    i !== null && i.delete(t),
      (t = yt()),
      (e.pingedLanes |= e.suspendedLanes & r),
      it === e &&
        (st & r) === r &&
        (tt === 4 || (tt === 3 && (st & 130023424) === st && 500 > Qe() - Cs)
          ? mr(e, 0)
          : (ws |= r)),
      Tt(e, t);
  }
  function nd(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = gi), (gi <<= 1), !(gi & 130023424) && (gi = 4194304))
        : (t = 1));
    var r = yt();
    (e = xn(e, t)), e !== null && (po(e, t, r), Tt(e, r));
  }
  function Ch(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), nd(e, r);
  }
  function xh(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode,
          a = e.memoizedState;
        a !== null && (r = a.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    i !== null && i.delete(t), nd(e, r);
  }
  var rd;
  rd = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ct.current) kt = !0;
      else {
        if (!(e.lanes & r) && !(t.flags & 128)) return (kt = !1), uh(e, t, r);
        kt = !!(e.flags & 131072);
      }
    else (kt = !1), Fe && t.flags & 1048576 && zc(t, Bi, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var i = t.type;
        Ji(e, t), (e = t.pendingProps);
        var a = Or(t, ft.current);
        jr(t, r), (a = Za(null, t, i, e, a, r));
        var c = Ja();
        return (
          (t.flags |= 1),
          typeof a == "object" &&
          a !== null &&
          typeof a.render == "function" &&
          a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              xt(i) ? ((c = !0), zi(t)) : (c = !1),
              (t.memoizedState =
                a.state !== null && a.state !== void 0 ? a.state : null),
              Ha(t),
              (a.updater = qi),
              (t.stateNode = a),
              (a._reactInternals = t),
              is(t, i, e, r),
              (t = us(null, t, i, !0, c, r)))
            : ((t.tag = 0), Fe && c && za(t), gt(null, t, a, r), (t = t.child)),
          t
        );
      case 16:
        i = t.elementType;
        e: {
          switch (
            (Ji(e, t),
            (e = t.pendingProps),
            (a = i._init),
            (i = a(i._payload)),
            (t.type = i),
            (a = t.tag = Eh(i)),
            (e = tn(i, e)),
            a)
          ) {
            case 0:
              t = ss(null, t, i, e, r);
              break e;
            case 1:
              t = $f(null, t, i, e, r);
              break e;
            case 11:
              t = Ef(null, t, i, e, r);
              break e;
            case 14:
              t = Tf(null, t, i, tn(i.type, e), r);
              break e;
          }
          throw Error(l(306, i, ""));
        }
        return t;
      case 0:
        return (
          (i = t.type),
          (a = t.pendingProps),
          (a = t.elementType === i ? a : tn(i, a)),
          ss(e, t, i, a, r)
        );
      case 1:
        return (
          (i = t.type),
          (a = t.pendingProps),
          (a = t.elementType === i ? a : tn(i, a)),
          $f(e, t, i, a, r)
        );
      case 3:
        e: {
          if ((_f(t), e === null)) throw Error(l(387));
          (i = t.pendingProps),
            (c = t.memoizedState),
            (a = c.element),
            Uc(e, t),
            Ui(t, i, null, r);
          var d = t.memoizedState;
          if (((i = d.element), c.isDehydrated))
            if (
              ((c = {
                element: i,
                isDehydrated: !1,
                cache: d.cache,
                pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
                transitions: d.transitions,
              }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              (a = Fr(Error(l(423)), t)), (t = Nf(e, t, i, r, a));
              break e;
            } else if (i !== a) {
              (a = Fr(Error(l(424)), t)), (t = Nf(e, t, i, r, a));
              break e;
            } else
              for (
                Ot = jn(t.stateNode.containerInfo.firstChild),
                  Mt = t,
                  Fe = !0,
                  en = null,
                  r = Wc(t, null, i, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((Ar(), i === a)) {
              t = En(e, t, r);
              break e;
            }
            gt(e, t, i, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Kc(t),
          e === null && Ba(t),
          (i = t.type),
          (a = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (d = a.children),
          $a(i, a) ? (d = null) : c !== null && $a(i, c) && (t.flags |= 32),
          bf(e, t),
          gt(e, t, d, r),
          t.child
        );
      case 6:
        return e === null && Ba(t), null;
      case 13:
        return Mf(e, t, r);
      case 4:
        return (
          Ga(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = Lr(t, null, i, r)) : gt(e, t, i, r),
          t.child
        );
      case 11:
        return (
          (i = t.type),
          (a = t.pendingProps),
          (a = t.elementType === i ? a : tn(i, a)),
          Ef(e, t, i, a, r)
        );
      case 7:
        return gt(e, t, t.pendingProps, r), t.child;
      case 8:
        return gt(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return gt(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((i = t.type._context),
            (a = t.pendingProps),
            (c = t.memoizedProps),
            (d = a.value),
            Be(Fi, i._currentValue),
            (i._currentValue = d),
            c !== null)
          )
            if (Jt(c.value, d)) {
              if (c.children === a.children && !Ct.current) {
                t = En(e, t, r);
                break e;
              }
            } else
              for (c = t.child, c !== null && (c.return = t); c !== null; ) {
                var g = c.dependencies;
                if (g !== null) {
                  d = c.child;
                  for (var S = g.firstContext; S !== null; ) {
                    if (S.context === i) {
                      if (c.tag === 1) {
                        (S = kn(-1, r & -r)), (S.tag = 2);
                        var b = c.updateQueue;
                        if (b !== null) {
                          b = b.shared;
                          var B = b.pending;
                          B === null
                            ? (S.next = S)
                            : ((S.next = B.next), (B.next = S)),
                            (b.pending = S);
                        }
                      }
                      (c.lanes |= r),
                        (S = c.alternate),
                        S !== null && (S.lanes |= r),
                        Va(c.return, r, t),
                        (g.lanes |= r);
                      break;
                    }
                    S = S.next;
                  }
                } else if (c.tag === 10) d = c.type === t.type ? null : c.child;
                else if (c.tag === 18) {
                  if (((d = c.return), d === null)) throw Error(l(341));
                  (d.lanes |= r),
                    (g = d.alternate),
                    g !== null && (g.lanes |= r),
                    Va(d, r, t),
                    (d = c.sibling);
                } else d = c.child;
                if (d !== null) d.return = c;
                else
                  for (d = c; d !== null; ) {
                    if (d === t) {
                      d = null;
                      break;
                    }
                    if (((c = d.sibling), c !== null)) {
                      (c.return = d.return), (d = c);
                      break;
                    }
                    d = d.return;
                  }
                c = d;
              }
          gt(e, t, a.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (i = t.pendingProps.children),
          jr(t, r),
          (a = Ut(a)),
          (i = i(a)),
          (t.flags |= 1),
          gt(e, t, i, r),
          t.child
        );
      case 14:
        return (
          (i = t.type),
          (a = tn(i, t.pendingProps)),
          (a = tn(i.type, a)),
          Tf(e, t, i, a, r)
        );
      case 15:
        return Pf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (i = t.type),
          (a = t.pendingProps),
          (a = t.elementType === i ? a : tn(i, a)),
          Ji(e, t),
          (t.tag = 1),
          xt(i) ? ((e = !0), zi(t)) : (e = !1),
          jr(t, r),
          yf(t, i, a),
          is(t, i, a, r),
          us(null, t, i, !0, e, r)
        );
      case 19:
        return If(e, t, r);
      case 22:
        return Rf(e, t, r);
    }
    throw Error(l(156, t.tag));
  };
  function od(e, t) {
    return Au(e, t);
  }
  function kh(e, t, r, i) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Kt(e, t, r, i) {
    return new kh(e, t, r, i);
  }
  function $s(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Eh(e) {
    if (typeof e == "function") return $s(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === J)) return 11;
      if (e === we) return 14;
    }
    return 2;
  }
  function Yn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = Kt(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function cl(e, t, r, i, a, c) {
    var d = 2;
    if (((i = e), typeof e == "function")) $s(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else
      e: switch (e) {
        case K:
          return gr(r.children, a, c, t);
        case ue:
          (d = 8), (a |= 8);
          break;
        case ge:
          return (
            (e = Kt(12, r, t, a | 2)), (e.elementType = ge), (e.lanes = c), e
          );
        case q:
          return (e = Kt(13, r, t, a)), (e.elementType = q), (e.lanes = c), e;
        case oe:
          return (e = Kt(19, r, t, a)), (e.elementType = oe), (e.lanes = c), e;
        case he:
          return fl(r, a, c, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case h:
                d = 10;
                break e;
              case D:
                d = 9;
                break e;
              case J:
                d = 11;
                break e;
              case we:
                d = 14;
                break e;
              case ve:
                (d = 16), (i = null);
                break e;
            }
          throw Error(l(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Kt(d, r, t, a)), (t.elementType = e), (t.type = i), (t.lanes = c), t
    );
  }
  function gr(e, t, r, i) {
    return (e = Kt(7, e, i, t)), (e.lanes = r), e;
  }
  function fl(e, t, r, i) {
    return (
      (e = Kt(22, e, i, t)),
      (e.elementType = he),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function _s(e, t, r) {
    return (e = Kt(6, e, null, t)), (e.lanes = r), e;
  }
  function Ns(e, t, r) {
    return (
      (t = Kt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Th(e, t, r, i, a) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = oa(0)),
      (this.expirationTimes = oa(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = oa(0)),
      (this.identifierPrefix = i),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Ms(e, t, r, i, a, c, d, g, S) {
    return (
      (e = new Th(e, t, r, g, S)),
      t === 1 ? ((t = 1), c === !0 && (t |= 8)) : (t = 0),
      (c = Kt(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (c.memoizedState = {
        element: i,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ha(c),
      e
    );
  }
  function Ph(e, t, r) {
    var i =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: G,
      key: i == null ? null : "" + i,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function id(e) {
    if (!e) return Fn;
    e = e._reactInternals;
    e: {
      if (or(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (xt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (xt(r)) return Mc(e, r, t);
    }
    return t;
  }
  function ld(e, t, r, i, a, c, d, g, S) {
    return (
      (e = Ms(r, i, !0, e, a, c, d, g, S)),
      (e.context = id(null)),
      (r = e.current),
      (i = yt()),
      (a = Qn(r)),
      (c = kn(i, a)),
      (c.callback = t ?? null),
      Un(r, c, a),
      (e.current.lanes = a),
      po(e, a, i),
      Tt(e, i),
      e
    );
  }
  function dl(e, t, r, i) {
    var a = t.current,
      c = yt(),
      d = Qn(a);
    return (
      (r = id(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = kn(c, d)),
      (t.payload = { element: e }),
      (i = i === void 0 ? null : i),
      i !== null && (t.callback = i),
      (e = Un(a, t, d)),
      e !== null && (on(e, a, d, c), Vi(e, a, d)),
      d
    );
  }
  function pl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ad(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Os(e, t) {
    ad(e, t), (e = e.alternate) && ad(e, t);
  }
  var sd =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Is(e) {
    this._internalRoot = e;
  }
  (ml.prototype.render = Is.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(l(409));
      dl(e, t, null, null);
    }),
    (ml.prototype.unmount = Is.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          pr(function () {
            dl(null, e, null, null);
          }),
            (t[vn] = null);
        }
      });
  function ml(e) {
    this._internalRoot = e;
  }
  ml.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Uu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < An.length && t !== 0 && t < An[r].priority; r++);
      An.splice(r, 0, e), r === 0 && Ku(e);
    }
  };
  function zs(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function hl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function ud() {}
  function Rh(e, t, r, i, a) {
    if (a) {
      if (typeof i == "function") {
        var c = i;
        i = function () {
          var b = pl(d);
          c.call(b);
        };
      }
      var d = ld(t, i, e, 0, null, !1, !1, "", ud);
      return (
        (e._reactRootContainer = d),
        (e[vn] = d.current),
        Ro(e.nodeType === 8 ? e.parentNode : e),
        pr(),
        d
      );
    }
    for (; (a = e.lastChild); ) e.removeChild(a);
    if (typeof i == "function") {
      var g = i;
      i = function () {
        var b = pl(S);
        g.call(b);
      };
    }
    var S = Ms(e, 0, !1, null, null, !1, !1, "", ud);
    return (
      (e._reactRootContainer = S),
      (e[vn] = S.current),
      Ro(e.nodeType === 8 ? e.parentNode : e),
      pr(function () {
        dl(t, S, r, i);
      }),
      S
    );
  }
  function gl(e, t, r, i, a) {
    var c = r._reactRootContainer;
    if (c) {
      var d = c;
      if (typeof a == "function") {
        var g = a;
        a = function () {
          var S = pl(d);
          g.call(S);
        };
      }
      dl(t, d, e, a);
    } else d = Rh(r, t, e, a, i);
    return pl(d);
  }
  (Wu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = fo(t.pendingLanes);
          r !== 0 &&
            (ia(t, r | 1), Tt(t, Qe()), !(Re & 6) && ((Ur = Qe() + 500), Wn()));
        }
        break;
      case 13:
        pr(function () {
          var i = xn(e, 1);
          if (i !== null) {
            var a = yt();
            on(i, e, 1, a);
          }
        }),
          Os(e, 1);
    }
  }),
    (la = function (e) {
      if (e.tag === 13) {
        var t = xn(e, 134217728);
        if (t !== null) {
          var r = yt();
          on(t, e, 134217728, r);
        }
        Os(e, 134217728);
      }
    }),
    (Vu = function (e) {
      if (e.tag === 13) {
        var t = Qn(e),
          r = xn(e, t);
        if (r !== null) {
          var i = yt();
          on(r, e, t, i);
        }
        Os(e, t);
      }
    }),
    (Uu = function () {
      return Oe;
    }),
    (Hu = function (e, t) {
      var r = Oe;
      try {
        return (Oe = e), t();
      } finally {
        Oe = r;
      }
    }),
    (St = function (e, t, r) {
      switch (t) {
        case "input":
          if ((rt(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var i = r[t];
              if (i !== e && i.form === e.form) {
                var a = Oi(i);
                if (!a) throw Error(l(90));
                er(i), rt(i, a);
              }
            }
          }
          break;
        case "textarea":
          ai(e, r);
          break;
        case "select":
          (t = r.value), t != null && Dt(e, !!r.multiple, t, !1);
      }
    }),
    ($u = Ps),
    (_u = pr);
  var bh = { usingClientEntryPoint: !1, Events: [_o, Nr, Oi, kr, bu, Ps] },
    Uo = {
      findFiberByHostInstance: ir,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    $h = {
      bundleType: Uo.bundleType,
      version: Uo.version,
      rendererPackageName: Uo.rendererPackageName,
      rendererConfig: Uo.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: z.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Iu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Uo.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var yl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!yl.isDisabled && yl.supportsFiber)
      try {
        (mi = yl.inject($h)), (sn = yl);
      } catch {}
  }
  return (
    (Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bh),
    (Pt.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!zs(t)) throw Error(l(200));
      return Ph(e, t, null, r);
    }),
    (Pt.createRoot = function (e, t) {
      if (!zs(e)) throw Error(l(299));
      var r = !1,
        i = "",
        a = sd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = Ms(e, 1, !1, null, null, r, !1, i, a)),
        (e[vn] = t.current),
        Ro(e.nodeType === 8 ? e.parentNode : e),
        new Is(t)
      );
    }),
    (Pt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(l(188))
          : ((e = Object.keys(e).join(",")), Error(l(268, e)));
      return (e = Iu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Pt.flushSync = function (e) {
      return pr(e);
    }),
    (Pt.hydrate = function (e, t, r) {
      if (!hl(t)) throw Error(l(200));
      return gl(null, e, t, !0, r);
    }),
    (Pt.hydrateRoot = function (e, t, r) {
      if (!zs(e)) throw Error(l(405));
      var i = (r != null && r.hydratedSources) || null,
        a = !1,
        c = "",
        d = sd;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (c = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (d = r.onRecoverableError)),
        (t = ld(t, null, e, 1, r ?? null, a, !1, c, d)),
        (e[vn] = t.current),
        Ro(e),
        i)
      )
        for (e = 0; e < i.length; e++)
          (r = i[e]),
            (a = r._getVersion),
            (a = a(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, a])
              : t.mutableSourceEagerHydrationData.push(r, a);
      return new ml(t);
    }),
    (Pt.render = function (e, t, r) {
      if (!hl(t)) throw Error(l(200));
      return gl(null, e, t, !1, r);
    }),
    (Pt.unmountComponentAtNode = function (e) {
      if (!hl(e)) throw Error(l(40));
      return e._reactRootContainer
        ? (pr(function () {
            gl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[vn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Pt.unstable_batchedUpdates = Ps),
    (Pt.unstable_renderSubtreeIntoContainer = function (e, t, r, i) {
      if (!hl(r)) throw Error(l(200));
      if (e == null || e._reactInternals === void 0) throw Error(l(38));
      return gl(e, t, r, !1, i);
    }),
    (Pt.version = "18.3.1-next-f1338f8080-20240426"),
    Pt
  );
}
var vd;
function Fh() {
  if (vd) return Bs.exports;
  vd = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (o) {
        console.error(o);
      }
  }
  return n(), (Bs.exports = Dh()), Bs.exports;
}
var Sd;
function Wh() {
  if (Sd) return vl;
  Sd = 1;
  var n = Fh();
  return (vl.createRoot = n.createRoot), (vl.hydrateRoot = n.hydrateRoot), vl;
}
var Vh = Wh();
const Jo = { black: "#000", white: "#fff" },
  Gr = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  Kr = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  Qr = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  Xr = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Yr = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  Ko = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  Uh = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  };
function Sr(n, ...o) {
  const l = new URL(`https://mui.com/production-error/?code=${n}`);
  return (
    o.forEach((s) => l.searchParams.append("args[]", s)),
    `Minified MUI error #${n}; visit ${l} for the full message.`
  );
}
const lu = "$$material";
function bl() {
  return (
    (bl = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var o = 1; o < arguments.length; o++) {
            var l = arguments[o];
            for (var s in l) ({}).hasOwnProperty.call(l, s) && (n[s] = l[s]);
          }
          return n;
        }),
    bl.apply(null, arguments)
  );
}
function Hh(n) {
  if (n.sheet) return n.sheet;
  for (var o = 0; o < document.styleSheets.length; o++)
    if (document.styleSheets[o].ownerNode === n) return document.styleSheets[o];
}
function Gh(n) {
  var o = document.createElement("style");
  return (
    o.setAttribute("data-emotion", n.key),
    n.nonce !== void 0 && o.setAttribute("nonce", n.nonce),
    o.appendChild(document.createTextNode("")),
    o.setAttribute("data-s", ""),
    o
  );
}
var Kh = (function () {
    function n(l) {
      var s = this;
      (this._insertTag = function (u) {
        var f;
        s.tags.length === 0
          ? s.insertionPoint
            ? (f = s.insertionPoint.nextSibling)
            : s.prepend
            ? (f = s.container.firstChild)
            : (f = s.before)
          : (f = s.tags[s.tags.length - 1].nextSibling),
          s.container.insertBefore(u, f),
          s.tags.push(u);
      }),
        (this.isSpeedy = l.speedy === void 0 ? !0 : l.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = l.nonce),
        (this.key = l.key),
        (this.container = l.container),
        (this.prepend = l.prepend),
        (this.insertionPoint = l.insertionPoint),
        (this.before = null);
    }
    var o = n.prototype;
    return (
      (o.hydrate = function (s) {
        s.forEach(this._insertTag);
      }),
      (o.insert = function (s) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Gh(this));
        var u = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var f = Hh(u);
          try {
            f.insertRule(s, f.cssRules.length);
          } catch {}
        } else u.appendChild(document.createTextNode(s));
        this.ctr++;
      }),
      (o.flush = function () {
        this.tags.forEach(function (s) {
          var u;
          return (u = s.parentNode) == null ? void 0 : u.removeChild(s);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      n
    );
  })(),
  ht = "-ms-",
  $l = "-moz-",
  _e = "-webkit-",
  tp = "comm",
  au = "rule",
  su = "decl",
  Qh = "@import",
  np = "@keyframes",
  Xh = "@layer",
  Yh = Math.abs,
  Ll = String.fromCharCode,
  qh = Object.assign;
function Zh(n, o) {
  return ut(n, 0) ^ 45
    ? (((((((o << 2) ^ ut(n, 0)) << 2) ^ ut(n, 1)) << 2) ^ ut(n, 2)) << 2) ^
        ut(n, 3)
    : 0;
}
function rp(n) {
  return n.trim();
}
function Jh(n, o) {
  return (n = o.exec(n)) ? n[0] : n;
}
function Ne(n, o, l) {
  return n.replace(o, l);
}
function Xs(n, o) {
  return n.indexOf(o);
}
function ut(n, o) {
  return n.charCodeAt(o) | 0;
}
function ei(n, o, l) {
  return n.slice(o, l);
}
function mn(n) {
  return n.length;
}
function uu(n) {
  return n.length;
}
function Sl(n, o) {
  return o.push(n), n;
}
function eg(n, o) {
  return n.map(o).join("");
}
var Bl = 1,
  no = 1,
  op = 0,
  Rt = 0,
  Ze = 0,
  ro = "";
function jl(n, o, l, s, u, f, p) {
  return {
    value: n,
    root: o,
    parent: l,
    type: s,
    props: u,
    children: f,
    line: Bl,
    column: no,
    length: p,
    return: "",
  };
}
function Qo(n, o) {
  return qh(jl("", null, null, "", null, null, 0), n, { length: -n.length }, o);
}
function tg() {
  return Ze;
}
function ng() {
  return (
    (Ze = Rt > 0 ? ut(ro, --Rt) : 0), no--, Ze === 10 && ((no = 1), Bl--), Ze
  );
}
function Lt() {
  return (
    (Ze = Rt < op ? ut(ro, Rt++) : 0), no++, Ze === 10 && ((no = 1), Bl++), Ze
  );
}
function yn() {
  return ut(ro, Rt);
}
function kl() {
  return Rt;
}
function ri(n, o) {
  return ei(ro, n, o);
}
function ti(n) {
  switch (n) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ip(n) {
  return (Bl = no = 1), (op = mn((ro = n))), (Rt = 0), [];
}
function lp(n) {
  return (ro = ""), n;
}
function El(n) {
  return rp(ri(Rt - 1, Ys(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function rg(n) {
  for (; (Ze = yn()) && Ze < 33; ) Lt();
  return ti(n) > 2 || ti(Ze) > 3 ? "" : " ";
}
function og(n, o) {
  for (
    ;
    --o &&
    Lt() &&
    !(Ze < 48 || Ze > 102 || (Ze > 57 && Ze < 65) || (Ze > 70 && Ze < 97));

  );
  return ri(n, kl() + (o < 6 && yn() == 32 && Lt() == 32));
}
function Ys(n) {
  for (; Lt(); )
    switch (Ze) {
      case n:
        return Rt;
      case 34:
      case 39:
        n !== 34 && n !== 39 && Ys(Ze);
        break;
      case 40:
        n === 41 && Ys(n);
        break;
      case 92:
        Lt();
        break;
    }
  return Rt;
}
function ig(n, o) {
  for (; Lt() && n + Ze !== 57; ) if (n + Ze === 84 && yn() === 47) break;
  return "/*" + ri(o, Rt - 1) + "*" + Ll(n === 47 ? n : Lt());
}
function lg(n) {
  for (; !ti(yn()); ) Lt();
  return ri(n, Rt);
}
function ag(n) {
  return lp(Tl("", null, null, null, [""], (n = ip(n)), 0, [0], n));
}
function Tl(n, o, l, s, u, f, p, m, y) {
  for (
    var v = 0,
      k = 0,
      C = p,
      E = 0,
      M = 0,
      $ = 0,
      R = 1,
      O = 1,
      F = 1,
      X = 0,
      H = "",
      z = u,
      _ = f,
      G = s,
      K = H;
    O;

  )
    switch ((($ = X), (X = Lt()))) {
      case 40:
        if ($ != 108 && ut(K, C - 1) == 58) {
          Xs((K += Ne(El(X), "&", "&\f")), "&\f") != -1 && (F = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        K += El(X);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        K += rg($);
        break;
      case 92:
        K += og(kl() - 1, 7);
        continue;
      case 47:
        switch (yn()) {
          case 42:
          case 47:
            Sl(sg(ig(Lt(), kl()), o, l), y);
            break;
          default:
            K += "/";
        }
        break;
      case 123 * R:
        m[v++] = mn(K) * F;
      case 125 * R:
      case 59:
      case 0:
        switch (X) {
          case 0:
          case 125:
            O = 0;
          case 59 + k:
            F == -1 && (K = Ne(K, /\f/g, "")),
              M > 0 &&
                mn(K) - C &&
                Sl(
                  M > 32
                    ? Cd(K + ";", s, l, C - 1)
                    : Cd(Ne(K, " ", "") + ";", s, l, C - 2),
                  y
                );
            break;
          case 59:
            K += ";";
          default:
            if (
              (Sl((G = wd(K, o, l, v, k, u, m, H, (z = []), (_ = []), C)), f),
              X === 123)
            )
              if (k === 0) Tl(K, o, G, G, z, f, C, m, _);
              else
                switch (E === 99 && ut(K, 3) === 110 ? 100 : E) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Tl(
                      n,
                      G,
                      G,
                      s && Sl(wd(n, G, G, 0, 0, u, m, H, u, (z = []), C), _),
                      u,
                      _,
                      C,
                      m,
                      s ? z : _
                    );
                    break;
                  default:
                    Tl(K, G, G, G, [""], _, 0, m, _);
                }
        }
        (v = k = M = 0), (R = F = 1), (H = K = ""), (C = p);
        break;
      case 58:
        (C = 1 + mn(K)), (M = $);
      default:
        if (R < 1) {
          if (X == 123) --R;
          else if (X == 125 && R++ == 0 && ng() == 125) continue;
        }
        switch (((K += Ll(X)), X * R)) {
          case 38:
            F = k > 0 ? 1 : ((K += "\f"), -1);
            break;
          case 44:
            (m[v++] = (mn(K) - 1) * F), (F = 1);
            break;
          case 64:
            yn() === 45 && (K += El(Lt())),
              (E = yn()),
              (k = C = mn((H = K += lg(kl())))),
              X++;
            break;
          case 45:
            $ === 45 && mn(K) == 2 && (R = 0);
        }
    }
  return f;
}
function wd(n, o, l, s, u, f, p, m, y, v, k) {
  for (
    var C = u - 1, E = u === 0 ? f : [""], M = uu(E), $ = 0, R = 0, O = 0;
    $ < s;
    ++$
  )
    for (var F = 0, X = ei(n, C + 1, (C = Yh((R = p[$])))), H = n; F < M; ++F)
      (H = rp(R > 0 ? E[F] + " " + X : Ne(X, /&\f/g, E[F]))) && (y[O++] = H);
  return jl(n, o, l, u === 0 ? au : m, y, v, k);
}
function sg(n, o, l) {
  return jl(n, o, l, tp, Ll(tg()), ei(n, 2, -2), 0);
}
function Cd(n, o, l, s) {
  return jl(n, o, l, su, ei(n, 0, s), ei(n, s + 1, -1), s);
}
function Zr(n, o) {
  for (var l = "", s = uu(n), u = 0; u < s; u++) l += o(n[u], u, n, o) || "";
  return l;
}
function ug(n, o, l, s) {
  switch (n.type) {
    case Xh:
      if (n.children.length) break;
    case Qh:
    case su:
      return (n.return = n.return || n.value);
    case tp:
      return "";
    case np:
      return (n.return = n.value + "{" + Zr(n.children, s) + "}");
    case au:
      n.value = n.props.join(",");
  }
  return mn((l = Zr(n.children, s)))
    ? (n.return = n.value + "{" + l + "}")
    : "";
}
function cg(n) {
  var o = uu(n);
  return function (l, s, u, f) {
    for (var p = "", m = 0; m < o; m++) p += n[m](l, s, u, f) || "";
    return p;
  };
}
function fg(n) {
  return function (o) {
    o.root || ((o = o.return) && n(o));
  };
}
function ap(n) {
  var o = Object.create(null);
  return function (l) {
    return o[l] === void 0 && (o[l] = n(l)), o[l];
  };
}
var dg = function (o, l, s) {
    for (
      var u = 0, f = 0;
      (u = f), (f = yn()), u === 38 && f === 12 && (l[s] = 1), !ti(f);

    )
      Lt();
    return ri(o, Rt);
  },
  pg = function (o, l) {
    var s = -1,
      u = 44;
    do
      switch (ti(u)) {
        case 0:
          u === 38 && yn() === 12 && (l[s] = 1), (o[s] += dg(Rt - 1, l, s));
          break;
        case 2:
          o[s] += El(u);
          break;
        case 4:
          if (u === 44) {
            (o[++s] = yn() === 58 ? "&\f" : ""), (l[s] = o[s].length);
            break;
          }
        default:
          o[s] += Ll(u);
      }
    while ((u = Lt()));
    return o;
  },
  mg = function (o, l) {
    return lp(pg(ip(o), l));
  },
  xd = new WeakMap(),
  hg = function (o) {
    if (!(o.type !== "rule" || !o.parent || o.length < 1)) {
      for (
        var l = o.value,
          s = o.parent,
          u = o.column === s.column && o.line === s.line;
        s.type !== "rule";

      )
        if (((s = s.parent), !s)) return;
      if (
        !(o.props.length === 1 && l.charCodeAt(0) !== 58 && !xd.get(s)) &&
        !u
      ) {
        xd.set(o, !0);
        for (
          var f = [], p = mg(l, f), m = s.props, y = 0, v = 0;
          y < p.length;
          y++
        )
          for (var k = 0; k < m.length; k++, v++)
            o.props[v] = f[y] ? p[y].replace(/&\f/g, m[k]) : m[k] + " " + p[y];
      }
    }
  },
  gg = function (o) {
    if (o.type === "decl") {
      var l = o.value;
      l.charCodeAt(0) === 108 &&
        l.charCodeAt(2) === 98 &&
        ((o.return = ""), (o.value = ""));
    }
  };
function sp(n, o) {
  switch (Zh(n, o)) {
    case 5103:
      return _e + "print-" + n + n;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return _e + n + n;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return _e + n + $l + n + ht + n + n;
    case 6828:
    case 4268:
      return _e + n + ht + n + n;
    case 6165:
      return _e + n + ht + "flex-" + n + n;
    case 5187:
      return (
        _e + n + Ne(n, /(\w+).+(:[^]+)/, _e + "box-$1$2" + ht + "flex-$1$2") + n
      );
    case 5443:
      return _e + n + ht + "flex-item-" + Ne(n, /flex-|-self/, "") + n;
    case 4675:
      return (
        _e +
        n +
        ht +
        "flex-line-pack" +
        Ne(n, /align-content|flex-|-self/, "") +
        n
      );
    case 5548:
      return _e + n + ht + Ne(n, "shrink", "negative") + n;
    case 5292:
      return _e + n + ht + Ne(n, "basis", "preferred-size") + n;
    case 6060:
      return (
        _e +
        "box-" +
        Ne(n, "-grow", "") +
        _e +
        n +
        ht +
        Ne(n, "grow", "positive") +
        n
      );
    case 4554:
      return _e + Ne(n, /([^-])(transform)/g, "$1" + _e + "$2") + n;
    case 6187:
      return (
        Ne(
          Ne(Ne(n, /(zoom-|grab)/, _e + "$1"), /(image-set)/, _e + "$1"),
          n,
          ""
        ) + n
      );
    case 5495:
    case 3959:
      return Ne(n, /(image-set\([^]*)/, _e + "$1$`$1");
    case 4968:
      return (
        Ne(
          Ne(n, /(.+:)(flex-)?(.*)/, _e + "box-pack:$3" + ht + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        _e +
        n +
        n
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ne(n, /(.+)-inline(.+)/, _e + "$1$2") + n;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (mn(n) - 1 - o > 6)
        switch (ut(n, o + 1)) {
          case 109:
            if (ut(n, o + 4) !== 45) break;
          case 102:
            return (
              Ne(
                n,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  _e +
                  "$2-$3$1" +
                  $l +
                  (ut(n, o + 3) == 108 ? "$3" : "$2-$3")
              ) + n
            );
          case 115:
            return ~Xs(n, "stretch")
              ? sp(Ne(n, "stretch", "fill-available"), o) + n
              : n;
        }
      break;
    case 4949:
      if (ut(n, o + 1) !== 115) break;
    case 6444:
      switch (ut(n, mn(n) - 3 - (~Xs(n, "!important") && 10))) {
        case 107:
          return Ne(n, ":", ":" + _e) + n;
        case 101:
          return (
            Ne(
              n,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                _e +
                (ut(n, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                _e +
                "$2$3$1" +
                ht +
                "$2box$3"
            ) + n
          );
      }
      break;
    case 5936:
      switch (ut(n, o + 11)) {
        case 114:
          return _e + n + ht + Ne(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        case 108:
          return _e + n + ht + Ne(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        case 45:
          return _e + n + ht + Ne(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
      return _e + n + ht + n + n;
  }
  return n;
}
var yg = function (o, l, s, u) {
    if (o.length > -1 && !o.return)
      switch (o.type) {
        case su:
          o.return = sp(o.value, o.length);
          break;
        case np:
          return Zr([Qo(o, { value: Ne(o.value, "@", "@" + _e) })], u);
        case au:
          if (o.length)
            return eg(o.props, function (f) {
              switch (Jh(f, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Zr(
                    [Qo(o, { props: [Ne(f, /:(read-\w+)/, ":" + $l + "$1")] })],
                    u
                  );
                case "::placeholder":
                  return Zr(
                    [
                      Qo(o, {
                        props: [Ne(f, /:(plac\w+)/, ":" + _e + "input-$1")],
                      }),
                      Qo(o, { props: [Ne(f, /:(plac\w+)/, ":" + $l + "$1")] }),
                      Qo(o, { props: [Ne(f, /:(plac\w+)/, ht + "input-$1")] }),
                    ],
                    u
                  );
              }
              return "";
            });
      }
  },
  vg = [yg],
  Sg = function (o) {
    var l = o.key;
    if (l === "css") {
      var s = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(s, function (R) {
        var O = R.getAttribute("data-emotion");
        O.indexOf(" ") !== -1 &&
          (document.head.appendChild(R), R.setAttribute("data-s", ""));
      });
    }
    var u = o.stylisPlugins || vg,
      f = {},
      p,
      m = [];
    (p = o.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + l + ' "]'),
        function (R) {
          for (
            var O = R.getAttribute("data-emotion").split(" "), F = 1;
            F < O.length;
            F++
          )
            f[O[F]] = !0;
          m.push(R);
        }
      );
    var y,
      v = [hg, gg];
    {
      var k,
        C = [
          ug,
          fg(function (R) {
            k.insert(R);
          }),
        ],
        E = cg(v.concat(u, C)),
        M = function (O) {
          return Zr(ag(O), E);
        };
      y = function (O, F, X, H) {
        (k = X),
          M(O ? O + "{" + F.styles + "}" : F.styles),
          H && ($.inserted[F.name] = !0);
      };
    }
    var $ = {
      key: l,
      sheet: new Kh({
        key: l,
        container: p,
        nonce: o.nonce,
        speedy: o.speedy,
        prepend: o.prepend,
        insertionPoint: o.insertionPoint,
      }),
      nonce: o.nonce,
      inserted: f,
      registered: {},
      insert: y,
    };
    return $.sheet.hydrate(m), $;
  },
  Fs = { exports: {} },
  Me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kd;
function wg() {
  if (kd) return Me;
  kd = 1;
  var n = typeof Symbol == "function" && Symbol.for,
    o = n ? Symbol.for("react.element") : 60103,
    l = n ? Symbol.for("react.portal") : 60106,
    s = n ? Symbol.for("react.fragment") : 60107,
    u = n ? Symbol.for("react.strict_mode") : 60108,
    f = n ? Symbol.for("react.profiler") : 60114,
    p = n ? Symbol.for("react.provider") : 60109,
    m = n ? Symbol.for("react.context") : 60110,
    y = n ? Symbol.for("react.async_mode") : 60111,
    v = n ? Symbol.for("react.concurrent_mode") : 60111,
    k = n ? Symbol.for("react.forward_ref") : 60112,
    C = n ? Symbol.for("react.suspense") : 60113,
    E = n ? Symbol.for("react.suspense_list") : 60120,
    M = n ? Symbol.for("react.memo") : 60115,
    $ = n ? Symbol.for("react.lazy") : 60116,
    R = n ? Symbol.for("react.block") : 60121,
    O = n ? Symbol.for("react.fundamental") : 60117,
    F = n ? Symbol.for("react.responder") : 60118,
    X = n ? Symbol.for("react.scope") : 60119;
  function H(_) {
    if (typeof _ == "object" && _ !== null) {
      var G = _.$$typeof;
      switch (G) {
        case o:
          switch (((_ = _.type), _)) {
            case y:
            case v:
            case s:
            case f:
            case u:
            case C:
              return _;
            default:
              switch (((_ = _ && _.$$typeof), _)) {
                case m:
                case k:
                case $:
                case M:
                case p:
                  return _;
                default:
                  return G;
              }
          }
        case l:
          return G;
      }
    }
  }
  function z(_) {
    return H(_) === v;
  }
  return (
    (Me.AsyncMode = y),
    (Me.ConcurrentMode = v),
    (Me.ContextConsumer = m),
    (Me.ContextProvider = p),
    (Me.Element = o),
    (Me.ForwardRef = k),
    (Me.Fragment = s),
    (Me.Lazy = $),
    (Me.Memo = M),
    (Me.Portal = l),
    (Me.Profiler = f),
    (Me.StrictMode = u),
    (Me.Suspense = C),
    (Me.isAsyncMode = function (_) {
      return z(_) || H(_) === y;
    }),
    (Me.isConcurrentMode = z),
    (Me.isContextConsumer = function (_) {
      return H(_) === m;
    }),
    (Me.isContextProvider = function (_) {
      return H(_) === p;
    }),
    (Me.isElement = function (_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === o;
    }),
    (Me.isForwardRef = function (_) {
      return H(_) === k;
    }),
    (Me.isFragment = function (_) {
      return H(_) === s;
    }),
    (Me.isLazy = function (_) {
      return H(_) === $;
    }),
    (Me.isMemo = function (_) {
      return H(_) === M;
    }),
    (Me.isPortal = function (_) {
      return H(_) === l;
    }),
    (Me.isProfiler = function (_) {
      return H(_) === f;
    }),
    (Me.isStrictMode = function (_) {
      return H(_) === u;
    }),
    (Me.isSuspense = function (_) {
      return H(_) === C;
    }),
    (Me.isValidElementType = function (_) {
      return (
        typeof _ == "string" ||
        typeof _ == "function" ||
        _ === s ||
        _ === v ||
        _ === f ||
        _ === u ||
        _ === C ||
        _ === E ||
        (typeof _ == "object" &&
          _ !== null &&
          (_.$$typeof === $ ||
            _.$$typeof === M ||
            _.$$typeof === p ||
            _.$$typeof === m ||
            _.$$typeof === k ||
            _.$$typeof === O ||
            _.$$typeof === F ||
            _.$$typeof === X ||
            _.$$typeof === R))
      );
    }),
    (Me.typeOf = H),
    Me
  );
}
var Ed;
function Cg() {
  return Ed || ((Ed = 1), (Fs.exports = wg())), Fs.exports;
}
var Ws, Td;
function xg() {
  if (Td) return Ws;
  Td = 1;
  var n = Cg(),
    o = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    l = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    s = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    u = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    f = {};
  (f[n.ForwardRef] = s), (f[n.Memo] = u);
  function p($) {
    return n.isMemo($) ? u : f[$.$$typeof] || o;
  }
  var m = Object.defineProperty,
    y = Object.getOwnPropertyNames,
    v = Object.getOwnPropertySymbols,
    k = Object.getOwnPropertyDescriptor,
    C = Object.getPrototypeOf,
    E = Object.prototype;
  function M($, R, O) {
    if (typeof R != "string") {
      if (E) {
        var F = C(R);
        F && F !== E && M($, F, O);
      }
      var X = y(R);
      v && (X = X.concat(v(R)));
      for (var H = p($), z = p(R), _ = 0; _ < X.length; ++_) {
        var G = X[_];
        if (!l[G] && !(O && O[G]) && !(z && z[G]) && !(H && H[G])) {
          var K = k(R, G);
          try {
            m($, G, K);
          } catch {}
        }
      }
    }
    return $;
  }
  return (Ws = M), Ws;
}
xg();
var kg = !0;
function up(n, o, l) {
  var s = "";
  return (
    l.split(" ").forEach(function (u) {
      n[u] !== void 0 ? o.push(n[u] + ";") : u && (s += u + " ");
    }),
    s
  );
}
var cu = function (o, l, s) {
    var u = o.key + "-" + l.name;
    (s === !1 || kg === !1) &&
      o.registered[u] === void 0 &&
      (o.registered[u] = l.styles);
  },
  cp = function (o, l, s) {
    cu(o, l, s);
    var u = o.key + "-" + l.name;
    if (o.inserted[l.name] === void 0) {
      var f = l;
      do o.insert(l === f ? "." + u : "", f, o.sheet, !0), (f = f.next);
      while (f !== void 0);
    }
  };
function Eg(n) {
  for (var o = 0, l, s = 0, u = n.length; u >= 4; ++s, u -= 4)
    (l =
      (n.charCodeAt(s) & 255) |
      ((n.charCodeAt(++s) & 255) << 8) |
      ((n.charCodeAt(++s) & 255) << 16) |
      ((n.charCodeAt(++s) & 255) << 24)),
      (l = (l & 65535) * 1540483477 + (((l >>> 16) * 59797) << 16)),
      (l ^= l >>> 24),
      (o =
        ((l & 65535) * 1540483477 + (((l >>> 16) * 59797) << 16)) ^
        ((o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)));
  switch (u) {
    case 3:
      o ^= (n.charCodeAt(s + 2) & 255) << 16;
    case 2:
      o ^= (n.charCodeAt(s + 1) & 255) << 8;
    case 1:
      (o ^= n.charCodeAt(s) & 255),
        (o = (o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16));
  }
  return (
    (o ^= o >>> 13),
    (o = (o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)),
    ((o ^ (o >>> 15)) >>> 0).toString(36)
  );
}
var Tg = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Pg = /[A-Z]|^ms/g,
  Rg = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  fp = function (o) {
    return o.charCodeAt(1) === 45;
  },
  Pd = function (o) {
    return o != null && typeof o != "boolean";
  },
  Vs = ap(function (n) {
    return fp(n) ? n : n.replace(Pg, "-$&").toLowerCase();
  }),
  Rd = function (o, l) {
    switch (o) {
      case "animation":
      case "animationName":
        if (typeof l == "string")
          return l.replace(Rg, function (s, u, f) {
            return (hn = { name: u, styles: f, next: hn }), u;
          });
    }
    return Tg[o] !== 1 && !fp(o) && typeof l == "number" && l !== 0
      ? l + "px"
      : l;
  };
function ni(n, o, l) {
  if (l == null) return "";
  var s = l;
  if (s.__emotion_styles !== void 0) return s;
  switch (typeof l) {
    case "boolean":
      return "";
    case "object": {
      var u = l;
      if (u.anim === 1)
        return (hn = { name: u.name, styles: u.styles, next: hn }), u.name;
      var f = l;
      if (f.styles !== void 0) {
        var p = f.next;
        if (p !== void 0)
          for (; p !== void 0; )
            (hn = { name: p.name, styles: p.styles, next: hn }), (p = p.next);
        var m = f.styles + ";";
        return m;
      }
      return bg(n, o, l);
    }
    case "function": {
      if (n !== void 0) {
        var y = hn,
          v = l(n);
        return (hn = y), ni(n, o, v);
      }
      break;
    }
  }
  var k = l;
  if (o == null) return k;
  var C = o[k];
  return C !== void 0 ? C : k;
}
function bg(n, o, l) {
  var s = "";
  if (Array.isArray(l))
    for (var u = 0; u < l.length; u++) s += ni(n, o, l[u]) + ";";
  else
    for (var f in l) {
      var p = l[f];
      if (typeof p != "object") {
        var m = p;
        o != null && o[m] !== void 0
          ? (s += f + "{" + o[m] + "}")
          : Pd(m) && (s += Vs(f) + ":" + Rd(f, m) + ";");
      } else if (
        Array.isArray(p) &&
        typeof p[0] == "string" &&
        (o == null || o[p[0]] === void 0)
      )
        for (var y = 0; y < p.length; y++)
          Pd(p[y]) && (s += Vs(f) + ":" + Rd(f, p[y]) + ";");
      else {
        var v = ni(n, o, p);
        switch (f) {
          case "animation":
          case "animationName": {
            s += Vs(f) + ":" + v + ";";
            break;
          }
          default:
            s += f + "{" + v + "}";
        }
      }
    }
  return s;
}
var bd = /label:\s*([^\s;{]+)\s*(;|$)/g,
  hn;
function Dl(n, o, l) {
  if (
    n.length === 1 &&
    typeof n[0] == "object" &&
    n[0] !== null &&
    n[0].styles !== void 0
  )
    return n[0];
  var s = !0,
    u = "";
  hn = void 0;
  var f = n[0];
  if (f == null || f.raw === void 0) (s = !1), (u += ni(l, o, f));
  else {
    var p = f;
    u += p[0];
  }
  for (var m = 1; m < n.length; m++)
    if (((u += ni(l, o, n[m])), s)) {
      var y = f;
      u += y[m];
    }
  bd.lastIndex = 0;
  for (var v = "", k; (k = bd.exec(u)) !== null; ) v += "-" + k[1];
  var C = Eg(u) + v;
  return { name: C, styles: u, next: hn };
}
var $g = function (o) {
    return o();
  },
  _g = md.useInsertionEffect ? md.useInsertionEffect : !1,
  dp = _g || $g,
  pp = I.createContext(typeof HTMLElement < "u" ? Sg({ key: "css" }) : null);
pp.Provider;
var mp = function (o) {
    return I.forwardRef(function (l, s) {
      var u = I.useContext(pp);
      return o(l, u, s);
    });
  },
  fu = I.createContext({}),
  du = {}.hasOwnProperty,
  qs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Ng = function (o, l) {
    var s = {};
    for (var u in l) du.call(l, u) && (s[u] = l[u]);
    return (s[qs] = o), s;
  },
  Mg = function (o) {
    var l = o.cache,
      s = o.serialized,
      u = o.isStringTag;
    return (
      cu(l, s, u),
      dp(function () {
        return cp(l, s, u);
      }),
      null
    );
  },
  Og = mp(function (n, o, l) {
    var s = n.css;
    typeof s == "string" && o.registered[s] !== void 0 && (s = o.registered[s]);
    var u = n[qs],
      f = [s],
      p = "";
    typeof n.className == "string"
      ? (p = up(o.registered, f, n.className))
      : n.className != null && (p = n.className + " ");
    var m = Dl(f, void 0, I.useContext(fu));
    p += o.key + "-" + m.name;
    var y = {};
    for (var v in n) du.call(n, v) && v !== "css" && v !== qs && (y[v] = n[v]);
    return (
      (y.className = p),
      l && (y.ref = l),
      I.createElement(
        I.Fragment,
        null,
        I.createElement(Mg, {
          cache: o,
          serialized: m,
          isStringTag: typeof u == "string",
        }),
        I.createElement(u, y)
      )
    );
  }),
  Ig = Og,
  zg = function (o, l) {
    var s = arguments;
    if (l == null || !du.call(l, "css"))
      return I.createElement.apply(void 0, s);
    var u = s.length,
      f = new Array(u);
    (f[0] = Ig), (f[1] = Ng(o, l));
    for (var p = 2; p < u; p++) f[p] = s[p];
    return I.createElement.apply(null, f);
  };
(function (n) {
  var o;
  o || (o = n.JSX || (n.JSX = {}));
})(zg);
function Ag() {
  for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
    o[l] = arguments[l];
  return Dl(o);
}
function pu() {
  var n = Ag.apply(void 0, arguments),
    o = "animation-" + n.name;
  return {
    name: o,
    styles: "@keyframes " + o + "{" + n.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
}
var Lg =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Bg = ap(function (n) {
    return (
      Lg.test(n) ||
      (n.charCodeAt(0) === 111 &&
        n.charCodeAt(1) === 110 &&
        n.charCodeAt(2) < 91)
    );
  }),
  jg = Bg,
  Dg = function (o) {
    return o !== "theme";
  },
  $d = function (o) {
    return typeof o == "string" && o.charCodeAt(0) > 96 ? jg : Dg;
  },
  _d = function (o, l, s) {
    var u;
    if (l) {
      var f = l.shouldForwardProp;
      u =
        o.__emotion_forwardProp && f
          ? function (p) {
              return o.__emotion_forwardProp(p) && f(p);
            }
          : f;
    }
    return typeof u != "function" && s && (u = o.__emotion_forwardProp), u;
  },
  Fg = function (o) {
    var l = o.cache,
      s = o.serialized,
      u = o.isStringTag;
    return (
      cu(l, s, u),
      dp(function () {
        return cp(l, s, u);
      }),
      null
    );
  },
  Wg = function n(o, l) {
    var s = o.__emotion_real === o,
      u = (s && o.__emotion_base) || o,
      f,
      p;
    l !== void 0 && ((f = l.label), (p = l.target));
    var m = _d(o, l, s),
      y = m || $d(u),
      v = !y("as");
    return function () {
      var k = arguments,
        C =
          s && o.__emotion_styles !== void 0 ? o.__emotion_styles.slice(0) : [];
      if (
        (f !== void 0 && C.push("label:" + f + ";"),
        k[0] == null || k[0].raw === void 0)
      )
        C.push.apply(C, k);
      else {
        var E = k[0];
        C.push(E[0]);
        for (var M = k.length, $ = 1; $ < M; $++) C.push(k[$], E[$]);
      }
      var R = mp(function (O, F, X) {
        var H = (v && O.as) || u,
          z = "",
          _ = [],
          G = O;
        if (O.theme == null) {
          G = {};
          for (var K in O) G[K] = O[K];
          G.theme = I.useContext(fu);
        }
        typeof O.className == "string"
          ? (z = up(F.registered, _, O.className))
          : O.className != null && (z = O.className + " ");
        var ue = Dl(C.concat(_), F.registered, G);
        (z += F.key + "-" + ue.name), p !== void 0 && (z += " " + p);
        var ge = v && m === void 0 ? $d(H) : y,
          h = {};
        for (var D in O) (v && D === "as") || (ge(D) && (h[D] = O[D]));
        return (
          (h.className = z),
          X && (h.ref = X),
          I.createElement(
            I.Fragment,
            null,
            I.createElement(Fg, {
              cache: F,
              serialized: ue,
              isStringTag: typeof H == "string",
            }),
            I.createElement(H, h)
          )
        );
      });
      return (
        (R.displayName =
          f !== void 0
            ? f
            : "Styled(" +
              (typeof u == "string"
                ? u
                : u.displayName || u.name || "Component") +
              ")"),
        (R.defaultProps = o.defaultProps),
        (R.__emotion_real = R),
        (R.__emotion_base = u),
        (R.__emotion_styles = C),
        (R.__emotion_forwardProp = m),
        Object.defineProperty(R, "toString", {
          value: function () {
            return "." + p;
          },
        }),
        (R.withComponent = function (O, F) {
          var X = n(O, bl({}, l, F, { shouldForwardProp: _d(R, F, !0) }));
          return X.apply(void 0, C);
        }),
        R
      );
    };
  },
  Vg = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Zs = Wg.bind(null);
Vg.forEach(function (n) {
  Zs[n] = Zs(n);
});
/**
 * @mui/styled-engine v6.4.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function hp(n, o) {
  return Zs(n, o);
}
function Ug(n, o) {
  Array.isArray(n.__emotion_styles) &&
    (n.__emotion_styles = o(n.__emotion_styles));
}
const Nd = [];
function Md(n) {
  return (Nd[0] = n), Dl(Nd);
}
function gn(n) {
  if (typeof n != "object" || n === null) return !1;
  const o = Object.getPrototypeOf(n);
  return (
    (o === null ||
      o === Object.prototype ||
      Object.getPrototypeOf(o) === null) &&
    !(Symbol.toStringTag in n) &&
    !(Symbol.iterator in n)
  );
}
function gp(n) {
  if (I.isValidElement(n) || !gn(n)) return n;
  const o = {};
  return (
    Object.keys(n).forEach((l) => {
      o[l] = gp(n[l]);
    }),
    o
  );
}
function Bt(n, o, l = { clone: !0 }) {
  const s = l.clone ? { ...n } : n;
  return (
    gn(n) &&
      gn(o) &&
      Object.keys(o).forEach((u) => {
        I.isValidElement(o[u])
          ? (s[u] = o[u])
          : gn(o[u]) && Object.prototype.hasOwnProperty.call(n, u) && gn(n[u])
          ? (s[u] = Bt(n[u], o[u], l))
          : l.clone
          ? (s[u] = gn(o[u]) ? gp(o[u]) : o[u])
          : (s[u] = o[u]);
      }),
    s
  );
}
const Hg = (n) => {
  const o = Object.keys(n).map((l) => ({ key: l, val: n[l] })) || [];
  return (
    o.sort((l, s) => l.val - s.val),
    o.reduce((l, s) => ({ ...l, [s.key]: s.val }), {})
  );
};
function Gg(n) {
  const {
      values: o = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: l = "px",
      step: s = 5,
      ...u
    } = n,
    f = Hg(o),
    p = Object.keys(f);
  function m(E) {
    return `@media (min-width:${typeof o[E] == "number" ? o[E] : E}${l})`;
  }
  function y(E) {
    return `@media (max-width:${
      (typeof o[E] == "number" ? o[E] : E) - s / 100
    }${l})`;
  }
  function v(E, M) {
    const $ = p.indexOf(M);
    return `@media (min-width:${
      typeof o[E] == "number" ? o[E] : E
    }${l}) and (max-width:${
      ($ !== -1 && typeof o[p[$]] == "number" ? o[p[$]] : M) - s / 100
    }${l})`;
  }
  function k(E) {
    return p.indexOf(E) + 1 < p.length ? v(E, p[p.indexOf(E) + 1]) : m(E);
  }
  function C(E) {
    const M = p.indexOf(E);
    return M === 0
      ? m(p[1])
      : M === p.length - 1
      ? y(p[M])
      : v(E, p[p.indexOf(E) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: p,
    values: f,
    up: m,
    down: y,
    between: v,
    only: k,
    not: C,
    unit: l,
    ...u,
  };
}
function Kg(n, o) {
  if (!n.containerQueries) return o;
  const l = Object.keys(o)
    .filter((s) => s.startsWith("@container"))
    .sort((s, u) => {
      var p, m;
      const f = /min-width:\s*([0-9.]+)/;
      return (
        +(((p = s.match(f)) == null ? void 0 : p[1]) || 0) -
        +(((m = u.match(f)) == null ? void 0 : m[1]) || 0)
      );
    });
  return l.length
    ? l.reduce(
        (s, u) => {
          const f = o[u];
          return delete s[u], (s[u] = f), s;
        },
        { ...o }
      )
    : o;
}
function Qg(n, o) {
  return (
    o === "@" ||
    (o.startsWith("@") &&
      (n.some((l) => o.startsWith(`@${l}`)) || !!o.match(/^@\d/)))
  );
}
function Xg(n, o) {
  const l = o.match(/^@([^/]+)?\/?(.+)?$/);
  if (!l) return null;
  const [, s, u] = l,
    f = Number.isNaN(+s) ? s || 0 : +s;
  return n.containerQueries(u).up(f);
}
function Yg(n) {
  const o = (f, p) => f.replace("@media", p ? `@container ${p}` : "@container");
  function l(f, p) {
    (f.up = (...m) => o(n.breakpoints.up(...m), p)),
      (f.down = (...m) => o(n.breakpoints.down(...m), p)),
      (f.between = (...m) => o(n.breakpoints.between(...m), p)),
      (f.only = (...m) => o(n.breakpoints.only(...m), p)),
      (f.not = (...m) => {
        const y = o(n.breakpoints.not(...m), p);
        return y.includes("not all and")
          ? y
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : y;
      });
  }
  const s = {},
    u = (f) => (l(s, f), s);
  return l(u), { ...n, containerQueries: u };
}
const qg = { borderRadius: 4 };
function Zo(n, o) {
  return o ? Bt(n, o, { clone: !1 }) : n;
}
const Fl = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Od = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (n) => `@media (min-width:${Fl[n]}px)`,
  },
  Zg = {
    containerQueries: (n) => ({
      up: (o) => {
        let l = typeof o == "number" ? o : Fl[o] || o;
        return (
          typeof l == "number" && (l = `${l}px`),
          n ? `@container ${n} (min-width:${l})` : `@container (min-width:${l})`
        );
      },
    }),
  };
function bn(n, o, l) {
  const s = n.theme || {};
  if (Array.isArray(o)) {
    const f = s.breakpoints || Od;
    return o.reduce((p, m, y) => ((p[f.up(f.keys[y])] = l(o[y])), p), {});
  }
  if (typeof o == "object") {
    const f = s.breakpoints || Od;
    return Object.keys(o).reduce((p, m) => {
      if (Qg(f.keys, m)) {
        const y = Xg(s.containerQueries ? s : Zg, m);
        y && (p[y] = l(o[m], m));
      } else if (Object.keys(f.values || Fl).includes(m)) {
        const y = f.up(m);
        p[y] = l(o[m], m);
      } else {
        const y = m;
        p[y] = o[y];
      }
      return p;
    }, {});
  }
  return l(o);
}
function Jg(n = {}) {
  var l;
  return (
    ((l = n.keys) == null
      ? void 0
      : l.reduce((s, u) => {
          const f = n.up(u);
          return (s[f] = {}), s;
        }, {})) || {}
  );
}
function ey(n, o) {
  return n.reduce((l, s) => {
    const u = l[s];
    return (!u || Object.keys(u).length === 0) && delete l[s], l;
  }, o);
}
function ye(n) {
  if (typeof n != "string") throw new Error(Sr(7));
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function Wl(n, o, l = !0) {
  if (!o || typeof o != "string") return null;
  if (n && n.vars && l) {
    const s = `vars.${o}`
      .split(".")
      .reduce((u, f) => (u && u[f] ? u[f] : null), n);
    if (s != null) return s;
  }
  return o.split(".").reduce((s, u) => (s && s[u] != null ? s[u] : null), n);
}
function _l(n, o, l, s = l) {
  let u;
  return (
    typeof n == "function"
      ? (u = n(l))
      : Array.isArray(n)
      ? (u = n[l] || s)
      : (u = Wl(n, l) || s),
    o && (u = o(u, s, n)),
    u
  );
}
function Ye(n) {
  const { prop: o, cssProperty: l = n.prop, themeKey: s, transform: u } = n,
    f = (p) => {
      if (p[o] == null) return null;
      const m = p[o],
        y = p.theme,
        v = Wl(y, s) || {};
      return bn(p, m, (C) => {
        let E = _l(v, u, C);
        return (
          C === E &&
            typeof C == "string" &&
            (E = _l(v, u, `${o}${C === "default" ? "" : ye(C)}`, C)),
          l === !1 ? E : { [l]: E }
        );
      });
    };
  return (f.propTypes = {}), (f.filterProps = [o]), f;
}
function ty(n) {
  const o = {};
  return (l) => (o[l] === void 0 && (o[l] = n(l)), o[l]);
}
const ny = { m: "margin", p: "padding" },
  ry = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Id = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  oy = ty((n) => {
    if (n.length > 2)
      if (Id[n]) n = Id[n];
      else return [n];
    const [o, l] = n.split(""),
      s = ny[o],
      u = ry[l] || "";
    return Array.isArray(u) ? u.map((f) => s + f) : [s + u];
  }),
  mu = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  hu = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...mu, ...hu];
function oi(n, o, l, s) {
  const u = Wl(n, o, !0) ?? l;
  return typeof u == "number" || typeof u == "string"
    ? (f) =>
        typeof f == "string"
          ? f
          : typeof u == "string"
          ? `calc(${f} * ${u})`
          : u * f
    : Array.isArray(u)
    ? (f) => {
        if (typeof f == "string") return f;
        const p = Math.abs(f),
          m = u[p];
        return f >= 0 ? m : typeof m == "number" ? -m : `-${m}`;
      }
    : typeof u == "function"
    ? u
    : () => {};
}
function gu(n) {
  return oi(n, "spacing", 8);
}
function ii(n, o) {
  return typeof o == "string" || o == null ? o : n(o);
}
function iy(n, o) {
  return (l) => n.reduce((s, u) => ((s[u] = ii(o, l)), s), {});
}
function ly(n, o, l, s) {
  if (!o.includes(l)) return null;
  const u = oy(l),
    f = iy(u, s),
    p = n[l];
  return bn(n, p, f);
}
function yp(n, o) {
  const l = gu(n.theme);
  return Object.keys(n)
    .map((s) => ly(n, o, s, l))
    .reduce(Zo, {});
}
function Ge(n) {
  return yp(n, mu);
}
Ge.propTypes = {};
Ge.filterProps = mu;
function Ke(n) {
  return yp(n, hu);
}
Ke.propTypes = {};
Ke.filterProps = hu;
function vp(n = 8, o = gu({ spacing: n })) {
  if (n.mui) return n;
  const l = (...s) =>
    (s.length === 0 ? [1] : s)
      .map((f) => {
        const p = o(f);
        return typeof p == "number" ? `${p}px` : p;
      })
      .join(" ");
  return (l.mui = !0), l;
}
function Vl(...n) {
  const o = n.reduce(
      (s, u) => (
        u.filterProps.forEach((f) => {
          s[f] = u;
        }),
        s
      ),
      {}
    ),
    l = (s) => Object.keys(s).reduce((u, f) => (o[f] ? Zo(u, o[f](s)) : u), {});
  return (
    (l.propTypes = {}),
    (l.filterProps = n.reduce((s, u) => s.concat(u.filterProps), [])),
    l
  );
}
function Yt(n) {
  return typeof n != "number" ? n : `${n}px solid`;
}
function qt(n, o) {
  return Ye({ prop: n, themeKey: "borders", transform: o });
}
const ay = qt("border", Yt),
  sy = qt("borderTop", Yt),
  uy = qt("borderRight", Yt),
  cy = qt("borderBottom", Yt),
  fy = qt("borderLeft", Yt),
  dy = qt("borderColor"),
  py = qt("borderTopColor"),
  my = qt("borderRightColor"),
  hy = qt("borderBottomColor"),
  gy = qt("borderLeftColor"),
  yy = qt("outline", Yt),
  vy = qt("outlineColor"),
  Ul = (n) => {
    if (n.borderRadius !== void 0 && n.borderRadius !== null) {
      const o = oi(n.theme, "shape.borderRadius", 4),
        l = (s) => ({ borderRadius: ii(o, s) });
      return bn(n, n.borderRadius, l);
    }
    return null;
  };
Ul.propTypes = {};
Ul.filterProps = ["borderRadius"];
Vl(ay, sy, uy, cy, fy, dy, py, my, hy, gy, Ul, yy, vy);
const Hl = (n) => {
  if (n.gap !== void 0 && n.gap !== null) {
    const o = oi(n.theme, "spacing", 8),
      l = (s) => ({ gap: ii(o, s) });
    return bn(n, n.gap, l);
  }
  return null;
};
Hl.propTypes = {};
Hl.filterProps = ["gap"];
const Gl = (n) => {
  if (n.columnGap !== void 0 && n.columnGap !== null) {
    const o = oi(n.theme, "spacing", 8),
      l = (s) => ({ columnGap: ii(o, s) });
    return bn(n, n.columnGap, l);
  }
  return null;
};
Gl.propTypes = {};
Gl.filterProps = ["columnGap"];
const Kl = (n) => {
  if (n.rowGap !== void 0 && n.rowGap !== null) {
    const o = oi(n.theme, "spacing", 8),
      l = (s) => ({ rowGap: ii(o, s) });
    return bn(n, n.rowGap, l);
  }
  return null;
};
Kl.propTypes = {};
Kl.filterProps = ["rowGap"];
const Sy = Ye({ prop: "gridColumn" }),
  wy = Ye({ prop: "gridRow" }),
  Cy = Ye({ prop: "gridAutoFlow" }),
  xy = Ye({ prop: "gridAutoColumns" }),
  ky = Ye({ prop: "gridAutoRows" }),
  Ey = Ye({ prop: "gridTemplateColumns" }),
  Ty = Ye({ prop: "gridTemplateRows" }),
  Py = Ye({ prop: "gridTemplateAreas" }),
  Ry = Ye({ prop: "gridArea" });
Vl(Hl, Gl, Kl, Sy, wy, Cy, xy, ky, Ey, Ty, Py, Ry);
function Jr(n, o) {
  return o === "grey" ? o : n;
}
const by = Ye({ prop: "color", themeKey: "palette", transform: Jr }),
  $y = Ye({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Jr,
  }),
  _y = Ye({ prop: "backgroundColor", themeKey: "palette", transform: Jr });
Vl(by, $y, _y);
function At(n) {
  return n <= 1 && n !== 0 ? `${n * 100}%` : n;
}
const Ny = Ye({ prop: "width", transform: At }),
  yu = (n) => {
    if (n.maxWidth !== void 0 && n.maxWidth !== null) {
      const o = (l) => {
        var u, f, p, m, y;
        const s =
          ((p =
            (f = (u = n.theme) == null ? void 0 : u.breakpoints) == null
              ? void 0
              : f.values) == null
            ? void 0
            : p[l]) || Fl[l];
        return s
          ? ((y = (m = n.theme) == null ? void 0 : m.breakpoints) == null
              ? void 0
              : y.unit) !== "px"
            ? { maxWidth: `${s}${n.theme.breakpoints.unit}` }
            : { maxWidth: s }
          : { maxWidth: At(l) };
      };
      return bn(n, n.maxWidth, o);
    }
    return null;
  };
yu.filterProps = ["maxWidth"];
const My = Ye({ prop: "minWidth", transform: At }),
  Oy = Ye({ prop: "height", transform: At }),
  Iy = Ye({ prop: "maxHeight", transform: At }),
  zy = Ye({ prop: "minHeight", transform: At });
Ye({ prop: "size", cssProperty: "width", transform: At });
Ye({ prop: "size", cssProperty: "height", transform: At });
const Ay = Ye({ prop: "boxSizing" });
Vl(Ny, yu, My, Oy, Iy, zy, Ay);
const li = {
  border: { themeKey: "borders", transform: Yt },
  borderTop: { themeKey: "borders", transform: Yt },
  borderRight: { themeKey: "borders", transform: Yt },
  borderBottom: { themeKey: "borders", transform: Yt },
  borderLeft: { themeKey: "borders", transform: Yt },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: Yt },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: Ul },
  color: { themeKey: "palette", transform: Jr },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Jr,
  },
  backgroundColor: { themeKey: "palette", transform: Jr },
  p: { style: Ke },
  pt: { style: Ke },
  pr: { style: Ke },
  pb: { style: Ke },
  pl: { style: Ke },
  px: { style: Ke },
  py: { style: Ke },
  padding: { style: Ke },
  paddingTop: { style: Ke },
  paddingRight: { style: Ke },
  paddingBottom: { style: Ke },
  paddingLeft: { style: Ke },
  paddingX: { style: Ke },
  paddingY: { style: Ke },
  paddingInline: { style: Ke },
  paddingInlineStart: { style: Ke },
  paddingInlineEnd: { style: Ke },
  paddingBlock: { style: Ke },
  paddingBlockStart: { style: Ke },
  paddingBlockEnd: { style: Ke },
  m: { style: Ge },
  mt: { style: Ge },
  mr: { style: Ge },
  mb: { style: Ge },
  ml: { style: Ge },
  mx: { style: Ge },
  my: { style: Ge },
  margin: { style: Ge },
  marginTop: { style: Ge },
  marginRight: { style: Ge },
  marginBottom: { style: Ge },
  marginLeft: { style: Ge },
  marginX: { style: Ge },
  marginY: { style: Ge },
  marginInline: { style: Ge },
  marginInlineStart: { style: Ge },
  marginInlineEnd: { style: Ge },
  marginBlock: { style: Ge },
  marginBlockStart: { style: Ge },
  marginBlockEnd: { style: Ge },
  displayPrint: {
    cssProperty: !1,
    transform: (n) => ({ "@media print": { display: n } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: Hl },
  rowGap: { style: Kl },
  columnGap: { style: Gl },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: At },
  maxWidth: { style: yu },
  minWidth: { transform: At },
  height: { transform: At },
  maxHeight: { transform: At },
  minHeight: { transform: At },
  boxSizing: {},
  font: { themeKey: "font" },
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function Ly(...n) {
  const o = n.reduce((s, u) => s.concat(Object.keys(u)), []),
    l = new Set(o);
  return n.every((s) => l.size === Object.keys(s).length);
}
function By(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function jy() {
  function n(l, s, u, f) {
    const p = { [l]: s, theme: u },
      m = f[l];
    if (!m) return { [l]: s };
    const { cssProperty: y = l, themeKey: v, transform: k, style: C } = m;
    if (s == null) return null;
    if (v === "typography" && s === "inherit") return { [l]: s };
    const E = Wl(u, v) || {};
    return C
      ? C(p)
      : bn(p, s, ($) => {
          let R = _l(E, k, $);
          return (
            $ === R &&
              typeof $ == "string" &&
              (R = _l(E, k, `${l}${$ === "default" ? "" : ye($)}`, $)),
            y === !1 ? R : { [y]: R }
          );
        });
  }
  function o(l) {
    const { sx: s, theme: u = {} } = l || {};
    if (!s) return null;
    const f = u.unstable_sxConfig ?? li;
    function p(m) {
      let y = m;
      if (typeof m == "function") y = m(u);
      else if (typeof m != "object") return m;
      if (!y) return null;
      const v = Jg(u.breakpoints),
        k = Object.keys(v);
      let C = v;
      return (
        Object.keys(y).forEach((E) => {
          const M = By(y[E], u);
          if (M != null)
            if (typeof M == "object")
              if (f[E]) C = Zo(C, n(E, M, u, f));
              else {
                const $ = bn({ theme: u }, M, (R) => ({ [E]: R }));
                Ly($, M) ? (C[E] = o({ sx: M, theme: u })) : (C = Zo(C, $));
              }
            else C = Zo(C, n(E, M, u, f));
        }),
        Kg(u, ey(k, C))
      );
    }
    return Array.isArray(s) ? s.map(p) : p(s);
  }
  return o;
}
const wr = jy();
wr.filterProps = ["sx"];
function Dy(n, o) {
  var s;
  const l = this;
  if (l.vars) {
    if (
      !((s = l.colorSchemes) != null && s[n]) ||
      typeof l.getColorSchemeSelector != "function"
    )
      return {};
    let u = l.getColorSchemeSelector(n);
    return u === "&"
      ? o
      : ((u.includes("data-") || u.includes(".")) &&
          (u = `*:where(${u.replace(/\s*&$/, "")}) &`),
        { [u]: o });
  }
  return l.palette.mode === n ? o : {};
}
function Ql(n = {}, ...o) {
  const {
      breakpoints: l = {},
      palette: s = {},
      spacing: u,
      shape: f = {},
      ...p
    } = n,
    m = Gg(l),
    y = vp(u);
  let v = Bt(
    {
      breakpoints: m,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...s },
      spacing: y,
      shape: { ...qg, ...f },
    },
    p
  );
  return (
    (v = Yg(v)),
    (v.applyStyles = Dy),
    (v = o.reduce((k, C) => Bt(k, C), v)),
    (v.unstable_sxConfig = {
      ...li,
      ...(p == null ? void 0 : p.unstable_sxConfig),
    }),
    (v.unstable_sx = function (C) {
      return wr({ sx: C, theme: this });
    }),
    v
  );
}
function Fy(n) {
  return Object.keys(n).length === 0;
}
function Wy(n = null) {
  const o = I.useContext(fu);
  return !o || Fy(o) ? n : o;
}
const Vy = Ql();
function Xl(n = Vy) {
  return Wy(n);
}
const Uy = (n) => {
  var s;
  const o = { systemProps: {}, otherProps: {} },
    l =
      ((s = n == null ? void 0 : n.theme) == null
        ? void 0
        : s.unstable_sxConfig) ?? li;
  return (
    Object.keys(n).forEach((u) => {
      l[u] ? (o.systemProps[u] = n[u]) : (o.otherProps[u] = n[u]);
    }),
    o
  );
};
function vu(n) {
  const { sx: o, ...l } = n,
    { systemProps: s, otherProps: u } = Uy(l);
  let f;
  return (
    Array.isArray(o)
      ? (f = [s, ...o])
      : typeof o == "function"
      ? (f = (...p) => {
          const m = o(...p);
          return gn(m) ? { ...s, ...m } : s;
        })
      : (f = { ...s, ...o }),
    { ...u, sx: f }
  );
}
const zd = (n) => n,
  Hy = () => {
    let n = zd;
    return {
      configure(o) {
        n = o;
      },
      generate(o) {
        return n(o);
      },
      reset() {
        n = zd;
      },
    };
  },
  Sp = Hy();
function wp(n) {
  var o,
    l,
    s = "";
  if (typeof n == "string" || typeof n == "number") s += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var u = n.length;
      for (o = 0; o < u; o++)
        n[o] && (l = wp(n[o])) && (s && (s += " "), (s += l));
    } else for (l in n) n[l] && (s && (s += " "), (s += l));
  return s;
}
function Ee() {
  for (var n, o, l = 0, s = "", u = arguments.length; l < u; l++)
    (n = arguments[l]) && (o = wp(n)) && (s && (s += " "), (s += o));
  return s;
}
function Gy(n = {}) {
  const {
      themeId: o,
      defaultTheme: l,
      defaultClassName: s = "MuiBox-root",
      generateClassName: u,
    } = n,
    f = hp("div", {
      shouldForwardProp: (m) => m !== "theme" && m !== "sx" && m !== "as",
    })(wr);
  return I.forwardRef(function (y, v) {
    const k = Xl(l),
      { className: C, component: E = "div", ...M } = vu(y);
    return te.jsx(f, {
      as: E,
      ref: v,
      className: Ee(C, u ? u(s) : s),
      theme: (o && k[o]) || k,
      ...M,
    });
  });
}
const Ky = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function bt(n, o, l = "Mui") {
  const s = Ky[o];
  return s ? `${l}-${s}` : `${Sp.generate(n)}-${o}`;
}
function $t(n, o, l = "Mui") {
  const s = {};
  return (
    o.forEach((u) => {
      s[u] = bt(n, u, l);
    }),
    s
  );
}
function Cp(n) {
  const { variants: o, ...l } = n,
    s = { variants: o, style: Md(l), isProcessed: !0 };
  return (
    s.style === l ||
      (o &&
        o.forEach((u) => {
          typeof u.style != "function" && (u.style = Md(u.style));
        })),
    s
  );
}
const Qy = Ql();
function Us(n) {
  return n !== "ownerState" && n !== "theme" && n !== "sx" && n !== "as";
}
function Xy(n) {
  return n ? (o, l) => l[n] : null;
}
function Yy(n, o, l) {
  n.theme = Zy(n.theme) ? l : n.theme[o] || n.theme;
}
function Pl(n, o) {
  const l = typeof o == "function" ? o(n) : o;
  if (Array.isArray(l)) return l.flatMap((s) => Pl(n, s));
  if (Array.isArray(l == null ? void 0 : l.variants)) {
    let s;
    if (l.isProcessed) s = l.style;
    else {
      const { variants: u, ...f } = l;
      s = f;
    }
    return xp(n, l.variants, [s]);
  }
  return l != null && l.isProcessed ? l.style : l;
}
function xp(n, o, l = []) {
  var u;
  let s;
  e: for (let f = 0; f < o.length; f += 1) {
    const p = o[f];
    if (typeof p.props == "function") {
      if (
        (s ?? (s = { ...n, ...n.ownerState, ownerState: n.ownerState }),
        !p.props(s))
      )
        continue;
    } else
      for (const m in p.props)
        if (
          n[m] !== p.props[m] &&
          ((u = n.ownerState) == null ? void 0 : u[m]) !== p.props[m]
        )
          continue e;
    typeof p.style == "function"
      ? (s ?? (s = { ...n, ...n.ownerState, ownerState: n.ownerState }),
        l.push(p.style(s)))
      : l.push(p.style);
  }
  return l;
}
function kp(n = {}) {
  const {
    themeId: o,
    defaultTheme: l = Qy,
    rootShouldForwardProp: s = Us,
    slotShouldForwardProp: u = Us,
  } = n;
  function f(m) {
    Yy(m, o, l);
  }
  return (m, y = {}) => {
    Ug(m, (_) => _.filter((G) => G !== wr));
    const {
        name: v,
        slot: k,
        skipVariantsResolver: C,
        skipSx: E,
        overridesResolver: M = Xy(e0(k)),
        ...$
      } = y,
      R = C !== void 0 ? C : (k && k !== "Root" && k !== "root") || !1,
      O = E || !1;
    let F = Us;
    k === "Root" || k === "root"
      ? (F = s)
      : k
      ? (F = u)
      : Jy(m) && (F = void 0);
    const X = hp(m, { shouldForwardProp: F, label: qy(), ...$ }),
      H = (_) => {
        if (typeof _ == "function" && _.__emotion_real !== _)
          return function (K) {
            return Pl(K, _);
          };
        if (gn(_)) {
          const G = Cp(_);
          return G.variants
            ? function (ue) {
                return Pl(ue, G);
              }
            : G.style;
        }
        return _;
      },
      z = (..._) => {
        const G = [],
          K = _.map(H),
          ue = [];
        if (
          (G.push(f),
          v &&
            M &&
            ue.push(function (J) {
              var ve, he;
              const oe =
                (he = (ve = J.theme.components) == null ? void 0 : ve[v]) ==
                null
                  ? void 0
                  : he.styleOverrides;
              if (!oe) return null;
              const we = {};
              for (const V in oe) we[V] = Pl(J, oe[V]);
              return M(J, we);
            }),
          v &&
            !R &&
            ue.push(function (J) {
              var we, ve;
              const q = J.theme,
                oe =
                  (ve =
                    (we = q == null ? void 0 : q.components) == null
                      ? void 0
                      : we[v]) == null
                    ? void 0
                    : ve.variants;
              return oe ? xp(J, oe) : null;
            }),
          O || ue.push(wr),
          Array.isArray(K[0]))
        ) {
          const D = K.shift(),
            J = new Array(G.length).fill(""),
            q = new Array(ue.length).fill("");
          let oe;
          (oe = [...J, ...D, ...q]),
            (oe.raw = [...J, ...D.raw, ...q]),
            G.unshift(oe);
        }
        const ge = [...G, ...K, ...ue],
          h = X(...ge);
        return m.muiName && (h.muiName = m.muiName), h;
      };
    return X.withConfig && (z.withConfig = X.withConfig), z;
  };
}
function qy(n, o) {
  return void 0;
}
function Zy(n) {
  for (const o in n) return !1;
  return !0;
}
function Jy(n) {
  return typeof n == "string" && n.charCodeAt(0) > 96;
}
function e0(n) {
  return n && n.charAt(0).toLowerCase() + n.slice(1);
}
const t0 = kp();
function Nl(n, o) {
  const l = { ...o };
  for (const s in n)
    if (Object.prototype.hasOwnProperty.call(n, s)) {
      const u = s;
      if (u === "components" || u === "slots") l[u] = { ...n[u], ...l[u] };
      else if (u === "componentsProps" || u === "slotProps") {
        const f = n[u],
          p = o[u];
        if (!p) l[u] = f || {};
        else if (!f) l[u] = p;
        else {
          l[u] = { ...p };
          for (const m in f)
            if (Object.prototype.hasOwnProperty.call(f, m)) {
              const y = m;
              l[u][y] = Nl(f[y], p[y]);
            }
        }
      } else l[u] === void 0 && (l[u] = n[u]);
    }
  return l;
}
function n0(n) {
  const { theme: o, name: l, props: s } = n;
  return !o ||
    !o.components ||
    !o.components[l] ||
    !o.components[l].defaultProps
    ? s
    : Nl(o.components[l].defaultProps, s);
}
function r0({ props: n, name: o, defaultTheme: l, themeId: s }) {
  let u = Xl(l);
  return s && (u = u[s] || u), n0({ theme: u, name: o, props: n });
}
const Ep = typeof window < "u" ? I.useLayoutEffect : I.useEffect;
function o0(n, o = Number.MIN_SAFE_INTEGER, l = Number.MAX_SAFE_INTEGER) {
  return Math.max(o, Math.min(n, l));
}
function Su(n, o = 0, l = 1) {
  return o0(n, o, l);
}
function i0(n) {
  n = n.slice(1);
  const o = new RegExp(`.{1,${n.length >= 6 ? 2 : 1}}`, "g");
  let l = n.match(o);
  return (
    l && l[0].length === 1 && (l = l.map((s) => s + s)),
    l
      ? `rgb${l.length === 4 ? "a" : ""}(${l
          .map((s, u) =>
            u < 3
              ? parseInt(s, 16)
              : Math.round((parseInt(s, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Zn(n) {
  if (n.type) return n;
  if (n.charAt(0) === "#") return Zn(i0(n));
  const o = n.indexOf("("),
    l = n.substring(0, o);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(l))
    throw new Error(Sr(9, n));
  let s = n.substring(o + 1, n.length - 1),
    u;
  if (l === "color") {
    if (
      ((s = s.split(" ")),
      (u = s.shift()),
      s.length === 4 && s[3].charAt(0) === "/" && (s[3] = s[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
        u
      ))
    )
      throw new Error(Sr(10, u));
  } else s = s.split(",");
  return (
    (s = s.map((f) => parseFloat(f))), { type: l, values: s, colorSpace: u }
  );
}
const l0 = (n) => {
    const o = Zn(n);
    return o.values
      .slice(0, 3)
      .map((l, s) => (o.type.includes("hsl") && s !== 0 ? `${l}%` : l))
      .join(" ");
  },
  Xo = (n, o) => {
    try {
      return l0(n);
    } catch {
      return n;
    }
  };
function Yl(n) {
  const { type: o, colorSpace: l } = n;
  let { values: s } = n;
  return (
    o.includes("rgb")
      ? (s = s.map((u, f) => (f < 3 ? parseInt(u, 10) : u)))
      : o.includes("hsl") && ((s[1] = `${s[1]}%`), (s[2] = `${s[2]}%`)),
    o.includes("color") ? (s = `${l} ${s.join(" ")}`) : (s = `${s.join(", ")}`),
    `${o}(${s})`
  );
}
function Tp(n) {
  n = Zn(n);
  const { values: o } = n,
    l = o[0],
    s = o[1] / 100,
    u = o[2] / 100,
    f = s * Math.min(u, 1 - u),
    p = (v, k = (v + l / 30) % 12) =>
      u - f * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  let m = "rgb";
  const y = [
    Math.round(p(0) * 255),
    Math.round(p(8) * 255),
    Math.round(p(4) * 255),
  ];
  return (
    n.type === "hsla" && ((m += "a"), y.push(o[3])), Yl({ type: m, values: y })
  );
}
function Js(n) {
  n = Zn(n);
  let o = n.type === "hsl" || n.type === "hsla" ? Zn(Tp(n)).values : n.values;
  return (
    (o = o.map(
      (l) => (
        n.type !== "color" && (l /= 255),
        l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2]).toFixed(3))
  );
}
function a0(n, o) {
  const l = Js(n),
    s = Js(o);
  return (Math.max(l, s) + 0.05) / (Math.min(l, s) + 0.05);
}
function zt(n, o) {
  return (
    (n = Zn(n)),
    (o = Su(o)),
    (n.type === "rgb" || n.type === "hsl") && (n.type += "a"),
    n.type === "color" ? (n.values[3] = `/${o}`) : (n.values[3] = o),
    Yl(n)
  );
}
function wl(n, o, l) {
  try {
    return zt(n, o);
  } catch {
    return n;
  }
}
function wu(n, o) {
  if (((n = Zn(n)), (o = Su(o)), n.type.includes("hsl"))) n.values[2] *= 1 - o;
  else if (n.type.includes("rgb") || n.type.includes("color"))
    for (let l = 0; l < 3; l += 1) n.values[l] *= 1 - o;
  return Yl(n);
}
function ze(n, o, l) {
  try {
    return wu(n, o);
  } catch {
    return n;
  }
}
function Cu(n, o) {
  if (((n = Zn(n)), (o = Su(o)), n.type.includes("hsl")))
    n.values[2] += (100 - n.values[2]) * o;
  else if (n.type.includes("rgb"))
    for (let l = 0; l < 3; l += 1) n.values[l] += (255 - n.values[l]) * o;
  else if (n.type.includes("color"))
    for (let l = 0; l < 3; l += 1) n.values[l] += (1 - n.values[l]) * o;
  return Yl(n);
}
function Ae(n, o, l) {
  try {
    return Cu(n, o);
  } catch {
    return n;
  }
}
function s0(n, o = 0.15) {
  return Js(n) > 0.5 ? wu(n, o) : Cu(n, o);
}
function Cl(n, o, l) {
  try {
    return s0(n, o);
  } catch {
    return n;
  }
}
function Pp(n, o = 166) {
  let l;
  function s(...u) {
    const f = () => {
      n.apply(this, u);
    };
    clearTimeout(l), (l = setTimeout(f, o));
  }
  return (
    (s.clear = () => {
      clearTimeout(l);
    }),
    s
  );
}
function u0(n, o) {
  var l, s, u;
  return (
    I.isValidElement(n) &&
    o.indexOf(
      n.type.muiName ??
        ((u =
          (s = (l = n.type) == null ? void 0 : l._payload) == null
            ? void 0
            : s.value) == null
          ? void 0
          : u.muiName)
    ) !== -1
  );
}
function Rp(n) {
  return (n && n.ownerDocument) || document;
}
function bp(n) {
  return Rp(n).defaultView || window;
}
function c0(n, o) {
  typeof n == "function" ? n(o) : n && (n.current = o);
}
function vr(n) {
  const o = I.useRef(n);
  return (
    Ep(() => {
      o.current = n;
    }),
    I.useRef((...l) => (0, o.current)(...l)).current
  );
}
function Ml(...n) {
  return I.useMemo(
    () =>
      n.every((o) => o == null)
        ? null
        : (o) => {
            n.forEach((l) => {
              c0(l, o);
            });
          },
    n
  );
}
const Ad = {};
function $p(n, o) {
  const l = I.useRef(Ad);
  return l.current === Ad && (l.current = n(o)), l;
}
const f0 = [];
function d0(n) {
  I.useEffect(n, f0);
}
class xu {
  constructor() {
    Ho(this, "currentId", null);
    Ho(this, "clear", () => {
      this.currentId !== null &&
        (clearTimeout(this.currentId), (this.currentId = null));
    });
    Ho(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new xu();
  }
  start(o, l) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), l();
      }, o));
  }
}
function p0() {
  const n = $p(xu.create).current;
  return d0(n.disposeEffect), n;
}
function Ld(n) {
  try {
    return n.matches(":focus-visible");
  } catch {}
  return !1;
}
function jt(n, o, l = void 0) {
  const s = {};
  for (const u in n) {
    const f = n[u];
    let p = "",
      m = !0;
    for (let y = 0; y < f.length; y += 1) {
      const v = f[y];
      v &&
        ((p += (m === !0 ? "" : " ") + o(v)),
        (m = !1),
        l && l[v] && (p += " " + l[v]));
    }
    s[u] = p;
  }
  return s;
}
function m0(n) {
  return typeof n == "string";
}
function h0(n, o, l) {
  return n === void 0 || m0(n)
    ? o
    : { ...o, ownerState: { ...o.ownerState, ...l } };
}
function g0(n, o = []) {
  if (n === void 0) return {};
  const l = {};
  return (
    Object.keys(n)
      .filter(
        (s) =>
          s.match(/^on[A-Z]/) && typeof n[s] == "function" && !o.includes(s)
      )
      .forEach((s) => {
        l[s] = n[s];
      }),
    l
  );
}
function Bd(n) {
  if (n === void 0) return {};
  const o = {};
  return (
    Object.keys(n)
      .filter((l) => !(l.match(/^on[A-Z]/) && typeof n[l] == "function"))
      .forEach((l) => {
        o[l] = n[l];
      }),
    o
  );
}
function y0(n) {
  const {
    getSlotProps: o,
    additionalProps: l,
    externalSlotProps: s,
    externalForwardedProps: u,
    className: f,
  } = n;
  if (!o) {
    const M = Ee(
        l == null ? void 0 : l.className,
        f,
        u == null ? void 0 : u.className,
        s == null ? void 0 : s.className
      ),
      $ = {
        ...(l == null ? void 0 : l.style),
        ...(u == null ? void 0 : u.style),
        ...(s == null ? void 0 : s.style),
      },
      R = { ...l, ...u, ...s };
    return (
      M.length > 0 && (R.className = M),
      Object.keys($).length > 0 && (R.style = $),
      { props: R, internalRef: void 0 }
    );
  }
  const p = g0({ ...u, ...s }),
    m = Bd(s),
    y = Bd(u),
    v = o(p),
    k = Ee(
      v == null ? void 0 : v.className,
      l == null ? void 0 : l.className,
      f,
      u == null ? void 0 : u.className,
      s == null ? void 0 : s.className
    ),
    C = {
      ...(v == null ? void 0 : v.style),
      ...(l == null ? void 0 : l.style),
      ...(u == null ? void 0 : u.style),
      ...(s == null ? void 0 : s.style),
    },
    E = { ...v, ...l, ...y, ...m };
  return (
    k.length > 0 && (E.className = k),
    Object.keys(C).length > 0 && (E.style = C),
    { props: E, internalRef: v.ref }
  );
}
function v0(n, o, l) {
  return typeof n == "function" ? n(o, l) : n;
}
function Ol(n) {
  var C;
  const {
      elementType: o,
      externalSlotProps: l,
      ownerState: s,
      skipResolvingSlotProps: u = !1,
      ...f
    } = n,
    p = u ? {} : v0(l, s),
    { props: m, internalRef: y } = y0({ ...f, externalSlotProps: p }),
    v = Ml(
      y,
      p == null ? void 0 : p.ref,
      (C = n.additionalProps) == null ? void 0 : C.ref
    );
  return h0(o, { ...m, ref: v }, s);
}
const S0 = I.createContext(),
  _p = () => I.useContext(S0) ?? !1,
  w0 = I.createContext(void 0);
function C0(n) {
  const { theme: o, name: l, props: s } = n;
  if (!o || !o.components || !o.components[l]) return s;
  const u = o.components[l];
  return u.defaultProps
    ? Nl(u.defaultProps, s)
    : !u.styleOverrides && !u.variants
    ? Nl(u, s)
    : s;
}
function x0({ props: n, name: o }) {
  const l = I.useContext(w0);
  return C0({ props: n, name: o, theme: { components: l } });
}
const jd = { theme: void 0 };
function k0(n) {
  let o, l;
  return function (u) {
    let f = o;
    return (
      (f === void 0 || u.theme !== l) &&
        ((jd.theme = u.theme), (f = Cp(n(jd))), (o = f), (l = u.theme)),
      f
    );
  };
}
function E0(n = "") {
  function o(...s) {
    if (!s.length) return "";
    const u = s[0];
    return typeof u == "string" &&
      !u.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${n ? `${n}-` : ""}${u}${o(...s.slice(1))})`
      : `, ${u}`;
  }
  return (s, ...u) => `var(--${n ? `${n}-` : ""}${s}${o(...u)})`;
}
const Dd = (n, o, l, s = []) => {
    let u = n;
    o.forEach((f, p) => {
      p === o.length - 1
        ? Array.isArray(u)
          ? (u[Number(f)] = l)
          : u && typeof u == "object" && (u[f] = l)
        : u &&
          typeof u == "object" &&
          (u[f] || (u[f] = s.includes(f) ? [] : {}), (u = u[f]));
    });
  },
  T0 = (n, o, l) => {
    function s(u, f = [], p = []) {
      Object.entries(u).forEach(([m, y]) => {
        (!l || !l([...f, m])) &&
          y != null &&
          (typeof y == "object" && Object.keys(y).length > 0
            ? s(y, [...f, m], Array.isArray(y) ? [...p, m] : p)
            : o([...f, m], y, p));
      });
    }
    s(n);
  },
  P0 = (n, o) =>
    typeof o == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((s) =>
          n.includes(s)
        ) || n[n.length - 1].toLowerCase().includes("opacity")
        ? o
        : `${o}px`
      : o;
function Hs(n, o) {
  const { prefix: l, shouldSkipGeneratingVar: s } = o || {},
    u = {},
    f = {},
    p = {};
  return (
    T0(
      n,
      (m, y, v) => {
        if (
          (typeof y == "string" || typeof y == "number") &&
          (!s || !s(m, y))
        ) {
          const k = `--${l ? `${l}-` : ""}${m.join("-")}`,
            C = P0(m, y);
          Object.assign(u, { [k]: C }),
            Dd(f, m, `var(${k})`, v),
            Dd(p, m, `var(${k}, ${C})`, v);
        }
      },
      (m) => m[0] === "vars"
    ),
    { css: u, vars: f, varsWithDefaults: p }
  );
}
function R0(n, o = {}) {
  const {
      getSelector: l = O,
      disableCssColorScheme: s,
      colorSchemeSelector: u,
    } = o,
    {
      colorSchemes: f = {},
      components: p,
      defaultColorScheme: m = "light",
      ...y
    } = n,
    { vars: v, css: k, varsWithDefaults: C } = Hs(y, o);
  let E = C;
  const M = {},
    { [m]: $, ...R } = f;
  if (
    (Object.entries(R || {}).forEach(([H, z]) => {
      const { vars: _, css: G, varsWithDefaults: K } = Hs(z, o);
      (E = Bt(E, K)), (M[H] = { css: G, vars: _ });
    }),
    $)
  ) {
    const { css: H, vars: z, varsWithDefaults: _ } = Hs($, o);
    (E = Bt(E, _)), (M[m] = { css: H, vars: z });
  }
  function O(H, z) {
    var G, K;
    let _ = u;
    if (
      (u === "class" && (_ = ".%s"),
      u === "data" && (_ = "[data-%s]"),
      u != null &&
        u.startsWith("data-") &&
        !u.includes("%s") &&
        (_ = `[${u}="%s"]`),
      H)
    ) {
      if (_ === "media")
        return n.defaultColorScheme === H
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${
                ((K = (G = f[H]) == null ? void 0 : G.palette) == null
                  ? void 0
                  : K.mode) || H
              })`]: { ":root": z },
            };
      if (_)
        return n.defaultColorScheme === H
          ? `:root, ${_.replace("%s", String(H))}`
          : _.replace("%s", String(H));
    }
    return ":root";
  }
  return {
    vars: E,
    generateThemeVars: () => {
      let H = { ...v };
      return (
        Object.entries(M).forEach(([, { vars: z }]) => {
          H = Bt(H, z);
        }),
        H
      );
    },
    generateStyleSheets: () => {
      var ue, ge;
      const H = [],
        z = n.defaultColorScheme || "light";
      function _(h, D) {
        Object.keys(D).length &&
          H.push(typeof h == "string" ? { [h]: { ...D } } : h);
      }
      _(l(void 0, { ...k }), k);
      const { [z]: G, ...K } = M;
      if (G) {
        const { css: h } = G,
          D =
            (ge = (ue = f[z]) == null ? void 0 : ue.palette) == null
              ? void 0
              : ge.mode,
          J = !s && D ? { colorScheme: D, ...h } : { ...h };
        _(l(z, { ...J }), J);
      }
      return (
        Object.entries(K).forEach(([h, { css: D }]) => {
          var oe, we;
          const J =
              (we = (oe = f[h]) == null ? void 0 : oe.palette) == null
                ? void 0
                : we.mode,
            q = !s && J ? { colorScheme: J, ...D } : { ...D };
          _(l(h, { ...q }), q);
        }),
        H
      );
    },
  };
}
function b0(n) {
  return function (l) {
    return n === "media"
      ? `@media (prefers-color-scheme: ${l})`
      : n
      ? n.startsWith("data-") && !n.includes("%s")
        ? `[${n}="${l}"] &`
        : n === "class"
        ? `.${l} &`
        : n === "data"
        ? `[data-${l}] &`
        : `${n.replace("%s", l)} &`
      : "&";
  };
}
const $0 = (n, o) => n.filter((l) => o.includes(l)),
  oo = (n, o, l) => {
    const s = n.keys[0];
    Array.isArray(o)
      ? o.forEach((u, f) => {
          l((p, m) => {
            f <= n.keys.length - 1 &&
              (f === 0 ? Object.assign(p, m) : (p[n.up(n.keys[f])] = m));
          }, u);
        })
      : o && typeof o == "object"
      ? (Object.keys(o).length > n.keys.length
          ? n.keys
          : $0(n.keys, Object.keys(o))
        ).forEach((f) => {
          if (n.keys.includes(f)) {
            const p = o[f];
            p !== void 0 &&
              l((m, y) => {
                s === f ? Object.assign(m, y) : (m[n.up(f)] = y);
              }, p);
          }
        })
      : (typeof o == "number" || typeof o == "string") &&
        l((u, f) => {
          Object.assign(u, f);
        }, o);
  };
function Il(n) {
  return `--Grid-${n}Spacing`;
}
function ql(n) {
  return `--Grid-parent-${n}Spacing`;
}
const Fd = "--Grid-columns",
  eo = "--Grid-parent-columns",
  _0 = ({ theme: n, ownerState: o }) => {
    const l = {};
    return (
      oo(n.breakpoints, o.size, (s, u) => {
        let f = {};
        u === "grow" && (f = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" }),
          u === "auto" &&
            (f = {
              flexBasis: "auto",
              flexGrow: 0,
              flexShrink: 0,
              maxWidth: "none",
              width: "auto",
            }),
          typeof u == "number" &&
            (f = {
              flexGrow: 0,
              flexBasis: "auto",
              width: `calc(100% * ${u} / var(${eo}) - (var(${eo}) - ${u}) * (var(${ql(
                "column"
              )}) / var(${eo})))`,
            }),
          s(l, f);
      }),
      l
    );
  },
  N0 = ({ theme: n, ownerState: o }) => {
    const l = {};
    return (
      oo(n.breakpoints, o.offset, (s, u) => {
        let f = {};
        u === "auto" && (f = { marginLeft: "auto" }),
          typeof u == "number" &&
            (f = {
              marginLeft:
                u === 0
                  ? "0px"
                  : `calc(100% * ${u} / var(${eo}) + var(${ql(
                      "column"
                    )}) * ${u} / var(${eo}))`,
            }),
          s(l, f);
      }),
      l
    );
  },
  M0 = ({ theme: n, ownerState: o }) => {
    if (!o.container) return {};
    const l = { [Fd]: 12 };
    return (
      oo(n.breakpoints, o.columns, (s, u) => {
        const f = u ?? 12;
        s(l, { [Fd]: f, "> *": { [eo]: f } });
      }),
      l
    );
  },
  O0 = ({ theme: n, ownerState: o }) => {
    if (!o.container) return {};
    const l = {};
    return (
      oo(n.breakpoints, o.rowSpacing, (s, u) => {
        var p;
        const f =
          typeof u == "string"
            ? u
            : (p = n.spacing) == null
            ? void 0
            : p.call(n, u);
        s(l, { [Il("row")]: f, "> *": { [ql("row")]: f } });
      }),
      l
    );
  },
  I0 = ({ theme: n, ownerState: o }) => {
    if (!o.container) return {};
    const l = {};
    return (
      oo(n.breakpoints, o.columnSpacing, (s, u) => {
        var p;
        const f =
          typeof u == "string"
            ? u
            : (p = n.spacing) == null
            ? void 0
            : p.call(n, u);
        s(l, { [Il("column")]: f, "> *": { [ql("column")]: f } });
      }),
      l
    );
  },
  z0 = ({ theme: n, ownerState: o }) => {
    if (!o.container) return {};
    const l = {};
    return (
      oo(n.breakpoints, o.direction, (s, u) => {
        s(l, { flexDirection: u });
      }),
      l
    );
  },
  A0 = ({ ownerState: n }) => ({
    minWidth: 0,
    boxSizing: "border-box",
    ...(n.container && {
      display: "flex",
      flexWrap: "wrap",
      ...(n.wrap && n.wrap !== "wrap" && { flexWrap: n.wrap }),
      gap: `var(${Il("row")}) var(${Il("column")})`,
    }),
  }),
  L0 = (n) => {
    const o = [];
    return (
      Object.entries(n).forEach(([l, s]) => {
        s !== !1 && s !== void 0 && o.push(`grid-${l}-${String(s)}`);
      }),
      o
    );
  },
  B0 = (n, o = "xs") => {
    function l(s) {
      return s === void 0
        ? !1
        : (typeof s == "string" && !Number.isNaN(Number(s))) ||
            (typeof s == "number" && s > 0);
    }
    if (l(n)) return [`spacing-${o}-${String(n)}`];
    if (typeof n == "object" && !Array.isArray(n)) {
      const s = [];
      return (
        Object.entries(n).forEach(([u, f]) => {
          l(f) && s.push(`spacing-${u}-${String(f)}`);
        }),
        s
      );
    }
    return [];
  },
  j0 = (n) =>
    n === void 0
      ? []
      : typeof n == "object"
      ? Object.entries(n).map(([o, l]) => `direction-${o}-${l}`)
      : [`direction-xs-${String(n)}`],
  D0 = Ql(),
  F0 = t0("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (n, o) => o.root,
  });
function W0(n) {
  return r0({ props: n, name: "MuiGrid", defaultTheme: D0 });
}
function V0(n = {}) {
  const {
      createStyledComponent: o = F0,
      useThemeProps: l = W0,
      useTheme: s = Xl,
      componentName: u = "MuiGrid",
    } = n,
    f = (v, k) => {
      const { container: C, direction: E, spacing: M, wrap: $, size: R } = v,
        O = {
          root: [
            "root",
            C && "container",
            $ !== "wrap" && `wrap-xs-${String($)}`,
            ...j0(E),
            ...L0(R),
            ...(C ? B0(M, k.breakpoints.keys[0]) : []),
          ],
        };
      return jt(O, (F) => bt(u, F), {});
    };
  function p(v, k, C = () => !0) {
    const E = {};
    return (
      v === null ||
        (Array.isArray(v)
          ? v.forEach((M, $) => {
              M !== null && C(M) && k.keys[$] && (E[k.keys[$]] = M);
            })
          : typeof v == "object"
          ? Object.keys(v).forEach((M) => {
              const $ = v[M];
              $ != null && C($) && (E[M] = $);
            })
          : (E[k.keys[0]] = v)),
      E
    );
  }
  const m = o(M0, I0, O0, _0, z0, A0, N0),
    y = I.forwardRef(function (k, C) {
      const E = s(),
        M = l(k),
        $ = vu(M),
        {
          className: R,
          children: O,
          columns: F = 12,
          container: X = !1,
          component: H = "div",
          direction: z = "row",
          wrap: _ = "wrap",
          size: G = {},
          offset: K = {},
          spacing: ue = 0,
          rowSpacing: ge = ue,
          columnSpacing: h = ue,
          unstable_level: D = 0,
          ...J
        } = $,
        q = p(G, E.breakpoints, (w) => w !== !1),
        oe = p(K, E.breakpoints),
        we = k.columns ?? (D ? void 0 : F),
        ve = k.spacing ?? (D ? void 0 : ue),
        he = k.rowSpacing ?? k.spacing ?? (D ? void 0 : ge),
        V = k.columnSpacing ?? k.spacing ?? (D ? void 0 : h),
        W = {
          ...$,
          level: D,
          columns: we,
          container: X,
          direction: z,
          wrap: _,
          spacing: ve,
          rowSpacing: he,
          columnSpacing: V,
          size: q,
          offset: oe,
        },
        Q = f(W, E);
      return te.jsx(m, {
        ref: C,
        as: H,
        ownerState: W,
        className: Ee(Q.root, R),
        ...J,
        children: I.Children.map(O, (w) => {
          var A;
          return I.isValidElement(w) &&
            u0(w, ["Grid"]) &&
            X &&
            w.props.container
            ? I.cloneElement(w, {
                unstable_level:
                  ((A = w.props) == null ? void 0 : A.unstable_level) ?? D + 1,
              })
            : w;
        }),
      });
    });
  return (y.muiName = "Grid"), y;
}
function Np() {
  return {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Jo.white, default: Jo.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const U0 = Np();
function Mp() {
  return {
    text: {
      primary: Jo.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Jo.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const Wd = Mp();
function Vd(n, o, l, s) {
  const u = s.light || s,
    f = s.dark || s * 1.5;
  n[o] ||
    (n.hasOwnProperty(l)
      ? (n[o] = n[l])
      : o === "light"
      ? (n.light = Cu(n.main, u))
      : o === "dark" && (n.dark = wu(n.main, f)));
}
function H0(n = "light") {
  return n === "dark"
    ? { main: Qr[200], light: Qr[50], dark: Qr[400] }
    : { main: Qr[700], light: Qr[400], dark: Qr[800] };
}
function G0(n = "light") {
  return n === "dark"
    ? { main: Kr[200], light: Kr[50], dark: Kr[400] }
    : { main: Kr[500], light: Kr[300], dark: Kr[700] };
}
function K0(n = "light") {
  return n === "dark"
    ? { main: Gr[500], light: Gr[300], dark: Gr[700] }
    : { main: Gr[700], light: Gr[400], dark: Gr[800] };
}
function Q0(n = "light") {
  return n === "dark"
    ? { main: Xr[400], light: Xr[300], dark: Xr[700] }
    : { main: Xr[700], light: Xr[500], dark: Xr[900] };
}
function X0(n = "light") {
  return n === "dark"
    ? { main: Yr[400], light: Yr[300], dark: Yr[700] }
    : { main: Yr[800], light: Yr[500], dark: Yr[900] };
}
function Y0(n = "light") {
  return n === "dark"
    ? { main: Ko[400], light: Ko[300], dark: Ko[700] }
    : { main: "#ed6c02", light: Ko[500], dark: Ko[900] };
}
function ku(n) {
  const {
      mode: o = "light",
      contrastThreshold: l = 3,
      tonalOffset: s = 0.2,
      ...u
    } = n,
    f = n.primary || H0(o),
    p = n.secondary || G0(o),
    m = n.error || K0(o),
    y = n.info || Q0(o),
    v = n.success || X0(o),
    k = n.warning || Y0(o);
  function C(R) {
    return a0(R, Wd.text.primary) >= l ? Wd.text.primary : U0.text.primary;
  }
  const E = ({
    color: R,
    name: O,
    mainShade: F = 500,
    lightShade: X = 300,
    darkShade: H = 700,
  }) => {
    if (
      ((R = { ...R }),
      !R.main && R[F] && (R.main = R[F]),
      !R.hasOwnProperty("main"))
    )
      throw new Error(Sr(11, O ? ` (${O})` : "", F));
    if (typeof R.main != "string")
      throw new Error(Sr(12, O ? ` (${O})` : "", JSON.stringify(R.main)));
    return (
      Vd(R, "light", X, s),
      Vd(R, "dark", H, s),
      R.contrastText || (R.contrastText = C(R.main)),
      R
    );
  };
  let M;
  return (
    o === "light" ? (M = Np()) : o === "dark" && (M = Mp()),
    Bt(
      {
        common: { ...Jo },
        mode: o,
        primary: E({ color: f, name: "primary" }),
        secondary: E({
          color: p,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: E({ color: m, name: "error" }),
        warning: E({ color: k, name: "warning" }),
        info: E({ color: y, name: "info" }),
        success: E({ color: v, name: "success" }),
        grey: Uh,
        contrastThreshold: l,
        getContrastText: C,
        augmentColor: E,
        tonalOffset: s,
        ...M,
      },
      u
    )
  );
}
function q0(n) {
  const o = {};
  return (
    Object.entries(n).forEach((s) => {
      const [u, f] = s;
      typeof f == "object" &&
        (o[u] = `${f.fontStyle ? `${f.fontStyle} ` : ""}${
          f.fontVariant ? `${f.fontVariant} ` : ""
        }${f.fontWeight ? `${f.fontWeight} ` : ""}${
          f.fontStretch ? `${f.fontStretch} ` : ""
        }${f.fontSize || ""}${f.lineHeight ? `/${f.lineHeight} ` : ""}${
          f.fontFamily || ""
        }`);
    }),
    o
  );
}
function Z0(n, o) {
  return {
    toolbar: {
      minHeight: 56,
      [n.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [n.up("sm")]: { minHeight: 64 },
    },
    ...o,
  };
}
function J0(n) {
  return Math.round(n * 1e5) / 1e5;
}
const Ud = { textTransform: "uppercase" },
  Hd = '"Roboto", "Helvetica", "Arial", sans-serif';
function ev(n, o) {
  const {
      fontFamily: l = Hd,
      fontSize: s = 14,
      fontWeightLight: u = 300,
      fontWeightRegular: f = 400,
      fontWeightMedium: p = 500,
      fontWeightBold: m = 700,
      htmlFontSize: y = 16,
      allVariants: v,
      pxToRem: k,
      ...C
    } = typeof o == "function" ? o(n) : o,
    E = s / 14,
    M = k || ((O) => `${(O / y) * E}rem`),
    $ = (O, F, X, H, z) => ({
      fontFamily: l,
      fontWeight: O,
      fontSize: M(F),
      lineHeight: X,
      ...(l === Hd ? { letterSpacing: `${J0(H / F)}em` } : {}),
      ...z,
      ...v,
    }),
    R = {
      h1: $(u, 96, 1.167, -1.5),
      h2: $(u, 60, 1.2, -0.5),
      h3: $(f, 48, 1.167, 0),
      h4: $(f, 34, 1.235, 0.25),
      h5: $(f, 24, 1.334, 0),
      h6: $(p, 20, 1.6, 0.15),
      subtitle1: $(f, 16, 1.75, 0.15),
      subtitle2: $(p, 14, 1.57, 0.1),
      body1: $(f, 16, 1.5, 0.15),
      body2: $(f, 14, 1.43, 0.15),
      button: $(p, 14, 1.75, 0.4, Ud),
      caption: $(f, 12, 1.66, 0.4),
      overline: $(f, 12, 2.66, 1, Ud),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Bt(
    {
      htmlFontSize: y,
      pxToRem: M,
      fontFamily: l,
      fontSize: s,
      fontWeightLight: u,
      fontWeightRegular: f,
      fontWeightMedium: p,
      fontWeightBold: m,
      ...R,
    },
    C,
    { clone: !1 }
  );
}
const tv = 0.2,
  nv = 0.14,
  rv = 0.12;
function We(...n) {
  return [
    `${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${tv})`,
    `${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${nv})`,
    `${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${rv})`,
  ].join(",");
}
const ov = [
    "none",
    We(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    We(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    We(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    We(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    We(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    We(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    We(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    We(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    We(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    We(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    We(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    We(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    We(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    We(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    We(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    We(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    We(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    We(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    We(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    We(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    We(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    We(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    We(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    We(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  iv = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  lv = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Gd(n) {
  return `${Math.round(n)}ms`;
}
function av(n) {
  if (!n) return 0;
  const o = n / 36;
  return Math.min(Math.round((4 + 15 * o ** 0.25 + o / 5) * 10), 3e3);
}
function sv(n) {
  const o = { ...iv, ...n.easing },
    l = { ...lv, ...n.duration };
  return {
    getAutoHeightDuration: av,
    create: (u = ["all"], f = {}) => {
      const {
        duration: p = l.standard,
        easing: m = o.easeInOut,
        delay: y = 0,
        ...v
      } = f;
      return (Array.isArray(u) ? u : [u])
        .map(
          (k) =>
            `${k} ${typeof p == "string" ? p : Gd(p)} ${m} ${
              typeof y == "string" ? y : Gd(y)
            }`
        )
        .join(",");
    },
    ...n,
    easing: o,
    duration: l,
  };
}
const uv = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function cv(n) {
  return (
    gn(n) ||
    typeof n > "u" ||
    typeof n == "string" ||
    typeof n == "boolean" ||
    typeof n == "number" ||
    Array.isArray(n)
  );
}
function Op(n = {}) {
  const o = { ...n };
  function l(s) {
    const u = Object.entries(s);
    for (let f = 0; f < u.length; f++) {
      const [p, m] = u[f];
      !cv(m) || p.startsWith("unstable_")
        ? delete s[p]
        : gn(m) && ((s[p] = { ...m }), l(s[p]));
    }
  }
  return (
    l(o),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(o, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function eu(n = {}, ...o) {
  const {
    breakpoints: l,
    mixins: s = {},
    spacing: u,
    palette: f = {},
    transitions: p = {},
    typography: m = {},
    shape: y,
    ...v
  } = n;
  if (n.vars) throw new Error(Sr(20));
  const k = ku(f),
    C = Ql(n);
  let E = Bt(C, {
    mixins: Z0(C.breakpoints, s),
    palette: k,
    shadows: ov.slice(),
    typography: ev(k, m),
    transitions: sv(p),
    zIndex: { ...uv },
  });
  return (
    (E = Bt(E, v)),
    (E = o.reduce((M, $) => Bt(M, $), E)),
    (E.unstable_sxConfig = {
      ...li,
      ...(v == null ? void 0 : v.unstable_sxConfig),
    }),
    (E.unstable_sx = function ($) {
      return wr({ sx: $, theme: this });
    }),
    (E.toRuntimeSource = Op),
    E
  );
}
function tu(n) {
  let o;
  return (
    n < 1 ? (o = 5.11916 * n ** 2) : (o = 4.5 * Math.log(n + 1) + 2),
    Math.round(o * 10) / 1e3
  );
}
const fv = [...Array(25)].map((n, o) => {
  if (o === 0) return "none";
  const l = tu(o);
  return `linear-gradient(rgba(255 255 255 / ${l}), rgba(255 255 255 / ${l}))`;
});
function Ip(n) {
  return {
    inputPlaceholder: n === "dark" ? 0.5 : 0.42,
    inputUnderline: n === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: n === "dark" ? 0.2 : 0.12,
    switchTrack: n === "dark" ? 0.3 : 0.38,
  };
}
function zp(n) {
  return n === "dark" ? fv : [];
}
function dv(n) {
  const { palette: o = { mode: "light" }, opacity: l, overlays: s, ...u } = n,
    f = ku(o);
  return {
    palette: f,
    opacity: { ...Ip(f.mode), ...l },
    overlays: s || zp(f.mode),
    ...u,
  };
}
function pv(n) {
  var o;
  return (
    !!n[0].match(
      /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!n[0].match(/sxConfig$/) ||
    (n[0] === "palette" &&
      !!((o = n[1]) != null && o.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const mv = (n) => [
    ...[...Array(25)].map((o, l) => `--${n ? `${n}-` : ""}overlays-${l}`),
    `--${n ? `${n}-` : ""}palette-AppBar-darkBg`,
    `--${n ? `${n}-` : ""}palette-AppBar-darkColor`,
  ],
  hv = (n) => (o, l) => {
    const s = n.rootSelector || ":root",
      u = n.colorSchemeSelector;
    let f = u;
    if (
      (u === "class" && (f = ".%s"),
      u === "data" && (f = "[data-%s]"),
      u != null &&
        u.startsWith("data-") &&
        !u.includes("%s") &&
        (f = `[${u}="%s"]`),
      n.defaultColorScheme === o)
    ) {
      if (o === "dark") {
        const p = {};
        return (
          mv(n.cssVarPrefix).forEach((m) => {
            (p[m] = l[m]), delete l[m];
          }),
          f === "media"
            ? { [s]: l, "@media (prefers-color-scheme: dark)": { [s]: p } }
            : f
            ? { [f.replace("%s", o)]: p, [`${s}, ${f.replace("%s", o)}`]: l }
            : { [s]: { ...l, ...p } }
        );
      }
      if (f && f !== "media") return `${s}, ${f.replace("%s", String(o))}`;
    } else if (o) {
      if (f === "media")
        return { [`@media (prefers-color-scheme: ${String(o)})`]: { [s]: l } };
      if (f) return f.replace("%s", String(o));
    }
    return s;
  };
function gv(n, o) {
  o.forEach((l) => {
    n[l] || (n[l] = {});
  });
}
function N(n, o, l) {
  !n[o] && l && (n[o] = l);
}
function Yo(n) {
  return typeof n != "string" || !n.startsWith("hsl") ? n : Tp(n);
}
function Pn(n, o) {
  `${o}Channel` in n || (n[`${o}Channel`] = Xo(Yo(n[o])));
}
function yv(n) {
  return typeof n == "number"
    ? `${n}px`
    : typeof n == "string" || typeof n == "function" || Array.isArray(n)
    ? n
    : "8px";
}
const pn = (n) => {
    try {
      return n();
    } catch {}
  },
  vv = (n = "mui") => E0(n);
function Gs(n, o, l, s) {
  if (!o) return;
  o = o === !0 ? {} : o;
  const u = s === "dark" ? "dark" : "light";
  if (!l) {
    n[s] = dv({
      ...o,
      palette: { mode: u, ...(o == null ? void 0 : o.palette) },
    });
    return;
  }
  const { palette: f, ...p } = eu({
    ...l,
    palette: { mode: u, ...(o == null ? void 0 : o.palette) },
  });
  return (
    (n[s] = {
      ...o,
      palette: f,
      opacity: { ...Ip(u), ...(o == null ? void 0 : o.opacity) },
      overlays: (o == null ? void 0 : o.overlays) || zp(u),
    }),
    p
  );
}
function Sv(n = {}, ...o) {
  const {
      colorSchemes: l = { light: !0 },
      defaultColorScheme: s,
      disableCssColorScheme: u = !1,
      cssVarPrefix: f = "mui",
      shouldSkipGeneratingVar: p = pv,
      colorSchemeSelector: m = l.light && l.dark ? "media" : void 0,
      rootSelector: y = ":root",
      ...v
    } = n,
    k = Object.keys(l)[0],
    C = s || (l.light && k !== "light" ? "light" : k),
    E = vv(f),
    { [C]: M, light: $, dark: R, ...O } = l,
    F = { ...O };
  let X = M;
  if (
    (((C === "dark" && !("dark" in l)) || (C === "light" && !("light" in l))) &&
      (X = !0),
    !X)
  )
    throw new Error(Sr(21, C));
  const H = Gs(F, X, v, C);
  $ && !F.light && Gs(F, $, void 0, "light"),
    R && !F.dark && Gs(F, R, void 0, "dark");
  let z = {
    defaultColorScheme: C,
    ...H,
    cssVarPrefix: f,
    colorSchemeSelector: m,
    rootSelector: y,
    getCssVar: E,
    colorSchemes: F,
    font: { ...q0(H.typography), ...H.font },
    spacing: yv(v.spacing),
  };
  Object.keys(z.colorSchemes).forEach((ge) => {
    const h = z.colorSchemes[ge].palette,
      D = (J) => {
        const q = J.split("-"),
          oe = q[1],
          we = q[2];
        return E(J, h[oe][we]);
      };
    if (
      (h.mode === "light" &&
        (N(h.common, "background", "#fff"),
        N(h.common, "onBackground", "#000")),
      h.mode === "dark" &&
        (N(h.common, "background", "#000"),
        N(h.common, "onBackground", "#fff")),
      gv(h, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip",
      ]),
      h.mode === "light")
    ) {
      N(h.Alert, "errorColor", ze(h.error.light, 0.6)),
        N(h.Alert, "infoColor", ze(h.info.light, 0.6)),
        N(h.Alert, "successColor", ze(h.success.light, 0.6)),
        N(h.Alert, "warningColor", ze(h.warning.light, 0.6)),
        N(h.Alert, "errorFilledBg", D("palette-error-main")),
        N(h.Alert, "infoFilledBg", D("palette-info-main")),
        N(h.Alert, "successFilledBg", D("palette-success-main")),
        N(h.Alert, "warningFilledBg", D("palette-warning-main")),
        N(
          h.Alert,
          "errorFilledColor",
          pn(() => h.getContrastText(h.error.main))
        ),
        N(
          h.Alert,
          "infoFilledColor",
          pn(() => h.getContrastText(h.info.main))
        ),
        N(
          h.Alert,
          "successFilledColor",
          pn(() => h.getContrastText(h.success.main))
        ),
        N(
          h.Alert,
          "warningFilledColor",
          pn(() => h.getContrastText(h.warning.main))
        ),
        N(h.Alert, "errorStandardBg", Ae(h.error.light, 0.9)),
        N(h.Alert, "infoStandardBg", Ae(h.info.light, 0.9)),
        N(h.Alert, "successStandardBg", Ae(h.success.light, 0.9)),
        N(h.Alert, "warningStandardBg", Ae(h.warning.light, 0.9)),
        N(h.Alert, "errorIconColor", D("palette-error-main")),
        N(h.Alert, "infoIconColor", D("palette-info-main")),
        N(h.Alert, "successIconColor", D("palette-success-main")),
        N(h.Alert, "warningIconColor", D("palette-warning-main")),
        N(h.AppBar, "defaultBg", D("palette-grey-100")),
        N(h.Avatar, "defaultBg", D("palette-grey-400")),
        N(h.Button, "inheritContainedBg", D("palette-grey-300")),
        N(h.Button, "inheritContainedHoverBg", D("palette-grey-A100")),
        N(h.Chip, "defaultBorder", D("palette-grey-400")),
        N(h.Chip, "defaultAvatarColor", D("palette-grey-700")),
        N(h.Chip, "defaultIconColor", D("palette-grey-700")),
        N(h.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        N(h.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        N(h.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        N(h.LinearProgress, "primaryBg", Ae(h.primary.main, 0.62)),
        N(h.LinearProgress, "secondaryBg", Ae(h.secondary.main, 0.62)),
        N(h.LinearProgress, "errorBg", Ae(h.error.main, 0.62)),
        N(h.LinearProgress, "infoBg", Ae(h.info.main, 0.62)),
        N(h.LinearProgress, "successBg", Ae(h.success.main, 0.62)),
        N(h.LinearProgress, "warningBg", Ae(h.warning.main, 0.62)),
        N(h.Skeleton, "bg", `rgba(${D("palette-text-primaryChannel")} / 0.11)`),
        N(h.Slider, "primaryTrack", Ae(h.primary.main, 0.62)),
        N(h.Slider, "secondaryTrack", Ae(h.secondary.main, 0.62)),
        N(h.Slider, "errorTrack", Ae(h.error.main, 0.62)),
        N(h.Slider, "infoTrack", Ae(h.info.main, 0.62)),
        N(h.Slider, "successTrack", Ae(h.success.main, 0.62)),
        N(h.Slider, "warningTrack", Ae(h.warning.main, 0.62));
      const J = Cl(h.background.default, 0.8);
      N(h.SnackbarContent, "bg", J),
        N(
          h.SnackbarContent,
          "color",
          pn(() => h.getContrastText(J))
        ),
        N(h.SpeedDialAction, "fabHoverBg", Cl(h.background.paper, 0.15)),
        N(h.StepConnector, "border", D("palette-grey-400")),
        N(h.StepContent, "border", D("palette-grey-400")),
        N(h.Switch, "defaultColor", D("palette-common-white")),
        N(h.Switch, "defaultDisabledColor", D("palette-grey-100")),
        N(h.Switch, "primaryDisabledColor", Ae(h.primary.main, 0.62)),
        N(h.Switch, "secondaryDisabledColor", Ae(h.secondary.main, 0.62)),
        N(h.Switch, "errorDisabledColor", Ae(h.error.main, 0.62)),
        N(h.Switch, "infoDisabledColor", Ae(h.info.main, 0.62)),
        N(h.Switch, "successDisabledColor", Ae(h.success.main, 0.62)),
        N(h.Switch, "warningDisabledColor", Ae(h.warning.main, 0.62)),
        N(h.TableCell, "border", Ae(wl(h.divider, 1), 0.88)),
        N(h.Tooltip, "bg", wl(h.grey[700], 0.92));
    }
    if (h.mode === "dark") {
      N(h.Alert, "errorColor", Ae(h.error.light, 0.6)),
        N(h.Alert, "infoColor", Ae(h.info.light, 0.6)),
        N(h.Alert, "successColor", Ae(h.success.light, 0.6)),
        N(h.Alert, "warningColor", Ae(h.warning.light, 0.6)),
        N(h.Alert, "errorFilledBg", D("palette-error-dark")),
        N(h.Alert, "infoFilledBg", D("palette-info-dark")),
        N(h.Alert, "successFilledBg", D("palette-success-dark")),
        N(h.Alert, "warningFilledBg", D("palette-warning-dark")),
        N(
          h.Alert,
          "errorFilledColor",
          pn(() => h.getContrastText(h.error.dark))
        ),
        N(
          h.Alert,
          "infoFilledColor",
          pn(() => h.getContrastText(h.info.dark))
        ),
        N(
          h.Alert,
          "successFilledColor",
          pn(() => h.getContrastText(h.success.dark))
        ),
        N(
          h.Alert,
          "warningFilledColor",
          pn(() => h.getContrastText(h.warning.dark))
        ),
        N(h.Alert, "errorStandardBg", ze(h.error.light, 0.9)),
        N(h.Alert, "infoStandardBg", ze(h.info.light, 0.9)),
        N(h.Alert, "successStandardBg", ze(h.success.light, 0.9)),
        N(h.Alert, "warningStandardBg", ze(h.warning.light, 0.9)),
        N(h.Alert, "errorIconColor", D("palette-error-main")),
        N(h.Alert, "infoIconColor", D("palette-info-main")),
        N(h.Alert, "successIconColor", D("palette-success-main")),
        N(h.Alert, "warningIconColor", D("palette-warning-main")),
        N(h.AppBar, "defaultBg", D("palette-grey-900")),
        N(h.AppBar, "darkBg", D("palette-background-paper")),
        N(h.AppBar, "darkColor", D("palette-text-primary")),
        N(h.Avatar, "defaultBg", D("palette-grey-600")),
        N(h.Button, "inheritContainedBg", D("palette-grey-800")),
        N(h.Button, "inheritContainedHoverBg", D("palette-grey-700")),
        N(h.Chip, "defaultBorder", D("palette-grey-700")),
        N(h.Chip, "defaultAvatarColor", D("palette-grey-300")),
        N(h.Chip, "defaultIconColor", D("palette-grey-300")),
        N(h.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        N(h.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        N(h.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        N(h.LinearProgress, "primaryBg", ze(h.primary.main, 0.5)),
        N(h.LinearProgress, "secondaryBg", ze(h.secondary.main, 0.5)),
        N(h.LinearProgress, "errorBg", ze(h.error.main, 0.5)),
        N(h.LinearProgress, "infoBg", ze(h.info.main, 0.5)),
        N(h.LinearProgress, "successBg", ze(h.success.main, 0.5)),
        N(h.LinearProgress, "warningBg", ze(h.warning.main, 0.5)),
        N(h.Skeleton, "bg", `rgba(${D("palette-text-primaryChannel")} / 0.13)`),
        N(h.Slider, "primaryTrack", ze(h.primary.main, 0.5)),
        N(h.Slider, "secondaryTrack", ze(h.secondary.main, 0.5)),
        N(h.Slider, "errorTrack", ze(h.error.main, 0.5)),
        N(h.Slider, "infoTrack", ze(h.info.main, 0.5)),
        N(h.Slider, "successTrack", ze(h.success.main, 0.5)),
        N(h.Slider, "warningTrack", ze(h.warning.main, 0.5));
      const J = Cl(h.background.default, 0.98);
      N(h.SnackbarContent, "bg", J),
        N(
          h.SnackbarContent,
          "color",
          pn(() => h.getContrastText(J))
        ),
        N(h.SpeedDialAction, "fabHoverBg", Cl(h.background.paper, 0.15)),
        N(h.StepConnector, "border", D("palette-grey-600")),
        N(h.StepContent, "border", D("palette-grey-600")),
        N(h.Switch, "defaultColor", D("palette-grey-300")),
        N(h.Switch, "defaultDisabledColor", D("palette-grey-600")),
        N(h.Switch, "primaryDisabledColor", ze(h.primary.main, 0.55)),
        N(h.Switch, "secondaryDisabledColor", ze(h.secondary.main, 0.55)),
        N(h.Switch, "errorDisabledColor", ze(h.error.main, 0.55)),
        N(h.Switch, "infoDisabledColor", ze(h.info.main, 0.55)),
        N(h.Switch, "successDisabledColor", ze(h.success.main, 0.55)),
        N(h.Switch, "warningDisabledColor", ze(h.warning.main, 0.55)),
        N(h.TableCell, "border", ze(wl(h.divider, 1), 0.68)),
        N(h.Tooltip, "bg", wl(h.grey[700], 0.92));
    }
    Pn(h.background, "default"),
      Pn(h.background, "paper"),
      Pn(h.common, "background"),
      Pn(h.common, "onBackground"),
      Pn(h, "divider"),
      Object.keys(h).forEach((J) => {
        const q = h[J];
        J !== "tonalOffset" &&
          q &&
          typeof q == "object" &&
          (q.main && N(h[J], "mainChannel", Xo(Yo(q.main))),
          q.light && N(h[J], "lightChannel", Xo(Yo(q.light))),
          q.dark && N(h[J], "darkChannel", Xo(Yo(q.dark))),
          q.contrastText &&
            N(h[J], "contrastTextChannel", Xo(Yo(q.contrastText))),
          J === "text" && (Pn(h[J], "primary"), Pn(h[J], "secondary")),
          J === "action" &&
            (q.active && Pn(h[J], "active"),
            q.selected && Pn(h[J], "selected")));
      });
  }),
    (z = o.reduce((ge, h) => Bt(ge, h), z));
  const _ = {
      prefix: f,
      disableCssColorScheme: u,
      shouldSkipGeneratingVar: p,
      getSelector: hv(z),
    },
    { vars: G, generateThemeVars: K, generateStyleSheets: ue } = R0(z, _);
  return (
    (z.vars = G),
    Object.entries(z.colorSchemes[z.defaultColorScheme]).forEach(([ge, h]) => {
      z[ge] = h;
    }),
    (z.generateThemeVars = K),
    (z.generateStyleSheets = ue),
    (z.generateSpacing = function () {
      return vp(v.spacing, gu(this));
    }),
    (z.getColorSchemeSelector = b0(m)),
    (z.spacing = z.generateSpacing()),
    (z.shouldSkipGeneratingVar = p),
    (z.unstable_sxConfig = {
      ...li,
      ...(v == null ? void 0 : v.unstable_sxConfig),
    }),
    (z.unstable_sx = function (h) {
      return wr({ sx: h, theme: this });
    }),
    (z.toRuntimeSource = Op),
    z
  );
}
function Kd(n, o, l) {
  n.colorSchemes &&
    l &&
    (n.colorSchemes[o] = {
      ...(l !== !0 && l),
      palette: ku({ ...(l === !0 ? {} : l.palette), mode: o }),
    });
}
function Ap(n = {}, ...o) {
  const {
      palette: l,
      cssVariables: s = !1,
      colorSchemes: u = l ? void 0 : { light: !0 },
      defaultColorScheme: f = l == null ? void 0 : l.mode,
      ...p
    } = n,
    m = f || "light",
    y = u == null ? void 0 : u[m],
    v = {
      ...u,
      ...(l
        ? { [m]: { ...(typeof y != "boolean" && y), palette: l } }
        : void 0),
    };
  if (s === !1) {
    if (!("colorSchemes" in n)) return eu(n, ...o);
    let k = l;
    "palette" in n ||
      (v[m] &&
        (v[m] !== !0
          ? (k = v[m].palette)
          : m === "dark" && (k = { mode: "dark" })));
    const C = eu({ ...n, palette: k }, ...o);
    return (
      (C.defaultColorScheme = m),
      (C.colorSchemes = v),
      C.palette.mode === "light" &&
        ((C.colorSchemes.light = {
          ...(v.light !== !0 && v.light),
          palette: C.palette,
        }),
        Kd(C, "dark", v.dark)),
      C.palette.mode === "dark" &&
        ((C.colorSchemes.dark = {
          ...(v.dark !== !0 && v.dark),
          palette: C.palette,
        }),
        Kd(C, "light", v.light)),
      C
    );
  }
  return (
    !l && !("light" in v) && m === "light" && (v.light = !0),
    Sv(
      {
        ...p,
        colorSchemes: v,
        defaultColorScheme: m,
        ...(typeof s != "boolean" && s),
      },
      ...o
    )
  );
}
const Lp = Ap();
function Eu() {
  const n = Xl(Lp);
  return n[lu] || n;
}
function wv(n) {
  return n !== "ownerState" && n !== "theme" && n !== "sx" && n !== "as";
}
const Cv = (n) => wv(n) && n !== "classes",
  Je = kp({ themeId: lu, defaultTheme: Lp, rootShouldForwardProp: Cv });
function xv() {
  return vu;
}
const Jn = k0;
function _t(n) {
  return x0(n);
}
function kv(n) {
  return bt("MuiSvgIcon", n);
}
$t("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const Ev = (n) => {
    const { color: o, fontSize: l, classes: s } = n,
      u = {
        root: ["root", o !== "inherit" && `color${ye(o)}`, `fontSize${ye(l)}`],
      };
    return jt(u, kv, s);
  },
  Tv = Je("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n;
      return [
        o.root,
        l.color !== "inherit" && o[`color${ye(l.color)}`],
        o[`fontSize${ye(l.fontSize)}`],
      ];
    },
  })(
    Jn(({ theme: n }) => {
      var o, l, s, u, f, p, m, y, v, k, C, E, M, $;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition:
          (u = (o = n.transitions) == null ? void 0 : o.create) == null
            ? void 0
            : u.call(o, "fill", {
                duration:
                  (s =
                    (l = (n.vars ?? n).transitions) == null
                      ? void 0
                      : l.duration) == null
                    ? void 0
                    : s.shorter,
              }),
        variants: [
          { props: (R) => !R.hasSvgAsChild, style: { fill: "currentColor" } },
          { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
          {
            props: { fontSize: "small" },
            style: {
              fontSize:
                ((p = (f = n.typography) == null ? void 0 : f.pxToRem) == null
                  ? void 0
                  : p.call(f, 20)) || "1.25rem",
            },
          },
          {
            props: { fontSize: "medium" },
            style: {
              fontSize:
                ((y = (m = n.typography) == null ? void 0 : m.pxToRem) == null
                  ? void 0
                  : y.call(m, 24)) || "1.5rem",
            },
          },
          {
            props: { fontSize: "large" },
            style: {
              fontSize:
                ((k = (v = n.typography) == null ? void 0 : v.pxToRem) == null
                  ? void 0
                  : k.call(v, 35)) || "2.1875rem",
            },
          },
          ...Object.entries((n.vars ?? n).palette)
            .filter(([, R]) => R && R.main)
            .map(([R]) => {
              var O, F;
              return {
                props: { color: R },
                style: {
                  color:
                    (F = (O = (n.vars ?? n).palette) == null ? void 0 : O[R]) ==
                    null
                      ? void 0
                      : F.main,
                },
              };
            }),
          {
            props: { color: "action" },
            style: {
              color:
                (E = (C = (n.vars ?? n).palette) == null ? void 0 : C.action) ==
                null
                  ? void 0
                  : E.active,
            },
          },
          {
            props: { color: "disabled" },
            style: {
              color:
                ($ = (M = (n.vars ?? n).palette) == null ? void 0 : M.action) ==
                null
                  ? void 0
                  : $.disabled,
            },
          },
          { props: { color: "inherit" }, style: { color: void 0 } },
        ],
      };
    })
  ),
  nu = I.forwardRef(function (o, l) {
    const s = _t({ props: o, name: "MuiSvgIcon" }),
      {
        children: u,
        className: f,
        color: p = "inherit",
        component: m = "svg",
        fontSize: y = "medium",
        htmlColor: v,
        inheritViewBox: k = !1,
        titleAccess: C,
        viewBox: E = "0 0 24 24",
        ...M
      } = s,
      $ = I.isValidElement(u) && u.type === "svg",
      R = {
        ...s,
        color: p,
        component: m,
        fontSize: y,
        instanceFontSize: o.fontSize,
        inheritViewBox: k,
        viewBox: E,
        hasSvgAsChild: $,
      },
      O = {};
    k || (O.viewBox = E);
    const F = Ev(R);
    return te.jsxs(Tv, {
      as: m,
      className: Ee(F.root, f),
      focusable: "false",
      color: v,
      "aria-hidden": C ? void 0 : !0,
      role: C ? "img" : void 0,
      ref: l,
      ...O,
      ...M,
      ...($ && u.props),
      ownerState: R,
      children: [
        $ ? u.props.children : u,
        C ? te.jsx("title", { children: C }) : null,
      ],
    });
  });
nu.muiName = "SvgIcon";
function Tu(n, o) {
  function l(s, u) {
    return te.jsx(nu, { "data-testid": `${o}Icon`, ref: u, ...s, children: n });
  }
  return (l.muiName = nu.muiName), I.memo(I.forwardRef(l));
}
function Pv(n, o) {
  if (n == null) return {};
  var l = {};
  for (var s in n)
    if ({}.hasOwnProperty.call(n, s)) {
      if (o.includes(s)) continue;
      l[s] = n[s];
    }
  return l;
}
function ru(n, o) {
  return (
    (ru = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (l, s) {
          return (l.__proto__ = s), l;
        }),
    ru(n, o)
  );
}
function Rv(n, o) {
  (n.prototype = Object.create(o.prototype)),
    (n.prototype.constructor = n),
    ru(n, o);
}
const Qd = qr.createContext(null);
function bv(n) {
  if (n === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return n;
}
function Pu(n, o) {
  var l = function (f) {
      return o && I.isValidElement(f) ? o(f) : f;
    },
    s = Object.create(null);
  return (
    n &&
      I.Children.map(n, function (u) {
        return u;
      }).forEach(function (u) {
        s[u.key] = l(u);
      }),
    s
  );
}
function $v(n, o) {
  (n = n || {}), (o = o || {});
  function l(k) {
    return k in o ? o[k] : n[k];
  }
  var s = Object.create(null),
    u = [];
  for (var f in n) f in o ? u.length && ((s[f] = u), (u = [])) : u.push(f);
  var p,
    m = {};
  for (var y in o) {
    if (s[y])
      for (p = 0; p < s[y].length; p++) {
        var v = s[y][p];
        m[s[y][p]] = l(v);
      }
    m[y] = l(y);
  }
  for (p = 0; p < u.length; p++) m[u[p]] = l(u[p]);
  return m;
}
function yr(n, o, l) {
  return l[o] != null ? l[o] : n.props[o];
}
function _v(n, o) {
  return Pu(n.children, function (l) {
    return I.cloneElement(l, {
      onExited: o.bind(null, l),
      in: !0,
      appear: yr(l, "appear", n),
      enter: yr(l, "enter", n),
      exit: yr(l, "exit", n),
    });
  });
}
function Nv(n, o, l) {
  var s = Pu(n.children),
    u = $v(o, s);
  return (
    Object.keys(u).forEach(function (f) {
      var p = u[f];
      if (I.isValidElement(p)) {
        var m = f in o,
          y = f in s,
          v = o[f],
          k = I.isValidElement(v) && !v.props.in;
        y && (!m || k)
          ? (u[f] = I.cloneElement(p, {
              onExited: l.bind(null, p),
              in: !0,
              exit: yr(p, "exit", n),
              enter: yr(p, "enter", n),
            }))
          : !y && m && !k
          ? (u[f] = I.cloneElement(p, { in: !1 }))
          : y &&
            m &&
            I.isValidElement(v) &&
            (u[f] = I.cloneElement(p, {
              onExited: l.bind(null, p),
              in: v.props.in,
              exit: yr(p, "exit", n),
              enter: yr(p, "enter", n),
            }));
      }
    }),
    u
  );
}
var Mv =
    Object.values ||
    function (n) {
      return Object.keys(n).map(function (o) {
        return n[o];
      });
    },
  Ov = {
    component: "div",
    childFactory: function (o) {
      return o;
    },
  },
  Ru = (function (n) {
    Rv(o, n);
    function o(s, u) {
      var f;
      f = n.call(this, s, u) || this;
      var p = f.handleExited.bind(bv(f));
      return (
        (f.state = {
          contextValue: { isMounting: !0 },
          handleExited: p,
          firstRender: !0,
        }),
        f
      );
    }
    var l = o.prototype;
    return (
      (l.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (l.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (o.getDerivedStateFromProps = function (u, f) {
        var p = f.children,
          m = f.handleExited,
          y = f.firstRender;
        return { children: y ? _v(u, m) : Nv(u, p, m), firstRender: !1 };
      }),
      (l.handleExited = function (u, f) {
        var p = Pu(this.props.children);
        u.key in p ||
          (u.props.onExited && u.props.onExited(f),
          this.mounted &&
            this.setState(function (m) {
              var y = bl({}, m.children);
              return delete y[u.key], { children: y };
            }));
      }),
      (l.render = function () {
        var u = this.props,
          f = u.component,
          p = u.childFactory,
          m = Pv(u, ["component", "childFactory"]),
          y = this.state.contextValue,
          v = Mv(this.state.children).map(p);
        return (
          delete m.appear,
          delete m.enter,
          delete m.exit,
          f === null
            ? qr.createElement(Qd.Provider, { value: y }, v)
            : qr.createElement(
                Qd.Provider,
                { value: y },
                qr.createElement(f, m, v)
              )
        );
      }),
      o
    );
  })(qr.Component);
Ru.propTypes = {};
Ru.defaultProps = Ov;
function Iv(n) {
  return bt("MuiPaper", n);
}
$t("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const zv = (n) => {
    const { square: o, elevation: l, variant: s, classes: u } = n,
      f = {
        root: [
          "root",
          s,
          !o && "rounded",
          s === "elevation" && `elevation${l}`,
        ],
      };
    return jt(f, Iv, u);
  },
  Av = Je("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n;
      return [
        o.root,
        o[l.variant],
        !l.square && o.rounded,
        l.variant === "elevation" && o[`elevation${l.elevation}`],
      ];
    },
  })(
    Jn(({ theme: n }) => ({
      backgroundColor: (n.vars || n).palette.background.paper,
      color: (n.vars || n).palette.text.primary,
      transition: n.transitions.create("box-shadow"),
      variants: [
        {
          props: ({ ownerState: o }) => !o.square,
          style: { borderRadius: n.shape.borderRadius },
        },
        {
          props: { variant: "outlined" },
          style: { border: `1px solid ${(n.vars || n).palette.divider}` },
        },
        {
          props: { variant: "elevation" },
          style: {
            boxShadow: "var(--Paper-shadow)",
            backgroundImage: "var(--Paper-overlay)",
          },
        },
      ],
    }))
  ),
  Lv = I.forwardRef(function (o, l) {
    var M;
    const s = _t({ props: o, name: "MuiPaper" }),
      u = Eu(),
      {
        className: f,
        component: p = "div",
        elevation: m = 1,
        square: y = !1,
        variant: v = "elevation",
        ...k
      } = s,
      C = { ...s, component: p, elevation: m, square: y, variant: v },
      E = zv(C);
    return te.jsx(Av, {
      as: p,
      ownerState: C,
      className: Ee(E.root, f),
      ref: l,
      ...k,
      style: {
        ...(v === "elevation" && {
          "--Paper-shadow": (u.vars || u).shadows[m],
          ...(u.vars && {
            "--Paper-overlay": (M = u.vars.overlays) == null ? void 0 : M[m],
          }),
          ...(!u.vars &&
            u.palette.mode === "dark" && {
              "--Paper-overlay": `linear-gradient(${zt("#fff", tu(m))}, ${zt(
                "#fff",
                tu(m)
              )})`,
            }),
        }),
        ...k.style,
      },
    });
  });
class zl {
  constructor() {
    Ho(this, "mountEffect", () => {
      this.shouldMount &&
        !this.didMount &&
        this.ref.current !== null &&
        ((this.didMount = !0), this.mounted.resolve());
    });
    (this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null);
  }
  static create() {
    return new zl();
  }
  static use() {
    const o = $p(zl.create).current,
      [l, s] = I.useState(!1);
    return (
      (o.shouldMount = l),
      (o.setShouldMount = s),
      I.useEffect(o.mountEffect, [l]),
      o
    );
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = jv()),
        (this.shouldMount = !0),
        this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  start(...o) {
    this.mount().then(() => {
      var l;
      return (l = this.ref.current) == null ? void 0 : l.start(...o);
    });
  }
  stop(...o) {
    this.mount().then(() => {
      var l;
      return (l = this.ref.current) == null ? void 0 : l.stop(...o);
    });
  }
  pulsate(...o) {
    this.mount().then(() => {
      var l;
      return (l = this.ref.current) == null ? void 0 : l.pulsate(...o);
    });
  }
}
function Bv() {
  return zl.use();
}
function jv() {
  let n, o;
  const l = new Promise((s, u) => {
    (n = s), (o = u);
  });
  return (l.resolve = n), (l.reject = o), l;
}
function Dv(n) {
  const {
      className: o,
      classes: l,
      pulsate: s = !1,
      rippleX: u,
      rippleY: f,
      rippleSize: p,
      in: m,
      onExited: y,
      timeout: v,
    } = n,
    [k, C] = I.useState(!1),
    E = Ee(o, l.ripple, l.rippleVisible, s && l.ripplePulsate),
    M = { width: p, height: p, top: -(p / 2) + f, left: -(p / 2) + u },
    $ = Ee(l.child, k && l.childLeaving, s && l.childPulsate);
  return (
    !m && !k && C(!0),
    I.useEffect(() => {
      if (!m && y != null) {
        const R = setTimeout(y, v);
        return () => {
          clearTimeout(R);
        };
      }
    }, [y, m, v]),
    te.jsx("span", {
      className: E,
      style: M,
      children: te.jsx("span", { className: $ }),
    })
  );
}
const Xt = $t("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  ou = 550,
  Fv = 80,
  Wv = pu`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  Vv = pu`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  Uv = pu`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  Hv = Je("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  Gv = Je(Dv, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${Xt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Wv};
    animation-duration: ${ou}ms;
    animation-timing-function: ${({ theme: n }) =>
      n.transitions.easing.easeInOut};
  }

  &.${Xt.ripplePulsate} {
    animation-duration: ${({ theme: n }) => n.transitions.duration.shorter}ms;
  }

  & .${Xt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Xt.childLeaving} {
    opacity: 0;
    animation-name: ${Vv};
    animation-duration: ${ou}ms;
    animation-timing-function: ${({ theme: n }) =>
      n.transitions.easing.easeInOut};
  }

  & .${Xt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Uv};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: n }) =>
      n.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  Kv = I.forwardRef(function (o, l) {
    const s = _t({ props: o, name: "MuiTouchRipple" }),
      { center: u = !1, classes: f = {}, className: p, ...m } = s,
      [y, v] = I.useState([]),
      k = I.useRef(0),
      C = I.useRef(null);
    I.useEffect(() => {
      C.current && (C.current(), (C.current = null));
    }, [y]);
    const E = I.useRef(!1),
      M = p0(),
      $ = I.useRef(null),
      R = I.useRef(null),
      O = I.useCallback(
        (z) => {
          const {
            pulsate: _,
            rippleX: G,
            rippleY: K,
            rippleSize: ue,
            cb: ge,
          } = z;
          v((h) => [
            ...h,
            te.jsx(
              Gv,
              {
                classes: {
                  ripple: Ee(f.ripple, Xt.ripple),
                  rippleVisible: Ee(f.rippleVisible, Xt.rippleVisible),
                  ripplePulsate: Ee(f.ripplePulsate, Xt.ripplePulsate),
                  child: Ee(f.child, Xt.child),
                  childLeaving: Ee(f.childLeaving, Xt.childLeaving),
                  childPulsate: Ee(f.childPulsate, Xt.childPulsate),
                },
                timeout: ou,
                pulsate: _,
                rippleX: G,
                rippleY: K,
                rippleSize: ue,
              },
              k.current
            ),
          ]),
            (k.current += 1),
            (C.current = ge);
        },
        [f]
      ),
      F = I.useCallback(
        (z = {}, _ = {}, G = () => {}) => {
          const {
            pulsate: K = !1,
            center: ue = u || _.pulsate,
            fakeElement: ge = !1,
          } = _;
          if ((z == null ? void 0 : z.type) === "mousedown" && E.current) {
            E.current = !1;
            return;
          }
          (z == null ? void 0 : z.type) === "touchstart" && (E.current = !0);
          const h = ge ? null : R.current,
            D = h
              ? h.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let J, q, oe;
          if (
            ue ||
            z === void 0 ||
            (z.clientX === 0 && z.clientY === 0) ||
            (!z.clientX && !z.touches)
          )
            (J = Math.round(D.width / 2)), (q = Math.round(D.height / 2));
          else {
            const { clientX: we, clientY: ve } =
              z.touches && z.touches.length > 0 ? z.touches[0] : z;
            (J = Math.round(we - D.left)), (q = Math.round(ve - D.top));
          }
          if (ue)
            (oe = Math.sqrt((2 * D.width ** 2 + D.height ** 2) / 3)),
              oe % 2 === 0 && (oe += 1);
          else {
            const we =
                Math.max(Math.abs((h ? h.clientWidth : 0) - J), J) * 2 + 2,
              ve = Math.max(Math.abs((h ? h.clientHeight : 0) - q), q) * 2 + 2;
            oe = Math.sqrt(we ** 2 + ve ** 2);
          }
          z != null && z.touches
            ? $.current === null &&
              (($.current = () => {
                O({
                  pulsate: K,
                  rippleX: J,
                  rippleY: q,
                  rippleSize: oe,
                  cb: G,
                });
              }),
              M.start(Fv, () => {
                $.current && ($.current(), ($.current = null));
              }))
            : O({ pulsate: K, rippleX: J, rippleY: q, rippleSize: oe, cb: G });
        },
        [u, O, M]
      ),
      X = I.useCallback(() => {
        F({}, { pulsate: !0 });
      }, [F]),
      H = I.useCallback(
        (z, _) => {
          if (
            (M.clear(),
            (z == null ? void 0 : z.type) === "touchend" && $.current)
          ) {
            $.current(),
              ($.current = null),
              M.start(0, () => {
                H(z, _);
              });
            return;
          }
          ($.current = null),
            v((G) => (G.length > 0 ? G.slice(1) : G)),
            (C.current = _);
        },
        [M]
      );
    return (
      I.useImperativeHandle(l, () => ({ pulsate: X, start: F, stop: H }), [
        X,
        F,
        H,
      ]),
      te.jsx(Hv, {
        className: Ee(Xt.root, f.root, p),
        ref: R,
        ...m,
        children: te.jsx(Ru, { component: null, exit: !0, children: y }),
      })
    );
  });
function Qv(n) {
  return bt("MuiButtonBase", n);
}
const Xv = $t("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  Yv = (n) => {
    const {
        disabled: o,
        focusVisible: l,
        focusVisibleClassName: s,
        classes: u,
      } = n,
      p = jt({ root: ["root", o && "disabled", l && "focusVisible"] }, Qv, u);
    return l && s && (p.root += ` ${s}`), p;
  },
  qv = Je("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (n, o) => o.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${Xv.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  Al = I.forwardRef(function (o, l) {
    const s = _t({ props: o, name: "MuiButtonBase" }),
      {
        action: u,
        centerRipple: f = !1,
        children: p,
        className: m,
        component: y = "button",
        disabled: v = !1,
        disableRipple: k = !1,
        disableTouchRipple: C = !1,
        focusRipple: E = !1,
        focusVisibleClassName: M,
        LinkComponent: $ = "a",
        onBlur: R,
        onClick: O,
        onContextMenu: F,
        onDragLeave: X,
        onFocus: H,
        onFocusVisible: z,
        onKeyDown: _,
        onKeyUp: G,
        onMouseDown: K,
        onMouseLeave: ue,
        onMouseUp: ge,
        onTouchEnd: h,
        onTouchMove: D,
        onTouchStart: J,
        tabIndex: q = 0,
        TouchRippleProps: oe,
        touchRippleRef: we,
        type: ve,
        ...he
      } = s,
      V = I.useRef(null),
      W = Bv(),
      Q = Ml(W.ref, we),
      [w, A] = I.useState(!1);
    v && w && A(!1),
      I.useImperativeHandle(
        u,
        () => ({
          focusVisible: () => {
            A(!0), V.current.focus();
          },
        }),
        []
      );
    const de = W.shouldMount && !k && !v;
    I.useEffect(() => {
      w && E && !k && W.pulsate();
    }, [k, E, w, W]);
    const pe = Rn(W, "start", K, C),
      xe = Rn(W, "stop", F, C),
      me = Rn(W, "stop", X, C),
      $e = Rn(W, "stop", ge, C),
      Te = Rn(
        W,
        "stop",
        (fe) => {
          w && fe.preventDefault(), ue && ue(fe);
        },
        C
      ),
      Ie = Rn(W, "start", J, C),
      nt = Rn(W, "stop", h, C),
      $n = Rn(W, "stop", D, C),
      er = Rn(
        W,
        "stop",
        (fe) => {
          Ld(fe.target) || A(!1), R && R(fe);
        },
        !1
      ),
      _n = vr((fe) => {
        V.current || (V.current = fe.currentTarget),
          Ld(fe.target) && (A(!0), z && z(fe)),
          H && H(fe);
      }),
      ln = () => {
        const fe = V.current;
        return y && y !== "button" && !(fe.tagName === "A" && fe.href);
      },
      Cr = vr((fe) => {
        E &&
          !fe.repeat &&
          w &&
          fe.key === " " &&
          W.stop(fe, () => {
            W.start(fe);
          }),
          fe.target === fe.currentTarget &&
            ln() &&
            fe.key === " " &&
            fe.preventDefault(),
          _ && _(fe),
          fe.target === fe.currentTarget &&
            ln() &&
            fe.key === "Enter" &&
            !v &&
            (fe.preventDefault(), O && O(fe));
      }),
      tr = vr((fe) => {
        E &&
          fe.key === " " &&
          w &&
          !fe.defaultPrevented &&
          W.stop(fe, () => {
            W.pulsate(fe);
          }),
          G && G(fe),
          O &&
            fe.target === fe.currentTarget &&
            ln() &&
            fe.key === " " &&
            !fe.defaultPrevented &&
            O(fe);
      });
    let rt = y;
    rt === "button" && (he.href || he.to) && (rt = $);
    const ct = {};
    rt === "button"
      ? ((ct.type = ve === void 0 ? "button" : ve), (ct.disabled = v))
      : (!he.href && !he.to && (ct.role = "button"),
        v && (ct["aria-disabled"] = v));
    const Nn = Ml(l, V),
      vt = {
        ...s,
        centerRipple: f,
        component: y,
        disabled: v,
        disableRipple: k,
        disableTouchRipple: C,
        focusRipple: E,
        tabIndex: q,
        focusVisible: w,
      },
      Dt = Yv(vt);
    return te.jsxs(qv, {
      as: rt,
      className: Ee(Dt.root, m),
      ownerState: vt,
      onBlur: er,
      onClick: O,
      onContextMenu: xe,
      onFocus: _n,
      onKeyDown: Cr,
      onKeyUp: tr,
      onMouseDown: pe,
      onMouseLeave: Te,
      onMouseUp: $e,
      onDragLeave: me,
      onTouchEnd: nt,
      onTouchMove: $n,
      onTouchStart: Ie,
      ref: Nn,
      tabIndex: v ? -1 : q,
      type: ve,
      ...ct,
      ...he,
      children: [p, de ? te.jsx(Kv, { ref: Q, center: f, ...oe }) : null],
    });
  });
function Rn(n, o, l, s = !1) {
  return vr((u) => (l && l(u), s || n[o](u), !0));
}
function Zv(n) {
  return typeof n.main == "string";
}
function Jv(n, o = []) {
  if (!Zv(n)) return !1;
  for (const l of o)
    if (!n.hasOwnProperty(l) || typeof n[l] != "string") return !1;
  return !0;
}
function qo(n = []) {
  return ([, o]) => o && Jv(o, n);
}
function e1(n) {
  return bt("MuiTypography", n);
}
$t("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const t1 = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  n1 = xv(),
  r1 = (n) => {
    const {
        align: o,
        gutterBottom: l,
        noWrap: s,
        paragraph: u,
        variant: f,
        classes: p,
      } = n,
      m = {
        root: [
          "root",
          f,
          n.align !== "inherit" && `align${ye(o)}`,
          l && "gutterBottom",
          s && "noWrap",
          u && "paragraph",
        ],
      };
    return jt(m, e1, p);
  },
  o1 = Je("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n;
      return [
        o.root,
        l.variant && o[l.variant],
        l.align !== "inherit" && o[`align${ye(l.align)}`],
        l.noWrap && o.noWrap,
        l.gutterBottom && o.gutterBottom,
        l.paragraph && o.paragraph,
      ];
    },
  })(
    Jn(({ theme: n }) => {
      var o;
      return {
        margin: 0,
        variants: [
          {
            props: { variant: "inherit" },
            style: {
              font: "inherit",
              lineHeight: "inherit",
              letterSpacing: "inherit",
            },
          },
          ...Object.entries(n.typography)
            .filter(([l, s]) => l !== "inherit" && s && typeof s == "object")
            .map(([l, s]) => ({ props: { variant: l }, style: s })),
          ...Object.entries(n.palette)
            .filter(qo())
            .map(([l]) => ({
              props: { color: l },
              style: { color: (n.vars || n).palette[l].main },
            })),
          ...Object.entries(((o = n.palette) == null ? void 0 : o.text) || {})
            .filter(([, l]) => typeof l == "string")
            .map(([l]) => ({
              props: { color: `text${ye(l)}` },
              style: { color: (n.vars || n).palette.text[l] },
            })),
          {
            props: ({ ownerState: l }) => l.align !== "inherit",
            style: { textAlign: "var(--Typography-textAlign)" },
          },
          {
            props: ({ ownerState: l }) => l.noWrap,
            style: {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          },
          {
            props: ({ ownerState: l }) => l.gutterBottom,
            style: { marginBottom: "0.35em" },
          },
          {
            props: ({ ownerState: l }) => l.paragraph,
            style: { marginBottom: 16 },
          },
        ],
      };
    })
  ),
  Xd = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  Rl = I.forwardRef(function (o, l) {
    const { color: s, ...u } = _t({ props: o, name: "MuiTypography" }),
      f = !t1[s],
      p = n1({ ...u, ...(f && { color: s }) }),
      {
        align: m = "inherit",
        className: y,
        component: v,
        gutterBottom: k = !1,
        noWrap: C = !1,
        paragraph: E = !1,
        variant: M = "body1",
        variantMapping: $ = Xd,
        ...R
      } = p,
      O = {
        ...p,
        align: m,
        color: s,
        className: y,
        component: v,
        gutterBottom: k,
        noWrap: C,
        paragraph: E,
        variant: M,
        variantMapping: $,
      },
      F = v || (E ? "p" : $[M] || Xd[M]) || "span",
      X = r1(O);
    return te.jsx(o1, {
      as: F,
      ref: l,
      className: Ee(X.root, y),
      ...R,
      ownerState: O,
      style: {
        ...(m !== "inherit" && { "--Typography-textAlign": m }),
        ...R.style,
      },
    });
  }),
  i1 = Tu(
    te.jsx("path", {
      d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
    }),
    "Cancel"
  );
function l1(n) {
  return bt("MuiChip", n);
}
const Ce = $t("MuiChip", [
    "root",
    "sizeSmall",
    "sizeMedium",
    "colorDefault",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "clickable",
    "clickableColorPrimary",
    "clickableColorSecondary",
    "deletable",
    "deletableColorPrimary",
    "deletableColorSecondary",
    "outlined",
    "filled",
    "outlinedPrimary",
    "outlinedSecondary",
    "filledPrimary",
    "filledSecondary",
    "avatar",
    "avatarSmall",
    "avatarMedium",
    "avatarColorPrimary",
    "avatarColorSecondary",
    "icon",
    "iconSmall",
    "iconMedium",
    "iconColorPrimary",
    "iconColorSecondary",
    "label",
    "labelSmall",
    "labelMedium",
    "deleteIcon",
    "deleteIconSmall",
    "deleteIconMedium",
    "deleteIconColorPrimary",
    "deleteIconColorSecondary",
    "deleteIconOutlinedColorPrimary",
    "deleteIconOutlinedColorSecondary",
    "deleteIconFilledColorPrimary",
    "deleteIconFilledColorSecondary",
    "focusVisible",
  ]),
  a1 = (n) => {
    const {
        classes: o,
        disabled: l,
        size: s,
        color: u,
        iconColor: f,
        onDelete: p,
        clickable: m,
        variant: y,
      } = n,
      v = {
        root: [
          "root",
          y,
          l && "disabled",
          `size${ye(s)}`,
          `color${ye(u)}`,
          m && "clickable",
          m && `clickableColor${ye(u)}`,
          p && "deletable",
          p && `deletableColor${ye(u)}`,
          `${y}${ye(u)}`,
        ],
        label: ["label", `label${ye(s)}`],
        avatar: ["avatar", `avatar${ye(s)}`, `avatarColor${ye(u)}`],
        icon: ["icon", `icon${ye(s)}`, `iconColor${ye(f)}`],
        deleteIcon: [
          "deleteIcon",
          `deleteIcon${ye(s)}`,
          `deleteIconColor${ye(u)}`,
          `deleteIcon${ye(y)}Color${ye(u)}`,
        ],
      };
    return jt(v, l1, o);
  },
  s1 = Je("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n,
        {
          color: s,
          iconColor: u,
          clickable: f,
          onDelete: p,
          size: m,
          variant: y,
        } = l;
      return [
        { [`& .${Ce.avatar}`]: o.avatar },
        { [`& .${Ce.avatar}`]: o[`avatar${ye(m)}`] },
        { [`& .${Ce.avatar}`]: o[`avatarColor${ye(s)}`] },
        { [`& .${Ce.icon}`]: o.icon },
        { [`& .${Ce.icon}`]: o[`icon${ye(m)}`] },
        { [`& .${Ce.icon}`]: o[`iconColor${ye(u)}`] },
        { [`& .${Ce.deleteIcon}`]: o.deleteIcon },
        { [`& .${Ce.deleteIcon}`]: o[`deleteIcon${ye(m)}`] },
        { [`& .${Ce.deleteIcon}`]: o[`deleteIconColor${ye(s)}`] },
        { [`& .${Ce.deleteIcon}`]: o[`deleteIcon${ye(y)}Color${ye(s)}`] },
        o.root,
        o[`size${ye(m)}`],
        o[`color${ye(s)}`],
        f && o.clickable,
        f && s !== "default" && o[`clickableColor${ye(s)})`],
        p && o.deletable,
        p && s !== "default" && o[`deletableColor${ye(s)}`],
        o[y],
        o[`${y}${ye(s)}`],
      ];
    },
  })(
    Jn(({ theme: n }) => {
      const o =
        n.palette.mode === "light" ? n.palette.grey[700] : n.palette.grey[300];
      return {
        maxWidth: "100%",
        fontFamily: n.typography.fontFamily,
        fontSize: n.typography.pxToRem(13),
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 32,
        color: (n.vars || n).palette.text.primary,
        backgroundColor: (n.vars || n).palette.action.selected,
        borderRadius: 32 / 2,
        whiteSpace: "nowrap",
        transition: n.transitions.create(["background-color", "box-shadow"]),
        cursor: "unset",
        outline: 0,
        textDecoration: "none",
        border: 0,
        padding: 0,
        verticalAlign: "middle",
        boxSizing: "border-box",
        [`&.${Ce.disabled}`]: {
          opacity: (n.vars || n).palette.action.disabledOpacity,
          pointerEvents: "none",
        },
        [`& .${Ce.avatar}`]: {
          marginLeft: 5,
          marginRight: -6,
          width: 24,
          height: 24,
          color: n.vars ? n.vars.palette.Chip.defaultAvatarColor : o,
          fontSize: n.typography.pxToRem(12),
        },
        [`& .${Ce.avatarColorPrimary}`]: {
          color: (n.vars || n).palette.primary.contrastText,
          backgroundColor: (n.vars || n).palette.primary.dark,
        },
        [`& .${Ce.avatarColorSecondary}`]: {
          color: (n.vars || n).palette.secondary.contrastText,
          backgroundColor: (n.vars || n).palette.secondary.dark,
        },
        [`& .${Ce.avatarSmall}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: n.typography.pxToRem(10),
        },
        [`& .${Ce.icon}`]: { marginLeft: 5, marginRight: -6 },
        [`& .${Ce.deleteIcon}`]: {
          WebkitTapHighlightColor: "transparent",
          color: n.vars
            ? `rgba(${n.vars.palette.text.primaryChannel} / 0.26)`
            : zt(n.palette.text.primary, 0.26),
          fontSize: 22,
          cursor: "pointer",
          margin: "0 5px 0 -6px",
          "&:hover": {
            color: n.vars
              ? `rgba(${n.vars.palette.text.primaryChannel} / 0.4)`
              : zt(n.palette.text.primary, 0.4),
          },
        },
        variants: [
          {
            props: { size: "small" },
            style: {
              height: 24,
              [`& .${Ce.icon}`]: {
                fontSize: 18,
                marginLeft: 4,
                marginRight: -4,
              },
              [`& .${Ce.deleteIcon}`]: {
                fontSize: 16,
                marginRight: 4,
                marginLeft: -4,
              },
            },
          },
          ...Object.entries(n.palette)
            .filter(qo(["contrastText"]))
            .map(([l]) => ({
              props: { color: l },
              style: {
                backgroundColor: (n.vars || n).palette[l].main,
                color: (n.vars || n).palette[l].contrastText,
                [`& .${Ce.deleteIcon}`]: {
                  color: n.vars
                    ? `rgba(${n.vars.palette[l].contrastTextChannel} / 0.7)`
                    : zt(n.palette[l].contrastText, 0.7),
                  "&:hover, &:active": {
                    color: (n.vars || n).palette[l].contrastText,
                  },
                },
              },
            })),
          {
            props: (l) => l.iconColor === l.color,
            style: {
              [`& .${Ce.icon}`]: {
                color: n.vars ? n.vars.palette.Chip.defaultIconColor : o,
              },
            },
          },
          {
            props: (l) => l.iconColor === l.color && l.color !== "default",
            style: { [`& .${Ce.icon}`]: { color: "inherit" } },
          },
          {
            props: { onDelete: !0 },
            style: {
              [`&.${Ce.focusVisible}`]: {
                backgroundColor: n.vars
                  ? `rgba(${n.vars.palette.action.selectedChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.focusOpacity}))`
                  : zt(
                      n.palette.action.selected,
                      n.palette.action.selectedOpacity +
                        n.palette.action.focusOpacity
                    ),
              },
            },
          },
          ...Object.entries(n.palette)
            .filter(qo(["dark"]))
            .map(([l]) => ({
              props: { color: l, onDelete: !0 },
              style: {
                [`&.${Ce.focusVisible}`]: {
                  background: (n.vars || n).palette[l].dark,
                },
              },
            })),
          {
            props: { clickable: !0 },
            style: {
              userSelect: "none",
              WebkitTapHighlightColor: "transparent",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: n.vars
                  ? `rgba(${n.vars.palette.action.selectedChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.hoverOpacity}))`
                  : zt(
                      n.palette.action.selected,
                      n.palette.action.selectedOpacity +
                        n.palette.action.hoverOpacity
                    ),
              },
              [`&.${Ce.focusVisible}`]: {
                backgroundColor: n.vars
                  ? `rgba(${n.vars.palette.action.selectedChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.focusOpacity}))`
                  : zt(
                      n.palette.action.selected,
                      n.palette.action.selectedOpacity +
                        n.palette.action.focusOpacity
                    ),
              },
              "&:active": { boxShadow: (n.vars || n).shadows[1] },
            },
          },
          ...Object.entries(n.palette)
            .filter(qo(["dark"]))
            .map(([l]) => ({
              props: { color: l, clickable: !0 },
              style: {
                [`&:hover, &.${Ce.focusVisible}`]: {
                  backgroundColor: (n.vars || n).palette[l].dark,
                },
              },
            })),
          {
            props: { variant: "outlined" },
            style: {
              backgroundColor: "transparent",
              border: n.vars
                ? `1px solid ${n.vars.palette.Chip.defaultBorder}`
                : `1px solid ${
                    n.palette.mode === "light"
                      ? n.palette.grey[400]
                      : n.palette.grey[700]
                  }`,
              [`&.${Ce.clickable}:hover`]: {
                backgroundColor: (n.vars || n).palette.action.hover,
              },
              [`&.${Ce.focusVisible}`]: {
                backgroundColor: (n.vars || n).palette.action.focus,
              },
              [`& .${Ce.avatar}`]: { marginLeft: 4 },
              [`& .${Ce.avatarSmall}`]: { marginLeft: 2 },
              [`& .${Ce.icon}`]: { marginLeft: 4 },
              [`& .${Ce.iconSmall}`]: { marginLeft: 2 },
              [`& .${Ce.deleteIcon}`]: { marginRight: 5 },
              [`& .${Ce.deleteIconSmall}`]: { marginRight: 3 },
            },
          },
          ...Object.entries(n.palette)
            .filter(qo())
            .map(([l]) => ({
              props: { variant: "outlined", color: l },
              style: {
                color: (n.vars || n).palette[l].main,
                border: `1px solid ${
                  n.vars
                    ? `rgba(${n.vars.palette[l].mainChannel} / 0.7)`
                    : zt(n.palette[l].main, 0.7)
                }`,
                [`&.${Ce.clickable}:hover`]: {
                  backgroundColor: n.vars
                    ? `rgba(${n.vars.palette[l].mainChannel} / ${n.vars.palette.action.hoverOpacity})`
                    : zt(n.palette[l].main, n.palette.action.hoverOpacity),
                },
                [`&.${Ce.focusVisible}`]: {
                  backgroundColor: n.vars
                    ? `rgba(${n.vars.palette[l].mainChannel} / ${n.vars.palette.action.focusOpacity})`
                    : zt(n.palette[l].main, n.palette.action.focusOpacity),
                },
                [`& .${Ce.deleteIcon}`]: {
                  color: n.vars
                    ? `rgba(${n.vars.palette[l].mainChannel} / 0.7)`
                    : zt(n.palette[l].main, 0.7),
                  "&:hover, &:active": { color: (n.vars || n).palette[l].main },
                },
              },
            })),
        ],
      };
    })
  ),
  u1 = Je("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n,
        { size: s } = l;
      return [o.label, o[`label${ye(s)}`]];
    },
  })({
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: "nowrap",
    variants: [
      {
        props: { variant: "outlined" },
        style: { paddingLeft: 11, paddingRight: 11 },
      },
      { props: { size: "small" }, style: { paddingLeft: 8, paddingRight: 8 } },
      {
        props: { size: "small", variant: "outlined" },
        style: { paddingLeft: 7, paddingRight: 7 },
      },
    ],
  });
function Yd(n) {
  return n.key === "Backspace" || n.key === "Delete";
}
const c1 = I.forwardRef(function (o, l) {
    const s = _t({ props: o, name: "MuiChip" }),
      {
        avatar: u,
        className: f,
        clickable: p,
        color: m = "default",
        component: y,
        deleteIcon: v,
        disabled: k = !1,
        icon: C,
        label: E,
        onClick: M,
        onDelete: $,
        onKeyDown: R,
        onKeyUp: O,
        size: F = "medium",
        variant: X = "filled",
        tabIndex: H,
        skipFocusWhenDisabled: z = !1,
        ..._
      } = s,
      G = I.useRef(null),
      K = Ml(G, l),
      ue = (W) => {
        W.stopPropagation(), $ && $(W);
      },
      ge = (W) => {
        W.currentTarget === W.target && Yd(W) && W.preventDefault(), R && R(W);
      },
      h = (W) => {
        W.currentTarget === W.target && $ && Yd(W) && $(W), O && O(W);
      },
      D = p !== !1 && M ? !0 : p,
      J = D || $ ? Al : y || "div",
      q = {
        ...s,
        component: J,
        disabled: k,
        size: F,
        color: m,
        iconColor: (I.isValidElement(C) && C.props.color) || m,
        onDelete: !!$,
        clickable: D,
        variant: X,
      },
      oe = a1(q),
      we =
        J === Al
          ? {
              component: y || "div",
              focusVisibleClassName: oe.focusVisible,
              ...($ && { disableRipple: !0 }),
            }
          : {};
    let ve = null;
    $ &&
      (ve =
        v && I.isValidElement(v)
          ? I.cloneElement(v, {
              className: Ee(v.props.className, oe.deleteIcon),
              onClick: ue,
            })
          : te.jsx(i1, { className: Ee(oe.deleteIcon), onClick: ue }));
    let he = null;
    u &&
      I.isValidElement(u) &&
      (he = I.cloneElement(u, { className: Ee(oe.avatar, u.props.className) }));
    let V = null;
    return (
      C &&
        I.isValidElement(C) &&
        (V = I.cloneElement(C, { className: Ee(oe.icon, C.props.className) })),
      te.jsxs(s1, {
        as: J,
        className: Ee(oe.root, f),
        disabled: D && k ? !0 : void 0,
        onClick: M,
        onKeyDown: ge,
        onKeyUp: h,
        ref: K,
        tabIndex: z && k ? -1 : H,
        ownerState: q,
        ...we,
        ..._,
        children: [
          he || V,
          te.jsx(u1, { className: Ee(oe.label), ownerState: q, children: E }),
          ve,
        ],
      })
    );
  }),
  f1 = $t("MuiBox", ["root"]),
  d1 = Ap(),
  to = Gy({
    themeId: lu,
    defaultTheme: d1,
    defaultClassName: f1.root,
    generateClassName: Sp.generate,
  });
function p1(n) {
  return bt("MuiCard", n);
}
$t("MuiCard", ["root"]);
const m1 = (n) => {
    const { classes: o } = n;
    return jt({ root: ["root"] }, p1, o);
  },
  h1 = Je(Lv, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (n, o) => o.root,
  })({ overflow: "hidden" }),
  g1 = I.forwardRef(function (o, l) {
    const s = _t({ props: o, name: "MuiCard" }),
      { className: u, raised: f = !1, ...p } = s,
      m = { ...s, raised: f },
      y = m1(m);
    return te.jsx(h1, {
      className: Ee(y.root, u),
      elevation: f ? 8 : void 0,
      ref: l,
      ownerState: m,
      ...p,
    });
  });
function y1(n) {
  return bt("MuiCardContent", n);
}
$t("MuiCardContent", ["root"]);
const v1 = (n) => {
    const { classes: o } = n;
    return jt({ root: ["root"] }, y1, o);
  },
  S1 = Je("div", {
    name: "MuiCardContent",
    slot: "Root",
    overridesResolver: (n, o) => o.root,
  })({ padding: 16, "&:last-child": { paddingBottom: 24 } }),
  w1 = I.forwardRef(function (o, l) {
    const s = _t({ props: o, name: "MuiCardContent" }),
      { className: u, component: f = "div", ...p } = s,
      m = { ...s, component: f },
      y = v1(m);
    return te.jsx(S1, {
      as: f,
      className: Ee(y.root, u),
      ownerState: m,
      ref: l,
      ...p,
    });
  });
function C1(n) {
  return bt("MuiCardMedia", n);
}
$t("MuiCardMedia", ["root", "media", "img"]);
const x1 = (n) => {
    const { classes: o, isMediaComponent: l, isImageComponent: s } = n;
    return jt({ root: ["root", l && "media", s && "img"] }, C1, o);
  },
  k1 = Je("div", {
    name: "MuiCardMedia",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n,
        { isMediaComponent: s, isImageComponent: u } = l;
      return [o.root, s && o.media, u && o.img];
    },
  })({
    display: "block",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    variants: [
      { props: { isMediaComponent: !0 }, style: { width: "100%" } },
      { props: { isImageComponent: !0 }, style: { objectFit: "cover" } },
    ],
  }),
  E1 = ["video", "audio", "picture", "iframe", "img"],
  T1 = ["picture", "img"],
  P1 = I.forwardRef(function (o, l) {
    const s = _t({ props: o, name: "MuiCardMedia" }),
      {
        children: u,
        className: f,
        component: p = "div",
        image: m,
        src: y,
        style: v,
        ...k
      } = s,
      C = E1.includes(p),
      E = !C && m ? { backgroundImage: `url("${m}")`, ...v } : v,
      M = {
        ...s,
        component: p,
        isMediaComponent: C,
        isImageComponent: T1.includes(p),
      },
      $ = x1(M);
    return te.jsx(k1, {
      className: Ee($.root, f),
      as: p,
      role: !C && m ? "img" : void 0,
      ref: l,
      style: E,
      ownerState: M,
      src: C ? m || y : void 0,
      ...k,
      children: u,
    });
  }),
  qd = V0({
    createStyledComponent: Je("div", {
      name: "MuiGrid2",
      slot: "Root",
      overridesResolver: (n, o) => {
        const { ownerState: l } = n;
        return [o.root, l.container && o.container];
      },
    }),
    componentName: "MuiGrid2",
    useThemeProps: (n) => _t({ props: n, name: "MuiGrid2" }),
    useTheme: Eu,
  });
function R1(n) {
  return bt("MuiTab", n);
}
const Qt = $t("MuiTab", [
    "root",
    "labelIcon",
    "textColorInherit",
    "textColorPrimary",
    "textColorSecondary",
    "selected",
    "disabled",
    "fullWidth",
    "wrapped",
    "iconWrapper",
    "icon",
  ]),
  b1 = (n) => {
    const {
        classes: o,
        textColor: l,
        fullWidth: s,
        wrapped: u,
        icon: f,
        label: p,
        selected: m,
        disabled: y,
      } = n,
      v = {
        root: [
          "root",
          f && p && "labelIcon",
          `textColor${ye(l)}`,
          s && "fullWidth",
          u && "wrapped",
          m && "selected",
          y && "disabled",
        ],
        icon: ["iconWrapper", "icon"],
      };
    return jt(v, R1, o);
  },
  $1 = Je(Al, {
    name: "MuiTab",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n;
      return [
        o.root,
        l.label && l.icon && o.labelIcon,
        o[`textColor${ye(l.textColor)}`],
        l.fullWidth && o.fullWidth,
        l.wrapped && o.wrapped,
        { [`& .${Qt.iconWrapper}`]: o.iconWrapper },
        { [`& .${Qt.icon}`]: o.icon },
      ];
    },
  })(
    Jn(({ theme: n }) => ({
      ...n.typography.button,
      maxWidth: 360,
      minWidth: 90,
      position: "relative",
      minHeight: 48,
      flexShrink: 0,
      padding: "12px 16px",
      overflow: "hidden",
      whiteSpace: "normal",
      textAlign: "center",
      lineHeight: 1.25,
      variants: [
        {
          props: ({ ownerState: o }) =>
            o.label &&
            (o.iconPosition === "top" || o.iconPosition === "bottom"),
          style: { flexDirection: "column" },
        },
        {
          props: ({ ownerState: o }) =>
            o.label && o.iconPosition !== "top" && o.iconPosition !== "bottom",
          style: { flexDirection: "row" },
        },
        {
          props: ({ ownerState: o }) => o.icon && o.label,
          style: { minHeight: 72, paddingTop: 9, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: o, iconPosition: l }) =>
            o.icon && o.label && l === "top",
          style: { [`& > .${Qt.icon}`]: { marginBottom: 6 } },
        },
        {
          props: ({ ownerState: o, iconPosition: l }) =>
            o.icon && o.label && l === "bottom",
          style: { [`& > .${Qt.icon}`]: { marginTop: 6 } },
        },
        {
          props: ({ ownerState: o, iconPosition: l }) =>
            o.icon && o.label && l === "start",
          style: { [`& > .${Qt.icon}`]: { marginRight: n.spacing(1) } },
        },
        {
          props: ({ ownerState: o, iconPosition: l }) =>
            o.icon && o.label && l === "end",
          style: { [`& > .${Qt.icon}`]: { marginLeft: n.spacing(1) } },
        },
        {
          props: { textColor: "inherit" },
          style: {
            color: "inherit",
            opacity: 0.6,
            [`&.${Qt.selected}`]: { opacity: 1 },
            [`&.${Qt.disabled}`]: {
              opacity: (n.vars || n).palette.action.disabledOpacity,
            },
          },
        },
        {
          props: { textColor: "primary" },
          style: {
            color: (n.vars || n).palette.text.secondary,
            [`&.${Qt.selected}`]: { color: (n.vars || n).palette.primary.main },
            [`&.${Qt.disabled}`]: {
              color: (n.vars || n).palette.text.disabled,
            },
          },
        },
        {
          props: { textColor: "secondary" },
          style: {
            color: (n.vars || n).palette.text.secondary,
            [`&.${Qt.selected}`]: {
              color: (n.vars || n).palette.secondary.main,
            },
            [`&.${Qt.disabled}`]: {
              color: (n.vars || n).palette.text.disabled,
            },
          },
        },
        {
          props: ({ ownerState: o }) => o.fullWidth,
          style: { flexShrink: 1, flexGrow: 1, flexBasis: 0, maxWidth: "none" },
        },
        {
          props: ({ ownerState: o }) => o.wrapped,
          style: { fontSize: n.typography.pxToRem(12) },
        },
      ],
    }))
  ),
  _1 = I.forwardRef(function (o, l) {
    const s = _t({ props: o, name: "MuiTab" }),
      {
        className: u,
        disabled: f = !1,
        disableFocusRipple: p = !1,
        fullWidth: m,
        icon: y,
        iconPosition: v = "top",
        indicator: k,
        label: C,
        onChange: E,
        onClick: M,
        onFocus: $,
        selected: R,
        selectionFollowsFocus: O,
        textColor: F = "inherit",
        value: X,
        wrapped: H = !1,
        ...z
      } = s,
      _ = {
        ...s,
        disabled: f,
        disableFocusRipple: p,
        selected: R,
        icon: !!y,
        iconPosition: v,
        label: !!C,
        fullWidth: m,
        textColor: F,
        wrapped: H,
      },
      G = b1(_),
      K =
        y && C && I.isValidElement(y)
          ? I.cloneElement(y, { className: Ee(G.icon, y.props.className) })
          : y,
      ue = (h) => {
        !R && E && E(h, X), M && M(h);
      },
      ge = (h) => {
        O && !R && E && E(h, X), $ && $(h);
      };
    return te.jsxs($1, {
      focusRipple: !p,
      className: Ee(G.root, u),
      ref: l,
      role: "tab",
      "aria-selected": R,
      disabled: f,
      onClick: ue,
      onFocus: ge,
      ownerState: _,
      tabIndex: R ? 0 : -1,
      ...z,
      children: [
        v === "top" || v === "start"
          ? te.jsxs(I.Fragment, { children: [K, C] })
          : te.jsxs(I.Fragment, { children: [C, K] }),
        k,
      ],
    });
  });
function N1(n) {
  return bt("MuiToolbar", n);
}
$t("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const M1 = (n) => {
    const { classes: o, disableGutters: l, variant: s } = n;
    return jt({ root: ["root", !l && "gutters", s] }, N1, o);
  },
  O1 = Je("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n;
      return [o.root, !l.disableGutters && o.gutters, o[l.variant]];
    },
  })(
    Jn(({ theme: n }) => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      variants: [
        {
          props: ({ ownerState: o }) => !o.disableGutters,
          style: {
            paddingLeft: n.spacing(2),
            paddingRight: n.spacing(2),
            [n.breakpoints.up("sm")]: {
              paddingLeft: n.spacing(3),
              paddingRight: n.spacing(3),
            },
          },
        },
        { props: { variant: "dense" }, style: { minHeight: 48 } },
        { props: { variant: "regular" }, style: n.mixins.toolbar },
      ],
    }))
  ),
  I1 = I.forwardRef(function (o, l) {
    const s = _t({ props: o, name: "MuiToolbar" }),
      {
        className: u,
        component: f = "div",
        disableGutters: p = !1,
        variant: m = "regular",
        ...y
      } = s,
      v = { ...s, component: f, disableGutters: p, variant: m },
      k = M1(v);
    return te.jsx(O1, {
      as: f,
      className: Ee(k.root, u),
      ref: l,
      ownerState: v,
      ...y,
    });
  }),
  z1 = Tu(
    te.jsx("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" }),
    "KeyboardArrowLeft"
  ),
  A1 = Tu(
    te.jsx("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }),
    "KeyboardArrowRight"
  );
function L1(n) {
  return (1 + Math.sin(Math.PI * n - Math.PI / 2)) / 2;
}
function B1(n, o, l, s = {}, u = () => {}) {
  const { ease: f = L1, duration: p = 300 } = s;
  let m = null;
  const y = o[n];
  let v = !1;
  const k = () => {
      v = !0;
    },
    C = (E) => {
      if (v) {
        u(new Error("Animation cancelled"));
        return;
      }
      m === null && (m = E);
      const M = Math.min(1, (E - m) / p);
      if (((o[n] = f(M) * (l - y) + y), M >= 1)) {
        requestAnimationFrame(() => {
          u(null);
        });
        return;
      }
      requestAnimationFrame(C);
    };
  return y === l
    ? (u(new Error("Element already at target position")), k)
    : (requestAnimationFrame(C), k);
}
const j1 = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll",
};
function D1(n) {
  const { onChange: o, ...l } = n,
    s = I.useRef(),
    u = I.useRef(null),
    f = () => {
      s.current = u.current.offsetHeight - u.current.clientHeight;
    };
  return (
    Ep(() => {
      const p = Pp(() => {
          const y = s.current;
          f(), y !== s.current && o(s.current);
        }),
        m = bp(u.current);
      return (
        m.addEventListener("resize", p),
        () => {
          p.clear(), m.removeEventListener("resize", p);
        }
      );
    }, [o]),
    I.useEffect(() => {
      f(), o(s.current);
    }, [o]),
    te.jsx("div", { style: j1, ...l, ref: u })
  );
}
function F1(n) {
  return bt("MuiTabScrollButton", n);
}
const W1 = $t("MuiTabScrollButton", [
    "root",
    "vertical",
    "horizontal",
    "disabled",
  ]),
  V1 = (n) => {
    const { classes: o, orientation: l, disabled: s } = n;
    return jt({ root: ["root", l, s && "disabled"] }, F1, o);
  },
  U1 = Je(Al, {
    name: "MuiTabScrollButton",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n;
      return [o.root, l.orientation && o[l.orientation]];
    },
  })({
    width: 40,
    flexShrink: 0,
    opacity: 0.8,
    [`&.${W1.disabled}`]: { opacity: 0 },
    variants: [
      {
        props: { orientation: "vertical" },
        style: {
          width: "100%",
          height: 40,
          "& svg": { transform: "var(--TabScrollButton-svgRotate)" },
        },
      },
    ],
  }),
  H1 = I.forwardRef(function (o, l) {
    const s = _t({ props: o, name: "MuiTabScrollButton" }),
      {
        className: u,
        slots: f = {},
        slotProps: p = {},
        direction: m,
        orientation: y,
        disabled: v,
        ...k
      } = s,
      C = _p(),
      E = { isRtl: C, ...s },
      M = V1(E),
      $ = f.StartScrollButtonIcon ?? z1,
      R = f.EndScrollButtonIcon ?? A1,
      O = Ol({
        elementType: $,
        externalSlotProps: p.startScrollButtonIcon,
        additionalProps: { fontSize: "small" },
        ownerState: E,
      }),
      F = Ol({
        elementType: R,
        externalSlotProps: p.endScrollButtonIcon,
        additionalProps: { fontSize: "small" },
        ownerState: E,
      });
    return te.jsx(U1, {
      component: "div",
      className: Ee(M.root, u),
      ref: l,
      role: null,
      ownerState: E,
      tabIndex: null,
      ...k,
      style: {
        ...k.style,
        ...(y === "vertical" && {
          "--TabScrollButton-svgRotate": `rotate(${C ? -90 : 90}deg)`,
        }),
      },
      children: m === "left" ? te.jsx($, { ...O }) : te.jsx(R, { ...F }),
    });
  });
function G1(n) {
  return bt("MuiTabs", n);
}
const Ks = $t("MuiTabs", [
    "root",
    "vertical",
    "flexContainer",
    "flexContainerVertical",
    "centered",
    "scroller",
    "fixed",
    "scrollableX",
    "scrollableY",
    "hideScrollbar",
    "scrollButtons",
    "scrollButtonsHideMobile",
    "indicator",
  ]),
  Zd = (n, o) =>
    n === o
      ? n.firstChild
      : o && o.nextElementSibling
      ? o.nextElementSibling
      : n.firstChild,
  Jd = (n, o) =>
    n === o
      ? n.lastChild
      : o && o.previousElementSibling
      ? o.previousElementSibling
      : n.lastChild,
  xl = (n, o, l) => {
    let s = !1,
      u = l(n, o);
    for (; u; ) {
      if (u === n.firstChild) {
        if (s) return;
        s = !0;
      }
      const f = u.disabled || u.getAttribute("aria-disabled") === "true";
      if (!u.hasAttribute("tabindex") || f) u = l(n, u);
      else {
        u.focus();
        return;
      }
    }
  },
  K1 = (n) => {
    const {
      vertical: o,
      fixed: l,
      hideScrollbar: s,
      scrollableX: u,
      scrollableY: f,
      centered: p,
      scrollButtonsHideMobile: m,
      classes: y,
    } = n;
    return jt(
      {
        root: ["root", o && "vertical"],
        scroller: [
          "scroller",
          l && "fixed",
          s && "hideScrollbar",
          u && "scrollableX",
          f && "scrollableY",
        ],
        flexContainer: [
          "flexContainer",
          o && "flexContainerVertical",
          p && "centered",
        ],
        indicator: ["indicator"],
        scrollButtons: ["scrollButtons", m && "scrollButtonsHideMobile"],
        scrollableX: [u && "scrollableX"],
        hideScrollbar: [s && "hideScrollbar"],
      },
      G1,
      y
    );
  },
  Q1 = Je("div", {
    name: "MuiTabs",
    slot: "Root",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n;
      return [
        { [`& .${Ks.scrollButtons}`]: o.scrollButtons },
        {
          [`& .${Ks.scrollButtons}`]:
            l.scrollButtonsHideMobile && o.scrollButtonsHideMobile,
        },
        o.root,
        l.vertical && o.vertical,
      ];
    },
  })(
    Jn(({ theme: n }) => ({
      overflow: "hidden",
      minHeight: 48,
      WebkitOverflowScrolling: "touch",
      display: "flex",
      variants: [
        {
          props: ({ ownerState: o }) => o.vertical,
          style: { flexDirection: "column" },
        },
        {
          props: ({ ownerState: o }) => o.scrollButtonsHideMobile,
          style: {
            [`& .${Ks.scrollButtons}`]: {
              [n.breakpoints.down("sm")]: { display: "none" },
            },
          },
        },
      ],
    }))
  ),
  X1 = Je("div", {
    name: "MuiTabs",
    slot: "Scroller",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n;
      return [
        o.scroller,
        l.fixed && o.fixed,
        l.hideScrollbar && o.hideScrollbar,
        l.scrollableX && o.scrollableX,
        l.scrollableY && o.scrollableY,
      ];
    },
  })({
    position: "relative",
    display: "inline-block",
    flex: "1 1 auto",
    whiteSpace: "nowrap",
    variants: [
      {
        props: ({ ownerState: n }) => n.fixed,
        style: { overflowX: "hidden", width: "100%" },
      },
      {
        props: ({ ownerState: n }) => n.hideScrollbar,
        style: {
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        },
      },
      {
        props: ({ ownerState: n }) => n.scrollableX,
        style: { overflowX: "auto", overflowY: "hidden" },
      },
      {
        props: ({ ownerState: n }) => n.scrollableY,
        style: { overflowY: "auto", overflowX: "hidden" },
      },
    ],
  }),
  Y1 = Je("div", {
    name: "MuiTabs",
    slot: "FlexContainer",
    overridesResolver: (n, o) => {
      const { ownerState: l } = n;
      return [
        o.flexContainer,
        l.vertical && o.flexContainerVertical,
        l.centered && o.centered,
      ];
    },
  })({
    display: "flex",
    variants: [
      {
        props: ({ ownerState: n }) => n.vertical,
        style: { flexDirection: "column" },
      },
      {
        props: ({ ownerState: n }) => n.centered,
        style: { justifyContent: "center" },
      },
    ],
  }),
  q1 = Je("span", {
    name: "MuiTabs",
    slot: "Indicator",
    overridesResolver: (n, o) => o.indicator,
  })(
    Jn(({ theme: n }) => ({
      position: "absolute",
      height: 2,
      bottom: 0,
      width: "100%",
      transition: n.transitions.create(),
      variants: [
        {
          props: { indicatorColor: "primary" },
          style: { backgroundColor: (n.vars || n).palette.primary.main },
        },
        {
          props: { indicatorColor: "secondary" },
          style: { backgroundColor: (n.vars || n).palette.secondary.main },
        },
        {
          props: ({ ownerState: o }) => o.vertical,
          style: { height: "100%", width: 2, right: 0 },
        },
      ],
    }))
  ),
  Z1 = Je(D1)({
    overflowX: "auto",
    overflowY: "hidden",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
  }),
  ep = {},
  J1 = I.forwardRef(function (o, l) {
    const s = _t({ props: o, name: "MuiTabs" }),
      u = Eu(),
      f = _p(),
      {
        "aria-label": p,
        "aria-labelledby": m,
        action: y,
        centered: v = !1,
        children: k,
        className: C,
        component: E = "div",
        allowScrollButtonsMobile: M = !1,
        indicatorColor: $ = "primary",
        onChange: R,
        orientation: O = "horizontal",
        ScrollButtonComponent: F = H1,
        scrollButtons: X = "auto",
        selectionFollowsFocus: H,
        slots: z = {},
        slotProps: _ = {},
        TabIndicatorProps: G = {},
        TabScrollButtonProps: K = {},
        textColor: ue = "primary",
        value: ge,
        variant: h = "standard",
        visibleScrollbar: D = !1,
        ...J
      } = s,
      q = h === "scrollable",
      oe = O === "vertical",
      we = oe ? "scrollTop" : "scrollLeft",
      ve = oe ? "top" : "left",
      he = oe ? "bottom" : "right",
      V = oe ? "clientHeight" : "clientWidth",
      W = oe ? "height" : "width",
      Q = {
        ...s,
        component: E,
        allowScrollButtonsMobile: M,
        indicatorColor: $,
        orientation: O,
        vertical: oe,
        scrollButtons: X,
        textColor: ue,
        variant: h,
        visibleScrollbar: D,
        fixed: !q,
        hideScrollbar: q && !D,
        scrollableX: q && !oe,
        scrollableY: q && oe,
        centered: v && !q,
        scrollButtonsHideMobile: !M,
      },
      w = K1(Q),
      A = Ol({
        elementType: z.StartScrollButtonIcon,
        externalSlotProps: _.startScrollButtonIcon,
        ownerState: Q,
      }),
      de = Ol({
        elementType: z.EndScrollButtonIcon,
        externalSlotProps: _.endScrollButtonIcon,
        ownerState: Q,
      }),
      [pe, xe] = I.useState(!1),
      [me, $e] = I.useState(ep),
      [Te, Ie] = I.useState(!1),
      [nt, $n] = I.useState(!1),
      [er, _n] = I.useState(!1),
      [ln, Cr] = I.useState({ overflow: "hidden", scrollbarWidth: 0 }),
      tr = new Map(),
      rt = I.useRef(null),
      ct = I.useRef(null),
      Nn = () => {
        const le = rt.current;
        let ie;
        if (le) {
          const ke = le.getBoundingClientRect();
          ie = {
            clientWidth: le.clientWidth,
            scrollLeft: le.scrollLeft,
            scrollTop: le.scrollTop,
            scrollWidth: le.scrollWidth,
            top: ke.top,
            bottom: ke.bottom,
            left: ke.left,
            right: ke.right,
          };
        }
        let Pe;
        if (le && ge !== !1) {
          const ke = ct.current.children;
          if (ke.length > 0) {
            const Le = ke[tr.get(ge)];
            Pe = Le ? Le.getBoundingClientRect() : null;
          }
        }
        return { tabsMeta: ie, tabMeta: Pe };
      },
      vt = vr(() => {
        const { tabsMeta: le, tabMeta: ie } = Nn();
        let Pe = 0,
          ke;
        oe
          ? ((ke = "top"), ie && le && (Pe = ie.top - le.top + le.scrollTop))
          : ((ke = f ? "right" : "left"),
            ie &&
              le &&
              (Pe = (f ? -1 : 1) * (ie[ke] - le[ke] + le.scrollLeft)));
        const Le = { [ke]: Pe, [W]: ie ? ie[W] : 0 };
        if (typeof me[ke] != "number" || typeof me[W] != "number") $e(Le);
        else {
          const St = Math.abs(me[ke] - Le[ke]),
            wt = Math.abs(me[W] - Le[W]);
          (St >= 1 || wt >= 1) && $e(Le);
        }
      }),
      Dt = (le, { animation: ie = !0 } = {}) => {
        ie
          ? B1(we, rt.current, le, {
              duration: u.transitions.duration.standard,
            })
          : (rt.current[we] = le);
      },
      fe = (le) => {
        let ie = rt.current[we];
        oe ? (ie += le) : (ie += le * (f ? -1 : 1)), Dt(ie);
      },
      io = () => {
        const le = rt.current[V];
        let ie = 0;
        const Pe = Array.from(ct.current.children);
        for (let ke = 0; ke < Pe.length; ke += 1) {
          const Le = Pe[ke];
          if (ie + Le[V] > le) {
            ke === 0 && (ie = le);
            break;
          }
          ie += Le[V];
        }
        return ie;
      },
      ai = () => {
        fe(-1 * io());
      },
      si = () => {
        fe(io());
      },
      ui = I.useCallback((le) => {
        Cr({ overflow: null, scrollbarWidth: le });
      }, []),
      lo = () => {
        const le = {};
        le.scrollbarSizeListener = q
          ? te.jsx(Z1, {
              onChange: ui,
              className: Ee(w.scrollableX, w.hideScrollbar),
            })
          : null;
        const Pe = q && ((X === "auto" && (Te || nt)) || X === !0);
        return (
          (le.scrollButtonStart = Pe
            ? te.jsx(F, {
                slots: { StartScrollButtonIcon: z.StartScrollButtonIcon },
                slotProps: { startScrollButtonIcon: A },
                orientation: O,
                direction: f ? "right" : "left",
                onClick: ai,
                disabled: !Te,
                ...K,
                className: Ee(w.scrollButtons, K.className),
              })
            : null),
          (le.scrollButtonEnd = Pe
            ? te.jsx(F, {
                slots: { EndScrollButtonIcon: z.EndScrollButtonIcon },
                slotProps: { endScrollButtonIcon: de },
                orientation: O,
                direction: f ? "left" : "right",
                onClick: si,
                disabled: !nt,
                ...K,
                className: Ee(w.scrollButtons, K.className),
              })
            : null),
          le
        );
      },
      nr = vr((le) => {
        const { tabsMeta: ie, tabMeta: Pe } = Nn();
        if (!(!Pe || !ie)) {
          if (Pe[ve] < ie[ve]) {
            const ke = ie[we] + (Pe[ve] - ie[ve]);
            Dt(ke, { animation: le });
          } else if (Pe[he] > ie[he]) {
            const ke = ie[we] + (Pe[he] - ie[he]);
            Dt(ke, { animation: le });
          }
        }
      }),
      rr = vr(() => {
        q && X !== !1 && _n(!er);
      });
    I.useEffect(() => {
      const le = Pp(() => {
        rt.current && vt();
      });
      let ie;
      const Pe = (St) => {
          St.forEach((wt) => {
            wt.removedNodes.forEach((Ft) => {
              ie == null || ie.unobserve(Ft);
            }),
              wt.addedNodes.forEach((Ft) => {
                ie == null || ie.observe(Ft);
              });
          }),
            le(),
            rr();
        },
        ke = bp(rt.current);
      ke.addEventListener("resize", le);
      let Le;
      return (
        typeof ResizeObserver < "u" &&
          ((ie = new ResizeObserver(le)),
          Array.from(ct.current.children).forEach((St) => {
            ie.observe(St);
          })),
        typeof MutationObserver < "u" &&
          ((Le = new MutationObserver(Pe)),
          Le.observe(ct.current, { childList: !0 })),
        () => {
          le.clear(),
            ke.removeEventListener("resize", le),
            Le == null || Le.disconnect(),
            ie == null || ie.disconnect();
        }
      );
    }, [vt, rr]),
      I.useEffect(() => {
        const le = Array.from(ct.current.children),
          ie = le.length;
        if (typeof IntersectionObserver < "u" && ie > 0 && q && X !== !1) {
          const Pe = le[0],
            ke = le[ie - 1],
            Le = { root: rt.current, threshold: 0.99 },
            St = (kr) => {
              Ie(!kr[0].isIntersecting);
            },
            wt = new IntersectionObserver(St, Le);
          wt.observe(Pe);
          const Ft = (kr) => {
              $n(!kr[0].isIntersecting);
            },
            ao = new IntersectionObserver(Ft, Le);
          return (
            ao.observe(ke),
            () => {
              wt.disconnect(), ao.disconnect();
            }
          );
        }
      }, [q, X, er, k == null ? void 0 : k.length]),
      I.useEffect(() => {
        xe(!0);
      }, []),
      I.useEffect(() => {
        vt();
      }),
      I.useEffect(() => {
        nr(ep !== me);
      }, [nr, me]),
      I.useImperativeHandle(
        y,
        () => ({ updateIndicator: vt, updateScrollButtons: rr }),
        [vt, rr]
      );
    const Mn = te.jsx(q1, {
      ...G,
      className: Ee(w.indicator, G.className),
      ownerState: Q,
      style: { ...me, ...G.style },
    });
    let an = 0;
    const Zl = I.Children.map(k, (le) => {
        if (!I.isValidElement(le)) return null;
        const ie = le.props.value === void 0 ? an : le.props.value;
        tr.set(ie, an);
        const Pe = ie === ge;
        return (
          (an += 1),
          I.cloneElement(le, {
            fullWidth: h === "fullWidth",
            indicator: Pe && !pe && Mn,
            selected: Pe,
            selectionFollowsFocus: H,
            onChange: R,
            textColor: ue,
            value: ie,
            ...(an === 1 && ge === !1 && !le.props.tabIndex
              ? { tabIndex: 0 }
              : {}),
          })
        );
      }),
      ci = (le) => {
        const ie = ct.current,
          Pe = Rp(ie).activeElement;
        if (Pe.getAttribute("role") !== "tab") return;
        let Le = O === "horizontal" ? "ArrowLeft" : "ArrowUp",
          St = O === "horizontal" ? "ArrowRight" : "ArrowDown";
        switch (
          (O === "horizontal" && f && ((Le = "ArrowRight"), (St = "ArrowLeft")),
          le.key)
        ) {
          case Le:
            le.preventDefault(), xl(ie, Pe, Jd);
            break;
          case St:
            le.preventDefault(), xl(ie, Pe, Zd);
            break;
          case "Home":
            le.preventDefault(), xl(ie, null, Zd);
            break;
          case "End":
            le.preventDefault(), xl(ie, null, Jd);
            break;
        }
      },
      xr = lo();
    return te.jsxs(Q1, {
      className: Ee(w.root, C),
      ownerState: Q,
      ref: l,
      as: E,
      ...J,
      children: [
        xr.scrollButtonStart,
        xr.scrollbarSizeListener,
        te.jsxs(X1, {
          className: w.scroller,
          ownerState: Q,
          style: {
            overflow: ln.overflow,
            [oe ? `margin${f ? "Left" : "Right"}` : "marginBottom"]: D
              ? void 0
              : -ln.scrollbarWidth,
          },
          ref: rt,
          children: [
            te.jsx(Y1, {
              "aria-label": p,
              "aria-labelledby": m,
              "aria-orientation": O === "vertical" ? "vertical" : null,
              className: w.flexContainer,
              ownerState: Q,
              onKeyDown: ci,
              ref: ct,
              role: "tablist",
              children: Zl,
            }),
            pe && Mn,
          ],
        }),
        xr.scrollButtonEnd,
      ],
    });
  }),
  eS = "./assets/logo-DpXSZeMm.png";
function tS() {
  return te.jsxs(I1, {
    sx: { marginTop: "10px" },
    children: [
      te.jsx(to, {
        sx: { flex: 1, display: "flex", alignItems: "center" },
        children: te.jsx("img", {
          src: eS,
          alt: "Logo",
          style: { width: "70px", marginRight: "15px" },
        }),
      }),
      te.jsx(to, {
        sx: { flex: 2, display: "flex", justifyContent: "center" },
        children: te.jsx(Rl, {
          variant: "h5",
          sx: { textAlign: "center", color: "#e69525", fontWeight: 700 },
          children: "UKIYO RAMEN",
        }),
      }),
      te.jsx(to, { sx: { flex: 1 } }),
    ],
  });
}
function nS({ categories: n, selectedCategory: o, onCategoryChange: l }) {
  const s = (u, f) => {
    l(n[f]);
  };
  return te.jsx(to, {
    sx: {
      fontSize: "1.25rem",
      maxWidth: "900px",
      margin: "auto",
      marginTop: "40px",
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: "#FFE4C4",
    },
    children: te.jsx(J1, {
      value: n.indexOf(o),
      onChange: s,
      variant: "scrollable",
      scrollButtons: !0,
      allowScrollButtonsMobile: !0,
      "aria-label": "scrollable auto tabs example",
      sx: {
        "& .MuiTabs-indicator": { backgroundColor: "#e69525" },
        "& .MuiTab-root": {
          fontSize: "1rem",
          textTransform: "none",
          "&.Mui-selected": { color: "#e69525" },
        },
      },
      children: n.map((u, f) => te.jsx(_1, { label: u }, f)),
    }),
  });
}
const rS = "./assets/ramen-BxwZamVZ.jpg";
function oS({ dish: n }) {
  return te.jsxs(g1, {
    sx: {
      maxWidth: 300,
      width: 300,
      borderRadius: "16px",
      boxShadow: 3,
      backgroundColor: "#e63946",
      transition: "transform 0.3s ease",
      "&:hover": { transform: "scale(1.05)" },
    },
    children: [
      te.jsx(P1, {
        component: "img",
        image: rS,
        alt: n.name,
        sx: {
          width: "100%",
          height: 150,
          objectFit: "cover",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
        },
      }),
      te.jsxs(w1, {
        sx: { padding: "16px" },
        children: [
          te.jsx(Rl, {
            variant: "h6",
            component: "div",
            sx: {
              fontWeight: "bold",
              marginBottom: 0.5,
              fontSize: "1.1rem",
              color: "#fff",
              borderBottom: "2px solid #fff",
              paddingBottom: "4px",
              transition: "all 0.3s ease",
              "&:hover": { color: "#ffb4a2", borderColor: "#ffb4a2" },
            },
            children: n.name,
          }),
          te.jsx(Rl, {
            variant: "body2",
            color: "text.secondary",
            sx: {
              marginBottom: 1,
              fontSize: "0.9rem",
              lineHeight: "1.5",
              color: "#f1faee",
            },
            children: n.description,
          }),
          te.jsxs(Rl, {
            variant: "body1",
            color: "primary",
            sx: {
              fontWeight: "bold",
              fontSize: "1.2rem",
              color: "#fff",
              backgroundColor: "#000000",
              padding: "4px 8px",
              borderRadius: "8px",
              textAlign: "center",
              display: "inline-block",
            },
            children: [n.price, "€"],
          }),
          n.allergens &&
            n.allergens.length > 0 &&
            te.jsx(to, {
              sx: { marginTop: 1, display: "flex", flexWrap: "wrap", gap: 1 },
              children: n.allergens.map((o, l) =>
                te.jsx(
                  c1,
                  {
                    label: o,
                    sx: {
                      backgroundColor: "#f1faee",
                      color: "#e63946",
                      fontSize: "0.7rem",
                      borderRadius: "8px",
                      padding: "2px 6px",
                      marginBottom: "4px",
                    },
                  },
                  l
                )
              ),
            }),
        ],
      }),
    ],
  });
}
const Qs = [
  {
    categories: [
      {
        category: "Entrantes Fríos",
        dishes: [
          {
            name: "Edamame",
            description: "Judías de soja al vapor con sal marina.",
            price: 3.5,
            allergens: [],
          },
          {
            name: "Ensalada Wakame",
            description: "Deliciosa ensalada de algas con sésamo.",
            price: 4.2,
            allergens: ["Gluten"],
          },
          {
            name: "Kimchi",
            description:
              "Col fermentada al estilo coreano con un toque picante.",
            price: 3.5,
            allergens: [],
          },
          {
            name: "Tataki de Salmón",
            description: "Salmón ligeramente sellado con salsa especial.",
            price: 6.5,
            allergens: ["Gluten"],
          },
        ],
      },
      {
        category: "Entrantes Calientes",
        dishes: [
          {
            name: "Tempura de Verduras",
            description: "Verduras frescas en tempura crujiente.",
            price: 5.2,
            allergens: ["Gluten"],
          },
          {
            name: "Pollo Karaage",
            description: "Pollo marinado y frito al estilo japonés.",
            price: 6.5,
            allergens: ["Gluten"],
          },
        ],
      },
      {
        category: "Arroces y Fideos",
        dishes: [
          {
            name: "Chashu Chicken Donburi",
            description: "Bol de arroz con pollo marinado y toppings.",
            price: 13.5,
            allergens: ["Gluten"],
          },
          {
            name: "Katsu Curry Donburi",
            description: "Bol de arroz con curry japonés y filete empanado.",
            price: 13.5,
            allergens: ["Gluten", "Lácteos"],
          },
        ],
      },
      {
        category: "Bao Buns",
        dishes: [
          {
            name: "Bao Bun de Cerdo",
            description: "Panecillo suave relleno de cerdo desmenuzado.",
            price: 4.5,
            allergens: ["Gluten"],
          },
          {
            name: "Bao Bun de Pollo",
            description:
              "Panecillo suave relleno de pollo frito y salsa especial.",
            price: 4.5,
            allergens: ["Gluten"],
          },
        ],
      },
      {
        category: "Ramen",
        dishes: [
          {
            name: "Tonkotsu Ramen",
            description:
              "Caldo de cerdo cremoso con noodles y toppings clásicos.",
            price: 13.5,
            allergens: ["Gluten", "Lácteos"],
          },
          {
            name: "Shoyu Ramen",
            description: "Ramen con base de salsa de soja y caldo ligero.",
            price: 13.5,
            allergens: ["Gluten"],
          },
          {
            name: "Miso Ramen",
            description: "Caldo de miso sabroso con noodles y vegetales.",
            price: 13.5,
            allergens: ["Gluten"],
          },
        ],
      },
      {
        category: "Gyozas",
        dishes: [
          {
            name: "Gyozas de Pollo",
            description: "Empanadillas de pollo servidas con salsa especial.",
            price: 5.2,
            allergens: ["Gluten"],
          },
          {
            name: "Gyozas de Verduras",
            description: "Empanadillas de verduras al vapor o a la plancha.",
            price: 5.2,
            allergens: ["Gluten"],
          },
        ],
      },
    ],
  },
];
function iS() {
  var u;
  const [n, o] = I.useState("Todos"),
    l = ["Todos", ...Qs[0].categories.map((f) => f.category)],
    s =
      n === "Todos"
        ? Qs[0].categories.flatMap((f) => f.dishes)
        : ((u = Qs[0].categories.find((f) => f.category === n)) == null
            ? void 0
            : u.dishes) || [];
  return te.jsxs("div", {
    children: [
      te.jsx(tS, {}),
      te.jsx(nS, { categories: l, selectedCategory: n, onCategoryChange: o }),
      te.jsx(to, {
        sx: { marginTop: "20px", padding: "0 16px" },
        children: te.jsx(qd, {
          container: !0,
          spacing: 2,
          justifyContent: "center",
          children: s.map((f, p) =>
            te.jsx(
              qd,
              {
                xs: 12,
                sm: 6,
                md: 3,
                sx: { display: "flex", justifyContent: "center" },
                children: te.jsx(oS, { dish: f }),
              },
              p
            )
          ),
        }),
      }),
    ],
  });
}
Vh.createRoot(document.getElementById("root")).render(
  te.jsx(I.StrictMode, { children: te.jsx(iS, {}) })
);
