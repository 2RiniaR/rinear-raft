import dayjs from "dayjs";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";
import { TalkContentHead } from "src/lib/contents";
import NormalizedImage from "src/components/parts/NormalizedImage";
import { formatExceededTime } from "src/lib/helper";

export type ElementParams = {
  head: TalkContentHead;
};

const Element = getComponentTemplate(({ head }: ElementParams) => (
  <div className={styles.container}>
    <NormalizedImage className={styles.thumbnail} src={head.thumbnailPath} alt={head.title} />
    <h1 className={styles.index}>#{head.index}</h1>
    <h5 className={styles.updatedAt}>{formatExceededTime(dayjs(), head.updatedAt)}</h5>
    <h1 className={styles.title}>{head.title}</h1>
  </div>
));

export default Element;
