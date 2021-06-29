import React from "react";
import dayjs from "dayjs";
import styles from "./Footer.module.scss";
import { formatDisplayDate } from "src/lib/helper";

type Params = {
  title: string;
  updatedAt: dayjs.Dayjs;
};

const Footer = ({ title, updatedAt }: Params): JSX.Element => (
  <div className={styles.frame}>
    <h2 className={styles.title}>{title}</h2>
    <h4 className={styles.date}>{formatDisplayDate(updatedAt)}</h4>
  </div>
);

export default Footer;
