/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import CatchPhrase from "./CatchPhrase";
import Description from "./Description";
import BackEffect from "./BackEffect";
import styles from "./About.module.scss";
import backgroundPic from "public/img/note_clipped.webp";
import { useLoading } from "components/functions/lazy";
import ResponsiveBackgroundImage from "components/functions/responsive/ResponsiveBackgroundImage";

const About = (): JSX.Element => {
  const onLoadingComplete = useLoading();
  return (
    <div className={styles.background}>
      <BackEffect />
      <ResponsiveBackgroundImage src={backgroundPic} alt="" onLoadingComplete={onLoadingComplete} loading={"eager"}>
        <CatchPhrase />
        <Description />
      </ResponsiveBackgroundImage>
    </div>
  );
};

export default About;
