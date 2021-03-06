import { createContext, useContext, useEffect, useState } from "react";

export { LoadingWaiter } from "./LoadingWaiter";
export { PreloadStaticImage } from "./PreloadStaticImage";

type SetComplete = () => void;
type LoadingContextProps = {
  register: () => SetComplete;
};

export const LoadingContext = createContext<LoadingContextProps>({
  register: () => () => {
    /* do nothing */
  }
});

export function useLoading(): () => void {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [onCompleted, setOnCompleted] = useState<(() => void) | null>(null);
  const { register } = useContext(LoadingContext);

  useEffect(() => {
    const onCompletedCurrent = register();
    setOnCompleted(() => onCompletedCurrent);
  }, []);

  useEffect(() => {
    if (!loadingComplete || !onCompleted) return;
    onCompleted();
  }, [onCompleted, loadingComplete]);

  return () => setLoadingComplete(true);
}
