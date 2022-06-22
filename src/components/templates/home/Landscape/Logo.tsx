/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import styles from "./Logo.module.scss";
import { assignClasses } from "lib/helper";
import LazyStaticImage from "components/functions/lazy/LazyStaticImage";
import logo1 from "public/img/logo1.webp";
import logo2 from "public/img/logo2.webp";

type Props = {
  active: boolean;
};

const Logo = ({ active }: Props): JSX.Element => (
  <div className={assignClasses(styles.container, !active ? styles.hidden : "")}>
    <LazyStaticImage className={styles.logo1} src={logo1} alt="" layout="responsive" />
    <LazyStaticImage className={styles.logo2} src={logo2} alt="" layout="responsive" />
  </div>
);

export default Logo;
