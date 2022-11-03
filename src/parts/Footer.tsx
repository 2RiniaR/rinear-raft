import React from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import { ExternalLink, InternalLink } from "functions";
import logoPic from "public/general/logo-full.webp";

const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.band}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image src={logoPic} alt="ロゴ" width={150} height={(150 * logoPic.height) / logoPic.width} />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <span className={styles.name}>RineaRの筏</span>
            <span className={styles.version}>version 1.1.0</span>
          </div>
          <div className={styles.copyright}>Copyright © 2022 RineaR All rights reserved.</div>
        </div>
      </div>
    </div>
    <div className={styles.links}>
      <InternalLink className={styles.element} href="/">
        Home
      </InternalLink>
      <ExternalLink className={styles.element} href="https://twitter.com/14RineaR">
        Twitter
      </ExternalLink>
      <ExternalLink className={styles.element} href="https://mail.google.com/mail/?view=cm&to=14rinear@gmail.com">
        Mail
      </ExternalLink>
      <ExternalLink className={styles.element} href="https://www.youtube.com/channel/UCNqtSTjhp-dWL8dib3KECsQ">
        YouTube
      </ExternalLink>
      <ExternalLink className={styles.element} href="https://www.youtube.com/channel/UCNqtSTjhp-dWL8dib3KECsQ">
        YouTube
      </ExternalLink>
    </div>
  </footer>
);

export default Footer;
