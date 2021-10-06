import React from "react";
import styles from "./Footer.module.scss";
import StaticImage from "components/functions/image/StaticImage";
import ExternalLink from "components/functions/link/ExternalLink";
import logoPic from "public/img/logo.png";
import packageSettings from "public/../package.json";

const Footer = (): JSX.Element => (
  <footer className={styles.container}>
    <div className={styles.logo}>
      <StaticImage className={styles.image} src={logoPic} alt="RineaR" />
      <h1 className={styles.text}>RineaR</h1>
    </div>
    <div className={styles.links}>
      <ExternalLink className={styles.element} href={"https://twitter.com/14RineaR"}>
        Twitter
      </ExternalLink>
      <ExternalLink className={styles.element} href={"https://mail.google.com/mail/?view=cm&to=14rinear@gmail.com"}>
        Mail
      </ExternalLink>
      <ExternalLink className={styles.element} href={"https://www.youtube.com/channel/UCNqtSTjhp-dWL8dib3KECsQ"}>
        YouTube
      </ExternalLink>
    </div>
    <div className={styles.copyright}>Copyright © 2021 RineaR All rights reserved.</div>
    <div className={styles.version}>version {packageSettings.version}</div>
  </footer>
);

export default Footer;
