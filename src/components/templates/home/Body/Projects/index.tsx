import React from "react";
import Viewer from "../Viewer";
import styles from "./index.module.scss";
import { ProjectContentHead } from "src/lib/contents";
import { getComponentTemplate } from "src/lib/component";

export type ProjectsParams = {
  heads: ProjectContentHead[];
};

const Projects = getComponentTemplate(({ heads }: ProjectsParams) => (
  <div className={styles.container}>
    <div className={styles.background}>
      <div className={styles.title}>PROJECTS</div>
    </div>
    <Viewer
      className={styles.viewer}
      heads={heads}
      primaryTextColor={"#16162c"}
      secondaryTextColor={"#808080"}
      backgroundColor={"#f1f1ff"}
    />
  </div>
));

export default Projects;
