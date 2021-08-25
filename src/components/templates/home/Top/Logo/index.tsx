import React from "react";
import styles from "./index.module.scss";

const Logo = (): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.background}>
      <img className={styles.image} src="/img/logo_back.svg" alt="" />
    </div>
    <div className={styles.main}>
      <img className={styles.logo} src="/img/logo.png" alt="" />
      <h1 className={styles.name}>RineaR</h1>
    </div>
  </div>
);

export default Logo;
