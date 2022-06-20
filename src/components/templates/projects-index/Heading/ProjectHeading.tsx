/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import styles from "./ProjectHeading.module.scss";
import Title from "./Title";
import SubThumbnails from "./SubThumbnails";
import { ProjectContentHead } from "lib/contents";
import StaticImage from "components/functions/image/StaticImage";

type Props = {
  head: ProjectContentHead;
};

const ProjectHeading = ({ head }: Props): JSX.Element => (
  <article className={styles.container}>
    <div className={styles.title}>
      <Title head={head} />
    </div>
    <StaticImage src={head.thumbnails[0]} alt={head.title} className={styles.mainThumbnail} />
    <div className={styles.subThumbnails}>
      <SubThumbnails head={head} />
    </div>
  </article>
);

export default ProjectHeading;
