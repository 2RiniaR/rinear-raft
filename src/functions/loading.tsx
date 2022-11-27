import { useState } from "react";

export function useLoading(count: number): [() => void, number, boolean] {
  const [loaded, setLoaded] = useState(0);
  return [() => setLoaded((x) => x + 1), loaded / count, loaded >= count];
}
