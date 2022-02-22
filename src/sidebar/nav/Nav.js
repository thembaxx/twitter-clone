import React from 'react';
import styles from './Nav.module.css';
import NavItem from './NavItem';

import HomeIcon from '../icons/HomeIcon';
import ExploreIcon from '../icons/ExploreIcon';
import NotificationIcon from '../icons/NotificationIcon';
import MessagesIcon from '../icons/MessagesIcon';
import ProfileIcon from '../icons/ProfileIcon';
import BookmarksIcon from '../icons/BookmarksIcon';
import ListsIcon from '../icons/ListsIcon';
import MoreIcon from '../icons/MoreIcon';

function Nav() {
  return (
    <div className={styles.nav}>
      <NavItem Icon={HomeIcon} text="Home" active={true} />
      <NavItem Icon={ExploreIcon} text="Explore" />
      <NavItem Icon={NotificationIcon} text="Notifications" />
      <NavItem Icon={MessagesIcon} text="Messages" />
      <NavItem Icon={BookmarksIcon} text="Bookmarks" />
      <NavItem Icon={ListsIcon} text="Lists" />
      <NavItem Icon={ProfileIcon} text="Profile" />
      <NavItem Icon={MoreIcon} text="More" />
    </div>
  );
}

export default Nav;
