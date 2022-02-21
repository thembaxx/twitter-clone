import React from "react";
import "./Trend.css";
import MoreHorIcon from "./icons/MoreHorIcon";

function Trend({ source, title, tweets }) {
  return (
    <div className="trend">
      <span className="trend__source trend--small">{source}</span>
      <span className="trend__title">{title}</span>
      <span className="trend__count trend--small">{`${tweets} Tweets`}</span>
      <div className="trend__options">
        <MoreHorIcon />
      </div>
    </div>
  );
}

export default Trend;
