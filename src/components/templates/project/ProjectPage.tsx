import React from "react";
import Head from "next/head";
import styles from "./ProjectPage.module.scss";
import { ProjectContent } from "src/lib/contents";
import Footer from "src/components/parts/Footer";
import Background from "src/components/parts/Background";
import ProjectTop from "src/components/templates/project/ProjectTop";

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
      <div className={styles.body}>
        <content.Page />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  </div>
);

export default ProjectPage;
