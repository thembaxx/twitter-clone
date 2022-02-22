import React from "react";
import "./SidebarProfile.css";

import MoreHorIcon from "../icons/MoreHorIcon";

function SidebarProfile() {
  return (
    <div className="sidebarProfile">
      <div className="sidebarProfile__avatar">
        <img
          className="sidebarProfile__avatarImage"
          src="https://randomuser.me/api/portraits/thumb/women/6.jpg"
          alt=""
        />
      </div>
      <div className="sidebarProfile__userInfo">
        <div className="sidebarProfile__name">Themba</div>
        <div className="sidebarProfile__username">@themba_xx</div>
      </div>
      <div className="sidebarProfile__more">{<MoreHorIcon />}</div>
    </div>
  );
}

export default SidebarProfile;
