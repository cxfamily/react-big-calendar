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

var _inheritsLoose2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inheritsLoose')
)

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _clsx = _interopRequireDefault(require('clsx'))

var dates = _interopRequireWildcard(require('./utils/dates'))

var _excluded = [
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
]

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

var EventCell = /*#__PURE__*/ (function(_React$Component) {
  ;(0, _inheritsLoose2.default)(EventCell, _React$Component)

  function EventCell() {
    return _React$Component.apply(this, arguments) || this
  }

  var _proto = EventCell.prototype

  _proto.mouseOver = function mouseOver(id, type) {
    var dataId = document.querySelectorAll("[dataid='" + id + "']")

    for (var i = 0; i < dataId.length; i++) {
      dataId[i].style.backgroundColor = type === '1' ? '#b4defc' : '#fbcbb0'
    }
  }

  _proto.mouseOut = function mouseOut(id, type) {
    var dataId = document.querySelectorAll("[dataid='" + id + "']")

    for (var i = 0; i < dataId.length; i++) {
      dataId[i].style.backgroundColor = type === '1' ? '#D9EFFF' : '#FFEBE0'
    }
  }

  _proto.render = function render() {
    var _this = this

    var _this$props = this.props,
      style = _this$props.style,
      className = _this$props.className,
      event = _this$props.event,
      selected = _this$props.selected,
      isAllDay = _this$props.isAllDay,
      continuesPrior = _this$props.continuesPrior,
      continuesAfter = _this$props.continuesAfter,
      accessors = _this$props.accessors,
      getters = _this$props.getters,
      children = _this$props.children,
      EventWrapper = _this$props.components.eventWrapper,
      reactStyle = _this$props.reactStyle,
      props = (0, _objectWithoutPropertiesLoose2.default)(
        _this$props,
        _excluded
      )
    delete props.resizable
    var title = accessors.title(event)
    var tooltip = accessors.tooltip(event)
    var end = accessors.end(event)
    var start = accessors.start(event)
    var allDay = accessors.allDay(event)
    var showAsAllDay =
      isAllDay || allDay || dates.diff(start, dates.ceil(end, 'day'), 'day') > 1
    var userProps = getters.eventProp(event, start, end, selected)

    var content = /*#__PURE__*/ _react.default.createElement(
      'a',
      {
        href: event.url ? event.url : '#',
        className: (0, _clsx.default)(
          reactStyle['rbc-event-content'],
          event.type === '2' && reactStyle['rbc-event-content-train']
        ),
        target: '_blank',
        title: tooltip || undefined,
        dataid: event.id,
        onMouseOver: function onMouseOver() {
          _this.mouseOver(event.id, event.type)
        },
        onMouseOut: function onMouseOut() {
          _this.mouseOut(event.id, event.type)
        },
      },
      title
    )

    return /*#__PURE__*/ _react.default.createElement(
      EventWrapper,
      (0, _extends2.default)({}, this.props, {
        type: 'date',
      }),
      /*#__PURE__*/ _react.default.createElement(
        'div',
        (0, _extends2.default)({}, props, {
          tabIndex: 0,
          style: (0, _extends2.default)({}, userProps.style, style),
          className: (0, _clsx.default)(
            reactStyle['rbc-event'],
            className,
            userProps.className,
            selected && reactStyle['rbc-selected'],
            showAsAllDay && reactStyle['rbc-event-allday'],
            continuesPrior && reactStyle['rbc-event-continues-prior'],
            continuesAfter && reactStyle['rbc-event-continues-after']
          ), // onClick={e => onSelect && onSelect(event, e)}
          // onDoubleClick={e => onDoubleClick && onDoubleClick(event, e)}
          // onKeyPress={e => onKeyPress && onKeyPress(event, e)}
        }),
        typeof children === 'function' ? children(content) : content
      )
    )
  }

  return EventCell
})(_react.default.Component)

EventCell.propTypes =
  process.env.NODE_ENV !== 'production'
    ? {
        event: _propTypes.default.object.isRequired,
        // slotStart: PropTypes.instanceOf(Date),
        // slotEnd: PropTypes.instanceOf(Date),
        resizable: _propTypes.default.bool,
        selected: _propTypes.default.bool,
        isAllDay: _propTypes.default.bool,
        continuesPrior: _propTypes.default.bool,
        continuesAfter: _propTypes.default.bool,
        accessors: _propTypes.default.object.isRequired,
        components: _propTypes.default.object.isRequired,
        getters: _propTypes.default.object.isRequired,
        localizer: _propTypes.default.object,
        onSelect: _propTypes.default.func,
        onDoubleClick: _propTypes.default.func,
        onKeyPress: _propTypes.default.func,
        reactStyle: _propTypes.default.object,
      }
    : {}
var _default = EventCell
exports.default = _default
module.exports = exports.default
