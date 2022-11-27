import React from "react";
import styles from "./LoadingWindow.module.scss";
import { mc } from "functions";

type Props = {
  loading: boolean;
  progress: number;
};

export const LoadingWindow = ({ loading, progress }: Props): JSX.Element => (
  <div className={mc(styles.screen, loading ? styles.loading : styles.completed)}>
    <div className={styles.animation}>
      <div className={styles.fall} />
      <div className={mc(styles.wave, styles.l1)} />
      <div className={mc(styles.wave, styles.l2)} />
      <div className={mc(styles.wave, styles.l3)} />
    </div>
    <div className={styles.content}>
      <div className={styles.progress} style={{ width: `${Math.min(progress, 1) * 100}%` }} />
    </div>
  </div>
);
