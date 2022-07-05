import React from "react";
import styles from "./LetterTop.module.scss";
import { Title } from "./Title";
import { Abstract } from "./Abstract";
import { Letter } from "models/content";

type Props = {
  letter: Letter;
};

export const LetterTop = ({ letter }: Props): JSX.Element => (
  <div className={styles.layout}>
    <Title letter={letter} />
    <Abstract letter={letter} />
  </div>
);
