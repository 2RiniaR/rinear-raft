import { useEffect, useState } from "react";

export default function useEaseNumber(init: number): [number, (value: number) => void] {
  const [dest, setDest] = useState(init);
  const [ease, setEase] = useState(init);

  useEffect(() => {
    if (ease === dest) return;
    if (Math.abs(ease - dest) <= 0.01) {
      setEase(dest);
      return;
    }
    setTimeout(() => {
      setEase((ease) => ease + (dest - ease) * 0.75);
    }, 100);
  }, [dest, ease]);

  return [ease, setDest];
}
