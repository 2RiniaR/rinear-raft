import React from "react";

type RubyProps = {
  writing: string;
  reading: string;
};

export const Ruby = ({ writing, reading }: RubyProps) => (
  <ruby>
    {writing}
    <rp>（</rp>
    <rt>{reading}</rt>
    <rp>）</rp>
  </ruby>
);
