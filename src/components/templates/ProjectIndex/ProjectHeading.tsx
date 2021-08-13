import dayjs from "dayjs";
import styles from "./ProjectHeading.module.scss";
import { getComponentTemplate } from "src/lib/component";
import { ProjectContentHead } from "src/lib/contents";
import NormalizedImage from "src/components/parts/NormalizedImage";
import { formatExceededTime } from "src/lib/helper";

export type ProjectHeadingParams = {
  head: ProjectContentHead;
};

const ProjectHeading = getComponentTemplate(({ head }: ProjectHeadingParams) => (
  <div className={styles.card}>
    <NormalizedImage className={styles.image} src={head.thumbnailPath} alt={head.title} />
    <div className={styles.heading}>
      <h1 className={styles.title}>{head.title}</h1>
      <h2 className={styles.genre}>PROJECT</h2>
    </div>
    <p className={styles.description}>{head.description}</p>
    <h5 className={styles.updatedAt}>{formatExceededTime(dayjs(), head.updatedAt)}</h5>
  </div>
));

export default ProjectHeading;
