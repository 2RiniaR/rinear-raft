import React from "react";
import styles from "./Menu.module.scss";
import GlassButton from "src/components/parts/GlassButton";
import Title from "src/components/parts/portal/Title";

export type MenuItemProps = {
  href: string;
  text: string;
};

const MenuItem = ({ href, text }: MenuItemProps): JSX.Element => (
  <div className={styles.item}>
    <GlassButton href={href} text={text} />
  </div>
);

const Menu = (): JSX.Element => (
  <div className={styles.menu}>
    <div className={styles.title}>
      <Title text="Menu" />
    </div>
    <div className={styles.content}>
      <MenuItem href="/" text="HOME" />
      <MenuItem href="/posts" text="TALKS" />
      <MenuItem href="/works" text="PROJECTS" />
    </div>
  </div>
);

export default Menu;
