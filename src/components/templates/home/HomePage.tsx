import React from "react";
import { Top } from "./Top";
import styles from "./HomePage.module.scss";
import HomePageHead from "./HomePageHead";
import { Menu } from "./Menu";
import About from "components/templates/home/About";
import Footer from "components/parts/Footer";

const HomePage = (): JSX.Element => (
  <>
    <HomePageHead />
    <div className={styles.page}>
      <Top />
      <About />
      <Menu />
      <Footer />
    </div>
  </>
);

export default HomePage;
