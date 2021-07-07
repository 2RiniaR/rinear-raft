import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import styles from "./index.module.scss";
import { assignClasses, getComponentTemplate } from "src/lib/component";

const CatchPhrase = getComponentTemplate(() => {
  const [display, setDisplay] = useState(false);
  const onDisplay = (isVisible: boolean) => setDisplay(isVisible || display);

  return (
    <VisibilitySensor onChange={onDisplay}>
      <div className={styles.container}>
        <div className={assignClasses(styles.phrase, styles.first)}>
          <h1 className={assignClasses(styles.text, display ? styles.active : styles.inactive)}>
            この<span className={styles.strong}>筏</span>は私を、
          </h1>
        </div>
        <div className={assignClasses(styles.phrase, styles.second)}>
          <h1 className={assignClasses(styles.text, display ? styles.active : styles.inactive)}>
            どこへ連れて行くんだろう。
          </h1>
        </div>
      </div>
    </VisibilitySensor>
  );
});

export default CatchPhrase;
