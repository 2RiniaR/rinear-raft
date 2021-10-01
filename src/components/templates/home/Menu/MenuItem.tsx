import React from "react";
import Link from "next/link";
import styles from "./MenuItem.module.scss";
import StaticImage from "components/functions/image/StaticImage";
import CompositeText from "components/functions/text/CompositeText";
import menuBorderPic from "public/img/menu_border.svg";

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
        <div className={styles.inner}>
          <h2 className={styles.name}>
            <CompositeText>
              <div className={styles.text}>{name}</div>
            </CompositeText>
          </h2>
          <h2 className={styles.description}>
            <CompositeText>
              <div className={styles.text}>{description}</div>
            </CompositeText>
          </h2>
        </div>
        <StaticImage className={styles.background} src={menuBorderPic} alt="メニュー背景" />
      </div>
    </a>
  </Link>
);

export default MenuItem;
