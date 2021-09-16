'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _clsx = _interopRequireDefault(require('clsx'))

var _this = void 0

var DateHeader = function DateHeader(_ref) {
  var _clickActiveEle$, _clickActiveDate$list, _clickActiveDate$list2

  var label = _ref.label,
    onDrillDown = _ref.onDrillDown,
    reactStyle = _ref.reactStyle,
    clickActiveDate = _ref.clickActiveDate,
    clickActiveEle = _ref.clickActiveEle,
    date = _ref.date
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
                      'div',
                      {
                        className: reactStyle['active-li'],
                        key: i,
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
                          onClick: function onClick(e) {
                            _this.activeUrl(e, item.url)
                          },
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
                  }),
              clickActiveDate.list.length > 6 &&
                /*#__PURE__*/ _react.default.createElement(
                  'a',
                  {
                    href: '#',
                    target: '_blank',
                    className: reactStyle['view-more'],
                    'data-id': 'ref' + dateId,
                  },
                  '\u67E5\u770B\u5168\u90E812\u4E2A\u6D3B\u52A8'
                )
            )
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
      }
    : {}
var _default = DateHeader
exports.default = _default
module.exports = exports.default
