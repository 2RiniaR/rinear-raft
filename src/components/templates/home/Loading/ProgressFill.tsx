import React from "react";
import styles from "./ProgressFill.module.scss";

type Props = {
  percent: number;
};

const ProgressFill = ({ percent }: Props): JSX.Element => (
  <div className={styles.fill} style={{ height: `${percent * 100}%` }} />
);

export default ProgressFill;
