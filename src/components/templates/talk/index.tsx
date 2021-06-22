import React from "react";
import styles from "./index.module.scss";
import TopImage from "./TopImage";
import Article from "./Article";
import EndCard from "./EndCard";
import { TalkContent } from "src/lib/contents/talks/body";
import { ContentHead } from "src/lib/contents/head";
import FarVisionBackground from "src/components/accessories/FarVisionBackground";

export type TalkPageTemplateParams = {
  content: TalkContent;
  suggestions: ContentHead[];
};

const TalkPageTemplate = ({ content, suggestions }: TalkPageTemplateParams): JSX.Element => (
  <div className={styles.page}>
    <TopImage />
    <FarVisionBackground src="/test2.jpg" />
    <Article content={content} />
    <EndCard suggestions={suggestions} />
  </div>
);

export default TalkPageTemplate;
