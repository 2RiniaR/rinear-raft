import React from "react";
import styles from "./LetterIndexPage.module.scss";
import LettersViewer from "./LettersViewer";
import { LetterContentHead } from "lib/contents";
import Footer from "components/parts/Footer";
import Background from "components/parts/Background";
import GenreHeader from "components/parts/GenreHeader";
import lettersPic from "public/img/letters.png";
import BackButton from "components/templates/layout/BackButton";

type Props = {
  heads: LetterContentHead[];
};

const LetterIndexPage = ({ heads }: Props): JSX.Element => (
  <Background>
    <div className={styles.page}>
      <BackButton href={"/"} />
      <GenreHeader logoSrc={lettersPic} title="LETTERS" />
      <LettersViewer heads={heads} />
      <Footer />
    </div>
  </Background>
);

export default LetterIndexPage;
