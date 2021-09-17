import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import clsx from 'clsx'

const DateHeader = ({
  label,
  onDrillDown,
  reactStyle,
  clickActiveDate,
  clickActiveEle,
  date,
  lang,
}) => {
  label = label.replace(/^0/, '')
  let dateId = `${date.getMonth() + 1}${date.getDate()}`
  clickActiveEle = clickActiveEle.filter(el => el.key === dateId && el.value)

  return (
    <div
      className={reactStyle['current-text-wrap']}
      role="cell"
      onClick={onDrillDown}
    >
      {/*todo日历日期点击*/}
      <span className={reactStyle['current-text']} data-id={`ref${dateId}`}>
        {label}
      </span>

      {clickActiveEle[0]?.value && clickActiveDate.date && (
        <div
          className={clsx(
            reactStyle['wap-render-list'],
            reactStyle['wap-render-list-position']
          )}
          data-class="wap-render-list"
        >
          <div className={reactStyle['active-title']} data-id={`ref${dateId}`}>
            {clickActiveDate.date}
          </div>
          {clickActiveDate.list?.length > 0 ? (
            <div className={reactStyle['wap-calendar-list']}>
              {clickActiveDate.list?.map((item, i) => {
                return (
                  <Fragment key={i}>
                    {i < 6 && (
                      <div
                        className={reactStyle['active-li']}
                        data-class="active-li"
                        data-id={`ref${dateId}`}
                      >
                        <a
                          data-id={`ref${dateId}`}
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
                          data-id={`ref${dateId}`}
                        >
                          {item.campaignTimeType}：{item.campaignStartTime} 至{' '}
                          {item.campaignEndTime}
                        </div>
                      </div>
                    )}
                  </Fragment>
                )
              })}
              {clickActiveDate.list.length > 6 && (
                <a
                  href="//membercenter.made-in-china.com/campaign.do?xcase=calendar"
                  target="_blank"
                  className={reactStyle['view-more']}
                  data-id={`ref${dateId}`}
                >
                  {lang === 'cn'
                    ? `查看全部${clickActiveDate.list.length}个活动`
                    : `View All ${clickActiveDate.list.length} Activity`}
                </a>
              )}
            </div>
          ) : (
            <div
              className={reactStyle['active-li-none']}
              data-class="active-li-none"
            >
              {lang === 'cn' ? '暂无活动' : 'No Activity'}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

DateHeader.propTypes = {
  label: PropTypes.node,
  date: PropTypes.instanceOf(Date),
  drilldownView: PropTypes.string,
  onDrillDown: PropTypes.func,
  isOffRange: PropTypes.bool,
  reactStyle: PropTypes.object,
  clickActiveDate: PropTypes.object,
  clickActiveEle: PropTypes.array,
  lang: PropTypes.string,
}

export default DateHeader
