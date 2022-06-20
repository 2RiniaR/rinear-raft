/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { ReactNode } from "react";
import styles from "./ContentPageTemplate.module.scss";
import Background from "components/parts/Background";
import Footer from "components/parts/Footer";

type Props = {
  children?: ReactNode;
};

const ContentPageTemplate = ({ children }: Props): JSX.Element => (
  <Background>
    <div className={styles.page}>
      <div className={styles.displayArea}>{children}</div>
      <Footer />
    </div>
  </Background>
);

export default ContentPageTemplate;
