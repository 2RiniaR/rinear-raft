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

export default Element;
