/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import styles from "./Video.module.scss";

type Props = {
  src: string;
  title?: string;
};

const Video = ({ src, title }: Props): JSX.Element => (
  <div className={styles.aspectKeeper}>
    <iframe
      className={styles.frame}
      src={src}
      title={title !== undefined ? title : "YouTube video player"}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default Video;
