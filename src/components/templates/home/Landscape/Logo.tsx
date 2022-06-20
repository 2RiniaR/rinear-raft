/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import styles from "./Logo.module.scss";
import LazyStaticImage from "components/functions/lazy/LazyStaticImage";
import logoBackPic from "public/img/HomeTopLogo.png";

const Logo = (): JSX.Element => (
  <>
    <LazyStaticImage className={styles.background} src={logoBackPic} alt="" layout="responsive" />
  </>
);

export default Logo;
