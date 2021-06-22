import React from "react";
import styles from "./index.module.scss";
import { TalkContentHead } from "src/contents/lib/talks/head";
import { ProjectContentHead } from "src/contents/lib/projects/head";
import FarVisionBackground from "src/components/accessories/FarVisionBackground";

export type HomePageTemplateParams = {
  talks: TalkContentHead[];
  projects: ProjectContentHead[];
};

export default function HomePageTemplate(): JSX.Element {
  return (
    <div className={styles.page}>
      <FarVisionBackground src="/test3.jpg" />
    </div>
  );
}
