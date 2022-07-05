import React from "react";
import styles from "./MaterialTop.module.scss";
import { Title } from "./Title";
import { Abstract } from "./Abstract";
import { Material } from "models/content";

type Props = {
  material: Material;
};

export const MaterialTop = ({ material }: Props): JSX.Element => (
  <div className={styles.layout}>
    <Title material={material} />
    <Abstract material={material} />
  </div>
);
