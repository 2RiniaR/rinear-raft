import React from "react";
import { HomeTop } from "./Top";
import styles from "./HomePage.module.scss";
import HomePageHead from "./HomePageHead";
import { Menu } from "./Menu";
import { About } from "./About";
import Footer from "components/parts/Footer";

const HomePage = (): JSX.Element => (
  <>
    <HomePageHead />
    <div className={styles.page}>
      <HomeTop />
      <About />
      <Menu />
      <Footer />
    </div>
  </>
);

export default HomePage;
