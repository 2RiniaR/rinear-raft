/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./ContentImage.module.scss";

type Props = {
  src: StaticImageData;
  alt: string;
};

const ContentImage = ({ src, alt }: Props): JSX.Element => (
  <div className={styles.container}>
    <Image src={src} alt={alt} layout="responsive" width={src.width} height={src.height} sizes="100%" />
  </div>
);

export default ContentImage;
