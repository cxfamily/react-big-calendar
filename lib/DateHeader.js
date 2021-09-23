'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireWildcard(require('react'))

var _clsx = _interopRequireDefault(require('clsx'))

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

var DateHeader = function DateHeader(_ref) {
  var _clickActiveEle$, _clickActiveDate$list, _clickActiveDate$list2

  var label = _ref.label,
    onDrillDown = _ref.onDrillDown,
    reactStyle = _ref.reactStyle,
    clickActiveDate = _ref.clickActiveDate,
    clickActiveEle = _ref.clickActiveEle,
    date = _ref.date,
    lang = _ref.lang
  label = label.replace(/^0/, '')
  var dateId = '' + (date.getMonth() + 1) + date.getDate()
  clickActiveEle = clickActiveEle.filter(function(el) {
    return el.key === dateId && el.value
  })
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: reactStyle['current-text-wrap'],
      role: 'cell',
      onClick: onDrillDown,
    },
    /*#__PURE__*/ _react.default.createElement(
      'span',
      {
        className: reactStyle['current-text'],
        'data-id': 'ref' + dateId,
      },
      label
    ),
    ((_clickActiveEle$ = clickActiveEle[0]) == null
      ? void 0
      : _clickActiveEle$.value) &&
      clickActiveDate.date &&
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: (0, _clsx.default)(
            reactStyle['wap-render-list'],
            reactStyle['wap-render-list-position']
          ),
          'data-class': 'wap-render-list',
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: reactStyle['active-title'],
            'data-id': 'ref' + dateId,
          },
          clickActiveDate.date
        ),
        ((_clickActiveDate$list = clickActiveDate.list) == null
          ? void 0
          : _clickActiveDate$list.length) > 0
          ? /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: reactStyle['wap-calendar-list'],
              },
              (_clickActiveDate$list2 = clickActiveDate.list) == null
                ? void 0
                : _clickActiveDate$list2.map(function(item, i) {
                    return /*#__PURE__*/ _react.default.createElement(
                      _react.Fragment,
                      {
                        key: i,
                      },
                      i < 6 &&
                        /*#__PURE__*/ _react.default.createElement(
                          'div',
                          {
                            className: reactStyle['active-li'],
                            'data-class': 'active-li',
                            'data-id': 'ref' + dateId,
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            'a',
                            {
                              'data-id': 'ref' + dateId,
                              href: item.url,
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
                              'data-id': 'ref' + dateId,
                            },
                            item.campaignTimeType,
                            '\uFF1A',
                            item.campaignStartTime,
                            ' \u81F3',
                            ' ',
                            item.campaignEndTime
                          )
                        )
                    )
                  }),
              clickActiveDate.list.length > 1 &&
                /*#__PURE__*/ _react.default.createElement(
                  'a',
                  {
                    href: '//membercenter.made-in-china.com/calendar/index.do',
                    target: '_blank',
                    className: reactStyle['view-more'],
                    'data-id': 'ref' + dateId,
                  },
                  lang === 'cn'
                    ? '\u67E5\u770B\u5168\u90E8' +
                        clickActiveDate.list.length +
                        '\u4E2A\u6D3B\u52A8'
                    : 'View More ' + clickActiveDate.list.length + ' Activities'
                )
            )
          : /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: reactStyle['active-li-none'],
                'data-class': 'active-li-none',
              },
              lang === 'cn' ? '暂无活动' : 'No Activity Now'
            )
      )
  )
}

DateHeader.propTypes =
  process.env.NODE_ENV !== 'production'
    ? {
        label: _propTypes.default.node,
        date: _propTypes.default.instanceOf(Date),
        drilldownView: _propTypes.default.string,
        onDrillDown: _propTypes.default.func,
        isOffRange: _propTypes.default.bool,
        reactStyle: _propTypes.default.object,
        clickActiveDate: _propTypes.default.object,
        clickActiveEle: _propTypes.default.array,
        lang: _propTypes.default.string,
      }
    : {}
var _default = DateHeader
exports.default = _default
module.exports = exports.default
