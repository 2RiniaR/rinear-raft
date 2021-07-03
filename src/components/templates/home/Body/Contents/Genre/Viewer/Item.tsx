import React from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import styles from "./Item.module.scss";
import { ContentHead } from "src/lib/contents/head";
import { ClassedParams } from "src/lib/component";
import { SeekGridViewerItem, SeekGridViewerItemParams } from "src/components/accessories/SeekGridViewer";

export type TitleTextParams = { text: string };
export type TitleText = React.FC<ClassedParams<TitleTextParams>>;

export type DateTextParams = { date: dayjs.Dayjs };
export type DateText = React.FC<ClassedParams<DateTextParams>>;

export type ItemParams = {
  head: ContentHead;
  TitleText: TitleText;
  DateText: DateText;
};

export default function getItem({ head, TitleText, DateText }: ItemParams): SeekGridViewerItem {
  return function Item({ active }: SeekGridViewerItemParams): JSX.Element {
    return (
      <div className={`${styles.container} ${active ? styles.active : styles.inactive}`}>
        <Link href={head.getRoute()}>
          <a>
            <div className={styles.imageContainer}>
              <Image src="/test.png" layout="fill" objectFit="cover" className={styles.image} />
            </div>
            <TitleText className={styles.title} text={head.title} />
            <DateText className={styles.date} date={head.updatedAt} />
          </a>
        </Link>
      </div>
    );
  };
}
