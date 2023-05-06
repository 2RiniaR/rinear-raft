import React from "react";
import Image from "next/image";
import Link from "next/link";
import { InferGetStaticPropsType } from "next";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { client } from "../../libs/microcms/client";
import { LetterContent } from "../../libs/microcms/types";
import { convertToNextImageProps, formatExceededTimeFromString } from "../../libs/microcms/helpers";
import styles from "./index.module.scss";
import { Footer, Meta, SideMenu } from "parts";
import letterIconPic from "public/general/letter-icon.png";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";
import backgroundPic from "public/general/letters-background.png";

const Page = ({ contents }: InferGetStaticPropsType<typeof getStaticProps>) => (
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
      {contents.map((content) => (
        <ContentView {...content} key={content.id} />
      ))}
    </main>

    <Footer />
  </div>
);

const ContentView = (content: LetterContent & MicroCMSContentId & MicroCMSDate) => (
  <Link href={`/letters/${content.id}`} className={styles.item}>
    <Image className={styles.icon} src={letterIconPic} alt="" width={150} />
    <Image
      className={styles.image}
      {...convertToNextImageProps(content.thumbnail, 300, defaultThumbnailPic)}
      alt={content.title}
    />
    <div className={styles.info}>
      <div className={styles.title}>{content.title}</div>
      <div className={styles.description}>{content.description}</div>
      <div className={styles.updatedAt} suppressHydrationWarning={true}>
        {formatExceededTimeFromString(content.revisedAt)}
      </div>
    </div>
  </Link>
);

export const getStaticProps = async () => {
  const data = await client.getList<LetterContent>({ endpoint: "letters" });

  return {
    props: {
      contents: data.contents
    }
  };
};

export default Page;
