// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {data} = props
  return (
    <div className="course-time-line-card-container">
      <div className="heading-time-container">
        <h1 className="course-title">{data.courseTitle}</h1>
        <div className="time-container">
          <AiFillClockCircle className="clock-img" />
          <p>{data.duration}</p>
        </div>
      </div>
      <p>{data.description}</p>
      <div className="tags-list-container">
        {data.tagsList.map(eachTag => (
          <p className="tag">{eachTag.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
