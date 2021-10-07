import React from "react";
import styles from "./ProjectsIndexPage.module.scss";
import Viewer from "./ProjectsViewer";
import ProjectsIndexPageHead from "./ProjectsIndexPageHead";
import { ProjectContentHead } from "lib/contents";
import Footer from "components/parts/Footer";
import Background from "components/parts/Background";
import GenreHeader from "components/parts/GenreHeader";
import talksPic from "public/img/projects.png";
import BackButton from "components/templates/layout/BackButton";

type Props = {
  heads: ProjectContentHead[];
};

const ProjectIndexPage = ({ heads }: Props): JSX.Element => (
  <>
    <ProjectsIndexPageHead />
    <Background>
      <div className={styles.page}>
        <BackButton href={"/"} />
        <GenreHeader logoSrc={talksPic} title="PROJECTS" />
        <Viewer heads={heads} />
        <Footer />
      </div>
    </Background>
  </>
);

export default ProjectIndexPage;
