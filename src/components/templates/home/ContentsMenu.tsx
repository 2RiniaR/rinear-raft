import React from "react";
import Link from "next/link";
import styles from "./ContentsMenu.module.scss";

type ElementProps = {
  href: string;
  name: string;
  iconSrc: string;
  description: string;
};

const Element = ({ href, name, iconSrc, description }: ElementProps): JSX.Element => (
  <Link href={href}>
    <a className={styles.linker}>
      <img className={styles.icon} src={iconSrc} alt="アイコン" />
      <div className={styles.caption}>
        <div className={styles.inner}>
          <h2 className={styles.name}>{name}</h2>
          <h2 className={styles.description}>{description}</h2>
        </div>
        <img className={styles.background} src="/img/menu_border.svg" alt="" />
      </div>
    </a>
  </Link>
);

const ContentsMenu = (): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.element}>
        <Element href={"/talks"} name="TALKS" iconSrc="/img/talks.png" description="制作風景" />
      </div>
      <div className={styles.element}>
        <Element href={"/projects"} name="PROJECTS" iconSrc="/img/projects.png" description="作品一覧" />
      </div>
    </div>
  </div>
);

export default ContentsMenu;
