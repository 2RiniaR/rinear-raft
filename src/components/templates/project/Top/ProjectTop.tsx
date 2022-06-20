/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import styles from "./ProjectTop.module.scss";
import Title from "./Title";
import Abstract from "./Abstract";
import { ProjectContent } from "lib/contents";

type Props = {
  content: ProjectContent;
};

const ProjectTop = ({ content }: Props): JSX.Element => (
  <div className={styles.layout}>
    <Title content={content} />
    <Abstract content={content} />
  </div>
);

export default ProjectTop;
