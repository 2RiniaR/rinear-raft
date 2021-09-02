import React from "react";
import styles from "./Background.module.scss";
import ConstantSizeParallax from "components/functions/ConstantSizeParallax";

const Background = (): JSX.Element => (
  <div className={styles.container}>
    <ConstantSizeParallax maxSpeed={0.8}>
      <div className={styles.inner}>
        <img className={styles.background} src="/img/background.jpg" alt="背景" />
        <img className={styles.holeEffect} src="/img/hole_effect.png" alt="背景" />
        <div className={styles.colorMask} />
      </div>
    </ConstantSizeParallax>
  </div>
);

export default Background;
