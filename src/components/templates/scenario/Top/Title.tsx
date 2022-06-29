/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import dayjs from "dayjs";
import styles from "./Title.module.scss";
import StaticImage from "components/functions/StaticImage";
import { ScenarioContent } from "lib/contents";
import { formatDisplayDate, formatExceededTime } from "lib/helper";
import scenariosPic from "public/img/scenarios.png";

type Props = {
  content: ScenarioContent;
};

const Title = ({ content }: Props): JSX.Element => (
  <header className={styles.layout}>
    <StaticImage className={styles.logo} src={scenariosPic} alt="プロジェクト" />
    <div className={styles.display}>
      <h1 className={styles.title}>{content.title}</h1>
      <h3 className={styles.releasedAt}>{content.releasedAt ? formatDisplayDate(content.releasedAt) : "---"}</h3>
      <h3 className={styles.genre}>SCENARIO</h3>
      <h3 className={styles.updatedAt}>{"最終更新：" + formatExceededTime(dayjs(), content.updatedAt)}</h3>
    </div>
  </header>
);

export default Title;
