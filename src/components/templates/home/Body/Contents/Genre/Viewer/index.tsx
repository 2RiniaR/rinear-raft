import React from "react";
import styles from "./index.module.scss";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import DateText from "./DateText";
import TitleText from "./TitleText";
import { ContentHead } from "src/lib/contents";
import ScrollViewer from "src/components/accessories/ScrollViewer";
import { getComponentTemplate } from "src/lib/component";

export type ViewerParams = {
  heads: ContentHead[];
};

const Viewer = getComponentTemplate(({ heads }: ViewerParams) => (
  <ScrollViewer
    items={heads}
    rows={2}
    TitleText={TitleText}
    DateText={DateText}
    PreviousButton={PreviousButton}
    NextButton={NextButton}
    rowGap={50}
    columnGapRate={0.02}
    itemWidthPerHeight={1.2}
    activeDisplayPartWidthRate={0.9}
  />
));

export default Viewer;
