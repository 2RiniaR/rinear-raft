import React from "react";
import styles from "./index.module.scss";
import { assignClasses, getComponentTemplate } from "src/lib/component";

const Footer = getComponentTemplate(
  (): JSX.Element => (
    <>
      <div className={styles.divider} />
      <div className={styles.logo}>
        <img className={styles.image} src="/logo4.png" alt="RineaR" />
      </div>
      <div className={styles.links}>
        <a className={assignClasses(styles.element, styles.twitter)} href={"https://twitter.com/14RineaR"}>
          <img className={styles.image} src="/twitter.svg" alt="Twitter" />
        </a>
        <a className={assignClasses(styles.element, styles.mail)} href={"https://twitter.com/14RineaR"}>
          <img className={styles.image} src="/mail.svg" alt="Mail" />
        </a>
      </div>
    </>
  )
);

export default Footer;
