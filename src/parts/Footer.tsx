import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { ExternalLink } from "functions";
import logoPic from "public/general/logo-full.webp";

export const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.band}>
      <div className={styles.content}>
        <Link href="/">
          <Image className={styles.logo} src={logoPic} alt="RineaR" />
        </Link>
        <div className={styles.info}>
          <div className={styles.title}>
            <span className={styles.name}>RineaRの筏</span>
            <span className={styles.version}>chapter 2.0.0</span>
          </div>
          <div className={styles.copyright}>Copyright © 2022 RineaR All rights reserved.</div>
        </div>
      </div>
    </div>
    <div className={styles.links}>
      <Link className={styles.element} href="/">
        Home
      </Link>
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
