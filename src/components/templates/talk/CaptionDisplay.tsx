import React from "react";
import styles from "./CaptionDisplay.module.scss";

type Params = {
  caption: JSX.Element;
};

const CaptionDisplay = ({ caption }: Params): JSX.Element => (
  <div className={styles.window}>
    <div className={styles.container}>{caption}</div>
  </div>
);

export default CaptionDisplay;
