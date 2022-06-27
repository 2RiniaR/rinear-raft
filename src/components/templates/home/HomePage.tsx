/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { createContext, useRef, useState } from "react";
import Footer from "../../parts/Footer";
import { Story } from "../../../lib/story";
import { Landscape } from "./Landscape";
import styles from "./HomePage.module.scss";
import HomePageHead from "./HomePageHead";
import { About } from "./About";
import { LoadingEffect } from "./Loading";
import Darkness from "./Darkness";
import ScrollIndicator from "./ScrollIndicator";
import StoryView from "./Story/StoryView";
import { LoadingWaiter } from "components/functions/lazy";
import { assignClasses } from "lib/helper";
import useScrollPast from "lib/fooks/scroll-past";
import { Pickup } from "lib/contents/pickup";

type Props = {
  pickups: Pickup[];
  story: Story;
};

export const PickupsContext = createContext<Pickup[]>([]);

const HomePage = ({ pickups, story }: Props): JSX.Element => {
  const [loadCompleted, setLoadCompleted] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const landscapeEndRef = useRef<HTMLDivElement>(null);
  const isBelowOfLandscape = useScrollPast(landscapeEndRef);

  const topEndRef = useRef<HTMLDivElement>(null);
  const isScrollFromTop = useScrollPast(topEndRef);

  return (
    <PickupsContext.Provider value={pickups}>
      <LoadingWaiter onCompleted={() => setLoadCompleted(true)} onProgressUpdated={setLoadProgress}>
        <HomePageHead />
        <LoadingEffect loading={!loadCompleted} progress={loadProgress} />
        <div className={assignClasses(styles.page, loadCompleted ? styles.loaded : styles.loading)}>
          <Landscape menuActive={!isScrollFromTop && loadCompleted} />
          <Darkness enabled={isBelowOfLandscape} />
          <ScrollIndicator enabled={!isScrollFromTop} />
          <div className={styles.headSpace} />
          <div ref={topEndRef} style={{ position: "absolute", top: "120vh" }} />
          <div ref={landscapeEndRef} />
          <About />
          <div className={styles.separator} />
          <StoryView story={story} />
          <Footer />
        </div>
      </LoadingWaiter>
    </PickupsContext.Provider>
  );
};

export default HomePage;
