import React from "react";
import styles from "./LetterTop.module.scss";
import { Title } from "./Title";
import { Abstract } from "./Abstract";
import { Letter } from "models/content";

type Props = {
  content: Letter;
};

export const LetterTop = ({ content }: Props): JSX.Element => (
  <div className={styles.layout}>
    <Title content={content} />
    <Abstract content={content} />
  </div>
);
