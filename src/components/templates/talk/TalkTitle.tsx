import React from "react";
import dayjs from "dayjs";
import styles from "./TalkTitle.module.scss";
import StaticImage from "components/functions/image/StaticImage";
import { TalkContent } from "lib/contents";
import { formatExceededTime } from "lib/helper";
import talksPic from "public/img/talks.png";

type Props = {
  content: TalkContent;
};

const TalkTitle = ({ content }: Props): JSX.Element => (
  <header className={styles.layout}>
    <StaticImage className={styles.logo} src={talksPic} alt="トーク" />
    <div className={styles.display}>
      <h1 className={styles.title}>{content.title}</h1>
      <h3 className={styles.index}>#{content.index}</h3>
      <h3 className={styles.genre}>TALK</h3>
      <h3 className={styles.updatedAt}>{"最終更新：" + formatExceededTime(dayjs(), content.updatedAt)}</h3>
    </div>
  </header>
);

export default TalkTitle;
