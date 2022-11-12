import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { letters } from "letters";
import { formatExceededTime, InternalLink } from "functions";
import { Footer, Meta, SideMenu } from "parts";
import { Letter } from "index";
import letterIconPic from "public/general/letter-icon.png";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";
import backgroundPic from "public/general/letters-background.png";

const Page = () => (
  <div className={styles.page}>
    <Meta
      pageTitle="Letters"
      pageDescription="『RineaR（りにあ）』は、クリエイター『Rinia（りにあ）』による個人活動の総称です。見える抽象を辿るために、漂うように制作をしています。"
      pagePath="/letters"
      pageImgPath="/img/main.webp"
      pageType="article"
    />

    <Image src={backgroundPic} className={styles.background} alt="" />
    <SideMenu />

    <header className={styles.header}>
      <Image className={styles.logo} src={letterIconPic} width={100} alt="LETTERS" />
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
    <Image className={styles.image} src={content.image ?? defaultThumbnailPic} alt={content.title} width={300} />
    <div className={styles.info}>
      <div className={styles.title}>{content.title}</div>
      <div className={styles.updatedAt} suppressHydrationWarning={true}>
        {formatExceededTime(new Date(), content.updatedAt)}
      </div>
    </div>
  </InternalLink>
);

export default Page;
