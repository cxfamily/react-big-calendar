'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _inheritsLoose2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inheritsLoose')
)

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _EventRowMixin = _interopRequireDefault(require('./EventRowMixin'))

var _eventLevels = require('./utils/eventLevels')

var _range = _interopRequireDefault(require('lodash/range'))

var _clsx = _interopRequireDefault(require('clsx'))

var isSegmentInSlot = function isSegmentInSlot(seg, slot) {
  return seg.left <= slot && seg.right >= slot
}

var eventsInSlot = function eventsInSlot(segments, slot) {
  return segments.filter(function(seg) {
    return isSegmentInSlot(seg, slot)
  }).length
}

var EventEndingRow = /*#__PURE__*/ (function(_React$Component) {
  ;(0, _inheritsLoose2.default)(EventEndingRow, _React$Component)

  function EventEndingRow(props) {
    return _React$Component.call(this, props) || this
  }

  var _proto = EventEndingRow.prototype

  _proto.render = function render() {
    var _this$props = this.props,
      segments = _this$props.segments,
      slots = _this$props.slotMetrics.slots,
      reactStyle = _this$props.reactStyle
    var rowSegments = (0, _eventLevels.eventLevels)(segments).levels[0]
    var current = 1,
      lastEnd = 1,
      row = []

    while (current <= slots) {
      var key = '_lvl_' + current

      var _ref =
          rowSegments.filter(function(seg) {
            return isSegmentInSlot(seg, current)
          })[0] || {},
        event = _ref.event,
        left = _ref.left,
        right = _ref.right,
        span = _ref.span //eslint-disable-line

      if (!event) {
        current++
        continue
      }

      var gap = Math.max(0, left - lastEnd)

      if (this.canRenderSlotEvent(left, span)) {
        var content = _EventRowMixin.default.renderEvent(this.props, event)

        if (gap) {
          row.push(_EventRowMixin.default.renderSpan(slots, gap, key + '_gap'))
        }

        row.push(
          _EventRowMixin.default.renderSpan(
            slots,
            span,
            key,
            content,
            reactStyle
          )
        )
        lastEnd = current = right + 1
      } else {
        if (gap) {
          row.push(_EventRowMixin.default.renderSpan(slots, gap, key + '_gap'))
        }

        row.push(
          _EventRowMixin.default.renderSpan(
            slots,
            1,
            key,
            this.renderShowMore(segments, current),
            reactStyle
          )
        )
        lastEnd = current = current + 1
      }
    }

    return /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: reactStyle['rbc-row'],
      },
      row
    )
  }

  _proto.canRenderSlotEvent = function canRenderSlotEvent(slot, span) {
    var segments = this.props.segments
    return (0, _range.default)(slot, slot + span).every(function(s) {
      var count = eventsInSlot(segments, s)
      return count === 1
    })
  }

  _proto.renderShowMore = function renderShowMore(segments, slot) {
    var _this = this,
      _newIsMoreShow$,
      _newIsMoreShow$2,
      _newIsMoreShow$3,
      _segments

    var _this$props2 = this.props,
      localizer = _this$props2.localizer,
      lang = _this$props2.lang,
      range = _this$props2.range,
      newWeeks = _this$props2.newWeeks,
      reactStyle = _this$props2.reactStyle
    var count = eventsInSlot(segments, slot)
    var newDate = range[slot - 1]
    var currentMonth = newDate.getMonth() + 1
    var currentDate = newDate.getDate()
    segments =
      segments.filter(function(el) {
        return (
          new Date(el.event.start).getFullYear() === newDate.getFullYear() &&
          new Date(el.event.start).getMonth() === newDate.getMonth() &&
          new Date(el.event.start).getDate() <= currentDate &&
          (new Date(el.event.end).getDate() >= currentDate ||
            new Date(el.event.end).getMonth() > newDate.getMonth())
        )
      }) || []
    var index = 0
    var newIsMoreShow = newWeeks.filter(function(el, i) {
      if (el.key === '' + currentMonth + currentDate) {
        index = i
        return el
      }
    })
    return (
      count &&
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: reactStyle['rbc-event-wrap'],
          'data-id': 'ref' + currentMonth + currentDate,
          'data-class': 'rbc-event-wrap',
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            key: 'sm_' + slot,
            className: (0, _clsx.default)(
              reactStyle['rbc-event-content'],
              reactStyle['rbc-show-more']
            ),
            onClick: function onClick(e) {
              return _this.showMore(slot, e, index)
            },
            'data-id': 'ref' + currentMonth + currentDate,
            'data-class': 'rbc-event-content',
          },
          localizer.messages[lang].showMore(count)
        ),
        ((_newIsMoreShow$ = newIsMoreShow[0]) == null
          ? void 0
          : _newIsMoreShow$.isMore) &&
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: (0, _clsx.default)(
                reactStyle['rbc-event-more'],
                ((_newIsMoreShow$2 = newIsMoreShow[0]) == null
                  ? void 0
                  : _newIsMoreShow$2.right) &&
                  reactStyle['rbc-event-more-right'],
                ((_newIsMoreShow$3 = newIsMoreShow[0]) == null
                  ? void 0
                  : _newIsMoreShow$3.bottom) &&
                  reactStyle['rbc-event-more-bottom']
              ),
              'data-id': 'ref' + currentMonth + currentDate,
              'data-class': 'rbc-event-more',
            },
            /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: reactStyle['more-title'],
                'data-id': 'ref' + currentMonth + currentDate,
                'data-class': 'more-title',
              },
              currentMonth,
              '\u6708',
              currentDate,
              '\u65E5\u6D3B\u52A8'
            ),
            (_segments = segments) == null
              ? void 0
              : _segments.map(function(item, i) {
                  var newItem = item.event
                  return /*#__PURE__*/ _react.default.createElement(
                    'div',
                    {
                      className: reactStyle['more-li'],
                      key: i,
                      'data-id': 'ref' + currentMonth + currentDate,
                      'data-class': 'more-li',
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      'a',
                      {
                        href: newItem.url,
                        title: newItem.title,
                        target: '_blank',
                        className: reactStyle['more-li-title'],
                        'data-id': 'ref' + currentMonth + currentDate,
                      },
                      newItem.title
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        className: reactStyle['more-text'],
                        'data-id': 'ref' + currentMonth + currentDate,
                        'data-class': 'more-text',
                      },
                      newItem.campaignTimeType,
                      '\uFF1A',
                      newItem.campaignStartTime,
                      ' \u81F3',
                      ' ',
                      newItem.campaignEndTime
                    )
                  )
                })
          )
      )
    )
  }

  _proto.showMore = function showMore(slot, e, index) {
    /*todo点击more*/
    e.preventDefault()
    e.stopPropagation()
    e.persist()
    this.props.clickMore(slot, e, index)
  }

  return EventEndingRow
})(_react.default.Component)

EventEndingRow.propTypes =
  process.env.NODE_ENV !== 'production'
    ? (0, _extends2.default)(
        {
          segments: _propTypes.default.array,
          slots: _propTypes.default.number,
          onShowMore: _propTypes.default.func,
          clickMore: _propTypes.default.func,
          lang: _propTypes.default.string,
          newWeeks: _propTypes.default.array,
          reactStyle: _propTypes.default.object,
        },
        _EventRowMixin.default.propTypes
      )
    : {}
EventEndingRow.defaultProps = (0, _extends2.default)(
  {},
  _EventRowMixin.default.defaultProps
)
var _default = EventEndingRow
exports.default = _default
module.exports = exports.default
