import React, { useState } from "react";
import styles from "./index.module.scss";
import ItemContainer from "./ItemContainer";
import { ContentHead } from "src/lib/contents/head";
import ScrollButton from "src/components/accessories/ScrollItemViewer/ScrollButton";

export type ScrollItemViewerParams = {
  suggestions: ContentHead[];
};

const ScrollItemViewer = ({ suggestions }: ScrollItemViewerParams): JSX.Element => {
  const [activeItems, setActiveItems] = useState(0);
  const [selecting, setSelecting] = useState(0);

  const updateItem = (num: number) => {
    const moveAt = Math.max(0, Math.min(suggestions.length - 1, num));
    setSelecting(moveAt);
  };

  const onPrev = () => updateItem(selecting - 1);
  const onNext = () => updateItem(selecting + 1);

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <ItemContainer suggestions={suggestions} selecting={selecting} onNumberOfActiveItemChanged={setActiveItems} />
      </div>
      <div className={`${styles.button} ${styles.prev}`}>
        <div className={styles.inner}>
          <ScrollButton onClick={onPrev} active={0 < selecting} />
        </div>
      </div>
      <div className={`${styles.button} ${styles.next}`}>
        <div className={styles.inner}>
          <ScrollButton onClick={onNext} active={selecting < suggestions.length - activeItems} />
        </div>
      </div>
    </div>
  );
};

export default ScrollItemViewer;
