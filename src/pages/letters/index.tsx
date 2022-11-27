import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";
import { letters } from "letters";
import { formatExceededTime } from "functions";
import { Footer, Meta, SideMenu } from "parts";
import { Letter } from "index";
import letterIconPic from "public/general/letter-icon.png";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";
import backgroundPic from "public/general/letters-background.png";

const Page = () => (
  <div className={styles.page}>
    <Meta
      pageTitle="LETTERS"
      pageDescription="「Rinia」と名付けた一個人と、その観察により見つけた解釈「RineaR」。ただ抽象が漂うこの情景は、どこに行きつくんだろう。"
      pagePath="/letters"
      pageImgPath="/general/main.png"
      pageType="article"
    />

    <Image src={backgroundPic} className={styles.background} alt="" />
    <SideMenu />

    <header className={styles.header}>
      <Image className={styles.logo} src={letterIconPic} width={100} alt="LETTERS" />
      <h1 className={styles.title}>LETTERS</h1>
      <p className={styles.description}>解釈と発想のノート</p>
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
  <Link href={`/letters/${content.id}`} className={styles.item}>
    <Image className={styles.icon} src={letterIconPic} alt="" width={150} />
    <Image className={styles.image} src={content.image ?? defaultThumbnailPic} alt={content.title} width={300} />
    <div className={styles.info}>
      <div className={styles.title}>{content.title}</div>
      <div className={styles.description}>{content.description}</div>
      <div className={styles.updatedAt} suppressHydrationWarning={true}>
        {formatExceededTime(new Date(), content.updatedAt)}
      </div>
    </div>
  </Link>
);

export default Page;
