import React from 'react';
import './SidebarNav.css';
import SidebarNavItem from './SidebarNavItem';

import HomeIcon from '../icons/HomeIcon';
import ExploreIcon from '../icons/ExploreIcon';
import NotificationIcon from '../icons/NotificationIcon';
import MessagesIcon from '../icons/MessagesIcon';
import ProfileIcon from '../icons/ProfileIcon';
import BookmarksIcon from '../icons/BookmarksIcon';
import ListsIcon from '../icons/ListsIcon';
import MoreIcon from '../icons/MoreIcon';

function SidebarNav() {
  return (
    <div className="sidebarNav">
      <SidebarNavItem Icon={HomeIcon} text="Home" active />
      <SidebarNavItem Icon={ExploreIcon} text="Explore" />
      <SidebarNavItem Icon={NotificationIcon} text="Notifications" />
      <SidebarNavItem Icon={MessagesIcon} text="Messages" />
      <SidebarNavItem Icon={BookmarksIcon} text="Bookmarks" />
      <SidebarNavItem Icon={ListsIcon} text="Lists" />
      <SidebarNavItem Icon={ProfileIcon} text="Profile" />
      <SidebarNavItem Icon={MoreIcon} text="More" />
    </div>
  );
}

export default SidebarNav;
