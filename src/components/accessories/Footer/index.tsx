import React from "react";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

const Footer = getComponentTemplate(
  (): JSX.Element => (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.image} src="/img/logo.png" alt="RineaR" />
        <h1 className={styles.text}>RineaR</h1>
      </div>
      <div className={styles.links}>
        <a className={styles.element} href={"https://twitter.com/14RineaR"}>
          <h3 className={styles.text}>Twitter</h3>
        </a>
        <a className={styles.element} href={"https://twitter.com/14RineaR"}>
          <h3 className={styles.text}>Mail</h3>
        </a>
        <a className={styles.element} href={"https://twitter.com/14RineaR"}>
          <h3 className={styles.text}>YouTube</h3>
        </a>
      </div>
      <h3 className={styles.copyright}>Copyright © 2021 RineaR All rights reserved.</h3>
    </div>
  )
);

export default Footer;
