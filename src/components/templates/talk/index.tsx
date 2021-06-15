import React from "react";
import styles from "./index.module.scss";
import TopImage from "./TopImage";
import Header from "./Header";
import Footer from "./Footer";
import Article from "./Article";
import Background from "./Background";
import EndCard from "src/components/templates/talk/EndCard";
import { TalkContent } from "src/contents/lib/talks/body";
import { ContentHead } from "src/contents/lib/head";

export type TalkPageTemplateParams = {
  content: TalkContent;
  suggestions: ContentHead[];
};

const TalkPageTemplate = ({ content, suggestions }: TalkPageTemplateParams): JSX.Element => (
  <div className={styles.page}>
    <TopImage />
    <div className={styles.main}>
      <Background />
      <div className={styles.container}>
        <div className={styles.header}>
          <Header title={content.title} updatedAt={content.updatedAt} tags={content.tags} />
        </div>
        <div className={styles.talkContent}>
          <Article>{content.page}</Article>
        </div>
        <EndCard suggestions={suggestions} />
        <div className={styles.footer}>
          <Footer title={content.title} updatedAt={content.updatedAt} />
        </div>
      </div>
    </div>
  </div>
);

export default TalkPageTemplate;
