import React, { ReactNode } from "react";
import styles from "./MaterialTemplate.module.scss";
import articleStyles from "styles/article.module.scss";
import { Footer, Meta, SideMenu } from "parts";
import { formatDisplayDate, formatExceededTime, Image } from "functions";
import { Material } from "index";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";
import materialIconPic from "public/general/material-icon.png";

type Props = {
  id: string;
  content: Material;
  children?: ReactNode;
};

const MaterialTemplate = ({ id, content, children }: Props) => (
  <div className={styles.page}>
    <Meta
      pageTitle={content.title}
      pageDescription={content.description}
      pagePath={`/materials/${id}`}
      pageImgPath={content.image ? content.image.src : defaultThumbnailPic.src}
      pageType="article"
    />

    <SideMenu />

    <header className={styles.header}>
      <div className={styles.intro}>
        <Image className={styles.genreIcon} src={materialIconPic} alt={"MATERIAL"} width={100} />
        <span className={styles.title}>{content.title}</span>
      </div>
      <div className={styles.releasedAt}>{formatDisplayDate(content.releasedAt)}</div>
      <Image className={styles.image} src={content.image ?? defaultThumbnailPic} alt={content.title} width={600} />
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
