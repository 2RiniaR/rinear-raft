/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import styles from "./MaterialTop.module.scss";
import Title from "./Title";
import Abstract from "./Abstract";
import { MaterialContent } from "lib/contents";

type Props = {
  content: MaterialContent;
};

const MaterialTop = ({ content }: Props): JSX.Element => (
  <div className={styles.layout}>
    <Title content={content} />
    <Abstract content={content} />
  </div>
);

export default MaterialTop;