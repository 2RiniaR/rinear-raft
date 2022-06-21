/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./CatchPhrase.module.scss";
import { assignClasses } from "lib/helper";

const CatchPhrase = (): JSX.Element => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className={styles.title}>
      <span ref={ref} className={assignClasses(styles.text, inView ? styles.active : styles.inactive)}>
        <span className={styles.first}>
          この<span className={styles.strong}>筏</span>は私を、
        </span>
        <span className={styles.last}>どこへ連れてゆくんだろう。</span>
      </span>
    </div>
  );
};

export default CatchPhrase;
