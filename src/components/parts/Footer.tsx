import React from "react";
import styles from "./Footer.module.scss";
import { ExternalLink, StaticImage } from "components/functions";
import logoLettersPic from "public/general/logo-letters.webp";
import logoIconPic from "public/general/logo-icon.webp";
import packageSettings from "public/../package.json";

export const Footer = (): JSX.Element => (
  <footer className={styles.container}>
    <StaticImage className={styles.back} src={logoIconPic} alt="Logo" layout="responsive" />
    <div className={styles.logo}>
      <StaticImage className={styles.letter} src={logoLettersPic} alt="RineaR" layout="responsive" />
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
    <div className={styles.copyright}>Copyright © 2022 RineaR All rights reserved.</div>
    <div className={styles.version}>version {packageSettings.version}</div>
  </footer>
);
