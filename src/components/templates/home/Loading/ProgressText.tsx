/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import styles from "./ProgressText.module.scss";

type Props = {
  percent: number;
};

const ProgressText = ({ percent }: Props): JSX.Element => (
  <div className={styles.layout}>
    <span className={styles.text}>Now Loading...</span>
    <div className={styles.progress} style={{ width: `${percent * 100}%` }} />
  </div>
);

export default ProgressText;
