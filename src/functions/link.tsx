import React from "react";

type ExternalLinkProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const ExternalLink = ({ children, ...props }: ExternalLinkProps): JSX.Element => (
  <a {...props} rel="noreferrer noopener" target="_blank">
    {children}
  </a>
);
