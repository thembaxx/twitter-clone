import React from 'react';
import './TimelineHeader.css';

import TimelineHeaderIcon from './icons/TimelineHeaderIcon';

function TimelineHeader() {
  return (
    <div className="timelineHeader">
      <h2 className="timelineHeader__title">Home</h2>
      <div className="timelineHeader__button">
        <TimelineHeaderIcon />
      </div>
    </div>
  );
}

export default TimelineHeader;
