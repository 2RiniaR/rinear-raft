/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import dayjs from "dayjs";
import styles from "./Title.module.scss";
import StaticImage from "components/functions/image/StaticImage";
import { LetterContent } from "lib/contents";
import { formatExceededTime } from "lib/helper";
import lettersPic from "public/img/letters.png";

type Props = {
  content: LetterContent;
};

const Title = ({ content }: Props): JSX.Element => (
  <header className={styles.layout}>
    <StaticImage className={styles.logo} src={lettersPic} alt="トーク" />
    <div className={styles.display}>
      <h1 className={styles.title}>{content.title}</h1>
      <h3 className={styles.index}>#{content.index}</h3>
      <h3 className={styles.genre}>LETTER</h3>
      <h3 className={styles.updatedAt}>{"最終更新：" + formatExceededTime(dayjs(), content.updatedAt)}</h3>
    </div>
  </header>
);

export default Title;
