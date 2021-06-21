import React from "react";
import styles from "./Title.module.scss";

type Props = {
  text: string;
};

const Title = ({ text }: Props): JSX.Element => (
  <div className={styles.title}>
    <div className={styles.line} />
    <h2 className={styles.text}>{text}</h2>
    <div className={styles.line} />
  </div>
);

export default Title;
