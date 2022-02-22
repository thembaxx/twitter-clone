import React from 'react';
import styles from './Sidebar.module.css';

import Logo from './logo/Logo';
import Nav from './nav/Nav';
import Tweet from './tweet/Tweet';
import Account from './account/Account';

function Sidebar() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <Nav />
        <div className={styles.tweet}>
          <Tweet />
        </div>
      </div>
      <div className={styles.account}>
        <Account />
      </div>
    </div>
  );
}

export default Sidebar;
