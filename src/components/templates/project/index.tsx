import React from "react";
import styles from "./index.module.scss";
import { ProjectContent } from "src/contents/lib/projects/body";
import { ContentHead } from "src/contents/lib/head";

export type ProjectPageTemplateParams = {
  content: ProjectContent;
  suggestions: ContentHead[];
};

const ProjectPageTemplate = ({ content, suggestions }: ProjectPageTemplateParams): JSX.Element => (
  <div className={styles.page}>
    <div className={styles.background} />
    <div className={styles.container}>{content.page}</div>
  </div>
);

export default ProjectPageTemplate;
