import dayjs from "dayjs";
import styles from "./TalkHeading.module.scss";
import { TalkContentHead } from "src/lib/contents";
import FixedImage from "src/components/functions/FixedImage";
import { formatExceededTime } from "src/lib/helper";

type Props = {
  head: TalkContentHead;
};

const TalkHeading = ({ head }: Props): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.thumbnail}>
      <FixedImage src={head.thumbnailPath} alt={head.title} />
    </div>
    <h1 className={styles.index}>#{head.index}</h1>
    <h5 className={styles.updatedAt}>{formatExceededTime(dayjs(), head.updatedAt)}</h5>
    <h1 className={styles.title}>{head.title}</h1>
  </div>
);

export default TalkHeading;