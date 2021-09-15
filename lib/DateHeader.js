'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var DateHeader = function DateHeader(_ref) {
  var label = _ref.label,
    onDrillDown = _ref.onDrillDown,
    reactStyle = _ref.reactStyle
  label = label.replace(/^0/, '')
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
      },
      label
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
      }
    : {}
var _default = DateHeader
exports.default = _default
module.exports = exports.default
