import React from 'react'
import "./Eventscollection.css";


const BlankTitleEvent = ({Description}) => {
  return (
    <div className="events">
        <div  className="title_event_body">
          <p className="titled_event">500+</p>
          <div className="event_bottom">
            <p className="event_date">FEB 1, 2022</p>
            <p className="event_desc">{Description}</p>
          </div>
        </div>
      </div>
  )
}

export default BlankTitleEvent