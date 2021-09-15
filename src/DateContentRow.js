import clsx from 'clsx'
import getHeight from 'dom-helpers/height'
import qsa from 'dom-helpers/querySelectorAll'
import PropTypes from 'prop-types'
import React from 'react'
import { findDOMNode } from 'react-dom'

import * as dates from './utils/dates'
import BackgroundCells from './BackgroundCells'
import EventRow from './EventRow'
import EventEndingRow from './EventEndingRow'
import NoopWrapper from './NoopWrapper'
import ScrollableWeekWrapper from './ScrollableWeekWrapper'
import * as DateSlotMetrics from './utils/DateSlotMetrics'

class DateContentRow extends React.Component {
  constructor(...args) {
    super(...args)

    this.slotMetrics = DateSlotMetrics.getSlotMetrics()
  }

  handleSelectSlot = slot => {
    const { range, onSelectSlot } = this.props

    onSelectSlot(range.slice(slot.start, slot.end + 1), slot)
  }

  handleShowMore = (slot, target) => {
    const { range, onShowMore } = this.props
    let metrics = this.slotMetrics(this.props)
    let row = qsa(findDOMNode(this), '.rbc-row-bg')[0]

    let cell
    if (row) cell = row.children[slot - 1]

    let events = metrics.getEventsForSlot(slot)

    onShowMore(events, range[slot - 1], cell, slot, target)
  }

  createHeadingRef = r => {
    this.headingRow = r
  }

  createEventRef = r => {
    this.eventRow = r
  }

  getContainer = () => {
    const { container } = this.props
    return container ? container() : findDOMNode(this)
  }

  getRowLimit() {
    let eventHeight = getHeight(this.eventRow)
    let headingHeight = this.headingRow ? getHeight(this.headingRow) : 0
    let eventSpace = getHeight(findDOMNode(this)) - headingHeight

    return Math.max(
      Math.floor(eventSpace / eventHeight),
      5
    ) /*todo显示几行行程*/
  }

  renderHeadingCell = (date, index) => {
    let { renderHeader, getNow, reactStyle } = this.props
    return renderHeader({
      date,
      key: `header_${index}`,
      className: clsx(
        reactStyle['rbc-date-cell'],
        dates.eq(date, getNow(), 'day') && reactStyle['rbc-now']
      ),
    })
  }

  renderDummy = () => {
    let {
      className,
      range,
      renderHeader,
      showAllEvents,
      reactStyle,
    } = this.props
    return (
      <div className={className}>
        <div
          className={clsx(
            reactStyle['rbc-row-content'],
            showAllEvents && reactStyle['rbc-row-content-scrollable']
          )}
        >
          {renderHeader && (
            <div className={reactStyle['rbc-row']} ref={this.createHeadingRef}>
              {range.map(this.renderHeadingCell)}
            </div>
          )}
          <div className={reactStyle['rbc-row']} ref={this.createEventRef}>
            <div className={reactStyle['rbc-row-segment']}>
              <div className={reactStyle['rbc-event']}>
                <div className={reactStyle['rbc-event-content']}>&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {
      date,
      rtl,
      range,
      className,
      selected,
      selectable,
      renderForMeasure,

      accessors,
      getters,
      components,

      getNow,
      renderHeader,
      onSelect,
      localizer,
      onSelectStart,
      onSelectEnd,
      onDoubleClick,
      onKeyPress,
      resourceId,
      longPressThreshold,
      isAllDay,
      resizable,
      showAllEvents,
      lang,
      newWeeks,
      clickMore,
      reactStyle,
    } = this.props

    if (renderForMeasure) return this.renderDummy()

    let metrics = this.slotMetrics(this.props)
    let { levels, extra } = metrics

    let ScrollableWeekComponent = showAllEvents
      ? ScrollableWeekWrapper
      : NoopWrapper
    let WeekWrapper = components.weekWrapper

    const eventRowProps = {
      selected,
      accessors,
      getters,
      localizer,
      components,
      onSelect,
      onDoubleClick,
      onKeyPress,
      resourceId,
      slotMetrics: metrics,
      resizable,
      reactStyle,
    }
    return (
      <div className={className} role="rowgroup">
        <BackgroundCells
          date={date}
          getNow={getNow}
          rtl={rtl}
          range={range}
          selectable={selectable}
          container={this.getContainer}
          getters={getters}
          onSelectStart={onSelectStart}
          onSelectEnd={onSelectEnd}
          onSelectSlot={this.handleSelectSlot}
          components={components}
          longPressThreshold={longPressThreshold}
          resourceId={resourceId}
          reactStyle={reactStyle}
        />

        <div
          className={clsx(
            reactStyle['rbc-row-content'],
            showAllEvents && reactStyle['rbc-row-content-scrollable']
          )}
          role="row"
        >
          {renderHeader && (
            <div className={reactStyle['rbc-row']} ref={this.createHeadingRef}>
              {range.map(this.renderHeadingCell)}
            </div>
          )}
          <ScrollableWeekComponent>
            <WeekWrapper isAllDay={isAllDay} {...eventRowProps}>
              {levels.map((segs, idx) => (
                <EventRow
                  key={idx}
                  segments={segs}
                  {...eventRowProps}
                  reactStyle={reactStyle}
                />
              ))}
              {!!extra.length && (
                <EventEndingRow
                  segments={extra}
                  lang={lang}
                  range={range}
                  newWeeks={newWeeks}
                  onShowMore={this.handleShowMore}
                  clickMore={clickMore}
                  newMoreShow={newWeeks}
                  reactStyle={reactStyle}
                  {...eventRowProps}
                />
              )}
            </WeekWrapper>
          </ScrollableWeekComponent>
        </div>
      </div>
    )
  }
}

DateContentRow.propTypes = {
  date: PropTypes.instanceOf(Date),
  events: PropTypes.array.isRequired,
  range: PropTypes.array.isRequired,

  lang: PropTypes.string,
  rtl: PropTypes.bool,
  resizable: PropTypes.bool,
  resourceId: PropTypes.any,
  renderForMeasure: PropTypes.bool,
  renderHeader: PropTypes.func,

  container: PropTypes.func,
  selected: PropTypes.object,
  selectable: PropTypes.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: PropTypes.number,

  onShowMore: PropTypes.func,
  showAllEvents: PropTypes.bool,
  onSelectSlot: PropTypes.func,
  onSelect: PropTypes.func,
  onSelectEnd: PropTypes.func,
  onSelectStart: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  dayPropGetter: PropTypes.func,

  getNow: PropTypes.func.isRequired,
  isAllDay: PropTypes.bool,

  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired,

  minRows: PropTypes.number.isRequired,
  maxRows: PropTypes.number.isRequired,

  newWeeks: PropTypes.array,
  clickMore: PropTypes.func,
  reactStyle: PropTypes.object,
}

DateContentRow.defaultProps = {
  minRows: 0,
  maxRows: Infinity,
}

export default DateContentRow
