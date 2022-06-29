/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { ReactNode } from "react";
import styles from "./ContentPage.module.scss";
import Background from "components/parts/Background";
import Footer from "components/parts/Footer";

type Props = {
  children?: ReactNode;
};

const ContentPage = ({ children }: Props): JSX.Element => (
  <Background>
    <div className={styles.page}>
      <div className={styles.displayArea}>{children}</div>
    </div>
    <Footer />
  </Background>
);

export default ContentPage;
