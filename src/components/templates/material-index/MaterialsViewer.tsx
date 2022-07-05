import React from "react";
import Link from "next/link";
import styles from "./MaterialsViewer.module.scss";
import { MaterialHeading } from "./Heading";
import { MaterialContentHead } from "types/content";
import { getRoute } from "repositories/content";

type Props = {
  heads: MaterialContentHead[];
};

export const MaterialsViewer = ({ heads }: Props): JSX.Element => (
  <main className={styles.container}>
    {heads.map((head) => (
      <Link href={getRoute(head)} key={head.id}>
        <a className={styles.element}>
          <MaterialHeading head={head} />
        </a>
      </Link>
    ))}
  </main>
);
