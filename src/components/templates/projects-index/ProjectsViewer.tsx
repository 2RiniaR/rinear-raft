import React from "react";
import Link from "next/link";
import styles from "./ProjectsViewer.module.scss";
import ProjectHeading from "./ProjectHeading";
import { getContentPath, ProjectContentHead } from "lib/contents";

type Props = {
  heads: ProjectContentHead[];
};

const ProjectsViewer = ({ heads }: Props): JSX.Element => (
  <div className={styles.container}>
    {heads.map((head) => (
      <Link href={getContentPath(head)} key={head.id}>
        <a className={styles.element}>
          <ProjectHeading head={head} />
        </a>
      </Link>
    ))}
  </div>
);

export default ProjectsViewer;
