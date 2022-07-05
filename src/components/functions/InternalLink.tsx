import React from "react";
import Link from "next/link";

type Props = Parameters<typeof Link>[0];

export const InternalLink = ({ children, ...props }: Props): JSX.Element => (
  <Link {...props}>
    <a>{children}</a>
  </Link>
);
