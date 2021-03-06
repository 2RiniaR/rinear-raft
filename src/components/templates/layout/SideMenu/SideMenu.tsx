import styles from "./SideMenu.module.scss";
import { SideMenuItem, SideMenuItemProps } from "./SideMenuItem";
import { SideMenuOpener } from "./SideMenuOpener";
import { StaticImage } from "components/functions";
import backIconPic from "public/general/back-icon.png";
import homeIconPic from "public/general/logo-icon.webp";
import letterIconPic from "public/general/letter-icon.png";
import materialIconPic from "public/general/material-icon.png";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const items: Omit<SideMenuItemProps, "onClick">[] = [
  { href: "/", markSrc: homeIconPic, name: "HOME" },
  { href: "/letters", markSrc: letterIconPic, name: "LETTERS" },
  { href: "/materials", markSrc: materialIconPic, name: "MATERIALS" }
];

export const SideMenu = ({ open, setOpen }: Props): JSX.Element => (
  <div className={styles.screen}>
    <SideMenuOpener open={open} setOpen={setOpen}>
      <button className={styles.backButton} onClick={() => setOpen(false)} name="戻る" aria-label="戻る">
        <StaticImage src={backIconPic} alt="戻る" layout="responsive" />
      </button>
      <div className={styles.index}>
        {items.map((item) => (
          <SideMenuItem {...item} key={item.name} onClick={() => setOpen(false)} />
        ))}
      </div>
    </SideMenuOpener>
  </div>
);
