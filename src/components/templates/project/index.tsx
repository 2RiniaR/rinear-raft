import React from "react";
import styles from "./index.module.scss";
import { ContentHead, ProjectContent } from "src/lib/contents";

export type ProjectPageTemplateParams = {
  content: ProjectContent;
  suggestions: ContentHead[];
};

const ProjectPageTemplate = ({ content }: ProjectPageTemplateParams): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.background} />
    <div className={styles.content}>{content.page}</div>
  </div>
);

export default ProjectPageTemplate;
