import styles from "./WindEffect.module.scss";
import { assignClasses } from "lib/helper";

const WindEffect = (): JSX.Element => (
  <div className={styles.container}>
    <img className={assignClasses(styles.effect, styles.layer1)} src="/img/wind_effect.png" alt="風のエフェクト" />
    <img className={assignClasses(styles.effect, styles.layer2)} src="/img/wind_effect.png" alt="風のエフェクト" />
  </div>
);

export default WindEffect;
