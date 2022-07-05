import styles from "./Background.module.scss";
import { assignClasses } from "utils/dom";
import { PreloadStaticImage } from "components/functions/loading";
import landscapePic from "public/home/background.webp";
import holeEffectPic from "public/home/hole-effect.webp";
import windEffectPic from "public/home/wind.png";

export const Background = (): JSX.Element => (
  <div className={styles.container}>
    <PreloadStaticImage
      className={assignClasses(styles.picture)}
      src={landscapePic}
      alt="背景"
      layout="responsive"
      quality={100}
    />
    <PreloadStaticImage
      className={styles.holeEffect}
      src={holeEffectPic}
      alt="背景"
      layout="responsive"
      quality={100}
    />
    <PreloadStaticImage
      className={assignClasses(styles.windEffect, styles.layer1)}
      src={windEffectPic}
      alt="風のエフェクト"
      layout="responsive"
    />
    <PreloadStaticImage
      className={assignClasses(styles.windEffect, styles.layer2)}
      src={windEffectPic}
      alt="風のエフェクト"
      layout="responsive"
    />
    <div className={styles.smogEffect} />
  </div>
);
