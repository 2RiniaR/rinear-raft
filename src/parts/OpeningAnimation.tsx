import React, { useEffect, useState } from "react";
import styles from "./OpeningAnimation.module.scss";
import { mc } from "functions";

type Props = {
  isPlaying: boolean;
  onComplete: () => void;
};

const OpeningAnimation = ({ isPlaying, onComplete }: Props) => {
  const [display, setDisplay] = useState(false);
  const switchingDuration = 1000; // [ms]
  const stayDuration = 2500; // [ms]

  async function start() {
    setDisplay(true);
    await new Promise((resolve) => setTimeout(resolve, switchingDuration + stayDuration));
    setDisplay(false);
    await new Promise((resolve) => setTimeout(resolve, switchingDuration));
    onComplete();
  }

  async function skip() {
    setDisplay(false);
    await new Promise((resolve) => setTimeout(resolve, switchingDuration));
    onComplete();
  }

  useEffect(() => {
    if (isPlaying) start();
  }, [isPlaying]);

  return (
    <div className={mc(styles.container, display ? styles.display : styles.hidden)}>
      <div className={styles.content}>
        <span className={styles.text}>
          <span className={styles.first}>
            この<span className={styles.strong}>筏</span>は私を、
          </span>
          <span className={styles.last}>どこへ連れてゆくんだろう。</span>
        </span>
        <button onClick={skip} className={styles.skipButton}>
          SKIP
        </button>
      </div>
    </div>
  );
};

export default OpeningAnimation;
