import React from "react";
import FullImage from "../functions/image/FullImage";
import styles from "./Footer.module.scss";
import ExternalLink from "components/functions/link/ExternalLink";
import logoPic from "public/img/logo.png";

const Footer = (): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <FullImage className={styles.image} src={logoPic} alt="RineaR" />
      <h1 className={styles.text}>RineaR</h1>
    </div>
    <div className={styles.links}>
      <ExternalLink className={styles.element} href={"https://twitter.com/14RineaR"}>
        <h2 className={styles.text}>Twitter</h2>
      </ExternalLink>
      <ExternalLink className={styles.element} href={"https://mail.google.com/mail/?view=cm&to=14rinear@gmail.com"}>
        <h2 className={styles.text}>Mail</h2>
      </ExternalLink>
      <ExternalLink className={styles.element} href={"https://www.youtube.com/channel/UCNqtSTjhp-dWL8dib3KECsQ"}>
        <h2 className={styles.text}>YouTube</h2>
      </ExternalLink>
    </div>
    <h3 className={styles.copyright}>Copyright © 2021 RineaR All rights reserved.</h3>
  </div>
);

export default Footer;
