import { useEffect, useRef } from "react";

const useInterval = (callback: () => void, delay?: number | null) => {
  const savedCallback = useRef<() => void>(() => {
    /* do nothing */
  });
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [delay]);
};

export default useInterval;
