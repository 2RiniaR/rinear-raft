import React from "react";
import Head from "next/head";
import styles from "./ProjectPage.module.scss";
import { ProjectContent } from "src/lib/contents";

type Props = {
  content: ProjectContent;
};

const ProjectPage = ({ content }: Props): JSX.Element => (
  <div className={styles.container}>
    <Head>
      <title>{content.title} - RineaR</title>
    </Head>
  </div>
);

export default ProjectPage;
