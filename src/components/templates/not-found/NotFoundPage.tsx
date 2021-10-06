import React from "react";
import styles from "./NotFoundPage.module.scss";
import NotFoundPageHead from "./NotFoundPageHead";
import ContentPageTemplate from "components/parts/pages/ContentPageTemplate";

const NotFoundPage = (): JSX.Element => (
  <>
    <NotFoundPageHead />
    <ContentPageTemplate>
      <main className={styles.body}>
        <h1 className={styles.title}>404 - Not Found</h1>
        <p className={styles.description}>お探しのページは存在しません。</p>
      </main>
    </ContentPageTemplate>
  </>
);

export default NotFoundPage;
