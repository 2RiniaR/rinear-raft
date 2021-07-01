import styles from "./index.module.scss";
import Background from "./Background";
import Logo from "./Logo";
import { getComponentTemplate } from "src/lib/component";

const Top = getComponentTemplate(() => (
  <div className={styles.container}>
    <Background className={styles.background} />
    <Logo className={styles.logo} />
  </div>
));

export default Top;
