import Head from "next/head";
import React from "react";
import styles from "./index.module.scss";
import Top from "./Top";
import Viewer from "./Viewer";
import { getComponentTemplate } from "src/lib/component";
import { ProjectContentHead } from "src/lib/contents";
import Footer from "src/components/accessories/Footer";

export type ProjectsIndexParams = {
  heads: ProjectContentHead[];
};

const ProjectsIndex = getComponentTemplate(({ heads }: ProjectsIndexParams) => (
  <div className={styles.page}>
    <Head>
      <title>Projects - RineaR</title>
    </Head>
    <Top className={styles.top} />
    <Viewer className={styles.viewer} heads={heads} />
    <Footer className={styles.footer} />
  </div>
));

export default ProjectsIndex;
