import React from "react";
import styles from "./ChaptersViewItem.module.scss";
import { Chapter } from "models/content";

type Props = {
  chapter: Chapter;
};

export const ChaptersViewItem = ({ chapter }: Props): JSX.Element => {
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
