import { RefObject, useEffect, useState } from "react";

export default function useElementPosition(
  element: RefObject<HTMLElement>,
  initialX = 0,
  initialY = 0
): [number, number] {
  const [x, setX] = useState(initialX);
  const [y, setY] = useState(initialY);

  useEffect(() => {
    if (!element?.current) return;
    setX(element.current.scrollLeft);
    setY(element.current.scrollTop);
  }, [element]);

  return [x, y];
}
