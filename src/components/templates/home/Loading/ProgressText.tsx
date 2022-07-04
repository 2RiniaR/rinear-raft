import React from "react";
import styles from "./ProgressText.module.scss";

type Props = {
  percent: number;
};

export const ProgressText = ({ percent }: Props): JSX.Element => (
  <div className={styles.layout}>
    <span className={styles.text}>Now Loading...</span>
    <div className={styles.progress} style={{ width: `${percent * 100}%` }} />
  </div>
);
