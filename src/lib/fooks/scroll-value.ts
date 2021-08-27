import { useEffect, useState } from "react";
import { getScrollPosition } from "src/lib/helper";

export default function useScrollValue(): number {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => setScroll(getScrollPosition());
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  }, []);

  return scroll;
}
