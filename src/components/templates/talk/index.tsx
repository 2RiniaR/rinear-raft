import React from "react";
import styles from "./index.module.scss";
import TopImage from "./TopImage";
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
    <Background />
    <Article content={content} />
    <EndCard suggestions={suggestions} />
  </div>
);

export default TalkPageTemplate;
