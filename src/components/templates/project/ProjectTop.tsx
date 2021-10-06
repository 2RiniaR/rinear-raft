import React from "react";
import styles from "./ProjectTop.module.scss";
import ProjectTitle from "./ProjectTitle";
import ProjectAbstract from "./ProjectAbstract";
import { ProjectContent } from "lib/contents";

type Props = {
  content: ProjectContent;
};

const ProjectTop = ({ content }: Props): JSX.Element => (
  <div className={styles.layout}>
    <ProjectTitle content={content} />
    <ProjectAbstract content={content} />
  </div>
);

export default ProjectTop;
