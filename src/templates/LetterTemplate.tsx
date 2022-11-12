import React, { ReactNode } from "react";
import Image from "next/image";
import styles from "./LetterTemplate.module.scss";
import articleStyles from "styles/article.module.scss";
import { Footer, Meta, SideMenu } from "parts";
import { formatDisplayDate, formatExceededTime } from "functions";
import { Letter } from "index";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";
import letterIconPic from "public/general/letter-icon.png";
import backgroundPic from "public/general/letters-background.png";

type Props = {
  id: string;
  content: Letter;
  children?: ReactNode;
};

const LetterTemplate = ({ id, content, children }: Props) => (
  <div className={styles.page}>
    <Meta
      pageTitle={content.title}
      pageDescription={content.description}
      pagePath={`/letters/${id}`}
      pageImgPath={content.image ? content.image.src : defaultThumbnailPic.src}
      pageType="article"
    />

    <Image src={backgroundPic} className={styles.background} alt="背景" />
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
