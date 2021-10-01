import React from "react";
import styles from "./Menu.module.scss";
import MenuItem, { MenuItemProps } from "./MenuItem";
import talksPic from "public/img/talks.png";
import projectsPic from "public/img/projects.png";

const items: MenuItemProps[] = [
  {
    href: "/talks",
    name: "TALKS",
    iconSrc: talksPic,
    description: "制作風景"
  },
  {
    href: "/projects",
    name: "PROJECTS",
    iconSrc: projectsPic,
    description: "作品一覧"
  }
];

const Menu = (): JSX.Element => (
  <div className={styles.background}>
    <div className={styles.items}>
      {items.map((item) => (
        <MenuItem {...item} key={item.href} />
      ))}
    </div>
  </div>
);

export default Menu;