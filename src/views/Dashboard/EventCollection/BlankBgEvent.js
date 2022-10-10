import React from "react";
import "./Eventscollection.css";

const BlankBgEvent = ({ backgroundImage,Description }) => {
  return (
    <div className="events eventBg" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="title_event_body">
          <div className="event_bottom">
            <p className="event_date">FEB 1, 2022</p>
            <p className="event_desc">{Description}</p>
          </div>
        </div>
    </div>
  );
};

export default BlankBgEvent;
