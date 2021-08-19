import React from "react";
import Head from "next/head";
import Top from "./Top";
import styles from "./index.module.scss";
import About from "src/components/templates/home/About";
import Menu from "src/components/templates/home/Menu";
import Footer from "src/components/accessories/Footer";

export default function HomePageTemplate(): JSX.Element {
  return (
    <div className={styles.page}>
      <Head>
        <title>RineaR</title>
      </Head>
      <Top className={styles.top} />
      <About className={styles.about} />
      <Menu className={styles.menu} />
      <Footer className={styles.footer} />
    </div>
  );
}
