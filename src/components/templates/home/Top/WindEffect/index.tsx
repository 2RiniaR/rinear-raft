import styles from "./index.module.scss";
import { assignClasses, getComponentTemplate } from "src/lib/component";

const WindEffect = getComponentTemplate(() => (
  <div className={styles.container}>
    <img
      className={assignClasses(styles.effect, styles.layer1)}
      src={"/img/top/wind_effect.png"}
      alt={"風のエフェクト"}
    />
    <img
      className={assignClasses(styles.effect, styles.layer2)}
      src={"/img/top/wind_effect.png"}
      alt={"風のエフェクト"}
    />
  </div>
));

export default WindEffect;
