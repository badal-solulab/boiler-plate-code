import React from "react";
import { EVENT1 } from "../../../assets/images";
import { EVENT2 } from "../../../assets/images";
import { EVENT3 } from "../../../assets/images";
import { EVENT4 } from "../../../assets/images";
import BlankBgEvent from "./BlankBgEvent";
import BlankEvent from "./BlankEvent";
import BlankTitleEvent from "./BlankTitleEvent";
import "./Eventscollection.css";

const EventCollection = () => {
  const titleFirstEvent =
    "Private Tasting in Los Angeles with all Grand Cru Members";
  const titleSecondEvent =
    "The Super Yacht Party in Miami with Grand Cru Members 2022 & 2023";
  const titleThirdEvent = "F1 Monaco Grand Cru Dinner";
  const titleFourEvent =
    "Priavte Tasting in New York with all Grand Cru Members";
  const blankEventTitle = "Grand Cru 2022 Launch for 500 Members";
  const blankEventNewMember = "Grand Cru 2023 Launch for 500 New Members";
  const blankNewBatch = "Grand Cru 2023 Batch 2 Launch for 500 New Members";

  return (
    <>
      <div className="event_wrapper">
        <div className="event_collection">
          <div className="events_container">
            <BlankEvent />
            <BlankTitleEvent Description={blankEventTitle} />
            <BlankBgEvent
              backgroundImage={EVENT1}
              Description={titleFirstEvent}
            />
            <BlankBgEvent
              backgroundImage={EVENT2}
              Description={titleSecondEvent}
            />
            <BlankTitleEvent Description={blankEventNewMember} />
            <BlankBgEvent
              backgroundImage={EVENT3}
              Description={titleThirdEvent}
            />
            <BlankBgEvent
              backgroundImage={EVENT4}
              Description={titleFourEvent}
            />
            <BlankTitleEvent Description={blankNewBatch} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCollection;
