import React from "react";
import styles from "./index.module.scss";
import Element from "./Element";
import { getComponentTemplate } from "src/lib/component";
import { TalkContentHead } from "src/lib/contents";

export type ViewerParams = {
  heads: TalkContentHead[];
};

const Viewer = getComponentTemplate(({ heads }: ViewerParams) => {
  return (
    <div className={styles.container}>
      {heads.map((head) => (
        <Element className={styles.element} key={head.id} head={head} />
      ))}
    </div>
  );
});

export default Viewer;
