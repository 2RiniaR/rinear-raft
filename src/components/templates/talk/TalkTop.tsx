import React from "react";
import dayjs from "dayjs";
import styles from "./TalkTop.module.scss";
import { TalkContent } from "src/lib/contents";
import { formatExceededTime } from "src/lib/helper";

type Props = {
  content: TalkContent;
};

const TalkTop = ({ content }: Props): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.title}>
      <img className={styles.logo} src="/img/talks.png" alt="" />
      <div className={styles.display}>
        <h1 className={styles.text}>{content.title}</h1>
        <h3 className={styles.index}>#{content.index}</h3>
        <h3 className={styles.genre}>TALK</h3>
      </div>
    </div>
    <h3 className={styles.updatedAt}>{"最終更新：" + formatExceededTime(dayjs(), content.updatedAt)}</h3>
    <div className={styles.description}>{content.description}</div>
  </div>
);

export default TalkTop;
