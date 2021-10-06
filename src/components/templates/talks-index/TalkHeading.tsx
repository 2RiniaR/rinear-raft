import dayjs from "dayjs";
import styles from "./TalkHeading.module.scss";
import { TalkContentHead } from "lib/contents";
import FixedImage from "components/functions/image/FixedImage";
import { formatExceededTime } from "lib/helper";

type Props = {
  head: TalkContentHead;
};

const TalkHeading = ({ head }: Props): JSX.Element => (
  <article className={styles.container}>
    <FixedImage src={head.thumbnail} alt={head.title} className={styles.thumbnail} />
    <h1 className={styles.index}>#{head.index}</h1>
    <h5 className={styles.updatedAt}>{formatExceededTime(dayjs(), head.updatedAt)}</h5>
    <h1 className={styles.title}>{head.title}</h1>
  </article>
);

export default TalkHeading;
