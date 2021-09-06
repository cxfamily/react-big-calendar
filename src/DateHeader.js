import PropTypes from 'prop-types'
import React from 'react'

const DateHeader = ({ label, drilldownView /*onDrillDown*/ }) => {
  if (!drilldownView) {
    return <span>{label}</span>
  }

  return (
    <div className="current-text-wrap" role="cell">
      {/*todo日历日期点击*/}
      {/*<a href="#" onClick={onDrillDown} role="cell">*/}
      <span className="current-text">{label}</span>
    </div>
  )
}

DateHeader.propTypes = {
  label: PropTypes.node,
  date: PropTypes.instanceOf(Date),
  drilldownView: PropTypes.string,
  onDrillDown: PropTypes.func,
  isOffRange: PropTypes.bool,
}

export default DateHeader
