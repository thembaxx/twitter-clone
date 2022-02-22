import React from "react";
import "./Timeline.css";

import TimelineHeader from "./header/TimelineHeader";
import Composer from "../composer/Composer";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__header">
        <TimelineHeader />
      </div>
      <div className="timeline__composer">
        <Composer />
      </div>
    </div>
  );
}

export default Timeline;
