/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import styles from "./BackEffect.module.scss";

const BackEffect = (): JSX.Element => {
  return (
    <div className={styles.layout}>
      <div className={styles.dark} />
    </div>
  );
};

export default BackEffect;
