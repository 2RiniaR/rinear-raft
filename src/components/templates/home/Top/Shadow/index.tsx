import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

const Shadow = getComponentTemplate(() => <img className={styles.image} src="/img/shadow.png" alt="トップ画像1" />);

export default Shadow;
