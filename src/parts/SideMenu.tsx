import { useState } from "react";
import Image from "next/image";
import { InternalLink } from "functions";
import backIconPic from "public/general/back-icon.png";
import homeIconPic from "public/general/logo-icon.webp";
import letterIconPic from "public/general/letter-icon.png";
import materialIconPic from "public/general/material-icon.png";
import menuIconPic from "public/general/menu-icon.png";

const SideMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} name="ホームへ" aria-label="ホームへ">
        <Image className={styles.logo} src={menuIconPic} alt="ホームへ" layout="responsive" />
      </button>

      <nav>
        <button className={styles.backButton} onClick={() => setOpen(false)} name="戻る" aria-label="戻る">
          <Image src={backIconPic} alt="戻る" layout="responsive" />
        </button>
        <InternalLink href="/">
          <Image src={homeIconPic} alt="HOME" layout="responsive" />
          HOME
        </InternalLink>
        <InternalLink href="/letters">
          <Image src={letterIconPic} alt="LETTERS" layout="responsive" />
          LETTERS
        </InternalLink>
        <InternalLink href="/materials">
          <Image src={materialIconPic} alt="MATERIALS" layout="responsive" />
          MATERIALS
        </InternalLink>
      </nav>
    </>
  );
};

export default SideMenu;
