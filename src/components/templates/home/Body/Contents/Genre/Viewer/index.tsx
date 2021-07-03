import React, { useState } from "react";
import styles from "./index.module.scss";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import getDateText from "./DateText";
import getTitleText from "./TitleText";
import getItem from "./Item";
import { ContentHead } from "src/lib/contents";
import { getComponentTemplate } from "src/lib/component";
import IncrementalSeeker from "src/components/accessories/IncrementalSeeker";
import SeekGridViewer, { getTotalColumns } from "src/components/accessories/SeekGridViewer";

export type ViewerParams = {
  heads: ContentHead[];
  primaryTextColor: string;
  secondaryTextColor: string;
};

const columns = 3;
const rows = 2;

const Viewer = getComponentTemplate(({ heads, primaryTextColor, secondaryTextColor }: ViewerParams) => {
  const [seek, setSeek] = useState(0);

  return (
    <IncrementalSeeker
      className={styles.seeker}
      seek={seek}
      setSeek={setSeek}
      PreviousButton={PreviousButton}
      NextButton={NextButton}
      seekStart={0}
      seekEnd={getTotalColumns(heads, rows)}
      seekLength={columns}
    >
      <SeekGridViewer
        className={styles.viewer}
        items={heads.map((head) =>
          getItem({ head, TitleText: getTitleText(primaryTextColor), DateText: getDateText(secondaryTextColor) })
        )}
        seek={seek}
        columns={columns}
        rows={rows}
        columnGap={24}
        rowGap={48}
        activeDisplayPartWidthRate={0.85}
      />
    </IncrementalSeeker>
  );
});

export default Viewer;
