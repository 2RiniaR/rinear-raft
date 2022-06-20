/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import styles from "./WindEffect.module.scss";
import { assignClasses } from "lib/helper";
import windEffectPic from "public/img/wind_effect.png";
import LazyStaticImage from "components/functions/lazy/LazyStaticImage";

const WindEffect = (): JSX.Element => (
  <>
    <LazyStaticImage
      className={assignClasses(styles.effect, styles.layer1)}
      src={windEffectPic}
      alt="風のエフェクト"
      layout="responsive"
    />
    <LazyStaticImage
      className={assignClasses(styles.effect, styles.layer2)}
      src={windEffectPic}
      alt="風のエフェクト"
      layout="responsive"
    />
  </>
);

export default WindEffect;
