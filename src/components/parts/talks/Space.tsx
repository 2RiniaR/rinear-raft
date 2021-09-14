import React from "react";

type Props = {
  size: number;
};

const Space = ({ size }: Props): JSX.Element => <div style={{ height: `${size}em` }} />;

export default Space;
