import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Item.module.scss";
import { formatDisplayDate } from "src/lib/helper";
import { ContentHead } from "src/lib/contents/head";
import { getRoute } from "src/lib/contents/base";

export type ItemParams = {
  active: boolean;
  suggestion: ContentHead;
};

const Item = ({ active, suggestion }: ItemParams): JSX.Element => (
  <div className={`${styles.container} ${active ? styles.active : styles.inactive}`}>
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
  </div>
);

export default Item;
