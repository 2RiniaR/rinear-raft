import styles from "./index.module.scss";
import Background from "./Background";
import { getComponentTemplate } from "src/lib/component";

const Top = getComponentTemplate(() => (
  <div className={styles.container}>
    <Background className={styles.background} />
  </div>
));

export default Top;
