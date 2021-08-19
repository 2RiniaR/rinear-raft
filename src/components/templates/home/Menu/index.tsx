import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

type ElementParams = {
  href: string;
  name: string;
  iconSrc: string;
  description: string;
};

const Element = getComponentTemplate(({ href, name, iconSrc, description }: ElementParams) => (
  <Link href={href}>
    <a className={styles.linker}>
      <img className={styles.icon} src={iconSrc} alt="アイコン" />
      <div className={styles.caption}>
        <div className={styles.inner}>
          <h2 className={styles.name}>{name}</h2>
          <h2 className={styles.description}>{description}</h2>
        </div>
        <img className={styles.background} src="/img/top/menu_border.svg" alt="" />
      </div>
    </a>
  </Link>
));

const Menu = getComponentTemplate(() => (
  <div className={styles.container}>
    <div className={styles.content}>
      <Element
        className={styles.element}
        href={"/talks"}
        name="TALKS"
        iconSrc="/img/top/talks.png"
        description="制作風景"
      />
      <Element
        className={styles.element}
        href={"/projects"}
        name="PROJECTS"
        iconSrc="/img/top/projects.png"
        description="作品一覧"
      />
    </div>
  </div>
));

export default Menu;
