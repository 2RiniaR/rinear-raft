import React, { forwardRef } from "react";
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

export const InternalLink = forwardRef<HTMLAnchorElement, InternalLinkProps>(
  ({ children, className, ...props }: InternalLinkProps, ref): JSX.Element => (
    <Link {...props}>
      <a className={className} ref={ref}>
        {children}
      </a>
    </Link>
  )
);
InternalLink.displayName = "InternalLink";
