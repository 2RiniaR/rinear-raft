import React from "react";
import styles from "./index.module.scss";
import Top from "./Top";
import About from "./About";
import Contents from "./Contents";
import Contact from "./Contact";
import FarVisionBackground from "src/components/accessories/FarVisionBackground";
import { ProjectContentHead } from "src/lib/contents/projects/head";
import { TalkContentHead } from "src/lib/contents/talks/head";

export type HomePageTemplateParams = {
  talks: TalkContentHead[];
  projects: ProjectContentHead[];
};

export default function HomePageTemplate(): JSX.Element {
  return (
    <div className={styles.page}>
      <FarVisionBackground src="/test3.jpg" />
      <Top />
      <About />
      <Contents />
      <Contact />
    </div>
  );
}
