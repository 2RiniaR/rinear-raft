import React from "react";
import styles from "styles/SplashAnimation.module.scss";

const Splash = () => (
  <div className={styles.aspectKeeper}>
    <div className={styles.animation}>
      <div className={styles.fall} />
      <div className={styles.wave1} />
      <div className={styles.wave2} />
      <div className={styles.wave3} />
    </div>
  </div>
);

export default Splash;
