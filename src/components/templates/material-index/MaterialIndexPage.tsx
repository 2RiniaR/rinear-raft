import React from "react";
import styles from "./MaterialIndexPage.module.scss";
import { MaterialsViewer } from "./MaterialsViewer";
import materialIconPic from "public/general/material-icon.png";
import { MaterialContentHead } from "types/content";
import { Background, Footer, GenreHeader } from "components/parts";
import { BackButton } from "components/templates";

type Props = {
  heads: MaterialContentHead[];
};

export const MaterialIndexPage = ({ heads }: Props): JSX.Element => (
  <Background>
    <div className={styles.page}>
      <BackButton href={"/"} />
      <GenreHeader logoSrc={materialIconPic} title="MATERIALS" />
      <MaterialsViewer heads={heads} />
      <Footer />
    </div>
  </Background>
);
