import React from "react";
import styles from "./NotFoundPage.module.scss";
import { ContentPage } from "components/templates";

export const NotFoundPage = (): JSX.Element => (
  <ContentPage>
    <main className={styles.body}>
      <h1 className={styles.title}>404 - Not Found</h1>
      <p className={styles.description}>お探しのページは存在しません。</p>
    </main>
  </ContentPage>
);
