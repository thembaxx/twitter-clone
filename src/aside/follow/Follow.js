import React from 'react';
import styles from './Follow.module.css';

function UserFollow({ imgUrl, name, username }) {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={imgUrl} alt={username} />
        </div>
        <div className={styles.info}>
          <a href="/" className={styles.name}>
            {name}
          </a>
          <div className={styles.username}>{username}</div>
        </div>
      </div>
      <div className={styles.button}>Follow</div>
    </div>
  );
}

export default UserFollow;
