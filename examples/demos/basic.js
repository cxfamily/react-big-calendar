import React from 'react'
import { Calendar, Views } from 'react-big-calendar'
import events from '../events'
import events2 from '../events2'

let allViews = Object.keys(Views).map(k => Views[k])

export default class Basic extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {
      events: [],
      changeStatus: null,
    }
  }

  componentDidMount() {
    this.setState({ events: events })
  }

  componentDidUpdate() {
    if (this.state.changeStatus) {
      this.setState({ events: events2, changeStatus: null })
    }
  }

  changeCalendar(date) {
    this.setState({ changeStatus: `${date.getMonth() + 1}${date.getDate()}` })
  }

  render() {
    let { localizer, lang, reactStyle } = this.props
    return (
      <Calendar
        events={this.state.events}
        views={allViews}
        step={60}
        showMultiDayTimes
        // max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
        defaultDate={new Date('2015-4-9')}
        // components={{
        //   timeSlotWrapper: ColoredDateCellWrapper,
        // }}
        localizer={localizer}
        lang={lang}
        reactStyle={reactStyle}
        changeCalendar={(date, action) => this.changeCalendar(date, action)}
      />
    )
  }
}
