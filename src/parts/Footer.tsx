import React from "react";
import styles from "./Footer.module.scss";
import { ExternalLink, Image, InternalLink } from "functions";
import logoPic from "public/general/logo-full.webp";

export const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.band}>
      <div className={styles.content}>
        <InternalLink href="/">
          <Image className={styles.logo} src={logoPic} alt="ロゴ" width={150} />
        </InternalLink>
        <div className={styles.info}>
          <div className={styles.title}>
            <span className={styles.name}>RineaRの筏</span>
            <span className={styles.version}>version 2.0.0</span>
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
      <div className={styles.element}></div>
    </div>
  </footer>
);
