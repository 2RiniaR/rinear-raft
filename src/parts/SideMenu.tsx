import React, { useState } from "react";
import Image from "next/image";
import styles from "./SideMenu.module.scss";
import { InternalLink, mc } from "functions";
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
        name="PAGE TOP"
        aria-label="PAGE TOP"
      >
        <Image className={styles.icon} src={upIconPic} width={32} alt="PAGE TOP" />
        <span className={styles.name}>PAGE TOP</span>
      </button>
      <InternalLink className={styles.element} href="/">
        <Image className={styles.icon} src={homeIconPic} width={32} alt="HOME" />
        <span className={styles.name}>HOME</span>
      </InternalLink>
      <InternalLink className={styles.element} href="/letters">
        <Image className={styles.icon} src={letterIconPic} width={32} alt="LETTERS" />
        <span className={styles.name}>LETTERS</span>
      </InternalLink>
      <InternalLink className={styles.element} href="/materials">
        <Image className={styles.icon} src={materialIconPic} width={32} alt="MATERIALS" />
        <span className={styles.name}>MATERIALS</span>
      </InternalLink>
      <button
        className={styles.toggle}
        onClick={() => setOpening((value) => !value)}
        name="メニューを開く"
        aria-label="メニューを開く"
      >
        <Image className={styles.icon} src={menuIconPic} width={32} alt="メニューを開く" />
      </button>
    </nav>
  );
};
