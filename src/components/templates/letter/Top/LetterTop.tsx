/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import styles from "./LetterTop.module.scss";
import Title from "./Title";
import Abstract from "./Abstract";
import { LetterContent } from "lib/contents";

type Props = {
  content: LetterContent;
};

const LetterTop = ({ content }: Props): JSX.Element => (
  <div className={styles.layout}>
    <Title content={content} />
    <Abstract content={content} />
  </div>
);

export default LetterTop;
