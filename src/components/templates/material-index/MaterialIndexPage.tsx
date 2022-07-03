/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import styles from "./MaterialIndexPage.module.scss";
import Viewer from "./MaterialsViewer";
import materialsPic from "public/img/materials.png";
import { MaterialContentHead } from "lib/contents";
import Footer from "components/parts/Footer";
import Background from "components/parts/Background";
import GenreHeader from "components/parts/GenreHeader";
import BackButton from "components/templates/layout/BackButton";

type Props = {
  heads: MaterialContentHead[];
};

const MaterialIndexPage = ({ heads }: Props): JSX.Element => (
  <Background>
    <div className={styles.page}>
      <BackButton href={"/"} />
      <GenreHeader logoSrc={materialsPic} title="MATERIALS" />
      <Viewer heads={heads} />
      <Footer />
    </div>
  </Background>
);

export default MaterialIndexPage;
