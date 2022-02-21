import React from "react";
import "./Sidebar.css";
import { Button } from "@mui/material";

import TwitterIcon from "./icons/TwitterIcon";
import HomeIcon from "./icons/HomeIcon";
import ExploreIcon from "./icons/ExploreIcon";
import SidebarOption from "./SidebarOption";
import NotificationIcon from "./icons/NotificationIcon";
import MessagesIcon from "./icons/MessagesIcon";
import ProfileIcon from "./icons/ProfileIcon";
import BookmarksIcon from "./icons/BookmarksIcon";
import ListsIcon from "./icons/ListsIcon";
import MoreIcon from "./icons/MoreIcon";
import MoreHorIcon from "./icons/MoreHorIcon";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <a href="/" className="sidebar__logo">
          <TwitterIcon color="var(--twitter-blue)" height="28px" />
        </a>

        <div className="sidebarOptions">
          <SidebarOption Icon={HomeIcon} text="Home" active />
          <SidebarOption Icon={ExploreIcon} text="Explore" />
          <SidebarOption Icon={NotificationIcon} text="Notifications" />
          <SidebarOption Icon={MessagesIcon} text="Messages" />
          <SidebarOption Icon={BookmarksIcon} text="Bookmarks" />
          <SidebarOption Icon={ListsIcon} text="Lists" />
          <SidebarOption Icon={ProfileIcon} text="Profile" />
          <SidebarOption Icon={MoreIcon} text="More" />
        </div>

        <Button variant="outlined" className="sidebar__tweet" fullWidth>
          Tweet
        </Button>

        <div className="sidebar__account">
          <div className="sidebar__avatar">
            <img
              className="sidebar__avatarImage"
              src="https://randomuser.me/api/portraits/thumb/women/17.jpg"
              alt=""
            />
          </div>
          <div className="sidebar__userInfo">
            <div className="sidebar__name">Themba</div>
            <div className="sidebar__username">@themba_xx</div>
          </div>
          <div className="sidebar__more">{<MoreHorIcon />}</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
