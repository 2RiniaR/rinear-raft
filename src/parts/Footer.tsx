import React from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import { ExternalLink } from "functions";
import logoLettersPic from "public/general/logo-letters.webp";
import logoIconPic from "public/general/logo-icon.webp";

const Footer = () => (
  <footer className={styles.container}>
    <Image className={styles.back} src={logoIconPic} alt="ロゴ1" layout="responsive" />
    <Image className={styles.letter} src={logoLettersPic} alt="ロゴ2" layout="responsive" />
    <div className={styles.links}>
      <ExternalLink className={styles.element} href="https://twitter.com/14RineaR">
        Twitter
      </ExternalLink>
      <ExternalLink className={styles.element} href="https://mail.google.com/mail/?view=cm&to=14rinear@gmail.com">
        Mail
      </ExternalLink>
      <ExternalLink className={styles.element} href="https://www.youtube.com/channel/UCNqtSTjhp-dWL8dib3KECsQ">
        YouTube
      </ExternalLink>
    </div>
    <div className={styles.copyright}>Copyright © 2022 RineaR All rights reserved.</div>
    <div className={styles.version}>version 1.1.0</div>
  </footer>
);

export default Footer;
