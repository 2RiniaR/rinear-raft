import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./SuggestionItem.module.scss";
import { ContentHead } from "src/contents/lib";
import { formatDisplayDate } from "src/lib/helper";

export type SuggestionItemParams = {
  suggestion: ContentHead;
};

const SuggestionItem = ({ suggestion }: SuggestionItemParams): JSX.Element => (
  <Link href={suggestion.getRoute()}>
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
