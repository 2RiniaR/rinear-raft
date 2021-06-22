import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import Item from "./Item";
import { ContentHead } from "src/contents/lib/head";
import { getRoute } from "src/contents/lib/base";

export type ItemContainerParams = {
  suggestions: ContentHead[];
  selecting: number;
  onNumberOfActiveItemChanged: (num: number) => void;
  itemGapWidthRate?: number;
  activeDisplayPartWidthRate?: number;
  itemWidthPerHeight?: number;
};

const ItemContainer = ({
  suggestions,
  selecting,
  onNumberOfActiveItemChanged,
  activeDisplayPartWidthRate = 0.8,
  itemGapWidthRate = 0.05,
  itemWidthPerHeight = 1
}: ItemContainerParams): JSX.Element => {
  const [containerWidth, setContainerWidth] = useState(1);
  const [containerHeight, setContainerHeight] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const getItemWidth = useCallback(() => containerHeight * itemWidthPerHeight, [containerHeight]);
  const getItemGap = useCallback(() => containerWidth * itemGapWidthRate, [containerWidth]);

  const getNumberOfActiveItem = useCallback(() => {
    const totalWidth = containerWidth * activeDisplayPartWidthRate;
    const gap = getItemGap();
    const width = getItemWidth();
    return Math.floor((totalWidth - width) / (width + gap) + 1); // totalWidth >= width * x + gap * (x-1) をxについて解く
  }, [containerWidth, containerHeight]);

  const getContentPosition = useCallback(() => {
    const gap = getItemGap();
    const width = getItemWidth();
    const activeItemCount = getNumberOfActiveItem();
    const contentWidth = width * activeItemCount + gap * (activeItemCount - 1);
    const offset = (containerWidth - contentWidth) / 2;
    return -(width * selecting + gap * selecting) + offset;
  }, [containerWidth, containerHeight, selecting]);

  useEffect(() => {
    const onContainerResized = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
      setContainerHeight(entries[0].contentRect.height);
    });
    containerRef.current && onContainerResized.observe(containerRef.current);
    return () => onContainerResized.disconnect();
  }, []);

  useEffect(() => {
    onNumberOfActiveItemChanged(getNumberOfActiveItem());
  }, [containerWidth, containerHeight]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.content} style={{ left: getContentPosition() }}>
        {suggestions.map((suggestion, index) => (
          <div
            key={getRoute(suggestion)}
            className={styles.item}
            style={{
              width: getItemWidth(),
              marginLeft: index > 0 ? getItemGap() / 2 : 0,
              marginRight: index < suggestions.length - 1 ? getItemGap() / 2 : 0
            }}
          >
            <Item suggestion={suggestion} active={selecting <= index && index < selecting + getNumberOfActiveItem()} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemContainer;
