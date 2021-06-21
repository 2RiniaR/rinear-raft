import React from "react";
import styles from "./index.module.scss";
import Title from "./Title";
import TalksButton from "./Buttons/TalksButton";
import HomeButton from "./Buttons/HomeButton";
import ProjectsButton from "./Buttons/ProjectsButton";

const Menu = (): JSX.Element => (
  <div className={styles.menu}>
    <div className={styles.title}>
      <Title text="Menu" />
    </div>
    <div className={styles.content}>
      <TalksButton />
      <HomeButton />
      <ProjectsButton />
    </div>
  </div>
);

export default Menu;
