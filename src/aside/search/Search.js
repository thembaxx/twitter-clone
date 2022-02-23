import React from 'react';
import styles from './Search.module.css';

import SearchIcon from '../icons/SearchIcon';

function Search() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          id="search"
          type="text"
          placeholder="Search Twitter"
          className={styles.input}
        />
        <label htmlFor="search" className={styles.label}>
          <SearchIcon className={styles.icon} />
        </label>
      </form>
    </div>
  );
}

export default Search;
