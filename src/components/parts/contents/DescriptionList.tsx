/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { ReactNode } from "react";
import styles from "./DescriptionList.module.scss";

type Props = {
  children?: ReactNode;
};

const DescriptionList = ({ children }: Props): JSX.Element => <dl className={styles.list}>{children}</dl>;

export default DescriptionList;
