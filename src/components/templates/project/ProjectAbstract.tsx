import React from "react";
import styles from "./ProjectAbstract.module.scss";
import { ProjectContent } from "lib/contents";
import FixedImage from "components/functions/image/FixedImage";

type Props = {
  content: ProjectContent;
};

const ProjectAbstract = ({ content }: Props): JSX.Element => (
  <div className={styles.layout}>
    <p className={styles.description}>{content.description}</p>
    <div className={styles.thumbnails}>
      {content.thumbnailsPath.map((thumbnailPath) => (
        <FixedImage src={thumbnailPath} alt="サブサムネイル" className={styles.thumbnail} key={thumbnailPath.src} />
      ))}
    </div>
  </div>
);

export default ProjectAbstract;
