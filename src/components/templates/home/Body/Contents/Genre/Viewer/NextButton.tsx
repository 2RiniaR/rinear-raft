import React from "react";
import styles from "./NextButton.module.scss";
import { IncrementalSeekerButton } from "src/components/accessories/IncrementalSeeker";
import { getComponentTemplate } from "src/lib/component";

const NextButton: IncrementalSeekerButton = getComponentTemplate(({ active, onClick }) => (
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
));

export default NextButton;
