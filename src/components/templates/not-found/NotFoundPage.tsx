/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import styles from "./NotFoundPage.module.scss";
import NotFoundPageHead from "./NotFoundPageHead";
import ContentPage from "components/templates/ContentPage";

const NotFoundPage = (): JSX.Element => (
  <>
    <NotFoundPageHead />
    <ContentPage>
      <main className={styles.body}>
        <h1 className={styles.title}>404 - Not Found</h1>
        <p className={styles.description}>お探しのページは存在しません。</p>
      </main>
    </ContentPage>
  </>
);

export default NotFoundPage;
