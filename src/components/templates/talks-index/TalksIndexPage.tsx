import Head from "next/head";
import React from "react";
import styles from "./TalksIndexPage.module.scss";
import Viewer from "./TalksViewer";
import { TalkContentHead } from "src/lib/contents";
import Footer from "src/components/parts/Footer";
import Background from "src/components/parts/Background";
import GenreHeader from "src/components/parts/GenreHeader";

type Props = {
  heads: TalkContentHead[];
};

const TalksIndexPage = ({ heads }: Props): JSX.Element => (
  <div className={styles.page}>
    <Head>
      <title>Talks - RineaR</title>
    </Head>
    <Background />

    <div className={styles.top}>
      <GenreHeader logoSrc="/img/talks.png" name="TALKS" />
    </div>

    <div className={styles.viewer}>
      <Viewer heads={heads} />
    </div>

    <div className={styles.footer}>
      <Footer />
    </div>
  </div>
);

export default TalksIndexPage;
