import React from "react";
import Head from "next/head";
import Top from "./Top/Top";
import styles from "./HomePage.module.scss";
import About from "components/templates/home/About";
import ContentsMenu from "components/templates/home/ContentsMenu";
import Footer from "components/parts/Footer";

const HomePage = (): JSX.Element => (
  <div className={styles.page}>
    <Head>
      <title>RineaR</title>
      <meta
        name="Description"
        content="RineaR（りにあー、りにああーる）の公式サイト。RineaRとは、Riniaによる個人活動・個人制作物の総称であり、明確な目標を持ったプロジェクトや、複数メンバーで活動するサークルではない。"
      />
    </Head>

    <div className={styles.top}>
      <Top />
    </div>

    <div className={styles.body}>
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
  </div>
);

export default HomePage;
