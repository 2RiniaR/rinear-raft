import styles from "./index.module.scss";

export default function Logo(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.dummyImage} />
      </div>
    </div>
  );
}
