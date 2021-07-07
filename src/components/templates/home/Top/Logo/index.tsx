import React from "react";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

const Logo = getComponentTemplate(() => (
  <div className={styles.fixer}>
    <img src="/logo4.png" className={styles.image} alt="" />
  </div>
));

export default Logo;
