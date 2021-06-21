import React from "react";
import styles from "./index.module.scss";
import Header from "./Header";
import Footer from "./Footer";
import { TalkContent } from "src/contents/lib/talks/body";

export type ArticleParams = {
  content: TalkContent;
};

const Article = ({ content }: ArticleParams): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.background} />
    <div className={styles.content}>
      <div className={styles.topSpace} />
      <div className={styles.header}>
        <Header title={content.title} updatedAt={content.updatedAt} tags={content.tags} />
      </div>
      <div className={styles.body}>{content.page}</div>
      <div className={styles.bottomSpace} />
    </div>
    <div className={styles.footer}>
      <Footer title={content.title} updatedAt={content.updatedAt} />
    </div>
  </div>
);

export default Article;
