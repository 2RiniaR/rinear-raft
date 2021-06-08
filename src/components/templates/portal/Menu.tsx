import React from "react";
import styles from "./Menu.module.scss";
import Title from "src/components/parts/portal/Title";
import TalksButton from "src/components/parts/portal/TalksButton";
import HomeButton from "src/components/parts/portal/HomeButton";
import ProjectsButton from "src/components/parts/portal/ProjectsButton";

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
