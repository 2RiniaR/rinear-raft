import React from "react";
import CatchPhrase from "./CatchPhrase";
import Description from "./Description";
import ResponsiveBackgroundImage from "components/functions/responsive/ResponsiveBackgroundImage";
import backgroundPic from "public/img/note_clipped.webp";
import { useLoading } from "components/functions/lazy";

const About = (): JSX.Element => {
  const onLoadingComplete = useLoading();
  return (
    <ResponsiveBackgroundImage src={backgroundPic} alt="背景" onLoadingComplete={onLoadingComplete} loading={"eager"}>
      <CatchPhrase />
      <Description />
    </ResponsiveBackgroundImage>
  );
};

export default About;
