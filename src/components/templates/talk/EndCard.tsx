import React, { useEffect, useRef, useState } from "react";
import styles from "./EndCard.module.scss";
import ScrollItemViewer from "src/components/accessories/ScrollItemViewer";
import { getElementPosition, getScrollPosition } from "src/lib/helper";
import { ContentHead } from "src/contents/lib/head";

type Params = {
  suggestions: ContentHead[];
};

const EndCard = ({ suggestions }: Params): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  const updateVisible = (): void => {
    if (!frameRef.current) return;
    const element = frameRef.current;
    const position = getElementPosition(element).y;
    const scroll = getScrollPosition();
    const offset = -window.innerHeight / 2;
    if (scroll > position + offset) setVisible(true);
  };

  const onScroll = (): void => {
    updateVisible();
  };

  useEffect(() => {
    updateVisible();
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  });

  return (
    <div ref={frameRef} className={`${styles.frame} ${visible ? styles.visible : ""}`}>
      <div className={styles.background} />
      <div className={styles.content}>
        <div className={styles.message}>
          <h1 className={styles.text}>Thanks for reading!</h1>
        </div>
        <div className={styles.suggestions}>
          <ScrollItemViewer suggestions={suggestions} />
        </div>
      </div>
    </div>
  );
};

export default EndCard;
