import React from "react";
import styles from "./index.module.scss";
import TopImage from "./TopImage";
import Header from "./Header";
import Footer from "./Footer";
import TalkContent from "./TalkContent";
import { Content } from "src/contents";

const TalkPage = (content: Content): JSX.Element => (
  <div className={styles.page}>
    <TopImage />
    <div className={styles.main}>
      <div className={styles.background} />
      <div className={styles.container}>
        <Header />
        <TalkContent />
        <Footer />
      </div>
    </div>
  </div>
);

export default TalkPage;
