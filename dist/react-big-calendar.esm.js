!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports, require('react'), require('react-dom'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'react', 'react-dom'], t)
    : t(((e = e || self).ReactBigCalendar = {}), e.React, e.ReactDOM)
})(this, function(e, t, n) {
  'use strict'
  var r = 'default' in t ? t.default : t,
    o = 'default' in n ? n.default : n
  function a(e) {
    return e.children
  }
  function i() {
    return (i =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t]
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }).apply(this, arguments)
  }
  function s(e, t) {
    if (null == e) return {}
    var n,
      r,
      o = {},
      a = Object.keys(e)
    for (r = 0; r < a.length; r++)
      (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
    return o
  }
  function c(e, t) {
    return (c =
      Object.setPrototypeOf ||
      function(e, t) {
        return (e.__proto__ = t), e
      })(e, t)
  }
  function l(e, t) {
    ;(e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      c(e, t)
  }
  function u(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports
  }
  var f = 'function' == typeof Symbol && Symbol.for,
    p = f ? Symbol.for('react.element') : 60103,
    d = f ? Symbol.for('react.portal') : 60106,
    h = f ? Symbol.for('react.fragment') : 60107,
    v = f ? Symbol.for('react.strict_mode') : 60108,
    m = f ? Symbol.for('react.profiler') : 60114,
    g = f ? Symbol.for('react.provider') : 60109,
    y = f ? Symbol.for('react.context') : 60110,
    b = f ? Symbol.for('react.async_mode') : 60111,
    w = f ? Symbol.for('react.concurrent_mode') : 60111,
    E = f ? Symbol.for('react.forward_ref') : 60112,
    _ = f ? Symbol.for('react.suspense') : 60113,
    D = f ? Symbol.for('react.suspense_list') : 60120,
    O = f ? Symbol.for('react.memo') : 60115,
    S = f ? Symbol.for('react.lazy') : 60116,
    M = f ? Symbol.for('react.block') : 60121,
    x = f ? Symbol.for('react.fundamental') : 60117,
    j = f ? Symbol.for('react.responder') : 60118,
    T = f ? Symbol.for('react.scope') : 60119
  function P(e) {
    if ('object' == typeof e && null !== e) {
      var t = e.$$typeof
      switch (t) {
        case p:
          switch ((e = e.type)) {
            case b:
            case w:
            case h:
            case m:
            case v:
            case _:
              return e
            default:
              switch ((e = e && e.$$typeof)) {
                case y:
                case E:
                case S:
                case O:
                case g:
                  return e
                default:
                  return t
              }
          }
        case d:
          return t
      }
    }
  }
  function N(e) {
    return P(e) === w
  }
  var k = {
      AsyncMode: b,
      ConcurrentMode: w,
      ContextConsumer: y,
      ContextProvider: g,
      Element: p,
      ForwardRef: E,
      Fragment: h,
      Lazy: S,
      Memo: O,
      Portal: d,
      Profiler: m,
      StrictMode: v,
      Suspense: _,
      isAsyncMode: function(e) {
        return N(e) || P(e) === b
      },
      isConcurrentMode: N,
      isContextConsumer: function(e) {
        return P(e) === y
      },
      isContextProvider: function(e) {
        return P(e) === g
      },
      isElement: function(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === p
      },
      isForwardRef: function(e) {
        return P(e) === E
      },
      isFragment: function(e) {
        return P(e) === h
      },
      isLazy: function(e) {
        return P(e) === S
      },
      isMemo: function(e) {
        return P(e) === O
      },
      isPortal: function(e) {
        return P(e) === d
      },
      isProfiler: function(e) {
        return P(e) === m
      },
      isStrictMode: function(e) {
        return P(e) === v
      },
      isSuspense: function(e) {
        return P(e) === _
      },
      isValidElementType: function(e) {
        return (
          'string' == typeof e ||
          'function' == typeof e ||
          e === h ||
          e === w ||
          e === m ||
          e === v ||
          e === _ ||
          e === D ||
          ('object' == typeof e &&
            null !== e &&
            (e.$$typeof === S ||
              e.$$typeof === O ||
              e.$$typeof === g ||
              e.$$typeof === y ||
              e.$$typeof === E ||
              e.$$typeof === x ||
              e.$$typeof === j ||
              e.$$typeof === T ||
              e.$$typeof === M))
        )
      },
      typeOf: P,
    },
    A = u(function(e, t) {}),
    R =
      (A.AsyncMode,
      A.ConcurrentMode,
      A.ContextConsumer,
      A.ContextProvider,
      A.Element,
      A.ForwardRef,
      A.Fragment,
      A.Lazy,
      A.Memo,
      A.Portal,
      A.Profiler,
      A.StrictMode,
      A.Suspense,
      A.isAsyncMode,
      A.isConcurrentMode,
      A.isContextConsumer,
      A.isContextProvider,
      A.isElement,
      A.isForwardRef,
      A.isFragment,
      A.isLazy,
      A.isMemo,
      A.isPortal,
      A.isProfiler,
      A.isStrictMode,
      A.isSuspense,
      A.isValidElementType,
      A.typeOf,
      u(function(e) {
        e.exports = k
      }),
      Object.getOwnPropertySymbols),
    C = Object.prototype.hasOwnProperty,
    F = Object.prototype.propertyIsEnumerable
  ;(function() {
    try {
      if (!Object.assign) return !1
      var e = new String('abc')
      if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1
      for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n
      if (
        '0123456789' !==
        Object.getOwnPropertyNames(t)
          .map(function(e) {
            return t[e]
          })
          .join('')
      )
        return !1
      var r = {}
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function(e) {
          r[e] = e
        }),
        'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
      )
    } catch (e) {
      return !1
    }
  })() && Object.assign
  var L = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
  Function.call.bind(Object.prototype.hasOwnProperty)
  function z() {}
  function I() {}
  I.resetWarningCache = z
  var W = u(function(e) {
      e.exports = (function() {
        function e(e, t, n, r, o, a) {
          if (a !== L) {
            var i = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            )
            throw ((i.name = 'Invariant Violation'), i)
          }
        }
        function t() {
          return e
        }
        e.isRequired = e
        var n = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: I,
          resetWarningCache: z,
        }
        return (n.PropTypes = n), n
      })()
    }),
    H = function(e, t, n, r, o, a, i, s) {
      if (!e) {
        var c
        if (void 0 === t)
          c = new Error(
            'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
          )
        else {
          var l = [n, r, o, a, i, s],
            u = 0
          ;(c = new Error(
            t.replace(/%s/g, function() {
              return l[u++]
            })
          )).name = 'Invariant Violation'
        }
        throw ((c.framesToPop = 1), c)
      }
    },
    U = function() {}
  function V(e, t) {
    return void 0 !== e[t]
  }
  function B(e) {
    return 'default' + e.charAt(0).toUpperCase() + e.substr(1)
  }
  function Y() {
    var e = this.constructor.getDerivedStateFromProps(this.props, this.state)
    null != e && this.setState(e)
  }
  function K(e) {
    this.setState(
      function(t) {
        var n = this.constructor.getDerivedStateFromProps(e, t)
        return null != n ? n : null
      }.bind(this)
    )
  }
  function $(e, t) {
    try {
      var n = this.props,
        r = this.state
      ;(this.props = e),
        (this.state = t),
        (this.__reactInternalSnapshotFlag = !0),
        (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r))
    } finally {
      ;(this.props = n), (this.state = r)
    }
  }
  ;(Y.__suppressDeprecationWarning = !0),
    (K.__suppressDeprecationWarning = !0),
    ($.__suppressDeprecationWarning = !0)
  var X = '/Users/jquense/src/uncontrollable/src/uncontrollable.js'
  function q(e) {
    var t,
      n,
      r = ''
    if ('string' == typeof e || 'number' == typeof e) r += e
    else if ('object' == typeof e)
      if (Array.isArray(e))
        for (t = 0; t < e.length; t++)
          e[t] && (n = q(e[t])) && (r && (r += ' '), (r += n))
      else for (t in e) e[t] && (r && (r += ' '), (r += t))
    return r
  }
  function G() {
    for (var e, t, n = 0, r = ''; n < arguments.length; )
      (e = arguments[n++]) && (t = q(e)) && (r && (r += ' '), (r += t))
    return r
  }
  var Z = { PREVIOUS: 'PREV', NEXT: 'NEXT', TODAY: 'TODAY', DATE: 'DATE' },
    J = {
      MONTH: 'month',
      WEEK: 'week',
      WORK_WEEK: 'work_week',
      DAY: 'day',
      AGENDA: 'agenda',
    },
    Q = Object.keys(J).map(function(e) {
      return J[e]
    })
  W.oneOfType([W.string, W.func]),
    W.any,
    W.func,
    W.oneOfType([
      W.arrayOf(W.oneOf(Q)),
      W.objectOf(function(e, t) {
        if (-1 !== Q.indexOf(t) && 'boolean' == typeof e[t]) return null
        for (
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
          o < n;
          o++
        )
          r[o - 2] = arguments[o]
        return W.elementType.apply(W, [e, t].concat(r))
      }),
    ]),
    W.oneOfType([W.oneOf(['overlap', 'no-overlap']), W.func])
  function ee(e, t) {
    e && e.apply(null, [].concat(t))
  }
  var te = W.oneOfType([W.string, W.func])
  var ne = function(e) {
    var t = this
    'function' != typeof e.format && H(!1),
      'function' != typeof e.firstOfWeek && H(!1),
      (this.propType = e.propType || te),
      (this.startOfWeek = e.firstOfWeek),
      (this.formats = e.formats),
      (this.format = function() {
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o]
        return function(e, t, n, r, o) {
          var a = 'function' == typeof r ? r(n, o, e) : t.call(e, n, r, o)
          return null != a && 'string' != typeof a && H(!1), a
        }.apply(void 0, [t, e.format].concat(r))
      })
  }
  function re(e, t, n, r) {
    var o = i({}, e.formats, n)
    return i({}, e, {
      messages: r,
      startOfWeek: function() {
        return e.startOfWeek(t)
      },
      format: function(n, r) {
        return e.format(n, o[r] || r, t)
      },
    })
  }
  var oe = {
    date: 'Date',
    time: 'Time',
    event: 'Event',
    allDay: 'All Day',
    week: 'Week',
    work_week: 'Work Week',
    day: 'Day',
    month: 'Month',
    previous: 'Back',
    next: 'Next',
    yesterday: 'Yesterday',
    tomorrow: 'Tomorrow',
    today: 'Today',
    agenda: 'Agenda',
    noEventsInRange: 'There are no events in this range.',
    showMore: function(e) {
      return '+' + e + ' more'
    },
  }
  function ae(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return e
  }
  var ie = 'milliseconds',
    se = 'seconds',
    ce = 'minutes',
    le = 'hours',
    ue = 'day',
    fe = 'week',
    pe = 'month',
    de = 'year',
    he = 'decade',
    ve = 'century',
    me = {
      milliseconds: 1,
      seconds: 1e3,
      minutes: 6e4,
      hours: 36e5,
      day: 864e5,
      week: 6048e5,
    },
    ge = { month: 1, year: 12, decade: 120, century: 1200 }
  function ye(e) {
    return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0 ? 29 : 28
  }
  function be(e, t, n) {
    switch (((e = new Date(e)), n)) {
      case ie:
      case se:
      case ce:
      case le:
      case ue:
      case fe:
        return (function(e, t) {
          var n = new Date(+e + t)
          return (function(e, t) {
            var n = e.getTimezoneOffset(),
              r = t.getTimezoneOffset()
            return new Date(+t + (r - n) * me.minutes)
          })(e, n)
        })(e, t * me[n])
      case pe:
      case de:
      case he:
      case ve:
        return (function(e, t) {
          var n = e.getFullYear(),
            r = e.getMonth(),
            o = e.getDate(),
            a = 12 * n + r + t,
            i = Math.trunc(a / 12),
            s = a % 12,
            c = Math.min(
              o,
              (function(e) {
                return [31, ye(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
              })(i)[s]
            ),
            l = new Date(e)
          return l.setFullYear(i), l.setDate(1), l.setMonth(s), l.setDate(c), l
        })(e, t * ge[n])
    }
    throw new TypeError('Invalid units: "' + n + '"')
  }
  function we(e, t, n) {
    return be(e, -t, n)
  }
  function Ee(e, t, n) {
    switch (((e = new Date(e)), t)) {
      case ve:
      case he:
      case de:
        e = Le(e, 0)
      case pe:
        e = Fe(e, 1)
      case fe:
      case ue:
        e = Re(e, 0)
      case le:
        e = Ae(e, 0)
      case ce:
        e = ke(e, 0)
      case se:
        e = Ne(e, 0)
    }
    return (
      t === he && (e = we(e, ze(e) % 10, 'year')),
      t === ve && (e = we(e, ze(e) % 100, 'year')),
      t === fe &&
        (e = (function(e, t, n) {
          var r = (Ce(e) + 7 - (n || 0)) % 7
          return void 0 === t ? r : be(e, t - r, ue)
        })(e, 0, n)),
      e
    )
  }
  function _e(e, t, n) {
    switch (((e = Ee((e = new Date(e)), t, n)), t)) {
      case ve:
      case he:
      case de:
      case pe:
      case fe:
        ;(e = we((e = be(e, 1, t)), 1, ue)).setHours(23, 59, 59, 999)
        break
      case ue:
        e.setHours(23, 59, 59, 999)
        break
      case le:
      case ce:
      case se:
        e = we((e = be(e, 1, t)), 1, ie)
    }
    return e
  }
  var De = We(function(e, t) {
      return e === t
    }),
    Oe = We(function(e, t) {
      return e > t
    }),
    Se = We(function(e, t) {
      return e >= t
    }),
    Me = We(function(e, t) {
      return e < t
    }),
    xe = We(function(e, t) {
      return e <= t
    })
  function je() {
    return new Date(Math.min.apply(Math, arguments))
  }
  function Te() {
    return new Date(Math.max.apply(Math, arguments))
  }
  function Pe(e, t, n, r) {
    return (r = r || 'day'), (!t || Se(e, t, r)) && (!n || xe(e, n, r))
  }
  var Ne = Ie('Milliseconds'),
    ke = Ie('Seconds'),
    Ae = Ie('Minutes'),
    Re = Ie('Hours'),
    Ce = Ie('Day'),
    Fe = Ie('Date'),
    Le = Ie('Month'),
    ze = Ie('FullYear')
  function Ie(e) {
    var t = (function(e) {
      switch (e) {
        case 'Milliseconds':
          return 36e5
        case 'Seconds':
          return 3600
        case 'Minutes':
          return 60
        case 'Hours':
          return 1
        default:
          return null
      }
    })(e)
    return function(n, r) {
      if (void 0 === r) return n['get' + e]()
      var o = new Date(n)
      return (
        o['set' + e](r),
        t &&
          o['get' + e]() != r &&
          ('Hours' === e ||
            (r >= t && o.getHours() - n.getHours() < Math.floor(r / t))) &&
          o['set' + e](r + t),
        o
      )
    }
  }
  function We(e) {
    return function(t, n, r) {
      return e(+Ee(t, r), +Ee(n, r))
    }
  }
  var He = { seconds: 1e3, minutes: 6e4, hours: 36e5, day: 864e5 }
  function Ue(e, t) {
    var n = Ee(e, 'month')
    return Ee(n, 'week', t.startOfWeek())
  }
  function Ve(e, t) {
    var n = _e(e, 'month')
    return _e(n, 'week', t.startOfWeek())
  }
  function Be(e, t) {
    var n = Ee(e, t)
    return De(n, e) ? n : be(n, 1, t)
  }
  function Ye(e, t, n) {
    void 0 === n && (n = 'day')
    for (var r = e, o = []; xe(r, t, n); ) o.push(r), (r = be(r, 1, n))
    return o
  }
  function Ke(e, t) {
    return null == t && null == e
      ? null
      : (null == t && (t = new Date()),
        null == e && (e = new Date()),
        (e = Ee(e, 'day')),
        (e = Re(e, Re(t))),
        (e = Ae(e, Ae(t))),
        (e = ke(e, ke(t))),
        Ne(e, Ne(t)))
  }
  function $e(e) {
    return 0 === Re(e) && 0 === Ae(e) && 0 === ke(e) && 0 === Ne(e)
  }
  function Xe(e, t, n) {
    return n && 'milliseconds' !== n
      ? Math.round(Math.abs(+Ee(e, n) / He[n] - +Ee(t, n) / He[n]))
      : Math.abs(+e - +t)
  }
  function qe(e, t, n) {
    var r = -1,
      o = e.length
    t < 0 && (t = -t > o ? 0 : o + t),
      (n = n > o ? o : n) < 0 && (n += o),
      (o = t > n ? 0 : (n - t) >>> 0),
      (t >>>= 0)
    for (var a = Array(o); ++r < o; ) a[r] = e[r + t]
    return a
  }
  function Ge(e, t) {
    return e === t || (e != e && t != t)
  }
  var Ze =
      'object' == typeof global && global && global.Object === Object && global,
    Je = 'object' == typeof self && self && self.Object === Object && self,
    Qe = Ze || Je || Function('return this')(),
    et = Qe.Symbol,
    tt = Object.prototype,
    nt = tt.hasOwnProperty,
    rt = tt.toString,
    ot = et ? et.toStringTag : void 0
  var at = Object.prototype.toString
  var it = '[object Null]',
    st = '[object Undefined]',
    ct = et ? et.toStringTag : void 0
  function lt(e) {
    return null == e
      ? void 0 === e
        ? st
        : it
      : ct && ct in Object(e)
      ? (function(e) {
          var t = nt.call(e, ot),
            n = e[ot]
          try {
            e[ot] = void 0
            var r = !0
          } catch (e) {}
          var o = rt.call(e)
          return r && (t ? (e[ot] = n) : delete e[ot]), o
        })(e)
      : (function(e) {
          return at.call(e)
        })(e)
  }
  function ut(e) {
    var t = typeof e
    return null != e && ('object' == t || 'function' == t)
  }
  var ft = '[object AsyncFunction]',
    pt = '[object Function]',
    dt = '[object GeneratorFunction]',
    ht = '[object Proxy]'
  function vt(e) {
    if (!ut(e)) return !1
    var t = lt(e)
    return t == pt || t == dt || t == ft || t == ht
  }
  var mt = 9007199254740991
  function gt(e) {
    return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= mt
  }
  function yt(e) {
    return null != e && gt(e.length) && !vt(e)
  }
  var bt = 9007199254740991,
    wt = /^(?:0|[1-9]\d*)$/
  function Et(e, t) {
    var n = typeof e
    return (
      !!(t = null == t ? bt : t) &&
      ('number' == n || ('symbol' != n && wt.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
    )
  }
  function _t(e, t, n) {
    if (!ut(n)) return !1
    var r = typeof t
    return (
      !!('number' == r ? yt(n) && Et(t, n.length) : 'string' == r && t in n) &&
      Ge(n[t], e)
    )
  }
  var Dt = /\s/
  var Ot = /^\s+/
  function St(e) {
    return e
      ? e
          .slice(
            0,
            (function(e) {
              for (var t = e.length; t-- && Dt.test(e.charAt(t)); );
              return t
            })(e) + 1
          )
          .replace(Ot, '')
      : e
  }
  function Mt(e) {
    return null != e && 'object' == typeof e
  }
  var xt = '[object Symbol]'
  function jt(e) {
    return 'symbol' == typeof e || (Mt(e) && lt(e) == xt)
  }
  var Tt = NaN,
    Pt = /^[-+]0x[0-9a-f]+$/i,
    Nt = /^0b[01]+$/i,
    kt = /^0o[0-7]+$/i,
    At = parseInt
  var Rt = 1 / 0,
    Ct = 1.7976931348623157e308
  function Ft(e) {
    return e
      ? (e = (function(e) {
          if ('number' == typeof e) return e
          if (jt(e)) return Tt
          if (ut(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e
            e = ut(t) ? t + '' : t
          }
          if ('string' != typeof e) return 0 === e ? e : +e
          e = St(e)
          var n = Nt.test(e)
          return n || kt.test(e)
            ? At(e.slice(2), n ? 2 : 8)
            : Pt.test(e)
            ? Tt
            : +e
        })(e)) === Rt || e === -Rt
        ? (e < 0 ? -1 : 1) * Ct
        : e == e
        ? e
        : 0
      : 0 === e
      ? e
      : 0
  }
  function Lt(e) {
    var t = Ft(e),
      n = t % 1
    return t == t ? (n ? t - n : t) : 0
  }
  var zt = Math.ceil,
    It = Math.max
  function Wt(e) {
    return (e && e.ownerDocument) || document
  }
  function Ht(e, t) {
    return (function(e) {
      var t = Wt(e)
      return (t && t.defaultView) || window
    })(e).getComputedStyle(e, t)
  }
  var Ut = /([A-Z])/g
  var Vt = /^ms-/
  function Bt(e) {
    return (function(e) {
      return e.replace(Ut, '-$1').toLowerCase()
    })(e).replace(Vt, '-ms-')
  }
  var Yt = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i
  function Kt(e, t) {
    var n = '',
      r = ''
    if ('string' == typeof t)
      return e.style.getPropertyValue(Bt(t)) || Ht(e).getPropertyValue(Bt(t))
    Object.keys(t).forEach(function(o) {
      var a = t[o]
      a || 0 === a
        ? !(function(e) {
            return !(!e || !Yt.test(e))
          })(o)
          ? (n += Bt(o) + ': ' + a + ';')
          : (r += o + '(' + a + ') ')
        : e.style.removeProperty(Bt(o))
    }),
      r && (n += 'transform: ' + r + ';'),
      (e.style.cssText += ';' + n)
  }
  function $t(e, t) {
    return e.contains
      ? e.contains(t)
      : e.compareDocumentPosition
      ? e === t || !!(16 & e.compareDocumentPosition(t))
      : void 0
  }
  function Xt(e) {
    return 'window' in e && e.window === e
      ? e
      : ('nodeType' in (t = e) &&
          t.nodeType === document.DOCUMENT_NODE &&
          e.defaultView) ||
          !1
    var t
  }
  function qt(e) {
    var t = 'pageXOffset' === e ? 'scrollLeft' : 'scrollTop'
    return function(n, r) {
      var o = Xt(n)
      if (void 0 === r) return o ? o[e] : n[t]
      o ? o.scrollTo(o[e], r) : (n[t] = r)
    }
  }
  var Gt = qt('pageXOffset'),
    Zt = qt('pageYOffset')
  function Jt(e) {
    var t = Wt(e),
      n = { top: 0, left: 0, height: 0, width: 0 },
      r = t && t.documentElement
    return r && $t(r, e)
      ? (void 0 !== e.getBoundingClientRect && (n = e.getBoundingClientRect()),
        (n = {
          top: n.top + Zt(r) - (r.clientTop || 0),
          left: n.left + Gt(r) - (r.clientLeft || 0),
          width: n.width,
          height: n.height,
        }))
      : n
  }
  var Qt = function(e) {
    return !!e && 'offsetParent' in e
  }
  var en = function(e) {
    return e.nodeName && e.nodeName.toLowerCase()
  }
  function tn(e, t) {
    var n,
      r = { top: 0, left: 0 }
    if ('fixed' === Kt(e, 'position')) n = e.getBoundingClientRect()
    else {
      var o =
        t ||
        (function(e) {
          for (
            var t = Wt(e), n = e && e.offsetParent;
            Qt(n) && 'HTML' !== n.nodeName && 'static' === Kt(n, 'position');

          )
            n = n.offsetParent
          return n || t.documentElement
        })(e)
      ;(n = Jt(e)), 'html' !== en(o) && (r = Jt(o))
      var a = String(Kt(o, 'borderTopWidth') || 0)
      r.top += parseInt(a, 10) - Zt(o) || 0
      var s = String(Kt(o, 'borderLeftWidth') || 0)
      r.left += parseInt(s, 10) - Gt(o) || 0
    }
    var c = String(Kt(e, 'marginTop') || 0),
      l = String(Kt(e, 'marginLeft') || 0)
    return i({}, n, {
      top: n.top - r.top - (parseInt(c, 10) || 0),
      left: n.left - r.left - (parseInt(l, 10) || 0),
    })
  }
  var nn = [
      'style',
      'className',
      'event',
      'selected',
      'isAllDay',
      'continuesPrior',
      'continuesAfter',
      'accessors',
      'getters',
      'children',
      'components',
    ],
    rn = (function(e) {
      function t() {
        return e.apply(this, arguments) || this
      }
      return (
        l(t, e),
        (t.prototype.render = function() {
          var e = this.props,
            t = e.style,
            n = e.className,
            o = e.event,
            a = e.selected,
            c = e.isAllDay,
            l = e.continuesPrior,
            u = e.continuesAfter,
            f = e.accessors,
            p = e.getters,
            d = e.children,
            h = e.components.eventWrapper,
            v = s(e, nn)
          delete v.resizable
          var m = f.title(o),
            g = f.tooltip(o),
            y = f.end(o),
            b = f.start(o),
            w = f.allDay(o),
            E = c || w || Xe(b, Be(y, 'day'), 'day') > 1,
            _ = p.eventProp(o, b, y, a),
            D = r.createElement(
              'a',
              {
                href: o.url ? o.url : '#',
                className: G('rbc-event-content', {
                  'rbc-event-content-train': '2' === o.type,
                }),
                title: g || void 0,
              },
              m
            )
          return r.createElement(
            h,
            i({}, this.props, { type: 'date' }),
            r.createElement(
              'div',
              i({}, v, {
                tabIndex: 0,
                style: i({}, _.style, t),
                className: G('rbc-event', n, _.className, {
                  'rbc-selected': a,
                  'rbc-event-allday': E,
                  'rbc-event-continues-prior': l,
                  'rbc-event-continues-after': u,
                }),
              }),
              'function' == typeof d ? d(D) : D
            )
          )
        }),
        t
      )
    })(r.Component)
  function on(e, t) {
    return !(!e || null == t) && -1 !== [].concat(t).indexOf(e)
  }
  function an(e, t) {
    return (e.right - e.left) / t
  }
  function sn(e, t, n, r) {
    var o = an(e, r)
    return n
      ? r - 1 - Math.floor((t - e.left) / o)
      : Math.floor((t - e.left) / o)
  }
  rn.propTypes = {}
  var cn = (function(e) {
    function t() {
      return e.apply(this, arguments) || this
    }
    l(t, e)
    var n = t.prototype
    return (
      (n.componentDidMount = function() {
        var e,
          t,
          n = this.props,
          r = n.popupOffset,
          o = void 0 === r ? 5 : r,
          a = Jt(n.popperRef.current),
          i = a.top,
          s = a.left,
          c = a.width,
          l = a.height,
          u = window.innerHeight + Zt(window),
          f = window.innerWidth + Gt(window),
          p = i + l,
          d = s + c
        ;(p > u || d > f) &&
          (p > u && (e = p - u + (o.y || +o || 0)),
          d > f && (t = d - f + (o.x || +o || 0)),
          this.setState({ topOffset: e, leftOffset: t }))
      }),
      (n.render = function() {
        var e = this,
          t = this.props,
          n = t.events,
          o = t.selected,
          a = t.getters,
          s = t.accessors,
          c = t.components,
          l = t.onSelect,
          u = t.onDoubleClick,
          f = t.onKeyPress,
          p = t.slotStart,
          d = t.slotEnd,
          h = t.localizer,
          v = t.popperRef,
          m = this.props.position.width,
          g = {
            top: -((this.state || {}).topOffset || 0),
            left: -((this.state || {}).leftOffset || 0),
            minWidth: m + m / 2,
          }
        return r.createElement(
          'div',
          {
            style: i({}, this.props.style, g),
            className: 'rbc-overlay',
            ref: v,
          },
          r.createElement(
            'div',
            { className: 'rbc-overlay-header' },
            h.format(p, 'dayHeaderFormat')
          ),
          n.map(function(t, n) {
            return r.createElement(rn, {
              key: n,
              type: 'popup',
              event: t,
              getters: a,
              onSelect: l,
              accessors: s,
              components: c,
              onDoubleClick: u,
              onKeyPress: f,
              continuesPrior: Me(s.end(t), p, 'day'),
              continuesAfter: Se(s.start(t), d, 'day'),
              selected: on(t, o),
              draggable: !0,
              onDragStart: function() {
                return e.props.handleDragStart(t)
              },
              onDragEnd: function() {
                return e.props.show()
              },
            })
          })
        )
      }),
      t
    )
  })(r.Component)
  cn.propTypes = {}
  var ln = r.forwardRef(function(e, t) {
    return r.createElement(cn, i({ popperRef: t }, e))
  })
  function un() {
    return t.useState(null)
  }
  var fn = function(e) {
    return e && 'function' != typeof e
      ? function(t) {
          e.current = t
        }
      : e
  }
  function pn(e, n) {
    return t.useMemo(
      function() {
        return (function(e, t) {
          var n = fn(e),
            r = fn(t)
          return function(e) {
            n && n(e), r && r(e)
          }
        })(e, n)
      },
      [e, n]
    )
  }
  var dn = 'top',
    hn = 'bottom',
    vn = 'right',
    mn = 'left',
    gn = 'auto',
    yn = [dn, hn, vn, mn],
    bn = 'start',
    wn = 'end',
    En = 'clippingParents',
    _n = 'viewport',
    Dn = 'popper',
    On = 'reference',
    Sn = yn.reduce(function(e, t) {
      return e.concat([t + '-' + bn, t + '-' + wn])
    }, []),
    Mn = [].concat(yn, [gn]).reduce(function(e, t) {
      return e.concat([t, t + '-' + bn, t + '-' + wn])
    }, []),
    xn = [
      'beforeRead',
      'read',
      'afterRead',
      'beforeMain',
      'main',
      'afterMain',
      'beforeWrite',
      'write',
      'afterWrite',
    ]
  function jn(e) {
    return e.split('-')[0]
  }
  function Tn(e) {
    if (null == e) return window
    if ('[object Window]' !== e.toString()) {
      var t = e.ownerDocument
      return (t && t.defaultView) || window
    }
    return e
  }
  function Pn(e) {
    return e instanceof Tn(e).Element || e instanceof Element
  }
  function Nn(e) {
    return e instanceof Tn(e).HTMLElement || e instanceof HTMLElement
  }
  function kn(e) {
    return (
      'undefined' != typeof ShadowRoot &&
      (e instanceof Tn(e).ShadowRoot || e instanceof ShadowRoot)
    )
  }
  var An = Math.round
  function Rn(e, t) {
    void 0 === t && (t = !1)
    var n = e.getBoundingClientRect(),
      r = 1,
      o = 1
    return (
      Nn(e) &&
        t &&
        ((r = n.width / e.offsetWidth || 1),
        (o = n.height / e.offsetHeight || 1)),
      {
        width: An(n.width / r),
        height: An(n.height / o),
        top: An(n.top / o),
        right: An(n.right / r),
        bottom: An(n.bottom / o),
        left: An(n.left / r),
        x: An(n.left / r),
        y: An(n.top / o),
      }
    )
  }
  function Cn(e) {
    var t = Rn(e),
      n = e.offsetWidth,
      r = e.offsetHeight
    return (
      Math.abs(t.width - n) <= 1 && (n = t.width),
      Math.abs(t.height - r) <= 1 && (r = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
    )
  }
  function Fn(e, t) {
    var n = t.getRootNode && t.getRootNode()
    if (e.contains(t)) return !0
    if (n && kn(n)) {
      var r = t
      do {
        if (r && e.isSameNode(r)) return !0
        r = r.parentNode || r.host
      } while (r)
    }
    return !1
  }
  function Ln(e) {
    return e ? (e.nodeName || '').toLowerCase() : null
  }
  function zn(e) {
    return Tn(e).getComputedStyle(e)
  }
  function In(e) {
    return ['table', 'td', 'th'].indexOf(Ln(e)) >= 0
  }
  function Wn(e) {
    return (
      (Pn(e) ? e.ownerDocument : e.document) || window.document
    ).documentElement
  }
  function Hn(e) {
    return 'html' === Ln(e)
      ? e
      : e.assignedSlot || e.parentNode || (kn(e) ? e.host : null) || Wn(e)
  }
  function Un(e) {
    return Nn(e) && 'fixed' !== zn(e).position ? e.offsetParent : null
  }
  function Vn(e) {
    for (var t = Tn(e), n = Un(e); n && In(n) && 'static' === zn(n).position; )
      n = Un(n)
    return n &&
      ('html' === Ln(n) || ('body' === Ln(n) && 'static' === zn(n).position))
      ? t
      : n ||
          (function(e) {
            var t = -1 !== navigator.userAgent.toLowerCase().indexOf('firefox')
            if (
              -1 !== navigator.userAgent.indexOf('Trident') &&
              Nn(e) &&
              'fixed' === zn(e).position
            )
              return null
            for (
              var n = Hn(e);
              Nn(n) && ['html', 'body'].indexOf(Ln(n)) < 0;

            ) {
              var r = zn(n)
              if (
                'none' !== r.transform ||
                'none' !== r.perspective ||
                'paint' === r.contain ||
                -1 !== ['transform', 'perspective'].indexOf(r.willChange) ||
                (t && 'filter' === r.willChange) ||
                (t && r.filter && 'none' !== r.filter)
              )
                return n
              n = n.parentNode
            }
            return null
          })(e) ||
          t
  }
  function Bn(e) {
    return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
  }
  var Yn = Math.max,
    Kn = Math.min,
    $n = Math.round
  function Xn(e, t, n) {
    return Yn(e, Kn(t, n))
  }
  function qn(e) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e)
  }
  function Gn(e, t) {
    return t.reduce(function(t, n) {
      return (t[n] = e), t
    }, {})
  }
  var Zn = function(e, t) {
    return qn(
      'number' !=
        typeof (e =
          'function' == typeof e
            ? e(Object.assign({}, t.rects, { placement: t.placement }))
            : e)
        ? e
        : Gn(e, yn)
    )
  }
  var Jn = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
  function Qn(e) {
    var t,
      n = e.popper,
      r = e.popperRect,
      o = e.placement,
      a = e.offsets,
      i = e.position,
      s = e.gpuAcceleration,
      c = e.adaptive,
      l = e.roundOffsets,
      u =
        !0 === l
          ? (function(e) {
              var t = e.x,
                n = e.y,
                r = window.devicePixelRatio || 1
              return { x: $n($n(t * r) / r) || 0, y: $n($n(n * r) / r) || 0 }
            })(a)
          : 'function' == typeof l
          ? l(a)
          : a,
      f = u.x,
      p = void 0 === f ? 0 : f,
      d = u.y,
      h = void 0 === d ? 0 : d,
      v = a.hasOwnProperty('x'),
      m = a.hasOwnProperty('y'),
      g = mn,
      y = dn,
      b = window
    if (c) {
      var w = Vn(n),
        E = 'clientHeight',
        _ = 'clientWidth'
      w === Tn(n) &&
        'static' !== zn((w = Wn(n))).position &&
        ((E = 'scrollHeight'), (_ = 'scrollWidth')),
        (w = w),
        o === dn && ((y = hn), (h -= w[E] - r.height), (h *= s ? 1 : -1)),
        o === mn && ((g = vn), (p -= w[_] - r.width), (p *= s ? 1 : -1))
    }
    var D,
      O = Object.assign({ position: i }, c && Jn)
    return s
      ? Object.assign(
          {},
          O,
          (((D = {})[y] = m ? '0' : ''),
          (D[g] = v ? '0' : ''),
          (D.transform =
            (b.devicePixelRatio || 1) < 2
              ? 'translate(' + p + 'px, ' + h + 'px)'
              : 'translate3d(' + p + 'px, ' + h + 'px, 0)'),
          D)
        )
      : Object.assign(
          {},
          O,
          (((t = {})[y] = m ? h + 'px' : ''),
          (t[g] = v ? p + 'px' : ''),
          (t.transform = ''),
          t)
        )
  }
  var er = { passive: !0 }
  var tr = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
  function nr(e) {
    return e.replace(/left|right|bottom|top/g, function(e) {
      return tr[e]
    })
  }
  var rr = { start: 'end', end: 'start' }
  function or(e) {
    return e.replace(/start|end/g, function(e) {
      return rr[e]
    })
  }
  function ar(e) {
    var t = Tn(e)
    return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset }
  }
  function ir(e) {
    return Rn(Wn(e)).left + ar(e).scrollLeft
  }
  function sr(e) {
    var t = zn(e),
      n = t.overflow,
      r = t.overflowX,
      o = t.overflowY
    return /auto|scroll|overlay|hidden/.test(n + o + r)
  }
  function cr(e, t) {
    var n
    void 0 === t && (t = [])
    var r = (function e(t) {
        return ['html', 'body', '#document'].indexOf(Ln(t)) >= 0
          ? t.ownerDocument.body
          : Nn(t) && sr(t)
          ? t
          : e(Hn(t))
      })(e),
      o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
      a = Tn(r),
      i = o ? [a].concat(a.visualViewport || [], sr(r) ? r : []) : r,
      s = t.concat(i)
    return o ? s : s.concat(cr(Hn(i)))
  }
  function lr(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    })
  }
  function ur(e, t) {
    return t === _n
      ? lr(
          (function(e) {
            var t = Tn(e),
              n = Wn(e),
              r = t.visualViewport,
              o = n.clientWidth,
              a = n.clientHeight,
              i = 0,
              s = 0
            return (
              r &&
                ((o = r.width),
                (a = r.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  ((i = r.offsetLeft), (s = r.offsetTop))),
              { width: o, height: a, x: i + ir(e), y: s }
            )
          })(e)
        )
      : Nn(t)
      ? (function(e) {
          var t = Rn(e)
          return (
            (t.top = t.top + e.clientTop),
            (t.left = t.left + e.clientLeft),
            (t.bottom = t.top + e.clientHeight),
            (t.right = t.left + e.clientWidth),
            (t.width = e.clientWidth),
            (t.height = e.clientHeight),
            (t.x = t.left),
            (t.y = t.top),
            t
          )
        })(t)
      : lr(
          (function(e) {
            var t,
              n = Wn(e),
              r = ar(e),
              o = null == (t = e.ownerDocument) ? void 0 : t.body,
              a = Yn(
                n.scrollWidth,
                n.clientWidth,
                o ? o.scrollWidth : 0,
                o ? o.clientWidth : 0
              ),
              i = Yn(
                n.scrollHeight,
                n.clientHeight,
                o ? o.scrollHeight : 0,
                o ? o.clientHeight : 0
              ),
              s = -r.scrollLeft + ir(e),
              c = -r.scrollTop
            return (
              'rtl' === zn(o || n).direction &&
                (s += Yn(n.clientWidth, o ? o.clientWidth : 0) - a),
              { width: a, height: i, x: s, y: c }
            )
          })(Wn(e))
        )
  }
  function fr(e, t, n) {
    var r =
        'clippingParents' === t
          ? (function(e) {
              var t = cr(Hn(e)),
                n =
                  ['absolute', 'fixed'].indexOf(zn(e).position) >= 0 && Nn(e)
                    ? Vn(e)
                    : e
              return Pn(n)
                ? t.filter(function(e) {
                    return Pn(e) && Fn(e, n) && 'body' !== Ln(e)
                  })
                : []
            })(e)
          : [].concat(t),
      o = [].concat(r, [n]),
      a = o[0],
      i = o.reduce(function(t, n) {
        var r = ur(e, n)
        return (
          (t.top = Yn(r.top, t.top)),
          (t.right = Kn(r.right, t.right)),
          (t.bottom = Kn(r.bottom, t.bottom)),
          (t.left = Yn(r.left, t.left)),
          t
        )
      }, ur(e, a))
    return (
      (i.width = i.right - i.left),
      (i.height = i.bottom - i.top),
      (i.x = i.left),
      (i.y = i.top),
      i
    )
  }
  function pr(e) {
    return e.split('-')[1]
  }
  function dr(e) {
    var t,
      n = e.reference,
      r = e.element,
      o = e.placement,
      a = o ? jn(o) : null,
      i = o ? pr(o) : null,
      s = n.x + n.width / 2 - r.width / 2,
      c = n.y + n.height / 2 - r.height / 2
    switch (a) {
      case dn:
        t = { x: s, y: n.y - r.height }
        break
      case hn:
        t = { x: s, y: n.y + n.height }
        break
      case vn:
        t = { x: n.x + n.width, y: c }
        break
      case mn:
        t = { x: n.x - r.width, y: c }
        break
      default:
        t = { x: n.x, y: n.y }
    }
    var l = a ? Bn(a) : null
    if (null != l) {
      var u = 'y' === l ? 'height' : 'width'
      switch (i) {
        case bn:
          t[l] = t[l] - (n[u] / 2 - r[u] / 2)
          break
        case wn:
          t[l] = t[l] + (n[u] / 2 - r[u] / 2)
      }
    }
    return t
  }
  function hr(e, t) {
    void 0 === t && (t = {})
    var n = t,
      r = n.placement,
      o = void 0 === r ? e.placement : r,
      a = n.boundary,
      i = void 0 === a ? En : a,
      s = n.rootBoundary,
      c = void 0 === s ? _n : s,
      l = n.elementContext,
      u = void 0 === l ? Dn : l,
      f = n.altBoundary,
      p = void 0 !== f && f,
      d = n.padding,
      h = void 0 === d ? 0 : d,
      v = qn('number' != typeof h ? h : Gn(h, yn)),
      m = u === Dn ? On : Dn,
      g = e.elements.reference,
      y = e.rects.popper,
      b = e.elements[p ? m : u],
      w = fr(Pn(b) ? b : b.contextElement || Wn(e.elements.popper), i, c),
      E = Rn(g),
      _ = dr({ reference: E, element: y, strategy: 'absolute', placement: o }),
      D = lr(Object.assign({}, y, _)),
      O = u === Dn ? D : E,
      S = {
        top: w.top - O.top + v.top,
        bottom: O.bottom - w.bottom + v.bottom,
        left: w.left - O.left + v.left,
        right: O.right - w.right + v.right,
      },
      M = e.modifiersData.offset
    if (u === Dn && M) {
      var x = M[o]
      Object.keys(S).forEach(function(e) {
        var t = [vn, hn].indexOf(e) >= 0 ? 1 : -1,
          n = [dn, hn].indexOf(e) >= 0 ? 'y' : 'x'
        S[e] += x[n] * t
      })
    }
    return S
  }
  function vr(e, t) {
    void 0 === t && (t = {})
    var n = t,
      r = n.placement,
      o = n.boundary,
      a = n.rootBoundary,
      i = n.padding,
      s = n.flipVariations,
      c = n.allowedAutoPlacements,
      l = void 0 === c ? Mn : c,
      u = pr(r),
      f = u
        ? s
          ? Sn
          : Sn.filter(function(e) {
              return pr(e) === u
            })
        : yn,
      p = f.filter(function(e) {
        return l.indexOf(e) >= 0
      })
    0 === p.length && (p = f)
    var d = p.reduce(function(t, n) {
      return (
        (t[n] = hr(e, {
          placement: n,
          boundary: o,
          rootBoundary: a,
          padding: i,
        })[jn(n)]),
        t
      )
    }, {})
    return Object.keys(d).sort(function(e, t) {
      return d[e] - d[t]
    })
  }
  function mr(e, t, n) {
    return (
      void 0 === n && (n = { x: 0, y: 0 }),
      {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x,
      }
    )
  }
  function gr(e) {
    return [dn, vn, hn, mn].some(function(t) {
      return e[t] >= 0
    })
  }
  function yr(e, t, n) {
    void 0 === n && (n = !1)
    var r,
      o,
      a = Nn(t),
      i =
        Nn(t) &&
        (function(e) {
          var t = e.getBoundingClientRect(),
            n = t.width / e.offsetWidth || 1,
            r = t.height / e.offsetHeight || 1
          return 1 !== n || 1 !== r
        })(t),
      s = Wn(t),
      c = Rn(e, i),
      l = { scrollLeft: 0, scrollTop: 0 },
      u = { x: 0, y: 0 }
    return (
      (a || (!a && !n)) &&
        (('body' !== Ln(t) || sr(s)) &&
          (l =
            (r = t) !== Tn(r) && Nn(r)
              ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop }
              : ar(r)),
        Nn(t)
          ? (((u = Rn(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
          : s && (u.x = ir(s))),
      {
        x: c.left + l.scrollLeft - u.x,
        y: c.top + l.scrollTop - u.y,
        width: c.width,
        height: c.height,
      }
    )
  }
  function br(e) {
    var t = new Map(),
      n = new Set(),
      r = []
    return (
      e.forEach(function(e) {
        t.set(e.name, e)
      }),
      e.forEach(function(e) {
        n.has(e.name) ||
          (function e(o) {
            n.add(o.name),
              []
                .concat(o.requires || [], o.requiresIfExists || [])
                .forEach(function(r) {
                  if (!n.has(r)) {
                    var o = t.get(r)
                    o && e(o)
                  }
                }),
              r.push(o)
          })(e)
      }),
      r
    )
  }
  var wr = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
  function Er() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n]
    return !t.some(function(e) {
      return !(e && 'function' == typeof e.getBoundingClientRect)
    })
  }
  var _r = (function(e) {
    void 0 === e && (e = {})
    var t = e,
      n = t.defaultModifiers,
      r = void 0 === n ? [] : n,
      o = t.defaultOptions,
      a = void 0 === o ? wr : o
    return function(e, t, n) {
      void 0 === n && (n = a)
      var o,
        i,
        s = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, wr, a),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        c = [],
        l = !1,
        u = {
          state: s,
          setOptions: function(n) {
            f(),
              (s.options = Object.assign({}, a, s.options, n)),
              (s.scrollParents = {
                reference: Pn(e)
                  ? cr(e)
                  : e.contextElement
                  ? cr(e.contextElement)
                  : [],
                popper: cr(t),
              })
            var o,
              i,
              l = (function(e) {
                var t = br(e)
                return xn.reduce(function(e, n) {
                  return e.concat(
                    t.filter(function(e) {
                      return e.phase === n
                    })
                  )
                }, [])
              })(
                ((o = [].concat(r, s.options.modifiers)),
                (i = o.reduce(function(e, t) {
                  var n = e[t.name]
                  return (
                    (e[t.name] = n
                      ? Object.assign({}, n, t, {
                          options: Object.assign({}, n.options, t.options),
                          data: Object.assign({}, n.data, t.data),
                        })
                      : t),
                    e
                  )
                }, {})),
                Object.keys(i).map(function(e) {
                  return i[e]
                }))
              )
            return (
              (s.orderedModifiers = l.filter(function(e) {
                return e.enabled
              })),
              s.orderedModifiers.forEach(function(e) {
                var t = e.name,
                  n = e.options,
                  r = void 0 === n ? {} : n,
                  o = e.effect
                if ('function' == typeof o) {
                  var a = o({ state: s, name: t, instance: u, options: r })
                  c.push(a || function() {})
                }
              }),
              u.update()
            )
          },
          forceUpdate: function() {
            if (!l) {
              var e = s.elements,
                t = e.reference,
                n = e.popper
              if (Er(t, n)) {
                ;(s.rects = {
                  reference: yr(t, Vn(n), 'fixed' === s.options.strategy),
                  popper: Cn(n),
                }),
                  (s.reset = !1),
                  (s.placement = s.options.placement),
                  s.orderedModifiers.forEach(function(e) {
                    return (s.modifiersData[e.name] = Object.assign({}, e.data))
                  })
                for (var r = 0; r < s.orderedModifiers.length; r++)
                  if (!0 !== s.reset) {
                    var o = s.orderedModifiers[r],
                      a = o.fn,
                      i = o.options,
                      c = void 0 === i ? {} : i,
                      f = o.name
                    'function' == typeof a &&
                      (s =
                        a({ state: s, options: c, name: f, instance: u }) || s)
                  } else (s.reset = !1), (r = -1)
              }
            }
          },
          update:
            ((o = function() {
              return new Promise(function(e) {
                u.forceUpdate(), e(s)
              })
            }),
            function() {
              return (
                i ||
                  (i = new Promise(function(e) {
                    Promise.resolve().then(function() {
                      ;(i = void 0), e(o())
                    })
                  })),
                i
              )
            }),
          destroy: function() {
            f(), (l = !0)
          },
        }
      if (!Er(e, t)) return u
      function f() {
        c.forEach(function(e) {
          return e()
        }),
          (c = [])
      }
      return (
        u.setOptions(n).then(function(e) {
          !l && n.onFirstUpdate && n.onFirstUpdate(e)
        }),
        u
      )
    }
  })({
    defaultModifiers: [
      {
        name: 'hide',
        enabled: !0,
        phase: 'main',
        requiresIfExists: ['preventOverflow'],
        fn: function(e) {
          var t = e.state,
            n = e.name,
            r = t.rects.reference,
            o = t.rects.popper,
            a = t.modifiersData.preventOverflow,
            i = hr(t, { elementContext: 'reference' }),
            s = hr(t, { altBoundary: !0 }),
            c = mr(i, r),
            l = mr(s, o, a),
            u = gr(c),
            f = gr(l)
          ;(t.modifiersData[n] = {
            referenceClippingOffsets: c,
            popperEscapeOffsets: l,
            isReferenceHidden: u,
            hasPopperEscaped: f,
          }),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              'data-popper-reference-hidden': u,
              'data-popper-escaped': f,
            }))
        },
      },
      {
        name: 'popperOffsets',
        enabled: !0,
        phase: 'read',
        fn: function(e) {
          var t = e.state,
            n = e.name
          t.modifiersData[n] = dr({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: 'absolute',
            placement: t.placement,
          })
        },
        data: {},
      },
      {
        name: 'computeStyles',
        enabled: !0,
        phase: 'beforeWrite',
        fn: function(e) {
          var t = e.state,
            n = e.options,
            r = n.gpuAcceleration,
            o = void 0 === r || r,
            a = n.adaptive,
            i = void 0 === a || a,
            s = n.roundOffsets,
            c = void 0 === s || s,
            l = {
              placement: jn(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: o,
            }
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              Qn(
                Object.assign({}, l, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: i,
                  roundOffsets: c,
                })
              )
            )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                Qn(
                  Object.assign({}, l, {
                    offsets: t.modifiersData.arrow,
                    position: 'absolute',
                    adaptive: !1,
                    roundOffsets: c,
                  })
                )
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              'data-popper-placement': t.placement,
            }))
        },
        data: {},
      },
      {
        name: 'eventListeners',
        enabled: !0,
        phase: 'write',
        fn: function() {},
        effect: function(e) {
          var t = e.state,
            n = e.instance,
            r = e.options,
            o = r.scroll,
            a = void 0 === o || o,
            i = r.resize,
            s = void 0 === i || i,
            c = Tn(t.elements.popper),
            l = [].concat(t.scrollParents.reference, t.scrollParents.popper)
          return (
            a &&
              l.forEach(function(e) {
                e.addEventListener('scroll', n.update, er)
              }),
            s && c.addEventListener('resize', n.update, er),
            function() {
              a &&
                l.forEach(function(e) {
                  e.removeEventListener('scroll', n.update, er)
                }),
                s && c.removeEventListener('resize', n.update, er)
            }
          )
        },
        data: {},
      },
      {
        name: 'offset',
        enabled: !0,
        phase: 'main',
        requires: ['popperOffsets'],
        fn: function(e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.offset,
            a = void 0 === o ? [0, 0] : o,
            i = Mn.reduce(function(e, n) {
              return (
                (e[n] = (function(e, t, n) {
                  var r = jn(e),
                    o = [mn, dn].indexOf(r) >= 0 ? -1 : 1,
                    a =
                      'function' == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    i = a[0],
                    s = a[1]
                  return (
                    (i = i || 0),
                    (s = (s || 0) * o),
                    [mn, vn].indexOf(r) >= 0 ? { x: s, y: i } : { x: i, y: s }
                  )
                })(n, t.rects, a)),
                e
              )
            }, {}),
            s = i[t.placement],
            c = s.x,
            l = s.y
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += c),
            (t.modifiersData.popperOffsets.y += l)),
            (t.modifiersData[r] = i)
        },
      },
      {
        name: 'flip',
        enabled: !0,
        phase: 'main',
        fn: function(e) {
          var t = e.state,
            n = e.options,
            r = e.name
          if (!t.modifiersData[r]._skip) {
            for (
              var o = n.mainAxis,
                a = void 0 === o || o,
                i = n.altAxis,
                s = void 0 === i || i,
                c = n.fallbackPlacements,
                l = n.padding,
                u = n.boundary,
                f = n.rootBoundary,
                p = n.altBoundary,
                d = n.flipVariations,
                h = void 0 === d || d,
                v = n.allowedAutoPlacements,
                m = t.options.placement,
                g = jn(m),
                y =
                  c ||
                  (g !== m && h
                    ? (function(e) {
                        if (jn(e) === gn) return []
                        var t = nr(e)
                        return [or(e), t, or(t)]
                      })(m)
                    : [nr(m)]),
                b = [m].concat(y).reduce(function(e, n) {
                  return e.concat(
                    jn(n) === gn
                      ? vr(t, {
                          placement: n,
                          boundary: u,
                          rootBoundary: f,
                          padding: l,
                          flipVariations: h,
                          allowedAutoPlacements: v,
                        })
                      : n
                  )
                }, []),
                w = t.rects.reference,
                E = t.rects.popper,
                _ = new Map(),
                D = !0,
                O = b[0],
                S = 0;
              S < b.length;
              S++
            ) {
              var M = b[S],
                x = jn(M),
                j = pr(M) === bn,
                T = [dn, hn].indexOf(x) >= 0,
                P = T ? 'width' : 'height',
                N = hr(t, {
                  placement: M,
                  boundary: u,
                  rootBoundary: f,
                  altBoundary: p,
                  padding: l,
                }),
                k = T ? (j ? vn : mn) : j ? hn : dn
              w[P] > E[P] && (k = nr(k))
              var A = nr(k),
                R = []
              if (
                (a && R.push(N[x] <= 0),
                s && R.push(N[k] <= 0, N[A] <= 0),
                R.every(function(e) {
                  return e
                }))
              ) {
                ;(O = M), (D = !1)
                break
              }
              _.set(M, R)
            }
            if (D)
              for (
                var C = function(e) {
                    var t = b.find(function(t) {
                      var n = _.get(t)
                      if (n)
                        return n.slice(0, e).every(function(e) {
                          return e
                        })
                    })
                    if (t) return (O = t), 'break'
                  },
                  F = h ? 3 : 1;
                F > 0 && 'break' !== C(F);
                F--
              );
            t.placement !== O &&
              ((t.modifiersData[r]._skip = !0),
              (t.placement = O),
              (t.reset = !0))
          }
        },
        requiresIfExists: ['offset'],
        data: { _skip: !1 },
      },
      {
        name: 'preventOverflow',
        enabled: !0,
        phase: 'main',
        fn: function(e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.mainAxis,
            a = void 0 === o || o,
            i = n.altAxis,
            s = void 0 !== i && i,
            c = n.boundary,
            l = n.rootBoundary,
            u = n.altBoundary,
            f = n.padding,
            p = n.tether,
            d = void 0 === p || p,
            h = n.tetherOffset,
            v = void 0 === h ? 0 : h,
            m = hr(t, {
              boundary: c,
              rootBoundary: l,
              padding: f,
              altBoundary: u,
            }),
            g = jn(t.placement),
            y = pr(t.placement),
            b = !y,
            w = Bn(g),
            E = 'x' === w ? 'y' : 'x',
            _ = t.modifiersData.popperOffsets,
            D = t.rects.reference,
            O = t.rects.popper,
            S =
              'function' == typeof v
                ? v(Object.assign({}, t.rects, { placement: t.placement }))
                : v,
            M = { x: 0, y: 0 }
          if (_) {
            if (a || s) {
              var x = 'y' === w ? dn : mn,
                j = 'y' === w ? hn : vn,
                T = 'y' === w ? 'height' : 'width',
                P = _[w],
                N = _[w] + m[x],
                k = _[w] - m[j],
                A = d ? -O[T] / 2 : 0,
                R = y === bn ? D[T] : O[T],
                C = y === bn ? -O[T] : -D[T],
                F = t.elements.arrow,
                L = d && F ? Cn(F) : { width: 0, height: 0 },
                z = t.modifiersData['arrow#persistent']
                  ? t.modifiersData['arrow#persistent'].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                I = z[x],
                W = z[j],
                H = Xn(0, D[T], L[T]),
                U = b ? D[T] / 2 - A - H - I - S : R - H - I - S,
                V = b ? -D[T] / 2 + A + H + W + S : C + H + W + S,
                B = t.elements.arrow && Vn(t.elements.arrow),
                Y = B ? ('y' === w ? B.clientTop || 0 : B.clientLeft || 0) : 0,
                K = t.modifiersData.offset
                  ? t.modifiersData.offset[t.placement][w]
                  : 0,
                $ = _[w] + U - K - Y,
                X = _[w] + V - K
              if (a) {
                var q = Xn(d ? Kn(N, $) : N, P, d ? Yn(k, X) : k)
                ;(_[w] = q), (M[w] = q - P)
              }
              if (s) {
                var G = 'x' === w ? dn : mn,
                  Z = 'x' === w ? hn : vn,
                  J = _[E],
                  Q = J + m[G],
                  ee = J - m[Z],
                  te = Xn(d ? Kn(Q, $) : Q, J, d ? Yn(ee, X) : ee)
                ;(_[E] = te), (M[E] = te - J)
              }
            }
            t.modifiersData[r] = M
          }
        },
        requiresIfExists: ['offset'],
      },
      {
        name: 'arrow',
        enabled: !0,
        phase: 'main',
        fn: function(e) {
          var t,
            n = e.state,
            r = e.name,
            o = e.options,
            a = n.elements.arrow,
            i = n.modifiersData.popperOffsets,
            s = jn(n.placement),
            c = Bn(s),
            l = [mn, vn].indexOf(s) >= 0 ? 'height' : 'width'
          if (a && i) {
            var u = Zn(o.padding, n),
              f = Cn(a),
              p = 'y' === c ? dn : mn,
              d = 'y' === c ? hn : vn,
              h =
                n.rects.reference[l] +
                n.rects.reference[c] -
                i[c] -
                n.rects.popper[l],
              v = i[c] - n.rects.reference[c],
              m = Vn(a),
              g = m
                ? 'y' === c
                  ? m.clientHeight || 0
                  : m.clientWidth || 0
                : 0,
              y = h / 2 - v / 2,
              b = u[p],
              w = g - f[l] - u[d],
              E = g / 2 - f[l] / 2 + y,
              _ = Xn(b, E, w),
              D = c
            n.modifiersData[r] =
              (((t = {})[D] = _), (t.centerOffset = _ - E), t)
          }
        },
        effect: function(e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? '[data-popper-arrow]' : n
          null != r &&
            ('string' != typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            Fn(t.elements.popper, r) &&
            (t.elements.arrow = r)
        },
        requires: ['popperOffsets'],
        requiresIfExists: ['preventOverflow'],
      },
    ],
  })
  function Dr(e) {
    var n = (function() {
      var e = t.useRef(!0),
        n = t.useRef(function() {
          return e.current
        })
      return (
        t.useEffect(function() {
          return function() {
            e.current = !1
          }
        }, []),
        n.current
      )
    })()
    return [
      e[0],
      t.useCallback(
        function(t) {
          if (n()) return e[1](t)
        },
        [n, e[1]]
      ),
    ]
  }
  var Or = function(e) {
      return {
        position: e,
        top: '0',
        left: '0',
        opacity: '0',
        pointerEvents: 'none',
      }
    },
    Sr = { name: 'applyStyles', enabled: !1 },
    Mr = {
      name: 'ariaDescribedBy',
      enabled: !0,
      phase: 'afterWrite',
      effect: function(e) {
        var t = e.state
        return function() {
          var e = t.elements,
            n = e.reference,
            r = e.popper
          if ('removeAttribute' in n) {
            var o = (n.getAttribute('aria-describedby') || '')
              .split(',')
              .filter(function(e) {
                return e.trim() !== r.id
              })
            o.length
              ? n.setAttribute('aria-describedby', o.join(','))
              : n.removeAttribute('aria-describedby')
          }
        }
      },
      fn: function(e) {
        var t,
          n = e.state.elements,
          r = n.popper,
          o = n.reference,
          a = null == (t = r.getAttribute('role')) ? void 0 : t.toLowerCase()
        if (r.id && 'tooltip' === a && 'setAttribute' in o) {
          var i = o.getAttribute('aria-describedby')
          if (i && -1 !== i.split(',').indexOf(r.id)) return
          o.setAttribute('aria-describedby', i ? i + ',' + r.id : r.id)
        }
      },
    },
    xr = []
  var jr = !(
      'undefined' == typeof window ||
      !window.document ||
      !window.document.createElement
    ),
    Tr = !1,
    Pr = !1
  try {
    var Nr = {
      get passive() {
        return (Tr = !0)
      },
      get once() {
        return (Pr = Tr = !0)
      },
    }
    jr &&
      (window.addEventListener('test', Nr, Nr),
      window.removeEventListener('test', Nr, !0))
  } catch (h) {}
  function kr(e, t, n, r) {
    return (
      (function(e, t, n, r) {
        if (r && 'boolean' != typeof r && !Pr) {
          var o = r.once,
            a = r.capture,
            i = n
          !Pr &&
            o &&
            ((i =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, a), n.call(this, r)
              }),
            (n.__once = i)),
            e.addEventListener(t, i, Tr ? r : a)
        }
        e.addEventListener(t, n, r)
      })(e, t, n, r),
      function() {
        !(function(e, t, n, r) {
          var o = r && 'boolean' != typeof r ? r.capture : r
          e.removeEventListener(t, n, o),
            n.__once && e.removeEventListener(t, n.__once, o)
        })(e, t, n, r)
      }
    )
  }
  function Ar(e) {
    var n = (function(e) {
      var n = t.useRef(e)
      return (
        t.useEffect(
          function() {
            n.current = e
          },
          [e]
        ),
        n
      )
    })(e)
    return t.useCallback(
      function() {
        return n.current && n.current.apply(n, arguments)
      },
      [n]
    )
  }
  var Rr = function(e) {
      return Wt(
        (function(e) {
          return e && 'setState' in e ? o.findDOMNode(e) : null != e ? e : null
        })(e)
      )
    },
    Cr = 27,
    Fr = function() {}
  var Lr = function(e) {
    return e && ('current' in e ? e.current : e)
  }
  var zr = function(e) {
    var t
    return 'undefined' == typeof document
      ? null
      : null == e
      ? Wt().body
      : ('function' == typeof e && (e = e()),
        e && 'current' in e && (e = e.current),
        ((null == (t = e) ? void 0 : t.nodeType) && e) || null)
  }
  function Ir(e, n) {
    var r = t.useState(function() {
        return zr(e)
      }),
      o = r[0],
      a = r[1]
    if (!o) {
      var i = zr(e)
      i && a(i)
    }
    return (
      t.useEffect(
        function() {
          n && o && n(o)
        },
        [n, o]
      ),
      t.useEffect(
        function() {
          var t = zr(e)
          t !== o && a(t)
        },
        [e, o]
      ),
      o
    )
  }
  function Wr(e) {
    var t,
      n,
      r,
      o,
      a,
      s = e.enabled,
      c = e.enableEvents,
      l = e.placement,
      u = e.flip,
      f = e.offset,
      p = e.containerPadding,
      d = e.arrowElement,
      h = e.popperConfig,
      v = void 0 === h ? {} : h,
      m = (function(e) {
        var t = {}
        return Array.isArray(e)
          ? (null == e ||
              e.forEach(function(e) {
                t[e.name] = e
              }),
            t)
          : e || t
      })(v.modifiers)
    return i({}, v, {
      placement: l,
      enabled: s,
      modifiers:
        ((a = i({}, m, {
          eventListeners: { enabled: c },
          preventOverflow: i({}, m.preventOverflow, {
            options: p
              ? i(
                  { padding: p },
                  null == (t = m.preventOverflow) ? void 0 : t.options
                )
              : null == (n = m.preventOverflow)
              ? void 0
              : n.options,
          }),
          offset: {
            options: i(
              { offset: f },
              null == (r = m.offset) ? void 0 : r.options
            ),
          },
          arrow: i({}, m.arrow, {
            enabled: !!d,
            options: i({}, null == (o = m.arrow) ? void 0 : o.options, {
              element: d,
            }),
          }),
          flip: i({ enabled: !!u }, m.flip),
        })),
        void 0 === a && (a = {}),
        Array.isArray(a)
          ? a
          : Object.keys(a).map(function(e) {
              return (a[e].name = e), a[e]
            })),
    })
  }
  var Hr = r.forwardRef(function(e, n) {
    var a = e.flip,
      c = e.offset,
      l = e.placement,
      u = e.containerPadding,
      f = void 0 === u ? 5 : u,
      p = e.popperConfig,
      d = void 0 === p ? {} : p,
      h = e.transition,
      v = un(),
      m = v[0],
      g = v[1],
      y = un(),
      b = y[0],
      w = y[1],
      E = pn(g, n),
      _ = Ir(e.container),
      D = Ir(e.target),
      O = t.useState(!e.show),
      S = O[0],
      M = O[1],
      x = (function(e, n, r) {
        var o = void 0 === r ? {} : r,
          a = o.enabled,
          c = void 0 === a || a,
          l = o.placement,
          u = void 0 === l ? 'bottom' : l,
          f = o.strategy,
          p = void 0 === f ? 'absolute' : f,
          d = o.modifiers,
          h = void 0 === d ? xr : d,
          v = s(o, ['enabled', 'placement', 'strategy', 'modifiers']),
          m = t.useRef(),
          g = t.useCallback(function() {
            var e
            null == (e = m.current) || e.update()
          }, []),
          y = t.useCallback(function() {
            var e
            null == (e = m.current) || e.forceUpdate()
          }, []),
          b = Dr(
            t.useState({
              placement: u,
              update: g,
              forceUpdate: y,
              attributes: {},
              styles: { popper: Or(p), arrow: {} },
            })
          ),
          w = b[0],
          E = b[1],
          _ = t.useMemo(
            function() {
              return {
                name: 'updateStateModifier',
                enabled: !0,
                phase: 'write',
                requires: ['computeStyles'],
                fn: function(e) {
                  var t = e.state,
                    n = {},
                    r = {}
                  Object.keys(t.elements).forEach(function(e) {
                    ;(n[e] = t.styles[e]), (r[e] = t.attributes[e])
                  }),
                    E({
                      state: t,
                      styles: n,
                      attributes: r,
                      update: g,
                      forceUpdate: y,
                      placement: t.placement,
                    })
                },
              }
            },
            [g, y, E]
          )
        return (
          t.useEffect(
            function() {
              m.current &&
                c &&
                m.current.setOptions({
                  placement: u,
                  strategy: p,
                  modifiers: [].concat(h, [_, Sr]),
                })
            },
            [p, u, _, c]
          ),
          t.useEffect(
            function() {
              if (c && null != e && null != n)
                return (
                  (m.current = _r(
                    e,
                    n,
                    i({}, v, {
                      placement: u,
                      strategy: p,
                      modifiers: [].concat(h, [Mr, _]),
                    })
                  )),
                  function() {
                    null != m.current &&
                      (m.current.destroy(),
                      (m.current = void 0),
                      E(function(e) {
                        return i({}, e, {
                          attributes: {},
                          styles: { popper: Or(p) },
                        })
                      }))
                  }
                )
            },
            [c, e, n]
          ),
          w
        )
      })(
        D,
        m,
        Wr({
          placement: l,
          enableEvents: !!e.show,
          containerPadding: f || 5,
          flip: a,
          offset: c,
          arrowElement: b,
          popperConfig: d,
        })
      ),
      j = x.styles,
      T = x.attributes,
      P = s(x, ['styles', 'attributes'])
    e.show ? S && M(!1) : e.transition || S || M(!0)
    var N,
      k,
      A,
      R,
      C,
      F,
      L,
      z,
      I,
      W,
      H,
      U,
      V = e.show || (h && !S)
    if (
      ((N = m),
      (k = e.onHide),
      (A = {
        disabled: !e.rootClose || e.rootCloseDisabled,
        clickTrigger: e.rootCloseEvent,
      }),
      (C = (R = void 0 === A ? {} : A).disabled),
      (F = R.clickTrigger),
      (L = void 0 === F ? 'click' : F),
      (z = t.useRef(!1)),
      (I = k || Fr),
      (W = t.useCallback(
        function(e) {
          var t,
            n = Lr(N)
          z.current = !(
            n &&
            ((t = e), !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)) &&
            (function(e) {
              return 0 === e.button
            })(e) &&
            !$t(n, e.target)
          )
        },
        [N]
      )),
      (H = Ar(function(e) {
        z.current || I(e)
      })),
      (U = Ar(function(e) {
        e.keyCode === Cr && I(e)
      })),
      t.useEffect(
        function() {
          if (!C && null != N) {
            var e = window.event,
              t = Rr(Lr(N)),
              n = kr(t, L, W, !0),
              r = kr(t, L, function(t) {
                t !== e ? H(t) : (e = void 0)
              }),
              o = kr(t, 'keyup', function(t) {
                t !== e ? U(t) : (e = void 0)
              }),
              a = []
            return (
              'ontouchstart' in t.documentElement &&
                (a = [].slice.call(t.body.children).map(function(e) {
                  return kr(e, 'mousemove', Fr)
                })),
              function() {
                n(),
                  r(),
                  o(),
                  a.forEach(function(e) {
                    return e()
                  })
              }
            )
          }
        },
        [N, C, L, W, H, U]
      ),
      !V)
    )
      return null
    var B = e.children(
      i({}, P, {
        show: !!e.show,
        props: i({}, T.popper, { style: j.popper, ref: E }),
        arrowProps: i({}, T.arrow, { style: j.arrow, ref: w }),
      })
    )
    if (h) {
      var Y = e.onExit,
        K = e.onExiting,
        $ = e.onEnter,
        X = e.onEntering,
        q = e.onEntered
      B = r.createElement(
        h,
        {
          in: e.show,
          appear: !0,
          onExit: Y,
          onExiting: K,
          onExited: function() {
            M(!0), e.onExited && e.onExited.apply(e, arguments)
          },
          onEnter: $,
          onEntering: X,
          onEntered: q,
        },
        B
      )
    }
    return _ ? o.createPortal(B, _) : null
  })
  function Ur(e, t) {
    var n = Xt(e)
    return n ? n.innerHeight : t ? e.clientHeight : Jt(e).height
  }
  ;(Hr.displayName = 'Overlay'),
    (Hr.propTypes = {
      show: W.bool,
      placement: W.oneOf(Mn),
      target: W.any,
      container: W.any,
      flip: W.bool,
      children: W.func.isRequired,
      containerPadding: W.number,
      popperConfig: W.object,
      rootClose: W.bool,
      rootCloseEvent: W.oneOf(['click', 'mousedown']),
      rootCloseDisabled: W.bool,
      onHide: function(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r]
        var o
        return e.rootClose
          ? (o = W.func).isRequired.apply(o, [e].concat(n))
          : W.func.apply(W, [e].concat(n))
      },
      transition: W.elementType,
      onEnter: W.func,
      onEntering: W.func,
      onEntered: W.func,
      onExit: W.func,
      onExiting: W.func,
      onExited: W.func,
    })
  var Vr,
    Br = Function.prototype.bind.call(Function.prototype.call, [].slice)
  function Yr(e, t) {
    if (!Vr) {
      var n = document.body,
        r =
          n.matches ||
          n.matchesSelector ||
          n.webkitMatchesSelector ||
          n.mozMatchesSelector ||
          n.msMatchesSelector
      Vr = function(e, t) {
        return r.call(e, t)
      }
    }
    return Vr(e, t)
  }
  function Kr(e, t, n) {
    return void 0 === n && (n = document), kr(n, e, t, { passive: !1 })
  }
  function $r(e, t) {
    var n = t.clientX,
      r = t.clientY
    return (function(e, t, n) {
      e.closest && !n && e.closest(t)
      var r = e
      do {
        if (Yr(r, t)) return r
        r = r.parentElement
      } while (r && r !== n && r.nodeType === document.ELEMENT_NODE)
      return null
    })(document.elementFromPoint(n, r), '.rbc-event', e)
  }
  function Xr(e, t) {
    return !!$r(e, t)
  }
  function qr(e) {
    var t = e
    return (
      e.touches && e.touches.length && (t = e.touches[0]),
      { clientX: t.clientX, clientY: t.clientY, pageX: t.pageX, pageY: t.pageY }
    )
  }
  var Gr = (function() {
    function e(e, t) {
      var n = void 0 === t ? {} : t,
        r = n.global,
        o = void 0 !== r && r,
        a = n.longPressThreshold,
        i = void 0 === a ? 250 : a
      ;(this.isDetached = !1),
        (this.container = e),
        (this.globalMouse = !e || o),
        (this.longPressThreshold = i),
        (this._listeners = Object.create(null)),
        (this._handleInitialEvent = this._handleInitialEvent.bind(this)),
        (this._handleMoveEvent = this._handleMoveEvent.bind(this)),
        (this._handleTerminatingEvent = this._handleTerminatingEvent.bind(
          this
        )),
        (this._keyListener = this._keyListener.bind(this)),
        (this._dropFromOutsideListener = this._dropFromOutsideListener.bind(
          this
        )),
        (this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(
          this
        )),
        (this._removeTouchMoveWindowListener = Kr(
          'touchmove',
          function() {},
          window
        )),
        (this._removeKeyDownListener = Kr('keydown', this._keyListener)),
        (this._removeKeyUpListener = Kr('keyup', this._keyListener)),
        (this._removeDropFromOutsideListener = Kr(
          'drop',
          this._dropFromOutsideListener
        )),
        (this._removeDragOverFromOutsideListener = Kr(
          'dragover',
          this._dragOverFromOutsideListener
        )),
        this._addInitialEventListener()
    }
    var t = e.prototype
    return (
      (t.on = function(e, t) {
        var n = this._listeners[e] || (this._listeners[e] = [])
        return (
          n.push(t),
          {
            remove: function() {
              var e = n.indexOf(t)
              ;-1 !== e && n.splice(e, 1)
            },
          }
        )
      }),
      (t.emit = function(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r]
        var o
        return (
          (this._listeners[e] || []).forEach(function(e) {
            void 0 === o && (o = e.apply(void 0, n))
          }),
          o
        )
      }),
      (t.teardown = function() {
        ;(this.isDetached = !0),
          (this.listeners = Object.create(null)),
          this._removeTouchMoveWindowListener &&
            this._removeTouchMoveWindowListener(),
          this._removeInitialEventListener &&
            this._removeInitialEventListener(),
          this._removeEndListener && this._removeEndListener(),
          this._onEscListener && this._onEscListener(),
          this._removeMoveListener && this._removeMoveListener(),
          this._removeKeyUpListener && this._removeKeyUpListener(),
          this._removeKeyDownListener && this._removeKeyDownListener(),
          this._removeDropFromOutsideListener &&
            this._removeDropFromOutsideListener(),
          this._removeDragOverFromOutsideListener &&
            this._removeDragOverFromOutsideListener()
      }),
      (t.isSelected = function(e) {
        var t = this._selectRect
        return !(!t || !this.selecting) && Zr(t, Jr(e))
      }),
      (t.filter = function(e) {
        return this._selectRect && this.selecting
          ? e.filter(this.isSelected, this)
          : []
      }),
      (t._addLongPressListener = function(e, t) {
        var n = this,
          r = null,
          o = null,
          a = null,
          i = function(t) {
            ;(r = setTimeout(function() {
              c(), e(t)
            }, n.longPressThreshold)),
              (o = Kr('touchmove', function() {
                return c()
              })),
              (a = Kr('touchend', function() {
                return c()
              }))
          },
          s = Kr('touchstart', i),
          c = function() {
            r && clearTimeout(r),
              o && o(),
              a && a(),
              (r = null),
              (o = null),
              (a = null)
          }
        return (
          t && i(t),
          function() {
            c(), s()
          }
        )
      }),
      (t._addInitialEventListener = function() {
        var e = this,
          t = Kr('mousedown', function(t) {
            e._removeInitialEventListener(),
              e._handleInitialEvent(t),
              (e._removeInitialEventListener = Kr(
                'mousedown',
                e._handleInitialEvent
              ))
          }),
          n = Kr('touchstart', function(t) {
            e._removeInitialEventListener(),
              (e._removeInitialEventListener = e._addLongPressListener(
                e._handleInitialEvent,
                t
              ))
          })
        this._removeInitialEventListener = function() {
          t(), n()
        }
      }),
      (t._dropFromOutsideListener = function(e) {
        var t = qr(e),
          n = t.pageX,
          r = t.pageY,
          o = t.clientX,
          a = t.clientY
        this.emit('dropFromOutside', { x: n, y: r, clientX: o, clientY: a }),
          e.preventDefault()
      }),
      (t._dragOverFromOutsideListener = function(e) {
        var t = qr(e),
          n = t.pageX,
          r = t.pageY,
          o = t.clientX,
          a = t.clientY
        this.emit('dragOverFromOutside', {
          x: n,
          y: r,
          clientX: o,
          clientY: a,
        }),
          e.preventDefault()
      }),
      (t._handleInitialEvent = function(e) {
        if (!this.isDetached) {
          var t,
            n = qr(e),
            r = n.clientX,
            o = n.clientY,
            a = n.pageX,
            i = n.pageY,
            s = this.container()
          if (
            3 !== e.which &&
            2 !== e.button &&
            ((l = r),
            (u = o),
            !(c = s) || $t(c, document.elementFromPoint(l, u)))
          ) {
            var c, l, u
            if (!this.globalMouse && s && !$t(s, e.target)) {
              var f = (function(e) {
                  void 0 === e && (e = 0)
                  'object' != typeof e &&
                    (e = { top: e, left: e, right: e, bottom: e })
                  return e
                })(0),
                p = f.top,
                d = f.left,
                h = f.bottom,
                v = f.right
              if (
                !Zr(
                  {
                    top: (t = Jr(s)).top - p,
                    left: t.left - d,
                    bottom: t.bottom + h,
                    right: t.right + v,
                  },
                  { top: i, left: a }
                )
              )
                return
            }
            if (
              !1 !==
              this.emit(
                'beforeSelect',
                (this._initialEventData = {
                  isTouch: /^touch/.test(e.type),
                  x: a,
                  y: i,
                  clientX: r,
                  clientY: o,
                })
              )
            )
              switch (e.type) {
                case 'mousedown':
                  ;(this._removeEndListener = Kr(
                    'mouseup',
                    this._handleTerminatingEvent
                  )),
                    (this._onEscListener = Kr(
                      'keydown',
                      this._handleTerminatingEvent
                    )),
                    (this._removeMoveListener = Kr(
                      'mousemove',
                      this._handleMoveEvent
                    ))
                  break
                case 'touchstart':
                  this._handleMoveEvent(e),
                    (this._removeEndListener = Kr(
                      'touchend',
                      this._handleTerminatingEvent
                    )),
                    (this._removeMoveListener = Kr(
                      'touchmove',
                      this._handleMoveEvent
                    ))
              }
          }
        }
      }),
      (t._handleTerminatingEvent = function(e) {
        var t = qr(e),
          n = t.pageX,
          r = t.pageY
        if (
          ((this.selecting = !1),
          this._removeEndListener && this._removeEndListener(),
          this._removeMoveListener && this._removeMoveListener(),
          this._initialEventData)
        ) {
          var o = !this.container || $t(this.container(), e.target),
            a = this._selectRect,
            i = this.isClick(n, r)
          return (
            (this._initialEventData = null),
            'Escape' === e.key
              ? this.emit('reset')
              : o
              ? i && o
                ? this._handleClickEvent(e)
                : i
                ? void 0
                : this.emit('select', a)
              : this.emit('reset')
          )
        }
      }),
      (t._handleClickEvent = function(e) {
        var t = qr(e),
          n = t.pageX,
          r = t.pageY,
          o = t.clientX,
          a = t.clientY,
          i = new Date().getTime()
        return this._lastClickData && i - this._lastClickData.timestamp < 250
          ? ((this._lastClickData = null),
            this.emit('doubleClick', { x: n, y: r, clientX: o, clientY: a }))
          : ((this._lastClickData = { timestamp: i }),
            this.emit('click', { x: n, y: r, clientX: o, clientY: a }))
      }),
      (t._handleMoveEvent = function(e) {
        if (null !== this._initialEventData && !this.isDetached) {
          var t = this._initialEventData,
            n = t.x,
            r = t.y,
            o = qr(e),
            a = o.pageX,
            i = o.pageY,
            s = Math.abs(n - a),
            c = Math.abs(r - i),
            l = Math.min(a, n),
            u = Math.min(i, r),
            f = this.selecting
          ;(!this.isClick(a, i) || f || s || c) &&
            ((this.selecting = !0),
            (this._selectRect = {
              top: u,
              left: l,
              x: a,
              y: i,
              right: l + s,
              bottom: u + c,
            }),
            f || this.emit('selectStart', this._initialEventData),
            this.isClick(a, i) || this.emit('selecting', this._selectRect),
            e.preventDefault())
        }
      }),
      (t._keyListener = function(e) {
        this.ctrl = e.metaKey || e.ctrlKey
      }),
      (t.isClick = function(e, t) {
        var n = this._initialEventData,
          r = n.x,
          o = n.y
        return !n.isTouch && Math.abs(e - r) <= 5 && Math.abs(t - o) <= 5
      }),
      e
    )
  })()
  function Zr(e, t, n) {
    void 0 === n && (n = 0)
    var r = Jr(e),
      o = r.top,
      a = r.left,
      i = r.right,
      s = void 0 === i ? a : i,
      c = r.bottom,
      l = void 0 === c ? o : c,
      u = Jr(t),
      f = u.top,
      p = u.left,
      d = u.right,
      h = void 0 === d ? p : d,
      v = u.bottom
    return !(
      l - n < f ||
      o + n > (void 0 === v ? f : v) ||
      s - n < p ||
      a + n > h
    )
  }
  function Jr(e) {
    if (!e.getBoundingClientRect) return e
    var t = e.getBoundingClientRect(),
      n = t.left + Qr('left'),
      r = t.top + Qr('top')
    return {
      top: r,
      left: n,
      right: (e.offsetWidth || 0) + n,
      bottom: (e.offsetHeight || 0) + r,
    }
  }
  function Qr(e) {
    return 'left' === e
      ? window.pageXOffset || document.body.scrollLeft || 0
      : 'top' === e
      ? window.pageYOffset || document.body.scrollTop || 0
      : void 0
  }
  var eo = (function(e) {
    function t(t, n) {
      var r
      return ((r = e.call(this, t, n) || this).state = { selecting: !1 }), r
    }
    l(t, e)
    var o = t.prototype
    return (
      (o.componentDidMount = function() {
        this.props.selectable && this._selectable()
      }),
      (o.componentWillUnmount = function() {
        this._teardownSelectable()
      }),
      (o.UNSAFE_componentWillReceiveProps = function(e) {
        e.selectable && !this.props.selectable && this._selectable(),
          !e.selectable && this.props.selectable && this._teardownSelectable()
      }),
      (o.render = function() {
        var e = this.props,
          t = e.range,
          n = e.getNow,
          o = e.getters,
          a = e.date,
          i = e.components.dateCellWrapper,
          s = this.state,
          c = s.selecting,
          l = s.startIdx,
          u = s.endIdx,
          f = n()
        return r.createElement(
          'div',
          { className: 'rbc-row-bg' },
          t.map(function(e, n) {
            var s = c && n >= l && n <= u,
              p = o.dayProp(e),
              d = p.className,
              h = p.style
            return r.createElement(
              i,
              { key: n, value: e, range: t },
              r.createElement('div', {
                style: h,
                className: G(
                  'rbc-day-bg',
                  d,
                  s && 'rbc-selected-cell',
                  De(e, f, 'day') && 'rbc-today',
                  a && Le(a) !== Le(e) && 'rbc-off-range-bg'
                ),
              })
            )
          })
        )
      }),
      (o._selectable = function() {
        var e = this,
          t = n.findDOMNode(this),
          r = (this._selector = new Gr(this.props.container, {
            longPressThreshold: this.props.longPressThreshold,
          })),
          o = function(r, o) {
            if (!Xr(n.findDOMNode(e), r)) {
              var a = Jr(t),
                i = e.props,
                s = i.range,
                c = i.rtl
              if (
                ((u = a),
                (p = (f = r).x),
                (d = f.y) >= u.top &&
                  d <= u.bottom &&
                  p >= u.left &&
                  p <= u.right)
              ) {
                var l = sn(a, r.x, c, s.length)
                e._selectSlot({ startIdx: l, endIdx: l, action: o, box: r })
              }
            }
            var u, f, p, d
            ;(e._initial = {}), e.setState({ selecting: !1 })
          }
        r.on('selecting', function(n) {
          var o = e.props,
            a = o.range,
            i = o.rtl,
            s = -1,
            c = -1
          if (
            (e.state.selecting ||
              (ee(e.props.onSelectStart, [n]),
              (e._initial = { x: n.x, y: n.y })),
            r.isSelected(t))
          ) {
            var l = Jr(t),
              u = (function(e, t, n, r, o) {
                var a = -1,
                  i = -1,
                  s = r - 1,
                  c = an(t, r),
                  l = sn(t, n.x, o, r),
                  u = t.top < n.y && t.bottom > n.y,
                  f = t.top < e.y && t.bottom > e.y,
                  p = e.y > t.bottom,
                  d = t.top > e.y
                return (
                  n.top < t.top && n.bottom > t.bottom && ((a = 0), (i = s)),
                  u && (d ? ((a = 0), (i = l)) : p && ((a = l), (i = s))),
                  f &&
                    ((a = i = o
                      ? s - Math.floor((e.x - t.left) / c)
                      : Math.floor((e.x - t.left) / c)),
                    u
                      ? l < a
                        ? (a = l)
                        : (i = l)
                      : e.y < n.y
                      ? (i = s)
                      : (a = 0)),
                  { startIdx: a, endIdx: i }
                )
              })(e._initial, l, n, a.length, i)
            ;(s = u.startIdx), (c = u.endIdx)
          }
          e.setState({ selecting: !0, startIdx: s, endIdx: c })
        }),
          r.on('beforeSelect', function(t) {
            if ('ignoreEvents' === e.props.selectable)
              return !Xr(n.findDOMNode(e), t)
          }),
          r.on('click', function(e) {
            return o(e, 'click')
          }),
          r.on('doubleClick', function(e) {
            return o(e, 'doubleClick')
          }),
          r.on('select', function(t) {
            e._selectSlot(i({}, e.state, { action: 'select', bounds: t })),
              (e._initial = {}),
              e.setState({ selecting: !1 }),
              ee(e.props.onSelectEnd, [e.state])
          })
      }),
      (o._teardownSelectable = function() {
        this._selector && (this._selector.teardown(), (this._selector = null))
      }),
      (o._selectSlot = function(e) {
        var t = e.endIdx,
          n = e.startIdx,
          r = e.action,
          o = e.bounds,
          a = e.box
        ;-1 !== t &&
          -1 !== n &&
          this.props.onSelectSlot &&
          this.props.onSelectSlot({
            start: n,
            end: t,
            action: r,
            bounds: o,
            box: a,
            resourceId: this.props.resourceId,
          })
      }),
      t
    )
  })(r.Component)
  eo.propTypes = {}
  W.object.isRequired,
    W.object,
    W.bool,
    W.object.isRequired,
    W.object.isRequired,
    W.object.isRequired,
    W.object.isRequired,
    W.func,
    W.func,
    W.func
  var to = { segments: [], selected: {} },
    no = function(e, t) {
      var n = e.selected,
        o = (e.isAllDay, e.accessors),
        a = e.getters,
        i = e.onSelect,
        s = e.onDoubleClick,
        c = e.onKeyPress,
        l = e.localizer,
        u = e.slotMetrics,
        f = e.components,
        p = e.resizable,
        d = u.continuesPrior(t),
        h = u.continuesAfter(t)
      return r.createElement(rn, {
        event: t,
        getters: a,
        localizer: l,
        accessors: o,
        components: f,
        onSelect: i,
        onDoubleClick: s,
        onKeyPress: c,
        continuesPrior: d,
        continuesAfter: h,
        selected: on(t, n),
        resizable: p,
      })
    },
    ro = function(e, t, n, o) {
      void 0 === o && (o = ' ')
      var a = (Math.abs(t) / e) * 100 + '%'
      return r.createElement(
        'div',
        {
          key: n,
          className: 'rbc-row-segment',
          style: { WebkitFlexBasis: a, flexBasis: a, maxWidth: a },
        },
        o
      )
    },
    oo = (function(e) {
      function t() {
        return e.apply(this, arguments) || this
      }
      return (
        l(t, e),
        (t.prototype.render = function() {
          var e = this,
            t = this.props,
            n = t.segments,
            o = t.slotMetrics.slots,
            a = t.className,
            i = 1
          return r.createElement(
            'div',
            { className: G(a, 'rbc-row') },
            n.reduce(function(t, n, r) {
              var a = n.event,
                s = n.left,
                c = n.right,
                l = n.span,
                u = '_lvl_' + r,
                f = s - i,
                p = no(e.props, a)
              return (
                f && t.push(ro(o, f, u + '_gap')),
                t.push(ro(o, l, u, p)),
                (i = c + 1),
                t
              )
            }, [])
          )
        }),
        t
      )
    })(r.Component)
  function ao(e, t) {
    for (var n = e.length; n--; ) if (Ge(e[n][0], t)) return n
    return -1
  }
  ;(oo.propTypes = {}), (oo.defaultProps = i({}, to))
  var io = Array.prototype.splice
  function so(e) {
    var t = -1,
      n = null == e ? 0 : e.length
    for (this.clear(); ++t < n; ) {
      var r = e[t]
      this.set(r[0], r[1])
    }
  }
  ;(so.prototype.clear = function() {
    ;(this.__data__ = []), (this.size = 0)
  }),
    (so.prototype.delete = function(e) {
      var t = this.__data__,
        n = ao(t, e)
      return !(
        n < 0 ||
        (n == t.length - 1 ? t.pop() : io.call(t, n, 1), --this.size, 0)
      )
    }),
    (so.prototype.get = function(e) {
      var t = this.__data__,
        n = ao(t, e)
      return n < 0 ? void 0 : t[n][1]
    }),
    (so.prototype.has = function(e) {
      return ao(this.__data__, e) > -1
    }),
    (so.prototype.set = function(e, t) {
      var n = this.__data__,
        r = ao(n, e)
      return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
    })
  var co,
    lo = Qe['__core-js_shared__'],
    uo = (co = /[^.]+$/.exec((lo && lo.keys && lo.keys.IE_PROTO) || ''))
      ? 'Symbol(src)_1.' + co
      : ''
  var fo = Function.prototype.toString
  function po(e) {
    if (null != e) {
      try {
        return fo.call(e)
      } catch (e) {}
      try {
        return e + ''
      } catch (e) {}
    }
    return ''
  }
  var ho = /^\[object .+?Constructor\]$/,
    vo = Function.prototype,
    mo = Object.prototype,
    go = vo.toString,
    yo = mo.hasOwnProperty,
    bo = RegExp(
      '^' +
        go
          .call(yo)
          .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    )
  function wo(e) {
    return (
      !(!ut(e) || ((t = e), uo && uo in t)) && (vt(e) ? bo : ho).test(po(e))
    )
    var t
  }
  function Eo(e, t) {
    var n = (function(e, t) {
      return null == e ? void 0 : e[t]
    })(e, t)
    return wo(n) ? n : void 0
  }
  var _o = Eo(Qe, 'Map'),
    Do = Eo(Object, 'create')
  var Oo = '__lodash_hash_undefined__',
    So = Object.prototype.hasOwnProperty
  var Mo = Object.prototype.hasOwnProperty
  var xo = '__lodash_hash_undefined__'
  function jo(e) {
    var t = -1,
      n = null == e ? 0 : e.length
    for (this.clear(); ++t < n; ) {
      var r = e[t]
      this.set(r[0], r[1])
    }
  }
  function To(e, t) {
    var n,
      r,
      o = e.__data__
    return ('string' == (r = typeof (n = t)) ||
    'number' == r ||
    'symbol' == r ||
    'boolean' == r
    ? '__proto__' !== n
    : null === n)
      ? o['string' == typeof t ? 'string' : 'hash']
      : o.map
  }
  function Po(e) {
    var t = -1,
      n = null == e ? 0 : e.length
    for (this.clear(); ++t < n; ) {
      var r = e[t]
      this.set(r[0], r[1])
    }
  }
  ;(jo.prototype.clear = function() {
    ;(this.__data__ = Do ? Do(null) : {}), (this.size = 0)
  }),
    (jo.prototype.delete = function(e) {
      var t = this.has(e) && delete this.__data__[e]
      return (this.size -= t ? 1 : 0), t
    }),
    (jo.prototype.get = function(e) {
      var t = this.__data__
      if (Do) {
        var n = t[e]
        return n === Oo ? void 0 : n
      }
      return So.call(t, e) ? t[e] : void 0
    }),
    (jo.prototype.has = function(e) {
      var t = this.__data__
      return Do ? void 0 !== t[e] : Mo.call(t, e)
    }),
    (jo.prototype.set = function(e, t) {
      var n = this.__data__
      return (
        (this.size += this.has(e) ? 0 : 1),
        (n[e] = Do && void 0 === t ? xo : t),
        this
      )
    }),
    (Po.prototype.clear = function() {
      ;(this.size = 0),
        (this.__data__ = {
          hash: new jo(),
          map: new (_o || so)(),
          string: new jo(),
        })
    }),
    (Po.prototype.delete = function(e) {
      var t = To(this, e).delete(e)
      return (this.size -= t ? 1 : 0), t
    }),
    (Po.prototype.get = function(e) {
      return To(this, e).get(e)
    }),
    (Po.prototype.has = function(e) {
      return To(this, e).has(e)
    }),
    (Po.prototype.set = function(e, t) {
      var n = To(this, e),
        r = n.size
      return n.set(e, t), (this.size += n.size == r ? 0 : 1), this
    })
  var No = 200
  function ko(e) {
    var t = (this.__data__ = new so(e))
    this.size = t.size
  }
  ;(ko.prototype.clear = function() {
    ;(this.__data__ = new so()), (this.size = 0)
  }),
    (ko.prototype.delete = function(e) {
      var t = this.__data__,
        n = t.delete(e)
      return (this.size = t.size), n
    }),
    (ko.prototype.get = function(e) {
      return this.__data__.get(e)
    }),
    (ko.prototype.has = function(e) {
      return this.__data__.has(e)
    }),
    (ko.prototype.set = function(e, t) {
      var n = this.__data__
      if (n instanceof so) {
        var r = n.__data__
        if (!_o || r.length < No - 1)
          return r.push([e, t]), (this.size = ++n.size), this
        n = this.__data__ = new Po(r)
      }
      return n.set(e, t), (this.size = n.size), this
    })
  var Ao = '__lodash_hash_undefined__'
  function Ro(e) {
    var t = -1,
      n = null == e ? 0 : e.length
    for (this.__data__ = new Po(); ++t < n; ) this.add(e[t])
  }
  function Co(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
      if (t(e[n], n, e)) return !0
    return !1
  }
  ;(Ro.prototype.add = Ro.prototype.push = function(e) {
    return this.__data__.set(e, Ao), this
  }),
    (Ro.prototype.has = function(e) {
      return this.__data__.has(e)
    })
  var Fo = 1,
    Lo = 2
  function zo(e, t, n, r, o, a) {
    var i = n & Fo,
      s = e.length,
      c = t.length
    if (s != c && !(i && c > s)) return !1
    var l = a.get(e),
      u = a.get(t)
    if (l && u) return l == t && u == e
    var f = -1,
      p = !0,
      d = n & Lo ? new Ro() : void 0
    for (a.set(e, t), a.set(t, e); ++f < s; ) {
      var h = e[f],
        v = t[f]
      if (r) var m = i ? r(v, h, f, t, e, a) : r(h, v, f, e, t, a)
      if (void 0 !== m) {
        if (m) continue
        p = !1
        break
      }
      if (d) {
        if (
          !Co(t, function(e, t) {
            if (((i = t), !d.has(i) && (h === e || o(h, e, n, r, a))))
              return d.push(t)
            var i
          })
        ) {
          p = !1
          break
        }
      } else if (h !== v && !o(h, v, n, r, a)) {
        p = !1
        break
      }
    }
    return a.delete(e), a.delete(t), p
  }
  var Io = Qe.Uint8Array
  function Wo(e) {
    var t = -1,
      n = Array(e.size)
    return (
      e.forEach(function(e, r) {
        n[++t] = [r, e]
      }),
      n
    )
  }
  function Ho(e) {
    var t = -1,
      n = Array(e.size)
    return (
      e.forEach(function(e) {
        n[++t] = e
      }),
      n
    )
  }
  var Uo = 1,
    Vo = 2,
    Bo = '[object Boolean]',
    Yo = '[object Date]',
    Ko = '[object Error]',
    $o = '[object Map]',
    Xo = '[object Number]',
    qo = '[object RegExp]',
    Go = '[object Set]',
    Zo = '[object String]',
    Jo = '[object Symbol]',
    Qo = '[object ArrayBuffer]',
    ea = '[object DataView]',
    ta = et ? et.prototype : void 0,
    na = ta ? ta.valueOf : void 0
  function ra(e, t) {
    for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n]
    return e
  }
  var oa = Array.isArray
  function aa(e, t, n) {
    var r = t(e)
    return oa(e) ? r : ra(r, n(e))
  }
  function ia() {
    return []
  }
  var sa = Object.prototype.propertyIsEnumerable,
    ca = Object.getOwnPropertySymbols,
    la = ca
      ? function(e) {
          return null == e
            ? []
            : ((e = Object(e)),
              (function(e, t) {
                for (
                  var n = -1, r = null == e ? 0 : e.length, o = 0, a = [];
                  ++n < r;

                ) {
                  var i = e[n]
                  t(i, n, e) && (a[o++] = i)
                }
                return a
              })(ca(e), function(t) {
                return sa.call(e, t)
              }))
        }
      : ia
  var ua = '[object Arguments]'
  function fa(e) {
    return Mt(e) && lt(e) == ua
  }
  var pa = Object.prototype,
    da = pa.hasOwnProperty,
    ha = pa.propertyIsEnumerable,
    va = fa(
      (function() {
        return arguments
      })()
    )
      ? fa
      : function(e) {
          return Mt(e) && da.call(e, 'callee') && !ha.call(e, 'callee')
        }
  var ma = 'object' == typeof e && e && !e.nodeType && e,
    ga =
      ma && 'object' == typeof module && module && !module.nodeType && module,
    ya = ga && ga.exports === ma ? Qe.Buffer : void 0,
    ba =
      (ya ? ya.isBuffer : void 0) ||
      function() {
        return !1
      },
    wa = {}
  function Ea(e) {
    return function(t) {
      return e(t)
    }
  }
  ;(wa['[object Float32Array]'] = wa['[object Float64Array]'] = wa[
    '[object Int8Array]'
  ] = wa['[object Int16Array]'] = wa['[object Int32Array]'] = wa[
    '[object Uint8Array]'
  ] = wa['[object Uint8ClampedArray]'] = wa['[object Uint16Array]'] = wa[
    '[object Uint32Array]'
  ] = !0),
    (wa['[object Arguments]'] = wa['[object Array]'] = wa[
      '[object ArrayBuffer]'
    ] = wa['[object Boolean]'] = wa['[object DataView]'] = wa[
      '[object Date]'
    ] = wa['[object Error]'] = wa['[object Function]'] = wa[
      '[object Map]'
    ] = wa['[object Number]'] = wa['[object Object]'] = wa[
      '[object RegExp]'
    ] = wa['[object Set]'] = wa['[object String]'] = wa[
      '[object WeakMap]'
    ] = !1)
  var _a = 'object' == typeof e && e && !e.nodeType && e,
    Da =
      _a && 'object' == typeof module && module && !module.nodeType && module,
    Oa = Da && Da.exports === _a && Ze.process,
    Sa = (function() {
      try {
        var e = Da && Da.require && Da.require('util').types
        return e || (Oa && Oa.binding && Oa.binding('util'))
      } catch (e) {}
    })(),
    Ma = Sa && Sa.isTypedArray,
    xa = Ma
      ? Ea(Ma)
      : function(e) {
          return Mt(e) && gt(e.length) && !!wa[lt(e)]
        },
    ja = Object.prototype.hasOwnProperty
  function Ta(e, t) {
    var n = oa(e),
      r = !n && va(e),
      o = !n && !r && ba(e),
      a = !n && !r && !o && xa(e),
      i = n || r || o || a,
      s = i
        ? (function(e, t) {
            for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n)
            return r
          })(e.length, String)
        : [],
      c = s.length
    for (var l in e)
      (!t && !ja.call(e, l)) ||
        (i &&
          ('length' == l ||
            (o && ('offset' == l || 'parent' == l)) ||
            (a && ('buffer' == l || 'byteLength' == l || 'byteOffset' == l)) ||
            Et(l, c))) ||
        s.push(l)
    return s
  }
  var Pa = Object.prototype
  function Na(e) {
    var t = e && e.constructor
    return e === (('function' == typeof t && t.prototype) || Pa)
  }
  function ka(e, t) {
    return function(n) {
      return e(t(n))
    }
  }
  var Aa = ka(Object.keys, Object),
    Ra = Object.prototype.hasOwnProperty
  function Ca(e) {
    return yt(e)
      ? Ta(e)
      : (function(e) {
          if (!Na(e)) return Aa(e)
          var t = []
          for (var n in Object(e))
            Ra.call(e, n) && 'constructor' != n && t.push(n)
          return t
        })(e)
  }
  function Fa(e) {
    return aa(e, Ca, la)
  }
  var La = 1,
    za = Object.prototype.hasOwnProperty
  var Ia = Eo(Qe, 'DataView'),
    Wa = Eo(Qe, 'Promise'),
    Ha = Eo(Qe, 'Set'),
    Ua = Eo(Qe, 'WeakMap'),
    Va = po(Ia),
    Ba = po(_o),
    Ya = po(Wa),
    Ka = po(Ha),
    $a = po(Ua),
    Xa = lt
  ;((Ia && '[object DataView]' != Xa(new Ia(new ArrayBuffer(1)))) ||
    (_o && '[object Map]' != Xa(new _o())) ||
    (Wa && '[object Promise]' != Xa(Wa.resolve())) ||
    (Ha && '[object Set]' != Xa(new Ha())) ||
    (Ua && '[object WeakMap]' != Xa(new Ua()))) &&
    (Xa = function(e) {
      var t = lt(e),
        n = '[object Object]' == t ? e.constructor : void 0,
        r = n ? po(n) : ''
      if (r)
        switch (r) {
          case Va:
            return '[object DataView]'
          case Ba:
            return '[object Map]'
          case Ya:
            return '[object Promise]'
          case Ka:
            return '[object Set]'
          case $a:
            return '[object WeakMap]'
        }
      return t
    })
  var qa = Xa,
    Ga = 1,
    Za = '[object Arguments]',
    Ja = '[object Array]',
    Qa = '[object Object]',
    ei = Object.prototype.hasOwnProperty
  function ti(e, t, n, r, o, a) {
    var i = oa(e),
      s = oa(t),
      c = i ? Ja : qa(e),
      l = s ? Ja : qa(t),
      u = (c = c == Za ? Qa : c) == Qa,
      f = (l = l == Za ? Qa : l) == Qa,
      p = c == l
    if (p && ba(e)) {
      if (!ba(t)) return !1
      ;(i = !0), (u = !1)
    }
    if (p && !u)
      return (
        a || (a = new ko()),
        i || xa(e)
          ? zo(e, t, n, r, o, a)
          : (function(e, t, n, r, o, a, i) {
              switch (n) {
                case ea:
                  if (
                    e.byteLength != t.byteLength ||
                    e.byteOffset != t.byteOffset
                  )
                    return !1
                  ;(e = e.buffer), (t = t.buffer)
                case Qo:
                  return !(
                    e.byteLength != t.byteLength || !a(new Io(e), new Io(t))
                  )
                case Bo:
                case Yo:
                case Xo:
                  return Ge(+e, +t)
                case Ko:
                  return e.name == t.name && e.message == t.message
                case qo:
                case Zo:
                  return e == t + ''
                case $o:
                  var s = Wo
                case Go:
                  var c = r & Uo
                  if ((s || (s = Ho), e.size != t.size && !c)) return !1
                  var l = i.get(e)
                  if (l) return l == t
                  ;(r |= Vo), i.set(e, t)
                  var u = zo(s(e), s(t), r, o, a, i)
                  return i.delete(e), u
                case Jo:
                  if (na) return na.call(e) == na.call(t)
              }
              return !1
            })(e, t, c, n, r, o, a)
      )
    if (!(n & Ga)) {
      var d = u && ei.call(e, '__wrapped__'),
        h = f && ei.call(t, '__wrapped__')
      if (d || h) {
        var v = d ? e.value() : e,
          m = h ? t.value() : t
        return a || (a = new ko()), o(v, m, n, r, a)
      }
    }
    return (
      !!p &&
      (a || (a = new ko()),
      (function(e, t, n, r, o, a) {
        var i = n & La,
          s = Fa(e),
          c = s.length
        if (c != Fa(t).length && !i) return !1
        for (var l = c; l--; ) {
          var u = s[l]
          if (!(i ? u in t : za.call(t, u))) return !1
        }
        var f = a.get(e),
          p = a.get(t)
        if (f && p) return f == t && p == e
        var d = !0
        a.set(e, t), a.set(t, e)
        for (var h = i; ++l < c; ) {
          var v = e[(u = s[l])],
            m = t[u]
          if (r) var g = i ? r(m, v, u, t, e, a) : r(v, m, u, e, t, a)
          if (!(void 0 === g ? v === m || o(v, m, n, r, a) : g)) {
            d = !1
            break
          }
          h || (h = 'constructor' == u)
        }
        if (d && !h) {
          var y = e.constructor,
            b = t.constructor
          y != b &&
            'constructor' in e &&
            'constructor' in t &&
            !(
              'function' == typeof y &&
              y instanceof y &&
              'function' == typeof b &&
              b instanceof b
            ) &&
            (d = !1)
        }
        return a.delete(e), a.delete(t), d
      })(e, t, n, r, o, a))
    )
  }
  function ni(e, t, n, r, o) {
    return (
      e === t ||
      (null == e || null == t || (!Mt(e) && !Mt(t))
        ? e != e && t != t
        : ti(e, t, n, r, ni, o))
    )
  }
  var ri = 1,
    oi = 2
  function ai(e) {
    return e == e && !ut(e)
  }
  function ii(e, t) {
    return function(n) {
      return null != n && n[e] === t && (void 0 !== t || e in Object(n))
    }
  }
  function si(e) {
    var t = (function(e) {
      for (var t = Ca(e), n = t.length; n--; ) {
        var r = t[n],
          o = e[r]
        t[n] = [r, o, ai(o)]
      }
      return t
    })(e)
    return 1 == t.length && t[0][2]
      ? ii(t[0][0], t[0][1])
      : function(n) {
          return (
            n === e ||
            (function(e, t, n, r) {
              var o = n.length,
                a = o,
                i = !r
              if (null == e) return !a
              for (e = Object(e); o--; ) {
                var s = n[o]
                if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
              }
              for (; ++o < a; ) {
                var c = (s = n[o])[0],
                  l = e[c],
                  u = s[1]
                if (i && s[2]) {
                  if (void 0 === l && !(c in e)) return !1
                } else {
                  var f = new ko()
                  if (r) var p = r(l, u, c, e, t, f)
                  if (!(void 0 === p ? ni(u, l, ri | oi, r, f) : p)) return !1
                }
              }
              return !0
            })(n, e, t)
          )
        }
  }
  var ci = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    li = /^\w*$/
  function ui(e, t) {
    if (oa(e)) return !1
    var n = typeof e
    return (
      !(
        'number' != n &&
        'symbol' != n &&
        'boolean' != n &&
        null != e &&
        !jt(e)
      ) ||
      li.test(e) ||
      !ci.test(e) ||
      (null != t && e in Object(t))
    )
  }
  var fi = 'Expected a function'
  function pi(e, t) {
    if ('function' != typeof e || (null != t && 'function' != typeof t))
      throw new TypeError(fi)
    var n = function() {
      var r = arguments,
        o = t ? t.apply(this, r) : r[0],
        a = n.cache
      if (a.has(o)) return a.get(o)
      var i = e.apply(this, r)
      return (n.cache = a.set(o, i) || a), i
    }
    return (n.cache = new (pi.Cache || Po)()), n
  }
  pi.Cache = Po
  var di = 500
  var hi,
    vi,
    mi,
    gi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    yi = /\\(\\)?/g,
    bi =
      ((hi = function(e) {
        var t = []
        return (
          46 === e.charCodeAt(0) && t.push(''),
          e.replace(gi, function(e, n, r, o) {
            t.push(r ? o.replace(yi, '$1') : n || e)
          }),
          t
        )
      }),
      (vi = pi(hi, function(e) {
        return mi.size === di && mi.clear(), e
      })),
      (mi = vi.cache),
      vi)
  function wi(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r; )
      o[n] = t(e[n], n, e)
    return o
  }
  var Ei = 1 / 0,
    _i = et ? et.prototype : void 0,
    Di = _i ? _i.toString : void 0
  function Oi(e) {
    if ('string' == typeof e) return e
    if (oa(e)) return wi(e, Oi) + ''
    if (jt(e)) return Di ? Di.call(e) : ''
    var t = e + ''
    return '0' == t && 1 / e == -Ei ? '-0' : t
  }
  function Si(e, t) {
    return oa(e)
      ? e
      : ui(e, t)
      ? [e]
      : bi(
          (function(e) {
            return null == e ? '' : Oi(e)
          })(e)
        )
  }
  var Mi = 1 / 0
  function xi(e) {
    if ('string' == typeof e || jt(e)) return e
    var t = e + ''
    return '0' == t && 1 / e == -Mi ? '-0' : t
  }
  function ji(e, t) {
    for (var n = 0, r = (t = Si(t, e)).length; null != e && n < r; )
      e = e[xi(t[n++])]
    return n && n == r ? e : void 0
  }
  function Ti(e, t) {
    return null != e && t in Object(e)
  }
  function Pi(e, t) {
    return (
      null != e &&
      (function(e, t, n) {
        for (var r = -1, o = (t = Si(t, e)).length, a = !1; ++r < o; ) {
          var i = xi(t[r])
          if (!(a = null != e && n(e, i))) break
          e = e[i]
        }
        return a || ++r != o
          ? a
          : !!(o = null == e ? 0 : e.length) &&
              gt(o) &&
              Et(i, o) &&
              (oa(e) || va(e))
      })(e, t, Ti)
    )
  }
  var Ni = 1,
    ki = 2
  function Ai(e, t) {
    return ui(e) && ai(t)
      ? ii(xi(e), t)
      : function(n) {
          var r = (function(e, t, n) {
            var r = null == e ? void 0 : ji(e, t)
            return void 0 === r ? n : r
          })(n, e)
          return void 0 === r && r === t ? Pi(n, e) : ni(t, r, Ni | ki)
        }
  }
  function Ri(e) {
    return e
  }
  function Ci(e) {
    return ui(e)
      ? ((t = xi(e)),
        function(e) {
          return null == e ? void 0 : e[t]
        })
      : (function(e) {
          return function(t) {
            return ji(t, e)
          }
        })(e)
    var t
  }
  function Fi(e) {
    return 'function' == typeof e
      ? e
      : null == e
      ? Ri
      : 'object' == typeof e
      ? oa(e)
        ? Ai(e[0], e[1])
        : si(e)
      : Ci(e)
  }
  var Li = Math.max
  function zi(e, t) {
    return (
      void 0 === t && (t = 'day'),
      { first: e[0], last: be(e[e.length - 1], 1, t) }
    )
  }
  function Ii(e, t, n) {
    var r = zi(t),
      o = r.first,
      a = r.last,
      i = Xe(o, a, 'day'),
      s = Te(Ee(n.start(e), 'day'), o),
      c = je(Be(n.end(e), 'day'), a),
      l = (function(e, t, n) {
        var r = null == e ? 0 : e.length
        if (!r) return -1
        var o = null == n ? 0 : Lt(n)
        return (
          o < 0 && (o = Li(r + o, 0)),
          (function(e, t, n, r) {
            for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o; )
              if (t(e[a], a, e)) return a
            return -1
          })(e, Fi(t), o)
        )
      })(t, function(e) {
        return De(e, s, 'day')
      }),
      u = Xe(s, c, 'day')
    return (
      (u = Math.min(u, i)),
      {
        event: e,
        span: (u = Math.max(u, 1)),
        left: l + 1,
        right: Math.max(l + u, 1),
      }
    )
  }
  function Wi(e, t) {
    void 0 === t && (t = 1 / 0)
    var n,
      r,
      o,
      a = [],
      i = []
    for (n = 0; n < e.length; n++) {
      for (o = e[n], r = 0; r < a.length && Ui(o, a[r]); r++);
      r >= t ? i.push(o) : (a[r] || (a[r] = [])).push(o)
    }
    for (n = 0; n < a.length; n++)
      a[n].sort(function(e, t) {
        return e.left - t.left
      })
    return { levels: a, extra: i }
  }
  function Hi(e, t, n, r) {
    var o = Ee(r.start(e), 'day'),
      a = r.end(e),
      i = xe(o, n, 'day'),
      s = De(o, a, 'minutes') ? Se(a, t, 'minutes') : Oe(a, t, 'minutes')
    return i && s
  }
  function Ui(e, t) {
    return t.some(function(t) {
      return t.left <= e.right && t.right >= e.left
    })
  }
  function Vi(e, t, n) {
    var r = +Ee(n.start(e), 'day') - +Ee(n.start(t), 'day'),
      o = Xe(n.start(e), Be(n.end(e), 'day'), 'day'),
      a = Xe(n.start(t), Be(n.end(t), 'day'), 'day')
    return (
      r ||
      Math.max(a, 1) - Math.max(o, 1) ||
      !!n.allDay(t) - !!n.allDay(e) ||
      +n.start(e) - +n.start(t) ||
      +n.end(e) - +n.end(t)
    )
  }
  var Bi = Math.ceil,
    Yi = Math.max
  var Ki,
    $i = function(e, t, n) {
      return (
        n && 'number' != typeof n && _t(e, t, n) && (t = n = void 0),
        (e = Ft(e)),
        void 0 === t ? ((t = e), (e = 0)) : (t = Ft(t)),
        (function(e, t, n, r) {
          for (
            var o = -1, a = Yi(Bi((t - e) / (n || 1)), 0), i = Array(a);
            a--;

          )
            (i[r ? a : ++o] = e), (e += n)
          return i
        })(e, t, (n = void 0 === n ? (e < t ? 1 : -1) : Ft(n)), Ki)
      )
    },
    Xi = function(e, t) {
      return e.left <= t && e.right >= t
    },
    qi = function(e, t) {
      return e.filter(function(e) {
        return Xi(e, t)
      }).length
    },
    Gi = (function(e) {
      function t() {
        return e.apply(this, arguments) || this
      }
      l(t, e)
      var n = t.prototype
      return (
        (n.render = function() {
          for (
            var e = this.props,
              t = e.segments,
              n = e.slotMetrics.slots,
              o = Wi(t).levels[0],
              a = 1,
              i = 1,
              s = [];
            a <= n;

          ) {
            var c = '_lvl_' + a,
              l =
                o.filter(function(e) {
                  return Xi(e, a)
                })[0] || {},
              u = l.event,
              f = l.left,
              p = l.right,
              d = l.span
            if (u) {
              var h = Math.max(0, f - i)
              if (this.canRenderSlotEvent(f, d)) {
                var v = no(this.props, u)
                h && s.push(ro(n, h, c + '_gap')),
                  s.push(ro(n, d, c, v)),
                  (i = a = p + 1)
              } else
                h && s.push(ro(n, h, c + '_gap')),
                  s.push(ro(n, 1, c, this.renderShowMore(t, a))),
                  (i = a += 1)
            } else a++
          }
          return r.createElement('div', { className: 'rbc-row' }, s)
        }),
        (n.canRenderSlotEvent = function(e, t) {
          var n = this.props.segments
          return $i(e, e + t).every(function(e) {
            return 1 === qi(n, e)
          })
        }),
        (n.renderShowMore = function(e, t) {
          var n = this,
            o = this.props.localizer,
            a = qi(e, t)
          return (
            !!a &&
            r.createElement(
              'a',
              {
                key: 'sm_' + t,
                href: '#',
                className: 'rbc-show-more',
                onClick: function(r) {
                  return n.showMore(t, r, e)
                },
              },
              o.messages.showMore(a)
            )
          )
        }),
        (n.showMore = function(e, t) {
          t.preventDefault(), t.stopPropagation()
        }),
        t
      )
    })(r.Component)
  ;(Gi.propTypes = {}), (Gi.defaultProps = i({}, to))
  var Zi = function(e) {
      var t = e.children
      return r.createElement(
        'div',
        { className: 'rbc-row-content-scroll-container' },
        t
      )
    },
    Ji =
      Number.isNaN ||
      function(e) {
        return 'number' == typeof e && e != e
      }
  function Qi(e, t) {
    if (e.length !== t.length) return !1
    for (var n = 0; n < e.length; n++)
      if (((r = e[n]), (o = t[n]), !(r === o || (Ji(r) && Ji(o))))) return !1
    var r, o
    return !0
  }
  function es(e, t) {
    var n
    void 0 === t && (t = Qi)
    var r,
      o = [],
      a = !1
    return function() {
      for (var i = [], s = 0; s < arguments.length; s++) i[s] = arguments[s]
      return a && n === this && t(i, o)
        ? r
        : ((r = e.apply(this, i)), (a = !0), (n = this), (o = i), r)
    }
  }
  var ts = function(e, t) {
      return e.left <= t && e.right >= t
    },
    ns = function(e, t) {
      return e[0].range === t[0].range && e[0].events === t[0].events
    }
  var rs = (function(e) {
    function t() {
      for (var t, o = arguments.length, a = new Array(o), s = 0; s < o; s++)
        a[s] = arguments[s]
      return (
        ((t =
          e.call.apply(e, [this].concat(a)) ||
          this).handleSelectSlot = function(e) {
          var n = t.props,
            r = n.range
          ;(0, n.onSelectSlot)(r.slice(e.start, e.end + 1), e)
        }),
        (t.handleShowMore = function(e, r) {
          var o,
            a,
            i,
            s = t.props,
            c = s.range,
            l = s.onShowMore,
            u = t.slotMetrics(t.props),
            f = ((o = n.findDOMNode(ae(t))),
            (a = '.rbc-row-bg'),
            Br(o.querySelectorAll(a)))[0]
          f && (i = f.children[e - 1]),
            l(u.getEventsForSlot(e), c[e - 1], i, e, r)
        }),
        (t.createHeadingRef = function(e) {
          t.headingRow = e
        }),
        (t.createEventRef = function(e) {
          t.eventRow = e
        }),
        (t.getContainer = function() {
          var e = t.props.container
          return e ? e() : n.findDOMNode(ae(t))
        }),
        (t.renderHeadingCell = function(e, n) {
          var r = t.props,
            o = r.renderHeader,
            a = r.getNow
          return o({
            date: e,
            key: 'header_' + n,
            className: G('rbc-date-cell', De(e, a(), 'day') && 'rbc-now'),
          })
        }),
        (t.renderDummy = function() {
          var e = t.props,
            n = e.className,
            o = e.range,
            a = e.renderHeader,
            i = e.showAllEvents
          return r.createElement(
            'div',
            { className: n },
            r.createElement(
              'div',
              {
                className: G(
                  'rbc-row-content',
                  i && 'rbc-row-content-scrollable'
                ),
              },
              a &&
                r.createElement(
                  'div',
                  { className: 'rbc-row', ref: t.createHeadingRef },
                  o.map(t.renderHeadingCell)
                ),
              r.createElement(
                'div',
                { className: 'rbc-row', ref: t.createEventRef },
                r.createElement(
                  'div',
                  { className: 'rbc-row-segment' },
                  r.createElement(
                    'div',
                    { className: 'rbc-event' },
                    r.createElement(
                      'div',
                      { className: 'rbc-event-content' },
                      ' '
                    )
                  )
                )
              )
            )
          )
        }),
        (t.slotMetrics = (function e() {
          return es(function(t) {
            for (
              var n = t.range,
                r = t.events,
                o = t.maxRows,
                a = t.minRows,
                s = t.accessors,
                c = zi(n),
                l = c.first,
                u = c.last,
                f = r.map(function(e) {
                  return Ii(e, n, s)
                }),
                p = Wi(f, Math.max(o - 1, 1)),
                d = p.levels,
                h = p.extra;
              d.length < a;

            )
              d.push([])
            return {
              first: l,
              last: u,
              levels: d,
              extra: h,
              range: n,
              slots: n.length,
              clone: function(n) {
                return e()(i({}, t, n))
              },
              getDateForSlot: function(e) {
                return n[e]
              },
              getSlotForDate: function(e) {
                return n.find(function(t) {
                  return De(t, e, 'day')
                })
              },
              getEventsForSlot: function(e) {
                return f
                  .filter(function(t) {
                    return ts(t, e)
                  })
                  .map(function(e) {
                    return e.event
                  })
              },
              continuesPrior: function(e) {
                return Me(s.start(e), l, 'day')
              },
              continuesAfter: function(e) {
                var t = s.end(e)
                return De(s.start(e), t, 'minutes')
                  ? Se(t, u, 'minutes')
                  : Oe(t, u, 'minutes')
              },
            }
          }, ns)
        })()),
        t
      )
    }
    l(t, e)
    var o = t.prototype
    return (
      (o.getRowLimit = function() {
        var e = Ur(this.eventRow),
          t = this.headingRow ? Ur(this.headingRow) : 0,
          r = Ur(n.findDOMNode(this)) - t
        return Math.max(Math.floor(r / e), 5)
      }),
      (o.render = function() {
        var e = this.props,
          t = e.date,
          n = e.rtl,
          o = e.range,
          s = e.className,
          c = e.selected,
          l = e.selectable,
          u = e.renderForMeasure,
          f = e.accessors,
          p = e.getters,
          d = e.components,
          h = e.getNow,
          v = e.renderHeader,
          m = e.onSelect,
          g = e.localizer,
          y = e.onSelectStart,
          b = e.onSelectEnd,
          w = e.onDoubleClick,
          E = e.onKeyPress,
          _ = e.resourceId,
          D = e.longPressThreshold,
          O = e.isAllDay,
          S = e.resizable,
          M = e.showAllEvents
        if (u) return this.renderDummy()
        var x = this.slotMetrics(this.props),
          j = x.levels,
          T = x.extra,
          P = M ? Zi : a,
          N = d.weekWrapper,
          k = {
            selected: c,
            accessors: f,
            getters: p,
            localizer: g,
            components: d,
            onSelect: m,
            onDoubleClick: w,
            onKeyPress: E,
            resourceId: _,
            slotMetrics: x,
            resizable: S,
          }
        return r.createElement(
          'div',
          { className: s, role: 'rowgroup' },
          r.createElement(eo, {
            date: t,
            getNow: h,
            rtl: n,
            range: o,
            selectable: l,
            container: this.getContainer,
            getters: p,
            onSelectStart: y,
            onSelectEnd: b,
            onSelectSlot: this.handleSelectSlot,
            components: d,
            longPressThreshold: D,
            resourceId: _,
          }),
          r.createElement(
            'div',
            {
              className: G(
                'rbc-row-content',
                M && 'rbc-row-content-scrollable'
              ),
              role: 'row',
            },
            v &&
              r.createElement(
                'div',
                { className: 'rbc-row ', ref: this.createHeadingRef },
                o.map(this.renderHeadingCell)
              ),
            r.createElement(
              P,
              null,
              r.createElement(
                N,
                i({ isAllDay: O }, k),
                j.map(function(e, t) {
                  return r.createElement(oo, i({ key: t, segments: e }, k))
                }),
                !!T.length &&
                  r.createElement(
                    Gi,
                    i({ segments: T, onShowMore: this.handleShowMore }, k)
                  )
              )
            )
          )
        )
      }),
      t
    )
  })(r.Component)
  ;(rs.propTypes = {}), (rs.defaultProps = { minRows: 0, maxRows: 1 / 0 })
  var os = function(e) {
    var t = e.label
    return r.createElement(
      'span',
      { role: 'columnheader', 'aria-sort': 'none' },
      t
    )
  }
  os.propTypes = {}
  var as = function(e) {
    var t = e.label
    return e.drilldownView
      ? r.createElement('div', { className: 'current-text', role: 'cell' }, t)
      : r.createElement('span', null, t)
  }
  as.propTypes = {}
  var is = ['date', 'className'],
    ss = function(e, t, n, r) {
      return e.filter(function(e) {
        return Hi(e, t, n, r)
      })
    },
    cs = (function(e) {
      function t() {
        for (var t, o = arguments.length, a = new Array(o), c = 0; c < o; c++)
          a[c] = arguments[c]
        return (
          ((t =
            e.call.apply(e, [this].concat(a)) ||
            this).getContainer = function() {
            return n.findDOMNode(ae(t))
          }),
          (t.renderWeek = function(e, n) {
            var o = t.props,
              a = o.events,
              i = o.components,
              s = o.selectable,
              c = o.getNow,
              l = o.selected,
              u = o.date,
              f = o.localizer,
              p = o.longPressThreshold,
              d = o.accessors,
              h = o.getters,
              v = o.showAllEvents,
              m = t.state,
              g = m.needLimitMeasure,
              y = m.rowLimit
            return (
              (a = ss(a, e[0], e[e.length - 1], d)).sort(function(e, t) {
                return Vi(e, t, d)
              }),
              r.createElement(rs, {
                key: n,
                ref: 0 === n ? t.slotRowRef : void 0,
                container: t.getContainer,
                className: 'rbc-month-row',
                getNow: c,
                date: u,
                range: e,
                events: a,
                maxRows: v ? 1 / 0 : y,
                selected: l,
                selectable: s,
                components: i,
                accessors: d,
                getters: h,
                localizer: f,
                renderHeader: t.readerDateHeading,
                renderForMeasure: g,
                onShowMore: t.handleShowMore,
                onSelect: t.handleSelectEvent,
                onDoubleClick: t.handleDoubleClickEvent,
                onKeyPress: t.handleKeyPressEvent,
                onSelectSlot: t.handleSelectSlot,
                longPressThreshold: p,
                rtl: t.props.rtl,
                resizable: t.props.resizable,
                showAllEvents: v,
              })
            )
          }),
          (t.readerDateHeading = function(e) {
            var n = e.date,
              o = e.className,
              a = s(e, is),
              c = t.props,
              l = c.date,
              u = c.getDrilldownView,
              f = c.localizer,
              p = Le(n) !== Le(l),
              d = De(n, l, 'day'),
              h = u(n),
              v = f.format(n, 'dateFormat'),
              m = t.props.components.dateHeader || as
            return r.createElement(
              'div',
              i({}, a, {
                className: G(o, p && 'rbc-off-range', d && 'rbc-current'),
                role: 'cell',
              }),
              r.createElement(m, {
                label: v,
                date: n,
                drilldownView: h,
                isOffRange: p,
                onDrillDown: function(e) {
                  return t.handleHeadingClick(n, h, e)
                },
              })
            )
          }),
          (t.handleSelectSlot = function(e, n) {
            ;(t._pendingSelection = t._pendingSelection.concat(e)),
              clearTimeout(t._selectTimer),
              (t._selectTimer = setTimeout(function() {
                return t.selectDates(n)
              }))
          }),
          (t.handleHeadingClick = function(e, n, r) {
            r.preventDefault(),
              t.clearSelection(),
              ee(t.props.onDrillDown, [e, n])
          }),
          (t.handleSelectEvent = function() {
            t.clearSelection()
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r]
            ee(t.props.onSelectEvent, n)
          }),
          (t.handleDoubleClickEvent = function() {
            t.clearSelection()
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r]
            ee(t.props.onDoubleClickEvent, n)
          }),
          (t.handleKeyPressEvent = function() {
            t.clearSelection()
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r]
            ee(t.props.onKeyPressEvent, n)
          }),
          (t.handleShowMore = function(e, r, o, a, i) {
            var s = t.props,
              c = s.popup,
              l = s.onDrillDown,
              u = s.onShowMore,
              f = s.getDrilldownView,
              p = s.doShowMoreDrillDown
            if ((t.clearSelection(), c)) {
              var d = tn(o, n.findDOMNode(ae(t)))
              t.setState({
                overlay: { date: r, events: e, position: d, target: i },
              })
            } else p && ee(l, [r, f(r) || J.DAY])
            ee(u, [e, r, a])
          }),
          (t.overlayDisplay = function() {
            t.setState({ overlay: null })
          }),
          (t._bgRows = []),
          (t._pendingSelection = []),
          (t.slotRowRef = r.createRef()),
          (t.state = { rowLimit: 5, needLimitMeasure: !0 }),
          t
        )
      }
      l(t, e)
      var o = t.prototype
      return (
        (o.UNSAFE_componentWillReceiveProps = function(e) {
          var t = e.date
          this.setState({ needLimitMeasure: !De(t, this.props.date, 'month') })
        }),
        (o.componentDidMount = function() {
          this.state.needLimitMeasure && this.measureRowLimit(this.props)
        }),
        (o.componentDidUpdate = function() {
          this.state.needLimitMeasure && this.measureRowLimit(this.props)
        }),
        (o.componentWillUnmount = function() {
          window.removeEventListener('resize', this._resizeListener, !1)
        }),
        (o.render = function() {
          var e = this.props,
            t = e.date,
            n = e.localizer,
            o = e.className,
            a = (function(e, t, n) {
              t = (n ? _t(e, t, n) : void 0 === t) ? 1 : It(Lt(t), 0)
              var r = null == e ? 0 : e.length
              if (!r || t < 1) return []
              for (var o = 0, a = 0, i = Array(zt(r / t)); o < r; )
                i[a++] = qe(e, o, (o += t))
              return i
            })(
              (function(e, t) {
                for (var n = Ue(e, t), r = Ve(e, t), o = []; xe(n, r, 'day'); )
                  o.push(n), (n = be(n, 1, 'day'))
                return o
              })(t, n),
              7
            )
          return (
            (this._weekCount = a.length),
            r.createElement(
              'div',
              {
                className: G('rbc-month-view', o),
                role: 'table',
                'aria-label': 'Month View',
              },
              r.createElement(
                'div',
                { className: 'rbc-row rbc-month-header', role: 'row' },
                this.renderHeaders(a[0])
              ),
              a.map(this.renderWeek),
              this.props.popup && this.renderOverlay()
            )
          )
        }),
        (o.renderHeaders = function(e) {
          var t = this.props,
            n = t.localizer,
            o = t.components,
            a = e[0],
            i = e[e.length - 1],
            s = o.header || os
          return Ye(a, i, 'day').map(function(e, t) {
            return r.createElement(
              'div',
              { key: 'header_' + t, className: 'rbc-header' },
              r.createElement(s, {
                date: e,
                localizer: n,
                label: n.format(e, 'weekdayFormat'),
              })
            )
          })
        }),
        (o.renderOverlay = function() {
          var e = this,
            t = (this.state && this.state.overlay) || {},
            n = this.props,
            o = n.accessors,
            a = n.localizer,
            s = n.components,
            c = n.getters,
            l = n.selected,
            u = n.popupOffset
          return r.createElement(
            Hr,
            {
              rootClose: !0,
              placement: 'bottom',
              show: !!t.position,
              onHide: function() {
                return e.setState({ overlay: null })
              },
              target: function() {
                return t.target
              },
            },
            function(n) {
              var f = n.props
              return r.createElement(
                ln,
                i({}, f, {
                  popupOffset: u,
                  accessors: o,
                  getters: c,
                  selected: l,
                  components: s,
                  localizer: a,
                  position: t.position,
                  show: e.overlayDisplay,
                  events: t.events,
                  slotStart: t.date,
                  slotEnd: t.end,
                  onSelect: e.handleSelectEvent,
                  onDoubleClick: e.handleDoubleClickEvent,
                  onKeyPress: e.handleKeyPressEvent,
                  handleDragStart: e.props.handleDragStart,
                })
              )
            }
          )
        }),
        (o.measureRowLimit = function() {
          this.setState({
            needLimitMeasure: !1,
            rowLimit: this.slotRowRef.current.getRowLimit(),
          })
        }),
        (o.selectDates = function(e) {
          var t = this._pendingSelection.slice()
          ;(this._pendingSelection = []),
            t.sort(function(e, t) {
              return +e - +t
            })
          var n = new Date(t[0]),
            r = new Date(t[t.length - 1])
          r.setDate(t[t.length - 1].getDate() + 1),
            ee(this.props.onSelectSlot, {
              slots: t,
              start: n,
              end: r,
              action: e.action,
              bounds: e.bounds,
              box: e.box,
            })
        }),
        (o.clearSelection = function() {
          clearTimeout(this._selectTimer), (this._pendingSelection = [])
        }),
        t
      )
    })(r.Component)
  ;(cs.propTypes = {}),
    (cs.range = function(e, t) {
      var n = t.localizer
      return { start: Ue(e, n), end: Ve(e, n) }
    }),
    (cs.navigate = function(e, t) {
      switch (t) {
        case Z.PREVIOUS:
          return be(e, -1, 'month')
        case Z.NEXT:
          return be(e, 1, 'month')
        default:
          return e
      }
    }),
    (cs.title = function(e, t) {
      return t.localizer.format(e, 'monthHeaderFormat')
    })
  var ls = new Date().getTime()
  var us = 'clearTimeout',
    fs = function(e) {
      var t = new Date().getTime(),
        n = Math.max(0, 16 - (t - ls)),
        r = setTimeout(e, n)
      return (ls = t), r
    },
    ps = function(e, t) {
      return e + (e ? t[0].toUpperCase() + t.substr(1) : t) + 'AnimationFrame'
    }
  jr &&
    ['', 'webkit', 'moz', 'o', 'ms'].some(function(e) {
      var t = ps(e, 'request')
      return (
        t in window &&
          ((us = ps(e, 'cancel')),
          (fs = function(e) {
            return window[t](e)
          })),
        !!fs
      )
    })
  var ds = function(e) {
      'function' == typeof window[us] && window[us](e)
    },
    hs = fs,
    vs = function(e, t) {
      return e.getTimezoneOffset() - t.getTimezoneOffset()
    },
    ms = function(e, t, n, r) {
      return +Ee(e, 'minutes') + '' + +Ee(t, 'minutes') + n + '-' + r
    }
  function gs(e) {
    for (
      var t = e.min,
        n = e.max,
        r = e.step,
        o = e.timeslots,
        a = ms(t, n, r, o),
        i = Ee(t, 'day'),
        s = vs(i, t),
        c = 1 + Xe(t, n, 'minutes') + vs(t, n),
        l = Xe(i, t, 'minutes') + s,
        u = Math.ceil((c - 1) / (r * o)),
        f = u * o,
        p = new Array(u),
        d = new Array(f),
        h = 0;
      h < u;
      h++
    ) {
      p[h] = new Array(o)
      for (var v = 0; v < o; v++) {
        var m = h * o + v,
          g = m * r
        d[m] = p[h][v] = new Date(
          t.getFullYear(),
          t.getMonth(),
          t.getDate(),
          0,
          l + g,
          0,
          0
        )
      }
    }
    var y = d.length * r
    function b(e) {
      var n = Xe(t, e, 'minutes') + vs(t, e)
      return Math.min(n, c)
    }
    return (
      d.push(
        new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, l + y, 0, 0)
      ),
      {
        groups: p,
        update: function(e) {
          return ms(e) !== a ? gs(e) : this
        },
        dateIsInGroup: function(e, t) {
          var r = p[t + 1]
          return Pe(e, p[t][0], r ? r[0] : n, 'minutes')
        },
        nextSlot: function(e) {
          var t = d[Math.min(d.indexOf(e) + 1, d.length - 1)]
          return t === e && (t = be(e, r, 'minutes')), t
        },
        closestSlotToPosition: function(e) {
          var t = Math.min(d.length - 1, Math.max(0, Math.floor(e * f)))
          return d[t]
        },
        closestSlotFromPoint: function(e, t) {
          var n = Math.abs(t.top - t.bottom)
          return this.closestSlotToPosition((e.y - t.top) / n)
        },
        closestSlotFromDate: function(e, n) {
          if ((void 0 === n && (n = 0), Me(e, t, 'minutes'))) return d[0]
          var o = Xe(t, e, 'minutes')
          return d[(o - (o % r)) / r + n]
        },
        startsBeforeDay: function(e) {
          return Me(e, t, 'day')
        },
        startsAfterDay: function(e) {
          return Oe(e, n, 'day')
        },
        startsBefore: function(e) {
          return Me(Ke(t, e), t, 'minutes')
        },
        startsAfter: function(e) {
          return Oe(Ke(n, e), n, 'minutes')
        },
        getRange: function(e, o, a, i) {
          a || (e = je(n, Te(t, e))), i || (o = je(n, Te(t, o)))
          var s = b(e),
            c = b(o),
            l =
              c > r * f && !De(n, o)
                ? ((s - r) / (r * f)) * 100
                : (s / (r * f)) * 100
          return {
            top: l,
            height: (c / (r * f)) * 100 - l,
            start: b(e),
            startDate: e,
            end: b(o),
            endDate: o,
          }
        },
        getCurrentTimePosition: function(e) {
          return (b(e) / (r * f)) * 100
        },
      }
    )
  }
  function ys(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n]
      ;(r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r)
    }
  }
  var bs = et ? et.isConcatSpreadable : void 0
  function ws(e) {
    return oa(e) || va(e) || !!(bs && e && e[bs])
  }
  function Es(e, t, n, r, o) {
    var a = -1,
      i = e.length
    for (n || (n = ws), o || (o = []); ++a < i; ) {
      var s = e[a]
      t > 0 && n(s)
        ? t > 1
          ? Es(s, t - 1, n, r, o)
          : ra(o, s)
        : r || (o[o.length] = s)
    }
    return o
  }
  var _s = (function(e) {
    return function(t, n, r) {
      for (var o = -1, a = Object(t), i = r(t), s = i.length; s--; ) {
        var c = i[e ? s : ++o]
        if (!1 === n(a[c], c, a)) break
      }
      return t
    }
  })()
  function Ds(e, t) {
    return e && _s(e, t, Ca)
  }
  var Os = (function(e, t) {
    return function(n, r) {
      if (null == n) return n
      if (!yt(n)) return e(n, r)
      for (
        var o = n.length, a = t ? o : -1, i = Object(n);
        (t ? a-- : ++a < o) && !1 !== r(i[a], a, i);

      );
      return n
    }
  })(Ds)
  function Ss(e, t) {
    if (e !== t) {
      var n = void 0 !== e,
        r = null === e,
        o = e == e,
        a = jt(e),
        i = void 0 !== t,
        s = null === t,
        c = t == t,
        l = jt(t)
      if (
        (!s && !l && !a && e > t) ||
        (a && i && c && !s && !l) ||
        (r && i && c) ||
        (!n && c) ||
        !o
      )
        return 1
      if (
        (!r && !a && !l && e < t) ||
        (l && n && o && !r && !a) ||
        (s && n && o) ||
        (!i && o) ||
        !c
      )
        return -1
    }
    return 0
  }
  function Ms(e, t, n) {
    t = t.length
      ? wi(t, function(e) {
          return oa(e)
            ? function(t) {
                return ji(t, 1 === e.length ? e[0] : e)
              }
            : e
        })
      : [Ri]
    var r = -1
    return (
      (t = wi(t, Ea(Fi))),
      (function(e, t) {
        var n = e.length
        for (e.sort(t); n--; ) e[n] = e[n].value
        return e
      })(
        (function(e, t) {
          var n = -1,
            r = yt(e) ? Array(e.length) : []
          return (
            Os(e, function(e, o, a) {
              r[++n] = t(e, o, a)
            }),
            r
          )
        })(e, function(e, n, o) {
          return {
            criteria: wi(t, function(t) {
              return t(e)
            }),
            index: ++r,
            value: e,
          }
        }),
        function(e, t) {
          return (function(e, t, n) {
            for (
              var r = -1,
                o = e.criteria,
                a = t.criteria,
                i = o.length,
                s = n.length;
              ++r < i;

            ) {
              var c = Ss(o[r], a[r])
              if (c) return r >= s ? c : c * ('desc' == n[r] ? -1 : 1)
            }
            return e.index - t.index
          })(e, t, n)
        }
      )
    )
  }
  var xs = Math.max
  function js(e, t, n) {
    return (
      (t = xs(void 0 === t ? e.length - 1 : t, 0)),
      function() {
        for (
          var r = arguments, o = -1, a = xs(r.length - t, 0), i = Array(a);
          ++o < a;

        )
          i[o] = r[t + o]
        o = -1
        for (var s = Array(t + 1); ++o < t; ) s[o] = r[o]
        return (
          (s[t] = n(i)),
          (function(e, t, n) {
            switch (n.length) {
              case 0:
                return e.call(t)
              case 1:
                return e.call(t, n[0])
              case 2:
                return e.call(t, n[0], n[1])
              case 3:
                return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
          })(e, this, s)
        )
      }
    )
  }
  var Ts = (function() {
      try {
        var e = Eo(Object, 'defineProperty')
        return e({}, '', {}), e
      } catch (e) {}
    })(),
    Ps = Ts
      ? function(e, t) {
          return Ts(e, 'toString', {
            configurable: !0,
            enumerable: !1,
            value:
              ((n = t),
              function() {
                return n
              }),
            writable: !0,
          })
          var n
        }
      : Ri,
    Ns = 800,
    ks = 16,
    As = Date.now
  var Rs = (function(e) {
    var t = 0,
      n = 0
    return function() {
      var r = As(),
        o = ks - (r - n)
      if (((n = r), o > 0)) {
        if (++t >= Ns) return arguments[0]
      } else t = 0
      return e.apply(void 0, arguments)
    }
  })(Ps)
  function Cs(e, t) {
    return Rs(js(e, t, Ri), e + '')
  }
  var Fs = Cs(function(e, t) {
      if (null == e) return []
      var n = t.length
      return (
        n > 1 && _t(e, t[0], t[1])
          ? (t = [])
          : n > 2 && _t(t[0], t[1], t[2]) && (t = [t[0]]),
        Ms(e, Es(t, 1), [])
      )
    }),
    Ls = (function() {
      function e(e, t) {
        var n = t.accessors,
          r = t.slotMetrics.getRange(n.start(e), n.end(e)),
          o = r.start,
          a = r.startDate,
          i = r.end,
          s = r.endDate,
          c = r.top,
          l = r.height
        ;(this.start = o),
          (this.end = i),
          (this.startMs = +a),
          (this.endMs = +s),
          (this.top = c),
          (this.height = l),
          (this.data = e)
      }
      var t, n, r
      return (
        (t = e),
        (n = [
          {
            key: '_width',
            get: function() {
              if (this.rows)
                return (
                  100 /
                  (this.rows.reduce(function(e, t) {
                    return Math.max(e, t.leaves.length + 1)
                  }, 0) +
                    1)
                )
              var e = 100 - this.container._width
              return this.leaves
                ? e / (this.leaves.length + 1)
                : this.row._width
            },
          },
          {
            key: 'width',
            get: function() {
              var e = this._width,
                t = Math.min(100, 1.7 * this._width)
              if (this.rows) return t
              if (this.leaves) return this.leaves.length > 0 ? t : e
              var n = this.row.leaves
              return n.indexOf(this) === n.length - 1 ? e : t
            },
          },
          {
            key: 'xOffset',
            get: function() {
              if (this.rows) return 0
              if (this.leaves) return this.container._width
              var e = this.row,
                t = e.leaves,
                n = e.xOffset,
                r = e._width
              return n + (t.indexOf(this) + 1) * r
            },
          },
        ]) && ys(t.prototype, n),
        r && ys(t, r),
        e
      )
    })()
  function zs(e, t, n) {
    return (
      Math.abs(t.start - e.start) < n || (t.start > e.start && t.start < e.end)
    )
  }
  function Is(e) {
    for (
      var t = e.events,
        n = e.minimumStartDifference,
        r = e.slotMetrics,
        o = e.accessors,
        a = (function(e) {
          for (
            var t = Fs(e, [
                'startMs',
                function(e) {
                  return -e.endMs
                },
              ]),
              n = [];
            t.length > 0;

          ) {
            var r = t.shift()
            n.push(r)
            for (var o = 0; o < t.length; o++) {
              var a = t[o]
              if (!(r.endMs > a.startMs)) {
                if (o > 0) {
                  var i = t.splice(o, 1)[0]
                  n.push(i)
                }
                break
              }
            }
          }
          return n
        })(
          t.map(function(e) {
            return new Ls(e, { slotMetrics: r, accessors: o })
          })
        ),
        i = [],
        s = function(e) {
          var t = a[e],
            r = i.find(function(e) {
              return e.end > t.start || Math.abs(t.start - e.start) < n
            })
          if (!r) return (t.rows = []), i.push(t), 'continue'
          t.container = r
          for (var o = null, s = r.rows.length - 1; !o && s >= 0; s--)
            zs(r.rows[s], t, n) && (o = r.rows[s])
          o
            ? (o.leaves.push(t), (t.row = o))
            : ((t.leaves = []), r.rows.push(t))
        },
        c = 0;
      c < a.length;
      c++
    )
      s(c)
    return a.map(function(e) {
      return {
        event: e.data,
        style: {
          top: e.top,
          height: e.height,
          width: e.width,
          xOffset: Math.max(0, e.xOffset),
        },
      }
    })
  }
  function Ws(e, t, n) {
    for (var r = 0; r < e.friends.length; ++r)
      if (!(n.indexOf(e.friends[r]) > -1)) {
        ;(t = t > e.friends[r].idx ? t : e.friends[r].idx), n.push(e.friends[r])
        var o = Ws(e.friends[r], t, n)
        t = t > o ? t : o
      }
    return t
  }
  var Hs = {
    overlap: Is,
    'no-overlap': function(e) {
      var t = Is({
        events: e.events,
        minimumStartDifference: e.minimumStartDifference,
        slotMetrics: e.slotMetrics,
        accessors: e.accessors,
      })
      t.sort(function(e, t) {
        return (
          (e = e.style),
          (t = t.style),
          e.top !== t.top
            ? e.top > t.top
              ? 1
              : -1
            : e.top + e.height < t.top + t.height
            ? 1
            : -1
        )
      })
      for (var n = 0; n < t.length; ++n)
        (t[n].friends = []),
          delete t[n].style.left,
          delete t[n].style.left,
          delete t[n].idx,
          delete t[n].size
      for (var r = 0; r < t.length - 1; ++r)
        for (
          var o = t[r],
            a = o.style.top,
            i = o.style.top + o.style.height,
            s = r + 1;
          s < t.length;
          ++s
        ) {
          var c = t[s],
            l = c.style.top,
            u = c.style.top + c.style.height
          ;((l <= a && a < u) || (a <= l && l < i)) &&
            (o.friends.push(c), c.friends.push(o))
        }
      for (var f = 0; f < t.length; ++f) {
        for (var p = t[f], d = [], h = 0; h < 100; ++h) d.push(1)
        for (var v = 0; v < p.friends.length; ++v)
          void 0 !== p.friends[v].idx && (d[p.friends[v].idx] = 0)
        p.idx = d.indexOf(1)
      }
      for (var m = 0; m < t.length; ++m) {
        var g
        if (!t[m].size) {
          var y = []
          ;(g = 100 / (Ws(t[m], 0, y) + 1)), (t[m].size = g)
          for (var b = 0; b < y.length; ++b) y[b].size = g
        }
      }
      for (var w = 0; w < t.length; ++w) {
        var E = t[w]
        E.style.left = E.idx * E.size
        for (var _ = 0, D = 0; D < E.friends.length; ++D) {
          var O = E.friends[D]
          _ = _ > O ? _ : O
        }
        _ <= E.idx && (E.size = 100 - E.idx * E.size)
        var S = 0 === E.idx ? 0 : 3
        ;(E.style.width = 'calc(' + E.size + '% - ' + S + 'px)'),
          (E.style.height = 'calc(' + E.style.height + '% - 2px)'),
          (E.style.xOffset = 'calc(' + E.style.left + '% + ' + S + 'px)')
      }
      return t
    },
  }
  var Us = (function(e) {
    function t() {
      return e.apply(this, arguments) || this
    }
    return (
      l(t, e),
      (t.prototype.render = function() {
        var e = this.props,
          t = e.renderSlot,
          n = e.resource,
          o = e.group,
          s = e.getters,
          c = e.components,
          l = (c = void 0 === c ? {} : c).timeSlotWrapper,
          u = void 0 === l ? a : l,
          f = s ? s.slotGroupProp() : {}
        return r.createElement(
          'div',
          i({ className: 'rbc-timeslot-group' }, f),
          o.map(function(e, o) {
            var a = s ? s.slotProp(e, n) : {}
            return r.createElement(
              u,
              { key: o, value: e, resource: n },
              r.createElement(
                'div',
                i({}, a, { className: G('rbc-time-slot', a.className) }),
                t && t(e, o)
              )
            )
          })
        )
      }),
      t
    )
  })(t.Component)
  function Vs(e) {
    return 'string' == typeof e ? e : e + '%'
  }
  function Bs(e) {
    var t,
      n,
      o = e.style,
      a = e.className,
      s = e.event,
      c = e.accessors,
      l = e.rtl,
      u = e.selected,
      f = e.label,
      p = e.continuesEarlier,
      d = e.continuesLater,
      h = e.getters,
      v = e.onClick,
      m = e.onDoubleClick,
      g = e.isBackgroundEvent,
      y = e.onKeyPress,
      b = e.components,
      w = b.event,
      E = b.eventWrapper,
      _ = c.title(s),
      D = c.tooltip(s),
      O = c.end(s),
      S = c.start(s),
      M = h.eventProp(s, S, O, u),
      x = o.height,
      j = o.top,
      T = o.width,
      P = o.xOffset,
      N = [
        r.createElement('div', { key: '1', className: 'rbc-event-label' }, f),
        r.createElement(
          'div',
          { key: '2', className: 'rbc-event-content' },
          w ? r.createElement(w, { event: s, title: _ }) : _
        ),
      ],
      k = i(
        {},
        M.style,
        g
          ? (((t = {
              top: Vs(j),
              height: Vs(x),
              width: 'calc(' + T + ' + 10px)',
            })[l ? 'right' : 'left'] = Vs(Math.max(0, P))),
            t)
          : (((n = { top: Vs(j), width: Vs(T), height: Vs(x) })[
              l ? 'right' : 'left'
            ] = Vs(P)),
            n)
      )
    return r.createElement(
      E,
      i({ type: 'time' }, e),
      r.createElement(
        'div',
        {
          onClick: v,
          onDoubleClick: m,
          style: k,
          onKeyPress: y,
          title: D ? ('string' == typeof f ? f + ': ' : '') + D : void 0,
          className: G(
            g ? 'rbc-background-event' : 'rbc-event',
            a,
            M.className,
            {
              'rbc-selected': u,
              'rbc-event-continues-earlier': p,
              'rbc-event-continues-later': d,
            }
          ),
        },
        N
      )
    )
  }
  Us.propTypes = {}
  var Ys = function(e) {
      var t = e.children,
        n = e.className,
        o = e.style
      return r.createElement('div', { className: n, style: o }, t)
    },
    Ks = ['dayProp'],
    $s = ['eventContainerWrapper'],
    Xs = (function(e) {
      function t() {
        for (var t, o = arguments.length, a = new Array(o), s = 0; s < o; s++)
          a[s] = arguments[s]
        return (
          ((t = e.call.apply(e, [this].concat(a)) || this).state = {
            selecting: !1,
            timeIndicatorPosition: null,
          }),
          (t.intervalTriggered = !1),
          (t.renderEvents = function(e) {
            var n = e.events,
              o = e.isBackgroundEvent,
              a = t.props,
              i = a.rtl,
              s = a.selected,
              c = a.accessors,
              l = a.localizer,
              u = a.getters,
              f = a.components,
              p = a.step,
              d = a.timeslots,
              h = a.dayLayoutAlgorithm,
              v = a.resizable,
              m = ae(t).slotMetrics,
              g = l.messages
            return (function(e) {
              e.events, e.minimumStartDifference, e.slotMetrics, e.accessors
              var t,
                n = e.dayLayoutAlgorithm,
                r = n
              return (
                n in Hs && (r = Hs[n]),
                (t = r) && t.constructor && t.call && t.apply
                  ? r.apply(this, arguments)
                  : []
              )
            })({
              events: n,
              accessors: c,
              slotMetrics: m,
              minimumStartDifference: Math.ceil((p * d) / 2),
              dayLayoutAlgorithm: h,
            }).map(function(e, n) {
              var a,
                p = e.event,
                d = e.style,
                h = c.end(p),
                y = c.start(p),
                b = 'eventTimeRangeFormat',
                w = m.startsBeforeDay(y),
                E = m.startsAfterDay(h)
              w
                ? (b = 'eventTimeRangeEndFormat')
                : E && (b = 'eventTimeRangeStartFormat'),
                (a = w && E ? g.allDay : l.format({ start: y, end: h }, b))
              var _ = w || m.startsBefore(y),
                D = E || m.startsAfter(h)
              return r.createElement(Bs, {
                style: d,
                event: p,
                label: a,
                key: 'evt_' + n,
                getters: u,
                rtl: i,
                components: f,
                continuesEarlier: _,
                continuesLater: D,
                accessors: c,
                selected: on(p, s),
                onClick: function(e) {
                  return t._select(p, e)
                },
                onDoubleClick: function(e) {
                  return t._doubleClick(p, e)
                },
                isBackgroundEvent: o,
                onKeyPress: function(e) {
                  return t._keyPress(p, e)
                },
                resizable: v,
              })
            })
          }),
          (t._selectable = function() {
            var e = n.findDOMNode(ae(t)),
              r = (t._selector = new Gr(
                function() {
                  return n.findDOMNode(ae(t))
                },
                { longPressThreshold: t.props.longPressThreshold }
              )),
              o = function(e) {
                var n = t.props.onSelecting,
                  r = t.state || {},
                  o = a(e),
                  i = o.startDate,
                  s = o.endDate
                ;(n &&
                  ((De(r.startDate, i, 'minutes') &&
                    De(r.endDate, s, 'minutes')) ||
                    !1 ===
                      n({ start: i, end: s, resourceId: t.props.resource }))) ||
                  (t.state.start === o.start &&
                    t.state.end === o.end &&
                    t.state.selecting === o.selecting) ||
                  t.setState(o)
              },
              a = function(n) {
                var r = t.slotMetrics.closestSlotFromPoint(n, Jr(e))
                t.state.selecting || (t._initialSlot = r)
                var o = t._initialSlot
                xe(o, r)
                  ? (r = t.slotMetrics.nextSlot(r))
                  : Oe(o, r) && (o = t.slotMetrics.nextSlot(o))
                var a = t.slotMetrics.getRange(je(o, r), Te(o, r))
                return i({}, a, {
                  selecting: !0,
                  top: a.top + '%',
                  height: a.height + '%',
                })
              },
              s = function(e, r) {
                if (!Xr(n.findDOMNode(ae(t)), e)) {
                  var o = a(e),
                    i = o.startDate,
                    s = o.endDate
                  t._selectSlot({ startDate: i, endDate: s, action: r, box: e })
                }
                t.setState({ selecting: !1 })
              }
            r.on('selecting', o),
              r.on('selectStart', o),
              r.on('beforeSelect', function(e) {
                if ('ignoreEvents' === t.props.selectable)
                  return !Xr(n.findDOMNode(ae(t)), e)
              }),
              r.on('click', function(e) {
                return s(e, 'click')
              }),
              r.on('doubleClick', function(e) {
                return s(e, 'doubleClick')
              }),
              r.on('select', function(e) {
                t.state.selecting &&
                  (t._selectSlot(
                    i({}, t.state, { action: 'select', bounds: e })
                  ),
                  t.setState({ selecting: !1 }))
              }),
              r.on('reset', function() {
                t.state.selecting && t.setState({ selecting: !1 })
              })
          }),
          (t._teardownSelectable = function() {
            t._selector && (t._selector.teardown(), (t._selector = null))
          }),
          (t._selectSlot = function(e) {
            for (
              var n = e.startDate,
                r = e.endDate,
                o = e.action,
                a = e.bounds,
                i = e.box,
                s = n,
                c = [];
              xe(s, r);

            )
              c.push(s), (s = new Date(+s + 60 * t.props.step * 1e3))
            ee(t.props.onSelectSlot, {
              slots: c,
              start: n,
              end: r,
              resourceId: t.props.resource,
              action: o,
              bounds: a,
              box: i,
            })
          }),
          (t._select = function() {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r]
            ee(t.props.onSelectEvent, n)
          }),
          (t._doubleClick = function() {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r]
            ee(t.props.onDoubleClickEvent, n)
          }),
          (t._keyPress = function() {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r]
            ee(t.props.onKeyPressEvent, n)
          }),
          (t.slotMetrics = gs(t.props)),
          t
        )
      }
      l(t, e)
      var o = t.prototype
      return (
        (o.componentDidMount = function() {
          this.props.selectable && this._selectable(),
            this.props.isNow && this.setTimeIndicatorPositionUpdateInterval()
        }),
        (o.componentWillUnmount = function() {
          this._teardownSelectable(), this.clearTimeIndicatorInterval()
        }),
        (o.UNSAFE_componentWillReceiveProps = function(e) {
          e.selectable && !this.props.selectable && this._selectable(),
            !e.selectable &&
              this.props.selectable &&
              this._teardownSelectable(),
            (this.slotMetrics = this.slotMetrics.update(e))
        }),
        (o.componentDidUpdate = function(e, t) {
          var n = !De(e.getNow(), this.props.getNow(), 'minutes')
          if (e.isNow !== this.props.isNow || n) {
            if ((this.clearTimeIndicatorInterval(), this.props.isNow)) {
              var r =
                !n &&
                De(e.date, this.props.date, 'minutes') &&
                t.timeIndicatorPosition === this.state.timeIndicatorPosition
              this.setTimeIndicatorPositionUpdateInterval(r)
            }
          } else
            !this.props.isNow ||
              (De(e.min, this.props.min, 'minutes') &&
                De(e.max, this.props.max, 'minutes')) ||
              this.positionTimeIndicator()
        }),
        (o.setTimeIndicatorPositionUpdateInterval = function(e) {
          var t = this
          void 0 === e && (e = !1),
            this.intervalTriggered || e || this.positionTimeIndicator(),
            (this._timeIndicatorTimeout = window.setTimeout(function() {
              ;(t.intervalTriggered = !0),
                t.positionTimeIndicator(),
                t.setTimeIndicatorPositionUpdateInterval()
            }, 6e4))
        }),
        (o.clearTimeIndicatorInterval = function() {
          ;(this.intervalTriggered = !1),
            window.clearTimeout(this._timeIndicatorTimeout)
        }),
        (o.positionTimeIndicator = function() {
          var e = this.props,
            t = e.min,
            n = e.max,
            r = (0, e.getNow)()
          if (r >= t && r <= n) {
            var o = this.slotMetrics.getCurrentTimePosition(r)
            ;(this.intervalTriggered = !0),
              this.setState({ timeIndicatorPosition: o })
          } else this.clearTimeIndicatorInterval()
        }),
        (o.render = function() {
          var e = this.props,
            t = e.date,
            n = e.max,
            o = e.rtl,
            a = e.isNow,
            i = e.resource,
            c = e.accessors,
            l = e.localizer,
            u = e.getters,
            f = u.dayProp,
            p = s(u, Ks),
            d = e.components,
            h = d.eventContainerWrapper,
            v = s(d, $s),
            m = this.slotMetrics,
            g = this.state,
            y = g.selecting,
            b = g.top,
            w = g.height,
            E = { start: g.startDate, end: g.endDate },
            _ = f(n),
            D = _.className,
            O = _.style,
            S = v.dayColumnWrapper || Ys
          return r.createElement(
            S,
            {
              date: t,
              style: O,
              className: G(
                D,
                'rbc-day-slot',
                'rbc-time-column',
                a && 'rbc-now',
                a && 'rbc-today',
                y && 'rbc-slot-selecting'
              ),
            },
            m.groups.map(function(e, t) {
              return r.createElement(Us, {
                key: t,
                group: e,
                resource: i,
                getters: p,
                components: v,
              })
            }),
            r.createElement(
              h,
              {
                localizer: l,
                resource: i,
                accessors: c,
                getters: p,
                components: v,
                slotMetrics: m,
              },
              r.createElement(
                'div',
                { className: G('rbc-events-container', o && 'rtl') },
                this.renderEvents({
                  events: this.props.backgroundEvents,
                  isBackgroundEvent: !0,
                }),
                this.renderEvents({ events: this.props.events })
              )
            ),
            y &&
              r.createElement(
                'div',
                {
                  className: 'rbc-slot-selection',
                  style: { top: b, height: w },
                },
                r.createElement('span', null, l.format(E, 'selectRangeFormat'))
              ),
            a &&
              this.intervalTriggered &&
              r.createElement('div', {
                className: 'rbc-current-time-indicator',
                style: { top: this.state.timeIndicatorPosition + '%' },
              })
          )
        }),
        t
      )
    })(r.Component)
  ;(Xs.propTypes = {}),
    (Xs.defaultProps = { dragThroughEvents: !0, timeslots: 2 })
  var qs,
    Gs = (function(e) {
      function t() {
        for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
          o[a] = arguments[a]
        ;(t = e.call.apply(e, [this].concat(o)) || this).renderSlot = function(
          e,
          n
        ) {
          if (0 !== n) return null
          var o = t.props,
            a = o.localizer,
            i = o.getNow,
            s = t.slotMetrics.dateIsInGroup(i(), n)
          return r.createElement(
            'span',
            { className: G('rbc-label', s && 'rbc-now') },
            a.format(e, 'timeGutterFormat')
          )
        }
        var i = t.props,
          s = i.min,
          c = i.max,
          l = i.timeslots,
          u = i.step
        return (
          (t.slotMetrics = gs({ min: s, max: c, timeslots: l, step: u })), t
        )
      }
      l(t, e)
      var n = t.prototype
      return (
        (n.UNSAFE_componentWillReceiveProps = function(e) {
          var t = e.min,
            n = e.max,
            r = e.timeslots,
            o = e.step
          this.slotMetrics = this.slotMetrics.update({
            min: t,
            max: n,
            timeslots: r,
            step: o,
          })
        }),
        (n.render = function() {
          var e = this,
            t = this.props,
            n = t.resource,
            o = t.components,
            a = t.getters
          return r.createElement(
            'div',
            { className: 'rbc-time-gutter rbc-time-column' },
            this.slotMetrics.groups.map(function(t, i) {
              return r.createElement(Us, {
                key: i,
                group: t,
                resource: n,
                components: o,
                renderSlot: e.renderSlot,
                getters: a,
              })
            })
          )
        }),
        t
      )
    })(t.Component)
  function Zs(e, t) {
    var n = Xt(e)
    return n ? n.innerWidth : t ? e.clientWidth : Jt(e).width
  }
  function Js(e) {
    if (((!qs && 0 !== qs) || e) && jr) {
      var t = document.createElement('div')
      ;(t.style.position = 'absolute'),
        (t.style.top = '-9999px'),
        (t.style.width = '50px'),
        (t.style.height = '50px'),
        (t.style.overflow = 'scroll'),
        document.body.appendChild(t),
        (qs = t.offsetWidth - t.clientWidth),
        document.body.removeChild(t)
    }
    return qs
  }
  Gs.propTypes = {}
  var Qs = function(e) {
    var t = e.label
    return r.createElement(r.Fragment, null, t)
  }
  Qs.propTypes = {}
  var ec = (function(e) {
    function t() {
      for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
        o[a] = arguments[a]
      return (
        ((t =
          e.call.apply(e, [this].concat(o)) ||
          this).handleHeaderClick = function(e, n, r) {
          r.preventDefault(), ee(t.props.onDrillDown, [e, n])
        }),
        (t.renderRow = function(e) {
          var n = t.props,
            o = n.events,
            a = n.rtl,
            i = n.selectable,
            s = n.getNow,
            c = n.range,
            l = n.getters,
            u = n.localizer,
            f = n.accessors,
            p = n.components,
            d = n.resizable,
            h = f.resourceId(e),
            v = e
              ? o.filter(function(e) {
                  return f.resource(e) === h
                })
              : o
          return r.createElement(rs, {
            isAllDay: !0,
            rtl: a,
            getNow: s,
            minRows: 2,
            range: c,
            events: v,
            resourceId: h,
            className: 'rbc-allday-cell',
            selectable: i,
            selected: t.props.selected,
            components: p,
            accessors: f,
            getters: l,
            localizer: u,
            onSelect: t.props.onSelectEvent,
            onDoubleClick: t.props.onDoubleClickEvent,
            onKeyPress: t.props.onKeyPressEvent,
            onSelectSlot: t.props.onSelectSlot,
            longPressThreshold: t.props.longPressThreshold,
            resizable: d,
          })
        }),
        t
      )
    }
    l(t, e)
    var n = t.prototype
    return (
      (n.renderHeaderCells = function(e) {
        var t = this,
          n = this.props,
          o = n.localizer,
          a = n.getDrilldownView,
          i = n.getNow,
          s = n.getters.dayProp,
          c = n.components.header,
          l = void 0 === c ? os : c,
          u = i()
        return e.map(function(e, n) {
          var i = a(e),
            c = o.format(e, 'dayFormat'),
            f = s(e),
            p = f.className,
            d = f.style,
            h = r.createElement(l, { date: e, label: c, localizer: o })
          return r.createElement(
            'div',
            {
              key: n,
              style: d,
              className: G('rbc-header', p, De(e, u, 'day') && 'rbc-today'),
            },
            i
              ? r.createElement(
                  'a',
                  {
                    href: '#',
                    onClick: function(n) {
                      return t.handleHeaderClick(e, i, n)
                    },
                  },
                  h
                )
              : r.createElement('span', null, h)
          )
        })
      }),
      (n.render = function() {
        var e = this,
          t = this.props,
          n = t.width,
          o = t.rtl,
          a = t.resources,
          i = t.range,
          s = t.events,
          c = t.getNow,
          l = t.accessors,
          u = t.selectable,
          f = t.components,
          p = t.getters,
          d = t.scrollRef,
          h = t.localizer,
          v = t.isOverflowing,
          m = t.components,
          g = m.timeGutterHeader,
          y = m.resourceHeader,
          b = void 0 === y ? Qs : y,
          w = t.resizable,
          E = {}
        v && (E[o ? 'marginLeft' : 'marginRight'] = Js() + 'px')
        var _ = a.groupEvents(s)
        return r.createElement(
          'div',
          {
            style: E,
            ref: d,
            className: G('rbc-time-header', v && 'rbc-overflowing'),
          },
          r.createElement(
            'div',
            {
              className: 'rbc-label rbc-time-header-gutter',
              style: { width: n, minWidth: n, maxWidth: n },
            },
            g && r.createElement(g, null)
          ),
          a.map(function(t, n) {
            var a = t[0],
              s = t[1]
            return r.createElement(
              'div',
              { className: 'rbc-time-header-content', key: a || n },
              s &&
                r.createElement(
                  'div',
                  {
                    className: 'rbc-row rbc-row-resource',
                    key: 'resource_' + n,
                  },
                  r.createElement(
                    'div',
                    { className: 'rbc-header' },
                    r.createElement(b, {
                      index: n,
                      label: l.resourceTitle(s),
                      resource: s,
                    })
                  )
                ),
              r.createElement(
                'div',
                {
                  className:
                    'rbc-row rbc-time-header-cell' +
                    (i.length <= 1 ? ' rbc-time-header-cell-single-day' : ''),
                },
                e.renderHeaderCells(i)
              ),
              r.createElement(rs, {
                isAllDay: !0,
                rtl: o,
                getNow: c,
                minRows: 2,
                range: i,
                events: _.get(a) || [],
                resourceId: s && a,
                className: 'rbc-allday-cell',
                selectable: u,
                selected: e.props.selected,
                components: f,
                accessors: l,
                getters: p,
                localizer: h,
                onSelect: e.props.onSelectEvent,
                onDoubleClick: e.props.onDoubleClickEvent,
                onKeyPress: e.props.onKeyPressEvent,
                onSelectSlot: e.props.onSelectSlot,
                longPressThreshold: e.props.longPressThreshold,
                resizable: w,
              })
            )
          })
        )
      }),
      t
    )
  })(r.Component)
  ec.propTypes = {}
  var tc = {}
  var nc = (function(e) {
    function t(t) {
      var o
      return (
        ((o = e.call(this, t) || this).handleScroll = function(e) {
          o.scrollRef.current &&
            (o.scrollRef.current.scrollLeft = e.target.scrollLeft)
        }),
        (o.handleResize = function() {
          ds(o.rafHandle), (o.rafHandle = hs(o.checkOverflow))
        }),
        (o.gutterRef = function(e) {
          o.gutter = e && n.findDOMNode(e)
        }),
        (o.handleSelectAlldayEvent = function() {
          o.clearSelection()
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n]
          ee(o.props.onSelectEvent, t)
        }),
        (o.handleSelectAllDaySlot = function(e, t) {
          var n = o.props.onSelectSlot,
            r = new Date(e[0]),
            a = new Date(e[e.length - 1])
          a.setDate(e[e.length - 1].getDate() + 1),
            ee(n, {
              slots: e,
              start: r,
              end: a,
              action: t.action,
              resourceId: t.resourceId,
            })
        }),
        (o.checkOverflow = function() {
          if (!o._updatingOverflow) {
            var e = o.contentRef.current,
              t = e.scrollHeight > e.clientHeight
            o.state.isOverflowing !== t &&
              ((o._updatingOverflow = !0),
              o.setState({ isOverflowing: t }, function() {
                o._updatingOverflow = !1
              }))
          }
        }),
        (o.memoizedResources = es(function(e, t) {
          return (function(e, t) {
            return {
              map: function(n) {
                return e
                  ? e.map(function(e, r) {
                      return n([t.resourceId(e), e], r)
                    })
                  : [n([tc, null], 0)]
              },
              groupEvents: function(n) {
                var r = new Map()
                return e
                  ? (n.forEach(function(e) {
                      var n = t.resource(e) || tc,
                        o = r.get(n) || []
                      o.push(e), r.set(n, o)
                    }),
                    r)
                  : (r.set(tc, n), r)
              },
            }
          })(e, t)
        })),
        (o.state = { gutterWidth: void 0, isOverflowing: null }),
        (o.scrollRef = r.createRef()),
        (o.contentRef = r.createRef()),
        (o._scrollRatio = null),
        o
      )
    }
    l(t, e)
    var o = t.prototype
    return (
      (o.UNSAFE_componentWillMount = function() {
        this.calculateScroll()
      }),
      (o.componentDidMount = function() {
        this.checkOverflow(),
          null == this.props.width && this.measureGutter(),
          this.applyScroll(),
          window.addEventListener('resize', this.handleResize)
      }),
      (o.componentWillUnmount = function() {
        window.removeEventListener('resize', this.handleResize),
          ds(this.rafHandle),
          this.measureGutterAnimationFrameRequest &&
            window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest)
      }),
      (o.componentDidUpdate = function() {
        null == this.props.width && this.measureGutter(), this.applyScroll()
      }),
      (o.UNSAFE_componentWillReceiveProps = function(e) {
        var t = this.props,
          n = t.range,
          r = t.scrollToTime
        ;(De(e.range[0], n[0], 'minute') && De(e.scrollToTime, r, 'minute')) ||
          this.calculateScroll(e)
      }),
      (o.renderEvents = function(e, t, n, o) {
        var a = this,
          s = this.props,
          c = s.min,
          l = s.max,
          u = s.components,
          f = s.accessors,
          p = s.localizer,
          d = s.dayLayoutAlgorithm,
          h = this.memoizedResources(this.props.resources, f),
          v = h.groupEvents(t),
          m = h.groupEvents(n)
        return h.map(function(t, n) {
          var s = t[0],
            h = t[1]
          return e.map(function(e, t) {
            var g = (v.get(s) || []).filter(function(t) {
                return Pe(e, f.start(t), f.end(t), 'day')
              }),
              y = (m.get(s) || []).filter(function(t) {
                return Pe(e, f.start(t), f.end(t), 'day')
              })
            return r.createElement(
              Xs,
              i({}, a.props, {
                localizer: p,
                min: Ke(e, c),
                max: Ke(e, l),
                resource: h && s,
                components: u,
                isNow: De(e, o, 'day'),
                key: n + '-' + t,
                date: e,
                events: g,
                backgroundEvents: y,
                dayLayoutAlgorithm: d,
              })
            )
          })
        })
      }),
      (o.render = function() {
        var e = this.props,
          t = e.events,
          n = e.backgroundEvents,
          o = e.range,
          a = e.width,
          i = e.rtl,
          s = e.selected,
          c = e.getNow,
          l = e.resources,
          u = e.components,
          f = e.accessors,
          p = e.getters,
          d = e.localizer,
          h = e.min,
          v = e.max,
          m = e.showMultiDayTimes,
          g = e.longPressThreshold,
          y = e.resizable
        a = a || this.state.gutterWidth
        var b = o[0],
          w = o[o.length - 1]
        this.slots = o.length
        var E = [],
          _ = [],
          D = []
        return (
          t.forEach(function(e) {
            if (Hi(e, b, w, f)) {
              var t = f.start(e),
                n = f.end(e)
              f.allDay(e) || ($e(t) && $e(n)) || (!m && !De(t, n, 'day'))
                ? E.push(e)
                : _.push(e)
            }
          }),
          n.forEach(function(e) {
            Hi(e, b, w, f) && D.push(e)
          }),
          E.sort(function(e, t) {
            return Vi(e, t, f)
          }),
          r.createElement(
            'div',
            { className: G('rbc-time-view', l && 'rbc-time-view-resources') },
            r.createElement(ec, {
              range: o,
              events: E,
              width: a,
              rtl: i,
              getNow: c,
              localizer: d,
              selected: s,
              resources: this.memoizedResources(l, f),
              selectable: this.props.selectable,
              accessors: f,
              getters: p,
              components: u,
              scrollRef: this.scrollRef,
              isOverflowing: this.state.isOverflowing,
              longPressThreshold: g,
              onSelectSlot: this.handleSelectAllDaySlot,
              onSelectEvent: this.handleSelectAlldayEvent,
              onDoubleClickEvent: this.props.onDoubleClickEvent,
              onKeyPressEvent: this.props.onKeyPressEvent,
              onDrillDown: this.props.onDrillDown,
              getDrilldownView: this.props.getDrilldownView,
              resizable: y,
            }),
            r.createElement(
              'div',
              {
                ref: this.contentRef,
                className: 'rbc-time-content',
                onScroll: this.handleScroll,
              },
              r.createElement(Gs, {
                date: b,
                ref: this.gutterRef,
                localizer: d,
                min: Ke(b, h),
                max: Ke(b, v),
                step: this.props.step,
                getNow: this.props.getNow,
                timeslots: this.props.timeslots,
                components: u,
                className: 'rbc-time-gutter',
                getters: p,
              }),
              this.renderEvents(o, _, D, c())
            )
          )
        )
      }),
      (o.clearSelection = function() {
        clearTimeout(this._selectTimer), (this._pendingSelection = [])
      }),
      (o.measureGutter = function() {
        var e = this
        this.measureGutterAnimationFrameRequest &&
          window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest),
          (this.measureGutterAnimationFrameRequest = window.requestAnimationFrame(
            function() {
              var t = Zs(e.gutter)
              t && e.state.gutterWidth !== t && e.setState({ gutterWidth: t })
            }
          ))
      }),
      (o.applyScroll = function() {
        if (null != this._scrollRatio) {
          var e = this.contentRef.current
          ;(e.scrollTop = e.scrollHeight * this._scrollRatio),
            (this._scrollRatio = null)
        }
      }),
      (o.calculateScroll = function(e) {
        void 0 === e && (e = this.props)
        var t = e,
          n = t.min,
          r = t.max,
          o = t.scrollToTime,
          a = o - Ee(o, 'day'),
          i = Xe(r, n)
        this._scrollRatio = a / i
      }),
      t
    )
  })(t.Component)
  ;(nc.propTypes = {}),
    (nc.defaultProps = {
      step: 30,
      timeslots: 2,
      min: Ee(new Date(), 'day'),
      max: _e(new Date(), 'day'),
      scrollToTime: Ee(new Date(), 'day'),
    })
  var rc = ['date'],
    oc = (function(e) {
      function t() {
        return e.apply(this, arguments) || this
      }
      return (
        l(t, e),
        (t.prototype.render = function() {
          var e = this.props,
            n = e.date,
            o = s(e, rc),
            a = t.range(n)
          return r.createElement(nc, i({}, o, { range: a, eventOffset: 10 }))
        }),
        t
      )
    })(r.Component)
  ;(oc.propTypes = {}),
    (oc.range = function(e) {
      return [Ee(e, 'day')]
    }),
    (oc.navigate = function(e, t) {
      switch (t) {
        case Z.PREVIOUS:
          return be(e, -1, 'day')
        case Z.NEXT:
          return be(e, 1, 'day')
        default:
          return e
      }
    }),
    (oc.title = function(e, t) {
      return t.localizer.format(e, 'dayHeaderFormat')
    })
  var ac = ['date'],
    ic = (function(e) {
      function t() {
        return e.apply(this, arguments) || this
      }
      return (
        l(t, e),
        (t.prototype.render = function() {
          var e = this.props,
            n = e.date,
            o = s(e, ac),
            a = t.range(n, this.props)
          return r.createElement(nc, i({}, o, { range: a, eventOffset: 15 }))
        }),
        t
      )
    })(r.Component)
  ;(ic.propTypes = {}),
    (ic.defaultProps = nc.defaultProps),
    (ic.navigate = function(e, t) {
      switch (t) {
        case Z.PREVIOUS:
          return be(e, -1, 'week')
        case Z.NEXT:
          return be(e, 1, 'week')
        default:
          return e
      }
    }),
    (ic.range = function(e, t) {
      var n = t.localizer.startOfWeek()
      return Ye(Ee(e, 'week', n), _e(e, 'week', n))
    }),
    (ic.title = function(e, t) {
      var n = t.localizer,
        r = ic.range(e, { localizer: n }),
        o = r[0],
        a = r.slice(1)
      return n.format({ start: o, end: a.pop() }, 'dayRangeHeaderFormat')
    })
  var sc = ['date']
  function cc(e, t) {
    return ic.range(e, t).filter(function(e) {
      return -1 === [6, 0].indexOf(e.getDay())
    })
  }
  var lc,
    uc = (function(e) {
      function t() {
        return e.apply(this, arguments) || this
      }
      return (
        l(t, e),
        (t.prototype.render = function() {
          var e = this.props,
            t = e.date,
            n = s(e, sc),
            o = cc(t, this.props)
          return r.createElement(nc, i({}, n, { range: o, eventOffset: 15 }))
        }),
        t
      )
    })(r.Component)
  function fc(e, t) {
    return e
      .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
      .replace(/\s+/g, ' ')
      .replace(/^\s*|\s*$/g, '')
  }
  function pc(e) {
    var n = e.selected,
      o = e.getters,
      a = e.accessors,
      i = e.localizer,
      s = e.components,
      c = e.length,
      l = e.date,
      u = e.events,
      f = t.useRef(null),
      p = t.useRef(null),
      d = t.useRef(null),
      h = t.useRef(null),
      v = t.useRef(null)
    t.useEffect(function() {
      g()
    })
    var m = function(e, t) {
        var n = '',
          o = s.time,
          c = i.messages.allDay,
          l = a.end(t),
          u = a.start(t)
        return (
          a.allDay(t) ||
            (De(u, l)
              ? (c = i.format(u, 'agendaTimeFormat'))
              : De(u, l, 'day')
              ? (c = i.format({ start: u, end: l }, 'agendaTimeRangeFormat'))
              : De(e, u, 'day')
              ? (c = i.format(u, 'agendaTimeFormat'))
              : De(e, l, 'day') && (c = i.format(l, 'agendaTimeFormat'))),
          Oe(e, u, 'day') && (n = 'rbc-continues-prior'),
          Me(e, l, 'day') && (n += ' rbc-continues-after'),
          r.createElement(
            'span',
            { className: n.trim() },
            o ? r.createElement(o, { event: t, day: e, label: c }) : c
          )
        )
      },
      g = function() {
        if (v.current) {
          var e = f.current,
            t = v.current.firstChild
          if (t) {
            var n,
              r,
              o = h.current.scrollHeight > h.current.clientHeight,
              a = [],
              i = a
            ;(a = [Zs(t.children[0]), Zs(t.children[1])]),
              (i[0] === a[0] && i[1] === a[1]) ||
                ((p.current.style.width = a[0] + 'px'),
                (d.current.style.width = a[1] + 'px')),
              o
                ? ((r = 'rbc-header-overflowing'),
                  (n = e).classList
                    ? n.classList.add(r)
                    : (function(e, t) {
                        return e.classList
                          ? !!t && e.classList.contains(t)
                          : -1 !==
                              (
                                ' ' +
                                (e.className.baseVal || e.className) +
                                ' '
                              ).indexOf(' ' + t + ' ')
                      })(n, r) ||
                      ('string' == typeof n.className
                        ? (n.className = n.className + ' ' + r)
                        : n.setAttribute(
                            'class',
                            ((n.className && n.className.baseVal) || '') +
                              ' ' +
                              r
                          )),
                  (e.style.marginRight = Js() + 'px'))
                : (function(e, t) {
                    e.classList
                      ? e.classList.remove(t)
                      : 'string' == typeof e.className
                      ? (e.className = fc(e.className, t))
                      : e.setAttribute(
                          'class',
                          fc((e.className && e.className.baseVal) || '', t)
                        )
                  })(e, 'rbc-header-overflowing')
          }
        }
      },
      y = i.messages,
      b = be(l, c, 'day'),
      w = Ye(l, b, 'day')
    return (
      (u = u.filter(function(e) {
        return Hi(e, Ee(l, 'day'), _e(b, 'day'), a)
      })).sort(function(e, t) {
        return +a.start(e) - +a.start(t)
      }),
      r.createElement(
        'div',
        { className: 'rbc-agenda-view' },
        0 !== u.length
          ? r.createElement(
              r.Fragment,
              null,
              r.createElement(
                'table',
                { ref: f, className: 'rbc-agenda-table' },
                r.createElement(
                  'thead',
                  null,
                  r.createElement(
                    'tr',
                    null,
                    r.createElement(
                      'th',
                      { className: 'rbc-header', ref: p },
                      y.date
                    ),
                    r.createElement(
                      'th',
                      { className: 'rbc-header', ref: d },
                      y.time
                    ),
                    r.createElement('th', { className: 'rbc-header' }, y.event)
                  )
                )
              ),
              r.createElement(
                'div',
                { className: 'rbc-agenda-content', ref: h },
                r.createElement(
                  'table',
                  { className: 'rbc-agenda-table' },
                  r.createElement(
                    'tbody',
                    { ref: v },
                    w.map(function(e, t) {
                      return (function(e, t, c) {
                        var l = s.event,
                          u = s.date
                        return (t = t.filter(function(t) {
                          return Hi(t, Ee(e, 'day'), _e(e, 'day'), a)
                        })).map(function(s, f) {
                          var p = a.title(s),
                            d = a.end(s),
                            h = a.start(s),
                            v = o.eventProp(s, h, d, on(s, n)),
                            g = 0 === f && i.format(e, 'agendaDateFormat'),
                            y =
                              0 === f &&
                              r.createElement(
                                'td',
                                {
                                  rowSpan: t.length,
                                  className: 'rbc-agenda-date-cell',
                                },
                                u ? r.createElement(u, { day: e, label: g }) : g
                              )
                          return r.createElement(
                            'tr',
                            {
                              key: c + '_' + f,
                              className: v.className,
                              style: v.style,
                            },
                            y,
                            r.createElement(
                              'td',
                              { className: 'rbc-agenda-time-cell' },
                              m(e, s)
                            ),
                            r.createElement(
                              'td',
                              { className: 'rbc-agenda-event-cell' },
                              l ? r.createElement(l, { event: s, title: p }) : p
                            )
                          )
                        }, [])
                      })(e, u, t)
                    })
                  )
                )
              )
            )
          : r.createElement(
              'span',
              { className: 'rbc-agenda-empty' },
              y.noEventsInRange
            )
      )
    )
  }
  ;(uc.propTypes = {}),
    (uc.defaultProps = nc.defaultProps),
    (uc.range = cc),
    (uc.navigate = ic.navigate),
    (uc.title = function(e, t) {
      var n = t.localizer,
        r = cc(e, { localizer: n }),
        o = r[0],
        a = r.slice(1)
      return n.format({ start: o, end: a.pop() }, 'dayRangeHeaderFormat')
    }),
    (pc.propTypes = {}),
    (pc.defaultProps = { length: 30 }),
    (pc.range = function(e, t) {
      var n = t.length
      return {
        start: e,
        end: be(e, void 0 === n ? pc.defaultProps.length : n, 'day'),
      }
    }),
    (pc.navigate = function(e, t, n) {
      var r = n.length,
        o = void 0 === r ? pc.defaultProps.length : r
      switch (t) {
        case Z.PREVIOUS:
          return be(e, -o, 'day')
        case Z.NEXT:
          return be(e, o, 'day')
        default:
          return e
      }
    }),
    (pc.title = function(e, t) {
      var n = t.length,
        r = void 0 === n ? pc.defaultProps.length : n,
        o = t.localizer,
        a = be(e, r, 'day')
      return o.format({ start: e, end: a }, 'agendaHeaderFormat')
    })
  var dc =
      (((lc = {})[J.MONTH] = cs),
      (lc[J.WEEK] = ic),
      (lc[J.WORK_WEEK] = uc),
      (lc[J.DAY] = oc),
      (lc[J.AGENDA] = pc),
      lc),
    hc = ['action', 'date', 'today']
  function vc(e, t) {
    var n = t.action,
      r = t.date,
      o = t.today,
      a = s(t, hc)
    switch (((e = 'string' == typeof e ? dc[e] : e), n)) {
      case Z.TODAY:
        r = o || new Date()
        break
      case Z.DATE:
        break
      default:
        ;(e && 'function' == typeof e.navigate) || H(!1),
          (r = e.navigate(r, n, a))
    }
    return r
  }
  var mc = (function(e) {
    function t() {
      for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o]
      return (
        ((t = e.call.apply(e, [this].concat(r)) || this).navigate = function(
          e
        ) {
          t.props.onNavigate(e)
        }),
        (t.view = function(e) {
          t.props.onView(e)
        }),
        t
      )
    }
    return (
      l(t, e),
      (t.prototype.render = function() {
        var e = this.props,
          t = e.localizer.messages,
          n = e.label
        return r.createElement(
          'div',
          { className: 'rbc-toolbar' },
          r.createElement('span', { className: 'rbc-toolbar-label' }, n),
          r.createElement(
            'span',
            { className: 'rbc-btn-group' },
            r.createElement('button', {
              type: 'button',
              onClick: this.navigate.bind(null, Z.PREVIOUS),
              className: 'arrow arrow-left',
            }),
            r.createElement(
              'button',
              { type: 'button', onClick: this.navigate.bind(null, Z.TODAY) },
              t.today
            ),
            r.createElement('button', {
              type: 'button',
              onClick: this.navigate.bind(null, Z.NEXT),
              className: 'arrow arrow-right',
            })
          )
        )
      }),
      t
    )
  })(r.Component)
  function gc(e, t) {
    for (
      var n = -1, r = null == e ? 0 : e.length;
      ++n < r && !1 !== t(e[n], n, e);

    );
    return e
  }
  function yc(e, t, n) {
    '__proto__' == t && Ts
      ? Ts(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
      : (e[t] = n)
  }
  mc.propTypes = {}
  var bc = Object.prototype.hasOwnProperty
  function wc(e, t, n) {
    var r = e[t]
    ;(bc.call(e, t) && Ge(r, n) && (void 0 !== n || t in e)) || yc(e, t, n)
  }
  function Ec(e, t, n, r) {
    var o = !n
    n || (n = {})
    for (var a = -1, i = t.length; ++a < i; ) {
      var s = t[a],
        c = r ? r(n[s], e[s], s, n, e) : void 0
      void 0 === c && (c = e[s]), o ? yc(n, s, c) : wc(n, s, c)
    }
    return n
  }
  var _c = Object.prototype.hasOwnProperty
  function Dc(e) {
    if (!ut(e))
      return (function(e) {
        var t = []
        if (null != e) for (var n in Object(e)) t.push(n)
        return t
      })(e)
    var t = Na(e),
      n = []
    for (var r in e) ('constructor' != r || (!t && _c.call(e, r))) && n.push(r)
    return n
  }
  function Oc(e) {
    return yt(e) ? Ta(e, !0) : Dc(e)
  }
  var Sc = 'object' == typeof e && e && !e.nodeType && e,
    Mc =
      Sc && 'object' == typeof module && module && !module.nodeType && module,
    xc = Mc && Mc.exports === Sc ? Qe.Buffer : void 0,
    jc = xc ? xc.allocUnsafe : void 0
  var Tc = ka(Object.getPrototypeOf, Object),
    Pc = Object.getOwnPropertySymbols
      ? function(e) {
          for (var t = []; e; ) ra(t, la(e)), (e = Tc(e))
          return t
        }
      : ia
  function Nc(e) {
    return aa(e, Oc, Pc)
  }
  var kc = Object.prototype.hasOwnProperty
  function Ac(e) {
    var t = new e.constructor(e.byteLength)
    return new Io(t).set(new Io(e)), t
  }
  var Rc = /\w*$/
  var Cc = et ? et.prototype : void 0,
    Fc = Cc ? Cc.valueOf : void 0
  var Lc = '[object Boolean]',
    zc = '[object Date]',
    Ic = '[object Map]',
    Wc = '[object Number]',
    Hc = '[object RegExp]',
    Uc = '[object Set]',
    Vc = '[object String]',
    Bc = '[object Symbol]',
    Yc = '[object ArrayBuffer]',
    Kc = '[object DataView]',
    $c = '[object Float32Array]',
    Xc = '[object Float64Array]',
    qc = '[object Int8Array]',
    Gc = '[object Int16Array]',
    Zc = '[object Int32Array]',
    Jc = '[object Uint8Array]',
    Qc = '[object Uint8ClampedArray]',
    el = '[object Uint16Array]',
    tl = '[object Uint32Array]'
  function nl(e, t, n) {
    var r,
      o,
      a,
      i = e.constructor
    switch (t) {
      case Yc:
        return Ac(e)
      case Lc:
      case zc:
        return new i(+e)
      case Kc:
        return (function(e, t) {
          var n = t ? Ac(e.buffer) : e.buffer
          return new e.constructor(n, e.byteOffset, e.byteLength)
        })(e, n)
      case $c:
      case Xc:
      case qc:
      case Gc:
      case Zc:
      case Jc:
      case Qc:
      case el:
      case tl:
        return (function(e, t) {
          var n = t ? Ac(e.buffer) : e.buffer
          return new e.constructor(n, e.byteOffset, e.length)
        })(e, n)
      case Ic:
        return new i()
      case Wc:
      case Vc:
        return new i(e)
      case Hc:
        return (
          ((a = new (o = e).constructor(o.source, Rc.exec(o))).lastIndex =
            o.lastIndex),
          a
        )
      case Uc:
        return new i()
      case Bc:
        return (r = e), Fc ? Object(Fc.call(r)) : {}
    }
  }
  var rl = Object.create,
    ol = (function() {
      function e() {}
      return function(t) {
        if (!ut(t)) return {}
        if (rl) return rl(t)
        e.prototype = t
        var n = new e()
        return (e.prototype = void 0), n
      }
    })()
  var al = '[object Map]'
  var il = Sa && Sa.isMap,
    sl = il
      ? Ea(il)
      : function(e) {
          return Mt(e) && qa(e) == al
        },
    cl = '[object Set]'
  var ll = Sa && Sa.isSet,
    ul = ll
      ? Ea(ll)
      : function(e) {
          return Mt(e) && qa(e) == cl
        },
    fl = 1,
    pl = 2,
    dl = 4,
    hl = '[object Arguments]',
    vl = '[object Function]',
    ml = '[object GeneratorFunction]',
    gl = '[object Object]',
    yl = {}
  function bl(e, t, n, r, o, a) {
    var i,
      s = t & fl,
      c = t & pl,
      l = t & dl
    if ((n && (i = o ? n(e, r, o, a) : n(e)), void 0 !== i)) return i
    if (!ut(e)) return e
    var u = oa(e)
    if (u) {
      if (
        ((i = (function(e) {
          var t = e.length,
            n = new e.constructor(t)
          return (
            t &&
              'string' == typeof e[0] &&
              kc.call(e, 'index') &&
              ((n.index = e.index), (n.input = e.input)),
            n
          )
        })(e)),
        !s)
      )
        return (function(e, t) {
          var n = -1,
            r = e.length
          for (t || (t = Array(r)); ++n < r; ) t[n] = e[n]
          return t
        })(e, i)
    } else {
      var f = qa(e),
        p = f == vl || f == ml
      if (ba(e))
        return (function(e, t) {
          if (t) return e.slice()
          var n = e.length,
            r = jc ? jc(n) : new e.constructor(n)
          return e.copy(r), r
        })(e, s)
      if (f == gl || f == hl || (p && !o)) {
        if (
          ((i =
            c || p
              ? {}
              : (function(e) {
                  return 'function' != typeof e.constructor || Na(e)
                    ? {}
                    : ol(Tc(e))
                })(e)),
          !s)
        )
          return c
            ? (function(e, t) {
                return Ec(e, Pc(e), t)
              })(
                e,
                (function(e, t) {
                  return e && Ec(t, Oc(t), e)
                })(i, e)
              )
            : (function(e, t) {
                return Ec(e, la(e), t)
              })(
                e,
                (function(e, t) {
                  return e && Ec(t, Ca(t), e)
                })(i, e)
              )
      } else {
        if (!yl[f]) return o ? e : {}
        i = nl(e, f, s)
      }
    }
    a || (a = new ko())
    var d = a.get(e)
    if (d) return d
    a.set(e, i),
      ul(e)
        ? e.forEach(function(r) {
            i.add(bl(r, t, n, r, e, a))
          })
        : sl(e) &&
          e.forEach(function(r, o) {
            i.set(o, bl(r, t, n, o, e, a))
          })
    var h = u ? void 0 : (l ? (c ? Nc : Fa) : c ? Oc : Ca)(e)
    return (
      gc(h || e, function(r, o) {
        h && (r = e[(o = r)]), wc(i, o, bl(r, t, n, o, e, a))
      }),
      i
    )
  }
  function wl(e, t) {
    return (
      null ==
        (e = (function(e, t) {
          return t.length < 2 ? e : ji(e, qe(t, 0, -1))
        })(e, (t = Si(t, e)))) ||
      delete e[
        xi(((n = t), (r = null == n ? 0 : n.length), r ? n[r - 1] : void 0))
      ]
    )
    var n, r
  }
  ;(yl[hl] = yl['[object Array]'] = yl['[object ArrayBuffer]'] = yl[
    '[object DataView]'
  ] = yl['[object Boolean]'] = yl['[object Date]'] = yl[
    '[object Float32Array]'
  ] = yl['[object Float64Array]'] = yl['[object Int8Array]'] = yl[
    '[object Int16Array]'
  ] = yl['[object Int32Array]'] = yl['[object Map]'] = yl[
    '[object Number]'
  ] = yl[gl] = yl['[object RegExp]'] = yl['[object Set]'] = yl[
    '[object String]'
  ] = yl['[object Symbol]'] = yl['[object Uint8Array]'] = yl[
    '[object Uint8ClampedArray]'
  ] = yl['[object Uint16Array]'] = yl['[object Uint32Array]'] = !0),
    (yl['[object Error]'] = yl[vl] = yl['[object WeakMap]'] = !1)
  var El = '[object Object]',
    _l = Function.prototype,
    Dl = Object.prototype,
    Ol = _l.toString,
    Sl = Dl.hasOwnProperty,
    Ml = Ol.call(Object)
  function xl(e) {
    return (function(e) {
      if (!Mt(e) || lt(e) != El) return !1
      var t = Tc(e)
      if (null === t) return !0
      var n = Sl.call(t, 'constructor') && t.constructor
      return 'function' == typeof n && n instanceof n && Ol.call(n) == Ml
    })(e)
      ? void 0
      : e
  }
  function jl(e) {
    return (null == e ? 0 : e.length) ? Es(e, 1) : []
  }
  var Tl = (function(e) {
      return Rs(js(e, void 0, jl), e + '')
    })(function(e, t) {
      var n = {}
      if (null == e) return n
      var r = !1
      ;(t = wi(t, function(t) {
        return (t = Si(t, e)), r || (r = t.length > 1), t
      })),
        Ec(e, Nc(e), n),
        r && (n = bl(n, 7, xl))
      for (var o = t.length; o--; ) wl(n, t[o])
      return n
    }),
    Pl = Object.prototype,
    Nl = Pl.hasOwnProperty,
    kl = Cs(function(e, t) {
      e = Object(e)
      var n = -1,
        r = t.length,
        o = r > 2 ? t[2] : void 0
      for (o && _t(t[0], t[1], o) && (r = 1); ++n < r; )
        for (var a = t[n], i = Oc(a), s = -1, c = i.length; ++s < c; ) {
          var l = i[s],
            u = e[l]
          ;(void 0 === u || (Ge(u, Pl[l]) && !Nl.call(e, l))) && (e[l] = a[l])
        }
      return e
    })
  var Al = function(e) {
      return function(t) {
        return (function(e, t) {
          var n = null
          return (
            'function' == typeof t
              ? (n = t(e))
              : 'string' == typeof t &&
                'object' == typeof e &&
                null != e &&
                t in e &&
                (n = e[t]),
            n
          )
        })(t, e)
      }
    },
    Rl = ['view', 'date', 'getNow', 'onNavigate'],
    Cl = [
      'view',
      'toolbar',
      'events',
      'backgroundEvents',
      'style',
      'className',
      'elementProps',
      'date',
      'getNow',
      'length',
      'showMultiDayTimes',
      'onShowMore',
      'doShowMoreDrillDown',
      'components',
      'formats',
      'messages',
      'culture',
    ]
  function Fl(e) {
    return Array.isArray(e) ? e : Object.keys(e)
  }
  var Ll = (function(e) {
    function t() {
      for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o]
      return (
        ((t = e.call.apply(e, [this].concat(r)) || this).getViews = function() {
          var e,
            n,
            r,
            o = t.props.views
          return Array.isArray(o)
            ? (function(e, t, n) {
                var r = oa(e),
                  o = r || ba(e) || xa(e)
                if (((t = Fi(t)), null == n)) {
                  var a = e && e.constructor
                  n = o ? (r ? new a() : []) : ut(e) && vt(a) ? ol(Tc(e)) : {}
                }
                return (
                  (o ? gc : Ds)(e, function(e, r, o) {
                    return t(n, e, r, o)
                  }),
                  n
                )
              })(
                o,
                function(e, t) {
                  return (e[t] = dc[t])
                },
                {}
              )
            : 'object' == typeof o
            ? ((e = o),
              (r = {}),
              (n = Fi(
                (n = function(e, t) {
                  return !0 === e ? dc[t] : e
                })
              )),
              Ds(e, function(e, t, o) {
                yc(r, t, n(e, t, o))
              }),
              r)
            : dc
        }),
        (t.getView = function() {
          return t.getViews()[t.props.view]
        }),
        (t.getDrilldownView = function(e) {
          var n = t.props,
            r = n.view,
            o = n.drilldownView,
            a = n.getDrilldownView
          return a ? a(e, r, Object.keys(t.getViews())) : o
        }),
        (t.handleRangeChange = function(e, n, r) {
          var o = t.props,
            a = o.onRangeChange,
            i = o.localizer
          a && n.range && a(n.range(e, { localizer: i }), r)
        }),
        (t.handleNavigate = function(e, n) {
          var r = t.props,
            o = r.view,
            a = r.date,
            c = r.getNow,
            l = r.onNavigate,
            u = s(r, Rl),
            f = t.getView(),
            p = c()
          l(
            (a = vc(f, i({}, u, { action: e, date: n || a || p, today: p }))),
            o,
            e
          ),
            t.handleRangeChange(a, f)
        }),
        (t.handleViewChange = function(e) {
          e !== t.props.view &&
            (function(e, t) {
              return -1 !== Fl(t.views).indexOf(e)
            })(e, t.props) &&
            t.props.onView(e)
          var n = t.getViews()
          t.handleRangeChange(t.props.date || t.props.getNow(), n[e], e)
        }),
        (t.handleSelectEvent = function() {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r]
          ee(t.props.onSelectEvent, n)
        }),
        (t.handleDoubleClickEvent = function() {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r]
          ee(t.props.onDoubleClickEvent, n)
        }),
        (t.handleKeyPressEvent = function() {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r]
          ee(t.props.onKeyPressEvent, n)
        }),
        (t.handleSelectSlot = function(e) {
          ee(t.props.onSelectSlot, e)
        }),
        (t.handleDrillDown = function(e, n) {
          var r = t.props.onDrillDown
          r
            ? r(e, n, t.drilldownView)
            : (n && t.handleViewChange(n), t.handleNavigate(Z.DATE, e))
        }),
        (t.state = { context: t.getContext(t.props) }),
        t
      )
    }
    l(t, e)
    var n = t.prototype
    return (
      (n.UNSAFE_componentWillReceiveProps = function(e) {
        this.setState({ context: this.getContext(e) })
      }),
      (n.getContext = function(e) {
        var t = e.startAccessor,
          n = e.endAccessor,
          r = e.allDayAccessor,
          o = e.tooltipAccessor,
          s = e.titleAccessor,
          c = e.resourceAccessor,
          l = e.resourceIdAccessor,
          u = e.resourceTitleAccessor,
          f = e.eventPropGetter,
          p = e.backgroundEventPropGetter,
          d = e.slotPropGetter,
          h = e.slotGroupPropGetter,
          v = e.dayPropGetter,
          m = e.view,
          g = e.views,
          y = e.localizer,
          b = e.culture,
          w = e.messages,
          E = void 0 === w ? {} : w,
          _ = e.components,
          D = void 0 === _ ? {} : _,
          O = e.formats,
          S = void 0 === O ? {} : O,
          M = Fl(g)
        return {
          viewNames: M,
          localizer: re(
            y,
            b,
            S,
            (function(e) {
              return i({}, oe, e)
            })(E)
          ),
          getters: {
            eventProp: function() {
              return (f && f.apply(void 0, arguments)) || {}
            },
            backgroundEventProp: function() {
              return (p && p.apply(void 0, arguments)) || {}
            },
            slotProp: function() {
              return (d && d.apply(void 0, arguments)) || {}
            },
            slotGroupProp: function() {
              return (h && h.apply(void 0, arguments)) || {}
            },
            dayProp: function() {
              return (v && v.apply(void 0, arguments)) || {}
            },
          },
          components: kl(D[m] || {}, Tl(D, M), {
            eventWrapper: a,
            backgroundEventWrapper: a,
            eventContainerWrapper: a,
            dateCellWrapper: a,
            weekWrapper: a,
            timeSlotWrapper: a,
          }),
          accessors: {
            start: Al(t),
            end: Al(n),
            allDay: Al(r),
            tooltip: Al(o),
            title: Al(s),
            resource: Al(c),
            resourceId: Al(l),
            resourceTitle: Al(u),
          },
        }
      }),
      (n.render = function() {
        var e = this.props,
          t = e.view,
          n = e.toolbar,
          o = e.events,
          a = e.backgroundEvents,
          c = void 0 === a ? [] : a,
          l = e.style,
          u = e.className,
          f = e.elementProps,
          p = e.date,
          d = e.getNow,
          h = e.length,
          v = e.showMultiDayTimes,
          m = e.onShowMore,
          g = e.doShowMoreDrillDown,
          y = (e.components, e.formats, e.messages, e.culture, s(e, Cl))
        p = p || d()
        var b = this.getView(),
          w = this.state.context,
          E = w.accessors,
          _ = w.components,
          D = w.getters,
          O = w.localizer,
          S = w.viewNames,
          M = _.toolbar || mc,
          x = b.title(p, { localizer: O, length: h })
        return r.createElement(
          'div',
          i({}, f, {
            className: G(u, 'rbc-calendar', y.rtl && 'rbc-rtl'),
            style: l,
          }),
          n &&
            r.createElement(M, {
              date: p,
              view: t,
              views: S,
              label: x,
              onView: this.handleViewChange,
              onNavigate: this.handleNavigate,
              localizer: O,
            }),
          r.createElement(
            b,
            i({}, y, {
              events: o,
              backgroundEvents: c,
              date: p,
              getNow: d,
              length: h,
              localizer: O,
              getters: D,
              components: _,
              accessors: E,
              showMultiDayTimes: v,
              getDrilldownView: this.getDrilldownView,
              onNavigate: this.handleNavigate,
              onDrillDown: this.handleDrillDown,
              onSelectEvent: this.handleSelectEvent,
              onDoubleClickEvent: this.handleDoubleClickEvent,
              onKeyPressEvent: this.handleKeyPressEvent,
              onSelectSlot: this.handleSelectSlot,
              onShowMore: m,
              doShowMoreDrillDown: g,
            })
          )
        )
      }),
      t
    )
  })(r.Component)
  ;(Ll.defaultProps = {
    elementProps: {},
    popup: !1,
    toolbar: !0,
    view: J.MONTH,
    views: [J.MONTH, J.WEEK, J.DAY, J.AGENDA],
    step: 30,
    length: 30,
    doShowMoreDrillDown: !0,
    drilldownView: J.DAY,
    titleAccessor: 'title',
    tooltipAccessor: 'title',
    allDayAccessor: 'allDay',
    startAccessor: 'start',
    endAccessor: 'end',
    resourceAccessor: 'resourceId',
    resourceIdAccessor: 'id',
    resourceTitleAccessor: 'title',
    longPressThreshold: 250,
    getNow: function() {
      return new Date()
    },
    dayLayoutAlgorithm: 'overlap',
  }),
    (Ll.propTypes = {})
  var zl = (function e(t, n, o) {
      void 0 === o && (o = [])
      var a,
        c = t.displayName || t.name || 'Component',
        u =
          !!(a = t) &&
          ('function' != typeof a ||
            (a.prototype && a.prototype.isReactComponent)),
        f = Object.keys(n),
        p = f.map(B)
      !u && o.length && H(!1)
      var d = (function(e) {
        function a() {
          for (var t, r = arguments.length, a = new Array(r), s = 0; s < r; s++)
            a[s] = arguments[s]
          ;((t =
            e.call.apply(e, [this].concat(a)) || this).handlers = Object.create(
            null
          )),
            f.forEach(function(e) {
              var r = n[e]
              t.handlers[r] = function(n) {
                if (t.props[r]) {
                  var o
                  t._notifying = !0
                  for (
                    var a = arguments.length,
                      s = new Array(a > 1 ? a - 1 : 0),
                      c = 1;
                    c < a;
                    c++
                  )
                    s[c - 1] = arguments[c]
                  ;(o = t.props)[r].apply(o, [n].concat(s)), (t._notifying = !1)
                }
                t.unmounted ||
                  t.setState(function(t) {
                    var r,
                      o = t.values
                    return {
                      values: i(
                        Object.create(null),
                        o,
                        ((r = {}), (r[e] = n), r)
                      ),
                    }
                  })
              }
            }),
            o.length &&
              (t.attachRef = function(e) {
                t.inner = e
              })
          var c = Object.create(null)
          return (
            f.forEach(function(e) {
              c[e] = t.props[B(e)]
            }),
            (t.state = { values: c, prevProps: {} }),
            t
          )
        }
        l(a, e)
        var c = a.prototype
        return (
          (c.shouldComponentUpdate = function() {
            return !this._notifying
          }),
          (a.getDerivedStateFromProps = function(e, t) {
            var n = t.values,
              r = t.prevProps,
              o = { values: i(Object.create(null), n), prevProps: {} }
            return (
              f.forEach(function(t) {
                ;(o.prevProps[t] = e[t]),
                  !V(e, t) && V(r, t) && (o.values[t] = e[B(t)])
              }),
              o
            )
          }),
          (c.componentWillUnmount = function() {
            this.unmounted = !0
          }),
          (c.render = function() {
            var e = this,
              n = this.props,
              o = n.innerRef,
              a = s(n, ['innerRef'])
            p.forEach(function(e) {
              delete a[e]
            })
            var c = {}
            return (
              f.forEach(function(t) {
                var n = e.props[t]
                c[t] = void 0 !== n ? n : e.state.values[t]
              }),
              r.createElement(
                t,
                i({}, a, c, this.handlers, { ref: o || this.attachRef })
              )
            )
          }),
          a
        )
      })(r.Component)
      !(function(e) {
        var t = e.prototype
        if (!t || !t.isReactComponent)
          throw new Error('Can only polyfill class components')
        if (
          'function' != typeof e.getDerivedStateFromProps &&
          'function' != typeof t.getSnapshotBeforeUpdate
        )
          return e
        var n = null,
          r = null,
          o = null
        if (
          ('function' == typeof t.componentWillMount
            ? (n = 'componentWillMount')
            : 'function' == typeof t.UNSAFE_componentWillMount &&
              (n = 'UNSAFE_componentWillMount'),
          'function' == typeof t.componentWillReceiveProps
            ? (r = 'componentWillReceiveProps')
            : 'function' == typeof t.UNSAFE_componentWillReceiveProps &&
              (r = 'UNSAFE_componentWillReceiveProps'),
          'function' == typeof t.componentWillUpdate
            ? (o = 'componentWillUpdate')
            : 'function' == typeof t.UNSAFE_componentWillUpdate &&
              (o = 'UNSAFE_componentWillUpdate'),
          null !== n || null !== r || null !== o)
        ) {
          var a = e.displayName || e.name,
            i =
              'function' == typeof e.getDerivedStateFromProps
                ? 'getDerivedStateFromProps()'
                : 'getSnapshotBeforeUpdate()'
          throw Error(
            'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
              a +
              ' uses ' +
              i +
              ' but also contains the following legacy lifecycles:' +
              (null !== n ? '\n  ' + n : '') +
              (null !== r ? '\n  ' + r : '') +
              (null !== o ? '\n  ' + o : '') +
              '\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks'
          )
        }
        if (
          ('function' == typeof e.getDerivedStateFromProps &&
            ((t.componentWillMount = Y), (t.componentWillReceiveProps = K)),
          'function' == typeof t.getSnapshotBeforeUpdate)
        ) {
          if ('function' != typeof t.componentDidUpdate)
            throw new Error(
              'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
            )
          t.componentWillUpdate = $
          var s = t.componentDidUpdate
          t.componentDidUpdate = function(e, t, n) {
            var r = this.__reactInternalSnapshotFlag
              ? this.__reactInternalSnapshot
              : n
            s.call(this, e, t, r)
          }
        }
      })(d),
        (d.displayName = 'Uncontrolled(' + c + ')'),
        (d.propTypes = i(
          { innerRef: function() {} },
          (function(e, t) {
            var n = {}
            return (
              Object.keys(e).forEach(function(e) {
                n[B(e)] = U
              }),
              n
            )
          })(n)
        )),
        o.forEach(function(e) {
          d.prototype[e] = function() {
            var t
            return (t = this.inner)[e].apply(t, arguments)
          }
        })
      var h = d
      return (
        r.forwardRef &&
          ((h = r.forwardRef(function(e, t) {
            return r.createElement(
              d,
              i({}, e, {
                innerRef: t,
                __source: { fileName: X, lineNumber: 128 },
                __self: this,
              })
            )
          })).propTypes = d.propTypes),
        (h.ControlledComponent = t),
        (h.deferControlTo = function(t, r, o) {
          return void 0 === r && (r = {}), e(t, i({}, n, r), o)
        }),
        h
      )
    })(Ll, { view: 'onView', date: 'onNavigate', selected: 'onSelectEvent' }),
    Il = function(e, t, n) {
      var r = e.start,
        o = e.end
      return n.format(r, 'LT', t) + ' – ' + n.format(o, 'LT', t)
    },
    Wl = {
      dateFormat: 'DD',
      dayFormat: 'DD ddd',
      weekdayFormat: 'ddd',
      selectRangeFormat: Il,
      eventTimeRangeFormat: Il,
      eventTimeRangeStartFormat: function(e, t, n) {
        var r = e.start
        return n.format(r, 'LT', t) + ' – '
      },
      eventTimeRangeEndFormat: function(e, t, n) {
        var r = e.end
        return ' – ' + n.format(r, 'LT', t)
      },
      timeGutterFormat: 'LT',
      monthHeaderFormat: 'MMMM YYYY',
      dayHeaderFormat: 'dddd MMM DD',
      dayRangeHeaderFormat: function(e, t, n) {
        var r = e.start,
          o = e.end
        return (
          n.format(r, 'MMMM DD', t) +
          ' – ' +
          n.format(o, De(r, o, 'month') ? 'DD' : 'MMMM DD', t)
        )
      },
      agendaHeaderFormat: function(e, t, n) {
        var r = e.start,
          o = e.end
        return n.format(r, 'L', t) + ' – ' + n.format(o, 'L', t)
      },
      agendaDateFormat: 'ddd MMM DD',
      agendaTimeFormat: 'LT',
      agendaTimeRangeFormat: Il,
    }
  var Hl = function(e, t, n) {
      var r = e.start,
        o = e.end
      return n.format(r, 't', t) + ' – ' + n.format(o, 't', t)
    },
    Ul = {
      dateFormat: 'dd',
      dayFormat: 'ddd dd/MM',
      weekdayFormat: 'ddd',
      selectRangeFormat: Hl,
      eventTimeRangeFormat: Hl,
      eventTimeRangeStartFormat: function(e, t, n) {
        var r = e.start
        return n.format(r, 't', t) + ' – '
      },
      eventTimeRangeEndFormat: function(e, t, n) {
        var r = e.end
        return ' – ' + n.format(r, 't', t)
      },
      timeGutterFormat: 't',
      monthHeaderFormat: 'Y',
      dayHeaderFormat: 'dddd MMM dd',
      dayRangeHeaderFormat: function(e, t, n) {
        var r = e.start,
          o = e.end
        return (
          n.format(r, 'MMM dd', t) +
          ' – ' +
          n.format(o, De(r, o, 'month') ? 'dd' : 'MMM dd', t)
        )
      },
      agendaHeaderFormat: function(e, t, n) {
        var r = e.start,
          o = e.end
        return n.format(r, 'd', t) + ' – ' + n.format(o, 'd', t)
      },
      agendaDateFormat: 'ddd MMM dd',
      agendaTimeFormat: 't',
      agendaTimeRangeFormat: Hl,
    }
  function Vl(e) {
    return new ne({
      firstOfWeek: function(t) {
        return (
          ((t = (function(t) {
            return t ? e.findClosestCulture(t) : e.culture()
          })(t)) &&
            t.calendar.firstDay) ||
          0
        )
      },
      formats: Ul,
      format: function(t, n, r) {
        return e.format(t, n, r)
      },
    })
  }
  var Bl = function(e, t, n) {
      var r = e.start,
        o = e.end
      return (
        n.format(r, { time: 'short' }, t) +
        ' – ' +
        n.format(o, { time: 'short' }, t)
      )
    },
    Yl = {
      dateFormat: 'dd',
      dayFormat: 'eee dd/MM',
      weekdayFormat: 'eee',
      selectRangeFormat: Bl,
      eventTimeRangeFormat: Bl,
      eventTimeRangeStartFormat: function(e, t, n) {
        var r = e.start
        return n.format(r, { time: 'short' }, t) + ' – '
      },
      eventTimeRangeEndFormat: function(e, t, n) {
        var r = e.end
        return ' – ' + n.format(r, { time: 'short' }, t)
      },
      timeGutterFormat: { time: 'short' },
      monthHeaderFormat: 'MMMM yyyy',
      dayHeaderFormat: 'eeee MMM dd',
      dayRangeHeaderFormat: function(e, t, n) {
        var r = e.start,
          o = e.end
        return (
          n.format(r, 'MMM dd', t) +
          ' – ' +
          n.format(o, De(r, o, 'month') ? 'dd' : 'MMM dd', t)
        )
      },
      agendaHeaderFormat: function(e, t, n) {
        var r = e.start,
          o = e.end
        return (
          n.format(r, { date: 'short' }, t) +
          ' – ' +
          n.format(o, { date: 'short' }, t)
        )
      },
      agendaDateFormat: 'eee MMM dd',
      agendaTimeFormat: { time: 'short' },
      agendaTimeRangeFormat: Bl,
    }
  var Kl = function(e, t, n) {
      var r = e.start,
        o = e.end
      return n.format(r, 'p', t) + ' – ' + n.format(o, 'p', t)
    },
    $l = {
      dateFormat: 'dd',
      dayFormat: 'dd eee',
      weekdayFormat: 'cccc',
      selectRangeFormat: Kl,
      eventTimeRangeFormat: Kl,
      eventTimeRangeStartFormat: function(e, t, n) {
        var r = e.start
        return n.format(r, 'h:mma', t) + ' – '
      },
      eventTimeRangeEndFormat: function(e, t, n) {
        var r = e.end
        return ' – ' + n.format(r, 'h:mma', t)
      },
      timeGutterFormat: 'p',
      monthHeaderFormat: 'MMMM yyyy',
      dayHeaderFormat: 'cccc MMM dd',
      dayRangeHeaderFormat: function(e, t, n) {
        var r = e.start,
          o = e.end
        return (
          n.format(r, 'MMMM dd', t) +
          ' – ' +
          n.format(o, De(r, o, 'month') ? 'dd' : 'MMMM dd', t)
        )
      },
      agendaHeaderFormat: function(e, t, n) {
        var r = e.start,
          o = e.end
        return n.format(r, 'P', t) + ' – ' + n.format(o, 'P', t)
      },
      agendaDateFormat: 'ccc MMM dd',
      agendaTimeFormat: 'p',
      agendaTimeRangeFormat: Kl,
    },
    Xl = { eventWrapper: a, timeSlotWrapper: a, dateCellWrapper: a }
  ;(e.Calendar = zl),
    (e.DateLocalizer = ne),
    (e.Navigate = Z),
    (e.Views = J),
    (e.components = Xl),
    (e.dateFnsLocalizer = function(e) {
      var t = e.startOfWeek,
        n = e.getDay,
        r = e.format,
        o = e.locales
      return new ne({
        formats: $l,
        firstOfWeek: function(e) {
          return n(t(new Date(), { locale: o[e] }))
        },
        format: function(e, t, n) {
          return r(new Date(e), t, { locale: o[n] })
        },
      })
    }),
    (e.globalizeLocalizer = function(e) {
      var t = function(t) {
        return t ? e(t) : e
      }
      return e.load
        ? new ne({
            firstOfWeek: function(e) {
              try {
                var n = t(e).cldr,
                  r = n.attributes.territory,
                  o = n.get('supplemental').weekData.firstDay[r || '001']
                return [
                  'sun',
                  'mon',
                  'tue',
                  'wed',
                  'thu',
                  'fri',
                  'sat',
                ].indexOf(o)
              } catch (n) {
                var a = new Date(),
                  i = Math.max(
                    parseInt(t(e).formatDate(a, { raw: 'e' }), 10) - 1,
                    0
                  )
                return Math.abs(a.getDay() - i)
              }
            },
            formats: Yl,
            format: function(e, n, r) {
              return (
                (n = 'string' == typeof n ? { raw: n } : n),
                t(r).formatDate(e, n)
              )
            },
          })
        : Vl(e)
    }),
    (e.momentLocalizer = function(e) {
      return new ne({
        formats: Wl,
        firstOfWeek: function(t) {
          var n = t ? e.localeData(t) : e.localeData()
          return n ? n.firstDayOfWeek() : 0
        },
        format: function(t, n, r) {
          return ((o = e(t)), (a = r), a ? o.locale(a) : o).format(n)
          var o, a
        },
      })
    }),
    (e.move = vc),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
