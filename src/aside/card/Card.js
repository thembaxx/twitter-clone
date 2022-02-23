import React from 'react';
import styles from './Card.module.css';

import SettingsIcon from '../icons/SettingsIcon';

function Card({ title, showSettings, items }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>{title}</span>
        {showSettings && (
          <div className={styles.iconContainer}>
            <SettingsIcon className={styles.icon} />
          </div>
        )}
      </div>

      <div>
        {items.map((item, index) => (
          <div key={index} className={styles.listItem}>
            {item}
          </div>
        ))}
      </div>

      <div className={styles.button}>Show more</div>
    </div>
  );
}

export default Card;
