import React from "react";
import Head from "next/head";
import Top from "./Top/Top";
import styles from "./HomePage.module.scss";
import About from "src/components/templates/home/About";
import ContentsMenu from "src/components/templates/home/ContentsMenu";
import Footer from "src/components/parts/Footer";

const HomePage = (): JSX.Element => (
  <div className={styles.page}>
    <Head>
      <title>RineaR</title>
    </Head>

    <div className={styles.top}>
      <Top />
    </div>

    <div className={styles.about}>
      <About />
    </div>

    <div className={styles.menu}>
      <ContentsMenu />
    </div>

    <div className={styles.footer}>
      <Footer />
    </div>
  </div>
);

export default HomePage;
