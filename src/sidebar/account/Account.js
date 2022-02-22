import React from 'react';
import styles from './Account.module.css';

import MoreHorIcon from '../icons/MoreHorIcon';

function Account() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="https://randomuser.me/api/portraits/thumb/women/16.jpg"
          alt=""
        />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>Themba</div>
        <div className={styles.username}>@themba_xx</div>
      </div>
      <MoreHorIcon className={styles.icon} />
    </div>
  );
}

export default Account;
