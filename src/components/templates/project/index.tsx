import React from "react";
import Head from "next/head";
import styles from "./index.module.scss";
import Article from "./Article";
import Background from "./Background";
import { ContentHead, ProjectContent } from "src/lib/contents";

export type ProjectPageTemplateParams = {
  content: ProjectContent;
  suggestions: ContentHead[];
};

const ProjectPageTemplate = ({ content }: ProjectPageTemplateParams): JSX.Element => (
  <div className={styles.container}>
    <Head>
      <title>{content.title} - RineaR</title>
    </Head>
    <Background className={styles.background} />
    <Article className={styles.article} content={content} />
  </div>
);

export default ProjectPageTemplate;
