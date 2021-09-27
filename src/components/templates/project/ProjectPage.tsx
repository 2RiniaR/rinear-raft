import React, { useState } from "react";
import Head from "next/head";
import styles from "./ProjectPage.module.scss";
import { ChapterPoint, ProjectContent } from "lib/contents";
import Footer from "components/parts/Footer";
import Background from "components/parts/Background";
import ProjectTop from "components/templates/project/ProjectTop";
import BackToIndex from "components/parts/BackToIndex";

type Props = {
  content: ProjectContent;
};

const ProjectPage = ({ content }: Props): JSX.Element => {
  const [chapters, setChapters] = useState<ChapterPoint[]>([]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{content.title} - RineaR</title>
      </Head>

      <Background />

      <div className={styles.front}>
        <div className={styles.back}>
          <BackToIndex href={"/projects"} text={"PROJECTS 一覧へ"} />
        </div>
        <div className={styles.top}>
          <ProjectTop content={content} chapters={chapters} />
        </div>
        <div className={styles.body}>
          <content.Page setChapters={setChapters} />
        </div>
        <div className={styles.back}>
          <BackToIndex href={"/projects"} text={"PROJECTS 一覧へ"} />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
