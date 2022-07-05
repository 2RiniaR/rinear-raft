import React, { ReactNode } from "react";
import styles from "./ContentPage.module.scss";
import { Background, Footer } from "components/parts";

type Props = {
  children?: ReactNode;
};

export const ContentPage = ({ children }: Props): JSX.Element => (
  <Background>
    <div className={styles.page}>
      <div className={styles.displayArea}>{children}</div>
    </div>
    <Footer />
  </Background>
);
