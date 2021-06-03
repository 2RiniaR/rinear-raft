import React from "react";
import styles from "./Menu.module.scss";
import GlassButton from "src/components/parts/GlassButton";

const menu: JSX.Element = (
  <div className={styles.menu}>
    <h2 className={styles.title}>- Menu -</h2>
    <div className={styles.items}>
      <div className={`${styles.item} ${styles.home}`}>
        <GlassButton href="/home" text="HOME" />
      </div>
      <div className={`${styles.item} ${styles.posts}`}>
        <GlassButton href="/posts" text="POSTS" />
      </div>
      <div className={`${styles.item} ${styles.works}`}>
        <GlassButton href="/works" text="WORKS" />
      </div>
    </div>
  </div>
);

export default menu;
