import Head from "next/head";
import React from "react";
import styles from "./NotFoundPage.module.scss";
import Background from "components/parts/Background";
import Footer from "components/parts/Footer";
import BackToIndex from "components/parts/BackToIndex";

const NotFoundPage = (): JSX.Element => (
  <div className={styles.container}>
    <Head>
      <title>404 - RineaR</title>
    </Head>

    <Background />

    <div className={styles.front}>
      <div className={styles.back}>
        <BackToIndex href={"/"} text={"HOME へ"} />
      </div>
      <div className={styles.body}>
        <h1 className={styles.title}>404 - Not Found</h1>
        <p className={styles.description}>お探しのページは存在しません。</p>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  </div>
);

export default NotFoundPage;
