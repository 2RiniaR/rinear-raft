import React from "react";
import styles from "./Header.module.scss";
import { formatDisplayDate } from "src/lib/helper";
import { Tag } from "src/lib/contents/tags";

type Params = {
  title: string;
  updatedAt: Date;
  tags: Tag[];
};

const TitleDisplay = ({ text }: { text: string }): JSX.Element => (
  <div className={styles.title}>
    <h1 className={styles.text}>{text}</h1>
  </div>
);

const DateDisplay = ({ text }: { text: string }): JSX.Element => (
  <div className={styles.date}>
    <h4 className={styles.text}>{text}</h4>
  </div>
);

const Header = ({ title, updatedAt, tags }: Params): JSX.Element => (
  <div className={styles.frame}>
    <div className={styles.band} />
    <div className={styles.content}>
      <TitleDisplay text={title} />
      <DateDisplay text={formatDisplayDate(updatedAt)} />
    </div>
  </div>
);

export default Header;
