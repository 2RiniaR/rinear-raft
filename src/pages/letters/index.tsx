import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { content as sample } from "./sample";
import { content as declaration } from "./declaration";
import { content as story } from "./story";
import { Footer, Meta } from "parts";
import { formatExceededTime, InternalLink } from "functions";
import { Letter } from "content";
import letterIconPic from "public/general/letter-icon.png";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";

const contents: Letter[] = [sample, declaration, story];

const Page = () => (
  <div className={styles.page}>
    <Meta
      pageTitle="Letters"
      pageDescription="『RineaR（りにあ）』は、クリエイター『Rinia（りにあ）』による個人活動の総称です。見える抽象を辿るために、漂うように制作をしています。"
      pagePath="/letters"
      pageImgPath="/img/main.webp"
      pageType="article"
    />

    <header className={styles.header}>
      <Image className={styles.logo} src={letterIconPic} alt="LETTERS" width={64} height={64} />
      <h1 className={styles.title}>LETTERS</h1>
    </header>

    <main className={styles.list}>
      {contents.map((content) => (
        <ContentView {...content} key={content.id} />
      ))}
    </main>

    <Footer />
  </div>
);

const ContentView = (content: Letter) => (
  <InternalLink href={`/letters/${content.id}`} className={styles.item}>
    <div className={styles.image}>
      <Image src={content.image ?? defaultThumbnailPic} alt={content.title} />
    </div>
    <div className={styles.info}>
      <div className={styles.title}>{content.title}</div>
      <div className={styles.updatedAt} suppressHydrationWarning={true}>
        {formatExceededTime(new Date(), content.updatedAt)}
      </div>
    </div>
  </InternalLink>
);

export default Page;
