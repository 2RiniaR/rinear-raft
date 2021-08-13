import React, { useState } from "react";
import styles from "./NewsViewer.module.scss";
import NewsTile from "./NewsTile";
import { ContentHead } from "src/lib/contents";
import { getComponentTemplate } from "src/lib/component";
import PreviousButton from "src/components/accessories/ContentsViewer/PreviousButton";
import NextButton from "src/components/accessories/ContentsViewer/NextButton";
import SeekGridViewer, { getTotalColumns } from "src/components/accessories/SeekGridViewer";
import IncrementalSeeker from "src/components/accessories/IncrementalSeeker";

export type NewsViewerParams = {
  news: ContentHead[];
};

const rows = 1;
const columns = 2;

const NewsViewer = getComponentTemplate(({ news }: NewsViewerParams) => {
  const [seek, setSeek] = useState(0);
  const items = news.map(
    (head) =>
      function Item({ active }: { active: boolean }) {
        return <NewsTile className={styles.head} head={head} active={active} />;
      }
  );

  return (
    <IncrementalSeeker
      className={styles.seeker}
      seek={seek}
      setSeek={setSeek}
      PreviousButton={PreviousButton}
      NextButton={NextButton}
      seekStart={0}
      seekEnd={getTotalColumns(news, rows)}
      seekLength={columns}
    >
      <SeekGridViewer
        className={styles.viewer}
        items={items}
        seek={seek}
        columns={columns}
        rows={rows}
        columnGap={48}
        rowGap={0}
        activeDisplayPartWidthRate={0.8}
      />
    </IncrementalSeeker>
  );
});

export default NewsViewer;
