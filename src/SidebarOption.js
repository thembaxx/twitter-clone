import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <a href="/" className={`sidebarOption ${active && "sidebar--active"}`}>
      <div className="sidebarOption__inner">
        <div className="sidebarOption__iconWrapper">
          <Icon />
        </div>
        <h2 className="sidebarOption__text">{text}</h2>
      </div>
    </a>
  );
}

export default SidebarOption;
