import React from "react";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import { ContentHead } from "src/lib/contents";
import ScrollViewer from "src/components/accessories/ScrollViewer";
import { getComponentTemplate } from "src/lib/component";
import getTitleText from "./TitleText";
import getDateText from "./DateText";

export type ViewerParams = {
  heads: ContentHead[];
  primaryTextColor: string;
  secondaryTextColor: string;
};

const Viewer = getComponentTemplate(({ heads, primaryTextColor, secondaryTextColor }: ViewerParams) => (
  <ScrollViewer
    items={heads}
    rows={2}
    TitleText={getTitleText(primaryTextColor)}
    DateText={getDateText(secondaryTextColor)}
    PreviousButton={PreviousButton}
    NextButton={NextButton}
    rowGap={50}
    columnGapRate={0.02}
    itemWidthPerHeight={1.2}
    activeDisplayPartWidthRate={0.9}
  />
));

export default Viewer;
