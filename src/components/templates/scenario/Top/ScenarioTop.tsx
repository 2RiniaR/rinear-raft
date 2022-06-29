/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import styles from "./ScenarioTop.module.scss";
import Title from "./Title";
import Abstract from "./Abstract";
import { ScenarioContent } from "lib/contents";

type Props = {
  content: ScenarioContent;
};

const ScenarioTop = ({ content }: Props): JSX.Element => (
  <div className={styles.layout}>
    <Title content={content} />
    <Abstract content={content} />
  </div>
);

export default ScenarioTop;
