import React from "react";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

const CatchPhrase = getComponentTemplate(() => (
  <div className={styles.container}>
    <div className={styles.inner}>
    </div>
  </div>
));

export default CatchPhrase;
