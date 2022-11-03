import React from "react";
import Image from "next/image";
import { content as mazeEscape } from "./maze-escape";
import { content as bustersMission } from "./busters-mission";
import { content as eyes } from "./eyes";
import { content as kimifeel } from "./kimifeel";
import { content as mageSimulator } from "./mage-simulator";
import { content as marvelous } from "./marvelous";
import { content as ponBonRush } from "./pon-bon-rush";
import { content as rinearRaft } from "./rinear-raft";
import styles from "./index.module.scss";
import { Material } from "content";
import { Footer, Meta } from "parts";
import { formatDisplayDate, formatExceededTime, InternalLink } from "functions";
import materialIconPic from "public/general/material-icon.png";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";

const contents: Material[] = [
  mazeEscape,
  bustersMission,
  ponBonRush,
  mageSimulator,
  marvelous,
  kimifeel,
  eyes,
  rinearRaft
];

const Page = () => (
  <div className={styles.page}>
    <Meta
      pageTitle="Materials"
      pageDescription="『RineaR（りにあ）』は、クリエイター『Rinia（りにあ）』による個人活動の総称です。見える抽象を辿るために、漂うように制作をしています。"
      pagePath="/materials"
      pageImgPath="/img/main.webp"
      pageType="article"
    />

    <header className={styles.header}>
      <Image className={styles.logo} src={materialIconPic} alt="MATERIALS" width={64} height={64} />
      <h1 className={styles.title}>MATERIALS</h1>
    </header>

    <main className={styles.list}>
      {contents.map((content) => (
        <ContentView {...content} key={content.id} />
      ))}
    </main>

    <Footer />
  </div>
);

const ContentView = (content: Material) => (
  <InternalLink href={`/materials/${content.id}`} className={styles.item}>
    <div className={styles.image}>
      <Image src={content.image ?? defaultThumbnailPic} alt={content.title} width={400} height={(400 * 9) / 16} />
    </div>
    <div className={styles.info}>
      <div className={styles.head}>
        <div className={styles.releasedAt}>{formatDisplayDate(content.releasedAt)}</div>
        <div className={styles.title}>{content.title}</div>
      </div>
      <div className={styles.description}>{content.description}</div>
      <div className={styles.updatedAt} suppressHydrationWarning={true}>
        {formatExceededTime(new Date(), content.updatedAt)}
      </div>
    </div>
  </InternalLink>
);

export default Page;
