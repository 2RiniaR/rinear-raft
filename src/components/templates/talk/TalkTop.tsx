import React from "react";
import dayjs from "dayjs";
import styles from "./TalkTop.module.scss";
import StaticImage from "components/functions/image/StaticImage";
import { ChapterPoint, TalkContent } from "lib/contents";
import { formatExceededTime } from "lib/helper";
import talksPic from "public/img/talks.png";
import FixedImage from "components/functions/image/FixedImage";

type Props = {
  content: TalkContent;
  chapters: ChapterPoint[];
};

const TalkTop = ({ content, chapters }: Props): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.header}>
      <StaticImage className={styles.logo} src={talksPic} alt="トーク" />
      <div className={styles.display}>
        <h1 className={styles.title}>{content.title}</h1>
        <h3 className={styles.index}>#{content.index}</h3>
        <h3 className={styles.genre}>TALK</h3>
        <h3 className={styles.updatedAt}>{"最終更新：" + formatExceededTime(dayjs(), content.updatedAt)}</h3>
      </div>
    </div>
    <div className={styles.description}>{content.description}</div>
    <div className={styles.thumbnail}>
      <FixedImage src={content.thumbnailPath} alt="サムネイル" />
    </div>
    <div className={styles.chapterIndex}>
      <h2 className={styles.heading}>- Chapters -</h2>
      <div className={styles.chapters}>
        {chapters.map((chapter) => (
          <button
            key={chapter.name}
            className={styles.item}
            onClick={() =>
              chapter.ref?.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              })
            }
          >
            {chapter.name}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default TalkTop;
