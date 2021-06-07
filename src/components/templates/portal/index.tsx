import React from "react";
import styles from "./index.module.scss";
import PickUp from "./PickUp";
import Menu from "./Menu";
import Lamp from "src/components/parts/Lamp";
import pickUp from "src/contents/pickup";

const Title = (): JSX.Element => (
  <div className={styles.title}>
    <div className={styles.lamp}>
      <Lamp />
    </div>
    <h1 className={styles.text}>??????</h1>
  </div>
);

const PortalPage = (): JSX.Element => (
  <div className={styles.page}>
    <div className={styles.background} />
    <div className={styles.container}>
      <Title />
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
