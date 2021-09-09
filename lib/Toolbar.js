'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _inheritsLoose2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inheritsLoose')
)

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _constants = require('./utils/constants')

var _compact = _interopRequireDefault(require('lodash/compact'))

var _words = _interopRequireDefault(require('lodash/words'))

var Toolbar = /*#__PURE__*/ (function(_React$Component) {
  ;(0, _inheritsLoose2.default)(Toolbar, _React$Component)

  function Toolbar() {
    var _this

    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    _this =
      _React$Component.call.apply(_React$Component, [this].concat(args)) || this

    _this.navigate = function(action) {
      _this.props.onNavigate(action)
    }

    _this.view = function(view) {
      _this.props.onView(view)
    }

    return _this
  }

  var _proto = Toolbar.prototype

  _proto.render = function render() {
    var _this$props = this.props,
      messages = _this$props.localizer.messages,
      label = _this$props.label,
      lang = _this$props.lang
    lang = lang ? lang : 'en'
    var labelArr = (0, _words.default)(label)
    var labelIndex = (0, _compact.default)(
      messages.en.month.map(function(el, i) {
        if (el === labelArr[1]) {
          return i
        }
      })
    )
    var newMonth = messages[lang].month[labelIndex[0] || 0]
    var newLabel = lang === 'en' ? label : labelArr[0] + '\u5E74' + newMonth
    return /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'rbc-toolbar',
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'rbc-toolbar-label',
        },
        newLabel,
        ' ',
        /*#__PURE__*/ _react.default.createElement(
          'span',
          {
            className: 'rbc-toolbar-label-tip',
          },
          messages[lang].hasActivity
        )
      ),
      /*#__PURE__*/ _react.default.createElement(
        'span',
        {
          className: 'rbc-btn-group',
        },
        /*#__PURE__*/ _react.default.createElement('button', {
          type: 'button',
          onClick: this.navigate.bind(null, _constants.navigate.PREVIOUS),
          className: 'arrow arrow-left',
        }),
        /*#__PURE__*/ _react.default.createElement(
          'button',
          {
            type: 'button',
            onClick: this.navigate.bind(null, _constants.navigate.TODAY),
          },
          messages[lang].today
        ),
        /*#__PURE__*/ _react.default.createElement('button', {
          type: 'button',
          onClick: this.navigate.bind(null, _constants.navigate.NEXT),
          className: 'arrow arrow-right',
        })
      )
    )
  } // viewNamesGroup(messages) {
  //   let viewNames = this.props.views
  //   const view = this.props.view
  //
  //   if (viewNames.length > 1) {
  //     return viewNames.map(name => (
  //       <button
  //         type="button"
  //         key={name}
  //         className={clsx({ 'rbc-active': view === name })}
  //         onClick={this.view.bind(null, name)}
  //       >
  //         {messages[name]}
  //       </button>
  //     ))
  //   }
  // }

  return Toolbar
})(_react.default.Component)

Toolbar.propTypes =
  process.env.NODE_ENV !== 'production'
    ? {
        view: _propTypes.default.string.isRequired,
        views: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
        label: _propTypes.default.node.isRequired,
        localizer: _propTypes.default.object,
        onNavigate: _propTypes.default.func.isRequired,
        onView: _propTypes.default.func.isRequired,
        lang: _propTypes.default.string,
      }
    : {}
var _default = Toolbar
exports.default = _default
module.exports = exports.default
