/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import styles from "./ScenarioIndexPage.module.scss";
import Viewer from "./ScenariosViewer";
import { ScenarioContentHead } from "lib/contents";
import Footer from "components/parts/Footer";
import Background from "components/parts/Background";
import GenreHeader from "components/parts/GenreHeader";
import scenariosPic from "public/img/scenarios.png";
import BackButton from "components/templates/layout/BackButton";

type Props = {
  heads: ScenarioContentHead[];
};

const ScenarioIndexPage = ({ heads }: Props): JSX.Element => (
  <Background>
    <div className={styles.page}>
      <BackButton href={"/"} />
      <GenreHeader logoSrc={scenariosPic} title="SCENARIOS" />
      <Viewer heads={heads} />
      <Footer />
    </div>
  </Background>
);

export default ScenarioIndexPage;
