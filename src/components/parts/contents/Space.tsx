/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";

type Props = {
  size: number;
};

const Space = ({ size }: Props): JSX.Element => <hr style={{ height: `${size}em`, borderTop: "none" }} />;

export default Space;
