/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import Link from "next/link";

type Props = Parameters<typeof Link>[0];

const InternalLink = ({ children, ...props }: Props): JSX.Element => (
  <Link {...props}>
    <a>{children}</a>
  </Link>
);

export default InternalLink;
