/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { ReactNode, useEffect, useState } from "react";
import { LoadingContext } from ".";

type Props = {
  children?: ReactNode;
  onCompleted: () => void;
  onProgressUpdated?: (percent: number) => void;
};

const LoadingWaiter = ({
  children,
  onCompleted,
  onProgressUpdated = () => {
    /* do nothing */
  }
}: Props): JSX.Element => {
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

export default LoadingWaiter;
