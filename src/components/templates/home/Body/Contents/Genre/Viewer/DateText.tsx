import React from "react";
import styles from "./DateText.module.scss";
import { ScrollViewerDate } from "src/components/accessories/ScrollViewer";
import { formatDisplayDate } from "src/lib/helper";

const getDateText = (color: string): ScrollViewerDate =>
  function DateText({ date }) {
    return (
      <h3 className={styles.date} style={{ color: color }}>
        {formatDisplayDate(date)}
      </h3>
    );
  };

export default getDateText;
