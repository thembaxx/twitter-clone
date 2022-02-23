import React from 'react';
import styles from './Trend.module.css';
import MoreIcon from '../icons/MoreIcon';

function Trend({ source, title, tweets }) {
  return (
    <div className={styles.container}>
      <span className={styles.subtitle}>{source}</span>
      <span className={styles.title}>{title}</span>
      <span className={styles.subtitle}>{`${tweets} Tweets`}</span>
      <div className={styles.button}>
        <MoreIcon className={styles.icon} />
      </div>
    </div>
  );
}

export default Trend;
