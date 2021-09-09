'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = messages

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var defaultMessages = {
  date: 'Date',
  time: 'Time',
  event: 'Event',
  allDay: 'All Day',
  week: 'Week',
  work_week: 'Work Week',
  day: 'Day',
  month: 'Month',
  previous: 'Back',
  next: 'Next',
  yesterday: 'Yesterday',
  tomorrow: 'Tomorrow',
  today: 'Today',
  agenda: 'Agenda',
  noEventsInRange: 'There are no events in this range.',
  showMore: function showMore(total) {
    return '+' + total + ' more'
  },
}
var mes = {
  en: {
    today: 'Today',
    weeks: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    showMore: function showMore(total) {
      return total + ' more ' + (total > 1 ? 'activities' : 'activity')
    },
    month: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    hasActivity: 'The representative has activities on that day',
  },
  cn: {
    today: '今天',
    weeks: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    showMore: function showMore(total) {
      return '\u66F4\u591A' + total + '\u4E2A\u6D3B\u52A8'
    },
    month: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
    ],
    hasActivity: '代表当日有活动',
  },
}

function messages(msgs) {
  return (0, _extends2.default)({}, defaultMessages, mes, msgs)
}

module.exports = exports.default
