import React from "react";
import styles from "./index.module.scss";
import Top from "./Top";
import Article from "./Article";
import Index from "./EndCard";
import { ContentHead, TalkContent } from "src/lib/contents/";
import Head from "next/head";

export type TalkPageTemplateParams = {
  content: TalkContent;
  suggestions: ContentHead[];
};

const TalkPageTemplate = ({ content, suggestions }: TalkPageTemplateParams): JSX.Element => (
  <div className={styles.page}>
    <Head>
      <title>{content.title} - RineaR</title>
    </Head>
    <Top />
    <Article content={content} />
    <Index suggestions={suggestions} />
  </div>
);

export default TalkPageTemplate;
