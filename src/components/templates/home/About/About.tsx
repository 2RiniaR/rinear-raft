import React from "react";
import CatchPhrase from "./CatchPhrase";
import Description from "./Description";
import ResponsiveBackgroundImage from "components/functions/responsive/ResponsiveBackgroundImage";
import backgroundPic from "public/img/note_clipped.png";

const About = (): JSX.Element => (
  <ResponsiveBackgroundImage src={backgroundPic} alt="背景">
    <CatchPhrase />
    <Description />
  </ResponsiveBackgroundImage>
);

export default About;
