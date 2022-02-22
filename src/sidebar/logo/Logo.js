import React from 'react';
import styles from './Logo.module.css';

import TwitterIcon from '../icons/TwitterIcon';

function Logo() {
  return (
    <a href="/">
      <div className={styles.container}>
        <TwitterIcon className={styles.icon} />
      </div>
    </a>
  );
}

export default Logo;
