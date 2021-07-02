import React, { useCallback, useState } from "react";
import dayjs from "dayjs";
import styles from "./index.module.scss";
import ItemContainer from "./Scroller";
import { ContentHead } from "src/lib/contents/head";

export type ScrollViewerTitleParams = {
  title: string;
};
export type ScrollViewerTitle = ({ title }: ScrollViewerTitleParams) => JSX.Element;

export type ScrollViewerDateParams = {
  date: dayjs.Dayjs;
};
export type ScrollViewerDate = ({ date }: ScrollViewerDateParams) => JSX.Element;

export type ScrollViewerButtonParams = {
  onClick: () => void;
  active: boolean;
};
export type ScrollViewerButton = ({ onClick, active }: ScrollViewerButtonParams) => JSX.Element;

export type ScrollViewerParams = {
  items: ContentHead[];
  columns?: number;
  rows?: number;
  activeDisplayPartWidthRate?: number;
  columnGapRate?: number;
  rowGap?: number;
  itemWidthPerHeight?: number;
  TitleText: ScrollViewerTitle;
  DateText: ScrollViewerDate;
  PreviousButton: ScrollViewerButton;
  NextButton: ScrollViewerButton;
};

const ScrollViewer = ({
  items,
  rows = 1,
  activeDisplayPartWidthRate = 0.8,
  columnGapRate = 0.05,
  rowGap = 24,
  itemWidthPerHeight = 1,
  TitleText,
  DateText,
  PreviousButton,
  NextButton
}: ScrollViewerParams): JSX.Element => {
  const [activeColumns, setActiveColumns] = useState(0);
  const [seek, setSeek] = useState(0);

  const getTotalColumns = useCallback(() => Math.ceil(items.length / rows), [items, rows]);
  const updateSeek = (num: number) => {
    const moveAt = Math.max(0, Math.min(getTotalColumns() - 1, num));
    setSeek(moveAt);
  };
  const onPrev = () => updateSeek(seek - 1);
  const onNext = () => updateSeek(seek + 1);

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <ItemContainer
          items={items}
          seek={seek}
          onActiveColumnChanged={setActiveColumns}
          rows={rows}
          activeDisplayPartWidthRate={activeDisplayPartWidthRate}
          columnGapRate={columnGapRate}
          itemWidthPerHeight={itemWidthPerHeight}
          rowGap={rowGap}
          TitleText={TitleText}
          DateText={DateText}
        />
      </div>
      <PreviousButton onClick={onPrev} active={0 < seek} />
      <NextButton onClick={onNext} active={seek < getTotalColumns() - activeColumns} />
    </div>
  );
};

export default ScrollViewer;
