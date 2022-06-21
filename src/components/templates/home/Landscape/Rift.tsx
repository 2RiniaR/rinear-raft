/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import styles from "./Rift.module.scss";
import { assignClasses } from "lib/helper";
import LazyStaticImage from "components/functions/lazy/LazyStaticImage";
import logoBack from "public/img/LogoBack.webp";
import sample from "public/contents/scenarios/popcorn-chef/game1.webp";

type Props = {
  active: boolean;
};

const Rift = ({ active }: Props): JSX.Element => (
  <div className={assignClasses(styles.container, !active ? styles.hidden : "")}>
    <LazyStaticImage className={styles.logoBack} src={logoBack} alt="" layout="responsive" />
    <LazyStaticImage className={styles.masked} src={sample} />
  </div>
);

export default Rift;
