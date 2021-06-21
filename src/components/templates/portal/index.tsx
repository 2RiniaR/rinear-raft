import React from "react";
import PickUp from "./PickUp";
import Menu from "./Menu";
import Header from "./Header";
import styles from "./index.module.scss";
import pickUp from "src/contents/lib/pickup";

const PortalPage = (): JSX.Element => (
  <div className={styles.page}>
    <div className={styles.background} />
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.pickUp}>
        <PickUp content={pickUp.content} />
      </div>
      <div className={styles.menu}>
        <Menu />
      </div>
    </div>
  </div>
);

export default PortalPage;
