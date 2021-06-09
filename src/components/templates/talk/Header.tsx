import React from "react";
import styles from "./index.module.scss";
import { Tag } from "src/contents";

type Params = {
  title: string;
  updatedAt: Date;
  tags: Tag[];
};

const Header = ({ title, updatedAt, tags }: Params): JSX.Element => (
  <div className={styles.header}>
    <div className={styles.frame}>
      <h1 className={styles.title}>{title}</h1>
      <h4>{updatedAt.toDateString()}</h4>
    </div>
  </div>
);

export default Header;
