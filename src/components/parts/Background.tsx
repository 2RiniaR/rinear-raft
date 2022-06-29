/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { ReactNode } from "react";
import styles from "./Background.module.scss";
import backgroundPic from "public/img/RineaR-back.webp";
import StaticImage from "components/functions/StaticImage";

type Props = {
  children?: ReactNode;
};

const Background = ({ children }: Props): JSX.Element => (
  <div className={styles.container}>
    <StaticImage className={styles.back} src={backgroundPic} alt={"background"} layout={"responsive"} />
    <div className={styles.front}>{children}</div>
  </div>
);

export default Background;
