import React from "react";
import styles from "./ChaptersView.module.scss";
import { ChaptersViewItem } from "./ChaptersViewItem";
import { ChapterPoint } from "types/content";

type Props = {
  chapters: ChapterPoint[];
};

export const ChaptersView = ({ chapters }: Props): JSX.Element => (
  <div className={styles.layout}>
    <h2 className={styles.title}>- CHAPTERS -</h2>
    <div className={styles.chapters}>
      {chapters.map((chapter) => (
        <ChaptersViewItem chapter={chapter} key={chapter.name} />
      ))}
    </div>
  </div>
);
