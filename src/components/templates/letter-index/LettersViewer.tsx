/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import Link from "next/link";
import styles from "./LettersViewer.module.scss";
import LetterHeading from "./LetterHeading";
import { getContentPath, LetterContentHead } from "lib/contents";

type Props = {
  heads: LetterContentHead[];
};

const LettersViewer = ({ heads }: Props): JSX.Element => (
  <main className={styles.container}>
    {heads.map((head) => (
      <Link href={getContentPath(head)} key={head.id}>
        <a className={styles.element}>
          <LetterHeading head={head} />
        </a>
      </Link>
    ))}
  </main>
);

export default LettersViewer;
