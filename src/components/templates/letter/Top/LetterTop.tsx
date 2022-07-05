import React from "react";
import styles from "./LetterTop.module.scss";
import { Title } from "./Title";
import { Abstract } from "./Abstract";
import { LetterContent } from "types/content";

type Props = {
  content: LetterContent;
};

export const LetterTop = ({ content }: Props): JSX.Element => (
  <div className={styles.layout}>
    <Title content={content} />
    <Abstract content={content} />
  </div>
);
