import React from "react";
import styles from "./404.module.scss";
import { Meta } from "parts";

const Page = (): JSX.Element => {
  return (
    <>
      <Meta
        pageTitle="Not Found"
        pageDescription="ページが見つかりません。"
        pagePath="/"
        pageImgPath="/img/main.webp"
      />
      <main className={styles.page}>
        <h1 className={styles.title}>404 - Not Found</h1>
        <p className={styles.description}>お探しのページは存在しません。</p>
      </main>
    </>
  );
};

export default Page;
