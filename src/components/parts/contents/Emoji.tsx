/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";

type Props = {
  label: string;
  characters: string;
};

const Emoji = ({ characters, label }: Props): JSX.Element => (
  <span role="img" aria-label={label}>
    {characters}
  </span>
);

export default Emoji;
