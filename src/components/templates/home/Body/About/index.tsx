import styles from "./index.module.scss";
import Background from "./Background";
import Title from "./Title";
import Body from "./Body";

export default function About(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Background />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <Title />
        </div>
        <div className={styles.body}>
          <Body />
        </div>
      </div>
    </div>
  );
}
