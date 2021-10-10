import { ReactNode, useEffect, useState } from "react";
import { LoadingContext } from ".";

type Props = {
  children?: ReactNode;
  onCompleted: () => void;
};

const LoadingWaiter = ({ children, onCompleted }: Props): JSX.Element => {
  const [registerCount, setRegisterCount] = useState(0);
  const [completeCount, setCompleteCount] = useState(0);
  const [completeCalled, setCompleteCalled] = useState(false);

  function register(): () => void {
    setRegisterCount((c) => c + 1);
    return () => setCompleteCount((c) => c + 1);
  }

  useEffect(() => {
    return () => {
      setRegisterCount(0);
      setCompleteCount(0);
      setCompleteCalled(false);
    };
  }, []);

  useEffect(() => {
    console.log(`${completeCount}/${registerCount} completed`);
    if (registerCount > 0 && completeCount === registerCount && !completeCalled) {
      onCompleted();
      setCompleteCalled(true);
      console.log("complete all!");
    }
  }, [registerCount, completeCount]);

  return <LoadingContext.Provider value={{ register }}>{children}</LoadingContext.Provider>;
};

export default LoadingWaiter;
