import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

const Body = getComponentTemplate(() => <div className={styles.image} />);

export default Body;
