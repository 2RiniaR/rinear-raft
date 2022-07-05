import React from "react";
import styles from "./ChaptersViewItem.module.scss";
import { ChapterPoint } from "types/content";

type Props = {
  chapter: ChapterPoint;
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
