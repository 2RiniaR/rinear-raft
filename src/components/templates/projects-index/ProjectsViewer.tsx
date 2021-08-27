import React from "react";
import Link from "next/link";
import styles from "./ProjectsViewer.module.scss";
import ProjectHeading from "./ProjectHeading";
import { getContentPath, ProjectContentHead } from "src/lib/contents";

type Props = {
  heads: ProjectContentHead[];
};

const ProjectsViewer = ({ heads }: Props): JSX.Element => (
  <div className={styles.container}>
    {heads.map((head) => (
      <div className={styles.element} key={head.id}>
        <Link href={getContentPath(head)}>
          <a className={styles.link}>
            <ProjectHeading head={head} />
          </a>
        </Link>
      </div>
    ))}
  </div>
);

export default ProjectsViewer;
