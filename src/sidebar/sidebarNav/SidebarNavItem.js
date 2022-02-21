import React from 'react';
import './SidebarNavItem.css';

function SidebarNavItem({ active, text, Icon }) {
  return (
    <a
      className={`sidebarNavItem ${active && 'sidebarNavItem--active'}`}
      href="/"
    >
      <div className="sidebarNavItem__inner">
        <div className="sidebarNavItem__iconWrapper">
          <Icon />
        </div>
        <h2 className="sidebarNavItem__text">{text}</h2>
      </div>
    </a>
  );
}

export default SidebarNavItem;
