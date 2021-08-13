import React from "react";
import Head from "next/head";
import Top from "./Top";
import Body from "./Body";
import styles from "./index.module.scss";
import { ContentHead } from "src/lib/contents";

export type HomePageTemplateParams = {
  news: ContentHead[];
};

export default function HomePageTemplate({ news }: HomePageTemplateParams): JSX.Element {
  return (
    <div className={styles.page}>
      <Head>
        <title>RineaR</title>
      </Head>
      <Top className={styles.top} />
      <Body className={styles.body} news={news} />
    </div>
  );
}
