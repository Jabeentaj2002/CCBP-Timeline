// Write your code here
import {Chrono} from 'react-chrono'

import './index.css'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const getItem = each => {
    if (each.categoryId === 'PROJECT') {
      return <ProjectTimelineCard data={each} />
    }
    return <CourseTimelineCard data={each} />
  }
  return (
    <div className="timelineView-container">
      <h1>
        MY JOURNEY OF
        <br />
        <span className="heading">CCBP 4.0</span>
      </h1>
      <div className="chrono-conatiner">
        <Chrono
          theme={{secondary: 'white'}}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(each => getItem(each))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
