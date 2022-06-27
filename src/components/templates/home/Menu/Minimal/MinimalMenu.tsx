/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { useContext, useState } from "react";
import { PickupsContext } from "../../HomePage";
import useContentSwitch from "lib/fooks/content-switch";

type Props = {
  active: boolean;
};

const MinimalMenu = ({ active }: Props): JSX.Element => {
  const [hover, setHover] = useState(false);
  const pickups = useContext(PickupsContext);
  const [content, contentIndex, switching] = useContentSwitch(pickups, hover, {
    switchingDuration: 500,
    displayDuration: 5000
  });

  return <></>;
};

export default MinimalMenu;
