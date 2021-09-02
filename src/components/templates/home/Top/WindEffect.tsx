import styles from "./WindEffect.module.scss";
import { assignClasses } from "lib/helper";
import windEffectPic from "public/img/wind_effect.png";
import FullImage from "components/functions/image/FullImage";

const WindEffect = (): JSX.Element => (
  <div className={styles.container}>
    <FullImage className={assignClasses(styles.effect, styles.layer1)} src={windEffectPic} alt="風のエフェクト" />
    <FullImage className={assignClasses(styles.effect, styles.layer2)} src={windEffectPic} alt="風のエフェクト" />
  </div>
);

export default WindEffect;
