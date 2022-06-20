/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
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

const Menu = (): JSX.Element => {
  const [display, setDisplay] = useState(false);

  return (
    <div className={styles.background}>
      <VisibilitySensor onChange={(isVisible: boolean) => setDisplay(display || isVisible)}>
        <div className={styles.items}>
          {items.map((item) => (
            <MenuItem {...item} key={item.href} />
          ))}
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default Menu;
