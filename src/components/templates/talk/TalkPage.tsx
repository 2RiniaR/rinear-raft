import React from "react";
import Head from "next/head";
import styles from "./TalkPage.module.scss";
import TalkTop from "./TalkTop";
import { TalkContent } from "src/lib/contents";
import Footer from "src/components/parts/Footer";
import Background from "src/components/parts/Background";

type Props = {
  content: TalkContent;
};

const TalkPage = ({ content }: Props): JSX.Element => (
  <div className={styles.container}>
    <Head>
      <title>{content.title} - RineaR</title>
    </Head>

    <Background />

    <div className={styles.front}>
      <div className={styles.top}>
        <TalkTop content={content} />
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

export default TalkPage;
