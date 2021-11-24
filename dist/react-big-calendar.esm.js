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
    S = f ? Symbol.for('react.suspense') : 60113,
    _ = f ? Symbol.for('react.suspense_list') : 60120,
    D = f ? Symbol.for('react.memo') : 60115,
    M = f ? Symbol.for('react.lazy') : 60116,
    O = f ? Symbol.for('react.block') : 60121,
    x = f ? Symbol.for('react.fundamental') : 60117,
    k = f ? Symbol.for('react.responder') : 60118,
    T = f ? Symbol.for('react.scope') : 60119
  function A(e) {
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
            case S:
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
  function j(e) {
    return A(e) === w
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
      Suspense: S,
      isAsyncMode: function(e) {
        return j(e) || A(e) === b
      },
      isConcurrentMode: j,
      isContextConsumer: function(e) {
        return A(e) === y
      },
      isContextProvider: function(e) {
        return A(e) === g
      },
      isElement: function(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === d
      },
      isForwardRef: function(e) {
        return A(e) === E
      },
      isFragment: function(e) {
        return A(e) === v
      },
      isLazy: function(e) {
        return A(e) === M
      },
      isMemo: function(e) {
        return A(e) === D
      },
      isPortal: function(e) {
        return A(e) === p
      },
      isProfiler: function(e) {
        return A(e) === m
      },
      isStrictMode: function(e) {
        return A(e) === h
      },
      isSuspense: function(e) {
        return A(e) === S
      },
      isValidElementType: function(e) {
        return (
          'string' == typeof e ||
          'function' == typeof e ||
          e === v ||
          e === w ||
          e === m ||
          e === h ||
          e === S ||
          e === _ ||
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
      typeOf: A,
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
  var q = '/Users/jquense/src/uncontrollable/src/uncontrollable.js'
  function X(e) {
    var t,
      n,
      r = ''
    if ('string' == typeof e || 'number' == typeof e) r += e
    else if ('object' == typeof e)
      if (Array.isArray(e))
        for (t = 0; t < e.length; t++)
          e[t] && (n = X(e[t])) && (r && (r += ' '), (r += n))
      else for (t in e) e[t] && (r && (r += ' '), (r += t))
    return r
  }
  function G() {
    for (var e, t, n = 0, r = ''; n < arguments.length; )
      (e = arguments[n++]) && (t = X(e)) && (r && (r += ' '), (r += t))
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
        wapWeeks: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
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
        date: [
          '1st',
          '2nd',
          '3rd',
          '4th',
          '5th',
          '6th',
          '7th',
          '8th',
          '9th',
          '10th',
          '11th',
          '12th',
          '13th',
          '14th',
          '15th',
          '16th',
          '17th',
          '',
          '',
          '',
          '',
          '',
        ],
        hasActivity: 'The representative has activities on that day',
      },
      cn: {
        today: '今天',
        weeks: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        wapWeeks: ['日', '一', '二', '三', '四', '五', '六'],
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
  var Se = '[object Arguments]'
  function _e(e) {
    return Ee(e) && we(e) == Se
  }
  var De = Object.prototype,
    Me = De.hasOwnProperty,
    Oe = De.propertyIsEnumerable,
    xe = _e(
      (function() {
        return arguments
      })()
    )
      ? _e
      : function(e) {
          return Ee(e) && Me.call(e, 'callee') && !Oe.call(e, 'callee')
        },
    ke = Array.isArray,
    Te = fe ? fe.isConcatSpreadable : void 0
  function Ae(e) {
    return ke(e) || xe(e) || !!(Te && e && e[Te])
  }
  function je(e, t, n, r, o) {
    var a = -1,
      i = e.length
    for (n || (n = Ae), o || (o = []); ++a < i; ) {
      var s = e[a]
      t > 0 && n(s)
        ? t > 1
          ? je(s, t - 1, n, r, o)
          : se(o, s)
        : r || (o[o.length] = s)
    }
    return o
  }
  function Ne(e) {
    return (null == e ? 0 : e.length) ? je(e, 1) : []
  }
  function Pe(e, t) {
    return e === t || (e != e && t != t)
  }
  function Re(e, t) {
    for (var n = e.length; n--; ) if (Pe(e[n][0], t)) return n
    return -1
  }
  var Ce = Array.prototype.splice
  function Fe(e) {
    var t = -1,
      n = null == e ? 0 : e.length
    for (this.clear(); ++t < n; ) {
      var r = e[t]
      this.set(r[0], r[1])
    }
  }
  function Le(e) {
    var t = typeof e
    return null != e && ('object' == t || 'function' == t)
  }
  ;(Fe.prototype.clear = function() {
    ;(this.__data__ = []), (this.size = 0)
  }),
    (Fe.prototype.delete = function(e) {
      var t = this.__data__,
        n = Re(t, e)
      return !(
        n < 0 ||
        (n == t.length - 1 ? t.pop() : Ce.call(t, n, 1), --this.size, 0)
      )
    }),
    (Fe.prototype.get = function(e) {
      var t = this.__data__,
        n = Re(t, e)
      return n < 0 ? void 0 : t[n][1]
    }),
    (Fe.prototype.has = function(e) {
      return Re(this.__data__, e) > -1
    }),
    (Fe.prototype.set = function(e, t) {
      var n = this.__data__,
        r = Re(n, e)
      return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
    })
  var We = '[object AsyncFunction]',
    ze = '[object Function]',
    Ie = '[object GeneratorFunction]',
    He = '[object Proxy]'
  function Ue(e) {
    if (!Le(e)) return !1
    var t = we(e)
    return t == ze || t == Ie || t == We || t == He
  }
  var Ve,
    Be = ue['__core-js_shared__'],
    Ye = (Ve = /[^.]+$/.exec((Be && Be.keys && Be.keys.IE_PROTO) || ''))
      ? 'Symbol(src)_1.' + Ve
      : ''
  var Ke = Function.prototype.toString
  function $e(e) {
    if (null != e) {
      try {
        return Ke.call(e)
      } catch (e) {}
      try {
        return e + ''
      } catch (e) {}
    }
    return ''
  }
  var qe = /^\[object .+?Constructor\]$/,
    Xe = Function.prototype,
    Ge = Object.prototype,
    Ze = Xe.toString,
    Je = Ge.hasOwnProperty,
    Qe = RegExp(
      '^' +
        Ze.call(Je)
          .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    )
  function et(e) {
    return (
      !(!Le(e) || ((t = e), Ye && Ye in t)) && (Ue(e) ? Qe : qe).test($e(e))
    )
    var t
  }
  function tt(e, t) {
    var n = (function(e, t) {
      return null == e ? void 0 : e[t]
    })(e, t)
    return et(n) ? n : void 0
  }
  var nt = tt(ue, 'Map'),
    rt = tt(Object, 'create')
  var ot = '__lodash_hash_undefined__',
    at = Object.prototype.hasOwnProperty
  var it = Object.prototype.hasOwnProperty
  var st = '__lodash_hash_undefined__'
  function ct(e) {
    var t = -1,
      n = null == e ? 0 : e.length
    for (this.clear(); ++t < n; ) {
      var r = e[t]
      this.set(r[0], r[1])
    }
  }
  function lt(e, t) {
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
  function ut(e) {
    var t = -1,
      n = null == e ? 0 : e.length
    for (this.clear(); ++t < n; ) {
      var r = e[t]
      this.set(r[0], r[1])
    }
  }
  ;(ct.prototype.clear = function() {
    ;(this.__data__ = rt ? rt(null) : {}), (this.size = 0)
  }),
    (ct.prototype.delete = function(e) {
      var t = this.has(e) && delete this.__data__[e]
      return (this.size -= t ? 1 : 0), t
    }),
    (ct.prototype.get = function(e) {
      var t = this.__data__
      if (rt) {
        var n = t[e]
        return n === ot ? void 0 : n
      }
      return at.call(t, e) ? t[e] : void 0
    }),
    (ct.prototype.has = function(e) {
      var t = this.__data__
      return rt ? void 0 !== t[e] : it.call(t, e)
    }),
    (ct.prototype.set = function(e, t) {
      var n = this.__data__
      return (
        (this.size += this.has(e) ? 0 : 1),
        (n[e] = rt && void 0 === t ? st : t),
        this
      )
    }),
    (ut.prototype.clear = function() {
      ;(this.size = 0),
        (this.__data__ = {
          hash: new ct(),
          map: new (nt || Fe)(),
          string: new ct(),
        })
    }),
    (ut.prototype.delete = function(e) {
      var t = lt(this, e).delete(e)
      return (this.size -= t ? 1 : 0), t
    }),
    (ut.prototype.get = function(e) {
      return lt(this, e).get(e)
    }),
    (ut.prototype.has = function(e) {
      return lt(this, e).has(e)
    }),
    (ut.prototype.set = function(e, t) {
      var n = lt(this, e),
        r = n.size
      return n.set(e, t), (this.size += n.size == r ? 0 : 1), this
    })
  var ft = 200
  function dt(e) {
    var t = (this.__data__ = new Fe(e))
    this.size = t.size
  }
  function pt(e, t) {
    for (
      var n = -1, r = null == e ? 0 : e.length;
      ++n < r && !1 !== t(e[n], n, e);

    );
    return e
  }
  ;(dt.prototype.clear = function() {
    ;(this.__data__ = new Fe()), (this.size = 0)
  }),
    (dt.prototype.delete = function(e) {
      var t = this.__data__,
        n = t.delete(e)
      return (this.size = t.size), n
    }),
    (dt.prototype.get = function(e) {
      return this.__data__.get(e)
    }),
    (dt.prototype.has = function(e) {
      return this.__data__.has(e)
    }),
    (dt.prototype.set = function(e, t) {
      var n = this.__data__
      if (n instanceof Fe) {
        var r = n.__data__
        if (!nt || r.length < ft - 1)
          return r.push([e, t]), (this.size = ++n.size), this
        n = this.__data__ = new ut(r)
      }
      return n.set(e, t), (this.size = n.size), this
    })
  var vt = (function() {
    try {
      var e = tt(Object, 'defineProperty')
      return e({}, '', {}), e
    } catch (e) {}
  })()
  function ht(e, t, n) {
    '__proto__' == t && vt
      ? vt(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
      : (e[t] = n)
  }
  var mt = Object.prototype.hasOwnProperty
  function gt(e, t, n) {
    var r = e[t]
    ;(mt.call(e, t) && Pe(r, n) && (void 0 !== n || t in e)) || ht(e, t, n)
  }
  function yt(e, t, n, r) {
    var o = !n
    n || (n = {})
    for (var a = -1, i = t.length; ++a < i; ) {
      var s = t[a],
        c = r ? r(n[s], e[s], s, n, e) : void 0
      void 0 === c && (c = e[s]), o ? ht(n, s, c) : gt(n, s, c)
    }
    return n
  }
  var bt = 'object' == typeof e && e && !e.nodeType && e,
    wt =
      bt && 'object' == typeof module && module && !module.nodeType && module,
    Et = wt && wt.exports === bt ? ue.Buffer : void 0,
    St =
      (Et ? Et.isBuffer : void 0) ||
      function() {
        return !1
      },
    _t = 9007199254740991,
    Dt = /^(?:0|[1-9]\d*)$/
  function Mt(e, t) {
    var n = typeof e
    return (
      !!(t = null == t ? _t : t) &&
      ('number' == n || ('symbol' != n && Dt.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
    )
  }
  var Ot = 9007199254740991
  function xt(e) {
    return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= Ot
  }
  var kt = {}
  function Tt(e) {
    return function(t) {
      return e(t)
    }
  }
  ;(kt['[object Float32Array]'] = kt['[object Float64Array]'] = kt[
    '[object Int8Array]'
  ] = kt['[object Int16Array]'] = kt['[object Int32Array]'] = kt[
    '[object Uint8Array]'
  ] = kt['[object Uint8ClampedArray]'] = kt['[object Uint16Array]'] = kt[
    '[object Uint32Array]'
  ] = !0),
    (kt['[object Arguments]'] = kt['[object Array]'] = kt[
      '[object ArrayBuffer]'
    ] = kt['[object Boolean]'] = kt['[object DataView]'] = kt[
      '[object Date]'
    ] = kt['[object Error]'] = kt['[object Function]'] = kt[
      '[object Map]'
    ] = kt['[object Number]'] = kt['[object Object]'] = kt[
      '[object RegExp]'
    ] = kt['[object Set]'] = kt['[object String]'] = kt[
      '[object WeakMap]'
    ] = !1)
  var At = 'object' == typeof e && e && !e.nodeType && e,
    jt =
      At && 'object' == typeof module && module && !module.nodeType && module,
    Nt = jt && jt.exports === At && ce.process,
    Pt = (function() {
      try {
        var e = jt && jt.require && jt.require('util').types
        return e || (Nt && Nt.binding && Nt.binding('util'))
      } catch (e) {}
    })(),
    Rt = Pt && Pt.isTypedArray,
    Ct = Rt
      ? Tt(Rt)
      : function(e) {
          return Ee(e) && xt(e.length) && !!kt[we(e)]
        },
    Ft = Object.prototype.hasOwnProperty
  function Lt(e, t) {
    var n = ke(e),
      r = !n && xe(e),
      o = !n && !r && St(e),
      a = !n && !r && !o && Ct(e),
      i = n || r || o || a,
      s = i
        ? (function(e, t) {
            for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n)
            return r
          })(e.length, String)
        : [],
      c = s.length
    for (var l in e)
      (!t && !Ft.call(e, l)) ||
        (i &&
          ('length' == l ||
            (o && ('offset' == l || 'parent' == l)) ||
            (a && ('buffer' == l || 'byteLength' == l || 'byteOffset' == l)) ||
            Mt(l, c))) ||
        s.push(l)
    return s
  }
  var Wt = Object.prototype
  function zt(e) {
    var t = e && e.constructor
    return e === (('function' == typeof t && t.prototype) || Wt)
  }
  function It(e, t) {
    return function(n) {
      return e(t(n))
    }
  }
  var Ht = It(Object.keys, Object),
    Ut = Object.prototype.hasOwnProperty
  function Vt(e) {
    return null != e && xt(e.length) && !Ue(e)
  }
  function Bt(e) {
    return Vt(e)
      ? Lt(e)
      : (function(e) {
          if (!zt(e)) return Ht(e)
          var t = []
          for (var n in Object(e))
            Ut.call(e, n) && 'constructor' != n && t.push(n)
          return t
        })(e)
  }
  var Yt = Object.prototype.hasOwnProperty
  function Kt(e) {
    if (!Le(e))
      return (function(e) {
        var t = []
        if (null != e) for (var n in Object(e)) t.push(n)
        return t
      })(e)
    var t = zt(e),
      n = []
    for (var r in e) ('constructor' != r || (!t && Yt.call(e, r))) && n.push(r)
    return n
  }
  function $t(e) {
    return Vt(e) ? Lt(e, !0) : Kt(e)
  }
  var qt = 'object' == typeof e && e && !e.nodeType && e,
    Xt =
      qt && 'object' == typeof module && module && !module.nodeType && module,
    Gt = Xt && Xt.exports === qt ? ue.Buffer : void 0,
    Zt = Gt ? Gt.allocUnsafe : void 0
  function Jt() {
    return []
  }
  var Qt = Object.prototype.propertyIsEnumerable,
    en = Object.getOwnPropertySymbols,
    tn = en
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
              })(en(e), function(t) {
                return Qt.call(e, t)
              }))
        }
      : Jt
  var nn = It(Object.getPrototypeOf, Object),
    rn = Object.getOwnPropertySymbols
      ? function(e) {
          for (var t = []; e; ) se(t, tn(e)), (e = nn(e))
          return t
        }
      : Jt
  function on(e, t, n) {
    var r = t(e)
    return ke(e) ? r : se(r, n(e))
  }
  function an(e) {
    return on(e, Bt, tn)
  }
  function sn(e) {
    return on(e, $t, rn)
  }
  var cn = tt(ue, 'DataView'),
    ln = tt(ue, 'Promise'),
    un = tt(ue, 'Set'),
    fn = tt(ue, 'WeakMap'),
    dn = $e(cn),
    pn = $e(nt),
    vn = $e(ln),
    hn = $e(un),
    mn = $e(fn),
    gn = we
  ;((cn && '[object DataView]' != gn(new cn(new ArrayBuffer(1)))) ||
    (nt && '[object Map]' != gn(new nt())) ||
    (ln && '[object Promise]' != gn(ln.resolve())) ||
    (un && '[object Set]' != gn(new un())) ||
    (fn && '[object WeakMap]' != gn(new fn()))) &&
    (gn = function(e) {
      var t = we(e),
        n = '[object Object]' == t ? e.constructor : void 0,
        r = n ? $e(n) : ''
      if (r)
        switch (r) {
          case dn:
            return '[object DataView]'
          case pn:
            return '[object Map]'
          case vn:
            return '[object Promise]'
          case hn:
            return '[object Set]'
          case mn:
            return '[object WeakMap]'
        }
      return t
    })
  var yn = gn,
    bn = Object.prototype.hasOwnProperty
  var wn = ue.Uint8Array
  function En(e) {
    var t = new e.constructor(e.byteLength)
    return new wn(t).set(new wn(e)), t
  }
  var Sn = /\w*$/
  var _n = fe ? fe.prototype : void 0,
    Dn = _n ? _n.valueOf : void 0
  var Mn = '[object Boolean]',
    On = '[object Date]',
    xn = '[object Map]',
    kn = '[object Number]',
    Tn = '[object RegExp]',
    An = '[object Set]',
    jn = '[object String]',
    Nn = '[object Symbol]',
    Pn = '[object ArrayBuffer]',
    Rn = '[object DataView]',
    Cn = '[object Float32Array]',
    Fn = '[object Float64Array]',
    Ln = '[object Int8Array]',
    Wn = '[object Int16Array]',
    zn = '[object Int32Array]',
    In = '[object Uint8Array]',
    Hn = '[object Uint8ClampedArray]',
    Un = '[object Uint16Array]',
    Vn = '[object Uint32Array]'
  function Bn(e, t, n) {
    var r,
      o,
      a,
      i = e.constructor
    switch (t) {
      case Pn:
        return En(e)
      case Mn:
      case On:
        return new i(+e)
      case Rn:
        return (function(e, t) {
          var n = t ? En(e.buffer) : e.buffer
          return new e.constructor(n, e.byteOffset, e.byteLength)
        })(e, n)
      case Cn:
      case Fn:
      case Ln:
      case Wn:
      case zn:
      case In:
      case Hn:
      case Un:
      case Vn:
        return (function(e, t) {
          var n = t ? En(e.buffer) : e.buffer
          return new e.constructor(n, e.byteOffset, e.length)
        })(e, n)
      case xn:
        return new i()
      case kn:
      case jn:
        return new i(e)
      case Tn:
        return (
          ((a = new (o = e).constructor(o.source, Sn.exec(o))).lastIndex =
            o.lastIndex),
          a
        )
      case An:
        return new i()
      case Nn:
        return (r = e), Dn ? Object(Dn.call(r)) : {}
    }
  }
  var Yn = Object.create,
    Kn = (function() {
      function e() {}
      return function(t) {
        if (!Le(t)) return {}
        if (Yn) return Yn(t)
        e.prototype = t
        var n = new e()
        return (e.prototype = void 0), n
      }
    })()
  var $n = '[object Map]'
  var qn = Pt && Pt.isMap,
    Xn = qn
      ? Tt(qn)
      : function(e) {
          return Ee(e) && yn(e) == $n
        },
    Gn = '[object Set]'
  var Zn = Pt && Pt.isSet,
    Jn = Zn
      ? Tt(Zn)
      : function(e) {
          return Ee(e) && yn(e) == Gn
        },
    Qn = 1,
    er = 2,
    tr = 4,
    nr = '[object Arguments]',
    rr = '[object Function]',
    or = '[object GeneratorFunction]',
    ar = '[object Object]',
    ir = {}
  function sr(e, t, n, r, o, a) {
    var i,
      s = t & Qn,
      c = t & er,
      l = t & tr
    if ((n && (i = o ? n(e, r, o, a) : n(e)), void 0 !== i)) return i
    if (!Le(e)) return e
    var u = ke(e)
    if (u) {
      if (
        ((i = (function(e) {
          var t = e.length,
            n = new e.constructor(t)
          return (
            t &&
              'string' == typeof e[0] &&
              bn.call(e, 'index') &&
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
      var f = yn(e),
        d = f == rr || f == or
      if (St(e))
        return (function(e, t) {
          if (t) return e.slice()
          var n = e.length,
            r = Zt ? Zt(n) : new e.constructor(n)
          return e.copy(r), r
        })(e, s)
      if (f == ar || f == nr || (d && !o)) {
        if (
          ((i =
            c || d
              ? {}
              : (function(e) {
                  return 'function' != typeof e.constructor || zt(e)
                    ? {}
                    : Kn(nn(e))
                })(e)),
          !s)
        )
          return c
            ? (function(e, t) {
                return yt(e, rn(e), t)
              })(
                e,
                (function(e, t) {
                  return e && yt(t, $t(t), e)
                })(i, e)
              )
            : (function(e, t) {
                return yt(e, tn(e), t)
              })(
                e,
                (function(e, t) {
                  return e && yt(t, Bt(t), e)
                })(i, e)
              )
      } else {
        if (!ir[f]) return o ? e : {}
        i = Bn(e, f, s)
      }
    }
    a || (a = new dt())
    var p = a.get(e)
    if (p) return p
    a.set(e, i),
      Jn(e)
        ? e.forEach(function(r) {
            i.add(sr(r, t, n, r, e, a))
          })
        : Xn(e) &&
          e.forEach(function(r, o) {
            i.set(o, sr(r, t, n, o, e, a))
          })
    var v = u ? void 0 : (l ? (c ? sn : an) : c ? $t : Bt)(e)
    return (
      pt(v || e, function(r, o) {
        v && (r = e[(o = r)]), gt(i, o, sr(r, t, n, o, e, a))
      }),
      i
    )
  }
  ;(ir[nr] = ir['[object Array]'] = ir['[object ArrayBuffer]'] = ir[
    '[object DataView]'
  ] = ir['[object Boolean]'] = ir['[object Date]'] = ir[
    '[object Float32Array]'
  ] = ir['[object Float64Array]'] = ir['[object Int8Array]'] = ir[
    '[object Int16Array]'
  ] = ir['[object Int32Array]'] = ir['[object Map]'] = ir[
    '[object Number]'
  ] = ir[ar] = ir['[object RegExp]'] = ir['[object Set]'] = ir[
    '[object String]'
  ] = ir['[object Symbol]'] = ir['[object Uint8Array]'] = ir[
    '[object Uint8ClampedArray]'
  ] = ir['[object Uint16Array]'] = ir['[object Uint32Array]'] = !0),
    (ir['[object Error]'] = ir[rr] = ir['[object WeakMap]'] = !1)
  var cr = 1,
    lr = 4
  var ur = 'milliseconds',
    fr = 'seconds',
    dr = 'minutes',
    pr = 'hours',
    vr = 'day',
    hr = 'week',
    mr = 'month',
    gr = 'year',
    yr = 'decade',
    br = 'century',
    wr = {
      milliseconds: 1,
      seconds: 1e3,
      minutes: 6e4,
      hours: 36e5,
      day: 864e5,
      week: 6048e5,
    },
    Er = { month: 1, year: 12, decade: 120, century: 1200 }
  function Sr(e) {
    return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0 ? 29 : 28
  }
  function _r(e, t, n) {
    switch (((e = new Date(e)), n)) {
      case ur:
      case fr:
      case dr:
      case pr:
      case vr:
      case hr:
        return (function(e, t) {
          var n = new Date(+e + t)
          return (function(e, t) {
            var n = e.getTimezoneOffset(),
              r = t.getTimezoneOffset()
            return new Date(+t + (r - n) * wr.minutes)
          })(e, n)
        })(e, t * wr[n])
      case mr:
      case gr:
      case yr:
      case br:
        return (function(e, t) {
          var n = e.getFullYear(),
            r = e.getMonth(),
            o = e.getDate(),
            a = 12 * n + r + t,
            i = parseInt(a / 12),
            s = a % 12,
            c = Math.min(
              o,
              (function(e) {
                return [31, Sr(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
              })(i)[s]
            ),
            l = new Date(e)
          return l.setFullYear(i), l.setDate(1), l.setMonth(s), l.setDate(c), l
        })(e, t * Er[n])
    }
    throw new TypeError('Invalid units: "' + n + '"')
  }
  function Dr(e, t, n) {
    return _r(e, -t, n)
  }
  function Mr(e, t, n) {
    switch (((e = new Date(e)), t)) {
      case br:
      case yr:
      case gr:
        e = Hr(e, 0)
      case mr:
        e = Ir(e, 1)
      case hr:
      case vr:
        e = Wr(e, 0)
      case pr:
        e = Lr(e, 0)
      case dr:
        e = Fr(e, 0)
      case fr:
        e = Cr(e, 0)
    }
    return (
      t === yr && (e = Dr(e, Ur(e) % 10, 'year')),
      t === br && (e = Dr(e, Ur(e) % 100, 'year')),
      t === hr &&
        (e = (function(e, t, n) {
          var r = (zr(e) + 7 - (n || 0)) % 7
          return void 0 === t ? r : _r(e, t - r, vr)
        })(e, 0, n)),
      e
    )
  }
  function Or(e, t, n) {
    switch (((e = Mr((e = new Date(e)), t, n)), t)) {
      case br:
      case yr:
      case gr:
      case mr:
      case hr:
        ;(e = Dr((e = _r(e, 1, t)), 1, vr)).setHours(23, 59, 59, 999)
        break
      case vr:
        e.setHours(23, 59, 59, 999)
        break
      case pr:
      case dr:
      case fr:
        e = Dr((e = _r(e, 1, t)), 1, ur)
    }
    return e
  }
  var xr = Br(function(e, t) {
      return e === t
    }),
    kr = Br(function(e, t) {
      return e > t
    }),
    Tr = Br(function(e, t) {
      return e >= t
    }),
    Ar = Br(function(e, t) {
      return e < t
    }),
    jr = Br(function(e, t) {
      return e <= t
    })
  function Nr() {
    return new Date(Math.min.apply(Math, arguments))
  }
  function Pr() {
    return new Date(Math.max.apply(Math, arguments))
  }
  function Rr(e, t, n, r) {
    return (r = r || 'day'), (!t || Tr(e, t, r)) && (!n || jr(e, n, r))
  }
  var Cr = Vr('Milliseconds'),
    Fr = Vr('Seconds'),
    Lr = Vr('Minutes'),
    Wr = Vr('Hours'),
    zr = Vr('Day'),
    Ir = Vr('Date'),
    Hr = Vr('Month'),
    Ur = Vr('FullYear')
  function Vr(e) {
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
  function Br(e) {
    return function(t, n, r) {
      return e(+Mr(t, r), +Mr(n, r))
    }
  }
  var Yr = { seconds: 1e3, minutes: 6e4, hours: 36e5, day: 864e5 }
  function Kr(e, t) {
    var n = Mr(e, 'month')
    return Mr(n, 'week', t.startOfWeek())
  }
  function $r(e, t) {
    var n = Or(e, 'month')
    return Or(n, 'week', t.startOfWeek())
  }
  function qr(e, t) {
    for (var n = Kr(e, t), r = $r(e, t), o = []; jr(n, r, 'day'); )
      o.push(n), (n = _r(n, 1, 'day'))
    return o
  }
  function Xr(e, t) {
    var n = Mr(e, t)
    return xr(n, e) ? n : _r(n, 1, t)
  }
  function Gr(e, t, n) {
    void 0 === n && (n = 'day')
    for (var r = e, o = []; jr(r, t, n); ) o.push(r), (r = _r(r, 1, n))
    return o
  }
  function Zr(e, t) {
    return null == t && null == e
      ? null
      : (null == t && (t = new Date()),
        null == e && (e = new Date()),
        (e = Mr(e, 'day')),
        (e = Wr(e, Wr(t))),
        (e = Lr(e, Lr(t))),
        (e = Fr(e, Fr(t))),
        Cr(e, Cr(t)))
  }
  function Jr(e) {
    return 0 === Wr(e) && 0 === Lr(e) && 0 === Fr(e) && 0 === Cr(e)
  }
  function Qr(e, t, n) {
    return n && 'milliseconds' !== n
      ? Math.round(Math.abs(+Mr(e, n) / Yr[n] - +Mr(t, n) / Yr[n]))
      : Math.abs(+e - +t)
  }
  function eo(e, t, n) {
    var r = -1,
      o = e.length
    t < 0 && (t = -t > o ? 0 : o + t),
      (n = n > o ? o : n) < 0 && (n += o),
      (o = t > n ? 0 : (n - t) >>> 0),
      (t >>>= 0)
    for (var a = Array(o); ++r < o; ) a[r] = e[r + t]
    return a
  }
  function to(e, t, n) {
    if (!Le(n)) return !1
    var r = typeof t
    return (
      !!('number' == r ? Vt(n) && Mt(t, n.length) : 'string' == r && t in n) &&
      Pe(n[t], e)
    )
  }
  var no = /\s/
  var ro = /^\s+/
  function oo(e) {
    return e
      ? e
          .slice(
            0,
            (function(e) {
              for (var t = e.length; t-- && no.test(e.charAt(t)); );
              return t
            })(e) + 1
          )
          .replace(ro, '')
      : e
  }
  var ao = '[object Symbol]'
  function io(e) {
    return 'symbol' == typeof e || (Ee(e) && we(e) == ao)
  }
  var so = NaN,
    co = /^[-+]0x[0-9a-f]+$/i,
    lo = /^0b[01]+$/i,
    uo = /^0o[0-7]+$/i,
    fo = parseInt
  var po = 1 / 0,
    vo = 1.7976931348623157e308
  function ho(e) {
    return e
      ? (e = (function(e) {
          if ('number' == typeof e) return e
          if (io(e)) return so
          if (Le(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e
            e = Le(t) ? t + '' : t
          }
          if ('string' != typeof e) return 0 === e ? e : +e
          e = oo(e)
          var n = lo.test(e)
          return n || uo.test(e)
            ? fo(e.slice(2), n ? 2 : 8)
            : co.test(e)
            ? so
            : +e
        })(e)) === po || e === -po
        ? (e < 0 ? -1 : 1) * vo
        : e == e
        ? e
        : 0
      : 0 === e
      ? e
      : 0
  }
  function mo(e) {
    var t = ho(e),
      n = t % 1
    return t == t ? (n ? t - n : t) : 0
  }
  var go = Math.ceil,
    yo = Math.max
  function bo(e, t, n) {
    t = (n ? to(e, t, n) : void 0 === t) ? 1 : yo(mo(t), 0)
    var r = null == e ? 0 : e.length
    if (!r || t < 1) return []
    for (var o = 0, a = 0, i = Array(go(r / t)); o < r; )
      i[a++] = eo(e, o, (o += t))
    return i
  }
  function wo(e) {
    return (e && e.ownerDocument) || document
  }
  function Eo(e, t) {
    return (function(e) {
      var t = wo(e)
      return (t && t.defaultView) || window
    })(e).getComputedStyle(e, t)
  }
  var So = /([A-Z])/g
  var _o = /^ms-/
  function Do(e) {
    return (function(e) {
      return e.replace(So, '-$1').toLowerCase()
    })(e).replace(_o, '-ms-')
  }
  var Mo = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i
  function Oo(e, t) {
    var n = '',
      r = ''
    if ('string' == typeof t)
      return e.style.getPropertyValue(Do(t)) || Eo(e).getPropertyValue(Do(t))
    Object.keys(t).forEach(function(o) {
      var a = t[o]
      a || 0 === a
        ? !(function(e) {
            return !(!e || !Mo.test(e))
          })(o)
          ? (n += Do(o) + ': ' + a + ';')
          : (r += o + '(' + a + ') ')
        : e.style.removeProperty(Do(o))
    }),
      r && (n += 'transform: ' + r + ';'),
      (e.style.cssText += ';' + n)
  }
  function xo(e, t) {
    return e.contains
      ? e.contains(t)
      : e.compareDocumentPosition
      ? e === t || !!(16 & e.compareDocumentPosition(t))
      : void 0
  }
  function ko(e) {
    return 'window' in e && e.window === e
      ? e
      : ('nodeType' in (t = e) &&
          t.nodeType === document.DOCUMENT_NODE &&
          e.defaultView) ||
          !1
    var t
  }
  function To(e) {
    var t = 'pageXOffset' === e ? 'scrollLeft' : 'scrollTop'
    return function(n, r) {
      var o = ko(n)
      if (void 0 === r) return o ? o[e] : n[t]
      o ? o.scrollTo(o[e], r) : (n[t] = r)
    }
  }
  var Ao = To('pageXOffset'),
    jo = To('pageYOffset')
  function No(e) {
    var t = wo(e),
      n = { top: 0, left: 0, height: 0, width: 0 },
      r = t && t.documentElement
    return r && xo(r, e)
      ? (void 0 !== e.getBoundingClientRect && (n = e.getBoundingClientRect()),
        (n = {
          top: n.top + jo(r) - (r.clientTop || 0),
          left: n.left + Ao(r) - (r.clientLeft || 0),
          width: n.width,
          height: n.height,
        }))
      : n
  }
  var Po = function(e) {
    return !!e && 'offsetParent' in e
  }
  var Ro = function(e) {
    return e.nodeName && e.nodeName.toLowerCase()
  }
  function Co(e, t) {
    var n,
      r = { top: 0, left: 0 }
    if ('fixed' === Oo(e, 'position')) n = e.getBoundingClientRect()
    else {
      var o =
        t ||
        (function(e) {
          for (
            var t = wo(e), n = e && e.offsetParent;
            Po(n) && 'HTML' !== n.nodeName && 'static' === Oo(n, 'position');

          )
            n = n.offsetParent
          return n || t.documentElement
        })(e)
      ;(n = No(e)), 'html' !== Ro(o) && (r = No(o))
      var a = String(Oo(o, 'borderTopWidth') || 0)
      r.top += parseInt(a, 10) - jo(o) || 0
      var s = String(Oo(o, 'borderLeftWidth') || 0)
      r.left += parseInt(s, 10) - Ao(o) || 0
    }
    var c = String(Oo(e, 'marginTop') || 0),
      l = String(Oo(e, 'marginLeft') || 0)
    return i({}, n, {
      top: n.top - r.top - (parseInt(c, 10) || 0),
      left: n.left - r.left - (parseInt(l, 10) || 0),
    })
  }
  var Fo = [
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
    Lo = (function(e) {
      function t() {
        return e.apply(this, arguments) || this
      }
      l(t, e)
      var n = t.prototype
      return (
        (n.mouseOver = function(e, t) {
          for (
            var n = document.querySelectorAll("[dataid='" + e + "']"), r = 0;
            r < n.length;
            r++
          )
            n[r].style.backgroundColor = '1' === t ? '#b4defc' : '#fbcbb0'
        }),
        (n.mouseOut = function(e, t) {
          for (
            var n = document.querySelectorAll("[dataid='" + e + "']"), r = 0;
            r < n.length;
            r++
          )
            n[r].style.backgroundColor = '1' === t ? '#D9EFFF' : '#FFEBE0'
        }),
        (n.render = function() {
          var e = this,
            t = this.props,
            n = t.style,
            o = t.className,
            a = t.event,
            c = t.selected,
            l = t.isAllDay,
            u = t.continuesPrior,
            f = t.continuesAfter,
            d = t.accessors,
            p = t.getters,
            v = t.children,
            h = t.components.eventWrapper,
            m = t.reactStyle,
            g = s(t, Fo)
          delete g.resizable
          var y = d.title(a),
            b = d.tooltip(a),
            w = d.end(a),
            E = d.start(a),
            S = d.allDay(a),
            _ = l || S || Qr(E, Xr(w, 'day'), 'day') > 1,
            D = p.eventProp(a, E, w, c),
            M = r.createElement(
              'a',
              {
                href: a.url ? a.url : '#',
                className: G(
                  m['rbc-event-content'],
                  '2' === a.type && m['rbc-event-content-train']
                ),
                target: '_blank',
                title: b || void 0,
                dataid: a.id,
                onMouseOver: function() {
                  e.mouseOver(a.id, a.type)
                },
                onMouseOut: function() {
                  e.mouseOut(a.id, a.type)
                },
              },
              y
            )
          return r.createElement(
            h,
            i({}, this.props, { type: 'date' }),
            r.createElement(
              'div',
              i({}, g, {
                tabIndex: 0,
                style: i({}, D.style, n),
                className: G(
                  m['rbc-event'],
                  o,
                  D.className,
                  c && m['rbc-selected'],
                  _ && m['rbc-event-allday'],
                  u && m['rbc-event-continues-prior'],
                  f && m['rbc-event-continues-after']
                ),
              }),
              'function' == typeof v ? v(M) : M
            )
          )
        }),
        t
      )
    })(r.Component)
  function Wo(e, t) {
    return !(!e || null == t) && -1 !== [].concat(t).indexOf(e)
  }
  function zo(e, t) {
    return (e.right - e.left) / t
  }
  function Io(e, t, n, r) {
    var o = zo(e, r)
    return n
      ? r - 1 - Math.floor((t - e.left) / o)
      : Math.floor((t - e.left) / o)
  }
  Lo.propTypes = {}
  var Ho = (function(e) {
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
          a = No(n.popperRef.current),
          i = a.top,
          s = a.left,
          c = a.width,
          l = a.height,
          u = window.innerHeight + jo(window),
          f = window.innerWidth + Ao(window),
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
            return r.createElement(Lo, {
              key: n,
              type: 'popup',
              event: t,
              getters: a,
              onSelect: l,
              accessors: s,
              components: c,
              onDoubleClick: u,
              onKeyPress: f,
              continuesPrior: Ar(s.end(t), d, 'day'),
              continuesAfter: Tr(s.start(t), p, 'day'),
              selected: Wo(t, o),
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
  Ho.propTypes = {}
  var Uo = r.forwardRef(function(e, t) {
    return r.createElement(Ho, i({ popperRef: t }, e))
  })
  function Vo() {
    return t.useState(null)
  }
  var Bo = function(e) {
    return e && 'function' != typeof e
      ? function(t) {
          e.current = t
        }
      : e
  }
  function Yo(e, n) {
    return t.useMemo(
      function() {
        return (function(e, t) {
          var n = Bo(e),
            r = Bo(t)
          return function(e) {
            n && n(e), r && r(e)
          }
        })(e, n)
      },
      [e, n]
    )
  }
  var Ko = 'top',
    $o = 'bottom',
    qo = 'right',
    Xo = 'left',
    Go = 'auto',
    Zo = [Ko, $o, qo, Xo],
    Jo = 'start',
    Qo = 'end',
    ea = 'clippingParents',
    ta = 'viewport',
    na = 'popper',
    ra = 'reference',
    oa = Zo.reduce(function(e, t) {
      return e.concat([t + '-' + Jo, t + '-' + Qo])
    }, []),
    aa = [].concat(Zo, [Go]).reduce(function(e, t) {
      return e.concat([t, t + '-' + Jo, t + '-' + Qo])
    }, []),
    ia = [
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
  function sa(e) {
    return e.split('-')[0]
  }
  function ca(e) {
    if (null == e) return window
    if ('[object Window]' !== e.toString()) {
      var t = e.ownerDocument
      return (t && t.defaultView) || window
    }
    return e
  }
  function la(e) {
    return e instanceof ca(e).Element || e instanceof Element
  }
  function ua(e) {
    return e instanceof ca(e).HTMLElement || e instanceof HTMLElement
  }
  function fa(e) {
    return (
      'undefined' != typeof ShadowRoot &&
      (e instanceof ca(e).ShadowRoot || e instanceof ShadowRoot)
    )
  }
  var da = Math.round
  function pa(e, t) {
    void 0 === t && (t = !1)
    var n = e.getBoundingClientRect(),
      r = 1,
      o = 1
    if (ua(e) && t) {
      var a = e.offsetHeight,
        i = e.offsetWidth
      i > 0 && (r = n.width / i || 1), a > 0 && (o = n.height / a || 1)
    }
    return {
      width: da(n.width / r),
      height: da(n.height / o),
      top: da(n.top / o),
      right: da(n.right / r),
      bottom: da(n.bottom / o),
      left: da(n.left / r),
      x: da(n.left / r),
      y: da(n.top / o),
    }
  }
  function va(e) {
    var t = pa(e),
      n = e.offsetWidth,
      r = e.offsetHeight
    return (
      Math.abs(t.width - n) <= 1 && (n = t.width),
      Math.abs(t.height - r) <= 1 && (r = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
    )
  }
  function ha(e, t) {
    var n = t.getRootNode && t.getRootNode()
    if (e.contains(t)) return !0
    if (n && fa(n)) {
      var r = t
      do {
        if (r && e.isSameNode(r)) return !0
        r = r.parentNode || r.host
      } while (r)
    }
    return !1
  }
  function ma(e) {
    return e ? (e.nodeName || '').toLowerCase() : null
  }
  function ga(e) {
    return ca(e).getComputedStyle(e)
  }
  function ya(e) {
    return ['table', 'td', 'th'].indexOf(ma(e)) >= 0
  }
  function ba(e) {
    return (
      (la(e) ? e.ownerDocument : e.document) || window.document
    ).documentElement
  }
  function wa(e) {
    return 'html' === ma(e)
      ? e
      : e.assignedSlot || e.parentNode || (fa(e) ? e.host : null) || ba(e)
  }
  function Ea(e) {
    return ua(e) && 'fixed' !== ga(e).position ? e.offsetParent : null
  }
  function Sa(e) {
    for (var t = ca(e), n = Ea(e); n && ya(n) && 'static' === ga(n).position; )
      n = Ea(n)
    return n &&
      ('html' === ma(n) || ('body' === ma(n) && 'static' === ga(n).position))
      ? t
      : n ||
          (function(e) {
            var t = -1 !== navigator.userAgent.toLowerCase().indexOf('firefox')
            if (
              -1 !== navigator.userAgent.indexOf('Trident') &&
              ua(e) &&
              'fixed' === ga(e).position
            )
              return null
            for (
              var n = wa(e);
              ua(n) && ['html', 'body'].indexOf(ma(n)) < 0;

            ) {
              var r = ga(n)
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
  function _a(e) {
    return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
  }
  var Da = Math.max,
    Ma = Math.min,
    Oa = Math.round
  function xa(e, t, n) {
    return Da(e, Ma(t, n))
  }
  function ka(e) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e)
  }
  function Ta(e, t) {
    return t.reduce(function(t, n) {
      return (t[n] = e), t
    }, {})
  }
  var Aa = function(e, t) {
    return ka(
      'number' !=
        typeof (e =
          'function' == typeof e
            ? e(Object.assign({}, t.rects, { placement: t.placement }))
            : e)
        ? e
        : Ta(e, Zo)
    )
  }
  function ja(e) {
    return e.split('-')[1]
  }
  var Na = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
  function Pa(e) {
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
              return { x: Oa(Oa(t * r) / r) || 0, y: Oa(Oa(n * r) / r) || 0 }
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
      y = Xo,
      b = Ko,
      w = window
    if (l) {
      var E = Sa(n),
        S = 'clientHeight',
        _ = 'clientWidth'
      E === ca(n) &&
        'static' !== ga((E = ba(n))).position &&
        'absolute' === s &&
        ((S = 'scrollHeight'), (_ = 'scrollWidth')),
        (E = E),
        (o !== Ko && ((o !== Xo && o !== qo) || a !== Qo)) ||
          ((b = $o), (h -= E[S] - r.height), (h *= c ? 1 : -1)),
        (o !== Xo && ((o !== Ko && o !== $o) || a !== Qo)) ||
          ((y = qo), (p -= E[_] - r.width), (p *= c ? 1 : -1))
    }
    var D,
      M = Object.assign({ position: s }, l && Na)
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
  var Ra = { passive: !0 }
  var Ca = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
  function Fa(e) {
    return e.replace(/left|right|bottom|top/g, function(e) {
      return Ca[e]
    })
  }
  var La = { start: 'end', end: 'start' }
  function Wa(e) {
    return e.replace(/start|end/g, function(e) {
      return La[e]
    })
  }
  function za(e) {
    var t = ca(e)
    return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset }
  }
  function Ia(e) {
    return pa(ba(e)).left + za(e).scrollLeft
  }
  function Ha(e) {
    var t = ga(e),
      n = t.overflow,
      r = t.overflowX,
      o = t.overflowY
    return /auto|scroll|overlay|hidden/.test(n + o + r)
  }
  function Ua(e, t) {
    var n
    void 0 === t && (t = [])
    var r = (function e(t) {
        return ['html', 'body', '#document'].indexOf(ma(t)) >= 0
          ? t.ownerDocument.body
          : ua(t) && Ha(t)
          ? t
          : e(wa(t))
      })(e),
      o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
      a = ca(r),
      i = o ? [a].concat(a.visualViewport || [], Ha(r) ? r : []) : r,
      s = t.concat(i)
    return o ? s : s.concat(Ua(wa(i)))
  }
  function Va(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    })
  }
  function Ba(e, t) {
    return t === ta
      ? Va(
          (function(e) {
            var t = ca(e),
              n = ba(e),
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
              { width: o, height: a, x: i + Ia(e), y: s }
            )
          })(e)
        )
      : ua(t)
      ? (function(e) {
          var t = pa(e)
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
      : Va(
          (function(e) {
            var t,
              n = ba(e),
              r = za(e),
              o = null == (t = e.ownerDocument) ? void 0 : t.body,
              a = Da(
                n.scrollWidth,
                n.clientWidth,
                o ? o.scrollWidth : 0,
                o ? o.clientWidth : 0
              ),
              i = Da(
                n.scrollHeight,
                n.clientHeight,
                o ? o.scrollHeight : 0,
                o ? o.clientHeight : 0
              ),
              s = -r.scrollLeft + Ia(e),
              c = -r.scrollTop
            return (
              'rtl' === ga(o || n).direction &&
                (s += Da(n.clientWidth, o ? o.clientWidth : 0) - a),
              { width: a, height: i, x: s, y: c }
            )
          })(ba(e))
        )
  }
  function Ya(e, t, n) {
    var r =
        'clippingParents' === t
          ? (function(e) {
              var t = Ua(wa(e)),
                n =
                  ['absolute', 'fixed'].indexOf(ga(e).position) >= 0 && ua(e)
                    ? Sa(e)
                    : e
              return la(n)
                ? t.filter(function(e) {
                    return la(e) && ha(e, n) && 'body' !== ma(e)
                  })
                : []
            })(e)
          : [].concat(t),
      o = [].concat(r, [n]),
      a = o[0],
      i = o.reduce(function(t, n) {
        var r = Ba(e, n)
        return (
          (t.top = Da(r.top, t.top)),
          (t.right = Ma(r.right, t.right)),
          (t.bottom = Ma(r.bottom, t.bottom)),
          (t.left = Da(r.left, t.left)),
          t
        )
      }, Ba(e, a))
    return (
      (i.width = i.right - i.left),
      (i.height = i.bottom - i.top),
      (i.x = i.left),
      (i.y = i.top),
      i
    )
  }
  function Ka(e) {
    var t,
      n = e.reference,
      r = e.element,
      o = e.placement,
      a = o ? sa(o) : null,
      i = o ? ja(o) : null,
      s = n.x + n.width / 2 - r.width / 2,
      c = n.y + n.height / 2 - r.height / 2
    switch (a) {
      case Ko:
        t = { x: s, y: n.y - r.height }
        break
      case $o:
        t = { x: s, y: n.y + n.height }
        break
      case qo:
        t = { x: n.x + n.width, y: c }
        break
      case Xo:
        t = { x: n.x - r.width, y: c }
        break
      default:
        t = { x: n.x, y: n.y }
    }
    var l = a ? _a(a) : null
    if (null != l) {
      var u = 'y' === l ? 'height' : 'width'
      switch (i) {
        case Jo:
          t[l] = t[l] - (n[u] / 2 - r[u] / 2)
          break
        case Qo:
          t[l] = t[l] + (n[u] / 2 - r[u] / 2)
      }
    }
    return t
  }
  function $a(e, t) {
    void 0 === t && (t = {})
    var n = t,
      r = n.placement,
      o = void 0 === r ? e.placement : r,
      a = n.boundary,
      i = void 0 === a ? ea : a,
      s = n.rootBoundary,
      c = void 0 === s ? ta : s,
      l = n.elementContext,
      u = void 0 === l ? na : l,
      f = n.altBoundary,
      d = void 0 !== f && f,
      p = n.padding,
      v = void 0 === p ? 0 : p,
      h = ka('number' != typeof v ? v : Ta(v, Zo)),
      m = u === na ? ra : na,
      g = e.rects.popper,
      y = e.elements[d ? m : u],
      b = Ya(la(y) ? y : y.contextElement || ba(e.elements.popper), i, c),
      w = pa(e.elements.reference),
      E = Ka({ reference: w, element: g, strategy: 'absolute', placement: o }),
      S = Va(Object.assign({}, g, E)),
      _ = u === na ? S : w,
      D = {
        top: b.top - _.top + h.top,
        bottom: _.bottom - b.bottom + h.bottom,
        left: b.left - _.left + h.left,
        right: _.right - b.right + h.right,
      },
      M = e.modifiersData.offset
    if (u === na && M) {
      var O = M[o]
      Object.keys(D).forEach(function(e) {
        var t = [qo, $o].indexOf(e) >= 0 ? 1 : -1,
          n = [Ko, $o].indexOf(e) >= 0 ? 'y' : 'x'
        D[e] += O[n] * t
      })
    }
    return D
  }
  function qa(e, t) {
    void 0 === t && (t = {})
    var n = t,
      r = n.placement,
      o = n.boundary,
      a = n.rootBoundary,
      i = n.padding,
      s = n.flipVariations,
      c = n.allowedAutoPlacements,
      l = void 0 === c ? aa : c,
      u = ja(r),
      f = u
        ? s
          ? oa
          : oa.filter(function(e) {
              return ja(e) === u
            })
        : Zo,
      d = f.filter(function(e) {
        return l.indexOf(e) >= 0
      })
    0 === d.length && (d = f)
    var p = d.reduce(function(t, n) {
      return (
        (t[n] = $a(e, {
          placement: n,
          boundary: o,
          rootBoundary: a,
          padding: i,
        })[sa(n)]),
        t
      )
    }, {})
    return Object.keys(p).sort(function(e, t) {
      return p[e] - p[t]
    })
  }
  function Xa(e, t, n) {
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
  function Ga(e) {
    return [Ko, qo, $o, Xo].some(function(t) {
      return e[t] >= 0
    })
  }
  function Za(e, t, n) {
    void 0 === n && (n = !1)
    var r,
      o,
      a = ua(t),
      i =
        ua(t) &&
        (function(e) {
          var t = e.getBoundingClientRect(),
            n = t.width / e.offsetWidth || 1,
            r = t.height / e.offsetHeight || 1
          return 1 !== n || 1 !== r
        })(t),
      s = ba(t),
      c = pa(e, i),
      l = { scrollLeft: 0, scrollTop: 0 },
      u = { x: 0, y: 0 }
    return (
      (a || (!a && !n)) &&
        (('body' !== ma(t) || Ha(s)) &&
          (l =
            (r = t) !== ca(r) && ua(r)
              ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop }
              : za(r)),
        ua(t)
          ? (((u = pa(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
          : s && (u.x = Ia(s))),
      {
        x: c.left + l.scrollLeft - u.x,
        y: c.top + l.scrollTop - u.y,
        width: c.width,
        height: c.height,
      }
    )
  }
  function Ja(e) {
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
  var Qa = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
  function ei() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n]
    return !t.some(function(e) {
      return !(e && 'function' == typeof e.getBoundingClientRect)
    })
  }
  var ti = (function(e) {
    void 0 === e && (e = {})
    var t = e,
      n = t.defaultModifiers,
      r = void 0 === n ? [] : n,
      o = t.defaultOptions,
      a = void 0 === o ? Qa : o
    return function(e, t, n) {
      void 0 === n && (n = a)
      var o,
        i,
        s = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, Qa, a),
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
                reference: la(e)
                  ? Ua(e)
                  : e.contextElement
                  ? Ua(e.contextElement)
                  : [],
                popper: Ua(t),
              })
            var i,
              l,
              d = (function(e) {
                var t = Ja(e)
                return ia.reduce(function(e, n) {
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
              if (ei(t, n)) {
                ;(s.rects = {
                  reference: Za(t, Sa(n), 'fixed' === s.options.strategy),
                  popper: va(n),
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
      if (!ei(e, t)) return u
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
            i = $a(t, { elementContext: 'reference' }),
            s = $a(t, { altBoundary: !0 }),
            c = Xa(i, r),
            l = Xa(s, o, a),
            u = Ga(c),
            f = Ga(l)
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
          t.modifiersData[n] = Ka({
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
              placement: sa(t.placement),
              variation: ja(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: o,
            }
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              Pa(
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
                Pa(
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
            c = ca(t.elements.popper),
            l = [].concat(t.scrollParents.reference, t.scrollParents.popper)
          return (
            a &&
              l.forEach(function(e) {
                e.addEventListener('scroll', n.update, Ra)
              }),
            s && c.addEventListener('resize', n.update, Ra),
            function() {
              a &&
                l.forEach(function(e) {
                  e.removeEventListener('scroll', n.update, Ra)
                }),
                s && c.removeEventListener('resize', n.update, Ra)
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
            i = aa.reduce(function(e, n) {
              return (
                (e[n] = (function(e, t, n) {
                  var r = sa(e),
                    o = [Xo, Ko].indexOf(r) >= 0 ? -1 : 1,
                    a =
                      'function' == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    i = a[0],
                    s = a[1]
                  return (
                    (i = i || 0),
                    (s = (s || 0) * o),
                    [Xo, qo].indexOf(r) >= 0 ? { x: s, y: i } : { x: i, y: s }
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
                g = sa(m),
                y =
                  c ||
                  (g !== m && v
                    ? (function(e) {
                        if (sa(e) === Go) return []
                        var t = Fa(e)
                        return [Wa(e), t, Wa(t)]
                      })(m)
                    : [Fa(m)]),
                b = [m].concat(y).reduce(function(e, n) {
                  return e.concat(
                    sa(n) === Go
                      ? qa(t, {
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
                S = new Map(),
                _ = !0,
                D = b[0],
                M = 0;
              M < b.length;
              M++
            ) {
              var O = b[M],
                x = sa(O),
                k = ja(O) === Jo,
                T = [Ko, $o].indexOf(x) >= 0,
                A = T ? 'width' : 'height',
                j = $a(t, {
                  placement: O,
                  boundary: u,
                  rootBoundary: f,
                  altBoundary: d,
                  padding: l,
                }),
                N = T ? (k ? qo : Xo) : k ? $o : Ko
              w[A] > E[A] && (N = Fa(N))
              var P = Fa(N),
                R = []
              if (
                (a && R.push(j[x] <= 0),
                s && R.push(j[N] <= 0, j[P] <= 0),
                R.every(function(e) {
                  return e
                }))
              ) {
                ;(D = O), (_ = !1)
                break
              }
              S.set(O, R)
            }
            if (_)
              for (
                var C = function(e) {
                    var t = b.find(function(t) {
                      var n = S.get(t)
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
            m = $a(t, {
              boundary: c,
              rootBoundary: l,
              padding: f,
              altBoundary: u,
            }),
            g = sa(t.placement),
            y = ja(t.placement),
            b = !y,
            w = _a(g),
            E = 'x' === w ? 'y' : 'x',
            S = t.modifiersData.popperOffsets,
            _ = t.rects.reference,
            D = t.rects.popper,
            M =
              'function' == typeof h
                ? h(Object.assign({}, t.rects, { placement: t.placement }))
                : h,
            O = { x: 0, y: 0 }
          if (S) {
            if (a || s) {
              var x = 'y' === w ? Ko : Xo,
                k = 'y' === w ? $o : qo,
                T = 'y' === w ? 'height' : 'width',
                A = S[w],
                j = S[w] + m[x],
                N = S[w] - m[k],
                P = p ? -D[T] / 2 : 0,
                R = y === Jo ? _[T] : D[T],
                C = y === Jo ? -D[T] : -_[T],
                F = t.elements.arrow,
                L = p && F ? va(F) : { width: 0, height: 0 },
                W = t.modifiersData['arrow#persistent']
                  ? t.modifiersData['arrow#persistent'].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                z = W[x],
                I = W[k],
                H = xa(0, _[T], L[T]),
                U = b ? _[T] / 2 - P - H - z - M : R - H - z - M,
                V = b ? -_[T] / 2 + P + H + I + M : C + H + I + M,
                B = t.elements.arrow && Sa(t.elements.arrow),
                Y = B ? ('y' === w ? B.clientTop || 0 : B.clientLeft || 0) : 0,
                K = t.modifiersData.offset
                  ? t.modifiersData.offset[t.placement][w]
                  : 0,
                $ = S[w] + U - K - Y,
                q = S[w] + V - K
              if (a) {
                var X = xa(p ? Ma(j, $) : j, A, p ? Da(N, q) : N)
                ;(S[w] = X), (O[w] = X - A)
              }
              if (s) {
                var G = 'x' === w ? Ko : Xo,
                  Z = 'x' === w ? $o : qo,
                  J = S[E],
                  Q = J + m[G],
                  ee = J - m[Z],
                  te = xa(p ? Ma(Q, $) : Q, J, p ? Da(ee, q) : ee)
                ;(S[E] = te), (O[E] = te - J)
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
            s = sa(n.placement),
            c = _a(s),
            l = [Xo, qo].indexOf(s) >= 0 ? 'height' : 'width'
          if (a && i) {
            var u = Aa(o.padding, n),
              f = va(a),
              d = 'y' === c ? Ko : Xo,
              p = 'y' === c ? $o : qo,
              v =
                n.rects.reference[l] +
                n.rects.reference[c] -
                i[c] -
                n.rects.popper[l],
              h = i[c] - n.rects.reference[c],
              m = Sa(a),
              g = m
                ? 'y' === c
                  ? m.clientHeight || 0
                  : m.clientWidth || 0
                : 0,
              y = v / 2 - h / 2,
              b = u[d],
              w = g - f[l] - u[p],
              E = g / 2 - f[l] / 2 + y,
              S = xa(b, E, w),
              _ = c
            n.modifiersData[r] =
              (((t = {})[_] = S), (t.centerOffset = S - E), t)
          }
        },
        effect: function(e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? '[data-popper-arrow]' : n
          null != r &&
            ('string' != typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            ha(t.elements.popper, r) &&
            (t.elements.arrow = r)
        },
        requires: ['popperOffsets'],
        requiresIfExists: ['preventOverflow'],
      },
    ],
  })
  function ni(e) {
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
  var ri = function(e) {
      return {
        position: e,
        top: '0',
        left: '0',
        opacity: '0',
        pointerEvents: 'none',
      }
    },
    oi = { name: 'applyStyles', enabled: !1 },
    ai = {
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
    ii = []
  var si = !(
      'undefined' == typeof window ||
      !window.document ||
      !window.document.createElement
    ),
    ci = !1,
    li = !1
  try {
    var ui = {
      get passive() {
        return (ci = !0)
      },
      get once() {
        return (li = ci = !0)
      },
    }
    si &&
      (window.addEventListener('test', ui, ui),
      window.removeEventListener('test', ui, !0))
  } catch (v) {}
  function fi(e, t, n, r) {
    return (
      (function(e, t, n, r) {
        if (r && 'boolean' != typeof r && !li) {
          var o = r.once,
            a = r.capture,
            i = n
          !li &&
            o &&
            ((i =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, a), n.call(this, r)
              }),
            (n.__once = i)),
            e.addEventListener(t, i, ci ? r : a)
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
  function di(e) {
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
  var pi = function(e) {
      return wo(
        (function(e) {
          return e && 'setState' in e ? o.findDOMNode(e) : null != e ? e : null
        })(e)
      )
    },
    vi = 27,
    hi = function() {}
  var mi = function(e) {
    return e && ('current' in e ? e.current : e)
  }
  var gi = function(e) {
    var t
    return 'undefined' == typeof document
      ? null
      : null == e
      ? wo().body
      : ('function' == typeof e && (e = e()),
        e && 'current' in e && (e = e.current),
        ((null == (t = e) ? void 0 : t.nodeType) && e) || null)
  }
  function yi(e, n) {
    var r = t.useState(function() {
        return gi(e)
      }),
      o = r[0],
      a = r[1]
    if (!o) {
      var i = gi(e)
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
          var t = gi(e)
          t !== o && a(t)
        },
        [e, o]
      ),
      o
    )
  }
  function bi(e) {
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
  var wi = r.forwardRef(function(e, n) {
    var a = e.flip,
      c = e.offset,
      l = e.placement,
      u = e.containerPadding,
      f = void 0 === u ? 5 : u,
      d = e.popperConfig,
      p = void 0 === d ? {} : d,
      v = e.transition,
      h = Vo(),
      m = h[0],
      g = h[1],
      y = Vo(),
      b = y[0],
      w = y[1],
      E = Yo(g, n),
      S = yi(e.container),
      _ = yi(e.target),
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
          v = void 0 === p ? ii : p,
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
          b = ni(
            t.useState({
              placement: u,
              update: g,
              forceUpdate: y,
              attributes: {},
              styles: { popper: ri(d), arrow: {} },
            })
          ),
          w = b[0],
          E = b[1],
          S = t.useMemo(
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
                  modifiers: [].concat(v, [S, oi]),
                })
            },
            [d, u, S, c]
          ),
          t.useEffect(
            function() {
              if (c && null != e && null != n)
                return (
                  (m.current = ti(
                    e,
                    n,
                    i({}, h, {
                      placement: u,
                      strategy: d,
                      modifiers: [].concat(v, [ai, S]),
                    })
                  )),
                  function() {
                    null != m.current &&
                      (m.current.destroy(),
                      (m.current = void 0),
                      E(function(e) {
                        return i({}, e, {
                          attributes: {},
                          styles: { popper: ri(d) },
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
        _,
        m,
        bi({
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
      A = s(x, ['styles', 'attributes'])
    e.show ? M && O(!1) : e.transition || M || O(!0)
    var j,
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
      ((j = m),
      (N = e.onHide),
      (P = {
        disabled: !e.rootClose || e.rootCloseDisabled,
        clickTrigger: e.rootCloseEvent,
      }),
      (C = (R = void 0 === P ? {} : P).disabled),
      (F = R.clickTrigger),
      (L = void 0 === F ? 'click' : F),
      (W = t.useRef(!1)),
      (z = N || hi),
      (I = t.useCallback(
        function(e) {
          var t,
            n = mi(j)
          W.current = !(
            n &&
            ((t = e), !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)) &&
            (function(e) {
              return 0 === e.button
            })(e) &&
            !xo(n, e.target)
          )
        },
        [j]
      )),
      (H = di(function(e) {
        W.current || z(e)
      })),
      (U = di(function(e) {
        e.keyCode === vi && z(e)
      })),
      t.useEffect(
        function() {
          if (!C && null != j) {
            var e = window.event,
              t = pi(mi(j)),
              n = fi(t, L, I, !0),
              r = fi(t, L, function(t) {
                t !== e ? H(t) : (e = void 0)
              }),
              o = fi(t, 'keyup', function(t) {
                t !== e ? U(t) : (e = void 0)
              }),
              a = []
            return (
              'ontouchstart' in t.documentElement &&
                (a = [].slice.call(t.body.children).map(function(e) {
                  return fi(e, 'mousemove', hi)
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
        [j, C, L, I, H, U]
      ),
      !V)
    )
      return null
    var B = e.children(
      i({}, A, {
        show: !!e.show,
        props: i({}, T.popper, { style: k.popper, ref: E }),
        arrowProps: i({}, T.arrow, { style: k.arrow, ref: w }),
      })
    )
    if (v) {
      var Y = e.onExit,
        K = e.onExiting,
        $ = e.onEnter,
        q = e.onEntering,
        X = e.onEntered
      B = r.createElement(
        v,
        {
          in: e.show,
          appear: !0,
          onExit: Y,
          onExiting: K,
          onExited: function() {
            O(!0), e.onExited && e.onExited.apply(e, arguments)
          },
          onEnter: $,
          onEntering: q,
          onEntered: X,
        },
        B
      )
    }
    return S ? o.createPortal(B, S) : null
  })
  function Ei(e, t) {
    var n = ko(e)
    return n ? n.innerHeight : t ? e.clientHeight : No(e).height
  }
  ;(wi.displayName = 'Overlay'),
    (wi.propTypes = {
      show: I.bool,
      placement: I.oneOf(aa),
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
  var Si,
    _i = Function.prototype.bind.call(Function.prototype.call, [].slice)
  function Di(e, t) {
    if (!Si) {
      var n = document.body,
        r =
          n.matches ||
          n.matchesSelector ||
          n.webkitMatchesSelector ||
          n.mozMatchesSelector ||
          n.msMatchesSelector
      Si = function(e, t) {
        return r.call(e, t)
      }
    }
    return Si(e, t)
  }
  function Mi(e, t, n) {
    return void 0 === n && (n = document), fi(n, e, t, { passive: !1 })
  }
  function Oi(e, t) {
    var n = t.clientX,
      r = t.clientY
    return (function(e, t, n) {
      e.closest && !n && e.closest(t)
      var r = e
      do {
        if (Di(r, t)) return r
        r = r.parentElement
      } while (r && r !== n && r.nodeType === document.ELEMENT_NODE)
      return null
    })(document.elementFromPoint(n, r), '.rbc-event', e)
  }
  function xi(e, t) {
    return !!Oi(e, t)
  }
  function ki(e) {
    var t = e
    return (
      e.touches && e.touches.length && (t = e.touches[0]),
      { clientX: t.clientX, clientY: t.clientY, pageX: t.pageX, pageY: t.pageY }
    )
  }
  var Ti = (function() {
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
        (this._removeTouchMoveWindowListener = Mi(
          'touchmove',
          function() {},
          window
        )),
        (this._removeKeyDownListener = Mi('keydown', this._keyListener)),
        (this._removeKeyUpListener = Mi('keyup', this._keyListener)),
        (this._removeDropFromOutsideListener = Mi(
          'drop',
          this._dropFromOutsideListener
        )),
        (this._removeDragOverFromOutsideListener = Mi(
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
        return !(!t || !this.selecting) && Ai(t, ji(e))
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
              (o = Mi('touchmove', function() {
                return c()
              })),
              (a = Mi('touchend', function() {
                return c()
              }))
          },
          s = Mi('touchstart', i),
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
          t = Mi('mousedown', function(t) {
            e._removeInitialEventListener(),
              e._handleInitialEvent(t),
              (e._removeInitialEventListener = Mi(
                'mousedown',
                e._handleInitialEvent
              ))
          }),
          n = Mi('touchstart', function(t) {
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
        var t = ki(e),
          n = t.pageX,
          r = t.pageY,
          o = t.clientX,
          a = t.clientY
        this.emit('dropFromOutside', { x: n, y: r, clientX: o, clientY: a }),
          e.preventDefault()
      }),
      (t._dragOverFromOutsideListener = function(e) {
        var t = ki(e),
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
            n = ki(e),
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
            !(c = s) || xo(c, document.elementFromPoint(l, u)))
          ) {
            var c, l, u
            if (!this.globalMouse && s && !xo(s, e.target)) {
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
                !Ai(
                  {
                    top: (t = ji(s)).top - d,
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
                  ;(this._removeEndListener = Mi(
                    'mouseup',
                    this._handleTerminatingEvent
                  )),
                    (this._onEscListener = Mi(
                      'keydown',
                      this._handleTerminatingEvent
                    )),
                    (this._removeMoveListener = Mi(
                      'mousemove',
                      this._handleMoveEvent
                    ))
                  break
                case 'touchstart':
                  this._handleMoveEvent(e),
                    (this._removeEndListener = Mi(
                      'touchend',
                      this._handleTerminatingEvent
                    )),
                    (this._removeMoveListener = Mi(
                      'touchmove',
                      this._handleMoveEvent
                    ))
              }
          }
        }
      }),
      (t._handleTerminatingEvent = function(e) {
        var t = ki(e),
          n = t.pageX,
          r = t.pageY
        if (
          ((this.selecting = !1),
          this._removeEndListener && this._removeEndListener(),
          this._removeMoveListener && this._removeMoveListener(),
          this._initialEventData)
        ) {
          var o = !this.container || xo(this.container(), e.target),
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
        var t = ki(e),
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
            o = ki(e),
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
  function Ai(e, t, n) {
    void 0 === n && (n = 0)
    var r = ji(e),
      o = r.top,
      a = r.left,
      i = r.right,
      s = void 0 === i ? a : i,
      c = r.bottom,
      l = void 0 === c ? o : c,
      u = ji(t),
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
  function ji(e) {
    if (!e.getBoundingClientRect) return e
    var t = e.getBoundingClientRect(),
      n = t.left + Ni('left'),
      r = t.top + Ni('top')
    return {
      top: r,
      left: n,
      right: (e.offsetWidth || 0) + n,
      bottom: (e.offsetHeight || 0) + r,
    }
  }
  function Ni(e) {
    return 'left' === e
      ? window.pageXOffset || document.body.scrollLeft || 0
      : 'top' === e
      ? window.pageYOffset || document.body.scrollTop || 0
      : void 0
  }
  var Pi = (function(e) {
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
                  xr(e, d, 'day') && s['rbc-today'],
                  a && Hr(a) !== Hr(e) && s['rbc-off-range-bg']
                ),
              })
            )
          })
        )
      }),
      (o._selectable = function() {
        var e = this,
          t = n.findDOMNode(this),
          r = (this._selector = new Ti(this.props.container, {
            longPressThreshold: this.props.longPressThreshold,
          })),
          o = function(r, o) {
            if (!xi(n.findDOMNode(e), r)) {
              var a = ji(t),
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
                var l = Io(a, r.x, c, s.length)
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
            var l = ji(t),
              u = (function(e, t, n, r, o) {
                var a = -1,
                  i = -1,
                  s = r - 1,
                  c = zo(t, r),
                  l = Io(t, n.x, o, r),
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
              return !xi(n.findDOMNode(e), t)
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
  Pi.propTypes = {}
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
  var Ri = { segments: [], selected: {} },
    Ci = function(e, t) {
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
      return r.createElement(Lo, {
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
        selected: Wo(t, n),
        resizable: d,
        reactStyle: p,
      })
    },
    Fi = function(e, t, n, o, a) {
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
    Li = (function(e) {
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
                p = Ci(e.props, a)
              return (
                d && t.push(Fi(o, d, f + '_gap')),
                t.push(Fi(o, u, f, p, i)),
                (s = l + 1),
                t
              )
            }, [])
          )
        }),
        t
      )
    })(r.Component)
  ;(Li.propTypes = {}), (Li.defaultProps = i({}, Ri))
  var Wi = '__lodash_hash_undefined__'
  function zi(e) {
    var t = -1,
      n = null == e ? 0 : e.length
    for (this.__data__ = new ut(); ++t < n; ) this.add(e[t])
  }
  function Ii(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
      if (t(e[n], n, e)) return !0
    return !1
  }
  ;(zi.prototype.add = zi.prototype.push = function(e) {
    return this.__data__.set(e, Wi), this
  }),
    (zi.prototype.has = function(e) {
      return this.__data__.has(e)
    })
  var Hi = 1,
    Ui = 2
  function Vi(e, t, n, r, o, a) {
    var i = n & Hi,
      s = e.length,
      c = t.length
    if (s != c && !(i && c > s)) return !1
    var l = a.get(e),
      u = a.get(t)
    if (l && u) return l == t && u == e
    var f = -1,
      d = !0,
      p = n & Ui ? new zi() : void 0
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
          !Ii(t, function(e, t) {
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
  function Bi(e) {
    var t = -1,
      n = Array(e.size)
    return (
      e.forEach(function(e, r) {
        n[++t] = [r, e]
      }),
      n
    )
  }
  function Yi(e) {
    var t = -1,
      n = Array(e.size)
    return (
      e.forEach(function(e) {
        n[++t] = e
      }),
      n
    )
  }
  var Ki = 1,
    $i = 2,
    qi = '[object Boolean]',
    Xi = '[object Date]',
    Gi = '[object Error]',
    Zi = '[object Map]',
    Ji = '[object Number]',
    Qi = '[object RegExp]',
    es = '[object Set]',
    ts = '[object String]',
    ns = '[object Symbol]',
    rs = '[object ArrayBuffer]',
    os = '[object DataView]',
    as = fe ? fe.prototype : void 0,
    is = as ? as.valueOf : void 0
  var ss = 1,
    cs = Object.prototype.hasOwnProperty
  var ls = 1,
    us = '[object Arguments]',
    fs = '[object Array]',
    ds = '[object Object]',
    ps = Object.prototype.hasOwnProperty
  function vs(e, t, n, r, o, a) {
    var i = ke(e),
      s = ke(t),
      c = i ? fs : yn(e),
      l = s ? fs : yn(t),
      u = (c = c == us ? ds : c) == ds,
      f = (l = l == us ? ds : l) == ds,
      d = c == l
    if (d && St(e)) {
      if (!St(t)) return !1
      ;(i = !0), (u = !1)
    }
    if (d && !u)
      return (
        a || (a = new dt()),
        i || Ct(e)
          ? Vi(e, t, n, r, o, a)
          : (function(e, t, n, r, o, a, i) {
              switch (n) {
                case os:
                  if (
                    e.byteLength != t.byteLength ||
                    e.byteOffset != t.byteOffset
                  )
                    return !1
                  ;(e = e.buffer), (t = t.buffer)
                case rs:
                  return !(
                    e.byteLength != t.byteLength || !a(new wn(e), new wn(t))
                  )
                case qi:
                case Xi:
                case Ji:
                  return Pe(+e, +t)
                case Gi:
                  return e.name == t.name && e.message == t.message
                case Qi:
                case ts:
                  return e == t + ''
                case Zi:
                  var s = Bi
                case es:
                  var c = r & Ki
                  if ((s || (s = Yi), e.size != t.size && !c)) return !1
                  var l = i.get(e)
                  if (l) return l == t
                  ;(r |= $i), i.set(e, t)
                  var u = Vi(s(e), s(t), r, o, a, i)
                  return i.delete(e), u
                case ns:
                  if (is) return is.call(e) == is.call(t)
              }
              return !1
            })(e, t, c, n, r, o, a)
      )
    if (!(n & ls)) {
      var p = u && ps.call(e, '__wrapped__'),
        v = f && ps.call(t, '__wrapped__')
      if (p || v) {
        var h = p ? e.value() : e,
          m = v ? t.value() : t
        return a || (a = new dt()), o(h, m, n, r, a)
      }
    }
    return (
      !!d &&
      (a || (a = new dt()),
      (function(e, t, n, r, o, a) {
        var i = n & ss,
          s = an(e),
          c = s.length
        if (c != an(t).length && !i) return !1
        for (var l = c; l--; ) {
          var u = s[l]
          if (!(i ? u in t : cs.call(t, u))) return !1
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
  function hs(e, t, n, r, o) {
    return (
      e === t ||
      (null == e || null == t || (!Ee(e) && !Ee(t))
        ? e != e && t != t
        : vs(e, t, n, r, hs, o))
    )
  }
  var ms = 1,
    gs = 2
  function ys(e) {
    return e == e && !Le(e)
  }
  function bs(e, t) {
    return function(n) {
      return null != n && n[e] === t && (void 0 !== t || e in Object(n))
    }
  }
  function ws(e) {
    var t = (function(e) {
      for (var t = Bt(e), n = t.length; n--; ) {
        var r = t[n],
          o = e[r]
        t[n] = [r, o, ys(o)]
      }
      return t
    })(e)
    return 1 == t.length && t[0][2]
      ? bs(t[0][0], t[0][1])
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
                  var f = new dt()
                  if (r) var d = r(l, u, c, e, t, f)
                  if (!(void 0 === d ? hs(u, l, ms | gs, r, f) : d)) return !1
                }
              }
              return !0
            })(n, e, t)
          )
        }
  }
  var Es = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    Ss = /^\w*$/
  function _s(e, t) {
    if (ke(e)) return !1
    var n = typeof e
    return (
      !(
        'number' != n &&
        'symbol' != n &&
        'boolean' != n &&
        null != e &&
        !io(e)
      ) ||
      Ss.test(e) || !Es.test(e) || (null != t && e in Object(t))
    )
  }
  var Ds = 'Expected a function'
  function Ms(e, t) {
    if ('function' != typeof e || (null != t && 'function' != typeof t))
      throw new TypeError(Ds)
    var n = function() {
      var r = arguments,
        o = t ? t.apply(this, r) : r[0],
        a = n.cache
      if (a.has(o)) return a.get(o)
      var i = e.apply(this, r)
      return (n.cache = a.set(o, i) || a), i
    }
    return (n.cache = new (Ms.Cache || ut)()), n
  }
  Ms.Cache = ut
  var Os = 500
  var xs,
    ks,
    Ts,
    As = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    js = /\\(\\)?/g,
    Ns =
      ((xs = function(e) {
        var t = []
        return (
          46 === e.charCodeAt(0) && t.push(''),
          e.replace(As, function(e, n, r, o) {
            t.push(r ? o.replace(js, '$1') : n || e)
          }),
          t
        )
      }),
      (ks = Ms(xs, function(e) {
        return Ts.size === Os && Ts.clear(), e
      })),
      (Ts = ks.cache),
      ks)
  function Ps(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r; )
      o[n] = t(e[n], n, e)
    return o
  }
  var Rs = 1 / 0,
    Cs = fe ? fe.prototype : void 0,
    Fs = Cs ? Cs.toString : void 0
  function Ls(e) {
    if ('string' == typeof e) return e
    if (ke(e)) return Ps(e, Ls) + ''
    if (io(e)) return Fs ? Fs.call(e) : ''
    var t = e + ''
    return '0' == t && 1 / e == -Rs ? '-0' : t
  }
  function Ws(e) {
    return null == e ? '' : Ls(e)
  }
  function zs(e, t) {
    return ke(e) ? e : _s(e, t) ? [e] : Ns(Ws(e))
  }
  var Is = 1 / 0
  function Hs(e) {
    if ('string' == typeof e || io(e)) return e
    var t = e + ''
    return '0' == t && 1 / e == -Is ? '-0' : t
  }
  function Us(e, t) {
    for (var n = 0, r = (t = zs(t, e)).length; null != e && n < r; )
      e = e[Hs(t[n++])]
    return n && n == r ? e : void 0
  }
  function Vs(e, t) {
    return null != e && t in Object(e)
  }
  function Bs(e, t) {
    return (
      null != e &&
      (function(e, t, n) {
        for (var r = -1, o = (t = zs(t, e)).length, a = !1; ++r < o; ) {
          var i = Hs(t[r])
          if (!(a = null != e && n(e, i))) break
          e = e[i]
        }
        return a || ++r != o
          ? a
          : !!(o = null == e ? 0 : e.length) &&
              xt(o) &&
              Mt(i, o) &&
              (ke(e) || xe(e))
      })(e, t, Vs)
    )
  }
  var Ys = 1,
    Ks = 2
  function $s(e, t) {
    return _s(e) && ys(t)
      ? bs(Hs(e), t)
      : function(n) {
          var r = (function(e, t, n) {
            var r = null == e ? void 0 : Us(e, t)
            return void 0 === r ? n : r
          })(n, e)
          return void 0 === r && r === t ? Bs(n, e) : hs(t, r, Ys | Ks)
        }
  }
  function qs(e) {
    return e
  }
  function Xs(e) {
    return _s(e)
      ? ((t = Hs(e)),
        function(e) {
          return null == e ? void 0 : e[t]
        })
      : (function(e) {
          return function(t) {
            return Us(t, e)
          }
        })(e)
    var t
  }
  function Gs(e) {
    return 'function' == typeof e
      ? e
      : null == e
      ? qs
      : 'object' == typeof e
      ? ke(e)
        ? $s(e[0], e[1])
        : ws(e)
      : Xs(e)
  }
  var Zs = Math.max
  function Js(e, t) {
    return (
      void 0 === t && (t = 'day'),
      { first: e[0], last: _r(e[e.length - 1], 1, t) }
    )
  }
  function Qs(e, t, n) {
    var r = Js(t),
      o = r.first,
      a = r.last,
      i = Qr(o, a, 'day'),
      s = Pr(Mr(n.start(e), 'day'), o),
      c = Nr(Xr(n.end(e), 'day'), a),
      l = (function(e, t, n) {
        var r = null == e ? 0 : e.length
        if (!r) return -1
        var o = null == n ? 0 : mo(n)
        return (
          o < 0 && (o = Zs(r + o, 0)),
          (function(e, t, n, r) {
            for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o; )
              if (t(e[a], a, e)) return a
            return -1
          })(e, Gs(t), o)
        )
      })(t, function(e) {
        return xr(e, s, 'day')
      }),
      u = Qr(s, c, 'day')
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
  function ec(e, t) {
    void 0 === t && (t = 1 / 0)
    var n,
      r,
      o,
      a = [],
      i = []
    for (n = 0; n < e.length; n++) {
      for (o = e[n], r = 0; r < a.length && nc(o, a[r]); r++);
      r >= t ? i.push(o) : (a[r] || (a[r] = [])).push(o)
    }
    for (n = 0; n < a.length; n++)
      a[n].sort(function(e, t) {
        return e.left - t.left
      })
    return { levels: a, extra: i }
  }
  function tc(e, t, n, r) {
    var o = Mr(r.start(e), 'day'),
      a = r.end(e),
      i = jr(o, n, 'day'),
      s = xr(o, a, 'minutes') ? Tr(a, t, 'minutes') : kr(a, t, 'minutes')
    return i && s
  }
  function nc(e, t) {
    return t.some(function(t) {
      return t.left <= e.right && t.right >= e.left
    })
  }
  function rc(e, t, n) {
    var r = +Mr(n.start(e), 'day') - +Mr(n.start(t), 'day'),
      o = Qr(n.start(e), Xr(n.end(e), 'day'), 'day'),
      a = Qr(n.start(t), Xr(n.end(t), 'day'), 'day')
    return (
      r ||
      Math.max(a, 1) - Math.max(o, 1) ||
      !!n.allDay(t) - !!n.allDay(e) ||
      +n.start(e) - +n.start(t) ||
      +n.end(e) - +n.end(t)
    )
  }
  var oc = Math.ceil,
    ac = Math.max
  var ic,
    sc = function(e, t, n) {
      return (
        n && 'number' != typeof n && to(e, t, n) && (t = n = void 0),
        (e = ho(e)),
        void 0 === t ? ((t = e), (e = 0)) : (t = ho(t)),
        (function(e, t, n, r) {
          for (
            var o = -1, a = ac(oc((t - e) / (n || 1)), 0), i = Array(a);
            a--;

          )
            (i[r ? a : ++o] = e), (e += n)
          return i
        })(e, t, (n = void 0 === n ? (e < t ? 1 : -1) : ho(n)), ic)
      )
    },
    cc = function(e, t) {
      return e.left <= t && e.right >= t
    },
    lc = function(e, t) {
      return e.filter(function(e) {
        return cc(e, t)
      }).length
    },
    uc = (function(e) {
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
              a = ec(t).levels[0],
              i = 1,
              s = 1,
              c = [];
            i <= n;

          ) {
            var l = '_lvl_' + i,
              u =
                a.filter(function(e) {
                  return cc(e, i)
                })[0] || {},
              f = u.event,
              d = u.left,
              p = u.right,
              v = u.span
            if (f) {
              var h = Math.max(0, d - s)
              if (this.canRenderSlotEvent(d, v)) {
                var m = Ci(this.props, f)
                h && c.push(Fi(n, h, l + '_gap')),
                  c.push(Fi(n, v, l, m, o)),
                  (s = i = p + 1)
              } else
                h && c.push(Fi(n, h, l + '_gap')),
                  c.push(Fi(n, 1, l, this.renderShowMore(t, i), o)),
                  (s = i += 1)
            } else i++
          }
          return r.createElement('div', { className: o['rbc-row'] }, c)
        }),
        (n.canRenderSlotEvent = function(e, t) {
          var n = this.props.segments
          return sc(e, e + t).every(function(e) {
            return 1 === lc(n, e)
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
            v = lc(e, t),
            h = f[t - 1],
            m = h.getMonth() + 1,
            g = h.getDate()
          e =
            e.filter(function(e) {
              return (
                new Date(e.event.start).getFullYear() === h.getFullYear() &&
                new Date(e.event.start).getMonth() === h.getMonth() &&
                new Date(e.event.start).getDate() <= g &&
                (new Date(e.event.end).getDate() >= g ||
                  new Date(e.event.end).getMonth() > h.getMonth())
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
  ;(uc.propTypes = {}), (uc.defaultProps = i({}, Ri))
  var fc = function(e) {
      var t = e.children,
        n = (void 0).props.reactStyle
      return r.createElement(
        'div',
        { className: n['rbc-row-content-scroll-container'] },
        t
      )
    },
    dc =
      Number.isNaN ||
      function(e) {
        return 'number' == typeof e && e != e
      }
  function pc(e, t) {
    if (e.length !== t.length) return !1
    for (var n = 0; n < e.length; n++)
      if (((r = e[n]), (o = t[n]), !(r === o || (dc(r) && dc(o))))) return !1
    var r, o
    return !0
  }
  function vc(e, t) {
    var n
    void 0 === t && (t = pc)
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
  var hc = function(e, t) {
      return e.left <= t && e.right >= t
    },
    mc = function(e, t) {
      return e[0].range === t[0].range && e[0].events === t[0].events
    }
  var gc = (function(e) {
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
            _i(o.querySelectorAll(a)))[0]
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
            className: G(i['rbc-date-cell'], xr(e, a(), 'day') && i['rbc-now']),
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
          return vc(function(t) {
            for (
              var n = t.range,
                r = t.events,
                o = t.maxRows,
                a = t.minRows,
                s = t.accessors,
                c = Js(n),
                l = c.first,
                u = c.last,
                f = r.map(function(e) {
                  return Qs(e, n, s)
                }),
                d = ec(f, Math.max(o - 1, 1)),
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
                  return xr(t, e, 'day')
                })
              },
              getEventsForSlot: function(e) {
                return f
                  .filter(function(t) {
                    return hc(t, e)
                  })
                  .map(function(e) {
                    return e.event
                  })
              },
              continuesPrior: function(e) {
                return Ar(s.start(e), l, 'day')
              },
              continuesAfter: function(e) {
                var t = s.end(e)
                return xr(s.start(e), t, 'minutes')
                  ? Tr(t, u, 'minutes')
                  : kr(t, u, 'minutes')
              },
            }
          }, mc)
        })()),
        t
      )
    }
    l(t, e)
    var o = t.prototype
    return (
      (o.getRowLimit = function() {
        var e = Ei(this.eventRow),
          t = this.headingRow ? Ei(this.headingRow) : 0,
          r = Ei(n.findDOMNode(this)) - t
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
          S = e.resourceId,
          _ = e.longPressThreshold,
          D = e.isAllDay,
          M = e.resizable,
          O = e.showAllEvents,
          x = e.lang,
          k = e.newWeeks,
          T = e.clickMore,
          A = e.reactStyle
        if (u) return this.renderDummy()
        var j = this.slotMetrics(this.props),
          N = j.levels,
          P = j.extra,
          R = O ? fc : a,
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
            resourceId: S,
            slotMetrics: j,
            resizable: M,
          }
        return r.createElement(
          'div',
          { className: s, role: 'rowgroup' },
          r.createElement(Pi, {
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
            longPressThreshold: _,
            resourceId: S,
            reactStyle: A,
          }),
          r.createElement(
            'div',
            {
              className: G(
                A['rbc-row-content'],
                O && A['rbc-row-content-scrollable']
              ),
              role: 'row',
            },
            h &&
              r.createElement(
                'div',
                { className: A['rbc-row'], ref: this.createHeadingRef },
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
                    Li,
                    i({ key: t, segments: e }, F, { reactStyle: A })
                  )
                }),
                !!P.length &&
                  r.createElement(
                    uc,
                    i(
                      {
                        segments: P,
                        lang: x,
                        range: o,
                        newWeeks: k,
                        onShowMore: this.handleShowMore,
                        clickMore: T,
                        newMoreShow: k,
                        reactStyle: A,
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
  ;(gc.propTypes = {}), (gc.defaultProps = { minRows: 0, maxRows: 1 / 0 })
  var yc = function(e) {
    var t = e.label
    return r.createElement(
      'span',
      { role: 'columnheader', 'aria-sort': 'none' },
      t
    )
  }
  yc.propTypes = {}
  var bc = function(e) {
    var n,
      o,
      a,
      i = e.label,
      s = e.onDrillDown,
      c = e.reactStyle,
      l = e.clickActiveDate,
      u = e.clickActiveEle,
      f = e.date,
      d = e.lang,
      p = e.detailUrl
    i = i.replace(/^0/, '')
    var v = '' + (f.getMonth() + 1) + f.getDate()
    return (
      (u = u.filter(function(e) {
        return e.key === v && e.value
      })),
      r.createElement(
        'div',
        { className: c['current-text-wrap'], role: 'cell', onClick: s },
        r.createElement(
          'span',
          { className: c['current-text'], 'data-id': 'ref' + v },
          i
        ),
        (null == (n = u[0]) ? void 0 : n.value) &&
          l.date &&
          r.createElement(
            'div',
            {
              className: G(c['wap-render-list'], c['wap-render-list-position']),
              'data-class': 'wap-render-list',
            },
            r.createElement(
              'div',
              { className: c['active-title'], 'data-id': 'ref' + v },
              l.date
            ),
            (null == (o = l.list) ? void 0 : o.length) > 0
              ? r.createElement(
                  'div',
                  { className: c['wap-calendar-list'] },
                  null == (a = l.list)
                    ? void 0
                    : a.map(function(e, n) {
                        return r.createElement(
                          t.Fragment,
                          { key: n },
                          n < 6 &&
                            r.createElement(
                              'div',
                              {
                                className: c['active-li'],
                                'data-class': 'active-li',
                                'data-id': 'ref' + v,
                              },
                              r.createElement(
                                'a',
                                {
                                  'data-id': 'ref' + v,
                                  href: e.url,
                                  title: e.title,
                                  target: '_blank',
                                  className: c['active-li-title'],
                                  'data-class': 'active-li-title',
                                },
                                e.title
                              ),
                              r.createElement(
                                'div',
                                {
                                  className: c['active-text'],
                                  'data-class': 'active-text',
                                  'data-id': 'ref' + v,
                                },
                                e.campaignTimeType,
                                '：',
                                e.campaignStartTime,
                                ' 至',
                                ' ',
                                e.campaignEndTime
                              )
                            )
                        )
                      }),
                  l.list.length > 6 &&
                    r.createElement(
                      'a',
                      {
                        href: '//' + p,
                        target: '_blank',
                        className: c['view-more'],
                        'data-id': 'ref' + v,
                      },
                      'cn' === d
                        ? '查看全部' + l.list.length + '个活动'
                        : 'View More ' + l.list.length + ' Activities'
                    )
                )
              : r.createElement(
                  'div',
                  {
                    className: c['active-li-none'],
                    'data-class': 'active-li-none',
                  },
                  'cn' === d ? '暂无活动' : 'No Activity Now'
                )
          )
      )
    )
  }
  bc.propTypes = {}
  var wc = ['date', 'className'],
    Ec = function(e, t, n, r) {
      return (e =
        e &&
        e.map(function(e) {
          return (
            (e.start = e.start.replace(/-/g, '/')),
            (e.end = e.end.replace(/-/g, '/')),
            e
          )
        })).filter(function(e) {
        return tc(e, t, n, r)
      })
    },
    Sc = !0,
    _c = (function(e) {
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
              S = b.newWeeks
            return (
              (a = Ec(a, e[0], e[e.length - 1], p)).sort(function(e, t) {
                return rc(e, t, p)
              }),
              r.createElement(gc, {
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
                newWeeks: S,
                clickMore: t.clickMore,
                reactStyle: y,
              })
            )
          }),
          (t.currectData = function(e, t) {
            var n = function(e, t) {
              var n =
                  (e = t ? e : new Date(e && e.replace(/-/g, '/'))).getMonth() <
                  9
                    ? '0' + (e.getMonth() + 1)
                    : e.getMonth() + 1,
                r = e.getDate() < 10 ? '0' + e.getDate() : e.getDate()
              return Date.parse(e.getFullYear() + '-' + n + '-' + r)
            }
            return (
              t &&
              t.filter(function(t) {
                return n(t.start) <= n(e, 'date') && n(t.end) >= n(e, 'date')
              })
            )
          }),
          (t.readerDateHeading = function(e) {
            var n,
              o,
              a = e.date,
              c = e.className,
              l = s(e, wc),
              u = t.props,
              f = u.date,
              d = u.getDrilldownView,
              p = u.localizer,
              v = u.events,
              h = u.reactStyle,
              m = u.lang,
              g = u.detailUrl,
              y = t.state,
              b = y.clickActiveEle,
              w = y.clickActiveDate,
              E = y.clickActiveEleHeader,
              S = Hr(a) !== Hr(f),
              _ = xr(a, f, 'day'),
              D = d(a),
              M = p.format(a, 'dateFormat'),
              O = t.props.components.dateHeader || bc,
              x = '' + (a.getMonth() + 1) + a.getDate(),
              k = E.filter(function(e) {
                if (e.key === x) return e
              })
            return r.createElement(
              'div',
              i({}, l, {
                className: G(
                  c,
                  S && h['rbc-off-range'],
                  _ && h['rbc-current'],
                  (null == (n = t.currectData(a, v)) ? void 0 : n.length) > 0 &&
                    h['rbc-data'],
                  (null == (o = k[0]) ? void 0 : o.value) && h['rbc-active']
                ),
                role: 'cell',
              }),
              r.createElement(O, {
                label: M,
                date: a,
                drilldownView: D,
                isOffRange: S,
                reactStyle: h,
                onDrillDown: function(e) {
                  return t.handleHeadingClick(a, v, e, x)
                },
                clickActiveDate: w,
                clickActiveEle: b,
                lang: m,
                detailUrl: g,
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
            var a = t.props,
              i = a.lang,
              s = a.localizer,
              c = t.state.clickActiveEle,
              l = c
            l = l.map(function(e) {
              return (e.value = !1), e.key === o && (e.value = !0), e
            })
            var u = 0
            c.map(function(e, t) {
              e.key === o && (u = t)
            })
            var f = 'th',
              d = e.getDate()
            f =
              1 === d || 21 === d || 31 === d
                ? 'st'
                : 2 === d || 22 === d
                ? 'nd'
                : 3 === d || 23 === d
                ? 'rd'
                : 'th'
            var p,
              v =
                'cn' === i
                  ? e.getMonth() + 1 + '月' + e.getDate() + '日活动'
                  : 'Activities on ' +
                    s.messages[i].month[e.getMonth()] +
                    ' ' +
                    e.getDate() +
                    f
            t.setState({
              clickActiveEle: l,
              clickActiveDate: { list: t.currectData(e, n), date: v },
              newWeeksIndex: u,
              clickActiveEleHeader: ((p = l), sr(p, cr | lr)),
            }),
              t.props.clickDate(e)
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
              var p = Co(o, n.findDOMNode(ie(t)))
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
            clickActiveEleHeader: [],
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
            r = e.wapCalendar,
            o = t.getMonth() + 1 + '月' + t.getDate() + '日活动'
          this.setState({
            needLimitMeasure: !xr(t, this.props.date, 'month'),
            clickActiveDate: {
              list: Sc && r ? this.currectData(t, n) : [],
              date: Sc && r ? o : null,
            },
          }),
            (Sc = !1)
        }),
        (o.updateData = function() {
          var e = this.props,
            t = e.date,
            n = bo(qr(t, e.localizer), 7).map(function(e) {
              return e.map(function(e) {
                return (e = '' + (e.getMonth() + 1) + e.getDate())
              })
            }),
            r = '' + (t.getMonth() + 1) + t.getDate(),
            o = Ne(n).map(function(e) {
              return (e = { key: e, value: e === r && Sc })
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
            f = a.query,
            d = bo(qr(i, s), 7)
          return (
            (this._weekCount = d.length),
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
                  this.renderHeaders(d[0])
                ),
                d.map(this.renderWeek),
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
                          var o = e.url,
                            a =
                              o && -1 !== o.indexOf('?')
                                ? o + '&app=' + (f && f.app)
                                : o + '?app=' + (f && f.app),
                            s = f && f.isApp ? a : e.url
                          return r.createElement(
                            'div',
                            {
                              className: u['active-li'],
                              key: t,
                              'data-class': 'active-li',
                              onClick: function() {
                                n.props.clickDate(i, e, s)
                              },
                            },
                            r.createElement(
                              'a',
                              {
                                href: s,
                                title: e.title,
                                target: '_blank',
                                className: u['active-li-title'],
                                'data-class': 'active-li-title',
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
            o = n,
            a = t.clickActiveEle
          e.target.getAttribute('data-id') !== 'ref' + o[r].key &&
            ((o[this.state.newWeeksIndex].isMore = !1),
            (a[this.state.newWeeksIndex].value = !1),
            this.setState({ newWeeks: o, clickActiveEle: a }))
        }),
        (o.renderHeaders = function(e) {
          var t = this.props,
            n = t.localizer,
            o = t.components,
            a = t.lang,
            i = t.reactStyle,
            s = t.showPosition,
            c = t.wapCalendar,
            l = e[0],
            u = e[e.length - 1],
            f = o.header || yc
          a = a || 'en'
          var d = s || c ? n.messages[a].wapWeeks : n.messages[a].weeks
          return Gr(l, u, 'day').map(function(e, t) {
            return r.createElement(
              'div',
              {
                key: 'header_' + t,
                className: i['rbc-header'],
                'data-class': 'rbc-header',
              },
              r.createElement(f, { date: e, localizer: n, label: d[t] })
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
            wi,
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
                Uo,
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
  ;(_c.propTypes = {}),
    (_c.range = function(e, t) {
      var n = t.localizer
      return { start: Kr(e, n), end: $r(e, n) }
    }),
    (_c.navigate = function(e, t) {
      switch (t) {
        case Z.PREVIOUS:
          return _r(e, -1, 'month')
        case Z.NEXT:
          return _r(e, 1, 'month')
        default:
          return e
      }
    }),
    (_c.title = function(e, t) {
      return t.localizer.format(e, 'monthHeaderFormat')
    })
  var Dc = new Date().getTime()
  var Mc = 'clearTimeout',
    Oc = function(e) {
      var t = new Date().getTime(),
        n = Math.max(0, 16 - (t - Dc)),
        r = setTimeout(e, n)
      return (Dc = t), r
    },
    xc = function(e, t) {
      return e + (e ? t[0].toUpperCase() + t.substr(1) : t) + 'AnimationFrame'
    }
  si &&
    ['', 'webkit', 'moz', 'o', 'ms'].some(function(e) {
      var t = xc(e, 'request')
      return (
        t in window &&
          ((Mc = xc(e, 'cancel')),
          (Oc = function(e) {
            return window[t](e)
          })),
        !!Oc
      )
    })
  var kc = function(e) {
      'function' == typeof window[Mc] && window[Mc](e)
    },
    Tc = Oc,
    Ac = function(e, t) {
      return e.getTimezoneOffset() - t.getTimezoneOffset()
    },
    jc = function(e, t, n, r) {
      return +Mr(e, 'minutes') + '' + +Mr(t, 'minutes') + n + '-' + r
    }
  function Nc(e) {
    for (
      var t = e.min,
        n = e.max,
        r = e.step,
        o = e.timeslots,
        a = jc(t, n, r, o),
        i = Mr(t, 'day'),
        s = Ac(i, t),
        c = 1 + Qr(t, n, 'minutes') + Ac(t, n),
        l = Qr(i, t, 'minutes') + s,
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
      var n = Qr(t, e, 'minutes') + Ac(t, e)
      return Math.min(n, c)
    }
    return (
      p.push(
        new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, l + y, 0, 0)
      ),
      {
        groups: d,
        update: function(e) {
          return jc(e) !== a ? Nc(e) : this
        },
        dateIsInGroup: function(e, t) {
          var r = d[t + 1]
          return Rr(e, d[t][0], r ? r[0] : n, 'minutes')
        },
        nextSlot: function(e) {
          var t = p[Math.min(p.indexOf(e) + 1, p.length - 1)]
          return t === e && (t = _r(e, r, 'minutes')), t
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
          if ((void 0 === n && (n = 0), Ar(e, t, 'minutes'))) return p[0]
          var o = Qr(t, e, 'minutes')
          return p[(o - (o % r)) / r + n]
        },
        startsBeforeDay: function(e) {
          return Ar(e, t, 'day')
        },
        startsAfterDay: function(e) {
          return kr(e, n, 'day')
        },
        startsBefore: function(e) {
          return Ar(Zr(t, e), t, 'minutes')
        },
        startsAfter: function(e) {
          return kr(Zr(n, e), n, 'minutes')
        },
        getRange: function(e, o, a, i) {
          a || (e = Nr(n, Pr(t, e))), i || (o = Nr(n, Pr(t, o)))
          var s = b(e),
            c = b(o),
            l =
              c > r * f && !xr(n, o)
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
  function Pc(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n]
      ;(r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r)
    }
  }
  var Rc = (function(e) {
    return function(t, n, r) {
      for (var o = -1, a = Object(t), i = r(t), s = i.length; s--; ) {
        var c = i[e ? s : ++o]
        if (!1 === n(a[c], c, a)) break
      }
      return t
    }
  })()
  function Cc(e, t) {
    return e && Rc(e, t, Bt)
  }
  var Fc = (function(e, t) {
    return function(n, r) {
      if (null == n) return n
      if (!Vt(n)) return e(n, r)
      for (
        var o = n.length, a = t ? o : -1, i = Object(n);
        (t ? a-- : ++a < o) && !1 !== r(i[a], a, i);

      );
      return n
    }
  })(Cc)
  function Lc(e, t) {
    if (e !== t) {
      var n = void 0 !== e,
        r = null === e,
        o = e == e,
        a = io(e),
        i = void 0 !== t,
        s = null === t,
        c = t == t,
        l = io(t)
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
  function Wc(e, t, n) {
    t = t.length
      ? Ps(t, function(e) {
          return ke(e)
            ? function(t) {
                return Us(t, 1 === e.length ? e[0] : e)
              }
            : e
        })
      : [qs]
    var r = -1
    return (
      (t = Ps(t, Tt(Gs))),
      (function(e, t) {
        var n = e.length
        for (e.sort(t); n--; ) e[n] = e[n].value
        return e
      })(
        (function(e, t) {
          var n = -1,
            r = Vt(e) ? Array(e.length) : []
          return (
            Fc(e, function(e, o, a) {
              r[++n] = t(e, o, a)
            }),
            r
          )
        })(e, function(e, n, o) {
          return {
            criteria: Ps(t, function(t) {
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
              var c = Lc(o[r], a[r])
              if (c) return r >= s ? c : c * ('desc' == n[r] ? -1 : 1)
            }
            return e.index - t.index
          })(e, t, n)
        }
      )
    )
  }
  var zc = Math.max
  function Ic(e, t, n) {
    return (
      (t = zc(void 0 === t ? e.length - 1 : t, 0)),
      function() {
        for (
          var r = arguments, o = -1, a = zc(r.length - t, 0), i = Array(a);
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
  var Hc = vt
      ? function(e, t) {
          return vt(e, 'toString', {
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
      : qs,
    Uc = 800,
    Vc = 16,
    Bc = Date.now
  var Yc = (function(e) {
    var t = 0,
      n = 0
    return function() {
      var r = Bc(),
        o = Vc - (r - n)
      if (((n = r), o > 0)) {
        if (++t >= Uc) return arguments[0]
      } else t = 0
      return e.apply(void 0, arguments)
    }
  })(Hc)
  function Kc(e, t) {
    return Yc(Ic(e, t, qs), e + '')
  }
  var $c = Kc(function(e, t) {
      if (null == e) return []
      var n = t.length
      return (
        n > 1 && to(e, t[0], t[1])
          ? (t = [])
          : n > 2 && to(t[0], t[1], t[2]) && (t = [t[0]]),
        Wc(e, je(t, 1), [])
      )
    }),
    qc = (function() {
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
        ]) && Pc(t.prototype, n),
        r && Pc(t, r),
        e
      )
    })()
  function Xc(e, t, n) {
    return (
      Math.abs(t.start - e.start) < n || (t.start > e.start && t.start < e.end)
    )
  }
  function Gc(e) {
    for (
      var t = e.events,
        n = e.minimumStartDifference,
        r = e.slotMetrics,
        o = e.accessors,
        a = (function(e) {
          for (
            var t = $c(e, [
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
            return new qc(e, { slotMetrics: r, accessors: o })
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
            Xc(r.rows[s], t, n) && (o = r.rows[s])
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
  function Zc(e, t, n) {
    for (var r = 0; r < e.friends.length; ++r)
      if (!(n.indexOf(e.friends[r]) > -1)) {
        ;(t = t > e.friends[r].idx ? t : e.friends[r].idx), n.push(e.friends[r])
        var o = Zc(e.friends[r], t, n)
        t = t > o ? t : o
      }
    return t
  }
  var Jc = {
    overlap: Gc,
    'no-overlap': function(e) {
      var t = Gc({
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
          ;(g = 100 / (Zc(t[m], 0, y) + 1)), (t[m].size = g)
          for (var b = 0; b < y.length; ++b) y[b].size = g
        }
      }
      for (var w = 0; w < t.length; ++w) {
        var E = t[w]
        E.style.left = E.idx * E.size
        for (var S = 0, _ = 0; _ < E.friends.length; ++_) {
          var D = E.friends[_]
          S = S > D ? S : D
        }
        S <= E.idx && (E.size = 100 - E.idx * E.size)
        var M = 0 === E.idx ? 0 : 3
        ;(E.style.width = 'calc(' + E.size + '% - ' + M + 'px)'),
          (E.style.height = 'calc(' + E.style.height + '% - 2px)'),
          (E.style.xOffset = 'calc(' + E.style.left + '% + ' + M + 'px)')
      }
      return t
    },
  }
  var Qc = (function(e) {
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
  function el(e) {
    return 'string' == typeof e ? e : e + '%'
  }
  function tl(e) {
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
      S = c.title(s),
      _ = c.tooltip(s),
      D = c.end(s),
      M = c.start(s),
      O = v.eventProp(s, M, D, u),
      x = o.height,
      k = o.top,
      T = o.width,
      A = o.xOffset,
      j = [
        r.createElement('div', { key: '1', className: 'rbc-event-label' }, f),
        r.createElement(
          'div',
          { key: '2', className: 'rbc-event-content' },
          w ? r.createElement(w, { event: s, title: S }) : S
        ),
      ],
      N = i(
        {},
        O.style,
        g
          ? (((t = {
              top: el(k),
              height: el(x),
              width: 'calc(' + T + ' + 10px)',
            })[l ? 'right' : 'left'] = el(Math.max(0, A))),
            t)
          : (((n = { top: el(k), width: el(T), height: el(x) })[
              l ? 'right' : 'left'
            ] = el(A)),
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
          title: _ ? ('string' == typeof f ? f + ': ' : '') + _ : void 0,
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
        j
      )
    )
  }
  Qc.propTypes = {}
  var nl = function(e) {
      var t = e.children,
        n = e.className,
        o = e.style
      return r.createElement('div', { className: n, style: o }, t)
    },
    rl = ['dayProp'],
    ol = ['eventContainerWrapper'],
    al = (function(e) {
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
                n in Jc && (r = Jc[n]),
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
              var S = w || m.startsBefore(y),
                _ = E || m.startsAfter(v)
              return r.createElement(tl, {
                style: p,
                event: d,
                label: a,
                key: 'evt_' + n,
                getters: u,
                rtl: i,
                components: f,
                continuesEarlier: S,
                continuesLater: _,
                accessors: c,
                selected: Wo(d, s),
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
              r = (t._selector = new Ti(
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
                  ((xr(r.startDate, i, 'minutes') &&
                    xr(r.endDate, s, 'minutes')) ||
                    !1 ===
                      n({ start: i, end: s, resourceId: t.props.resource }))) ||
                  (t.state.start === o.start &&
                    t.state.end === o.end &&
                    t.state.selecting === o.selecting) ||
                  t.setState(o)
              },
              a = function(n) {
                var r = t.slotMetrics.closestSlotFromPoint(n, ji(e))
                t.state.selecting || (t._initialSlot = r)
                var o = t._initialSlot
                jr(o, r)
                  ? (r = t.slotMetrics.nextSlot(r))
                  : kr(o, r) && (o = t.slotMetrics.nextSlot(o))
                var a = t.slotMetrics.getRange(Nr(o, r), Pr(o, r))
                return i({}, a, {
                  selecting: !0,
                  top: a.top + '%',
                  height: a.height + '%',
                })
              },
              s = function(e, r) {
                if (!xi(n.findDOMNode(ie(t)), e)) {
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
                  return !xi(n.findDOMNode(ie(t)), e)
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
              jr(s, r);

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
          (t.slotMetrics = Nc(t.props)),
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
          var n = !xr(e.getNow(), this.props.getNow(), 'minutes')
          if (e.isNow !== this.props.isNow || n) {
            if ((this.clearTimeIndicatorInterval(), this.props.isNow)) {
              var r =
                !n &&
                xr(e.date, this.props.date, 'minutes') &&
                t.timeIndicatorPosition === this.state.timeIndicatorPosition
              this.setTimeIndicatorPositionUpdateInterval(r)
            }
          } else
            !this.props.isNow ||
              (xr(e.min, this.props.min, 'minutes') &&
                xr(e.max, this.props.max, 'minutes')) ||
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
            d = s(u, rl),
            p = e.components,
            v = p.eventContainerWrapper,
            h = s(p, ol),
            m = this.slotMetrics,
            g = this.state,
            y = g.selecting,
            b = g.top,
            w = g.height,
            E = { start: g.startDate, end: g.endDate },
            S = f(n),
            _ = S.className,
            D = S.style,
            M = h.dayColumnWrapper || nl
          return r.createElement(
            M,
            {
              date: t,
              style: D,
              className: G(
                _,
                'rbc-day-slot',
                'rbc-time-column',
                a && 'rbc-now',
                a && 'rbc-today',
                y && 'rbc-slot-selecting'
              ),
            },
            m.groups.map(function(e, t) {
              return r.createElement(Qc, {
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
  ;(al.propTypes = {}),
    (al.defaultProps = { dragThroughEvents: !0, timeslots: 2 })
  var il,
    sl = (function(e) {
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
          (t.slotMetrics = Nc({ min: s, max: c, timeslots: l, step: u })), t
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
              return r.createElement(Qc, {
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
  function cl(e, t) {
    var n = ko(e)
    return n ? n.innerWidth : t ? e.clientWidth : No(e).width
  }
  function ll(e) {
    if (((!il && 0 !== il) || e) && si) {
      var t = document.createElement('div')
      ;(t.style.position = 'absolute'),
        (t.style.top = '-9999px'),
        (t.style.width = '50px'),
        (t.style.height = '50px'),
        (t.style.overflow = 'scroll'),
        document.body.appendChild(t),
        (il = t.offsetWidth - t.clientWidth),
        document.body.removeChild(t)
    }
    return il
  }
  sl.propTypes = {}
  var ul = function(e) {
    var t = e.label
    return r.createElement(r.Fragment, null, t)
  }
  ul.propTypes = {}
  var fl = (function(e) {
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
          return r.createElement(gc, {
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
          l = void 0 === c ? yc : c,
          u = n.reactStyle,
          f = i()
        return e.map(function(e, n) {
          var i = a(e),
            c = o.format(e, 'dayFormat'),
            d = s(e),
            p = d.className,
            v = d.style,
            h = r.createElement(l, { date: e, label: c, localizer: o })
          return r.createElement(
            'div',
            {
              key: n,
              style: v,
              className: G(
                u['rbc-header'],
                p,
                xr(e, f, 'day') && u['rbc-today']
              ),
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
          d = t.getters,
          p = t.scrollRef,
          v = t.localizer,
          h = t.isOverflowing,
          m = t.components,
          g = m.timeGutterHeader,
          y = m.resourceHeader,
          b = void 0 === y ? ul : y,
          w = t.resizable,
          E = t.reactStyle,
          S = {}
        h && (S[o ? 'marginLeft' : 'marginRight'] = ll() + 'px')
        var _ = a.groupEvents(s)
        return r.createElement(
          'div',
          {
            style: S,
            ref: p,
            className: G(E['rbc-time-header'], h && E['rbc-overflowing']),
          },
          r.createElement(
            'div',
            {
              className: G(E['rbc-label'], E['rbc-time-header-gutter']),
              style: { width: n, minWidth: n, maxWidth: n },
            },
            g && r.createElement(g, null)
          ),
          a.map(function(t, n) {
            var a = t[0],
              s = t[1]
            return r.createElement(
              'div',
              { className: G(E['rbc-time-header-content']), key: a || n },
              s &&
                r.createElement(
                  'div',
                  {
                    className: G(E['rbc-row'], E['rbc-row-resource']),
                    key: 'resource_' + n,
                  },
                  r.createElement(
                    'div',
                    { className: G(E['rbc-header']) },
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
                  className: G(
                    E['rbc-row'],
                    E['rbc-time-header-cell'],
                    i.length <= 1 && E['rbc-time-header-cell-single-day']
                  ),
                },
                e.renderHeaderCells(i)
              ),
              r.createElement(gc, {
                isAllDay: !0,
                rtl: o,
                getNow: c,
                minRows: 2,
                range: i,
                events: _.get(a) || [],
                resourceId: s && a,
                className: G(E['rbc-allday-cell']),
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
                reactStyle: E,
              })
            )
          })
        )
      }),
      t
    )
  })(r.Component)
  fl.propTypes = {}
  var dl = {}
  var pl = (function(e) {
    function t(t) {
      var o
      return (
        ((o = e.call(this, t) || this).handleScroll = function(e) {
          o.scrollRef.current &&
            (o.scrollRef.current.scrollLeft = e.target.scrollLeft)
        }),
        (o.handleResize = function() {
          kc(o.rafHandle), (o.rafHandle = Tc(o.checkOverflow))
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
        (o.memoizedResources = vc(function(e, t) {
          return (function(e, t) {
            return {
              map: function(n) {
                return e
                  ? e.map(function(e, r) {
                      return n([t.resourceId(e), e], r)
                    })
                  : [n([dl, null], 0)]
              },
              groupEvents: function(n) {
                var r = new Map()
                return e
                  ? (n.forEach(function(e) {
                      var n = t.resource(e) || dl,
                        o = r.get(n) || []
                      o.push(e), r.set(n, o)
                    }),
                    r)
                  : (r.set(dl, n), r)
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
          kc(this.rafHandle),
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
        ;(xr(e.range[0], n[0], 'minute') && xr(e.scrollToTime, r, 'minute')) ||
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
                return Rr(e, f.start(t), f.end(t), 'day')
              }),
              y = (m.get(s) || []).filter(function(t) {
                return Rr(e, f.start(t), f.end(t), 'day')
              })
            return r.createElement(
              al,
              i({}, a.props, {
                localizer: d,
                min: Zr(e, c),
                max: Zr(e, l),
                resource: v && s,
                components: u,
                isNow: xr(e, o, 'day'),
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
        var S = [],
          _ = [],
          D = []
        return (
          t.forEach(function(e) {
            if (tc(e, w, E, f)) {
              var t = f.start(e),
                n = f.end(e)
              f.allDay(e) || (Jr(t) && Jr(n)) || (!m && !xr(t, n, 'day'))
                ? S.push(e)
                : _.push(e)
            }
          }),
          n.forEach(function(e) {
            tc(e, w, E, f) && D.push(e)
          }),
          S.sort(function(e, t) {
            return rc(e, t, f)
          }),
          r.createElement(
            'div',
            {
              className: G(
                b['rbc-time-view'],
                l && b['rbc-time-view-resources']
              ),
            },
            r.createElement(fl, {
              range: o,
              events: S,
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
              reactStyle: b,
            }),
            r.createElement(
              'div',
              {
                ref: this.contentRef,
                className: b['rbc-time-content'],
                onScroll: this.handleScroll,
              },
              r.createElement(sl, {
                date: w,
                ref: this.gutterRef,
                localizer: p,
                min: Zr(w, v),
                max: Zr(w, h),
                step: this.props.step,
                getNow: this.props.getNow,
                timeslots: this.props.timeslots,
                components: u,
                className: b['rbc-time-gutter'],
                getters: d,
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
              var t = cl(e.gutter)
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
          a = o - Mr(o, 'day'),
          i = Qr(r, n)
        this._scrollRatio = a / i
      }),
      t
    )
  })(t.Component)
  ;(pl.propTypes = {}),
    (pl.defaultProps = {
      step: 30,
      timeslots: 2,
      min: Mr(new Date(), 'day'),
      max: Or(new Date(), 'day'),
      scrollToTime: Mr(new Date(), 'day'),
    })
  var vl = ['date'],
    hl = (function(e) {
      function t() {
        return e.apply(this, arguments) || this
      }
      return (
        l(t, e),
        (t.prototype.render = function() {
          var e = this.props,
            n = e.date,
            o = s(e, vl),
            a = t.range(n)
          return r.createElement(pl, i({}, o, { range: a, eventOffset: 10 }))
        }),
        t
      )
    })(r.Component)
  ;(hl.propTypes = {}),
    (hl.range = function(e) {
      return [Mr(e, 'day')]
    }),
    (hl.navigate = function(e, t) {
      switch (t) {
        case Z.PREVIOUS:
          return _r(e, -1, 'day')
        case Z.NEXT:
          return _r(e, 1, 'day')
        default:
          return e
      }
    }),
    (hl.title = function(e, t) {
      return t.localizer.format(e, 'dayHeaderFormat')
    })
  var ml = ['date'],
    gl = (function(e) {
      function t() {
        return e.apply(this, arguments) || this
      }
      return (
        l(t, e),
        (t.prototype.render = function() {
          var e = this.props,
            n = e.date,
            o = s(e, ml),
            a = t.range(n, this.props)
          return r.createElement(pl, i({}, o, { range: a, eventOffset: 15 }))
        }),
        t
      )
    })(r.Component)
  ;(gl.propTypes = {}),
    (gl.defaultProps = pl.defaultProps),
    (gl.navigate = function(e, t) {
      switch (t) {
        case Z.PREVIOUS:
          return _r(e, -1, 'week')
        case Z.NEXT:
          return _r(e, 1, 'week')
        default:
          return e
      }
    }),
    (gl.range = function(e, t) {
      var n = t.localizer.startOfWeek()
      return Gr(Mr(e, 'week', n), Or(e, 'week', n))
    }),
    (gl.title = function(e, t) {
      var n = t.localizer,
        r = gl.range(e, { localizer: n }),
        o = r[0],
        a = r.slice(1)
      return n.format({ start: o, end: a.pop() }, 'dayRangeHeaderFormat')
    })
  var yl = ['date']
  function bl(e, t) {
    return gl.range(e, t).filter(function(e) {
      return -1 === [6, 0].indexOf(e.getDay())
    })
  }
  var wl,
    El = (function(e) {
      function t() {
        return e.apply(this, arguments) || this
      }
      return (
        l(t, e),
        (t.prototype.render = function() {
          var e = this.props,
            t = e.date,
            n = s(e, yl),
            o = bl(t, this.props)
          return r.createElement(pl, i({}, n, { range: o, eventOffset: 15 }))
        }),
        t
      )
    })(r.Component)
  function Sl(e, t) {
    return e
      .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
      .replace(/\s+/g, ' ')
      .replace(/^\s*|\s*$/g, '')
  }
  function _l(e) {
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
            (xr(u, l)
              ? (c = i.format(u, 'agendaTimeFormat'))
              : xr(u, l, 'day')
              ? (c = i.format({ start: u, end: l }, 'agendaTimeRangeFormat'))
              : xr(e, u, 'day')
              ? (c = i.format(u, 'agendaTimeFormat'))
              : xr(e, l, 'day') && (c = i.format(l, 'agendaTimeFormat'))),
          kr(e, u, 'day') && (n = 'rbc-continues-prior'),
          Ar(e, l, 'day') && (n += ' rbc-continues-after'),
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
            ;(a = [cl(t.children[0]), cl(t.children[1])]),
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
                  (e.style.marginRight = ll() + 'px'))
                : (function(e, t) {
                    e.classList
                      ? e.classList.remove(t)
                      : 'string' == typeof e.className
                      ? (e.className = Sl(e.className, t))
                      : e.setAttribute(
                          'class',
                          Sl((e.className && e.className.baseVal) || '', t)
                        )
                  })(e, 'rbc-header-overflowing')
          }
        }
      },
      y = i.messages,
      b = _r(l, c, 'day'),
      w = Gr(l, b, 'day')
    return (
      (u = u.filter(function(e) {
        return tc(e, Mr(l, 'day'), Or(b, 'day'), a)
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
                          return tc(t, Mr(e, 'day'), Or(e, 'day'), a)
                        })).map(function(s, f) {
                          var d = a.title(s),
                            p = a.end(s),
                            v = a.start(s),
                            h = o.eventProp(s, v, p, Wo(s, n)),
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
  ;(El.propTypes = {}),
    (El.defaultProps = pl.defaultProps),
    (El.range = bl),
    (El.navigate = gl.navigate),
    (El.title = function(e, t) {
      var n = t.localizer,
        r = bl(e, { localizer: n }),
        o = r[0],
        a = r.slice(1)
      return n.format({ start: o, end: a.pop() }, 'dayRangeHeaderFormat')
    }),
    (_l.propTypes = {}),
    (_l.defaultProps = { length: 30 }),
    (_l.range = function(e, t) {
      var n = t.length
      return {
        start: e,
        end: _r(e, void 0 === n ? _l.defaultProps.length : n, 'day'),
      }
    }),
    (_l.navigate = function(e, t, n) {
      var r = n.length,
        o = void 0 === r ? _l.defaultProps.length : r
      switch (t) {
        case Z.PREVIOUS:
          return _r(e, -o, 'day')
        case Z.NEXT:
          return _r(e, o, 'day')
        default:
          return e
      }
    }),
    (_l.title = function(e, t) {
      var n = t.length,
        r = void 0 === n ? _l.defaultProps.length : n,
        o = t.localizer,
        a = _r(e, r, 'day')
      return o.format({ start: e, end: a }, 'agendaHeaderFormat')
    })
  var Dl =
      (((wl = {})[J.MONTH] = _c),
      (wl[J.WEEK] = gl),
      (wl[J.WORK_WEEK] = El),
      (wl[J.DAY] = hl),
      (wl[J.AGENDA] = _l),
      wl),
    Ml = ['action', 'date', 'today']
  function Ol(e, t) {
    var n = t.action,
      r = t.date,
      o = t.today,
      a = s(t, Ml)
    switch (((e = 'string' == typeof e ? Dl[e] : e), n)) {
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
  var xl = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g
  var kl = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
  var Tl =
      '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    Al = '[' + Tl + ']',
    jl = '\\d+',
    Nl = '[\\u2700-\\u27bf]',
    Pl = '[a-z\\xdf-\\xf6\\xf8-\\xff]',
    Rl =
      '[^\\ud800-\\udfff' +
      Tl +
      jl +
      '\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]',
    Cl = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    Fl = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    Ll = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
    Wl = '(?:' + Pl + '|' + Rl + ')',
    zl = '(?:' + Ll + '|' + Rl + ')',
    Il =
      '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?',
    Hl =
      '[\\ufe0e\\ufe0f]?' +
      Il +
      ('(?:\\u200d(?:' +
        ['[^\\ud800-\\udfff]', Cl, Fl].join('|') +
        ')[\\ufe0e\\ufe0f]?' +
        Il +
        ')*'),
    Ul = '(?:' + [Nl, Cl, Fl].join('|') + ')' + Hl,
    Vl = RegExp(
      [
        Ll +
          '?' +
          Pl +
          "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" +
          [Al, Ll, '$'].join('|') +
          ')',
        zl +
          "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" +
          [Al, Ll + Wl, '$'].join('|') +
          ')',
        Ll + '?' + Wl + "+(?:['’](?:d|ll|m|re|s|t|ve))?",
        Ll + "+(?:['’](?:D|LL|M|RE|S|T|VE))?",
        '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
        '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
        jl,
        Ul,
      ].join('|'),
      'g'
    )
  function Bl(e, t, n) {
    return (
      (e = Ws(e)),
      void 0 === (t = n ? void 0 : t)
        ? (function(e) {
            return kl.test(e)
          })(e)
          ? (function(e) {
              return e.match(Vl) || []
            })(e)
          : (function(e) {
              return e.match(xl) || []
            })(e)
        : e.match(t) || []
    )
  }
  var Yl = (function(e) {
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
        var i = Bl(n),
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
          l = 'en' === o ? c + ' ' + i[0] : i[0] + '年' + c
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
  function Kl(e, t) {
    return (
      null ==
        (e = (function(e, t) {
          return t.length < 2 ? e : Us(e, eo(t, 0, -1))
        })(e, (t = zs(t, e)))) ||
      delete e[
        Hs(((n = t), (r = null == n ? 0 : n.length), r ? n[r - 1] : void 0))
      ]
    )
    var n, r
  }
  Yl.propTypes = {}
  var $l = '[object Object]',
    ql = Function.prototype,
    Xl = Object.prototype,
    Gl = ql.toString,
    Zl = Xl.hasOwnProperty,
    Jl = Gl.call(Object)
  function Ql(e) {
    return (function(e) {
      if (!Ee(e) || we(e) != $l) return !1
      var t = nn(e)
      if (null === t) return !0
      var n = Zl.call(t, 'constructor') && t.constructor
      return 'function' == typeof n && n instanceof n && Gl.call(n) == Jl
    })(e)
      ? void 0
      : e
  }
  var eu = (function(e) {
      return Yc(Ic(e, void 0, Ne), e + '')
    })(function(e, t) {
      var n = {}
      if (null == e) return n
      var r = !1
      ;(t = Ps(t, function(t) {
        return (t = zs(t, e)), r || (r = t.length > 1), t
      })),
        yt(e, sn(e), n),
        r && (n = sr(n, 7, Ql))
      for (var o = t.length; o--; ) Kl(n, t[o])
      return n
    }),
    tu = Object.prototype,
    nu = tu.hasOwnProperty,
    ru = Kc(function(e, t) {
      e = Object(e)
      var n = -1,
        r = t.length,
        o = r > 2 ? t[2] : void 0
      for (o && to(t[0], t[1], o) && (r = 1); ++n < r; )
        for (var a = t[n], i = $t(a), s = -1, c = i.length; ++s < c; ) {
          var l = i[s],
            u = e[l]
          ;(void 0 === u || (Pe(u, tu[l]) && !nu.call(e, l))) && (e[l] = a[l])
        }
      return e
    })
  var ou = function(e) {
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
    au = ['view', 'date', 'getNow', 'onNavigate'],
    iu = [
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
      'wapCalendar',
    ]
  function su(e) {
    return Array.isArray(e) ? e : Object.keys(e)
  }
  var cu = (function(e) {
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
                  o = r || St(e) || Ct(e)
                if (((t = Gs(t)), null == n)) {
                  var a = e && e.constructor
                  n = o ? (r ? new a() : []) : Le(e) && Ue(a) ? Kn(nn(e)) : {}
                }
                return (
                  (o ? pt : Cc)(e, function(e, r, o) {
                    return t(n, e, r, o)
                  }),
                  n
                )
              })(
                o,
                function(e, t) {
                  return (e[t] = Dl[t])
                },
                {}
              )
            : 'object' == typeof o
            ? ((e = o),
              (r = {}),
              (n = Gs(
                (n = function(e, t) {
                  return !0 === e ? Dl[t] : e
                })
              )),
              Cc(e, function(e, t, o) {
                ht(r, t, n(e, t, o))
              }),
              r)
            : Dl
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
            u = s(r, au),
            f = t.getView(),
            d = c()
          l(
            (a = Ol(f, i({}, u, { action: e, date: n || a || d, today: d }))),
            o,
            e
          ),
            t.handleRangeChange(a, f),
            t.props.changeCalendar(a, e),
            t.props.clickDate(a)
        }),
        (t.handleViewChange = function(e) {
          e !== t.props.view &&
            (function(e, t) {
              return -1 !== su(t.views).indexOf(e)
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
          S = e.components,
          _ = void 0 === S ? {} : S,
          D = e.formats,
          M = void 0 === D ? {} : D,
          O = su(g)
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
          components: ru(_[m] || {}, eu(_, O), {
            eventWrapper: a,
            backgroundEventWrapper: a,
            eventContainerWrapper: a,
            dateCellWrapper: a,
            weekWrapper: a,
            timeSlotWrapper: a,
          }),
          accessors: {
            start: ou(t),
            end: ou(n),
            allDay: ou(r),
            tooltip: ou(o),
            title: ou(s),
            resource: ou(c),
            resourceId: ou(l),
            resourceTitle: ou(u),
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
          E = e.wapCalendar,
          S = s(e, iu)
        d = d || p()
        var _ = this.getView(),
          D = this.state.context,
          M = D.accessors,
          O = D.components,
          x = D.getters,
          k = D.localizer,
          T = D.viewNames,
          A = O.toolbar || Yl,
          j = bo(qr(d, k), 7),
          N = _.title(d, { localizer: k, length: v })
        return r.createElement(
          'div',
          i({}, f, {
            className: G(
              u,
              b['rbc-calendar'],
              S.rtl && b['rbc-rtl'],
              w && b['index-calendar-small'],
              E && b['index-calendar-wap'],
              6 === j.length && b['rbc-calendar-big']
            ),
            style: l,
            'data-class': 'rbc-calendar',
          }),
          n &&
            r.createElement(A, {
              date: d,
              view: t,
              views: T,
              label: N,
              onView: this.handleViewChange,
              onNavigate: this.handleNavigate,
              localizer: k,
              lang: y,
              reactStyle: b,
            }),
          r.createElement(
            _,
            i({}, S, {
              events: o,
              backgroundEvents: c,
              date: d,
              getNow: p,
              length: v,
              localizer: k,
              getters: x,
              components: O,
              accessors: M,
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
              label: N,
              reactStyle: b,
              showPosition: w,
              wapCalendar: E,
            })
          )
        )
      }),
      t
    )
  })(r.Component)
  ;(cu.defaultProps = {
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
    (cu.propTypes = {})
  var lu = (function e(t, n, o) {
      void 0 === o && (o = [])
      var a,
        c = t.displayName || t.name || 'Component',
        u =
          !!(a = t) &&
          ('function' != typeof a ||
            (a.prototype && a.prototype.isReactComponent)),
        f = Object.keys(n),
        d = f.map(B)
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
      })(p),
        (p.displayName = 'Uncontrolled(' + c + ')'),
        (p.propTypes = i(
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
                __source: { fileName: q, lineNumber: 128 },
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
    })(cu, { view: 'onView', date: 'onNavigate', selected: 'onSelectEvent' }),
    uu = function(e, t, n) {
      var r = e.start,
        o = e.end
      return n.format(r, 'LT', t) + ' – ' + n.format(o, 'LT', t)
    },
    fu = {
      dateFormat: 'DD',
      dayFormat: 'DD ddd',
      weekdayFormat: 'ddd',
      selectRangeFormat: uu,
      eventTimeRangeFormat: uu,
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
          n.format(o, xr(r, o, 'month') ? 'DD' : 'MMMM DD', t)
        )
      },
      agendaHeaderFormat: function(e, t, n) {
        var r = e.start,
          o = e.end
        return n.format(r, 'L', t) + ' – ' + n.format(o, 'L', t)
      },
      agendaDateFormat: 'ddd MMM DD',
      agendaTimeFormat: 'LT',
      agendaTimeRangeFormat: uu,
    }
  var du = function(e, t, n) {
      var r = e.start,
        o = e.end
      return n.format(r, 't', t) + ' – ' + n.format(o, 't', t)
    },
    pu = {
      dateFormat: 'dd',
      dayFormat: 'ddd dd/MM',
      weekdayFormat: 'ddd',
      selectRangeFormat: du,
      eventTimeRangeFormat: du,
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
          n.format(o, xr(r, o, 'month') ? 'dd' : 'MMM dd', t)
        )
      },
      agendaHeaderFormat: function(e, t, n) {
        var r = e.start,
          o = e.end
        return n.format(r, 'd', t) + ' – ' + n.format(o, 'd', t)
      },
      agendaDateFormat: 'ddd MMM dd',
      agendaTimeFormat: 't',
      agendaTimeRangeFormat: du,
    }
  function vu(e) {
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
      formats: pu,
      format: function(t, n, r) {
        return e.format(t, n, r)
      },
    })
  }
  var hu = function(e, t, n) {
      var r = e.start,
        o = e.end
      return (
        n.format(r, { time: 'short' }, t) +
        ' – ' +
        n.format(o, { time: 'short' }, t)
      )
    },
    mu = {
      dateFormat: 'dd',
      dayFormat: 'eee dd/MM',
      weekdayFormat: 'eee',
      selectRangeFormat: hu,
      eventTimeRangeFormat: hu,
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
          n.format(o, xr(r, o, 'month') ? 'dd' : 'MMM dd', t)
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
      agendaTimeRangeFormat: hu,
    }
  var gu = function(e, t, n) {
      var r = e.start,
        o = e.end
      return n.format(r, 'p', t) + ' – ' + n.format(o, 'p', t)
    },
    yu = {
      dateFormat: 'dd',
      dayFormat: 'dd eee',
      weekdayFormat: 'cccc',
      selectRangeFormat: gu,
      eventTimeRangeFormat: gu,
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
          n.format(o, xr(r, o, 'month') ? 'dd' : 'MMMM dd', t)
        )
      },
      agendaHeaderFormat: function(e, t, n) {
        var r = e.start,
          o = e.end
        return n.format(r, 'P', t) + ' – ' + n.format(o, 'P', t)
      },
      agendaDateFormat: 'ccc MMM dd',
      agendaTimeFormat: 'p',
      agendaTimeRangeFormat: gu,
    },
    bu = { eventWrapper: a, timeSlotWrapper: a, dateCellWrapper: a }
  ;(e.Calendar = lu),
    (e.DateLocalizer = ne),
    (e.Navigate = Z),
    (e.Views = J),
    (e.components = bu),
    (e.dateFnsLocalizer = function(e) {
      var t = e.startOfWeek,
        n = e.getDay,
        r = e.format,
        o = e.locales
      return new ne({
        formats: yu,
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
            formats: mu,
            format: function(e, n, r) {
              return (
                (n = 'string' == typeof n ? { raw: n } : n),
                t(r).formatDate(e, n)
              )
            },
          })
        : vu(e)
    }),
    (e.momentLocalizer = function(e) {
      return new ne({
        formats: fu,
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
    (e.move = Ol),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
