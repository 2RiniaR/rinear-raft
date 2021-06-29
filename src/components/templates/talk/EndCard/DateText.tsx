import React from "react";
import styles from "./DateText.module.scss";
import { ScrollViewerDate } from "src/components/accessories/ScrollViewer";
import { formatDisplayDate } from "src/lib/helper";

const DateText: ScrollViewerDate = ({ date }) => <h3 className={styles.date}>{formatDisplayDate(date)}</h3>;

export default DateText;
