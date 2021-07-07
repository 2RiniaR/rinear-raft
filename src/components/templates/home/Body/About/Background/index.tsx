import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

const Title = getComponentTemplate(() => (
  <div className={styles.container}>
    <img className={styles.image} src="/logo4.png" alt="" />
  </div>
));

export default Title;
