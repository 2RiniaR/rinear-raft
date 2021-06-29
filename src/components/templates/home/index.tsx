import React from "react";
import Head from "next/head";
import Top from "./Top";
import Body from "./Body";
import styles from "./index.module.scss";
import { TalkContentHead, ProjectContentHead } from "src/lib/contents";

export type HomePageTemplateParams = {
  talks: TalkContentHead[];
  projects: ProjectContentHead[];
};

export default function HomePageTemplate({ talks, projects }: HomePageTemplateParams): JSX.Element {
  return (
    <div className={styles.page}>
      <Head>
        <title>RineaR</title>
        <link rel="stylesheet" href="https://use.typekit.net/swm7wqw.css" />
      </Head>
      <div className={styles.top}>
        <Top />
      </div>
      <div className={styles.body}>
        <Body talks={talks} projects={projects} />
      </div>
    </div>
  );
}
