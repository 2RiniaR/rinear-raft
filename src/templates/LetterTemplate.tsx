import React, { ReactNode } from "react";
import styles from "./LetterTemplate.module.scss";
import articleStyles from "styles/article.module.scss";
import { Footer, Meta, SideMenu } from "parts";
import { formatDisplayDate, formatExceededTime, Image } from "functions";
import { Letter } from "index";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";
import letterIconPic from "public/general/letter-icon.png";

type Props = {
  content: Letter;
  children?: ReactNode;
};

const LetterTemplate = ({ content, children }: Props) => (
  <div className={styles.page}>
    <Meta
      pageTitle={content.title}
      pageDescription={content.description}
      pagePath={`/letters/${content.id}`}
      pageImgPath={content.image ? content.image.src : defaultThumbnailPic.src}
      pageType="article"
    />

    <SideMenu />

    <header className={styles.header}>
      <div className={styles.intro}>
        <Image className={styles.genreIcon} src={letterIconPic} alt={"LETTER"} width={100} />
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

export default LetterTemplate;
