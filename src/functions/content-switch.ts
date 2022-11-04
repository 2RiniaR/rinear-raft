import { useState } from "react";
import { useInterval } from "./interval";

type Options = {
  switchingDuration: number;
  displayDuration: number;
};

export function useContentSwitch<T>(
  items: T[],
  options: Options = { switchingDuration: 500, displayDuration: 5000 }
): [T, number, boolean, (isPlaying: boolean) => void] {
  const [isPlaying, setPlaying] = useState(true);
  const [contentIndex, setContentIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);

  useInterval(async () => {
    if (!isPlaying) return;
    setIsSwitching(true);
    await new Promise((resolve) => setTimeout(resolve, options.switchingDuration));
    setContentIndex((current) => (current + 1) % items.length);
    await new Promise((resolve) => setTimeout(resolve, options.switchingDuration));
    setIsSwitching(false);
  }, options.displayDuration);

  return [items[contentIndex], contentIndex, isSwitching, setPlaying];
}
