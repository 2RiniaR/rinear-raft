import styles from "./LetterHeading.module.scss";
import { formatExceededTime } from "utils/datetime";
import { Letter, WithoutPage } from "models/content";
import { StaticImage } from "components/functions";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";

type Props = {
  head: WithoutPage<Letter>;
};

export const LetterHeading = ({ head }: Props): JSX.Element => (
  <article className={styles.container}>
    <StaticImage src={head.thumbnail ?? defaultThumbnailPic} alt={head.title} className={styles.thumbnail} />
    <p className={styles.index}>#{head.index}</p>
    <p className={styles.updatedAt} suppressHydrationWarning={true}>
      {formatExceededTime(new Date(), head.updatedAt)}
    </p>
    <h2 className={styles.title}>{head.title}</h2>
  </article>
);
