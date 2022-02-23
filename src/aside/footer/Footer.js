import React from 'react';
import styles from './Footer.module.css';

import MoreIcon from '../icons/MoreIcon';

function Footer() {
  return (
    <footer className={styles.container}>
      <a href="/" className={styles.link}>
        Terms of Service
      </a>
      <a href="/" className={styles.link}>
        Privacy Policy
      </a>
      <a href="/" className={styles.link}>
        Cookie Policy
      </a>
      <a href="/" className={styles.link}>
        Accessibility
      </a>
      <a href="/" className={styles.link}>
        Ads info
      </a>
      <a href="/" className={styles.link}>
        More <MoreIcon className={styles.icon}/>
      </a>
      <div className={`${styles.link} ${styles.copyright}`}>
        &copy; 2022 Twitter, Inc.
      </div>
    </footer>
  );
}

export default Footer;
