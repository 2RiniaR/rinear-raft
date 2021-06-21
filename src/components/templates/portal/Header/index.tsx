import React from "react";
import styles from "./index.module.scss";
import Lamp from "./Lamp";
import CloseButton from "./CloseButton";

const Header = (): JSX.Element => (
  <div className={styles.header}>
    <div className={styles.lamp}>
      <Lamp />
    </div>
    <div className={styles.title}>
      <div className={styles.close}>
        <CloseButton />
      </div>
      <h1 className={styles.text}>RineaR</h1>
    </div>
  </div>
);

export default Header;
