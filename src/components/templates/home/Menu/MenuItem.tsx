/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import Link from "next/link";
import { StaticImageData } from "next/image";
import styles from "./MenuItem.module.scss";
import LazyStaticImage from "components/functions/lazy/LazyStaticImage";
import backgroundPic from "public/img/PhantomNode_p.png";
import StaticImageBackground from "components/functions/image/StaticImageBackground";

export type MenuItemProps = {
  href: string;
  name: string;
  iconSrc: StaticImageData;
  description: string;
};

const MenuItem = ({ href, name, iconSrc, description }: MenuItemProps): JSX.Element => (
  <Link href={href}>
    <a className={styles.linker}>
      <StaticImageBackground className={styles.background} src={backgroundPic}>
        <div className={styles.display}>
          <LazyStaticImage className={styles.icon} src={iconSrc} alt="アイコン" />
          <div className={styles.caption}>
            <div className={styles.name}>{name}</div>
            <div className={styles.description}>{description}</div>
          </div>
        </div>
      </StaticImageBackground>
    </a>
  </Link>
);

export default MenuItem;
