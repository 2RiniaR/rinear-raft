import React from "react";
import Viewer from "../Viewer";
import styles from "./index.module.scss";
import { TalkContentHead } from "src/lib/contents";
import { getComponentTemplate } from "src/lib/component";

export type TalksParams = {
  heads: TalkContentHead[];
};

const Talks = getComponentTemplate(({ heads }: TalksParams) => (
  <div className={styles.container}>
    <div className={styles.background}>
      <div className={styles.title}>TALKS</div>
    </div>
    <Viewer
      className={styles.viewer}
      heads={heads}
      primaryTextColor={"#babadf"}
      secondaryTextColor={"#808080"}
      backgroundColor={"#353540"}
    />
  </div>
));

export default Talks;
