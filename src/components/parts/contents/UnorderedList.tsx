/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { ReactNode } from "react";
import styles from "./UnorderedList.module.scss";

type Props = {
  children?: ReactNode;
};

const UnorderedList = ({ children }: Props): JSX.Element => <ul className={styles.list}>{children}</ul>;

export default UnorderedList;
