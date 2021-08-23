import React from "react";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

const Top = getComponentTemplate(() => (
  <div className={styles.container}>
    <img className={styles.logo} src="/img/top/talks.png" alt="" />
    <h1 className={styles.title}>TALKS</h1>
  </div>
));

export default Top;
