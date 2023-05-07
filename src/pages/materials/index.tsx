import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { InferGetStaticPropsType } from "next";
import { client } from "../../libs/microcms/client";
import { MaterialContent } from "../../libs/microcms/types";
import {
  convertToNextImageProps,
  formatDisplayDateFromString,
  formatExceededTimeFromString
} from "../../libs/microcms/helpers";
import styles from "./index.module.scss";
import { mc } from "functions";
import { Footer, Meta, SideMenu } from "parts";
import materialIconPic from "public/general/material-icon.png";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";
import backgroundPic from "public/general/materials-background.jpg";

const Page = ({ contents }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div className={styles.page}>
    <Meta
      pageTitle="MATERIALS"
      pageDescription="「Rinia」と名付けた一個人と、その観察により見つけた解釈「RineaR」。ただ抽象が漂うこの情景は、どこに行きつくんだろう。"
      pagePath="/materials"
      pageImgPath="/general/main.png"
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
      {contents.map((content) => (
        <ContentView {...content} key={content.id} />
      ))}
    </main>

    <Footer />
  </div>
);

const ContentView = (content: MaterialContent & MicroCMSContentId & MicroCMSDate) => (
  <Link
    href={`/materials/${content.id}`}
    className={mc(styles.item, content.attributes.includes("important") ? styles.important : "")}
  >
    <Image className={styles.icon} src={materialIconPic} alt="" width={150} />
    <Image
      className={styles.image}
      {...convertToNextImageProps(content.thumbnail, 400, defaultThumbnailPic)}
      alt={content.title}
    />
    <div className={styles.info}>
      <div className={styles.head}>
        <div className={styles.releasedAt}>{formatDisplayDateFromString(content.releasedAt)}</div>
        <div className={styles.title}>{content.title}</div>
      </div>
      <div className={styles.description}>{content.description}</div>
      <div className={styles.updatedAt} suppressHydrationWarning={true}>
        {formatExceededTimeFromString(content.revisedAt)}
      </div>
    </div>
  </Link>
);

export const getStaticProps = async () => {
  const data = await client.getList<MaterialContent>({
    endpoint: "materials",
    queries: {
      limit: 20
    }
  });

  return {
    props: {
      contents: data.contents
    }
  };
};

export default Page;
