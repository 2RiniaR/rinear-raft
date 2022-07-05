import styles from "./LetterHeading.module.scss";
import { formatExceededTime } from "utils/datetime";
import { Letter, WithoutPage } from "models/content";
import { StaticImage } from "components/functions";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";

type Props = {
  letters: WithoutPage<Letter>;
};

export const LetterHeading = ({ letters }: Props): JSX.Element => (
  <article className={styles.container}>
    <StaticImage src={letters.thumbnail ?? defaultThumbnailPic} alt={letters.title} className={styles.thumbnail} />
    <p className={styles.index}>#{letters.index}</p>
    <p className={styles.updatedAt} suppressHydrationWarning={true}>
      {formatExceededTime(new Date(), letters.updatedAt)}
    </p>
    <h2 className={styles.title}>{letters.title}</h2>
  </article>
);
