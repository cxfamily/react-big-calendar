import PropTypes from 'prop-types'
import React from 'react'
import EventRowMixin from './EventRowMixin'
import { eventLevels } from './utils/eventLevels'
import range from 'lodash/range'
import clsx from 'clsx'

let isSegmentInSlot = (seg, slot) => seg.left <= slot && seg.right >= slot
let eventsInSlot = (segments, slot) =>
  segments.filter(seg => isSegmentInSlot(seg, slot)).length

class EventEndingRow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {
      segments,
      slotMetrics: { slots },
    } = this.props
    let rowSegments = eventLevels(segments).levels[0]

    let current = 1,
      lastEnd = 1,
      row = []

    while (current <= slots) {
      let key = '_lvl_' + current

      let { event, left, right, span } =
        rowSegments.filter(seg => isSegmentInSlot(seg, current))[0] || {} //eslint-disable-line

      if (!event) {
        current++
        continue
      }

      let gap = Math.max(0, left - lastEnd)

      if (this.canRenderSlotEvent(left, span)) {
        let content = EventRowMixin.renderEvent(this.props, event)

        if (gap) {
          row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'))
        }

        row.push(EventRowMixin.renderSpan(slots, span, key, content))

        lastEnd = current = right + 1
      } else {
        if (gap) {
          row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'))
        }
        row.push(
          EventRowMixin.renderSpan(
            slots,
            1,
            key,
            this.renderShowMore(segments, current)
          )
        )
        lastEnd = current = current + 1
      }
    }

    return <div className="rbc-row">{row}</div>
  }

  canRenderSlotEvent(slot, span) {
    let { segments } = this.props

    return range(slot, slot + span).every(s => {
      let count = eventsInSlot(segments, s)

      return count === 1
    })
  }

  renderShowMore(segments, slot) {
    let { localizer, lang, range, newWeeks } = this.props
    let count = eventsInSlot(segments, slot)
    let newDate = range[slot - 1]
    let currentMonth = newDate.getMonth() + 1
    let currentDate = newDate.getDate()
    segments =
      segments.filter(
        el =>
          new Date(el.event.start).getDate() <= currentDate &&
          new Date(el.event.end).getDate() >= currentDate
      ) || []
    let index = 0
    let newIsMoreShow = newWeeks.filter((el, i) => {
      if (el.key === `${currentMonth}${currentDate}`) {
        index = i
        return el
      }
    })
    return (
      count && (
        <div
          className="rbc-event-wrap"
          data-id={`ref${currentMonth}${currentDate}`}
        >
          <div
            key={'sm_' + slot}
            className="rbc-event-content rbc-show-more"
            onClick={e => this.showMore(slot, e, index)}
            data-id={`ref${currentMonth}${currentDate}`}
          >
            {localizer.messages[lang].showMore(count)}
          </div>
          {newIsMoreShow[0]?.isMore && (
            <div
              className={clsx(
                'rbc-event-more',
                newIsMoreShow[0]?.right && 'rbc-event-more-right',
                newIsMoreShow[0]?.bottom && 'rbc-event-more-bottom'
              )}
              data-id={`ref${currentMonth}${currentDate}`}
            >
              <div
                className="more-title"
                data-id={`ref${currentMonth}${currentDate}`}
              >
                {currentMonth}月{currentDate}日活动
              </div>
              {segments?.map((item, i) => {
                let newItem = item.event
                return (
                  <div
                    className="more-li"
                    key={i}
                    data-id={`ref${currentMonth}${currentDate}`}
                  >
                    <a
                      href={newItem.url}
                      title={newItem.title}
                      target="_blank"
                      className="more-li-title"
                      data-id={`ref${currentMonth}${currentDate}`}
                    >
                      {newItem.title}
                    </a>
                    <div
                      className="more-text"
                      data-id={`ref${currentMonth}${currentDate}`}
                    >
                      报名时间：{newItem.start} 至 {newItem.end}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      )
    )
  }

  showMore(slot, e, index) {
    /*todo点击more*/
    e.preventDefault()
    e.stopPropagation()
    e.persist()

    this.props.clickMore(slot, e, index)
  }
}

EventEndingRow.propTypes = {
  segments: PropTypes.array,
  slots: PropTypes.number,
  onShowMore: PropTypes.func,
  clickMore: PropTypes.func,
  lang: PropTypes.string,
  newWeeks: PropTypes.array,
  ...EventRowMixin.propTypes,
}

EventEndingRow.defaultProps = {
  ...EventRowMixin.defaultProps,
}

export default EventEndingRow
