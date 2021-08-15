import styles from "./index.module.scss";
import { assignClasses, getComponentTemplate } from "src/lib/component";

const Background = getComponentTemplate(() => (
  <img className={assignClasses(styles.image)} src="/img/top/background.jpg" alt="背景" />
));

export default Background;
