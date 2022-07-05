import React from "react";
import Link from "next/link";
import styles from "./MaterialsViewer.module.scss";
import { MaterialHeading } from "./Heading";
import { Material, WithoutPage } from "models/content";
import { pathOf } from "routes";

type Props = {
  materials: WithoutPage<Material>[];
};

export const MaterialsViewer = ({ materials }: Props): JSX.Element => (
  <main className={styles.container}>
    {materials.map((head) => (
      <Link href={pathOf(head)} key={head.id}>
        <a className={styles.element}>
          <MaterialHeading material={head} />
        </a>
      </Link>
    ))}
  </main>
);
