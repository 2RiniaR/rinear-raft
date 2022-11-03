import React, { ReactNode } from "react";
import Image from "next/image";
import styles from "./LetterTemplate.module.scss";
import articleStyles from "styles/article.module.scss";
import { Footer, Meta } from "parts";
import { formatExceededTime } from "functions";
import { Letter } from "content";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";

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

    <header>
      <div className={styles.band}>
        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.genre}>LETTER</p>
        <p className={styles.updatedAt} suppressHydrationWarning={true}>
          {formatExceededTime(new Date(), content.updatedAt)}
        </p>
      </div>
      <div className={styles.layout}>
        <p className={styles.description}>{content.description}</p>
        <Image
          src={content.image ?? defaultThumbnailPic}
          alt="サムネイル"
          className={styles.thumbnail}
          width={400}
          height={(400 * 9) / 16}
        />
      </div>
    </header>

    <div className={styles.article}>
      <main className={articleStyles.article}>{children}</main>
    </div>

    <Footer />
  </div>
);

export default LetterTemplate;
