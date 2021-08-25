import React from "react";
import Head from "next/head";
import Top from "./Top";
import styles from "./HomePage.module.scss";
import About from "src/components/templates/home/About";
import ContentsMenu from "src/components/templates/home/ContentsMenu";
import Footer from "src/components/parts/Footer";
import { getComponentTemplate } from "src/lib/component";

const HomePage = getComponentTemplate(() => (
  <div className={styles.page}>
    <Head>
      <title>RineaR</title>
    </Head>
    <Top className={styles.top} />
    <About className={styles.about} />
    <ContentsMenu className={styles.menu} />
    <Footer className={styles.footer} />
  </div>
));

export default HomePage;
