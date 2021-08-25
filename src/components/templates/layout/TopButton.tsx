import Link from "next/link";
import styles from "./TopButton.module.scss";
import { getComponentTemplate } from "src/lib/component";

const TopButton = getComponentTemplate(() => (
  <Link href="/">
    <a className={styles.link}>
      <img className={styles.logo} src="/img/logo.png" alt="ホームへ" />
    </a>
  </Link>
));

export default TopButton;
