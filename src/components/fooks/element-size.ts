import { RefObject, useEffect, useState } from "react";

export default function useElementSize(
  element: RefObject<HTMLElement>,
  initialWidth = 0,
  initialHeight = 0
): [number, number] {
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);

  useEffect(() => {
    const onContainerResized = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
      setHeight(entries[0].contentRect.height);
    });
    element?.current && onContainerResized.observe(element.current);
    return () => onContainerResized.disconnect();
  }, [element]);

  return [width, height];
}
