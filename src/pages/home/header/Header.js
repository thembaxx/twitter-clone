import React from "react";
import styles from "./Header.module.css";

import TimelineHeaderIcon from "./icons/TimelineHeaderIcon";

function Header() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Home</h2>
      <div className={styles.button}>
        <TimelineHeaderIcon className={styles.icon} />
      </div>
    </div>
  );
}

export default Header;
