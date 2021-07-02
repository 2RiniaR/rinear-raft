import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

const Background = getComponentTemplate(() => (
  <div className={styles.container}>
    <div className={styles.smog} />
  </div>
));

export default Background;
