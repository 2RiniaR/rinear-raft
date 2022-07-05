import React from "react";
import styles from "./MaterialIndexPage.module.scss";
import { MaterialsViewer } from "./MaterialsViewer";
import { sortWithDatetime } from "utils/datetime";
import materialIconPic from "public/general/material-icon.png";
import { Material, WithoutPage } from "models/content";
import { Background, Footer, GenreHeader } from "components/parts";
import { BackButton } from "components/templates";

type Props = {
  materials: WithoutPage<Material>[];
};

export const MaterialIndexPage = ({ materials }: Props): JSX.Element => (
  <Background>
    <div className={styles.page}>
      <BackButton href={"/"} />
      <GenreHeader logoSrc={materialIconPic} title="MATERIALS" />
      <MaterialsViewer materials={sortWithDatetime(materials, (material) => material.releasedAt ?? new Date())} />
      <Footer />
    </div>
  </Background>
);
