/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { useState } from "react";
import useInterval from "./interval";

type Options = {
  switchingDuration: number;
  displayDuration: number;
};

export default function useContentSwitch<T>(
  items: T[],
  stop = false,
  options: Options = { switchingDuration: 500, displayDuration: 5000 }
): [T, number, boolean] {
  const [contentIndex, setContentIndex] = useState(0);
  const [switching, setSwitching] = useState(false);

  useInterval(async () => {
    if (stop) return;
    setSwitching(true);
    await new Promise((resolve) => setTimeout(resolve, options.switchingDuration));
    setContentIndex((current) => (current + 1) % items.length);
    await new Promise((resolve) => setTimeout(resolve, options.switchingDuration));
    setSwitching(false);
  }, options.displayDuration);

  return [items[contentIndex], contentIndex, switching];
}
