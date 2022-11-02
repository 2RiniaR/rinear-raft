import React from "react";
import Image from "next/image";
import { Footer, Meta } from "parts";
import materialIconPic from "public/general/material-icon.png";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";
import { formatExceededTime, InternalLink } from "functions";
import backgroundPic from "public/contents/background.webp";
import { Letter } from "content";

const contents: Letter[] = [];

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

const ContentView = (content: Letter) => (
  <InternalLink href={`/materials/${content.id}`} key={content.id}>
    <article className={styles.container}>
      <Image
        src={content.image ?? defaultThumbnailPic}
        alt={content.title}
        className={styles.mainThumbnail}
        layout="responsive"
      />
      <h2 className={styles.title}>{content.title}</h2>
      <p className={styles.description}>{content.description}</p>
      <p className={styles.updatedAt} suppressHydrationWarning={true}>
        最終更新：{formatExceededTime(new Date(), content.updatedAt)}
      </p>
    </article>
  </InternalLink>
);

export default Page;
