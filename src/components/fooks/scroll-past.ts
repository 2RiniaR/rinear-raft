import { RefObject, useEffect, useState } from "react";
import useScrollValue from "./scroll-value";

export default function useScrollPast(target: RefObject<HTMLElement>): boolean {
  const scroll = useScrollValue();
  const [isBelow, setIsBelow] = useState(false);

  useEffect(() => {
    if (target.current == null) return;
    setIsBelow(scroll > target.current.offsetTop - window.innerHeight);
  }, [scroll]);

  return isBelow;
}
