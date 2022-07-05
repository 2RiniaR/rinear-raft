import React from "react";
import styles from "./LetterIndexPage.module.scss";
import { LettersViewer } from "./LettersViewer";
import { LetterContentHead } from "types/content";
import { Background, Footer, GenreHeader } from "components/parts";
import letterIconPic from "public/general/letter-icon.png";
import { BackButton } from "components/templates";

type Props = {
  heads: LetterContentHead[];
};

export const LetterIndexPage = ({ heads }: Props): JSX.Element => (
  <Background>
    <div className={styles.page}>
      <BackButton href={"/"} />
      <GenreHeader logoSrc={letterIconPic} title="LETTERS" />
      <LettersViewer heads={heads} />
      <Footer />
    </div>
  </Background>
);
