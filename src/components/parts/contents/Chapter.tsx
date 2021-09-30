import React, { RefObject } from "react";

type Props = {
  title: string;
  jumpRef: RefObject<HTMLElement>;
  children?: React.ReactNode;
};

const Chapter = ({ title, jumpRef, children }: Props): JSX.Element => (
  <section ref={jumpRef}>
    <h1>{title}</h1>
    {children}
  </section>
);

export default Chapter;
