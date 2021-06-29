import styles from "./index.module.scss";

export default function Background(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.smog} />
    </div>
  );
}
