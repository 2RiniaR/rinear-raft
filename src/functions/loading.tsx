import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";

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

type LoadingWaiterProps = {
  children?: ReactNode;
  onCompleted: () => void;
  onProgressUpdated?: (percent: number) => void;
};

export const LoadingWaiter = ({
  children,
  onCompleted,
  onProgressUpdated = () => {
    /* do nothing */
  }
}: LoadingWaiterProps): JSX.Element => {
  const [registerCount, setRegisterCount] = useState(0);
  const [completeCount, setCompleteCount] = useState(0);
  const [completeCalled, setCompleteCalled] = useState(false);

  function register(): () => void {
    setRegisterCount((c) => c + 1);
    return () => setCompleteCount((c) => c + 1);
  }

  useEffect(() => {
    onProgressUpdated(0);

    return () => {
      setRegisterCount(0);
      setCompleteCount(0);
      setCompleteCalled(false);
    };
  }, []);

  useEffect(() => {
    if (registerCount === 0 || completeCalled) return;
    onProgressUpdated(completeCount / registerCount);
    if (completeCount === registerCount) {
      onCompleted();
      setCompleteCalled(true);
    }
  }, [registerCount, completeCount]);

  return <LoadingContext.Provider value={{ register }}>{children}</LoadingContext.Provider>;
};

export const PreloadImage = ({ ...props }: ImageProps): JSX.Element => {
  const setCompleteLoading = useLoading();
  return <Image {...props} onLoadingComplete={setCompleteLoading} loading="lazy" />;
};
