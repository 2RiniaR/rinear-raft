import React from "react";

type Props = {
  size: number;
};

export const Space = ({ size }: Props): JSX.Element => <hr style={{ height: `${size}em`, borderTop: "none" }} />;
