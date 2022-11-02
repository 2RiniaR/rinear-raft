import React from "react";
import Link from "next/link";

type ExternalLinkProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const ExternalLink = ({ children, ...props }: ExternalLinkProps): JSX.Element => (
  <a {...props} rel="noreferrer noopener" target="_blank">
    {children}
  </a>
);

type InternalLinkProps = Parameters<typeof Link>[0];

export const InternalLink = ({ children, ...props }: InternalLinkProps): JSX.Element => (
  <Link {...props}>
    <a>{children}</a>
  </Link>
);
