/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { createContext, useRef, useState } from "react";
import Footer from "../../parts/Footer";
import { Story } from "../../../lib/story";
import { Landscape } from "./Landscape";
import styles from "./HomePage.module.scss";
import AboutView from "./AboutView";
import { LoadingEffect } from "./Loading";
import Darkness from "./Darkness";
import ScrollIndicator from "./ScrollIndicator";
import StoryView from "./Story/StoryView";
import { Menu } from "./Menu";
import { LoadingWaiter } from "components/functions/loading";
import { assignClasses } from "lib/helper";
import useScrollPast from "components/fooks/scroll-past";
import { Pickup } from "lib/contents/pickup";
import { About } from "lib/about";

type Props = {
  about: About;
  pickups: Pickup[];
  story: Story;
};

export const PickupsContext = createContext<Pickup[]>([]);

const HomePage = ({ about, pickups, story }: Props): JSX.Element => {
  const [loadCompleted, setLoadCompleted] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const landscapeEndRef = useRef<HTMLDivElement>(null);
  const isBelowOfLandscape = useScrollPast(landscapeEndRef);

  const topEndRef = useRef<HTMLDivElement>(null);
  const isScrollFromTop = useScrollPast(topEndRef);

  return (
    <PickupsContext.Provider value={pickups}>
      <LoadingWaiter onCompleted={() => setLoadCompleted(true)} onProgressUpdated={setLoadProgress}>
        <LoadingEffect loading={!loadCompleted} progress={loadProgress} />
        <div className={assignClasses(styles.page, loadCompleted ? styles.loaded : styles.loading)}>
          <Landscape />
          <Menu active={!isScrollFromTop && loadCompleted} />
          <Darkness enabled={isBelowOfLandscape} />
          <ScrollIndicator enabled={!isScrollFromTop} />
          <div className={styles.headSpace} />
          <div ref={topEndRef} style={{ position: "absolute", top: "120vh" }} />
          <div ref={landscapeEndRef} />
          <AboutView about={about} />
          <h1 className={styles.storyHeader}>STORY</h1>
          <StoryView story={story} />
          <Footer />
        </div>
      </LoadingWaiter>
    </PickupsContext.Provider>
  );
};

export default HomePage;
