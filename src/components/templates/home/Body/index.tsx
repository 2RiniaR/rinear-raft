import React from "react";
import styles from "./index.module.scss";
import About from "./About";
import Talks from "./Talks";
import Projects from "./Projects";
import { TalkContentHead, ProjectContentHead } from "src/lib/contents";
import { getComponentTemplate } from "src/lib/component";
import Footer from "src/components/accessories/Footer";

export type BodyParams = {
  talks: TalkContentHead[];
  projects: ProjectContentHead[];
};

const Body = getComponentTemplate(({ talks, projects }: BodyParams) => (
  <div className={styles.container}>
    <About className={styles.about} />
    <Projects className={styles.projects} heads={projects} />
    <Talks className={styles.talks} heads={talks} />
    <Footer className={styles.footer} />
  </div>
));

export default Body;
