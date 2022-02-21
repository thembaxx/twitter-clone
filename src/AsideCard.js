import React from "react";
import "./AsideCard.css";
import SettingsIcon from "./icons/SettingsIcon";

function AsideCard({ title, showSettings, items }) {
  return (
    <div className="asideCard">
      <div className="asideCard__header">
        <h1 className="asideCard__title">{title}</h1>
        {showSettings && (
          <a href="/" className="asideCard__options">
            <SettingsIcon />
          </a>
        )}
      </div>

      {/* List */}
      <ul className="asideCard__list">{items}</ul>

      <div className="asideCard__more">Show more</div>
    </div>
  );
}

export default AsideCard;
