import React from "react";
import styles from "./index.module.scss";
import { Content } from "src/contents";

const ProjectPage = (content: Content): JSX.Element => (
  <div className={styles.page}>
    <div className={styles.background} />
    <div className={styles.container}>{content.page}</div>
  </div>
);

export default ProjectPage;
