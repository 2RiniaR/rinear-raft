import styles from "./Landscape.module.scss";
import { assignClasses } from "lib/helper";

const Landscape = (): JSX.Element => (
  <img className={assignClasses(styles.image)} src="/img/background.jpg" alt="背景" />
);

export default Landscape;
