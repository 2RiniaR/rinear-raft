import React from "react";
import dayjs from "dayjs";
import styles from "./TalkTop.module.scss";
import StaticImage from "components/functions/image/StaticImage";
import { TalkContent } from "lib/contents";
import { formatExceededTime } from "lib/helper";
import talksPic from "public/img/talks.png";

type Props = {
  content: TalkContent;
};

const TalkTop = ({ content }: Props): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.title}>
      <StaticImage className={styles.logo} src={talksPic} alt="トーク" />
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
