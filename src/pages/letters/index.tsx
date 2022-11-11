import React from "react";
import styles from "./index.module.scss";
import { letters } from "letters";
import { formatExceededTime, Image, InternalLink } from "functions";
import { Footer, Meta, SideMenu } from "parts";
import { Letter } from "index";
import letterIconPic from "public/general/letter-icon.png";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";

const Page = () => (
  <div className={styles.page}>
    <Meta
      pageTitle="Letters"
      pageDescription="『RineaR（りにあ）』は、クリエイター『Rinia（りにあ）』による個人活動の総称です。見える抽象を辿るために、漂うように制作をしています。"
      pagePath="/letters"
      pageImgPath="/img/main.webp"
      pageType="article"
    />

    <SideMenu />

    <header className={styles.header}>
      <Image className={styles.logo} src={letterIconPic} alt="LETTERS" width={100} />
      <h1 className={styles.title}>LETTERS</h1>
      <p className={styles.description}>解釈の過程を記録しています。</p>
    </header>

    <main className={styles.list}>
      {Object.keys(letters)
        .reverse()
        .map((id) => (
          <ContentView {...letters[id]} id={id} key={id} />
        ))}
    </main>

    <Footer />
  </div>
);

const ContentView = (content: Letter & { id: string }) => (
  <InternalLink href={`/letters/${content.id}`} className={styles.item}>
    <Image className={styles.image} src={content.image ?? defaultThumbnailPic} alt={content.title} />
    <div className={styles.info}>
      <div className={styles.title}>{content.title}</div>
      <div className={styles.updatedAt} suppressHydrationWarning={true}>
        {formatExceededTime(new Date(), content.updatedAt)}
      </div>
    </div>
  </InternalLink>
);

export default Page;
