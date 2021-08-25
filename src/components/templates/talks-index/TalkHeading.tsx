import dayjs from "dayjs";
import styles from "./TalkHeading.module.scss";
import { getComponentTemplate } from "src/lib/component";
import { TalkContentHead } from "src/lib/contents";
import FixedImage from "src/components/functions/FixedImage";
import { formatExceededTime } from "src/lib/helper";

export type TalkHeadingParams = {
  head: TalkContentHead;
};

const TalkHeading = getComponentTemplate(({ head }: TalkHeadingParams) => (
  <div className={styles.container}>
    <FixedImage className={styles.thumbnail} src={head.thumbnailPath} alt={head.title} />
    <h1 className={styles.index}>#{head.index}</h1>
    <h5 className={styles.updatedAt}>{formatExceededTime(dayjs(), head.updatedAt)}</h5>
    <h1 className={styles.title}>{head.title}</h1>
  </div>
));

export default TalkHeading;
