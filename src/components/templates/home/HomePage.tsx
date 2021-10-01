import React from "react";
import Top from "./Top/Top";
import styles from "./HomePage.module.scss";
import HomePageHead from "./HomePageHead";
import About from "components/templates/home/About";
import ContentsMenu from "components/templates/home/ContentsMenu";
import Footer from "components/parts/Footer";

const HomePage = (): JSX.Element => (
  <>
    <HomePageHead />
    <div className={styles.page}>
      <Top />
      <About />
      <ContentsMenu />
      <Footer />
    </div>
  </>
);

export default HomePage;
