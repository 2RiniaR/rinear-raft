import React from "react";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

const Top = getComponentTemplate(() => (
  <div className={styles.container}>
    <img className={styles.logo} src="/img/top/projects.png" alt="" />
    <h1 className={styles.title}>PROJECTS</h1>
  </div>
));

export default Top;
