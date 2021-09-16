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
    d = f ? Symbol.for('react.element') : 60103,
    p = f ? Symbol.for('react.portal') : 60106,
    v = f ? Symbol.for('react.fragment') : 60107,
    h = f ? Symbol.for('react.strict_mode') : 60108,
    m = f ? Symbol.for('react.profiler') : 60114,
    g = f ? Symbol.for('react.provider') : 60109,
    y = f ? Symbol.for('react.context') : 60110,
    b = f ? Symbol.for('react.async_mode') : 60111,
    w = f ? Symbol.for('react.concurrent_mode') : 60111,
    E = f ? Symbol.for('react.forward_ref') : 60112,
    _ = f ? Symbol.for('react.suspense') : 60113,
    S = f ? Symbol.for('react.suspense_list') : 60120,
    D = f ? Symbol.for('react.memo') : 60115,
    M = f ? Symbol.for('react.lazy') : 60116,
    O = f ? Symbol.for('react.block') : 60121,
    x = f ? Symbol.for('react.fundamental') : 60117,
    k = f ? Symbol.for('react.responder') : 60118,
    T = f ? Symbol.for('react.scope') : 60119
  function j(e) {
    if ('object' == typeof e && null !== e) {
      var t = e.$$typeof
      switch (t) {
        case d:
          switch ((e = e.type)) {
            case b:
            case w:
            case v:
            case m:
            case h:
            case _:
              return e
            default:
              switch ((e = e && e.$$typeof)) {
                case y:
                case E:
                case M:
                case D:
                case g:
                  return e
                default:
                  return t
              }
          }
        case p:
          return t
      }
    }
  }
  function A(e) {
    return j(e) === w
  }
  var N = {
      AsyncMode: b,
      ConcurrentMode: w,
      ContextConsumer: y,
      ContextProvider: g,
      Element: d,
      ForwardRef: E,
      Fragment: v,
      Lazy: M,
      Memo: D,
      Portal: p,
      Profiler: m,
      StrictMode: h,
      Suspense: _,
      isAsyncMode: function(e) {
        return A(e) || j(e) === b
      },
      isConcurrentMode: A,
      isContextConsumer: function(e) {
        return j(e) === y
      },
      isContextProvider: function(e) {
        return j(e) === g
      },
      isElement: function(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === d
      },
      isForwardRef: function(e) {
        return j(e) === E
      },
      isFragment: function(e) {
        return j(e) === v
      },
      isLazy: function(e) {
        return j(e) === M
      },
      isMemo: function(e) {
        return j(e) === D
      },
      isPortal: function(e) {
        return j(e) === p
      },
      isProfiler: function(e) {
        return j(e) === m
      },
      isStrictMode: function(e) {
        return j(e) === h
      },
      isSuspense: function(e) {
        return j(e) === _
      },
      isValidElementType: function(e) {
        return (
          'string' == typeof e ||
          'function' == typeof e ||
          e === v ||
          e === w ||
          e === m ||
          e === h ||
          e === _ ||
          e === S ||
          ('object' == typeof e &&
            null !== e &&
            (e.$$typeof === M ||
              e.$$typeof === D ||
              e.$$typeof === g ||
              e.$$typeof === y ||
              e.$$typeof === E ||
              e.$$typeof === x ||
              e.$$typeof === k ||
              e.$$typeof === T ||
              e.$$typeof === O))
        )
      },
      typeOf: j,
    },
    P = u(function(e, t) {}),
    R =
      (P.AsyncMode,
      P.ConcurrentMode,
      P.ContextConsumer,
      P.ContextProvider,
      P.Element,
      P.ForwardRef,
      P.Fragment,
      P.Lazy,
      P.Memo,
      P.Portal,
      P.Profiler,
      P.StrictMode,
      P.Suspense,
      P.isAsyncMode,
      P.isConcurrentMode,
      P.isContextConsumer,
      P.isContextProvider,
      P.isElement,
      P.isForwardRef,
      P.isFragment,
      P.isLazy,
      P.isMemo,
      P.isPortal,
      P.isProfiler,
      P.isStrictMode,
      P.isSuspense,
      P.isValidElementType,
      P.typeOf,
      u(function(e) {
        e.exports = N
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
  function W() {}
  function z() {}
  z.resetWarningCache = W
  var I = u(function(e) {
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
          checkPropTypes: z,
          resetWarningCache: W,
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
  function Y(e) {
    return 'default' + e.charAt(0).toUpperCase() + e.substr(1)
  }
  function B() {
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
  ;(B.__suppressDeprecationWarning = !0),
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
  I.oneOfType([I.string, I.func]),
    I.any,
    I.func,
    I.oneOfType([
      I.arrayOf(I.oneOf(Q)),
      I.objectOf(function(e, t) {
        if (-1 !== Q.indexOf(t) && 'boolean' == typeof e[t]) return null
        for (
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
          o < n;
          o++
        )
          r[o - 2] = arguments[o]
        return I.elementType.apply(I, [e, t].concat(r))
      }),
    ]),
    I.oneOfType([I.oneOf(['overlap', 'no-overlap']), I.func])
  function ee(e, t) {
    e && e.apply(null, [].concat(t))
  }
  var te = I.oneOfType([I.string, I.func])
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
    },
    ae = {
      en: {
        today: 'Today',
        weeks: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        showMore: function(e) {
          return e + ' more ' + (e > 1 ? 'activities' : 'activity')
        },
        month: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        hasActivity: 'The representative has activities on that day',
      },
      cn: {
        today: '今天',
        weeks: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        showMore: function(e) {
          return '更多' + e + '个活动'
        },
        month: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月',
        ],
        hasActivity: '代表当日有活动',
      },
    }
  function ie(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return e
  }
  function se(e, t) {
    for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n]
    return e
  }
  var ce =
      'object' == typeof global && global && global.Object === Object && global,
    le = 'object' == typeof self && self && self.Object === Object && self,
    ue = ce || le || Function('return this')(),
    fe = ue.Symbol,
    de = Object.prototype,
    pe = de.hasOwnProperty,
    ve = de.toString,
    he = fe ? fe.toStringTag : void 0
  var me = Object.prototype.toString
  var ge = '[object Null]',
    ye = '[object Undefined]',
    be = fe ? fe.toStringTag : void 0
  function we(e) {
    return null == e
      ? void 0 === e
        ? ye
        : ge
      : be && be in Object(e)
      ? (function(e) {
          var t = pe.call(e, he),
            n = e[he]
          try {
            e[he] = void 0
            var r = !0
          } catch (e) {}
          var o = ve.call(e)
          return r && (t ? (e[he] = n) : delete e[he]), o
        })(e)
      : (function(e) {
          return me.call(e)
        })(e)
  }
  function Ee(e) {
    return null != e && 'object' == typeof e
  }
  var _e = '[object Arguments]'
  function Se(e) {
    return Ee(e) && we(e) == _e
  }
  var De = Object.prototype,
    Me = De.hasOwnProperty,
    Oe = De.propertyIsEnumerable,
    xe = Se(
      (function() {
        return arguments
      })()
    )
      ? Se
      : function(e) {
          return Ee(e) && Me.call(e, 'callee') && !Oe.call(e, 'callee')
        },
    ke = Array.isArray,
    Te = fe ? fe.isConcatSpreadable : void 0
  function je(e) {
    return ke(e) || xe(e) || !!(Te && e && e[Te])
  }
  function Ae(e, t, n, r, o) {
    var a = -1,
      i = e.length
    for (n || (n = je), o || (o = []); ++a < i; ) {
      var s = e[a]
      t > 0 && n(s)
        ? t > 1
          ? Ae(s, t - 1, n, r, o)
          : se(o, s)
        : r || (o[o.length] = s)
    }
    return o
  }
  function Ne(e) {
    return (null == e ? 0 : e.length) ? Ae(e, 1) : []
  }
  var Pe = 'milliseconds',
    Re = 'seconds',
    Ce = 'minutes',
    Fe = 'hours',
    Le = 'day',
    We = 'week',
    ze = 'month',
    Ie = 'year',
    He = 'decade',
    Ue = 'century',
    Ve = {
      milliseconds: 1,
      seconds: 1e3,
      minutes: 6e4,
      hours: 36e5,
      day: 864e5,
      week: 6048e5,
    },
    Ye = { month: 1, year: 12, decade: 120, century: 1200 }
  function Be(e) {
    return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0 ? 29 : 28
  }
  function Ke(e, t, n) {
    switch (((e = new Date(e)), n)) {
      case Pe:
      case Re:
      case Ce:
      case Fe:
      case Le:
      case We:
        return (function(e, t) {
          var n = new Date(+e + t)
          return (function(e, t) {
            var n = e.getTimezoneOffset(),
              r = t.getTimezoneOffset()
            return new Date(+t + (r - n) * Ve.minutes)
          })(e, n)
        })(e, t * Ve[n])
      case ze:
      case Ie:
      case He:
      case Ue:
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
                return [31, Be(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
              })(i)[s]
            ),
            l = new Date(e)
          return l.setFullYear(i), l.setDate(1), l.setMonth(s), l.setDate(c), l
        })(e, t * Ye[n])
    }
    throw new TypeError('Invalid units: "' + n + '"')
  }
  function $e(e, t, n) {
    return Ke(e, -t, n)
  }
  function Xe(e, t, n) {
    switch (((e = new Date(e)), t)) {
      case Ue:
      case He:
      case Ie:
        e = ut(e, 0)
      case ze:
        e = lt(e, 1)
      case We:
      case Le:
        e = st(e, 0)
      case Fe:
        e = it(e, 0)
      case Ce:
        e = at(e, 0)
      case Re:
        e = ot(e, 0)
    }
    return (
      t === He && (e = $e(e, ft(e) % 10, 'year')),
      t === Ue && (e = $e(e, ft(e) % 100, 'year')),
      t === We &&
        (e = (function(e, t, n) {
          var r = (ct(e) + 7 - (n || 0)) % 7
          return void 0 === t ? r : Ke(e, t - r, Le)
        })(e, 0, n)),
      e
    )
  }
  function qe(e, t, n) {
    switch (((e = Xe((e = new Date(e)), t, n)), t)) {
      case Ue:
      case He:
      case Ie:
      case ze:
      case We:
        ;(e = $e((e = Ke(e, 1, t)), 1, Le)).setHours(23, 59, 59, 999)
        break
      case Le:
        e.setHours(23, 59, 59, 999)
        break
      case Fe:
      case Ce:
      case Re:
        e = $e((e = Ke(e, 1, t)), 1, Pe)
    }
    return e
  }
  var Ge = pt(function(e, t) {
      return e === t
    }),
    Ze = pt(function(e, t) {
      return e > t
    }),
    Je = pt(function(e, t) {
      return e >= t
    }),
    Qe = pt(function(e, t) {
      return e < t
    }),
    et = pt(function(e, t) {
      return e <= t
    })
  function tt() {
    return new Date(Math.min.apply(Math, arguments))
  }
  function nt() {
    return new Date(Math.max.apply(Math, arguments))
  }
  function rt(e, t, n, r) {
    return (r = r || 'day'), (!t || Je(e, t, r)) && (!n || et(e, n, r))
  }
  var ot = dt('Milliseconds'),
    at = dt('Seconds'),
    it = dt('Minutes'),
    st = dt('Hours'),
    ct = dt('Day'),
    lt = dt('Date'),
    ut = dt('Month'),
    ft = dt('FullYear')
  function dt(e) {
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
  function pt(e) {
    return function(t, n, r) {
      return e(+Xe(t, r), +Xe(n, r))
    }
  }
  var vt = { seconds: 1e3, minutes: 6e4, hours: 36e5, day: 864e5 }
  function ht(e, t) {
    var n = Xe(e, 'month')
    return Xe(n, 'week', t.startOfWeek())
  }
  function mt(e, t) {
    var n = qe(e, 'month')
    return qe(n, 'week', t.startOfWeek())
  }
  function gt(e, t) {
    for (var n = ht(e, t), r = mt(e, t), o = []; et(n, r, 'day'); )
      o.push(n), (n = Ke(n, 1, 'day'))
    return o
  }
  function yt(e, t) {
    var n = Xe(e, t)
    return Ge(n, e) ? n : Ke(n, 1, t)
  }
  function bt(e, t, n) {
    void 0 === n && (n = 'day')
    for (var r = e, o = []; et(r, t, n); ) o.push(r), (r = Ke(r, 1, n))
    return o
  }
  function wt(e, t) {
    return null == t && null == e
      ? null
      : (null == t && (t = new Date()),
        null == e && (e = new Date()),
        (e = Xe(e, 'day')),
        (e = st(e, st(t))),
        (e = it(e, it(t))),
        (e = at(e, at(t))),
        ot(e, ot(t)))
  }
  function Et(e) {
    return 0 === st(e) && 0 === it(e) && 0 === at(e) && 0 === ot(e)
  }
  function _t(e, t, n) {
    return n && 'milliseconds' !== n
      ? Math.round(Math.abs(+Xe(e, n) / vt[n] - +Xe(t, n) / vt[n]))
      : Math.abs(+e - +t)
  }
  function St(e, t, n) {
    var r = -1,
      o = e.length
    t < 0 && (t = -t > o ? 0 : o + t),
      (n = n > o ? o : n) < 0 && (n += o),
      (o = t > n ? 0 : (n - t) >>> 0),
      (t >>>= 0)
    for (var a = Array(o); ++r < o; ) a[r] = e[r + t]
    return a
  }
  function Dt(e, t) {
    return e === t || (e != e && t != t)
  }
  function Mt(e) {
    var t = typeof e
    return null != e && ('object' == t || 'function' == t)
  }
  var Ot = '[object AsyncFunction]',
    xt = '[object Function]',
    kt = '[object GeneratorFunction]',
    Tt = '[object Proxy]'
  function jt(e) {
    if (!Mt(e)) return !1
    var t = we(e)
    return t == xt || t == kt || t == Ot || t == Tt
  }
  var At = 9007199254740991
  function Nt(e) {
    return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= At
  }
  function Pt(e) {
    return null != e && Nt(e.length) && !jt(e)
  }
  var Rt = 9007199254740991,
    Ct = /^(?:0|[1-9]\d*)$/
  function Ft(e, t) {
    var n = typeof e
    return (
      !!(t = null == t ? Rt : t) &&
      ('number' == n || ('symbol' != n && Ct.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
    )
  }
  function Lt(e, t, n) {
    if (!Mt(n)) return !1
    var r = typeof t
    return (
      !!('number' == r ? Pt(n) && Ft(t, n.length) : 'string' == r && t in n) &&
      Dt(n[t], e)
    )
  }
  var Wt = /\s/
  var zt = /^\s+/
  function It(e) {
    return e
      ? e
          .slice(
            0,
            (function(e) {
              for (var t = e.length; t-- && Wt.test(e.charAt(t)); );
              return t
            })(e) + 1
          )
          .replace(zt, '')
      : e
  }
  var Ht = '[object Symbol]'
  function Ut(e) {
    return 'symbol' == typeof e || (Ee(e) && we(e) == Ht)
  }
  var Vt = NaN,
    Yt = /^[-+]0x[0-9a-f]+$/i,
    Bt = /^0b[01]+$/i,
    Kt = /^0o[0-7]+$/i,
    $t = parseInt
  var Xt = 1 / 0,
    qt = 1.7976931348623157e308
  function Gt(e) {
    return e
      ? (e = (function(e) {
          if ('number' == typeof e) return e
          if (Ut(e)) return Vt
          if (Mt(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e
            e = Mt(t) ? t + '' : t
          }
          if ('string' != typeof e) return 0 === e ? e : +e
          e = It(e)
          var n = Bt.test(e)
          return n || Kt.test(e)
            ? $t(e.slice(2), n ? 2 : 8)
            : Yt.test(e)
            ? Vt
            : +e
        })(e)) === Xt || e === -Xt
        ? (e < 0 ? -1 : 1) * qt
        : e == e
        ? e
        : 0
      : 0 === e
      ? e
      : 0
  }
  function Zt(e) {
    var t = Gt(e),
      n = t % 1
    return t == t ? (n ? t - n : t) : 0
  }
  var Jt = Math.ceil,
    Qt = Math.max
  function en(e, t, n) {
    t = (n ? Lt(e, t, n) : void 0 === t) ? 1 : Qt(Zt(t), 0)
    var r = null == e ? 0 : e.length
    if (!r || t < 1) return []
    for (var o = 0, a = 0, i = Array(Jt(r / t)); o < r; )
      i[a++] = St(e, o, (o += t))
    return i
  }
  function tn(e) {
    return (e && e.ownerDocument) || document
  }
  function nn(e, t) {
    return (function(e) {
      var t = tn(e)
      return (t && t.defaultView) || window
    })(e).getComputedStyle(e, t)
  }
  var rn = /([A-Z])/g
  var on = /^ms-/
  function an(e) {
    return (function(e) {
      return e.replace(rn, '-$1').toLowerCase()
    })(e).replace(on, '-ms-')
  }
  var sn = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i
  function cn(e, t) {
    var n = '',
      r = ''
    if ('string' == typeof t)
      return e.style.getPropertyValue(an(t)) || nn(e).getPropertyValue(an(t))
    Object.keys(t).forEach(function(o) {
      var a = t[o]
      a || 0 === a
        ? !(function(e) {
            return !(!e || !sn.test(e))
          })(o)
          ? (n += an(o) + ': ' + a + ';')
          : (r += o + '(' + a + ') ')
        : e.style.removeProperty(an(o))
    }),
      r && (n += 'transform: ' + r + ';'),
      (e.style.cssText += ';' + n)
  }
  function ln(e, t) {
    return e.contains
      ? e.contains(t)
      : e.compareDocumentPosition
      ? e === t || !!(16 & e.compareDocumentPosition(t))
      : void 0
  }
  function un(e) {
    return 'window' in e && e.window === e
      ? e
      : ('nodeType' in (t = e) &&
          t.nodeType === document.DOCUMENT_NODE &&
          e.defaultView) ||
          !1
    var t
  }
  function fn(e) {
    var t = 'pageXOffset' === e ? 'scrollLeft' : 'scrollTop'
    return function(n, r) {
      var o = un(n)
      if (void 0 === r) return o ? o[e] : n[t]
      o ? o.scrollTo(o[e], r) : (n[t] = r)
    }
  }
  var dn = fn('pageXOffset'),
    pn = fn('pageYOffset')
  function vn(e) {
    var t = tn(e),
      n = { top: 0, left: 0, height: 0, width: 0 },
      r = t && t.documentElement
    return r && ln(r, e)
      ? (void 0 !== e.getBoundingClientRect && (n = e.getBoundingClientRect()),
        (n = {
          top: n.top + pn(r) - (r.clientTop || 0),
          left: n.left + dn(r) - (r.clientLeft || 0),
          width: n.width,
          height: n.height,
        }))
      : n
  }
  var hn = function(e) {
    return !!e && 'offsetParent' in e
  }
  var mn = function(e) {
    return e.nodeName && e.nodeName.toLowerCase()
  }
  function gn(e, t) {
    var n,
      r = { top: 0, left: 0 }
    if ('fixed' === cn(e, 'position')) n = e.getBoundingClientRect()
    else {
      var o =
        t ||
        (function(e) {
          for (
            var t = tn(e), n = e && e.offsetParent;
            hn(n) && 'HTML' !== n.nodeName && 'static' === cn(n, 'position');

          )
            n = n.offsetParent
          return n || t.documentElement
        })(e)
      ;(n = vn(e)), 'html' !== mn(o) && (r = vn(o))
      var a = String(cn(o, 'borderTopWidth') || 0)
      r.top += parseInt(a, 10) - pn(o) || 0
      var s = String(cn(o, 'borderLeftWidth') || 0)
      r.left += parseInt(s, 10) - dn(o) || 0
    }
    var c = String(cn(e, 'marginTop') || 0),
      l = String(cn(e, 'marginLeft') || 0)
    return i({}, n, {
      top: n.top - r.top - (parseInt(c, 10) || 0),
      left: n.left - r.left - (parseInt(l, 10) || 0),
    })
  }
  var yn = [
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
      'reactStyle',
    ],
    bn = (function(e) {
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
            d = e.getters,
            p = e.children,
            v = e.components.eventWrapper,
            h = e.reactStyle,
            m = s(e, yn)
          delete m.resizable
          var g = f.title(o),
            y = f.tooltip(o),
            b = f.end(o),
            w = f.start(o),
            E = f.allDay(o),
            _ = c || E || _t(w, yt(b, 'day'), 'day') > 1,
            S = d.eventProp(o, w, b, a),
            D = r.createElement(
              'a',
              {
                href: o.url ? o.url : '#',
                className: G(
                  h['rbc-event-content'],
                  '2' === o.type && h['rbc-event-content-train']
                ),
                target: '_blank',
                title: y || void 0,
              },
              g
            )
          return r.createElement(
            v,
            i({}, this.props, { type: 'date' }),
            r.createElement(
              'div',
              i({}, m, {
                tabIndex: 0,
                style: i({}, S.style, t),
                className: G(
                  h['rbc-event'],
                  n,
                  S.className,
                  a && h['rbc-selected'],
                  _ && h['rbc-event-allday'],
                  l && h['rbc-event-continues-prior'],
                  u && h['rbc-event-continues-after']
                ),
              }),
              'function' == typeof p ? p(D) : D
            )
          )
        }),
        t
      )
    })(r.Component)
  function wn(e, t) {
    return !(!e || null == t) && -1 !== [].concat(t).indexOf(e)
  }
  function En(e, t) {
    return (e.right - e.left) / t
  }
  function _n(e, t, n, r) {
    var o = En(e, r)
    return n
      ? r - 1 - Math.floor((t - e.left) / o)
      : Math.floor((t - e.left) / o)
  }
  bn.propTypes = {}
  var Sn = (function(e) {
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
          a = vn(n.popperRef.current),
          i = a.top,
          s = a.left,
          c = a.width,
          l = a.height,
          u = window.innerHeight + pn(window),
          f = window.innerWidth + dn(window),
          d = i + l,
          p = s + c
        ;(d > u || p > f) &&
          (d > u && (e = d - u + (o.y || +o || 0)),
          p > f && (t = p - f + (o.x || +o || 0)),
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
          d = t.slotStart,
          p = t.slotEnd,
          v = t.localizer,
          h = t.popperRef,
          m = t.reactStyle,
          g = this.props.position.width,
          y = {
            top: -((this.state || {}).topOffset || 0),
            left: -((this.state || {}).leftOffset || 0),
            minWidth: g + g / 2,
          }
        return r.createElement(
          'div',
          {
            style: i({}, this.props.style, y),
            className: m['rbc-overlay'],
            ref: h,
          },
          r.createElement(
            'div',
            { className: m['rbc-overlay-header'] },
            v.format(d, 'dayHeaderFormat')
          ),
          n.map(function(t, n) {
            return r.createElement(bn, {
              key: n,
              type: 'popup',
              event: t,
              getters: a,
              onSelect: l,
              accessors: s,
              components: c,
              onDoubleClick: u,
              onKeyPress: f,
              continuesPrior: Qe(s.end(t), d, 'day'),
              continuesAfter: Je(s.start(t), p, 'day'),
              selected: wn(t, o),
              draggable: !0,
              onDragStart: function() {
                return e.props.handleDragStart(t)
              },
              onDragEnd: function() {
                return e.props.show()
              },
              reactStyle: m,
            })
          })
        )
      }),
      t
    )
  })(r.Component)
  Sn.propTypes = {}
  var Dn = r.forwardRef(function(e, t) {
    return r.createElement(Sn, i({ popperRef: t }, e))
  })
  function Mn() {
    return t.useState(null)
  }
  var On = function(e) {
    return e && 'function' != typeof e
      ? function(t) {
          e.current = t
        }
      : e
  }
  function xn(e, n) {
    return t.useMemo(
      function() {
        return (function(e, t) {
          var n = On(e),
            r = On(t)
          return function(e) {
            n && n(e), r && r(e)
          }
        })(e, n)
      },
      [e, n]
    )
  }
  var kn = 'top',
    Tn = 'bottom',
    jn = 'right',
    An = 'left',
    Nn = 'auto',
    Pn = [kn, Tn, jn, An],
    Rn = 'start',
    Cn = 'end',
    Fn = 'clippingParents',
    Ln = 'viewport',
    Wn = 'popper',
    zn = 'reference',
    In = Pn.reduce(function(e, t) {
      return e.concat([t + '-' + Rn, t + '-' + Cn])
    }, []),
    Hn = [].concat(Pn, [Nn]).reduce(function(e, t) {
      return e.concat([t, t + '-' + Rn, t + '-' + Cn])
    }, []),
    Un = [
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
  function Vn(e) {
    return e.split('-')[0]
  }
  function Yn(e) {
    if (null == e) return window
    if ('[object Window]' !== e.toString()) {
      var t = e.ownerDocument
      return (t && t.defaultView) || window
    }
    return e
  }
  function Bn(e) {
    return e instanceof Yn(e).Element || e instanceof Element
  }
  function Kn(e) {
    return e instanceof Yn(e).HTMLElement || e instanceof HTMLElement
  }
  function $n(e) {
    return (
      'undefined' != typeof ShadowRoot &&
      (e instanceof Yn(e).ShadowRoot || e instanceof ShadowRoot)
    )
  }
  var Xn = Math.round
  function qn(e, t) {
    void 0 === t && (t = !1)
    var n = e.getBoundingClientRect(),
      r = 1,
      o = 1
    if (Kn(e) && t) {
      var a = e.offsetHeight,
        i = e.offsetWidth
      i > 0 && (r = n.width / i || 1), a > 0 && (o = n.height / a || 1)
    }
    return {
      width: Xn(n.width / r),
      height: Xn(n.height / o),
      top: Xn(n.top / o),
      right: Xn(n.right / r),
      bottom: Xn(n.bottom / o),
      left: Xn(n.left / r),
      x: Xn(n.left / r),
      y: Xn(n.top / o),
    }
  }
  function Gn(e) {
    var t = qn(e),
      n = e.offsetWidth,
      r = e.offsetHeight
    return (
      Math.abs(t.width - n) <= 1 && (n = t.width),
      Math.abs(t.height - r) <= 1 && (r = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
    )
  }
  function Zn(e, t) {
    var n = t.getRootNode && t.getRootNode()
    if (e.contains(t)) return !0
    if (n && $n(n)) {
      var r = t
      do {
        if (r && e.isSameNode(r)) return !0
        r = r.parentNode || r.host
      } while (r)
    }
    return !1
  }
  function Jn(e) {
    return e ? (e.nodeName || '').toLowerCase() : null
  }
  function Qn(e) {
    return Yn(e).getComputedStyle(e)
  }
  function er(e) {
    return ['table', 'td', 'th'].indexOf(Jn(e)) >= 0
  }
  function tr(e) {
    return (
      (Bn(e) ? e.ownerDocument : e.document) || window.document
    ).documentElement
  }
  function nr(e) {
    return 'html' === Jn(e)
      ? e
      : e.assignedSlot || e.parentNode || ($n(e) ? e.host : null) || tr(e)
  }
  function rr(e) {
    return Kn(e) && 'fixed' !== Qn(e).position ? e.offsetParent : null
  }
  function or(e) {
    for (var t = Yn(e), n = rr(e); n && er(n) && 'static' === Qn(n).position; )
      n = rr(n)
    return n &&
      ('html' === Jn(n) || ('body' === Jn(n) && 'static' === Qn(n).position))
      ? t
      : n ||
          (function(e) {
            var t = -1 !== navigator.userAgent.toLowerCase().indexOf('firefox')
            if (
              -1 !== navigator.userAgent.indexOf('Trident') &&
              Kn(e) &&
              'fixed' === Qn(e).position
            )
              return null
            for (
              var n = nr(e);
              Kn(n) && ['html', 'body'].indexOf(Jn(n)) < 0;

            ) {
              var r = Qn(n)
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
  function ar(e) {
    return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
  }
  var ir = Math.max,
    sr = Math.min,
    cr = Math.round
  function lr(e, t, n) {
    return ir(e, sr(t, n))
  }
  function ur(e) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e)
  }
  function fr(e, t) {
    return t.reduce(function(t, n) {
      return (t[n] = e), t
    }, {})
  }
  var dr = function(e, t) {
    return ur(
      'number' !=
        typeof (e =
          'function' == typeof e
            ? e(Object.assign({}, t.rects, { placement: t.placement }))
            : e)
        ? e
        : fr(e, Pn)
    )
  }
  function pr(e) {
    return e.split('-')[1]
  }
  var vr = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
  function hr(e) {
    var t,
      n = e.popper,
      r = e.popperRect,
      o = e.placement,
      a = e.variation,
      i = e.offsets,
      s = e.position,
      c = e.gpuAcceleration,
      l = e.adaptive,
      u = e.roundOffsets,
      f =
        !0 === u
          ? (function(e) {
              var t = e.x,
                n = e.y,
                r = window.devicePixelRatio || 1
              return { x: cr(cr(t * r) / r) || 0, y: cr(cr(n * r) / r) || 0 }
            })(i)
          : 'function' == typeof u
          ? u(i)
          : i,
      d = f.x,
      p = void 0 === d ? 0 : d,
      v = f.y,
      h = void 0 === v ? 0 : v,
      m = i.hasOwnProperty('x'),
      g = i.hasOwnProperty('y'),
      y = An,
      b = kn,
      w = window
    if (l) {
      var E = or(n),
        _ = 'clientHeight',
        S = 'clientWidth'
      E === Yn(n) &&
        'static' !== Qn((E = tr(n))).position &&
        'absolute' === s &&
        ((_ = 'scrollHeight'), (S = 'scrollWidth')),
        (E = E),
        (o !== kn && ((o !== An && o !== jn) || a !== Cn)) ||
          ((b = Tn), (h -= E[_] - r.height), (h *= c ? 1 : -1)),
        (o !== An && ((o !== kn && o !== Tn) || a !== Cn)) ||
          ((y = jn), (p -= E[S] - r.width), (p *= c ? 1 : -1))
    }
    var D,
      M = Object.assign({ position: s }, l && vr)
    return c
      ? Object.assign(
          {},
          M,
          (((D = {})[b] = g ? '0' : ''),
          (D[y] = m ? '0' : ''),
          (D.transform =
            (w.devicePixelRatio || 1) <= 1
              ? 'translate(' + p + 'px, ' + h + 'px)'
              : 'translate3d(' + p + 'px, ' + h + 'px, 0)'),
          D)
        )
      : Object.assign(
          {},
          M,
          (((t = {})[b] = g ? h + 'px' : ''),
          (t[y] = m ? p + 'px' : ''),
          (t.transform = ''),
          t)
        )
  }
  var mr = { passive: !0 }
  var gr = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
  function yr(e) {
    return e.replace(/left|right|bottom|top/g, function(e) {
      return gr[e]
    })
  }
  var br = { start: 'end', end: 'start' }
  function wr(e) {
    return e.replace(/start|end/g, function(e) {
      return br[e]
    })
  }
  function Er(e) {
    var t = Yn(e)
    return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset }
  }
  function _r(e) {
    return qn(tr(e)).left + Er(e).scrollLeft
  }
  function Sr(e) {
    var t = Qn(e),
      n = t.overflow,
      r = t.overflowX,
      o = t.overflowY
    return /auto|scroll|overlay|hidden/.test(n + o + r)
  }
  function Dr(e, t) {
    var n
    void 0 === t && (t = [])
    var r = (function e(t) {
        return ['html', 'body', '#document'].indexOf(Jn(t)) >= 0
          ? t.ownerDocument.body
          : Kn(t) && Sr(t)
          ? t
          : e(nr(t))
      })(e),
      o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
      a = Yn(r),
      i = o ? [a].concat(a.visualViewport || [], Sr(r) ? r : []) : r,
      s = t.concat(i)
    return o ? s : s.concat(Dr(nr(i)))
  }
  function Mr(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    })
  }
  function Or(e, t) {
    return t === Ln
      ? Mr(
          (function(e) {
            var t = Yn(e),
              n = tr(e),
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
              { width: o, height: a, x: i + _r(e), y: s }
            )
          })(e)
        )
      : Kn(t)
      ? (function(e) {
          var t = qn(e)
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
      : Mr(
          (function(e) {
            var t,
              n = tr(e),
              r = Er(e),
              o = null == (t = e.ownerDocument) ? void 0 : t.body,
              a = ir(
                n.scrollWidth,
                n.clientWidth,
                o ? o.scrollWidth : 0,
                o ? o.clientWidth : 0
              ),
              i = ir(
                n.scrollHeight,
                n.clientHeight,
                o ? o.scrollHeight : 0,
                o ? o.clientHeight : 0
              ),
              s = -r.scrollLeft + _r(e),
              c = -r.scrollTop
            return (
              'rtl' === Qn(o || n).direction &&
                (s += ir(n.clientWidth, o ? o.clientWidth : 0) - a),
              { width: a, height: i, x: s, y: c }
            )
          })(tr(e))
        )
  }
  function xr(e, t, n) {
    var r =
        'clippingParents' === t
          ? (function(e) {
              var t = Dr(nr(e)),
                n =
                  ['absolute', 'fixed'].indexOf(Qn(e).position) >= 0 && Kn(e)
                    ? or(e)
                    : e
              return Bn(n)
                ? t.filter(function(e) {
                    return Bn(e) && Zn(e, n) && 'body' !== Jn(e)
                  })
                : []
            })(e)
          : [].concat(t),
      o = [].concat(r, [n]),
      a = o[0],
      i = o.reduce(function(t, n) {
        var r = Or(e, n)
        return (
          (t.top = ir(r.top, t.top)),
          (t.right = sr(r.right, t.right)),
          (t.bottom = sr(r.bottom, t.bottom)),
          (t.left = ir(r.left, t.left)),
          t
        )
      }, Or(e, a))
    return (
      (i.width = i.right - i.left),
      (i.height = i.bottom - i.top),
      (i.x = i.left),
      (i.y = i.top),
      i
    )
  }
  function kr(e) {
    var t,
      n = e.reference,
      r = e.element,
      o = e.placement,
      a = o ? Vn(o) : null,
      i = o ? pr(o) : null,
      s = n.x + n.width / 2 - r.width / 2,
      c = n.y + n.height / 2 - r.height / 2
    switch (a) {
      case kn:
        t = { x: s, y: n.y - r.height }
        break
      case Tn:
        t = { x: s, y: n.y + n.height }
        break
      case jn:
        t = { x: n.x + n.width, y: c }
        break
      case An:
        t = { x: n.x - r.width, y: c }
        break
      default:
        t = { x: n.x, y: n.y }
    }
    var l = a ? ar(a) : null
    if (null != l) {
      var u = 'y' === l ? 'height' : 'width'
      switch (i) {
        case Rn:
          t[l] = t[l] - (n[u] / 2 - r[u] / 2)
          break
        case Cn:
          t[l] = t[l] + (n[u] / 2 - r[u] / 2)
      }
    }
    return t
  }
  function Tr(e, t) {
    void 0 === t && (t = {})
    var n = t,
      r = n.placement,
      o = void 0 === r ? e.placement : r,
      a = n.boundary,
      i = void 0 === a ? Fn : a,
      s = n.rootBoundary,
      c = void 0 === s ? Ln : s,
      l = n.elementContext,
      u = void 0 === l ? Wn : l,
      f = n.altBoundary,
      d = void 0 !== f && f,
      p = n.padding,
      v = void 0 === p ? 0 : p,
      h = ur('number' != typeof v ? v : fr(v, Pn)),
      m = u === Wn ? zn : Wn,
      g = e.rects.popper,
      y = e.elements[d ? m : u],
      b = xr(Bn(y) ? y : y.contextElement || tr(e.elements.popper), i, c),
      w = qn(e.elements.reference),
      E = kr({ reference: w, element: g, strategy: 'absolute', placement: o }),
      _ = Mr(Object.assign({}, g, E)),
      S = u === Wn ? _ : w,
      D = {
        top: b.top - S.top + h.top,
        bottom: S.bottom - b.bottom + h.bottom,
        left: b.left - S.left + h.left,
        right: S.right - b.right + h.right,
      },
      M = e.modifiersData.offset
    if (u === Wn && M) {
      var O = M[o]
      Object.keys(D).forEach(function(e) {
        var t = [jn, Tn].indexOf(e) >= 0 ? 1 : -1,
          n = [kn, Tn].indexOf(e) >= 0 ? 'y' : 'x'
        D[e] += O[n] * t
      })
    }
    return D
  }
  function jr(e, t) {
    void 0 === t && (t = {})
    var n = t,
      r = n.placement,
      o = n.boundary,
      a = n.rootBoundary,
      i = n.padding,
      s = n.flipVariations,
      c = n.allowedAutoPlacements,
      l = void 0 === c ? Hn : c,
      u = pr(r),
      f = u
        ? s
          ? In
          : In.filter(function(e) {
              return pr(e) === u
            })
        : Pn,
      d = f.filter(function(e) {
        return l.indexOf(e) >= 0
      })
    0 === d.length && (d = f)
    var p = d.reduce(function(t, n) {
      return (
        (t[n] = Tr(e, {
          placement: n,
          boundary: o,
          rootBoundary: a,
          padding: i,
        })[Vn(n)]),
        t
      )
    }, {})
    return Object.keys(p).sort(function(e, t) {
      return p[e] - p[t]
    })
  }
  function Ar(e, t, n) {
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
  function Nr(e) {
    return [kn, jn, Tn, An].some(function(t) {
      return e[t] >= 0
    })
  }
  function Pr(e, t, n) {
    void 0 === n && (n = !1)
    var r,
      o,
      a = Kn(t),
      i =
        Kn(t) &&
        (function(e) {
          var t = e.getBoundingClientRect(),
            n = t.width / e.offsetWidth || 1,
            r = t.height / e.offsetHeight || 1
          return 1 !== n || 1 !== r
        })(t),
      s = tr(t),
      c = qn(e, i),
      l = { scrollLeft: 0, scrollTop: 0 },
      u = { x: 0, y: 0 }
    return (
      (a || (!a && !n)) &&
        (('body' !== Jn(t) || Sr(s)) &&
          (l =
            (r = t) !== Yn(r) && Kn(r)
              ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop }
              : Er(r)),
        Kn(t)
          ? (((u = qn(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
          : s && (u.x = _r(s))),
      {
        x: c.left + l.scrollLeft - u.x,
        y: c.top + l.scrollTop - u.y,
        width: c.width,
        height: c.height,
      }
    )
  }
  function Rr(e) {
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
  var Cr = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
  function Fr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n]
    return !t.some(function(e) {
      return !(e && 'function' == typeof e.getBoundingClientRect)
    })
  }
  var Lr = (function(e) {
    void 0 === e && (e = {})
    var t = e,
      n = t.defaultModifiers,
      r = void 0 === n ? [] : n,
      o = t.defaultOptions,
      a = void 0 === o ? Cr : o
    return function(e, t, n) {
      void 0 === n && (n = a)
      var o,
        i,
        s = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, Cr, a),
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
            var o = 'function' == typeof n ? n(s.options) : n
            f(),
              (s.options = Object.assign({}, a, s.options, o)),
              (s.scrollParents = {
                reference: Bn(e)
                  ? Dr(e)
                  : e.contextElement
                  ? Dr(e.contextElement)
                  : [],
                popper: Dr(t),
              })
            var i,
              l,
              d = (function(e) {
                var t = Rr(e)
                return Un.reduce(function(e, n) {
                  return e.concat(
                    t.filter(function(e) {
                      return e.phase === n
                    })
                  )
                }, [])
              })(
                ((i = [].concat(r, s.options.modifiers)),
                (l = i.reduce(function(e, t) {
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
                Object.keys(l).map(function(e) {
                  return l[e]
                }))
              )
            return (
              (s.orderedModifiers = d.filter(function(e) {
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
              if (Fr(t, n)) {
                ;(s.rects = {
                  reference: Pr(t, or(n), 'fixed' === s.options.strategy),
                  popper: Gn(n),
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
      if (!Fr(e, t)) return u
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
            i = Tr(t, { elementContext: 'reference' }),
            s = Tr(t, { altBoundary: !0 }),
            c = Ar(i, r),
            l = Ar(s, o, a),
            u = Nr(c),
            f = Nr(l)
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
          t.modifiersData[n] = kr({
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
              placement: Vn(t.placement),
              variation: pr(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: o,
            }
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              hr(
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
                hr(
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
            c = Yn(t.elements.popper),
            l = [].concat(t.scrollParents.reference, t.scrollParents.popper)
          return (
            a &&
              l.forEach(function(e) {
                e.addEventListener('scroll', n.update, mr)
              }),
            s && c.addEventListener('resize', n.update, mr),
            function() {
              a &&
                l.forEach(function(e) {
                  e.removeEventListener('scroll', n.update, mr)
                }),
                s && c.removeEventListener('resize', n.update, mr)
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
            i = Hn.reduce(function(e, n) {
              return (
                (e[n] = (function(e, t, n) {
                  var r = Vn(e),
                    o = [An, kn].indexOf(r) >= 0 ? -1 : 1,
                    a =
                      'function' == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    i = a[0],
                    s = a[1]
                  return (
                    (i = i || 0),
                    (s = (s || 0) * o),
                    [An, jn].indexOf(r) >= 0 ? { x: s, y: i } : { x: i, y: s }
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
                d = n.altBoundary,
                p = n.flipVariations,
                v = void 0 === p || p,
                h = n.allowedAutoPlacements,
                m = t.options.placement,
                g = Vn(m),
                y =
                  c ||
                  (g !== m && v
                    ? (function(e) {
                        if (Vn(e) === Nn) return []
                        var t = yr(e)
                        return [wr(e), t, wr(t)]
                      })(m)
                    : [yr(m)]),
                b = [m].concat(y).reduce(function(e, n) {
                  return e.concat(
                    Vn(n) === Nn
                      ? jr(t, {
                          placement: n,
                          boundary: u,
                          rootBoundary: f,
                          padding: l,
                          flipVariations: v,
                          allowedAutoPlacements: h,
                        })
                      : n
                  )
                }, []),
                w = t.rects.reference,
                E = t.rects.popper,
                _ = new Map(),
                S = !0,
                D = b[0],
                M = 0;
              M < b.length;
              M++
            ) {
              var O = b[M],
                x = Vn(O),
                k = pr(O) === Rn,
                T = [kn, Tn].indexOf(x) >= 0,
                j = T ? 'width' : 'height',
                A = Tr(t, {
                  placement: O,
                  boundary: u,
                  rootBoundary: f,
                  altBoundary: d,
                  padding: l,
                }),
                N = T ? (k ? jn : An) : k ? Tn : kn
              w[j] > E[j] && (N = yr(N))
              var P = yr(N),
                R = []
              if (
                (a && R.push(A[x] <= 0),
                s && R.push(A[N] <= 0, A[P] <= 0),
                R.every(function(e) {
                  return e
                }))
              ) {
                ;(D = O), (S = !1)
                break
              }
              _.set(O, R)
            }
            if (S)
              for (
                var C = function(e) {
                    var t = b.find(function(t) {
                      var n = _.get(t)
                      if (n)
                        return n.slice(0, e).every(function(e) {
                          return e
                        })
                    })
                    if (t) return (D = t), 'break'
                  },
                  F = v ? 3 : 1;
                F > 0 && 'break' !== C(F);
                F--
              );
            t.placement !== D &&
              ((t.modifiersData[r]._skip = !0),
              (t.placement = D),
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
            d = n.tether,
            p = void 0 === d || d,
            v = n.tetherOffset,
            h = void 0 === v ? 0 : v,
            m = Tr(t, {
              boundary: c,
              rootBoundary: l,
              padding: f,
              altBoundary: u,
            }),
            g = Vn(t.placement),
            y = pr(t.placement),
            b = !y,
            w = ar(g),
            E = 'x' === w ? 'y' : 'x',
            _ = t.modifiersData.popperOffsets,
            S = t.rects.reference,
            D = t.rects.popper,
            M =
              'function' == typeof h
                ? h(Object.assign({}, t.rects, { placement: t.placement }))
                : h,
            O = { x: 0, y: 0 }
          if (_) {
            if (a || s) {
              var x = 'y' === w ? kn : An,
                k = 'y' === w ? Tn : jn,
                T = 'y' === w ? 'height' : 'width',
                j = _[w],
                A = _[w] + m[x],
                N = _[w] - m[k],
                P = p ? -D[T] / 2 : 0,
                R = y === Rn ? S[T] : D[T],
                C = y === Rn ? -D[T] : -S[T],
                F = t.elements.arrow,
                L = p && F ? Gn(F) : { width: 0, height: 0 },
                W = t.modifiersData['arrow#persistent']
                  ? t.modifiersData['arrow#persistent'].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                z = W[x],
                I = W[k],
                H = lr(0, S[T], L[T]),
                U = b ? S[T] / 2 - P - H - z - M : R - H - z - M,
                V = b ? -S[T] / 2 + P + H + I + M : C + H + I + M,
                Y = t.elements.arrow && or(t.elements.arrow),
                B = Y ? ('y' === w ? Y.clientTop || 0 : Y.clientLeft || 0) : 0,
                K = t.modifiersData.offset
                  ? t.modifiersData.offset[t.placement][w]
                  : 0,
                $ = _[w] + U - K - B,
                X = _[w] + V - K
              if (a) {
                var q = lr(p ? sr(A, $) : A, j, p ? ir(N, X) : N)
                ;(_[w] = q), (O[w] = q - j)
              }
              if (s) {
                var G = 'x' === w ? kn : An,
                  Z = 'x' === w ? Tn : jn,
                  J = _[E],
                  Q = J + m[G],
                  ee = J - m[Z],
                  te = lr(p ? sr(Q, $) : Q, J, p ? ir(ee, X) : ee)
                ;(_[E] = te), (O[E] = te - J)
              }
            }
            t.modifiersData[r] = O
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
            s = Vn(n.placement),
            c = ar(s),
            l = [An, jn].indexOf(s) >= 0 ? 'height' : 'width'
          if (a && i) {
            var u = dr(o.padding, n),
              f = Gn(a),
              d = 'y' === c ? kn : An,
              p = 'y' === c ? Tn : jn,
              v =
                n.rects.reference[l] +
                n.rects.reference[c] -
                i[c] -
                n.rects.popper[l],
              h = i[c] - n.rects.reference[c],
              m = or(a),
              g = m
                ? 'y' === c
                  ? m.clientHeight || 0
                  : m.clientWidth || 0
                : 0,
              y = v / 2 - h / 2,
              b = u[d],
              w = g - f[l] - u[p],
              E = g / 2 - f[l] / 2 + y,
              _ = lr(b, E, w),
              S = c
            n.modifiersData[r] =
              (((t = {})[S] = _), (t.centerOffset = _ - E), t)
          }
        },
        effect: function(e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? '[data-popper-arrow]' : n
          null != r &&
            ('string' != typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            Zn(t.elements.popper, r) &&
            (t.elements.arrow = r)
        },
        requires: ['popperOffsets'],
        requiresIfExists: ['preventOverflow'],
      },
    ],
  })
  function Wr(e) {
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
  var zr = function(e) {
      return {
        position: e,
        top: '0',
        left: '0',
        opacity: '0',
        pointerEvents: 'none',
      }
    },
    Ir = { name: 'applyStyles', enabled: !1 },
    Hr = {
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
    Ur = []
  var Vr = !(
      'undefined' == typeof window ||
      !window.document ||
      !window.document.createElement
    ),
    Yr = !1,
    Br = !1
  try {
    var Kr = {
      get passive() {
        return (Yr = !0)
      },
      get once() {
        return (Br = Yr = !0)
      },
    }
    Vr &&
      (window.addEventListener('test', Kr, Kr),
      window.removeEventListener('test', Kr, !0))
  } catch (v) {}
  function $r(e, t, n, r) {
    return (
      (function(e, t, n, r) {
        if (r && 'boolean' != typeof r && !Br) {
          var o = r.once,
            a = r.capture,
            i = n
          !Br &&
            o &&
            ((i =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, a), n.call(this, r)
              }),
            (n.__once = i)),
            e.addEventListener(t, i, Yr ? r : a)
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
  function Xr(e) {
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
  var qr = function(e) {
      return tn(
        (function(e) {
          return e && 'setState' in e ? o.findDOMNode(e) : null != e ? e : null
        })(e)
      )
    },
    Gr = 27,
    Zr = function() {}
  var Jr = function(e) {
    return e && ('current' in e ? e.current : e)
  }
  var Qr = function(e) {
    var t
    return 'undefined' == typeof document
      ? null
      : null == e
      ? tn().body
      : ('function' == typeof e && (e = e()),
        e && 'current' in e && (e = e.current),
        ((null == (t = e) ? void 0 : t.nodeType) && e) || null)
  }
  function eo(e, n) {
    var r = t.useState(function() {
        return Qr(e)
      }),
      o = r[0],
      a = r[1]
    if (!o) {
      var i = Qr(e)
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
          var t = Qr(e)
          t !== o && a(t)
        },
        [e, o]
      ),
      o
    )
  }
  function to(e) {
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
      d = e.containerPadding,
      p = e.arrowElement,
      v = e.popperConfig,
      h = void 0 === v ? {} : v,
      m = (function(e) {
        var t = {}
        return Array.isArray(e)
          ? (null == e ||
              e.forEach(function(e) {
                t[e.name] = e
              }),
            t)
          : e || t
      })(h.modifiers)
    return i({}, h, {
      placement: l,
      enabled: s,
      modifiers:
        ((a = i({}, m, {
          eventListeners: { enabled: c },
          preventOverflow: i({}, m.preventOverflow, {
            options: d
              ? i(
                  { padding: d },
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
            enabled: !!p,
            options: i({}, null == (o = m.arrow) ? void 0 : o.options, {
              element: p,
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
  var no = r.forwardRef(function(e, n) {
    var a = e.flip,
      c = e.offset,
      l = e.placement,
      u = e.containerPadding,
      f = void 0 === u ? 5 : u,
      d = e.popperConfig,
      p = void 0 === d ? {} : d,
      v = e.transition,
      h = Mn(),
      m = h[0],
      g = h[1],
      y = Mn(),
      b = y[0],
      w = y[1],
      E = xn(g, n),
      _ = eo(e.container),
      S = eo(e.target),
      D = t.useState(!e.show),
      M = D[0],
      O = D[1],
      x = (function(e, n, r) {
        var o = void 0 === r ? {} : r,
          a = o.enabled,
          c = void 0 === a || a,
          l = o.placement,
          u = void 0 === l ? 'bottom' : l,
          f = o.strategy,
          d = void 0 === f ? 'absolute' : f,
          p = o.modifiers,
          v = void 0 === p ? Ur : p,
          h = s(o, ['enabled', 'placement', 'strategy', 'modifiers']),
          m = t.useRef(),
          g = t.useCallback(function() {
            var e
            null == (e = m.current) || e.update()
          }, []),
          y = t.useCallback(function() {
            var e
            null == (e = m.current) || e.forceUpdate()
          }, []),
          b = Wr(
            t.useState({
              placement: u,
              update: g,
              forceUpdate: y,
              attributes: {},
              styles: { popper: zr(d), arrow: {} },
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
                  strategy: d,
                  modifiers: [].concat(v, [_, Ir]),
                })
            },
            [d, u, _, c]
          ),
          t.useEffect(
            function() {
              if (c && null != e && null != n)
                return (
                  (m.current = Lr(
                    e,
                    n,
                    i({}, h, {
                      placement: u,
                      strategy: d,
                      modifiers: [].concat(v, [Hr, _]),
                    })
                  )),
                  function() {
                    null != m.current &&
                      (m.current.destroy(),
                      (m.current = void 0),
                      E(function(e) {
                        return i({}, e, {
                          attributes: {},
                          styles: { popper: zr(d) },
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
        S,
        m,
        to({
          placement: l,
          enableEvents: !!e.show,
          containerPadding: f || 5,
          flip: a,
          offset: c,
          arrowElement: b,
          popperConfig: p,
        })
      ),
      k = x.styles,
      T = x.attributes,
      j = s(x, ['styles', 'attributes'])
    e.show ? M && O(!1) : e.transition || M || O(!0)
    var A,
      N,
      P,
      R,
      C,
      F,
      L,
      W,
      z,
      I,
      H,
      U,
      V = e.show || (v && !M)
    if (
      ((A = m),
      (N = e.onHide),
      (P = {
        disabled: !e.rootClose || e.rootCloseDisabled,
        clickTrigger: e.rootCloseEvent,
      }),
      (C = (R = void 0 === P ? {} : P).disabled),
      (F = R.clickTrigger),
      (L = void 0 === F ? 'click' : F),
      (W = t.useRef(!1)),
      (z = N || Zr),
      (I = t.useCallback(
        function(e) {
          var t,
            n = Jr(A)
          W.current = !(
            n &&
            ((t = e), !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)) &&
            (function(e) {
              return 0 === e.button
            })(e) &&
            !ln(n, e.target)
          )
        },
        [A]
      )),
      (H = Xr(function(e) {
        W.current || z(e)
      })),
      (U = Xr(function(e) {
        e.keyCode === Gr && z(e)
      })),
      t.useEffect(
        function() {
          if (!C && null != A) {
            var e = window.event,
              t = qr(Jr(A)),
              n = $r(t, L, I, !0),
              r = $r(t, L, function(t) {
                t !== e ? H(t) : (e = void 0)
              }),
              o = $r(t, 'keyup', function(t) {
                t !== e ? U(t) : (e = void 0)
              }),
              a = []
            return (
              'ontouchstart' in t.documentElement &&
                (a = [].slice.call(t.body.children).map(function(e) {
                  return $r(e, 'mousemove', Zr)
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
        [A, C, L, I, H, U]
      ),
      !V)
    )
      return null
    var Y = e.children(
      i({}, j, {
        show: !!e.show,
        props: i({}, T.popper, { style: k.popper, ref: E }),
        arrowProps: i({}, T.arrow, { style: k.arrow, ref: w }),
      })
    )
    if (v) {
      var B = e.onExit,
        K = e.onExiting,
        $ = e.onEnter,
        X = e.onEntering,
        q = e.onEntered
      Y = r.createElement(
        v,
        {
          in: e.show,
          appear: !0,
          onExit: B,
          onExiting: K,
          onExited: function() {
            O(!0), e.onExited && e.onExited.apply(e, arguments)
          },
          onEnter: $,
          onEntering: X,
          onEntered: q,
        },
        Y
      )
    }
    return _ ? o.createPortal(Y, _) : null
  })
  function ro(e, t) {
    var n = un(e)
    return n ? n.innerHeight : t ? e.clientHeight : vn(e).height
  }
  ;(no.displayName = 'Overlay'),
    (no.propTypes = {
      show: I.bool,
      placement: I.oneOf(Hn),
      target: I.any,
      container: I.any,
      flip: I.bool,
      children: I.func.isRequired,
      containerPadding: I.number,
      popperConfig: I.object,
      rootClose: I.bool,
      rootCloseEvent: I.oneOf(['click', 'mousedown']),
      rootCloseDisabled: I.bool,
      onHide: function(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r]
        var o
        return e.rootClose
          ? (o = I.func).isRequired.apply(o, [e].concat(n))
          : I.func.apply(I, [e].concat(n))
      },
      transition: I.elementType,
      onEnter: I.func,
      onEntering: I.func,
      onEntered: I.func,
      onExit: I.func,
      onExiting: I.func,
      onExited: I.func,
    })
  var oo,
    ao = Function.prototype.bind.call(Function.prototype.call, [].slice)
  function io(e, t) {
    if (!oo) {
      var n = document.body,
        r =
          n.matches ||
          n.matchesSelector ||
          n.webkitMatchesSelector ||
          n.mozMatchesSelector ||
          n.msMatchesSelector
      oo = function(e, t) {
        return r.call(e, t)
      }
    }
    return oo(e, t)
  }
  function so(e, t, n) {
    return void 0 === n && (n = document), $r(n, e, t, { passive: !1 })
  }
  function co(e, t) {
    var n = t.clientX,
      r = t.clientY
    return (function(e, t, n) {
      e.closest && !n && e.closest(t)
      var r = e
      do {
        if (io(r, t)) return r
        r = r.parentElement
      } while (r && r !== n && r.nodeType === document.ELEMENT_NODE)
      return null
    })(document.elementFromPoint(n, r), '.rbc-event', e)
  }
  function lo(e, t) {
    return !!co(e, t)
  }
  function uo(e) {
    var t = e
    return (
      e.touches && e.touches.length && (t = e.touches[0]),
      { clientX: t.clientX, clientY: t.clientY, pageX: t.pageX, pageY: t.pageY }
    )
  }
  var fo = (function() {
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
        (this._removeTouchMoveWindowListener = so(
          'touchmove',
          function() {},
          window
        )),
        (this._removeKeyDownListener = so('keydown', this._keyListener)),
        (this._removeKeyUpListener = so('keyup', this._keyListener)),
        (this._removeDropFromOutsideListener = so(
          'drop',
          this._dropFromOutsideListener
        )),
        (this._removeDragOverFromOutsideListener = so(
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
        return !(!t || !this.selecting) && po(t, vo(e))
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
              (o = so('touchmove', function() {
                return c()
              })),
              (a = so('touchend', function() {
                return c()
              }))
          },
          s = so('touchstart', i),
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
          t = so('mousedown', function(t) {
            e._removeInitialEventListener(),
              e._handleInitialEvent(t),
              (e._removeInitialEventListener = so(
                'mousedown',
                e._handleInitialEvent
              ))
          }),
          n = so('touchstart', function(t) {
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
        var t = uo(e),
          n = t.pageX,
          r = t.pageY,
          o = t.clientX,
          a = t.clientY
        this.emit('dropFromOutside', { x: n, y: r, clientX: o, clientY: a }),
          e.preventDefault()
      }),
      (t._dragOverFromOutsideListener = function(e) {
        var t = uo(e),
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
            n = uo(e),
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
            !(c = s) || ln(c, document.elementFromPoint(l, u)))
          ) {
            var c, l, u
            if (!this.globalMouse && s && !ln(s, e.target)) {
              var f = (function(e) {
                  void 0 === e && (e = 0)
                  'object' != typeof e &&
                    (e = { top: e, left: e, right: e, bottom: e })
                  return e
                })(0),
                d = f.top,
                p = f.left,
                v = f.bottom,
                h = f.right
              if (
                !po(
                  {
                    top: (t = vo(s)).top - d,
                    left: t.left - p,
                    bottom: t.bottom + v,
                    right: t.right + h,
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
                  ;(this._removeEndListener = so(
                    'mouseup',
                    this._handleTerminatingEvent
                  )),
                    (this._onEscListener = so(
                      'keydown',
                      this._handleTerminatingEvent
                    )),
                    (this._removeMoveListener = so(
                      'mousemove',
                      this._handleMoveEvent
                    ))
                  break
                case 'touchstart':
                  this._handleMoveEvent(e),
                    (this._removeEndListener = so(
                      'touchend',
                      this._handleTerminatingEvent
                    )),
                    (this._removeMoveListener = so(
                      'touchmove',
                      this._handleMoveEvent
                    ))
              }
          }
        }
      }),
      (t._handleTerminatingEvent = function(e) {
        var t = uo(e),
          n = t.pageX,
          r = t.pageY
        if (
          ((this.selecting = !1),
          this._removeEndListener && this._removeEndListener(),
          this._removeMoveListener && this._removeMoveListener(),
          this._initialEventData)
        ) {
          var o = !this.container || ln(this.container(), e.target),
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
        var t = uo(e),
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
            o = uo(e),
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
  function po(e, t, n) {
    void 0 === n && (n = 0)
    var r = vo(e),
      o = r.top,
      a = r.left,
      i = r.right,
      s = void 0 === i ? a : i,
      c = r.bottom,
      l = void 0 === c ? o : c,
      u = vo(t),
      f = u.top,
      d = u.left,
      p = u.right,
      v = void 0 === p ? d : p,
      h = u.bottom
    return !(
      l - n < f ||
      o + n > (void 0 === h ? f : h) ||
      s - n < d ||
      a + n > v
    )
  }
  function vo(e) {
    if (!e.getBoundingClientRect) return e
    var t = e.getBoundingClientRect(),
      n = t.left + ho('left'),
      r = t.top + ho('top')
    return {
      top: r,
      left: n,
      right: (e.offsetWidth || 0) + n,
      bottom: (e.offsetHeight || 0) + r,
    }
  }
  function ho(e) {
    return 'left' === e
      ? window.pageXOffset || document.body.scrollLeft || 0
      : 'top' === e
      ? window.pageYOffset || document.body.scrollTop || 0
      : void 0
  }
  var mo = (function(e) {
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
          s = e.reactStyle,
          c = this.state,
          l = c.selecting,
          u = c.startIdx,
          f = c.endIdx,
          d = n()
        return r.createElement(
          'div',
          { className: s['rbc-row-bg'] },
          t.map(function(e, n) {
            var c = l && n >= u && n <= f,
              p = o.dayProp(e),
              v = p.className,
              h = p.style
            return r.createElement(
              i,
              { key: n, value: e, range: t },
              r.createElement('div', {
                style: h,
                className: G(
                  s['rbc-day-bg'],
                  v,
                  c && s['rbc-selected-cell'],
                  Ge(e, d, 'day') && s['rbc-today'],
                  a && ut(a) !== ut(e) && s['rbc-off-range-bg']
                ),
              })
            )
          })
        )
      }),
      (o._selectable = function() {
        var e = this,
          t = n.findDOMNode(this),
          r = (this._selector = new fo(this.props.container, {
            longPressThreshold: this.props.longPressThreshold,
          })),
          o = function(r, o) {
            if (!lo(n.findDOMNode(e), r)) {
              var a = vo(t),
                i = e.props,
                s = i.range,
                c = i.rtl
              if (
                ((u = a),
                (d = (f = r).x),
                (p = f.y) >= u.top &&
                  p <= u.bottom &&
                  d >= u.left &&
                  d <= u.right)
              ) {
                var l = _n(a, r.x, c, s.length)
                e._selectSlot({ startIdx: l, endIdx: l, action: o, box: r })
              }
            }
            var u, f, d, p
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
            var l = vo(t),
              u = (function(e, t, n, r, o) {
                var a = -1,
                  i = -1,
                  s = r - 1,
                  c = En(t, r),
                  l = _n(t, n.x, o, r),
                  u = t.top < n.y && t.bottom > n.y,
                  f = t.top < e.y && t.bottom > e.y,
                  d = e.y > t.bottom,
                  p = t.top > e.y
                return (
                  n.top < t.top && n.bottom > t.bottom && ((a = 0), (i = s)),
                  u && (p ? ((a = 0), (i = l)) : d && ((a = l), (i = s))),
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
              return !lo(n.findDOMNode(e), t)
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
  mo.propTypes = {}
  I.object.isRequired,
    I.object,
    I.bool,
    I.object.isRequired,
    I.object.isRequired,
    I.object.isRequired,
    I.object.isRequired,
    I.func,
    I.func,
    I.func
  var go = { segments: [], selected: {} },
    yo = function(e, t) {
      var n = e.selected,
        o = (e.isAllDay, e.accessors),
        a = e.getters,
        i = e.onSelect,
        s = e.onDoubleClick,
        c = e.onKeyPress,
        l = e.localizer,
        u = e.slotMetrics,
        f = e.components,
        d = e.resizable,
        p = e.reactStyle,
        v = u.continuesPrior(t),
        h = u.continuesAfter(t)
      return r.createElement(bn, {
        event: t,
        getters: a,
        localizer: l,
        accessors: o,
        components: f,
        onSelect: i,
        onDoubleClick: s,
        onKeyPress: c,
        continuesPrior: v,
        continuesAfter: h,
        selected: wn(t, n),
        resizable: d,
        reactStyle: p,
      })
    },
    bo = function(e, t, n, o, a) {
      void 0 === o && (o = ' ')
      var i = (Math.abs(t) / e) * 100 + '%'
      return r.createElement(
        'div',
        {
          key: n,
          className: a ? a['rbc-row-segment'] : '',
          style: { WebkitFlexBasis: i, flexBasis: i, maxWidth: i },
        },
        o
      )
    },
    wo = (function(e) {
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
            i = t.reactStyle,
            s = 1
          return r.createElement(
            'div',
            { className: G(a, i['rbc-row']) },
            n.reduce(function(t, n, r) {
              var a = n.event,
                c = n.left,
                l = n.right,
                u = n.span,
                f = '_lvl_' + r,
                d = c - s,
                p = yo(e.props, a)
              return (
                d && t.push(bo(o, d, f + '_gap')),
                t.push(bo(o, u, f, p, i)),
                (s = l + 1),
                t
              )
            }, [])
          )
        }),
        t
      )
    })(r.Component)
  function Eo(e, t) {
    for (var n = e.length; n--; ) if (Dt(e[n][0], t)) return n
    return -1
  }
  ;(wo.propTypes = {}), (wo.defaultProps = i({}, go))
  var _o = Array.prototype.splice
  function So(e) {
    var t = -1,
      n = null == e ? 0 : e.length
    for (this.clear(); ++t < n; ) {
      var r = e[t]
      this.set(r[0], r[1])
    }
  }
  ;(So.prototype.clear = function() {
    ;(this.__data__ = []), (this.size = 0)
  }),
    (So.prototype.delete = function(e) {
      var t = this.__data__,
        n = Eo(t, e)
      return !(
        n < 0 ||
        (n == t.length - 1 ? t.pop() : _o.call(t, n, 1), --this.size, 0)
      )
    }),
    (So.prototype.get = function(e) {
      var t = this.__data__,
        n = Eo(t, e)
      return n < 0 ? void 0 : t[n][1]
    }),
    (So.prototype.has = function(e) {
      return Eo(this.__data__, e) > -1
    }),
    (So.prototype.set = function(e, t) {
      var n = this.__data__,
        r = Eo(n, e)
      return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
    })
  var Do,
    Mo = ue['__core-js_shared__'],
    Oo = (Do = /[^.]+$/.exec((Mo && Mo.keys && Mo.keys.IE_PROTO) || ''))
      ? 'Symbol(src)_1.' + Do
      : ''
  var xo = Function.prototype.toString
  function ko(e) {
    if (null != e) {
      try {
        return xo.call(e)
      } catch (e) {}
      try {
        return e + ''
      } catch (e) {}
    }
    return ''
  }
  var To = /^\[object .+?Constructor\]$/,
    jo = Function.prototype,
    Ao = Object.prototype,
    No = jo.toString,
    Po = Ao.hasOwnProperty,
    Ro = RegExp(
      '^' +
        No.call(Po)
          .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    )
  function Co(e) {
    return (
      !(!Mt(e) || ((t = e), Oo && Oo in t)) && (jt(e) ? Ro : To).test(ko(e))
    )
    var t
  }
  function Fo(e, t) {
    var n = (function(e, t) {
      return null == e ? void 0 : e[t]
    })(e, t)
    return Co(n) ? n : void 0
  }
  var Lo = Fo(ue, 'Map'),
    Wo = Fo(Object, 'create')
  var zo = '__lodash_hash_undefined__',
    Io = Object.prototype.hasOwnProperty
  var Ho = Object.prototype.hasOwnProperty
  var Uo = '__lodash_hash_undefined__'
  function Vo(e) {
    var t = -1,
      n = null == e ? 0 : e.length
    for (this.clear(); ++t < n; ) {
      var r = e[t]
      this.set(r[0], r[1])
    }
  }
  function Yo(e, t) {
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
  function Bo(e) {
    var t = -1,
      n = null == e ? 0 : e.length
    for (this.clear(); ++t < n; ) {
      var r = e[t]
      this.set(r[0], r[1])
    }
  }
  ;(Vo.prototype.clear = function() {
    ;(this.__data__ = Wo ? Wo(null) : {}), (this.size = 0)
  }),
    (Vo.prototype.delete = function(e) {
      var t = this.has(e) && delete this.__data__[e]
      return (this.size -= t ? 1 : 0), t
    }),
    (Vo.prototype.get = function(e) {
      var t = this.__data__
      if (Wo) {
        var n = t[e]
        return n === zo ? void 0 : n
      }
      return Io.call(t, e) ? t[e] : void 0
    }),
    (Vo.prototype.has = function(e) {
      var t = this.__data__
      return Wo ? void 0 !== t[e] : Ho.call(t, e)
    }),
    (Vo.prototype.set = function(e, t) {
      var n = this.__data__
      return (
        (this.size += this.has(e) ? 0 : 1),
        (n[e] = Wo && void 0 === t ? Uo : t),
        this
      )
    }),
    (Bo.prototype.clear = function() {
      ;(this.size = 0),
        (this.__data__ = {
          hash: new Vo(),
          map: new (Lo || So)(),
          string: new Vo(),
        })
    }),
    (Bo.prototype.delete = function(e) {
      var t = Yo(this, e).delete(e)
      return (this.size -= t ? 1 : 0), t
    }),
    (Bo.prototype.get = function(e) {
      return Yo(this, e).get(e)
    }),
    (Bo.prototype.has = function(e) {
      return Yo(this, e).has(e)
    }),
    (Bo.prototype.set = function(e, t) {
      var n = Yo(this, e),
        r = n.size
      return n.set(e, t), (this.size += n.size == r ? 0 : 1), this
    })
  var Ko = 200
  function $o(e) {
    var t = (this.__data__ = new So(e))
    this.size = t.size
  }
  ;($o.prototype.clear = function() {
    ;(this.__data__ = new So()), (this.size = 0)
  }),
    ($o.prototype.delete = function(e) {
      var t = this.__data__,
        n = t.delete(e)
      return (this.size = t.size), n
    }),
    ($o.prototype.get = function(e) {
      return this.__data__.get(e)
    }),
    ($o.prototype.has = function(e) {
      return this.__data__.has(e)
    }),
    ($o.prototype.set = function(e, t) {
      var n = this.__data__
      if (n instanceof So) {
        var r = n.__data__
        if (!Lo || r.length < Ko - 1)
          return r.push([e, t]), (this.size = ++n.size), this
        n = this.__data__ = new Bo(r)
      }
      return n.set(e, t), (this.size = n.size), this
    })
  var Xo = '__lodash_hash_undefined__'
  function qo(e) {
    var t = -1,
      n = null == e ? 0 : e.length
    for (this.__data__ = new Bo(); ++t < n; ) this.add(e[t])
  }
  function Go(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
      if (t(e[n], n, e)) return !0
    return !1
  }
  ;(qo.prototype.add = qo.prototype.push = function(e) {
    return this.__data__.set(e, Xo), this
  }),
    (qo.prototype.has = function(e) {
      return this.__data__.has(e)
    })
  var Zo = 1,
    Jo = 2
  function Qo(e, t, n, r, o, a) {
    var i = n & Zo,
      s = e.length,
      c = t.length
    if (s != c && !(i && c > s)) return !1
    var l = a.get(e),
      u = a.get(t)
    if (l && u) return l == t && u == e
    var f = -1,
      d = !0,
      p = n & Jo ? new qo() : void 0
    for (a.set(e, t), a.set(t, e); ++f < s; ) {
      var v = e[f],
        h = t[f]
      if (r) var m = i ? r(h, v, f, t, e, a) : r(v, h, f, e, t, a)
      if (void 0 !== m) {
        if (m) continue
        d = !1
        break
      }
      if (p) {
        if (
          !Go(t, function(e, t) {
            if (((i = t), !p.has(i) && (v === e || o(v, e, n, r, a))))
              return p.push(t)
            var i
          })
        ) {
          d = !1
          break
        }
      } else if (v !== h && !o(v, h, n, r, a)) {
        d = !1
        break
      }
    }
    return a.delete(e), a.delete(t), d
  }
  var ea = ue.Uint8Array
  function ta(e) {
    var t = -1,
      n = Array(e.size)
    return (
      e.forEach(function(e, r) {
        n[++t] = [r, e]
      }),
      n
    )
  }
  function na(e) {
    var t = -1,
      n = Array(e.size)
    return (
      e.forEach(function(e) {
        n[++t] = e
      }),
      n
    )
  }
  var ra = 1,
    oa = 2,
    aa = '[object Boolean]',
    ia = '[object Date]',
    sa = '[object Error]',
    ca = '[object Map]',
    la = '[object Number]',
    ua = '[object RegExp]',
    fa = '[object Set]',
    da = '[object String]',
    pa = '[object Symbol]',
    va = '[object ArrayBuffer]',
    ha = '[object DataView]',
    ma = fe ? fe.prototype : void 0,
    ga = ma ? ma.valueOf : void 0
  function ya(e, t, n) {
    var r = t(e)
    return ke(e) ? r : se(r, n(e))
  }
  function ba() {
    return []
  }
  var wa = Object.prototype.propertyIsEnumerable,
    Ea = Object.getOwnPropertySymbols,
    _a = Ea
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
              })(Ea(e), function(t) {
                return wa.call(e, t)
              }))
        }
      : ba
  var Sa = 'object' == typeof e && e && !e.nodeType && e,
    Da =
      Sa && 'object' == typeof module && module && !module.nodeType && module,
    Ma = Da && Da.exports === Sa ? ue.Buffer : void 0,
    Oa =
      (Ma ? Ma.isBuffer : void 0) ||
      function() {
        return !1
      },
    xa = {}
  function ka(e) {
    return function(t) {
      return e(t)
    }
  }
  ;(xa['[object Float32Array]'] = xa['[object Float64Array]'] = xa[
    '[object Int8Array]'
  ] = xa['[object Int16Array]'] = xa['[object Int32Array]'] = xa[
    '[object Uint8Array]'
  ] = xa['[object Uint8ClampedArray]'] = xa['[object Uint16Array]'] = xa[
    '[object Uint32Array]'
  ] = !0),
    (xa['[object Arguments]'] = xa['[object Array]'] = xa[
      '[object ArrayBuffer]'
    ] = xa['[object Boolean]'] = xa['[object DataView]'] = xa[
      '[object Date]'
    ] = xa['[object Error]'] = xa['[object Function]'] = xa[
      '[object Map]'
    ] = xa['[object Number]'] = xa['[object Object]'] = xa[
      '[object RegExp]'
    ] = xa['[object Set]'] = xa['[object String]'] = xa[
      '[object WeakMap]'
    ] = !1)
  var Ta = 'object' == typeof e && e && !e.nodeType && e,
    ja =
      Ta && 'object' == typeof module && module && !module.nodeType && module,
    Aa = ja && ja.exports === Ta && ce.process,
    Na = (function() {
      try {
        var e = ja && ja.require && ja.require('util').types
        return e || (Aa && Aa.binding && Aa.binding('util'))
      } catch (e) {}
    })(),
    Pa = Na && Na.isTypedArray,
    Ra = Pa
      ? ka(Pa)
      : function(e) {
          return Ee(e) && Nt(e.length) && !!xa[we(e)]
        },
    Ca = Object.prototype.hasOwnProperty
  function Fa(e, t) {
    var n = ke(e),
      r = !n && xe(e),
      o = !n && !r && Oa(e),
      a = !n && !r && !o && Ra(e),
      i = n || r || o || a,
      s = i
        ? (function(e, t) {
            for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n)
            return r
          })(e.length, String)
        : [],
      c = s.length
    for (var l in e)
      (!t && !Ca.call(e, l)) ||
        (i &&
          ('length' == l ||
            (o && ('offset' == l || 'parent' == l)) ||
            (a && ('buffer' == l || 'byteLength' == l || 'byteOffset' == l)) ||
            Ft(l, c))) ||
        s.push(l)
    return s
  }
  var La = Object.prototype
  function Wa(e) {
    var t = e && e.constructor
    return e === (('function' == typeof t && t.prototype) || La)
  }
  function za(e, t) {
    return function(n) {
      return e(t(n))
    }
  }
  var Ia = za(Object.keys, Object),
    Ha = Object.prototype.hasOwnProperty
  function Ua(e) {
    return Pt(e)
      ? Fa(e)
      : (function(e) {
          if (!Wa(e)) return Ia(e)
          var t = []
          for (var n in Object(e))
            Ha.call(e, n) && 'constructor' != n && t.push(n)
          return t
        })(e)
  }
  function Va(e) {
    return ya(e, Ua, _a)
  }
  var Ya = 1,
    Ba = Object.prototype.hasOwnProperty
  var Ka = Fo(ue, 'DataView'),
    $a = Fo(ue, 'Promise'),
    Xa = Fo(ue, 'Set'),
    qa = Fo(ue, 'WeakMap'),
    Ga = ko(Ka),
    Za = ko(Lo),
    Ja = ko($a),
    Qa = ko(Xa),
    ei = ko(qa),
    ti = we
  ;((Ka && '[object DataView]' != ti(new Ka(new ArrayBuffer(1)))) ||
    (Lo && '[object Map]' != ti(new Lo())) ||
    ($a && '[object Promise]' != ti($a.resolve())) ||
    (Xa && '[object Set]' != ti(new Xa())) ||
    (qa && '[object WeakMap]' != ti(new qa()))) &&
    (ti = function(e) {
      var t = we(e),
        n = '[object Object]' == t ? e.constructor : void 0,
        r = n ? ko(n) : ''
      if (r)
        switch (r) {
          case Ga:
            return '[object DataView]'
          case Za:
            return '[object Map]'
          case Ja:
            return '[object Promise]'
          case Qa:
            return '[object Set]'
          case ei:
            return '[object WeakMap]'
        }
      return t
    })
  var ni = ti,
    ri = 1,
    oi = '[object Arguments]',
    ai = '[object Array]',
    ii = '[object Object]',
    si = Object.prototype.hasOwnProperty
  function ci(e, t, n, r, o, a) {
    var i = ke(e),
      s = ke(t),
      c = i ? ai : ni(e),
      l = s ? ai : ni(t),
      u = (c = c == oi ? ii : c) == ii,
      f = (l = l == oi ? ii : l) == ii,
      d = c == l
    if (d && Oa(e)) {
      if (!Oa(t)) return !1
      ;(i = !0), (u = !1)
    }
    if (d && !u)
      return (
        a || (a = new $o()),
        i || Ra(e)
          ? Qo(e, t, n, r, o, a)
          : (function(e, t, n, r, o, a, i) {
              switch (n) {
                case ha:
                  if (
                    e.byteLength != t.byteLength ||
                    e.byteOffset != t.byteOffset
                  )
                    return !1
                  ;(e = e.buffer), (t = t.buffer)
                case va:
                  return !(
                    e.byteLength != t.byteLength || !a(new ea(e), new ea(t))
                  )
                case aa:
                case ia:
                case la:
                  return Dt(+e, +t)
                case sa:
                  return e.name == t.name && e.message == t.message
                case ua:
                case da:
                  return e == t + ''
                case ca:
                  var s = ta
                case fa:
                  var c = r & ra
                  if ((s || (s = na), e.size != t.size && !c)) return !1
                  var l = i.get(e)
                  if (l) return l == t
                  ;(r |= oa), i.set(e, t)
                  var u = Qo(s(e), s(t), r, o, a, i)
                  return i.delete(e), u
                case pa:
                  if (ga) return ga.call(e) == ga.call(t)
              }
              return !1
            })(e, t, c, n, r, o, a)
      )
    if (!(n & ri)) {
      var p = u && si.call(e, '__wrapped__'),
        v = f && si.call(t, '__wrapped__')
      if (p || v) {
        var h = p ? e.value() : e,
          m = v ? t.value() : t
        return a || (a = new $o()), o(h, m, n, r, a)
      }
    }
    return (
      !!d &&
      (a || (a = new $o()),
      (function(e, t, n, r, o, a) {
        var i = n & Ya,
          s = Va(e),
          c = s.length
        if (c != Va(t).length && !i) return !1
        for (var l = c; l--; ) {
          var u = s[l]
          if (!(i ? u in t : Ba.call(t, u))) return !1
        }
        var f = a.get(e),
          d = a.get(t)
        if (f && d) return f == t && d == e
        var p = !0
        a.set(e, t), a.set(t, e)
        for (var v = i; ++l < c; ) {
          var h = e[(u = s[l])],
            m = t[u]
          if (r) var g = i ? r(m, h, u, t, e, a) : r(h, m, u, e, t, a)
          if (!(void 0 === g ? h === m || o(h, m, n, r, a) : g)) {
            p = !1
            break
          }
          v || (v = 'constructor' == u)
        }
        if (p && !v) {
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
            (p = !1)
        }
        return a.delete(e), a.delete(t), p
      })(e, t, n, r, o, a))
    )
  }
  function li(e, t, n, r, o) {
    return (
      e === t ||
      (null == e || null == t || (!Ee(e) && !Ee(t))
        ? e != e && t != t
        : ci(e, t, n, r, li, o))
    )
  }
  var ui = 1,
    fi = 2
  function di(e) {
    return e == e && !Mt(e)
  }
  function pi(e, t) {
    return function(n) {
      return null != n && n[e] === t && (void 0 !== t || e in Object(n))
    }
  }
  function vi(e) {
    var t = (function(e) {
      for (var t = Ua(e), n = t.length; n--; ) {
        var r = t[n],
          o = e[r]
        t[n] = [r, o, di(o)]
      }
      return t
    })(e)
    return 1 == t.length && t[0][2]
      ? pi(t[0][0], t[0][1])
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
                  var f = new $o()
                  if (r) var d = r(l, u, c, e, t, f)
                  if (!(void 0 === d ? li(u, l, ui | fi, r, f) : d)) return !1
                }
              }
              return !0
            })(n, e, t)
          )
        }
  }
  var hi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    mi = /^\w*$/
  function gi(e, t) {
    if (ke(e)) return !1
    var n = typeof e
    return (
      !(
        'number' != n &&
        'symbol' != n &&
        'boolean' != n &&
        null != e &&
        !Ut(e)
      ) ||
      mi.test(e) ||
      !hi.test(e) ||
      (null != t && e in Object(t))
    )
  }
  var yi = 'Expected a function'
  function bi(e, t) {
    if ('function' != typeof e || (null != t && 'function' != typeof t))
      throw new TypeError(yi)
    var n = function() {
      var r = arguments,
        o = t ? t.apply(this, r) : r[0],
        a = n.cache
      if (a.has(o)) return a.get(o)
      var i = e.apply(this, r)
      return (n.cache = a.set(o, i) || a), i
    }
    return (n.cache = new (bi.Cache || Bo)()), n
  }
  bi.Cache = Bo
  var wi = 500
  var Ei,
    _i,
    Si,
    Di = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Mi = /\\(\\)?/g,
    Oi =
      ((Ei = function(e) {
        var t = []
        return (
          46 === e.charCodeAt(0) && t.push(''),
          e.replace(Di, function(e, n, r, o) {
            t.push(r ? o.replace(Mi, '$1') : n || e)
          }),
          t
        )
      }),
      (_i = bi(Ei, function(e) {
        return Si.size === wi && Si.clear(), e
      })),
      (Si = _i.cache),
      _i)
  function xi(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r; )
      o[n] = t(e[n], n, e)
    return o
  }
  var ki = 1 / 0,
    Ti = fe ? fe.prototype : void 0,
    ji = Ti ? Ti.toString : void 0
  function Ai(e) {
    if ('string' == typeof e) return e
    if (ke(e)) return xi(e, Ai) + ''
    if (Ut(e)) return ji ? ji.call(e) : ''
    var t = e + ''
    return '0' == t && 1 / e == -ki ? '-0' : t
  }
  function Ni(e) {
    return null == e ? '' : Ai(e)
  }
  function Pi(e, t) {
    return ke(e) ? e : gi(e, t) ? [e] : Oi(Ni(e))
  }
  var Ri = 1 / 0
  function Ci(e) {
    if ('string' == typeof e || Ut(e)) return e
    var t = e + ''
    return '0' == t && 1 / e == -Ri ? '-0' : t
  }
  function Fi(e, t) {
    for (var n = 0, r = (t = Pi(t, e)).length; null != e && n < r; )
      e = e[Ci(t[n++])]
    return n && n == r ? e : void 0
  }
  function Li(e, t) {
    return null != e && t in Object(e)
  }
  function Wi(e, t) {
    return (
      null != e &&
      (function(e, t, n) {
        for (var r = -1, o = (t = Pi(t, e)).length, a = !1; ++r < o; ) {
          var i = Ci(t[r])
          if (!(a = null != e && n(e, i))) break
          e = e[i]
        }
        return a || ++r != o
          ? a
          : !!(o = null == e ? 0 : e.length) &&
              Nt(o) &&
              Ft(i, o) &&
              (ke(e) || xe(e))
      })(e, t, Li)
    )
  }
  var zi = 1,
    Ii = 2
  function Hi(e, t) {
    return gi(e) && di(t)
      ? pi(Ci(e), t)
      : function(n) {
          var r = (function(e, t, n) {
            var r = null == e ? void 0 : Fi(e, t)
            return void 0 === r ? n : r
          })(n, e)
          return void 0 === r && r === t ? Wi(n, e) : li(t, r, zi | Ii)
        }
  }
  function Ui(e) {
    return e
  }
  function Vi(e) {
    return gi(e)
      ? ((t = Ci(e)),
        function(e) {
          return null == e ? void 0 : e[t]
        })
      : (function(e) {
          return function(t) {
            return Fi(t, e)
          }
        })(e)
    var t
  }
  function Yi(e) {
    return 'function' == typeof e
      ? e
      : null == e
      ? Ui
      : 'object' == typeof e
      ? ke(e)
        ? Hi(e[0], e[1])
        : vi(e)
      : Vi(e)
  }
  var Bi = Math.max
  function Ki(e, t) {
    return (
      void 0 === t && (t = 'day'),
      { first: e[0], last: Ke(e[e.length - 1], 1, t) }
    )
  }
  function $i(e, t, n) {
    var r = Ki(t),
      o = r.first,
      a = r.last,
      i = _t(o, a, 'day'),
      s = nt(Xe(n.start(e), 'day'), o),
      c = tt(yt(n.end(e), 'day'), a),
      l = (function(e, t, n) {
        var r = null == e ? 0 : e.length
        if (!r) return -1
        var o = null == n ? 0 : Zt(n)
        return (
          o < 0 && (o = Bi(r + o, 0)),
          (function(e, t, n, r) {
            for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o; )
              if (t(e[a], a, e)) return a
            return -1
          })(e, Yi(t), o)
        )
      })(t, function(e) {
        return Ge(e, s, 'day')
      }),
      u = _t(s, c, 'day')
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
  function Xi(e, t) {
    void 0 === t && (t = 1 / 0)
    var n,
      r,
      o,
      a = [],
      i = []
    for (n = 0; n < e.length; n++) {
      for (o = e[n], r = 0; r < a.length && Gi(o, a[r]); r++);
      r >= t ? i.push(o) : (a[r] || (a[r] = [])).push(o)
    }
    for (n = 0; n < a.length; n++)
      a[n].sort(function(e, t) {
        return e.left - t.left
      })
    return { levels: a, extra: i }
  }
  function qi(e, t, n, r) {
    var o = Xe(r.start(e), 'day'),
      a = r.end(e),
      i = et(o, n, 'day'),
      s = Ge(o, a, 'minutes') ? Je(a, t, 'minutes') : Ze(a, t, 'minutes')
    return i && s
  }
  function Gi(e, t) {
    return t.some(function(t) {
      return t.left <= e.right && t.right >= e.left
    })
  }
  function Zi(e, t, n) {
    var r = +Xe(n.start(e), 'day') - +Xe(n.start(t), 'day'),
      o = _t(n.start(e), yt(n.end(e), 'day'), 'day'),
      a = _t(n.start(t), yt(n.end(t), 'day'), 'day')
    return (
      r ||
      Math.max(a, 1) - Math.max(o, 1) ||
      !!n.allDay(t) - !!n.allDay(e) ||
      +n.start(e) - +n.start(t) ||
      +n.end(e) - +n.end(t)
    )
  }
  var Ji = Math.ceil,
    Qi = Math.max
  var es,
    ts = function(e, t, n) {
      return (
        n && 'number' != typeof n && Lt(e, t, n) && (t = n = void 0),
        (e = Gt(e)),
        void 0 === t ? ((t = e), (e = 0)) : (t = Gt(t)),
        (function(e, t, n, r) {
          for (
            var o = -1, a = Qi(Ji((t - e) / (n || 1)), 0), i = Array(a);
            a--;

          )
            (i[r ? a : ++o] = e), (e += n)
          return i
        })(e, t, (n = void 0 === n ? (e < t ? 1 : -1) : Gt(n)), es)
      )
    },
    ns = function(e, t) {
      return e.left <= t && e.right >= t
    },
    rs = function(e, t) {
      return e.filter(function(e) {
        return ns(e, t)
      }).length
    },
    os = (function(e) {
      function t(t) {
        return e.call(this, t) || this
      }
      l(t, e)
      var n = t.prototype
      return (
        (n.render = function() {
          for (
            var e = this.props,
              t = e.segments,
              n = e.slotMetrics.slots,
              o = e.reactStyle,
              a = Xi(t).levels[0],
              i = 1,
              s = 1,
              c = [];
            i <= n;

          ) {
            var l = '_lvl_' + i,
              u =
                a.filter(function(e) {
                  return ns(e, i)
                })[0] || {},
              f = u.event,
              d = u.left,
              p = u.right,
              v = u.span
            if (f) {
              var h = Math.max(0, d - s)
              if (this.canRenderSlotEvent(d, v)) {
                var m = yo(this.props, f)
                h && c.push(bo(n, h, l + '_gap')),
                  c.push(bo(n, v, l, m, o)),
                  (s = i = p + 1)
              } else
                h && c.push(bo(n, h, l + '_gap')),
                  c.push(bo(n, 1, l, this.renderShowMore(t, i), o)),
                  (s = i += 1)
            } else i++
          }
          return r.createElement('div', { className: o['rbc-row'] }, c)
        }),
        (n.canRenderSlotEvent = function(e, t) {
          var n = this.props.segments
          return ts(e, e + t).every(function(e) {
            return 1 === rs(n, e)
          })
        }),
        (n.renderShowMore = function(e, t) {
          var n,
            o,
            a,
            i,
            s = this,
            c = this.props,
            l = c.localizer,
            u = c.lang,
            f = c.range,
            d = c.newWeeks,
            p = c.reactStyle,
            v = rs(e, t),
            h = f[t - 1],
            m = h.getMonth() + 1,
            g = h.getDate()
          e =
            e.filter(function(e) {
              return (
                new Date(e.event.start).getFullYear() === h.getFullYear() &&
                new Date(e.event.start).getMonth() === h.getMonth() &&
                new Date(e.event.start).getDate() <= g &&
                new Date(e.event.end).getDate() >= g
              )
            }) || []
          var y = 0,
            b = d.filter(function(e, t) {
              if (e.key === '' + m + g) return (y = t), e
            })
          return (
            v &&
            r.createElement(
              'div',
              {
                className: p['rbc-event-wrap'],
                'data-id': 'ref' + m + g,
                'data-class': 'rbc-event-wrap',
              },
              r.createElement(
                'div',
                {
                  key: 'sm_' + t,
                  className: G(p['rbc-event-content'], p['rbc-show-more']),
                  onClick: function(e) {
                    return s.showMore(t, e, y)
                  },
                  'data-id': 'ref' + m + g,
                  'data-class': 'rbc-event-content',
                },
                l.messages[u].showMore(v)
              ),
              (null == (n = b[0]) ? void 0 : n.isMore) &&
                r.createElement(
                  'div',
                  {
                    className: G(
                      p['rbc-event-more'],
                      (null == (o = b[0]) ? void 0 : o.right) &&
                        p['rbc-event-more-right'],
                      (null == (a = b[0]) ? void 0 : a.bottom) &&
                        p['rbc-event-more-bottom']
                    ),
                    'data-id': 'ref' + m + g,
                    'data-class': 'rbc-event-more',
                  },
                  r.createElement(
                    'div',
                    {
                      className: p['more-title'],
                      'data-id': 'ref' + m + g,
                      'data-class': 'more-title',
                    },
                    m,
                    '月',
                    g,
                    '日活动'
                  ),
                  null == (i = e)
                    ? void 0
                    : i.map(function(e, t) {
                        var n = e.event
                        return r.createElement(
                          'div',
                          {
                            className: p['more-li'],
                            key: t,
                            'data-id': 'ref' + m + g,
                            'data-class': 'more-li',
                          },
                          r.createElement(
                            'a',
                            {
                              href: n.url,
                              title: n.title,
                              target: '_blank',
                              className: p['more-li-title'],
                              'data-id': 'ref' + m + g,
                            },
                            n.title
                          ),
                          r.createElement(
                            'div',
                            {
                              className: p['more-text'],
                              'data-id': 'ref' + m + g,
                              'data-class': 'more-text',
                            },
                            n.campaignTimeType,
                            '：',
                            n.campaignStartTime,
                            ' 至',
                            ' ',
                            n.campaignEndTime
                          )
                        )
                      })
                )
            )
          )
        }),
        (n.showMore = function(e, t, n) {
          t.preventDefault(),
            t.stopPropagation(),
            t.persist(),
            this.props.clickMore(e, t, n)
        }),
        t
      )
    })(r.Component)
  ;(os.propTypes = {}), (os.defaultProps = i({}, go))
  var as = function(e) {
      var t = e.children,
        n = (void 0).props.reactStyle
      return r.createElement(
        'div',
        { className: n['rbc-row-content-scroll-container'] },
        t
      )
    },
    is =
      Number.isNaN ||
      function(e) {
        return 'number' == typeof e && e != e
      }
  function ss(e, t) {
    if (e.length !== t.length) return !1
    for (var n = 0; n < e.length; n++)
      if (((r = e[n]), (o = t[n]), !(r === o || (is(r) && is(o))))) return !1
    var r, o
    return !0
  }
  function cs(e, t) {
    var n
    void 0 === t && (t = ss)
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
  var ls = function(e, t) {
      return e.left <= t && e.right >= t
    },
    us = function(e, t) {
      return e[0].range === t[0].range && e[0].events === t[0].events
    }
  var fs = (function(e) {
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
            f = ((o = n.findDOMNode(ie(t))),
            (a = '.rbc-row-bg'),
            ao(o.querySelectorAll(a)))[0]
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
          return e ? e() : n.findDOMNode(ie(t))
        }),
        (t.renderHeadingCell = function(e, n) {
          var r = t.props,
            o = r.renderHeader,
            a = r.getNow,
            i = r.reactStyle
          return o({
            date: e,
            key: 'header_' + n,
            className: G(i['rbc-date-cell'], Ge(e, a(), 'day') && i['rbc-now']),
          })
        }),
        (t.renderDummy = function() {
          var e = t.props,
            n = e.className,
            o = e.range,
            a = e.renderHeader,
            i = e.showAllEvents,
            s = e.reactStyle
          return r.createElement(
            'div',
            { className: n },
            r.createElement(
              'div',
              {
                className: G(
                  s['rbc-row-content'],
                  i && s['rbc-row-content-scrollable']
                ),
                'data-class': 'rbc-row-content',
              },
              a &&
                r.createElement(
                  'div',
                  {
                    className: s['rbc-row'],
                    ref: t.createHeadingRef,
                    'data-class': 'rbc-row',
                  },
                  o.map(t.renderHeadingCell)
                ),
              r.createElement(
                'div',
                { className: s['rbc-row'], ref: t.createEventRef },
                r.createElement(
                  'div',
                  { className: s['rbc-row-segment'] },
                  r.createElement(
                    'div',
                    { className: s['rbc-event'] },
                    r.createElement(
                      'div',
                      { className: s['rbc-event-content'] },
                      ' '
                    )
                  )
                )
              )
            )
          )
        }),
        (t.slotMetrics = (function e() {
          return cs(function(t) {
            for (
              var n = t.range,
                r = t.events,
                o = t.maxRows,
                a = t.minRows,
                s = t.accessors,
                c = Ki(n),
                l = c.first,
                u = c.last,
                f = r.map(function(e) {
                  return $i(e, n, s)
                }),
                d = Xi(f, Math.max(o - 1, 1)),
                p = d.levels,
                v = d.extra;
              p.length < a;

            )
              p.push([])
            return {
              first: l,
              last: u,
              levels: p,
              extra: v,
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
                  return Ge(t, e, 'day')
                })
              },
              getEventsForSlot: function(e) {
                return f
                  .filter(function(t) {
                    return ls(t, e)
                  })
                  .map(function(e) {
                    return e.event
                  })
              },
              continuesPrior: function(e) {
                return Qe(s.start(e), l, 'day')
              },
              continuesAfter: function(e) {
                var t = s.end(e)
                return Ge(s.start(e), t, 'minutes')
                  ? Je(t, u, 'minutes')
                  : Ze(t, u, 'minutes')
              },
            }
          }, us)
        })()),
        t
      )
    }
    l(t, e)
    var o = t.prototype
    return (
      (o.getRowLimit = function() {
        var e = ro(this.eventRow),
          t = this.headingRow ? ro(this.headingRow) : 0,
          r = ro(n.findDOMNode(this)) - t
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
          d = e.getters,
          p = e.components,
          v = e.getNow,
          h = e.renderHeader,
          m = e.onSelect,
          g = e.localizer,
          y = e.onSelectStart,
          b = e.onSelectEnd,
          w = e.onDoubleClick,
          E = e.onKeyPress,
          _ = e.resourceId,
          S = e.longPressThreshold,
          D = e.isAllDay,
          M = e.resizable,
          O = e.showAllEvents,
          x = e.lang,
          k = e.newWeeks,
          T = e.clickMore,
          j = e.reactStyle
        if (u) return this.renderDummy()
        var A = this.slotMetrics(this.props),
          N = A.levels,
          P = A.extra,
          R = O ? as : a,
          C = p.weekWrapper,
          F = {
            selected: c,
            accessors: f,
            getters: d,
            localizer: g,
            components: p,
            onSelect: m,
            onDoubleClick: w,
            onKeyPress: E,
            resourceId: _,
            slotMetrics: A,
            resizable: M,
            reactStyle: j,
          }
        return r.createElement(
          'div',
          { className: s, role: 'rowgroup' },
          r.createElement(mo, {
            date: t,
            getNow: v,
            rtl: n,
            range: o,
            selectable: l,
            container: this.getContainer,
            getters: d,
            onSelectStart: y,
            onSelectEnd: b,
            onSelectSlot: this.handleSelectSlot,
            components: p,
            longPressThreshold: S,
            resourceId: _,
            reactStyle: j,
          }),
          r.createElement(
            'div',
            {
              className: G(
                j['rbc-row-content'],
                O && j['rbc-row-content-scrollable']
              ),
              role: 'row',
            },
            h &&
              r.createElement(
                'div',
                { className: j['rbc-row'], ref: this.createHeadingRef },
                o.map(this.renderHeadingCell)
              ),
            r.createElement(
              R,
              null,
              r.createElement(
                C,
                i({ isAllDay: D }, F),
                N.map(function(e, t) {
                  return r.createElement(
                    wo,
                    i({ key: t, segments: e }, F, { reactStyle: j })
                  )
                }),
                !!P.length &&
                  r.createElement(
                    os,
                    i(
                      {
                        segments: P,
                        lang: x,
                        range: o,
                        newWeeks: k,
                        onShowMore: this.handleShowMore,
                        clickMore: T,
                        newMoreShow: k,
                        reactStyle: j,
                      },
                      F
                    )
                  )
              )
            )
          )
        )
      }),
      t
    )
  })(r.Component)
  ;(fs.propTypes = {}), (fs.defaultProps = { minRows: 0, maxRows: 1 / 0 })
  var ds = function(e) {
    var t = e.label
    return r.createElement(
      'span',
      { role: 'columnheader', 'aria-sort': 'none' },
      t
    )
  }
  ds.propTypes = {}
  var ps = function(e) {
    var t = e.label,
      n = e.onDrillDown,
      o = e.reactStyle
    return (
      (t = t.replace(/^0/, '')),
      r.createElement(
        'div',
        { className: o['current-text-wrap'], role: 'cell', onClick: n },
        r.createElement('span', { className: o['current-text'] }, t)
      )
    )
  }
  ps.propTypes = {}
  var vs = ['date', 'className'],
    hs = function(e, t, n, r) {
      return e.filter(function(e) {
        return qi(e, t, n, r)
      })
    },
    ms = !0,
    gs = (function(e) {
      function t() {
        for (var t, o = arguments.length, a = new Array(o), c = 0; c < o; c++)
          a[c] = arguments[c]
        return (
          ((t =
            e.call.apply(e, [this].concat(a)) ||
            this).getContainer = function() {
            return n.findDOMNode(ie(t))
          }),
          (t.clickMore = function(e, n, r) {
            var o = t.props.reactStyle,
              a = t.state.newWeeks
            ;(a = a.map(function(e, t) {
              return (
                (e.isMore = !1),
                (e.right = !1),
                (e.bottom = !1),
                t === r && (e.isMore = !0),
                e
              )
            })),
              t.setState({ newWeeks: a, newWeeksIndex: r }, function() {
                var e = document.getElementsByClassName(o['rbc-event-more'])[0],
                  a = e.offsetHeight,
                  i = e.offsetWidth,
                  s =
                    document.documentElement.scrollLeft ||
                    document.body.scrollLeft,
                  c =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop,
                  l = window.innerWidth + s,
                  u = window.innerHeight + c,
                  f = n.pageX,
                  d = n.pageY,
                  p = f >= l - i,
                  v = d >= u - a,
                  h = t.state.newWeeks
                ;(h = h.map(function(e, t) {
                  return (
                    (e.right = !1),
                    (e.bottom = !1),
                    t === r && ((e.right = p), (e.bottom = v)),
                    e
                  )
                })),
                  t.setState({ newWeeks: h })
              })
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
              d = o.longPressThreshold,
              p = o.accessors,
              v = o.getters,
              h = o.showAllEvents,
              m = o.lang,
              g = o.label,
              y = o.reactStyle,
              b = t.state,
              w = b.needLimitMeasure,
              E = b.rowLimit,
              _ = b.newWeeks
            return (
              (a = hs(a, e[0], e[e.length - 1], p)).sort(function(e, t) {
                return Zi(e, t, p)
              }),
              r.createElement(fs, {
                key: n,
                ref: 0 === n ? t.slotRowRef : void 0,
                container: t.getContainer,
                className: y['rbc-month-row'],
                getNow: c,
                date: u,
                range: e,
                events: a,
                maxRows: h ? 1 / 0 : E,
                selected: l,
                selectable: s,
                components: i,
                accessors: p,
                getters: v,
                localizer: f,
                renderHeader: t.readerDateHeading,
                renderForMeasure: w,
                onShowMore: t.handleShowMore,
                onSelect: t.handleSelectEvent,
                onDoubleClick: t.handleDoubleClickEvent,
                onKeyPress: t.handleKeyPressEvent,
                onSelectSlot: t.handleSelectSlot,
                longPressThreshold: d,
                rtl: t.props.rtl,
                resizable: t.props.resizable,
                showAllEvents: h,
                lang: m,
                label: g,
                newWeeks: _,
                clickMore: t.clickMore,
                reactStyle: y,
              })
            )
          }),
          (t.currectData = function(e, t) {
            var n = function(e) {
                return new Date(e.start)
              },
              r = function(e) {
                return new Date(e.end)
              }
            return (
              t.filter(function(t) {
                return (
                  n(t).getFullYear() === e.getFullYear() &&
                  n(t).getMonth() === e.getMonth() &&
                  n(t).getDate() <= e.getDate() &&
                  r(t).getDate() >= e.getDate() &&
                  (n(t).getDate() === r(t).getDate() ||
                    (n(t).getDate() !== r(t).getDate() &&
                      Date.parse(t.end) >
                        Date.parse(
                          e.getFullYear() +
                            '-' +
                            (e.getMonth() + 1) +
                            '-' +
                            e.getDate()
                        )))
                )
              }) || []
            )
          }),
          (t.readerDateHeading = function(e) {
            var n,
              o,
              a = e.date,
              c = e.className,
              l = s(e, vs),
              u = t.props,
              f = u.date,
              d = u.getDrilldownView,
              p = u.localizer,
              v = u.events,
              h = u.reactStyle,
              m = t.state.clickActiveEle,
              g = ut(a) !== ut(f),
              y = Ge(a, f, 'day'),
              b = d(a),
              w = p.format(a, 'dateFormat'),
              E = t.props.components.dateHeader || ps,
              _ = '' + (a.getMonth() + 1) + a.getDate(),
              S = m.filter(function(e) {
                if (e.key === _) return e
              })
            return r.createElement(
              'div',
              i({}, l, {
                className: G(
                  c,
                  g && h['rbc-off-range'],
                  y && h['rbc-current'],
                  (null == (n = t.currectData(a, v)) ? void 0 : n.length) > 0 &&
                    h['rbc-data'],
                  (null == (o = S[0]) ? void 0 : o.value) && h['rbc-active']
                ),
                role: 'cell',
              }),
              r.createElement(E, {
                label: w,
                date: a,
                drilldownView: b,
                isOffRange: g,
                reactStyle: h,
                onDrillDown: function(e) {
                  return t.handleHeadingClick(a, v, e, _)
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
          (t.handleHeadingClick = function(e, n, r, o) {
            r.preventDefault()
            var a = t.state.clickActiveEle
            a = a.map(function(e) {
              return (e.value = !1), e.key === o && (e.value = !0), e
            })
            var i =
              e.getFullYear() +
              '年' +
              (e.getMonth() + 1) +
              '月' +
              e.getDate() +
              '日活动'
            t.setState({
              clickActiveEle: a,
              clickActiveDate: { list: t.currectData(e, n), date: i },
            })
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
              d = s.doShowMoreDrillDown
            if ((t.clearSelection(), c)) {
              var p = gn(o, n.findDOMNode(ie(t)))
              t.setState({
                overlay: { date: r, events: e, position: p, target: i },
              })
            } else d && ee(l, [r, f(r) || J.DAY])
            ee(u, [e, r, a])
          }),
          (t.overlayDisplay = function() {
            t.setState({ overlay: null })
          }),
          (t._bgRows = []),
          (t._pendingSelection = []),
          (t.slotRowRef = r.createRef()),
          (t.state = {
            rowLimit: 5,
            needLimitMeasure: !0,
            newWeeks: [],
            newWeeksIndex: 0,
            clickActiveEle: [],
            clickActiveDate: { list: [], date: null },
          }),
          t
        )
      }
      l(t, e)
      var o = t.prototype
      return (
        (o.UNSAFE_componentWillReceiveProps = function(e) {
          var t = e.date,
            n = e.events,
            r =
              t.getFullYear() +
              '年' +
              (t.getMonth() + 1) +
              '月' +
              t.getDate() +
              '日活动'
          this.setState({
            needLimitMeasure: !Ge(t, this.props.date, 'month'),
            clickActiveDate: {
              list: ms ? this.currectData(t, n) : [],
              date: ms ? r : null,
            },
          }),
            (ms = !1)
        }),
        (o.updateData = function() {
          var e = this.props,
            t = e.date,
            n = en(gt(t, e.localizer), 7).map(function(e) {
              return e.map(function(e) {
                return (e = '' + (e.getMonth() + 1) + e.getDate())
              })
            }),
            r = '' + (t.getMonth() + 1) + t.getDate(),
            o = Ne(n).map(function(e) {
              return (e = { key: e, value: e === r && ms })
            })
          ;(n = Ne(n).map(function(e) {
            return (e = { key: e, isMore: !1, right: !1, bottom: !1 })
          })),
            this.setState({ newWeeks: n, clickActiveEle: o })
        }),
        (o.componentDidMount = function() {
          var e = this
          this.state.needLimitMeasure && this.measureRowLimit(this.props),
            document.addEventListener(
              'click',
              function(t) {
                return e.hideClickMore(t)
              },
              !1
            ),
            this.updateData()
        }),
        (o.componentDidUpdate = function() {
          this.state.needLimitMeasure &&
            (this.measureRowLimit(this.props),
            this.updateData(),
            this.setState({ clickActiveDate: { list: [], date: null } }))
        }),
        (o.activeUrl = function(e, t) {
          e.preventDefault(), (window.location.href = t)
        }),
        (o.render = function() {
          var e,
            t,
            n = this,
            o = this.state.clickActiveDate,
            a = this.props,
            i = a.date,
            s = a.localizer,
            c = a.className,
            l = a.loading,
            u = a.reactStyle,
            f = en(gt(i, s), 7)
          return (
            (this._weekCount = f.length),
            r.createElement(
              r.Fragment,
              null,
              r.createElement(
                'div',
                {
                  className: G(
                    u['rbc-month-view'],
                    c,
                    l && u['rbc-month-view-loading']
                  ),
                  role: 'table',
                  'aria-label': 'Month View',
                  'data-class': 'rbc-month-view',
                },
                r.createElement(
                  'div',
                  {
                    className: G(u['rbc-row'], u['rbc-month-header']),
                    role: 'row',
                    'data-class': 'rbc-row',
                  },
                  this.renderHeaders(f[0])
                ),
                f.map(this.renderWeek),
                this.props.popup && this.renderOverlay()
              ),
              o.date &&
                r.createElement(
                  'div',
                  {
                    className: u['wap-render-list'],
                    'data-class': 'wap-render-list',
                  },
                  r.createElement(
                    'div',
                    { className: u['active-title'] },
                    o.date
                  ),
                  (null == (e = o.list) ? void 0 : e.length) > 0
                    ? null == (t = o.list)
                      ? void 0
                      : t.map(function(e, t) {
                          return r.createElement(
                            'div',
                            {
                              className: u['active-li'],
                              key: t,
                              'data-class': 'active-li',
                            },
                            r.createElement(
                              'a',
                              {
                                href: e.url,
                                title: e.title,
                                target: '_blank',
                                className: u['active-li-title'],
                                'data-class': 'active-li-title',
                                onClick: function(t) {
                                  n.activeUrl(t, e.url)
                                },
                              },
                              e.title
                            ),
                            r.createElement(
                              'div',
                              {
                                className: u['active-text'],
                                'data-class': 'active-text',
                              },
                              e.campaignTimeType,
                              '：',
                              e.campaignStartTime,
                              ' 至',
                              ' ',
                              e.campaignEndTime
                            )
                          )
                        })
                    : r.createElement(
                        'div',
                        {
                          className: u['active-li-none'],
                          'data-class': 'active-li-none',
                        },
                        '暂无活动'
                      )
                )
            )
          )
        }),
        (o.hideClickMore = function(e) {
          var t = this.state,
            n = t.newWeeks,
            r = t.newWeeksIndex,
            o = n
          e.target.getAttribute('data-id') !== 'ref' + o[r].key &&
            ((o[this.state.newWeeksIndex].isMore = !1),
            this.setState({ newWeeks: o }))
        }),
        (o.renderHeaders = function(e) {
          var t = this.props,
            n = t.localizer,
            o = t.components,
            a = t.lang,
            i = t.reactStyle,
            s = e[0],
            c = e[e.length - 1],
            l = o.header || ds
          a = a || 'en'
          var u = n.messages[a].weeks
          return bt(s, c, 'day').map(function(e, t) {
            return r.createElement(
              'div',
              {
                key: 'header_' + t,
                className: i['rbc-header'],
                'data-class': 'rbc-header',
              },
              r.createElement(l, { date: e, localizer: n, label: u[t] })
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
            u = n.popupOffset,
            f = n.reactStyle
          return r.createElement(
            no,
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
              var d = n.props
              return r.createElement(
                Dn,
                i({}, d, {
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
                  reactStyle: f,
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
  ;(gs.propTypes = {}),
    (gs.range = function(e, t) {
      var n = t.localizer
      return { start: ht(e, n), end: mt(e, n) }
    }),
    (gs.navigate = function(e, t) {
      switch (t) {
        case Z.PREVIOUS:
          return Ke(e, -1, 'month')
        case Z.NEXT:
          return Ke(e, 1, 'month')
        default:
          return e
      }
    }),
    (gs.title = function(e, t) {
      return t.localizer.format(e, 'monthHeaderFormat')
    })
  var ys = new Date().getTime()
  var bs = 'clearTimeout',
    ws = function(e) {
      var t = new Date().getTime(),
        n = Math.max(0, 16 - (t - ys)),
        r = setTimeout(e, n)
      return (ys = t), r
    },
    Es = function(e, t) {
      return e + (e ? t[0].toUpperCase() + t.substr(1) : t) + 'AnimationFrame'
    }
  Vr &&
    ['', 'webkit', 'moz', 'o', 'ms'].some(function(e) {
      var t = Es(e, 'request')
      return (
        t in window &&
          ((bs = Es(e, 'cancel')),
          (ws = function(e) {
            return window[t](e)
          })),
        !!ws
      )
    })
  var _s = function(e) {
      'function' == typeof window[bs] && window[bs](e)
    },
    Ss = ws,
    Ds = function(e, t) {
      return e.getTimezoneOffset() - t.getTimezoneOffset()
    },
    Ms = function(e, t, n, r) {
      return +Xe(e, 'minutes') + '' + +Xe(t, 'minutes') + n + '-' + r
    }
  function Os(e) {
    for (
      var t = e.min,
        n = e.max,
        r = e.step,
        o = e.timeslots,
        a = Ms(t, n, r, o),
        i = Xe(t, 'day'),
        s = Ds(i, t),
        c = 1 + _t(t, n, 'minutes') + Ds(t, n),
        l = _t(i, t, 'minutes') + s,
        u = Math.ceil((c - 1) / (r * o)),
        f = u * o,
        d = new Array(u),
        p = new Array(f),
        v = 0;
      v < u;
      v++
    ) {
      d[v] = new Array(o)
      for (var h = 0; h < o; h++) {
        var m = v * o + h,
          g = m * r
        p[m] = d[v][h] = new Date(
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
    var y = p.length * r
    function b(e) {
      var n = _t(t, e, 'minutes') + Ds(t, e)
      return Math.min(n, c)
    }
    return (
      p.push(
        new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, l + y, 0, 0)
      ),
      {
        groups: d,
        update: function(e) {
          return Ms(e) !== a ? Os(e) : this
        },
        dateIsInGroup: function(e, t) {
          var r = d[t + 1]
          return rt(e, d[t][0], r ? r[0] : n, 'minutes')
        },
        nextSlot: function(e) {
          var t = p[Math.min(p.indexOf(e) + 1, p.length - 1)]
          return t === e && (t = Ke(e, r, 'minutes')), t
        },
        closestSlotToPosition: function(e) {
          var t = Math.min(p.length - 1, Math.max(0, Math.floor(e * f)))
          return p[t]
        },
        closestSlotFromPoint: function(e, t) {
          var n = Math.abs(t.top - t.bottom)
          return this.closestSlotToPosition((e.y - t.top) / n)
        },
        closestSlotFromDate: function(e, n) {
          if ((void 0 === n && (n = 0), Qe(e, t, 'minutes'))) return p[0]
          var o = _t(t, e, 'minutes')
          return p[(o - (o % r)) / r + n]
        },
        startsBeforeDay: function(e) {
          return Qe(e, t, 'day')
        },
        startsAfterDay: function(e) {
          return Ze(e, n, 'day')
        },
        startsBefore: function(e) {
          return Qe(wt(t, e), t, 'minutes')
        },
        startsAfter: function(e) {
          return Ze(wt(n, e), n, 'minutes')
        },
        getRange: function(e, o, a, i) {
          a || (e = tt(n, nt(t, e))), i || (o = tt(n, nt(t, o)))
          var s = b(e),
            c = b(o),
            l =
              c > r * f && !Ge(n, o)
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
  function xs(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n]
      ;(r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r)
    }
  }
  var ks = (function(e) {
    return function(t, n, r) {
      for (var o = -1, a = Object(t), i = r(t), s = i.length; s--; ) {
        var c = i[e ? s : ++o]
        if (!1 === n(a[c], c, a)) break
      }
      return t
    }
  })()
  function Ts(e, t) {
    return e && ks(e, t, Ua)
  }
  var js = (function(e, t) {
    return function(n, r) {
      if (null == n) return n
      if (!Pt(n)) return e(n, r)
      for (
        var o = n.length, a = t ? o : -1, i = Object(n);
        (t ? a-- : ++a < o) && !1 !== r(i[a], a, i);

      );
      return n
    }
  })(Ts)
  function As(e, t) {
    if (e !== t) {
      var n = void 0 !== e,
        r = null === e,
        o = e == e,
        a = Ut(e),
        i = void 0 !== t,
        s = null === t,
        c = t == t,
        l = Ut(t)
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
  function Ns(e, t, n) {
    t = t.length
      ? xi(t, function(e) {
          return ke(e)
            ? function(t) {
                return Fi(t, 1 === e.length ? e[0] : e)
              }
            : e
        })
      : [Ui]
    var r = -1
    return (
      (t = xi(t, ka(Yi))),
      (function(e, t) {
        var n = e.length
        for (e.sort(t); n--; ) e[n] = e[n].value
        return e
      })(
        (function(e, t) {
          var n = -1,
            r = Pt(e) ? Array(e.length) : []
          return (
            js(e, function(e, o, a) {
              r[++n] = t(e, o, a)
            }),
            r
          )
        })(e, function(e, n, o) {
          return {
            criteria: xi(t, function(t) {
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
              var c = As(o[r], a[r])
              if (c) return r >= s ? c : c * ('desc' == n[r] ? -1 : 1)
            }
            return e.index - t.index
          })(e, t, n)
        }
      )
    )
  }
  var Ps = Math.max
  function Rs(e, t, n) {
    return (
      (t = Ps(void 0 === t ? e.length - 1 : t, 0)),
      function() {
        for (
          var r = arguments, o = -1, a = Ps(r.length - t, 0), i = Array(a);
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
  var Cs = (function() {
      try {
        var e = Fo(Object, 'defineProperty')
        return e({}, '', {}), e
      } catch (e) {}
    })(),
    Fs = Cs
      ? function(e, t) {
          return Cs(e, 'toString', {
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
      : Ui,
    Ls = 800,
    Ws = 16,
    zs = Date.now
  var Is = (function(e) {
    var t = 0,
      n = 0
    return function() {
      var r = zs(),
        o = Ws - (r - n)
      if (((n = r), o > 0)) {
        if (++t >= Ls) return arguments[0]
      } else t = 0
      return e.apply(void 0, arguments)
    }
  })(Fs)
  function Hs(e, t) {
    return Is(Rs(e, t, Ui), e + '')
  }
  var Us = Hs(function(e, t) {
      if (null == e) return []
      var n = t.length
      return (
        n > 1 && Lt(e, t[0], t[1])
          ? (t = [])
          : n > 2 && Lt(t[0], t[1], t[2]) && (t = [t[0]]),
        Ns(e, Ae(t, 1), [])
      )
    }),
    Vs = (function() {
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
        ]) && xs(t.prototype, n),
        r && xs(t, r),
        e
      )
    })()
  function Ys(e, t, n) {
    return (
      Math.abs(t.start - e.start) < n || (t.start > e.start && t.start < e.end)
    )
  }
  function Bs(e) {
    for (
      var t = e.events,
        n = e.minimumStartDifference,
        r = e.slotMetrics,
        o = e.accessors,
        a = (function(e) {
          for (
            var t = Us(e, [
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
            return new Vs(e, { slotMetrics: r, accessors: o })
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
            Ys(r.rows[s], t, n) && (o = r.rows[s])
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
  function Ks(e, t, n) {
    for (var r = 0; r < e.friends.length; ++r)
      if (!(n.indexOf(e.friends[r]) > -1)) {
        ;(t = t > e.friends[r].idx ? t : e.friends[r].idx), n.push(e.friends[r])
        var o = Ks(e.friends[r], t, n)
        t = t > o ? t : o
      }
    return t
  }
  var $s = {
    overlap: Bs,
    'no-overlap': function(e) {
      var t = Bs({
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
        for (var d = t[f], p = [], v = 0; v < 100; ++v) p.push(1)
        for (var h = 0; h < d.friends.length; ++h)
          void 0 !== d.friends[h].idx && (p[d.friends[h].idx] = 0)
        d.idx = p.indexOf(1)
      }
      for (var m = 0; m < t.length; ++m) {
        var g
        if (!t[m].size) {
          var y = []
          ;(g = 100 / (Ks(t[m], 0, y) + 1)), (t[m].size = g)
          for (var b = 0; b < y.length; ++b) y[b].size = g
        }
      }
      for (var w = 0; w < t.length; ++w) {
        var E = t[w]
        E.style.left = E.idx * E.size
        for (var _ = 0, S = 0; S < E.friends.length; ++S) {
          var D = E.friends[S]
          _ = _ > D ? _ : D
        }
        _ <= E.idx && (E.size = 100 - E.idx * E.size)
        var M = 0 === E.idx ? 0 : 3
        ;(E.style.width = 'calc(' + E.size + '% - ' + M + 'px)'),
          (E.style.height = 'calc(' + E.style.height + '% - 2px)'),
          (E.style.xOffset = 'calc(' + E.style.left + '% + ' + M + 'px)')
      }
      return t
    },
  }
  var Xs = (function(e) {
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
  function qs(e) {
    return 'string' == typeof e ? e : e + '%'
  }
  function Gs(e) {
    var t,
      n,
      o = e.style,
      a = e.className,
      s = e.event,
      c = e.accessors,
      l = e.rtl,
      u = e.selected,
      f = e.label,
      d = e.continuesEarlier,
      p = e.continuesLater,
      v = e.getters,
      h = e.onClick,
      m = e.onDoubleClick,
      g = e.isBackgroundEvent,
      y = e.onKeyPress,
      b = e.components,
      w = b.event,
      E = b.eventWrapper,
      _ = c.title(s),
      S = c.tooltip(s),
      D = c.end(s),
      M = c.start(s),
      O = v.eventProp(s, M, D, u),
      x = o.height,
      k = o.top,
      T = o.width,
      j = o.xOffset,
      A = [
        r.createElement('div', { key: '1', className: 'rbc-event-label' }, f),
        r.createElement(
          'div',
          { key: '2', className: 'rbc-event-content' },
          w ? r.createElement(w, { event: s, title: _ }) : _
        ),
      ],
      N = i(
        {},
        O.style,
        g
          ? (((t = {
              top: qs(k),
              height: qs(x),
              width: 'calc(' + T + ' + 10px)',
            })[l ? 'right' : 'left'] = qs(Math.max(0, j))),
            t)
          : (((n = { top: qs(k), width: qs(T), height: qs(x) })[
              l ? 'right' : 'left'
            ] = qs(j)),
            n)
      )
    return r.createElement(
      E,
      i({ type: 'time' }, e),
      r.createElement(
        'div',
        {
          onClick: h,
          onDoubleClick: m,
          style: N,
          onKeyPress: y,
          title: S ? ('string' == typeof f ? f + ': ' : '') + S : void 0,
          className: G(
            g ? 'rbc-background-event' : 'rbc-event',
            a,
            O.className,
            {
              'rbc-selected': u,
              'rbc-event-continues-earlier': d,
              'rbc-event-continues-later': p,
            }
          ),
        },
        A
      )
    )
  }
  Xs.propTypes = {}
  var Zs = function(e) {
      var t = e.children,
        n = e.className,
        o = e.style
      return r.createElement('div', { className: n, style: o }, t)
    },
    Js = ['dayProp'],
    Qs = ['eventContainerWrapper'],
    ec = (function(e) {
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
              d = a.step,
              p = a.timeslots,
              v = a.dayLayoutAlgorithm,
              h = a.resizable,
              m = ie(t).slotMetrics,
              g = l.messages
            return (function(e) {
              e.events, e.minimumStartDifference, e.slotMetrics, e.accessors
              var t,
                n = e.dayLayoutAlgorithm,
                r = n
              return (
                n in $s && (r = $s[n]),
                (t = r) && t.constructor && t.call && t.apply
                  ? r.apply(this, arguments)
                  : []
              )
            })({
              events: n,
              accessors: c,
              slotMetrics: m,
              minimumStartDifference: Math.ceil((d * p) / 2),
              dayLayoutAlgorithm: v,
            }).map(function(e, n) {
              var a,
                d = e.event,
                p = e.style,
                v = c.end(d),
                y = c.start(d),
                b = 'eventTimeRangeFormat',
                w = m.startsBeforeDay(y),
                E = m.startsAfterDay(v)
              w
                ? (b = 'eventTimeRangeEndFormat')
                : E && (b = 'eventTimeRangeStartFormat'),
                (a = w && E ? g.allDay : l.format({ start: y, end: v }, b))
              var _ = w || m.startsBefore(y),
                S = E || m.startsAfter(v)
              return r.createElement(Gs, {
                style: p,
                event: d,
                label: a,
                key: 'evt_' + n,
                getters: u,
                rtl: i,
                components: f,
                continuesEarlier: _,
                continuesLater: S,
                accessors: c,
                selected: wn(d, s),
                onClick: function(e) {
                  return t._select(d, e)
                },
                onDoubleClick: function(e) {
                  return t._doubleClick(d, e)
                },
                isBackgroundEvent: o,
                onKeyPress: function(e) {
                  return t._keyPress(d, e)
                },
                resizable: h,
              })
            })
          }),
          (t._selectable = function() {
            var e = n.findDOMNode(ie(t)),
              r = (t._selector = new fo(
                function() {
                  return n.findDOMNode(ie(t))
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
                  ((Ge(r.startDate, i, 'minutes') &&
                    Ge(r.endDate, s, 'minutes')) ||
                    !1 ===
                      n({ start: i, end: s, resourceId: t.props.resource }))) ||
                  (t.state.start === o.start &&
                    t.state.end === o.end &&
                    t.state.selecting === o.selecting) ||
                  t.setState(o)
              },
              a = function(n) {
                var r = t.slotMetrics.closestSlotFromPoint(n, vo(e))
                t.state.selecting || (t._initialSlot = r)
                var o = t._initialSlot
                et(o, r)
                  ? (r = t.slotMetrics.nextSlot(r))
                  : Ze(o, r) && (o = t.slotMetrics.nextSlot(o))
                var a = t.slotMetrics.getRange(tt(o, r), nt(o, r))
                return i({}, a, {
                  selecting: !0,
                  top: a.top + '%',
                  height: a.height + '%',
                })
              },
              s = function(e, r) {
                if (!lo(n.findDOMNode(ie(t)), e)) {
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
                  return !lo(n.findDOMNode(ie(t)), e)
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
              et(s, r);

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
          (t.slotMetrics = Os(t.props)),
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
          var n = !Ge(e.getNow(), this.props.getNow(), 'minutes')
          if (e.isNow !== this.props.isNow || n) {
            if ((this.clearTimeIndicatorInterval(), this.props.isNow)) {
              var r =
                !n &&
                Ge(e.date, this.props.date, 'minutes') &&
                t.timeIndicatorPosition === this.state.timeIndicatorPosition
              this.setTimeIndicatorPositionUpdateInterval(r)
            }
          } else
            !this.props.isNow ||
              (Ge(e.min, this.props.min, 'minutes') &&
                Ge(e.max, this.props.max, 'minutes')) ||
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
            d = s(u, Js),
            p = e.components,
            v = p.eventContainerWrapper,
            h = s(p, Qs),
            m = this.slotMetrics,
            g = this.state,
            y = g.selecting,
            b = g.top,
            w = g.height,
            E = { start: g.startDate, end: g.endDate },
            _ = f(n),
            S = _.className,
            D = _.style,
            M = h.dayColumnWrapper || Zs
          return r.createElement(
            M,
            {
              date: t,
              style: D,
              className: G(
                S,
                'rbc-day-slot',
                'rbc-time-column',
                a && 'rbc-now',
                a && 'rbc-today',
                y && 'rbc-slot-selecting'
              ),
            },
            m.groups.map(function(e, t) {
              return r.createElement(Xs, {
                key: t,
                group: e,
                resource: i,
                getters: d,
                components: h,
              })
            }),
            r.createElement(
              v,
              {
                localizer: l,
                resource: i,
                accessors: c,
                getters: d,
                components: h,
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
  ;(ec.propTypes = {}),
    (ec.defaultProps = { dragThroughEvents: !0, timeslots: 2 })
  var tc,
    nc = (function(e) {
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
          (t.slotMetrics = Os({ min: s, max: c, timeslots: l, step: u })), t
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
              return r.createElement(Xs, {
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
  function rc(e, t) {
    var n = un(e)
    return n ? n.innerWidth : t ? e.clientWidth : vn(e).width
  }
  function oc(e) {
    if (((!tc && 0 !== tc) || e) && Vr) {
      var t = document.createElement('div')
      ;(t.style.position = 'absolute'),
        (t.style.top = '-9999px'),
        (t.style.width = '50px'),
        (t.style.height = '50px'),
        (t.style.overflow = 'scroll'),
        document.body.appendChild(t),
        (tc = t.offsetWidth - t.clientWidth),
        document.body.removeChild(t)
    }
    return tc
  }
  nc.propTypes = {}
  var ac = function(e) {
    var t = e.label
    return r.createElement(r.Fragment, null, t)
  }
  ac.propTypes = {}
  var ic = (function(e) {
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
            d = n.components,
            p = n.resizable,
            v = f.resourceId(e),
            h = e
              ? o.filter(function(e) {
                  return f.resource(e) === v
                })
              : o
          return r.createElement(fs, {
            isAllDay: !0,
            rtl: a,
            getNow: s,
            minRows: 2,
            range: c,
            events: h,
            resourceId: v,
            className: 'rbc-allday-cell',
            selectable: i,
            selected: t.props.selected,
            components: d,
            accessors: f,
            getters: l,
            localizer: u,
            onSelect: t.props.onSelectEvent,
            onDoubleClick: t.props.onDoubleClickEvent,
            onKeyPress: t.props.onKeyPressEvent,
            onSelectSlot: t.props.onSelectSlot,
            longPressThreshold: t.props.longPressThreshold,
            resizable: p,
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
          l = void 0 === c ? ds : c,
          u = i()
        return e.map(function(e, n) {
          var i = a(e),
            c = o.format(e, 'dayFormat'),
            f = s(e),
            d = f.className,
            p = f.style,
            v = r.createElement(l, { date: e, label: c, localizer: o })
          return r.createElement(
            'div',
            {
              key: n,
              style: p,
              className: G('rbc-header', d, Ge(e, u, 'day') && 'rbc-today'),
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
                  v
                )
              : r.createElement('span', null, v)
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
          d = t.getters,
          p = t.scrollRef,
          v = t.localizer,
          h = t.isOverflowing,
          m = t.components,
          g = m.timeGutterHeader,
          y = m.resourceHeader,
          b = void 0 === y ? ac : y,
          w = t.resizable,
          E = {}
        h && (E[o ? 'marginLeft' : 'marginRight'] = oc() + 'px')
        var _ = a.groupEvents(s)
        return r.createElement(
          'div',
          {
            style: E,
            ref: p,
            className: G('rbc-time-header', h && 'rbc-overflowing'),
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
              r.createElement(fs, {
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
                getters: d,
                localizer: v,
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
  ic.propTypes = {}
  var sc = {}
  var cc = (function(e) {
    function t(t) {
      var o
      return (
        ((o = e.call(this, t) || this).handleScroll = function(e) {
          o.scrollRef.current &&
            (o.scrollRef.current.scrollLeft = e.target.scrollLeft)
        }),
        (o.handleResize = function() {
          _s(o.rafHandle), (o.rafHandle = Ss(o.checkOverflow))
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
        (o.memoizedResources = cs(function(e, t) {
          return (function(e, t) {
            return {
              map: function(n) {
                return e
                  ? e.map(function(e, r) {
                      return n([t.resourceId(e), e], r)
                    })
                  : [n([sc, null], 0)]
              },
              groupEvents: function(n) {
                var r = new Map()
                return e
                  ? (n.forEach(function(e) {
                      var n = t.resource(e) || sc,
                        o = r.get(n) || []
                      o.push(e), r.set(n, o)
                    }),
                    r)
                  : (r.set(sc, n), r)
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
          _s(this.rafHandle),
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
        ;(Ge(e.range[0], n[0], 'minute') && Ge(e.scrollToTime, r, 'minute')) ||
          this.calculateScroll(e)
      }),
      (o.renderEvents = function(e, t, n, o) {
        var a = this,
          s = this.props,
          c = s.min,
          l = s.max,
          u = s.components,
          f = s.accessors,
          d = s.localizer,
          p = s.dayLayoutAlgorithm,
          v = this.memoizedResources(this.props.resources, f),
          h = v.groupEvents(t),
          m = v.groupEvents(n)
        return v.map(function(t, n) {
          var s = t[0],
            v = t[1]
          return e.map(function(e, t) {
            var g = (h.get(s) || []).filter(function(t) {
                return rt(e, f.start(t), f.end(t), 'day')
              }),
              y = (m.get(s) || []).filter(function(t) {
                return rt(e, f.start(t), f.end(t), 'day')
              })
            return r.createElement(
              ec,
              i({}, a.props, {
                localizer: d,
                min: wt(e, c),
                max: wt(e, l),
                resource: v && s,
                components: u,
                isNow: Ge(e, o, 'day'),
                key: n + '-' + t,
                date: e,
                events: g,
                backgroundEvents: y,
                dayLayoutAlgorithm: p,
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
          d = e.getters,
          p = e.localizer,
          v = e.min,
          h = e.max,
          m = e.showMultiDayTimes,
          g = e.longPressThreshold,
          y = e.resizable,
          b = e.reactStyle
        a = a || this.state.gutterWidth
        var w = o[0],
          E = o[o.length - 1]
        this.slots = o.length
        var _ = [],
          S = [],
          D = []
        return (
          t.forEach(function(e) {
            if (qi(e, w, E, f)) {
              var t = f.start(e),
                n = f.end(e)
              f.allDay(e) || (Et(t) && Et(n)) || (!m && !Ge(t, n, 'day'))
                ? _.push(e)
                : S.push(e)
            }
          }),
          n.forEach(function(e) {
            qi(e, w, E, f) && D.push(e)
          }),
          _.sort(function(e, t) {
            return Zi(e, t, f)
          }),
          r.createElement(
            'div',
            {
              className: G(
                b['rbc-time-view'],
                l && b['rbc-time-view-resources']
              ),
            },
            r.createElement(ic, {
              range: o,
              events: _,
              width: a,
              rtl: i,
              getNow: c,
              localizer: p,
              selected: s,
              resources: this.memoizedResources(l, f),
              selectable: this.props.selectable,
              accessors: f,
              getters: d,
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
                className: b['rbc-time-content'],
                onScroll: this.handleScroll,
              },
              r.createElement(nc, {
                date: w,
                ref: this.gutterRef,
                localizer: p,
                min: wt(w, v),
                max: wt(w, h),
                step: this.props.step,
                getNow: this.props.getNow,
                timeslots: this.props.timeslots,
                components: u,
                className: b['rbc-time-gutter'],
                getters: d,
              }),
              this.renderEvents(o, S, D, c())
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
              var t = rc(e.gutter)
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
          a = o - Xe(o, 'day'),
          i = _t(r, n)
        this._scrollRatio = a / i
      }),
      t
    )
  })(t.Component)
  ;(cc.propTypes = {}),
    (cc.defaultProps = {
      step: 30,
      timeslots: 2,
      min: Xe(new Date(), 'day'),
      max: qe(new Date(), 'day'),
      scrollToTime: Xe(new Date(), 'day'),
    })
  var lc = ['date'],
    uc = (function(e) {
      function t() {
        return e.apply(this, arguments) || this
      }
      return (
        l(t, e),
        (t.prototype.render = function() {
          var e = this.props,
            n = e.date,
            o = s(e, lc),
            a = t.range(n)
          return r.createElement(cc, i({}, o, { range: a, eventOffset: 10 }))
        }),
        t
      )
    })(r.Component)
  ;(uc.propTypes = {}),
    (uc.range = function(e) {
      return [Xe(e, 'day')]
    }),
    (uc.navigate = function(e, t) {
      switch (t) {
        case Z.PREVIOUS:
          return Ke(e, -1, 'day')
        case Z.NEXT:
          return Ke(e, 1, 'day')
        default:
          return e
      }
    }),
    (uc.title = function(e, t) {
      return t.localizer.format(e, 'dayHeaderFormat')
    })
  var fc = ['date'],
    dc = (function(e) {
      function t() {
        return e.apply(this, arguments) || this
      }
      return (
        l(t, e),
        (t.prototype.render = function() {
          var e = this.props,
            n = e.date,
            o = s(e, fc),
            a = t.range(n, this.props)
          return r.createElement(cc, i({}, o, { range: a, eventOffset: 15 }))
        }),
        t
      )
    })(r.Component)
  ;(dc.propTypes = {}),
    (dc.defaultProps = cc.defaultProps),
    (dc.navigate = function(e, t) {
      switch (t) {
        case Z.PREVIOUS:
          return Ke(e, -1, 'week')
        case Z.NEXT:
          return Ke(e, 1, 'week')
        default:
          return e
      }
    }),
    (dc.range = function(e, t) {
      var n = t.localizer.startOfWeek()
      return bt(Xe(e, 'week', n), qe(e, 'week', n))
    }),
    (dc.title = function(e, t) {
      var n = t.localizer,
        r = dc.range(e, { localizer: n }),
        o = r[0],
        a = r.slice(1)
      return n.format({ start: o, end: a.pop() }, 'dayRangeHeaderFormat')
    })
  var pc = ['date']
  function vc(e, t) {
    return dc.range(e, t).filter(function(e) {
      return -1 === [6, 0].indexOf(e.getDay())
    })
  }
  var hc,
    mc = (function(e) {
      function t() {
        return e.apply(this, arguments) || this
      }
      return (
        l(t, e),
        (t.prototype.render = function() {
          var e = this.props,
            t = e.date,
            n = s(e, pc),
            o = vc(t, this.props)
          return r.createElement(cc, i({}, n, { range: o, eventOffset: 15 }))
        }),
        t
      )
    })(r.Component)
  function gc(e, t) {
    return e
      .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
      .replace(/\s+/g, ' ')
      .replace(/^\s*|\s*$/g, '')
  }
  function yc(e) {
    var n = e.selected,
      o = e.getters,
      a = e.accessors,
      i = e.localizer,
      s = e.components,
      c = e.length,
      l = e.date,
      u = e.events,
      f = t.useRef(null),
      d = t.useRef(null),
      p = t.useRef(null),
      v = t.useRef(null),
      h = t.useRef(null)
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
            (Ge(u, l)
              ? (c = i.format(u, 'agendaTimeFormat'))
              : Ge(u, l, 'day')
              ? (c = i.format({ start: u, end: l }, 'agendaTimeRangeFormat'))
              : Ge(e, u, 'day')
              ? (c = i.format(u, 'agendaTimeFormat'))
              : Ge(e, l, 'day') && (c = i.format(l, 'agendaTimeFormat'))),
          Ze(e, u, 'day') && (n = 'rbc-continues-prior'),
          Qe(e, l, 'day') && (n += ' rbc-continues-after'),
          r.createElement(
            'span',
            { className: n.trim() },
            o ? r.createElement(o, { event: t, day: e, label: c }) : c
          )
        )
      },
      g = function() {
        if (h.current) {
          var e = f.current,
            t = h.current.firstChild
          if (t) {
            var n,
              r,
              o = v.current.scrollHeight > v.current.clientHeight,
              a = [],
              i = a
            ;(a = [rc(t.children[0]), rc(t.children[1])]),
              (i[0] === a[0] && i[1] === a[1]) ||
                ((d.current.style.width = a[0] + 'px'),
                (p.current.style.width = a[1] + 'px')),
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
                  (e.style.marginRight = oc() + 'px'))
                : (function(e, t) {
                    e.classList
                      ? e.classList.remove(t)
                      : 'string' == typeof e.className
                      ? (e.className = gc(e.className, t))
                      : e.setAttribute(
                          'class',
                          gc((e.className && e.className.baseVal) || '', t)
                        )
                  })(e, 'rbc-header-overflowing')
          }
        }
      },
      y = i.messages,
      b = Ke(l, c, 'day'),
      w = bt(l, b, 'day')
    return (
      (u = u.filter(function(e) {
        return qi(e, Xe(l, 'day'), qe(b, 'day'), a)
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
                      { className: 'rbc-header', ref: d },
                      y.date
                    ),
                    r.createElement(
                      'th',
                      { className: 'rbc-header', ref: p },
                      y.time
                    ),
                    r.createElement('th', { className: 'rbc-header' }, y.event)
                  )
                )
              ),
              r.createElement(
                'div',
                { className: 'rbc-agenda-content', ref: v },
                r.createElement(
                  'table',
                  { className: 'rbc-agenda-table' },
                  r.createElement(
                    'tbody',
                    { ref: h },
                    w.map(function(e, t) {
                      return (function(e, t, c) {
                        var l = s.event,
                          u = s.date
                        return (t = t.filter(function(t) {
                          return qi(t, Xe(e, 'day'), qe(e, 'day'), a)
                        })).map(function(s, f) {
                          var d = a.title(s),
                            p = a.end(s),
                            v = a.start(s),
                            h = o.eventProp(s, v, p, wn(s, n)),
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
                              className: h.className,
                              style: h.style,
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
                              l ? r.createElement(l, { event: s, title: d }) : d
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
  ;(mc.propTypes = {}),
    (mc.defaultProps = cc.defaultProps),
    (mc.range = vc),
    (mc.navigate = dc.navigate),
    (mc.title = function(e, t) {
      var n = t.localizer,
        r = vc(e, { localizer: n }),
        o = r[0],
        a = r.slice(1)
      return n.format({ start: o, end: a.pop() }, 'dayRangeHeaderFormat')
    }),
    (yc.propTypes = {}),
    (yc.defaultProps = { length: 30 }),
    (yc.range = function(e, t) {
      var n = t.length
      return {
        start: e,
        end: Ke(e, void 0 === n ? yc.defaultProps.length : n, 'day'),
      }
    }),
    (yc.navigate = function(e, t, n) {
      var r = n.length,
        o = void 0 === r ? yc.defaultProps.length : r
      switch (t) {
        case Z.PREVIOUS:
          return Ke(e, -o, 'day')
        case Z.NEXT:
          return Ke(e, o, 'day')
        default:
          return e
      }
    }),
    (yc.title = function(e, t) {
      var n = t.length,
        r = void 0 === n ? yc.defaultProps.length : n,
        o = t.localizer,
        a = Ke(e, r, 'day')
      return o.format({ start: e, end: a }, 'agendaHeaderFormat')
    })
  var bc =
      (((hc = {})[J.MONTH] = gs),
      (hc[J.WEEK] = dc),
      (hc[J.WORK_WEEK] = mc),
      (hc[J.DAY] = uc),
      (hc[J.AGENDA] = yc),
      hc),
    wc = ['action', 'date', 'today']
  function Ec(e, t) {
    var n = t.action,
      r = t.date,
      o = t.today,
      a = s(t, wc)
    switch (((e = 'string' == typeof e ? bc[e] : e), n)) {
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
  var _c = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g
  var Sc = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
  var Dc =
      '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    Mc = '[' + Dc + ']',
    Oc = '\\d+',
    xc = '[\\u2700-\\u27bf]',
    kc = '[a-z\\xdf-\\xf6\\xf8-\\xff]',
    Tc =
      '[^\\ud800-\\udfff' +
      Dc +
      Oc +
      '\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]',
    jc = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    Ac = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    Nc = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
    Pc = '(?:' + kc + '|' + Tc + ')',
    Rc = '(?:' + Nc + '|' + Tc + ')',
    Cc =
      '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?',
    Fc =
      '[\\ufe0e\\ufe0f]?' +
      Cc +
      ('(?:\\u200d(?:' +
        ['[^\\ud800-\\udfff]', jc, Ac].join('|') +
        ')[\\ufe0e\\ufe0f]?' +
        Cc +
        ')*'),
    Lc = '(?:' + [xc, jc, Ac].join('|') + ')' + Fc,
    Wc = RegExp(
      [
        Nc +
          '?' +
          kc +
          "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" +
          [Mc, Nc, '$'].join('|') +
          ')',
        Rc +
          "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" +
          [Mc, Nc + Pc, '$'].join('|') +
          ')',
        Nc + '?' + Pc + "+(?:['’](?:d|ll|m|re|s|t|ve))?",
        Nc + "+(?:['’](?:D|LL|M|RE|S|T|VE))?",
        '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
        '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
        Oc,
        Lc,
      ].join('|'),
      'g'
    )
  function zc(e, t, n) {
    return (
      (e = Ni(e)),
      void 0 === (t = n ? void 0 : t)
        ? (function(e) {
            return Sc.test(e)
          })(e)
          ? (function(e) {
              return e.match(Wc) || []
            })(e)
          : (function(e) {
              return e.match(_c) || []
            })(e)
        : e.match(t) || []
    )
  }
  var Ic = (function(e) {
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
          n = e.label,
          o = e.lang,
          a = e.reactStyle
        o = o || 'en'
        var i = zc(n),
          s = (function(e) {
            for (
              var t = -1, n = null == e ? 0 : e.length, r = 0, o = [];
              ++t < n;

            ) {
              var a = e[t]
              a && (o[r++] = a)
            }
            return o
          })(
            t.en.month.map(function(e, t) {
              if (e === i[1]) return t
            })
          ),
          c = t[o].month[s[0] || 0],
          l = 'en' === o ? n : i[0] + '年' + c
        return r.createElement(
          'div',
          { className: a['rbc-toolbar'], 'data-class': 'rbc-toolbar' },
          r.createElement(
            'div',
            {
              className: a['rbc-toolbar-label'],
              'data-class': 'rbc-toolbar-label',
            },
            l,
            ' ',
            r.createElement(
              'span',
              { className: a['rbc-toolbar-label-tip'] },
              t[o].hasActivity
            )
          ),
          r.createElement(
            'span',
            { className: a['rbc-btn-group'], 'data-class': 'rbc-btn-group' },
            r.createElement('button', {
              type: 'button',
              onClick: this.navigate.bind(null, Z.PREVIOUS),
              className: G(a.arrow, a['arrow-left']),
            }),
            r.createElement(
              'button',
              { type: 'button', onClick: this.navigate.bind(null, Z.TODAY) },
              t[o].today
            ),
            r.createElement('button', {
              type: 'button',
              onClick: this.navigate.bind(null, Z.NEXT),
              className: G(a.arrow, a['arrow-right']),
            })
          )
        )
      }),
      t
    )
  })(r.Component)
  function Hc(e, t) {
    for (
      var n = -1, r = null == e ? 0 : e.length;
      ++n < r && !1 !== t(e[n], n, e);

    );
    return e
  }
  function Uc(e, t, n) {
    '__proto__' == t && Cs
      ? Cs(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
      : (e[t] = n)
  }
  Ic.propTypes = {}
  var Vc = Object.prototype.hasOwnProperty
  function Yc(e, t, n) {
    var r = e[t]
    ;(Vc.call(e, t) && Dt(r, n) && (void 0 !== n || t in e)) || Uc(e, t, n)
  }
  function Bc(e, t, n, r) {
    var o = !n
    n || (n = {})
    for (var a = -1, i = t.length; ++a < i; ) {
      var s = t[a],
        c = r ? r(n[s], e[s], s, n, e) : void 0
      void 0 === c && (c = e[s]), o ? Uc(n, s, c) : Yc(n, s, c)
    }
    return n
  }
  var Kc = Object.prototype.hasOwnProperty
  function $c(e) {
    if (!Mt(e))
      return (function(e) {
        var t = []
        if (null != e) for (var n in Object(e)) t.push(n)
        return t
      })(e)
    var t = Wa(e),
      n = []
    for (var r in e) ('constructor' != r || (!t && Kc.call(e, r))) && n.push(r)
    return n
  }
  function Xc(e) {
    return Pt(e) ? Fa(e, !0) : $c(e)
  }
  var qc = 'object' == typeof e && e && !e.nodeType && e,
    Gc =
      qc && 'object' == typeof module && module && !module.nodeType && module,
    Zc = Gc && Gc.exports === qc ? ue.Buffer : void 0,
    Jc = Zc ? Zc.allocUnsafe : void 0
  var Qc = za(Object.getPrototypeOf, Object),
    el = Object.getOwnPropertySymbols
      ? function(e) {
          for (var t = []; e; ) se(t, _a(e)), (e = Qc(e))
          return t
        }
      : ba
  function tl(e) {
    return ya(e, Xc, el)
  }
  var nl = Object.prototype.hasOwnProperty
  function rl(e) {
    var t = new e.constructor(e.byteLength)
    return new ea(t).set(new ea(e)), t
  }
  var ol = /\w*$/
  var al = fe ? fe.prototype : void 0,
    il = al ? al.valueOf : void 0
  var sl = '[object Boolean]',
    cl = '[object Date]',
    ll = '[object Map]',
    ul = '[object Number]',
    fl = '[object RegExp]',
    dl = '[object Set]',
    pl = '[object String]',
    vl = '[object Symbol]',
    hl = '[object ArrayBuffer]',
    ml = '[object DataView]',
    gl = '[object Float32Array]',
    yl = '[object Float64Array]',
    bl = '[object Int8Array]',
    wl = '[object Int16Array]',
    El = '[object Int32Array]',
    _l = '[object Uint8Array]',
    Sl = '[object Uint8ClampedArray]',
    Dl = '[object Uint16Array]',
    Ml = '[object Uint32Array]'
  function Ol(e, t, n) {
    var r,
      o,
      a,
      i = e.constructor
    switch (t) {
      case hl:
        return rl(e)
      case sl:
      case cl:
        return new i(+e)
      case ml:
        return (function(e, t) {
          var n = t ? rl(e.buffer) : e.buffer
          return new e.constructor(n, e.byteOffset, e.byteLength)
        })(e, n)
      case gl:
      case yl:
      case bl:
      case wl:
      case El:
      case _l:
      case Sl:
      case Dl:
      case Ml:
        return (function(e, t) {
          var n = t ? rl(e.buffer) : e.buffer
          return new e.constructor(n, e.byteOffset, e.length)
        })(e, n)
      case ll:
        return new i()
      case ul:
      case pl:
        return new i(e)
      case fl:
        return (
          ((a = new (o = e).constructor(o.source, ol.exec(o))).lastIndex =
            o.lastIndex),
          a
        )
      case dl:
        return new i()
      case vl:
        return (r = e), il ? Object(il.call(r)) : {}
    }
  }
  var xl = Object.create,
    kl = (function() {
      function e() {}
      return function(t) {
        if (!Mt(t)) return {}
        if (xl) return xl(t)
        e.prototype = t
        var n = new e()
        return (e.prototype = void 0), n
      }
    })()
  var Tl = '[object Map]'
  var jl = Na && Na.isMap,
    Al = jl
      ? ka(jl)
      : function(e) {
          return Ee(e) && ni(e) == Tl
        },
    Nl = '[object Set]'
  var Pl = Na && Na.isSet,
    Rl = Pl
      ? ka(Pl)
      : function(e) {
          return Ee(e) && ni(e) == Nl
        },
    Cl = 1,
    Fl = 2,
    Ll = 4,
    Wl = '[object Arguments]',
    zl = '[object Function]',
    Il = '[object GeneratorFunction]',
    Hl = '[object Object]',
    Ul = {}
  function Vl(e, t, n, r, o, a) {
    var i,
      s = t & Cl,
      c = t & Fl,
      l = t & Ll
    if ((n && (i = o ? n(e, r, o, a) : n(e)), void 0 !== i)) return i
    if (!Mt(e)) return e
    var u = ke(e)
    if (u) {
      if (
        ((i = (function(e) {
          var t = e.length,
            n = new e.constructor(t)
          return (
            t &&
              'string' == typeof e[0] &&
              nl.call(e, 'index') &&
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
      var f = ni(e),
        d = f == zl || f == Il
      if (Oa(e))
        return (function(e, t) {
          if (t) return e.slice()
          var n = e.length,
            r = Jc ? Jc(n) : new e.constructor(n)
          return e.copy(r), r
        })(e, s)
      if (f == Hl || f == Wl || (d && !o)) {
        if (
          ((i =
            c || d
              ? {}
              : (function(e) {
                  return 'function' != typeof e.constructor || Wa(e)
                    ? {}
                    : kl(Qc(e))
                })(e)),
          !s)
        )
          return c
            ? (function(e, t) {
                return Bc(e, el(e), t)
              })(
                e,
                (function(e, t) {
                  return e && Bc(t, Xc(t), e)
                })(i, e)
              )
            : (function(e, t) {
                return Bc(e, _a(e), t)
              })(
                e,
                (function(e, t) {
                  return e && Bc(t, Ua(t), e)
                })(i, e)
              )
      } else {
        if (!Ul[f]) return o ? e : {}
        i = Ol(e, f, s)
      }
    }
    a || (a = new $o())
    var p = a.get(e)
    if (p) return p
    a.set(e, i),
      Rl(e)
        ? e.forEach(function(r) {
            i.add(Vl(r, t, n, r, e, a))
          })
        : Al(e) &&
          e.forEach(function(r, o) {
            i.set(o, Vl(r, t, n, o, e, a))
          })
    var v = u ? void 0 : (l ? (c ? tl : Va) : c ? Xc : Ua)(e)
    return (
      Hc(v || e, function(r, o) {
        v && (r = e[(o = r)]), Yc(i, o, Vl(r, t, n, o, e, a))
      }),
      i
    )
  }
  function Yl(e, t) {
    return (
      null ==
        (e = (function(e, t) {
          return t.length < 2 ? e : Fi(e, St(t, 0, -1))
        })(e, (t = Pi(t, e)))) ||
      delete e[
        Ci(((n = t), (r = null == n ? 0 : n.length), r ? n[r - 1] : void 0))
      ]
    )
    var n, r
  }
  ;(Ul[Wl] = Ul['[object Array]'] = Ul['[object ArrayBuffer]'] = Ul[
    '[object DataView]'
  ] = Ul['[object Boolean]'] = Ul['[object Date]'] = Ul[
    '[object Float32Array]'
  ] = Ul['[object Float64Array]'] = Ul['[object Int8Array]'] = Ul[
    '[object Int16Array]'
  ] = Ul['[object Int32Array]'] = Ul['[object Map]'] = Ul[
    '[object Number]'
  ] = Ul[Hl] = Ul['[object RegExp]'] = Ul['[object Set]'] = Ul[
    '[object String]'
  ] = Ul['[object Symbol]'] = Ul['[object Uint8Array]'] = Ul[
    '[object Uint8ClampedArray]'
  ] = Ul['[object Uint16Array]'] = Ul['[object Uint32Array]'] = !0),
    (Ul['[object Error]'] = Ul[zl] = Ul['[object WeakMap]'] = !1)
  var Bl = '[object Object]',
    Kl = Function.prototype,
    $l = Object.prototype,
    Xl = Kl.toString,
    ql = $l.hasOwnProperty,
    Gl = Xl.call(Object)
  function Zl(e) {
    return (function(e) {
      if (!Ee(e) || we(e) != Bl) return !1
      var t = Qc(e)
      if (null === t) return !0
      var n = ql.call(t, 'constructor') && t.constructor
      return 'function' == typeof n && n instanceof n && Xl.call(n) == Gl
    })(e)
      ? void 0
      : e
  }
  var Jl = (function(e) {
      return Is(Rs(e, void 0, Ne), e + '')
    })(function(e, t) {
      var n = {}
      if (null == e) return n
      var r = !1
      ;(t = xi(t, function(t) {
        return (t = Pi(t, e)), r || (r = t.length > 1), t
      })),
        Bc(e, tl(e), n),
        r && (n = Vl(n, 7, Zl))
      for (var o = t.length; o--; ) Yl(n, t[o])
      return n
    }),
    Ql = Object.prototype,
    eu = Ql.hasOwnProperty,
    tu = Hs(function(e, t) {
      e = Object(e)
      var n = -1,
        r = t.length,
        o = r > 2 ? t[2] : void 0
      for (o && Lt(t[0], t[1], o) && (r = 1); ++n < r; )
        for (var a = t[n], i = Xc(a), s = -1, c = i.length; ++s < c; ) {
          var l = i[s],
            u = e[l]
          ;(void 0 === u || (Dt(u, Ql[l]) && !eu.call(e, l))) && (e[l] = a[l])
        }
      return e
    })
  var nu = function(e) {
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
    ru = ['view', 'date', 'getNow', 'onNavigate'],
    ou = [
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
      'lang',
      'reactStyle',
      'showPosition',
    ]
  function au(e) {
    return Array.isArray(e) ? e : Object.keys(e)
  }
  var iu = (function(e) {
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
                var r = ke(e),
                  o = r || Oa(e) || Ra(e)
                if (((t = Yi(t)), null == n)) {
                  var a = e && e.constructor
                  n = o ? (r ? new a() : []) : Mt(e) && jt(a) ? kl(Qc(e)) : {}
                }
                return (
                  (o ? Hc : Ts)(e, function(e, r, o) {
                    return t(n, e, r, o)
                  }),
                  n
                )
              })(
                o,
                function(e, t) {
                  return (e[t] = bc[t])
                },
                {}
              )
            : 'object' == typeof o
            ? ((e = o),
              (r = {}),
              (n = Yi(
                (n = function(e, t) {
                  return !0 === e ? bc[t] : e
                })
              )),
              Ts(e, function(e, t, o) {
                Uc(r, t, n(e, t, o))
              }),
              r)
            : bc
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
            u = s(r, ru),
            f = t.getView(),
            d = c()
          l(
            (a = Ec(f, i({}, u, { action: e, date: n || a || d, today: d }))),
            o,
            e
          ),
            t.handleRangeChange(a, f),
            t.props.changeCalendar(a, e)
        }),
        (t.handleViewChange = function(e) {
          e !== t.props.view &&
            (function(e, t) {
              return -1 !== au(t.views).indexOf(e)
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
          d = e.backgroundEventPropGetter,
          p = e.slotPropGetter,
          v = e.slotGroupPropGetter,
          h = e.dayPropGetter,
          m = e.view,
          g = e.views,
          y = e.localizer,
          b = e.culture,
          w = e.messages,
          E = void 0 === w ? {} : w,
          _ = e.components,
          S = void 0 === _ ? {} : _,
          D = e.formats,
          M = void 0 === D ? {} : D,
          O = au(g)
        return {
          viewNames: O,
          localizer: re(
            y,
            b,
            M,
            (function(e) {
              return i({}, oe, ae, e)
            })(E)
          ),
          getters: {
            eventProp: function() {
              return (f && f.apply(void 0, arguments)) || {}
            },
            backgroundEventProp: function() {
              return (d && d.apply(void 0, arguments)) || {}
            },
            slotProp: function() {
              return (p && p.apply(void 0, arguments)) || {}
            },
            slotGroupProp: function() {
              return (v && v.apply(void 0, arguments)) || {}
            },
            dayProp: function() {
              return (h && h.apply(void 0, arguments)) || {}
            },
          },
          components: tu(S[m] || {}, Jl(S, O), {
            eventWrapper: a,
            backgroundEventWrapper: a,
            eventContainerWrapper: a,
            dateCellWrapper: a,
            weekWrapper: a,
            timeSlotWrapper: a,
          }),
          accessors: {
            start: nu(t),
            end: nu(n),
            allDay: nu(r),
            tooltip: nu(o),
            title: nu(s),
            resource: nu(c),
            resourceId: nu(l),
            resourceTitle: nu(u),
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
          d = e.date,
          p = e.getNow,
          v = e.length,
          h = e.showMultiDayTimes,
          m = e.onShowMore,
          g = e.doShowMoreDrillDown,
          y = (e.components, e.formats, e.messages, e.culture, e.lang),
          b = e.reactStyle,
          w = e.showPosition,
          E = s(e, ou)
        d = d || p()
        var _ = this.getView(),
          S = this.state.context,
          D = S.accessors,
          M = S.components,
          O = S.getters,
          x = S.localizer,
          k = S.viewNames,
          T = M.toolbar || Ic,
          j = _.title(d, { localizer: x, length: v })
        return (
          console.log('111', w),
          r.createElement(
            'div',
            i({}, f, {
              className: G(
                u,
                b['rbc-calendar'],
                E.rtl && b['rbc-rtl'],
                w && b['index-calendar-small']
              ),
              style: l,
              'data-class': 'rbc-calendar',
            }),
            n &&
              r.createElement(T, {
                date: d,
                view: t,
                views: k,
                label: j,
                onView: this.handleViewChange,
                onNavigate: this.handleNavigate,
                localizer: x,
                lang: y,
                reactStyle: b,
              }),
            r.createElement(
              _,
              i({}, E, {
                events: o,
                backgroundEvents: c,
                date: d,
                getNow: p,
                length: v,
                localizer: x,
                getters: O,
                components: M,
                accessors: D,
                showMultiDayTimes: h,
                getDrilldownView: this.getDrilldownView,
                onNavigate: this.handleNavigate,
                onDrillDown: this.handleDrillDown,
                onSelectEvent: this.handleSelectEvent,
                onDoubleClickEvent: this.handleDoubleClickEvent,
                onKeyPressEvent: this.handleKeyPressEvent,
                onSelectSlot: this.handleSelectSlot,
                onShowMore: m,
                doShowMoreDrillDown: g,
                lang: y,
                label: j,
                reactStyle: b,
              })
            )
          )
        )
      }),
      t
    )
  })(r.Component)
  ;(iu.defaultProps = {
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
    (iu.propTypes = {})
  var su = (function e(t, n, o) {
      void 0 === o && (o = [])
      var a,
        c = t.displayName || t.name || 'Component',
        u =
          !!(a = t) &&
          ('function' != typeof a ||
            (a.prototype && a.prototype.isReactComponent)),
        f = Object.keys(n),
        d = f.map(Y)
      !u && o.length && H(!1)
      var p = (function(e) {
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
              c[e] = t.props[Y(e)]
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
                  !V(e, t) && V(r, t) && (o.values[t] = e[Y(t)])
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
            d.forEach(function(e) {
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
            ((t.componentWillMount = B), (t.componentWillReceiveProps = K)),
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
      })(p),
        (p.displayName = 'Uncontrolled(' + c + ')'),
        (p.propTypes = i(
          { innerRef: function() {} },
          (function(e, t) {
            var n = {}
            return (
              Object.keys(e).forEach(function(e) {
                n[Y(e)] = U
              }),
              n
            )
          })(n)
        )),
        o.forEach(function(e) {
          p.prototype[e] = function() {
            var t
            return (t = this.inner)[e].apply(t, arguments)
          }
        })
      var v = p
      return (
        r.forwardRef &&
          ((v = r.forwardRef(function(e, t) {
            return r.createElement(
              p,
              i({}, e, {
                innerRef: t,
                __source: { fileName: X, lineNumber: 128 },
                __self: this,
              })
            )
          })).propTypes = p.propTypes),
        (v.ControlledComponent = t),
        (v.deferControlTo = function(t, r, o) {
          return void 0 === r && (r = {}), e(t, i({}, n, r), o)
        }),
        v
      )
    })(iu, { view: 'onView', date: 'onNavigate', selected: 'onSelectEvent' }),
    cu = function(e, t, n) {
      var r = e.start,
        o = e.end
      return n.format(r, 'LT', t) + ' – ' + n.format(o, 'LT', t)
    },
    lu = {
      dateFormat: 'DD',
      dayFormat: 'DD ddd',
      weekdayFormat: 'ddd',
      selectRangeFormat: cu,
      eventTimeRangeFormat: cu,
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
          n.format(o, Ge(r, o, 'month') ? 'DD' : 'MMMM DD', t)
        )
      },
      agendaHeaderFormat: function(e, t, n) {
        var r = e.start,
          o = e.end
        return n.format(r, 'L', t) + ' – ' + n.format(o, 'L', t)
      },
      agendaDateFormat: 'ddd MMM DD',
      agendaTimeFormat: 'LT',
      agendaTimeRangeFormat: cu,
    }
  var uu = function(e, t, n) {
      var r = e.start,
        o = e.end
      return n.format(r, 't', t) + ' – ' + n.format(o, 't', t)
    },
    fu = {
      dateFormat: 'dd',
      dayFormat: 'ddd dd/MM',
      weekdayFormat: 'ddd',
      selectRangeFormat: uu,
      eventTimeRangeFormat: uu,
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
          n.format(o, Ge(r, o, 'month') ? 'dd' : 'MMM dd', t)
        )
      },
      agendaHeaderFormat: function(e, t, n) {
        var r = e.start,
          o = e.end
        return n.format(r, 'd', t) + ' – ' + n.format(o, 'd', t)
      },
      agendaDateFormat: 'ddd MMM dd',
      agendaTimeFormat: 't',
      agendaTimeRangeFormat: uu,
    }
  function du(e) {
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
      formats: fu,
      format: function(t, n, r) {
        return e.format(t, n, r)
      },
    })
  }
  var pu = function(e, t, n) {
      var r = e.start,
        o = e.end
      return (
        n.format(r, { time: 'short' }, t) +
        ' – ' +
        n.format(o, { time: 'short' }, t)
      )
    },
    vu = {
      dateFormat: 'dd',
      dayFormat: 'eee dd/MM',
      weekdayFormat: 'eee',
      selectRangeFormat: pu,
      eventTimeRangeFormat: pu,
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
          n.format(o, Ge(r, o, 'month') ? 'dd' : 'MMM dd', t)
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
      agendaTimeRangeFormat: pu,
    }
  var hu = function(e, t, n) {
      var r = e.start,
        o = e.end
      return n.format(r, 'p', t) + ' – ' + n.format(o, 'p', t)
    },
    mu = {
      dateFormat: 'dd',
      dayFormat: 'dd eee',
      weekdayFormat: 'cccc',
      selectRangeFormat: hu,
      eventTimeRangeFormat: hu,
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
          n.format(o, Ge(r, o, 'month') ? 'dd' : 'MMMM dd', t)
        )
      },
      agendaHeaderFormat: function(e, t, n) {
        var r = e.start,
          o = e.end
        return n.format(r, 'P', t) + ' – ' + n.format(o, 'P', t)
      },
      agendaDateFormat: 'ccc MMM dd',
      agendaTimeFormat: 'p',
      agendaTimeRangeFormat: hu,
    },
    gu = { eventWrapper: a, timeSlotWrapper: a, dateCellWrapper: a }
  ;(e.Calendar = su),
    (e.DateLocalizer = ne),
    (e.Navigate = Z),
    (e.Views = J),
    (e.components = gu),
    (e.dateFnsLocalizer = function(e) {
      var t = e.startOfWeek,
        n = e.getDay,
        r = e.format,
        o = e.locales
      return new ne({
        formats: mu,
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
            formats: vu,
            format: function(e, n, r) {
              return (
                (n = 'string' == typeof n ? { raw: n } : n),
                t(r).formatDate(e, n)
              )
            },
          })
        : du(e)
    }),
    (e.momentLocalizer = function(e) {
      return new ne({
        formats: lu,
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
    (e.move = Ec),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
