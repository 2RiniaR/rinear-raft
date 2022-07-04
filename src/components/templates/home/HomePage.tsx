/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { useEffect, useRef, useState } from "react";
import Footer from "../../parts/Footer";
import { Story } from "../../../lib/story";
import { Landscape } from "./Landscape";
import styles from "./HomePage.module.scss";
import Message from "./Message/Message";
import { LoadingEffect } from "./Loading";
import StoryView from "./Story/StoryView";
import { Menu } from "./Menu";
import Intro from "./Intro/Intro";
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

const HomePage = ({ about, pickups, story }: Props): JSX.Element => {
  const [loadCompleted, setLoadCompleted] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [playingIntro, setPlayingIntro] = useState(false);

  const landscapeEndRef = useRef<HTMLDivElement>(null);
  const isBelowOfLandscape = useScrollPast(landscapeEndRef);

  useEffect(() => {
    if (!loadCompleted) return;
    setPlayingIntro(true);
  }, [loadCompleted]);

  return (
    <LoadingWaiter onCompleted={() => setLoadCompleted(true)} onProgressUpdated={setLoadProgress}>
      <LoadingEffect loading={!loadCompleted} progress={loadProgress} />
      <Intro playing={playingIntro} setPlaying={setPlayingIntro} />
      <div className={assignClasses(styles.page, loadCompleted ? styles.loaded : styles.loading)}>
        <Landscape enableDarkness={isBelowOfLandscape} />
        <Menu pickups={pickups} />
        <div className={styles.headSpace} />
        <div ref={landscapeEndRef} />
        <Message about={about} />
        <StoryView story={story} />
        <Footer />
      </div>
    </LoadingWaiter>
  );
};

export default HomePage;
