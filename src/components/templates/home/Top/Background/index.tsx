import styles from "./index.module.scss";
import { assignClasses } from "src/lib/helper";

const Background = (): JSX.Element => (
  <img className={assignClasses(styles.image)} src="/img/background.jpg" alt="背景" />
);

export default Background;
