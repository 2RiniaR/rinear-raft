import styles from "./SideMenu.module.scss";
import SideMenuItem, { SideMenuItemProps } from "./SideMenuItem";
import SideMenuOpener from "./SideMenuOpener";
import StaticImage from "components/functions/image/StaticImage";
import leftArrowPic from "public/img/LeftArrow.png";
import logoPic from "public/img/logo.png";
import talksPic from "public/img/talks.png";
import projectsPic from "public/img/projects.png";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const items: SideMenuItemProps[] = [
  { href: "/", markSrc: logoPic, name: "HOME" },
  { href: "/talks", markSrc: talksPic, name: "TALKS" },
  { href: "/projects", markSrc: projectsPic, name: "PROJECTS" }
];

const SideMenu = ({ open, setOpen }: Props): JSX.Element => (
  <div className={styles.screen}>
    <SideMenuOpener open={open} setOpen={setOpen}>
      <button className={styles.backButton} onClick={() => setOpen(false)} name="戻る" aria-label="戻る">
        <StaticImage src={leftArrowPic} alt="戻る" />
      </button>
      <div className={styles.index}>
        {items.map((item) => (
          <SideMenuItem {...item} key={item.name} />
        ))}
      </div>
    </SideMenuOpener>
  </div>
);

export default SideMenu;
