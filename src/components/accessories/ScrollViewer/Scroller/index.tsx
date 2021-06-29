import React, { useCallback, useEffect, useRef, useState } from "react";
import { ScrollViewerDate, ScrollViewerTitle } from "..";
import styles from "./index.module.scss";
import Item from "./Item";
import { ContentHead } from "src/lib/contents/head";

export type ScrollerParams = {
  items: ContentHead[];
  rows: number;
  seek: number;
  onActiveColumnChanged: (num: number) => void;
  columnGapRate: number;
  rowGap: number;
  activeDisplayPartWidthRate: number;
  itemWidthPerHeight: number;
  TitleText: ScrollViewerTitle;
  DateText: ScrollViewerDate;
};

const Scroller = ({
  items,
  rows,
  seek,
  onActiveColumnChanged,
  activeDisplayPartWidthRate,
  columnGapRate,
  rowGap,
  itemWidthPerHeight,
  TitleText,
  DateText
}: ScrollerParams): JSX.Element => {
  const [containerWidth, setContainerWidth] = useState(1);
  const [containerHeight, setContainerHeight] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const getTotalColumns = useCallback(() => Math.ceil(items.length / rows), [items, rows]);
  const getGridWidth = useCallback(
    () => getGridHeight() * itemWidthPerHeight,
    [containerHeight, rows, itemWidthPerHeight]
  );
  const getGridHeight = useCallback(() => (containerHeight - rowGap * (rows - 1)) / rows, [containerHeight, rows]);
  const getColumnGap = useCallback(() => containerWidth * columnGapRate, [containerWidth]);

  const getColumns = useCallback(() => {
    const totalWidth = containerWidth * activeDisplayPartWidthRate;
    const gap = getColumnGap();
    const width = getGridWidth();
    return Math.floor((totalWidth - width) / (width + gap) + 1); // totalWidth >= width * x + gap * (x-1) をxについて解く
  }, [containerWidth, containerHeight]);

  const getContentPosition = useCallback(() => {
    const gap = getColumnGap();
    const width = getGridWidth();
    const columns = getColumns();
    const contentWidth = width * columns + gap * (columns - 1);
    const offset = (containerWidth - contentWidth) / 2;
    return -(width * seek + gap * seek) + offset;
  }, [containerWidth, containerHeight, seek]);

  useEffect(() => {
    const onContainerResized = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
      setContainerHeight(entries[0].contentRect.height);
    });
    containerRef.current && onContainerResized.observe(containerRef.current);
    return () => onContainerResized.disconnect();
  }, []);

  useEffect(() => {
    onActiveColumnChanged(getColumns());
  }, [containerWidth, containerHeight]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div
        className={styles.content}
        style={{
          left: getContentPosition(),
          gridTemplateColumns: `repeat(${getTotalColumns()}, ${getGridWidth()}px)`,
          gridTemplateRows: `repeat(${rows}, ${getGridHeight()}px)`,
          gap: `${rowGap}px ${getColumnGap()}px`
        }}
      >
        {items.map((item, index) => (
          <div key={item.getRoute()} className={styles.item}>
            <Item
              item={item}
              active={seek * rows <= index && index < (seek + getColumns()) * rows}
              TitleText={TitleText}
              DateText={DateText}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroller;
