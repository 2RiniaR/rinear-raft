import React, { ReactNode } from "react";
import Image from "next/image";
import styles from "./MaterialTemplate.module.scss";
import articleStyles from "styles/article.module.scss";
import { Footer, Meta } from "parts";
import { formatDisplayDate, formatExceededTime } from "functions";
import { Material } from "content";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";
import materialIconPic from "public/general/material-icon.png";

type Props = {
  content: Material;
  children?: ReactNode;
};

const MaterialTemplate = ({ content, children }: Props) => (
  <div className={styles.page}>
    <Meta
      pageTitle={content.title}
      pageDescription={content.description}
      pagePath={`/materials/${content.id}`}
      pageImgPath={content.image ? content.image.src : defaultThumbnailPic.src}
      pageType="article"
    />

    <header className={styles.header}>
      <div className={styles.intro}>
        <div className={styles.genreIcon}>
          <Image src={materialIconPic} alt={"MATERIAL"} width={100} height={100} />
        </div>
        <span className={styles.title}>{content.title}</span>
      </div>
      <div className={styles.releasedAt}>{formatDisplayDate(content.releasedAt)}</div>
      <div className={styles.image}>
        <Image src={content.image ?? defaultThumbnailPic} alt={content.title} width={600} height={(600 * 9) / 16} />
      </div>
      <div className={styles.description}>{content.description}</div>
      <div className={styles.updatedAt} suppressHydrationWarning={true}>
        {formatExceededTime(new Date(), content.updatedAt)}
      </div>
    </header>

    <div className={styles.article}>
      <main className={articleStyles.article}>{children}</main>
    </div>

    <Footer />
  </div>
);

export default MaterialTemplate;
