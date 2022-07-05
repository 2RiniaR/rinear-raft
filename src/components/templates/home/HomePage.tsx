import React, { useEffect, useRef, useState } from "react";
import { Landscape } from "./Landscape";
import styles from "./HomePage.module.scss";
import { Message } from "./Message";
import { LoadingEffect } from "./Loading";
import { StoryView } from "./Story";
import { Menu } from "./Menu";
import { Intro } from "./Intro";
import { assignClasses } from "utils/dom";
import { Footer } from "components/parts";
import { About, Pickup, Story } from "types";
import { LoadingWaiter } from "components/functions";
import { useScrollPast } from "fooks";

type Props = {
  about: About;
  pickups: Pickup[];
  story: Story;
};

export const HomePage = ({ about, pickups, story }: Props): JSX.Element => {
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
