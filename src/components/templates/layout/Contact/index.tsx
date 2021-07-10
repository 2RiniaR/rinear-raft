import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

const Contact = getComponentTemplate(() => <div className={styles.container}></div>);

export default Contact;
