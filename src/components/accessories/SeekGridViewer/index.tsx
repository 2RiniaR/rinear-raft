import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.scss";
import { ClassedParams, getComponentTemplate } from "src/lib/component";

export type SeekGridViewerItemParams = {
  active: boolean;
};
export type SeekGridViewerItem = React.FC<ClassedParams<SeekGridViewerItemParams>>;

export type SeekGridViewerParams = {
  items: SeekGridViewerItem[];
  seek: number;
  columns?: number;
  rows?: number;
  columnGap?: number;
  rowGap?: number;
  activeDisplayPartWidthRate?: number;
};

export function getTotalColumns<T>(items: Array<T>, rows: number): number {
  return Math.ceil(items.length / rows);
}

const SeekGridViewer = getComponentTemplate(
  ({
    items,
    seek,
    columns = 1,
    rows = 1,
    columnGap = 0,
    rowGap = 0,
    activeDisplayPartWidthRate = 1
  }: SeekGridViewerParams): JSX.Element => {
    const [containerWidth, setContainerWidth] = useState(1);
    const [contentHeight, setContentHeight] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const totalColumns = useMemo(() => getTotalColumns(items, rows), [items, rows]);
    const gridWidth = useMemo(
      () => (containerWidth * activeDisplayPartWidthRate - columnGap * (columns - 1)) / columns,
      // [activeDisplayPartWidthRate, columns]
      [containerWidth, activeDisplayPartWidthRate, columns]
    );

    const getContentPosition = () => {
      const contentWidth = containerWidth * activeDisplayPartWidthRate;
      const offset = (containerWidth - contentWidth) / 2;
      return -(gridWidth * seek + columnGap * seek) + offset;
    };

    useEffect(() => {
      const onContainerResized = new ResizeObserver((entries) => {
        setContainerWidth(entries[0].contentRect.width);
      });
      containerRef.current && onContainerResized.observe(containerRef.current);
      return () => onContainerResized.disconnect();
    }, []);

    useEffect(() => {
      const onContentResized = new ResizeObserver((entries) => {
        setContentHeight(entries[0].contentRect.height);
      });
      contentRef.current && onContentResized.observe(contentRef.current);
      return () => onContentResized.disconnect();
    }, []);

    useEffect(() => console.log(containerWidth), [containerWidth]);

    return (
      <div ref={containerRef} className={styles.container}>
        <div
          ref={contentRef}
          className={styles.content}
          style={{
            left: getContentPosition(),
            gridTemplateColumns: `repeat(${totalColumns}, ${gridWidth}px)`,
            gridTemplateRows: `repeat(${rows}, auto)`,
            gap: `${rowGap}px ${columnGap}px`
          }}
        >
          {items.map((Item, index) => (
            <Item
              key={index}
              className={styles.item}
              active={seek * rows <= index && index < (seek + columns) * rows}
            />
          ))}
        </div>
        <div className={styles.fill} style={{ height: contentHeight }} />
      </div>
    );
  }
);

export default SeekGridViewer;
