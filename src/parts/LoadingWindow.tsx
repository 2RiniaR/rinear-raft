import React from "react";
import styles from "../styles/LoadingEffect.module.scss";
import Splash from "./Splash";
import { mc } from "functions";

type Props = {
  loading: boolean;
  progress: number;
};

const LoadingWindow = ({ loading, progress }: Props): JSX.Element => (
  <div className={mc(styles.screen, loading ? styles.loading : styles.completed)}>
    <Splash />
    <div className={styles.layout}>
      <span className={styles.text}>Now Loading...</span>
      <div className={styles.progress} style={{ width: `${progress * 100}%` }} />
    </div>
  </div>
);

export default LoadingWindow;
