import React from "react";
import dayjs from "dayjs";
import styles from "./ProjectTop.module.scss";
import { ProjectContent } from "src/lib/contents";
import { formatDisplayDate, formatExceededTime } from "src/lib/helper";
import FixedImage from "src/components/functions/FixedImage";

type Props = {
  content: ProjectContent;
};

const ProjectTop = ({ content }: Props): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.title}>
      <img className={styles.logo} src="/img/projects.png" alt="" />
      <div className={styles.display}>
        <h1 className={styles.text}>{content.title}</h1>
        <h3 className={styles.releasedAt}>{content.releasedAt ? formatDisplayDate(content.releasedAt) : "---"}</h3>
        <h3 className={styles.genre}>PROJECT</h3>
      </div>
    </div>

    <h3 className={styles.updatedAt}>{"最終更新：" + formatExceededTime(dayjs(), content.updatedAt)}</h3>
    <div className={styles.description}>{content.description}</div>

    <div className={styles.thumbnails}>
      {content.thumbnailsPath.map((thumbnailPath) => (
        <div className={styles.thumbnail} key={thumbnailPath}>
          <FixedImage src={thumbnailPath} alt="サブサムネイル" />
        </div>
      ))}
    </div>
  </div>
);

export default ProjectTop;
