import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";
import { getRoute } from "src/data/contents";
import { ContentHead } from "src/lib/contents";
import { formatDisplayDate } from "src/lib/helper";

export type ItemParams = {
  head: ContentHead;
  titleTextColor: string;
  dateTextColor: string;
  backgroundColor: string;
  active: boolean;
  hover: boolean;
};

const HeadWithThumbnail = getComponentTemplate(
  ({ head, titleTextColor, dateTextColor, backgroundColor, active, hover }: ItemParams) => (
    <div
      className={`${styles.container} ${active ? styles.active : styles.inactive}`}
      style={{ backgroundColor: backgroundColor }}
    >
      <Link href={getRoute(head)}>
        <a>
          <div className={styles.inner}>
            <div className={styles.imageContainer}>
              <div className={styles.inner}>
                <img src={head.thumbnailPath} className={styles.image} alt="" />
              </div>
            </div>
            <h2 className={styles.title} style={{ color: titleTextColor }}>
              {head.title}
            </h2>
            <h2 className={styles.date} style={{ color: dateTextColor }}>
              {formatDisplayDate(head.updatedAt)}
            </h2>
          </div>
        </a>
      </Link>
    </div>
  )
);

export default HeadWithThumbnail;
