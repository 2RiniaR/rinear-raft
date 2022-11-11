import React, { useState } from "react";
import styles from "./SideMenu.module.scss";
import { Image, InternalLink, mc } from "functions";
import menuIconPic from "public/general/menu-icon.png";
import homeIconPic from "public/general/logo-icon.webp";
import letterIconPic from "public/general/letter-icon.png";
import materialIconPic from "public/general/material-icon.png";
import upIconPic from "public/general/up-icon.png";

export const SideMenu = () => {
  const [isOpening, setOpening] = useState(false);

  return (
    <nav className={mc(styles.layout, isOpening ? styles.open : styles.close)}>
      <button
        className={styles.element}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        name="トップへ"
        aria-label="トップへ"
      >
        <Image className={styles.icon} src={upIconPic} width={48} alt="トップへ" />
        <span className={styles.name}>一番上へ</span>
      </button>
      <InternalLink className={styles.element} href="/">
        <Image className={styles.icon} src={homeIconPic} width={48} alt="HOME" />
        <span className={styles.name}>HOME</span>
      </InternalLink>
      <InternalLink className={styles.element} href="/letters">
        <Image className={styles.icon} src={letterIconPic} width={48} alt="LETTERS" />
        <span className={styles.name}>LETTERS</span>
      </InternalLink>
      <InternalLink className={styles.element} href="/materials">
        <Image className={styles.icon} src={materialIconPic} width={48} alt="MATERIALS" />
        <span className={styles.name}>MATERIALS</span>
      </InternalLink>
      <button
        className={styles.toggle}
        onClick={() => setOpening((value) => !value)}
        name="メニューを開く"
        aria-label="メニューを開く"
      >
        <Image className={styles.icon} src={menuIconPic} width={48} alt="メニューを開く" />
      </button>
    </nav>
  );
};
