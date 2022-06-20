/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import styles from "./Abstract.module.scss";
import { TalkContent } from "lib/contents";
import StaticImage from "components/functions/image/StaticImage";

type Props = {
  content: TalkContent;
};

const Abstract = ({ content }: Props): JSX.Element => (
  <div className={styles.layout}>
    <p className={styles.description}>{content.description}</p>
    <StaticImage src={content.thumbnail} alt="サムネイル" className={styles.thumbnail} />
  </div>
);

export default Abstract;
