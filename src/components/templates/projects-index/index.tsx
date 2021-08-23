import Head from "next/head";
import React from "react";
import styles from "./index.module.scss";
import Top from "./Top";
import Viewer from "./Viewer";
import { getComponentTemplate } from "src/lib/component";
import { ProjectContentHead } from "src/lib/contents";
import Footer from "src/components/accessories/Footer";
import ParallaxBackground from "src/components/accessories/ParallaxBackground";

export type ProjectIndexParams = {
  heads: ProjectContentHead[];
};

const ProjectIndex = getComponentTemplate(({ heads }: ProjectIndexParams) => (
  <div className={styles.page}>
    <Head>
      <title>Projects - RineaR</title>
    </Head>
    <ParallaxBackground className={styles.background} maxSpeed={0.8}>
      <div className={styles.inner}>
        <img className={styles.background} src="/img/top/background.jpg" alt="背景" />
        <img className={styles.holeEffect} src="/img/top/hole_effect.png" alt="背景" />
        <div className={styles.colorMask} />
      </div>
    </ParallaxBackground>
    <Top className={styles.top} />
    <Viewer className={styles.viewer} heads={heads} />
    <Footer className={styles.footer} />
  </div>
));

export default ProjectIndex;
