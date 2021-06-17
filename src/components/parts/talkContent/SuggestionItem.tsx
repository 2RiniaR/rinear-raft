import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./SuggestionItem.module.scss";
import { formatDisplayDate } from "src/lib/helper";
import { ContentHead } from "src/contents/lib/head";
import { getRoute } from "src/contents/lib/base";

export type SuggestionItemParams = {
  suggestion: ContentHead;
};

const SuggestionItem = ({ suggestion }: SuggestionItemParams): JSX.Element => (
  <Link href={getRoute(suggestion)}>
    <a>
      <div className={styles.imageContainer}>
        <Image src="/test.png" layout="fill" objectFit="cover" className={styles.image} />
      </div>
      <div className={styles.title}>
        <h2 className={styles.text}>{suggestion.title}</h2>
      </div>
      <div className={styles.date}>
        <h4 className={styles.text}>{formatDisplayDate(suggestion.updatedAt)}</h4>
      </div>
    </a>
  </Link>
);

export default SuggestionItem;
