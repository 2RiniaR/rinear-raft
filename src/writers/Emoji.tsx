import React from "react";

type Props = {
  label: string;
  characters: string;
};

export const Emoji = ({ characters, label }: Props): JSX.Element => (
  <span role="img" aria-label={label}>
    {characters}
  </span>
);
