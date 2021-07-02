import React from "react";
import Contents from "./Contents";
import styles from "./index.module.scss";
import About from "./About";
import CatchPhrase from "./CatchPhrase";
import { TalkContentHead, ProjectContentHead } from "src/lib/contents";
import { getComponentTemplate } from "src/lib/component";

export type BodyParams = {
  talks: TalkContentHead[];
  projects: ProjectContentHead[];
};

const Body = getComponentTemplate(({ talks, projects }: BodyParams) => (
  <div className={styles.container}>
    <CatchPhrase className={styles.spacer} />
    <Contents className={styles.contents} talks={talks} projects={projects} />
    <About className={styles.about} />
  </div>
));

export default Body;
