import Link from "next/link";
import styles from "./TopButton.module.scss";

const TopButton = (): JSX.Element => (
  <Link href="/">
    <a className={styles.link}>
      <img className={styles.logo} src="/img/logo.png" alt="ホームへ" />
    </a>
  </Link>
);

export default TopButton;
