import React from 'react';
import styles from './NavItem.module.css';

function NavItem({ active, text, Icon, badge }) {
  return (
    <a className={`${styles.navItem} ${active && `${styles.active}`}`} href="/">
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Icon className={styles.icon} active={active} />
          {badge && <div className={styles.notificationBadge}></div>}
        </div>
        <span className={styles.text}>{text}</span>
      </div>
    </a>
  );
}

export default NavItem;
