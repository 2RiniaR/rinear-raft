import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { materials } from "materials";
import { formatDisplayDate, formatExceededTime, InternalLink, mc } from "functions";
import { Material } from "index";
import { Footer, Meta, SideMenu } from "parts";
import materialIconPic from "public/general/material-icon.png";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";
import backgroundPic from "public/general/materials-background.jpg";

const Page = () => (
  <div className={styles.page}>
    <Meta
      pageTitle="MATERIALS"
      pageDescription="「Rinia」と名付けた一個人と、その観察により見つけた解釈「RineaR」。ただ抽象が漂うこの情景は、どこに行きつくんだろう。"
      pagePath="/materials"
      pageImgPath="/general/main.webp"
      pageType="article"
    />

    <Image src={backgroundPic} className={styles.background} alt="" />
    <SideMenu />

    <header className={styles.header}>
      <Image className={styles.logo} src={materialIconPic} width={100} alt="MATERIALS" />
      <h1 className={styles.title}>MATERIALS</h1>
      <p className={styles.description}>作品と記録のギャラリー</p>
    </header>

    <main className={styles.list}>
      {Object.keys(materials)
        .reverse()
        .map((id) => (
          <ContentView {...materials[id]} id={id} key={id} />
        ))}
    </main>

    <Footer />
  </div>
);

const ContentView = (content: Material & { id: string }) => (
  <InternalLink
    href={`/materials/${content.id}`}
    className={mc(styles.item, content.id === "made-highlow" ? styles.important : "")}
  >
    <Image className={styles.icon} src={materialIconPic} alt="" width={150} />
    <Image className={styles.image} src={content.image ?? defaultThumbnailPic} alt={content.title} width={400} />
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
