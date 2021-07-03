import React from "react";
import styles from "./DateText.module.scss";
import { DateText, DateTextParams } from "./Item";
import { getComponentTemplate } from "src/lib/component";
import { formatDisplayDate } from "src/lib/helper";

const getDateText = (color: string): DateText =>
  getComponentTemplate(({ date }: DateTextParams) => (
    <h2 className={styles.title} style={{ color: color }}>
      {formatDisplayDate(date)}
    </h2>
  ));

export default getDateText;
