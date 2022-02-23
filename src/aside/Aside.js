import React from 'react';
import styles from './Aside.module.css';

import Search from './search/Search';
import Trending from './trending/Trending';
import FollowList from './follow/FollowList';
import Footer from './footer/Footer';

function Aside() {
  return (
    <div className={styles.container}>
      <Search />
      <Trending />
      <FollowList />
      <Footer />
    </div>
  );
}

export default Aside;
