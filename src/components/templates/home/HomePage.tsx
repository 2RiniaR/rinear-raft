import React, { useState } from "react";
import { HomeTop } from "./Top";
import styles from "./HomePage.module.scss";
import HomePageHead from "./HomePageHead";
import { Menu } from "./Menu";
import { About } from "./About";
import { LoadingEffect } from "./Loading";
import Footer from "components/parts/Footer";
import { LoadingWaiter } from "components/functions/lazy";

const HomePage = (): JSX.Element => {
  const [loadCompleted, setLoadCompleted] = useState(false);

  return (
    <LoadingWaiter onCompleted={() => setLoadCompleted(true)}>
      <LoadingEffect loading={!loadCompleted} />
      <HomePageHead />
      <div className={styles.page}>
        <HomeTop />
        <About />
        <Menu />
        <Footer />
      </div>
    </LoadingWaiter>
  );
};

export default HomePage;
