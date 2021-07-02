import styles from "./index.module.scss";
import Logo from "src/components/templates/home/Top/Logo";
import { getComponentTemplate } from "src/lib/component";

const Title = getComponentTemplate(() => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <Logo />
    </div>
  </div>
));

export default Title;
