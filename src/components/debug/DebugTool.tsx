/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { useEffect } from "react";
import { getScrollPosition } from "lib/helper";

type Props = {
  showScrollValue?: boolean;
};

const DebugTool = ({ showScrollValue }: Props): JSX.Element => {
  useEffect(() => {
    const onScroll = () => console.log(`[Debug] scroll = ${getScrollPosition()}`);
    if (!showScrollValue) return;
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  }, [showScrollValue]);

  return <></>;
};

export default DebugTool;
