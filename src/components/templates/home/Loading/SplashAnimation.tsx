import React from "react";
import styles from "./SplashAnimation.module.scss";

export const SplashAnimation = (): JSX.Element => (
  <div className={styles.aspectKeeper}>
    <div className={styles.animation}>
      <div className={styles.fall} />
      <div className={styles.wave1} />
      <div className={styles.wave2} />
      <div className={styles.wave3} />
    </div>
  </div>
);
