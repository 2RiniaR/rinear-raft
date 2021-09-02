import Link from "next/link";
import { TransitionEventHandler, useEffect, useState } from "react";
import styles from "./SideMenu.module.scss";
import StaticImage from "components/functions/image/StaticImage";
import { assignClasses } from "lib/helper";
import leftArrowPic from "public/img/LeftArrow.png";
import logoPic from "public/img/logo.png";
import talksPic from "public/img/talks.png";
import projectsPic from "public/img/projects.png";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const SideMenu = ({ open, setOpen }: Props): JSX.Element => {
  const [display, setDisplay] = useState(false);

  const onCloseTransitionEnd: TransitionEventHandler<HTMLDivElement> = () => {
    if (open) return;
    setDisplay(false);
  };

  useEffect(() => {
    if (!open) return;
    setDisplay(true);
  }, [open]);

  return (
    <div
      className={assignClasses(styles.container, open ? styles.opened : "")}
      style={{ left: display ? "0" : "-100vw" }}
      onTransitionEnd={onCloseTransitionEnd}
    >
      <div className={styles.menu}>
        <button className={styles.backButton} onClick={() => setOpen(false)} name="戻る" aria-label="戻る">
          <StaticImage className={styles.logo} src={leftArrowPic} alt="戻る" />
        </button>
        <div className={styles.index}>
          <Link href="/">
            <a className={styles.element}>
              <StaticImage className={styles.logo} src={logoPic} alt="Home" />
              <h2 className={styles.title}>HOME</h2>
            </a>
          </Link>
          <Link href={"/talks"}>
            <a className={styles.element}>
              <StaticImage className={styles.logo} src={talksPic} alt="Talks" />
              <h2 className={styles.title}>TALKS</h2>
            </a>
          </Link>
          <Link href={"/projects"}>
            <a className={styles.element}>
              <StaticImage className={styles.logo} src={projectsPic} alt="Projects" />
              <h2 className={styles.title}>PROJECTS</h2>
            </a>
          </Link>
        </div>
      </div>
      <button className={styles.outside} onClick={() => setOpen(false)} name="戻る" aria-label="戻る" />
    </div>
  );
};

export default SideMenu;
