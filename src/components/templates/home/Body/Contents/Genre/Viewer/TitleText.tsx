import React from "react";
import styles from "./TitleText.module.scss";
import { ScrollViewerTitle } from "src/components/accessories/ScrollViewer";

const getTitleText = (color: string): ScrollViewerTitle =>
  function TitleText({ title }) {
    return (
      <h2 className={styles.title} style={{ color: color }}>
        {title}
      </h2>
    );
  };

export default getTitleText;
