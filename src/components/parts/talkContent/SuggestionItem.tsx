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
        <Image src="/test.png" width={800} height={600} />
      </div>
      <div>
        <h2>{suggestion.title}</h2>
      </div>
      <div>
        <h4>{formatDisplayDate(suggestion.updatedAt)}</h4>
      </div>
    </a>
  </Link>
);

export default SuggestionItem;
