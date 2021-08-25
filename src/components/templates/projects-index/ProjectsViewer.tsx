import React from "react";
import styles from "./ProjectsViewer.module.scss";
import Element from "./ProjectHeading";
import { ProjectContentHead } from "src/lib/contents";

type Props = {
  heads: ProjectContentHead[];
};

const ProjectsViewer = ({ heads }: Props): JSX.Element => (
  <div className={styles.container}>
    {heads.map((head) => (
      <div className={styles.element} key={head.id}>
        <Element head={head} />
      </div>
    ))}
  </div>
);

export default ProjectsViewer;
