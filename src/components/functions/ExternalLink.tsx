/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";

type Props = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const ExternalLink = ({ children, ...props }: Props): JSX.Element => (
  <a {...props} rel="noreferrer noopener" target="_blank">
    {children}
  </a>
);

export default ExternalLink;
