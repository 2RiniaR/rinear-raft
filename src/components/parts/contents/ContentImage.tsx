/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import { StaticImageData } from "next/image";
import StaticImage from "../../functions/StaticImage";
import styles from "./ContentImage.module.scss";

type Props = {
  src: StaticImageData;
  alt: string;
};

const ContentImage = ({ src, alt }: Props): JSX.Element => (
  <StaticImage className={styles.container} src={src} alt={alt} />
);

export default ContentImage;
