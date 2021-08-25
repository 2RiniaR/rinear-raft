import React from "react";
import styles from "./ProjectsViewer.module.scss";
import Element from "./ProjectHeading";
import { getComponentTemplate } from "src/lib/component";
import { ProjectContentHead } from "src/lib/contents";

export type ProjectsViewerParams = {
  heads: ProjectContentHead[];
};

const ProjectsViewer = getComponentTemplate(({ heads }: ProjectsViewerParams) => {
  return (
    <div className={styles.container}>
      {heads.map((head) => (
        <Element className={styles.element} key={head.id} head={head} />
      ))}
    </div>
  );
});

export default ProjectsViewer;
