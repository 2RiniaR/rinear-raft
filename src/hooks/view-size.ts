import { useEffect, useState } from "react";

export function useViewSize(): [number, number] {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const onWindowResized = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    onWindowResized();
    window.addEventListener("resize", onWindowResized);
    return () => window.removeEventListener("resize", onWindowResized);
  }, []);

  return [width, height];
}
