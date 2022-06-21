/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import styles from "./LetterHeading.module.scss";
import { LetterContentHead } from "lib/contents";
import StaticImage from "components/functions/image/StaticImage";
import { formatExceededTime } from "lib/helper";

type Props = {
  head: LetterContentHead;
};

const LetterHeading = ({ head }: Props): JSX.Element => (
  <article className={styles.container}>
    <StaticImage src={head.thumbnail} alt={head.title} className={styles.thumbnail} />
    <h1 className={styles.index}>#{head.index}</h1>
    <h5 className={styles.updatedAt}>{formatExceededTime(dayjs(), head.updatedAt)}</h5>
    <h1 className={styles.title}>{head.title}</h1>
  </article>
);

export default LetterHeading;
