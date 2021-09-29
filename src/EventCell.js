import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import * as dates from './utils/dates'

class EventCell extends React.Component {
  mouseOver(id, type) {
    let dataId = document.querySelectorAll(`[dataid='${id}']`)
    for (let i = 0; i < dataId.length; i++) {
      dataId[i].style.backgroundColor = type === '1' ? '#b4defc' : '#fbcbb0'
    }
  }
  mouseOut(id, type) {
    let dataId = document.querySelectorAll(`[dataid='${id}']`)
    for (let i = 0; i < dataId.length; i++) {
      dataId[i].style.backgroundColor = type === '1' ? '#D9EFFF' : '#FFEBE0'
    }
  }

  render() {
    let {
      style,
      className,
      event,
      selected,
      isAllDay,
      // onSelect,
      // onDoubleClick,
      // onKeyPress,
      // localizer,
      continuesPrior,
      continuesAfter,
      accessors,
      getters,
      children,
      components: { eventWrapper: EventWrapper },
      // slotStart,
      // slotEnd,
      reactStyle,
      ...props
    } = this.props
    delete props.resizable

    let title = accessors.title(event)
    let tooltip = accessors.tooltip(event)
    let end = accessors.end(event)
    let start = accessors.start(event)
    let allDay = accessors.allDay(event)

    let showAsAllDay =
      isAllDay || allDay || dates.diff(start, dates.ceil(end, 'day'), 'day') > 1

    let userProps = getters.eventProp(event, start, end, selected)

    const content = (
      <a
        href={event.url ? event.url : '#'}
        className={clsx(
          reactStyle['rbc-event-content'],
          event.type === '2' && reactStyle['rbc-event-content-train']
        )}
        target="_blank"
        title={tooltip || undefined}
        dataid={event.id}
        onMouseOver={() => {
          this.mouseOver(event.id, event.type)
        }}
        onMouseOut={() => {
          this.mouseOut(event.id, event.type)
        }}
      >
        {/*todo日历li*/}
        {title}
      </a>
    )

    return (
      <EventWrapper {...this.props} type="date">
        <div
          {...props}
          tabIndex={0}
          style={{ ...userProps.style, ...style }}
          className={clsx(
            reactStyle['rbc-event'],
            className,
            userProps.className,
            selected && reactStyle['rbc-selected'],
            showAsAllDay && reactStyle['rbc-event-allday'],
            continuesPrior && reactStyle['rbc-event-continues-prior'],
            continuesAfter && reactStyle['rbc-event-continues-after']
          )}
          // onClick={e => onSelect && onSelect(event, e)}
          // onDoubleClick={e => onDoubleClick && onDoubleClick(event, e)}
          // onKeyPress={e => onKeyPress && onKeyPress(event, e)}
        >
          {typeof children === 'function' ? children(content) : content}
        </div>
      </EventWrapper>
    )
  }
}

EventCell.propTypes = {
  event: PropTypes.object.isRequired,
  // slotStart: PropTypes.instanceOf(Date),
  // slotEnd: PropTypes.instanceOf(Date),

  resizable: PropTypes.bool,
  selected: PropTypes.bool,
  isAllDay: PropTypes.bool,
  continuesPrior: PropTypes.bool,
  continuesAfter: PropTypes.bool,

  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object,

  onSelect: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  reactStyle: PropTypes.object,
}

export default EventCell
