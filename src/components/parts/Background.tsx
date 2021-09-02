import React from "react";
import styles from "./Background.module.scss";
import FullImage from "components/functions/image/FullImage";
import ConstantSizeParallax from "components/functions/parallax/ConstantSizeParallax";
import landscapePic from "public/img/background.jpg";
import holeEffectPic from "public/img/hole_effect.png";

const Background = (): JSX.Element => (
  <div className={styles.container}>
    <ConstantSizeParallax maxSpeed={0.8}>
      <div className={styles.inner}>
        <FullImage className={styles.background} src={landscapePic} alt="背景" />
        <FullImage className={styles.holeEffect} src={holeEffectPic} alt="背景" />
        <div className={styles.colorMask} />
      </div>
    </ConstantSizeParallax>
  </div>
);

export default Background;
