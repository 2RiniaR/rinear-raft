/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import styles from "./ChaptersViewItem.module.scss";
import { ChapterPoint } from "lib/contents";

type Props = {
  chapter: ChapterPoint;
};

const ChaptersViewItem = ({ chapter }: Props): JSX.Element => {
  function scroll() {
    chapter.ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <a className={styles.item} role="link" tabIndex={0} onClick={scroll}>
      {chapter.name}
    </a>
  );
};

export default ChaptersViewItem;
