import React from 'react'

const ScrollableWeekWrapper = ({ children }) => {
  let { reactStyle } = this.props
  return (
    <div className={reactStyle['rbc-row-content-scroll-container']}>
      {children}
    </div>
  )
}

export default ScrollableWeekWrapper
