import React, { useState } from "react";
import styles from "./SideMenu.module.scss";
import { Image, InternalLink, mc } from "functions";
import menuIconPic from "public/general/menu-icon.png";
import homeIconPic from "public/general/logo-icon.webp";
import letterIconPic from "public/general/letter-icon.png";
import materialIconPic from "public/general/material-icon.png";
import upIconPic from "public/general/up-icon.png";

const SideMenu = () => {
  const [isOpening, setOpening] = useState(false);

  return (
    <nav className={mc(styles.layout, isOpening ? styles.open : styles.close)}>
      <button
        className={styles.element}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        name="トップへ"
        aria-label="トップへ"
      >
        <Image src={upIconPic} alt="トップへ" />
      </button>
      <InternalLink className={styles.element} href="/">
        <Image src={homeIconPic} alt="HOME" />
      </InternalLink>
      <InternalLink className={styles.element} href="/letters">
        <Image src={letterIconPic} alt="LETTERS" />
      </InternalLink>
      <InternalLink className={styles.element} href="/materials">
        <Image src={materialIconPic} alt="MATERIALS" />
      </InternalLink>
      <button
        className={styles.toggle}
        onClick={() => setOpening((value) => !value)}
        name="メニューを開く"
        aria-label="メニューを開く"
      >
        <Image src={menuIconPic} alt="メニューを開く" />
      </button>
    </nav>
  );
};

export default SideMenu;
