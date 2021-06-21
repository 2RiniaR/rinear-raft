import React from "react";
import styles from "./ScrollButton.module.scss";

export type ScrollButtonParams = {
  active: boolean;
  onClick: () => void;
};

const ScrollButton = ({ active, onClick }: ScrollButtonParams): JSX.Element => (
  <button
    type="button"
    className={`${styles.container} ${active ? styles.active : styles.inactive}`}
    onClick={onClick}
    disabled={!active}
  >
    <div className={styles.image} />
  </button>
);

export default ScrollButton;
