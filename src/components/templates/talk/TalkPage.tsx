import React from "react";
import Head from "next/head";
import styles from "./TalkPage.module.scss";
import { TalkContent } from "src/lib/contents/";
import Background from "src/components/parts/Background";

type Props = {
  content: TalkContent;
};

const TalkPage = ({ content }: Props): JSX.Element => (
  <div className={styles.page}>
    <Head>
      <title>{content.title} - RineaR</title>
    </Head>
    <Background />
  </div>
);

export default TalkPage;
