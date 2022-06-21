/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { TransitionEventHandler, useEffect, useState } from "react";
import styles from "./Darkness.module.scss";
import { assignClasses } from "lib/helper";

type Props = {
  enabled: boolean;
};

const Darkness = ({ enabled }: Props): JSX.Element => {
  const [display, setDisplay] = useState(false);

  const onCloseTransitionEnd: TransitionEventHandler<HTMLDivElement> = () => {
    if (enabled) return;
    setDisplay(false);
  };

  useEffect(() => {
    if (!enabled) return;
    setDisplay(true);
  }, [enabled]);

  return (
    <div
      className={assignClasses(styles.container, enabled ? styles.enabled : "")}
      style={{ left: display ? "0" : "-100vw" }}
      onTransitionEnd={onCloseTransitionEnd}
    />
  );
};

export default Darkness;
