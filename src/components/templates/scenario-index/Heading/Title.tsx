/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import styles from "./Title.module.scss";
import { ScenarioContentHead } from "lib/contents";
import { formatDisplayDate, formatExceededTime } from "lib/helper";

type Props = {
  head: ScenarioContentHead;
};

const Title = ({ head }: Props): JSX.Element => (
  <div className={styles.layout}>
    <h1 className={styles.title}>{head.title}</h1>
    <p className={styles.description}>{head.description}</p>
    <h5 className={styles.updatedAt}>{"最終更新：" + formatExceededTime(dayjs(), head.updatedAt)}</h5>
    <h5 className={styles.releasedAt}>
      <span className={styles.text}>{formatDisplayDate(head.releasedAt)}</span>
    </h5>
  </div>
);

export default Title;