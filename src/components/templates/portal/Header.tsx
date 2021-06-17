import React from "react";
import styles from "./Header.module.scss";
import Lamp from "src/components/parts/portal/Lamp";
import CloseButton from "src/components/parts/portal/CloseButton";

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
