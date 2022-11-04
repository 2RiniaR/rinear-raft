import Image from "next/image";
import React from "react";
import styles from "./SideMenu.module.scss";
import { InternalLink } from "functions";
import homeIconPic from "public/general/logo-icon.webp";
import letterIconPic from "public/general/letter-icon.png";
import materialIconPic from "public/general/material-icon.png";
import upIconPic from "public/general/up-icon.png";

const SideMenu = () => (
  <nav className={styles.layout}>
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} name="トップへ" aria-label="トップへ">
      <Image src={upIconPic} alt="トップへ" />
    </button>
    <InternalLink href="/">
      <Image src={homeIconPic} alt="HOME" />
    </InternalLink>
    <InternalLink href="/letters">
      <Image src={letterIconPic} alt="LETTERS" />
    </InternalLink>
    <InternalLink href="/materials">
      <Image src={materialIconPic} alt="MATERIALS" />
    </InternalLink>
  </nav>
);

export default SideMenu;
