import React from "react";
import styles from "./ContentImage.module.scss";
import FixedImage from "components/functions/image/FixedImage";

type Props = {
  src: string;
  alt: string;
};

const ContentImage = ({ src, alt }: Props): JSX.Element => (
  <div className={styles.container}>
    <FixedImage src={src} alt={alt} />
  </div>
);

export default ContentImage;
