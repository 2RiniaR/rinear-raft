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
    <div className={styles.layout}>
      <button
        className={styles.pageTopScroller}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        name="PAGE TOP"
        aria-label="PAGE TOP"
      >
        <Image className={styles.icon} src={upIconPic} width={32} alt="PAGE TOP" />
      </button>
      <nav className={mc(styles.menuOpener, isOpening ? styles.open : styles.close)}>
        <InternalLink className={styles.element} href="/">
          <Image className={styles.icon} src={homeIconPic} width={32} alt="HOME" />
          <div className={styles.label}>
            <div className={styles.name}>HOME</div>
            <div className={styles.description}>RineaRのコンセプト</div>
          </div>
        </InternalLink>
        <InternalLink className={styles.element} href="/letters">
          <Image className={styles.icon} src={letterIconPic} width={32} alt="LETTERS" />
          <div className={styles.label}>
            <div className={styles.name}>LETTERS</div>
            <div className={styles.description}>解釈と発想のノート</div>
          </div>
        </InternalLink>
        <InternalLink className={styles.element} href="/materials">
          <Image className={styles.icon} src={materialIconPic} width={32} alt="MATERIALS" />
          <div className={styles.label}>
            <div className={styles.name}>MATERIALS</div>
            <div className={styles.description}>作品と記録のギャラリー</div>
          </div>
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
    </div>
  );
};
