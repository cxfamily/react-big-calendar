import PropTypes from 'prop-types'
import React from 'react'

const DateHeader = ({ label, onDrillDown }) => {
  label = label.replace(/^0/, '')

  return (
    <div className="current-text-wrap" role="cell" onClick={onDrillDown}>
      {/*todo日历日期点击*/}
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
