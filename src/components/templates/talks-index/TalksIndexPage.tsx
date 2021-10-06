import React from "react";
import styles from "./TalksIndexPage.module.scss";
import Viewer from "./TalksViewer";
import TalksIndexPageHead from "./TalkIndexPageHead";
import { TalkContentHead } from "lib/contents";
import Footer from "components/parts/Footer";
import Background from "components/parts/Background";
import GenreHeader from "components/parts/GenreHeader";
import talksPic from "public/img/talks.png";

type Props = {
  heads: TalkContentHead[];
};

const TalksIndexPage = ({ heads }: Props): JSX.Element => (
  <>
    <TalksIndexPageHead />
    <Background>
      <div className={styles.page}>
        <GenreHeader logoSrc={talksPic} title="TALKS" />
        <Viewer heads={heads} />
        <Footer />
      </div>
    </Background>
  </>
);

export default TalksIndexPage;
