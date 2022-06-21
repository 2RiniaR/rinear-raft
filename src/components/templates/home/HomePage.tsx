/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { useState } from "react";
import { Landscape } from "./Landscape";
import styles from "./HomePage.module.scss";
import HomePageHead from "./HomePageHead";
import { Menu } from "./Menu";
import { About } from "./About";
import { LoadingEffect } from "./Loading";
import Darkness from "./Darkness/Darkness";
import { LoadingWaiter } from "components/functions/lazy";
import { assignClasses } from "lib/helper";
import PageTemplate from "components/parts/pages/PageTemplate";
import useScrollPast from "lib/fooks/scroll-past";

const HomePage = (): JSX.Element => {
  const [loadCompleted, setLoadCompleted] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [ref, isBelowOfLandscape] = useScrollPast();

  return (
    <LoadingWaiter onCompleted={() => setLoadCompleted(true)} onProgressUpdated={setLoadProgress}>
      <HomePageHead />
      <LoadingEffect loading={!loadCompleted} progress={loadProgress} />
      <PageTemplate>
        <div className={assignClasses(styles.page, loadCompleted ? styles.loaded : styles.loading)}>
          <Landscape />
          <Darkness enabled={isBelowOfLandscape} />
          <div className={styles.headSpace} />
          <div ref={ref} />
          <About />
          <Menu />
        </div>
      </PageTemplate>
    </LoadingWaiter>
  );
};

export default HomePage;
