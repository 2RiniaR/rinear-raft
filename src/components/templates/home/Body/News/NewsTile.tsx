import React from "react";
import Link from "next/link";
import styles from "./NewsTile.module.scss";
import { assignClasses, getComponentTemplate } from "src/lib/component";
import { getRoute } from "src/data/contents";
import { ContentHead } from "src/lib/contents";
import { formatDisplayDate } from "src/lib/helper";

export type NewsTileParams = {
  head: ContentHead;
  active: boolean;
};

const NewsTile = getComponentTemplate(({ head, active }: NewsTileParams) => (
  <div className={assignClasses(styles.container, active ? styles.active : styles.inactive)}>
    <Link href={getRoute(head)}>
      <a className={styles.aspectKeeper}>
        <div className={styles.content}>
          <img src={head.thumbnailPath} className={styles.image} alt="" />
          <div className={assignClasses(styles.filter, active ? styles.active : styles.inactive)}>
            <h2 className={styles.click}>CLICK</h2>
            <p className={styles.date}>{formatDisplayDate(head.updatedAt)}</p>
          </div>
        </div>
      </a>
    </Link>
  </div>
));

export default NewsTile;
