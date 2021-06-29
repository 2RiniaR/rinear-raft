import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollViewerDate, ScrollViewerTitle } from "..";
import styles from "./Item.module.scss";
import { ContentHead } from "src/lib/contents/head";

export type ItemParams = {
  active: boolean;
  item: ContentHead;
  TitleText: ScrollViewerTitle;
  DateText: ScrollViewerDate;
};

const Item = ({ active, item, TitleText, DateText }: ItemParams): JSX.Element => (
  <div className={`${styles.container} ${active ? styles.active : styles.inactive}`}>
    <Link href={item.getRoute()}>
      <a>
        <div className={styles.imageContainer}>
          <Image src="/test.png" layout="fill" objectFit="cover" className={styles.image} />
        </div>
        <div className={styles.title}>
          <TitleText title={item.title} />
        </div>
        <div className={styles.date}>
          <DateText date={item.updatedAt} />
        </div>
      </a>
    </Link>
  </div>
);

export default Item;
