/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import Link from "next/link";
import { StaticImageData } from "next/image";
import styles from "./SideMenuItem.module.scss";
import StaticImage from "components/functions/image/StaticImage";

export type SideMenuItemProps = {
  href: string;
  markSrc: StaticImageData;
  name: string;
  onClick: () => void;
};

const SideMenuItem = ({ href, markSrc, name, onClick }: SideMenuItemProps): JSX.Element => (
  <Link href={href}>
    <a className={styles.element} onKeyPress={onClick} onClick={onClick} role="link" tabIndex={0}>
      <div className={styles.logo}>
        <StaticImage src={markSrc} alt={name} />
      </div>
      <h2 className={styles.title}>{name}</h2>
    </a>
  </Link>
);

export default SideMenuItem;
