/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { ReactNode } from "react";
import styles from "./ListItem.module.scss";

type Props = {
  children?: ReactNode;
};

const ListItem = ({ children }: Props): JSX.Element => <li className={styles.item}>{children}</li>;

export default ListItem;
