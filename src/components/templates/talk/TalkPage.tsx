import React, { useState } from "react";
import Head from "next/head";
import styles from "./TalkPage.module.scss";
import TalkTop from "./TalkTop";
import BackToIndex from "components/parts/BackToIndex";
import { ChapterPoint, TalkContent } from "lib/contents";
import Footer from "components/parts/Footer";
import Background from "components/parts/Background";

type Props = {
  content: TalkContent;
};

const TalkPage = ({ content }: Props): JSX.Element => {
  const [chapters, setChapters] = useState<ChapterPoint[]>([]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{content.title} - RineaR</title>
      </Head>

      <Background />

      <div className={styles.front}>
        <div className={styles.back}>
          <BackToIndex href={"/talks"} text={"TALKS 一覧へ"} />
        </div>
        <div className={styles.top}>
          <TalkTop content={content} chapters={chapters} />
        </div>
        <div className={styles.body}>
          <content.Page setChapters={setChapters} />
        </div>
        <div className={styles.back}>
          <BackToIndex href={"/talks"} text={"TALKS 一覧へ"} />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TalkPage;
