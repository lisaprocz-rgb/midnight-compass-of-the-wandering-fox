function Vk(n, r) {
  for (var s = 0; s < r.length; s++) {
    const a = r[s];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const u in a)
        if (u !== "default" && !(u in n)) {
          const d = Object.getOwnPropertyDescriptor(a, u);
          d &&
            Object.defineProperty(
              n,
              u,
              d.get ? d : { enumerable: !0, get: () => a[u] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) a(u);
  new MutationObserver((u) => {
    for (const d of u)
      if (d.type === "childList")
        for (const f of d.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && a(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(u) {
    const d = {};
    return (
      u.integrity && (d.integrity = u.integrity),
      u.referrerPolicy && (d.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : u.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function a(u) {
    if (u.ep) return;
    u.ep = !0;
    const d = s(u);
    fetch(u.href, d);
  }
})();
function th(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Al = { exports: {} },
  Oo = {},
  Ml = { exports: {} },
  Pe = {};
var Hf;
function zk() {
  if (Hf) return Pe;
  Hf = 1;
  var n = Symbol.for("react.element"),
    r = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    k = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    P = Symbol.iterator;
  function S(O) {
    return O === null || typeof O != "object"
      ? null
      : ((O = (P && O[P]) || O["@@iterator"]),
        typeof O == "function" ? O : null);
  }
  var E = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _ = Object.assign,
    v = {};
  function x(O, B, pe) {
    (this.props = O),
      (this.context = B),
      (this.refs = v),
      (this.updater = pe || E);
  }
  (x.prototype.isReactComponent = {}),
    (x.prototype.setState = function (O, B) {
      if (typeof O != "object" && typeof O != "function" && O != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, O, B, "setState");
    }),
    (x.prototype.forceUpdate = function (O) {
      this.updater.enqueueForceUpdate(this, O, "forceUpdate");
    });
  function R() {}
  R.prototype = x.prototype;
  function b(O, B, pe) {
    (this.props = O),
      (this.context = B),
      (this.refs = v),
      (this.updater = pe || E);
  }
  var D = (b.prototype = new R());
  (D.constructor = b), _(D, x.prototype), (D.isPureReactComponent = !0);
  var M = Array.isArray,
    V = Object.prototype.hasOwnProperty,
    $ = { current: null },
    z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function J(O, B, pe) {
    var he,
      ve = {},
      me = null,
      Z = null;
    if (B != null)
      for (he in (B.ref !== void 0 && (Z = B.ref),
      B.key !== void 0 && (me = "" + B.key),
      B))
        V.call(B, he) && !z.hasOwnProperty(he) && (ve[he] = B[he]);
    var ce = arguments.length - 2;
    if (ce === 1) ve.children = pe;
    else if (1 < ce) {
      for (var ke = Array(ce), ge = 0; ge < ce; ge++)
        ke[ge] = arguments[ge + 2];
      ve.children = ke;
    }
    if (O && O.defaultProps)
      for (he in ((ce = O.defaultProps), ce))
        ve[he] === void 0 && (ve[he] = ce[he]);
    return {
      $$typeof: n,
      type: O,
      key: me,
      ref: Z,
      props: ve,
      _owner: $.current,
    };
  }
  function K(O, B) {
    return {
      $$typeof: n,
      type: O.type,
      key: B,
      ref: O.ref,
      props: O.props,
      _owner: O._owner,
    };
  }
  function ee(O) {
    return typeof O == "object" && O !== null && O.$$typeof === n;
  }
  function I(O) {
    var B = { "=": "=0", ":": "=2" };
    return (
      "$" +
      O.replace(/[=:]/g, function (pe) {
        return B[pe];
      })
    );
  }
  var W = /\/+/g;
  function te(O, B) {
    return typeof O == "object" && O !== null && O.key != null
      ? I("" + O.key)
      : B.toString(36);
  }
  function Q(O, B, pe, he, ve) {
    var me = typeof O;
    (me === "undefined" || me === "boolean") && (O = null);
    var Z = !1;
    if (O === null) Z = !0;
    else
      switch (me) {
        case "string":
        case "number":
          Z = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case n:
            case r:
              Z = !0;
          }
      }
    if (Z)
      return (
        (Z = O),
        (ve = ve(Z)),
        (O = he === "" ? "." + te(Z, 0) : he),
        M(ve)
          ? ((pe = ""),
            O != null && (pe = O.replace(W, "$&/") + "/"),
            Q(ve, B, pe, "", function (ge) {
              return ge;
            }))
          : ve != null &&
            (ee(ve) &&
              (ve = K(
                ve,
                pe +
                  (!ve.key || (Z && Z.key === ve.key)
                    ? ""
                    : ("" + ve.key).replace(W, "$&/") + "/") +
                  O,
              )),
            B.push(ve)),
        1
      );
    if (((Z = 0), (he = he === "" ? "." : he + ":"), M(O)))
      for (var ce = 0; ce < O.length; ce++) {
        me = O[ce];
        var ke = he + te(me, ce);
        Z += Q(me, B, pe, ke, ve);
      }
    else if (((ke = S(O)), typeof ke == "function"))
      for (O = ke.call(O), ce = 0; !(me = O.next()).done; )
        (me = me.value), (ke = he + te(me, ce++)), (Z += Q(me, B, pe, ke, ve));
    else if (me === "object")
      throw (
        ((B = String(O)),
        Error(
          "Objects are not valid as a React child (found: " +
            (B === "[object Object]"
              ? "object with keys {" + Object.keys(O).join(", ") + "}"
              : B) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return Z;
  }
  function ue(O, B, pe) {
    if (O == null) return O;
    var he = [],
      ve = 0;
    return (
      Q(O, he, "", "", function (me) {
        return B.call(pe, me, ve++);
      }),
      he
    );
  }
  function oe(O) {
    if (O._status === -1) {
      var B = O._result;
      (B = B()),
        B.then(
          function (pe) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 1), (O._result = pe));
          },
          function (pe) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 2), (O._result = pe));
          },
        ),
        O._status === -1 && ((O._status = 0), (O._result = B));
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var se = { current: null },
    F = { transition: null },
    q = {
      ReactCurrentDispatcher: se,
      ReactCurrentBatchConfig: F,
      ReactCurrentOwner: $,
    };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Pe.Children = {
      map: ue,
      forEach: function (O, B, pe) {
        ue(
          O,
          function () {
            B.apply(this, arguments);
          },
          pe,
        );
      },
      count: function (O) {
        var B = 0;
        return (
          ue(O, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (O) {
        return (
          ue(O, function (B) {
            return B;
          }) || []
        );
      },
      only: function (O) {
        if (!ee(O))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return O;
      },
    }),
    (Pe.Component = x),
    (Pe.Fragment = s),
    (Pe.Profiler = u),
    (Pe.PureComponent = b),
    (Pe.StrictMode = a),
    (Pe.Suspense = m),
    (Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q),
    (Pe.act = X),
    (Pe.cloneElement = function (O, B, pe) {
      if (O == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            O +
            ".",
        );
      var he = _({}, O.props),
        ve = O.key,
        me = O.ref,
        Z = O._owner;
      if (B != null) {
        if (
          (B.ref !== void 0 && ((me = B.ref), (Z = $.current)),
          B.key !== void 0 && (ve = "" + B.key),
          O.type && O.type.defaultProps)
        )
          var ce = O.type.defaultProps;
        for (ke in B)
          V.call(B, ke) &&
            !z.hasOwnProperty(ke) &&
            (he[ke] = B[ke] === void 0 && ce !== void 0 ? ce[ke] : B[ke]);
      }
      var ke = arguments.length - 2;
      if (ke === 1) he.children = pe;
      else if (1 < ke) {
        ce = Array(ke);
        for (var ge = 0; ge < ke; ge++) ce[ge] = arguments[ge + 2];
        he.children = ce;
      }
      return {
        $$typeof: n,
        type: O.type,
        key: ve,
        ref: me,
        props: he,
        _owner: Z,
      };
    }),
    (Pe.createContext = function (O) {
      return (
        (O = {
          $$typeof: f,
          _currentValue: O,
          _currentValue2: O,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (O.Provider = { $$typeof: d, _context: O }),
        (O.Consumer = O)
      );
    }),
    (Pe.createElement = J),
    (Pe.createFactory = function (O) {
      var B = J.bind(null, O);
      return (B.type = O), B;
    }),
    (Pe.createRef = function () {
      return { current: null };
    }),
    (Pe.forwardRef = function (O) {
      return { $$typeof: p, render: O };
    }),
    (Pe.isValidElement = ee),
    (Pe.lazy = function (O) {
      return { $$typeof: g, _payload: { _status: -1, _result: O }, _init: oe };
    }),
    (Pe.memo = function (O, B) {
      return { $$typeof: k, type: O, compare: B === void 0 ? null : B };
    }),
    (Pe.startTransition = function (O) {
      var B = F.transition;
      F.transition = {};
      try {
        O();
      } finally {
        F.transition = B;
      }
    }),
    (Pe.unstable_act = X),
    (Pe.useCallback = function (O, B) {
      return se.current.useCallback(O, B);
    }),
    (Pe.useContext = function (O) {
      return se.current.useContext(O);
    }),
    (Pe.useDebugValue = function () {}),
    (Pe.useDeferredValue = function (O) {
      return se.current.useDeferredValue(O);
    }),
    (Pe.useEffect = function (O, B) {
      return se.current.useEffect(O, B);
    }),
    (Pe.useId = function () {
      return se.current.useId();
    }),
    (Pe.useImperativeHandle = function (O, B, pe) {
      return se.current.useImperativeHandle(O, B, pe);
    }),
    (Pe.useInsertionEffect = function (O, B) {
      return se.current.useInsertionEffect(O, B);
    }),
    (Pe.useLayoutEffect = function (O, B) {
      return se.current.useLayoutEffect(O, B);
    }),
    (Pe.useMemo = function (O, B) {
      return se.current.useMemo(O, B);
    }),
    (Pe.useReducer = function (O, B, pe) {
      return se.current.useReducer(O, B, pe);
    }),
    (Pe.useRef = function (O) {
      return se.current.useRef(O);
    }),
    (Pe.useState = function (O) {
      return se.current.useState(O);
    }),
    (Pe.useSyncExternalStore = function (O, B, pe) {
      return se.current.useSyncExternalStore(O, B, pe);
    }),
    (Pe.useTransition = function () {
      return se.current.useTransition();
    }),
    (Pe.version = "18.3.1"),
    Pe
  );
}
var $f;
function Ni() {
  return $f || (($f = 1), (Ml.exports = zk())), Ml.exports;
}
var Gf;
function Bk() {
  if (Gf) return Oo;
  Gf = 1;
  var n = Ni(),
    r = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, m, k) {
    var g,
      P = {},
      S = null,
      E = null;
    k !== void 0 && (S = "" + k),
      m.key !== void 0 && (S = "" + m.key),
      m.ref !== void 0 && (E = m.ref);
    for (g in m) a.call(m, g) && !d.hasOwnProperty(g) && (P[g] = m[g]);
    if (p && p.defaultProps)
      for (g in ((m = p.defaultProps), m)) P[g] === void 0 && (P[g] = m[g]);
    return {
      $$typeof: r,
      type: p,
      key: S,
      ref: E,
      props: P,
      _owner: u.current,
    };
  }
  return (Oo.Fragment = s), (Oo.jsx = f), (Oo.jsxs = f), Oo;
}
var Qf;
function Wk() {
  return Qf || ((Qf = 1), (Al.exports = Bk())), Al.exports;
}
var h = Wk(),
  Zs = {},
  Ll = { exports: {} },
  ct = {},
  Il = { exports: {} },
  Fl = {};
var Kf;
function Uk() {
  return (
    Kf ||
      ((Kf = 1),
      (function (n) {
        function r(F, q) {
          var X = F.length;
          F.push(q);
          e: for (; 0 < X; ) {
            var O = (X - 1) >>> 1,
              B = F[O];
            if (0 < u(B, q)) (F[O] = q), (F[X] = B), (X = O);
            else break e;
          }
        }
        function s(F) {
          return F.length === 0 ? null : F[0];
        }
        function a(F) {
          if (F.length === 0) return null;
          var q = F[0],
            X = F.pop();
          if (X !== q) {
            F[0] = X;
            e: for (var O = 0, B = F.length, pe = B >>> 1; O < pe; ) {
              var he = 2 * (O + 1) - 1,
                ve = F[he],
                me = he + 1,
                Z = F[me];
              if (0 > u(ve, X))
                me < B && 0 > u(Z, ve)
                  ? ((F[O] = Z), (F[me] = X), (O = me))
                  : ((F[O] = ve), (F[he] = X), (O = he));
              else if (me < B && 0 > u(Z, X)) (F[O] = Z), (F[me] = X), (O = me);
              else break e;
            }
          }
          return q;
        }
        function u(F, q) {
          var X = F.sortIndex - q.sortIndex;
          return X !== 0 ? X : F.id - q.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var d = performance;
          n.unstable_now = function () {
            return d.now();
          };
        } else {
          var f = Date,
            p = f.now();
          n.unstable_now = function () {
            return f.now() - p;
          };
        }
        var m = [],
          k = [],
          g = 1,
          P = null,
          S = 3,
          E = !1,
          _ = !1,
          v = !1,
          x = typeof setTimeout == "function" ? setTimeout : null,
          R = typeof clearTimeout == "function" ? clearTimeout : null,
          b = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function D(F) {
          for (var q = s(k); q !== null; ) {
            if (q.callback === null) a(k);
            else if (q.startTime <= F)
              a(k), (q.sortIndex = q.expirationTime), r(m, q);
            else break;
            q = s(k);
          }
        }
        function M(F) {
          if (((v = !1), D(F), !_))
            if (s(m) !== null) (_ = !0), oe(V);
            else {
              var q = s(k);
              q !== null && se(M, q.startTime - F);
            }
        }
        function V(F, q) {
          (_ = !1), v && ((v = !1), R(J), (J = -1)), (E = !0);
          var X = S;
          try {
            for (
              D(q), P = s(m);
              P !== null && (!(P.expirationTime > q) || (F && !I()));

            ) {
              var O = P.callback;
              if (typeof O == "function") {
                (P.callback = null), (S = P.priorityLevel);
                var B = O(P.expirationTime <= q);
                (q = n.unstable_now()),
                  typeof B == "function"
                    ? (P.callback = B)
                    : P === s(m) && a(m),
                  D(q);
              } else a(m);
              P = s(m);
            }
            if (P !== null) var pe = !0;
            else {
              var he = s(k);
              he !== null && se(M, he.startTime - q), (pe = !1);
            }
            return pe;
          } finally {
            (P = null), (S = X), (E = !1);
          }
        }
        var $ = !1,
          z = null,
          J = -1,
          K = 5,
          ee = -1;
        function I() {
          return !(n.unstable_now() - ee < K);
        }
        function W() {
          if (z !== null) {
            var F = n.unstable_now();
            ee = F;
            var q = !0;
            try {
              q = z(!0, F);
            } finally {
              q ? te() : (($ = !1), (z = null));
            }
          } else $ = !1;
        }
        var te;
        if (typeof b == "function")
          te = function () {
            b(W);
          };
        else if (typeof MessageChannel < "u") {
          var Q = new MessageChannel(),
            ue = Q.port2;
          (Q.port1.onmessage = W),
            (te = function () {
              ue.postMessage(null);
            });
        } else
          te = function () {
            x(W, 0);
          };
        function oe(F) {
          (z = F), $ || (($ = !0), te());
        }
        function se(F, q) {
          J = x(function () {
            F(n.unstable_now());
          }, q);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (F) {
            F.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            _ || E || ((_ = !0), oe(V));
          }),
          (n.unstable_forceFrameRate = function (F) {
            0 > F || 125 < F
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (K = 0 < F ? Math.floor(1e3 / F) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return s(m);
          }),
          (n.unstable_next = function (F) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = S;
            }
            var X = S;
            S = q;
            try {
              return F();
            } finally {
              S = X;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (F, q) {
            switch (F) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                F = 3;
            }
            var X = S;
            S = F;
            try {
              return q();
            } finally {
              S = X;
            }
          }),
          (n.unstable_scheduleCallback = function (F, q, X) {
            var O = n.unstable_now();
            switch (
              (typeof X == "object" && X !== null
                ? ((X = X.delay),
                  (X = typeof X == "number" && 0 < X ? O + X : O))
                : (X = O),
              F)
            ) {
              case 1:
                var B = -1;
                break;
              case 2:
                B = 250;
                break;
              case 5:
                B = 1073741823;
                break;
              case 4:
                B = 1e4;
                break;
              default:
                B = 5e3;
            }
            return (
              (B = X + B),
              (F = {
                id: g++,
                callback: q,
                priorityLevel: F,
                startTime: X,
                expirationTime: B,
                sortIndex: -1,
              }),
              X > O
                ? ((F.sortIndex = X),
                  r(k, F),
                  s(m) === null &&
                    F === s(k) &&
                    (v ? (R(J), (J = -1)) : (v = !0), se(M, X - O)))
                : ((F.sortIndex = B), r(m, F), _ || E || ((_ = !0), oe(V))),
              F
            );
          }),
          (n.unstable_shouldYield = I),
          (n.unstable_wrapCallback = function (F) {
            var q = S;
            return function () {
              var X = S;
              S = q;
              try {
                return F.apply(this, arguments);
              } finally {
                S = X;
              }
            };
          });
      })(Fl)),
    Fl
  );
}
var Yf;
function Hk() {
  return Yf || ((Yf = 1), (Il.exports = Uk())), Il.exports;
}
var qf;
function $k() {
  if (qf) return ct;
  qf = 1;
  var n = Ni(),
    r = Hk();
  function s(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        o = 1;
      o < arguments.length;
      o++
    )
      t += "&args[]=" + encodeURIComponent(arguments[o]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var a = new Set(),
    u = {};
  function d(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var p = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    k =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    P = {};
  function S(e) {
    return m.call(P, e)
      ? !0
      : m.call(g, e)
        ? !1
        : k.test(e)
          ? (P[e] = !0)
          : ((g[e] = !0), !1);
  }
  function E(e, t, o, i) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return i
          ? !1
          : o !== null
            ? !o.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function _(e, t, o, i) {
    if (t === null || typeof t > "u" || E(e, t, o, i)) return !0;
    if (i) return !1;
    if (o !== null)
      switch (o.type) {
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
  function v(e, t, o, i, l, c, w) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = i),
      (this.attributeNamespace = l),
      (this.mustUseProperty = o),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = w);
  }
  var x = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      x[e] = new v(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      x[t] = new v(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        x[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      x[e] = new v(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        x[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      x[e] = new v(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      x[e] = new v(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      x[e] = new v(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      x[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var R = /[\-:]([a-z])/g;
  function b(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(R, b);
      x[t] = new v(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(R, b);
        x[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(R, b);
      x[t] = new v(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      x[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (x.xlinkHref = new v(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      x[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function D(e, t, o, i) {
    var l = x.hasOwnProperty(t) ? x[t] : null;
    (l !== null
      ? l.type !== 0
      : i ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (_(t, o, l, i) && (o = null),
      i || l === null
        ? S(t) &&
          (o === null ? e.removeAttribute(t) : e.setAttribute(t, "" + o))
        : l.mustUseProperty
          ? (e[l.propertyName] = o === null ? (l.type === 3 ? !1 : "") : o)
          : ((t = l.attributeName),
            (i = l.attributeNamespace),
            o === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (o = l === 3 || (l === 4 && o === !0) ? "" : "" + o),
                i ? e.setAttributeNS(i, t, o) : e.setAttribute(t, o))));
  }
  var M = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    V = Symbol.for("react.element"),
    $ = Symbol.for("react.portal"),
    z = Symbol.for("react.fragment"),
    J = Symbol.for("react.strict_mode"),
    K = Symbol.for("react.profiler"),
    ee = Symbol.for("react.provider"),
    I = Symbol.for("react.context"),
    W = Symbol.for("react.forward_ref"),
    te = Symbol.for("react.suspense"),
    Q = Symbol.for("react.suspense_list"),
    ue = Symbol.for("react.memo"),
    oe = Symbol.for("react.lazy"),
    se = Symbol.for("react.offscreen"),
    F = Symbol.iterator;
  function q(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (F && e[F]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var X = Object.assign,
    O;
  function B(e) {
    if (O === void 0)
      try {
        throw Error();
      } catch (o) {
        var t = o.stack.trim().match(/\n( *(at )?)/);
        O = (t && t[1]) || "";
      }
    return (
      `
` +
      O +
      e
    );
  }
  var pe = !1;
  function he(e, t) {
    if (!e || pe) return "";
    pe = !0;
    var o = Error.prepareStackTrace;
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
          } catch (L) {
            var i = L;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (L) {
            i = L;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (L) {
          i = L;
        }
        e();
      }
    } catch (L) {
      if (L && i && typeof L.stack == "string") {
        for (
          var l = L.stack.split(`
`),
            c = i.stack.split(`
`),
            w = l.length - 1,
            T = c.length - 1;
          1 <= w && 0 <= T && l[w] !== c[T];

        )
          T--;
        for (; 1 <= w && 0 <= T; w--, T--)
          if (l[w] !== c[T]) {
            if (w !== 1 || T !== 1)
              do
                if ((w--, T--, 0 > T || l[w] !== c[T])) {
                  var C =
                    `
` + l[w].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      C.includes("<anonymous>") &&
                      (C = C.replace("<anonymous>", e.displayName)),
                    C
                  );
                }
              while (1 <= w && 0 <= T);
            break;
          }
      }
    } finally {
      (pe = !1), (Error.prepareStackTrace = o);
    }
    return (e = e ? e.displayName || e.name : "") ? B(e) : "";
  }
  function ve(e) {
    switch (e.tag) {
      case 5:
        return B(e.type);
      case 16:
        return B("Lazy");
      case 13:
        return B("Suspense");
      case 19:
        return B("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = he(e.type, !1)), e;
      case 11:
        return (e = he(e.type.render, !1)), e;
      case 1:
        return (e = he(e.type, !0)), e;
      default:
        return "";
    }
  }
  function me(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case z:
        return "Fragment";
      case $:
        return "Portal";
      case K:
        return "Profiler";
      case J:
        return "StrictMode";
      case te:
        return "Suspense";
      case Q:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case I:
          return (e.displayName || "Context") + ".Consumer";
        case ee:
          return (e._context.displayName || "Context") + ".Provider";
        case W:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ue:
          return (
            (t = e.displayName || null), t !== null ? t : me(e.type) || "Memo"
          );
        case oe:
          (t = e._payload), (e = e._init);
          try {
            return me(e(t));
          } catch {}
      }
    return null;
  }
  function Z(e) {
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
        return t === J ? "StrictMode" : "Mode";
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
  function ce(e) {
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
  function ke(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ge(e) {
    var t = ke(e) ? "checked" : "value",
      o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      i = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof o < "u" &&
      typeof o.get == "function" &&
      typeof o.set == "function"
    ) {
      var l = o.get,
        c = o.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (w) {
            (i = "" + w), c.call(this, w);
          },
        }),
        Object.defineProperty(e, t, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (w) {
            i = "" + w;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function be(e) {
    e._valueTracker || (e._valueTracker = ge(e));
  }
  function Ae(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var o = t.getValue(),
      i = "";
    return (
      e && (i = ke(e) ? (e.checked ? "true" : "false") : e.value),
      (e = i),
      e !== o ? (t.setValue(e), !0) : !1
    );
  }
  function Ke(e) {
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
  function Et(e, t) {
    var o = t.checked;
    return X({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: o ?? e._wrapperState.initialChecked,
    });
  }
  function or(e, t) {
    var o = t.defaultValue == null ? "" : t.defaultValue,
      i = t.checked != null ? t.checked : t.defaultChecked;
    (o = ce(t.value != null ? t.value : o)),
      (e._wrapperState = {
        initialChecked: i,
        initialValue: o,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function sr(e, t) {
    (t = t.checked), t != null && D(e, "checked", t, !1);
  }
  function In(e, t) {
    sr(e, t);
    var o = ce(t.value),
      i = t.type;
    if (o != null)
      i === "number"
        ? ((o === 0 && e.value === "") || e.value != o) && (e.value = "" + o)
        : e.value !== "" + o && (e.value = "" + o);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Ui(e, t.type, o)
      : t.hasOwnProperty("defaultValue") && Ui(e, t.type, ce(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Ju(e, t, o) {
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
        o || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (o = e.name),
      o !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      o !== "" && (e.name = o);
  }
  function Ui(e, t, o) {
    (t !== "number" || Ke(e.ownerDocument) !== e) &&
      (o == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + o && (e.defaultValue = "" + o));
  }
  var Hr = Array.isArray;
  function ir(e, t, o, i) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < o.length; l++) t["$" + o[l]] = !0;
      for (o = 0; o < e.length; o++)
        (l = t.hasOwnProperty("$" + e[o].value)),
          e[o].selected !== l && (e[o].selected = l),
          l && i && (e[o].defaultSelected = !0);
    } else {
      for (o = "" + ce(o), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === o) {
          (e[l].selected = !0), i && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Hi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return X({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Zu(e, t) {
    var o = t.value;
    if (o == null) {
      if (((o = t.children), (t = t.defaultValue), o != null)) {
        if (t != null) throw Error(s(92));
        if (Hr(o)) {
          if (1 < o.length) throw Error(s(93));
          o = o[0];
        }
        t = o;
      }
      t == null && (t = ""), (o = t);
    }
    e._wrapperState = { initialValue: ce(o) };
  }
  function ec(e, t) {
    var o = ce(t.value),
      i = ce(t.defaultValue);
    o != null &&
      ((o = "" + o),
      o !== e.value && (e.value = o),
      t.defaultValue == null && e.defaultValue !== o && (e.defaultValue = o)),
      i != null && (e.defaultValue = "" + i);
  }
  function tc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function nc(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function $i(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? nc(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var $o,
    rc = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, o, i, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, o, i, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          $o = $o || document.createElement("div"),
            $o.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = $o.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function $r(e, t) {
    if (t) {
      var o = e.firstChild;
      if (o && o === e.lastChild && o.nodeType === 3) {
        o.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Gr = {
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
    Uy = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Gr).forEach(function (e) {
    Uy.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gr[t] = Gr[e]);
    });
  });
  function oc(e, t, o) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : o || typeof t != "number" || t === 0 || (Gr.hasOwnProperty(e) && Gr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function sc(e, t) {
    e = e.style;
    for (var o in t)
      if (t.hasOwnProperty(o)) {
        var i = o.indexOf("--") === 0,
          l = oc(o, t[o], i);
        o === "float" && (o = "cssFloat"), i ? e.setProperty(o, l) : (e[o] = l);
      }
  }
  var Hy = X(
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
    },
  );
  function Gi(e, t) {
    if (t) {
      if (Hy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Qi(e, t) {
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
  var Ki = null;
  function Yi(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var qi = null,
    ar = null,
    lr = null;
  function ic(e) {
    if ((e = wo(e))) {
      if (typeof qi != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = hs(t)), qi(e.stateNode, e.type, t));
    }
  }
  function ac(e) {
    ar ? (lr ? lr.push(e) : (lr = [e])) : (ar = e);
  }
  function lc() {
    if (ar) {
      var e = ar,
        t = lr;
      if (((lr = ar = null), ic(e), t)) for (e = 0; e < t.length; e++) ic(t[e]);
    }
  }
  function uc(e, t) {
    return e(t);
  }
  function cc() {}
  var Xi = !1;
  function dc(e, t, o) {
    if (Xi) return e(t, o);
    Xi = !0;
    try {
      return uc(e, t, o);
    } finally {
      (Xi = !1), (ar !== null || lr !== null) && (cc(), lc());
    }
  }
  function Qr(e, t) {
    var o = e.stateNode;
    if (o === null) return null;
    var i = hs(o);
    if (i === null) return null;
    o = i[t];
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
    if (o && typeof o != "function") throw Error(s(231, t, typeof o));
    return o;
  }
  var Ji = !1;
  if (p)
    try {
      var Kr = {};
      Object.defineProperty(Kr, "passive", {
        get: function () {
          Ji = !0;
        },
      }),
        window.addEventListener("test", Kr, Kr),
        window.removeEventListener("test", Kr, Kr);
    } catch {
      Ji = !1;
    }
  function $y(e, t, o, i, l, c, w, T, C) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(o, L);
    } catch (H) {
      this.onError(H);
    }
  }
  var Yr = !1,
    Go = null,
    Qo = !1,
    Zi = null,
    Gy = {
      onError: function (e) {
        (Yr = !0), (Go = e);
      },
    };
  function Qy(e, t, o, i, l, c, w, T, C) {
    (Yr = !1), (Go = null), $y.apply(Gy, arguments);
  }
  function Ky(e, t, o, i, l, c, w, T, C) {
    if ((Qy.apply(this, arguments), Yr)) {
      if (Yr) {
        var L = Go;
        (Yr = !1), (Go = null);
      } else throw Error(s(198));
      Qo || ((Qo = !0), (Zi = L));
    }
  }
  function Fn(e) {
    var t = e,
      o = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (o = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? o : null;
  }
  function fc(e) {
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
  function pc(e) {
    if (Fn(e) !== e) throw Error(s(188));
  }
  function Yy(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Fn(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var o = e, i = t; ; ) {
      var l = o.return;
      if (l === null) break;
      var c = l.alternate;
      if (c === null) {
        if (((i = l.return), i !== null)) {
          o = i;
          continue;
        }
        break;
      }
      if (l.child === c.child) {
        for (c = l.child; c; ) {
          if (c === o) return pc(l), e;
          if (c === i) return pc(l), t;
          c = c.sibling;
        }
        throw Error(s(188));
      }
      if (o.return !== i.return) (o = l), (i = c);
      else {
        for (var w = !1, T = l.child; T; ) {
          if (T === o) {
            (w = !0), (o = l), (i = c);
            break;
          }
          if (T === i) {
            (w = !0), (i = l), (o = c);
            break;
          }
          T = T.sibling;
        }
        if (!w) {
          for (T = c.child; T; ) {
            if (T === o) {
              (w = !0), (o = c), (i = l);
              break;
            }
            if (T === i) {
              (w = !0), (i = c), (o = l);
              break;
            }
            T = T.sibling;
          }
          if (!w) throw Error(s(189));
        }
      }
      if (o.alternate !== i) throw Error(s(190));
    }
    if (o.tag !== 3) throw Error(s(188));
    return o.stateNode.current === o ? e : t;
  }
  function hc(e) {
    return (e = Yy(e)), e !== null ? wc(e) : null;
  }
  function wc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = wc(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var yc = r.unstable_scheduleCallback,
    mc = r.unstable_cancelCallback,
    qy = r.unstable_shouldYield,
    Xy = r.unstable_requestPaint,
    Fe = r.unstable_now,
    Jy = r.unstable_getCurrentPriorityLevel,
    ea = r.unstable_ImmediatePriority,
    kc = r.unstable_UserBlockingPriority,
    Ko = r.unstable_NormalPriority,
    Zy = r.unstable_LowPriority,
    vc = r.unstable_IdlePriority,
    Yo = null,
    Vt = null;
  function em(e) {
    if (Vt && typeof Vt.onCommitFiberRoot == "function")
      try {
        Vt.onCommitFiberRoot(Yo, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Nt = Math.clz32 ? Math.clz32 : rm,
    tm = Math.log,
    nm = Math.LN2;
  function rm(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((tm(e) / nm) | 0)) | 0;
  }
  var qo = 64,
    Xo = 4194304;
  function qr(e) {
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
  function Jo(e, t) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var i = 0,
      l = e.suspendedLanes,
      c = e.pingedLanes,
      w = o & 268435455;
    if (w !== 0) {
      var T = w & ~l;
      T !== 0 ? (i = qr(T)) : ((c &= w), c !== 0 && (i = qr(c)));
    } else (w = o & ~l), w !== 0 ? (i = qr(w)) : c !== 0 && (i = qr(c));
    if (i === 0) return 0;
    if (
      t !== 0 &&
      t !== i &&
      (t & l) === 0 &&
      ((l = i & -i), (c = t & -t), l >= c || (l === 16 && (c & 4194240) !== 0))
    )
      return t;
    if (((i & 4) !== 0 && (i |= o & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= i; 0 < t; )
        (o = 31 - Nt(t)), (l = 1 << o), (i |= e[o]), (t &= ~l);
    return i;
  }
  function om(e, t) {
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
  function sm(e, t) {
    for (
      var o = e.suspendedLanes,
        i = e.pingedLanes,
        l = e.expirationTimes,
        c = e.pendingLanes;
      0 < c;

    ) {
      var w = 31 - Nt(c),
        T = 1 << w,
        C = l[w];
      C === -1
        ? ((T & o) === 0 || (T & i) !== 0) && (l[w] = om(T, t))
        : C <= t && (e.expiredLanes |= T),
        (c &= ~T);
    }
  }
  function ta(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function gc() {
    var e = qo;
    return (qo <<= 1), (qo & 4194240) === 0 && (qo = 64), e;
  }
  function na(e) {
    for (var t = [], o = 0; 31 > o; o++) t.push(e);
    return t;
  }
  function Xr(e, t, o) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Nt(t)),
      (e[t] = o);
  }
  function im(e, t) {
    var o = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < o; ) {
      var l = 31 - Nt(o),
        c = 1 << l;
      (t[l] = 0), (i[l] = -1), (e[l] = -1), (o &= ~c);
    }
  }
  function ra(e, t) {
    var o = (e.entangledLanes |= t);
    for (e = e.entanglements; o; ) {
      var i = 31 - Nt(o),
        l = 1 << i;
      (l & t) | (e[i] & t) && (e[i] |= t), (o &= ~l);
    }
  }
  var Ce = 0;
  function Pc(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var xc,
    oa,
    Tc,
    Sc,
    bc,
    sa = !1,
    Zo = [],
    an = null,
    ln = null,
    un = null,
    Jr = new Map(),
    Zr = new Map(),
    cn = [],
    am =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Cc(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        an = null;
        break;
      case "dragenter":
      case "dragleave":
        ln = null;
        break;
      case "mouseover":
      case "mouseout":
        un = null;
        break;
      case "pointerover":
      case "pointerout":
        Jr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Zr.delete(t.pointerId);
    }
  }
  function eo(e, t, o, i, l, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: o,
          eventSystemFlags: i,
          nativeEvent: c,
          targetContainers: [l],
        }),
        t !== null && ((t = wo(t)), t !== null && oa(t)),
        e)
      : ((e.eventSystemFlags |= i),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function lm(e, t, o, i, l) {
    switch (t) {
      case "focusin":
        return (an = eo(an, e, t, o, i, l)), !0;
      case "dragenter":
        return (ln = eo(ln, e, t, o, i, l)), !0;
      case "mouseover":
        return (un = eo(un, e, t, o, i, l)), !0;
      case "pointerover":
        var c = l.pointerId;
        return Jr.set(c, eo(Jr.get(c) || null, e, t, o, i, l)), !0;
      case "gotpointercapture":
        return (
          (c = l.pointerId), Zr.set(c, eo(Zr.get(c) || null, e, t, o, i, l)), !0
        );
    }
    return !1;
  }
  function Ec(e) {
    var t = Vn(e.target);
    if (t !== null) {
      var o = Fn(t);
      if (o !== null) {
        if (((t = o.tag), t === 13)) {
          if (((t = fc(o)), t !== null)) {
            (e.blockedOn = t),
              bc(e.priority, function () {
                Tc(o);
              });
            return;
          }
        } else if (t === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function es(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var o = aa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (o === null) {
        o = e.nativeEvent;
        var i = new o.constructor(o.type, o);
        (Ki = i), o.target.dispatchEvent(i), (Ki = null);
      } else return (t = wo(o)), t !== null && oa(t), (e.blockedOn = o), !1;
      t.shift();
    }
    return !0;
  }
  function Nc(e, t, o) {
    es(e) && o.delete(t);
  }
  function um() {
    (sa = !1),
      an !== null && es(an) && (an = null),
      ln !== null && es(ln) && (ln = null),
      un !== null && es(un) && (un = null),
      Jr.forEach(Nc),
      Zr.forEach(Nc);
  }
  function to(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      sa ||
        ((sa = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, um)));
  }
  function no(e) {
    function t(l) {
      return to(l, e);
    }
    if (0 < Zo.length) {
      to(Zo[0], e);
      for (var o = 1; o < Zo.length; o++) {
        var i = Zo[o];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (
      an !== null && to(an, e),
        ln !== null && to(ln, e),
        un !== null && to(un, e),
        Jr.forEach(t),
        Zr.forEach(t),
        o = 0;
      o < cn.length;
      o++
    )
      (i = cn[o]), i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < cn.length && ((o = cn[0]), o.blockedOn === null); )
      Ec(o), o.blockedOn === null && cn.shift();
  }
  var ur = M.ReactCurrentBatchConfig,
    ts = !0;
  function cm(e, t, o, i) {
    var l = Ce,
      c = ur.transition;
    ur.transition = null;
    try {
      (Ce = 1), ia(e, t, o, i);
    } finally {
      (Ce = l), (ur.transition = c);
    }
  }
  function dm(e, t, o, i) {
    var l = Ce,
      c = ur.transition;
    ur.transition = null;
    try {
      (Ce = 4), ia(e, t, o, i);
    } finally {
      (Ce = l), (ur.transition = c);
    }
  }
  function ia(e, t, o, i) {
    if (ts) {
      var l = aa(e, t, o, i);
      if (l === null) Sa(e, t, i, ns, o), Cc(e, i);
      else if (lm(l, e, t, o, i)) i.stopPropagation();
      else if ((Cc(e, i), t & 4 && -1 < am.indexOf(e))) {
        for (; l !== null; ) {
          var c = wo(l);
          if (
            (c !== null && xc(c),
            (c = aa(e, t, o, i)),
            c === null && Sa(e, t, i, ns, o),
            c === l)
          )
            break;
          l = c;
        }
        l !== null && i.stopPropagation();
      } else Sa(e, t, i, null, o);
    }
  }
  var ns = null;
  function aa(e, t, o, i) {
    if (((ns = null), (e = Yi(i)), (e = Vn(e)), e !== null))
      if (((t = Fn(e)), t === null)) e = null;
      else if (((o = t.tag), o === 13)) {
        if (((e = fc(t)), e !== null)) return e;
        e = null;
      } else if (o === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (ns = e), null;
  }
  function Rc(e) {
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
        switch (Jy()) {
          case ea:
            return 1;
          case kc:
            return 4;
          case Ko:
          case Zy:
            return 16;
          case vc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var dn = null,
    la = null,
    rs = null;
  function Oc() {
    if (rs) return rs;
    var e,
      t = la,
      o = t.length,
      i,
      l = "value" in dn ? dn.value : dn.textContent,
      c = l.length;
    for (e = 0; e < o && t[e] === l[e]; e++);
    var w = o - e;
    for (i = 1; i <= w && t[o - i] === l[c - i]; i++);
    return (rs = l.slice(e, 1 < i ? 1 - i : void 0));
  }
  function os(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ss() {
    return !0;
  }
  function _c() {
    return !1;
  }
  function ft(e) {
    function t(o, i, l, c, w) {
      (this._reactName = o),
        (this._targetInst = l),
        (this.type = i),
        (this.nativeEvent = c),
        (this.target = w),
        (this.currentTarget = null);
      for (var T in e)
        e.hasOwnProperty(T) && ((o = e[T]), (this[T] = o ? o(c) : c[T]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? ss
          : _c),
        (this.isPropagationStopped = _c),
        this
      );
    }
    return (
      X(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var o = this.nativeEvent;
          o &&
            (o.preventDefault
              ? o.preventDefault()
              : typeof o.returnValue != "unknown" && (o.returnValue = !1),
            (this.isDefaultPrevented = ss));
        },
        stopPropagation: function () {
          var o = this.nativeEvent;
          o &&
            (o.stopPropagation
              ? o.stopPropagation()
              : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
            (this.isPropagationStopped = ss));
        },
        persist: function () {},
        isPersistent: ss,
      }),
      t
    );
  }
  var cr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ua = ft(cr),
    ro = X({}, cr, { view: 0, detail: 0 }),
    fm = ft(ro),
    ca,
    da,
    oo,
    is = X({}, ro, {
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
      getModifierState: pa,
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
          : (e !== oo &&
              (oo && e.type === "mousemove"
                ? ((ca = e.screenX - oo.screenX), (da = e.screenY - oo.screenY))
                : (da = ca = 0),
              (oo = e)),
            ca);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : da;
      },
    }),
    jc = ft(is),
    pm = X({}, is, { dataTransfer: 0 }),
    hm = ft(pm),
    wm = X({}, ro, { relatedTarget: 0 }),
    fa = ft(wm),
    ym = X({}, cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mm = ft(ym),
    km = X({}, cr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    vm = ft(km),
    gm = X({}, cr, { data: 0 }),
    Dc = ft(gm),
    Pm = {
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
    xm = {
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
    Tm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Sm(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Tm[e])
        ? !!t[e]
        : !1;
  }
  function pa() {
    return Sm;
  }
  var bm = X({}, ro, {
      key: function (e) {
        if (e.key) {
          var t = Pm[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = os(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? xm[e.keyCode] || "Unidentified"
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
      getModifierState: pa,
      charCode: function (e) {
        return e.type === "keypress" ? os(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? os(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Cm = ft(bm),
    Em = X({}, is, {
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
    Ac = ft(Em),
    Nm = X({}, ro, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pa,
    }),
    Rm = ft(Nm),
    Om = X({}, cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _m = ft(Om),
    jm = X({}, is, {
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
    Dm = ft(jm),
    Am = [9, 13, 27, 32],
    ha = p && "CompositionEvent" in window,
    so = null;
  p && "documentMode" in document && (so = document.documentMode);
  var Mm = p && "TextEvent" in window && !so,
    Mc = p && (!ha || (so && 8 < so && 11 >= so)),
    Lc = " ",
    Ic = !1;
  function Fc(e, t) {
    switch (e) {
      case "keyup":
        return Am.indexOf(t.keyCode) !== -1;
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
  function Vc(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var dr = !1;
  function Lm(e, t) {
    switch (e) {
      case "compositionend":
        return Vc(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ic = !0), Lc);
      case "textInput":
        return (e = t.data), e === Lc && Ic ? null : e;
      default:
        return null;
    }
  }
  function Im(e, t) {
    if (dr)
      return e === "compositionend" || (!ha && Fc(e, t))
        ? ((e = Oc()), (rs = la = dn = null), (dr = !1), e)
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
        return Mc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Fm = {
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
  function zc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Fm[e.type] : t === "textarea";
  }
  function Bc(e, t, o, i) {
    ac(i),
      (t = ds(t, "onChange")),
      0 < t.length &&
        ((o = new ua("onChange", "change", null, o, i)),
        e.push({ event: o, listeners: t }));
  }
  var io = null,
    ao = null;
  function Vm(e) {
    sd(e, 0);
  }
  function as(e) {
    var t = yr(e);
    if (Ae(t)) return e;
  }
  function zm(e, t) {
    if (e === "change") return t;
  }
  var Wc = !1;
  if (p) {
    var wa;
    if (p) {
      var ya = "oninput" in document;
      if (!ya) {
        var Uc = document.createElement("div");
        Uc.setAttribute("oninput", "return;"),
          (ya = typeof Uc.oninput == "function");
      }
      wa = ya;
    } else wa = !1;
    Wc = wa && (!document.documentMode || 9 < document.documentMode);
  }
  function Hc() {
    io && (io.detachEvent("onpropertychange", $c), (ao = io = null));
  }
  function $c(e) {
    if (e.propertyName === "value" && as(ao)) {
      var t = [];
      Bc(t, ao, e, Yi(e)), dc(Vm, t);
    }
  }
  function Bm(e, t, o) {
    e === "focusin"
      ? (Hc(), (io = t), (ao = o), io.attachEvent("onpropertychange", $c))
      : e === "focusout" && Hc();
  }
  function Wm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return as(ao);
  }
  function Um(e, t) {
    if (e === "click") return as(t);
  }
  function Hm(e, t) {
    if (e === "input" || e === "change") return as(t);
  }
  function $m(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Rt = typeof Object.is == "function" ? Object.is : $m;
  function lo(e, t) {
    if (Rt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var o = Object.keys(e),
      i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (i = 0; i < o.length; i++) {
      var l = o[i];
      if (!m.call(t, l) || !Rt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Gc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Qc(e, t) {
    var o = Gc(e);
    e = 0;
    for (var i; o; ) {
      if (o.nodeType === 3) {
        if (((i = e + o.textContent.length), e <= t && i >= t))
          return { node: o, offset: t - e };
        e = i;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Gc(o);
    }
  }
  function Kc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Kc(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Yc() {
    for (var e = window, t = Ke(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var o = typeof t.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) e = t.contentWindow;
      else break;
      t = Ke(e.document);
    }
    return t;
  }
  function ma(e) {
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
  function Gm(e) {
    var t = Yc(),
      o = e.focusedElem,
      i = e.selectionRange;
    if (
      t !== o &&
      o &&
      o.ownerDocument &&
      Kc(o.ownerDocument.documentElement, o)
    ) {
      if (i !== null && ma(o)) {
        if (
          ((t = i.start),
          (e = i.end),
          e === void 0 && (e = t),
          "selectionStart" in o)
        )
          (o.selectionStart = t),
            (o.selectionEnd = Math.min(e, o.value.length));
        else if (
          ((e = ((t = o.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = o.textContent.length,
            c = Math.min(i.start, l);
          (i = i.end === void 0 ? c : Math.min(i.end, l)),
            !e.extend && c > i && ((l = i), (i = c), (c = l)),
            (l = Qc(o, c));
          var w = Qc(o, i);
          l &&
            w &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== w.node ||
              e.focusOffset !== w.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            c > i
              ? (e.addRange(t), e.extend(w.node, w.offset))
              : (t.setEnd(w.node, w.offset), e.addRange(t)));
        }
      }
      for (t = [], e = o; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < t.length; o++)
        (e = t[o]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Qm = p && "documentMode" in document && 11 >= document.documentMode,
    fr = null,
    ka = null,
    uo = null,
    va = !1;
  function qc(e, t, o) {
    var i =
      o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    va ||
      fr == null ||
      fr !== Ke(i) ||
      ((i = fr),
      "selectionStart" in i && ma(i)
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
      (uo && lo(uo, i)) ||
        ((uo = i),
        (i = ds(ka, "onSelect")),
        0 < i.length &&
          ((t = new ua("onSelect", "select", null, t, o)),
          e.push({ event: t, listeners: i }),
          (t.target = fr))));
  }
  function ls(e, t) {
    var o = {};
    return (
      (o[e.toLowerCase()] = t.toLowerCase()),
      (o["Webkit" + e] = "webkit" + t),
      (o["Moz" + e] = "moz" + t),
      o
    );
  }
  var pr = {
      animationend: ls("Animation", "AnimationEnd"),
      animationiteration: ls("Animation", "AnimationIteration"),
      animationstart: ls("Animation", "AnimationStart"),
      transitionend: ls("Transition", "TransitionEnd"),
    },
    ga = {},
    Xc = {};
  p &&
    ((Xc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete pr.animationend.animation,
      delete pr.animationiteration.animation,
      delete pr.animationstart.animation),
    "TransitionEvent" in window || delete pr.transitionend.transition);
  function us(e) {
    if (ga[e]) return ga[e];
    if (!pr[e]) return e;
    var t = pr[e],
      o;
    for (o in t) if (t.hasOwnProperty(o) && o in Xc) return (ga[e] = t[o]);
    return e;
  }
  var Jc = us("animationend"),
    Zc = us("animationiteration"),
    ed = us("animationstart"),
    td = us("transitionend"),
    nd = new Map(),
    rd =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function fn(e, t) {
    nd.set(e, t), d(t, [e]);
  }
  for (var Pa = 0; Pa < rd.length; Pa++) {
    var xa = rd[Pa],
      Km = xa.toLowerCase(),
      Ym = xa[0].toUpperCase() + xa.slice(1);
    fn(Km, "on" + Ym);
  }
  fn(Jc, "onAnimationEnd"),
    fn(Zc, "onAnimationIteration"),
    fn(ed, "onAnimationStart"),
    fn("dblclick", "onDoubleClick"),
    fn("focusin", "onFocus"),
    fn("focusout", "onBlur"),
    fn(td, "onTransitionEnd"),
    f("onMouseEnter", ["mouseout", "mouseover"]),
    f("onMouseLeave", ["mouseout", "mouseover"]),
    f("onPointerEnter", ["pointerout", "pointerover"]),
    f("onPointerLeave", ["pointerout", "pointerover"]),
    d(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    d(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    d(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    d(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    d(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var co =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    qm = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(co),
    );
  function od(e, t, o) {
    var i = e.type || "unknown-event";
    (e.currentTarget = o), Ky(i, t, void 0, e), (e.currentTarget = null);
  }
  function sd(e, t) {
    t = (t & 4) !== 0;
    for (var o = 0; o < e.length; o++) {
      var i = e[o],
        l = i.event;
      i = i.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var w = i.length - 1; 0 <= w; w--) {
            var T = i[w],
              C = T.instance,
              L = T.currentTarget;
            if (((T = T.listener), C !== c && l.isPropagationStopped()))
              break e;
            od(l, T, L), (c = C);
          }
        else
          for (w = 0; w < i.length; w++) {
            if (
              ((T = i[w]),
              (C = T.instance),
              (L = T.currentTarget),
              (T = T.listener),
              C !== c && l.isPropagationStopped())
            )
              break e;
            od(l, T, L), (c = C);
          }
      }
    }
    if (Qo) throw ((e = Zi), (Qo = !1), (Zi = null), e);
  }
  function Re(e, t) {
    var o = t[Oa];
    o === void 0 && (o = t[Oa] = new Set());
    var i = e + "__bubble";
    o.has(i) || (id(t, e, 2, !1), o.add(i));
  }
  function Ta(e, t, o) {
    var i = 0;
    t && (i |= 4), id(o, e, i, t);
  }
  var cs = "_reactListening" + Math.random().toString(36).slice(2);
  function fo(e) {
    if (!e[cs]) {
      (e[cs] = !0),
        a.forEach(function (o) {
          o !== "selectionchange" && (qm.has(o) || Ta(o, !1, e), Ta(o, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[cs] || ((t[cs] = !0), Ta("selectionchange", !1, t));
    }
  }
  function id(e, t, o, i) {
    switch (Rc(t)) {
      case 1:
        var l = cm;
        break;
      case 4:
        l = dm;
        break;
      default:
        l = ia;
    }
    (o = l.bind(null, t, o, e)),
      (l = void 0),
      !Ji ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      i
        ? l !== void 0
          ? e.addEventListener(t, o, { capture: !0, passive: l })
          : e.addEventListener(t, o, !0)
        : l !== void 0
          ? e.addEventListener(t, o, { passive: l })
          : e.addEventListener(t, o, !1);
  }
  function Sa(e, t, o, i, l) {
    var c = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (;;) {
        if (i === null) return;
        var w = i.tag;
        if (w === 3 || w === 4) {
          var T = i.stateNode.containerInfo;
          if (T === l || (T.nodeType === 8 && T.parentNode === l)) break;
          if (w === 4)
            for (w = i.return; w !== null; ) {
              var C = w.tag;
              if (
                (C === 3 || C === 4) &&
                ((C = w.stateNode.containerInfo),
                C === l || (C.nodeType === 8 && C.parentNode === l))
              )
                return;
              w = w.return;
            }
          for (; T !== null; ) {
            if (((w = Vn(T)), w === null)) return;
            if (((C = w.tag), C === 5 || C === 6)) {
              i = c = w;
              continue e;
            }
            T = T.parentNode;
          }
        }
        i = i.return;
      }
    dc(function () {
      var L = c,
        H = Yi(o),
        G = [];
      e: {
        var U = nd.get(e);
        if (U !== void 0) {
          var ne = ua,
            ie = e;
          switch (e) {
            case "keypress":
              if (os(o) === 0) break e;
            case "keydown":
            case "keyup":
              ne = Cm;
              break;
            case "focusin":
              (ie = "focus"), (ne = fa);
              break;
            case "focusout":
              (ie = "blur"), (ne = fa);
              break;
            case "beforeblur":
            case "afterblur":
              ne = fa;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ne = jc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ne = hm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ne = Rm;
              break;
            case Jc:
            case Zc:
            case ed:
              ne = mm;
              break;
            case td:
              ne = _m;
              break;
            case "scroll":
              ne = fm;
              break;
            case "wheel":
              ne = Dm;
              break;
            case "copy":
            case "cut":
            case "paste":
              ne = vm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ne = Ac;
          }
          var ae = (t & 4) !== 0,
            Ve = !ae && e === "scroll",
            j = ae ? (U !== null ? U + "Capture" : null) : U;
          ae = [];
          for (var N = L, A; N !== null; ) {
            A = N;
            var Y = A.stateNode;
            if (
              (A.tag === 5 &&
                Y !== null &&
                ((A = Y),
                j !== null &&
                  ((Y = Qr(N, j)), Y != null && ae.push(po(N, Y, A)))),
              Ve)
            )
              break;
            N = N.return;
          }
          0 < ae.length &&
            ((U = new ne(U, ie, null, o, H)),
            G.push({ event: U, listeners: ae }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((U = e === "mouseover" || e === "pointerover"),
            (ne = e === "mouseout" || e === "pointerout"),
            U &&
              o !== Ki &&
              (ie = o.relatedTarget || o.fromElement) &&
              (Vn(ie) || ie[Kt]))
          )
            break e;
          if (
            (ne || U) &&
            ((U =
              H.window === H
                ? H
                : (U = H.ownerDocument)
                  ? U.defaultView || U.parentWindow
                  : window),
            ne
              ? ((ie = o.relatedTarget || o.toElement),
                (ne = L),
                (ie = ie ? Vn(ie) : null),
                ie !== null &&
                  ((Ve = Fn(ie)),
                  ie !== Ve || (ie.tag !== 5 && ie.tag !== 6)) &&
                  (ie = null))
              : ((ne = null), (ie = L)),
            ne !== ie)
          ) {
            if (
              ((ae = jc),
              (Y = "onMouseLeave"),
              (j = "onMouseEnter"),
              (N = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ae = Ac),
                (Y = "onPointerLeave"),
                (j = "onPointerEnter"),
                (N = "pointer")),
              (Ve = ne == null ? U : yr(ne)),
              (A = ie == null ? U : yr(ie)),
              (U = new ae(Y, N + "leave", ne, o, H)),
              (U.target = Ve),
              (U.relatedTarget = A),
              (Y = null),
              Vn(H) === L &&
                ((ae = new ae(j, N + "enter", ie, o, H)),
                (ae.target = A),
                (ae.relatedTarget = Ve),
                (Y = ae)),
              (Ve = Y),
              ne && ie)
            )
              t: {
                for (ae = ne, j = ie, N = 0, A = ae; A; A = hr(A)) N++;
                for (A = 0, Y = j; Y; Y = hr(Y)) A++;
                for (; 0 < N - A; ) (ae = hr(ae)), N--;
                for (; 0 < A - N; ) (j = hr(j)), A--;
                for (; N--; ) {
                  if (ae === j || (j !== null && ae === j.alternate)) break t;
                  (ae = hr(ae)), (j = hr(j));
                }
                ae = null;
              }
            else ae = null;
            ne !== null && ad(G, U, ne, ae, !1),
              ie !== null && Ve !== null && ad(G, Ve, ie, ae, !0);
          }
        }
        e: {
          if (
            ((U = L ? yr(L) : window),
            (ne = U.nodeName && U.nodeName.toLowerCase()),
            ne === "select" || (ne === "input" && U.type === "file"))
          )
            var le = zm;
          else if (zc(U))
            if (Wc) le = Hm;
            else {
              le = Wm;
              var de = Bm;
            }
          else
            (ne = U.nodeName) &&
              ne.toLowerCase() === "input" &&
              (U.type === "checkbox" || U.type === "radio") &&
              (le = Um);
          if (le && (le = le(e, L))) {
            Bc(G, le, o, H);
            break e;
          }
          de && de(e, U, L),
            e === "focusout" &&
              (de = U._wrapperState) &&
              de.controlled &&
              U.type === "number" &&
              Ui(U, "number", U.value);
        }
        switch (((de = L ? yr(L) : window), e)) {
          case "focusin":
            (zc(de) || de.contentEditable === "true") &&
              ((fr = de), (ka = L), (uo = null));
            break;
          case "focusout":
            uo = ka = fr = null;
            break;
          case "mousedown":
            va = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (va = !1), qc(G, o, H);
            break;
          case "selectionchange":
            if (Qm) break;
          case "keydown":
          case "keyup":
            qc(G, o, H);
        }
        var fe;
        if (ha)
          e: {
            switch (e) {
              case "compositionstart":
                var we = "onCompositionStart";
                break e;
              case "compositionend":
                we = "onCompositionEnd";
                break e;
              case "compositionupdate":
                we = "onCompositionUpdate";
                break e;
            }
            we = void 0;
          }
        else
          dr
            ? Fc(e, o) && (we = "onCompositionEnd")
            : e === "keydown" &&
              o.keyCode === 229 &&
              (we = "onCompositionStart");
        we &&
          (Mc &&
            o.locale !== "ko" &&
            (dr || we !== "onCompositionStart"
              ? we === "onCompositionEnd" && dr && (fe = Oc())
              : ((dn = H),
                (la = "value" in dn ? dn.value : dn.textContent),
                (dr = !0))),
          (de = ds(L, we)),
          0 < de.length &&
            ((we = new Dc(we, e, null, o, H)),
            G.push({ event: we, listeners: de }),
            fe
              ? (we.data = fe)
              : ((fe = Vc(o)), fe !== null && (we.data = fe)))),
          (fe = Mm ? Lm(e, o) : Im(e, o)) &&
            ((L = ds(L, "onBeforeInput")),
            0 < L.length &&
              ((H = new Dc("onBeforeInput", "beforeinput", null, o, H)),
              G.push({ event: H, listeners: L }),
              (H.data = fe)));
      }
      sd(G, t);
    });
  }
  function po(e, t, o) {
    return { instance: e, listener: t, currentTarget: o };
  }
  function ds(e, t) {
    for (var o = t + "Capture", i = []; e !== null; ) {
      var l = e,
        c = l.stateNode;
      l.tag === 5 &&
        c !== null &&
        ((l = c),
        (c = Qr(e, o)),
        c != null && i.unshift(po(e, c, l)),
        (c = Qr(e, t)),
        c != null && i.push(po(e, c, l))),
        (e = e.return);
    }
    return i;
  }
  function hr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ad(e, t, o, i, l) {
    for (var c = t._reactName, w = []; o !== null && o !== i; ) {
      var T = o,
        C = T.alternate,
        L = T.stateNode;
      if (C !== null && C === i) break;
      T.tag === 5 &&
        L !== null &&
        ((T = L),
        l
          ? ((C = Qr(o, c)), C != null && w.unshift(po(o, C, T)))
          : l || ((C = Qr(o, c)), C != null && w.push(po(o, C, T)))),
        (o = o.return);
    }
    w.length !== 0 && e.push({ event: t, listeners: w });
  }
  var Xm = /\r\n?/g,
    Jm = /\u0000|\uFFFD/g;
  function ld(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Xm,
        `
`,
      )
      .replace(Jm, "");
  }
  function fs(e, t, o) {
    if (((t = ld(t)), ld(e) !== t && o)) throw Error(s(425));
  }
  function ps() {}
  var ba = null,
    Ca = null;
  function Ea(e, t) {
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
  var Na = typeof setTimeout == "function" ? setTimeout : void 0,
    Zm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ud = typeof Promise == "function" ? Promise : void 0,
    ek =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ud < "u"
          ? function (e) {
              return ud.resolve(null).then(e).catch(tk);
            }
          : Na;
  function tk(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ra(e, t) {
    var o = t,
      i = 0;
    do {
      var l = o.nextSibling;
      if ((e.removeChild(o), l && l.nodeType === 8))
        if (((o = l.data), o === "/$")) {
          if (i === 0) {
            e.removeChild(l), no(t);
            return;
          }
          i--;
        } else (o !== "$" && o !== "$?" && o !== "$!") || i++;
      o = l;
    } while (o);
    no(t);
  }
  function pn(e) {
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
  function cd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var o = e.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (t === 0) return e;
          t--;
        } else o === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var wr = Math.random().toString(36).slice(2),
    zt = "__reactFiber$" + wr,
    ho = "__reactProps$" + wr,
    Kt = "__reactContainer$" + wr,
    Oa = "__reactEvents$" + wr,
    nk = "__reactListeners$" + wr,
    rk = "__reactHandles$" + wr;
  function Vn(e) {
    var t = e[zt];
    if (t) return t;
    for (var o = e.parentNode; o; ) {
      if ((t = o[Kt] || o[zt])) {
        if (
          ((o = t.alternate),
          t.child !== null || (o !== null && o.child !== null))
        )
          for (e = cd(e); e !== null; ) {
            if ((o = e[zt])) return o;
            e = cd(e);
          }
        return t;
      }
      (e = o), (o = e.parentNode);
    }
    return null;
  }
  function wo(e) {
    return (
      (e = e[zt] || e[Kt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function yr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function hs(e) {
    return e[ho] || null;
  }
  var _a = [],
    mr = -1;
  function hn(e) {
    return { current: e };
  }
  function Oe(e) {
    0 > mr || ((e.current = _a[mr]), (_a[mr] = null), mr--);
  }
  function Ne(e, t) {
    mr++, (_a[mr] = e.current), (e.current = t);
  }
  var wn = {},
    Je = hn(wn),
    st = hn(!1),
    zn = wn;
  function kr(e, t) {
    var o = e.type.contextTypes;
    if (!o) return wn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
      return i.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      c;
    for (c in o) l[c] = t[c];
    return (
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function it(e) {
    return (e = e.childContextTypes), e != null;
  }
  function ws() {
    Oe(st), Oe(Je);
  }
  function dd(e, t, o) {
    if (Je.current !== wn) throw Error(s(168));
    Ne(Je, t), Ne(st, o);
  }
  function fd(e, t, o) {
    var i = e.stateNode;
    if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
      return o;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(s(108, Z(e) || "Unknown", l));
    return X({}, o, i);
  }
  function ys(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        wn),
      (zn = Je.current),
      Ne(Je, e),
      Ne(st, st.current),
      !0
    );
  }
  function pd(e, t, o) {
    var i = e.stateNode;
    if (!i) throw Error(s(169));
    o
      ? ((e = fd(e, t, zn)),
        (i.__reactInternalMemoizedMergedChildContext = e),
        Oe(st),
        Oe(Je),
        Ne(Je, e))
      : Oe(st),
      Ne(st, o);
  }
  var Yt = null,
    ms = !1,
    ja = !1;
  function hd(e) {
    Yt === null ? (Yt = [e]) : Yt.push(e);
  }
  function ok(e) {
    (ms = !0), hd(e);
  }
  function yn() {
    if (!ja && Yt !== null) {
      ja = !0;
      var e = 0,
        t = Ce;
      try {
        var o = Yt;
        for (Ce = 1; e < o.length; e++) {
          var i = o[e];
          do i = i(!0);
          while (i !== null);
        }
        (Yt = null), (ms = !1);
      } catch (l) {
        throw (Yt !== null && (Yt = Yt.slice(e + 1)), yc(ea, yn), l);
      } finally {
        (Ce = t), (ja = !1);
      }
    }
    return null;
  }
  var vr = [],
    gr = 0,
    ks = null,
    vs = 0,
    vt = [],
    gt = 0,
    Bn = null,
    qt = 1,
    Xt = "";
  function Wn(e, t) {
    (vr[gr++] = vs), (vr[gr++] = ks), (ks = e), (vs = t);
  }
  function wd(e, t, o) {
    (vt[gt++] = qt), (vt[gt++] = Xt), (vt[gt++] = Bn), (Bn = e);
    var i = qt;
    e = Xt;
    var l = 32 - Nt(i) - 1;
    (i &= ~(1 << l)), (o += 1);
    var c = 32 - Nt(t) + l;
    if (30 < c) {
      var w = l - (l % 5);
      (c = (i & ((1 << w) - 1)).toString(32)),
        (i >>= w),
        (l -= w),
        (qt = (1 << (32 - Nt(t) + l)) | (o << l) | i),
        (Xt = c + e);
    } else (qt = (1 << c) | (o << l) | i), (Xt = e);
  }
  function Da(e) {
    e.return !== null && (Wn(e, 1), wd(e, 1, 0));
  }
  function Aa(e) {
    for (; e === ks; )
      (ks = vr[--gr]), (vr[gr] = null), (vs = vr[--gr]), (vr[gr] = null);
    for (; e === Bn; )
      (Bn = vt[--gt]),
        (vt[gt] = null),
        (Xt = vt[--gt]),
        (vt[gt] = null),
        (qt = vt[--gt]),
        (vt[gt] = null);
  }
  var pt = null,
    ht = null,
    De = !1,
    Ot = null;
  function yd(e, t) {
    var o = St(5, null, null, 0);
    (o.elementType = "DELETED"),
      (o.stateNode = t),
      (o.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [o]), (e.flags |= 16)) : t.push(o);
  }
  function md(e, t) {
    switch (e.tag) {
      case 5:
        var o = e.type;
        return (
          (t =
            t.nodeType !== 1 || o.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (pt = e), (ht = pn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (pt = e), (ht = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((o = Bn !== null ? { id: qt, overflow: Xt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: o,
                retryLane: 1073741824,
              }),
              (o = St(18, null, null, 0)),
              (o.stateNode = t),
              (o.return = e),
              (e.child = o),
              (pt = e),
              (ht = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ma(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function La(e) {
    if (De) {
      var t = ht;
      if (t) {
        var o = t;
        if (!md(e, t)) {
          if (Ma(e)) throw Error(s(418));
          t = pn(o.nextSibling);
          var i = pt;
          t && md(e, t)
            ? yd(i, o)
            : ((e.flags = (e.flags & -4097) | 2), (De = !1), (pt = e));
        }
      } else {
        if (Ma(e)) throw Error(s(418));
        (e.flags = (e.flags & -4097) | 2), (De = !1), (pt = e);
      }
    }
  }
  function kd(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    pt = e;
  }
  function gs(e) {
    if (e !== pt) return !1;
    if (!De) return kd(e), (De = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Ea(e.type, e.memoizedProps))),
      t && (t = ht))
    ) {
      if (Ma(e)) throw (vd(), Error(s(418)));
      for (; t; ) yd(e, t), (t = pn(t.nextSibling));
    }
    if ((kd(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var o = e.data;
            if (o === "/$") {
              if (t === 0) {
                ht = pn(e.nextSibling);
                break e;
              }
              t--;
            } else (o !== "$" && o !== "$!" && o !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        ht = null;
      }
    } else ht = pt ? pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function vd() {
    for (var e = ht; e; ) e = pn(e.nextSibling);
  }
  function Pr() {
    (ht = pt = null), (De = !1);
  }
  function Ia(e) {
    Ot === null ? (Ot = [e]) : Ot.push(e);
  }
  var sk = M.ReactCurrentBatchConfig;
  function yo(e, t, o) {
    if (
      ((e = o.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (o._owner) {
        if (((o = o._owner), o)) {
          if (o.tag !== 1) throw Error(s(309));
          var i = o.stateNode;
        }
        if (!i) throw Error(s(147, e));
        var l = i,
          c = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === c
          ? t.ref
          : ((t = function (w) {
              var T = l.refs;
              w === null ? delete T[c] : (T[c] = w);
            }),
            (t._stringRef = c),
            t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!o._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Ps(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        s(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function gd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Pd(e) {
    function t(j, N) {
      if (e) {
        var A = j.deletions;
        A === null ? ((j.deletions = [N]), (j.flags |= 16)) : A.push(N);
      }
    }
    function o(j, N) {
      if (!e) return null;
      for (; N !== null; ) t(j, N), (N = N.sibling);
      return null;
    }
    function i(j, N) {
      for (j = new Map(); N !== null; )
        N.key !== null ? j.set(N.key, N) : j.set(N.index, N), (N = N.sibling);
      return j;
    }
    function l(j, N) {
      return (j = Sn(j, N)), (j.index = 0), (j.sibling = null), j;
    }
    function c(j, N, A) {
      return (
        (j.index = A),
        e
          ? ((A = j.alternate),
            A !== null
              ? ((A = A.index), A < N ? ((j.flags |= 2), N) : A)
              : ((j.flags |= 2), N))
          : ((j.flags |= 1048576), N)
      );
    }
    function w(j) {
      return e && j.alternate === null && (j.flags |= 2), j;
    }
    function T(j, N, A, Y) {
      return N === null || N.tag !== 6
        ? ((N = Nl(A, j.mode, Y)), (N.return = j), N)
        : ((N = l(N, A)), (N.return = j), N);
    }
    function C(j, N, A, Y) {
      var le = A.type;
      return le === z
        ? H(j, N, A.props.children, Y, A.key)
        : N !== null &&
            (N.elementType === le ||
              (typeof le == "object" &&
                le !== null &&
                le.$$typeof === oe &&
                gd(le) === N.type))
          ? ((Y = l(N, A.props)), (Y.ref = yo(j, N, A)), (Y.return = j), Y)
          : ((Y = $s(A.type, A.key, A.props, null, j.mode, Y)),
            (Y.ref = yo(j, N, A)),
            (Y.return = j),
            Y);
    }
    function L(j, N, A, Y) {
      return N === null ||
        N.tag !== 4 ||
        N.stateNode.containerInfo !== A.containerInfo ||
        N.stateNode.implementation !== A.implementation
        ? ((N = Rl(A, j.mode, Y)), (N.return = j), N)
        : ((N = l(N, A.children || [])), (N.return = j), N);
    }
    function H(j, N, A, Y, le) {
      return N === null || N.tag !== 7
        ? ((N = qn(A, j.mode, Y, le)), (N.return = j), N)
        : ((N = l(N, A)), (N.return = j), N);
    }
    function G(j, N, A) {
      if ((typeof N == "string" && N !== "") || typeof N == "number")
        return (N = Nl("" + N, j.mode, A)), (N.return = j), N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case V:
            return (
              (A = $s(N.type, N.key, N.props, null, j.mode, A)),
              (A.ref = yo(j, null, N)),
              (A.return = j),
              A
            );
          case $:
            return (N = Rl(N, j.mode, A)), (N.return = j), N;
          case oe:
            var Y = N._init;
            return G(j, Y(N._payload), A);
        }
        if (Hr(N) || q(N))
          return (N = qn(N, j.mode, A, null)), (N.return = j), N;
        Ps(j, N);
      }
      return null;
    }
    function U(j, N, A, Y) {
      var le = N !== null ? N.key : null;
      if ((typeof A == "string" && A !== "") || typeof A == "number")
        return le !== null ? null : T(j, N, "" + A, Y);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case V:
            return A.key === le ? C(j, N, A, Y) : null;
          case $:
            return A.key === le ? L(j, N, A, Y) : null;
          case oe:
            return (le = A._init), U(j, N, le(A._payload), Y);
        }
        if (Hr(A) || q(A)) return le !== null ? null : H(j, N, A, Y, null);
        Ps(j, A);
      }
      return null;
    }
    function ne(j, N, A, Y, le) {
      if ((typeof Y == "string" && Y !== "") || typeof Y == "number")
        return (j = j.get(A) || null), T(N, j, "" + Y, le);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case V:
            return (
              (j = j.get(Y.key === null ? A : Y.key) || null), C(N, j, Y, le)
            );
          case $:
            return (
              (j = j.get(Y.key === null ? A : Y.key) || null), L(N, j, Y, le)
            );
          case oe:
            var de = Y._init;
            return ne(j, N, A, de(Y._payload), le);
        }
        if (Hr(Y) || q(Y)) return (j = j.get(A) || null), H(N, j, Y, le, null);
        Ps(N, Y);
      }
      return null;
    }
    function ie(j, N, A, Y) {
      for (
        var le = null, de = null, fe = N, we = (N = 0), Qe = null;
        fe !== null && we < A.length;
        we++
      ) {
        fe.index > we ? ((Qe = fe), (fe = null)) : (Qe = fe.sibling);
        var Te = U(j, fe, A[we], Y);
        if (Te === null) {
          fe === null && (fe = Qe);
          break;
        }
        e && fe && Te.alternate === null && t(j, fe),
          (N = c(Te, N, we)),
          de === null ? (le = Te) : (de.sibling = Te),
          (de = Te),
          (fe = Qe);
      }
      if (we === A.length) return o(j, fe), De && Wn(j, we), le;
      if (fe === null) {
        for (; we < A.length; we++)
          (fe = G(j, A[we], Y)),
            fe !== null &&
              ((N = c(fe, N, we)),
              de === null ? (le = fe) : (de.sibling = fe),
              (de = fe));
        return De && Wn(j, we), le;
      }
      for (fe = i(j, fe); we < A.length; we++)
        (Qe = ne(fe, j, we, A[we], Y)),
          Qe !== null &&
            (e &&
              Qe.alternate !== null &&
              fe.delete(Qe.key === null ? we : Qe.key),
            (N = c(Qe, N, we)),
            de === null ? (le = Qe) : (de.sibling = Qe),
            (de = Qe));
      return (
        e &&
          fe.forEach(function (bn) {
            return t(j, bn);
          }),
        De && Wn(j, we),
        le
      );
    }
    function ae(j, N, A, Y) {
      var le = q(A);
      if (typeof le != "function") throw Error(s(150));
      if (((A = le.call(A)), A == null)) throw Error(s(151));
      for (
        var de = (le = null), fe = N, we = (N = 0), Qe = null, Te = A.next();
        fe !== null && !Te.done;
        we++, Te = A.next()
      ) {
        fe.index > we ? ((Qe = fe), (fe = null)) : (Qe = fe.sibling);
        var bn = U(j, fe, Te.value, Y);
        if (bn === null) {
          fe === null && (fe = Qe);
          break;
        }
        e && fe && bn.alternate === null && t(j, fe),
          (N = c(bn, N, we)),
          de === null ? (le = bn) : (de.sibling = bn),
          (de = bn),
          (fe = Qe);
      }
      if (Te.done) return o(j, fe), De && Wn(j, we), le;
      if (fe === null) {
        for (; !Te.done; we++, Te = A.next())
          (Te = G(j, Te.value, Y)),
            Te !== null &&
              ((N = c(Te, N, we)),
              de === null ? (le = Te) : (de.sibling = Te),
              (de = Te));
        return De && Wn(j, we), le;
      }
      for (fe = i(j, fe); !Te.done; we++, Te = A.next())
        (Te = ne(fe, j, we, Te.value, Y)),
          Te !== null &&
            (e &&
              Te.alternate !== null &&
              fe.delete(Te.key === null ? we : Te.key),
            (N = c(Te, N, we)),
            de === null ? (le = Te) : (de.sibling = Te),
            (de = Te));
      return (
        e &&
          fe.forEach(function (Fk) {
            return t(j, Fk);
          }),
        De && Wn(j, we),
        le
      );
    }
    function Ve(j, N, A, Y) {
      if (
        (typeof A == "object" &&
          A !== null &&
          A.type === z &&
          A.key === null &&
          (A = A.props.children),
        typeof A == "object" && A !== null)
      ) {
        switch (A.$$typeof) {
          case V:
            e: {
              for (var le = A.key, de = N; de !== null; ) {
                if (de.key === le) {
                  if (((le = A.type), le === z)) {
                    if (de.tag === 7) {
                      o(j, de.sibling),
                        (N = l(de, A.props.children)),
                        (N.return = j),
                        (j = N);
                      break e;
                    }
                  } else if (
                    de.elementType === le ||
                    (typeof le == "object" &&
                      le !== null &&
                      le.$$typeof === oe &&
                      gd(le) === de.type)
                  ) {
                    o(j, de.sibling),
                      (N = l(de, A.props)),
                      (N.ref = yo(j, de, A)),
                      (N.return = j),
                      (j = N);
                    break e;
                  }
                  o(j, de);
                  break;
                } else t(j, de);
                de = de.sibling;
              }
              A.type === z
                ? ((N = qn(A.props.children, j.mode, Y, A.key)),
                  (N.return = j),
                  (j = N))
                : ((Y = $s(A.type, A.key, A.props, null, j.mode, Y)),
                  (Y.ref = yo(j, N, A)),
                  (Y.return = j),
                  (j = Y));
            }
            return w(j);
          case $:
            e: {
              for (de = A.key; N !== null; ) {
                if (N.key === de)
                  if (
                    N.tag === 4 &&
                    N.stateNode.containerInfo === A.containerInfo &&
                    N.stateNode.implementation === A.implementation
                  ) {
                    o(j, N.sibling),
                      (N = l(N, A.children || [])),
                      (N.return = j),
                      (j = N);
                    break e;
                  } else {
                    o(j, N);
                    break;
                  }
                else t(j, N);
                N = N.sibling;
              }
              (N = Rl(A, j.mode, Y)), (N.return = j), (j = N);
            }
            return w(j);
          case oe:
            return (de = A._init), Ve(j, N, de(A._payload), Y);
        }
        if (Hr(A)) return ie(j, N, A, Y);
        if (q(A)) return ae(j, N, A, Y);
        Ps(j, A);
      }
      return (typeof A == "string" && A !== "") || typeof A == "number"
        ? ((A = "" + A),
          N !== null && N.tag === 6
            ? (o(j, N.sibling), (N = l(N, A)), (N.return = j), (j = N))
            : (o(j, N), (N = Nl(A, j.mode, Y)), (N.return = j), (j = N)),
          w(j))
        : o(j, N);
    }
    return Ve;
  }
  var xr = Pd(!0),
    xd = Pd(!1),
    xs = hn(null),
    Ts = null,
    Tr = null,
    Fa = null;
  function Va() {
    Fa = Tr = Ts = null;
  }
  function za(e) {
    var t = xs.current;
    Oe(xs), (e._currentValue = t);
  }
  function Ba(e, t, o) {
    for (; e !== null; ) {
      var i = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
          : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === o)
      )
        break;
      e = e.return;
    }
  }
  function Sr(e, t) {
    (Ts = e),
      (Fa = Tr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (at = !0), (e.firstContext = null));
  }
  function Pt(e) {
    var t = e._currentValue;
    if (Fa !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Tr === null)) {
        if (Ts === null) throw Error(s(308));
        (Tr = e), (Ts.dependencies = { lanes: 0, firstContext: e });
      } else Tr = Tr.next = e;
    return t;
  }
  var Un = null;
  function Wa(e) {
    Un === null ? (Un = [e]) : Un.push(e);
  }
  function Td(e, t, o, i) {
    var l = t.interleaved;
    return (
      l === null ? ((o.next = o), Wa(t)) : ((o.next = l.next), (l.next = o)),
      (t.interleaved = o),
      Jt(e, i)
    );
  }
  function Jt(e, t) {
    e.lanes |= t;
    var o = e.alternate;
    for (o !== null && (o.lanes |= t), o = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (o = e.alternate),
        o !== null && (o.childLanes |= t),
        (o = e),
        (e = e.return);
    return o.tag === 3 ? o.stateNode : null;
  }
  var mn = !1;
  function Ua(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Sd(e, t) {
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
  function Zt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function kn(e, t, o) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (xe & 2) !== 0)) {
      var l = i.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (i.pending = t),
        Jt(e, o)
      );
    }
    return (
      (l = i.interleaved),
      l === null ? ((t.next = t), Wa(i)) : ((t.next = l.next), (l.next = t)),
      (i.interleaved = t),
      Jt(e, o)
    );
  }
  function Ss(e, t, o) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (o & 4194240) !== 0))
    ) {
      var i = t.lanes;
      (i &= e.pendingLanes), (o |= i), (t.lanes = o), ra(e, o);
    }
  }
  function bd(e, t) {
    var o = e.updateQueue,
      i = e.alternate;
    if (i !== null && ((i = i.updateQueue), o === i)) {
      var l = null,
        c = null;
      if (((o = o.firstBaseUpdate), o !== null)) {
        do {
          var w = {
            eventTime: o.eventTime,
            lane: o.lane,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          };
          c === null ? (l = c = w) : (c = c.next = w), (o = o.next);
        } while (o !== null);
        c === null ? (l = c = t) : (c = c.next = t);
      } else l = c = t;
      (o = {
        baseState: i.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: c,
        shared: i.shared,
        effects: i.effects,
      }),
        (e.updateQueue = o);
      return;
    }
    (e = o.lastBaseUpdate),
      e === null ? (o.firstBaseUpdate = t) : (e.next = t),
      (o.lastBaseUpdate = t);
  }
  function bs(e, t, o, i) {
    var l = e.updateQueue;
    mn = !1;
    var c = l.firstBaseUpdate,
      w = l.lastBaseUpdate,
      T = l.shared.pending;
    if (T !== null) {
      l.shared.pending = null;
      var C = T,
        L = C.next;
      (C.next = null), w === null ? (c = L) : (w.next = L), (w = C);
      var H = e.alternate;
      H !== null &&
        ((H = H.updateQueue),
        (T = H.lastBaseUpdate),
        T !== w &&
          (T === null ? (H.firstBaseUpdate = L) : (T.next = L),
          (H.lastBaseUpdate = C)));
    }
    if (c !== null) {
      var G = l.baseState;
      (w = 0), (H = L = C = null), (T = c);
      do {
        var U = T.lane,
          ne = T.eventTime;
        if ((i & U) === U) {
          H !== null &&
            (H = H.next =
              {
                eventTime: ne,
                lane: 0,
                tag: T.tag,
                payload: T.payload,
                callback: T.callback,
                next: null,
              });
          e: {
            var ie = e,
              ae = T;
            switch (((U = t), (ne = o), ae.tag)) {
              case 1:
                if (((ie = ae.payload), typeof ie == "function")) {
                  G = ie.call(ne, G, U);
                  break e;
                }
                G = ie;
                break e;
              case 3:
                ie.flags = (ie.flags & -65537) | 128;
              case 0:
                if (
                  ((ie = ae.payload),
                  (U = typeof ie == "function" ? ie.call(ne, G, U) : ie),
                  U == null)
                )
                  break e;
                G = X({}, G, U);
                break e;
              case 2:
                mn = !0;
            }
          }
          T.callback !== null &&
            T.lane !== 0 &&
            ((e.flags |= 64),
            (U = l.effects),
            U === null ? (l.effects = [T]) : U.push(T));
        } else
          (ne = {
            eventTime: ne,
            lane: U,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null,
          }),
            H === null ? ((L = H = ne), (C = G)) : (H = H.next = ne),
            (w |= U);
        if (((T = T.next), T === null)) {
          if (((T = l.shared.pending), T === null)) break;
          (U = T),
            (T = U.next),
            (U.next = null),
            (l.lastBaseUpdate = U),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (H === null && (C = G),
        (l.baseState = C),
        (l.firstBaseUpdate = L),
        (l.lastBaseUpdate = H),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (w |= l.lane), (l = l.next);
        while (l !== t);
      } else c === null && (l.shared.lanes = 0);
      (Gn |= w), (e.lanes = w), (e.memoizedState = G);
    }
  }
  function Cd(e, t, o) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var i = e[t],
          l = i.callback;
        if (l !== null) {
          if (((i.callback = null), (i = o), typeof l != "function"))
            throw Error(s(191, l));
          l.call(i);
        }
      }
  }
  var mo = {},
    Bt = hn(mo),
    ko = hn(mo),
    vo = hn(mo);
  function Hn(e) {
    if (e === mo) throw Error(s(174));
    return e;
  }
  function Ha(e, t) {
    switch ((Ne(vo, t), Ne(ko, e), Ne(Bt, mo), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : $i(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = $i(t, e));
    }
    Oe(Bt), Ne(Bt, t);
  }
  function br() {
    Oe(Bt), Oe(ko), Oe(vo);
  }
  function Ed(e) {
    Hn(vo.current);
    var t = Hn(Bt.current),
      o = $i(t, e.type);
    t !== o && (Ne(ko, e), Ne(Bt, o));
  }
  function $a(e) {
    ko.current === e && (Oe(Bt), Oe(ko));
  }
  var Me = hn(0);
  function Cs(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var o = t.memoizedState;
        if (
          o !== null &&
          ((o = o.dehydrated), o === null || o.data === "$?" || o.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
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
  var Ga = [];
  function Qa() {
    for (var e = 0; e < Ga.length; e++)
      Ga[e]._workInProgressVersionPrimary = null;
    Ga.length = 0;
  }
  var Es = M.ReactCurrentDispatcher,
    Ka = M.ReactCurrentBatchConfig,
    $n = 0,
    Le = null,
    We = null,
    $e = null,
    Ns = !1,
    go = !1,
    Po = 0,
    ik = 0;
  function Ze() {
    throw Error(s(321));
  }
  function Ya(e, t) {
    if (t === null) return !1;
    for (var o = 0; o < t.length && o < e.length; o++)
      if (!Rt(e[o], t[o])) return !1;
    return !0;
  }
  function qa(e, t, o, i, l, c) {
    if (
      (($n = c),
      (Le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Es.current = e === null || e.memoizedState === null ? ck : dk),
      (e = o(i, l)),
      go)
    ) {
      c = 0;
      do {
        if (((go = !1), (Po = 0), 25 <= c)) throw Error(s(301));
        (c += 1),
          ($e = We = null),
          (t.updateQueue = null),
          (Es.current = fk),
          (e = o(i, l));
      } while (go);
    }
    if (
      ((Es.current = _s),
      (t = We !== null && We.next !== null),
      ($n = 0),
      ($e = We = Le = null),
      (Ns = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function Xa() {
    var e = Po !== 0;
    return (Po = 0), e;
  }
  function Wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return $e === null ? (Le.memoizedState = $e = e) : ($e = $e.next = e), $e;
  }
  function xt() {
    if (We === null) {
      var e = Le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = We.next;
    var t = $e === null ? Le.memoizedState : $e.next;
    if (t !== null) ($e = t), (We = e);
    else {
      if (e === null) throw Error(s(310));
      (We = e),
        (e = {
          memoizedState: We.memoizedState,
          baseState: We.baseState,
          baseQueue: We.baseQueue,
          queue: We.queue,
          next: null,
        }),
        $e === null ? (Le.memoizedState = $e = e) : ($e = $e.next = e);
    }
    return $e;
  }
  function xo(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ja(e) {
    var t = xt(),
      o = t.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = e;
    var i = We,
      l = i.baseQueue,
      c = o.pending;
    if (c !== null) {
      if (l !== null) {
        var w = l.next;
        (l.next = c.next), (c.next = w);
      }
      (i.baseQueue = l = c), (o.pending = null);
    }
    if (l !== null) {
      (c = l.next), (i = i.baseState);
      var T = (w = null),
        C = null,
        L = c;
      do {
        var H = L.lane;
        if (($n & H) === H)
          C !== null &&
            (C = C.next =
              {
                lane: 0,
                action: L.action,
                hasEagerState: L.hasEagerState,
                eagerState: L.eagerState,
                next: null,
              }),
            (i = L.hasEagerState ? L.eagerState : e(i, L.action));
        else {
          var G = {
            lane: H,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null,
          };
          C === null ? ((T = C = G), (w = i)) : (C = C.next = G),
            (Le.lanes |= H),
            (Gn |= H);
        }
        L = L.next;
      } while (L !== null && L !== c);
      C === null ? (w = i) : (C.next = T),
        Rt(i, t.memoizedState) || (at = !0),
        (t.memoizedState = i),
        (t.baseState = w),
        (t.baseQueue = C),
        (o.lastRenderedState = i);
    }
    if (((e = o.interleaved), e !== null)) {
      l = e;
      do (c = l.lane), (Le.lanes |= c), (Gn |= c), (l = l.next);
      while (l !== e);
    } else l === null && (o.lanes = 0);
    return [t.memoizedState, o.dispatch];
  }
  function Za(e) {
    var t = xt(),
      o = t.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = e;
    var i = o.dispatch,
      l = o.pending,
      c = t.memoizedState;
    if (l !== null) {
      o.pending = null;
      var w = (l = l.next);
      do (c = e(c, w.action)), (w = w.next);
      while (w !== l);
      Rt(c, t.memoizedState) || (at = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (o.lastRenderedState = c);
    }
    return [c, i];
  }
  function Nd() {}
  function Rd(e, t) {
    var o = Le,
      i = xt(),
      l = t(),
      c = !Rt(i.memoizedState, l);
    if (
      (c && ((i.memoizedState = l), (at = !0)),
      (i = i.queue),
      el(jd.bind(null, o, i, e), [e]),
      i.getSnapshot !== t || c || ($e !== null && $e.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        To(9, _d.bind(null, o, i, l, t), void 0, null),
        Ge === null)
      )
        throw Error(s(349));
      ($n & 30) !== 0 || Od(o, t, l);
    }
    return l;
  }
  function Od(e, t, o) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: o }),
      (t = Le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Le.updateQueue = t),
          (t.stores = [e]))
        : ((o = t.stores), o === null ? (t.stores = [e]) : o.push(e));
  }
  function _d(e, t, o, i) {
    (t.value = o), (t.getSnapshot = i), Dd(t) && Ad(e);
  }
  function jd(e, t, o) {
    return o(function () {
      Dd(t) && Ad(e);
    });
  }
  function Dd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var o = t();
      return !Rt(e, o);
    } catch {
      return !0;
    }
  }
  function Ad(e) {
    var t = Jt(e, 1);
    t !== null && At(t, e, 1, -1);
  }
  function Md(e) {
    var t = Wt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xo,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = uk.bind(null, Le, e)),
      [t.memoizedState, e]
    );
  }
  function To(e, t, o, i) {
    return (
      (e = { tag: e, create: t, destroy: o, deps: i, next: null }),
      (t = Le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Le.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((o = t.lastEffect),
          o === null
            ? (t.lastEffect = e.next = e)
            : ((i = o.next), (o.next = e), (e.next = i), (t.lastEffect = e))),
      e
    );
  }
  function Ld() {
    return xt().memoizedState;
  }
  function Rs(e, t, o, i) {
    var l = Wt();
    (Le.flags |= e),
      (l.memoizedState = To(1 | t, o, void 0, i === void 0 ? null : i));
  }
  function Os(e, t, o, i) {
    var l = xt();
    i = i === void 0 ? null : i;
    var c = void 0;
    if (We !== null) {
      var w = We.memoizedState;
      if (((c = w.destroy), i !== null && Ya(i, w.deps))) {
        l.memoizedState = To(t, o, c, i);
        return;
      }
    }
    (Le.flags |= e), (l.memoizedState = To(1 | t, o, c, i));
  }
  function Id(e, t) {
    return Rs(8390656, 8, e, t);
  }
  function el(e, t) {
    return Os(2048, 8, e, t);
  }
  function Fd(e, t) {
    return Os(4, 2, e, t);
  }
  function Vd(e, t) {
    return Os(4, 4, e, t);
  }
  function zd(e, t) {
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
  function Bd(e, t, o) {
    return (
      (o = o != null ? o.concat([e]) : null), Os(4, 4, zd.bind(null, t, e), o)
    );
  }
  function tl() {}
  function Wd(e, t) {
    var o = xt();
    t = t === void 0 ? null : t;
    var i = o.memoizedState;
    return i !== null && t !== null && Ya(t, i[1])
      ? i[0]
      : ((o.memoizedState = [e, t]), e);
  }
  function Ud(e, t) {
    var o = xt();
    t = t === void 0 ? null : t;
    var i = o.memoizedState;
    return i !== null && t !== null && Ya(t, i[1])
      ? i[0]
      : ((e = e()), (o.memoizedState = [e, t]), e);
  }
  function Hd(e, t, o) {
    return ($n & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (at = !0)), (e.memoizedState = o))
      : (Rt(o, t) ||
          ((o = gc()), (Le.lanes |= o), (Gn |= o), (e.baseState = !0)),
        t);
  }
  function ak(e, t) {
    var o = Ce;
    (Ce = o !== 0 && 4 > o ? o : 4), e(!0);
    var i = Ka.transition;
    Ka.transition = {};
    try {
      e(!1), t();
    } finally {
      (Ce = o), (Ka.transition = i);
    }
  }
  function $d() {
    return xt().memoizedState;
  }
  function lk(e, t, o) {
    var i = xn(e);
    if (
      ((o = {
        lane: i,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Gd(e))
    )
      Qd(t, o);
    else if (((o = Td(e, t, o, i)), o !== null)) {
      var l = rt();
      At(o, e, i, l), Kd(o, t, i);
    }
  }
  function uk(e, t, o) {
    var i = xn(e),
      l = {
        lane: i,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Gd(e)) Qd(t, l);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var w = t.lastRenderedState,
            T = c(w, o);
          if (((l.hasEagerState = !0), (l.eagerState = T), Rt(T, w))) {
            var C = t.interleaved;
            C === null
              ? ((l.next = l), Wa(t))
              : ((l.next = C.next), (C.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {}
      (o = Td(e, t, l, i)),
        o !== null && ((l = rt()), At(o, e, i, l), Kd(o, t, i));
    }
  }
  function Gd(e) {
    var t = e.alternate;
    return e === Le || (t !== null && t === Le);
  }
  function Qd(e, t) {
    go = Ns = !0;
    var o = e.pending;
    o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (e.pending = t);
  }
  function Kd(e, t, o) {
    if ((o & 4194240) !== 0) {
      var i = t.lanes;
      (i &= e.pendingLanes), (o |= i), (t.lanes = o), ra(e, o);
    }
  }
  var _s = {
      readContext: Pt,
      useCallback: Ze,
      useContext: Ze,
      useEffect: Ze,
      useImperativeHandle: Ze,
      useInsertionEffect: Ze,
      useLayoutEffect: Ze,
      useMemo: Ze,
      useReducer: Ze,
      useRef: Ze,
      useState: Ze,
      useDebugValue: Ze,
      useDeferredValue: Ze,
      useTransition: Ze,
      useMutableSource: Ze,
      useSyncExternalStore: Ze,
      useId: Ze,
      unstable_isNewReconciler: !1,
    },
    ck = {
      readContext: Pt,
      useCallback: function (e, t) {
        return (Wt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Pt,
      useEffect: Id,
      useImperativeHandle: function (e, t, o) {
        return (
          (o = o != null ? o.concat([e]) : null),
          Rs(4194308, 4, zd.bind(null, t, e), o)
        );
      },
      useLayoutEffect: function (e, t) {
        return Rs(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Rs(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var o = Wt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (o.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, o) {
        var i = Wt();
        return (
          (t = o !== void 0 ? o(t) : t),
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
          (e = e.dispatch = lk.bind(null, Le, e)),
          [i.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Wt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Md,
      useDebugValue: tl,
      useDeferredValue: function (e) {
        return (Wt().memoizedState = e);
      },
      useTransition: function () {
        var e = Md(!1),
          t = e[0];
        return (e = ak.bind(null, e[1])), (Wt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, o) {
        var i = Le,
          l = Wt();
        if (De) {
          if (o === void 0) throw Error(s(407));
          o = o();
        } else {
          if (((o = t()), Ge === null)) throw Error(s(349));
          ($n & 30) !== 0 || Od(i, t, o);
        }
        l.memoizedState = o;
        var c = { value: o, getSnapshot: t };
        return (
          (l.queue = c),
          Id(jd.bind(null, i, c, e), [e]),
          (i.flags |= 2048),
          To(9, _d.bind(null, i, c, o, t), void 0, null),
          o
        );
      },
      useId: function () {
        var e = Wt(),
          t = Ge.identifierPrefix;
        if (De) {
          var o = Xt,
            i = qt;
          (o = (i & ~(1 << (32 - Nt(i) - 1))).toString(32) + o),
            (t = ":" + t + "R" + o),
            (o = Po++),
            0 < o && (t += "H" + o.toString(32)),
            (t += ":");
        } else (o = ik++), (t = ":" + t + "r" + o.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    dk = {
      readContext: Pt,
      useCallback: Wd,
      useContext: Pt,
      useEffect: el,
      useImperativeHandle: Bd,
      useInsertionEffect: Fd,
      useLayoutEffect: Vd,
      useMemo: Ud,
      useReducer: Ja,
      useRef: Ld,
      useState: function () {
        return Ja(xo);
      },
      useDebugValue: tl,
      useDeferredValue: function (e) {
        var t = xt();
        return Hd(t, We.memoizedState, e);
      },
      useTransition: function () {
        var e = Ja(xo)[0],
          t = xt().memoizedState;
        return [e, t];
      },
      useMutableSource: Nd,
      useSyncExternalStore: Rd,
      useId: $d,
      unstable_isNewReconciler: !1,
    },
    fk = {
      readContext: Pt,
      useCallback: Wd,
      useContext: Pt,
      useEffect: el,
      useImperativeHandle: Bd,
      useInsertionEffect: Fd,
      useLayoutEffect: Vd,
      useMemo: Ud,
      useReducer: Za,
      useRef: Ld,
      useState: function () {
        return Za(xo);
      },
      useDebugValue: tl,
      useDeferredValue: function (e) {
        var t = xt();
        return We === null ? (t.memoizedState = e) : Hd(t, We.memoizedState, e);
      },
      useTransition: function () {
        var e = Za(xo)[0],
          t = xt().memoizedState;
        return [e, t];
      },
      useMutableSource: Nd,
      useSyncExternalStore: Rd,
      useId: $d,
      unstable_isNewReconciler: !1,
    };
  function _t(e, t) {
    if (e && e.defaultProps) {
      (t = X({}, t)), (e = e.defaultProps);
      for (var o in e) t[o] === void 0 && (t[o] = e[o]);
      return t;
    }
    return t;
  }
  function nl(e, t, o, i) {
    (t = e.memoizedState),
      (o = o(i, t)),
      (o = o == null ? t : X({}, t, o)),
      (e.memoizedState = o),
      e.lanes === 0 && (e.updateQueue.baseState = o);
  }
  var js = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Fn(e) === e : !1;
    },
    enqueueSetState: function (e, t, o) {
      e = e._reactInternals;
      var i = rt(),
        l = xn(e),
        c = Zt(i, l);
      (c.payload = t),
        o != null && (c.callback = o),
        (t = kn(e, c, l)),
        t !== null && (At(t, e, l, i), Ss(t, e, l));
    },
    enqueueReplaceState: function (e, t, o) {
      e = e._reactInternals;
      var i = rt(),
        l = xn(e),
        c = Zt(i, l);
      (c.tag = 1),
        (c.payload = t),
        o != null && (c.callback = o),
        (t = kn(e, c, l)),
        t !== null && (At(t, e, l, i), Ss(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var o = rt(),
        i = xn(e),
        l = Zt(o, i);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = kn(e, l, i)),
        t !== null && (At(t, e, i, o), Ss(t, e, i));
    },
  };
  function Yd(e, t, o, i, l, c, w) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(i, c, w)
        : t.prototype && t.prototype.isPureReactComponent
          ? !lo(o, i) || !lo(l, c)
          : !0
    );
  }
  function qd(e, t, o) {
    var i = !1,
      l = wn,
      c = t.contextType;
    return (
      typeof c == "object" && c !== null
        ? (c = Pt(c))
        : ((l = it(t) ? zn : Je.current),
          (i = t.contextTypes),
          (c = (i = i != null) ? kr(e, l) : wn)),
      (t = new t(o, c)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = js),
      (e.stateNode = t),
      (t._reactInternals = e),
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      t
    );
  }
  function Xd(e, t, o, i) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(o, i),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(o, i),
      t.state !== e && js.enqueueReplaceState(t, t.state, null);
  }
  function rl(e, t, o, i) {
    var l = e.stateNode;
    (l.props = o), (l.state = e.memoizedState), (l.refs = {}), Ua(e);
    var c = t.contextType;
    typeof c == "object" && c !== null
      ? (l.context = Pt(c))
      : ((c = it(t) ? zn : Je.current), (l.context = kr(e, c))),
      (l.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == "function" && (nl(e, t, c, o), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && js.enqueueReplaceState(l, l.state, null),
        bs(e, o, l, i),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Cr(e, t) {
    try {
      var o = "",
        i = t;
      do (o += ve(i)), (i = i.return);
      while (i);
      var l = o;
    } catch (c) {
      l =
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function ol(e, t, o) {
    return { value: e, source: null, stack: o ?? null, digest: t ?? null };
  }
  function sl(e, t) {
    try {
      console.error(t.value);
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  var pk = typeof WeakMap == "function" ? WeakMap : Map;
  function Jd(e, t, o) {
    (o = Zt(-1, o)), (o.tag = 3), (o.payload = { element: null });
    var i = t.value;
    return (
      (o.callback = function () {
        Vs || ((Vs = !0), (gl = i)), sl(e, t);
      }),
      o
    );
  }
  function Zd(e, t, o) {
    (o = Zt(-1, o)), (o.tag = 3);
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var l = t.value;
      (o.payload = function () {
        return i(l);
      }),
        (o.callback = function () {
          sl(e, t);
        });
    }
    var c = e.stateNode;
    return (
      c !== null &&
        typeof c.componentDidCatch == "function" &&
        (o.callback = function () {
          sl(e, t),
            typeof i != "function" &&
              (gn === null ? (gn = new Set([this])) : gn.add(this));
          var w = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: w !== null ? w : "",
          });
        }),
      o
    );
  }
  function ef(e, t, o) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new pk();
      var l = new Set();
      i.set(t, l);
    } else (l = i.get(t)), l === void 0 && ((l = new Set()), i.set(t, l));
    l.has(o) || (l.add(o), (e = Ek.bind(null, e, t, o)), t.then(e, e));
  }
  function tf(e) {
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
  function nf(e, t, o, i, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (o.flags |= 131072),
            (o.flags &= -52805),
            o.tag === 1 &&
              (o.alternate === null
                ? (o.tag = 17)
                : ((t = Zt(-1, 1)), (t.tag = 2), kn(o, t, 1))),
            (o.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var hk = M.ReactCurrentOwner,
    at = !1;
  function nt(e, t, o, i) {
    t.child = e === null ? xd(t, null, o, i) : xr(t, e.child, o, i);
  }
  function rf(e, t, o, i, l) {
    o = o.render;
    var c = t.ref;
    return (
      Sr(t, l),
      (i = qa(e, t, o, i, c, l)),
      (o = Xa()),
      e !== null && !at
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          en(e, t, l))
        : (De && o && Da(t), (t.flags |= 1), nt(e, t, i, l), t.child)
    );
  }
  function of(e, t, o, i, l) {
    if (e === null) {
      var c = o.type;
      return typeof c == "function" &&
        !El(c) &&
        c.defaultProps === void 0 &&
        o.compare === null &&
        o.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), sf(e, t, c, i, l))
        : ((e = $s(o.type, null, i, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), (e.lanes & l) === 0)) {
      var w = c.memoizedProps;
      if (
        ((o = o.compare), (o = o !== null ? o : lo), o(w, i) && e.ref === t.ref)
      )
        return en(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Sn(c, i)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function sf(e, t, o, i, l) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (lo(c, i) && e.ref === t.ref)
        if (((at = !1), (t.pendingProps = i = c), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (at = !0);
        else return (t.lanes = e.lanes), en(e, t, l);
    }
    return il(e, t, o, i, l);
  }
  function af(e, t, o) {
    var i = t.pendingProps,
      l = i.children,
      c = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ne(Nr, wt),
          (wt |= o);
      else {
        if ((o & 1073741824) === 0)
          return (
            (e = c !== null ? c.baseLanes | o : o),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Ne(Nr, wt),
            (wt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (i = c !== null ? c.baseLanes : o),
          Ne(Nr, wt),
          (wt |= i);
      }
    else
      c !== null ? ((i = c.baseLanes | o), (t.memoizedState = null)) : (i = o),
        Ne(Nr, wt),
        (wt |= i);
    return nt(e, t, l, o), t.child;
  }
  function lf(e, t) {
    var o = t.ref;
    ((e === null && o !== null) || (e !== null && e.ref !== o)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function il(e, t, o, i, l) {
    var c = it(o) ? zn : Je.current;
    return (
      (c = kr(t, c)),
      Sr(t, l),
      (o = qa(e, t, o, i, c, l)),
      (i = Xa()),
      e !== null && !at
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          en(e, t, l))
        : (De && i && Da(t), (t.flags |= 1), nt(e, t, o, l), t.child)
    );
  }
  function uf(e, t, o, i, l) {
    if (it(o)) {
      var c = !0;
      ys(t);
    } else c = !1;
    if ((Sr(t, l), t.stateNode === null))
      As(e, t), qd(t, o, i), rl(t, o, i, l), (i = !0);
    else if (e === null) {
      var w = t.stateNode,
        T = t.memoizedProps;
      w.props = T;
      var C = w.context,
        L = o.contextType;
      typeof L == "object" && L !== null
        ? (L = Pt(L))
        : ((L = it(o) ? zn : Je.current), (L = kr(t, L)));
      var H = o.getDerivedStateFromProps,
        G =
          typeof H == "function" ||
          typeof w.getSnapshotBeforeUpdate == "function";
      G ||
        (typeof w.UNSAFE_componentWillReceiveProps != "function" &&
          typeof w.componentWillReceiveProps != "function") ||
        ((T !== i || C !== L) && Xd(t, w, i, L)),
        (mn = !1);
      var U = t.memoizedState;
      (w.state = U),
        bs(t, i, w, l),
        (C = t.memoizedState),
        T !== i || U !== C || st.current || mn
          ? (typeof H == "function" && (nl(t, o, H, i), (C = t.memoizedState)),
            (T = mn || Yd(t, o, T, i, U, C, L))
              ? (G ||
                  (typeof w.UNSAFE_componentWillMount != "function" &&
                    typeof w.componentWillMount != "function") ||
                  (typeof w.componentWillMount == "function" &&
                    w.componentWillMount(),
                  typeof w.UNSAFE_componentWillMount == "function" &&
                    w.UNSAFE_componentWillMount()),
                typeof w.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof w.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = i),
                (t.memoizedState = C)),
            (w.props = i),
            (w.state = C),
            (w.context = L),
            (i = T))
          : (typeof w.componentDidMount == "function" && (t.flags |= 4194308),
            (i = !1));
    } else {
      (w = t.stateNode),
        Sd(e, t),
        (T = t.memoizedProps),
        (L = t.type === t.elementType ? T : _t(t.type, T)),
        (w.props = L),
        (G = t.pendingProps),
        (U = w.context),
        (C = o.contextType),
        typeof C == "object" && C !== null
          ? (C = Pt(C))
          : ((C = it(o) ? zn : Je.current), (C = kr(t, C)));
      var ne = o.getDerivedStateFromProps;
      (H =
        typeof ne == "function" ||
        typeof w.getSnapshotBeforeUpdate == "function") ||
        (typeof w.UNSAFE_componentWillReceiveProps != "function" &&
          typeof w.componentWillReceiveProps != "function") ||
        ((T !== G || U !== C) && Xd(t, w, i, C)),
        (mn = !1),
        (U = t.memoizedState),
        (w.state = U),
        bs(t, i, w, l);
      var ie = t.memoizedState;
      T !== G || U !== ie || st.current || mn
        ? (typeof ne == "function" && (nl(t, o, ne, i), (ie = t.memoizedState)),
          (L = mn || Yd(t, o, L, i, U, ie, C) || !1)
            ? (H ||
                (typeof w.UNSAFE_componentWillUpdate != "function" &&
                  typeof w.componentWillUpdate != "function") ||
                (typeof w.componentWillUpdate == "function" &&
                  w.componentWillUpdate(i, ie, C),
                typeof w.UNSAFE_componentWillUpdate == "function" &&
                  w.UNSAFE_componentWillUpdate(i, ie, C)),
              typeof w.componentDidUpdate == "function" && (t.flags |= 4),
              typeof w.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof w.componentDidUpdate != "function" ||
                (T === e.memoizedProps && U === e.memoizedState) ||
                (t.flags |= 4),
              typeof w.getSnapshotBeforeUpdate != "function" ||
                (T === e.memoizedProps && U === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = ie)),
          (w.props = i),
          (w.state = ie),
          (w.context = C),
          (i = L))
        : (typeof w.componentDidUpdate != "function" ||
            (T === e.memoizedProps && U === e.memoizedState) ||
            (t.flags |= 4),
          typeof w.getSnapshotBeforeUpdate != "function" ||
            (T === e.memoizedProps && U === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1));
    }
    return al(e, t, o, i, c, l);
  }
  function al(e, t, o, i, l, c) {
    lf(e, t);
    var w = (t.flags & 128) !== 0;
    if (!i && !w) return l && pd(t, o, !1), en(e, t, c);
    (i = t.stateNode), (hk.current = t);
    var T =
      w && typeof o.getDerivedStateFromError != "function" ? null : i.render();
    return (
      (t.flags |= 1),
      e !== null && w
        ? ((t.child = xr(t, e.child, null, c)), (t.child = xr(t, null, T, c)))
        : nt(e, t, T, c),
      (t.memoizedState = i.state),
      l && pd(t, o, !0),
      t.child
    );
  }
  function cf(e) {
    var t = e.stateNode;
    t.pendingContext
      ? dd(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && dd(e, t.context, !1),
      Ha(e, t.containerInfo);
  }
  function df(e, t, o, i, l) {
    return Pr(), Ia(l), (t.flags |= 256), nt(e, t, o, i), t.child;
  }
  var ll = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ul(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ff(e, t, o) {
    var i = t.pendingProps,
      l = Me.current,
      c = !1,
      w = (t.flags & 128) !== 0,
      T;
    if (
      ((T = w) ||
        (T = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      T
        ? ((c = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      Ne(Me, l & 1),
      e === null)
    )
      return (
        La(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((w = i.children),
            (e = i.fallback),
            c
              ? ((i = t.mode),
                (c = t.child),
                (w = { mode: "hidden", children: w }),
                (i & 1) === 0 && c !== null
                  ? ((c.childLanes = 0), (c.pendingProps = w))
                  : (c = Gs(w, i, 0, null)),
                (e = qn(e, i, o, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = ul(o)),
                (t.memoizedState = ll),
                e)
              : cl(t, w))
      );
    if (((l = e.memoizedState), l !== null && ((T = l.dehydrated), T !== null)))
      return wk(e, t, w, i, T, l, o);
    if (c) {
      (c = i.fallback), (w = t.mode), (l = e.child), (T = l.sibling);
      var C = { mode: "hidden", children: i.children };
      return (
        (w & 1) === 0 && t.child !== l
          ? ((i = t.child),
            (i.childLanes = 0),
            (i.pendingProps = C),
            (t.deletions = null))
          : ((i = Sn(l, C)), (i.subtreeFlags = l.subtreeFlags & 14680064)),
        T !== null ? (c = Sn(T, c)) : ((c = qn(c, w, o, null)), (c.flags |= 2)),
        (c.return = t),
        (i.return = t),
        (i.sibling = c),
        (t.child = i),
        (i = c),
        (c = t.child),
        (w = e.child.memoizedState),
        (w =
          w === null
            ? ul(o)
            : {
                baseLanes: w.baseLanes | o,
                cachePool: null,
                transitions: w.transitions,
              }),
        (c.memoizedState = w),
        (c.childLanes = e.childLanes & ~o),
        (t.memoizedState = ll),
        i
      );
    }
    return (
      (c = e.child),
      (e = c.sibling),
      (i = Sn(c, { mode: "visible", children: i.children })),
      (t.mode & 1) === 0 && (i.lanes = o),
      (i.return = t),
      (i.sibling = null),
      e !== null &&
        ((o = t.deletions),
        o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
      (t.child = i),
      (t.memoizedState = null),
      i
    );
  }
  function cl(e, t) {
    return (
      (t = Gs({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ds(e, t, o, i) {
    return (
      i !== null && Ia(i),
      xr(t, e.child, null, o),
      (e = cl(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function wk(e, t, o, i, l, c, w) {
    if (o)
      return t.flags & 256
        ? ((t.flags &= -257), (i = ol(Error(s(422)))), Ds(e, t, w, i))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((c = i.fallback),
            (l = t.mode),
            (i = Gs({ mode: "visible", children: i.children }, l, 0, null)),
            (c = qn(c, l, w, null)),
            (c.flags |= 2),
            (i.return = t),
            (c.return = t),
            (i.sibling = c),
            (t.child = i),
            (t.mode & 1) !== 0 && xr(t, e.child, null, w),
            (t.child.memoizedState = ul(w)),
            (t.memoizedState = ll),
            c);
    if ((t.mode & 1) === 0) return Ds(e, t, w, null);
    if (l.data === "$!") {
      if (((i = l.nextSibling && l.nextSibling.dataset), i)) var T = i.dgst;
      return (
        (i = T), (c = Error(s(419))), (i = ol(c, i, void 0)), Ds(e, t, w, i)
      );
    }
    if (((T = (w & e.childLanes) !== 0), at || T)) {
      if (((i = Ge), i !== null)) {
        switch (w & -w) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = (l & (i.suspendedLanes | w)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== c.retryLane &&
            ((c.retryLane = l), Jt(e, l), At(i, e, l, -1));
      }
      return Cl(), (i = ol(Error(s(421)))), Ds(e, t, w, i);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Nk.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = c.treeContext),
        (ht = pn(l.nextSibling)),
        (pt = t),
        (De = !0),
        (Ot = null),
        e !== null &&
          ((vt[gt++] = qt),
          (vt[gt++] = Xt),
          (vt[gt++] = Bn),
          (qt = e.id),
          (Xt = e.overflow),
          (Bn = t)),
        (t = cl(t, i.children)),
        (t.flags |= 4096),
        t);
  }
  function pf(e, t, o) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Ba(e.return, t, o);
  }
  function dl(e, t, o, i, l) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: o,
          tailMode: l,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = i),
        (c.tail = o),
        (c.tailMode = l));
  }
  function hf(e, t, o) {
    var i = t.pendingProps,
      l = i.revealOrder,
      c = i.tail;
    if ((nt(e, t, i.children, o), (i = Me.current), (i & 2) !== 0))
      (i = (i & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && pf(e, o, t);
          else if (e.tag === 19) pf(e, o, t);
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
    if ((Ne(Me, i), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (o = t.child, l = null; o !== null; )
            (e = o.alternate),
              e !== null && Cs(e) === null && (l = o),
              (o = o.sibling);
          (o = l),
            o === null
              ? ((l = t.child), (t.child = null))
              : ((l = o.sibling), (o.sibling = null)),
            dl(t, !1, l, o, c);
          break;
        case "backwards":
          for (o = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Cs(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = o), (o = l), (l = e);
          }
          dl(t, !0, o, null, c);
          break;
        case "together":
          dl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function As(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function en(e, t, o) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Gn |= t.lanes),
      (o & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, o = Sn(e, e.pendingProps), t.child = o, o.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (o = o.sibling = Sn(e, e.pendingProps)),
          (o.return = t);
      o.sibling = null;
    }
    return t.child;
  }
  function yk(e, t, o) {
    switch (t.tag) {
      case 3:
        cf(t), Pr();
        break;
      case 5:
        Ed(t);
        break;
      case 1:
        it(t.type) && ys(t);
        break;
      case 4:
        Ha(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context,
          l = t.memoizedProps.value;
        Ne(xs, i._currentValue), (i._currentValue = l);
        break;
      case 13:
        if (((i = t.memoizedState), i !== null))
          return i.dehydrated !== null
            ? (Ne(Me, Me.current & 1), (t.flags |= 128), null)
            : (o & t.child.childLanes) !== 0
              ? ff(e, t, o)
              : (Ne(Me, Me.current & 1),
                (e = en(e, t, o)),
                e !== null ? e.sibling : null);
        Ne(Me, Me.current & 1);
        break;
      case 19:
        if (((i = (o & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (i) return hf(e, t, o);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Ne(Me, Me.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), af(e, t, o);
    }
    return en(e, t, o);
  }
  var wf, fl, yf, mf;
  (wf = function (e, t) {
    for (var o = t.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) e.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        (o.child.return = o), (o = o.child);
        continue;
      }
      if (o === t) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === t) return;
        o = o.return;
      }
      (o.sibling.return = o.return), (o = o.sibling);
    }
  }),
    (fl = function () {}),
    (yf = function (e, t, o, i) {
      var l = e.memoizedProps;
      if (l !== i) {
        (e = t.stateNode), Hn(Bt.current);
        var c = null;
        switch (o) {
          case "input":
            (l = Et(e, l)), (i = Et(e, i)), (c = []);
            break;
          case "select":
            (l = X({}, l, { value: void 0 })),
              (i = X({}, i, { value: void 0 })),
              (c = []);
            break;
          case "textarea":
            (l = Hi(e, l)), (i = Hi(e, i)), (c = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof i.onClick == "function" &&
              (e.onclick = ps);
        }
        Gi(o, i);
        var w;
        o = null;
        for (L in l)
          if (!i.hasOwnProperty(L) && l.hasOwnProperty(L) && l[L] != null)
            if (L === "style") {
              var T = l[L];
              for (w in T) T.hasOwnProperty(w) && (o || (o = {}), (o[w] = ""));
            } else
              L !== "dangerouslySetInnerHTML" &&
                L !== "children" &&
                L !== "suppressContentEditableWarning" &&
                L !== "suppressHydrationWarning" &&
                L !== "autoFocus" &&
                (u.hasOwnProperty(L)
                  ? c || (c = [])
                  : (c = c || []).push(L, null));
        for (L in i) {
          var C = i[L];
          if (
            ((T = l?.[L]),
            i.hasOwnProperty(L) && C !== T && (C != null || T != null))
          )
            if (L === "style")
              if (T) {
                for (w in T)
                  !T.hasOwnProperty(w) ||
                    (C && C.hasOwnProperty(w)) ||
                    (o || (o = {}), (o[w] = ""));
                for (w in C)
                  C.hasOwnProperty(w) &&
                    T[w] !== C[w] &&
                    (o || (o = {}), (o[w] = C[w]));
              } else o || (c || (c = []), c.push(L, o)), (o = C);
            else
              L === "dangerouslySetInnerHTML"
                ? ((C = C ? C.__html : void 0),
                  (T = T ? T.__html : void 0),
                  C != null && T !== C && (c = c || []).push(L, C))
                : L === "children"
                  ? (typeof C != "string" && typeof C != "number") ||
                    (c = c || []).push(L, "" + C)
                  : L !== "suppressContentEditableWarning" &&
                    L !== "suppressHydrationWarning" &&
                    (u.hasOwnProperty(L)
                      ? (C != null && L === "onScroll" && Re("scroll", e),
                        c || T === C || (c = []))
                      : (c = c || []).push(L, C));
        }
        o && (c = c || []).push("style", o);
        var L = c;
        (t.updateQueue = L) && (t.flags |= 4);
      }
    }),
    (mf = function (e, t, o, i) {
      o !== i && (t.flags |= 4);
    });
  function So(e, t) {
    if (!De)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var o = null; t !== null; )
            t.alternate !== null && (o = t), (t = t.sibling);
          o === null ? (e.tail = null) : (o.sibling = null);
          break;
        case "collapsed":
          o = e.tail;
          for (var i = null; o !== null; )
            o.alternate !== null && (i = o), (o = o.sibling);
          i === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function et(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      o = 0,
      i = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (o |= l.lanes | l.childLanes),
          (i |= l.subtreeFlags & 14680064),
          (i |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (o |= l.lanes | l.childLanes),
          (i |= l.subtreeFlags),
          (i |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= i), (e.childLanes = o), t;
  }
  function mk(e, t, o) {
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
        return et(t), null;
      case 1:
        return it(t.type) && ws(), et(t), null;
      case 3:
        return (
          (i = t.stateNode),
          br(),
          Oe(st),
          Oe(Je),
          Qa(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (gs(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ot !== null && (Tl(Ot), (Ot = null)))),
          fl(e, t),
          et(t),
          null
        );
      case 5:
        $a(t);
        var l = Hn(vo.current);
        if (((o = t.type), e !== null && t.stateNode != null))
          yf(e, t, o, i, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(s(166));
            return et(t), null;
          }
          if (((e = Hn(Bt.current)), gs(t))) {
            (i = t.stateNode), (o = t.type);
            var c = t.memoizedProps;
            switch (((i[zt] = t), (i[ho] = c), (e = (t.mode & 1) !== 0), o)) {
              case "dialog":
                Re("cancel", i), Re("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                Re("load", i);
                break;
              case "video":
              case "audio":
                for (l = 0; l < co.length; l++) Re(co[l], i);
                break;
              case "source":
                Re("error", i);
                break;
              case "img":
              case "image":
              case "link":
                Re("error", i), Re("load", i);
                break;
              case "details":
                Re("toggle", i);
                break;
              case "input":
                or(i, c), Re("invalid", i);
                break;
              case "select":
                (i._wrapperState = { wasMultiple: !!c.multiple }),
                  Re("invalid", i);
                break;
              case "textarea":
                Zu(i, c), Re("invalid", i);
            }
            Gi(o, c), (l = null);
            for (var w in c)
              if (c.hasOwnProperty(w)) {
                var T = c[w];
                w === "children"
                  ? typeof T == "string"
                    ? i.textContent !== T &&
                      (c.suppressHydrationWarning !== !0 &&
                        fs(i.textContent, T, e),
                      (l = ["children", T]))
                    : typeof T == "number" &&
                      i.textContent !== "" + T &&
                      (c.suppressHydrationWarning !== !0 &&
                        fs(i.textContent, T, e),
                      (l = ["children", "" + T]))
                  : u.hasOwnProperty(w) &&
                    T != null &&
                    w === "onScroll" &&
                    Re("scroll", i);
              }
            switch (o) {
              case "input":
                be(i), Ju(i, c, !0);
                break;
              case "textarea":
                be(i), tc(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (i.onclick = ps);
            }
            (i = l), (t.updateQueue = i), i !== null && (t.flags |= 4);
          } else {
            (w = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = nc(o)),
              e === "http://www.w3.org/1999/xhtml"
                ? o === "script"
                  ? ((e = w.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof i.is == "string"
                    ? (e = w.createElement(o, { is: i.is }))
                    : ((e = w.createElement(o)),
                      o === "select" &&
                        ((w = e),
                        i.multiple
                          ? (w.multiple = !0)
                          : i.size && (w.size = i.size)))
                : (e = w.createElementNS(e, o)),
              (e[zt] = t),
              (e[ho] = i),
              wf(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((w = Qi(o, i)), o)) {
                case "dialog":
                  Re("cancel", e), Re("close", e), (l = i);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Re("load", e), (l = i);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < co.length; l++) Re(co[l], e);
                  l = i;
                  break;
                case "source":
                  Re("error", e), (l = i);
                  break;
                case "img":
                case "image":
                case "link":
                  Re("error", e), Re("load", e), (l = i);
                  break;
                case "details":
                  Re("toggle", e), (l = i);
                  break;
                case "input":
                  or(e, i), (l = Et(e, i)), Re("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!i.multiple }),
                    (l = X({}, i, { value: void 0 })),
                    Re("invalid", e);
                  break;
                case "textarea":
                  Zu(e, i), (l = Hi(e, i)), Re("invalid", e);
                  break;
                default:
                  l = i;
              }
              Gi(o, l), (T = l);
              for (c in T)
                if (T.hasOwnProperty(c)) {
                  var C = T[c];
                  c === "style"
                    ? sc(e, C)
                    : c === "dangerouslySetInnerHTML"
                      ? ((C = C ? C.__html : void 0), C != null && rc(e, C))
                      : c === "children"
                        ? typeof C == "string"
                          ? (o !== "textarea" || C !== "") && $r(e, C)
                          : typeof C == "number" && $r(e, "" + C)
                        : c !== "suppressContentEditableWarning" &&
                          c !== "suppressHydrationWarning" &&
                          c !== "autoFocus" &&
                          (u.hasOwnProperty(c)
                            ? C != null && c === "onScroll" && Re("scroll", e)
                            : C != null && D(e, c, C, w));
                }
              switch (o) {
                case "input":
                  be(e), Ju(e, i, !1);
                  break;
                case "textarea":
                  be(e), tc(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + ce(i.value));
                  break;
                case "select":
                  (e.multiple = !!i.multiple),
                    (c = i.value),
                    c != null
                      ? ir(e, !!i.multiple, c, !1)
                      : i.defaultValue != null &&
                        ir(e, !!i.multiple, i.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = ps);
              }
              switch (o) {
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
        return et(t), null;
      case 6:
        if (e && t.stateNode != null) mf(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(s(166));
          if (((o = Hn(vo.current)), Hn(Bt.current), gs(t))) {
            if (
              ((i = t.stateNode),
              (o = t.memoizedProps),
              (i[zt] = t),
              (c = i.nodeValue !== o) && ((e = pt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  fs(i.nodeValue, o, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    fs(i.nodeValue, o, (e.mode & 1) !== 0);
              }
            c && (t.flags |= 4);
          } else
            (i = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(i)),
              (i[zt] = t),
              (t.stateNode = i);
        }
        return et(t), null;
      case 13:
        if (
          (Oe(Me),
          (i = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (De && ht !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            vd(), Pr(), (t.flags |= 98560), (c = !1);
          else if (((c = gs(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(s(317));
              c[zt] = t;
            } else
              Pr(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            et(t), (c = !1);
          } else Ot !== null && (Tl(Ot), (Ot = null)), (c = !0);
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = o), t)
          : ((i = i !== null),
            i !== (e !== null && e.memoizedState !== null) &&
              i &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Me.current & 1) !== 0
                  ? Ue === 0 && (Ue = 3)
                  : Cl())),
            t.updateQueue !== null && (t.flags |= 4),
            et(t),
            null);
      case 4:
        return (
          br(),
          fl(e, t),
          e === null && fo(t.stateNode.containerInfo),
          et(t),
          null
        );
      case 10:
        return za(t.type._context), et(t), null;
      case 17:
        return it(t.type) && ws(), et(t), null;
      case 19:
        if ((Oe(Me), (c = t.memoizedState), c === null)) return et(t), null;
        if (((i = (t.flags & 128) !== 0), (w = c.rendering), w === null))
          if (i) So(c, !1);
          else {
            if (Ue !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((w = Cs(e)), w !== null)) {
                  for (
                    t.flags |= 128,
                      So(c, !1),
                      i = w.updateQueue,
                      i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      i = o,
                      o = t.child;
                    o !== null;

                  )
                    (c = o),
                      (e = i),
                      (c.flags &= 14680066),
                      (w = c.alternate),
                      w === null
                        ? ((c.childLanes = 0),
                          (c.lanes = e),
                          (c.child = null),
                          (c.subtreeFlags = 0),
                          (c.memoizedProps = null),
                          (c.memoizedState = null),
                          (c.updateQueue = null),
                          (c.dependencies = null),
                          (c.stateNode = null))
                        : ((c.childLanes = w.childLanes),
                          (c.lanes = w.lanes),
                          (c.child = w.child),
                          (c.subtreeFlags = 0),
                          (c.deletions = null),
                          (c.memoizedProps = w.memoizedProps),
                          (c.memoizedState = w.memoizedState),
                          (c.updateQueue = w.updateQueue),
                          (c.type = w.type),
                          (e = w.dependencies),
                          (c.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (o = o.sibling);
                  return Ne(Me, (Me.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              Fe() > Rr &&
              ((t.flags |= 128), (i = !0), So(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = Cs(w)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (o = e.updateQueue),
                o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                So(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !w.alternate &&
                  !De)
              )
                return et(t), null;
            } else
              2 * Fe() - c.renderingStartTime > Rr &&
                o !== 1073741824 &&
                ((t.flags |= 128), (i = !0), So(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((w.sibling = t.child), (t.child = w))
            : ((o = c.last),
              o !== null ? (o.sibling = w) : (t.child = w),
              (c.last = w));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = Fe()),
            (t.sibling = null),
            (o = Me.current),
            Ne(Me, i ? (o & 1) | 2 : o & 1),
            t)
          : (et(t), null);
      case 22:
      case 23:
        return (
          bl(),
          (i = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
          i && (t.mode & 1) !== 0
            ? (wt & 1073741824) !== 0 &&
              (et(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : et(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function kk(e, t) {
    switch ((Aa(t), t.tag)) {
      case 1:
        return (
          it(t.type) && ws(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          br(),
          Oe(st),
          Oe(Je),
          Qa(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return $a(t), null;
      case 13:
        if (
          (Oe(Me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Pr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Oe(Me), null;
      case 4:
        return br(), null;
      case 10:
        return za(t.type._context), null;
      case 22:
      case 23:
        return bl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ms = !1,
    tt = !1,
    vk = typeof WeakSet == "function" ? WeakSet : Set,
    re = null;
  function Er(e, t) {
    var o = e.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (i) {
          Ie(e, t, i);
        }
      else o.current = null;
  }
  function pl(e, t, o) {
    try {
      o();
    } catch (i) {
      Ie(e, t, i);
    }
  }
  var kf = !1;
  function gk(e, t) {
    if (((ba = ts), (e = Yc()), ma(e))) {
      if ("selectionStart" in e)
        var o = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          o = ((o = e.ownerDocument) && o.defaultView) || window;
          var i = o.getSelection && o.getSelection();
          if (i && i.rangeCount !== 0) {
            o = i.anchorNode;
            var l = i.anchorOffset,
              c = i.focusNode;
            i = i.focusOffset;
            try {
              o.nodeType, c.nodeType;
            } catch {
              o = null;
              break e;
            }
            var w = 0,
              T = -1,
              C = -1,
              L = 0,
              H = 0,
              G = e,
              U = null;
            t: for (;;) {
              for (
                var ne;
                G !== o || (l !== 0 && G.nodeType !== 3) || (T = w + l),
                  G !== c || (i !== 0 && G.nodeType !== 3) || (C = w + i),
                  G.nodeType === 3 && (w += G.nodeValue.length),
                  (ne = G.firstChild) !== null;

              )
                (U = G), (G = ne);
              for (;;) {
                if (G === e) break t;
                if (
                  (U === o && ++L === l && (T = w),
                  U === c && ++H === i && (C = w),
                  (ne = G.nextSibling) !== null)
                )
                  break;
                (G = U), (U = G.parentNode);
              }
              G = ne;
            }
            o = T === -1 || C === -1 ? null : { start: T, end: C };
          } else o = null;
        }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (
      Ca = { focusedElem: e, selectionRange: o }, ts = !1, re = t;
      re !== null;

    )
      if (
        ((t = re), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (re = e);
      else
        for (; re !== null; ) {
          t = re;
          try {
            var ie = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ie !== null) {
                    var ae = ie.memoizedProps,
                      Ve = ie.memoizedState,
                      j = t.stateNode,
                      N = j.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ae : _t(t.type, ae),
                        Ve,
                      );
                    j.__reactInternalSnapshotBeforeUpdate = N;
                  }
                  break;
                case 3:
                  var A = t.stateNode.containerInfo;
                  A.nodeType === 1
                    ? (A.textContent = "")
                    : A.nodeType === 9 &&
                      A.documentElement &&
                      A.removeChild(A.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (Y) {
            Ie(t, t.return, Y);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (re = e);
            break;
          }
          re = t.return;
        }
    return (ie = kf), (kf = !1), ie;
  }
  function bo(e, t, o) {
    var i = t.updateQueue;
    if (((i = i !== null ? i.lastEffect : null), i !== null)) {
      var l = (i = i.next);
      do {
        if ((l.tag & e) === e) {
          var c = l.destroy;
          (l.destroy = void 0), c !== void 0 && pl(t, o, c);
        }
        l = l.next;
      } while (l !== i);
    }
  }
  function Ls(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var o = (t = t.next);
      do {
        if ((o.tag & e) === e) {
          var i = o.create;
          o.destroy = i();
        }
        o = o.next;
      } while (o !== t);
    }
  }
  function hl(e) {
    var t = e.ref;
    if (t !== null) {
      var o = e.stateNode;
      e.tag, (e = o), typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function vf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), vf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[zt],
          delete t[ho],
          delete t[Oa],
          delete t[nk],
          delete t[rk])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function gf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Pf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || gf(e.return)) return null;
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
  function wl(e, t, o) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode),
        t
          ? o.nodeType === 8
            ? o.parentNode.insertBefore(e, t)
            : o.insertBefore(e, t)
          : (o.nodeType === 8
              ? ((t = o.parentNode), t.insertBefore(e, o))
              : ((t = o), t.appendChild(e)),
            (o = o._reactRootContainer),
            o != null || t.onclick !== null || (t.onclick = ps));
    else if (i !== 4 && ((e = e.child), e !== null))
      for (wl(e, t, o), e = e.sibling; e !== null; )
        wl(e, t, o), (e = e.sibling);
  }
  function yl(e, t, o) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode), t ? o.insertBefore(e, t) : o.appendChild(e);
    else if (i !== 4 && ((e = e.child), e !== null))
      for (yl(e, t, o), e = e.sibling; e !== null; )
        yl(e, t, o), (e = e.sibling);
  }
  var Ye = null,
    jt = !1;
  function vn(e, t, o) {
    for (o = o.child; o !== null; ) xf(e, t, o), (o = o.sibling);
  }
  function xf(e, t, o) {
    if (Vt && typeof Vt.onCommitFiberUnmount == "function")
      try {
        Vt.onCommitFiberUnmount(Yo, o);
      } catch {}
    switch (o.tag) {
      case 5:
        tt || Er(o, t);
      case 6:
        var i = Ye,
          l = jt;
        (Ye = null),
          vn(e, t, o),
          (Ye = i),
          (jt = l),
          Ye !== null &&
            (jt
              ? ((e = Ye),
                (o = o.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(o)
                  : e.removeChild(o))
              : Ye.removeChild(o.stateNode));
        break;
      case 18:
        Ye !== null &&
          (jt
            ? ((e = Ye),
              (o = o.stateNode),
              e.nodeType === 8
                ? Ra(e.parentNode, o)
                : e.nodeType === 1 && Ra(e, o),
              no(e))
            : Ra(Ye, o.stateNode));
        break;
      case 4:
        (i = Ye),
          (l = jt),
          (Ye = o.stateNode.containerInfo),
          (jt = !0),
          vn(e, t, o),
          (Ye = i),
          (jt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !tt &&
          ((i = o.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
        ) {
          l = i = i.next;
          do {
            var c = l,
              w = c.destroy;
            (c = c.tag),
              w !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && pl(o, t, w),
              (l = l.next);
          } while (l !== i);
        }
        vn(e, t, o);
        break;
      case 1:
        if (
          !tt &&
          (Er(o, t),
          (i = o.stateNode),
          typeof i.componentWillUnmount == "function")
        )
          try {
            (i.props = o.memoizedProps),
              (i.state = o.memoizedState),
              i.componentWillUnmount();
          } catch (T) {
            Ie(o, t, T);
          }
        vn(e, t, o);
        break;
      case 21:
        vn(e, t, o);
        break;
      case 22:
        o.mode & 1
          ? ((tt = (i = tt) || o.memoizedState !== null), vn(e, t, o), (tt = i))
          : vn(e, t, o);
        break;
      default:
        vn(e, t, o);
    }
  }
  function Tf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var o = e.stateNode;
      o === null && (o = e.stateNode = new vk()),
        t.forEach(function (i) {
          var l = Rk.bind(null, e, i);
          o.has(i) || (o.add(i), i.then(l, l));
        });
    }
  }
  function Dt(e, t) {
    var o = t.deletions;
    if (o !== null)
      for (var i = 0; i < o.length; i++) {
        var l = o[i];
        try {
          var c = e,
            w = t,
            T = w;
          e: for (; T !== null; ) {
            switch (T.tag) {
              case 5:
                (Ye = T.stateNode), (jt = !1);
                break e;
              case 3:
                (Ye = T.stateNode.containerInfo), (jt = !0);
                break e;
              case 4:
                (Ye = T.stateNode.containerInfo), (jt = !0);
                break e;
            }
            T = T.return;
          }
          if (Ye === null) throw Error(s(160));
          xf(c, w, l), (Ye = null), (jt = !1);
          var C = l.alternate;
          C !== null && (C.return = null), (l.return = null);
        } catch (L) {
          Ie(l, t, L);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Sf(t, e), (t = t.sibling);
  }
  function Sf(e, t) {
    var o = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Dt(t, e), Ut(e), i & 4)) {
          try {
            bo(3, e, e.return), Ls(3, e);
          } catch (ae) {
            Ie(e, e.return, ae);
          }
          try {
            bo(5, e, e.return);
          } catch (ae) {
            Ie(e, e.return, ae);
          }
        }
        break;
      case 1:
        Dt(t, e), Ut(e), i & 512 && o !== null && Er(o, o.return);
        break;
      case 5:
        if (
          (Dt(t, e),
          Ut(e),
          i & 512 && o !== null && Er(o, o.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            $r(l, "");
          } catch (ae) {
            Ie(e, e.return, ae);
          }
        }
        if (i & 4 && ((l = e.stateNode), l != null)) {
          var c = e.memoizedProps,
            w = o !== null ? o.memoizedProps : c,
            T = e.type,
            C = e.updateQueue;
          if (((e.updateQueue = null), C !== null))
            try {
              T === "input" && c.type === "radio" && c.name != null && sr(l, c),
                Qi(T, w);
              var L = Qi(T, c);
              for (w = 0; w < C.length; w += 2) {
                var H = C[w],
                  G = C[w + 1];
                H === "style"
                  ? sc(l, G)
                  : H === "dangerouslySetInnerHTML"
                    ? rc(l, G)
                    : H === "children"
                      ? $r(l, G)
                      : D(l, H, G, L);
              }
              switch (T) {
                case "input":
                  In(l, c);
                  break;
                case "textarea":
                  ec(l, c);
                  break;
                case "select":
                  var U = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!c.multiple;
                  var ne = c.value;
                  ne != null
                    ? ir(l, !!c.multiple, ne, !1)
                    : U !== !!c.multiple &&
                      (c.defaultValue != null
                        ? ir(l, !!c.multiple, c.defaultValue, !0)
                        : ir(l, !!c.multiple, c.multiple ? [] : "", !1));
              }
              l[ho] = c;
            } catch (ae) {
              Ie(e, e.return, ae);
            }
        }
        break;
      case 6:
        if ((Dt(t, e), Ut(e), i & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (l = e.stateNode), (c = e.memoizedProps);
          try {
            l.nodeValue = c;
          } catch (ae) {
            Ie(e, e.return, ae);
          }
        }
        break;
      case 3:
        if (
          (Dt(t, e), Ut(e), i & 4 && o !== null && o.memoizedState.isDehydrated)
        )
          try {
            no(t.containerInfo);
          } catch (ae) {
            Ie(e, e.return, ae);
          }
        break;
      case 4:
        Dt(t, e), Ut(e);
        break;
      case 13:
        Dt(t, e),
          Ut(e),
          (l = e.child),
          l.flags & 8192 &&
            ((c = l.memoizedState !== null),
            (l.stateNode.isHidden = c),
            !c ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (vl = Fe())),
          i & 4 && Tf(e);
        break;
      case 22:
        if (
          ((H = o !== null && o.memoizedState !== null),
          e.mode & 1 ? ((tt = (L = tt) || H), Dt(t, e), (tt = L)) : Dt(t, e),
          Ut(e),
          i & 8192)
        ) {
          if (
            ((L = e.memoizedState !== null),
            (e.stateNode.isHidden = L) && !H && (e.mode & 1) !== 0)
          )
            for (re = e, H = e.child; H !== null; ) {
              for (G = re = H; re !== null; ) {
                switch (((U = re), (ne = U.child), U.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    bo(4, U, U.return);
                    break;
                  case 1:
                    Er(U, U.return);
                    var ie = U.stateNode;
                    if (typeof ie.componentWillUnmount == "function") {
                      (i = U), (o = U.return);
                      try {
                        (t = i),
                          (ie.props = t.memoizedProps),
                          (ie.state = t.memoizedState),
                          ie.componentWillUnmount();
                      } catch (ae) {
                        Ie(i, o, ae);
                      }
                    }
                    break;
                  case 5:
                    Er(U, U.return);
                    break;
                  case 22:
                    if (U.memoizedState !== null) {
                      Ef(G);
                      continue;
                    }
                }
                ne !== null ? ((ne.return = U), (re = ne)) : Ef(G);
              }
              H = H.sibling;
            }
          e: for (H = null, G = e; ; ) {
            if (G.tag === 5) {
              if (H === null) {
                H = G;
                try {
                  (l = G.stateNode),
                    L
                      ? ((c = l.style),
                        typeof c.setProperty == "function"
                          ? c.setProperty("display", "none", "important")
                          : (c.display = "none"))
                      : ((T = G.stateNode),
                        (C = G.memoizedProps.style),
                        (w =
                          C != null && C.hasOwnProperty("display")
                            ? C.display
                            : null),
                        (T.style.display = oc("display", w)));
                } catch (ae) {
                  Ie(e, e.return, ae);
                }
              }
            } else if (G.tag === 6) {
              if (H === null)
                try {
                  G.stateNode.nodeValue = L ? "" : G.memoizedProps;
                } catch (ae) {
                  Ie(e, e.return, ae);
                }
            } else if (
              ((G.tag !== 22 && G.tag !== 23) ||
                G.memoizedState === null ||
                G === e) &&
              G.child !== null
            ) {
              (G.child.return = G), (G = G.child);
              continue;
            }
            if (G === e) break e;
            for (; G.sibling === null; ) {
              if (G.return === null || G.return === e) break e;
              H === G && (H = null), (G = G.return);
            }
            H === G && (H = null),
              (G.sibling.return = G.return),
              (G = G.sibling);
          }
        }
        break;
      case 19:
        Dt(t, e), Ut(e), i & 4 && Tf(e);
        break;
      case 21:
        break;
      default:
        Dt(t, e), Ut(e);
    }
  }
  function Ut(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var o = e.return; o !== null; ) {
            if (gf(o)) {
              var i = o;
              break e;
            }
            o = o.return;
          }
          throw Error(s(160));
        }
        switch (i.tag) {
          case 5:
            var l = i.stateNode;
            i.flags & 32 && ($r(l, ""), (i.flags &= -33));
            var c = Pf(e);
            yl(e, c, l);
            break;
          case 3:
          case 4:
            var w = i.stateNode.containerInfo,
              T = Pf(e);
            wl(e, T, w);
            break;
          default:
            throw Error(s(161));
        }
      } catch (C) {
        Ie(e, e.return, C);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Pk(e, t, o) {
    (re = e), bf(e);
  }
  function bf(e, t, o) {
    for (var i = (e.mode & 1) !== 0; re !== null; ) {
      var l = re,
        c = l.child;
      if (l.tag === 22 && i) {
        var w = l.memoizedState !== null || Ms;
        if (!w) {
          var T = l.alternate,
            C = (T !== null && T.memoizedState !== null) || tt;
          T = Ms;
          var L = tt;
          if (((Ms = w), (tt = C) && !L))
            for (re = l; re !== null; )
              (w = re),
                (C = w.child),
                w.tag === 22 && w.memoizedState !== null
                  ? Nf(l)
                  : C !== null
                    ? ((C.return = w), (re = C))
                    : Nf(l);
          for (; c !== null; ) (re = c), bf(c), (c = c.sibling);
          (re = l), (Ms = T), (tt = L);
        }
        Cf(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && c !== null
          ? ((c.return = l), (re = c))
          : Cf(e);
    }
  }
  function Cf(e) {
    for (; re !== null; ) {
      var t = re;
      if ((t.flags & 8772) !== 0) {
        var o = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                tt || Ls(5, t);
                break;
              case 1:
                var i = t.stateNode;
                if (t.flags & 4 && !tt)
                  if (o === null) i.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? o.memoizedProps
                        : _t(t.type, o.memoizedProps);
                    i.componentDidUpdate(
                      l,
                      o.memoizedState,
                      i.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var c = t.updateQueue;
                c !== null && Cd(t, c, i);
                break;
              case 3:
                var w = t.updateQueue;
                if (w !== null) {
                  if (((o = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        o = t.child.stateNode;
                        break;
                      case 1:
                        o = t.child.stateNode;
                    }
                  Cd(t, w, o);
                }
                break;
              case 5:
                var T = t.stateNode;
                if (o === null && t.flags & 4) {
                  o = T;
                  var C = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      C.autoFocus && o.focus();
                      break;
                    case "img":
                      C.src && (o.src = C.src);
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
                  var L = t.alternate;
                  if (L !== null) {
                    var H = L.memoizedState;
                    if (H !== null) {
                      var G = H.dehydrated;
                      G !== null && no(G);
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
                throw Error(s(163));
            }
          tt || (t.flags & 512 && hl(t));
        } catch (U) {
          Ie(t, t.return, U);
        }
      }
      if (t === e) {
        re = null;
        break;
      }
      if (((o = t.sibling), o !== null)) {
        (o.return = t.return), (re = o);
        break;
      }
      re = t.return;
    }
  }
  function Ef(e) {
    for (; re !== null; ) {
      var t = re;
      if (t === e) {
        re = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        (o.return = t.return), (re = o);
        break;
      }
      re = t.return;
    }
  }
  function Nf(e) {
    for (; re !== null; ) {
      var t = re;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var o = t.return;
            try {
              Ls(4, t);
            } catch (C) {
              Ie(t, o, C);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (C) {
                Ie(t, l, C);
              }
            }
            var c = t.return;
            try {
              hl(t);
            } catch (C) {
              Ie(t, c, C);
            }
            break;
          case 5:
            var w = t.return;
            try {
              hl(t);
            } catch (C) {
              Ie(t, w, C);
            }
        }
      } catch (C) {
        Ie(t, t.return, C);
      }
      if (t === e) {
        re = null;
        break;
      }
      var T = t.sibling;
      if (T !== null) {
        (T.return = t.return), (re = T);
        break;
      }
      re = t.return;
    }
  }
  var xk = Math.ceil,
    Is = M.ReactCurrentDispatcher,
    ml = M.ReactCurrentOwner,
    Tt = M.ReactCurrentBatchConfig,
    xe = 0,
    Ge = null,
    ze = null,
    qe = 0,
    wt = 0,
    Nr = hn(0),
    Ue = 0,
    Co = null,
    Gn = 0,
    Fs = 0,
    kl = 0,
    Eo = null,
    lt = null,
    vl = 0,
    Rr = 1 / 0,
    tn = null,
    Vs = !1,
    gl = null,
    gn = null,
    zs = !1,
    Pn = null,
    Bs = 0,
    No = 0,
    Pl = null,
    Ws = -1,
    Us = 0;
  function rt() {
    return (xe & 6) !== 0 ? Fe() : Ws !== -1 ? Ws : (Ws = Fe());
  }
  function xn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (xe & 2) !== 0 && qe !== 0
        ? qe & -qe
        : sk.transition !== null
          ? (Us === 0 && (Us = gc()), Us)
          : ((e = Ce),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Rc(e.type))),
            e);
  }
  function At(e, t, o, i) {
    if (50 < No) throw ((No = 0), (Pl = null), Error(s(185)));
    Xr(e, o, i),
      ((xe & 2) === 0 || e !== Ge) &&
        (e === Ge && ((xe & 2) === 0 && (Fs |= o), Ue === 4 && Tn(e, qe)),
        ut(e, i),
        o === 1 &&
          xe === 0 &&
          (t.mode & 1) === 0 &&
          ((Rr = Fe() + 500), ms && yn()));
  }
  function ut(e, t) {
    var o = e.callbackNode;
    sm(e, t);
    var i = Jo(e, e === Ge ? qe : 0);
    if (i === 0)
      o !== null && mc(o), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = i & -i), e.callbackPriority !== t)) {
      if ((o != null && mc(o), t === 1))
        e.tag === 0 ? ok(Of.bind(null, e)) : hd(Of.bind(null, e)),
          ek(function () {
            (xe & 6) === 0 && yn();
          }),
          (o = null);
      else {
        switch (Pc(i)) {
          case 1:
            o = ea;
            break;
          case 4:
            o = kc;
            break;
          case 16:
            o = Ko;
            break;
          case 536870912:
            o = vc;
            break;
          default:
            o = Ko;
        }
        o = Ff(o, Rf.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = o);
    }
  }
  function Rf(e, t) {
    if (((Ws = -1), (Us = 0), (xe & 6) !== 0)) throw Error(s(327));
    var o = e.callbackNode;
    if (Or() && e.callbackNode !== o) return null;
    var i = Jo(e, e === Ge ? qe : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = Hs(e, i);
    else {
      t = i;
      var l = xe;
      xe |= 2;
      var c = jf();
      (Ge !== e || qe !== t) && ((tn = null), (Rr = Fe() + 500), Kn(e, t));
      do
        try {
          bk();
          break;
        } catch (T) {
          _f(e, T);
        }
      while (!0);
      Va(),
        (Is.current = c),
        (xe = l),
        ze !== null ? (t = 0) : ((Ge = null), (qe = 0), (t = Ue));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = ta(e)), l !== 0 && ((i = l), (t = xl(e, l)))),
        t === 1)
      )
        throw ((o = Co), Kn(e, 0), Tn(e, i), ut(e, Fe()), o);
      if (t === 6) Tn(e, i);
      else {
        if (
          ((l = e.current.alternate),
          (i & 30) === 0 &&
            !Tk(l) &&
            ((t = Hs(e, i)),
            t === 2 && ((c = ta(e)), c !== 0 && ((i = c), (t = xl(e, c)))),
            t === 1))
        )
          throw ((o = Co), Kn(e, 0), Tn(e, i), ut(e, Fe()), o);
        switch (((e.finishedWork = l), (e.finishedLanes = i), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Yn(e, lt, tn);
            break;
          case 3:
            if (
              (Tn(e, i),
              (i & 130023424) === i && ((t = vl + 500 - Fe()), 10 < t))
            ) {
              if (Jo(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & i) !== i)) {
                rt(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Na(Yn.bind(null, e, lt, tn), t);
              break;
            }
            Yn(e, lt, tn);
            break;
          case 4:
            if ((Tn(e, i), (i & 4194240) === i)) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var w = 31 - Nt(i);
              (c = 1 << w), (w = t[w]), w > l && (l = w), (i &= ~c);
            }
            if (
              ((i = l),
              (i = Fe() - i),
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
                            : 1960 * xk(i / 1960)) - i),
              10 < i)
            ) {
              e.timeoutHandle = Na(Yn.bind(null, e, lt, tn), i);
              break;
            }
            Yn(e, lt, tn);
            break;
          case 5:
            Yn(e, lt, tn);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return ut(e, Fe()), e.callbackNode === o ? Rf.bind(null, e) : null;
  }
  function xl(e, t) {
    var o = Eo;
    return (
      e.current.memoizedState.isDehydrated && (Kn(e, t).flags |= 256),
      (e = Hs(e, t)),
      e !== 2 && ((t = lt), (lt = o), t !== null && Tl(t)),
      e
    );
  }
  function Tl(e) {
    lt === null ? (lt = e) : lt.push.apply(lt, e);
  }
  function Tk(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var o = t.updateQueue;
        if (o !== null && ((o = o.stores), o !== null))
          for (var i = 0; i < o.length; i++) {
            var l = o[i],
              c = l.getSnapshot;
            l = l.value;
            try {
              if (!Rt(c(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((o = t.child), t.subtreeFlags & 16384 && o !== null))
        (o.return = t), (t = o);
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
  function Tn(e, t) {
    for (
      t &= ~kl,
        t &= ~Fs,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var o = 31 - Nt(t),
        i = 1 << o;
      (e[o] = -1), (t &= ~i);
    }
  }
  function Of(e) {
    if ((xe & 6) !== 0) throw Error(s(327));
    Or();
    var t = Jo(e, 0);
    if ((t & 1) === 0) return ut(e, Fe()), null;
    var o = Hs(e, t);
    if (e.tag !== 0 && o === 2) {
      var i = ta(e);
      i !== 0 && ((t = i), (o = xl(e, i)));
    }
    if (o === 1) throw ((o = Co), Kn(e, 0), Tn(e, t), ut(e, Fe()), o);
    if (o === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Yn(e, lt, tn),
      ut(e, Fe()),
      null
    );
  }
  function Sl(e, t) {
    var o = xe;
    xe |= 1;
    try {
      return e(t);
    } finally {
      (xe = o), xe === 0 && ((Rr = Fe() + 500), ms && yn());
    }
  }
  function Qn(e) {
    Pn !== null && Pn.tag === 0 && (xe & 6) === 0 && Or();
    var t = xe;
    xe |= 1;
    var o = Tt.transition,
      i = Ce;
    try {
      if (((Tt.transition = null), (Ce = 1), e)) return e();
    } finally {
      (Ce = i), (Tt.transition = o), (xe = t), (xe & 6) === 0 && yn();
    }
  }
  function bl() {
    (wt = Nr.current), Oe(Nr);
  }
  function Kn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var o = e.timeoutHandle;
    if ((o !== -1 && ((e.timeoutHandle = -1), Zm(o)), ze !== null))
      for (o = ze.return; o !== null; ) {
        var i = o;
        switch ((Aa(i), i.tag)) {
          case 1:
            (i = i.type.childContextTypes), i != null && ws();
            break;
          case 3:
            br(), Oe(st), Oe(Je), Qa();
            break;
          case 5:
            $a(i);
            break;
          case 4:
            br();
            break;
          case 13:
            Oe(Me);
            break;
          case 19:
            Oe(Me);
            break;
          case 10:
            za(i.type._context);
            break;
          case 22:
          case 23:
            bl();
        }
        o = o.return;
      }
    if (
      ((Ge = e),
      (ze = e = Sn(e.current, null)),
      (qe = wt = t),
      (Ue = 0),
      (Co = null),
      (kl = Fs = Gn = 0),
      (lt = Eo = null),
      Un !== null)
    ) {
      for (t = 0; t < Un.length; t++)
        if (((o = Un[t]), (i = o.interleaved), i !== null)) {
          o.interleaved = null;
          var l = i.next,
            c = o.pending;
          if (c !== null) {
            var w = c.next;
            (c.next = l), (i.next = w);
          }
          o.pending = i;
        }
      Un = null;
    }
    return e;
  }
  function _f(e, t) {
    do {
      var o = ze;
      try {
        if ((Va(), (Es.current = _s), Ns)) {
          for (var i = Le.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), (i = i.next);
          }
          Ns = !1;
        }
        if (
          (($n = 0),
          ($e = We = Le = null),
          (go = !1),
          (Po = 0),
          (ml.current = null),
          o === null || o.return === null)
        ) {
          (Ue = 1), (Co = t), (ze = null);
          break;
        }
        e: {
          var c = e,
            w = o.return,
            T = o,
            C = t;
          if (
            ((t = qe),
            (T.flags |= 32768),
            C !== null && typeof C == "object" && typeof C.then == "function")
          ) {
            var L = C,
              H = T,
              G = H.tag;
            if ((H.mode & 1) === 0 && (G === 0 || G === 11 || G === 15)) {
              var U = H.alternate;
              U
                ? ((H.updateQueue = U.updateQueue),
                  (H.memoizedState = U.memoizedState),
                  (H.lanes = U.lanes))
                : ((H.updateQueue = null), (H.memoizedState = null));
            }
            var ne = tf(w);
            if (ne !== null) {
              (ne.flags &= -257),
                nf(ne, w, T, c, t),
                ne.mode & 1 && ef(c, L, t),
                (t = ne),
                (C = L);
              var ie = t.updateQueue;
              if (ie === null) {
                var ae = new Set();
                ae.add(C), (t.updateQueue = ae);
              } else ie.add(C);
              break e;
            } else {
              if ((t & 1) === 0) {
                ef(c, L, t), Cl();
                break e;
              }
              C = Error(s(426));
            }
          } else if (De && T.mode & 1) {
            var Ve = tf(w);
            if (Ve !== null) {
              (Ve.flags & 65536) === 0 && (Ve.flags |= 256),
                nf(Ve, w, T, c, t),
                Ia(Cr(C, T));
              break e;
            }
          }
          (c = C = Cr(C, T)),
            Ue !== 4 && (Ue = 2),
            Eo === null ? (Eo = [c]) : Eo.push(c),
            (c = w);
          do {
            switch (c.tag) {
              case 3:
                (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                var j = Jd(c, C, t);
                bd(c, j);
                break e;
              case 1:
                T = C;
                var N = c.type,
                  A = c.stateNode;
                if (
                  (c.flags & 128) === 0 &&
                  (typeof N.getDerivedStateFromError == "function" ||
                    (A !== null &&
                      typeof A.componentDidCatch == "function" &&
                      (gn === null || !gn.has(A))))
                ) {
                  (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                  var Y = Zd(c, T, t);
                  bd(c, Y);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        Af(o);
      } catch (le) {
        (t = le), ze === o && o !== null && (ze = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function jf() {
    var e = Is.current;
    return (Is.current = _s), e === null ? _s : e;
  }
  function Cl() {
    (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4),
      Ge === null ||
        ((Gn & 268435455) === 0 && (Fs & 268435455) === 0) ||
        Tn(Ge, qe);
  }
  function Hs(e, t) {
    var o = xe;
    xe |= 2;
    var i = jf();
    (Ge !== e || qe !== t) && ((tn = null), Kn(e, t));
    do
      try {
        Sk();
        break;
      } catch (l) {
        _f(e, l);
      }
    while (!0);
    if ((Va(), (xe = o), (Is.current = i), ze !== null)) throw Error(s(261));
    return (Ge = null), (qe = 0), Ue;
  }
  function Sk() {
    for (; ze !== null; ) Df(ze);
  }
  function bk() {
    for (; ze !== null && !qy(); ) Df(ze);
  }
  function Df(e) {
    var t = If(e.alternate, e, wt);
    (e.memoizedProps = e.pendingProps),
      t === null ? Af(e) : (ze = t),
      (ml.current = null);
  }
  function Af(e) {
    var t = e;
    do {
      var o = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((o = mk(o, t, wt)), o !== null)) {
          ze = o;
          return;
        }
      } else {
        if (((o = kk(o, t)), o !== null)) {
          (o.flags &= 32767), (ze = o);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ue = 6), (ze = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        ze = t;
        return;
      }
      ze = t = e;
    } while (t !== null);
    Ue === 0 && (Ue = 5);
  }
  function Yn(e, t, o) {
    var i = Ce,
      l = Tt.transition;
    try {
      (Tt.transition = null), (Ce = 1), Ck(e, t, o, i);
    } finally {
      (Tt.transition = l), (Ce = i);
    }
    return null;
  }
  function Ck(e, t, o, i) {
    do Or();
    while (Pn !== null);
    if ((xe & 6) !== 0) throw Error(s(327));
    o = e.finishedWork;
    var l = e.finishedLanes;
    if (o === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), o === e.current))
      throw Error(s(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var c = o.lanes | o.childLanes;
    if (
      (im(e, c),
      e === Ge && ((ze = Ge = null), (qe = 0)),
      ((o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0) ||
        zs ||
        ((zs = !0),
        Ff(Ko, function () {
          return Or(), null;
        })),
      (c = (o.flags & 15990) !== 0),
      (o.subtreeFlags & 15990) !== 0 || c)
    ) {
      (c = Tt.transition), (Tt.transition = null);
      var w = Ce;
      Ce = 1;
      var T = xe;
      (xe |= 4),
        (ml.current = null),
        gk(e, o),
        Sf(o, e),
        Gm(Ca),
        (ts = !!ba),
        (Ca = ba = null),
        (e.current = o),
        Pk(o),
        Xy(),
        (xe = T),
        (Ce = w),
        (Tt.transition = c);
    } else e.current = o;
    if (
      (zs && ((zs = !1), (Pn = e), (Bs = l)),
      (c = e.pendingLanes),
      c === 0 && (gn = null),
      em(o.stateNode),
      ut(e, Fe()),
      t !== null)
    )
      for (i = e.onRecoverableError, o = 0; o < t.length; o++)
        (l = t[o]), i(l.value, { componentStack: l.stack, digest: l.digest });
    if (Vs) throw ((Vs = !1), (e = gl), (gl = null), e);
    return (
      (Bs & 1) !== 0 && e.tag !== 0 && Or(),
      (c = e.pendingLanes),
      (c & 1) !== 0 ? (e === Pl ? No++ : ((No = 0), (Pl = e))) : (No = 0),
      yn(),
      null
    );
  }
  function Or() {
    if (Pn !== null) {
      var e = Pc(Bs),
        t = Tt.transition,
        o = Ce;
      try {
        if (((Tt.transition = null), (Ce = 16 > e ? 16 : e), Pn === null))
          var i = !1;
        else {
          if (((e = Pn), (Pn = null), (Bs = 0), (xe & 6) !== 0))
            throw Error(s(331));
          var l = xe;
          for (xe |= 4, re = e.current; re !== null; ) {
            var c = re,
              w = c.child;
            if ((re.flags & 16) !== 0) {
              var T = c.deletions;
              if (T !== null) {
                for (var C = 0; C < T.length; C++) {
                  var L = T[C];
                  for (re = L; re !== null; ) {
                    var H = re;
                    switch (H.tag) {
                      case 0:
                      case 11:
                      case 15:
                        bo(8, H, c);
                    }
                    var G = H.child;
                    if (G !== null) (G.return = H), (re = G);
                    else
                      for (; re !== null; ) {
                        H = re;
                        var U = H.sibling,
                          ne = H.return;
                        if ((vf(H), H === L)) {
                          re = null;
                          break;
                        }
                        if (U !== null) {
                          (U.return = ne), (re = U);
                          break;
                        }
                        re = ne;
                      }
                  }
                }
                var ie = c.alternate;
                if (ie !== null) {
                  var ae = ie.child;
                  if (ae !== null) {
                    ie.child = null;
                    do {
                      var Ve = ae.sibling;
                      (ae.sibling = null), (ae = Ve);
                    } while (ae !== null);
                  }
                }
                re = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && w !== null)
              (w.return = c), (re = w);
            else
              e: for (; re !== null; ) {
                if (((c = re), (c.flags & 2048) !== 0))
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      bo(9, c, c.return);
                  }
                var j = c.sibling;
                if (j !== null) {
                  (j.return = c.return), (re = j);
                  break e;
                }
                re = c.return;
              }
          }
          var N = e.current;
          for (re = N; re !== null; ) {
            w = re;
            var A = w.child;
            if ((w.subtreeFlags & 2064) !== 0 && A !== null)
              (A.return = w), (re = A);
            else
              e: for (w = N; re !== null; ) {
                if (((T = re), (T.flags & 2048) !== 0))
                  try {
                    switch (T.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ls(9, T);
                    }
                  } catch (le) {
                    Ie(T, T.return, le);
                  }
                if (T === w) {
                  re = null;
                  break e;
                }
                var Y = T.sibling;
                if (Y !== null) {
                  (Y.return = T.return), (re = Y);
                  break e;
                }
                re = T.return;
              }
          }
          if (
            ((xe = l),
            yn(),
            Vt && typeof Vt.onPostCommitFiberRoot == "function")
          )
            try {
              Vt.onPostCommitFiberRoot(Yo, e);
            } catch {}
          i = !0;
        }
        return i;
      } finally {
        (Ce = o), (Tt.transition = t);
      }
    }
    return !1;
  }
  function Mf(e, t, o) {
    (t = Cr(o, t)),
      (t = Jd(e, t, 1)),
      (e = kn(e, t, 1)),
      (t = rt()),
      e !== null && (Xr(e, 1, t), ut(e, t));
  }
  function Ie(e, t, o) {
    if (e.tag === 3) Mf(e, e, o);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Mf(t, e, o);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (gn === null || !gn.has(i)))
          ) {
            (e = Cr(o, e)),
              (e = Zd(t, e, 1)),
              (t = kn(t, e, 1)),
              (e = rt()),
              t !== null && (Xr(t, 1, e), ut(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ek(e, t, o) {
    var i = e.pingCache;
    i !== null && i.delete(t),
      (t = rt()),
      (e.pingedLanes |= e.suspendedLanes & o),
      Ge === e &&
        (qe & o) === o &&
        (Ue === 4 || (Ue === 3 && (qe & 130023424) === qe && 500 > Fe() - vl)
          ? Kn(e, 0)
          : (kl |= o)),
      ut(e, t);
  }
  function Lf(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Xo), (Xo <<= 1), (Xo & 130023424) === 0 && (Xo = 4194304)));
    var o = rt();
    (e = Jt(e, t)), e !== null && (Xr(e, t, o), ut(e, o));
  }
  function Nk(e) {
    var t = e.memoizedState,
      o = 0;
    t !== null && (o = t.retryLane), Lf(e, o);
  }
  function Rk(e, t) {
    var o = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode,
          l = e.memoizedState;
        l !== null && (o = l.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    i !== null && i.delete(t), Lf(e, o);
  }
  var If;
  If = function (e, t, o) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || st.current) at = !0;
      else {
        if ((e.lanes & o) === 0 && (t.flags & 128) === 0)
          return (at = !1), yk(e, t, o);
        at = (e.flags & 131072) !== 0;
      }
    else (at = !1), De && (t.flags & 1048576) !== 0 && wd(t, vs, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var i = t.type;
        As(e, t), (e = t.pendingProps);
        var l = kr(t, Je.current);
        Sr(t, o), (l = qa(null, t, i, e, l, o));
        var c = Xa();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              it(i) ? ((c = !0), ys(t)) : (c = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Ua(t),
              (l.updater = js),
              (t.stateNode = l),
              (l._reactInternals = t),
              rl(t, i, e, o),
              (t = al(null, t, i, !0, c, o)))
            : ((t.tag = 0), De && c && Da(t), nt(null, t, l, o), (t = t.child)),
          t
        );
      case 16:
        i = t.elementType;
        e: {
          switch (
            (As(e, t),
            (e = t.pendingProps),
            (l = i._init),
            (i = l(i._payload)),
            (t.type = i),
            (l = t.tag = _k(i)),
            (e = _t(i, e)),
            l)
          ) {
            case 0:
              t = il(null, t, i, e, o);
              break e;
            case 1:
              t = uf(null, t, i, e, o);
              break e;
            case 11:
              t = rf(null, t, i, e, o);
              break e;
            case 14:
              t = of(null, t, i, _t(i.type, e), o);
              break e;
          }
          throw Error(s(306, i, ""));
        }
        return t;
      case 0:
        return (
          (i = t.type),
          (l = t.pendingProps),
          (l = t.elementType === i ? l : _t(i, l)),
          il(e, t, i, l, o)
        );
      case 1:
        return (
          (i = t.type),
          (l = t.pendingProps),
          (l = t.elementType === i ? l : _t(i, l)),
          uf(e, t, i, l, o)
        );
      case 3:
        e: {
          if ((cf(t), e === null)) throw Error(s(387));
          (i = t.pendingProps),
            (c = t.memoizedState),
            (l = c.element),
            Sd(e, t),
            bs(t, i, null, o);
          var w = t.memoizedState;
          if (((i = w.element), c.isDehydrated))
            if (
              ((c = {
                element: i,
                isDehydrated: !1,
                cache: w.cache,
                pendingSuspenseBoundaries: w.pendingSuspenseBoundaries,
                transitions: w.transitions,
              }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              (l = Cr(Error(s(423)), t)), (t = df(e, t, i, o, l));
              break e;
            } else if (i !== l) {
              (l = Cr(Error(s(424)), t)), (t = df(e, t, i, o, l));
              break e;
            } else
              for (
                ht = pn(t.stateNode.containerInfo.firstChild),
                  pt = t,
                  De = !0,
                  Ot = null,
                  o = xd(t, null, i, o),
                  t.child = o;
                o;

              )
                (o.flags = (o.flags & -3) | 4096), (o = o.sibling);
          else {
            if ((Pr(), i === l)) {
              t = en(e, t, o);
              break e;
            }
            nt(e, t, i, o);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ed(t),
          e === null && La(t),
          (i = t.type),
          (l = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (w = l.children),
          Ea(i, l) ? (w = null) : c !== null && Ea(i, c) && (t.flags |= 32),
          lf(e, t),
          nt(e, t, w, o),
          t.child
        );
      case 6:
        return e === null && La(t), null;
      case 13:
        return ff(e, t, o);
      case 4:
        return (
          Ha(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = xr(t, null, i, o)) : nt(e, t, i, o),
          t.child
        );
      case 11:
        return (
          (i = t.type),
          (l = t.pendingProps),
          (l = t.elementType === i ? l : _t(i, l)),
          rf(e, t, i, l, o)
        );
      case 7:
        return nt(e, t, t.pendingProps, o), t.child;
      case 8:
        return nt(e, t, t.pendingProps.children, o), t.child;
      case 12:
        return nt(e, t, t.pendingProps.children, o), t.child;
      case 10:
        e: {
          if (
            ((i = t.type._context),
            (l = t.pendingProps),
            (c = t.memoizedProps),
            (w = l.value),
            Ne(xs, i._currentValue),
            (i._currentValue = w),
            c !== null)
          )
            if (Rt(c.value, w)) {
              if (c.children === l.children && !st.current) {
                t = en(e, t, o);
                break e;
              }
            } else
              for (c = t.child, c !== null && (c.return = t); c !== null; ) {
                var T = c.dependencies;
                if (T !== null) {
                  w = c.child;
                  for (var C = T.firstContext; C !== null; ) {
                    if (C.context === i) {
                      if (c.tag === 1) {
                        (C = Zt(-1, o & -o)), (C.tag = 2);
                        var L = c.updateQueue;
                        if (L !== null) {
                          L = L.shared;
                          var H = L.pending;
                          H === null
                            ? (C.next = C)
                            : ((C.next = H.next), (H.next = C)),
                            (L.pending = C);
                        }
                      }
                      (c.lanes |= o),
                        (C = c.alternate),
                        C !== null && (C.lanes |= o),
                        Ba(c.return, o, t),
                        (T.lanes |= o);
                      break;
                    }
                    C = C.next;
                  }
                } else if (c.tag === 10) w = c.type === t.type ? null : c.child;
                else if (c.tag === 18) {
                  if (((w = c.return), w === null)) throw Error(s(341));
                  (w.lanes |= o),
                    (T = w.alternate),
                    T !== null && (T.lanes |= o),
                    Ba(w, o, t),
                    (w = c.sibling);
                } else w = c.child;
                if (w !== null) w.return = c;
                else
                  for (w = c; w !== null; ) {
                    if (w === t) {
                      w = null;
                      break;
                    }
                    if (((c = w.sibling), c !== null)) {
                      (c.return = w.return), (w = c);
                      break;
                    }
                    w = w.return;
                  }
                c = w;
              }
          nt(e, t, l.children, o), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (i = t.pendingProps.children),
          Sr(t, o),
          (l = Pt(l)),
          (i = i(l)),
          (t.flags |= 1),
          nt(e, t, i, o),
          t.child
        );
      case 14:
        return (
          (i = t.type),
          (l = _t(i, t.pendingProps)),
          (l = _t(i.type, l)),
          of(e, t, i, l, o)
        );
      case 15:
        return sf(e, t, t.type, t.pendingProps, o);
      case 17:
        return (
          (i = t.type),
          (l = t.pendingProps),
          (l = t.elementType === i ? l : _t(i, l)),
          As(e, t),
          (t.tag = 1),
          it(i) ? ((e = !0), ys(t)) : (e = !1),
          Sr(t, o),
          qd(t, i, l),
          rl(t, i, l, o),
          al(null, t, i, !0, e, o)
        );
      case 19:
        return hf(e, t, o);
      case 22:
        return af(e, t, o);
    }
    throw Error(s(156, t.tag));
  };
  function Ff(e, t) {
    return yc(e, t);
  }
  function Ok(e, t, o, i) {
    (this.tag = e),
      (this.key = o),
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
  function St(e, t, o, i) {
    return new Ok(e, t, o, i);
  }
  function El(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function _k(e) {
    if (typeof e == "function") return El(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === W)) return 11;
      if (e === ue) return 14;
    }
    return 2;
  }
  function Sn(e, t) {
    var o = e.alternate;
    return (
      o === null
        ? ((o = St(e.tag, t, e.key, e.mode)),
          (o.elementType = e.elementType),
          (o.type = e.type),
          (o.stateNode = e.stateNode),
          (o.alternate = e),
          (e.alternate = o))
        : ((o.pendingProps = t),
          (o.type = e.type),
          (o.flags = 0),
          (o.subtreeFlags = 0),
          (o.deletions = null)),
      (o.flags = e.flags & 14680064),
      (o.childLanes = e.childLanes),
      (o.lanes = e.lanes),
      (o.child = e.child),
      (o.memoizedProps = e.memoizedProps),
      (o.memoizedState = e.memoizedState),
      (o.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (o.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (o.sibling = e.sibling),
      (o.index = e.index),
      (o.ref = e.ref),
      o
    );
  }
  function $s(e, t, o, i, l, c) {
    var w = 2;
    if (((i = e), typeof e == "function")) El(e) && (w = 1);
    else if (typeof e == "string") w = 5;
    else
      e: switch (e) {
        case z:
          return qn(o.children, l, c, t);
        case J:
          (w = 8), (l |= 8);
          break;
        case K:
          return (
            (e = St(12, o, t, l | 2)), (e.elementType = K), (e.lanes = c), e
          );
        case te:
          return (e = St(13, o, t, l)), (e.elementType = te), (e.lanes = c), e;
        case Q:
          return (e = St(19, o, t, l)), (e.elementType = Q), (e.lanes = c), e;
        case se:
          return Gs(o, l, c, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ee:
                w = 10;
                break e;
              case I:
                w = 9;
                break e;
              case W:
                w = 11;
                break e;
              case ue:
                w = 14;
                break e;
              case oe:
                (w = 16), (i = null);
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = St(w, o, t, l)), (t.elementType = e), (t.type = i), (t.lanes = c), t
    );
  }
  function qn(e, t, o, i) {
    return (e = St(7, e, i, t)), (e.lanes = o), e;
  }
  function Gs(e, t, o, i) {
    return (
      (e = St(22, e, i, t)),
      (e.elementType = se),
      (e.lanes = o),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Nl(e, t, o) {
    return (e = St(6, e, null, t)), (e.lanes = o), e;
  }
  function Rl(e, t, o) {
    return (
      (t = St(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = o),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function jk(e, t, o, i, l) {
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
      (this.eventTimes = na(0)),
      (this.expirationTimes = na(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = na(0)),
      (this.identifierPrefix = i),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Ol(e, t, o, i, l, c, w, T, C) {
    return (
      (e = new jk(e, t, o, T, C)),
      t === 1 ? ((t = 1), c === !0 && (t |= 8)) : (t = 0),
      (c = St(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (c.memoizedState = {
        element: i,
        isDehydrated: o,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ua(c),
      e
    );
  }
  function Dk(e, t, o) {
    var i =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: $,
      key: i == null ? null : "" + i,
      children: e,
      containerInfo: t,
      implementation: o,
    };
  }
  function Vf(e) {
    if (!e) return wn;
    e = e._reactInternals;
    e: {
      if (Fn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (it(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var o = e.type;
      if (it(o)) return fd(e, o, t);
    }
    return t;
  }
  function zf(e, t, o, i, l, c, w, T, C) {
    return (
      (e = Ol(o, i, !0, e, l, c, w, T, C)),
      (e.context = Vf(null)),
      (o = e.current),
      (i = rt()),
      (l = xn(o)),
      (c = Zt(i, l)),
      (c.callback = t ?? null),
      kn(o, c, l),
      (e.current.lanes = l),
      Xr(e, l, i),
      ut(e, i),
      e
    );
  }
  function Qs(e, t, o, i) {
    var l = t.current,
      c = rt(),
      w = xn(l);
    return (
      (o = Vf(o)),
      t.context === null ? (t.context = o) : (t.pendingContext = o),
      (t = Zt(c, w)),
      (t.payload = { element: e }),
      (i = i === void 0 ? null : i),
      i !== null && (t.callback = i),
      (e = kn(l, t, w)),
      e !== null && (At(e, l, w, c), Ss(e, l, w)),
      w
    );
  }
  function Ks(e) {
    return (
      (e = e.current), e.child ? (e.child.tag === 5, e.child.stateNode) : null
    );
  }
  function Bf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var o = e.retryLane;
      e.retryLane = o !== 0 && o < t ? o : t;
    }
  }
  function _l(e, t) {
    Bf(e, t), (e = e.alternate) && Bf(e, t);
  }
  function Ak() {
    return null;
  }
  var Wf =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function jl(e) {
    this._internalRoot = e;
  }
  (Ys.prototype.render = jl.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Qs(e, t, null, null);
    }),
    (Ys.prototype.unmount = jl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Qn(function () {
            Qs(null, e, null, null);
          }),
            (t[Kt] = null);
        }
      });
  function Ys(e) {
    this._internalRoot = e;
  }
  Ys.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Sc();
      e = { blockedOn: null, target: e, priority: t };
      for (var o = 0; o < cn.length && t !== 0 && t < cn[o].priority; o++);
      cn.splice(o, 0, e), o === 0 && Ec(e);
    }
  };
  function Dl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function qs(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Uf() {}
  function Mk(e, t, o, i, l) {
    if (l) {
      if (typeof i == "function") {
        var c = i;
        i = function () {
          var L = Ks(w);
          c.call(L);
        };
      }
      var w = zf(t, i, e, 0, null, !1, !1, "", Uf);
      return (
        (e._reactRootContainer = w),
        (e[Kt] = w.current),
        fo(e.nodeType === 8 ? e.parentNode : e),
        Qn(),
        w
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof i == "function") {
      var T = i;
      i = function () {
        var L = Ks(C);
        T.call(L);
      };
    }
    var C = Ol(e, 0, !1, null, null, !1, !1, "", Uf);
    return (
      (e._reactRootContainer = C),
      (e[Kt] = C.current),
      fo(e.nodeType === 8 ? e.parentNode : e),
      Qn(function () {
        Qs(t, C, o, i);
      }),
      C
    );
  }
  function Xs(e, t, o, i, l) {
    var c = o._reactRootContainer;
    if (c) {
      var w = c;
      if (typeof l == "function") {
        var T = l;
        l = function () {
          var C = Ks(w);
          T.call(C);
        };
      }
      Qs(t, w, e, l);
    } else w = Mk(o, t, e, l, i);
    return Ks(w);
  }
  (xc = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var o = qr(t.pendingLanes);
          o !== 0 &&
            (ra(t, o | 1),
            ut(t, Fe()),
            (xe & 6) === 0 && ((Rr = Fe() + 500), yn()));
        }
        break;
      case 13:
        Qn(function () {
          var i = Jt(e, 1);
          if (i !== null) {
            var l = rt();
            At(i, e, 1, l);
          }
        }),
          _l(e, 1);
    }
  }),
    (oa = function (e) {
      if (e.tag === 13) {
        var t = Jt(e, 134217728);
        if (t !== null) {
          var o = rt();
          At(t, e, 134217728, o);
        }
        _l(e, 134217728);
      }
    }),
    (Tc = function (e) {
      if (e.tag === 13) {
        var t = xn(e),
          o = Jt(e, t);
        if (o !== null) {
          var i = rt();
          At(o, e, t, i);
        }
        _l(e, t);
      }
    }),
    (Sc = function () {
      return Ce;
    }),
    (bc = function (e, t) {
      var o = Ce;
      try {
        return (Ce = e), t();
      } finally {
        Ce = o;
      }
    }),
    (qi = function (e, t, o) {
      switch (t) {
        case "input":
          if ((In(e, o), (t = o.name), o.type === "radio" && t != null)) {
            for (o = e; o.parentNode; ) o = o.parentNode;
            for (
              o = o.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < o.length;
              t++
            ) {
              var i = o[t];
              if (i !== e && i.form === e.form) {
                var l = hs(i);
                if (!l) throw Error(s(90));
                Ae(i), In(i, l);
              }
            }
          }
          break;
        case "textarea":
          ec(e, o);
          break;
        case "select":
          (t = o.value), t != null && ir(e, !!o.multiple, t, !1);
      }
    }),
    (uc = Sl),
    (cc = Qn);
  var Lk = { usingClientEntryPoint: !1, Events: [wo, yr, hs, ac, lc, Sl] },
    Ro = {
      findFiberByHostInstance: Vn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Ik = {
      bundleType: Ro.bundleType,
      version: Ro.version,
      rendererPackageName: Ro.rendererPackageName,
      rendererConfig: Ro.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: M.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = hc(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ro.findFiberByHostInstance || Ak,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Js = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Js.isDisabled && Js.supportsFiber)
      try {
        (Yo = Js.inject(Ik)), (Vt = Js);
      } catch {}
  }
  return (
    (ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lk),
    (ct.createPortal = function (e, t) {
      var o =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Dl(t)) throw Error(s(200));
      return Dk(e, t, null, o);
    }),
    (ct.createRoot = function (e, t) {
      if (!Dl(e)) throw Error(s(299));
      var o = !1,
        i = "",
        l = Wf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (o = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Ol(e, 1, !1, null, null, o, !1, i, l)),
        (e[Kt] = t.current),
        fo(e.nodeType === 8 ? e.parentNode : e),
        new jl(t)
      );
    }),
    (ct.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return (e = hc(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (ct.flushSync = function (e) {
      return Qn(e);
    }),
    (ct.hydrate = function (e, t, o) {
      if (!qs(t)) throw Error(s(200));
      return Xs(null, e, t, !0, o);
    }),
    (ct.hydrateRoot = function (e, t, o) {
      if (!Dl(e)) throw Error(s(405));
      var i = (o != null && o.hydratedSources) || null,
        l = !1,
        c = "",
        w = Wf;
      if (
        (o != null &&
          (o.unstable_strictMode === !0 && (l = !0),
          o.identifierPrefix !== void 0 && (c = o.identifierPrefix),
          o.onRecoverableError !== void 0 && (w = o.onRecoverableError)),
        (t = zf(t, null, e, 1, o ?? null, l, !1, c, w)),
        (e[Kt] = t.current),
        fo(e),
        i)
      )
        for (e = 0; e < i.length; e++)
          (o = i[e]),
            (l = o._getVersion),
            (l = l(o._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [o, l])
              : t.mutableSourceEagerHydrationData.push(o, l);
      return new Ys(t);
    }),
    (ct.render = function (e, t, o) {
      if (!qs(t)) throw Error(s(200));
      return Xs(null, e, t, !1, o);
    }),
    (ct.unmountComponentAtNode = function (e) {
      if (!qs(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (Qn(function () {
            Xs(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Kt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (ct.unstable_batchedUpdates = Sl),
    (ct.unstable_renderSubtreeIntoContainer = function (e, t, o, i) {
      if (!qs(o)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Xs(e, t, o, !1, i);
    }),
    (ct.version = "18.3.1-next-f1338f8080-20240426"),
    ct
  );
}
var Xf;
function nh() {
  if (Xf) return Ll.exports;
  Xf = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), (Ll.exports = $k()), Ll.exports;
}
var Jf;
function Gk() {
  if (Jf) return Zs;
  Jf = 1;
  var n = nh();
  return (Zs.createRoot = n.createRoot), (Zs.hydrateRoot = n.hydrateRoot), Zs;
}
var Qk = Gk();
function Kk(n, r) {
  if (n instanceof RegExp) return { keys: !1, pattern: n };
  var s,
    a,
    u,
    d,
    f = [],
    p = "",
    m = n.split("/");
  for (m[0] || m.shift(); (u = m.shift()); )
    (s = u[0]),
      s === "*"
        ? (f.push(s), (p += u[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : s === ":"
          ? ((a = u.indexOf("?", 1)),
            (d = u.indexOf(".", 1)),
            f.push(u.substring(1, ~a ? a : ~d ? d : u.length)),
            (p += ~a && !~d ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~d && (p += (~a ? "?" : "") + "\\" + u.substring(d)))
          : (p += "/" + u);
  return {
    keys: f,
    pattern: new RegExp("^" + p + (r ? "(?=$|/)" : "/?$"), "i"),
  };
}
var y = Ni();
const Nn = th(y),
  Ri = Vk({ __proto__: null, default: Nn }, [y]);
var Vl = { exports: {} },
  zl = {};
var Zf;
function Yk() {
  if (Zf) return zl;
  Zf = 1;
  var n = Ni();
  function r(P, S) {
    return (P === S && (P !== 0 || 1 / P === 1 / S)) || (P !== P && S !== S);
  }
  var s = typeof Object.is == "function" ? Object.is : r,
    a = n.useState,
    u = n.useEffect,
    d = n.useLayoutEffect,
    f = n.useDebugValue;
  function p(P, S) {
    var E = S(),
      _ = a({ inst: { value: E, getSnapshot: S } }),
      v = _[0].inst,
      x = _[1];
    return (
      d(
        function () {
          (v.value = E), (v.getSnapshot = S), m(v) && x({ inst: v });
        },
        [P, E, S],
      ),
      u(
        function () {
          return (
            m(v) && x({ inst: v }),
            P(function () {
              m(v) && x({ inst: v });
            })
          );
        },
        [P],
      ),
      f(E),
      E
    );
  }
  function m(P) {
    var S = P.getSnapshot;
    P = P.value;
    try {
      var E = S();
      return !s(P, E);
    } catch {
      return !0;
    }
  }
  function k(P, S) {
    return S();
  }
  var g =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? k
      : p;
  return (
    (zl.useSyncExternalStore =
      n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : g),
    zl
  );
}
var ep;
function qk() {
  return ep || ((ep = 1), (Vl.exports = Yk())), Vl.exports;
}
var rh = qk();
const Xk = Ri.useInsertionEffect,
  Jk =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Zk = Jk ? y.useLayoutEffect : y.useEffect,
  ev = Xk || Zk,
  oh = (n) => {
    const r = y.useRef([n, (...s) => r[0](...s)]).current;
    return (
      ev(() => {
        r[0] = n;
      }),
      r[1]
    );
  },
  tv = "popstate",
  Eu = "pushState",
  Nu = "replaceState",
  nv = "hashchange",
  tp = [tv, Eu, Nu, nv],
  rv = (n) => {
    for (const r of tp) addEventListener(r, n);
    return () => {
      for (const r of tp) removeEventListener(r, n);
    };
  },
  sh = (n, r) => rh.useSyncExternalStore(rv, n, r),
  np = () => location.search,
  ov = ({ ssrSearch: n } = {}) => sh(np, n != null ? () => n : np),
  rp = () => location.pathname,
  sv = ({ ssrPath: n } = {}) => sh(rp, n != null ? () => n : rp),
  iv = (n, { replace: r = !1, state: s = null } = {}) =>
    history[r ? Nu : Eu](s, "", n),
  av = (n = {}) => [sv(n), iv],
  op = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[op] > "u") {
  for (const n of [Eu, Nu]) {
    const r = history[n];
    history[n] = function () {
      const s = r.apply(this, arguments),
        a = new Event(n);
      return (a.arguments = arguments), dispatchEvent(a), s;
    };
  }
  Object.defineProperty(window, op, { value: !0 });
}
const lv = (n, r) =>
    r.toLowerCase().indexOf(n.toLowerCase())
      ? "~" + r
      : r.slice(n.length) || "/",
  ih = (n = "") => (n === "/" ? "" : n),
  uv = (n, r) => (n[0] === "~" ? n.slice(1) : ih(r) + n),
  cv = (n = "", r) => lv(sp(ih(n)), sp(r)),
  sp = (n) => {
    try {
      return decodeURI(n);
    } catch {
      return n;
    }
  },
  ah = {
    hook: av,
    searchHook: ov,
    parser: Kk,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (n) => n,
    aroundNav: (n, r, s) => n(r, s),
  },
  lh = y.createContext(ah),
  Bo = () => y.useContext(lh),
  uh = {},
  ch = y.createContext(uh),
  dv = () => y.useContext(ch),
  Oi = (n) => {
    const [r, s] = n.hook(n);
    return [cv(n.base, r), oh((a, u) => n.aroundNav(s, uv(a, n.base), u))];
  },
  fv = () => Oi(Bo()),
  dh = (n, r, s, a) => {
    const { pattern: u, keys: d } =
        r instanceof RegExp ? { keys: !1, pattern: r } : n(r || "*", a),
      f = u.exec(s) || [],
      [p, ...m] = f;
    return p !== void 0
      ? [
          !0,
          (() => {
            const k =
              d !== !1
                ? Object.fromEntries(d.map((P, S) => [P, m[S]]))
                : f.groups;
            let g = { ...m };
            return k && Object.assign(g, k), g;
          })(),
          ...(a ? [p] : []),
        ]
      : [!1, null];
  },
  fh = ({ children: n, ...r }) => {
    const s = Bo(),
      a = r.hook ? ah : s;
    let u = a;
    const [d, f = r.ssrSearch ?? ""] = r.ssrPath?.split("?") ?? [];
    d && ((r.ssrSearch = f), (r.ssrPath = d)),
      (r.hrefs = r.hrefs ?? r.hook?.hrefs),
      (r.searchHook = r.searchHook ?? r.hook?.searchHook);
    let p = y.useRef({}),
      m = p.current,
      k = m;
    for (let g in a) {
      const P = g === "base" ? a[g] + (r[g] ?? "") : (r[g] ?? a[g]);
      m === k && P !== k[g] && (p.current = k = { ...k }),
        (k[g] = P),
        (P !== a[g] || P !== u[g]) && (u = k);
    }
    return y.createElement(lh.Provider, { value: u, children: n });
  },
  ip = ({ children: n, component: r }, s) =>
    r ? y.createElement(r, { params: s }) : typeof n == "function" ? n(s) : n,
  pv = (n) => {
    let r = y.useRef(uh);
    const s = r.current;
    return (r.current =
      Object.keys(n).length !== Object.keys(s).length ||
      Object.entries(n).some(([a, u]) => u !== s[a])
        ? n
        : s);
  },
  Bl = ({ path: n, nest: r, match: s, ...a }) => {
    const u = Bo(),
      [d] = Oi(u),
      [f, p, m] = s ?? dh(u.parser, n, d, r),
      k = pv({ ...dv(), ...p });
    if (!f) return null;
    const g = m ? y.createElement(fh, { base: m }, ip(a, k)) : ip(a, k);
    return y.createElement(ch.Provider, { value: k, children: g });
  },
  su = y.forwardRef((n, r) => {
    const s = Bo(),
      [a, u] = Oi(s),
      {
        to: d = "",
        href: f = d,
        onClick: p,
        asChild: m,
        children: k,
        className: g,
        replace: P,
        state: S,
        transition: E,
        ..._
      } = n,
      v = oh((R) => {
        R.ctrlKey ||
          R.metaKey ||
          R.altKey ||
          R.shiftKey ||
          R.button !== 0 ||
          (p?.(R), R.defaultPrevented || (R.preventDefault(), u(f, n)));
      }),
      x = s.hrefs(f[0] === "~" ? f.slice(1) : s.base + f, s);
    return m && y.isValidElement(k)
      ? y.cloneElement(k, { onClick: v, href: x })
      : y.createElement("a", {
          ..._,
          onClick: v,
          href: x,
          className: g?.call ? g(a === f) : g,
          children: k,
          ref: r,
        });
  }),
  ph = (n) =>
    Array.isArray(n)
      ? n.flatMap((r) => ph(r && r.type === y.Fragment ? r.props.children : r))
      : [n],
  hv = ({ children: n, location: r }) => {
    const s = Bo(),
      [a] = Oi(s);
    for (const u of ph(n)) {
      let d = 0;
      if (
        y.isValidElement(u) &&
        (d = dh(s.parser, u.props.path, r || a, u.props.nest))[0]
      )
        return y.cloneElement(u, { match: d });
    }
    return null;
  },
  Do = { v: [] },
  ap = () => Do.v.forEach((n) => n()),
  wv = (n) => (
    Do.v.push(n) === 1 && addEventListener("hashchange", ap),
    () => {
      (Do.v = Do.v.filter((r) => r !== n)),
        Do.v.length || removeEventListener("hashchange", ap);
    }
  ),
  yv = () => "/" + location.hash.replace(/^#?\/?/, ""),
  mv = (n, { state: r = null, replace: s = !1 } = {}) => {
    const a = location.href,
      [u, d] = n.replace(/^#?\/?/, "").split("?"),
      f = new URL(location.href);
    (f.hash = `/${u}`), d && (f.search = d);
    const p = f.href;
    s ? history.replaceState(r, "", p) : history.pushState(r, "", p);
    const m =
      typeof HashChangeEvent < "u"
        ? new HashChangeEvent("hashchange", { oldURL: a, newURL: p })
        : new Event("hashchange", { detail: { oldURL: a, newURL: p } });
    dispatchEvent(m);
  },
  hh = ({ ssrPath: n = "/" } = {}) => [
    rh.useSyncExternalStore(wv, yv, () => n),
    mv,
  ];
hh.hrefs = (n) => "#" + n;
var Fr = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(n) {
      return (
        this.listeners.add(n),
        this.onSubscribe(),
        () => {
          this.listeners.delete(n), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  kv = class extends Fr {
    #e;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (n) => {
          if (typeof window < "u" && window.addEventListener) {
            const r = () => n();
            return (
              window.addEventListener("visibilitychange", r, !1),
              () => {
                window.removeEventListener("visibilitychange", r);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(n) {
      (this.#n = n),
        this.#t?.(),
        (this.#t = n((r) => {
          typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
        }));
    }
    setFocused(n) {
      this.#e !== n && ((this.#e = n), this.onFocus());
    }
    onFocus() {
      const n = this.isFocused();
      this.listeners.forEach((r) => {
        r(n);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  Ru = new kv(),
  vv = {
    setTimeout: (n, r) => setTimeout(n, r),
    clearTimeout: (n) => clearTimeout(n),
    setInterval: (n, r) => setInterval(n, r),
    clearInterval: (n) => clearInterval(n),
  },
  gv = class {
    #e = vv;
    #t = !1;
    setTimeoutProvider(n) {
      this.#e = n;
    }
    setTimeout(n, r) {
      return this.#e.setTimeout(n, r);
    }
    clearTimeout(n) {
      this.#e.clearTimeout(n);
    }
    setInterval(n, r) {
      return this.#e.setInterval(n, r);
    }
    clearInterval(n) {
      this.#e.clearInterval(n);
    }
  },
  Zn = new gv();
function Pv(n) {
  setTimeout(n, 0);
}
var xv = typeof window > "u" || "Deno" in globalThis;
function ot() {}
function Tv(n, r) {
  return typeof n == "function" ? n(r) : n;
}
function iu(n) {
  return typeof n == "number" && n >= 0 && n !== 1 / 0;
}
function wh(n, r) {
  return Math.max(n + (r || 0) - Date.now(), 0);
}
function jn(n, r) {
  return typeof n == "function" ? n(r) : n;
}
function bt(n, r) {
  return typeof n == "function" ? n(r) : n;
}
function lp(n, r) {
  const {
    type: s = "all",
    exact: a,
    fetchStatus: u,
    predicate: d,
    queryKey: f,
    stale: p,
  } = n;
  if (f) {
    if (a) {
      if (r.queryHash !== Ou(f, r.options)) return !1;
    } else if (!Io(r.queryKey, f)) return !1;
  }
  if (s !== "all") {
    const m = r.isActive();
    if ((s === "active" && !m) || (s === "inactive" && m)) return !1;
  }
  return !(
    (typeof p == "boolean" && r.isStale() !== p) ||
    (u && u !== r.state.fetchStatus) ||
    (d && !d(r))
  );
}
function up(n, r) {
  const { exact: s, status: a, predicate: u, mutationKey: d } = n;
  if (d) {
    if (!r.options.mutationKey) return !1;
    if (s) {
      if (er(r.options.mutationKey) !== er(d)) return !1;
    } else if (!Io(r.options.mutationKey, d)) return !1;
  }
  return !((a && r.state.status !== a) || (u && !u(r)));
}
function Ou(n, r) {
  return (r?.queryKeyHashFn || er)(n);
}
function er(n) {
  return JSON.stringify(n, (r, s) =>
    au(s)
      ? Object.keys(s)
          .sort()
          .reduce((a, u) => ((a[u] = s[u]), a), {})
      : s,
  );
}
function Io(n, r) {
  return n === r
    ? !0
    : typeof n != typeof r
      ? !1
      : n && r && typeof n == "object" && typeof r == "object"
        ? Object.keys(r).every((s) => Io(n[s], r[s]))
        : !1;
}
var Sv = Object.prototype.hasOwnProperty;
function yh(n, r, s = 0) {
  if (n === r) return n;
  if (s > 500) return r;
  const a = cp(n) && cp(r);
  if (!a && !(au(n) && au(r))) return r;
  const d = (a ? n : Object.keys(n)).length,
    f = a ? r : Object.keys(r),
    p = f.length,
    m = a ? new Array(p) : {};
  let k = 0;
  for (let g = 0; g < p; g++) {
    const P = a ? g : f[g],
      S = n[P],
      E = r[P];
    if (S === E) {
      (m[P] = S), (a ? g < d : Sv.call(n, P)) && k++;
      continue;
    }
    if (
      S === null ||
      E === null ||
      typeof S != "object" ||
      typeof E != "object"
    ) {
      m[P] = E;
      continue;
    }
    const _ = yh(S, E, s + 1);
    (m[P] = _), _ === S && k++;
  }
  return d === p && k === d ? n : m;
}
function vi(n, r) {
  if (!r || Object.keys(n).length !== Object.keys(r).length) return !1;
  for (const s in n) if (n[s] !== r[s]) return !1;
  return !0;
}
function cp(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function au(n) {
  if (!dp(n)) return !1;
  const r = n.constructor;
  if (r === void 0) return !0;
  const s = r.prototype;
  return !(
    !dp(s) ||
    !s.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(n) !== Object.prototype
  );
}
function dp(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function bv(n) {
  return new Promise((r) => {
    Zn.setTimeout(r, n);
  });
}
function lu(n, r, s) {
  return typeof s.structuralSharing == "function"
    ? s.structuralSharing(n, r)
    : s.structuralSharing !== !1
      ? yh(n, r)
      : r;
}
function Cv(n, r, s = 0) {
  const a = [...n, r];
  return s && a.length > s ? a.slice(1) : a;
}
function Ev(n, r, s = 0) {
  const a = [r, ...n];
  return s && a.length > s ? a.slice(0, -1) : a;
}
var _u = Symbol();
function mh(n, r) {
  return !n.queryFn && r?.initialPromise
    ? () => r.initialPromise
    : !n.queryFn || n.queryFn === _u
      ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`))
      : n.queryFn;
}
function ju(n, r) {
  return typeof n == "function" ? n(...r) : !!n;
}
function Nv(n, r, s) {
  let a = !1,
    u;
  return (
    Object.defineProperty(n, "signal", {
      enumerable: !0,
      get: () => (
        (u ??= r()),
        a ||
          ((a = !0),
          u.aborted ? s() : u.addEventListener("abort", s, { once: !0 })),
        u
      ),
    }),
    n
  );
}
var Fo = (() => {
  let n = () => xv;
  return {
    isServer() {
      return n();
    },
    setIsServer(r) {
      n = r;
    },
  };
})();
function uu() {
  let n, r;
  const s = new Promise((u, d) => {
    (n = u), (r = d);
  });
  (s.status = "pending"), s.catch(() => {});
  function a(u) {
    Object.assign(s, u), delete s.resolve, delete s.reject;
  }
  return (
    (s.resolve = (u) => {
      a({ status: "fulfilled", value: u }), n(u);
    }),
    (s.reject = (u) => {
      a({ status: "rejected", reason: u }), r(u);
    }),
    s
  );
}
var Rv = Pv;
function Ov() {
  let n = [],
    r = 0,
    s = (p) => {
      p();
    },
    a = (p) => {
      p();
    },
    u = Rv;
  const d = (p) => {
      r
        ? n.push(p)
        : u(() => {
            s(p);
          });
    },
    f = () => {
      const p = n;
      (n = []),
        p.length &&
          u(() => {
            a(() => {
              p.forEach((m) => {
                s(m);
              });
            });
          });
    };
  return {
    batch: (p) => {
      let m;
      r++;
      try {
        m = p();
      } finally {
        r--, r || f();
      }
      return m;
    },
    batchCalls:
      (p) =>
      (...m) => {
        d(() => {
          p(...m);
        });
      },
    schedule: d,
    setNotifyFunction: (p) => {
      s = p;
    },
    setBatchNotifyFunction: (p) => {
      a = p;
    },
    setScheduler: (p) => {
      u = p;
    },
  };
}
var He = Ov(),
  _v = class extends Fr {
    #e = !0;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (n) => {
          if (typeof window < "u" && window.addEventListener) {
            const r = () => n(!0),
              s = () => n(!1);
            return (
              window.addEventListener("online", r, !1),
              window.addEventListener("offline", s, !1),
              () => {
                window.removeEventListener("online", r),
                  window.removeEventListener("offline", s);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(n) {
      (this.#n = n), this.#t?.(), (this.#t = n(this.setOnline.bind(this)));
    }
    setOnline(n) {
      this.#e !== n &&
        ((this.#e = n),
        this.listeners.forEach((s) => {
          s(n);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  gi = new _v();
function jv(n) {
  return Math.min(1e3 * 2 ** n, 3e4);
}
function kh(n) {
  return (n ?? "online") === "online" ? gi.isOnline() : !0;
}
var cu = class extends Error {
  constructor(n) {
    super("CancelledError"),
      (this.revert = n?.revert),
      (this.silent = n?.silent);
  }
};
function vh(n) {
  let r = !1,
    s = 0,
    a;
  const u = uu(),
    d = () => u.status !== "pending",
    f = (v) => {
      if (!d()) {
        const x = new cu(v);
        S(x), n.onCancel?.(x);
      }
    },
    p = () => {
      r = !0;
    },
    m = () => {
      r = !1;
    },
    k = () =>
      Ru.isFocused() &&
      (n.networkMode === "always" || gi.isOnline()) &&
      n.canRun(),
    g = () => kh(n.networkMode) && n.canRun(),
    P = (v) => {
      d() || (a?.(), u.resolve(v));
    },
    S = (v) => {
      d() || (a?.(), u.reject(v));
    },
    E = () =>
      new Promise((v) => {
        (a = (x) => {
          (d() || k()) && v(x);
        }),
          n.onPause?.();
      }).then(() => {
        (a = void 0), d() || n.onContinue?.();
      }),
    _ = () => {
      if (d()) return;
      let v;
      const x = s === 0 ? n.initialPromise : void 0;
      try {
        v = x ?? n.fn();
      } catch (R) {
        v = Promise.reject(R);
      }
      Promise.resolve(v)
        .then(P)
        .catch((R) => {
          if (d()) return;
          const b = n.retry ?? (Fo.isServer() ? 0 : 3),
            D = n.retryDelay ?? jv,
            M = typeof D == "function" ? D(s, R) : D,
            V =
              b === !0 ||
              (typeof b == "number" && s < b) ||
              (typeof b == "function" && b(s, R));
          if (r || !V) {
            S(R);
            return;
          }
          s++,
            n.onFail?.(s, R),
            bv(M)
              .then(() => (k() ? void 0 : E()))
              .then(() => {
                r ? S(R) : _();
              });
        });
    };
  return {
    promise: u,
    status: () => u.status,
    cancel: f,
    continue: () => (a?.(), u),
    cancelRetry: p,
    continueRetry: m,
    canStart: g,
    start: () => (g() ? _() : E().then(_), u),
  };
}
var gh = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(),
        iu(this.gcTime) &&
          (this.#e = Zn.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime));
    }
    updateGcTime(n) {
      this.gcTime = Math.max(
        this.gcTime || 0,
        n ?? (Fo.isServer() ? 1 / 0 : 300 * 1e3),
      );
    }
    clearGcTimeout() {
      this.#e !== void 0 && (Zn.clearTimeout(this.#e), (this.#e = void 0));
    }
  },
  Dv = class extends gh {
    #e;
    #t;
    #n;
    #o;
    #r;
    #s;
    #i;
    constructor(n) {
      super(),
        (this.#i = !1),
        (this.#s = n.defaultOptions),
        this.setOptions(n.options),
        (this.observers = []),
        (this.#o = n.client),
        (this.#n = this.#o.getQueryCache()),
        (this.queryKey = n.queryKey),
        (this.queryHash = n.queryHash),
        (this.#e = pp(this.options)),
        (this.state = n.state ?? this.#e),
        this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#r?.promise;
    }
    setOptions(n) {
      if (
        ((this.options = { ...this.#s, ...n }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        const r = pp(this.options);
        r.data !== void 0 &&
          (this.setState(fp(r.data, r.dataUpdatedAt)), (this.#e = r));
      }
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#n.remove(this);
    }
    setData(n, r) {
      const s = lu(this.state.data, n, this.options);
      return (
        this.#l({
          data: s,
          type: "success",
          dataUpdatedAt: r?.updatedAt,
          manual: r?.manual,
        }),
        s
      );
    }
    setState(n, r) {
      this.#l({ type: "setState", state: n, setStateOptions: r });
    }
    cancel(n) {
      const r = this.#r?.promise;
      return this.#r?.cancel(n), r ? r.then(ot).catch(ot) : Promise.resolve();
    }
    destroy() {
      super.destroy(), this.cancel({ silent: !0 });
    }
    get resetState() {
      return this.#e;
    }
    reset() {
      this.destroy(), this.setState(this.resetState);
    }
    isActive() {
      return this.observers.some((n) => bt(n.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === _u || !this.isFetched();
    }
    isFetched() {
      return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((n) => jn(n.options.staleTime, this) === "static")
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((n) => n.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(n = 0) {
      return this.state.data === void 0
        ? !0
        : n === "static"
          ? !1
          : this.state.isInvalidated
            ? !0
            : !wh(this.state.dataUpdatedAt, n);
    }
    onFocus() {
      this.observers
        .find((r) => r.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue();
    }
    onOnline() {
      this.observers
        .find((r) => r.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue();
    }
    addObserver(n) {
      this.observers.includes(n) ||
        (this.observers.push(n),
        this.clearGcTimeout(),
        this.#n.notify({ type: "observerAdded", query: this, observer: n }));
    }
    removeObserver(n) {
      this.observers.includes(n) &&
        ((this.observers = this.observers.filter((r) => r !== n)),
        this.observers.length ||
          (this.#r &&
            (this.#i || this.#a()
              ? this.#r.cancel({ revert: !0 })
              : this.#r.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: "observerRemoved", query: this, observer: n }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    #a() {
      return (
        this.state.fetchStatus === "paused" && this.state.status === "pending"
      );
    }
    invalidate() {
      this.state.isInvalidated || this.#l({ type: "invalidate" });
    }
    async fetch(n, r) {
      if (
        this.state.fetchStatus !== "idle" &&
        this.#r?.status() !== "rejected"
      ) {
        if (this.state.data !== void 0 && r?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#r) return this.#r.continueRetry(), this.#r.promise;
      }
      if ((n && this.setOptions(n), !this.options.queryFn)) {
        const p = this.observers.find((m) => m.options.queryFn);
        p && this.setOptions(p.options);
      }
      const s = new AbortController(),
        a = (p) => {
          Object.defineProperty(p, "signal", {
            enumerable: !0,
            get: () => ((this.#i = !0), s.signal),
          });
        },
        u = () => {
          const p = mh(this.options, r),
            k = (() => {
              const g = {
                client: this.#o,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return a(g), g;
            })();
          return (
            (this.#i = !1),
            this.options.persister ? this.options.persister(p, k, this) : p(k)
          );
        },
        f = (() => {
          const p = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#o,
            state: this.state,
            fetchFn: u,
          };
          return a(p), p;
        })();
      this.options.behavior?.onFetch(f, this),
        (this.#t = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== f.fetchOptions?.meta) &&
          this.#l({ type: "fetch", meta: f.fetchOptions?.meta }),
        (this.#r = vh({
          initialPromise: r?.initialPromise,
          fn: f.fetchFn,
          onCancel: (p) => {
            p instanceof cu &&
              p.revert &&
              this.setState({ ...this.#t, fetchStatus: "idle" }),
              s.abort();
          },
          onFail: (p, m) => {
            this.#l({ type: "failed", failureCount: p, error: m });
          },
          onPause: () => {
            this.#l({ type: "pause" });
          },
          onContinue: () => {
            this.#l({ type: "continue" });
          },
          retry: f.options.retry,
          retryDelay: f.options.retryDelay,
          networkMode: f.options.networkMode,
          canRun: () => !0,
        }));
      try {
        const p = await this.#r.start();
        if (p === void 0)
          throw new Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(p),
          this.#n.config.onSuccess?.(p, this),
          this.#n.config.onSettled?.(p, this.state.error, this),
          p
        );
      } catch (p) {
        if (p instanceof cu) {
          if (p.silent) return this.#r.promise;
          if (p.revert) {
            if (this.state.data === void 0) throw p;
            return this.state.data;
          }
        }
        throw (
          (this.#l({ type: "error", error: p }),
          this.#n.config.onError?.(p, this),
          this.#n.config.onSettled?.(this.state.data, p, this),
          p)
        );
      } finally {
        this.scheduleGc();
      }
    }
    #l(n) {
      const r = (s) => {
        switch (n.type) {
          case "failed":
            return {
              ...s,
              fetchFailureCount: n.failureCount,
              fetchFailureReason: n.error,
            };
          case "pause":
            return { ...s, fetchStatus: "paused" };
          case "continue":
            return { ...s, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...s,
              ...Ph(s.data, this.options),
              fetchMeta: n.meta ?? null,
            };
          case "success":
            const a = {
              ...s,
              ...fp(n.data, n.dataUpdatedAt),
              dataUpdateCount: s.dataUpdateCount + 1,
              ...(!n.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return (this.#t = n.manual ? a : void 0), a;
          case "error":
            const u = n.error;
            return {
              ...s,
              error: u,
              errorUpdateCount: s.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: s.fetchFailureCount + 1,
              fetchFailureReason: u,
              fetchStatus: "idle",
              status: "error",
              isInvalidated: !0,
            };
          case "invalidate":
            return { ...s, isInvalidated: !0 };
          case "setState":
            return { ...s, ...n.state };
        }
      };
      (this.state = r(this.state)),
        He.batch(() => {
          this.observers.forEach((s) => {
            s.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: "updated", action: n });
        });
    }
  };
function Ph(n, r) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: kh(r.networkMode) ? "fetching" : "paused",
    ...(n === void 0 && { error: null, status: "pending" }),
  };
}
function fp(n, r) {
  return {
    data: n,
    dataUpdatedAt: r ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function pp(n) {
  const r =
      typeof n.initialData == "function" ? n.initialData() : n.initialData,
    s = r !== void 0,
    a = s
      ? typeof n.initialDataUpdatedAt == "function"
        ? n.initialDataUpdatedAt()
        : n.initialDataUpdatedAt
      : 0;
  return {
    data: r,
    dataUpdateCount: 0,
    dataUpdatedAt: s ? (a ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: s ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Av = class extends Fr {
  constructor(n, r) {
    super(),
      (this.options = r),
      (this.#e = n),
      (this.#a = null),
      (this.#i = uu()),
      this.bindMethods(),
      this.setOptions(r);
  }
  #e;
  #t = void 0;
  #n = void 0;
  #o = void 0;
  #r;
  #s;
  #i;
  #a;
  #l;
  #p;
  #h;
  #c;
  #d;
  #u;
  #w = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      hp(this.#t, this.options) ? this.#f() : this.updateResult(),
      this.#v());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return du(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return du(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    (this.listeners = new Set()),
      this.#g(),
      this.#P(),
      this.#t.removeObserver(this);
  }
  setOptions(n) {
    const r = this.options,
      s = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(n)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != "boolean" &&
        typeof this.options.enabled != "function" &&
        typeof bt(this.options.enabled, this.#t) != "boolean")
    )
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean",
      );
    this.#x(),
      this.#t.setOptions(this.options),
      r._defaulted &&
        !vi(this.options, r) &&
        this.#e
          .getQueryCache()
          .notify({
            type: "observerOptionsUpdated",
            query: this.#t,
            observer: this,
          });
    const a = this.hasListeners();
    a && wp(this.#t, s, this.options, r) && this.#f(),
      this.updateResult(),
      a &&
        (this.#t !== s ||
          bt(this.options.enabled, this.#t) !== bt(r.enabled, this.#t) ||
          jn(this.options.staleTime, this.#t) !== jn(r.staleTime, this.#t)) &&
        this.#y();
    const u = this.#m();
    a &&
      (this.#t !== s ||
        bt(this.options.enabled, this.#t) !== bt(r.enabled, this.#t) ||
        u !== this.#u) &&
      this.#k(u);
  }
  getOptimisticResult(n) {
    const r = this.#e.getQueryCache().build(this.#e, n),
      s = this.createResult(r, n);
    return (
      Lv(this, s) &&
        ((this.#o = s), (this.#s = this.options), (this.#r = this.#t.state)),
      s
    );
  }
  getCurrentResult() {
    return this.#o;
  }
  trackResult(n, r) {
    return new Proxy(n, {
      get: (s, a) => (
        this.trackProp(a),
        r?.(a),
        a === "promise" &&
          (this.trackProp("data"),
          !this.options.experimental_prefetchInRender &&
            this.#i.status === "pending" &&
            this.#i.reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled",
              ),
            )),
        Reflect.get(s, a)
      ),
    });
  }
  trackProp(n) {
    this.#w.add(n);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...n } = {}) {
    return this.fetch({ ...n });
  }
  fetchOptimistic(n) {
    const r = this.#e.defaultQueryOptions(n),
      s = this.#e.getQueryCache().build(this.#e, r);
    return s.fetch().then(() => this.createResult(s, r));
  }
  fetch(n) {
    return this.#f({ ...n, cancelRefetch: n.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#o),
    );
  }
  #f(n) {
    this.#x();
    let r = this.#t.fetch(this.options, n);
    return n?.throwOnError || (r = r.catch(ot)), r;
  }
  #y() {
    this.#g();
    const n = jn(this.options.staleTime, this.#t);
    if (Fo.isServer() || this.#o.isStale || !iu(n)) return;
    const s = wh(this.#o.dataUpdatedAt, n) + 1;
    this.#c = Zn.setTimeout(() => {
      this.#o.isStale || this.updateResult();
    }, s);
  }
  #m() {
    return (
      (typeof this.options.refetchInterval == "function"
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #k(n) {
    this.#P(),
      (this.#u = n),
      !(
        Fo.isServer() ||
        bt(this.options.enabled, this.#t) === !1 ||
        !iu(this.#u) ||
        this.#u === 0
      ) &&
        (this.#d = Zn.setInterval(() => {
          (this.options.refetchIntervalInBackground || Ru.isFocused()) &&
            this.#f();
        }, this.#u));
  }
  #v() {
    this.#y(), this.#k(this.#m());
  }
  #g() {
    this.#c !== void 0 && (Zn.clearTimeout(this.#c), (this.#c = void 0));
  }
  #P() {
    this.#d !== void 0 && (Zn.clearInterval(this.#d), (this.#d = void 0));
  }
  createResult(n, r) {
    const s = this.#t,
      a = this.options,
      u = this.#o,
      d = this.#r,
      f = this.#s,
      m = n !== s ? n.state : this.#n,
      { state: k } = n;
    let g = { ...k },
      P = !1,
      S;
    if (r._optimisticResults) {
      const J = this.hasListeners(),
        K = !J && hp(n, r),
        ee = J && wp(n, s, r, a);
      (K || ee) && (g = { ...g, ...Ph(k.data, n.options) }),
        r._optimisticResults === "isRestoring" && (g.fetchStatus = "idle");
    }
    let { error: E, errorUpdatedAt: _, status: v } = g;
    S = g.data;
    let x = !1;
    if (r.placeholderData !== void 0 && S === void 0 && v === "pending") {
      let J;
      u?.isPlaceholderData && r.placeholderData === f?.placeholderData
        ? ((J = u.data), (x = !0))
        : (J =
            typeof r.placeholderData == "function"
              ? r.placeholderData(this.#h?.state.data, this.#h)
              : r.placeholderData),
        J !== void 0 && ((v = "success"), (S = lu(u?.data, J, r)), (P = !0));
    }
    if (r.select && S !== void 0 && !x)
      if (u && S === d?.data && r.select === this.#l) S = this.#p;
      else
        try {
          (this.#l = r.select),
            (S = r.select(S)),
            (S = lu(u?.data, S, r)),
            (this.#p = S),
            (this.#a = null);
        } catch (J) {
          this.#a = J;
        }
    this.#a && ((E = this.#a), (S = this.#p), (_ = Date.now()), (v = "error"));
    const R = g.fetchStatus === "fetching",
      b = v === "pending",
      D = v === "error",
      M = b && R,
      V = S !== void 0,
      z = {
        status: v,
        fetchStatus: g.fetchStatus,
        isPending: b,
        isSuccess: v === "success",
        isError: D,
        isInitialLoading: M,
        isLoading: M,
        data: S,
        dataUpdatedAt: g.dataUpdatedAt,
        error: E,
        errorUpdatedAt: _,
        failureCount: g.fetchFailureCount,
        failureReason: g.fetchFailureReason,
        errorUpdateCount: g.errorUpdateCount,
        isFetched: n.isFetched(),
        isFetchedAfterMount:
          g.dataUpdateCount > m.dataUpdateCount ||
          g.errorUpdateCount > m.errorUpdateCount,
        isFetching: R,
        isRefetching: R && !b,
        isLoadingError: D && !V,
        isPaused: g.fetchStatus === "paused",
        isPlaceholderData: P,
        isRefetchError: D && V,
        isStale: Du(n, r),
        refetch: this.refetch,
        promise: this.#i,
        isEnabled: bt(r.enabled, n) !== !1,
      };
    if (this.options.experimental_prefetchInRender) {
      const J = z.data !== void 0,
        K = z.status === "error" && !J,
        ee = (te) => {
          K ? te.reject(z.error) : J && te.resolve(z.data);
        },
        I = () => {
          const te = (this.#i = z.promise = uu());
          ee(te);
        },
        W = this.#i;
      switch (W.status) {
        case "pending":
          n.queryHash === s.queryHash && ee(W);
          break;
        case "fulfilled":
          (K || z.data !== W.value) && I();
          break;
        case "rejected":
          (!K || z.error !== W.reason) && I();
          break;
      }
    }
    return z;
  }
  updateResult() {
    const n = this.#o,
      r = this.createResult(this.#t, this.options);
    if (
      ((this.#r = this.#t.state),
      (this.#s = this.options),
      this.#r.data !== void 0 && (this.#h = this.#t),
      vi(r, n))
    )
      return;
    this.#o = r;
    const s = () => {
      if (!n) return !0;
      const { notifyOnChangeProps: a } = this.options,
        u = typeof a == "function" ? a() : a;
      if (u === "all" || (!u && !this.#w.size)) return !0;
      const d = new Set(u ?? this.#w);
      return (
        this.options.throwOnError && d.add("error"),
        Object.keys(this.#o).some((f) => {
          const p = f;
          return this.#o[p] !== n[p] && d.has(p);
        })
      );
    };
    this.#T({ listeners: s() });
  }
  #x() {
    const n = this.#e.getQueryCache().build(this.#e, this.options);
    if (n === this.#t) return;
    const r = this.#t;
    (this.#t = n),
      (this.#n = n.state),
      this.hasListeners() && (r?.removeObserver(this), n.addObserver(this));
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && this.#v();
  }
  #T(n) {
    He.batch(() => {
      n.listeners &&
        this.listeners.forEach((r) => {
          r(this.#o);
        }),
        this.#e
          .getQueryCache()
          .notify({ query: this.#t, type: "observerResultsUpdated" });
    });
  }
};
function Mv(n, r) {
  return (
    bt(r.enabled, n) !== !1 &&
    n.state.data === void 0 &&
    !(n.state.status === "error" && r.retryOnMount === !1)
  );
}
function hp(n, r) {
  return Mv(n, r) || (n.state.data !== void 0 && du(n, r, r.refetchOnMount));
}
function du(n, r, s) {
  if (bt(r.enabled, n) !== !1 && jn(r.staleTime, n) !== "static") {
    const a = typeof s == "function" ? s(n) : s;
    return a === "always" || (a !== !1 && Du(n, r));
  }
  return !1;
}
function wp(n, r, s, a) {
  return (
    (n !== r || bt(a.enabled, n) === !1) &&
    (!s.suspense || n.state.status !== "error") &&
    Du(n, s)
  );
}
function Du(n, r) {
  return bt(r.enabled, n) !== !1 && n.isStaleByTime(jn(r.staleTime, n));
}
function Lv(n, r) {
  return !vi(n.getCurrentResult(), r);
}
function yp(n) {
  return {
    onFetch: (r, s) => {
      const a = r.options,
        u = r.fetchOptions?.meta?.fetchMore?.direction,
        d = r.state.data?.pages || [],
        f = r.state.data?.pageParams || [];
      let p = { pages: [], pageParams: [] },
        m = 0;
      const k = async () => {
        let g = !1;
        const P = (_) => {
            Nv(
              _,
              () => r.signal,
              () => (g = !0),
            );
          },
          S = mh(r.options, r.fetchOptions),
          E = async (_, v, x) => {
            if (g) return Promise.reject();
            if (v == null && _.pages.length) return Promise.resolve(_);
            const b = (() => {
                const $ = {
                  client: r.client,
                  queryKey: r.queryKey,
                  pageParam: v,
                  direction: x ? "backward" : "forward",
                  meta: r.options.meta,
                };
                return P($), $;
              })(),
              D = await S(b),
              { maxPages: M } = r.options,
              V = x ? Ev : Cv;
            return {
              pages: V(_.pages, D, M),
              pageParams: V(_.pageParams, v, M),
            };
          };
        if (u && d.length) {
          const _ = u === "backward",
            v = _ ? Iv : mp,
            x = { pages: d, pageParams: f },
            R = v(a, x);
          p = await E(x, R, _);
        } else {
          const _ = n ?? d.length;
          do {
            const v = m === 0 ? (f[0] ?? a.initialPageParam) : mp(a, p);
            if (m > 0 && v == null) break;
            (p = await E(p, v)), m++;
          } while (m < _);
        }
        return p;
      };
      r.options.persister
        ? (r.fetchFn = () =>
            r.options.persister?.(
              k,
              {
                client: r.client,
                queryKey: r.queryKey,
                meta: r.options.meta,
                signal: r.signal,
              },
              s,
            ))
        : (r.fetchFn = k);
    },
  };
}
function mp(n, { pages: r, pageParams: s }) {
  const a = r.length - 1;
  return r.length > 0 ? n.getNextPageParam(r[a], r, s[a], s) : void 0;
}
function Iv(n, { pages: r, pageParams: s }) {
  return r.length > 0 ? n.getPreviousPageParam?.(r[0], r, s[0], s) : void 0;
}
var Fv = class extends gh {
  #e;
  #t;
  #n;
  #o;
  constructor(n) {
    super(),
      (this.#e = n.client),
      (this.mutationId = n.mutationId),
      (this.#n = n.mutationCache),
      (this.#t = []),
      (this.state = n.state || xh()),
      this.setOptions(n.options),
      this.scheduleGc();
  }
  setOptions(n) {
    (this.options = n), this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(n) {
    this.#t.includes(n) ||
      (this.#t.push(n),
      this.clearGcTimeout(),
      this.#n.notify({ type: "observerAdded", mutation: this, observer: n }));
  }
  removeObserver(n) {
    (this.#t = this.#t.filter((r) => r !== n)),
      this.scheduleGc(),
      this.#n.notify({ type: "observerRemoved", mutation: this, observer: n });
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#o?.continue() ?? this.execute(this.state.variables);
  }
  async execute(n) {
    const r = () => {
        this.#r({ type: "continue" });
      },
      s = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#o = vh({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(n, s)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (d, f) => {
        this.#r({ type: "failed", failureCount: d, error: f });
      },
      onPause: () => {
        this.#r({ type: "pause" });
      },
      onContinue: r,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    const a = this.state.status === "pending",
      u = !this.#o.canStart();
    try {
      if (a) r();
      else {
        this.#r({ type: "pending", variables: n, isPaused: u }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(n, this, s));
        const f = await this.options.onMutate?.(n, s);
        f !== this.state.context &&
          this.#r({ type: "pending", context: f, variables: n, isPaused: u });
      }
      const d = await this.#o.start();
      return (
        await this.#n.config.onSuccess?.(d, n, this.state.context, this, s),
        await this.options.onSuccess?.(d, n, this.state.context, s),
        await this.#n.config.onSettled?.(
          d,
          null,
          this.state.variables,
          this.state.context,
          this,
          s,
        ),
        await this.options.onSettled?.(d, null, n, this.state.context, s),
        this.#r({ type: "success", data: d }),
        d
      );
    } catch (d) {
      try {
        await this.#n.config.onError?.(d, n, this.state.context, this, s);
      } catch (f) {
        Promise.reject(f);
      }
      try {
        await this.options.onError?.(d, n, this.state.context, s);
      } catch (f) {
        Promise.reject(f);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          d,
          this.state.variables,
          this.state.context,
          this,
          s,
        );
      } catch (f) {
        Promise.reject(f);
      }
      try {
        await this.options.onSettled?.(void 0, d, n, this.state.context, s);
      } catch (f) {
        Promise.reject(f);
      }
      throw (this.#r({ type: "error", error: d }), d);
    } finally {
      this.#n.runNext(this);
    }
  }
  #r(n) {
    const r = (s) => {
      switch (n.type) {
        case "failed":
          return { ...s, failureCount: n.failureCount, failureReason: n.error };
        case "pause":
          return { ...s, isPaused: !0 };
        case "continue":
          return { ...s, isPaused: !1 };
        case "pending":
          return {
            ...s,
            context: n.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: n.isPaused,
            status: "pending",
            variables: n.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...s,
            data: n.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...s,
            data: void 0,
            error: n.error,
            failureCount: s.failureCount + 1,
            failureReason: n.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    (this.state = r(this.state)),
      He.batch(() => {
        this.#t.forEach((s) => {
          s.onMutationUpdate(n);
        }),
          this.#n.notify({ mutation: this, type: "updated", action: n });
      });
  }
};
function xh() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Vv = class extends Fr {
  constructor(n = {}) {
    super(),
      (this.config = n),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0);
  }
  #e;
  #t;
  #n;
  build(n, r, s) {
    const a = new Fv({
      client: n,
      mutationCache: this,
      mutationId: ++this.#n,
      options: n.defaultMutationOptions(r),
      state: s,
    });
    return this.add(a), a;
  }
  add(n) {
    this.#e.add(n);
    const r = ei(n);
    if (typeof r == "string") {
      const s = this.#t.get(r);
      s ? s.push(n) : this.#t.set(r, [n]);
    }
    this.notify({ type: "added", mutation: n });
  }
  remove(n) {
    if (this.#e.delete(n)) {
      const r = ei(n);
      if (typeof r == "string") {
        const s = this.#t.get(r);
        if (s)
          if (s.length > 1) {
            const a = s.indexOf(n);
            a !== -1 && s.splice(a, 1);
          } else s[0] === n && this.#t.delete(r);
      }
    }
    this.notify({ type: "removed", mutation: n });
  }
  canRun(n) {
    const r = ei(n);
    if (typeof r == "string") {
      const a = this.#t.get(r)?.find((u) => u.state.status === "pending");
      return !a || a === n;
    } else return !0;
  }
  runNext(n) {
    const r = ei(n);
    return typeof r == "string"
      ? (this.#t
          .get(r)
          ?.find((a) => a !== n && a.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    He.batch(() => {
      this.#e.forEach((n) => {
        this.notify({ type: "removed", mutation: n });
      }),
        this.#e.clear(),
        this.#t.clear();
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(n) {
    const r = { exact: !0, ...n };
    return this.getAll().find((s) => up(r, s));
  }
  findAll(n = {}) {
    return this.getAll().filter((r) => up(n, r));
  }
  notify(n) {
    He.batch(() => {
      this.listeners.forEach((r) => {
        r(n);
      });
    });
  }
  resumePausedMutations() {
    const n = this.getAll().filter((r) => r.state.isPaused);
    return He.batch(() => Promise.all(n.map((r) => r.continue().catch(ot))));
  }
};
function ei(n) {
  return n.options.scope?.id;
}
var zv = class extends Fr {
    #e;
    #t = void 0;
    #n;
    #o;
    constructor(r, s) {
      super(), (this.#e = r), this.setOptions(s), this.bindMethods(), this.#r();
    }
    bindMethods() {
      (this.mutate = this.mutate.bind(this)),
        (this.reset = this.reset.bind(this));
    }
    setOptions(r) {
      const s = this.options;
      (this.options = this.#e.defaultMutationOptions(r)),
        vi(this.options, s) ||
          this.#e
            .getMutationCache()
            .notify({
              type: "observerOptionsUpdated",
              mutation: this.#n,
              observer: this,
            }),
        s?.mutationKey &&
        this.options.mutationKey &&
        er(s.mutationKey) !== er(this.options.mutationKey)
          ? this.reset()
          : this.#n?.state.status === "pending" &&
            this.#n.setOptions(this.options);
    }
    onUnsubscribe() {
      this.hasListeners() || this.#n?.removeObserver(this);
    }
    onMutationUpdate(r) {
      this.#r(), this.#s(r);
    }
    getCurrentResult() {
      return this.#t;
    }
    reset() {
      this.#n?.removeObserver(this), (this.#n = void 0), this.#r(), this.#s();
    }
    mutate(r, s) {
      return (
        (this.#o = s),
        this.#n?.removeObserver(this),
        (this.#n = this.#e.getMutationCache().build(this.#e, this.options)),
        this.#n.addObserver(this),
        this.#n.execute(r)
      );
    }
    #r() {
      const r = this.#n?.state ?? xh();
      this.#t = {
        ...r,
        isPending: r.status === "pending",
        isSuccess: r.status === "success",
        isError: r.status === "error",
        isIdle: r.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      };
    }
    #s(r) {
      He.batch(() => {
        if (this.#o && this.hasListeners()) {
          const s = this.#t.variables,
            a = this.#t.context,
            u = {
              client: this.#e,
              meta: this.options.meta,
              mutationKey: this.options.mutationKey,
            };
          if (r?.type === "success") {
            try {
              this.#o.onSuccess?.(r.data, s, a, u);
            } catch (d) {
              Promise.reject(d);
            }
            try {
              this.#o.onSettled?.(r.data, null, s, a, u);
            } catch (d) {
              Promise.reject(d);
            }
          } else if (r?.type === "error") {
            try {
              this.#o.onError?.(r.error, s, a, u);
            } catch (d) {
              Promise.reject(d);
            }
            try {
              this.#o.onSettled?.(void 0, r.error, s, a, u);
            } catch (d) {
              Promise.reject(d);
            }
          }
        }
        this.listeners.forEach((s) => {
          s(this.#t);
        });
      });
    }
  },
  Bv = class extends Fr {
    constructor(n = {}) {
      super(), (this.config = n), (this.#e = new Map());
    }
    #e;
    build(n, r, s) {
      const a = r.queryKey,
        u = r.queryHash ?? Ou(a, r);
      let d = this.get(u);
      return (
        d ||
          ((d = new Dv({
            client: n,
            queryKey: a,
            queryHash: u,
            options: n.defaultQueryOptions(r),
            state: s,
            defaultOptions: n.getQueryDefaults(a),
          })),
          this.add(d)),
        d
      );
    }
    add(n) {
      this.#e.has(n.queryHash) ||
        (this.#e.set(n.queryHash, n), this.notify({ type: "added", query: n }));
    }
    remove(n) {
      const r = this.#e.get(n.queryHash);
      r &&
        (n.destroy(),
        r === n && this.#e.delete(n.queryHash),
        this.notify({ type: "removed", query: n }));
    }
    clear() {
      He.batch(() => {
        this.getAll().forEach((n) => {
          this.remove(n);
        });
      });
    }
    get(n) {
      return this.#e.get(n);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(n) {
      const r = { exact: !0, ...n };
      return this.getAll().find((s) => lp(r, s));
    }
    findAll(n = {}) {
      const r = this.getAll();
      return Object.keys(n).length > 0 ? r.filter((s) => lp(n, s)) : r;
    }
    notify(n) {
      He.batch(() => {
        this.listeners.forEach((r) => {
          r(n);
        });
      });
    }
    onFocus() {
      He.batch(() => {
        this.getAll().forEach((n) => {
          n.onFocus();
        });
      });
    }
    onOnline() {
      He.batch(() => {
        this.getAll().forEach((n) => {
          n.onOnline();
        });
      });
    }
  },
  Wv = class {
    #e;
    #t;
    #n;
    #o;
    #r;
    #s;
    #i;
    #a;
    constructor(n = {}) {
      (this.#e = n.queryCache || new Bv()),
        (this.#t = n.mutationCache || new Vv()),
        (this.#n = n.defaultOptions || {}),
        (this.#o = new Map()),
        (this.#r = new Map()),
        (this.#s = 0);
    }
    mount() {
      this.#s++,
        this.#s === 1 &&
          ((this.#i = Ru.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#a = gi.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#e.onOnline());
          })));
    }
    unmount() {
      this.#s--,
        this.#s === 0 &&
          (this.#i?.(), (this.#i = void 0), this.#a?.(), (this.#a = void 0));
    }
    isFetching(n) {
      return this.#e.findAll({ ...n, fetchStatus: "fetching" }).length;
    }
    isMutating(n) {
      return this.#t.findAll({ ...n, status: "pending" }).length;
    }
    getQueryData(n) {
      const r = this.defaultQueryOptions({ queryKey: n });
      return this.#e.get(r.queryHash)?.state.data;
    }
    ensureQueryData(n) {
      const r = this.defaultQueryOptions(n),
        s = this.#e.build(this, r),
        a = s.state.data;
      return a === void 0
        ? this.fetchQuery(n)
        : (n.revalidateIfStale &&
            s.isStaleByTime(jn(r.staleTime, s)) &&
            this.prefetchQuery(r),
          Promise.resolve(a));
    }
    getQueriesData(n) {
      return this.#e.findAll(n).map(({ queryKey: r, state: s }) => {
        const a = s.data;
        return [r, a];
      });
    }
    setQueryData(n, r, s) {
      const a = this.defaultQueryOptions({ queryKey: n }),
        d = this.#e.get(a.queryHash)?.state.data,
        f = Tv(r, d);
      if (f !== void 0)
        return this.#e.build(this, a).setData(f, { ...s, manual: !0 });
    }
    setQueriesData(n, r, s) {
      return He.batch(() =>
        this.#e
          .findAll(n)
          .map(({ queryKey: a }) => [a, this.setQueryData(a, r, s)]),
      );
    }
    getQueryState(n) {
      const r = this.defaultQueryOptions({ queryKey: n });
      return this.#e.get(r.queryHash)?.state;
    }
    removeQueries(n) {
      const r = this.#e;
      He.batch(() => {
        r.findAll(n).forEach((s) => {
          r.remove(s);
        });
      });
    }
    resetQueries(n, r) {
      const s = this.#e;
      return He.batch(
        () => (
          s.findAll(n).forEach((a) => {
            a.reset();
          }),
          this.refetchQueries({ type: "active", ...n }, r)
        ),
      );
    }
    cancelQueries(n, r = {}) {
      const s = { revert: !0, ...r },
        a = He.batch(() => this.#e.findAll(n).map((u) => u.cancel(s)));
      return Promise.all(a).then(ot).catch(ot);
    }
    invalidateQueries(n, r = {}) {
      return He.batch(
        () => (
          this.#e.findAll(n).forEach((s) => {
            s.invalidate();
          }),
          n?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...n, type: n?.refetchType ?? n?.type ?? "active" },
                r,
              )
        ),
      );
    }
    refetchQueries(n, r = {}) {
      const s = { ...r, cancelRefetch: r.cancelRefetch ?? !0 },
        a = He.batch(() =>
          this.#e
            .findAll(n)
            .filter((u) => !u.isDisabled() && !u.isStatic())
            .map((u) => {
              let d = u.fetch(void 0, s);
              return (
                s.throwOnError || (d = d.catch(ot)),
                u.state.fetchStatus === "paused" ? Promise.resolve() : d
              );
            }),
        );
      return Promise.all(a).then(ot);
    }
    fetchQuery(n) {
      const r = this.defaultQueryOptions(n);
      r.retry === void 0 && (r.retry = !1);
      const s = this.#e.build(this, r);
      return s.isStaleByTime(jn(r.staleTime, s))
        ? s.fetch(r)
        : Promise.resolve(s.state.data);
    }
    prefetchQuery(n) {
      return this.fetchQuery(n).then(ot).catch(ot);
    }
    fetchInfiniteQuery(n) {
      return (n.behavior = yp(n.pages)), this.fetchQuery(n);
    }
    prefetchInfiniteQuery(n) {
      return this.fetchInfiniteQuery(n).then(ot).catch(ot);
    }
    ensureInfiniteQueryData(n) {
      return (n.behavior = yp(n.pages)), this.ensureQueryData(n);
    }
    resumePausedMutations() {
      return gi.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(n) {
      this.#n = n;
    }
    setQueryDefaults(n, r) {
      this.#o.set(er(n), { queryKey: n, defaultOptions: r });
    }
    getQueryDefaults(n) {
      const r = [...this.#o.values()],
        s = {};
      return (
        r.forEach((a) => {
          Io(n, a.queryKey) && Object.assign(s, a.defaultOptions);
        }),
        s
      );
    }
    setMutationDefaults(n, r) {
      this.#r.set(er(n), { mutationKey: n, defaultOptions: r });
    }
    getMutationDefaults(n) {
      const r = [...this.#r.values()],
        s = {};
      return (
        r.forEach((a) => {
          Io(n, a.mutationKey) && Object.assign(s, a.defaultOptions);
        }),
        s
      );
    }
    defaultQueryOptions(n) {
      if (n._defaulted) return n;
      const r = {
        ...this.#n.queries,
        ...this.getQueryDefaults(n.queryKey),
        ...n,
        _defaulted: !0,
      };
      return (
        r.queryHash || (r.queryHash = Ou(r.queryKey, r)),
        r.refetchOnReconnect === void 0 &&
          (r.refetchOnReconnect = r.networkMode !== "always"),
        r.throwOnError === void 0 && (r.throwOnError = !!r.suspense),
        !r.networkMode && r.persister && (r.networkMode = "offlineFirst"),
        r.queryFn === _u && (r.enabled = !1),
        r
      );
    }
    defaultMutationOptions(n) {
      return n?._defaulted
        ? n
        : {
            ...this.#n.mutations,
            ...(n?.mutationKey && this.getMutationDefaults(n.mutationKey)),
            ...n,
            _defaulted: !0,
          };
    }
    clear() {
      this.#e.clear(), this.#t.clear();
    }
  },
  Th = y.createContext(void 0),
  _i = (n) => {
    const r = y.useContext(Th);
    if (!r)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return r;
  },
  Uv = ({ client: n, children: r }) => (
    y.useEffect(
      () => (
        n.mount(),
        () => {
          n.unmount();
        }
      ),
      [n],
    ),
    h.jsx(Th.Provider, { value: n, children: r })
  ),
  Sh = y.createContext(!1),
  Hv = () => y.useContext(Sh);
Sh.Provider;
function $v() {
  let n = !1;
  return {
    clearReset: () => {
      n = !1;
    },
    reset: () => {
      n = !0;
    },
    isReset: () => n,
  };
}
var Gv = y.createContext($v()),
  Qv = () => y.useContext(Gv),
  Kv = (n, r, s) => {
    const a =
      s?.state.error && typeof n.throwOnError == "function"
        ? ju(n.throwOnError, [s.state.error, s])
        : n.throwOnError;
    (n.suspense || n.experimental_prefetchInRender || a) &&
      (r.isReset() || (n.retryOnMount = !1));
  },
  Yv = (n) => {
    y.useEffect(() => {
      n.clearReset();
    }, [n]);
  },
  qv = ({
    result: n,
    errorResetBoundary: r,
    throwOnError: s,
    query: a,
    suspense: u,
  }) =>
    n.isError &&
    !r.isReset() &&
    !n.isFetching &&
    a &&
    ((u && n.data === void 0) || ju(s, [n.error, a])),
  Xv = (n) => {
    if (n.suspense) {
      const s = (u) => (u === "static" ? u : Math.max(u ?? 1e3, 1e3)),
        a = n.staleTime;
      (n.staleTime = typeof a == "function" ? (...u) => s(a(...u)) : s(a)),
        typeof n.gcTime == "number" && (n.gcTime = Math.max(n.gcTime, 1e3));
    }
  },
  Jv = (n, r) => n.isLoading && n.isFetching && !r,
  Zv = (n, r) => n?.suspense && r.isPending,
  kp = (n, r, s) =>
    r.fetchOptimistic(n).catch(() => {
      s.clearReset();
    });
function eg(n, r, s) {
  const a = Hv(),
    u = Qv(),
    d = _i(),
    f = d.defaultQueryOptions(n);
  d.getDefaultOptions().queries?._experimental_beforeQuery?.(f);
  const p = d.getQueryCache().get(f.queryHash);
  (f._optimisticResults = a ? "isRestoring" : "optimistic"),
    Xv(f),
    Kv(f, u, p),
    Yv(u);
  const m = !d.getQueryCache().get(f.queryHash),
    [k] = y.useState(() => new r(d, f)),
    g = k.getOptimisticResult(f),
    P = !a && n.subscribed !== !1;
  if (
    (y.useSyncExternalStore(
      y.useCallback(
        (S) => {
          const E = P ? k.subscribe(He.batchCalls(S)) : ot;
          return k.updateResult(), E;
        },
        [k, P],
      ),
      () => k.getCurrentResult(),
      () => k.getCurrentResult(),
    ),
    y.useEffect(() => {
      k.setOptions(f);
    }, [f, k]),
    Zv(f, g))
  )
    throw kp(f, k, u);
  if (
    qv({
      result: g,
      errorResetBoundary: u,
      throwOnError: f.throwOnError,
      query: p,
      suspense: f.suspense,
    })
  )
    throw g.error;
  return (
    d.getDefaultOptions().queries?._experimental_afterQuery?.(f, g),
    f.experimental_prefetchInRender &&
      !Fo.isServer() &&
      Jv(g, a) &&
      (m ? kp(f, k, u) : p?.promise)?.catch(ot).finally(() => {
        k.updateResult();
      }),
    f.notifyOnChangeProps ? g : k.trackResult(g)
  );
}
function tg(n, r) {
  return eg(n, Av);
}
function bh(n, r) {
  const s = _i(),
    [a] = y.useState(() => new zv(s, n));
  y.useEffect(() => {
    a.setOptions(n);
  }, [a, n]);
  const u = y.useSyncExternalStore(
      y.useCallback((f) => a.subscribe(He.batchCalls(f)), [a]),
      () => a.getCurrentResult(),
      () => a.getCurrentResult(),
    ),
    d = y.useCallback(
      (f, p) => {
        a.mutate(f, p).catch(ot);
      },
      [a],
    );
  if (u.error && ju(a.options.throwOnError, [u.error])) throw u.error;
  return { ...u, mutate: d, mutateAsync: u.mutate };
}
const Ch = "__PORT_5000__".startsWith("__") ? "" : "__PORT_5000__";
async function Eh(n) {
  if (!n.ok) {
    const r = (await n.text()) || n.statusText;
    throw new Error(`${n.status}: ${r}`);
  }
}
async function Nh(n, r, s) {
  const a = await fetch(`${Ch}${r}`, {
    method: n,
    headers: s ? { "Content-Type": "application/json" } : {},
    body: s ? JSON.stringify(s) : void 0,
  });
  return await Eh(a), a;
}
const ng =
    ({ on401: n }) =>
    async ({ queryKey: r }) => {
      const s = await fetch(`${Ch}${r.join("/")}`);
      return await Eh(s), await s.json();
    },
  rg = new Wv({
    defaultOptions: {
      queries: {
        queryFn: ng({ on401: "throw" }),
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        staleTime: 1 / 0,
        retry: !1,
      },
      mutations: { retry: !1 },
    },
  }),
  og = 1,
  sg = 1e6;
let Wl = 0;
function ig() {
  return (Wl = (Wl + 1) % Number.MAX_SAFE_INTEGER), Wl.toString();
}
const Ul = new Map(),
  vp = (n) => {
    if (Ul.has(n)) return;
    const r = setTimeout(() => {
      Ul.delete(n), Lo({ type: "REMOVE_TOAST", toastId: n });
    }, sg);
    Ul.set(n, r);
  },
  ag = (n, r) => {
    switch (r.type) {
      case "ADD_TOAST":
        return { ...n, toasts: [r.toast, ...n.toasts].slice(0, og) };
      case "UPDATE_TOAST":
        return {
          ...n,
          toasts: n.toasts.map((s) =>
            s.id === r.toast.id ? { ...s, ...r.toast } : s,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: s } = r;
        return (
          s
            ? vp(s)
            : n.toasts.forEach((a) => {
                vp(a.id);
              }),
          {
            ...n,
            toasts: n.toasts.map((a) =>
              a.id === s || s === void 0 ? { ...a, open: !1 } : a,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return r.toastId === void 0
          ? { ...n, toasts: [] }
          : { ...n, toasts: n.toasts.filter((s) => s.id !== r.toastId) };
    }
  },
  ui = [];
let ci = { toasts: [] };
function Lo(n) {
  (ci = ag(ci, n)),
    ui.forEach((r) => {
      r(ci);
    });
}
function lg({ ...n }) {
  const r = ig(),
    s = (u) => Lo({ type: "UPDATE_TOAST", toast: { ...u, id: r } }),
    a = () => Lo({ type: "DISMISS_TOAST", toastId: r });
  return (
    Lo({
      type: "ADD_TOAST",
      toast: {
        ...n,
        id: r,
        open: !0,
        onOpenChange: (u) => {
          u || a();
        },
      },
    }),
    { id: r, dismiss: a, update: s }
  );
}
function Au() {
  const [n, r] = y.useState(ci);
  return (
    y.useEffect(
      () => (
        ui.push(r),
        () => {
          const s = ui.indexOf(r);
          s > -1 && ui.splice(s, 1);
        }
      ),
      [n],
    ),
    {
      ...n,
      toast: lg,
      dismiss: (s) => Lo({ type: "DISMISS_TOAST", toastId: s }),
    }
  );
}
var Vr = nh();
const ug = th(Vr);
function Se(n, r, { checkForDefaultPrevented: s = !0 } = {}) {
  return function (u) {
    if ((n?.(u), s === !1 || !u.defaultPrevented)) return r?.(u);
  };
}
function gp(n, r) {
  if (typeof n == "function") return n(r);
  n != null && (n.current = r);
}
function Wo(...n) {
  return (r) => {
    let s = !1;
    const a = n.map((u) => {
      const d = gp(u, r);
      return !s && typeof d == "function" && (s = !0), d;
    });
    if (s)
      return () => {
        for (let u = 0; u < a.length; u++) {
          const d = a[u];
          typeof d == "function" ? d() : gp(n[u], null);
        }
      };
  };
}
function Be(...n) {
  return y.useCallback(Wo(...n), n);
}
function ji(n, r = []) {
  let s = [];
  function a(d, f) {
    const p = y.createContext(f),
      m = s.length;
    s = [...s, f];
    const k = (P) => {
      const { scope: S, children: E, ..._ } = P,
        v = S?.[n]?.[m] || p,
        x = y.useMemo(() => _, Object.values(_));
      return h.jsx(v.Provider, { value: x, children: E });
    };
    k.displayName = d + "Provider";
    function g(P, S) {
      const E = S?.[n]?.[m] || p,
        _ = y.useContext(E);
      if (_) return _;
      if (f !== void 0) return f;
      throw new Error(`\`${P}\` must be used within \`${d}\``);
    }
    return [k, g];
  }
  const u = () => {
    const d = s.map((f) => y.createContext(f));
    return function (p) {
      const m = p?.[n] || d;
      return y.useMemo(() => ({ [`__scope${n}`]: { ...p, [n]: m } }), [p, m]);
    };
  };
  return (u.scopeName = n), [a, cg(u, ...r)];
}
function cg(...n) {
  const r = n[0];
  if (n.length === 1) return r;
  const s = () => {
    const a = n.map((u) => ({ useScope: u(), scopeName: u.scopeName }));
    return function (d) {
      const f = a.reduce((p, { useScope: m, scopeName: k }) => {
        const P = m(d)[`__scope${k}`];
        return { ...p, ...P };
      }, {});
      return y.useMemo(() => ({ [`__scope${r.scopeName}`]: f }), [f]);
    };
  };
  return (s.scopeName = r.scopeName), s;
}
function Pp(n) {
  const r = dg(n),
    s = y.forwardRef((a, u) => {
      const { children: d, ...f } = a,
        p = y.Children.toArray(d),
        m = p.find(pg);
      if (m) {
        const k = m.props.children,
          g = p.map((P) =>
            P === m
              ? y.Children.count(k) > 1
                ? y.Children.only(null)
                : y.isValidElement(k)
                  ? k.props.children
                  : null
              : P,
          );
        return h.jsx(r, {
          ...f,
          ref: u,
          children: y.isValidElement(k) ? y.cloneElement(k, void 0, g) : null,
        });
      }
      return h.jsx(r, { ...f, ref: u, children: d });
    });
  return (s.displayName = `${n}.Slot`), s;
}
function dg(n) {
  const r = y.forwardRef((s, a) => {
    const { children: u, ...d } = s;
    if (y.isValidElement(u)) {
      const f = wg(u),
        p = hg(d, u.props);
      return (
        u.type !== y.Fragment && (p.ref = a ? Wo(a, f) : f),
        y.cloneElement(u, p)
      );
    }
    return y.Children.count(u) > 1 ? y.Children.only(null) : null;
  });
  return (r.displayName = `${n}.SlotClone`), r;
}
var fg = Symbol("radix.slottable");
function pg(n) {
  return (
    y.isValidElement(n) &&
    typeof n.type == "function" &&
    "__radixId" in n.type &&
    n.type.__radixId === fg
  );
}
function hg(n, r) {
  const s = { ...r };
  for (const a in r) {
    const u = n[a],
      d = r[a];
    /^on[A-Z]/.test(a)
      ? u && d
        ? (s[a] = (...p) => {
            const m = d(...p);
            return u(...p), m;
          })
        : u && (s[a] = u)
      : a === "style"
        ? (s[a] = { ...u, ...d })
        : a === "className" && (s[a] = [u, d].filter(Boolean).join(" "));
  }
  return { ...n, ...s };
}
function wg(n) {
  let r = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
    s = r && "isReactWarning" in r && r.isReactWarning;
  return s
    ? n.ref
    : ((r = Object.getOwnPropertyDescriptor(n, "ref")?.get),
      (s = r && "isReactWarning" in r && r.isReactWarning),
      s ? n.props.ref : n.props.ref || n.ref);
}
function Rh(n) {
  const r = n + "CollectionProvider",
    [s, a] = ji(r),
    [u, d] = s(r, { collectionRef: { current: null }, itemMap: new Map() }),
    f = (v) => {
      const { scope: x, children: R } = v,
        b = Nn.useRef(null),
        D = Nn.useRef(new Map()).current;
      return h.jsx(u, { scope: x, itemMap: D, collectionRef: b, children: R });
    };
  f.displayName = r;
  const p = n + "CollectionSlot",
    m = Pp(p),
    k = Nn.forwardRef((v, x) => {
      const { scope: R, children: b } = v,
        D = d(p, R),
        M = Be(x, D.collectionRef);
      return h.jsx(m, { ref: M, children: b });
    });
  k.displayName = p;
  const g = n + "CollectionItemSlot",
    P = "data-radix-collection-item",
    S = Pp(g),
    E = Nn.forwardRef((v, x) => {
      const { scope: R, children: b, ...D } = v,
        M = Nn.useRef(null),
        V = Be(x, M),
        $ = d(g, R);
      return (
        Nn.useEffect(
          () => (
            $.itemMap.set(M, { ref: M, ...D }),
            () => {
              $.itemMap.delete(M);
            }
          ),
        ),
        h.jsx(S, { [P]: "", ref: V, children: b })
      );
    });
  E.displayName = g;
  function _(v) {
    const x = d(n + "CollectionConsumer", v);
    return Nn.useCallback(() => {
      const b = x.collectionRef.current;
      if (!b) return [];
      const D = Array.from(b.querySelectorAll(`[${P}]`));
      return Array.from(x.itemMap.values()).sort(
        ($, z) => D.indexOf($.ref.current) - D.indexOf(z.ref.current),
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: f, Slot: k, ItemSlot: E }, _, a];
}
function yg(n) {
  const r = mg(n),
    s = y.forwardRef((a, u) => {
      const { children: d, ...f } = a,
        p = y.Children.toArray(d),
        m = p.find(vg);
      if (m) {
        const k = m.props.children,
          g = p.map((P) =>
            P === m
              ? y.Children.count(k) > 1
                ? y.Children.only(null)
                : y.isValidElement(k)
                  ? k.props.children
                  : null
              : P,
          );
        return h.jsx(r, {
          ...f,
          ref: u,
          children: y.isValidElement(k) ? y.cloneElement(k, void 0, g) : null,
        });
      }
      return h.jsx(r, { ...f, ref: u, children: d });
    });
  return (s.displayName = `${n}.Slot`), s;
}
function mg(n) {
  const r = y.forwardRef((s, a) => {
    const { children: u, ...d } = s;
    if (y.isValidElement(u)) {
      const f = Pg(u),
        p = gg(d, u.props);
      return (
        u.type !== y.Fragment && (p.ref = a ? Wo(a, f) : f),
        y.cloneElement(u, p)
      );
    }
    return y.Children.count(u) > 1 ? y.Children.only(null) : null;
  });
  return (r.displayName = `${n}.SlotClone`), r;
}
var kg = Symbol("radix.slottable");
function vg(n) {
  return (
    y.isValidElement(n) &&
    typeof n.type == "function" &&
    "__radixId" in n.type &&
    n.type.__radixId === kg
  );
}
function gg(n, r) {
  const s = { ...r };
  for (const a in r) {
    const u = n[a],
      d = r[a];
    /^on[A-Z]/.test(a)
      ? u && d
        ? (s[a] = (...p) => {
            const m = d(...p);
            return u(...p), m;
          })
        : u && (s[a] = u)
      : a === "style"
        ? (s[a] = { ...u, ...d })
        : a === "className" && (s[a] = [u, d].filter(Boolean).join(" "));
  }
  return { ...n, ...s };
}
function Pg(n) {
  let r = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
    s = r && "isReactWarning" in r && r.isReactWarning;
  return s
    ? n.ref
    : ((r = Object.getOwnPropertyDescriptor(n, "ref")?.get),
      (s = r && "isReactWarning" in r && r.isReactWarning),
      s ? n.props.ref : n.props.ref || n.ref);
}
var xg = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Ee = xg.reduce((n, r) => {
    const s = yg(`Primitive.${r}`),
      a = y.forwardRef((u, d) => {
        const { asChild: f, ...p } = u,
          m = f ? s : r;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          h.jsx(m, { ...p, ref: d })
        );
      });
    return (a.displayName = `Primitive.${r}`), { ...n, [r]: a };
  }, {});
function Oh(n, r) {
  n && Vr.flushSync(() => n.dispatchEvent(r));
}
function Lt(n) {
  const r = y.useRef(n);
  return (
    y.useEffect(() => {
      r.current = n;
    }),
    y.useMemo(
      () =>
        (...s) =>
          r.current?.(...s),
      [],
    )
  );
}
function Tg(n, r = globalThis?.document) {
  const s = Lt(n);
  y.useEffect(() => {
    const a = (u) => {
      u.key === "Escape" && s(u);
    };
    return (
      r.addEventListener("keydown", a, { capture: !0 }),
      () => r.removeEventListener("keydown", a, { capture: !0 })
    );
  }, [s, r]);
}
var Sg = "DismissableLayer",
  fu = "dismissableLayer.update",
  bg = "dismissableLayer.pointerDownOutside",
  Cg = "dismissableLayer.focusOutside",
  xp,
  _h = y.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Mu = y.forwardRef((n, r) => {
    const {
        disableOutsidePointerEvents: s = !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: u,
        onFocusOutside: d,
        onInteractOutside: f,
        onDismiss: p,
        ...m
      } = n,
      k = y.useContext(_h),
      [g, P] = y.useState(null),
      S = g?.ownerDocument ?? globalThis?.document,
      [, E] = y.useState({}),
      _ = Be(r, (z) => P(z)),
      v = Array.from(k.layers),
      [x] = [...k.layersWithOutsidePointerEventsDisabled].slice(-1),
      R = v.indexOf(x),
      b = g ? v.indexOf(g) : -1,
      D = k.layersWithOutsidePointerEventsDisabled.size > 0,
      M = b >= R,
      V = Ng((z) => {
        const J = z.target,
          K = [...k.branches].some((ee) => ee.contains(J));
        !M || K || (u?.(z), f?.(z), z.defaultPrevented || p?.());
      }, S),
      $ = Rg((z) => {
        const J = z.target;
        [...k.branches].some((ee) => ee.contains(J)) ||
          (d?.(z), f?.(z), z.defaultPrevented || p?.());
      }, S);
    return (
      Tg((z) => {
        b === k.layers.size - 1 &&
          (a?.(z), !z.defaultPrevented && p && (z.preventDefault(), p()));
      }, S),
      y.useEffect(() => {
        if (g)
          return (
            s &&
              (k.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((xp = S.body.style.pointerEvents),
                (S.body.style.pointerEvents = "none")),
              k.layersWithOutsidePointerEventsDisabled.add(g)),
            k.layers.add(g),
            Tp(),
            () => {
              s &&
                k.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (S.body.style.pointerEvents = xp);
            }
          );
      }, [g, S, s, k]),
      y.useEffect(
        () => () => {
          g &&
            (k.layers.delete(g),
            k.layersWithOutsidePointerEventsDisabled.delete(g),
            Tp());
        },
        [g, k],
      ),
      y.useEffect(() => {
        const z = () => E({});
        return (
          document.addEventListener(fu, z),
          () => document.removeEventListener(fu, z)
        );
      }, []),
      h.jsx(Ee.div, {
        ...m,
        ref: _,
        style: {
          pointerEvents: D ? (M ? "auto" : "none") : void 0,
          ...n.style,
        },
        onFocusCapture: Se(n.onFocusCapture, $.onFocusCapture),
        onBlurCapture: Se(n.onBlurCapture, $.onBlurCapture),
        onPointerDownCapture: Se(
          n.onPointerDownCapture,
          V.onPointerDownCapture,
        ),
      })
    );
  });
Mu.displayName = Sg;
var Eg = "DismissableLayerBranch",
  jh = y.forwardRef((n, r) => {
    const s = y.useContext(_h),
      a = y.useRef(null),
      u = Be(r, a);
    return (
      y.useEffect(() => {
        const d = a.current;
        if (d)
          return (
            s.branches.add(d),
            () => {
              s.branches.delete(d);
            }
          );
      }, [s.branches]),
      h.jsx(Ee.div, { ...n, ref: u })
    );
  });
jh.displayName = Eg;
function Ng(n, r = globalThis?.document) {
  const s = Lt(n),
    a = y.useRef(!1),
    u = y.useRef(() => {});
  return (
    y.useEffect(() => {
      const d = (p) => {
          if (p.target && !a.current) {
            let m = function () {
              Dh(bg, s, k, { discrete: !0 });
            };
            const k = { originalEvent: p };
            p.pointerType === "touch"
              ? (r.removeEventListener("click", u.current),
                (u.current = m),
                r.addEventListener("click", u.current, { once: !0 }))
              : m();
          } else r.removeEventListener("click", u.current);
          a.current = !1;
        },
        f = window.setTimeout(() => {
          r.addEventListener("pointerdown", d);
        }, 0);
      return () => {
        window.clearTimeout(f),
          r.removeEventListener("pointerdown", d),
          r.removeEventListener("click", u.current);
      };
    }, [r, s]),
    { onPointerDownCapture: () => (a.current = !0) }
  );
}
function Rg(n, r = globalThis?.document) {
  const s = Lt(n),
    a = y.useRef(!1);
  return (
    y.useEffect(() => {
      const u = (d) => {
        d.target &&
          !a.current &&
          Dh(Cg, s, { originalEvent: d }, { discrete: !1 });
      };
      return (
        r.addEventListener("focusin", u),
        () => r.removeEventListener("focusin", u)
      );
    }, [r, s]),
    {
      onFocusCapture: () => (a.current = !0),
      onBlurCapture: () => (a.current = !1),
    }
  );
}
function Tp() {
  const n = new CustomEvent(fu);
  document.dispatchEvent(n);
}
function Dh(n, r, s, { discrete: a }) {
  const u = s.originalEvent.target,
    d = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: s });
  r && u.addEventListener(n, r, { once: !0 }),
    a ? Oh(u, d) : u.dispatchEvent(d);
}
var Og = Mu,
  _g = jh,
  Xe = globalThis?.document ? y.useLayoutEffect : () => {},
  jg = "Portal",
  Lu = y.forwardRef((n, r) => {
    const { container: s, ...a } = n,
      [u, d] = y.useState(!1);
    Xe(() => d(!0), []);
    const f = s || (u && globalThis?.document?.body);
    return f ? ug.createPortal(h.jsx(Ee.div, { ...a, ref: r }), f) : null;
  });
Lu.displayName = jg;
function Dg(n, r) {
  return y.useReducer((s, a) => r[s][a] ?? s, n);
}
var Ah = (n) => {
  const { present: r, children: s } = n,
    a = Ag(r),
    u =
      typeof s == "function" ? s({ present: a.isPresent }) : y.Children.only(s),
    d = Be(a.ref, Mg(u));
  return typeof s == "function" || a.isPresent
    ? y.cloneElement(u, { ref: d })
    : null;
};
Ah.displayName = "Presence";
function Ag(n) {
  const [r, s] = y.useState(),
    a = y.useRef(null),
    u = y.useRef(n),
    d = y.useRef("none"),
    f = n ? "mounted" : "unmounted",
    [p, m] = Dg(f, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    y.useEffect(() => {
      const k = ti(a.current);
      d.current = p === "mounted" ? k : "none";
    }, [p]),
    Xe(() => {
      const k = a.current,
        g = u.current;
      if (g !== n) {
        const S = d.current,
          E = ti(k);
        n
          ? m("MOUNT")
          : E === "none" || k?.display === "none"
            ? m("UNMOUNT")
            : m(g && S !== E ? "ANIMATION_OUT" : "UNMOUNT"),
          (u.current = n);
      }
    }, [n, m]),
    Xe(() => {
      if (r) {
        let k;
        const g = r.ownerDocument.defaultView ?? window,
          P = (E) => {
            const v = ti(a.current).includes(CSS.escape(E.animationName));
            if (E.target === r && v && (m("ANIMATION_END"), !u.current)) {
              const x = r.style.animationFillMode;
              (r.style.animationFillMode = "forwards"),
                (k = g.setTimeout(() => {
                  r.style.animationFillMode === "forwards" &&
                    (r.style.animationFillMode = x);
                }));
            }
          },
          S = (E) => {
            E.target === r && (d.current = ti(a.current));
          };
        return (
          r.addEventListener("animationstart", S),
          r.addEventListener("animationcancel", P),
          r.addEventListener("animationend", P),
          () => {
            g.clearTimeout(k),
              r.removeEventListener("animationstart", S),
              r.removeEventListener("animationcancel", P),
              r.removeEventListener("animationend", P);
          }
        );
      } else m("ANIMATION_END");
    }, [r, m]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(p),
      ref: y.useCallback((k) => {
        (a.current = k ? getComputedStyle(k) : null), s(k);
      }, []),
    }
  );
}
function ti(n) {
  return n?.animationName || "none";
}
function Mg(n) {
  let r = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
    s = r && "isReactWarning" in r && r.isReactWarning;
  return s
    ? n.ref
    : ((r = Object.getOwnPropertyDescriptor(n, "ref")?.get),
      (s = r && "isReactWarning" in r && r.isReactWarning),
      s ? n.props.ref : n.props.ref || n.ref);
}
var Lg = Ri[" useInsertionEffect ".trim().toString()] || Xe;
function pu({ prop: n, defaultProp: r, onChange: s = () => {}, caller: a }) {
  const [u, d, f] = Ig({ defaultProp: r, onChange: s }),
    p = n !== void 0,
    m = p ? n : u;
  {
    const g = y.useRef(n !== void 0);
    y.useEffect(() => {
      const P = g.current;
      P !== p &&
        console.warn(
          `${a} is changing from ${P ? "controlled" : "uncontrolled"} to ${p ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (g.current = p);
    }, [p, a]);
  }
  const k = y.useCallback(
    (g) => {
      if (p) {
        const P = Fg(g) ? g(n) : g;
        P !== n && f.current?.(P);
      } else d(g);
    },
    [p, n, d, f],
  );
  return [m, k];
}
function Ig({ defaultProp: n, onChange: r }) {
  const [s, a] = y.useState(n),
    u = y.useRef(s),
    d = y.useRef(r);
  return (
    Lg(() => {
      d.current = r;
    }, [r]),
    y.useEffect(() => {
      u.current !== s && (d.current?.(s), (u.current = s));
    }, [s, u]),
    [s, a, d]
  );
}
function Fg(n) {
  return typeof n == "function";
}
var Mh = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  Vg = "VisuallyHidden",
  Iu = y.forwardRef((n, r) =>
    h.jsx(Ee.span, { ...n, ref: r, style: { ...Mh, ...n.style } }),
  );
Iu.displayName = Vg;
var Fu = "ToastProvider",
  [Vu, zg, Bg] = Rh("Toast"),
  [Lh] = ji("Toast", [Bg]),
  [Wg, Di] = Lh(Fu),
  Ih = (n) => {
    const {
        __scopeToast: r,
        label: s = "Notification",
        duration: a = 5e3,
        swipeDirection: u = "right",
        swipeThreshold: d = 50,
        children: f,
      } = n,
      [p, m] = y.useState(null),
      [k, g] = y.useState(0),
      P = y.useRef(!1),
      S = y.useRef(!1);
    return (
      s.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Fu}\`. Expected non-empty \`string\`.`,
        ),
      h.jsx(Vu.Provider, {
        scope: r,
        children: h.jsx(Wg, {
          scope: r,
          label: s,
          duration: a,
          swipeDirection: u,
          swipeThreshold: d,
          toastCount: k,
          viewport: p,
          onViewportChange: m,
          onToastAdd: y.useCallback(() => g((E) => E + 1), []),
          onToastRemove: y.useCallback(() => g((E) => E - 1), []),
          isFocusedToastEscapeKeyDownRef: P,
          isClosePausedRef: S,
          children: f,
        }),
      })
    );
  };
Ih.displayName = Fu;
var Fh = "ToastViewport",
  Ug = ["F8"],
  hu = "toast.viewportPause",
  wu = "toast.viewportResume",
  Vh = y.forwardRef((n, r) => {
    const {
        __scopeToast: s,
        hotkey: a = Ug,
        label: u = "Notifications ({hotkey})",
        ...d
      } = n,
      f = Di(Fh, s),
      p = zg(s),
      m = y.useRef(null),
      k = y.useRef(null),
      g = y.useRef(null),
      P = y.useRef(null),
      S = Be(r, P, f.onViewportChange),
      E = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      _ = f.toastCount > 0;
    y.useEffect(() => {
      const x = (R) => {
        a.length !== 0 &&
          a.every((D) => R[D] || R.code === D) &&
          P.current?.focus();
      };
      return (
        document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
      );
    }, [a]),
      y.useEffect(() => {
        const x = m.current,
          R = P.current;
        if (_ && x && R) {
          const b = () => {
              if (!f.isClosePausedRef.current) {
                const $ = new CustomEvent(hu);
                R.dispatchEvent($), (f.isClosePausedRef.current = !0);
              }
            },
            D = () => {
              if (f.isClosePausedRef.current) {
                const $ = new CustomEvent(wu);
                R.dispatchEvent($), (f.isClosePausedRef.current = !1);
              }
            },
            M = ($) => {
              !x.contains($.relatedTarget) && D();
            },
            V = () => {
              x.contains(document.activeElement) || D();
            };
          return (
            x.addEventListener("focusin", b),
            x.addEventListener("focusout", M),
            x.addEventListener("pointermove", b),
            x.addEventListener("pointerleave", V),
            window.addEventListener("blur", b),
            window.addEventListener("focus", D),
            () => {
              x.removeEventListener("focusin", b),
                x.removeEventListener("focusout", M),
                x.removeEventListener("pointermove", b),
                x.removeEventListener("pointerleave", V),
                window.removeEventListener("blur", b),
                window.removeEventListener("focus", D);
            }
          );
        }
      }, [_, f.isClosePausedRef]);
    const v = y.useCallback(
      ({ tabbingDirection: x }) => {
        const b = p().map((D) => {
          const M = D.ref.current,
            V = [M, ...n1(M)];
          return x === "forwards" ? V : V.reverse();
        });
        return (x === "forwards" ? b.reverse() : b).flat();
      },
      [p],
    );
    return (
      y.useEffect(() => {
        const x = P.current;
        if (x) {
          const R = (b) => {
            const D = b.altKey || b.ctrlKey || b.metaKey;
            if (b.key === "Tab" && !D) {
              const V = document.activeElement,
                $ = b.shiftKey;
              if (b.target === x && $) {
                k.current?.focus();
                return;
              }
              const K = v({ tabbingDirection: $ ? "backwards" : "forwards" }),
                ee = K.findIndex((I) => I === V);
              Hl(K.slice(ee + 1))
                ? b.preventDefault()
                : $
                  ? k.current?.focus()
                  : g.current?.focus();
            }
          };
          return (
            x.addEventListener("keydown", R),
            () => x.removeEventListener("keydown", R)
          );
        }
      }, [p, v]),
      h.jsxs(_g, {
        ref: m,
        role: "region",
        "aria-label": u.replace("{hotkey}", E),
        tabIndex: -1,
        style: { pointerEvents: _ ? void 0 : "none" },
        children: [
          _ &&
            h.jsx(yu, {
              ref: k,
              onFocusFromOutsideViewport: () => {
                const x = v({ tabbingDirection: "forwards" });
                Hl(x);
              },
            }),
          h.jsx(Vu.Slot, {
            scope: s,
            children: h.jsx(Ee.ol, { tabIndex: -1, ...d, ref: S }),
          }),
          _ &&
            h.jsx(yu, {
              ref: g,
              onFocusFromOutsideViewport: () => {
                const x = v({ tabbingDirection: "backwards" });
                Hl(x);
              },
            }),
        ],
      })
    );
  });
Vh.displayName = Fh;
var zh = "ToastFocusProxy",
  yu = y.forwardRef((n, r) => {
    const { __scopeToast: s, onFocusFromOutsideViewport: a, ...u } = n,
      d = Di(zh, s);
    return h.jsx(Iu, {
      tabIndex: 0,
      ...u,
      ref: r,
      style: { position: "fixed" },
      onFocus: (f) => {
        const p = f.relatedTarget;
        !d.viewport?.contains(p) && a();
      },
    });
  });
yu.displayName = zh;
var Uo = "Toast",
  Hg = "toast.swipeStart",
  $g = "toast.swipeMove",
  Gg = "toast.swipeCancel",
  Qg = "toast.swipeEnd",
  Bh = y.forwardRef((n, r) => {
    const { forceMount: s, open: a, defaultOpen: u, onOpenChange: d, ...f } = n,
      [p, m] = pu({ prop: a, defaultProp: u ?? !0, onChange: d, caller: Uo });
    return h.jsx(Ah, {
      present: s || p,
      children: h.jsx(qg, {
        open: p,
        ...f,
        ref: r,
        onClose: () => m(!1),
        onPause: Lt(n.onPause),
        onResume: Lt(n.onResume),
        onSwipeStart: Se(n.onSwipeStart, (k) => {
          k.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Se(n.onSwipeMove, (k) => {
          const { x: g, y: P } = k.detail.delta;
          k.currentTarget.setAttribute("data-swipe", "move"),
            k.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${g}px`,
            ),
            k.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${P}px`,
            );
        }),
        onSwipeCancel: Se(n.onSwipeCancel, (k) => {
          k.currentTarget.setAttribute("data-swipe", "cancel"),
            k.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            k.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            k.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            k.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: Se(n.onSwipeEnd, (k) => {
          const { x: g, y: P } = k.detail.delta;
          k.currentTarget.setAttribute("data-swipe", "end"),
            k.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            k.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            k.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${g}px`,
            ),
            k.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${P}px`,
            ),
            m(!1);
        }),
      }),
    });
  });
Bh.displayName = Uo;
var [Kg, Yg] = Lh(Uo, { onClose() {} }),
  qg = y.forwardRef((n, r) => {
    const {
        __scopeToast: s,
        type: a = "foreground",
        duration: u,
        open: d,
        onClose: f,
        onEscapeKeyDown: p,
        onPause: m,
        onResume: k,
        onSwipeStart: g,
        onSwipeMove: P,
        onSwipeCancel: S,
        onSwipeEnd: E,
        ..._
      } = n,
      v = Di(Uo, s),
      [x, R] = y.useState(null),
      b = Be(r, (Q) => R(Q)),
      D = y.useRef(null),
      M = y.useRef(null),
      V = u || v.duration,
      $ = y.useRef(0),
      z = y.useRef(V),
      J = y.useRef(0),
      { onToastAdd: K, onToastRemove: ee } = v,
      I = Lt(() => {
        x?.contains(document.activeElement) && v.viewport?.focus(), f();
      }),
      W = y.useCallback(
        (Q) => {
          !Q ||
            Q === 1 / 0 ||
            (window.clearTimeout(J.current),
            ($.current = new Date().getTime()),
            (J.current = window.setTimeout(I, Q)));
        },
        [I],
      );
    y.useEffect(() => {
      const Q = v.viewport;
      if (Q) {
        const ue = () => {
            W(z.current), k?.();
          },
          oe = () => {
            const se = new Date().getTime() - $.current;
            (z.current = z.current - se), window.clearTimeout(J.current), m?.();
          };
        return (
          Q.addEventListener(hu, oe),
          Q.addEventListener(wu, ue),
          () => {
            Q.removeEventListener(hu, oe), Q.removeEventListener(wu, ue);
          }
        );
      }
    }, [v.viewport, V, m, k, W]),
      y.useEffect(() => {
        d && !v.isClosePausedRef.current && W(V);
      }, [d, V, v.isClosePausedRef, W]),
      y.useEffect(() => (K(), () => ee()), [K, ee]);
    const te = y.useMemo(() => (x ? Kh(x) : null), [x]);
    return v.viewport
      ? h.jsxs(h.Fragment, {
          children: [
            te &&
              h.jsx(Xg, {
                __scopeToast: s,
                role: "status",
                "aria-live": a === "foreground" ? "assertive" : "polite",
                children: te,
              }),
            h.jsx(Kg, {
              scope: s,
              onClose: I,
              children: Vr.createPortal(
                h.jsx(Vu.ItemSlot, {
                  scope: s,
                  children: h.jsx(Og, {
                    asChild: !0,
                    onEscapeKeyDown: Se(p, () => {
                      v.isFocusedToastEscapeKeyDownRef.current || I(),
                        (v.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: h.jsx(Ee.li, {
                      tabIndex: 0,
                      "data-state": d ? "open" : "closed",
                      "data-swipe-direction": v.swipeDirection,
                      ..._,
                      ref: b,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...n.style,
                      },
                      onKeyDown: Se(n.onKeyDown, (Q) => {
                        Q.key === "Escape" &&
                          (p?.(Q.nativeEvent),
                          Q.nativeEvent.defaultPrevented ||
                            ((v.isFocusedToastEscapeKeyDownRef.current = !0),
                            I()));
                      }),
                      onPointerDown: Se(n.onPointerDown, (Q) => {
                        Q.button === 0 &&
                          (D.current = { x: Q.clientX, y: Q.clientY });
                      }),
                      onPointerMove: Se(n.onPointerMove, (Q) => {
                        if (!D.current) return;
                        const ue = Q.clientX - D.current.x,
                          oe = Q.clientY - D.current.y,
                          se = !!M.current,
                          F = ["left", "right"].includes(v.swipeDirection),
                          q = ["left", "up"].includes(v.swipeDirection)
                            ? Math.min
                            : Math.max,
                          X = F ? q(0, ue) : 0,
                          O = F ? 0 : q(0, oe),
                          B = Q.pointerType === "touch" ? 10 : 2,
                          pe = { x: X, y: O },
                          he = { originalEvent: Q, delta: pe };
                        se
                          ? ((M.current = pe), ni($g, P, he, { discrete: !1 }))
                          : Sp(pe, v.swipeDirection, B)
                            ? ((M.current = pe),
                              ni(Hg, g, he, { discrete: !1 }),
                              Q.target.setPointerCapture(Q.pointerId))
                            : (Math.abs(ue) > B || Math.abs(oe) > B) &&
                              (D.current = null);
                      }),
                      onPointerUp: Se(n.onPointerUp, (Q) => {
                        const ue = M.current,
                          oe = Q.target;
                        if (
                          (oe.hasPointerCapture(Q.pointerId) &&
                            oe.releasePointerCapture(Q.pointerId),
                          (M.current = null),
                          (D.current = null),
                          ue)
                        ) {
                          const se = Q.currentTarget,
                            F = { originalEvent: Q, delta: ue };
                          Sp(ue, v.swipeDirection, v.swipeThreshold)
                            ? ni(Qg, E, F, { discrete: !0 })
                            : ni(Gg, S, F, { discrete: !0 }),
                            se.addEventListener(
                              "click",
                              (q) => q.preventDefault(),
                              { once: !0 },
                            );
                        }
                      }),
                    }),
                  }),
                }),
                v.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  Xg = (n) => {
    const { __scopeToast: r, children: s, ...a } = n,
      u = Di(Uo, r),
      [d, f] = y.useState(!1),
      [p, m] = y.useState(!1);
    return (
      e1(() => f(!0)),
      y.useEffect(() => {
        const k = window.setTimeout(() => m(!0), 1e3);
        return () => window.clearTimeout(k);
      }, []),
      p
        ? null
        : h.jsx(Lu, {
            asChild: !0,
            children: h.jsx(Iu, {
              ...a,
              children:
                d && h.jsxs(h.Fragment, { children: [u.label, " ", s] }),
            }),
          })
    );
  },
  Jg = "ToastTitle",
  Wh = y.forwardRef((n, r) => {
    const { __scopeToast: s, ...a } = n;
    return h.jsx(Ee.div, { ...a, ref: r });
  });
Wh.displayName = Jg;
var Zg = "ToastDescription",
  Uh = y.forwardRef((n, r) => {
    const { __scopeToast: s, ...a } = n;
    return h.jsx(Ee.div, { ...a, ref: r });
  });
Uh.displayName = Zg;
var Hh = "ToastAction",
  $h = y.forwardRef((n, r) => {
    const { altText: s, ...a } = n;
    return s.trim()
      ? h.jsx(Qh, {
          altText: s,
          asChild: !0,
          children: h.jsx(zu, { ...a, ref: r }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Hh}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
$h.displayName = Hh;
var Gh = "ToastClose",
  zu = y.forwardRef((n, r) => {
    const { __scopeToast: s, ...a } = n,
      u = Yg(Gh, s);
    return h.jsx(Qh, {
      asChild: !0,
      children: h.jsx(Ee.button, {
        type: "button",
        ...a,
        ref: r,
        onClick: Se(n.onClick, u.onClose),
      }),
    });
  });
zu.displayName = Gh;
var Qh = y.forwardRef((n, r) => {
  const { __scopeToast: s, altText: a, ...u } = n;
  return h.jsx(Ee.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": a || void 0,
    ...u,
    ref: r,
  });
});
function Kh(n) {
  const r = [];
  return (
    Array.from(n.childNodes).forEach((a) => {
      if (
        (a.nodeType === a.TEXT_NODE && a.textContent && r.push(a.textContent),
        t1(a))
      ) {
        const u = a.ariaHidden || a.hidden || a.style.display === "none",
          d = a.dataset.radixToastAnnounceExclude === "";
        if (!u)
          if (d) {
            const f = a.dataset.radixToastAnnounceAlt;
            f && r.push(f);
          } else r.push(...Kh(a));
      }
    }),
    r
  );
}
function ni(n, r, s, { discrete: a }) {
  const u = s.originalEvent.currentTarget,
    d = new CustomEvent(n, { bubbles: !0, cancelable: !0, detail: s });
  r && u.addEventListener(n, r, { once: !0 }),
    a ? Oh(u, d) : u.dispatchEvent(d);
}
var Sp = (n, r, s = 0) => {
  const a = Math.abs(n.x),
    u = Math.abs(n.y),
    d = a > u;
  return r === "left" || r === "right" ? d && a > s : !d && u > s;
};
function e1(n = () => {}) {
  const r = Lt(n);
  Xe(() => {
    let s = 0,
      a = 0;
    return (
      (s = window.requestAnimationFrame(
        () => (a = window.requestAnimationFrame(r)),
      )),
      () => {
        window.cancelAnimationFrame(s), window.cancelAnimationFrame(a);
      }
    );
  }, [r]);
}
function t1(n) {
  return n.nodeType === n.ELEMENT_NODE;
}
function n1(n) {
  const r = [],
    s = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (a) => {
        const u = a.tagName === "INPUT" && a.type === "hidden";
        return a.disabled || a.hidden || u
          ? NodeFilter.FILTER_SKIP
          : a.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; s.nextNode(); ) r.push(s.currentNode);
  return r;
}
function Hl(n) {
  const r = document.activeElement;
  return n.some((s) =>
    s === r ? !0 : (s.focus(), document.activeElement !== r),
  );
}
var r1 = Ih,
  Yh = Vh,
  qh = Bh,
  Xh = Wh,
  Jh = Uh,
  Zh = $h,
  ew = zu;
function tw(n) {
  var r,
    s,
    a = "";
  if (typeof n == "string" || typeof n == "number") a += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var u = n.length;
      for (r = 0; r < u; r++)
        n[r] && (s = tw(n[r])) && (a && (a += " "), (a += s));
    } else for (s in n) n[s] && (a && (a += " "), (a += s));
  return a;
}
function nw() {
  for (var n, r, s = 0, a = "", u = arguments.length; s < u; s++)
    (n = arguments[s]) && (r = tw(n)) && (a && (a += " "), (a += r));
  return a;
}
const bp = (n) => (typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n),
  Cp = nw,
  Ai = (n, r) => (s) => {
    var a;
    if (r?.variants == null) return Cp(n, s?.class, s?.className);
    const { variants: u, defaultVariants: d } = r,
      f = Object.keys(u).map((k) => {
        const g = s?.[k],
          P = d?.[k];
        if (g === null) return null;
        const S = bp(g) || bp(P);
        return u[k][S];
      }),
      p =
        s &&
        Object.entries(s).reduce((k, g) => {
          let [P, S] = g;
          return S === void 0 || (k[P] = S), k;
        }, {}),
      m =
        r == null || (a = r.compoundVariants) === null || a === void 0
          ? void 0
          : a.reduce((k, g) => {
              let { class: P, className: S, ...E } = g;
              return Object.entries(E).every((_) => {
                let [v, x] = _;
                return Array.isArray(x)
                  ? x.includes({ ...d, ...p }[v])
                  : { ...d, ...p }[v] === x;
              })
                ? [...k, P, S]
                : k;
            }, []);
    return Cp(n, f, m, s?.class, s?.className);
  };
const o1 = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  rw = (...n) => n.filter((r, s, a) => !!r && a.indexOf(r) === s).join(" ");
var s1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const i1 = y.forwardRef(
  (
    {
      color: n = "currentColor",
      size: r = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: a,
      className: u = "",
      children: d,
      iconNode: f,
      ...p
    },
    m,
  ) =>
    y.createElement(
      "svg",
      {
        ref: m,
        ...s1,
        width: r,
        height: r,
        stroke: n,
        strokeWidth: a ? (Number(s) * 24) / Number(r) : s,
        className: rw("lucide", u),
        ...p,
      },
      [
        ...f.map(([k, g]) => y.createElement(k, g)),
        ...(Array.isArray(d) ? d : [d]),
      ],
    ),
);
const Ct = (n, r) => {
  const s = y.forwardRef(({ className: a, ...u }, d) =>
    y.createElement(i1, {
      ref: d,
      iconNode: r,
      className: rw(`lucide-${o1(n)}`, a),
      ...u,
    }),
  );
  return (s.displayName = `${n}`), s;
};
const a1 = Ct("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
const l1 = Ct("CalendarDays", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }],
]);
const u1 = Ct("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const ow = Ct("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
const c1 = Ct("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
const d1 = Ct("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
const f1 = Ct("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
const p1 = Ct("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
const h1 = Ct("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
const w1 = Ct("Star", [
  [
    "polygon",
    {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6",
    },
  ],
]);
const y1 = Ct("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
const m1 = Ct("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Bu = "-",
  k1 = (n) => {
    const r = g1(n),
      { conflictingClassGroups: s, conflictingClassGroupModifiers: a } = n;
    return {
      getClassGroupId: (f) => {
        const p = f.split(Bu);
        return p[0] === "" && p.length !== 1 && p.shift(), sw(p, r) || v1(f);
      },
      getConflictingClassGroupIds: (f, p) => {
        const m = s[f] || [];
        return p && a[f] ? [...m, ...a[f]] : m;
      },
    };
  },
  sw = (n, r) => {
    if (n.length === 0) return r.classGroupId;
    const s = n[0],
      a = r.nextPart.get(s),
      u = a ? sw(n.slice(1), a) : void 0;
    if (u) return u;
    if (r.validators.length === 0) return;
    const d = n.join(Bu);
    return r.validators.find(({ validator: f }) => f(d))?.classGroupId;
  },
  Ep = /^\[(.+)\]$/,
  v1 = (n) => {
    if (Ep.test(n)) {
      const r = Ep.exec(n)[1],
        s = r?.substring(0, r.indexOf(":"));
      if (s) return "arbitrary.." + s;
    }
  },
  g1 = (n) => {
    const { theme: r, prefix: s } = n,
      a = { nextPart: new Map(), validators: [] };
    return (
      x1(Object.entries(n.classGroups), s).forEach(([d, f]) => {
        mu(f, a, d, r);
      }),
      a
    );
  },
  mu = (n, r, s, a) => {
    n.forEach((u) => {
      if (typeof u == "string") {
        const d = u === "" ? r : Np(r, u);
        d.classGroupId = s;
        return;
      }
      if (typeof u == "function") {
        if (P1(u)) {
          mu(u(a), r, s, a);
          return;
        }
        r.validators.push({ validator: u, classGroupId: s });
        return;
      }
      Object.entries(u).forEach(([d, f]) => {
        mu(f, Np(r, d), s, a);
      });
    });
  },
  Np = (n, r) => {
    let s = n;
    return (
      r.split(Bu).forEach((a) => {
        s.nextPart.has(a) ||
          s.nextPart.set(a, { nextPart: new Map(), validators: [] }),
          (s = s.nextPart.get(a));
      }),
      s
    );
  },
  P1 = (n) => n.isThemeGetter,
  x1 = (n, r) =>
    r
      ? n.map(([s, a]) => {
          const u = a.map((d) =>
            typeof d == "string"
              ? r + d
              : typeof d == "object"
                ? Object.fromEntries(
                    Object.entries(d).map(([f, p]) => [r + f, p]),
                  )
                : d,
          );
          return [s, u];
        })
      : n,
  T1 = (n) => {
    if (n < 1) return { get: () => {}, set: () => {} };
    let r = 0,
      s = new Map(),
      a = new Map();
    const u = (d, f) => {
      s.set(d, f), r++, r > n && ((r = 0), (a = s), (s = new Map()));
    };
    return {
      get(d) {
        let f = s.get(d);
        if (f !== void 0) return f;
        if ((f = a.get(d)) !== void 0) return u(d, f), f;
      },
      set(d, f) {
        s.has(d) ? s.set(d, f) : u(d, f);
      },
    };
  },
  iw = "!",
  S1 = (n) => {
    const { separator: r, experimentalParseClassName: s } = n,
      a = r.length === 1,
      u = r[0],
      d = r.length,
      f = (p) => {
        const m = [];
        let k = 0,
          g = 0,
          P;
        for (let x = 0; x < p.length; x++) {
          let R = p[x];
          if (k === 0) {
            if (R === u && (a || p.slice(x, x + d) === r)) {
              m.push(p.slice(g, x)), (g = x + d);
              continue;
            }
            if (R === "/") {
              P = x;
              continue;
            }
          }
          R === "[" ? k++ : R === "]" && k--;
        }
        const S = m.length === 0 ? p : p.substring(g),
          E = S.startsWith(iw),
          _ = E ? S.substring(1) : S,
          v = P && P > g ? P - g : void 0;
        return {
          modifiers: m,
          hasImportantModifier: E,
          baseClassName: _,
          maybePostfixModifierPosition: v,
        };
      };
    return s ? (p) => s({ className: p, parseClassName: f }) : f;
  },
  b1 = (n) => {
    if (n.length <= 1) return n;
    const r = [];
    let s = [];
    return (
      n.forEach((a) => {
        a[0] === "[" ? (r.push(...s.sort(), a), (s = [])) : s.push(a);
      }),
      r.push(...s.sort()),
      r
    );
  },
  C1 = (n) => ({ cache: T1(n.cacheSize), parseClassName: S1(n), ...k1(n) }),
  E1 = /\s+/,
  N1 = (n, r) => {
    const {
        parseClassName: s,
        getClassGroupId: a,
        getConflictingClassGroupIds: u,
      } = r,
      d = [],
      f = n.trim().split(E1);
    let p = "";
    for (let m = f.length - 1; m >= 0; m -= 1) {
      const k = f[m],
        {
          modifiers: g,
          hasImportantModifier: P,
          baseClassName: S,
          maybePostfixModifierPosition: E,
        } = s(k);
      let _ = !!E,
        v = a(_ ? S.substring(0, E) : S);
      if (!v) {
        if (!_) {
          p = k + (p.length > 0 ? " " + p : p);
          continue;
        }
        if (((v = a(S)), !v)) {
          p = k + (p.length > 0 ? " " + p : p);
          continue;
        }
        _ = !1;
      }
      const x = b1(g).join(":"),
        R = P ? x + iw : x,
        b = R + v;
      if (d.includes(b)) continue;
      d.push(b);
      const D = u(v, _);
      for (let M = 0; M < D.length; ++M) {
        const V = D[M];
        d.push(R + V);
      }
      p = k + (p.length > 0 ? " " + p : p);
    }
    return p;
  };
function R1() {
  let n = 0,
    r,
    s,
    a = "";
  for (; n < arguments.length; )
    (r = arguments[n++]) && (s = aw(r)) && (a && (a += " "), (a += s));
  return a;
}
const aw = (n) => {
  if (typeof n == "string") return n;
  let r,
    s = "";
  for (let a = 0; a < n.length; a++)
    n[a] && (r = aw(n[a])) && (s && (s += " "), (s += r));
  return s;
};
function O1(n, ...r) {
  let s,
    a,
    u,
    d = f;
  function f(m) {
    const k = r.reduce((g, P) => P(g), n());
    return (s = C1(k)), (a = s.cache.get), (u = s.cache.set), (d = p), p(m);
  }
  function p(m) {
    const k = a(m);
    if (k) return k;
    const g = N1(m, s);
    return u(m, g), g;
  }
  return function () {
    return d(R1.apply(null, arguments));
  };
}
const _e = (n) => {
    const r = (s) => s[n] || [];
    return (r.isThemeGetter = !0), r;
  },
  lw = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  _1 = /^\d+\/\d+$/,
  j1 = new Set(["px", "full", "screen"]),
  D1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  A1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  M1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  L1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  I1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  nn = (n) => Ar(n) || j1.has(n) || _1.test(n),
  Cn = (n) => zr(n, "length", $1),
  Ar = (n) => !!n && !Number.isNaN(Number(n)),
  $l = (n) => zr(n, "number", Ar),
  _o = (n) => !!n && Number.isInteger(Number(n)),
  F1 = (n) => n.endsWith("%") && Ar(n.slice(0, -1)),
  ye = (n) => lw.test(n),
  En = (n) => D1.test(n),
  V1 = new Set(["length", "size", "percentage"]),
  z1 = (n) => zr(n, V1, uw),
  B1 = (n) => zr(n, "position", uw),
  W1 = new Set(["image", "url"]),
  U1 = (n) => zr(n, W1, Q1),
  H1 = (n) => zr(n, "", G1),
  jo = () => !0,
  zr = (n, r, s) => {
    const a = lw.exec(n);
    return a
      ? a[1]
        ? typeof r == "string"
          ? a[1] === r
          : r.has(a[1])
        : s(a[2])
      : !1;
  },
  $1 = (n) => A1.test(n) && !M1.test(n),
  uw = () => !1,
  G1 = (n) => L1.test(n),
  Q1 = (n) => I1.test(n),
  K1 = () => {
    const n = _e("colors"),
      r = _e("spacing"),
      s = _e("blur"),
      a = _e("brightness"),
      u = _e("borderColor"),
      d = _e("borderRadius"),
      f = _e("borderSpacing"),
      p = _e("borderWidth"),
      m = _e("contrast"),
      k = _e("grayscale"),
      g = _e("hueRotate"),
      P = _e("invert"),
      S = _e("gap"),
      E = _e("gradientColorStops"),
      _ = _e("gradientColorStopPositions"),
      v = _e("inset"),
      x = _e("margin"),
      R = _e("opacity"),
      b = _e("padding"),
      D = _e("saturate"),
      M = _e("scale"),
      V = _e("sepia"),
      $ = _e("skew"),
      z = _e("space"),
      J = _e("translate"),
      K = () => ["auto", "contain", "none"],
      ee = () => ["auto", "hidden", "clip", "visible", "scroll"],
      I = () => ["auto", ye, r],
      W = () => [ye, r],
      te = () => ["", nn, Cn],
      Q = () => ["auto", Ar, ye],
      ue = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      oe = () => ["solid", "dashed", "dotted", "double", "none"],
      se = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      F = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      q = () => ["", "0", ye],
      X = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      O = () => [Ar, ye];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [jo],
        spacing: [nn, Cn],
        blur: ["none", "", En, ye],
        brightness: O(),
        borderColor: [n],
        borderRadius: ["none", "", "full", En, ye],
        borderSpacing: W(),
        borderWidth: te(),
        contrast: O(),
        grayscale: q(),
        hueRotate: O(),
        invert: q(),
        gap: W(),
        gradientColorStops: [n],
        gradientColorStopPositions: [F1, Cn],
        inset: I(),
        margin: I(),
        opacity: O(),
        padding: W(),
        saturate: O(),
        scale: O(),
        sepia: q(),
        skew: O(),
        space: W(),
        translate: W(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", ye] }],
        container: ["container"],
        columns: [{ columns: [En] }],
        "break-after": [{ "break-after": X() }],
        "break-before": [{ "break-before": X() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...ue(), ye] }],
        overflow: [{ overflow: ee() }],
        "overflow-x": [{ "overflow-x": ee() }],
        "overflow-y": [{ "overflow-y": ee() }],
        overscroll: [{ overscroll: K() }],
        "overscroll-x": [{ "overscroll-x": K() }],
        "overscroll-y": [{ "overscroll-y": K() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", _o, ye] }],
        basis: [{ basis: I() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", ye] }],
        grow: [{ grow: q() }],
        shrink: [{ shrink: q() }],
        order: [{ order: ["first", "last", "none", _o, ye] }],
        "grid-cols": [{ "grid-cols": [jo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", _o, ye] }, ye] }],
        "col-start": [{ "col-start": Q() }],
        "col-end": [{ "col-end": Q() }],
        "grid-rows": [{ "grid-rows": [jo] }],
        "row-start-end": [{ row: ["auto", { span: [_o, ye] }, ye] }],
        "row-start": [{ "row-start": Q() }],
        "row-end": [{ "row-end": Q() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ye] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ye] }],
        gap: [{ gap: [S] }],
        "gap-x": [{ "gap-x": [S] }],
        "gap-y": [{ "gap-y": [S] }],
        "justify-content": [{ justify: ["normal", ...F()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...F(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...F(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [b] }],
        px: [{ px: [b] }],
        py: [{ py: [b] }],
        ps: [{ ps: [b] }],
        pe: [{ pe: [b] }],
        pt: [{ pt: [b] }],
        pr: [{ pr: [b] }],
        pb: [{ pb: [b] }],
        pl: [{ pl: [b] }],
        m: [{ m: [x] }],
        mx: [{ mx: [x] }],
        my: [{ my: [x] }],
        ms: [{ ms: [x] }],
        me: [{ me: [x] }],
        mt: [{ mt: [x] }],
        mr: [{ mr: [x] }],
        mb: [{ mb: [x] }],
        ml: [{ ml: [x] }],
        "space-x": [{ "space-x": [z] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [z] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ye, r] }],
        "min-w": [{ "min-w": [ye, r, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              ye,
              r,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [En] },
              En,
            ],
          },
        ],
        h: [{ h: [ye, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [ye, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [ye, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [ye, r, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", En, Cn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              $l,
            ],
          },
        ],
        "font-family": [{ font: [jo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              ye,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Ar, $l] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              nn,
              ye,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", ye] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", ye] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [n] }],
        "placeholder-opacity": [{ "placeholder-opacity": [R] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [n] }],
        "text-opacity": [{ "text-opacity": [R] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...oe(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", nn, Cn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", nn, ye] }],
        "text-decoration-color": [{ decoration: [n] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: W() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ye,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ye] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [R] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...ue(), B1] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", z1] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              U1,
            ],
          },
        ],
        "bg-color": [{ bg: [n] }],
        "gradient-from-pos": [{ from: [_] }],
        "gradient-via-pos": [{ via: [_] }],
        "gradient-to-pos": [{ to: [_] }],
        "gradient-from": [{ from: [E] }],
        "gradient-via": [{ via: [E] }],
        "gradient-to": [{ to: [E] }],
        rounded: [{ rounded: [d] }],
        "rounded-s": [{ "rounded-s": [d] }],
        "rounded-e": [{ "rounded-e": [d] }],
        "rounded-t": [{ "rounded-t": [d] }],
        "rounded-r": [{ "rounded-r": [d] }],
        "rounded-b": [{ "rounded-b": [d] }],
        "rounded-l": [{ "rounded-l": [d] }],
        "rounded-ss": [{ "rounded-ss": [d] }],
        "rounded-se": [{ "rounded-se": [d] }],
        "rounded-ee": [{ "rounded-ee": [d] }],
        "rounded-es": [{ "rounded-es": [d] }],
        "rounded-tl": [{ "rounded-tl": [d] }],
        "rounded-tr": [{ "rounded-tr": [d] }],
        "rounded-br": [{ "rounded-br": [d] }],
        "rounded-bl": [{ "rounded-bl": [d] }],
        "border-w": [{ border: [p] }],
        "border-w-x": [{ "border-x": [p] }],
        "border-w-y": [{ "border-y": [p] }],
        "border-w-s": [{ "border-s": [p] }],
        "border-w-e": [{ "border-e": [p] }],
        "border-w-t": [{ "border-t": [p] }],
        "border-w-r": [{ "border-r": [p] }],
        "border-w-b": [{ "border-b": [p] }],
        "border-w-l": [{ "border-l": [p] }],
        "border-opacity": [{ "border-opacity": [R] }],
        "border-style": [{ border: [...oe(), "hidden"] }],
        "divide-x": [{ "divide-x": [p] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [p] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [R] }],
        "divide-style": [{ divide: oe() }],
        "border-color": [{ border: [u] }],
        "border-color-x": [{ "border-x": [u] }],
        "border-color-y": [{ "border-y": [u] }],
        "border-color-s": [{ "border-s": [u] }],
        "border-color-e": [{ "border-e": [u] }],
        "border-color-t": [{ "border-t": [u] }],
        "border-color-r": [{ "border-r": [u] }],
        "border-color-b": [{ "border-b": [u] }],
        "border-color-l": [{ "border-l": [u] }],
        "divide-color": [{ divide: [u] }],
        "outline-style": [{ outline: ["", ...oe()] }],
        "outline-offset": [{ "outline-offset": [nn, ye] }],
        "outline-w": [{ outline: [nn, Cn] }],
        "outline-color": [{ outline: [n] }],
        "ring-w": [{ ring: te() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [n] }],
        "ring-opacity": [{ "ring-opacity": [R] }],
        "ring-offset-w": [{ "ring-offset": [nn, Cn] }],
        "ring-offset-color": [{ "ring-offset": [n] }],
        shadow: [{ shadow: ["", "inner", "none", En, H1] }],
        "shadow-color": [{ shadow: [jo] }],
        opacity: [{ opacity: [R] }],
        "mix-blend": [
          { "mix-blend": [...se(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": se() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [s] }],
        brightness: [{ brightness: [a] }],
        contrast: [{ contrast: [m] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", En, ye] }],
        grayscale: [{ grayscale: [k] }],
        "hue-rotate": [{ "hue-rotate": [g] }],
        invert: [{ invert: [P] }],
        saturate: [{ saturate: [D] }],
        sepia: [{ sepia: [V] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [s] }],
        "backdrop-brightness": [{ "backdrop-brightness": [a] }],
        "backdrop-contrast": [{ "backdrop-contrast": [m] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [k] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [g] }],
        "backdrop-invert": [{ "backdrop-invert": [P] }],
        "backdrop-opacity": [{ "backdrop-opacity": [R] }],
        "backdrop-saturate": [{ "backdrop-saturate": [D] }],
        "backdrop-sepia": [{ "backdrop-sepia": [V] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [f] }],
        "border-spacing-x": [{ "border-spacing-x": [f] }],
        "border-spacing-y": [{ "border-spacing-y": [f] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              ye,
            ],
          },
        ],
        duration: [{ duration: O() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", ye] }],
        delay: [{ delay: O() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", ye] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [M] }],
        "scale-x": [{ "scale-x": [M] }],
        "scale-y": [{ "scale-y": [M] }],
        rotate: [{ rotate: [_o, ye] }],
        "translate-x": [{ "translate-x": [J] }],
        "translate-y": [{ "translate-y": [J] }],
        "skew-x": [{ "skew-x": [$] }],
        "skew-y": [{ "skew-y": [$] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              ye,
            ],
          },
        ],
        accent: [{ accent: ["auto", n] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ye,
            ],
          },
        ],
        "caret-color": [{ caret: [n] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": W() }],
        "scroll-mx": [{ "scroll-mx": W() }],
        "scroll-my": [{ "scroll-my": W() }],
        "scroll-ms": [{ "scroll-ms": W() }],
        "scroll-me": [{ "scroll-me": W() }],
        "scroll-mt": [{ "scroll-mt": W() }],
        "scroll-mr": [{ "scroll-mr": W() }],
        "scroll-mb": [{ "scroll-mb": W() }],
        "scroll-ml": [{ "scroll-ml": W() }],
        "scroll-p": [{ "scroll-p": W() }],
        "scroll-px": [{ "scroll-px": W() }],
        "scroll-py": [{ "scroll-py": W() }],
        "scroll-ps": [{ "scroll-ps": W() }],
        "scroll-pe": [{ "scroll-pe": W() }],
        "scroll-pt": [{ "scroll-pt": W() }],
        "scroll-pr": [{ "scroll-pr": W() }],
        "scroll-pb": [{ "scroll-pb": W() }],
        "scroll-pl": [{ "scroll-pl": W() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", ye] },
        ],
        fill: [{ fill: [n, "none"] }],
        "stroke-w": [{ stroke: [nn, Cn, $l] }],
        stroke: [{ stroke: [n, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Y1 = O1(K1);
function je(...n) {
  return Y1(nw(n));
}
const q1 = r1,
  cw = y.forwardRef(({ className: n, ...r }, s) =>
    h.jsx(Yh, {
      ref: s,
      className: je(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        n,
      ),
      ...r,
    }),
  );
cw.displayName = Yh.displayName;
const X1 = Ai(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  dw = y.forwardRef(({ className: n, variant: r, ...s }, a) =>
    h.jsx(qh, { ref: a, className: je(X1({ variant: r }), n), ...s }),
  );
dw.displayName = qh.displayName;
const J1 = y.forwardRef(({ className: n, ...r }, s) =>
  h.jsx(Zh, {
    ref: s,
    className: je(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      n,
    ),
    ...r,
  }),
);
J1.displayName = Zh.displayName;
const fw = y.forwardRef(({ className: n, ...r }, s) =>
  h.jsx(ew, {
    ref: s,
    className: je(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      n,
    ),
    "toast-close": "",
    ...r,
    children: h.jsx(m1, { className: "h-4 w-4" }),
  }),
);
fw.displayName = ew.displayName;
const pw = y.forwardRef(({ className: n, ...r }, s) =>
  h.jsx(Xh, { ref: s, className: je("text-sm font-semibold", n), ...r }),
);
pw.displayName = Xh.displayName;
const hw = y.forwardRef(({ className: n, ...r }, s) =>
  h.jsx(Jh, { ref: s, className: je("text-sm opacity-90", n), ...r }),
);
hw.displayName = Jh.displayName;
function Z1() {
  const { toasts: n } = Au();
  return h.jsxs(q1, {
    children: [
      n.map(function ({ id: r, title: s, description: a, action: u, ...d }) {
        return h.jsxs(
          dw,
          {
            ...d,
            children: [
              h.jsxs("div", {
                className: "grid gap-1",
                children: [
                  s && h.jsx(pw, { children: s }),
                  a && h.jsx(hw, { children: a }),
                ],
              }),
              u,
              h.jsx(fw, {}),
            ],
          },
          r,
        );
      }),
      h.jsx(cw, {}),
    ],
  });
}
function ww() {
  const [n] = fv();
  return h.jsx("header", {
    className:
      "border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50",
    children: h.jsxs("div", {
      className:
        "max-w-5xl mx-auto px-4 h-14 flex items-center justify-between",
      children: [
        h.jsxs("div", {
          className: "flex items-center gap-2.5",
          children: [
            h.jsxs("svg", {
              width: "28",
              height: "28",
              viewBox: "0 0 28 28",
              fill: "none",
              "aria-label": "DVC Planner logo",
              className: "shrink-0",
              children: [
                h.jsx("circle", {
                  cx: "14",
                  cy: "14",
                  r: "13",
                  stroke: "#f59e0b",
                  strokeWidth: "1.5",
                  fill: "none",
                }),
                h.jsx("rect", {
                  x: "11",
                  y: "16",
                  width: "6",
                  height: "7",
                  fill: "#f59e0b",
                  rx: "0.5",
                }),
                h.jsx("rect", {
                  x: "7",
                  y: "13",
                  width: "4",
                  height: "10",
                  fill: "#f59e0b",
                  rx: "0.5",
                }),
                h.jsx("rect", {
                  x: "17",
                  y: "13",
                  width: "4",
                  height: "10",
                  fill: "#f59e0b",
                  rx: "0.5",
                }),
                h.jsx("polygon", {
                  points: "14,5 16,11 12,11",
                  fill: "#f59e0b",
                }),
                h.jsx("polygon", {
                  points: "9,8 10.5,13 7.5,13",
                  fill: "#f59e0b",
                }),
                h.jsx("polygon", {
                  points: "19,8 20.5,13 17.5,13",
                  fill: "#f59e0b",
                }),
              ],
            }),
            h.jsxs("span", {
              className: "font-bold text-base tracking-tight",
              children: [
                h.jsx("span", { className: "gold-text", children: "DVC" }),
                h.jsx("span", {
                  className: "text-foreground",
                  children: " Points Planner",
                }),
              ],
            }),
          ],
        }),
        h.jsxs("nav", {
          className: "flex items-center gap-1",
          children: [
            h.jsx("a", {
              href: "https://lisaprocz-rgb.github.io/crispy-octo-goggles/",
              className:
                "px-3 py-1.5 rounded-md text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-secondary",
              children: "Lisa's Hub",
            }),
            h.jsx("span", {
              className: "text-border text-xs mx-0.5",
              children: "|",
            }),
            h.jsx(su, {
              href: "/",
              className: `px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${n === "/" ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`,
              "data-testid": "nav-planner",
              children: "All Rooms",
            }),
            h.jsx("a", {
              href: "../#/",
              className:
                "px-3 py-1.5 rounded-md text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-secondary",
              "data-testid": "nav-classic",
              children: "Single Room",
            }),
            h.jsx(su, {
              href: "/wishlist",
              className: `px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${n === "/wishlist" ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`,
              "data-testid": "nav-wishlist",
              children: "Wish List",
            }),
          ],
        }),
      ],
    }),
  });
}
const Ao = {
    TP1: "Adventure",
    TP2: "Choice",
    TP3: "Choice Plus",
    TP4: "Dream",
    TP5: "Magic",
    TP6: "Premier",
    TP7: "Premier Plus",
  },
  eP = {
    TP1: "Sep 1–30",
    TP2: "Jan 1–31 · May 1–14",
    TP3: "May 15–Jun 10 · Dec 1–23",
    TP4: "Feb 1–15 · Jun 11–Aug 31",
    TP5: "Oct 1–Nov 24 · Nov 28–30",
    TP6: "Feb 16–Mar 28 · Apr 6–30 · Nov 25–27",
    TP7: "Mar 29–Apr 5 · Dec 24–31",
  },
  tP = {
    TP1: "Sep 1–30",
    TP2: "Jan 1–31 · May 1–14",
    TP3: "May 15–Jun 10 · Dec 1–23",
    TP4: "Feb 1–15 · Jun 11–Aug 31",
    TP5: "Oct 1–Nov 23 · Nov 27–30",
    TP6: "Feb 16–Mar 20 · Mar 29–Apr 30 · Nov 24–26",
    TP7: "Mar 21–28 · Dec 24–31",
  };
function nP(n, r) {
  return (n === 1 && r <= 3) ||
    (n === 3 && r >= 25) ||
    (n === 4 && r <= 11) ||
    (n === 6 && r >= 29) ||
    n === 7 ||
    (n === 8 && r <= 9) ||
    (n === 11 && r >= 24 && r <= 28) ||
    (n === 12 && r >= 18)
    ? "P4"
    : (n === 3 && r <= 24) ||
        (n === 4 && r >= 29) ||
        (n === 5 && r <= 5) ||
        (n === 8 && r >= 10) ||
        (n === 9 && r <= 5)
      ? "P3"
      : (n === 4 && r >= 12 && r <= 28) ||
          (n === 5 && r >= 6) ||
          (n === 6 && r <= 28) ||
          (n === 10 && r >= 11) ||
          (n === 11 && r <= 9)
        ? "P2"
        : "P1";
}
function rP(n, r) {
  return (n === 1 && r <= 3) ||
    (n === 3 && r >= 27) ||
    (n === 4 && r <= 11) ||
    (n === 11 && r >= 24 && r <= 28) ||
    (n === 12 && r >= 18)
    ? "P4"
    : (n === 2 && r >= 22) ||
        (n === 3 && r <= 26) ||
        (n === 6 && r >= 29) ||
        n === 7 ||
        n === 8 ||
        (n === 9 && r <= 5)
      ? "P3"
      : (n === 4 && r >= 12) ||
          n === 5 ||
          (n === 6 && r <= 28) ||
          (n === 10 && r >= 2) ||
          (n === 11 && r <= 23) ||
          (n === 11 && r >= 29) ||
          (n === 12 && r <= 17)
        ? "P2"
        : "P1";
}
function oP(n, r) {
  return (n === 2 && r >= 22) ||
    n === 3 ||
    (n === 4 && r <= 11) ||
    (n === 12 && r >= 24)
    ? "P5"
    : (n === 2 && r <= 21) || (n === 4 && r >= 12)
      ? "P4"
      : n === 1 ||
          n === 6 ||
          n === 7 ||
          n === 8 ||
          (n === 11 && r >= 25 && r <= 27)
        ? "P3"
        : n === 5 || (n === 11 && r >= 28) || (n === 12 && r <= 23)
          ? "P2"
          : "P1";
}
function sP(n, r) {
  return (n === 6 && r >= 11) || n === 7 || (n === 8 && r <= 27)
    ? "P4"
    : n === 4 ||
        n === 5 ||
        (n === 6 && r <= 10) ||
        (n === 8 && r >= 28) ||
        n === 9 ||
        n === 10
      ? "P3"
      : n === 2 || n === 3 || n === 11 || (n === 12 && r >= 18)
        ? "P2"
        : "P1";
}
function iP(n, r) {
  return (n === 3 && r >= 29) ||
    (n === 4 && r <= 5) ||
    (n === 11 && r >= 24 && r <= 27) ||
    (n === 12 && r >= 18)
    ? "P7"
    : (n === 3 && r >= 15 && r <= 28) || (n === 4 && r >= 6)
      ? "P6"
      : n === 6 || n === 7 || (n === 8 && r <= 15)
        ? "P5"
        : (n === 5 && r >= 23) ||
            n === 10 ||
            (n === 11 && r <= 23) ||
            (n === 11 && r >= 28) ||
            (n === 12 && r <= 17)
          ? "P4"
          : n === 2 || (n === 3 && r <= 14) || (n === 9 && r >= 16)
            ? "P3"
            : (n === 5 && r <= 22) ||
                (n === 8 && r >= 16) ||
                (n === 9 && r <= 15)
              ? "P2"
              : "P1";
}
function yw(n, r) {
  return (n === 3 && r >= 29) || (n === 4 && r <= 5) || (n === 12 && r >= 24)
    ? "TP7"
    : (n === 2 && r >= 16) ||
        (n === 3 && r <= 28) ||
        (n === 4 && r >= 6) ||
        (n === 11 && r >= 25 && r <= 27)
      ? "TP6"
      : n === 10 || (n === 11 && r <= 24) || (n === 11 && r >= 28)
        ? "TP5"
        : (n === 2 && r <= 15) || (n === 6 && r >= 11) || n === 7 || n === 8
          ? "TP4"
          : (n === 5 && r >= 15) ||
              (n === 6 && r <= 10) ||
              (n === 12 && r <= 23)
            ? "TP3"
            : n === 1 || (n === 5 && r <= 14)
              ? "TP2"
              : n === 9
                ? "TP1"
                : "TP2";
}
function mw(n, r) {
  return (n === 3 && r >= 21 && r <= 28) || (n === 12 && r >= 24)
    ? "TP7"
    : (n === 2 && r >= 16) ||
        (n === 3 && r <= 20) ||
        (n === 3 && r >= 29) ||
        n === 4 ||
        (n === 11 && r >= 24 && r <= 26)
      ? "TP6"
      : n === 10 || (n === 11 && r <= 23) || (n === 11 && r >= 27)
        ? "TP5"
        : (n === 2 && r <= 15) || (n === 6 && r >= 11) || n === 7 || n === 8
          ? "TP4"
          : (n === 5 && r >= 15) ||
              (n === 6 && r <= 10) ||
              (n === 12 && r <= 23)
            ? "TP3"
            : n === 1 || (n === 5 && r <= 14)
              ? "TP2"
              : n === 9
                ? "TP1"
                : "TP2";
}
function kw(n) {
  const r = new Date(n + "T12:00:00"),
    s = r.getFullYear(),
    a = r.getMonth() + 1,
    u = r.getDate();
  return s >= 2027 ? mw(a, u) : yw(a, u);
}
function aP(n) {
  return n >= 2027 ? tP : eP;
}
function lP(n) {
  const s = new Date(n + "T12:00:00").getDay();
  return s === 5 || s === 6;
}
const uP = {
    AUL: { P1: "Value", P2: "Regular", P3: "Mid-Season", P4: "Peak" },
    GCAL: { P1: "Value", P2: "Regular", P3: "Mid-Season", P4: "Peak" },
    VB: { P1: "Value", P2: "Choice", P3: "Regular", P4: "Prime", P5: "Peak" },
    HH: { P1: "Value", P2: "Regular", P3: "Prime", P4: "Peak" },
    VDH: {
      P1: "Value",
      P2: "Choice",
      P3: "Regular",
      P4: "Prime",
      P5: "Summer",
      P6: "Spring Break",
      P7: "Holiday",
    },
  },
  cP = {
    AUL: {
      P1: "Jan 4–Feb 28 · Sep 6–Oct 10 · Nov 10–23 · Nov 29–Dec 17",
      P2: "Apr 12–28 · May 6–Jun 28 · Oct 11–Nov 9",
      P3: "Mar 1–24 · Apr 29–May 5 · Aug 10–Sep 5",
      P4: "Jan 1–3 · Mar 25–Apr 11 · Jun 29–Aug 9 · Nov 24–28 · Dec 18–31",
    },
    GCAL: {
      P1: "Jan 4–Feb 21 · Sep 6–Oct 1",
      P2: "Apr 12–Jun 28 · Oct 2–Nov 23 · Nov 29–Dec 17",
      P3: "Feb 22–Mar 26 · Jun 29–Sep 5",
      P4: "Jan 1–3 · Mar 27–Apr 11 · Nov 24–28 · Dec 18–31",
    },
    VB: {
      P1: "Sep 1–Nov 24",
      P2: "May 1–31 · Nov 28–Dec 23",
      P3: "Jan 1–31 · Jun 1–Aug 31 · Nov 25–27",
      P4: "Feb 1–21 · Apr 12–30",
      P5: "Feb 22–Apr 11 · Dec 24–31",
    },
    HH: {
      P1: "Jan 1–31 · Dec 1–17",
      P2: "Feb 1–Mar 31 · Nov 1–30 · Dec 18–31",
      P3: "Apr 1–Jun 10 · Aug 28–Oct 31",
      P4: "Jun 11–Aug 27",
    },
    VDH: {
      P1: "Jan 1–31",
      P2: "May 1–22 · Aug 16–Sep 15",
      P3: "Feb 1–Mar 14 · Sep 16–30",
      P4: "May 23–31 · Oct 1–Nov 23 · Nov 28–Dec 17",
      P5: "Jun 1–Aug 15",
      P6: "Mar 15–28 · Apr 6–30",
      P7: "Mar 29–Apr 5 · Nov 24–27 · Dec 18–31",
    },
  },
  dP = { AUL: !0, GCAL: !1, VB: !1, HH: !1, VDH: !1 },
  Vo = [
    {
      key: "AKV",
      label: "Animal Kingdom Villas",
      location: "WDW",
      rooms: [
        {
          key: "studio",
          label: "Deluxe Studio",
          maxGuests: 4,
          views: [
            { key: "V", label: "Value" },
            { key: "S", label: "Standard" },
            { key: "SV", label: "Savanna" },
            { key: "C", label: "Kilimanjaro Club" },
          ],
        },
        {
          key: "1br",
          label: "1-Bedroom Villa",
          maxGuests: 4,
          views: [
            { key: "V", label: "Value" },
            { key: "S", label: "Standard" },
            { key: "SV", label: "Savanna" },
            { key: "C", label: "Kilimanjaro Club" },
          ],
        },
        {
          key: "2br",
          label: "2-Bedroom Villa",
          maxGuests: 8,
          views: [
            { key: "V", label: "Value" },
            { key: "S", label: "Standard" },
            { key: "SV", label: "Savanna" },
            { key: "C", label: "Kilimanjaro Club" },
          ],
        },
        {
          key: "3br",
          label: "3-Bedroom Grand Villa",
          maxGuests: 12,
          views: [
            { key: "S", label: "Standard" },
            { key: "SV", label: "Savanna" },
          ],
        },
      ],
    },
    {
      key: "BLT",
      label: "Bay Lake Tower",
      location: "WDW",
      rooms: [
        {
          key: "studio",
          label: "Deluxe Studio",
          maxGuests: 4,
          views: [
            { key: "S", label: "Standard" },
            { key: "L", label: "Lake" },
            { key: "T", label: "Theme Park" },
          ],
        },
        {
          key: "1br",
          label: "1-Bedroom Villa",
          maxGuests: 5,
          views: [
            { key: "S", label: "Standard" },
            { key: "L", label: "Lake" },
            { key: "T", label: "Theme Park" },
          ],
        },
        {
          key: "2br",
          label: "2-Bedroom Villa",
          maxGuests: 9,
          views: [
            { key: "S", label: "Standard" },
            { key: "L", label: "Lake" },
            { key: "T", label: "Theme Park" },
          ],
        },
        {
          key: "3br",
          label: "3-Bedroom Grand Villa",
          maxGuests: 12,
          views: [
            { key: "L", label: "Lake" },
            { key: "T", label: "Theme Park" },
          ],
        },
      ],
    },
    {
      key: "BCV",
      label: "Beach Club Villas",
      location: "WDW",
      rooms: [
        {
          key: "studio",
          label: "Deluxe Studio",
          maxGuests: 5,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "1br",
          label: "1-Bedroom Villa",
          maxGuests: 4,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "2br",
          label: "2-Bedroom Villa",
          maxGuests: 8,
          views: [{ key: "STD", label: "Standard" }],
        },
      ],
    },
    {
      key: "BWV",
      label: "BoardWalk Villas",
      location: "WDW",
      rooms: [
        {
          key: "studio",
          label: "Deluxe Studio",
          maxGuests: 5,
          views: [
            { key: "S", label: "Standard" },
            { key: "B", label: "Boardwalk/Preferred" },
          ],
        },
        {
          key: "1br",
          label: "1-Bedroom Villa",
          maxGuests: 4,
          views: [
            { key: "S", label: "Standard" },
            { key: "B", label: "Boardwalk/Preferred" },
          ],
        },
        {
          key: "2br",
          label: "2-Bedroom Villa",
          maxGuests: 9,
          views: [
            { key: "S", label: "Standard" },
            { key: "B", label: "Boardwalk/Preferred" },
          ],
        },
        {
          key: "3br",
          label: "3-Bedroom Grand Villa",
          maxGuests: 12,
          views: [{ key: "B", label: "Boardwalk/Preferred" }],
        },
      ],
    },
    {
      key: "GFV",
      label: "Grand Floridian Villas",
      location: "WDW",
      rooms: [
        {
          key: "resort_studio",
          label: "Resort Studio",
          maxGuests: 5,
          views: [
            { key: "S", label: "Standard" },
            { key: "L", label: "Lake" },
            { key: "TP", label: "Theme Park" },
          ],
        },
        {
          key: "deluxe_studio",
          label: "Deluxe Studio",
          maxGuests: 5,
          views: [
            { key: "S", label: "Standard" },
            { key: "L", label: "Lake" },
          ],
        },
        {
          key: "1br",
          label: "1-Bedroom Villa",
          maxGuests: 5,
          views: [
            { key: "S", label: "Standard" },
            { key: "L", label: "Lake" },
          ],
        },
        {
          key: "2br",
          label: "2-Bedroom Villa",
          maxGuests: 9,
          views: [
            { key: "S", label: "Standard" },
            { key: "L", label: "Lake" },
          ],
        },
        {
          key: "3br",
          label: "3-Bedroom Grand Villa",
          maxGuests: 12,
          views: [{ key: "L", label: "Lake" }],
        },
      ],
    },
    {
      key: "OKW",
      label: "Old Key West",
      location: "WDW",
      rooms: [
        {
          key: "studio",
          label: "Deluxe Studio",
          maxGuests: 4,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "1br",
          label: "1-Bedroom Villa",
          maxGuests: 5,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "2br",
          label: "2-Bedroom Villa",
          maxGuests: 9,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "3br",
          label: "3-Bedroom Grand Villa",
          maxGuests: 12,
          views: [{ key: "STD", label: "Standard" }],
        },
      ],
    },
    {
      key: "PVB",
      label: "Polynesian Villas & Bungalows",
      location: "WDW",
      rooms: [
        {
          key: "deluxe_studio",
          label: "Deluxe Studio (Longhouse)",
          maxGuests: 5,
          views: [
            { key: "S", label: "Standard" },
            { key: "P", label: "Preferred" },
          ],
        },
        {
          key: "bungalow_2br",
          label: "2-Bedroom Bungalow (Over-water)",
          maxGuests: 8,
          views: [{ key: "P", label: "Preferred" }],
        },
        {
          key: "tower_duo",
          label: "Tower Duo Studio",
          maxGuests: 2,
          views: [
            { key: "S", label: "Standard" },
            { key: "P", label: "Preferred" },
            { key: "PM", label: "Premium" },
          ],
        },
        {
          key: "tower_studio",
          label: "Tower Deluxe Studio",
          maxGuests: 4,
          views: [
            { key: "S", label: "Standard" },
            { key: "P", label: "Preferred" },
            { key: "TP", label: "Theme Park" },
          ],
        },
        {
          key: "tower_1br",
          label: "Tower 1-Bedroom Villa",
          maxGuests: 5,
          views: [
            { key: "S", label: "Standard" },
            { key: "P", label: "Preferred" },
            { key: "TP", label: "Theme Park" },
          ],
        },
        {
          key: "tower_2br",
          label: "Tower 2-Bedroom Villa",
          maxGuests: 9,
          views: [
            { key: "S", label: "Standard" },
            { key: "P", label: "Preferred" },
            { key: "TP", label: "Theme Park" },
          ],
        },
        {
          key: "tower_penthouse",
          label: "Tower 2-BR Penthouse Villa",
          maxGuests: 8,
          views: [
            { key: "P", label: "Preferred" },
            { key: "TP", label: "Theme Park" },
          ],
        },
      ],
    },
    {
      key: "SSR",
      label: "Saratoga Springs Resort",
      location: "WDW",
      rooms: [
        {
          key: "studio",
          label: "Deluxe Studio",
          maxGuests: 4,
          views: [
            { key: "S", label: "Standard" },
            { key: "P", label: "Preferred" },
          ],
        },
        {
          key: "1br",
          label: "1-Bedroom Villa",
          maxGuests: 5,
          views: [
            { key: "S", label: "Standard" },
            { key: "P", label: "Preferred" },
          ],
        },
        {
          key: "2br",
          label: "2-Bedroom Villa",
          maxGuests: 9,
          views: [
            { key: "S", label: "Standard" },
            { key: "P", label: "Preferred" },
          ],
        },
        {
          key: "3br",
          label: "3-Bedroom Grand Villa",
          maxGuests: 12,
          views: [
            { key: "S", label: "Standard" },
            { key: "P", label: "Preferred" },
          ],
        },
        {
          key: "treehouse",
          label: "Treehouse Villa",
          maxGuests: 9,
          views: [{ key: "STD", label: "Standard" }],
        },
      ],
    },
    {
      key: "RIV",
      label: "Riviera Resort",
      location: "WDW",
      rooms: [
        {
          key: "tower_studio",
          label: "Tower Studio",
          maxGuests: 2,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "studio",
          label: "Deluxe Studio",
          maxGuests: 5,
          views: [
            { key: "S", label: "Standard" },
            { key: "P", label: "Preferred" },
          ],
        },
        {
          key: "1br",
          label: "1-Bedroom Villa",
          maxGuests: 5,
          views: [
            { key: "S", label: "Standard" },
            { key: "P", label: "Preferred" },
          ],
        },
        {
          key: "2br",
          label: "2-Bedroom Villa",
          maxGuests: 9,
          views: [
            { key: "S", label: "Standard" },
            { key: "P", label: "Preferred" },
          ],
        },
        {
          key: "3br",
          label: "3-Bedroom Grand Villa",
          maxGuests: 12,
          views: [{ key: "STD", label: "Standard" }],
        },
      ],
    },
    {
      key: "CCK",
      label: "Copper Creek Villas (Wilderness Lodge)",
      location: "WDW",
      rooms: [
        {
          key: "studio",
          label: "Deluxe Studio",
          maxGuests: 4,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "1br",
          label: "1-Bedroom Villa",
          maxGuests: 4,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "2br",
          label: "2-Bedroom Villa",
          maxGuests: 8,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "3br",
          label: "3-Bedroom Grand Villa",
          maxGuests: 12,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "cabin",
          label: "Cascade Cabin",
          maxGuests: 8,
          views: [{ key: "STD", label: "Standard" }],
        },
      ],
    },
    {
      key: "AUL",
      label: "Aulani (Ko Olina, Hawaii)",
      location: "HI",
      rooms: [
        {
          key: "hotel",
          label: "Hotel Room",
          maxGuests: 4,
          views: [{ key: "S", label: "Standard" }],
        },
        {
          key: "studio",
          label: "Deluxe Studio",
          maxGuests: 4,
          views: [
            { key: "S", label: "Standard" },
            { key: "I", label: "Island Gardens" },
            { key: "P", label: "Poolside Gardens" },
            { key: "O", label: "Ocean View" },
          ],
        },
        {
          key: "1br",
          label: "1-Bedroom Villa",
          maxGuests: 5,
          views: [
            { key: "S", label: "Standard" },
            { key: "I", label: "Island Gardens" },
            { key: "P", label: "Poolside Gardens" },
            { key: "O", label: "Ocean View" },
          ],
        },
        {
          key: "2br",
          label: "2-Bedroom Villa",
          maxGuests: 9,
          views: [
            { key: "S", label: "Standard" },
            { key: "I", label: "Island Gardens" },
            { key: "P", label: "Poolside Gardens" },
            { key: "O", label: "Ocean View" },
          ],
        },
        {
          key: "3br",
          label: "3-Bedroom Grand Villa",
          maxGuests: 12,
          views: [
            { key: "S", label: "Standard" },
            { key: "O", label: "Ocean View" },
          ],
        },
      ],
    },
    {
      key: "GCAL",
      label: "Grand Californian (Disneyland)",
      location: "DL",
      rooms: [
        {
          key: "studio",
          label: "Deluxe Studio",
          maxGuests: 4,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "1br",
          label: "1-Bedroom Villa",
          maxGuests: 5,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "2br",
          label: "2-Bedroom Villa",
          maxGuests: 9,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "3br",
          label: "3-Bedroom Grand Villa",
          maxGuests: 12,
          views: [{ key: "STD", label: "Standard" }],
        },
      ],
    },
    {
      key: "VDH",
      label: "Villas at Disneyland Hotel",
      location: "DL",
      rooms: [
        {
          key: "duo_studio",
          label: "Duo Studio",
          maxGuests: 2,
          views: [
            { key: "S", label: "Standard" },
            { key: "P", label: "Preferred" },
          ],
        },
        {
          key: "studio",
          label: "Deluxe Studio",
          maxGuests: 4,
          views: [
            { key: "S", label: "Standard" },
            { key: "P", label: "Preferred" },
          ],
        },
        {
          key: "garden_duo",
          label: "Garden Room Duo Studio",
          maxGuests: 2,
          views: [{ key: "GR", label: "Garden" }],
        },
        {
          key: "garden_studio",
          label: "Garden Room Deluxe Studio",
          maxGuests: 4,
          views: [{ key: "GR", label: "Garden" }],
        },
        {
          key: "1br",
          label: "1-Bedroom Villa",
          maxGuests: 5,
          views: [{ key: "P", label: "Preferred" }],
        },
        {
          key: "2br",
          label: "2-Bedroom Villa",
          maxGuests: 9,
          views: [{ key: "P", label: "Preferred" }],
        },
        {
          key: "3br",
          label: "3-Bedroom Grand Villa",
          maxGuests: 12,
          views: [{ key: "P", label: "Preferred" }],
        },
      ],
    },
    {
      key: "HH",
      label: "Hilton Head Island Resort",
      location: "SC",
      rooms: [
        {
          key: "studio",
          label: "Deluxe Studio",
          maxGuests: 4,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "1br",
          label: "1-Bedroom Villa",
          maxGuests: 5,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "2br",
          label: "2-Bedroom Villa",
          maxGuests: 9,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "3br",
          label: "3-Bedroom Grand Villa",
          maxGuests: 12,
          views: [{ key: "STD", label: "Standard" }],
        },
      ],
    },
    {
      key: "VB",
      label: "Vero Beach Resort",
      location: "VA",
      rooms: [
        {
          key: "inn_gv",
          label: "Deluxe Inn Room",
          maxGuests: 4,
          views: [
            { key: "GV", label: "Garden View" },
            { key: "OV", label: "Ocean View" },
          ],
        },
        {
          key: "studio",
          label: "Deluxe Studio",
          maxGuests: 4,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "1br",
          label: "1-Bedroom Villa",
          maxGuests: 5,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "2br",
          label: "2-Bedroom Villa",
          maxGuests: 9,
          views: [{ key: "STD", label: "Standard" }],
        },
        {
          key: "3br",
          label: "3-Bedroom Beach Cottage",
          maxGuests: 12,
          views: [{ key: "STD", label: "Standard" }],
        },
      ],
    },
  ],
  vw = {
    AKV: {
      studio: {
        V: {
          TP1: { weekday: 7, weekend: 10 },
          TP2: { weekday: 8, weekend: 11 },
          TP3: { weekday: 8, weekend: 12 },
          TP4: { weekday: 9, weekend: 12 },
          TP5: { weekday: 10, weekend: 13 },
          TP6: { weekday: 12, weekend: 14 },
          TP7: { weekday: 16, weekend: 17 },
        },
        S: {
          TP1: { weekday: 10, weekend: 13 },
          TP2: { weekday: 12, weekend: 14 },
          TP3: { weekday: 13, weekend: 15 },
          TP4: { weekday: 14, weekend: 15 },
          TP5: { weekday: 15, weekend: 16 },
          TP6: { weekday: 16, weekend: 18 },
          TP7: { weekday: 21, weekend: 23 },
        },
        SV: {
          TP1: { weekday: 13, weekend: 16 },
          TP2: { weekday: 15, weekend: 17 },
          TP3: { weekday: 16, weekend: 18 },
          TP4: { weekday: 17, weekend: 20 },
          TP5: { weekday: 19, weekend: 20 },
          TP6: { weekday: 19, weekend: 22 },
          TP7: { weekday: 27, weekend: 29 },
        },
        C: {
          TP1: { weekday: 18, weekend: 22 },
          TP2: { weekday: 20, weekend: 23 },
          TP3: { weekday: 21, weekend: 24 },
          TP4: { weekday: 22, weekend: 24 },
          TP5: { weekday: 23, weekend: 25 },
          TP6: { weekday: 23, weekend: 26 },
          TP7: { weekday: 33, weekend: 36 },
        },
      },
      "1br": {
        V: {
          TP1: { weekday: 17, weekend: 20 },
          TP2: { weekday: 19, weekend: 21 },
          TP3: { weekday: 20, weekend: 22 },
          TP4: { weekday: 21, weekend: 24 },
          TP5: { weekday: 23, weekend: 26 },
          TP6: { weekday: 24, weekend: 27 },
          TP7: { weekday: 31, weekend: 35 },
        },
        S: {
          TP1: { weekday: 20, weekend: 25 },
          TP2: { weekday: 24, weekend: 28 },
          TP3: { weekday: 26, weekend: 29 },
          TP4: { weekday: 27, weekend: 30 },
          TP5: { weekday: 29, weekend: 32 },
          TP6: { weekday: 32, weekend: 35 },
          TP7: { weekday: 38, weekend: 45 },
        },
        SV: {
          TP1: { weekday: 27, weekend: 31 },
          TP2: { weekday: 31, weekend: 34 },
          TP3: { weekday: 33, weekend: 35 },
          TP4: { weekday: 34, weekend: 36 },
          TP5: { weekday: 35, weekend: 39 },
          TP6: { weekday: 38, weekend: 41 },
          TP7: { weekday: 47, weekend: 52 },
        },
        C: {
          TP1: { weekday: 38, weekend: 43 },
          TP2: { weekday: 41, weekend: 46 },
          TP3: { weekday: 43, weekend: 49 },
          TP4: { weekday: 44, weekend: 50 },
          TP5: { weekday: 46, weekend: 53 },
          TP6: { weekday: 49, weekend: 56 },
          TP7: { weekday: 65, weekend: 73 },
        },
      },
      "2br": {
        V: {
          TP1: { weekday: 22, weekend: 28 },
          TP2: { weekday: 25, weekend: 31 },
          TP3: { weekday: 27, weekend: 32 },
          TP4: { weekday: 29, weekend: 34 },
          TP5: { weekday: 30, weekend: 35 },
          TP6: { weekday: 31, weekend: 36 },
          TP7: { weekday: 43, weekend: 48 },
        },
        S: {
          TP1: { weekday: 28, weekend: 34 },
          TP2: { weekday: 31, weekend: 37 },
          TP3: { weekday: 32, weekend: 39 },
          TP4: { weekday: 35, weekend: 40 },
          TP5: { weekday: 36, weekend: 44 },
          TP6: { weekday: 40, weekend: 48 },
          TP7: { weekday: 55, weekend: 60 },
        },
        SV: {
          TP1: { weekday: 35, weekend: 43 },
          TP2: { weekday: 39, weekend: 48 },
          TP3: { weekday: 42, weekend: 50 },
          TP4: { weekday: 43, weekend: 52 },
          TP5: { weekday: 47, weekend: 57 },
          TP6: { weekday: 52, weekend: 61 },
          TP7: { weekday: 70, weekend: 76 },
        },
        C: {
          TP1: { weekday: 51, weekend: 58 },
          TP2: { weekday: 55, weekend: 63 },
          TP3: { weekday: 58, weekend: 66 },
          TP4: { weekday: 60, weekend: 66 },
          TP5: { weekday: 61, weekend: 71 },
          TP6: { weekday: 66, weekend: 77 },
          TP7: { weekday: 88, weekend: 98 },
        },
      },
      "3br": {
        S: {
          TP1: { weekday: 68, weekend: 78 },
          TP2: { weekday: 73, weekend: 82 },
          TP3: { weekday: 78, weekend: 88 },
          TP4: { weekday: 81, weekend: 91 },
          TP5: { weekday: 88, weekend: 100 },
          TP6: { weekday: 97, weekend: 111 },
          TP7: { weekday: 117, weekend: 135 },
        },
        SV: {
          TP1: { weekday: 73, weekend: 85 },
          TP2: { weekday: 79, weekend: 89 },
          TP3: { weekday: 86, weekend: 96 },
          TP4: { weekday: 89, weekend: 100 },
          TP5: { weekday: 96, weekend: 110 },
          TP6: { weekday: 107, weekend: 121 },
          TP7: { weekday: 127, weekend: 144 },
        },
      },
    },
    BLT: {
      studio: {
        S: {
          TP1: { weekday: 13, weekend: 16 },
          TP2: { weekday: 15, weekend: 17 },
          TP3: { weekday: 16, weekend: 18 },
          TP4: { weekday: 17, weekend: 19 },
          TP5: { weekday: 18, weekend: 21 },
          TP6: { weekday: 19, weekend: 22 },
          TP7: { weekday: 26, weekend: 29 },
        },
        L: {
          TP1: { weekday: 16, weekend: 19 },
          TP2: { weekday: 18, weekend: 19 },
          TP3: { weekday: 19, weekend: 20 },
          TP4: { weekday: 19, weekend: 21 },
          TP5: { weekday: 20, weekend: 23 },
          TP6: { weekday: 21, weekend: 24 },
          TP7: { weekday: 28, weekend: 32 },
        },
        T: {
          TP1: { weekday: 18, weekend: 23 },
          TP2: { weekday: 20, weekend: 23 },
          TP3: { weekday: 21, weekend: 25 },
          TP4: { weekday: 23, weekend: 26 },
          TP5: { weekday: 24, weekend: 27 },
          TP6: { weekday: 26, weekend: 29 },
          TP7: { weekday: 34, weekend: 38 },
        },
      },
      "1br": {
        S: {
          TP1: { weekday: 24, weekend: 32 },
          TP2: { weekday: 28, weekend: 35 },
          TP3: { weekday: 30, weekend: 38 },
          TP4: { weekday: 31, weekend: 39 },
          TP5: { weekday: 33, weekend: 41 },
          TP6: { weekday: 36, weekend: 44 },
          TP7: { weekday: 48, weekend: 56 },
        },
        L: {
          TP1: { weekday: 29, weekend: 36 },
          TP2: { weekday: 33, weekend: 38 },
          TP3: { weekday: 35, weekend: 41 },
          TP4: { weekday: 36, weekend: 44 },
          TP5: { weekday: 38, weekend: 47 },
          TP6: { weekday: 42, weekend: 48 },
          TP7: { weekday: 53, weekend: 62 },
        },
        T: {
          TP1: { weekday: 35, weekend: 44 },
          TP2: { weekday: 39, weekend: 46 },
          TP3: { weekday: 41, weekend: 50 },
          TP4: { weekday: 45, weekend: 53 },
          TP5: { weekday: 47, weekend: 56 },
          TP6: { weekday: 49, weekend: 59 },
          TP7: { weekday: 64, weekend: 75 },
        },
      },
      "2br": {
        S: {
          TP1: { weekday: 35, weekend: 42 },
          TP2: { weekday: 40, weekend: 45 },
          TP3: { weekday: 42, weekend: 48 },
          TP4: { weekday: 43, weekend: 49 },
          TP5: { weekday: 45, weekend: 53 },
          TP6: { weekday: 50, weekend: 57 },
          TP7: { weekday: 66, weekend: 77 },
        },
        L: {
          TP1: { weekday: 38, weekend: 47 },
          TP2: { weekday: 43, weekend: 50 },
          TP3: { weekday: 46, weekend: 54 },
          TP4: { weekday: 47, weekend: 58 },
          TP5: { weekday: 50, weekend: 61 },
          TP6: { weekday: 54, weekend: 62 },
          TP7: { weekday: 72, weekend: 84 },
        },
        T: {
          TP1: { weekday: 48, weekend: 59 },
          TP2: { weekday: 54, weekend: 61 },
          TP3: { weekday: 57, weekend: 66 },
          TP4: { weekday: 58, weekend: 67 },
          TP5: { weekday: 60, weekend: 72 },
          TP6: { weekday: 65, weekend: 76 },
          TP7: { weekday: 88, weekend: 98 },
        },
      },
      "3br": {
        L: {
          TP1: { weekday: 82, weekend: 98 },
          TP2: { weekday: 88, weekend: 104 },
          TP3: { weekday: 96, weekend: 112 },
          TP4: { weekday: 100, weekend: 115 },
          TP5: { weekday: 108, weekend: 126 },
          TP6: { weekday: 120, weekend: 140 },
          TP7: { weekday: 146, weekend: 171 },
        },
        T: {
          TP1: { weekday: 101, weekend: 120 },
          TP2: { weekday: 106, weekend: 125 },
          TP3: { weekday: 115, weekend: 135 },
          TP4: { weekday: 120, weekend: 141 },
          TP5: { weekday: 131, weekend: 153 },
          TP6: { weekday: 143, weekend: 168 },
          TP7: { weekday: 176, weekend: 207 },
        },
      },
    },
    BCV: {
      studio: {
        STD: {
          TP1: { weekday: 14, weekend: 15 },
          TP2: { weekday: 15, weekend: 16 },
          TP3: { weekday: 16, weekend: 17 },
          TP4: { weekday: 16, weekend: 18 },
          TP5: { weekday: 17, weekend: 21 },
          TP6: { weekday: 18, weekend: 22 },
          TP7: { weekday: 27, weekend: 28 },
        },
      },
      "1br": {
        STD: {
          TP1: { weekday: 26, weekend: 31 },
          TP2: { weekday: 29, weekend: 33 },
          TP3: { weekday: 31, weekend: 36 },
          TP4: { weekday: 35, weekend: 38 },
          TP5: { weekday: 36, weekend: 39 },
          TP6: { weekday: 37, weekend: 42 },
          TP7: { weekday: 51, weekend: 56 },
        },
      },
      "2br": {
        STD: {
          TP1: { weekday: 36, weekend: 43 },
          TP2: { weekday: 38, weekend: 44 },
          TP3: { weekday: 41, weekend: 46 },
          TP4: { weekday: 44, weekend: 47 },
          TP5: { weekday: 46, weekend: 52 },
          TP6: { weekday: 48, weekend: 55 },
          TP7: { weekday: 68, weekend: 71 },
        },
      },
    },
    BWV: {
      studio: {
        S: {
          TP1: { weekday: 10, weekend: 13 },
          TP2: { weekday: 10, weekend: 14 },
          TP3: { weekday: 11, weekend: 15 },
          TP4: { weekday: 11, weekend: 16 },
          TP5: { weekday: 14, weekend: 16 },
          TP6: { weekday: 15, weekend: 19 },
          TP7: { weekday: 22, weekend: 24 },
        },
        B: {
          TP1: { weekday: 14, weekend: 16 },
          TP2: { weekday: 15, weekend: 16 },
          TP3: { weekday: 16, weekend: 17 },
          TP4: { weekday: 16, weekend: 18 },
          TP5: { weekday: 18, weekend: 20 },
          TP6: { weekday: 18, weekend: 22 },
          TP7: { weekday: 28, weekend: 29 },
        },
      },
      "1br": {
        S: {
          TP1: { weekday: 19, weekend: 27 },
          TP2: { weekday: 23, weekend: 28 },
          TP3: { weekday: 24, weekend: 30 },
          TP4: { weekday: 25, weekend: 31 },
          TP5: { weekday: 28, weekend: 33 },
          TP6: { weekday: 31, weekend: 36 },
          TP7: { weekday: 42, weekend: 48 },
        },
        B: {
          TP1: { weekday: 26, weekend: 29 },
          TP2: { weekday: 29, weekend: 34 },
          TP3: { weekday: 32, weekend: 37 },
          TP4: { weekday: 35, weekend: 39 },
          TP5: { weekday: 35, weekend: 41 },
          TP6: { weekday: 39, weekend: 43 },
          TP7: { weekday: 50, weekend: 56 },
        },
      },
      "2br": {
        S: {
          TP1: { weekday: 29, weekend: 35 },
          TP2: { weekday: 32, weekend: 38 },
          TP3: { weekday: 31, weekend: 41 },
          TP4: { weekday: 33, weekend: 44 },
          TP5: { weekday: 39, weekend: 45 },
          TP6: { weekday: 43, weekend: 49 },
          TP7: { weekday: 60, weekend: 67 },
        },
        B: {
          TP1: { weekday: 35, weekend: 40 },
          TP2: { weekday: 39, weekend: 45 },
          TP3: { weekday: 41, weekend: 47 },
          TP4: { weekday: 43, weekend: 47 },
          TP5: { weekday: 45, weekend: 51 },
          TP6: { weekday: 51, weekend: 55 },
          TP7: { weekday: 68, weekend: 77 },
        },
      },
      "3br": {
        B: {
          TP1: { weekday: 76, weekend: 88 },
          TP2: { weekday: 81, weekend: 91 },
          TP3: { weekday: 88, weekend: 97 },
          TP4: { weekday: 91, weekend: 102 },
          TP5: { weekday: 101, weekend: 114 },
          TP6: { weekday: 110, weekend: 124 },
          TP7: { weekday: 133, weekend: 145 },
        },
      },
    },
    GFV: {
      resort_studio: {
        S: {
          TP1: { weekday: 16, weekend: 20 },
          TP2: { weekday: 17, weekend: 21 },
          TP3: { weekday: 19, weekend: 22 },
          TP4: { weekday: 19, weekend: 23 },
          TP5: { weekday: 20, weekend: 25 },
          TP6: { weekday: 22, weekend: 27 },
          TP7: { weekday: 30, weekend: 34 },
        },
        L: {
          TP1: { weekday: 19, weekend: 24 },
          TP2: { weekday: 21, weekend: 25 },
          TP3: { weekday: 22, weekend: 26 },
          TP4: { weekday: 23, weekend: 27 },
          TP5: { weekday: 24, weekend: 28 },
          TP6: { weekday: 26, weekend: 31 },
          TP7: { weekday: 35, weekend: 40 },
        },
        TP: {
          TP1: { weekday: 24, weekend: 27 },
          TP2: { weekday: 26, weekend: 29 },
          TP3: { weekday: 27, weekend: 30 },
          TP4: { weekday: 28, weekend: 32 },
          TP5: { weekday: 30, weekend: 34 },
          TP6: { weekday: 32, weekend: 37 },
          TP7: { weekday: 44, weekend: 48 },
        },
      },
      deluxe_studio: {
        S: {
          TP1: { weekday: 16, weekend: 20 },
          TP2: { weekday: 17, weekend: 21 },
          TP3: { weekday: 19, weekend: 22 },
          TP4: { weekday: 19, weekend: 23 },
          TP5: { weekday: 20, weekend: 25 },
          TP6: { weekday: 22, weekend: 27 },
          TP7: { weekday: 30, weekend: 34 },
        },
        L: {
          TP1: { weekday: 19, weekend: 24 },
          TP2: { weekday: 21, weekend: 25 },
          TP3: { weekday: 22, weekend: 26 },
          TP4: { weekday: 23, weekend: 27 },
          TP5: { weekday: 24, weekend: 28 },
          TP6: { weekday: 26, weekend: 31 },
          TP7: { weekday: 35, weekend: 40 },
        },
      },
      "1br": {
        S: {
          TP1: { weekday: 31, weekend: 41 },
          TP2: { weekday: 35, weekend: 45 },
          TP3: { weekday: 38, weekend: 47 },
          TP4: { weekday: 39, weekend: 49 },
          TP5: { weekday: 41, weekend: 52 },
          TP6: { weekday: 45, weekend: 56 },
          TP7: { weekday: 61, weekend: 70 },
        },
        L: {
          TP1: { weekday: 39, weekend: 48 },
          TP2: { weekday: 44, weekend: 54 },
          TP3: { weekday: 46, weekend: 57 },
          TP4: { weekday: 48, weekend: 59 },
          TP5: { weekday: 51, weekend: 62 },
          TP6: { weekday: 56, weekend: 67 },
          TP7: { weekday: 74, weekend: 83 },
        },
      },
      "2br": {
        S: {
          TP1: { weekday: 44, weekend: 55 },
          TP2: { weekday: 50, weekend: 60 },
          TP3: { weekday: 53, weekend: 64 },
          TP4: { weekday: 55, weekend: 66 },
          TP5: { weekday: 58, weekend: 69 },
          TP6: { weekday: 63, weekend: 75 },
          TP7: { weekday: 86, weekend: 97 },
        },
        L: {
          TP1: { weekday: 54, weekend: 65 },
          TP2: { weekday: 60, weekend: 71 },
          TP3: { weekday: 64, weekend: 75 },
          TP4: { weekday: 66, weekend: 77 },
          TP5: { weekday: 69, weekend: 82 },
          TP6: { weekday: 77, weekend: 89 },
          TP7: { weekday: 102, weekend: 115 },
        },
      },
      "3br": {
        L: {
          TP1: { weekday: 111, weekend: 131 },
          TP2: { weekday: 121, weekend: 139 },
          TP3: { weekday: 130, weekend: 148 },
          TP4: { weekday: 133, weekend: 154 },
          TP5: { weekday: 142, weekend: 166 },
          TP6: { weekday: 155, weekend: 183 },
          TP7: { weekday: 198, weekend: 225 },
        },
      },
    },
    OKW: {
      studio: {
        STD: {
          TP1: { weekday: 10, weekend: 12 },
          TP2: { weekday: 11, weekend: 13 },
          TP3: { weekday: 12, weekend: 13 },
          TP4: { weekday: 12, weekend: 14 },
          TP5: { weekday: 13, weekend: 15 },
          TP6: { weekday: 14, weekend: 17 },
          TP7: { weekday: 19, weekend: 21 },
        },
      },
      "1br": {
        STD: {
          TP1: { weekday: 18, weekend: 21 },
          TP2: { weekday: 20, weekend: 23 },
          TP3: { weekday: 21, weekend: 24 },
          TP4: { weekday: 21, weekend: 25 },
          TP5: { weekday: 22, weekend: 26 },
          TP6: { weekday: 25, weekend: 28 },
          TP7: { weekday: 33, weekend: 37 },
        },
      },
      "2br": {
        STD: {
          TP1: { weekday: 26, weekend: 30 },
          TP2: { weekday: 29, weekend: 33 },
          TP3: { weekday: 30, weekend: 35 },
          TP4: { weekday: 31, weekend: 36 },
          TP5: { weekday: 33, weekend: 38 },
          TP6: { weekday: 36, weekend: 42 },
          TP7: { weekday: 47, weekend: 54 },
        },
      },
      "3br": {
        STD: {
          TP1: { weekday: 52, weekend: 61 },
          TP2: { weekday: 57, weekend: 66 },
          TP3: { weekday: 59, weekend: 69 },
          TP4: { weekday: 61, weekend: 70 },
          TP5: { weekday: 65, weekend: 75 },
          TP6: { weekday: 72, weekend: 83 },
          TP7: { weekday: 91, weekend: 104 },
        },
      },
    },
    PVB: {
      deluxe_studio: {
        S: {
          TP1: { weekday: 14, weekend: 17 },
          TP2: { weekday: 17, weekend: 20 },
          TP3: { weekday: 19, weekend: 22 },
          TP4: { weekday: 20, weekend: 23 },
          TP5: { weekday: 22, weekend: 25 },
          TP6: { weekday: 25, weekend: 28 },
          TP7: { weekday: 34, weekend: 36 },
        },
        P: {
          TP1: { weekday: 19, weekend: 24 },
          TP2: { weekday: 22, weekend: 24 },
          TP3: { weekday: 22, weekend: 26 },
          TP4: { weekday: 24, weekend: 27 },
          TP5: { weekday: 25, weekend: 30 },
          TP6: { weekday: 28, weekend: 32 },
          TP7: { weekday: 41, weekend: 43 },
        },
      },
      bungalow_2br: {
        P: {
          TP1: { weekday: 112, weekend: 132 },
          TP2: { weekday: 120, weekend: 138 },
          TP3: { weekday: 128, weekend: 147 },
          TP4: { weekday: 136, weekend: 157 },
          TP5: { weekday: 150, weekend: 172 },
          TP6: { weekday: 162, weekend: 185 },
          TP7: { weekday: 199, weekend: 226 },
        },
      },
      tower_duo: {
        S: {
          TP1: { weekday: 12, weekend: 14 },
          TP2: { weekday: 14, weekend: 16 },
          TP3: { weekday: 16, weekend: 18 },
          TP4: { weekday: 17, weekend: 19 },
          TP5: { weekday: 18, weekend: 20 },
          TP6: { weekday: 20, weekend: 23 },
          TP7: { weekday: 27, weekend: 30 },
        },
        P: {
          TP1: { weekday: 16, weekend: 19 },
          TP2: { weekday: 18, weekend: 20 },
          TP3: { weekday: 19, weekend: 21 },
          TP4: { weekday: 20, weekend: 22 },
          TP5: { weekday: 21, weekend: 24 },
          TP6: { weekday: 23, weekend: 26 },
          TP7: { weekday: 32, weekend: 36 },
        },
        PM: {
          TP1: { weekday: 19, weekend: 23 },
          TP2: { weekday: 21, weekend: 24 },
          TP3: { weekday: 22, weekend: 26 },
          TP4: { weekday: 24, weekend: 27 },
          TP5: { weekday: 26, weekend: 29 },
          TP6: { weekday: 28, weekend: 32 },
          TP7: { weekday: 39, weekend: 43 },
        },
      },
      tower_studio: {
        S: {
          TP1: { weekday: 14, weekend: 17 },
          TP2: { weekday: 17, weekend: 20 },
          TP3: { weekday: 19, weekend: 22 },
          TP4: { weekday: 20, weekend: 23 },
          TP5: { weekday: 22, weekend: 25 },
          TP6: { weekday: 25, weekend: 28 },
          TP7: { weekday: 34, weekend: 36 },
        },
        P: {
          TP1: { weekday: 19, weekend: 24 },
          TP2: { weekday: 22, weekend: 24 },
          TP3: { weekday: 22, weekend: 26 },
          TP4: { weekday: 24, weekend: 27 },
          TP5: { weekday: 25, weekend: 30 },
          TP6: { weekday: 28, weekend: 32 },
          TP7: { weekday: 41, weekend: 43 },
        },
        TP: {
          TP1: { weekday: 24, weekend: 29 },
          TP2: { weekday: 26, weekend: 30 },
          TP3: { weekday: 27, weekend: 32 },
          TP4: { weekday: 29, weekend: 33 },
          TP5: { weekday: 31, weekend: 36 },
          TP6: { weekday: 34, weekend: 38 },
          TP7: { weekday: 48, weekend: 53 },
        },
      },
      tower_1br: {
        S: {
          TP1: { weekday: 28, weekend: 34 },
          TP2: { weekday: 34, weekend: 40 },
          TP3: { weekday: 38, weekend: 44 },
          TP4: { weekday: 40, weekend: 46 },
          TP5: { weekday: 44, weekend: 50 },
          TP6: { weekday: 48, weekend: 56 },
          TP7: { weekday: 68, weekend: 78 },
        },
        P: {
          TP1: { weekday: 38, weekend: 46 },
          TP2: { weekday: 42, weekend: 48 },
          TP3: { weekday: 47, weekend: 52 },
          TP4: { weekday: 48, weekend: 54 },
          TP5: { weekday: 53, weekend: 60 },
          TP6: { weekday: 54, weekend: 64 },
          TP7: { weekday: 78, weekend: 86 },
        },
        TP: {
          TP1: { weekday: 42, weekend: 51 },
          TP2: { weekday: 47, weekend: 54 },
          TP3: { weekday: 53, weekend: 61 },
          TP4: { weekday: 54, weekend: 63 },
          TP5: { weekday: 58, weekend: 67 },
          TP6: { weekday: 65, weekend: 75 },
          TP7: { weekday: 89, weekend: 98 },
        },
      },
      tower_2br: {
        S: {
          TP1: { weekday: 44, weekend: 53 },
          TP2: { weekday: 48, weekend: 56 },
          TP3: { weekday: 54, weekend: 62 },
          TP4: { weekday: 56, weekend: 65 },
          TP5: { weekday: 62, weekend: 70 },
          TP6: { weekday: 68, weekend: 79 },
          TP7: { weekday: 92, weekend: 105 },
        },
        P: {
          TP1: { weekday: 54, weekend: 65 },
          TP2: { weekday: 60, weekend: 68 },
          TP3: { weekday: 62, weekend: 73 },
          TP4: { weekday: 68, weekend: 79 },
          TP5: { weekday: 73, weekend: 84 },
          TP6: { weekday: 79, weekend: 90 },
          TP7: { weekday: 109, weekend: 125 },
        },
        TP: {
          TP1: { weekday: 68, weekend: 79 },
          TP2: { weekday: 71, weekend: 84 },
          TP3: { weekday: 76, weekend: 92 },
          TP4: { weekday: 82, weekend: 96 },
          TP5: { weekday: 90, weekend: 101 },
          TP6: { weekday: 96, weekend: 110 },
          TP7: { weekday: 128, weekend: 149 },
        },
      },
      tower_penthouse: {
        P: {
          TP1: { weekday: 86, weekend: 104 },
          TP2: { weekday: 95, weekend: 112 },
          TP3: { weekday: 102, weekend: 119 },
          TP4: { weekday: 108, weekend: 122 },
          TP5: { weekday: 115, weekend: 132 },
          TP6: { weekday: 126, weekend: 144 },
          TP7: { weekday: 178, weekend: 198 },
        },
        TP: {
          TP1: { weekday: 108, weekend: 128 },
          TP2: { weekday: 117, weekend: 135 },
          TP3: { weekday: 122, weekend: 144 },
          TP4: { weekday: 128, weekend: 152 },
          TP5: { weekday: 140, weekend: 162 },
          TP6: { weekday: 153, weekend: 179 },
          TP7: { weekday: 197, weekend: 226 },
        },
      },
    },
    SSR: {
      studio: {
        S: {
          TP1: { weekday: 9, weekend: 14 },
          TP2: { weekday: 12, weekend: 15 },
          TP3: { weekday: 13, weekend: 15 },
          TP4: { weekday: 14, weekend: 16 },
          TP5: { weekday: 14, weekend: 17 },
          TP6: { weekday: 15, weekend: 18 },
          TP7: { weekday: 21, weekend: 25 },
        },
        P: {
          TP1: { weekday: 11, weekend: 16 },
          TP2: { weekday: 13, weekend: 17 },
          TP3: { weekday: 15, weekend: 18 },
          TP4: { weekday: 15, weekend: 19 },
          TP5: { weekday: 16, weekend: 19 },
          TP6: { weekday: 17, weekend: 21 },
          TP7: { weekday: 23, weekend: 28 },
        },
      },
      "1br": {
        S: {
          TP1: { weekday: 21, weekend: 27 },
          TP2: { weekday: 24, weekend: 29 },
          TP3: { weekday: 26, weekend: 31 },
          TP4: { weekday: 28, weekend: 33 },
          TP5: { weekday: 30, weekend: 34 },
          TP6: { weekday: 32, weekend: 36 },
          TP7: { weekday: 43, weekend: 47 },
        },
        P: {
          TP1: { weekday: 24, weekend: 30 },
          TP2: { weekday: 28, weekend: 34 },
          TP3: { weekday: 30, weekend: 35 },
          TP4: { weekday: 32, weekend: 37 },
          TP5: { weekday: 34, weekend: 39 },
          TP6: { weekday: 38, weekend: 42 },
          TP7: { weekday: 49, weekend: 53 },
        },
      },
      "2br": {
        S: {
          TP1: { weekday: 27, weekend: 34 },
          TP2: { weekday: 32, weekend: 36 },
          TP3: { weekday: 35, weekend: 39 },
          TP4: { weekday: 36, weekend: 39 },
          TP5: { weekday: 37, weekend: 45 },
          TP6: { weekday: 41, weekend: 47 },
          TP7: { weekday: 56, weekend: 63 },
        },
        P: {
          TP1: { weekday: 35, weekend: 39 },
          TP2: { weekday: 38, weekend: 42 },
          TP3: { weekday: 39, weekend: 45 },
          TP4: { weekday: 41, weekend: 50 },
          TP5: { weekday: 46, weekend: 54 },
          TP6: { weekday: 49, weekend: 59 },
          TP7: { weekday: 67, weekend: 75 },
        },
      },
      "3br": {
        S: {
          TP1: { weekday: 63, weekend: 72 },
          TP2: { weekday: 68, weekend: 78 },
          TP3: { weekday: 74, weekend: 83 },
          TP4: { weekday: 77, weekend: 86 },
          TP5: { weekday: 86, weekend: 97 },
          TP6: { weekday: 93, weekend: 107 },
          TP7: { weekday: 113, weekend: 127 },
        },
        P: {
          TP1: { weekday: 74, weekend: 84 },
          TP2: { weekday: 76, weekend: 89 },
          TP3: { weekday: 82, weekend: 94 },
          TP4: { weekday: 87, weekend: 98 },
          TP5: { weekday: 98, weekend: 112 },
          TP6: { weekday: 108, weekend: 125 },
          TP7: { weekday: 131, weekend: 139 },
        },
      },
      treehouse: {
        STD: {
          TP1: { weekday: 38, weekend: 43 },
          TP2: { weekday: 41, weekend: 45 },
          TP3: { weekday: 43, weekend: 48 },
          TP4: { weekday: 44, weekend: 51 },
          TP5: { weekday: 47, weekend: 52 },
          TP6: { weekday: 51, weekend: 58 },
          TP7: { weekday: 66, weekend: 76 },
        },
      },
    },
    RIV: {
      tower_studio: {
        STD: {
          TP1: { weekday: 10, weekend: 13 },
          TP2: { weekday: 12, weekend: 14 },
          TP3: { weekday: 13, weekend: 15 },
          TP4: { weekday: 14, weekend: 17 },
          TP5: { weekday: 16, weekend: 18 },
          TP6: { weekday: 17, weekend: 20 },
          TP7: { weekday: 24, weekend: 27 },
        },
      },
      studio: {
        S: {
          TP1: { weekday: 14, weekend: 17 },
          TP2: { weekday: 16, weekend: 18 },
          TP3: { weekday: 17, weekend: 19 },
          TP4: { weekday: 17, weekend: 20 },
          TP5: { weekday: 19, weekend: 22 },
          TP6: { weekday: 21, weekend: 25 },
          TP7: { weekday: 29, weekend: 32 },
        },
        P: {
          TP1: { weekday: 17, weekend: 22 },
          TP2: { weekday: 19, weekend: 24 },
          TP3: { weekday: 20, weekend: 26 },
          TP4: { weekday: 21, weekend: 26 },
          TP5: { weekday: 24, weekend: 28 },
          TP6: { weekday: 27, weekend: 30 },
          TP7: { weekday: 35, weekend: 40 },
        },
      },
      "1br": {
        S: {
          TP1: { weekday: 29, weekend: 34 },
          TP2: { weekday: 34, weekend: 39 },
          TP3: { weekday: 35, weekend: 42 },
          TP4: { weekday: 36, weekend: 48 },
          TP5: { weekday: 39, weekend: 50 },
          TP6: { weekday: 43, weekend: 53 },
          TP7: { weekday: 58, weekend: 68 },
        },
        P: {
          TP1: { weekday: 36, weekend: 46 },
          TP2: { weekday: 41, weekend: 50 },
          TP3: { weekday: 44, weekend: 54 },
          TP4: { weekday: 48, weekend: 58 },
          TP5: { weekday: 49, weekend: 59 },
          TP6: { weekday: 53, weekend: 63 },
          TP7: { weekday: 68, weekend: 81 },
        },
      },
      "2br": {
        S: {
          TP1: { weekday: 38, weekend: 47 },
          TP2: { weekday: 44, weekend: 49 },
          TP3: { weekday: 47, weekend: 53 },
          TP4: { weekday: 50, weekend: 59 },
          TP5: { weekday: 52, weekend: 63 },
          TP6: { weekday: 56, weekend: 65 },
          TP7: { weekday: 77, weekend: 90 },
        },
        P: {
          TP1: { weekday: 47, weekend: 58 },
          TP2: { weekday: 52, weekend: 61 },
          TP3: { weekday: 55, weekend: 67 },
          TP4: { weekday: 59, weekend: 70 },
          TP5: { weekday: 65, weekend: 74 },
          TP6: { weekday: 71, weekend: 79 },
          TP7: { weekday: 88, weekend: 103 },
        },
      },
      "3br": {
        STD: {
          TP1: { weekday: 103, weekend: 120 },
          TP2: { weekday: 108, weekend: 127 },
          TP3: { weekday: 116, weekend: 135 },
          TP4: { weekday: 120, weekend: 141 },
          TP5: { weekday: 129, weekend: 154 },
          TP6: { weekday: 140, weekend: 166 },
          TP7: { weekday: 172, weekend: 204 },
        },
      },
    },
    CCK: {
      studio: {
        STD: {
          TP1: { weekday: 13, weekend: 15 },
          TP2: { weekday: 15, weekend: 16 },
          TP3: { weekday: 16, weekend: 17 },
          TP4: { weekday: 17, weekend: 18 },
          TP5: { weekday: 17, weekend: 19 },
          TP6: { weekday: 18, weekend: 21 },
          TP7: { weekday: 25, weekend: 28 },
        },
      },
      "1br": {
        STD: {
          TP1: { weekday: 25, weekend: 30 },
          TP2: { weekday: 30, weekend: 34 },
          TP3: { weekday: 33, weekend: 36 },
          TP4: { weekday: 34, weekend: 38 },
          TP5: { weekday: 35, weekend: 42 },
          TP6: { weekday: 37, weekend: 43 },
          TP7: { weekday: 48, weekend: 54 },
        },
      },
      "2br": {
        STD: {
          TP1: { weekday: 35, weekend: 40 },
          TP2: { weekday: 38, weekend: 44 },
          TP3: { weekday: 41, weekend: 47 },
          TP4: { weekday: 43, weekend: 49 },
          TP5: { weekday: 45, weekend: 52 },
          TP6: { weekday: 50, weekend: 56 },
          TP7: { weekday: 64, weekend: 72 },
        },
      },
      "3br": {
        STD: {
          TP1: { weekday: 91, weekend: 107 },
          TP2: { weekday: 101, weekend: 116 },
          TP3: { weekday: 108, weekend: 124 },
          TP4: { weekday: 113, weekend: 130 },
          TP5: { weekday: 120, weekend: 137 },
          TP6: { weekday: 128, weekend: 147 },
          TP7: { weekday: 176, weekend: 206 },
        },
      },
      cabin: {
        STD: {
          TP1: { weekday: 84, weekend: 100 },
          TP2: { weekday: 94, weekend: 109 },
          TP3: { weekday: 101, weekend: 117 },
          TP4: { weekday: 107, weekend: 121 },
          TP5: { weekday: 113, weekend: 131 },
          TP6: { weekday: 124, weekend: 143 },
          TP7: { weekday: 171, weekend: 196 },
        },
      },
    },
  },
  fP = {
    ...vw,
    AKV: {
      studio: {
        V: {
          TP1: { weekday: 8, weekend: 11 },
          TP2: { weekday: 9, weekend: 12 },
          TP3: { weekday: 9, weekend: 13 },
          TP4: { weekday: 10, weekend: 13 },
          TP5: { weekday: 11, weekend: 14 },
          TP6: { weekday: 13, weekend: 16 },
          TP7: { weekday: 17, weekend: 19 },
        },
        S: {
          TP1: { weekday: 10, weekend: 13 },
          TP2: { weekday: 12, weekend: 14 },
          TP3: { weekday: 13, weekend: 15 },
          TP4: { weekday: 14, weekend: 15 },
          TP5: { weekday: 15, weekend: 16 },
          TP6: { weekday: 16, weekend: 18 },
          TP7: { weekday: 21, weekend: 23 },
        },
        SV: {
          TP1: { weekday: 12, weekend: 15 },
          TP2: { weekday: 14, weekend: 16 },
          TP3: { weekday: 15, weekend: 17 },
          TP4: { weekday: 15, weekend: 18 },
          TP5: { weekday: 17, weekend: 19 },
          TP6: { weekday: 17, weekend: 21 },
          TP7: { weekday: 26, weekend: 29 },
        },
        C: {
          TP1: { weekday: 20, weekend: 24 },
          TP2: { weekday: 23, weekend: 26 },
          TP3: { weekday: 23, weekend: 26 },
          TP4: { weekday: 25, weekend: 27 },
          TP5: { weekday: 26, weekend: 29 },
          TP6: { weekday: 27, weekend: 31 },
          TP7: { weekday: 37, weekend: 40 },
        },
      },
      "1br": {
        V: {
          TP1: { weekday: 19, weekend: 23 },
          TP2: { weekday: 21, weekend: 23 },
          TP3: { weekday: 23, weekend: 24 },
          TP4: { weekday: 23, weekend: 25 },
          TP5: { weekday: 25, weekend: 27 },
          TP6: { weekday: 26, weekend: 29 },
          TP7: { weekday: 34, weekend: 39 },
        },
        S: {
          TP1: { weekday: 20, weekend: 25 },
          TP2: { weekday: 24, weekend: 28 },
          TP3: { weekday: 26, weekend: 29 },
          TP4: { weekday: 27, weekend: 30 },
          TP5: { weekday: 29, weekend: 32 },
          TP6: { weekday: 32, weekend: 35 },
          TP7: { weekday: 38, weekend: 45 },
        },
        SV: {
          TP1: { weekday: 26, weekend: 30 },
          TP2: { weekday: 30, weekend: 33 },
          TP3: { weekday: 32, weekend: 35 },
          TP4: { weekday: 33, weekend: 35 },
          TP5: { weekday: 34, weekend: 39 },
          TP6: { weekday: 37, weekend: 41 },
          TP7: { weekday: 45, weekend: 51 },
        },
        C: {
          TP1: { weekday: 41, weekend: 46 },
          TP2: { weekday: 43, weekend: 48 },
          TP3: { weekday: 45, weekend: 51 },
          TP4: { weekday: 47, weekend: 51 },
          TP5: { weekday: 50, weekend: 57 },
          TP6: { weekday: 54, weekend: 61 },
          TP7: { weekday: 67, weekend: 74 },
        },
      },
      "2br": {
        V: {
          TP1: { weekday: 25, weekend: 32 },
          TP2: { weekday: 28, weekend: 34 },
          TP3: { weekday: 31, weekend: 35 },
          TP4: { weekday: 32, weekend: 36 },
          TP5: { weekday: 35, weekend: 40 },
          TP6: { weekday: 37, weekend: 43 },
          TP7: { weekday: 51, weekend: 56 },
        },
        S: {
          TP1: { weekday: 28, weekend: 34 },
          TP2: { weekday: 31, weekend: 37 },
          TP3: { weekday: 32, weekend: 39 },
          TP4: { weekday: 35, weekend: 40 },
          TP5: { weekday: 36, weekend: 44 },
          TP6: { weekday: 40, weekend: 48 },
          TP7: { weekday: 55, weekend: 60 },
        },
        SV: {
          TP1: { weekday: 35, weekend: 43 },
          TP2: { weekday: 39, weekend: 47 },
          TP3: { weekday: 42, weekend: 50 },
          TP4: { weekday: 43, weekend: 50 },
          TP5: { weekday: 47, weekend: 57 },
          TP6: { weekday: 52, weekend: 61 },
          TP7: { weekday: 70, weekend: 76 },
        },
        C: {
          TP1: { weekday: 55, weekend: 62 },
          TP2: { weekday: 59, weekend: 68 },
          TP3: { weekday: 63, weekend: 70 },
          TP4: { weekday: 65, weekend: 72 },
          TP5: { weekday: 68, weekend: 79 },
          TP6: { weekday: 74, weekend: 87 },
          TP7: { weekday: 99, weekend: 109 },
        },
      },
      "3br": {
        S: {
          TP1: { weekday: 68, weekend: 78 },
          TP2: { weekday: 73, weekend: 82 },
          TP3: { weekday: 78, weekend: 88 },
          TP4: { weekday: 81, weekend: 91 },
          TP5: { weekday: 88, weekend: 100 },
          TP6: { weekday: 97, weekend: 111 },
          TP7: { weekday: 117, weekend: 135 },
        },
        SV: {
          TP1: { weekday: 73, weekend: 85 },
          TP2: { weekday: 79, weekend: 89 },
          TP3: { weekday: 86, weekend: 96 },
          TP4: { weekday: 89, weekend: 100 },
          TP5: { weekday: 96, weekend: 110 },
          TP6: { weekday: 107, weekend: 121 },
          TP7: { weekday: 127, weekend: 144 },
        },
      },
    },
    PVB: {
      deluxe_studio: {
        S: {
          TP1: { weekday: 15, weekend: 18 },
          TP2: { weekday: 17, weekend: 20 },
          TP3: { weekday: 19, weekend: 22 },
          TP4: { weekday: 20, weekend: 23 },
          TP5: { weekday: 22, weekend: 25 },
          TP6: { weekday: 25, weekend: 28 },
          TP7: { weekday: 34, weekend: 36 },
        },
        P: {
          TP1: { weekday: 20, weekend: 24 },
          TP2: { weekday: 22, weekend: 24 },
          TP3: { weekday: 22, weekend: 26 },
          TP4: { weekday: 24, weekend: 27 },
          TP5: { weekday: 25, weekend: 30 },
          TP6: { weekday: 28, weekend: 32 },
          TP7: { weekday: 41, weekend: 43 },
        },
      },
      bungalow_2br: {
        P: {
          TP1: { weekday: 114, weekend: 134 },
          TP2: { weekday: 122, weekend: 140 },
          TP3: { weekday: 128, weekend: 147 },
          TP4: { weekday: 136, weekend: 157 },
          TP5: { weekday: 150, weekend: 172 },
          TP6: { weekday: 162, weekend: 185 },
          TP7: { weekday: 199, weekend: 226 },
        },
      },
      tower_duo: {
        S: {
          TP1: { weekday: 13, weekend: 15 },
          TP2: { weekday: 14, weekend: 16 },
          TP3: { weekday: 16, weekend: 18 },
          TP4: { weekday: 17, weekend: 19 },
          TP5: { weekday: 18, weekend: 20 },
          TP6: { weekday: 20, weekend: 23 },
          TP7: { weekday: 27, weekend: 30 },
        },
        P: {
          TP1: { weekday: 17, weekend: 20 },
          TP2: { weekday: 18, weekend: 20 },
          TP3: { weekday: 19, weekend: 21 },
          TP4: { weekday: 20, weekend: 22 },
          TP5: { weekday: 21, weekend: 24 },
          TP6: { weekday: 23, weekend: 26 },
          TP7: { weekday: 32, weekend: 36 },
        },
        PM: {
          TP1: { weekday: 20, weekend: 24 },
          TP2: { weekday: 21, weekend: 24 },
          TP3: { weekday: 22, weekend: 26 },
          TP4: { weekday: 24, weekend: 27 },
          TP5: { weekday: 26, weekend: 29 },
          TP6: { weekday: 28, weekend: 32 },
          TP7: { weekday: 39, weekend: 43 },
        },
      },
      tower_studio: {
        S: {
          TP1: { weekday: 18, weekend: 18 },
          TP2: { weekday: 17, weekend: 20 },
          TP3: { weekday: 19, weekend: 22 },
          TP4: { weekday: 20, weekend: 23 },
          TP5: { weekday: 22, weekend: 25 },
          TP6: { weekday: 25, weekend: 28 },
          TP7: { weekday: 34, weekend: 36 },
        },
        P: {
          TP1: { weekday: 20, weekend: 24 },
          TP2: { weekday: 22, weekend: 24 },
          TP3: { weekday: 22, weekend: 26 },
          TP4: { weekday: 24, weekend: 27 },
          TP5: { weekday: 25, weekend: 30 },
          TP6: { weekday: 28, weekend: 32 },
          TP7: { weekday: 41, weekend: 43 },
        },
        TP: {
          TP1: { weekday: 25, weekend: 30 },
          TP2: { weekday: 26, weekend: 30 },
          TP3: { weekday: 27, weekend: 32 },
          TP4: { weekday: 29, weekend: 33 },
          TP5: { weekday: 31, weekend: 36 },
          TP6: { weekday: 34, weekend: 39 },
          TP7: { weekday: 48, weekend: 53 },
        },
      },
      tower_1br: {
        S: {
          TP1: { weekday: 30, weekend: 36 },
          TP2: { weekday: 34, weekend: 40 },
          TP3: { weekday: 38, weekend: 44 },
          TP4: { weekday: 40, weekend: 46 },
          TP5: { weekday: 44, weekend: 50 },
          TP6: { weekday: 48, weekend: 56 },
          TP7: { weekday: 68, weekend: 78 },
        },
        P: {
          TP1: { weekday: 39, weekend: 47 },
          TP2: { weekday: 42, weekend: 48 },
          TP3: { weekday: 47, weekend: 52 },
          TP4: { weekday: 48, weekend: 54 },
          TP5: { weekday: 53, weekend: 60 },
          TP6: { weekday: 54, weekend: 64 },
          TP7: { weekday: 78, weekend: 86 },
        },
        TP: {
          TP1: { weekday: 44, weekend: 53 },
          TP2: { weekday: 47, weekend: 54 },
          TP3: { weekday: 53, weekend: 61 },
          TP4: { weekday: 54, weekend: 63 },
          TP5: { weekday: 58, weekend: 67 },
          TP6: { weekday: 65, weekend: 75 },
          TP7: { weekday: 89, weekend: 98 },
        },
      },
      tower_2br: {
        S: {
          TP1: { weekday: 46, weekend: 55 },
          TP2: { weekday: 49, weekend: 57 },
          TP3: { weekday: 54, weekend: 62 },
          TP4: { weekday: 56, weekend: 65 },
          TP5: { weekday: 62, weekend: 70 },
          TP6: { weekday: 68, weekend: 79 },
          TP7: { weekday: 92, weekend: 105 },
        },
        P: {
          TP1: { weekday: 56, weekend: 67 },
          TP2: { weekday: 61, weekend: 69 },
          TP3: { weekday: 62, weekend: 73 },
          TP4: { weekday: 68, weekend: 79 },
          TP5: { weekday: 73, weekend: 84 },
          TP6: { weekday: 79, weekend: 90 },
          TP7: { weekday: 109, weekend: 125 },
        },
        TP: {
          TP1: { weekday: 70, weekend: 81 },
          TP2: { weekday: 72, weekend: 85 },
          TP3: { weekday: 76, weekend: 90 },
          TP4: { weekday: 82, weekend: 96 },
          TP5: { weekday: 90, weekend: 101 },
          TP6: { weekday: 96, weekend: 110 },
          TP7: { weekday: 128, weekend: 149 },
        },
      },
      tower_penthouse: {
        P: {
          TP1: { weekday: 88, weekend: 105 },
          TP2: { weekday: 96, weekend: 113 },
          TP3: { weekday: 102, weekend: 119 },
          TP4: { weekday: 108, weekend: 122 },
          TP5: { weekday: 115, weekend: 132 },
          TP6: { weekday: 126, weekend: 144 },
          TP7: { weekday: 178, weekend: 198 },
        },
        TP: {
          TP1: { weekday: 110, weekend: 129 },
          TP2: { weekday: 118, weekend: 136 },
          TP3: { weekday: 122, weekend: 144 },
          TP4: { weekday: 128, weekend: 152 },
          TP5: { weekday: 140, weekend: 162 },
          TP6: { weekday: 153, weekend: 179 },
          TP7: { weekday: 197, weekend: 226 },
        },
      },
    },
  },
  pP = {
    AUL: {
      hotel: {
        S: {
          P1: { weekday: 16, weekend: 16 },
          P2: { weekday: 17, weekend: 17 },
          P3: { weekday: 18, weekend: 18 },
          P4: { weekday: 21, weekend: 21 },
        },
      },
      studio: {
        S: {
          P1: { weekday: 17, weekend: 17 },
          P2: { weekday: 19, weekend: 19 },
          P3: { weekday: 22, weekend: 22 },
          P4: { weekday: 24, weekend: 24 },
        },
        I: {
          P1: { weekday: 19, weekend: 19 },
          P2: { weekday: 21, weekend: 21 },
          P3: { weekday: 25, weekend: 25 },
          P4: { weekday: 27, weekend: 27 },
        },
        P: {
          P1: { weekday: 23, weekend: 23 },
          P2: { weekday: 24, weekend: 24 },
          P3: { weekday: 26, weekend: 26 },
          P4: { weekday: 29, weekend: 29 },
        },
        O: {
          P1: { weekday: 25, weekend: 25 },
          P2: { weekday: 26, weekend: 26 },
          P3: { weekday: 29, weekend: 29 },
          P4: { weekday: 31, weekend: 31 },
        },
      },
      "1br": {
        S: {
          P1: { weekday: 34, weekend: 34 },
          P2: { weekday: 37, weekend: 37 },
          P3: { weekday: 44, weekend: 44 },
          P4: { weekday: 46, weekend: 46 },
        },
        I: {
          P1: { weekday: 35, weekend: 35 },
          P2: { weekday: 44, weekend: 44 },
          P3: { weekday: 46, weekend: 46 },
          P4: { weekday: 50, weekend: 50 },
        },
        P: {
          P1: { weekday: 44, weekend: 44 },
          P2: { weekday: 46, weekend: 46 },
          P3: { weekday: 50, weekend: 50 },
          P4: { weekday: 58, weekend: 58 },
        },
        O: {
          P1: { weekday: 46, weekend: 46 },
          P2: { weekday: 50, weekend: 50 },
          P3: { weekday: 58, weekend: 58 },
          P4: { weekday: 62, weekend: 62 },
        },
      },
      "2br": {
        S: {
          P1: { weekday: 47, weekend: 47 },
          P2: { weekday: 51, weekend: 51 },
          P3: { weekday: 60, weekend: 60 },
          P4: { weekday: 64, weekend: 64 },
        },
        I: {
          P1: { weekday: 49, weekend: 49 },
          P2: { weekday: 59, weekend: 59 },
          P3: { weekday: 62, weekend: 62 },
          P4: { weekday: 71, weekend: 71 },
        },
        P: {
          P1: { weekday: 59, weekend: 59 },
          P2: { weekday: 62, weekend: 62 },
          P3: { weekday: 70, weekend: 70 },
          P4: { weekday: 79, weekend: 79 },
        },
        O: {
          P1: { weekday: 62, weekend: 62 },
          P2: { weekday: 69, weekend: 69 },
          P3: { weekday: 79, weekend: 79 },
          P4: { weekday: 84, weekend: 84 },
        },
      },
      "3br": {
        S: {
          P1: { weekday: 95, weekend: 95 },
          P2: { weekday: 103, weekend: 103 },
          P3: { weekday: 121, weekend: 121 },
          P4: { weekday: 140, weekend: 140 },
        },
        O: {
          P1: { weekday: 122, weekend: 122 },
          P2: { weekday: 134, weekend: 134 },
          P3: { weekday: 157, weekend: 157 },
          P4: { weekday: 184, weekend: 184 },
        },
      },
    },
    GCAL: {
      studio: {
        STD: {
          P1: { weekday: 17, weekend: 22 },
          P2: { weekday: 20, weekend: 24 },
          P3: { weekday: 26, weekend: 32 },
          P4: { weekday: 30, weekend: 37 },
        },
      },
      "1br": {
        STD: {
          P1: { weekday: 31, weekend: 40 },
          P2: { weekday: 39, weekend: 48 },
          P3: { weekday: 52, weekend: 64 },
          P4: { weekday: 62, weekend: 76 },
        },
      },
      "2br": {
        STD: {
          P1: { weekday: 46, weekend: 56 },
          P2: { weekday: 52, weekend: 65 },
          P3: { weekday: 70, weekend: 88 },
          P4: { weekday: 86, weekend: 108 },
        },
      },
      "3br": {
        STD: {
          P1: { weekday: 94, weekend: 119 },
          P2: { weekday: 106, weekend: 133 },
          P3: { weekday: 152, weekend: 188 },
          P4: { weekday: 182, weekend: 224 },
        },
      },
    },
    VDH: {
      duo_studio: {
        S: {
          P1: { weekday: 10, weekend: 13 },
          P2: { weekday: 12, weekend: 14 },
          P3: { weekday: 13, weekend: 15 },
          P4: { weekday: 14, weekend: 16 },
          P5: { weekday: 16, weekend: 18 },
          P6: { weekday: 16, weekend: 19 },
          P7: { weekday: 22, weekend: 25 },
        },
        P: {
          P1: { weekday: 11, weekend: 14 },
          P2: { weekday: 13, weekend: 15 },
          P3: { weekday: 14, weekend: 17 },
          P4: { weekday: 15, weekend: 17 },
          P5: { weekday: 18, weekend: 20 },
          P6: { weekday: 18, weekend: 21 },
          P7: { weekday: 24, weekend: 27 },
        },
      },
      studio: {
        S: {
          P1: { weekday: 13, weekend: 16 },
          P2: { weekday: 15, weekend: 18 },
          P3: { weekday: 17, weekend: 20 },
          P4: { weekday: 20, weekend: 23 },
          P5: { weekday: 23, weekend: 26 },
          P6: { weekday: 24, weekend: 27 },
          P7: { weekday: 28, weekend: 31 },
        },
        P: {
          P1: { weekday: 15, weekend: 19 },
          P2: { weekday: 18, weekend: 22 },
          P3: { weekday: 20, weekend: 24 },
          P4: { weekday: 23, weekend: 26 },
          P5: { weekday: 26, weekend: 29 },
          P6: { weekday: 27, weekend: 30 },
          P7: { weekday: 31, weekend: 34 },
        },
      },
      garden_duo: {
        GR: {
          P1: { weekday: 12, weekend: 15 },
          P2: { weekday: 14, weekend: 17 },
          P3: { weekday: 16, weekend: 19 },
          P4: { weekday: 17, weekend: 20 },
          P5: { weekday: 21, weekend: 23 },
          P6: { weekday: 21, weekend: 24 },
          P7: { weekday: 26, weekend: 30 },
        },
      },
      garden_studio: {
        GR: {
          P1: { weekday: 19, weekend: 23 },
          P2: { weekday: 21, weekend: 25 },
          P3: { weekday: 24, weekend: 28 },
          P4: { weekday: 28, weekend: 32 },
          P5: { weekday: 31, weekend: 34 },
          P6: { weekday: 31, weekend: 35 },
          P7: { weekday: 37, weekend: 41 },
        },
      },
      "1br": {
        P: {
          P1: { weekday: 30, weekend: 37 },
          P2: { weekday: 33, weekend: 40 },
          P3: { weekday: 36, weekend: 42 },
          P4: { weekday: 40, weekend: 46 },
          P5: { weekday: 42, weekend: 48 },
          P6: { weekday: 42, weekend: 50 },
          P7: { weekday: 54, weekend: 62 },
        },
      },
      "2br": {
        P: {
          P1: { weekday: 43, weekend: 53 },
          P2: { weekday: 49, weekend: 59 },
          P3: { weekday: 52, weekend: 61 },
          P4: { weekday: 60, weekend: 69 },
          P5: { weekday: 65, weekend: 73 },
          P6: { weekday: 65, weekend: 75 },
          P7: { weekday: 82, weekend: 92 },
        },
      },
      "3br": {
        P: {
          P1: { weekday: 96, weekend: 118 },
          P2: { weekday: 106, weekend: 128 },
          P3: { weekday: 122, weekend: 146 },
          P4: { weekday: 129, weekend: 152 },
          P5: { weekday: 149, weekend: 169 },
          P6: { weekday: 149, weekend: 174 },
          P7: { weekday: 174, weekend: 204 },
        },
      },
    },
    HH: {
      studio: {
        STD: {
          P1: { weekday: 6, weekend: 12 },
          P2: { weekday: 10, weekend: 15 },
          P3: { weekday: 14, weekend: 23 },
          P4: { weekday: 15, weekend: 27 },
        },
      },
      "1br": {
        STD: {
          P1: { weekday: 14, weekend: 19 },
          P2: { weekday: 20, weekend: 29 },
          P3: { weekday: 27, weekend: 44 },
          P4: { weekday: 31, weekend: 52 },
        },
      },
      "2br": {
        STD: {
          P1: { weekday: 20, weekend: 23 },
          P2: { weekday: 24, weekend: 36 },
          P3: { weekday: 33, weekend: 56 },
          P4: { weekday: 41, weekend: 66 },
        },
      },
      "3br": {
        STD: {
          P1: { weekday: 27, weekend: 39 },
          P2: { weekday: 47, weekend: 60 },
          P3: { weekday: 59, weekend: 95 },
          P4: { weekday: 71, weekend: 111 },
        },
      },
    },
    VB: {
      inn_gv: {
        GV: {
          P1: { weekday: 10, weekend: 16 },
          P2: { weekday: 10, weekend: 17 },
          P3: { weekday: 14, weekend: 17 },
          P4: { weekday: 15, weekend: 20 },
          P5: { weekday: 21, weekend: 27 },
        },
        OV: {
          P1: { weekday: 12, weekend: 17 },
          P2: { weekday: 13, weekend: 18 },
          P3: { weekday: 16, weekend: 19 },
          P4: { weekday: 17, weekend: 21 },
          P5: { weekday: 23, weekend: 29 },
        },
      },
      studio: {
        STD: {
          P1: { weekday: 14, weekend: 17 },
          P2: { weekday: 15, weekend: 19 },
          P3: { weekday: 18, weekend: 21 },
          P4: { weekday: 19, weekend: 23 },
          P5: { weekday: 26, weekend: 31 },
        },
      },
      "1br": {
        STD: {
          P1: { weekday: 21, weekend: 29 },
          P2: { weekday: 24, weekend: 31 },
          P3: { weekday: 29, weekend: 37 },
          P4: { weekday: 31, weekend: 40 },
          P5: { weekday: 43, weekend: 53 },
        },
      },
      "2br": {
        STD: {
          P1: { weekday: 30, weekend: 39 },
          P2: { weekday: 33, weekend: 42 },
          P3: { weekday: 36, weekend: 47 },
          P4: { weekday: 44, weekend: 52 },
          P5: { weekday: 61, weekend: 72 },
        },
      },
      "3br": {
        STD: {
          P1: { weekday: 60, weekend: 72 },
          P2: { weekday: 61, weekend: 74 },
          P3: { weekday: 73, weekend: 88 },
          P4: { weekday: 81, weekend: 99 },
          P5: { weekday: 105, weekend: 126 },
        },
      },
    },
  },
  hP = new Set(["AUL", "GCAL", "VDH", "HH", "VB"]);
function wP(n, r, s) {
  switch (n) {
    case "AUL":
      return nP(r, s);
    case "GCAL":
      return rP(r, s);
    case "VDH":
      return iP(r, s);
    case "HH":
      return sP(r, s);
    case "VB":
      return oP(r, s);
    default:
      return "P1";
  }
}
function yP(n) {
  return n >= 2027 ? fP : vw;
}
function gw(n, r, s, a, u) {
  const d = [],
    f = new Date(a + "T12:00:00"),
    p = new Date(u + "T12:00:00"),
    m = hP.has(n),
    k = new Date(f);
  for (; k < p; ) {
    const g = k.toISOString().split("T")[0],
      P = k.getFullYear(),
      S = k.getMonth() + 1,
      E = k.getDate(),
      _ = lP(g);
    let v, x;
    if (m) (v = wP(n, S, E)), (x = pP[n]?.[r]?.[s]?.[v]);
    else {
      const b = P >= 2027 ? mw(S, E) : yw(S, E);
      (v = b), (x = yP(P)[n]?.[r]?.[s]?.[b]);
    }
    const R = x ? (_ ? x.weekend : x.weekday) : 0;
    d.push({ date: g, season: v, weekend: _, points: R, year: P }),
      k.setDate(k.getDate() + 1);
  }
  return { total: d.reduce((g, P) => g + P.points, 0), nights: d };
}
function di(n, r, s) {
  return `${n}-${String(r).padStart(2, "0")}-${String(s).padStart(2, "0")}`;
}
function Pw(n, r) {
  return new Date(n, r, 0).getDate();
}
function mP(n, r) {
  return new Date(n, r - 1, 1).getDay();
}
function Gl(n, r, s) {
  let a = r - 1 + s,
    u = n + Math.floor(a / 12);
  return (a = ((a % 12) + 12) % 12), { year: u, month: a + 1 };
}
const kP = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  vP = ["S", "M", "T", "W", "T", "F", "S"],
  xw = {
    TP1: "bg-green-900/60 text-green-300",
    TP2: "bg-lime-900/60 text-lime-300",
    TP3: "bg-yellow-900/60 text-yellow-300",
    TP4: "bg-orange-900/60 text-orange-300",
    TP5: "bg-violet-900/60 text-violet-300",
    TP6: "bg-pink-900/60 text-pink-300",
    TP7: "bg-red-900/60 text-red-300",
    P1: "bg-sky-900/60 text-sky-300",
    P2: "bg-cyan-900/60 text-cyan-300",
    P3: "bg-teal-900/60 text-teal-300",
    P4: "bg-indigo-900/60 text-indigo-300",
    P5: "bg-purple-900/60 text-purple-300",
    P6: "bg-rose-900/60 text-rose-300",
    P7: "bg-red-900/60 text-red-300",
  };
function gP({
  year: n,
  month: r,
  resortKey: s,
  roomKey: a,
  viewKey: u,
  checkIn: d,
  checkOut: f,
  hovered: p,
  today: m,
  onDayClick: k,
  onDayHover: g,
  pointsMap: P,
  isNonWDW: S,
}) {
  const E = Pw(n, r),
    _ = mP(n, r),
    v = d || "",
    x = f || p || "",
    R = [...Array(_).fill(null), ...Array.from({ length: E }, (b, D) => D + 1)];
  for (; R.length % 7 !== 0; ) R.push(null);
  return h.jsxs("div", {
    className: "flex-1",
    style: { minWidth: "260px" },
    children: [
      h.jsxs("h3", {
        className: "text-base font-bold text-foreground mb-3",
        children: [
          kP[r - 1],
          " ",
          h.jsx("span", {
            className: "text-muted-foreground font-normal",
            children: n,
          }),
        ],
      }),
      h.jsx("div", {
        className: "grid grid-cols-7 mb-1",
        children: vP.map((b, D) =>
          h.jsx(
            "div",
            {
              className:
                "text-center text-[10px] font-semibold text-muted-foreground py-1",
              children: b,
            },
            D,
          ),
        ),
      }),
      h.jsx("div", {
        className: "grid grid-cols-7 gap-1",
        children: R.map((b, D) => {
          if (b === null) return h.jsx("div", {}, `e-${D}`);
          const M = di(n, r, b),
            V = P.get(M) ?? null,
            $ = M === m,
            z = (v && x && v <= x, v),
            J = v && x && v <= x ? x : v,
            K = z && J && M > z && M < J,
            W = M === d || M === f,
            te = M === p && !f,
            Q = V !== null ? kw(M) : null;
          let ue = "";
          return (
            W
              ? (ue = "bg-primary text-primary-foreground")
              : K
                ? (ue = "bg-primary/20 text-foreground")
                : te && d
                  ? (ue = "bg-primary/15 text-foreground")
                  : V !== null &&
                    (ue = S
                      ? "bg-sky-900/40 text-foreground"
                      : (xw[Q] ?? "bg-secondary text-foreground")),
            h.jsxs(
              "button",
              {
                onClick: () => k(M),
                onMouseEnter: () => g(M),
                onMouseLeave: () => g(""),
                disabled: V === null,
                className: [
                  "flex flex-col items-center justify-center rounded-md transition-all cursor-pointer select-none",
                  "text-center h-14 w-full",
                  V === null
                    ? "opacity-25 cursor-default"
                    : "hover:ring-1 hover:ring-primary/60",
                  ue,
                  $ && !W ? "ring-1 ring-primary/50" : "",
                ].join(" "),
                children: [
                  h.jsx("span", {
                    className: `text-[10px] leading-none mb-1 ${W ? "text-primary-foreground/70" : "text-muted-foreground"}`,
                    children: b,
                  }),
                  V !== null &&
                    h.jsx("span", {
                      className: `text-sm font-bold leading-none ${W ? "text-primary-foreground" : ""}`,
                      children: V,
                    }),
                ],
              },
              M,
            )
          );
        }),
      }),
    ],
  });
}
function PP({
  resortKey: n,
  roomKey: r,
  viewKey: s,
  checkIn: a,
  checkOut: u,
  onCheckInChange: d,
  onCheckOutChange: f,
  isNonWDW: p,
}) {
  const m = new Date(),
    k = di(m.getFullYear(), m.getMonth() + 1, m.getDate()),
    [g, P] = y.useState(() => m.getFullYear()),
    [S, E] = y.useState(() => m.getMonth() + 1),
    [_, v] = y.useState(""),
    [x, R] = y.useState("in");
  y.useEffect(() => {
    if (a) {
      const K = new Date(a + "T12:00:00");
      P(K.getFullYear()), E(K.getMonth() + 1), R("out");
    }
  }, [a]);
  const b = y.useMemo(() => [0, 1, 2].map((K) => Gl(g, S, K)), [g, S]),
    D = y.useMemo(() => {
      const K = new Map();
      for (const { year: ee, month: I } of b) {
        const W = Pw(ee, I);
        for (let te = 1; te <= W; te++) {
          const Q = di(ee, I, te);
          di(ee, I, te + 1 <= W ? te + 1 : 1);
          const ue = new Date(Q + "T12:00:00");
          ue.setDate(ue.getDate() + 1);
          const oe = ue.toISOString().split("T")[0];
          try {
            const se = gw(n, r, s, Q, oe);
            se.total > 0 && K.set(Q, se.total);
          } catch {}
        }
      }
      return K;
    }, [b, n, r, s]);
  function M(K) {
    x === "in" || (a && K <= a) ? (d(K), f(""), R("out")) : (f(K), R("in"));
  }
  function V() {
    const { year: K, month: ee } = Gl(g, S, -1);
    P(K), E(ee);
  }
  function $() {
    const { year: K, month: ee } = Gl(g, S, 1);
    P(K), E(ee);
  }
  const z = a
      ? u
        ? `${a} → ${u}`
        : "Click another date to set check-out"
      : "Click a date to set check-in",
    J = b.some(({ year: K }) => K >= 2028);
  return h.jsxs("div", {
    className: "bg-card border border-border rounded-xl overflow-hidden",
    children: [
      h.jsxs("div", {
        className:
          "flex items-center justify-between px-5 py-3 border-b border-border",
        children: [
          h.jsx("p", {
            className: "text-xs text-muted-foreground",
            children: z,
          }),
          h.jsxs("div", {
            className: "flex items-center gap-1",
            children: [
              h.jsx("button", {
                onClick: V,
                className:
                  "p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground",
                "aria-label": "Previous month",
                children: h.jsx(c1, { size: 16 }),
              }),
              h.jsx("button", {
                onClick: $,
                className:
                  "p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground",
                "aria-label": "Next month",
                children: h.jsx(d1, { size: 16 }),
              }),
            ],
          }),
        ],
      }),
      J &&
        h.jsxs("div", {
          className:
            "flex items-start gap-2 px-4 py-2.5 bg-amber-500/10 border-b border-amber-500/30 text-amber-300 text-xs",
          children: [
            h.jsx("span", { className: "shrink-0 mt-0.5", children: "⚠" }),
            h.jsx("span", {
              children:
                "2028 point charts haven't been released yet — points shown for 2028 are estimates based on 2027 values and may change.",
            }),
          ],
        }),
      h.jsx("div", {
        className: "flex gap-6 px-5 py-5 overflow-x-auto min-w-0",
        children: b.map(({ year: K, month: ee }) =>
          h.jsx(
            gP,
            {
              year: K,
              month: ee,
              resortKey: n,
              roomKey: r,
              viewKey: s,
              checkIn: a,
              checkOut: u,
              hovered: _,
              today: k,
              onDayClick: M,
              onDayHover: v,
              pointsMap: D,
              isNonWDW: p,
            },
            `${K}-${ee}`,
          ),
        ),
      }),
      !p &&
        h.jsx("div", {
          className: "px-4 pb-3 flex flex-wrap gap-1.5",
          children: ["TP1", "TP2", "TP3", "TP4", "TP5", "TP6", "TP7"].map(
            (K) => {
              const ee = {
                TP1: "Adventure",
                TP2: "Choice",
                TP3: "Choice+",
                TP4: "Dream",
                TP5: "Magic",
                TP6: "Premier",
                TP7: "Premier+",
              };
              return h.jsx(
                "span",
                {
                  className: `text-[10px] px-1.5 py-0.5 rounded font-medium ${xw[K]}`,
                  children: ee[K],
                },
                K,
              );
            },
          ),
        }),
    ],
  });
}
const dt = y.forwardRef(({ className: n, ...r }, s) =>
  h.jsx("div", {
    ref: s,
    className: je(
      "shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm",
      n,
    ),
    ...r,
  }),
);
dt.displayName = "Card";
const Rn = y.forwardRef(({ className: n, ...r }, s) =>
  h.jsx("div", {
    ref: s,
    className: je("flex flex-col space-y-1.5 p-6", n),
    ...r,
  }),
);
Rn.displayName = "CardHeader";
const On = y.forwardRef(({ className: n, ...r }, s) =>
  h.jsx("div", {
    ref: s,
    className: je("text-2xl font-semibold leading-none tracking-tight", n),
    ...r,
  }),
);
On.displayName = "CardTitle";
const xP = y.forwardRef(({ className: n, ...r }, s) =>
  h.jsx("div", {
    ref: s,
    className: je("text-sm text-muted-foreground", n),
    ...r,
  }),
);
xP.displayName = "CardDescription";
const yt = y.forwardRef(({ className: n, ...r }, s) =>
  h.jsx("div", { ref: s, className: je("p-6 pt-0", n), ...r }),
);
yt.displayName = "CardContent";
const TP = y.forwardRef(({ className: n, ...r }, s) =>
  h.jsx("div", {
    ref: s,
    className: je("flex items-center p-6 pt-0", n),
    ...r,
  }),
);
TP.displayName = "CardFooter";
var SP = Symbol.for("react.lazy"),
  Pi = Ri[" use ".trim().toString()];
function bP(n) {
  return typeof n == "object" && n !== null && "then" in n;
}
function Tw(n) {
  return (
    n != null &&
    typeof n == "object" &&
    "$$typeof" in n &&
    n.$$typeof === SP &&
    "_payload" in n &&
    bP(n._payload)
  );
}
function Sw(n) {
  const r = EP(n),
    s = y.forwardRef((a, u) => {
      let { children: d, ...f } = a;
      Tw(d) && typeof Pi == "function" && (d = Pi(d._payload));
      const p = y.Children.toArray(d),
        m = p.find(RP);
      if (m) {
        const k = m.props.children,
          g = p.map((P) =>
            P === m
              ? y.Children.count(k) > 1
                ? y.Children.only(null)
                : y.isValidElement(k)
                  ? k.props.children
                  : null
              : P,
          );
        return h.jsx(r, {
          ...f,
          ref: u,
          children: y.isValidElement(k) ? y.cloneElement(k, void 0, g) : null,
        });
      }
      return h.jsx(r, { ...f, ref: u, children: d });
    });
  return (s.displayName = `${n}.Slot`), s;
}
var CP = Sw("Slot");
function EP(n) {
  const r = y.forwardRef((s, a) => {
    let { children: u, ...d } = s;
    if (
      (Tw(u) && typeof Pi == "function" && (u = Pi(u._payload)),
      y.isValidElement(u))
    ) {
      const f = _P(u),
        p = OP(d, u.props);
      return (
        u.type !== y.Fragment && (p.ref = a ? Wo(a, f) : f),
        y.cloneElement(u, p)
      );
    }
    return y.Children.count(u) > 1 ? y.Children.only(null) : null;
  });
  return (r.displayName = `${n}.SlotClone`), r;
}
var NP = Symbol("radix.slottable");
function RP(n) {
  return (
    y.isValidElement(n) &&
    typeof n.type == "function" &&
    "__radixId" in n.type &&
    n.type.__radixId === NP
  );
}
function OP(n, r) {
  const s = { ...r };
  for (const a in r) {
    const u = n[a],
      d = r[a];
    /^on[A-Z]/.test(a)
      ? u && d
        ? (s[a] = (...p) => {
            const m = d(...p);
            return u(...p), m;
          })
        : u && (s[a] = u)
      : a === "style"
        ? (s[a] = { ...u, ...d })
        : a === "className" && (s[a] = [u, d].filter(Boolean).join(" "));
  }
  return { ...n, ...s };
}
function _P(n) {
  let r = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
    s = r && "isReactWarning" in r && r.isReactWarning;
  return s
    ? n.ref
    : ((r = Object.getOwnPropertyDescriptor(n, "ref")?.get),
      (s = r && "isReactWarning" in r && r.isReactWarning),
      s ? n.props.ref : n.props.ref || n.ref);
}
const jP = Ai(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground border border-primary-border",
          destructive:
            "bg-destructive text-destructive-foreground border border-destructive-border",
          outline:
            " border [border-color:var(--button-outline)]  shadow-xs active:shadow-none ",
          secondary:
            "border bg-secondary text-secondary-foreground border border-secondary-border ",
          ghost: "border border-transparent",
        },
        size: {
          default: "min-h-9 px-4 py-2",
          sm: "min-h-8 rounded-md px-3 text-xs",
          lg: "min-h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  xi = y.forwardRef(
    ({ className: n, variant: r, size: s, asChild: a = !1, ...u }, d) => {
      const f = a ? CP : "button";
      return h.jsx(f, {
        className: je(jP({ variant: r, size: s, className: n })),
        ref: d,
        ...u,
      });
    },
  );
xi.displayName = "Button";
const DP = Ai(
  "whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate ",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-xs",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-xs",
        outline: " border [border-color:var(--badge-outline)] shadow-xs",
      },
    },
    defaultVariants: { variant: "default" },
  },
);
function Rp({ className: n, variant: r, ...s }) {
  return h.jsx("div", { className: je(DP({ variant: r }), n), ...s });
}
function Op(n, [r, s]) {
  return Math.min(s, Math.max(r, n));
}
var AP = y.createContext(void 0);
function MP(n) {
  const r = y.useContext(AP);
  return n || r || "ltr";
}
var Ql = 0;
function LP() {
  y.useEffect(() => {
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", n[0] ?? _p()),
      document.body.insertAdjacentElement("beforeend", n[1] ?? _p()),
      Ql++,
      () => {
        Ql === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          Ql--;
      }
    );
  }, []);
}
function _p() {
  const n = document.createElement("span");
  return (
    n.setAttribute("data-radix-focus-guard", ""),
    (n.tabIndex = 0),
    (n.style.outline = "none"),
    (n.style.opacity = "0"),
    (n.style.position = "fixed"),
    (n.style.pointerEvents = "none"),
    n
  );
}
var Kl = "focusScope.autoFocusOnMount",
  Yl = "focusScope.autoFocusOnUnmount",
  jp = { bubbles: !1, cancelable: !0 },
  IP = "FocusScope",
  bw = y.forwardRef((n, r) => {
    const {
        loop: s = !1,
        trapped: a = !1,
        onMountAutoFocus: u,
        onUnmountAutoFocus: d,
        ...f
      } = n,
      [p, m] = y.useState(null),
      k = Lt(u),
      g = Lt(d),
      P = y.useRef(null),
      S = Be(r, (v) => m(v)),
      E = y.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    y.useEffect(() => {
      if (a) {
        let v = function (D) {
            if (E.paused || !p) return;
            const M = D.target;
            p.contains(M) ? (P.current = M) : _n(P.current, { select: !0 });
          },
          x = function (D) {
            if (E.paused || !p) return;
            const M = D.relatedTarget;
            M !== null && (p.contains(M) || _n(P.current, { select: !0 }));
          },
          R = function (D) {
            if (document.activeElement === document.body)
              for (const V of D) V.removedNodes.length > 0 && _n(p);
          };
        document.addEventListener("focusin", v),
          document.addEventListener("focusout", x);
        const b = new MutationObserver(R);
        return (
          p && b.observe(p, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", v),
              document.removeEventListener("focusout", x),
              b.disconnect();
          }
        );
      }
    }, [a, p, E.paused]),
      y.useEffect(() => {
        if (p) {
          Ap.add(E);
          const v = document.activeElement;
          if (!p.contains(v)) {
            const R = new CustomEvent(Kl, jp);
            p.addEventListener(Kl, k),
              p.dispatchEvent(R),
              R.defaultPrevented ||
                (FP(UP(Cw(p)), { select: !0 }),
                document.activeElement === v && _n(p));
          }
          return () => {
            p.removeEventListener(Kl, k),
              setTimeout(() => {
                const R = new CustomEvent(Yl, jp);
                p.addEventListener(Yl, g),
                  p.dispatchEvent(R),
                  R.defaultPrevented || _n(v ?? document.body, { select: !0 }),
                  p.removeEventListener(Yl, g),
                  Ap.remove(E);
              }, 0);
          };
        }
      }, [p, k, g, E]);
    const _ = y.useCallback(
      (v) => {
        if ((!s && !a) || E.paused) return;
        const x = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey,
          R = document.activeElement;
        if (x && R) {
          const b = v.currentTarget,
            [D, M] = VP(b);
          D && M
            ? !v.shiftKey && R === M
              ? (v.preventDefault(), s && _n(D, { select: !0 }))
              : v.shiftKey &&
                R === D &&
                (v.preventDefault(), s && _n(M, { select: !0 }))
            : R === b && v.preventDefault();
        }
      },
      [s, a, E.paused],
    );
    return h.jsx(Ee.div, { tabIndex: -1, ...f, ref: S, onKeyDown: _ });
  });
bw.displayName = IP;
function FP(n, { select: r = !1 } = {}) {
  const s = document.activeElement;
  for (const a of n)
    if ((_n(a, { select: r }), document.activeElement !== s)) return;
}
function VP(n) {
  const r = Cw(n),
    s = Dp(r, n),
    a = Dp(r.reverse(), n);
  return [s, a];
}
function Cw(n) {
  const r = [],
    s = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (a) => {
        const u = a.tagName === "INPUT" && a.type === "hidden";
        return a.disabled || a.hidden || u
          ? NodeFilter.FILTER_SKIP
          : a.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; s.nextNode(); ) r.push(s.currentNode);
  return r;
}
function Dp(n, r) {
  for (const s of n) if (!zP(s, { upTo: r })) return s;
}
function zP(n, { upTo: r }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n; ) {
    if (r !== void 0 && n === r) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
function BP(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function _n(n, { select: r = !1 } = {}) {
  if (n && n.focus) {
    const s = document.activeElement;
    n.focus({ preventScroll: !0 }), n !== s && BP(n) && r && n.select();
  }
}
var Ap = WP();
function WP() {
  let n = [];
  return {
    add(r) {
      const s = n[0];
      r !== s && s?.pause(), (n = Mp(n, r)), n.unshift(r);
    },
    remove(r) {
      (n = Mp(n, r)), n[0]?.resume();
    },
  };
}
function Mp(n, r) {
  const s = [...n],
    a = s.indexOf(r);
  return a !== -1 && s.splice(a, 1), s;
}
function UP(n) {
  return n.filter((r) => r.tagName !== "A");
}
var HP = Ri[" useId ".trim().toString()] || (() => {}),
  $P = 0;
function Wu(n) {
  const [r, s] = y.useState(HP());
  return (
    Xe(() => {
      s((a) => a ?? String($P++));
    }, [n]),
    r ? `radix-${r}` : ""
  );
}
const GP = ["top", "right", "bottom", "left"],
  Dn = Math.min,
  mt = Math.max,
  Ti = Math.round,
  ri = Math.floor,
  Gt = (n) => ({ x: n, y: n }),
  QP = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ku(n, r, s) {
  return mt(n, Dn(r, s));
}
function rn(n, r) {
  return typeof n == "function" ? n(r) : n;
}
function on(n) {
  return n.split("-")[0];
}
function Br(n) {
  return n.split("-")[1];
}
function Uu(n) {
  return n === "x" ? "y" : "x";
}
function Hu(n) {
  return n === "y" ? "height" : "width";
}
function $t(n) {
  const r = n[0];
  return r === "t" || r === "b" ? "y" : "x";
}
function $u(n) {
  return Uu($t(n));
}
function KP(n, r, s) {
  s === void 0 && (s = !1);
  const a = Br(n),
    u = $u(n),
    d = Hu(u);
  let f =
    u === "x"
      ? a === (s ? "end" : "start")
        ? "right"
        : "left"
      : a === "start"
        ? "bottom"
        : "top";
  return r.reference[d] > r.floating[d] && (f = Si(f)), [f, Si(f)];
}
function YP(n) {
  const r = Si(n);
  return [vu(n), r, vu(r)];
}
function vu(n) {
  return n.includes("start")
    ? n.replace("start", "end")
    : n.replace("end", "start");
}
const Lp = ["left", "right"],
  Ip = ["right", "left"],
  qP = ["top", "bottom"],
  XP = ["bottom", "top"];
function JP(n, r, s) {
  switch (n) {
    case "top":
    case "bottom":
      return s ? (r ? Ip : Lp) : r ? Lp : Ip;
    case "left":
    case "right":
      return r ? qP : XP;
    default:
      return [];
  }
}
function ZP(n, r, s, a) {
  const u = Br(n);
  let d = JP(on(n), s === "start", a);
  return (
    u && ((d = d.map((f) => f + "-" + u)), r && (d = d.concat(d.map(vu)))), d
  );
}
function Si(n) {
  const r = on(n);
  return QP[r] + n.slice(r.length);
}
function e0(n) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...n };
}
function Ew(n) {
  return typeof n != "number"
    ? e0(n)
    : { top: n, right: n, bottom: n, left: n };
}
function bi(n) {
  const { x: r, y: s, width: a, height: u } = n;
  return {
    width: a,
    height: u,
    top: s,
    left: r,
    right: r + a,
    bottom: s + u,
    x: r,
    y: s,
  };
}
function Fp(n, r, s) {
  let { reference: a, floating: u } = n;
  const d = $t(r),
    f = $u(r),
    p = Hu(f),
    m = on(r),
    k = d === "y",
    g = a.x + a.width / 2 - u.width / 2,
    P = a.y + a.height / 2 - u.height / 2,
    S = a[p] / 2 - u[p] / 2;
  let E;
  switch (m) {
    case "top":
      E = { x: g, y: a.y - u.height };
      break;
    case "bottom":
      E = { x: g, y: a.y + a.height };
      break;
    case "right":
      E = { x: a.x + a.width, y: P };
      break;
    case "left":
      E = { x: a.x - u.width, y: P };
      break;
    default:
      E = { x: a.x, y: a.y };
  }
  switch (Br(r)) {
    case "start":
      E[f] -= S * (s && k ? -1 : 1);
      break;
    case "end":
      E[f] += S * (s && k ? -1 : 1);
      break;
  }
  return E;
}
async function t0(n, r) {
  var s;
  r === void 0 && (r = {});
  const { x: a, y: u, platform: d, rects: f, elements: p, strategy: m } = n,
    {
      boundary: k = "clippingAncestors",
      rootBoundary: g = "viewport",
      elementContext: P = "floating",
      altBoundary: S = !1,
      padding: E = 0,
    } = rn(r, n),
    _ = Ew(E),
    x = p[S ? (P === "floating" ? "reference" : "floating") : P],
    R = bi(
      await d.getClippingRect({
        element:
          (s = await (d.isElement == null ? void 0 : d.isElement(x))) == null ||
          s
            ? x
            : x.contextElement ||
              (await (d.getDocumentElement == null
                ? void 0
                : d.getDocumentElement(p.floating))),
        boundary: k,
        rootBoundary: g,
        strategy: m,
      }),
    ),
    b =
      P === "floating"
        ? { x: a, y: u, width: f.floating.width, height: f.floating.height }
        : f.reference,
    D = await (d.getOffsetParent == null
      ? void 0
      : d.getOffsetParent(p.floating)),
    M = (await (d.isElement == null ? void 0 : d.isElement(D)))
      ? (await (d.getScale == null ? void 0 : d.getScale(D))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    V = bi(
      d.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: p,
            rect: b,
            offsetParent: D,
            strategy: m,
          })
        : b,
    );
  return {
    top: (R.top - V.top + _.top) / M.y,
    bottom: (V.bottom - R.bottom + _.bottom) / M.y,
    left: (R.left - V.left + _.left) / M.x,
    right: (V.right - R.right + _.right) / M.x,
  };
}
const n0 = 50,
  r0 = async (n, r, s) => {
    const {
        placement: a = "bottom",
        strategy: u = "absolute",
        middleware: d = [],
        platform: f,
      } = s,
      p = f.detectOverflow ? f : { ...f, detectOverflow: t0 },
      m = await (f.isRTL == null ? void 0 : f.isRTL(r));
    let k = await f.getElementRects({ reference: n, floating: r, strategy: u }),
      { x: g, y: P } = Fp(k, a, m),
      S = a,
      E = 0;
    const _ = {};
    for (let v = 0; v < d.length; v++) {
      const x = d[v];
      if (!x) continue;
      const { name: R, fn: b } = x,
        {
          x: D,
          y: M,
          data: V,
          reset: $,
        } = await b({
          x: g,
          y: P,
          initialPlacement: a,
          placement: S,
          strategy: u,
          middlewareData: _,
          rects: k,
          platform: p,
          elements: { reference: n, floating: r },
        });
      (g = D ?? g),
        (P = M ?? P),
        (_[R] = { ..._[R], ...V }),
        $ &&
          E < n0 &&
          (E++,
          typeof $ == "object" &&
            ($.placement && (S = $.placement),
            $.rects &&
              (k =
                $.rects === !0
                  ? await f.getElementRects({
                      reference: n,
                      floating: r,
                      strategy: u,
                    })
                  : $.rects),
            ({ x: g, y: P } = Fp(k, S, m))),
          (v = -1));
    }
    return { x: g, y: P, placement: S, strategy: u, middlewareData: _ };
  },
  o0 = (n) => ({
    name: "arrow",
    options: n,
    async fn(r) {
      const {
          x: s,
          y: a,
          placement: u,
          rects: d,
          platform: f,
          elements: p,
          middlewareData: m,
        } = r,
        { element: k, padding: g = 0 } = rn(n, r) || {};
      if (k == null) return {};
      const P = Ew(g),
        S = { x: s, y: a },
        E = $u(u),
        _ = Hu(E),
        v = await f.getDimensions(k),
        x = E === "y",
        R = x ? "top" : "left",
        b = x ? "bottom" : "right",
        D = x ? "clientHeight" : "clientWidth",
        M = d.reference[_] + d.reference[E] - S[E] - d.floating[_],
        V = S[E] - d.reference[E],
        $ = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(k));
      let z = $ ? $[D] : 0;
      (!z || !(await (f.isElement == null ? void 0 : f.isElement($)))) &&
        (z = p.floating[D] || d.floating[_]);
      const J = M / 2 - V / 2,
        K = z / 2 - v[_] / 2 - 1,
        ee = Dn(P[R], K),
        I = Dn(P[b], K),
        W = ee,
        te = z - v[_] - I,
        Q = z / 2 - v[_] / 2 + J,
        ue = ku(W, Q, te),
        oe =
          !m.arrow &&
          Br(u) != null &&
          Q !== ue &&
          d.reference[_] / 2 - (Q < W ? ee : I) - v[_] / 2 < 0,
        se = oe ? (Q < W ? Q - W : Q - te) : 0;
      return {
        [E]: S[E] + se,
        data: {
          [E]: ue,
          centerOffset: Q - ue - se,
          ...(oe && { alignmentOffset: se }),
        },
        reset: oe,
      };
    },
  }),
  s0 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "flip",
        options: n,
        async fn(r) {
          var s, a;
          const {
              placement: u,
              middlewareData: d,
              rects: f,
              initialPlacement: p,
              platform: m,
              elements: k,
            } = r,
            {
              mainAxis: g = !0,
              crossAxis: P = !0,
              fallbackPlacements: S,
              fallbackStrategy: E = "bestFit",
              fallbackAxisSideDirection: _ = "none",
              flipAlignment: v = !0,
              ...x
            } = rn(n, r);
          if ((s = d.arrow) != null && s.alignmentOffset) return {};
          const R = on(u),
            b = $t(p),
            D = on(p) === p,
            M = await (m.isRTL == null ? void 0 : m.isRTL(k.floating)),
            V = S || (D || !v ? [Si(p)] : YP(p)),
            $ = _ !== "none";
          !S && $ && V.push(...ZP(p, v, _, M));
          const z = [p, ...V],
            J = await m.detectOverflow(r, x),
            K = [];
          let ee = ((a = d.flip) == null ? void 0 : a.overflows) || [];
          if ((g && K.push(J[R]), P)) {
            const Q = KP(u, f, M);
            K.push(J[Q[0]], J[Q[1]]);
          }
          if (
            ((ee = [...ee, { placement: u, overflows: K }]),
            !K.every((Q) => Q <= 0))
          ) {
            var I, W;
            const Q = (((I = d.flip) == null ? void 0 : I.index) || 0) + 1,
              ue = z[Q];
            if (
              ue &&
              (!(P === "alignment" ? b !== $t(ue) : !1) ||
                ee.every((F) =>
                  $t(F.placement) === b ? F.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: Q, overflows: ee },
                reset: { placement: ue },
              };
            let oe =
              (W = ee
                .filter((se) => se.overflows[0] <= 0)
                .sort((se, F) => se.overflows[1] - F.overflows[1])[0]) == null
                ? void 0
                : W.placement;
            if (!oe)
              switch (E) {
                case "bestFit": {
                  var te;
                  const se =
                    (te = ee
                      .filter((F) => {
                        if ($) {
                          const q = $t(F.placement);
                          return q === b || q === "y";
                        }
                        return !0;
                      })
                      .map((F) => [
                        F.placement,
                        F.overflows
                          .filter((q) => q > 0)
                          .reduce((q, X) => q + X, 0),
                      ])
                      .sort((F, q) => F[1] - q[1])[0]) == null
                      ? void 0
                      : te[0];
                  se && (oe = se);
                  break;
                }
                case "initialPlacement":
                  oe = p;
                  break;
              }
            if (u !== oe) return { reset: { placement: oe } };
          }
          return {};
        },
      }
    );
  };
function Vp(n, r) {
  return {
    top: n.top - r.height,
    right: n.right - r.width,
    bottom: n.bottom - r.height,
    left: n.left - r.width,
  };
}
function zp(n) {
  return GP.some((r) => n[r] >= 0);
}
const i0 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "hide",
        options: n,
        async fn(r) {
          const { rects: s, platform: a } = r,
            { strategy: u = "referenceHidden", ...d } = rn(n, r);
          switch (u) {
            case "referenceHidden": {
              const f = await a.detectOverflow(r, {
                  ...d,
                  elementContext: "reference",
                }),
                p = Vp(f, s.reference);
              return {
                data: { referenceHiddenOffsets: p, referenceHidden: zp(p) },
              };
            }
            case "escaped": {
              const f = await a.detectOverflow(r, { ...d, altBoundary: !0 }),
                p = Vp(f, s.floating);
              return { data: { escapedOffsets: p, escaped: zp(p) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Nw = new Set(["left", "top"]);
async function a0(n, r) {
  const { placement: s, platform: a, elements: u } = n,
    d = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
    f = on(s),
    p = Br(s),
    m = $t(s) === "y",
    k = Nw.has(f) ? -1 : 1,
    g = d && m ? -1 : 1,
    P = rn(r, n);
  let {
    mainAxis: S,
    crossAxis: E,
    alignmentAxis: _,
  } = typeof P == "number"
    ? { mainAxis: P, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: P.mainAxis || 0,
        crossAxis: P.crossAxis || 0,
        alignmentAxis: P.alignmentAxis,
      };
  return (
    p && typeof _ == "number" && (E = p === "end" ? _ * -1 : _),
    m ? { x: E * g, y: S * k } : { x: S * k, y: E * g }
  );
}
const l0 = function (n) {
    return (
      n === void 0 && (n = 0),
      {
        name: "offset",
        options: n,
        async fn(r) {
          var s, a;
          const { x: u, y: d, placement: f, middlewareData: p } = r,
            m = await a0(r, n);
          return f === ((s = p.offset) == null ? void 0 : s.placement) &&
            (a = p.arrow) != null &&
            a.alignmentOffset
            ? {}
            : { x: u + m.x, y: d + m.y, data: { ...m, placement: f } };
        },
      }
    );
  },
  u0 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "shift",
        options: n,
        async fn(r) {
          const { x: s, y: a, placement: u, platform: d } = r,
            {
              mainAxis: f = !0,
              crossAxis: p = !1,
              limiter: m = {
                fn: (R) => {
                  let { x: b, y: D } = R;
                  return { x: b, y: D };
                },
              },
              ...k
            } = rn(n, r),
            g = { x: s, y: a },
            P = await d.detectOverflow(r, k),
            S = $t(on(u)),
            E = Uu(S);
          let _ = g[E],
            v = g[S];
          if (f) {
            const R = E === "y" ? "top" : "left",
              b = E === "y" ? "bottom" : "right",
              D = _ + P[R],
              M = _ - P[b];
            _ = ku(D, _, M);
          }
          if (p) {
            const R = S === "y" ? "top" : "left",
              b = S === "y" ? "bottom" : "right",
              D = v + P[R],
              M = v - P[b];
            v = ku(D, v, M);
          }
          const x = m.fn({ ...r, [E]: _, [S]: v });
          return {
            ...x,
            data: { x: x.x - s, y: x.y - a, enabled: { [E]: f, [S]: p } },
          };
        },
      }
    );
  },
  c0 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        options: n,
        fn(r) {
          const { x: s, y: a, placement: u, rects: d, middlewareData: f } = r,
            { offset: p = 0, mainAxis: m = !0, crossAxis: k = !0 } = rn(n, r),
            g = { x: s, y: a },
            P = $t(u),
            S = Uu(P);
          let E = g[S],
            _ = g[P];
          const v = rn(p, r),
            x =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (m) {
            const D = S === "y" ? "height" : "width",
              M = d.reference[S] - d.floating[D] + x.mainAxis,
              V = d.reference[S] + d.reference[D] - x.mainAxis;
            E < M ? (E = M) : E > V && (E = V);
          }
          if (k) {
            var R, b;
            const D = S === "y" ? "width" : "height",
              M = Nw.has(on(u)),
              V =
                d.reference[P] -
                d.floating[D] +
                ((M && ((R = f.offset) == null ? void 0 : R[P])) || 0) +
                (M ? 0 : x.crossAxis),
              $ =
                d.reference[P] +
                d.reference[D] +
                (M ? 0 : ((b = f.offset) == null ? void 0 : b[P]) || 0) -
                (M ? x.crossAxis : 0);
            _ < V ? (_ = V) : _ > $ && (_ = $);
          }
          return { [S]: E, [P]: _ };
        },
      }
    );
  },
  d0 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "size",
        options: n,
        async fn(r) {
          var s, a;
          const { placement: u, rects: d, platform: f, elements: p } = r,
            { apply: m = () => {}, ...k } = rn(n, r),
            g = await f.detectOverflow(r, k),
            P = on(u),
            S = Br(u),
            E = $t(u) === "y",
            { width: _, height: v } = d.floating;
          let x, R;
          P === "top" || P === "bottom"
            ? ((x = P),
              (R =
                S ===
                ((await (f.isRTL == null ? void 0 : f.isRTL(p.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((R = P), (x = S === "end" ? "top" : "bottom"));
          const b = v - g.top - g.bottom,
            D = _ - g.left - g.right,
            M = Dn(v - g[x], b),
            V = Dn(_ - g[R], D),
            $ = !r.middlewareData.shift;
          let z = M,
            J = V;
          if (
            ((s = r.middlewareData.shift) != null && s.enabled.x && (J = D),
            (a = r.middlewareData.shift) != null && a.enabled.y && (z = b),
            $ && !S)
          ) {
            const ee = mt(g.left, 0),
              I = mt(g.right, 0),
              W = mt(g.top, 0),
              te = mt(g.bottom, 0);
            E
              ? (J =
                  _ - 2 * (ee !== 0 || I !== 0 ? ee + I : mt(g.left, g.right)))
              : (z =
                  v - 2 * (W !== 0 || te !== 0 ? W + te : mt(g.top, g.bottom)));
          }
          await m({ ...r, availableWidth: J, availableHeight: z });
          const K = await f.getDimensions(p.floating);
          return _ !== K.width || v !== K.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Mi() {
  return typeof window < "u";
}
function Wr(n) {
  return Rw(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function kt(n) {
  var r;
  return (
    (n == null || (r = n.ownerDocument) == null ? void 0 : r.defaultView) ||
    window
  );
}
function Qt(n) {
  var r;
  return (r = (Rw(n) ? n.ownerDocument : n.document) || window.document) == null
    ? void 0
    : r.documentElement;
}
function Rw(n) {
  return Mi() ? n instanceof Node || n instanceof kt(n).Node : !1;
}
function It(n) {
  return Mi() ? n instanceof Element || n instanceof kt(n).Element : !1;
}
function sn(n) {
  return Mi() ? n instanceof HTMLElement || n instanceof kt(n).HTMLElement : !1;
}
function Bp(n) {
  return !Mi() || typeof ShadowRoot > "u"
    ? !1
    : n instanceof ShadowRoot || n instanceof kt(n).ShadowRoot;
}
function Ho(n) {
  const { overflow: r, overflowX: s, overflowY: a, display: u } = Ft(n);
  return (
    /auto|scroll|overlay|hidden|clip/.test(r + a + s) &&
    u !== "inline" &&
    u !== "contents"
  );
}
function f0(n) {
  return /^(table|td|th)$/.test(Wr(n));
}
function Li(n) {
  try {
    if (n.matches(":popover-open")) return !0;
  } catch {}
  try {
    return n.matches(":modal");
  } catch {
    return !1;
  }
}
const p0 = /transform|translate|scale|rotate|perspective|filter/,
  h0 = /paint|layout|strict|content/,
  Xn = (n) => !!n && n !== "none";
let ql;
function Gu(n) {
  const r = It(n) ? Ft(n) : n;
  return (
    Xn(r.transform) ||
    Xn(r.translate) ||
    Xn(r.scale) ||
    Xn(r.rotate) ||
    Xn(r.perspective) ||
    (!Qu() && (Xn(r.backdropFilter) || Xn(r.filter))) ||
    p0.test(r.willChange || "") ||
    h0.test(r.contain || "")
  );
}
function w0(n) {
  let r = An(n);
  for (; sn(r) && !Ir(r); ) {
    if (Gu(r)) return r;
    if (Li(r)) return null;
    r = An(r);
  }
  return null;
}
function Qu() {
  return (
    ql == null &&
      (ql =
        typeof CSS < "u" &&
        CSS.supports &&
        CSS.supports("-webkit-backdrop-filter", "none")),
    ql
  );
}
function Ir(n) {
  return /^(html|body|#document)$/.test(Wr(n));
}
function Ft(n) {
  return kt(n).getComputedStyle(n);
}
function Ii(n) {
  return It(n)
    ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }
    : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
}
function An(n) {
  if (Wr(n) === "html") return n;
  const r = n.assignedSlot || n.parentNode || (Bp(n) && n.host) || Qt(n);
  return Bp(r) ? r.host : r;
}
function Ow(n) {
  const r = An(n);
  return Ir(r)
    ? n.ownerDocument
      ? n.ownerDocument.body
      : n.body
    : sn(r) && Ho(r)
      ? r
      : Ow(r);
}
function zo(n, r, s) {
  var a;
  r === void 0 && (r = []), s === void 0 && (s = !0);
  const u = Ow(n),
    d = u === ((a = n.ownerDocument) == null ? void 0 : a.body),
    f = kt(u);
  if (d) {
    const p = gu(f);
    return r.concat(
      f,
      f.visualViewport || [],
      Ho(u) ? u : [],
      p && s ? zo(p) : [],
    );
  } else return r.concat(u, zo(u, [], s));
}
function gu(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function _w(n) {
  const r = Ft(n);
  let s = parseFloat(r.width) || 0,
    a = parseFloat(r.height) || 0;
  const u = sn(n),
    d = u ? n.offsetWidth : s,
    f = u ? n.offsetHeight : a,
    p = Ti(s) !== d || Ti(a) !== f;
  return p && ((s = d), (a = f)), { width: s, height: a, $: p };
}
function Ku(n) {
  return It(n) ? n : n.contextElement;
}
function Mr(n) {
  const r = Ku(n);
  if (!sn(r)) return Gt(1);
  const s = r.getBoundingClientRect(),
    { width: a, height: u, $: d } = _w(r);
  let f = (d ? Ti(s.width) : s.width) / a,
    p = (d ? Ti(s.height) : s.height) / u;
  return (
    (!f || !Number.isFinite(f)) && (f = 1),
    (!p || !Number.isFinite(p)) && (p = 1),
    { x: f, y: p }
  );
}
const y0 = Gt(0);
function jw(n) {
  const r = kt(n);
  return !Qu() || !r.visualViewport
    ? y0
    : { x: r.visualViewport.offsetLeft, y: r.visualViewport.offsetTop };
}
function m0(n, r, s) {
  return r === void 0 && (r = !1), !s || (r && s !== kt(n)) ? !1 : r;
}
function tr(n, r, s, a) {
  r === void 0 && (r = !1), s === void 0 && (s = !1);
  const u = n.getBoundingClientRect(),
    d = Ku(n);
  let f = Gt(1);
  r && (a ? It(a) && (f = Mr(a)) : (f = Mr(n)));
  const p = m0(d, s, a) ? jw(d) : Gt(0);
  let m = (u.left + p.x) / f.x,
    k = (u.top + p.y) / f.y,
    g = u.width / f.x,
    P = u.height / f.y;
  if (d) {
    const S = kt(d),
      E = a && It(a) ? kt(a) : a;
    let _ = S,
      v = gu(_);
    for (; v && a && E !== _; ) {
      const x = Mr(v),
        R = v.getBoundingClientRect(),
        b = Ft(v),
        D = R.left + (v.clientLeft + parseFloat(b.paddingLeft)) * x.x,
        M = R.top + (v.clientTop + parseFloat(b.paddingTop)) * x.y;
      (m *= x.x),
        (k *= x.y),
        (g *= x.x),
        (P *= x.y),
        (m += D),
        (k += M),
        (_ = kt(v)),
        (v = gu(_));
    }
  }
  return bi({ width: g, height: P, x: m, y: k });
}
function Fi(n, r) {
  const s = Ii(n).scrollLeft;
  return r ? r.left + s : tr(Qt(n)).left + s;
}
function Dw(n, r) {
  const s = n.getBoundingClientRect(),
    a = s.left + r.scrollLeft - Fi(n, s),
    u = s.top + r.scrollTop;
  return { x: a, y: u };
}
function k0(n) {
  let { elements: r, rect: s, offsetParent: a, strategy: u } = n;
  const d = u === "fixed",
    f = Qt(a),
    p = r ? Li(r.floating) : !1;
  if (a === f || (p && d)) return s;
  let m = { scrollLeft: 0, scrollTop: 0 },
    k = Gt(1);
  const g = Gt(0),
    P = sn(a);
  if ((P || (!P && !d)) && ((Wr(a) !== "body" || Ho(f)) && (m = Ii(a)), P)) {
    const E = tr(a);
    (k = Mr(a)), (g.x = E.x + a.clientLeft), (g.y = E.y + a.clientTop);
  }
  const S = f && !P && !d ? Dw(f, m) : Gt(0);
  return {
    width: s.width * k.x,
    height: s.height * k.y,
    x: s.x * k.x - m.scrollLeft * k.x + g.x + S.x,
    y: s.y * k.y - m.scrollTop * k.y + g.y + S.y,
  };
}
function v0(n) {
  return Array.from(n.getClientRects());
}
function g0(n) {
  const r = Qt(n),
    s = Ii(n),
    a = n.ownerDocument.body,
    u = mt(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth),
    d = mt(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
  let f = -s.scrollLeft + Fi(n);
  const p = -s.scrollTop;
  return (
    Ft(a).direction === "rtl" && (f += mt(r.clientWidth, a.clientWidth) - u),
    { width: u, height: d, x: f, y: p }
  );
}
const Wp = 25;
function P0(n, r) {
  const s = kt(n),
    a = Qt(n),
    u = s.visualViewport;
  let d = a.clientWidth,
    f = a.clientHeight,
    p = 0,
    m = 0;
  if (u) {
    (d = u.width), (f = u.height);
    const g = Qu();
    (!g || (g && r === "fixed")) && ((p = u.offsetLeft), (m = u.offsetTop));
  }
  const k = Fi(a);
  if (k <= 0) {
    const g = a.ownerDocument,
      P = g.body,
      S = getComputedStyle(P),
      E =
        (g.compatMode === "CSS1Compat" &&
          parseFloat(S.marginLeft) + parseFloat(S.marginRight)) ||
        0,
      _ = Math.abs(a.clientWidth - P.clientWidth - E);
    _ <= Wp && (d -= _);
  } else k <= Wp && (d += k);
  return { width: d, height: f, x: p, y: m };
}
function x0(n, r) {
  const s = tr(n, !0, r === "fixed"),
    a = s.top + n.clientTop,
    u = s.left + n.clientLeft,
    d = sn(n) ? Mr(n) : Gt(1),
    f = n.clientWidth * d.x,
    p = n.clientHeight * d.y,
    m = u * d.x,
    k = a * d.y;
  return { width: f, height: p, x: m, y: k };
}
function Up(n, r, s) {
  let a;
  if (r === "viewport") a = P0(n, s);
  else if (r === "document") a = g0(Qt(n));
  else if (It(r)) a = x0(r, s);
  else {
    const u = jw(n);
    a = { x: r.x - u.x, y: r.y - u.y, width: r.width, height: r.height };
  }
  return bi(a);
}
function Aw(n, r) {
  const s = An(n);
  return s === r || !It(s) || Ir(s)
    ? !1
    : Ft(s).position === "fixed" || Aw(s, r);
}
function T0(n, r) {
  const s = r.get(n);
  if (s) return s;
  let a = zo(n, [], !1).filter((p) => It(p) && Wr(p) !== "body"),
    u = null;
  const d = Ft(n).position === "fixed";
  let f = d ? An(n) : n;
  for (; It(f) && !Ir(f); ) {
    const p = Ft(f),
      m = Gu(f);
    !m && p.position === "fixed" && (u = null),
      (
        d
          ? !m && !u
          : (!m &&
              p.position === "static" &&
              !!u &&
              (u.position === "absolute" || u.position === "fixed")) ||
            (Ho(f) && !m && Aw(n, f))
      )
        ? (a = a.filter((g) => g !== f))
        : (u = p),
      (f = An(f));
  }
  return r.set(n, a), a;
}
function S0(n) {
  let { element: r, boundary: s, rootBoundary: a, strategy: u } = n;
  const f = [
      ...(s === "clippingAncestors"
        ? Li(r)
          ? []
          : T0(r, this._c)
        : [].concat(s)),
      a,
    ],
    p = Up(r, f[0], u);
  let m = p.top,
    k = p.right,
    g = p.bottom,
    P = p.left;
  for (let S = 1; S < f.length; S++) {
    const E = Up(r, f[S], u);
    (m = mt(E.top, m)),
      (k = Dn(E.right, k)),
      (g = Dn(E.bottom, g)),
      (P = mt(E.left, P));
  }
  return { width: k - P, height: g - m, x: P, y: m };
}
function b0(n) {
  const { width: r, height: s } = _w(n);
  return { width: r, height: s };
}
function C0(n, r, s) {
  const a = sn(r),
    u = Qt(r),
    d = s === "fixed",
    f = tr(n, !0, d, r);
  let p = { scrollLeft: 0, scrollTop: 0 };
  const m = Gt(0);
  function k() {
    m.x = Fi(u);
  }
  if (a || (!a && !d))
    if (((Wr(r) !== "body" || Ho(u)) && (p = Ii(r)), a)) {
      const E = tr(r, !0, d, r);
      (m.x = E.x + r.clientLeft), (m.y = E.y + r.clientTop);
    } else u && k();
  d && !a && u && k();
  const g = u && !a && !d ? Dw(u, p) : Gt(0),
    P = f.left + p.scrollLeft - m.x - g.x,
    S = f.top + p.scrollTop - m.y - g.y;
  return { x: P, y: S, width: f.width, height: f.height };
}
function Xl(n) {
  return Ft(n).position === "static";
}
function Hp(n, r) {
  if (!sn(n) || Ft(n).position === "fixed") return null;
  if (r) return r(n);
  let s = n.offsetParent;
  return Qt(n) === s && (s = s.ownerDocument.body), s;
}
function Mw(n, r) {
  const s = kt(n);
  if (Li(n)) return s;
  if (!sn(n)) {
    let u = An(n);
    for (; u && !Ir(u); ) {
      if (It(u) && !Xl(u)) return u;
      u = An(u);
    }
    return s;
  }
  let a = Hp(n, r);
  for (; a && f0(a) && Xl(a); ) a = Hp(a, r);
  return a && Ir(a) && Xl(a) && !Gu(a) ? s : a || w0(n) || s;
}
const E0 = async function (n) {
  const r = this.getOffsetParent || Mw,
    s = this.getDimensions,
    a = await s(n.floating);
  return {
    reference: C0(n.reference, await r(n.floating), n.strategy),
    floating: { x: 0, y: 0, width: a.width, height: a.height },
  };
};
function N0(n) {
  return Ft(n).direction === "rtl";
}
const R0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: k0,
  getDocumentElement: Qt,
  getClippingRect: S0,
  getOffsetParent: Mw,
  getElementRects: E0,
  getClientRects: v0,
  getDimensions: b0,
  getScale: Mr,
  isElement: It,
  isRTL: N0,
};
function Lw(n, r) {
  return (
    n.x === r.x && n.y === r.y && n.width === r.width && n.height === r.height
  );
}
function O0(n, r) {
  let s = null,
    a;
  const u = Qt(n);
  function d() {
    var p;
    clearTimeout(a), (p = s) == null || p.disconnect(), (s = null);
  }
  function f(p, m) {
    p === void 0 && (p = !1), m === void 0 && (m = 1), d();
    const k = n.getBoundingClientRect(),
      { left: g, top: P, width: S, height: E } = k;
    if ((p || r(), !S || !E)) return;
    const _ = ri(P),
      v = ri(u.clientWidth - (g + S)),
      x = ri(u.clientHeight - (P + E)),
      R = ri(g),
      D = {
        rootMargin: -_ + "px " + -v + "px " + -x + "px " + -R + "px",
        threshold: mt(0, Dn(1, m)) || 1,
      };
    let M = !0;
    function V($) {
      const z = $[0].intersectionRatio;
      if (z !== m) {
        if (!M) return f();
        z
          ? f(!1, z)
          : (a = setTimeout(() => {
              f(!1, 1e-7);
            }, 1e3));
      }
      z === 1 && !Lw(k, n.getBoundingClientRect()) && f(), (M = !1);
    }
    try {
      s = new IntersectionObserver(V, { ...D, root: u.ownerDocument });
    } catch {
      s = new IntersectionObserver(V, D);
    }
    s.observe(n);
  }
  return f(!0), d;
}
function _0(n, r, s, a) {
  a === void 0 && (a = {});
  const {
      ancestorScroll: u = !0,
      ancestorResize: d = !0,
      elementResize: f = typeof ResizeObserver == "function",
      layoutShift: p = typeof IntersectionObserver == "function",
      animationFrame: m = !1,
    } = a,
    k = Ku(n),
    g = u || d ? [...(k ? zo(k) : []), ...(r ? zo(r) : [])] : [];
  g.forEach((R) => {
    u && R.addEventListener("scroll", s, { passive: !0 }),
      d && R.addEventListener("resize", s);
  });
  const P = k && p ? O0(k, s) : null;
  let S = -1,
    E = null;
  f &&
    ((E = new ResizeObserver((R) => {
      let [b] = R;
      b &&
        b.target === k &&
        E &&
        r &&
        (E.unobserve(r),
        cancelAnimationFrame(S),
        (S = requestAnimationFrame(() => {
          var D;
          (D = E) == null || D.observe(r);
        }))),
        s();
    })),
    k && !m && E.observe(k),
    r && E.observe(r));
  let _,
    v = m ? tr(n) : null;
  m && x();
  function x() {
    const R = tr(n);
    v && !Lw(v, R) && s(), (v = R), (_ = requestAnimationFrame(x));
  }
  return (
    s(),
    () => {
      var R;
      g.forEach((b) => {
        u && b.removeEventListener("scroll", s),
          d && b.removeEventListener("resize", s);
      }),
        P?.(),
        (R = E) == null || R.disconnect(),
        (E = null),
        m && cancelAnimationFrame(_);
    }
  );
}
const j0 = l0,
  D0 = u0,
  A0 = s0,
  M0 = d0,
  L0 = i0,
  $p = o0,
  I0 = c0,
  F0 = (n, r, s) => {
    const a = new Map(),
      u = { platform: R0, ...s },
      d = { ...u.platform, _c: a };
    return r0(n, r, { ...u, platform: d });
  };
var V0 = typeof document < "u",
  z0 = function () {},
  fi = V0 ? y.useLayoutEffect : z0;
function Ci(n, r) {
  if (n === r) return !0;
  if (typeof n != typeof r) return !1;
  if (typeof n == "function" && n.toString() === r.toString()) return !0;
  let s, a, u;
  if (n && r && typeof n == "object") {
    if (Array.isArray(n)) {
      if (((s = n.length), s !== r.length)) return !1;
      for (a = s; a-- !== 0; ) if (!Ci(n[a], r[a])) return !1;
      return !0;
    }
    if (((u = Object.keys(n)), (s = u.length), s !== Object.keys(r).length))
      return !1;
    for (a = s; a-- !== 0; ) if (!{}.hasOwnProperty.call(r, u[a])) return !1;
    for (a = s; a-- !== 0; ) {
      const d = u[a];
      if (!(d === "_owner" && n.$$typeof) && !Ci(n[d], r[d])) return !1;
    }
    return !0;
  }
  return n !== n && r !== r;
}
function Iw(n) {
  return typeof window > "u"
    ? 1
    : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Gp(n, r) {
  const s = Iw(n);
  return Math.round(r * s) / s;
}
function Jl(n) {
  const r = y.useRef(n);
  return (
    fi(() => {
      r.current = n;
    }),
    r
  );
}
function B0(n) {
  n === void 0 && (n = {});
  const {
      placement: r = "bottom",
      strategy: s = "absolute",
      middleware: a = [],
      platform: u,
      elements: { reference: d, floating: f } = {},
      transform: p = !0,
      whileElementsMounted: m,
      open: k,
    } = n,
    [g, P] = y.useState({
      x: 0,
      y: 0,
      strategy: s,
      placement: r,
      middlewareData: {},
      isPositioned: !1,
    }),
    [S, E] = y.useState(a);
  Ci(S, a) || E(a);
  const [_, v] = y.useState(null),
    [x, R] = y.useState(null),
    b = y.useCallback((F) => {
      F !== $.current && (($.current = F), v(F));
    }, []),
    D = y.useCallback((F) => {
      F !== z.current && ((z.current = F), R(F));
    }, []),
    M = d || _,
    V = f || x,
    $ = y.useRef(null),
    z = y.useRef(null),
    J = y.useRef(g),
    K = m != null,
    ee = Jl(m),
    I = Jl(u),
    W = Jl(k),
    te = y.useCallback(() => {
      if (!$.current || !z.current) return;
      const F = { placement: r, strategy: s, middleware: S };
      I.current && (F.platform = I.current),
        F0($.current, z.current, F).then((q) => {
          const X = { ...q, isPositioned: W.current !== !1 };
          Q.current &&
            !Ci(J.current, X) &&
            ((J.current = X),
            Vr.flushSync(() => {
              P(X);
            }));
        });
    }, [S, r, s, I, W]);
  fi(() => {
    k === !1 &&
      J.current.isPositioned &&
      ((J.current.isPositioned = !1), P((F) => ({ ...F, isPositioned: !1 })));
  }, [k]);
  const Q = y.useRef(!1);
  fi(
    () => (
      (Q.current = !0),
      () => {
        Q.current = !1;
      }
    ),
    [],
  ),
    fi(() => {
      if ((M && ($.current = M), V && (z.current = V), M && V)) {
        if (ee.current) return ee.current(M, V, te);
        te();
      }
    }, [M, V, te, ee, K]);
  const ue = y.useMemo(
      () => ({ reference: $, floating: z, setReference: b, setFloating: D }),
      [b, D],
    ),
    oe = y.useMemo(() => ({ reference: M, floating: V }), [M, V]),
    se = y.useMemo(() => {
      const F = { position: s, left: 0, top: 0 };
      if (!oe.floating) return F;
      const q = Gp(oe.floating, g.x),
        X = Gp(oe.floating, g.y);
      return p
        ? {
            ...F,
            transform: "translate(" + q + "px, " + X + "px)",
            ...(Iw(oe.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: s, left: q, top: X };
    }, [s, p, oe.floating, g.x, g.y]);
  return y.useMemo(
    () => ({ ...g, update: te, refs: ue, elements: oe, floatingStyles: se }),
    [g, te, ue, oe, se],
  );
}
const W0 = (n) => {
    function r(s) {
      return {}.hasOwnProperty.call(s, "current");
    }
    return {
      name: "arrow",
      options: n,
      fn(s) {
        const { element: a, padding: u } = typeof n == "function" ? n(s) : n;
        return a && r(a)
          ? a.current != null
            ? $p({ element: a.current, padding: u }).fn(s)
            : {}
          : a
            ? $p({ element: a, padding: u }).fn(s)
            : {};
      },
    };
  },
  U0 = (n, r) => {
    const s = j0(n);
    return { name: s.name, fn: s.fn, options: [n, r] };
  },
  H0 = (n, r) => {
    const s = D0(n);
    return { name: s.name, fn: s.fn, options: [n, r] };
  },
  $0 = (n, r) => ({ fn: I0(n).fn, options: [n, r] }),
  G0 = (n, r) => {
    const s = A0(n);
    return { name: s.name, fn: s.fn, options: [n, r] };
  },
  Q0 = (n, r) => {
    const s = M0(n);
    return { name: s.name, fn: s.fn, options: [n, r] };
  },
  K0 = (n, r) => {
    const s = L0(n);
    return { name: s.name, fn: s.fn, options: [n, r] };
  },
  Y0 = (n, r) => {
    const s = W0(n);
    return { name: s.name, fn: s.fn, options: [n, r] };
  };
var q0 = "Arrow",
  Fw = y.forwardRef((n, r) => {
    const { children: s, width: a = 10, height: u = 5, ...d } = n;
    return h.jsx(Ee.svg, {
      ...d,
      ref: r,
      width: a,
      height: u,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: n.asChild ? s : h.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Fw.displayName = q0;
var X0 = Fw;
function J0(n) {
  const [r, s] = y.useState(void 0);
  return (
    Xe(() => {
      if (n) {
        s({ width: n.offsetWidth, height: n.offsetHeight });
        const a = new ResizeObserver((u) => {
          if (!Array.isArray(u) || !u.length) return;
          const d = u[0];
          let f, p;
          if ("borderBoxSize" in d) {
            const m = d.borderBoxSize,
              k = Array.isArray(m) ? m[0] : m;
            (f = k.inlineSize), (p = k.blockSize);
          } else (f = n.offsetWidth), (p = n.offsetHeight);
          s({ width: f, height: p });
        });
        return a.observe(n, { box: "border-box" }), () => a.unobserve(n);
      } else s(void 0);
    }, [n]),
    r
  );
}
var Yu = "Popper",
  [Vw, zw] = ji(Yu),
  [Z0, Bw] = Vw(Yu),
  Ww = (n) => {
    const { __scopePopper: r, children: s } = n,
      [a, u] = y.useState(null);
    return h.jsx(Z0, { scope: r, anchor: a, onAnchorChange: u, children: s });
  };
Ww.displayName = Yu;
var Uw = "PopperAnchor",
  Hw = y.forwardRef((n, r) => {
    const { __scopePopper: s, virtualRef: a, ...u } = n,
      d = Bw(Uw, s),
      f = y.useRef(null),
      p = Be(r, f),
      m = y.useRef(null);
    return (
      y.useEffect(() => {
        const k = m.current;
        (m.current = a?.current || f.current),
          k !== m.current && d.onAnchorChange(m.current);
      }),
      a ? null : h.jsx(Ee.div, { ...u, ref: p })
    );
  });
Hw.displayName = Uw;
var qu = "PopperContent",
  [ex, tx] = Vw(qu),
  $w = y.forwardRef((n, r) => {
    const {
        __scopePopper: s,
        side: a = "bottom",
        sideOffset: u = 0,
        align: d = "center",
        alignOffset: f = 0,
        arrowPadding: p = 0,
        avoidCollisions: m = !0,
        collisionBoundary: k = [],
        collisionPadding: g = 0,
        sticky: P = "partial",
        hideWhenDetached: S = !1,
        updatePositionStrategy: E = "optimized",
        onPlaced: _,
        ...v
      } = n,
      x = Bw(qu, s),
      [R, b] = y.useState(null),
      D = Be(r, (Z) => b(Z)),
      [M, V] = y.useState(null),
      $ = J0(M),
      z = $?.width ?? 0,
      J = $?.height ?? 0,
      K = a + (d !== "center" ? "-" + d : ""),
      ee =
        typeof g == "number"
          ? g
          : { top: 0, right: 0, bottom: 0, left: 0, ...g },
      I = Array.isArray(k) ? k : [k],
      W = I.length > 0,
      te = { padding: ee, boundary: I.filter(rx), altBoundary: W },
      {
        refs: Q,
        floatingStyles: ue,
        placement: oe,
        isPositioned: se,
        middlewareData: F,
      } = B0({
        strategy: "fixed",
        placement: K,
        whileElementsMounted: (...Z) =>
          _0(...Z, { animationFrame: E === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          U0({ mainAxis: u + J, alignmentAxis: f }),
          m &&
            H0({
              mainAxis: !0,
              crossAxis: !1,
              limiter: P === "partial" ? $0() : void 0,
              ...te,
            }),
          m && G0({ ...te }),
          Q0({
            ...te,
            apply: ({
              elements: Z,
              rects: ce,
              availableWidth: ke,
              availableHeight: ge,
            }) => {
              const { width: be, height: Ae } = ce.reference,
                Ke = Z.floating.style;
              Ke.setProperty("--radix-popper-available-width", `${ke}px`),
                Ke.setProperty("--radix-popper-available-height", `${ge}px`),
                Ke.setProperty("--radix-popper-anchor-width", `${be}px`),
                Ke.setProperty("--radix-popper-anchor-height", `${Ae}px`);
            },
          }),
          M && Y0({ element: M, padding: p }),
          ox({ arrowWidth: z, arrowHeight: J }),
          S && K0({ strategy: "referenceHidden", ...te }),
        ],
      }),
      [q, X] = Kw(oe),
      O = Lt(_);
    Xe(() => {
      se && O?.();
    }, [se, O]);
    const B = F.arrow?.x,
      pe = F.arrow?.y,
      he = F.arrow?.centerOffset !== 0,
      [ve, me] = y.useState();
    return (
      Xe(() => {
        R && me(window.getComputedStyle(R).zIndex);
      }, [R]),
      h.jsx("div", {
        ref: Q.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ue,
          transform: se ? ue.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ve,
          "--radix-popper-transform-origin": [
            F.transformOrigin?.x,
            F.transformOrigin?.y,
          ].join(" "),
          ...(F.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: n.dir,
        children: h.jsx(ex, {
          scope: s,
          placedSide: q,
          onArrowChange: V,
          arrowX: B,
          arrowY: pe,
          shouldHideArrow: he,
          children: h.jsx(Ee.div, {
            "data-side": q,
            "data-align": X,
            ...v,
            ref: D,
            style: { ...v.style, animation: se ? void 0 : "none" },
          }),
        }),
      })
    );
  });
$w.displayName = qu;
var Gw = "PopperArrow",
  nx = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Qw = y.forwardRef(function (r, s) {
    const { __scopePopper: a, ...u } = r,
      d = tx(Gw, a),
      f = nx[d.placedSide];
    return h.jsx("span", {
      ref: d.onArrowChange,
      style: {
        position: "absolute",
        left: d.arrowX,
        top: d.arrowY,
        [f]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[d.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[d.placedSide],
        visibility: d.shouldHideArrow ? "hidden" : void 0,
      },
      children: h.jsx(X0, {
        ...u,
        ref: s,
        style: { ...u.style, display: "block" },
      }),
    });
  });
Qw.displayName = Gw;
function rx(n) {
  return n !== null;
}
var ox = (n) => ({
  name: "transformOrigin",
  options: n,
  fn(r) {
    const { placement: s, rects: a, middlewareData: u } = r,
      f = u.arrow?.centerOffset !== 0,
      p = f ? 0 : n.arrowWidth,
      m = f ? 0 : n.arrowHeight,
      [k, g] = Kw(s),
      P = { start: "0%", center: "50%", end: "100%" }[g],
      S = (u.arrow?.x ?? 0) + p / 2,
      E = (u.arrow?.y ?? 0) + m / 2;
    let _ = "",
      v = "";
    return (
      k === "bottom"
        ? ((_ = f ? P : `${S}px`), (v = `${-m}px`))
        : k === "top"
          ? ((_ = f ? P : `${S}px`), (v = `${a.floating.height + m}px`))
          : k === "right"
            ? ((_ = `${-m}px`), (v = f ? P : `${E}px`))
            : k === "left" &&
              ((_ = `${a.floating.width + m}px`), (v = f ? P : `${E}px`)),
      { data: { x: _, y: v } }
    );
  },
});
function Kw(n) {
  const [r, s = "center"] = n.split("-");
  return [r, s];
}
var sx = Ww,
  ix = Hw,
  ax = $w,
  lx = Qw;
function ux(n) {
  const r = cx(n),
    s = y.forwardRef((a, u) => {
      const { children: d, ...f } = a,
        p = y.Children.toArray(d),
        m = p.find(fx);
      if (m) {
        const k = m.props.children,
          g = p.map((P) =>
            P === m
              ? y.Children.count(k) > 1
                ? y.Children.only(null)
                : y.isValidElement(k)
                  ? k.props.children
                  : null
              : P,
          );
        return h.jsx(r, {
          ...f,
          ref: u,
          children: y.isValidElement(k) ? y.cloneElement(k, void 0, g) : null,
        });
      }
      return h.jsx(r, { ...f, ref: u, children: d });
    });
  return (s.displayName = `${n}.Slot`), s;
}
function cx(n) {
  const r = y.forwardRef((s, a) => {
    const { children: u, ...d } = s;
    if (y.isValidElement(u)) {
      const f = hx(u),
        p = px(d, u.props);
      return (
        u.type !== y.Fragment && (p.ref = a ? Wo(a, f) : f),
        y.cloneElement(u, p)
      );
    }
    return y.Children.count(u) > 1 ? y.Children.only(null) : null;
  });
  return (r.displayName = `${n}.SlotClone`), r;
}
var dx = Symbol("radix.slottable");
function fx(n) {
  return (
    y.isValidElement(n) &&
    typeof n.type == "function" &&
    "__radixId" in n.type &&
    n.type.__radixId === dx
  );
}
function px(n, r) {
  const s = { ...r };
  for (const a in r) {
    const u = n[a],
      d = r[a];
    /^on[A-Z]/.test(a)
      ? u && d
        ? (s[a] = (...p) => {
            const m = d(...p);
            return u(...p), m;
          })
        : u && (s[a] = u)
      : a === "style"
        ? (s[a] = { ...u, ...d })
        : a === "className" && (s[a] = [u, d].filter(Boolean).join(" "));
  }
  return { ...n, ...s };
}
function hx(n) {
  let r = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
    s = r && "isReactWarning" in r && r.isReactWarning;
  return s
    ? n.ref
    : ((r = Object.getOwnPropertyDescriptor(n, "ref")?.get),
      (s = r && "isReactWarning" in r && r.isReactWarning),
      s ? n.props.ref : n.props.ref || n.ref);
}
function wx(n) {
  const r = y.useRef({ value: n, previous: n });
  return y.useMemo(
    () => (
      r.current.value !== n &&
        ((r.current.previous = r.current.value), (r.current.value = n)),
      r.current.previous
    ),
    [n],
  );
}
var yx = function (n) {
    if (typeof document > "u") return null;
    var r = Array.isArray(n) ? n[0] : n;
    return r.ownerDocument.body;
  },
  _r = new WeakMap(),
  oi = new WeakMap(),
  si = {},
  Zl = 0,
  Yw = function (n) {
    return n && (n.host || Yw(n.parentNode));
  },
  mx = function (n, r) {
    return r
      .map(function (s) {
        if (n.contains(s)) return s;
        var a = Yw(s);
        return a && n.contains(a)
          ? a
          : (console.error(
              "aria-hidden",
              s,
              "in not contained inside",
              n,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (s) {
        return !!s;
      });
  },
  kx = function (n, r, s, a) {
    var u = mx(r, Array.isArray(n) ? n : [n]);
    si[s] || (si[s] = new WeakMap());
    var d = si[s],
      f = [],
      p = new Set(),
      m = new Set(u),
      k = function (P) {
        !P || p.has(P) || (p.add(P), k(P.parentNode));
      };
    u.forEach(k);
    var g = function (P) {
      !P ||
        m.has(P) ||
        Array.prototype.forEach.call(P.children, function (S) {
          if (p.has(S)) g(S);
          else
            try {
              var E = S.getAttribute(a),
                _ = E !== null && E !== "false",
                v = (_r.get(S) || 0) + 1,
                x = (d.get(S) || 0) + 1;
              _r.set(S, v),
                d.set(S, x),
                f.push(S),
                v === 1 && _ && oi.set(S, !0),
                x === 1 && S.setAttribute(s, "true"),
                _ || S.setAttribute(a, "true");
            } catch (R) {
              console.error("aria-hidden: cannot operate on ", S, R);
            }
        });
    };
    return (
      g(r),
      p.clear(),
      Zl++,
      function () {
        f.forEach(function (P) {
          var S = _r.get(P) - 1,
            E = d.get(P) - 1;
          _r.set(P, S),
            d.set(P, E),
            S || (oi.has(P) || P.removeAttribute(a), oi.delete(P)),
            E || P.removeAttribute(s);
        }),
          Zl--,
          Zl ||
            ((_r = new WeakMap()),
            (_r = new WeakMap()),
            (oi = new WeakMap()),
            (si = {}));
      }
    );
  },
  vx = function (n, r, s) {
    s === void 0 && (s = "data-aria-hidden");
    var a = Array.from(Array.isArray(n) ? n : [n]),
      u = yx(n);
    return u
      ? (a.push.apply(a, Array.from(u.querySelectorAll("[aria-live], script"))),
        kx(a, u, s, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Ht = function () {
    return (
      (Ht =
        Object.assign ||
        function (r) {
          for (var s, a = 1, u = arguments.length; a < u; a++) {
            s = arguments[a];
            for (var d in s)
              Object.prototype.hasOwnProperty.call(s, d) && (r[d] = s[d]);
          }
          return r;
        }),
      Ht.apply(this, arguments)
    );
  };
function qw(n, r) {
  var s = {};
  for (var a in n)
    Object.prototype.hasOwnProperty.call(n, a) &&
      r.indexOf(a) < 0 &&
      (s[a] = n[a]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var u = 0, a = Object.getOwnPropertySymbols(n); u < a.length; u++)
      r.indexOf(a[u]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, a[u]) &&
        (s[a[u]] = n[a[u]]);
  return s;
}
function gx(n, r, s) {
  if (s || arguments.length === 2)
    for (var a = 0, u = r.length, d; a < u; a++)
      (d || !(a in r)) &&
        (d || (d = Array.prototype.slice.call(r, 0, a)), (d[a] = r[a]));
  return n.concat(d || Array.prototype.slice.call(r));
}
var pi = "right-scroll-bar-position",
  hi = "width-before-scroll-bar",
  Px = "with-scroll-bars-hidden",
  xx = "--removed-body-scroll-bar-size";
function eu(n, r) {
  return typeof n == "function" ? n(r) : n && (n.current = r), n;
}
function Tx(n, r) {
  var s = y.useState(function () {
    return {
      value: n,
      callback: r,
      facade: {
        get current() {
          return s.value;
        },
        set current(a) {
          var u = s.value;
          u !== a && ((s.value = a), s.callback(a, u));
        },
      },
    };
  })[0];
  return (s.callback = r), s.facade;
}
var Sx = typeof window < "u" ? y.useLayoutEffect : y.useEffect,
  Qp = new WeakMap();
function bx(n, r) {
  var s = Tx(null, function (a) {
    return n.forEach(function (u) {
      return eu(u, a);
    });
  });
  return (
    Sx(
      function () {
        var a = Qp.get(s);
        if (a) {
          var u = new Set(a),
            d = new Set(n),
            f = s.current;
          u.forEach(function (p) {
            d.has(p) || eu(p, null);
          }),
            d.forEach(function (p) {
              u.has(p) || eu(p, f);
            });
        }
        Qp.set(s, n);
      },
      [n],
    ),
    s
  );
}
function Cx(n) {
  return n;
}
function Ex(n, r) {
  r === void 0 && (r = Cx);
  var s = [],
    a = !1,
    u = {
      read: function () {
        if (a)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return s.length ? s[s.length - 1] : n;
      },
      useMedium: function (d) {
        var f = r(d, a);
        return (
          s.push(f),
          function () {
            s = s.filter(function (p) {
              return p !== f;
            });
          }
        );
      },
      assignSyncMedium: function (d) {
        for (a = !0; s.length; ) {
          var f = s;
          (s = []), f.forEach(d);
        }
        s = {
          push: function (p) {
            return d(p);
          },
          filter: function () {
            return s;
          },
        };
      },
      assignMedium: function (d) {
        a = !0;
        var f = [];
        if (s.length) {
          var p = s;
          (s = []), p.forEach(d), (f = s);
        }
        var m = function () {
            var g = f;
            (f = []), g.forEach(d);
          },
          k = function () {
            return Promise.resolve().then(m);
          };
        k(),
          (s = {
            push: function (g) {
              f.push(g), k();
            },
            filter: function (g) {
              return (f = f.filter(g)), s;
            },
          });
      },
    };
  return u;
}
function Nx(n) {
  n === void 0 && (n = {});
  var r = Ex(null);
  return (r.options = Ht({ async: !0, ssr: !1 }, n)), r;
}
var Xw = function (n) {
  var r = n.sideCar,
    s = qw(n, ["sideCar"]);
  if (!r)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var a = r.read();
  if (!a) throw new Error("Sidecar medium not found");
  return y.createElement(a, Ht({}, s));
};
Xw.isSideCarExport = !0;
function Rx(n, r) {
  return n.useMedium(r), Xw;
}
var Jw = Nx(),
  tu = function () {},
  Vi = y.forwardRef(function (n, r) {
    var s = y.useRef(null),
      a = y.useState({
        onScrollCapture: tu,
        onWheelCapture: tu,
        onTouchMoveCapture: tu,
      }),
      u = a[0],
      d = a[1],
      f = n.forwardProps,
      p = n.children,
      m = n.className,
      k = n.removeScrollBar,
      g = n.enabled,
      P = n.shards,
      S = n.sideCar,
      E = n.noRelative,
      _ = n.noIsolation,
      v = n.inert,
      x = n.allowPinchZoom,
      R = n.as,
      b = R === void 0 ? "div" : R,
      D = n.gapMode,
      M = qw(n, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      V = S,
      $ = bx([s, r]),
      z = Ht(Ht({}, M), u);
    return y.createElement(
      y.Fragment,
      null,
      g &&
        y.createElement(V, {
          sideCar: Jw,
          removeScrollBar: k,
          shards: P,
          noRelative: E,
          noIsolation: _,
          inert: v,
          setCallbacks: d,
          allowPinchZoom: !!x,
          lockRef: s,
          gapMode: D,
        }),
      f
        ? y.cloneElement(y.Children.only(p), Ht(Ht({}, z), { ref: $ }))
        : y.createElement(b, Ht({}, z, { className: m, ref: $ }), p),
    );
  });
Vi.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Vi.classNames = { fullWidth: hi, zeroRight: pi };
var Ox = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function _x() {
  if (!document) return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var r = Ox();
  return r && n.setAttribute("nonce", r), n;
}
function jx(n, r) {
  n.styleSheet
    ? (n.styleSheet.cssText = r)
    : n.appendChild(document.createTextNode(r));
}
function Dx(n) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(n);
}
var Ax = function () {
    var n = 0,
      r = null;
    return {
      add: function (s) {
        n == 0 && (r = _x()) && (jx(r, s), Dx(r)), n++;
      },
      remove: function () {
        n--,
          !n && r && (r.parentNode && r.parentNode.removeChild(r), (r = null));
      },
    };
  },
  Mx = function () {
    var n = Ax();
    return function (r, s) {
      y.useEffect(
        function () {
          return (
            n.add(r),
            function () {
              n.remove();
            }
          );
        },
        [r && s],
      );
    };
  },
  Zw = function () {
    var n = Mx(),
      r = function (s) {
        var a = s.styles,
          u = s.dynamic;
        return n(a, u), null;
      };
    return r;
  },
  Lx = { left: 0, top: 0, right: 0, gap: 0 },
  nu = function (n) {
    return parseInt(n || "", 10) || 0;
  },
  Ix = function (n) {
    var r = window.getComputedStyle(document.body),
      s = r[n === "padding" ? "paddingLeft" : "marginLeft"],
      a = r[n === "padding" ? "paddingTop" : "marginTop"],
      u = r[n === "padding" ? "paddingRight" : "marginRight"];
    return [nu(s), nu(a), nu(u)];
  },
  Fx = function (n) {
    if ((n === void 0 && (n = "margin"), typeof window > "u")) return Lx;
    var r = Ix(n),
      s = document.documentElement.clientWidth,
      a = window.innerWidth;
    return {
      left: r[0],
      top: r[1],
      right: r[2],
      gap: Math.max(0, a - s + r[2] - r[0]),
    };
  },
  Vx = Zw(),
  Lr = "data-scroll-locked",
  zx = function (n, r, s, a) {
    var u = n.left,
      d = n.top,
      f = n.right,
      p = n.gap;
    return (
      s === void 0 && (s = "margin"),
      `
  .`
        .concat(
          Px,
          ` {
   overflow: hidden `,
        )
        .concat(
          a,
          `;
   padding-right: `,
        )
        .concat(p, "px ")
        .concat(
          a,
          `;
  }
  body[`,
        )
        .concat(
          Lr,
          `] {
    overflow: hidden `,
        )
        .concat(
          a,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            r && "position: relative ".concat(a, ";"),
            s === "margin" &&
              `
    padding-left: `
                .concat(
                  u,
                  `px;
    padding-top: `,
                )
                .concat(
                  d,
                  `px;
    padding-right: `,
                )
                .concat(
                  f,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(p, "px ")
                .concat(
                  a,
                  `;
    `,
                ),
            s === "padding" &&
              "padding-right: ".concat(p, "px ").concat(a, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          pi,
          ` {
    right: `,
        )
        .concat(p, "px ")
        .concat(
          a,
          `;
  }
  
  .`,
        )
        .concat(
          hi,
          ` {
    margin-right: `,
        )
        .concat(p, "px ")
        .concat(
          a,
          `;
  }
  
  .`,
        )
        .concat(pi, " .")
        .concat(
          pi,
          ` {
    right: 0 `,
        )
        .concat(
          a,
          `;
  }
  
  .`,
        )
        .concat(hi, " .")
        .concat(
          hi,
          ` {
    margin-right: 0 `,
        )
        .concat(
          a,
          `;
  }
  
  body[`,
        )
        .concat(
          Lr,
          `] {
    `,
        )
        .concat(xx, ": ")
        .concat(
          p,
          `px;
  }
`,
        )
    );
  },
  Kp = function () {
    var n = parseInt(document.body.getAttribute(Lr) || "0", 10);
    return isFinite(n) ? n : 0;
  },
  Bx = function () {
    y.useEffect(function () {
      return (
        document.body.setAttribute(Lr, (Kp() + 1).toString()),
        function () {
          var n = Kp() - 1;
          n <= 0
            ? document.body.removeAttribute(Lr)
            : document.body.setAttribute(Lr, n.toString());
        }
      );
    }, []);
  },
  Wx = function (n) {
    var r = n.noRelative,
      s = n.noImportant,
      a = n.gapMode,
      u = a === void 0 ? "margin" : a;
    Bx();
    var d = y.useMemo(
      function () {
        return Fx(u);
      },
      [u],
    );
    return y.createElement(Vx, { styles: zx(d, !r, u, s ? "" : "!important") });
  },
  Pu = !1;
if (typeof window < "u")
  try {
    var ii = Object.defineProperty({}, "passive", {
      get: function () {
        return (Pu = !0), !0;
      },
    });
    window.addEventListener("test", ii, ii),
      window.removeEventListener("test", ii, ii);
  } catch {
    Pu = !1;
  }
var jr = Pu ? { passive: !1 } : !1,
  Ux = function (n) {
    return n.tagName === "TEXTAREA";
  },
  ey = function (n, r) {
    if (!(n instanceof Element)) return !1;
    var s = window.getComputedStyle(n);
    return (
      s[r] !== "hidden" &&
      !(s.overflowY === s.overflowX && !Ux(n) && s[r] === "visible")
    );
  },
  Hx = function (n) {
    return ey(n, "overflowY");
  },
  $x = function (n) {
    return ey(n, "overflowX");
  },
  Yp = function (n, r) {
    var s = r.ownerDocument,
      a = r;
    do {
      typeof ShadowRoot < "u" && a instanceof ShadowRoot && (a = a.host);
      var u = ty(n, a);
      if (u) {
        var d = ny(n, a),
          f = d[1],
          p = d[2];
        if (f > p) return !0;
      }
      a = a.parentNode;
    } while (a && a !== s.body);
    return !1;
  },
  Gx = function (n) {
    var r = n.scrollTop,
      s = n.scrollHeight,
      a = n.clientHeight;
    return [r, s, a];
  },
  Qx = function (n) {
    var r = n.scrollLeft,
      s = n.scrollWidth,
      a = n.clientWidth;
    return [r, s, a];
  },
  ty = function (n, r) {
    return n === "v" ? Hx(r) : $x(r);
  },
  ny = function (n, r) {
    return n === "v" ? Gx(r) : Qx(r);
  },
  Kx = function (n, r) {
    return n === "h" && r === "rtl" ? -1 : 1;
  },
  Yx = function (n, r, s, a, u) {
    var d = Kx(n, window.getComputedStyle(r).direction),
      f = d * a,
      p = s.target,
      m = r.contains(p),
      k = !1,
      g = f > 0,
      P = 0,
      S = 0;
    do {
      if (!p) break;
      var E = ny(n, p),
        _ = E[0],
        v = E[1],
        x = E[2],
        R = v - x - d * _;
      (_ || R) && ty(n, p) && ((P += R), (S += _));
      var b = p.parentNode;
      p = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
    } while ((!m && p !== document.body) || (m && (r.contains(p) || r === p)));
    return ((g && Math.abs(P) < 1) || (!g && Math.abs(S) < 1)) && (k = !0), k;
  },
  ai = function (n) {
    return "changedTouches" in n
      ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY]
      : [0, 0];
  },
  qp = function (n) {
    return [n.deltaX, n.deltaY];
  },
  Xp = function (n) {
    return n && "current" in n ? n.current : n;
  },
  qx = function (n, r) {
    return n[0] === r[0] && n[1] === r[1];
  },
  Xx = function (n) {
    return `
  .block-interactivity-`
      .concat(
        n,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        n,
        ` {pointer-events: all;}
`,
      );
  },
  Jx = 0,
  Dr = [];
function Zx(n) {
  var r = y.useRef([]),
    s = y.useRef([0, 0]),
    a = y.useRef(),
    u = y.useState(Jx++)[0],
    d = y.useState(Zw)[0],
    f = y.useRef(n);
  y.useEffect(
    function () {
      f.current = n;
    },
    [n],
  ),
    y.useEffect(
      function () {
        if (n.inert) {
          document.body.classList.add("block-interactivity-".concat(u));
          var v = gx([n.lockRef.current], (n.shards || []).map(Xp), !0).filter(
            Boolean,
          );
          return (
            v.forEach(function (x) {
              return x.classList.add("allow-interactivity-".concat(u));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(u)),
                v.forEach(function (x) {
                  return x.classList.remove("allow-interactivity-".concat(u));
                });
            }
          );
        }
      },
      [n.inert, n.lockRef.current, n.shards],
    );
  var p = y.useCallback(function (v, x) {
      if (
        ("touches" in v && v.touches.length === 2) ||
        (v.type === "wheel" && v.ctrlKey)
      )
        return !f.current.allowPinchZoom;
      var R = ai(v),
        b = s.current,
        D = "deltaX" in v ? v.deltaX : b[0] - R[0],
        M = "deltaY" in v ? v.deltaY : b[1] - R[1],
        V,
        $ = v.target,
        z = Math.abs(D) > Math.abs(M) ? "h" : "v";
      if ("touches" in v && z === "h" && $.type === "range") return !1;
      var J = window.getSelection(),
        K = J && J.anchorNode,
        ee = K ? K === $ || K.contains($) : !1;
      if (ee) return !1;
      var I = Yp(z, $);
      if (!I) return !0;
      if ((I ? (V = z) : ((V = z === "v" ? "h" : "v"), (I = Yp(z, $))), !I))
        return !1;
      if (
        (!a.current && "changedTouches" in v && (D || M) && (a.current = V), !V)
      )
        return !0;
      var W = a.current || V;
      return Yx(W, x, v, W === "h" ? D : M);
    }, []),
    m = y.useCallback(function (v) {
      var x = v;
      if (!(!Dr.length || Dr[Dr.length - 1] !== d)) {
        var R = "deltaY" in x ? qp(x) : ai(x),
          b = r.current.filter(function (V) {
            return (
              V.name === x.type &&
              (V.target === x.target || x.target === V.shadowParent) &&
              qx(V.delta, R)
            );
          })[0];
        if (b && b.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!b) {
          var D = (f.current.shards || [])
              .map(Xp)
              .filter(Boolean)
              .filter(function (V) {
                return V.contains(x.target);
              }),
            M = D.length > 0 ? p(x, D[0]) : !f.current.noIsolation;
          M && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    k = y.useCallback(function (v, x, R, b) {
      var D = { name: v, delta: x, target: R, should: b, shadowParent: e2(R) };
      r.current.push(D),
        setTimeout(function () {
          r.current = r.current.filter(function (M) {
            return M !== D;
          });
        }, 1);
    }, []),
    g = y.useCallback(function (v) {
      (s.current = ai(v)), (a.current = void 0);
    }, []),
    P = y.useCallback(function (v) {
      k(v.type, qp(v), v.target, p(v, n.lockRef.current));
    }, []),
    S = y.useCallback(function (v) {
      k(v.type, ai(v), v.target, p(v, n.lockRef.current));
    }, []);
  y.useEffect(function () {
    return (
      Dr.push(d),
      n.setCallbacks({
        onScrollCapture: P,
        onWheelCapture: P,
        onTouchMoveCapture: S,
      }),
      document.addEventListener("wheel", m, jr),
      document.addEventListener("touchmove", m, jr),
      document.addEventListener("touchstart", g, jr),
      function () {
        (Dr = Dr.filter(function (v) {
          return v !== d;
        })),
          document.removeEventListener("wheel", m, jr),
          document.removeEventListener("touchmove", m, jr),
          document.removeEventListener("touchstart", g, jr);
      }
    );
  }, []);
  var E = n.removeScrollBar,
    _ = n.inert;
  return y.createElement(
    y.Fragment,
    null,
    _ ? y.createElement(d, { styles: Xx(u) }) : null,
    E
      ? y.createElement(Wx, { noRelative: n.noRelative, gapMode: n.gapMode })
      : null,
  );
}
function e2(n) {
  for (var r = null; n !== null; )
    n instanceof ShadowRoot && ((r = n.host), (n = n.host)), (n = n.parentNode);
  return r;
}
const t2 = Rx(Jw, Zx);
var ry = y.forwardRef(function (n, r) {
  return y.createElement(Vi, Ht({}, n, { ref: r, sideCar: t2 }));
});
ry.classNames = Vi.classNames;
var n2 = [" ", "Enter", "ArrowUp", "ArrowDown"],
  r2 = [" ", "Enter"],
  nr = "Select",
  [zi, Bi, o2] = Rh(nr),
  [Ur] = ji(nr, [o2, zw]),
  Wi = zw(),
  [s2, Mn] = Ur(nr),
  [i2, a2] = Ur(nr),
  oy = (n) => {
    const {
        __scopeSelect: r,
        children: s,
        open: a,
        defaultOpen: u,
        onOpenChange: d,
        value: f,
        defaultValue: p,
        onValueChange: m,
        dir: k,
        name: g,
        autoComplete: P,
        disabled: S,
        required: E,
        form: _,
      } = n,
      v = Wi(r),
      [x, R] = y.useState(null),
      [b, D] = y.useState(null),
      [M, V] = y.useState(!1),
      $ = MP(k),
      [z, J] = pu({ prop: a, defaultProp: u ?? !1, onChange: d, caller: nr }),
      [K, ee] = pu({ prop: f, defaultProp: p, onChange: m, caller: nr }),
      I = y.useRef(null),
      W = x ? _ || !!x.closest("form") : !0,
      [te, Q] = y.useState(new Set()),
      ue = Array.from(te)
        .map((oe) => oe.props.value)
        .join(";");
    return h.jsx(sx, {
      ...v,
      children: h.jsxs(s2, {
        required: E,
        scope: r,
        trigger: x,
        onTriggerChange: R,
        valueNode: b,
        onValueNodeChange: D,
        valueNodeHasChildren: M,
        onValueNodeHasChildrenChange: V,
        contentId: Wu(),
        value: K,
        onValueChange: ee,
        open: z,
        onOpenChange: J,
        dir: $,
        triggerPointerDownPosRef: I,
        disabled: S,
        children: [
          h.jsx(zi.Provider, {
            scope: r,
            children: h.jsx(i2, {
              scope: n.__scopeSelect,
              onNativeOptionAdd: y.useCallback((oe) => {
                Q((se) => new Set(se).add(oe));
              }, []),
              onNativeOptionRemove: y.useCallback((oe) => {
                Q((se) => {
                  const F = new Set(se);
                  return F.delete(oe), F;
                });
              }, []),
              children: s,
            }),
          }),
          W
            ? h.jsxs(
                Ny,
                {
                  "aria-hidden": !0,
                  required: E,
                  tabIndex: -1,
                  name: g,
                  autoComplete: P,
                  value: K,
                  onChange: (oe) => ee(oe.target.value),
                  disabled: S,
                  form: _,
                  children: [
                    K === void 0 ? h.jsx("option", { value: "" }) : null,
                    Array.from(te),
                  ],
                },
                ue,
              )
            : null,
        ],
      }),
    });
  };
oy.displayName = nr;
var sy = "SelectTrigger",
  iy = y.forwardRef((n, r) => {
    const { __scopeSelect: s, disabled: a = !1, ...u } = n,
      d = Wi(s),
      f = Mn(sy, s),
      p = f.disabled || a,
      m = Be(r, f.onTriggerChange),
      k = Bi(s),
      g = y.useRef("touch"),
      [P, S, E] = Oy((v) => {
        const x = k().filter((D) => !D.disabled),
          R = x.find((D) => D.value === f.value),
          b = _y(x, v, R);
        b !== void 0 && f.onValueChange(b.value);
      }),
      _ = (v) => {
        p || (f.onOpenChange(!0), E()),
          v &&
            (f.triggerPointerDownPosRef.current = {
              x: Math.round(v.pageX),
              y: Math.round(v.pageY),
            });
      };
    return h.jsx(ix, {
      asChild: !0,
      ...d,
      children: h.jsx(Ee.button, {
        type: "button",
        role: "combobox",
        "aria-controls": f.contentId,
        "aria-expanded": f.open,
        "aria-required": f.required,
        "aria-autocomplete": "none",
        dir: f.dir,
        "data-state": f.open ? "open" : "closed",
        disabled: p,
        "data-disabled": p ? "" : void 0,
        "data-placeholder": Ry(f.value) ? "" : void 0,
        ...u,
        ref: m,
        onClick: Se(u.onClick, (v) => {
          v.currentTarget.focus(), g.current !== "mouse" && _(v);
        }),
        onPointerDown: Se(u.onPointerDown, (v) => {
          g.current = v.pointerType;
          const x = v.target;
          x.hasPointerCapture(v.pointerId) &&
            x.releasePointerCapture(v.pointerId),
            v.button === 0 &&
              v.ctrlKey === !1 &&
              v.pointerType === "mouse" &&
              (_(v), v.preventDefault());
        }),
        onKeyDown: Se(u.onKeyDown, (v) => {
          const x = P.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) &&
            v.key.length === 1 &&
            S(v.key),
            !(x && v.key === " ") &&
              n2.includes(v.key) &&
              (_(), v.preventDefault());
        }),
      }),
    });
  });
iy.displayName = sy;
var ay = "SelectValue",
  ly = y.forwardRef((n, r) => {
    const {
        __scopeSelect: s,
        className: a,
        style: u,
        children: d,
        placeholder: f = "",
        ...p
      } = n,
      m = Mn(ay, s),
      { onValueNodeHasChildrenChange: k } = m,
      g = d !== void 0,
      P = Be(r, m.onValueNodeChange);
    return (
      Xe(() => {
        k(g);
      }, [k, g]),
      h.jsx(Ee.span, {
        ...p,
        ref: P,
        style: { pointerEvents: "none" },
        children: Ry(m.value) ? h.jsx(h.Fragment, { children: f }) : d,
      })
    );
  });
ly.displayName = ay;
var l2 = "SelectIcon",
  uy = y.forwardRef((n, r) => {
    const { __scopeSelect: s, children: a, ...u } = n;
    return h.jsx(Ee.span, {
      "aria-hidden": !0,
      ...u,
      ref: r,
      children: a || "▼",
    });
  });
uy.displayName = l2;
var u2 = "SelectPortal",
  cy = (n) => h.jsx(Lu, { asChild: !0, ...n });
cy.displayName = u2;
var rr = "SelectContent",
  dy = y.forwardRef((n, r) => {
    const s = Mn(rr, n.__scopeSelect),
      [a, u] = y.useState();
    if (
      (Xe(() => {
        u(new DocumentFragment());
      }, []),
      !s.open)
    ) {
      const d = a;
      return d
        ? Vr.createPortal(
            h.jsx(fy, {
              scope: n.__scopeSelect,
              children: h.jsx(zi.Slot, {
                scope: n.__scopeSelect,
                children: h.jsx("div", { children: n.children }),
              }),
            }),
            d,
          )
        : null;
    }
    return h.jsx(py, { ...n, ref: r });
  });
dy.displayName = rr;
var Mt = 10,
  [fy, Ln] = Ur(rr),
  c2 = "SelectContentImpl",
  d2 = ux("SelectContent.RemoveScroll"),
  py = y.forwardRef((n, r) => {
    const {
        __scopeSelect: s,
        position: a = "item-aligned",
        onCloseAutoFocus: u,
        onEscapeKeyDown: d,
        onPointerDownOutside: f,
        side: p,
        sideOffset: m,
        align: k,
        alignOffset: g,
        arrowPadding: P,
        collisionBoundary: S,
        collisionPadding: E,
        sticky: _,
        hideWhenDetached: v,
        avoidCollisions: x,
        ...R
      } = n,
      b = Mn(rr, s),
      [D, M] = y.useState(null),
      [V, $] = y.useState(null),
      z = Be(r, (Z) => M(Z)),
      [J, K] = y.useState(null),
      [ee, I] = y.useState(null),
      W = Bi(s),
      [te, Q] = y.useState(!1),
      ue = y.useRef(!1);
    y.useEffect(() => {
      if (D) return vx(D);
    }, [D]),
      LP();
    const oe = y.useCallback(
        (Z) => {
          const [ce, ...ke] = W().map((Ae) => Ae.ref.current),
            [ge] = ke.slice(-1),
            be = document.activeElement;
          for (const Ae of Z)
            if (
              Ae === be ||
              (Ae?.scrollIntoView({ block: "nearest" }),
              Ae === ce && V && (V.scrollTop = 0),
              Ae === ge && V && (V.scrollTop = V.scrollHeight),
              Ae?.focus(),
              document.activeElement !== be)
            )
              return;
        },
        [W, V],
      ),
      se = y.useCallback(() => oe([J, D]), [oe, J, D]);
    y.useEffect(() => {
      te && se();
    }, [te, se]);
    const { onOpenChange: F, triggerPointerDownPosRef: q } = b;
    y.useEffect(() => {
      if (D) {
        let Z = { x: 0, y: 0 };
        const ce = (ge) => {
            Z = {
              x: Math.abs(Math.round(ge.pageX) - (q.current?.x ?? 0)),
              y: Math.abs(Math.round(ge.pageY) - (q.current?.y ?? 0)),
            };
          },
          ke = (ge) => {
            Z.x <= 10 && Z.y <= 10
              ? ge.preventDefault()
              : D.contains(ge.target) || F(!1),
              document.removeEventListener("pointermove", ce),
              (q.current = null);
          };
        return (
          q.current !== null &&
            (document.addEventListener("pointermove", ce),
            document.addEventListener("pointerup", ke, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", ce),
              document.removeEventListener("pointerup", ke, { capture: !0 });
          }
        );
      }
    }, [D, F, q]),
      y.useEffect(() => {
        const Z = () => F(!1);
        return (
          window.addEventListener("blur", Z),
          window.addEventListener("resize", Z),
          () => {
            window.removeEventListener("blur", Z),
              window.removeEventListener("resize", Z);
          }
        );
      }, [F]);
    const [X, O] = Oy((Z) => {
        const ce = W().filter((be) => !be.disabled),
          ke = ce.find((be) => be.ref.current === document.activeElement),
          ge = _y(ce, Z, ke);
        ge && setTimeout(() => ge.ref.current.focus());
      }),
      B = y.useCallback(
        (Z, ce, ke) => {
          const ge = !ue.current && !ke;
          ((b.value !== void 0 && b.value === ce) || ge) &&
            (K(Z), ge && (ue.current = !0));
        },
        [b.value],
      ),
      pe = y.useCallback(() => D?.focus(), [D]),
      he = y.useCallback(
        (Z, ce, ke) => {
          const ge = !ue.current && !ke;
          ((b.value !== void 0 && b.value === ce) || ge) && I(Z);
        },
        [b.value],
      ),
      ve = a === "popper" ? xu : hy,
      me =
        ve === xu
          ? {
              side: p,
              sideOffset: m,
              align: k,
              alignOffset: g,
              arrowPadding: P,
              collisionBoundary: S,
              collisionPadding: E,
              sticky: _,
              hideWhenDetached: v,
              avoidCollisions: x,
            }
          : {};
    return h.jsx(fy, {
      scope: s,
      content: D,
      viewport: V,
      onViewportChange: $,
      itemRefCallback: B,
      selectedItem: J,
      onItemLeave: pe,
      itemTextRefCallback: he,
      focusSelectedItem: se,
      selectedItemText: ee,
      position: a,
      isPositioned: te,
      searchRef: X,
      children: h.jsx(ry, {
        as: d2,
        allowPinchZoom: !0,
        children: h.jsx(bw, {
          asChild: !0,
          trapped: b.open,
          onMountAutoFocus: (Z) => {
            Z.preventDefault();
          },
          onUnmountAutoFocus: Se(u, (Z) => {
            b.trigger?.focus({ preventScroll: !0 }), Z.preventDefault();
          }),
          children: h.jsx(Mu, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: d,
            onPointerDownOutside: f,
            onFocusOutside: (Z) => Z.preventDefault(),
            onDismiss: () => b.onOpenChange(!1),
            children: h.jsx(ve, {
              role: "listbox",
              id: b.contentId,
              "data-state": b.open ? "open" : "closed",
              dir: b.dir,
              onContextMenu: (Z) => Z.preventDefault(),
              ...R,
              ...me,
              onPlaced: () => Q(!0),
              ref: z,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...R.style,
              },
              onKeyDown: Se(R.onKeyDown, (Z) => {
                const ce = Z.ctrlKey || Z.altKey || Z.metaKey;
                if (
                  (Z.key === "Tab" && Z.preventDefault(),
                  !ce && Z.key.length === 1 && O(Z.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(Z.key))
                ) {
                  let ge = W()
                    .filter((be) => !be.disabled)
                    .map((be) => be.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(Z.key) &&
                      (ge = ge.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(Z.key))
                  ) {
                    const be = Z.target,
                      Ae = ge.indexOf(be);
                    ge = ge.slice(Ae + 1);
                  }
                  setTimeout(() => oe(ge)), Z.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
py.displayName = c2;
var f2 = "SelectItemAlignedPosition",
  hy = y.forwardRef((n, r) => {
    const { __scopeSelect: s, onPlaced: a, ...u } = n,
      d = Mn(rr, s),
      f = Ln(rr, s),
      [p, m] = y.useState(null),
      [k, g] = y.useState(null),
      P = Be(r, (z) => g(z)),
      S = Bi(s),
      E = y.useRef(!1),
      _ = y.useRef(!0),
      {
        viewport: v,
        selectedItem: x,
        selectedItemText: R,
        focusSelectedItem: b,
      } = f,
      D = y.useCallback(() => {
        if (d.trigger && d.valueNode && p && k && v && x && R) {
          const z = d.trigger.getBoundingClientRect(),
            J = k.getBoundingClientRect(),
            K = d.valueNode.getBoundingClientRect(),
            ee = R.getBoundingClientRect();
          if (d.dir !== "rtl") {
            const be = ee.left - J.left,
              Ae = K.left - be,
              Ke = z.left - Ae,
              Et = z.width + Ke,
              or = Math.max(Et, J.width),
              sr = window.innerWidth - Mt,
              In = Op(Ae, [Mt, Math.max(Mt, sr - or)]);
            (p.style.minWidth = Et + "px"), (p.style.left = In + "px");
          } else {
            const be = J.right - ee.right,
              Ae = window.innerWidth - K.right - be,
              Ke = window.innerWidth - z.right - Ae,
              Et = z.width + Ke,
              or = Math.max(Et, J.width),
              sr = window.innerWidth - Mt,
              In = Op(Ae, [Mt, Math.max(Mt, sr - or)]);
            (p.style.minWidth = Et + "px"), (p.style.right = In + "px");
          }
          const I = S(),
            W = window.innerHeight - Mt * 2,
            te = v.scrollHeight,
            Q = window.getComputedStyle(k),
            ue = parseInt(Q.borderTopWidth, 10),
            oe = parseInt(Q.paddingTop, 10),
            se = parseInt(Q.borderBottomWidth, 10),
            F = parseInt(Q.paddingBottom, 10),
            q = ue + oe + te + F + se,
            X = Math.min(x.offsetHeight * 5, q),
            O = window.getComputedStyle(v),
            B = parseInt(O.paddingTop, 10),
            pe = parseInt(O.paddingBottom, 10),
            he = z.top + z.height / 2 - Mt,
            ve = W - he,
            me = x.offsetHeight / 2,
            Z = x.offsetTop + me,
            ce = ue + oe + Z,
            ke = q - ce;
          if (ce <= he) {
            const be = I.length > 0 && x === I[I.length - 1].ref.current;
            p.style.bottom = "0px";
            const Ae = k.clientHeight - v.offsetTop - v.offsetHeight,
              Ke = Math.max(ve, me + (be ? pe : 0) + Ae + se),
              Et = ce + Ke;
            p.style.height = Et + "px";
          } else {
            const be = I.length > 0 && x === I[0].ref.current;
            p.style.top = "0px";
            const Ke = Math.max(he, ue + v.offsetTop + (be ? B : 0) + me) + ke;
            (p.style.height = Ke + "px"), (v.scrollTop = ce - he + v.offsetTop);
          }
          (p.style.margin = `${Mt}px 0`),
            (p.style.minHeight = X + "px"),
            (p.style.maxHeight = W + "px"),
            a?.(),
            requestAnimationFrame(() => (E.current = !0));
        }
      }, [S, d.trigger, d.valueNode, p, k, v, x, R, d.dir, a]);
    Xe(() => D(), [D]);
    const [M, V] = y.useState();
    Xe(() => {
      k && V(window.getComputedStyle(k).zIndex);
    }, [k]);
    const $ = y.useCallback(
      (z) => {
        z && _.current === !0 && (D(), b?.(), (_.current = !1));
      },
      [D, b],
    );
    return h.jsx(h2, {
      scope: s,
      contentWrapper: p,
      shouldExpandOnScrollRef: E,
      onScrollButtonChange: $,
      children: h.jsx("div", {
        ref: m,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: M,
        },
        children: h.jsx(Ee.div, {
          ...u,
          ref: P,
          style: { boxSizing: "border-box", maxHeight: "100%", ...u.style },
        }),
      }),
    });
  });
hy.displayName = f2;
var p2 = "SelectPopperPosition",
  xu = y.forwardRef((n, r) => {
    const {
        __scopeSelect: s,
        align: a = "start",
        collisionPadding: u = Mt,
        ...d
      } = n,
      f = Wi(s);
    return h.jsx(ax, {
      ...f,
      ...d,
      ref: r,
      align: a,
      collisionPadding: u,
      style: {
        boxSizing: "border-box",
        ...d.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
xu.displayName = p2;
var [h2, Xu] = Ur(rr, {}),
  Tu = "SelectViewport",
  wy = y.forwardRef((n, r) => {
    const { __scopeSelect: s, nonce: a, ...u } = n,
      d = Ln(Tu, s),
      f = Xu(Tu, s),
      p = Be(r, d.onViewportChange),
      m = y.useRef(0);
    return h.jsxs(h.Fragment, {
      children: [
        h.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: a,
        }),
        h.jsx(zi.Slot, {
          scope: s,
          children: h.jsx(Ee.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...u,
            ref: p,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...u.style,
            },
            onScroll: Se(u.onScroll, (k) => {
              const g = k.currentTarget,
                { contentWrapper: P, shouldExpandOnScrollRef: S } = f;
              if (S?.current && P) {
                const E = Math.abs(m.current - g.scrollTop);
                if (E > 0) {
                  const _ = window.innerHeight - Mt * 2,
                    v = parseFloat(P.style.minHeight),
                    x = parseFloat(P.style.height),
                    R = Math.max(v, x);
                  if (R < _) {
                    const b = R + E,
                      D = Math.min(_, b),
                      M = b - D;
                    (P.style.height = D + "px"),
                      P.style.bottom === "0px" &&
                        ((g.scrollTop = M > 0 ? M : 0),
                        (P.style.justifyContent = "flex-end"));
                  }
                }
              }
              m.current = g.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
wy.displayName = Tu;
var yy = "SelectGroup",
  [w2, y2] = Ur(yy),
  m2 = y.forwardRef((n, r) => {
    const { __scopeSelect: s, ...a } = n,
      u = Wu();
    return h.jsx(w2, {
      scope: s,
      id: u,
      children: h.jsx(Ee.div, {
        role: "group",
        "aria-labelledby": u,
        ...a,
        ref: r,
      }),
    });
  });
m2.displayName = yy;
var my = "SelectLabel",
  ky = y.forwardRef((n, r) => {
    const { __scopeSelect: s, ...a } = n,
      u = y2(my, s);
    return h.jsx(Ee.div, { id: u.id, ...a, ref: r });
  });
ky.displayName = my;
var Ei = "SelectItem",
  [k2, vy] = Ur(Ei),
  gy = y.forwardRef((n, r) => {
    const {
        __scopeSelect: s,
        value: a,
        disabled: u = !1,
        textValue: d,
        ...f
      } = n,
      p = Mn(Ei, s),
      m = Ln(Ei, s),
      k = p.value === a,
      [g, P] = y.useState(d ?? ""),
      [S, E] = y.useState(!1),
      _ = Be(r, (b) => m.itemRefCallback?.(b, a, u)),
      v = Wu(),
      x = y.useRef("touch"),
      R = () => {
        u || (p.onValueChange(a), p.onOpenChange(!1));
      };
    if (a === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
      );
    return h.jsx(k2, {
      scope: s,
      value: a,
      disabled: u,
      textId: v,
      isSelected: k,
      onItemTextChange: y.useCallback((b) => {
        P((D) => D || (b?.textContent ?? "").trim());
      }, []),
      children: h.jsx(zi.ItemSlot, {
        scope: s,
        value: a,
        disabled: u,
        textValue: g,
        children: h.jsx(Ee.div, {
          role: "option",
          "aria-labelledby": v,
          "data-highlighted": S ? "" : void 0,
          "aria-selected": k && S,
          "data-state": k ? "checked" : "unchecked",
          "aria-disabled": u || void 0,
          "data-disabled": u ? "" : void 0,
          tabIndex: u ? void 0 : -1,
          ...f,
          ref: _,
          onFocus: Se(f.onFocus, () => E(!0)),
          onBlur: Se(f.onBlur, () => E(!1)),
          onClick: Se(f.onClick, () => {
            x.current !== "mouse" && R();
          }),
          onPointerUp: Se(f.onPointerUp, () => {
            x.current === "mouse" && R();
          }),
          onPointerDown: Se(f.onPointerDown, (b) => {
            x.current = b.pointerType;
          }),
          onPointerMove: Se(f.onPointerMove, (b) => {
            (x.current = b.pointerType),
              u
                ? m.onItemLeave?.()
                : x.current === "mouse" &&
                  b.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: Se(f.onPointerLeave, (b) => {
            b.currentTarget === document.activeElement && m.onItemLeave?.();
          }),
          onKeyDown: Se(f.onKeyDown, (b) => {
            (m.searchRef?.current !== "" && b.key === " ") ||
              (r2.includes(b.key) && R(), b.key === " " && b.preventDefault());
          }),
        }),
      }),
    });
  });
gy.displayName = Ei;
var Mo = "SelectItemText",
  Py = y.forwardRef((n, r) => {
    const { __scopeSelect: s, className: a, style: u, ...d } = n,
      f = Mn(Mo, s),
      p = Ln(Mo, s),
      m = vy(Mo, s),
      k = a2(Mo, s),
      [g, P] = y.useState(null),
      S = Be(
        r,
        (R) => P(R),
        m.onItemTextChange,
        (R) => p.itemTextRefCallback?.(R, m.value, m.disabled),
      ),
      E = g?.textContent,
      _ = y.useMemo(
        () =>
          h.jsx(
            "option",
            { value: m.value, disabled: m.disabled, children: E },
            m.value,
          ),
        [m.disabled, m.value, E],
      ),
      { onNativeOptionAdd: v, onNativeOptionRemove: x } = k;
    return (
      Xe(() => (v(_), () => x(_)), [v, x, _]),
      h.jsxs(h.Fragment, {
        children: [
          h.jsx(Ee.span, { id: m.textId, ...d, ref: S }),
          m.isSelected && f.valueNode && !f.valueNodeHasChildren
            ? Vr.createPortal(d.children, f.valueNode)
            : null,
        ],
      })
    );
  });
Py.displayName = Mo;
var xy = "SelectItemIndicator",
  Ty = y.forwardRef((n, r) => {
    const { __scopeSelect: s, ...a } = n;
    return vy(xy, s).isSelected
      ? h.jsx(Ee.span, { "aria-hidden": !0, ...a, ref: r })
      : null;
  });
Ty.displayName = xy;
var Su = "SelectScrollUpButton",
  Sy = y.forwardRef((n, r) => {
    const s = Ln(Su, n.__scopeSelect),
      a = Xu(Su, n.__scopeSelect),
      [u, d] = y.useState(!1),
      f = Be(r, a.onScrollButtonChange);
    return (
      Xe(() => {
        if (s.viewport && s.isPositioned) {
          let p = function () {
            const k = m.scrollTop > 0;
            d(k);
          };
          const m = s.viewport;
          return (
            p(),
            m.addEventListener("scroll", p),
            () => m.removeEventListener("scroll", p)
          );
        }
      }, [s.viewport, s.isPositioned]),
      u
        ? h.jsx(Cy, {
            ...n,
            ref: f,
            onAutoScroll: () => {
              const { viewport: p, selectedItem: m } = s;
              p && m && (p.scrollTop = p.scrollTop - m.offsetHeight);
            },
          })
        : null
    );
  });
Sy.displayName = Su;
var bu = "SelectScrollDownButton",
  by = y.forwardRef((n, r) => {
    const s = Ln(bu, n.__scopeSelect),
      a = Xu(bu, n.__scopeSelect),
      [u, d] = y.useState(!1),
      f = Be(r, a.onScrollButtonChange);
    return (
      Xe(() => {
        if (s.viewport && s.isPositioned) {
          let p = function () {
            const k = m.scrollHeight - m.clientHeight,
              g = Math.ceil(m.scrollTop) < k;
            d(g);
          };
          const m = s.viewport;
          return (
            p(),
            m.addEventListener("scroll", p),
            () => m.removeEventListener("scroll", p)
          );
        }
      }, [s.viewport, s.isPositioned]),
      u
        ? h.jsx(Cy, {
            ...n,
            ref: f,
            onAutoScroll: () => {
              const { viewport: p, selectedItem: m } = s;
              p && m && (p.scrollTop = p.scrollTop + m.offsetHeight);
            },
          })
        : null
    );
  });
by.displayName = bu;
var Cy = y.forwardRef((n, r) => {
    const { __scopeSelect: s, onAutoScroll: a, ...u } = n,
      d = Ln("SelectScrollButton", s),
      f = y.useRef(null),
      p = Bi(s),
      m = y.useCallback(() => {
        f.current !== null &&
          (window.clearInterval(f.current), (f.current = null));
      }, []);
    return (
      y.useEffect(() => () => m(), [m]),
      Xe(() => {
        p()
          .find((g) => g.ref.current === document.activeElement)
          ?.ref.current?.scrollIntoView({ block: "nearest" });
      }, [p]),
      h.jsx(Ee.div, {
        "aria-hidden": !0,
        ...u,
        ref: r,
        style: { flexShrink: 0, ...u.style },
        onPointerDown: Se(u.onPointerDown, () => {
          f.current === null && (f.current = window.setInterval(a, 50));
        }),
        onPointerMove: Se(u.onPointerMove, () => {
          d.onItemLeave?.(),
            f.current === null && (f.current = window.setInterval(a, 50));
        }),
        onPointerLeave: Se(u.onPointerLeave, () => {
          m();
        }),
      })
    );
  }),
  v2 = "SelectSeparator",
  Ey = y.forwardRef((n, r) => {
    const { __scopeSelect: s, ...a } = n;
    return h.jsx(Ee.div, { "aria-hidden": !0, ...a, ref: r });
  });
Ey.displayName = v2;
var Cu = "SelectArrow",
  g2 = y.forwardRef((n, r) => {
    const { __scopeSelect: s, ...a } = n,
      u = Wi(s),
      d = Mn(Cu, s),
      f = Ln(Cu, s);
    return d.open && f.position === "popper"
      ? h.jsx(lx, { ...u, ...a, ref: r })
      : null;
  });
g2.displayName = Cu;
var P2 = "SelectBubbleInput",
  Ny = y.forwardRef(({ __scopeSelect: n, value: r, ...s }, a) => {
    const u = y.useRef(null),
      d = Be(a, u),
      f = wx(r);
    return (
      y.useEffect(() => {
        const p = u.current;
        if (!p) return;
        const m = window.HTMLSelectElement.prototype,
          g = Object.getOwnPropertyDescriptor(m, "value").set;
        if (f !== r && g) {
          const P = new Event("change", { bubbles: !0 });
          g.call(p, r), p.dispatchEvent(P);
        }
      }, [f, r]),
      h.jsx(Ee.select, {
        ...s,
        style: { ...Mh, ...s.style },
        ref: d,
        defaultValue: r,
      })
    );
  });
Ny.displayName = P2;
function Ry(n) {
  return n === "" || n === void 0;
}
function Oy(n) {
  const r = Lt(n),
    s = y.useRef(""),
    a = y.useRef(0),
    u = y.useCallback(
      (f) => {
        const p = s.current + f;
        r(p),
          (function m(k) {
            (s.current = k),
              window.clearTimeout(a.current),
              k !== "" && (a.current = window.setTimeout(() => m(""), 1e3));
          })(p);
      },
      [r],
    ),
    d = y.useCallback(() => {
      (s.current = ""), window.clearTimeout(a.current);
    }, []);
  return y.useEffect(() => () => window.clearTimeout(a.current), []), [s, u, d];
}
function _y(n, r, s) {
  const u = r.length > 1 && Array.from(r).every((k) => k === r[0]) ? r[0] : r,
    d = s ? n.indexOf(s) : -1;
  let f = x2(n, Math.max(d, 0));
  u.length === 1 && (f = f.filter((k) => k !== s));
  const m = f.find((k) =>
    k.textValue.toLowerCase().startsWith(u.toLowerCase()),
  );
  return m !== s ? m : void 0;
}
function x2(n, r) {
  return n.map((s, a) => n[(r + a) % n.length]);
}
var T2 = oy,
  jy = iy,
  S2 = ly,
  b2 = uy,
  C2 = cy,
  Dy = dy,
  E2 = wy,
  Ay = ky,
  My = gy,
  N2 = Py,
  R2 = Ty,
  Ly = Sy,
  Iy = by,
  Fy = Ey;
const ru = T2,
  ou = S2,
  wi = y.forwardRef(({ className: n, children: r, ...s }, a) =>
    h.jsxs(jy, {
      ref: a,
      className: je(
        "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        n,
      ),
      ...s,
      children: [
        r,
        h.jsx(b2, {
          asChild: !0,
          children: h.jsx(ow, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    }),
  );
wi.displayName = jy.displayName;
const Vy = y.forwardRef(({ className: n, ...r }, s) =>
  h.jsx(Ly, {
    ref: s,
    className: je("flex cursor-default items-center justify-center py-1", n),
    ...r,
    children: h.jsx(f1, { className: "h-4 w-4" }),
  }),
);
Vy.displayName = Ly.displayName;
const zy = y.forwardRef(({ className: n, ...r }, s) =>
  h.jsx(Iy, {
    ref: s,
    className: je("flex cursor-default items-center justify-center py-1", n),
    ...r,
    children: h.jsx(ow, { className: "h-4 w-4" }),
  }),
);
zy.displayName = Iy.displayName;
const yi = y.forwardRef(
  ({ className: n, children: r, position: s = "popper", ...a }, u) =>
    h.jsx(C2, {
      children: h.jsxs(Dy, {
        ref: u,
        className: je(
          "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
          s === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          n,
        ),
        position: s,
        ...a,
        children: [
          h.jsx(Vy, {}),
          h.jsx(E2, {
            className: je(
              "p-1",
              s === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            ),
            children: r,
          }),
          h.jsx(zy, {}),
        ],
      }),
    }),
);
yi.displayName = Dy.displayName;
const O2 = y.forwardRef(({ className: n, ...r }, s) =>
  h.jsx(Ay, {
    ref: s,
    className: je("py-1.5 pl-8 pr-2 text-sm font-semibold", n),
    ...r,
  }),
);
O2.displayName = Ay.displayName;
const mi = y.forwardRef(({ className: n, children: r, ...s }, a) =>
  h.jsxs(My, {
    ref: a,
    className: je(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      n,
    ),
    ...s,
    children: [
      h.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: h.jsx(R2, { children: h.jsx(u1, { className: "h-4 w-4" }) }),
      }),
      h.jsx(N2, { children: r }),
    ],
  }),
);
mi.displayName = My.displayName;
const _2 = y.forwardRef(({ className: n, ...r }, s) =>
  h.jsx(Fy, { ref: s, className: je("-mx-1 my-1 h-px bg-muted", n), ...r }),
);
_2.displayName = Fy.displayName;
const ki = y.forwardRef(({ className: n, type: r, ...s }, a) =>
  h.jsx("input", {
    type: r,
    className: je(
      "flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      n,
    ),
    ref: a,
    ...s,
  }),
);
ki.displayName = "Input";
var j2 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  D2 = j2.reduce((n, r) => {
    const s = Sw(`Primitive.${r}`),
      a = y.forwardRef((u, d) => {
        const { asChild: f, ...p } = u,
          m = f ? s : r;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          h.jsx(m, { ...p, ref: d })
        );
      });
    return (a.displayName = `Primitive.${r}`), { ...n, [r]: a };
  }, {}),
  A2 = "Label",
  By = y.forwardRef((n, r) =>
    h.jsx(D2.label, {
      ...n,
      ref: r,
      onMouseDown: (s) => {
        s.target.closest("button, input, select, textarea") ||
          (n.onMouseDown?.(s),
          !s.defaultPrevented && s.detail > 1 && s.preventDefault());
      },
    }),
  );
By.displayName = A2;
var Wy = By;
const M2 = Ai(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  Jn = y.forwardRef(({ className: n, ...r }, s) =>
    h.jsx(Wy, { ref: s, className: je(M2(), n), ...r }),
  );
Jn.displayName = Wy.displayName;
const li = {
  TP1: "season-tp1",
  TP2: "season-tp2",
  TP3: "season-tp3",
  TP4: "season-tp4",
  TP5: "season-tp5",
  TP6: "season-tp6",
  TP7: "season-tp7",
};
function L2(n) {
  return new Date(n + "T12:00:00").toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}
function I2() {
  const { toast: n } = Au(),
    r = _i(),
    [s, a] = y.useState(""),
    [u, d] = y.useState(""),
    [f, p] = y.useState(""),
    [m, k] = y.useState(""),
    [g, P] = y.useState(""),
    [S, E] = y.useState(""),
    _ = Vo.find((I) => I.key === s),
    v = _ ? ["AUL", "GCAL", "VDH", "HH", "VB"].includes(_.key) : !1,
    x = _?.rooms.find((I) => I.key === u),
    R = f || (x?.views.length === 1 ? x.views[0].key : ""),
    b = y.useMemo(
      () => (!s || !u || !R || !m || !g || m >= g ? null : gw(s, u, R, m, g)),
      [s, u, R, m, g],
    ),
    Xa = y.useMemo(() => {
      if (!_ || !m || !g || m >= g) return null;
      const rooms = u ? _.rooms.filter((I) => I.key === u) : _.rooms,
        rows = [];
      for (const rm of rooms)
        for (const vw of rm.views) {
          if (u && f && vw.key !== f) continue;
          const res = gw(s, rm.key, vw.key, m, g);
          rows.push({ room: rm, view: vw, total: res.total, nights: res.nights.length });
        }
      return rows;
    }, [_, s, u, f, m, g]),
    Xb = !b && !!Xa && Xa.length > 0,
    Xmin = Xb ? Math.min(...Xa.filter((I) => I.total > 0).map((I) => I.total)) : 0,
    Xc = _ ? _.rooms[0] : null,
    Xroom = u || (Xc ? Xc.key : ""),
    Xview = R || (x || Xc ? (x || Xc).views[0].key : ""),
    M =
      y.useMemo(() => {
        if (!b) return [];
        const I = new Set(b.nights.map((W) => W.year));
        return Array.from(I).sort();
      }, [b]).length > 1,
    V = bh({
      mutationFn: async () => {
        if (!b) throw new Error("No result");
        return Nh("POST", "/api/trips", {
          resort: s,
          roomType: u,
          view: R,
          checkIn: m,
          checkOut: g,
          totalPoints: b.total,
          label: S || null,
        });
      },
      onSuccess: () => {
        r.invalidateQueries({ queryKey: ["/api/trips"] }),
          n({
            title: "Trip added to Wish List",
            description: `${b.total} points saved.`,
          });
      },
    }),
    $ = !!b && b.total > 0,
    z = y.useMemo(() => {
      if (!b) return [];
      const I = {};
      for (const W of b.nights)
        I[W.season] || (I[W.season] = { count: 0, points: 0 }),
          I[W.season].count++,
          (I[W.season].points += W.points);
      return Object.entries(I).map(([W, te]) => ({ season: W, ...te }));
    }, [b]),
    J = [
      { resort: "RR", y2026: 0, y2027: 4, y2028: 350 },
      { resort: "BLT", y2026: 0, y2027: 78, y2028: 215 },
      { resort: "AKL", y2026: 0, y2027: 0, y2028: 5 },
    ],
    K = {
      y2026: J.reduce((I, W) => I + W.y2026, 0),
      y2027: J.reduce((I, W) => I + W.y2027, 0),
      y2028: J.reduce((I, W) => I + W.y2028, 0),
    },
    ee = K.y2026 + K.y2027 + K.y2028;
  return h.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      h.jsx(ww, {}),
      h.jsxs("main", {
        className: "max-w-5xl mx-auto px-4 py-8",
        children: [
          h.jsxs(dt, {
            className: "bg-card border-border mb-8",
            children: [
              h.jsx(Rn, {
                className: "pb-3",
                children: h.jsx(On, {
                  className:
                    "text-sm font-semibold text-muted-foreground uppercase tracking-wider",
                  children: "Available Points",
                }),
              }),
              h.jsx(yt, {
                className: "p-0",
                children: h.jsxs("table", {
                  className: "w-full text-sm",
                  children: [
                    h.jsx("thead", {
                      children: h.jsxs("tr", {
                        className: "border-b border-border",
                        children: [
                          h.jsx("th", {
                            className:
                              "text-left px-5 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider w-24",
                            children: "Resort",
                          }),
                          h.jsx("th", {
                            className:
                              "text-right px-5 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                            children: "2026",
                          }),
                          h.jsx("th", {
                            className:
                              "text-right px-5 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                            children: "2027",
                          }),
                          h.jsx("th", {
                            className:
                              "text-right px-5 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                            children: "2028",
                          }),
                          h.jsx("th", {
                            className:
                              "text-right px-5 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                            children: "Total",
                          }),
                        ],
                      }),
                    }),
                    h.jsx("tbody", {
                      className: "divide-y divide-border",
                      children: J.map((I) => {
                        const W = I.y2026 + I.y2027 + I.y2028;
                        return h.jsxs(
                          "tr",
                          {
                            className:
                              "hover:bg-secondary/40 transition-colors",
                            children: [
                              h.jsx("td", {
                                className:
                                  "px-5 py-2.5 font-semibold text-foreground",
                                children: I.resort,
                              }),
                              h.jsx("td", {
                                className:
                                  "px-5 py-2.5 text-right text-muted-foreground",
                                children: I.y2026,
                              }),
                              h.jsx("td", {
                                className:
                                  "px-5 py-2.5 text-right text-muted-foreground",
                                children: I.y2027,
                              }),
                              h.jsx("td", {
                                className:
                                  "px-5 py-2.5 text-right text-muted-foreground",
                                children: I.y2028,
                              }),
                              h.jsx("td", {
                                className:
                                  "px-5 py-2.5 text-right font-semibold text-foreground",
                                children: W,
                              }),
                            ],
                          },
                          I.resort,
                        );
                      }),
                    }),
                    h.jsx("tfoot", {
                      children: h.jsxs("tr", {
                        className: "border-t-2 border-border bg-secondary/30",
                        children: [
                          h.jsx("td", {
                            className:
                              "px-5 py-2.5 text-xs font-bold text-muted-foreground uppercase tracking-wider",
                            children: "Total",
                          }),
                          h.jsx("td", {
                            className:
                              "px-5 py-2.5 text-right font-bold text-foreground",
                            children: K.y2026,
                          }),
                          h.jsx("td", {
                            className:
                              "px-5 py-2.5 text-right font-bold text-foreground",
                            children: K.y2027,
                          }),
                          h.jsx("td", {
                            className:
                              "px-5 py-2.5 text-right font-bold text-foreground",
                            children: K.y2028,
                          }),
                          h.jsx("td", {
                            className:
                              "px-5 py-2.5 text-right font-bold gold-text",
                            children: ee,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          h.jsxs("div", {
            className: "mb-8",
            children: [
              h.jsx("h1", {
                className: "text-2xl font-bold text-foreground",
                children: "Points Calculator",
              }),
              h.jsx("p", {
                className: "text-muted-foreground text-sm mt-1",
                children:
                  "2026 & 2027 DVC point charts — select a resort and dates to compare every room type, or choose a specific room for the full breakdown.",
              }),
            ],
          }),
          h.jsxs("div", {
            className: "space-y-6",
            children: [
              h.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                  h.jsx("div", {
                    className: "space-y-5",
                    children: h.jsxs(dt, {
                      className: "bg-card border-border card-glow",
                      children: [
                        h.jsx(Rn, {
                          className: "pb-3",
                          children: h.jsx(On, {
                            className:
                              "text-sm font-semibold text-muted-foreground uppercase tracking-wider",
                            children: "1. Choose Resort",
                          }),
                        }),
                        h.jsxs(yt, {
                          className: "space-y-4",
                          children: [
                            h.jsxs("div", {
                              children: [
                                h.jsx(Jn, {
                                  className:
                                    "text-xs text-muted-foreground mb-1.5 block",
                                  children: "Resort",
                                }),
                                h.jsxs(ru, {
                                  value: s,
                                  onValueChange: (I) => {
                                    a(I), d(""), p("");
                                  },
                                  "data-testid": "select-resort",
                                  children: [
                                    h.jsx(wi, {
                                      className:
                                        "w-full bg-secondary border-border",
                                      children: h.jsx(ou, {
                                        placeholder: "Select a DVC Resort…",
                                      }),
                                    }),
                                    h.jsx(yi, {
                                      children: [
                                        {
                                          label: "Walt Disney World",
                                          loc: "WDW",
                                        },
                                        {
                                          label: "Disneyland / California",
                                          loc: "DL",
                                        },
                                        { label: "Hawaii", loc: "HI" },
                                        { label: "South Carolina", loc: "SC" },
                                        {
                                          label: "Florida (non-WDW)",
                                          loc: "VA",
                                        },
                                      ].map(({ label: I, loc: W }) => {
                                        const te = Vo.filter(
                                          (Q) => Q.location === W,
                                        );
                                        return te.length
                                          ? h.jsxs(h.Fragment, {
                                              children: [
                                                h.jsx(
                                                  "div",
                                                  {
                                                    className:
                                                      "px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                                                    children: I,
                                                  },
                                                  W,
                                                ),
                                                te.map((Q) =>
                                                  h.jsx(
                                                    mi,
                                                    {
                                                      value: Q.key,
                                                      className: "pl-4",
                                                      children: Q.label,
                                                    },
                                                    Q.key,
                                                  ),
                                                ),
                                              ],
                                            })
                                          : null;
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            _ &&
                              h.jsxs("div", {
                                children: [
                                  h.jsx(Jn, {
                                    className:
                                      "text-xs text-muted-foreground mb-1.5 block",
                                    children: "Room Type",
                                  }),
                                  h.jsxs(ru, {
                                    value: u,
                                    onValueChange: (I) => {
                                      d(I === "__all" ? "" : I), p("");
                                    },
                                    "data-testid": "select-room",
                                    children: [
                                      h.jsx(wi, {
                                        className:
                                          "w-full bg-secondary border-border",
                                        children: h.jsx(ou, {
                                          placeholder: "All room types",
                                        }),
                                      }),
                                      h.jsx(yi, {
                                        children: [h.jsx(mi, { value: "__all", children: "All room types" }, "__all"), ..._.rooms.map((I) =>
                                          h.jsxs(
                                            mi,
                                            {
                                              value: I.key,
                                              children: [
                                                I.label,
                                                h.jsxs("span", {
                                                  className:
                                                    "text-muted-foreground ml-2 text-xs",
                                                  children: [
                                                    "(up to ",
                                                    I.maxGuests,
                                                    " guests)",
                                                  ],
                                                }),
                                              ],
                                            },
                                            I.key,
                                          ),
                                        )],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            x &&
                              x.views.length > 1 &&
                              h.jsxs("div", {
                                children: [
                                  h.jsx(Jn, {
                                    className:
                                      "text-xs text-muted-foreground mb-1.5 block",
                                    children: "View",
                                  }),
                                  h.jsxs(ru, {
                                    value: f,
                                    onValueChange: (I) => p(I === "__all" ? "" : I),
                                    "data-testid": "select-view",
                                    children: [
                                      h.jsx(wi, {
                                        className:
                                          "w-full bg-secondary border-border",
                                        children: h.jsx(ou, {
                                          placeholder: "All views",
                                        }),
                                      }),
                                      h.jsx(yi, {
                                        children: [h.jsx(mi, { value: "__all", children: "All views" }, "__all"), ...x.views.map((I) =>
                                          h.jsx(
                                            mi,
                                            { value: I.key, children: I.label },
                                            I.key,
                                          ),
                                        )],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  h.jsxs("div", {
                    className: "space-y-5",
                    children: [
                      !b &&
                        !Xb &&
                        h.jsxs("div", {
                          className:
                            "flex flex-col items-center justify-center h-64 rounded-xl border border-dashed border-border text-center p-8",
                          children: [
                            h.jsxs("svg", {
                              width: "48",
                              height: "48",
                              viewBox: "0 0 48 48",
                              fill: "none",
                              className: "mb-4 opacity-30",
                              children: [
                                h.jsx("circle", {
                                  cx: "24",
                                  cy: "24",
                                  r: "22",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                }),
                                h.jsx("path", {
                                  d: "M16 28 Q24 20 32 28",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  fill: "none",
                                  strokeLinecap: "round",
                                }),
                                h.jsx("circle", {
                                  cx: "18",
                                  cy: "22",
                                  r: "2",
                                  fill: "currentColor",
                                }),
                                h.jsx("circle", {
                                  cx: "30",
                                  cy: "22",
                                  r: "2",
                                  fill: "currentColor",
                                }),
                              ],
                            }),
                            h.jsx("p", {
                              className: "text-muted-foreground text-sm",
                              children:
                                "Select a resort and dates to see the points for every room type. Pick a room type to narrow it down.",
                            }),
                          ],
                        }),
                      Xb &&
                        h.jsxs(dt, {
                          className: "bg-card border-border overflow-hidden",
                          "data-testid": "card-all-rooms",
                          children: [
                            h.jsxs(Rn, {
                              className: "pb-2",
                              children: [
                                h.jsx(On, {
                                  className:
                                    "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                                  children: u ? `${x?.label} · All Views` : "Points by Room Type",
                                }),
                                h.jsxs("p", {
                                  className: "text-muted-foreground text-xs mt-1",
                                  children: [
                                    _?.label,
                                    " · ",
                                    Xa[0].nights,
                                    " night",
                                    Xa[0].nights !== 1 ? "s" : "",
                                    " · tap a row for the night-by-night breakdown",
                                  ],
                                }),
                              ],
                            }),
                            h.jsx(yt, {
                              className: "p-0",
                              children: h.jsx("div", {
                                className: "divide-y divide-border",
                                children: Xa.map((I, W) => {
                                  const first = W === 0 || Xa[W - 1].room.key !== I.room.key,
                                    best = I.total > 0 && I.total === Xmin;
                                  return h.jsxs(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => {
                                        d(I.room.key), p(I.view.key);
                                      },
                                      disabled: I.total === 0,
                                      className:
                                        "night-row w-full text-left flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer hover:bg-secondary transition-colors",
                                      "data-testid": `row-room-${I.room.key}-${I.view.key}`,
                                      children: [
                                        h.jsxs("div", {
                                          className: "min-w-0",
                                          children: [
                                            h.jsx("p", {
                                              className: first ? "font-semibold text-foreground" : "text-muted-foreground text-xs",
                                              children: first ? I.room.label : "",
                                            }),
                                            h.jsxs("p", {
                                              className: "text-muted-foreground text-xs",
                                              children: [
                                                `${I.view.label} View`,
                                                first ? ` · up to ${I.room.maxGuests} guests` : "",
                                              ],
                                            }),
                                          ],
                                        }),
                                        h.jsxs("div", {
                                          className: "text-right shrink-0",
                                          children: [
                                            h.jsx("p", {
                                              className: `text-lg font-bold tabular-nums ${best ? "gold-text" : "text-foreground"}`,
                                              children: I.total > 0 ? `${I.total.toLocaleString()} pts` : "—",
                                            }),
                                            I.total > 0 &&
                                              h.jsxs("p", {
                                                className: "text-muted-foreground text-xs tabular-nums",
                                                children: [Math.round(I.total / I.nights), " avg / night"],
                                              }),
                                          ],
                                        }),
                                      ],
                                    },
                                    `${I.room.key}-${I.view.key}`,
                                  );
                                }),
                              }),
                            }),
                          ],
                        }),
                      b &&
                        b.total > 0 &&
                        h.jsxs(h.Fragment, {
                          children: [
                            h.jsxs(dt, {
                              className:
                                "bg-card border-border overflow-hidden",
                              children: [
                                h.jsxs("div", {
                                  className:
                                    "px-6 py-5 flex items-center justify-between",
                                  children: [
                                    h.jsxs("div", {
                                      children: [
                                        h.jsx("p", {
                                          className:
                                            "text-muted-foreground text-xs uppercase tracking-wider mb-1",
                                          children: "Total Points Needed",
                                        }),
                                        h.jsx("p", {
                                          className:
                                            "text-5xl font-bold gold-text",
                                          "data-testid": "text-total-points",
                                          children: b.total.toLocaleString(),
                                        }),
                                        h.jsxs("p", {
                                          className:
                                            "text-muted-foreground text-xs mt-1",
                                          children: [
                                            _?.label,
                                            " · ",
                                            x?.label,
                                            x &&
                                            x.views.length > 1 &&
                                            x.views.find((I) => I.key === R)
                                              ? ` · ${x.views.find((I) => I.key === R).label} View`
                                              : "",
                                          ],
                                        }),
                                      ],
                                    }),
                                    h.jsxs("div", {
                                      className: "text-right",
                                      children: [
                                        h.jsx("p", {
                                          className:
                                            "text-muted-foreground text-xs uppercase tracking-wider mb-1",
                                          children: "Per Night",
                                        }),
                                        h.jsxs("p", {
                                          className:
                                            "text-2xl font-bold text-foreground",
                                          children: [
                                            Math.round(
                                              b.total / b.nights.length,
                                            ),
                                            h.jsx("span", {
                                              className:
                                                "text-muted-foreground text-sm font-normal",
                                              children: " avg",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                h.jsx("div", {
                                  className: "flex h-1.5",
                                  children: z.map((I) =>
                                    h.jsx(
                                      "div",
                                      {
                                        className: li[I.season],
                                        style: {
                                          width: `${(I.points / b.total) * 100}%`,
                                        },
                                        title: `${Ao[I.season]}: ${I.points} pts`,
                                      },
                                      I.season,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            z.length > 1 &&
                              h.jsxs(dt, {
                                className: "bg-card border-border",
                                children: [
                                  h.jsx(Rn, {
                                    className: "pb-2",
                                    children: h.jsx(On, {
                                      className:
                                        "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                                      children: "Season Breakdown",
                                    }),
                                  }),
                                  h.jsx(yt, {
                                    className: "space-y-2",
                                    children: z.map((I) =>
                                      h.jsxs(
                                        "div",
                                        {
                                          className:
                                            "flex items-center justify-between text-sm",
                                          children: [
                                            h.jsxs("div", {
                                              className:
                                                "flex items-center gap-2",
                                              children: [
                                                h.jsx("span", {
                                                  className: `inline-block w-2 h-2 rounded-full ${li[I.season]}`,
                                                }),
                                                h.jsx("span", {
                                                  className: "text-foreground",
                                                  children: Ao[I.season],
                                                }),
                                                h.jsxs("span", {
                                                  className:
                                                    "text-muted-foreground text-xs",
                                                  children: [
                                                    "(",
                                                    I.count,
                                                    " night",
                                                    I.count !== 1 ? "s" : "",
                                                    ")",
                                                  ],
                                                }),
                                              ],
                                            }),
                                            h.jsxs("span", {
                                              className:
                                                "font-semibold text-foreground",
                                              children: [I.points, " pts"],
                                            }),
                                          ],
                                        },
                                        I.season,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            h.jsxs(dt, {
                              className: "bg-card border-border",
                              children: [
                                h.jsx(Rn, {
                                  className: "pb-2",
                                  children: h.jsx(On, {
                                    className:
                                      "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                                    children: "Night-by-Night Breakdown",
                                  }),
                                }),
                                h.jsx(yt, {
                                  className: "p-0",
                                  children: h.jsx("div", {
                                    className: "divide-y divide-border",
                                    children: b.nights.map((I, W) =>
                                      h.jsxs(
                                        "div",
                                        {
                                          className:
                                            "night-row flex items-center justify-between px-4 py-2.5 text-sm",
                                          "data-testid": `row-night-${W}`,
                                          children: [
                                            h.jsxs("div", {
                                              className:
                                                "flex items-center gap-2.5",
                                              children: [
                                                h.jsx("span", {
                                                  className:
                                                    "text-muted-foreground w-20 shrink-0 text-xs",
                                                  children: L2(I.date),
                                                }),
                                                h.jsx("span", {
                                                  className: `text-xs px-1.5 py-0.5 rounded font-medium ${li[I.season]}`,
                                                  children: Ao[I.season],
                                                }),
                                                I.year === 2027 &&
                                                  h.jsx(Rp, {
                                                    className:
                                                      "text-xs bg-blue-600/80 text-white border-blue-500 py-0 h-5 font-semibold",
                                                    children: "2027",
                                                  }),
                                                I.weekend &&
                                                  h.jsx(Rp, {
                                                    variant: "outline",
                                                    className:
                                                      "text-xs border-border text-muted-foreground py-0 h-5",
                                                    children: "Fri/Sat",
                                                  }),
                                              ],
                                            }),
                                            h.jsxs("span", {
                                              className:
                                                "font-semibold text-foreground shrink-0",
                                              children: [I.points, " pts"],
                                            }),
                                          ],
                                        },
                                        I.date,
                                      ),
                                    ),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      b &&
                        b.total === 0 &&
                        h.jsx(dt, {
                          className: "bg-card border-border",
                          children: h.jsx(yt, {
                            className: "py-8 text-center",
                            children: h.jsx("p", {
                              className: "text-muted-foreground text-sm",
                              children:
                                "No point data found for this combination. Please check resort/room/view selection.",
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              s &&
                h.jsxs("div", {
                  children: [
                    h.jsx("p", {
                      className:
                        "text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2",
                      children: "2. Choose Dates",
                    }),
                    !(u && R) &&
                      h.jsx("p", {
                        className: "text-muted-foreground text-xs mb-2",
                        children: `Calendar shows nightly points for a ${Xc?.label ?? ""}${(x || Xc)?.views.length > 1 ? ` (${(x || Xc).views[0].label} view)` : ""}. Totals for every room type appear above once you pick dates.`,
                      }),
                    h.jsx(PP, {
                      resortKey: s,
                      roomKey: Xroom,
                      viewKey: Xview,
                      checkIn: m,
                      checkOut: g,
                      onCheckInChange: (I) => {
                        k(I), P("");
                      },
                      onCheckOutChange: P,
                      isNonWDW: v,
                    }),
                  ],
                }),
              s &&
                h.jsxs("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                  children: [
                    h.jsx(dt, {
                      className: "bg-card border-border card-glow",
                      children: h.jsxs(yt, {
                        className: "pt-4 space-y-4",
                        children: [
                          h.jsxs("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                              h.jsxs("div", {
                                children: [
                                  h.jsx(Jn, {
                                    className:
                                      "text-xs text-muted-foreground mb-1.5 block",
                                    children: "Check-In",
                                  }),
                                  h.jsx(ki, {
                                    type: "date",
                                    value: m,
                                    onChange: (I) => {
                                      k(I.target.value),
                                        g && I.target.value >= g && P("");
                                    },
                                    className: "bg-secondary border-border",
                                    "data-testid": "input-checkin",
                                  }),
                                ],
                              }),
                              h.jsxs("div", {
                                children: [
                                  h.jsx(Jn, {
                                    className:
                                      "text-xs text-muted-foreground mb-1.5 block",
                                    children: "Check-Out",
                                  }),
                                  h.jsx(ki, {
                                    type: "date",
                                    value: g,
                                    min: m || void 0,
                                    onChange: (I) => P(I.target.value),
                                    className: "bg-secondary border-border",
                                    "data-testid": "input-checkout",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          m &&
                            g &&
                            m >= g &&
                            h.jsx("p", {
                              className: "text-destructive text-xs",
                              children: "Check-out must be after check-in.",
                            }),
                          b &&
                            h.jsxs("p", {
                              className: "text-muted-foreground text-xs",
                              children: [
                                b.nights.length,
                                " night",
                                b.nights.length !== 1 ? "s" : "",
                              ],
                            }),
                          M &&
                            h.jsx("div", {
                              className:
                                "rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-xs text-amber-300",
                              children:
                                "Your stay spans both 2026 and 2027 — each night uses the correct year's point chart automatically.",
                            }),
                        ],
                      }),
                    }),
                    $ &&
                      h.jsxs(dt, {
                        className: "bg-card border-border card-glow",
                        children: [
                          h.jsx(Rn, {
                            className: "pb-3",
                            children: h.jsx(On, {
                              className:
                                "text-sm font-semibold text-muted-foreground uppercase tracking-wider",
                              children: "3. Save to Wish List",
                            }),
                          }),
                          h.jsxs(yt, {
                            className: "space-y-3",
                            children: [
                              h.jsxs("div", {
                                children: [
                                  h.jsx(Jn, {
                                    className:
                                      "text-xs text-muted-foreground mb-1.5 block",
                                    children: "Trip Label (optional)",
                                  }),
                                  h.jsx(ki, {
                                    value: S,
                                    onChange: (I) => E(I.target.value),
                                    placeholder: "e.g. Summer Family Trip",
                                    className: "bg-secondary border-border",
                                    "data-testid": "input-label",
                                  }),
                                ],
                              }),
                              h.jsx(xi, {
                                className:
                                  "w-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90",
                                onClick: () => V.mutate(),
                                disabled: V.isPending,
                                "data-testid": "button-save-trip",
                                children: V.isPending
                                  ? "Saving…"
                                  : `Save Trip (${b.total} pts)`,
                              }),
                              h.jsxs("a", {
                                href: "https://disneyvacationclub.disney.go.com/vacation-planning/book-vacation/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "flex items-center justify-center gap-1.5 w-full rounded-md border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors py-2",
                                "data-testid": "link-check-availability",
                                children: [
                                  h.jsxs("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "13",
                                    height: "13",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                      h.jsx("path", { d: "M15 3h6v6" }),
                                      h.jsx("path", { d: "M10 14 21 3" }),
                                      h.jsx("path", {
                                        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
                                      }),
                                    ],
                                  }),
                                  "Check Availability on DVC Site",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
            ],
          }),
          v && s
            ? h.jsx("div", {
                className: "mt-8",
                children: h.jsxs(dt, {
                  className: "bg-card border-border",
                  children: [
                    h.jsx(Rn, {
                      className: "pb-3",
                      children: h.jsxs(On, {
                        className:
                          "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                        children: [_?.label, " Season Reference"],
                      }),
                    }),
                    h.jsxs(yt, {
                      children: [
                        h.jsx("div", {
                          className:
                            "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2",
                          children: Object.entries(uP[s] ?? {}).map(([I, W]) =>
                            h.jsxs(
                              "div",
                              {
                                className: "rounded-lg p-2.5 text-center",
                                style: { background: "hsl(222 20% 16%)" },
                                children: [
                                  h.jsx("span", {
                                    className:
                                      "text-xs font-bold px-1.5 py-0.5 rounded bg-primary/20 text-primary",
                                    children: W,
                                  }),
                                  h.jsx("p", {
                                    className:
                                      "text-muted-foreground text-xs mt-1.5 leading-tight",
                                    children: (cP[s] ?? {})[I],
                                  }),
                                ],
                              },
                              I,
                            ),
                          ),
                        }),
                        dP[s] &&
                          h.jsx("p", {
                            className: "text-muted-foreground text-xs mt-3",
                            children:
                              "★ Flat nightly rate — no weekday/weekend split at this resort.",
                          }),
                      ],
                    }),
                  ],
                }),
              })
            : h.jsx("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8",
                children: [2026, 2027].map((I) => {
                  const W = aP(I);
                  return h.jsxs(
                    dt,
                    {
                      className: "bg-card border-border",
                      children: [
                        h.jsx(Rn, {
                          className: "pb-3",
                          children: h.jsxs(On, {
                            className:
                              "text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2",
                            children: [
                              I,
                              " Season Reference",
                              I === 2027 &&
                                h.jsx("span", {
                                  className:
                                    "inline-block text-[10px] bg-blue-600/80 text-white px-1.5 py-0.5 rounded font-semibold",
                                  children: "2027",
                                }),
                            ],
                          }),
                        }),
                        h.jsx(yt, {
                          children: h.jsx("div", {
                            className:
                              "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2",
                            children: [
                              "TP1",
                              "TP2",
                              "TP3",
                              "TP4",
                              "TP5",
                              "TP6",
                              "TP7",
                            ].map((te) =>
                              h.jsxs(
                                "div",
                                {
                                  className: "rounded-lg p-2.5 text-center",
                                  style: { background: "hsl(222 20% 16%)" },
                                  children: [
                                    h.jsx("span", {
                                      className: `text-xs font-bold px-1.5 py-0.5 rounded ${li[te]}`,
                                      children: Ao[te],
                                    }),
                                    h.jsx("p", {
                                      className:
                                        "text-muted-foreground text-xs mt-1.5 leading-tight",
                                      children: W[te],
                                    }),
                                  ],
                                },
                                te,
                              ),
                            ),
                          }),
                        }),
                      ],
                    },
                    I,
                  );
                }),
              }),
        ],
      }),
    ],
  });
}
function F2({ className: n, ...r }) {
  return h.jsx("div", {
    className: je("animate-pulse rounded-md bg-muted", n),
    ...r,
  });
}
function Jp(n) {
  return new Date(n + "T12:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
function Zp(n, r) {
  const s = new Date(n + "T12:00:00"),
    a = new Date(r + "T12:00:00");
  return Math.round((a.getTime() - s.getTime()) / 864e5);
}
function eh(n) {
  return Vo.find((r) => r.key === n)?.label ?? n;
}
function V2(n, r) {
  return (
    Vo.find((a) => a.key === n)?.rooms.find((a) => a.key === r)?.label ?? r
  );
}
function z2(n, r, s) {
  const u = Vo.find((f) => f.key === n)?.rooms.find((f) => f.key === r),
    d = u?.views.find((f) => f.key === s);
  return !d || u?.views.length === 1 ? null : d.label;
}
function B2(n, r) {
  const s = new Set(),
    a = new Date(n + "T12:00:00"),
    u = new Date(r + "T12:00:00");
  for (; a < u; )
    s.add(Ao[kw(a.toISOString().split("T")[0])]), a.setDate(a.getDate() + 1);
  return Array.from(s).join(", ");
}
function W2() {
  const { toast: n } = Au(),
    r = _i(),
    { data: s, isLoading: a } = tg({ queryKey: ["/api/trips"] }),
    u = bh({
      mutationFn: (f) => Nh("DELETE", `/api/trips/${f}`),
      onSuccess: () => {
        r.invalidateQueries({ queryKey: ["/api/trips"] }),
          n({ title: "Trip removed" });
      },
    }),
    d = s?.reduce((f, p) => f + p.totalPoints, 0) ?? 0;
  return h.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      h.jsx(ww, {}),
      h.jsxs("main", {
        className: "max-w-5xl mx-auto px-4 py-8",
        children: [
          h.jsxs("div", {
            className: "mb-8 flex items-start justify-between gap-4",
            children: [
              h.jsxs("div", {
                children: [
                  h.jsx("h1", {
                    className: "text-2xl font-bold text-foreground",
                    children: "Wish List",
                  }),
                  h.jsx("p", {
                    className: "text-muted-foreground text-sm mt-1",
                    children:
                      "Your saved trips and total points across all stays.",
                  }),
                ],
              }),
              s &&
                s.length > 0 &&
                h.jsxs("div", {
                  className: "text-right shrink-0",
                  children: [
                    h.jsx("p", {
                      className:
                        "text-xs text-muted-foreground uppercase tracking-wider",
                      children: "All Trips Combined",
                    }),
                    h.jsx("p", {
                      className: "text-3xl font-bold gold-text",
                      "data-testid": "text-total-wishlist-points",
                      children: d.toLocaleString(),
                    }),
                    h.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: "total points",
                    }),
                  ],
                }),
            ],
          }),
          a &&
            h.jsx("div", {
              className: "space-y-4",
              children: [1, 2, 3].map((f) =>
                h.jsx(
                  F2,
                  { className: "h-32 w-full rounded-xl bg-secondary" },
                  f,
                ),
              ),
            }),
          !a &&
            s &&
            s.length === 0 &&
            h.jsxs("div", {
              className:
                "flex flex-col items-center justify-center h-64 rounded-xl border border-dashed border-border text-center p-8",
              children: [
                h.jsx(w1, {
                  className: "w-10 h-10 text-muted-foreground/40 mb-4",
                }),
                h.jsx("p", {
                  className: "text-foreground font-medium mb-1",
                  children: "No trips saved yet",
                }),
                h.jsx("p", {
                  className: "text-muted-foreground text-sm mb-4",
                  children:
                    "Use the calculator to plan a trip and save it here.",
                }),
                h.jsx(su, {
                  href: "/",
                  children: h.jsx(xi, {
                    variant: "outline",
                    className: "border-border",
                    children: "Go to Calculator",
                  }),
                }),
              ],
            }),
          !a &&
            s &&
            s.length > 0 &&
            h.jsxs("div", {
              className: "space-y-4",
              children: [
                s.map((f) => {
                  const p = Zp(f.checkIn, f.checkOut),
                    m = f.view ? z2(f.resort, f.roomType, f.view) : null,
                    k = B2(f.checkIn, f.checkOut);
                  return h.jsx(
                    dt,
                    {
                      className: "bg-card border-border card-glow",
                      "data-testid": `card-trip-${f.id}`,
                      children: h.jsx(yt, {
                        className: "p-5",
                        children: h.jsxs("div", {
                          className: "flex items-start justify-between gap-4",
                          children: [
                            h.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                h.jsxs("div", {
                                  className: "flex items-center gap-2 mb-2",
                                  children: [
                                    h.jsx(a1, {
                                      className:
                                        "w-3.5 h-3.5 text-muted-foreground shrink-0",
                                    }),
                                    h.jsx("span", {
                                      className:
                                        "font-semibold text-foreground text-sm truncate",
                                      children: f.label || eh(f.resort),
                                    }),
                                    f.label &&
                                      h.jsxs("span", {
                                        className:
                                          "text-muted-foreground text-xs truncate",
                                        children: ["· ", eh(f.resort)],
                                      }),
                                  ],
                                }),
                                h.jsxs("div", {
                                  className:
                                    "flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-3",
                                  children: [
                                    h.jsxs("span", {
                                      children: [
                                        V2(f.resort, f.roomType),
                                        m ? ` · ${m} View` : "",
                                      ],
                                    }),
                                    h.jsxs("span", {
                                      className: "flex items-center gap-1",
                                      children: [
                                        h.jsx(l1, { className: "w-3 h-3" }),
                                        Jp(f.checkIn),
                                        " – ",
                                        Jp(f.checkOut),
                                        h.jsxs("span", {
                                          className: "ml-1",
                                          children: [
                                            "(",
                                            p,
                                            " night",
                                            p !== 1 ? "s" : "",
                                            ")",
                                          ],
                                        }),
                                      ],
                                    }),
                                    h.jsx("span", { children: k }),
                                  ],
                                }),
                                h.jsxs("p", {
                                  className: "text-3xl font-bold gold-text",
                                  "data-testid": `text-points-${f.id}`,
                                  children: [
                                    f.totalPoints.toLocaleString(),
                                    h.jsx("span", {
                                      className:
                                        "text-muted-foreground text-sm font-normal ml-1",
                                      children: "pts",
                                    }),
                                  ],
                                }),
                                h.jsxs("p", {
                                  className:
                                    "text-xs text-muted-foreground mt-0.5",
                                  children: [
                                    "~",
                                    Math.round(f.totalPoints / p),
                                    " pts/night avg",
                                  ],
                                }),
                              ],
                            }),
                            h.jsxs("div", {
                              className: "flex items-center gap-1 shrink-0",
                              children: [
                                h.jsxs("a", {
                                  href: "https://disneyvacationclub.disney.go.com/vacation-planning/book-vacation/",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  "data-testid": `link-availability-${f.id}`,
                                  title: "Check availability on DVC site",
                                  className:
                                    "inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground border border-border hover:border-foreground/40 rounded-md px-2.5 py-1.5 transition-colors",
                                  children: [
                                    h.jsx(h1, { className: "w-3 h-3" }),
                                    "Check Availability",
                                  ],
                                }),
                                h.jsx(xi, {
                                  variant: "ghost",
                                  size: "icon",
                                  className:
                                    "text-muted-foreground hover:text-destructive",
                                  onClick: () => u.mutate(f.id),
                                  disabled: u.isPending,
                                  "data-testid": `button-delete-${f.id}`,
                                  "aria-label": "Remove trip",
                                  children: h.jsx(y1, { className: "w-4 h-4" }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    },
                    f.id,
                  );
                }),
                h.jsx(dt, {
                  className: "bg-card border-primary/20 border",
                  children: h.jsx(yt, {
                    className: "p-4 flex items-center justify-between",
                    children: h.jsxs("div", {
                      children: [
                        h.jsxs("p", {
                          className:
                            "text-xs text-muted-foreground uppercase tracking-wider",
                          children: [
                            s.length,
                            " trip",
                            s.length !== 1 ? "s" : "",
                            " · ",
                            s.reduce(
                              (f, p) => f + Zp(p.checkIn, p.checkOut),
                              0,
                            ),
                            " total nights",
                          ],
                        }),
                        h.jsxs("p", {
                          className:
                            "text-sm text-foreground font-medium mt-0.5",
                          children: [
                            "You'll need at least ",
                            h.jsx("span", {
                              className: "gold-text font-bold",
                              children: d.toLocaleString(),
                            }),
                            " points",
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
function U2() {
  return h.jsx("div", {
    className:
      "min-h-screen w-full flex items-center justify-center bg-gray-50",
    children: h.jsx(dt, {
      className: "w-full max-w-md mx-4",
      children: h.jsxs(yt, {
        className: "pt-6",
        children: [
          h.jsxs("div", {
            className: "flex mb-4 gap-2",
            children: [
              h.jsx(p1, { className: "h-8 w-8 text-red-500" }),
              h.jsx("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: "404 Page Not Found",
              }),
            ],
          }),
          h.jsx("p", {
            className: "mt-4 text-sm text-gray-600",
            children: "Did you forget to add the page to the router?",
          }),
        ],
      }),
    }),
  });
}
function H2() {
  return h.jsxs(Uv, {
    client: rg,
    children: [
      h.jsx(fh, {
        hook: hh,
        children: h.jsxs(hv, {
          children: [
            h.jsx(Bl, { path: "/", component: I2 }),
            h.jsx(Bl, { path: "/wishlist", component: W2 }),
            h.jsx(Bl, { component: U2 }),
          ],
        }),
      }),
      h.jsx(Z1, {}),
    ],
  });
}
window.location.hash || (window.location.hash = "#/");
Qk.createRoot(document.getElementById("root")).render(h.jsx(H2, {}));
