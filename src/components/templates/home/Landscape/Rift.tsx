/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { useContext, useState } from "react";
import Link from "next/link";
import { PickupsContext } from "../HomePage";
import styles from "./Rift.module.scss";
import useInterval from "lib/fooks/interval";
import { assignClasses } from "lib/helper";
import LazyStaticImage from "components/functions/lazy/LazyStaticImage";
import back from "public/img/LogoBack.webp";
import sample from "public/contents/scenarios/popcorn-chef/game1.webp";

type Props = {
  active: boolean;
};

const Rift = ({ active }: Props): JSX.Element => {
  const [contentIndex, setContentIndex] = useState(0);

  const pickups = useContext(PickupsContext);
  useInterval(() => setContentIndex((current) => (current + 1) % pickups.length), 5000);

  return (
    <div className={assignClasses(styles.container, !active ? styles.hidden : "")}>
      <div className={styles.back}>
        <LazyStaticImage className={styles.image} src={back} alt="" layout="responsive" />
      </div>
      <Link href={pickups[contentIndex].href}>
        <a className={styles.link}>
          <LazyStaticImage className={styles.masked} src={sample} />
        </a>
      </Link>
      <div className={styles.rightSide}>
        <h1 className={styles.title}>{pickups[contentIndex].title}</h1>
      </div>
    </div>
  );
};

export default Rift;
