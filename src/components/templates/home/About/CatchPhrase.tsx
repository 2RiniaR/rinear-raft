/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import styles from "./CatchPhrase.module.scss";
import { assignClasses } from "lib/helper";

const CatchPhrase = (): JSX.Element => {
  const [display, setDisplay] = useState(false);

  return (
    <div className={styles.title}>
      <VisibilitySensor onChange={(isVisible: boolean) => setDisplay(display || isVisible)}>
        <span className={assignClasses(styles.text, display ? styles.active : styles.inactive)}>
          <span className={styles.first}>
            この<span className={styles.strong}>筏</span>は私を、
          </span>
          <span className={styles.last}>どこへ連れてゆくんだろう。</span>
        </span>
      </VisibilitySensor>
    </div>
  );
};

export default CatchPhrase;
