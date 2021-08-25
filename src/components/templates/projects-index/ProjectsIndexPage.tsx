import Head from "next/head";
import React from "react";
import styles from "./ProjectsIndexPage.module.scss";
import Viewer from "./ProjectsViewer";
import { getComponentTemplate } from "src/lib/component";
import { ProjectContentHead } from "src/lib/contents";
import Footer from "src/components/parts/Footer";
import Background from "src/components/parts/Background";
import GenreHeader from "src/components/parts/GenreHeader";

export type ProjectIndexPageParams = {
  heads: ProjectContentHead[];
};

const ProjectIndexPage = getComponentTemplate(({ heads }: ProjectIndexPageParams) => (
  <div className={styles.page}>
    <Head>
      <title>Projects - RineaR</title>
    </Head>
    <Background />
    <GenreHeader className={styles.top} logoSrc="/img/projects.png" name="PROJECTS" />
    <Viewer className={styles.viewer} heads={heads} />
    <Footer className={styles.footer} />
  </div>
));

export default ProjectIndexPage;
