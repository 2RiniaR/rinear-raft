import { createRef, RefObject, useEffect, useState } from "react";

function getScrollPosition(): number {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
}

export function useCheckpoint<T extends HTMLElement>(): [RefObject<T>, boolean] {
  const ref = createRef<T>();
  const [scroll, setScroll] = useState(0);
  const [hasEntry, setHasEntry] = useState(false);

  useEffect(() => {
    const onScroll = () => setScroll(getScrollPosition());
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!ref.current || hasEntry) return;
    if (scroll > ref.current.offsetTop - window.innerHeight * 0.5) {
      setHasEntry(true);
    }
  }, [scroll]);

  return [ref, hasEntry];
}
