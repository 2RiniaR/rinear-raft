import Head from "next/head";
import React from "react";
import styles from "./ProjectsIndexPage.module.scss";
import Viewer from "./ProjectsViewer";
import { ProjectContentHead } from "src/lib/contents";
import Footer from "src/components/parts/Footer";
import Background from "src/components/parts/Background";
import GenreHeader from "src/components/parts/GenreHeader";

type Props = {
  heads: ProjectContentHead[];
};

const ProjectIndexPage = ({ heads }: Props): JSX.Element => (
  <div className={styles.page}>
    <Head>
      <title>Projects - RineaR</title>
    </Head>
    <Background />

    <div className={styles.top}>
      <GenreHeader logoSrc="/img/projects.png" name="PROJECTS" />
    </div>

    <div className={styles.viewer}>
      <Viewer heads={heads} />
    </div>

    <div className={styles.footer}>
      <Footer />
    </div>
  </div>
);

export default ProjectIndexPage;
