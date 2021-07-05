import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

const Title = getComponentTemplate(() => <div className={styles.text}>ABOUT</div>);

export default Title;
