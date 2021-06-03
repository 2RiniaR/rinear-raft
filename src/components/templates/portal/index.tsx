import React from "react";
import styles from "./index.module.scss";
import header from "./Header";
import pickUp from "./PickUp";
import menu from "./Menu";

export default function PortalPage(): JSX.Element {
  return (
    <div className={styles.page}>
      <div className={styles.header}>{header}</div>
      <div className={styles.container}>
        <div className={styles.pickUp}>{pickUp}</div>
        <div className={styles.menu}>{menu}</div>
      </div>
    </div>
  );
}
