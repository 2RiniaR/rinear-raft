import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import DateText from "./DateText";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import TitleText from "./TitleText";
import { ContentHead } from "src/lib/contents/head";
import { getElementPosition, getScrollPosition } from "src/lib/helper";
import ScrollViewer from "src/components/accessories/IncrementalSeeker";

type Params = {
  suggestions: ContentHead[];
};

const Index = ({ suggestions }: Params): JSX.Element => {
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
          <ScrollViewer
            items={suggestions}
            DateText={DateText}
            NextButton={NextButton}
            PreviousButton={PreviousButton}
            TitleText={TitleText}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
