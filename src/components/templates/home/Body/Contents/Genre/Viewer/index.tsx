import React from "react";
import styles from "./index.module.scss";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import DateText from "./DateText";
import TitleText from "./TitleText";
import { ContentHead } from "src/lib/contents";
import ScrollViewer from "src/components/accessories/ScrollViewer";

export type ViewerParams = {
  heads: ContentHead[];
};

export default function Viewer({ heads }: ViewerParams): JSX.Element {
  return (
    <div className={styles.container}>
      <ScrollViewer
        items={heads}
        rows={2}
        TitleText={TitleText}
        DateText={DateText}
        PreviousButton={PreviousButton}
        NextButton={NextButton}
        rowGap={36}
        activeDisplayPartWidthRate={0.9}
      />
    </div>
  );
}
