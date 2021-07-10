import React from "react";
import styles from "./PreviousButton.module.scss";
import { ScrollViewerButton } from "src/components/accessories/IncrementalSeeker";

const PreviousButton: ScrollViewerButton = ({ active, onClick }) => (
  <div className={styles.container}>
    <div className={styles.inner}>
      <button
        type="button"
        className={`${active ? styles.active : styles.inactive}`}
        onClick={onClick}
        disabled={!active}
      >
        <div className={styles.image} />
      </button>
    </div>
  </div>
);

export default PreviousButton;
