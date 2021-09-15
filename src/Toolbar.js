import PropTypes from 'prop-types'
import React from 'react'
import { navigate } from './utils/constants'
import compact from 'lodash/compact'
import words from 'lodash/words'
import clsx from 'clsx'

class Toolbar extends React.Component {
  render() {
    let {
      localizer: { messages },
      label,
      lang,
      reactStyle,
    } = this.props
    lang = lang ? lang : 'en'
    let labelArr = words(label)
    let labelIndex = compact(
      messages.en.month.map((el, i) => {
        if (el === labelArr[1]) {
          return i
        }
      })
    )
    let newMonth = messages[lang].month[labelIndex[0] || 0]
    let newLabel = lang === 'en' ? label : `${labelArr[0]}年${newMonth}`
    return (
      <div className={reactStyle['rbc-toolbar']} data-class="rbc-toolbar">
        {/*todo日历头部*/}
        <div
          className={reactStyle['rbc-toolbar-label']}
          data-class="rbc-toolbar-label"
        >
          {newLabel}{' '}
          <span className={reactStyle['rbc-toolbar-label-tip']}>
            {messages[lang].hasActivity}
          </span>
        </div>
        <span
          className={reactStyle['rbc-btn-group']}
          data-class="rbc-btn-group"
        >
          <button
            type="button"
            onClick={this.navigate.bind(null, navigate.PREVIOUS)}
            className={clsx(reactStyle.arrow, reactStyle['arrow-left'])}
          >
            {/*{messages.previous}*/}
          </button>
          <button
            type="button"
            onClick={this.navigate.bind(null, navigate.TODAY)}
          >
            {messages[lang].today}
          </button>
          <button
            type="button"
            onClick={this.navigate.bind(null, navigate.NEXT)}
            className={clsx(reactStyle.arrow, reactStyle['arrow-right'])}
          >
            {/*{messages.next}*/}
          </button>
        </span>

        {/*<span className="rbc-btn-group">{this.viewNamesGroup(messages)}</span>*/}
      </div>
    )
  }

  navigate = action => {
    this.props.onNavigate(action)
  }

  view = view => {
    this.props.onView(view)
  }

  // viewNamesGroup(messages) {
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
}

Toolbar.propTypes = {
  view: PropTypes.string.isRequired,
  views: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.node.isRequired,
  localizer: PropTypes.object,
  onNavigate: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
  lang: PropTypes.string,
  reactStyle: PropTypes.object,
}

export default Toolbar
