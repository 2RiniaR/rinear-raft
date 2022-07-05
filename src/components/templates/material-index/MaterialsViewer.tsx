import React from "react";
import Link from "next/link";
import styles from "./MaterialsViewer.module.scss";
import { MaterialHeading } from "./Heading";
import { Material, WithoutPage } from "models/content";
import { pathOf } from "routes";

type Props = {
  heads: WithoutPage<Material>[];
};

export const MaterialsViewer = ({ heads }: Props): JSX.Element => (
  <main className={styles.container}>
    {heads.map((head) => (
      <Link href={pathOf(head)} key={head.id}>
        <a className={styles.element}>
          <MaterialHeading head={head} />
        </a>
      </Link>
    ))}
  </main>
);
