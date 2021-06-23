import React from "react";
import styles from "./index.module.scss";
import Top from "./Top";
import About from "./About";
import Contents from "./Contents";
import Contact from "./Contact";
import FarVisionBackground from "src/components/accessories/FarVisionBackground";
import { TalkContentHead, ProjectContentHead } from "src/lib/contents";

export type HomePageTemplateParams = {
  talks: TalkContentHead[];
  projects: ProjectContentHead[];
};

export default function HomePageTemplate({ talks, projects }: HomePageTemplateParams): JSX.Element {
  return (
    <div className={styles.page}>
      <FarVisionBackground src="/test3.jpg" />
      <Top />
      <About />
      <Contents talks={talks} projects={projects} />
      <Contact />
    </div>
  );
}
