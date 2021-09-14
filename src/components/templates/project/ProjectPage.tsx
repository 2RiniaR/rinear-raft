import React from "react";
import Head from "next/head";
import styles from "./ProjectPage.module.scss";
import { ProjectContent } from "lib/contents";
import Footer from "components/parts/Footer";
import Background from "components/parts/Background";
import ProjectTop from "components/templates/project/ProjectTop";

type Props = {
  content: ProjectContent;
};

const ProjectPage = ({ content }: Props): JSX.Element => (
  <div className={styles.container}>
    <Head>
      <title>{content.title} - RineaR</title>
    </Head>

    <Background />

    <div className={styles.front}>
      <div className={styles.top}>
        <ProjectTop content={content} />
      </div>
      <div className={styles.body}>{/*<content.Page setChapters={} />*/}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  </div>
);

export default ProjectPage;
