import React from "react";
import styles from "./LetterIndexPage.module.scss";
import { LettersViewer } from "./LettersViewer";
import { Letter, WithoutPage } from "models/content";
import { Background, Footer, GenreHeader } from "components/parts";
import letterIconPic from "public/general/letter-icon.png";
import { BackButton } from "components/templates";
import { sortWithDatetime } from "utils/datetime";

type Props = {
  letters: WithoutPage<Letter>[];
};

export const LetterIndexPage = ({ letters }: Props): JSX.Element => (
  <Background>
    <div className={styles.page}>
      <BackButton href={"/"} />
      <GenreHeader logoSrc={letterIconPic} title="LETTERS" />
      <LettersViewer letters={sortWithDatetime(letters, (letters) => letters.updatedAt)} />
      <Footer />
    </div>
  </Background>
);
