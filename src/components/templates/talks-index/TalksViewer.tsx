import React from "react";
import styles from "./TalksViewer.module.scss";
import Element from "./TalkHeading";

import { TalkContentHead } from "src/lib/contents";

type Props = {
  heads: TalkContentHead[];
};

const TalksViewer = ({ heads }: Props): JSX.Element => (
  <div className={styles.container}>
    {heads.map((head) => (
      <div className={styles.element} key={head.id}>
        <Element head={head} />
      </div>
    ))}
  </div>
);

export default TalksViewer;
