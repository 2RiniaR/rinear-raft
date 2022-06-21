/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import Link from "next/link";
import styles from "./ScenariosViewer.module.scss";
import { ScenarioHeading } from "./Heading";
import { getContentPath, ScenarioContentHead } from "lib/contents";

type Props = {
  heads: ScenarioContentHead[];
};

const ScenariosViewer = ({ heads }: Props): JSX.Element => (
  <main className={styles.container}>
    {heads.map((head) => (
      <Link href={getContentPath(head)} key={head.id}>
        <a className={styles.element}>
          <ScenarioHeading head={head} />
        </a>
      </Link>
    ))}
  </main>
);

export default ScenariosViewer;
