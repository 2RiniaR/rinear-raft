import React from "react";
import styles from "./Footer.module.scss";
import ExternalLink from "src/components/functions/ExternalLink";

const Footer = (): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <img className={styles.image} src="/img/logo.png" alt="RineaR" />
      <h1 className={styles.text}>RineaR</h1>
    </div>
    <div className={styles.links}>
      <ExternalLink className={styles.element} href={"https://twitter.com/14RineaR"}>
        <h3 className={styles.text}>Twitter</h3>
      </ExternalLink>
      <ExternalLink className={styles.element} href={"https://mail.google.com/mail/?view=cm&to=14rinear@gmail.com"}>
        <h3 className={styles.text}>Mail</h3>
      </ExternalLink>
      <ExternalLink className={styles.element} href={"https://www.youtube.com/channel/UCNqtSTjhp-dWL8dib3KECsQ"}>
        <h3 className={styles.text}>YouTube</h3>
      </ExternalLink>
    </div>
    <h3 className={styles.copyright}>Copyright © 2021 RineaR All rights reserved.</h3>
  </div>
);

export default Footer;
