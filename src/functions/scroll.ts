import { RefObject, useEffect, useState } from "react";

function getScrollPosition(): number {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
}

export function useScrollValue(): number {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => setScroll(getScrollPosition());
    onScroll();
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  }, []);

  return scroll;
}

export function useScrollPast(target: RefObject<HTMLElement>): boolean {
  const scroll = useScrollValue();
  const [isBelow, setIsBelow] = useState(false);

  useEffect(() => {
    if (target.current == null) return;
    setIsBelow(scroll > target.current.offsetTop - window.innerHeight);
  }, [scroll]);

  return isBelow;
}
