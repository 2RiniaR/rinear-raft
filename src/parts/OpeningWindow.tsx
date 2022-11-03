import React, { useEffect, useState } from "react";
import styles from "./OpeningWindow.module.scss";
import { mc } from "functions";

type Props = {
  playing: boolean;
  setPlaying: (value: boolean) => void;
};

const OpeningWindow = ({ playing, setPlaying }: Props) => {
  const [display, setDisplay] = useState(false);
  const switchingDuration = 1000; // [ms]
  const stayDuration = 2500; // [ms]

  async function playAnimation() {
    setDisplay(true);
    await new Promise((resolve) => setTimeout(resolve, switchingDuration + stayDuration));
    setDisplay(false);
    await new Promise((resolve) => setTimeout(resolve, switchingDuration));
    setPlaying(false);
  }

  async function skipAnimation() {
    setDisplay(false);
    await new Promise((resolve) => setTimeout(resolve, switchingDuration));
    setPlaying(false);
  }

  useEffect(() => {
    if (!playing) return;
    void playAnimation();
  }, [playing]);

  return (
    <div className={mc(styles.container, display ? styles.display : styles.hidden)}>
      <div className={styles.content}>
        <span className={styles.text}>
          <span className={styles.first}>
            この<span className={styles.strong}>筏</span>は私を、
          </span>
          <span className={styles.last}>どこへ連れてゆくんだろう。</span>
        </span>
        <button onClick={skipAnimation} className={styles.skipButton}>
          SKIP
        </button>
      </div>
    </div>
  );
};

export default OpeningWindow;
