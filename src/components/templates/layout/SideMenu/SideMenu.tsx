/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import styles from "./SideMenu.module.scss";
import SideMenuItem, { SideMenuItemProps } from "./SideMenuItem";
import SideMenuOpener from "./SideMenuOpener";
import StaticImage from "components/functions/image/StaticImage";
import leftArrowPic from "public/img/LeftArrow.png";
import logoPic from "public/img/logo.png";
import lettersPic from "public/img/letters.png";
import scenariosPic from "public/img/scenarios.png";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const items: Omit<SideMenuItemProps, "onClick">[] = [
  { href: "/", markSrc: logoPic, name: "HOME" },
  { href: "/letters", markSrc: lettersPic, name: "LETTERS" },
  { href: "/scenarios", markSrc: scenariosPic, name: "SCENARIOS" }
];

const SideMenu = ({ open, setOpen }: Props): JSX.Element => (
  <div className={styles.screen}>
    <SideMenuOpener open={open} setOpen={setOpen}>
      <button className={styles.backButton} onClick={() => setOpen(false)} name="戻る" aria-label="戻る">
        <StaticImage src={leftArrowPic} alt="戻る" />
      </button>
      <div className={styles.index}>
        {items.map((item) => (
          <SideMenuItem {...item} key={item.name} onClick={() => setOpen(false)} />
        ))}
      </div>
    </SideMenuOpener>
  </div>
);

export default SideMenu;
