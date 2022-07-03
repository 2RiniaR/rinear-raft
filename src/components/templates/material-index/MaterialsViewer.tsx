/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import Link from "next/link";
import styles from "./MaterialsViewer.module.scss";
import { MaterialHeading } from "./Heading";
import { getContentPath, MaterialContentHead } from "lib/contents";

type Props = {
  heads: MaterialContentHead[];
};

const MaterialsViewer = ({ heads }: Props): JSX.Element => (
  <main className={styles.container}>
    {heads.map((head) => (
      <Link href={getContentPath(head)} key={head.id}>
        <a className={styles.element}>
          <MaterialHeading head={head} />
        </a>
      </Link>
    ))}
  </main>
);

export default MaterialsViewer;
