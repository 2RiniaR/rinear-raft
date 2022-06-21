/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { useState } from "react";
import Footer from "../../parts/Footer";
import { Landscape } from "./Landscape";
import styles from "./HomePage.module.scss";
import HomePageHead from "./HomePageHead";
import { About } from "./About";
import { LoadingEffect } from "./Loading";
import Darkness from "./Darkness/Darkness";
import ScrollIndicator from "./ScrollIndicator";
import { LoadingWaiter } from "components/functions/lazy";
import { assignClasses } from "lib/helper";
import useScrollPast from "lib/fooks/scroll-past";

const HomePage = (): JSX.Element => {
  const [loadCompleted, setLoadCompleted] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [landscapeEndSensor, isBelowOfLandscape] = useScrollPast();
  const [topSensor, isScrollFromTop] = useScrollPast();

  return (
    <LoadingWaiter onCompleted={() => setLoadCompleted(true)} onProgressUpdated={setLoadProgress}>
      <HomePageHead />
      <LoadingEffect loading={!loadCompleted} progress={loadProgress} />
      <div className={assignClasses(styles.page, loadCompleted ? styles.loaded : styles.loading)}>
        <Landscape menuActive={!isScrollFromTop && loadCompleted} />
        <Darkness enabled={isBelowOfLandscape} />
        <ScrollIndicator enabled={!isScrollFromTop} />
        <div className={styles.headSpace} />
        <div ref={topSensor} style={{ position: "absolute", top: "150vh" }} />
        <div ref={landscapeEndSensor} />
        <About />
        <div className={styles.headSpace} />
        <Footer />
      </div>
    </LoadingWaiter>
  );
};

export default HomePage;
