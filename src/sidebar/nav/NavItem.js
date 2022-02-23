import React from "react";
import styles from "./NavItem.module.css";

function NavItem({ active, text, Icon, badge }) {
  return (
    <div className={`${styles.container} ${active && `${styles.active}`}`}>
      <div className={styles.iconContainer}>
        <Icon className={styles.icon} active={active} />
        {badge && <div className={styles.notificationBadge}></div>}
      </div>
      <span className={styles.text}>{text}</span>
    </div>
  );
}

export default NavItem;
