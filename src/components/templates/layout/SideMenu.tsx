import Link from "next/link";
import { TransitionEventHandler, useEffect, useState } from "react";
import styles from "./SideMenu.module.scss";
import { assignClasses, getComponentTemplate } from "src/lib/component";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const SideMenu = getComponentTemplate(({ open, setOpen }: Props) => {
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
      style={{ left: display ? "0" : "-32rem" }}
      onTransitionEnd={onCloseTransitionEnd}
    >
      <button className={styles.back} onClick={() => setOpen(false)}>
        <h2 className={styles.title}>＜</h2>
      </button>
      <div className={styles.index}>
        <Link href="/">
          <a className={styles.element}>
            <img className={styles.logo} src="/img/logo.png" alt="Home" />
            <h2 className={styles.title}>HOME</h2>
          </a>
        </Link>
        <Link href="/talks">
          <a className={styles.element}>
            <img className={styles.logo} src="/img/talks.png" alt="Talks" />
            <h2 className={styles.title}>TALKS</h2>
          </a>
        </Link>
        <Link href="/projects">
          <a className={styles.element}>
            <img className={styles.logo} src="/img/projects.png" alt="Projects" />
            <h2 className={styles.title}>PROJECTS</h2>
          </a>
        </Link>
      </div>
    </div>
  );
});

export default SideMenu;
