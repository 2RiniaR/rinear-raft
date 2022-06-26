/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import styles from "./ScenarioHeading.module.scss";
import Title from "./Title";
import SubThumbnails from "./SubThumbnails";
import { ScenarioContentHead } from "lib/contents";
import StaticImage from "components/functions/image/StaticImage";

type Props = {
  head: ScenarioContentHead;
};

const ScenarioHeading = ({ head }: Props): JSX.Element => (
  <article className={styles.container}>
    <StaticImage src={head.thumbnails[0]} alt={head.title} className={styles.mainThumbnail} layout="responsive" />
    <div className={styles.subThumbnails}>
      <SubThumbnails head={head} />
    </div>
    <div className={styles.title}>
      <Title head={head} />
    </div>
  </article>
);

export default ScenarioHeading;
