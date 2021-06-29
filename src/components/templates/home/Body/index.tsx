import React from "react";
import Contents from "./Contents";
import styles from "./index.module.scss";
import About from "./About";
import { TalkContentHead, ProjectContentHead } from "src/lib/contents";

export type BodyParams = {
  talks: TalkContentHead[];
  projects: ProjectContentHead[];
};

export default function Body({ talks, projects }: BodyParams): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <Contents talks={talks} projects={projects} />
      </div>
      <div className={styles.about}>
        <About />
      </div>
    </div>
  );
}
