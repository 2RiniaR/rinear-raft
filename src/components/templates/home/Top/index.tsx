import styles from "./index.module.scss";
import Background from "./Background";
import Logo from "src/components/parts/Logo";

export default function Top(): JSX.Element {
  return (
    <div className={styles.container}>
      <Background className={styles.background} />
      <Logo className={styles.logo} />
    </div>
  );
}
