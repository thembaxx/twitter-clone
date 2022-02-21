import React from 'react';
import './Sidebar.css';
import SidebarNav from './sidebarNav/SidebarNav';
import SidebarProfile from './sidebarProfile/SidebarProfile';

import TwitterIcon from './icons/TwitterIcon';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <a href="/" className="sidebar__logo">
          <div className="sidebar__logoInner">
            <TwitterIcon />
          </div>
        </a>
        <SidebarNav />
        <button className="sidebar__tweet">Tweet</button>
      </div>
      <div className="sidebar__profile">
        <SidebarProfile />
      </div>
    </div>
  );
}

export default Sidebar;
