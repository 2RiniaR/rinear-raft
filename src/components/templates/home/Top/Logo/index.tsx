import React, { useState } from "react";
import styles from "./index.module.scss";
import { assignClasses, getComponentTemplate } from "src/lib/component";

const Logo = getComponentTemplate(() => {
  const [display, setDisplay] = useState<boolean>(false);
  const onDisplay = () => setDisplay(true);

  return (
    <div className={assignClasses(styles.fixer, display ? styles.active : styles.inactive)} ref={onDisplay}>
      <img src="/img/logo.png" className={styles.image} alt="" />
    </div>
  );
});

export default Logo;
