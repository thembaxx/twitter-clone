import React from "react";
import styles from "./Home.module.css";

import Aside from "../../aside/Aside";
import Header from "./header/Header";
import Composer from "../../composer/Composer";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <Composer />
      </div>
      <Aside />
    </div>
  );
}

export default Home;
