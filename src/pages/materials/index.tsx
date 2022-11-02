import React from "react";
import Image from "next/image";
import { content as mazeEscape } from "./maze-escape";
import { Material } from "content";
import { Footer, Meta } from "parts";
import { formatDisplayDate, formatExceededTime, InternalLink } from "functions";
import materialIconPic from "public/general/material-icon.png";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";
import backgroundPic from "public/contents/background.webp";

const contents: Material[] = [mazeEscape];

const Page = () => (
  <>
    <Meta
      pageTitle="Materials"
      pageDescription="『RineaR（りにあ）』は、クリエイター『Rinia（りにあ）』による個人活動の総称です。見える抽象を辿るために、漂うように制作をしています。"
      pagePath="/materials"
      pageImgPath="/img/main.webp"
      pageType="article"
    />

    <Image className={styles.back} src={backgroundPic} alt="背景" layout="responsive" />

    <header>
      <Image className={styles.logo} src={materialIconPic} alt="MATERIALS" layout="responsive" />
      <h1 className={styles.title}>MATERIALS</h1>
    </header>

    <main>
      {contents.map((content) => (
        <ContentView {...content} key={content.id} />
      ))}
    </main>

    <Footer />
  </>
);

const ContentView = (content: Material) => (
  <InternalLink href={`/materials/${content.id}`} key={content.id}>
    <article className={styles.container}>
      <Image
        src={content.image1 ?? defaultThumbnailPic}
        alt={content.title}
        className={styles.mainThumbnail}
        layout="responsive"
      />
      <Image
        src={content.image2 ?? defaultThumbnailPic}
        alt={content.title}
        className={styles.mainThumbnail}
        layout="responsive"
      />
      <Image
        src={content.image3 ?? defaultThumbnailPic}
        alt={content.title}
        className={styles.mainThumbnail}
        layout="responsive"
      />
      <Image
        src={content.image4 ?? defaultThumbnailPic}
        alt={content.title}
        className={styles.mainThumbnail}
        layout="responsive"
      />
      <h2 className={styles.title}>{content.title}</h2>
      <p className={styles.description}>{content.description}</p>
      <p className={styles.updatedAt} suppressHydrationWarning={true}>
        最終更新：{formatExceededTime(new Date(), content.updatedAt)}
      </p>
      <p className={styles.releasedAt}>{formatDisplayDate(content.releasedAt)}</p>
    </article>
  </InternalLink>
);

export default Page;
