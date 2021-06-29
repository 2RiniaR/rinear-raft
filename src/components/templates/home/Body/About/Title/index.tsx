import styles from "./index.module.scss";
import Logo from "src/components/parts/Logo";

export default function Title(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
    </div>
  );
}
