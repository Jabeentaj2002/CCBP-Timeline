// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {data} = props
  return (
    <div className="project-timeline-container">
      <img src={data.imageUrl} alt="project" className="image-url" />
      <div className="heading-time-container">
        <h1 className="project-heading">{data.projectTitle}</h1>
        <div className="calendar-container">
          <AiFillCalendar className="calendar-img" />
          <p>{data.duration}</p>
        </div>
      </div>
      <p>{data.description}</p>
      <a href={data.projectUrl} className="project-url">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
