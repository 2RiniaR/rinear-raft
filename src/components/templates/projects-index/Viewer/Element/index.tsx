import dayjs from "dayjs";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";
import { ProjectContentHead } from "src/lib/contents";
import NormalizedImage from "src/components/parts/NormalizedImage";
import { formatDisplayDate, formatExceededTime } from "src/lib/helper";

export type ElementParams = {
  head: ProjectContentHead;
};

const Element = getComponentTemplate(({ head }: ElementParams) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{head.title}</h1>
    <h5 className={styles.description}>{head.description}</h5>
    <h5 className={styles.updatedAt}>{"最終更新：" + formatExceededTime(dayjs(), head.updatedAt)}</h5>
    <h5 className={styles.releasedAt}>
      <span className={styles.text}>{head.releasedAt ? formatDisplayDate(head.releasedAt) : "---"}</span>
    </h5>
    <NormalizedImage className={styles.mainThumbnail} src={head.thumbnailsPath[0]} alt={head.title} />
    <div className={styles.subThumbnailsContainer}>
      <NormalizedImage className={styles.subThumbnail} src={head.thumbnailsPath[1]} alt={head.title} lock={"height"} />
      <NormalizedImage className={styles.subThumbnail} src={head.thumbnailsPath[2]} alt={head.title} lock={"height"} />
      <NormalizedImage className={styles.subThumbnail} src={head.thumbnailsPath[3]} alt={head.title} lock={"height"} />
    </div>
  </div>
));

export default Element;
