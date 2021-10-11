import React, { useState } from "react";
import { HomeTop } from "./Top";
import styles from "./HomePage.module.scss";
import HomePageHead from "./HomePageHead";
import { Menu } from "./Menu";
import { About } from "./About";
import { LoadingEffect } from "./Loading";
import Footer from "components/parts/Footer";
import { LoadingWaiter } from "components/functions/lazy";
import { assignClasses } from "lib/helper";

const HomePage = (): JSX.Element => {
  const [loadCompleted, setLoadCompleted] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  return (
    <LoadingWaiter onCompleted={() => setLoadCompleted(true)} onProgressUpdated={setLoadProgress}>
      <HomePageHead />
      <LoadingEffect loading={!loadCompleted} progress={loadProgress} />
      {/*<LoadingEffect loading={true} progress={loadProgress} />*/}
      <div className={assignClasses(styles.page, loadCompleted ? styles.loaded : styles.loading)}>
        <HomeTop />
        <About />
        <Menu />
        <Footer />
      </div>
    </LoadingWaiter>
  );
};

export default HomePage;
