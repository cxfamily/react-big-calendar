import PropTypes from 'prop-types'
import React from 'react'
import { findDOMNode } from 'react-dom'
import clsx from 'clsx'
import flatten from 'lodash/flatten'
import cloneDeep from 'lodash/cloneDeep'

import * as dates from './utils/dates'
import chunk from 'lodash/chunk'

import { navigate, views } from './utils/constants'
import { notify } from './utils/helpers'
import getPosition from 'dom-helpers/position'
// import * as animationFrame from 'dom-helpers/animationFrame'

import Popup from './Popup'
import Overlay from 'react-overlays/Overlay'
import DateContentRow from './DateContentRow'
import Header from './Header'
import DateHeader from './DateHeader'

import { inRange, sortEvents } from './utils/eventLevels'

let eventsForWeek = (evts, start, end, accessors) =>
  evts.filter(e => inRange(e, start, end, accessors))

let wapFirstRender = true //触屏初次渲染

class MonthView extends React.Component {
  constructor(...args) {
    super(...args)

    this._bgRows = []
    this._pendingSelection = []
    this.slotRowRef = React.createRef()
    this.state = {
      rowLimit: 5,
      needLimitMeasure: true,
      newWeeks: [],
      newWeeksIndex: 0,
      clickActiveEle: [], //点击当前日期元素
      clickActiveEleHeader: [], //点击当前日期元素日期
      clickActiveDate: {
        list: [],
        date: null,
      }, //点击当前日期日程(list:当前选中日程列表，date:当前选中时间)
    }
  }

  UNSAFE_componentWillReceiveProps({ date, events, wapCalendar }) {
    let newDate = `${date.getMonth() + 1}月${date.getDate()}日活动`
    this.setState({
      needLimitMeasure: !dates.eq(date, this.props.date, 'month'),
      clickActiveDate: {
        list:
          wapFirstRender && wapCalendar ? this.currectData(date, events) : [],
        date: wapFirstRender && wapCalendar ? newDate : null,
      },
    })

    wapFirstRender = false
  }

  updateData() {
    let { date, localizer } = this.props,
      month = dates.visibleDays(date, localizer),
      weeks = chunk(month, 7)
    let newWeeks = weeks.map(el =>
      el.map(sel => {
        sel = `${sel.getMonth() + 1}${sel.getDate()}`
        return sel
      })
    )

    let dataId = `${date.getMonth() + 1}${date.getDate()}`
    let clickActiveEle = flatten(newWeeks).map(el => {
      el = { key: el, value: el === dataId && wapFirstRender }
      return el
    })
    newWeeks = flatten(newWeeks).map(el => {
      el = { key: el, isMore: false, right: false, bottom: false }
      return el
    })

    this.setState({
      newWeeks: newWeeks,
      clickActiveEle: clickActiveEle,
      clickActiveEleHeader: cloneDeep(clickActiveEle),
    })
  }

  componentDidMount() {
    // let running
    if (this.state.needLimitMeasure) this.measureRowLimit(this.props)

    document.addEventListener('click', e => this.hideClickMore(e), false)

    // window.addEventListener(/*todo改变宽度日程显示全部*/
    //   'resize',
    //   (this._resizeListener = () => {
    //     if (!running) {
    //       animationFrame.request(() => {
    //         running = false
    //         this.setState({ needLimitMeasure: true }) //eslint-disable-line
    //       })
    //     }
    //   }),
    //   false
    // )
    this.updateData()
  }

  componentDidUpdate() {
    if (this.state.needLimitMeasure) {
      this.measureRowLimit(this.props)
      this.updateData()
      this.setState({
        clickActiveDate: {
          list: [],
          date: null,
        },
      })
    }
  }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this._resizeListener, false)
  // }

  getContainer = () => {
    return findDOMNode(this)
  }

  render() {
    let { clickActiveDate } = this.state
    let { date, localizer, className, loading, reactStyle } = this.props,
      month = dates.visibleDays(date, localizer),
      weeks = chunk(month, 7)

    this._weekCount = weeks.length

    return (
      <>
        <div
          className={clsx(
            reactStyle['rbc-month-view'],
            className,
            loading && reactStyle['rbc-month-view-loading']
          )}
          role="table"
          aria-label="Month View"
          data-class="rbc-month-view"
        >
          <div
            className={clsx(
              reactStyle['rbc-row'],
              reactStyle['rbc-month-header']
            )}
            role="row"
            data-class="rbc-row"
          >
            {this.renderHeaders(weeks[0])}
          </div>
          {weeks.map(this.renderWeek)}
          {this.props.popup && this.renderOverlay()}
        </div>

        {clickActiveDate.date && (
          <div
            className={reactStyle['wap-render-list']}
            data-class="wap-render-list"
          >
            <div className={reactStyle['active-title']}>
              {clickActiveDate.date}
            </div>
            {clickActiveDate.list?.length > 0 ? (
              clickActiveDate.list?.map((item, i) => {
                return (
                  <div
                    className={reactStyle['active-li']}
                    key={i}
                    data-class="active-li"
                    onClick={() => {
                      this.props.clickDate(date)
                    }}
                  >
                    <a
                      href={item.url}
                      title={item.title}
                      target="_blank"
                      className={reactStyle['active-li-title']}
                      data-class="active-li-title"
                    >
                      {item.title}
                    </a>
                    <div
                      className={reactStyle['active-text']}
                      data-class="active-text"
                    >
                      {item.campaignTimeType}：{item.campaignStartTime} 至{' '}
                      {item.campaignEndTime}
                    </div>
                  </div>
                )
              })
            ) : (
              <div
                className={reactStyle['active-li-none']}
                data-class="active-li-none"
              >
                暂无活动
              </div>
            )}
          </div>
        )}
      </>
    )
  }

  hideClickMore(e) {
    let { newWeeks, newWeeksIndex, clickActiveEle } = this.state
    let newMoreShow = newWeeks
    let newClickActiveEle = clickActiveEle
    let node = e.target.getAttribute('data-id')
    if (node !== `ref${newMoreShow[newWeeksIndex].key}`) {
      newMoreShow[this.state.newWeeksIndex].isMore = false
      newClickActiveEle[this.state.newWeeksIndex].value = false
      this.setState({
        newWeeks: newMoreShow,
        clickActiveEle: newClickActiveEle,
      })
    }
  }

  clickMore = (slot, e, index) => {
    let { reactStyle } = this.props
    let newMoreShow = this.state.newWeeks
    newMoreShow = newMoreShow.map((el, i) => {
      el.isMore = false
      el.right = false
      el.bottom = false
      if (i === index) {
        el.isMore = true
      }
      return el
    })
    this.setState(
      {
        newWeeks: newMoreShow,
        newWeeksIndex: index,
      },
      () => {
        let moreClassName = document.getElementsByClassName(
          reactStyle['rbc-event-more']
        )[0]
        let moreHeight = moreClassName.offsetHeight
        let moreWidth = moreClassName.offsetWidth
        let scrollX =
          document.documentElement.scrollLeft || document.body.scrollLeft
        let scrollY =
          document.documentElement.scrollTop || document.body.scrollTop
        let width = window.innerWidth + scrollX
        let height = window.innerHeight + scrollY
        let x = e.pageX
        let y = e.pageY
        let isRight = x >= width - moreWidth
        let isBottom = y >= height - moreHeight

        let newPositionMore = this.state.newWeeks
        newPositionMore = newPositionMore.map((el, i) => {
          el.right = false
          el.bottom = false
          if (i === index) {
            el.right = isRight
            el.bottom = isBottom
          }
          return el
        })

        this.setState({
          newWeeks: newPositionMore,
        })
      }
    )
  }

  renderWeek = (week, weekIdx) => {
    let {
      events,
      components,
      selectable,
      getNow,
      selected,
      date,
      localizer,
      longPressThreshold,
      accessors,
      getters,
      showAllEvents,
      lang,
      label,
      reactStyle,
    } = this.props

    const { needLimitMeasure, rowLimit, newWeeks } = this.state

    events = eventsForWeek(events, week[0], week[week.length - 1], accessors)

    events.sort((a, b) => sortEvents(a, b, accessors))

    return (
      <DateContentRow
        key={weekIdx}
        ref={weekIdx === 0 ? this.slotRowRef : undefined}
        container={this.getContainer}
        className={reactStyle['rbc-month-row']}
        getNow={getNow}
        date={date}
        range={week}
        events={events}
        maxRows={showAllEvents ? Infinity : rowLimit}
        selected={selected}
        selectable={selectable}
        components={components}
        accessors={accessors}
        getters={getters}
        localizer={localizer}
        renderHeader={this.readerDateHeading}
        renderForMeasure={needLimitMeasure}
        onShowMore={this.handleShowMore}
        onSelect={this.handleSelectEvent}
        onDoubleClick={this.handleDoubleClickEvent}
        onKeyPress={this.handleKeyPressEvent}
        onSelectSlot={this.handleSelectSlot}
        longPressThreshold={longPressThreshold}
        rtl={this.props.rtl}
        resizable={this.props.resizable}
        showAllEvents={showAllEvents}
        lang={lang}
        label={label}
        newWeeks={newWeeks}
        clickMore={this.clickMore}
        reactStyle={reactStyle}
      />
    )
  }

  currectData = (date, events) => {
    let timeStamp = (el, type) => {
      el = type ? el : new Date(el)
      return Date.parse(
        `${el.getFullYear()}-${el.getMonth() + 1}-${el.getDate()}`
      )
    }

    let currectData = events.filter(
      el =>
        timeStamp(el.start) <= timeStamp(date, 'date') &&
        timeStamp(el.end) >= timeStamp(date, 'date')
    )

    return currectData
  }

  readerDateHeading = ({ date, className, ...props }) => {
    let {
      date: currentDate,
      getDrilldownView,
      localizer,
      events,
      reactStyle,
      lang,
      detailUrl,
    } = this.props
    let { clickActiveEle, clickActiveDate, clickActiveEleHeader } = this.state

    let isOffRange = dates.month(date) !== dates.month(currentDate)
    let isCurrent = dates.eq(date, currentDate, 'day')
    let drilldownView = getDrilldownView(date)
    let label = localizer.format(date, 'dateFormat')
    let DateHeaderComponent = this.props.components.dateHeader || DateHeader

    let dateId = `${date.getMonth() + 1}${date.getDate()}`
    let newActiveEle = clickActiveEleHeader.filter(el => {
      if (el.key === dateId) {
        return el
      }
    })

    return (
      <div
        {...props}
        className={clsx(
          className,
          isOffRange && reactStyle['rbc-off-range'],
          isCurrent && reactStyle['rbc-current'],
          this.currectData(date, events)?.length > 0 && reactStyle['rbc-data'],
          newActiveEle[0]?.value && reactStyle['rbc-active']
        )}
        role="cell"
      >
        <DateHeaderComponent
          label={label}
          date={date}
          drilldownView={drilldownView}
          isOffRange={isOffRange}
          reactStyle={reactStyle}
          onDrillDown={e => this.handleHeadingClick(date, events, e, dateId)}
          clickActiveDate={clickActiveDate}
          clickActiveEle={clickActiveEle}
          lang={lang}
          detailUrl={detailUrl}
        />
      </div>
    )
  }

  renderHeaders(row) {
    let { localizer, components, lang, reactStyle } = this.props
    let first = row[0]
    let last = row[row.length - 1]
    let HeaderComponent = components.header || Header
    lang = lang ? lang : 'en'
    var label = localizer.messages[lang].weeks
    return dates.range(first, last, 'day').map((day, idx) => (
      <div
        key={'header_' + idx}
        className={reactStyle['rbc-header']}
        data-class="rbc-header"
      >
        <HeaderComponent
          date={day}
          localizer={localizer}
          label={label[idx]} //localizer.format(day, 'weekdayFormat')
        />
      </div>
    ))
  }

  renderOverlay() {
    let overlay = (this.state && this.state.overlay) || {}
    let {
      accessors,
      localizer,
      components,
      getters,
      selected,
      popupOffset,
      reactStyle,
    } = this.props

    return (
      <Overlay
        rootClose
        placement="bottom"
        show={!!overlay.position}
        onHide={() => this.setState({ overlay: null })}
        target={() => overlay.target}
      >
        {({ props }) => (
          <Popup
            {...props}
            popupOffset={popupOffset}
            accessors={accessors}
            getters={getters}
            selected={selected}
            components={components}
            localizer={localizer}
            position={overlay.position}
            show={this.overlayDisplay}
            events={overlay.events}
            slotStart={overlay.date}
            slotEnd={overlay.end}
            onSelect={this.handleSelectEvent}
            onDoubleClick={this.handleDoubleClickEvent}
            onKeyPress={this.handleKeyPressEvent}
            handleDragStart={this.props.handleDragStart}
            reactStyle={reactStyle}
          />
        )}
      </Overlay>
    )
  }

  measureRowLimit() {
    this.setState({
      needLimitMeasure: false,
      rowLimit: this.slotRowRef.current.getRowLimit(),
    })
  }

  handleSelectSlot = (range, slotInfo) => {
    this._pendingSelection = this._pendingSelection.concat(range)

    clearTimeout(this._selectTimer)
    this._selectTimer = setTimeout(() => this.selectDates(slotInfo))
  }

  handleHeadingClick = (date, events, e, dateId) => {
    // e.preventDefault()
    let { lang, localizer } = this.props

    let { clickActiveEle } = this.state
    let newClickActiveEle = clickActiveEle
    newClickActiveEle = newClickActiveEle.map(el => {
      el.value = false
      if (el.key === dateId) {
        el.value = true
      }
      return el
    })

    let newWeeksIndex = 0
    clickActiveEle.map((el, i) => {
      if (el.key === dateId) {
        newWeeksIndex = i
      }
    })

    let dateText = 'th'
    let getDate = date.getDate()
    if (getDate === 1 || getDate === 21 || getDate === 31) {
      dateText = 'st'
    } else if (getDate === 2 || getDate === 22) {
      dateText = 'nd'
    } else if (getDate === 3 || getDate === 23) {
      dateText = 'rd'
    } else {
      dateText = 'th'
    }

    let newDate =
      lang === 'cn'
        ? `${date.getMonth() + 1}月${date.getDate()}日活动`
        : `Activities on ${
            localizer.messages[lang].month[date.getMonth()]
          } ${date.getDate()}${dateText}`
    this.setState({
      clickActiveEle: newClickActiveEle,
      clickActiveDate: { list: this.currectData(date, events), date: newDate },
      newWeeksIndex: newWeeksIndex,
      clickActiveEleHeader: cloneDeep(newClickActiveEle),
    })
    this.props.clickDate(date)
  }

  handleSelectEvent = (...args) => {
    this.clearSelection()
    notify(this.props.onSelectEvent, args)
  }

  handleDoubleClickEvent = (...args) => {
    this.clearSelection()
    notify(this.props.onDoubleClickEvent, args)
  }

  handleKeyPressEvent = (...args) => {
    this.clearSelection()
    notify(this.props.onKeyPressEvent, args)
  }

  handleShowMore = (events, date, cell, slot, target) => {
    const {
      popup,
      onDrillDown,
      onShowMore,
      getDrilldownView,
      doShowMoreDrillDown,
    } = this.props
    //cancel any pending selections so only the event click goes through.
    this.clearSelection()

    if (popup) {
      let position = getPosition(cell, findDOMNode(this))

      this.setState({
        overlay: { date, events, position, target },
      })
    } else if (doShowMoreDrillDown) {
      notify(onDrillDown, [date, getDrilldownView(date) || views.DAY])
    }

    notify(onShowMore, [events, date, slot])
  }

  overlayDisplay = () => {
    this.setState({
      overlay: null,
    })
  }

  selectDates(slotInfo) {
    let slots = this._pendingSelection.slice()

    this._pendingSelection = []

    slots.sort((a, b) => +a - +b)

    const start = new Date(slots[0])
    const end = new Date(slots[slots.length - 1])
    end.setDate(slots[slots.length - 1].getDate() + 1)

    notify(this.props.onSelectSlot, {
      slots,
      start,
      end,
      action: slotInfo.action,
      bounds: slotInfo.bounds,
      box: slotInfo.box,
    })
  }

  clearSelection() {
    clearTimeout(this._selectTimer)
    this._pendingSelection = []
  }
}

MonthView.propTypes = {
  events: PropTypes.array.isRequired,
  date: PropTypes.instanceOf(Date),

  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),

  step: PropTypes.number,
  getNow: PropTypes.func.isRequired,

  scrollToTime: PropTypes.instanceOf(Date),
  rtl: PropTypes.bool,
  resizable: PropTypes.bool,
  width: PropTypes.number,

  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired,
  lang: PropTypes.string,
  detailUrl: PropTypes.string,
  wapCalendar: PropTypes.boolean,

  selected: PropTypes.object,
  selectable: PropTypes.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: PropTypes.number,

  onNavigate: PropTypes.func,
  onSelectSlot: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onDoubleClickEvent: PropTypes.func,
  onKeyPressEvent: PropTypes.func,
  onShowMore: PropTypes.func,
  showAllEvents: PropTypes.bool,
  doShowMoreDrillDown: PropTypes.bool,
  onDrillDown: PropTypes.func,
  getDrilldownView: PropTypes.func.isRequired,

  loading: PropTypes.bool,
  popup: PropTypes.bool,
  handleDragStart: PropTypes.func,
  clickDate: PropTypes.func,
  label: PropTypes.string,
  reactStyle: PropTypes.object,

  popupOffset: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ]),
}

MonthView.range = (date, { localizer }) => {
  let start = dates.firstVisibleDay(date, localizer)
  let end = dates.lastVisibleDay(date, localizer)
  return { start, end }
}

MonthView.navigate = (date, action) => {
  switch (action) {
    case navigate.PREVIOUS:
      return dates.add(date, -1, 'month')

    case navigate.NEXT:
      return dates.add(date, 1, 'month')

    default:
      return date
  }
}

MonthView.title = (date, { localizer }) =>
  localizer.format(date, 'monthHeaderFormat')

export default MonthView
