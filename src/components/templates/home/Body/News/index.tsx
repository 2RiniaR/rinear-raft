import React from "react";
import styles from "./index.module.scss";
import { ContentHead } from "src/lib/contents";
import { getComponentTemplate } from "src/lib/component";
import NewsViewer from "src/components/templates/home/Body/News/NewsViewer";
import PhantomNode from "src/components/parts/PhantomNode";

export type NewsParams = {
  news: ContentHead[];
};

const News = getComponentTemplate(({ news }: NewsParams) => (
  <div className={styles.container}>
    <PhantomNode className={styles.heading} active={false} layout="inner">
      <h1 className={styles.main}>News</h1>
      <p className={styles.sub}>新着情報</p>
    </PhantomNode>
    <NewsViewer className={styles.viewer} news={news} />
  </div>
));

export default News;
