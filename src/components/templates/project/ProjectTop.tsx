import React from "react";
import dayjs from "dayjs";
import styles from "./ProjectTop.module.scss";
import StaticImage from "components/functions/image/StaticImage";
import { ChapterPoint, ProjectContent } from "lib/contents";
import { formatDisplayDate, formatExceededTime } from "lib/helper";
import FixedImage from "components/functions/image/FixedImage";
import projectsPic from "public/img/projects.png";

type Props = {
  content: ProjectContent;
  chapters: ChapterPoint[];
};

const ProjectTop = ({ content, chapters }: Props): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.header}>
      <StaticImage className={styles.logo} src={projectsPic} alt="プロジェクト" />
      <div className={styles.display}>
        <h1 className={styles.title}>{content.title}</h1>
        <h3 className={styles.releasedAt}>{content.releasedAt ? formatDisplayDate(content.releasedAt) : "---"}</h3>
        <h3 className={styles.genre}>PROJECT</h3>
        <h3 className={styles.updatedAt}>{"最終更新：" + formatExceededTime(dayjs(), content.updatedAt)}</h3>
      </div>
    </div>

    <div className={styles.description}>{content.description}</div>

    <div className={styles.thumbnails}>
      {content.thumbnailsPath.map((thumbnailPath) => (
        <div className={styles.thumbnail} key={thumbnailPath}>
          <FixedImage src={thumbnailPath} alt="サブサムネイル" />
        </div>
      ))}
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

export default ProjectTop;
