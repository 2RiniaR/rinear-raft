import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

const HoleEffect = getComponentTemplate(() => (
  <img className={styles.image} src="/img/top/hole_effect.png" alt="背景" />
));

export default HoleEffect;
