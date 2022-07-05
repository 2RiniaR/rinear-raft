import { useEffect, useState } from "react";

export function useAsyncInitialize<T>(initializer: () => Promise<T>): T | undefined {
  const [item, setItem] = useState<T>();
  const initialize = async () => setItem(await initializer());
  useEffect(() => {
    initialize();
  }, []);
  return item;
}
