import { RefObject, useEffect, useState } from "react";

export function useElementPosition(element: RefObject<HTMLElement>, initialX = 0, initialY = 0): [number, number] {
  const [x, setX] = useState(initialX);
  const [y, setY] = useState(initialY);

  useEffect(() => {
    // It's prefer to subscribe an event publishing a position value than reference the value, but I couldn't find how to.
    if (!element?.current) return;
    setX(element.current.scrollLeft);
    setY(element.current.scrollTop);
  }, [element]);

  return [x, y];
}
