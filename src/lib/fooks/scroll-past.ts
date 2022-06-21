/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { useInView } from "react-intersection-observer";
import { useCallback, useState } from "react";

export default function useScrollPast(): [(node?: Element | null) => void, boolean] {
  const [isBelow, setIsBelow] = useState(false);
  const onChange = useCallback((inView: boolean, entry: IntersectionObserverEntry) => {
    if (entry.boundingClientRect.top < 0) return;
    setIsBelow(inView);
  }, []);

  const [ref] = useInView({ onChange });
  return [ref, isBelow];
}
