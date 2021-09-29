'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutPropertiesLoose')
)

var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
)

var _inheritsLoose2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inheritsLoose')
)

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _reactDom = require('react-dom')

var _clsx = _interopRequireDefault(require('clsx'))

var _flatten = _interopRequireDefault(require('lodash/flatten'))

var _cloneDeep = _interopRequireDefault(require('lodash/cloneDeep'))

var dates = _interopRequireWildcard(require('./utils/dates'))

var _chunk = _interopRequireDefault(require('lodash/chunk'))

var _constants = require('./utils/constants')

var _helpers = require('./utils/helpers')

var _position = _interopRequireDefault(require('dom-helpers/position'))

var _Popup = _interopRequireDefault(require('./Popup'))

var _Overlay = _interopRequireDefault(require('react-overlays/Overlay'))

var _DateContentRow = _interopRequireDefault(require('./DateContentRow'))

var _Header = _interopRequireDefault(require('./Header'))

var _DateHeader = _interopRequireDefault(require('./DateHeader'))

var _eventLevels = require('./utils/eventLevels')

var _excluded = ['date', 'className']

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null
  var cacheBabelInterop = new WeakMap()
  var cacheNodeInterop = new WeakMap()
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop
  })(nodeInterop)
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj }
  }
  var cache = _getRequireWildcardCache(nodeInterop)
  if (cache && cache.has(obj)) {
    return cache.get(obj)
  }
  var newObj = {}
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc)
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  newObj.default = obj
  if (cache) {
    cache.set(obj, newObj)
  }
  return newObj
}

var eventsForWeek = function eventsForWeek(evts, start, end, accessors) {
  evts =
    evts &&
    evts.map(function(el) {
      el.start = el.start.replace(/-/g, '/')
      el.end = el.end.replace(/-/g, '/')
      return el
    })
  return evts.filter(function(e) {
    return (0, _eventLevels.inRange)(e, start, end, accessors)
  })
}

var wapFirstRender = true //触屏初次渲染

var MonthView = /*#__PURE__*/ (function(_React$Component) {
  ;(0, _inheritsLoose2.default)(MonthView, _React$Component)

  function MonthView() {
    var _this

    for (
      var _len = arguments.length, _args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      _args[_key] = arguments[_key]
    }

    _this =
      _React$Component.call.apply(_React$Component, [this].concat(_args)) ||
      this

    _this.getContainer = function() {
      return (0, _reactDom.findDOMNode)(
        (0, _assertThisInitialized2.default)(_this)
      )
    }

    _this.clickMore = function(slot, e, index) {
      var reactStyle = _this.props.reactStyle
      var newMoreShow = _this.state.newWeeks
      newMoreShow = newMoreShow.map(function(el, i) {
        el.isMore = false
        el.right = false
        el.bottom = false

        if (i === index) {
          el.isMore = true
        }

        return el
      })

      _this.setState(
        {
          newWeeks: newMoreShow,
          newWeeksIndex: index,
        },
        function() {
          var moreClassName = document.getElementsByClassName(
            reactStyle['rbc-event-more']
          )[0]
          var moreHeight = moreClassName.offsetHeight
          var moreWidth = moreClassName.offsetWidth
          var scrollX =
            document.documentElement.scrollLeft || document.body.scrollLeft
          var scrollY =
            document.documentElement.scrollTop || document.body.scrollTop
          var width = window.innerWidth + scrollX
          var height = window.innerHeight + scrollY
          var x = e.pageX
          var y = e.pageY
          var isRight = x >= width - moreWidth
          var isBottom = y >= height - moreHeight
          var newPositionMore = _this.state.newWeeks
          newPositionMore = newPositionMore.map(function(el, i) {
            el.right = false
            el.bottom = false

            if (i === index) {
              el.right = isRight
              el.bottom = isBottom
            }

            return el
          })

          _this.setState({
            newWeeks: newPositionMore,
          })
        }
      )
    }

    _this.renderWeek = function(week, weekIdx) {
      var _this$props = _this.props,
        events = _this$props.events,
        components = _this$props.components,
        selectable = _this$props.selectable,
        getNow = _this$props.getNow,
        selected = _this$props.selected,
        date = _this$props.date,
        localizer = _this$props.localizer,
        longPressThreshold = _this$props.longPressThreshold,
        accessors = _this$props.accessors,
        getters = _this$props.getters,
        showAllEvents = _this$props.showAllEvents,
        lang = _this$props.lang,
        label = _this$props.label,
        reactStyle = _this$props.reactStyle
      var _this$state = _this.state,
        needLimitMeasure = _this$state.needLimitMeasure,
        rowLimit = _this$state.rowLimit,
        newWeeks = _this$state.newWeeks
      events = eventsForWeek(events, week[0], week[week.length - 1], accessors)
      events.sort(function(a, b) {
        return (0, _eventLevels.sortEvents)(a, b, accessors)
      })
      return /*#__PURE__*/ _react.default.createElement(
        _DateContentRow.default,
        {
          key: weekIdx,
          ref: weekIdx === 0 ? _this.slotRowRef : undefined,
          container: _this.getContainer,
          className: reactStyle['rbc-month-row'],
          getNow: getNow,
          date: date,
          range: week,
          events: events,
          maxRows: showAllEvents ? Infinity : rowLimit,
          selected: selected,
          selectable: selectable,
          components: components,
          accessors: accessors,
          getters: getters,
          localizer: localizer,
          renderHeader: _this.readerDateHeading,
          renderForMeasure: needLimitMeasure,
          onShowMore: _this.handleShowMore,
          onSelect: _this.handleSelectEvent,
          onDoubleClick: _this.handleDoubleClickEvent,
          onKeyPress: _this.handleKeyPressEvent,
          onSelectSlot: _this.handleSelectSlot,
          longPressThreshold: longPressThreshold,
          rtl: _this.props.rtl,
          resizable: _this.props.resizable,
          showAllEvents: showAllEvents,
          lang: lang,
          label: label,
          newWeeks: newWeeks,
          clickMore: _this.clickMore,
          reactStyle: reactStyle,
        }
      )
    }

    _this.currectData = function(date, events) {
      var timeStamp = function timeStamp(el, type) {
        el = type ? el : new Date(el && el.replace(/-/g, '/'))
        var newMonth =
          el.getMonth() < 9 ? '0' + (el.getMonth() + 1) : el.getMonth() + 1
        var newDate = el.getDate() < 10 ? '0' + el.getDate() : el.getDate()
        return Date.parse(el.getFullYear() + '-' + newMonth + '-' + newDate)
      }

      var currectData =
        events &&
        events.filter(function(el) {
          return (
            timeStamp(el.start) <= timeStamp(date, 'date') &&
            timeStamp(el.end) >= timeStamp(date, 'date')
          )
        })
      return currectData
    }

    _this.readerDateHeading = function(_ref) {
      var _this$currectData, _newActiveEle$

      var date = _ref.date,
        className = _ref.className,
        props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded)
      var _this$props2 = _this.props,
        currentDate = _this$props2.date,
        getDrilldownView = _this$props2.getDrilldownView,
        localizer = _this$props2.localizer,
        events = _this$props2.events,
        reactStyle = _this$props2.reactStyle,
        lang = _this$props2.lang,
        detailUrl = _this$props2.detailUrl
      var _this$state2 = _this.state,
        clickActiveEle = _this$state2.clickActiveEle,
        clickActiveDate = _this$state2.clickActiveDate,
        clickActiveEleHeader = _this$state2.clickActiveEleHeader
      var isOffRange = dates.month(date) !== dates.month(currentDate)
      var isCurrent = dates.eq(date, currentDate, 'day')
      var drilldownView = getDrilldownView(date)
      var label = localizer.format(date, 'dateFormat')
      var DateHeaderComponent =
        _this.props.components.dateHeader || _DateHeader.default
      var dateId = '' + (date.getMonth() + 1) + date.getDate()
      var newActiveEle = clickActiveEleHeader.filter(function(el) {
        if (el.key === dateId) {
          return el
        }
      })
      return /*#__PURE__*/ _react.default.createElement(
        'div',
        (0, _extends2.default)({}, props, {
          className: (0, _clsx.default)(
            className,
            isOffRange && reactStyle['rbc-off-range'],
            isCurrent && reactStyle['rbc-current'],
            ((_this$currectData = _this.currectData(date, events)) == null
              ? void 0
              : _this$currectData.length) > 0 && reactStyle['rbc-data'],
            ((_newActiveEle$ = newActiveEle[0]) == null
              ? void 0
              : _newActiveEle$.value) && reactStyle['rbc-active']
          ),
          role: 'cell',
        }),
        /*#__PURE__*/ _react.default.createElement(DateHeaderComponent, {
          label: label,
          date: date,
          drilldownView: drilldownView,
          isOffRange: isOffRange,
          reactStyle: reactStyle,
          onDrillDown: function onDrillDown(e) {
            return _this.handleHeadingClick(date, events, e, dateId)
          },
          clickActiveDate: clickActiveDate,
          clickActiveEle: clickActiveEle,
          lang: lang,
          detailUrl: detailUrl,
        })
      )
    }

    _this.handleSelectSlot = function(range, slotInfo) {
      _this._pendingSelection = _this._pendingSelection.concat(range)
      clearTimeout(_this._selectTimer)
      _this._selectTimer = setTimeout(function() {
        return _this.selectDates(slotInfo)
      })
    }

    _this.handleHeadingClick = function(date, events, e, dateId) {
      // e.preventDefault()
      var _this$props3 = _this.props,
        lang = _this$props3.lang,
        localizer = _this$props3.localizer
      var clickActiveEle = _this.state.clickActiveEle
      var newClickActiveEle = clickActiveEle
      newClickActiveEle = newClickActiveEle.map(function(el) {
        el.value = false

        if (el.key === dateId) {
          el.value = true
        }

        return el
      })
      var newWeeksIndex = 0
      clickActiveEle.map(function(el, i) {
        if (el.key === dateId) {
          newWeeksIndex = i
        }
      })
      var dateText = 'th'
      var getDate = date.getDate()

      if (getDate === 1 || getDate === 21 || getDate === 31) {
        dateText = 'st'
      } else if (getDate === 2 || getDate === 22) {
        dateText = 'nd'
      } else if (getDate === 3 || getDate === 23) {
        dateText = 'rd'
      } else {
        dateText = 'th'
      }

      var newDate =
        lang === 'cn'
          ? date.getMonth() +
            1 +
            '\u6708' +
            date.getDate() +
            '\u65E5\u6D3B\u52A8'
          : 'Activities on ' +
            localizer.messages[lang].month[date.getMonth()] +
            ' ' +
            date.getDate() +
            dateText

      _this.setState({
        clickActiveEle: newClickActiveEle,
        clickActiveDate: {
          list: _this.currectData(date, events),
          date: newDate,
        },
        newWeeksIndex: newWeeksIndex,
        clickActiveEleHeader: (0, _cloneDeep.default)(newClickActiveEle),
      })

      _this.props.clickDate(date)
    }

    _this.handleSelectEvent = function() {
      _this.clearSelection()

      for (
        var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2] = arguments[_key2]
      }

      ;(0, _helpers.notify)(_this.props.onSelectEvent, args)
    }

    _this.handleDoubleClickEvent = function() {
      _this.clearSelection()

      for (
        var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
        _key3 < _len3;
        _key3++
      ) {
        args[_key3] = arguments[_key3]
      }

      ;(0, _helpers.notify)(_this.props.onDoubleClickEvent, args)
    }

    _this.handleKeyPressEvent = function() {
      _this.clearSelection()

      for (
        var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;
        _key4 < _len4;
        _key4++
      ) {
        args[_key4] = arguments[_key4]
      }

      ;(0, _helpers.notify)(_this.props.onKeyPressEvent, args)
    }

    _this.handleShowMore = function(events, date, cell, slot, target) {
      var _this$props4 = _this.props,
        popup = _this$props4.popup,
        onDrillDown = _this$props4.onDrillDown,
        onShowMore = _this$props4.onShowMore,
        getDrilldownView = _this$props4.getDrilldownView,
        doShowMoreDrillDown = _this$props4.doShowMoreDrillDown //cancel any pending selections so only the event click goes through.

      _this.clearSelection()

      if (popup) {
        var position = (0, _position.default)(
          cell,
          (0, _reactDom.findDOMNode)(
            (0, _assertThisInitialized2.default)(_this)
          )
        )

        _this.setState({
          overlay: {
            date: date,
            events: events,
            position: position,
            target: target,
          },
        })
      } else if (doShowMoreDrillDown) {
        ;(0, _helpers.notify)(onDrillDown, [
          date,
          getDrilldownView(date) || _constants.views.DAY,
        ])
      }

      ;(0, _helpers.notify)(onShowMore, [events, date, slot])
    }

    _this.overlayDisplay = function() {
      _this.setState({
        overlay: null,
      })
    }

    _this._bgRows = []
    _this._pendingSelection = []
    _this.slotRowRef = /*#__PURE__*/ _react.default.createRef()
    _this.state = {
      rowLimit: 5,
      needLimitMeasure: true,
      newWeeks: [],
      newWeeksIndex: 0,
      clickActiveEle: [],
      //点击当前日期元素
      clickActiveEleHeader: [],
      //点击当前日期元素日期
      clickActiveDate: {
        list: [],
        date: null,
      }, //点击当前日期日程(list:当前选中日程列表，date:当前选中时间)
    }
    return _this
  }

  var _proto = MonthView.prototype

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(
    _ref2
  ) {
    var date = _ref2.date,
      events = _ref2.events,
      wapCalendar = _ref2.wapCalendar
    var newDate =
      date.getMonth() + 1 + '\u6708' + date.getDate() + '\u65E5\u6D3B\u52A8'
    this.setState({
      needLimitMeasure: !dates.eq(date, this.props.date, 'month'),
      clickActiveDate: {
        list:
          wapFirstRender && wapCalendar ? this.currectData(date, events) : [],
        date: wapFirstRender && wapCalendar ? newDate : null,
      },
    })
    wapFirstRender = false
  }

  _proto.updateData = function updateData() {
    var _this$props5 = this.props,
      date = _this$props5.date,
      localizer = _this$props5.localizer,
      month = dates.visibleDays(date, localizer),
      weeks = (0, _chunk.default)(month, 7)
    var newWeeks = weeks.map(function(el) {
      return el.map(function(sel) {
        sel = '' + (sel.getMonth() + 1) + sel.getDate()
        return sel
      })
    })
    var dataId = '' + (date.getMonth() + 1) + date.getDate()
    var clickActiveEle = (0, _flatten.default)(newWeeks).map(function(el) {
      el = {
        key: el,
        value: el === dataId && wapFirstRender,
      }
      return el
    })
    newWeeks = (0, _flatten.default)(newWeeks).map(function(el) {
      el = {
        key: el,
        isMore: false,
        right: false,
        bottom: false,
      }
      return el
    })
    this.setState({
      newWeeks: newWeeks,
      clickActiveEle: clickActiveEle,
      clickActiveEleHeader: (0, _cloneDeep.default)(clickActiveEle),
    })
  }

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this

    // let running
    if (this.state.needLimitMeasure) this.measureRowLimit(this.props)
    document.addEventListener(
      'click',
      function(e) {
        return _this2.hideClickMore(e)
      },
      false
    ) // window.addEventListener(/*todo改变宽度日程显示全部*/
    //   'resize',
    //   (this._resizeListener = () => {
    //     if (!running) {
    //       animationFrame.request(() => {
    //         running = false
    //         this.setState({ needLimitMeasure: true }) //eslint-disable-line
    //       })
    //     }
    //   }),
    //   false
    // )

    this.updateData()
  }

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.state.needLimitMeasure) {
      this.measureRowLimit(this.props)
      this.updateData()
      this.setState({
        clickActiveDate: {
          list: [],
          date: null,
        },
      })
    }
  } // componentWillUnmount() {
  //   window.removeEventListener('resize', this._resizeListener, false)
  // }

  _proto.render = function render() {
    var _clickActiveDate$list,
      _clickActiveDate$list2,
      _this3 = this

    var clickActiveDate = this.state.clickActiveDate
    var _this$props6 = this.props,
      date = _this$props6.date,
      localizer = _this$props6.localizer,
      className = _this$props6.className,
      loading = _this$props6.loading,
      reactStyle = _this$props6.reactStyle,
      query = _this$props6.query,
      month = dates.visibleDays(date, localizer),
      weeks = (0, _chunk.default)(month, 7)
    this._weekCount = weeks.length
    return /*#__PURE__*/ _react.default.createElement(
      _react.default.Fragment,
      null,
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: (0, _clsx.default)(
            reactStyle['rbc-month-view'],
            className,
            loading && reactStyle['rbc-month-view-loading']
          ),
          role: 'table',
          'aria-label': 'Month View',
          'data-class': 'rbc-month-view',
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: (0, _clsx.default)(
              reactStyle['rbc-row'],
              reactStyle['rbc-month-header']
            ),
            role: 'row',
            'data-class': 'rbc-row',
          },
          this.renderHeaders(weeks[0])
        ),
        weeks.map(this.renderWeek),
        this.props.popup && this.renderOverlay()
      ),
      clickActiveDate.date &&
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: reactStyle['wap-render-list'],
            'data-class': 'wap-render-list',
          },
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: reactStyle['active-title'],
            },
            clickActiveDate.date
          ),
          ((_clickActiveDate$list = clickActiveDate.list) == null
            ? void 0
            : _clickActiveDate$list.length) > 0
            ? (_clickActiveDate$list2 = clickActiveDate.list) == null
              ? void 0
              : _clickActiveDate$list2.map(function(item, i) {
                  var url = item.url
                  var newUrl =
                    url && url.indexOf('?') !== -1
                      ? url + '&app=' + (query && query.app)
                      : url + '?app=' + (query && query.app)
                  var itemNewUrl = query && query.isApp ? newUrl : item.url
                  return /*#__PURE__*/ _react.default.createElement(
                    'div',
                    {
                      className: reactStyle['active-li'],
                      key: i,
                      'data-class': 'active-li',
                      onClick: function onClick() {
                        _this3.props.clickDate(date, item, itemNewUrl)
                      },
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      'a',
                      {
                        href: itemNewUrl,
                        title: item.title,
                        target: '_blank',
                        className: reactStyle['active-li-title'],
                        'data-class': 'active-li-title',
                      },
                      item.title
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        className: reactStyle['active-text'],
                        'data-class': 'active-text',
                      },
                      item.campaignTimeType,
                      '\uFF1A',
                      item.campaignStartTime,
                      ' \u81F3',
                      ' ',
                      item.campaignEndTime
                    )
                  )
                })
            : /*#__PURE__*/ _react.default.createElement(
                'div',
                {
                  className: reactStyle['active-li-none'],
                  'data-class': 'active-li-none',
                },
                '\u6682\u65E0\u6D3B\u52A8'
              )
        )
    )
  }

  _proto.hideClickMore = function hideClickMore(e) {
    var _this$state3 = this.state,
      newWeeks = _this$state3.newWeeks,
      newWeeksIndex = _this$state3.newWeeksIndex,
      clickActiveEle = _this$state3.clickActiveEle
    var newMoreShow = newWeeks
    var newClickActiveEle = clickActiveEle
    var node = e.target.getAttribute('data-id')

    if (node !== 'ref' + newMoreShow[newWeeksIndex].key) {
      newMoreShow[this.state.newWeeksIndex].isMore = false
      newClickActiveEle[this.state.newWeeksIndex].value = false
      this.setState({
        newWeeks: newMoreShow,
        clickActiveEle: newClickActiveEle,
      })
    }
  }

  _proto.renderHeaders = function renderHeaders(row) {
    var _this$props7 = this.props,
      localizer = _this$props7.localizer,
      components = _this$props7.components,
      lang = _this$props7.lang,
      reactStyle = _this$props7.reactStyle,
      showPosition = _this$props7.showPosition,
      wapCalendar = _this$props7.wapCalendar
    var first = row[0]
    var last = row[row.length - 1]
    var HeaderComponent = components.header || _Header.default
    lang = lang ? lang : 'en'
    var label =
      showPosition || wapCalendar
        ? localizer.messages[lang].wapWeeks
        : localizer.messages[lang].weeks
    return dates.range(first, last, 'day').map(function(day, idx) {
      return /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          key: 'header_' + idx,
          className: reactStyle['rbc-header'],
          'data-class': 'rbc-header',
        },
        /*#__PURE__*/ _react.default.createElement(HeaderComponent, {
          date: day,
          localizer: localizer,
          label: label[idx], //localizer.format(day, 'weekdayFormat')
        })
      )
    })
  }

  _proto.renderOverlay = function renderOverlay() {
    var _this4 = this

    var overlay = (this.state && this.state.overlay) || {}
    var _this$props8 = this.props,
      accessors = _this$props8.accessors,
      localizer = _this$props8.localizer,
      components = _this$props8.components,
      getters = _this$props8.getters,
      selected = _this$props8.selected,
      popupOffset = _this$props8.popupOffset,
      reactStyle = _this$props8.reactStyle
    return /*#__PURE__*/ _react.default.createElement(
      _Overlay.default,
      {
        rootClose: true,
        placement: 'bottom',
        show: !!overlay.position,
        onHide: function onHide() {
          return _this4.setState({
            overlay: null,
          })
        },
        target: function target() {
          return overlay.target
        },
      },
      function(_ref3) {
        var props = _ref3.props
        return /*#__PURE__*/ _react.default.createElement(
          _Popup.default,
          (0, _extends2.default)({}, props, {
            popupOffset: popupOffset,
            accessors: accessors,
            getters: getters,
            selected: selected,
            components: components,
            localizer: localizer,
            position: overlay.position,
            show: _this4.overlayDisplay,
            events: overlay.events,
            slotStart: overlay.date,
            slotEnd: overlay.end,
            onSelect: _this4.handleSelectEvent,
            onDoubleClick: _this4.handleDoubleClickEvent,
            onKeyPress: _this4.handleKeyPressEvent,
            handleDragStart: _this4.props.handleDragStart,
            reactStyle: reactStyle,
          })
        )
      }
    )
  }

  _proto.measureRowLimit = function measureRowLimit() {
    this.setState({
      needLimitMeasure: false,
      rowLimit: this.slotRowRef.current.getRowLimit(),
    })
  }

  _proto.selectDates = function selectDates(slotInfo) {
    var slots = this._pendingSelection.slice()

    this._pendingSelection = []
    slots.sort(function(a, b) {
      return +a - +b
    })
    var start = new Date(slots[0])
    var end = new Date(slots[slots.length - 1])
    end.setDate(slots[slots.length - 1].getDate() + 1)
    ;(0, _helpers.notify)(this.props.onSelectSlot, {
      slots: slots,
      start: start,
      end: end,
      action: slotInfo.action,
      bounds: slotInfo.bounds,
      box: slotInfo.box,
    })
  }

  _proto.clearSelection = function clearSelection() {
    clearTimeout(this._selectTimer)
    this._pendingSelection = []
  }

  return MonthView
})(_react.default.Component)

MonthView.propTypes =
  process.env.NODE_ENV !== 'production'
    ? {
        events: _propTypes.default.array.isRequired,
        date: _propTypes.default.instanceOf(Date),
        min: _propTypes.default.instanceOf(Date),
        max: _propTypes.default.instanceOf(Date),
        step: _propTypes.default.number,
        getNow: _propTypes.default.func.isRequired,
        scrollToTime: _propTypes.default.instanceOf(Date),
        rtl: _propTypes.default.bool,
        resizable: _propTypes.default.bool,
        width: _propTypes.default.number,
        accessors: _propTypes.default.object.isRequired,
        components: _propTypes.default.object.isRequired,
        getters: _propTypes.default.object.isRequired,
        localizer: _propTypes.default.object.isRequired,
        lang: _propTypes.default.string,
        detailUrl: _propTypes.default.string,
        showPosition: _propTypes.default.bool,
        wapCalendar: _propTypes.default.bool,
        selected: _propTypes.default.object,
        selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
        longPressThreshold: _propTypes.default.number,
        onNavigate: _propTypes.default.func,
        onSelectSlot: _propTypes.default.func,
        onSelectEvent: _propTypes.default.func,
        onDoubleClickEvent: _propTypes.default.func,
        onKeyPressEvent: _propTypes.default.func,
        onShowMore: _propTypes.default.func,
        showAllEvents: _propTypes.default.bool,
        doShowMoreDrillDown: _propTypes.default.bool,
        onDrillDown: _propTypes.default.func,
        getDrilldownView: _propTypes.default.func.isRequired,
        loading: _propTypes.default.bool,
        popup: _propTypes.default.bool,
        handleDragStart: _propTypes.default.func,
        clickDate: _propTypes.default.func,
        label: _propTypes.default.string,
        reactStyle: _propTypes.default.object,
        popupOffset: _propTypes.default.oneOfType([
          _propTypes.default.number,
          _propTypes.default.shape({
            x: _propTypes.default.number,
            y: _propTypes.default.number,
          }),
        ]),
      }
    : {}

MonthView.range = function(date, _ref4) {
  var localizer = _ref4.localizer
  var start = dates.firstVisibleDay(date, localizer)
  var end = dates.lastVisibleDay(date, localizer)
  return {
    start: start,
    end: end,
  }
}

MonthView.navigate = function(date, action) {
  switch (action) {
    case _constants.navigate.PREVIOUS:
      return dates.add(date, -1, 'month')

    case _constants.navigate.NEXT:
      return dates.add(date, 1, 'month')

    default:
      return date
  }
}

MonthView.title = function(date, _ref5) {
  var localizer = _ref5.localizer
  return localizer.format(date, 'monthHeaderFormat')
}

var _default = MonthView
exports.default = _default
module.exports = exports.default
