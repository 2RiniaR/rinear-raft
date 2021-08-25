import Head from "next/head";
import React from "react";
import styles from "./TalksIndexPage.module.scss";
import Viewer from "./TalksViewer";
import { getComponentTemplate } from "src/lib/component";
import { TalkContentHead } from "src/lib/contents";
import Footer from "src/components/parts/Footer";
import Background from "src/components/parts/Background";
import GenreHeader from "src/components/parts/GenreHeader";

export type TalksIndexPageParams = {
  heads: TalkContentHead[];
};

const TalksIndexPage = getComponentTemplate(({ heads }: TalksIndexPageParams) => (
  <div className={styles.page}>
    <Head>
      <title>Talks - RineaR</title>
    </Head>
    <Background />
    <GenreHeader className={styles.top} logoSrc="/img/talks.png" name="TALKS" />
    <Viewer className={styles.viewer} heads={heads} />
    <Footer className={styles.footer} />
  </div>
));

export default TalksIndexPage;
