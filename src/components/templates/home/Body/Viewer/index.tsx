import React, { useState } from "react";
import styles from "./index.module.scss";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import { ContentHead } from "src/lib/contents";
import { getComponentTemplate } from "src/lib/component";
import IncrementalSeeker from "src/components/accessories/IncrementalSeeker";
import SeekGridViewer, { getTotalColumns } from "src/components/accessories/SeekGridViewer";
import HeadWithThumbnail from "src/components/parts/HeadWithThumbnail";

export type ViewerParams = {
  heads: ContentHead[];
  primaryTextColor: string;
  secondaryTextColor: string;
  backgroundColor: string;
};

const columns = 4;
const rows = 1;

const Viewer = getComponentTemplate(
  ({ heads, primaryTextColor, secondaryTextColor, backgroundColor }: ViewerParams) => {
    const [seek, setSeek] = useState(0);
    const items = heads.map(
      (head) =>
        function Item({ active }: { active: boolean }) {
          return (
            <HeadWithThumbnail
              className={styles.head}
              head={head}
              titleTextColor={primaryTextColor}
              dateTextColor={secondaryTextColor}
              backgroundColor={backgroundColor}
              active={active}
              hover={true}
            />
          );
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
        seekEnd={getTotalColumns(heads, rows)}
        seekLength={columns}
      >
        <SeekGridViewer
          className={styles.viewer}
          items={items}
          seek={seek}
          columns={columns}
          rows={rows}
          columnGap={16}
          rowGap={16}
          activeDisplayPartWidthRate={0.85}
        />
      </IncrementalSeeker>
    );
  }
);

export default Viewer;
