import React from "react";
import Link from "next/link";
import styles from "./MenuItem.module.scss";
import StaticImage from "components/functions/image/StaticImage";

export type MenuItemProps = {
  href: string;
  name: string;
  iconSrc: StaticImageData;
  description: string;
};

const MenuItem = ({ href, name, iconSrc, description }: MenuItemProps): JSX.Element => (
  <Link href={href}>
    <a className={styles.linker}>
      <StaticImage className={styles.icon} src={iconSrc} alt="アイコン" />
      <div className={styles.caption}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </a>
  </Link>
);

export default MenuItem;
