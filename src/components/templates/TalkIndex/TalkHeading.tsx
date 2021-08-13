import dayjs from "dayjs";
import styles from "./TalkHeading.module.scss";
import { getComponentTemplate } from "src/lib/component";
import { TalkContentHead } from "src/lib/contents";
import NormalizedImage from "src/components/parts/NormalizedImage";
import { formatExceededTime } from "src/lib/helper";

export type TalkHeadingParams = {
  head: TalkContentHead;
};

const TalkHeading = getComponentTemplate(({ head }: TalkHeadingParams) => (
  <div className={styles.card}>
    <NormalizedImage className={styles.image} src={head.thumbnailPath} alt={head.title} />
    <div className={styles.heading}>
      <h1 className={styles.title}>{head.title}</h1>
      <h2 className={styles.genre}>TALK</h2>
    </div>
    <h5 className={styles.updatedAt}>{formatExceededTime(dayjs(), head.updatedAt)}</h5>
  </div>
));

export default TalkHeading;
