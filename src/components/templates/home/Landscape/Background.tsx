import styles from "./Background.module.scss";
import { assignClasses } from "lib/helper";
import landscapePic from "public/img/background.webp";
import { PreloadStaticImage } from "components/functions/loading";
import holeEffectPic from "public/img/hole_effect.webp";
import windEffectPic from "public/img/wind_effect.png";

const Background = (): JSX.Element => (
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

export default Background;
