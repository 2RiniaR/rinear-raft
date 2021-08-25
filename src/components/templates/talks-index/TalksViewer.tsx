import React from "react";
import styles from "./TalksViewer.module.scss";
import Element from "./TalkHeading";
import { getComponentTemplate } from "src/lib/component";
import { TalkContentHead } from "src/lib/contents";

export type TalksViewerParams = {
  heads: TalkContentHead[];
};

const TalksViewer = getComponentTemplate(({ heads }: TalksViewerParams) => {
  return (
    <div className={styles.container}>
      {heads.map((head) => (
        <Element className={styles.element} key={head.id} head={head} />
      ))}
    </div>
  );
});

export default TalksViewer;
