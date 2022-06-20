/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { ReactNode } from "react";
import styles from "./PageTemplate.module.scss";
import Footer from "components/parts/Footer";

type Props = {
  children?: ReactNode;
};

const PageTemplate = ({ children }: Props): JSX.Element => (
  <div className={styles.page}>
    {children}
    <Footer />
  </div>
);

export default PageTemplate;
