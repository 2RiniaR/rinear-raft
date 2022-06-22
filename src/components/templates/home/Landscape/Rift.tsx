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

type Props = {
  active: boolean;
};

const Rift = ({ active }: Props): JSX.Element => {
  const [contentIndex, setContentIndex] = useState(0);
  const [switching, setSwitching] = useState(false);
  const [hover, setHover] = useState(false);
  const switchingDuration = 500; // [ms]

  const pickups = useContext(PickupsContext);
  useInterval(async () => {
    if (hover) return;
    setSwitching(true);
    await new Promise((resolve) => setTimeout(resolve, switchingDuration));
    setContentIndex((current) => (current + 1) % pickups.length);
    await new Promise((resolve) => setTimeout(resolve, switchingDuration));
    setSwitching(false);
  }, 5000);

  return (
    <div className={assignClasses(styles.container, !active ? styles.hidden : styles.shown, hover ? styles.hover : "")}>
      <div className={styles.back}>
        <LazyStaticImage className={styles.image} src={back} alt="" layout="responsive" />
      </div>
      <div className={styles.mask}>
        <LazyStaticImage
          className={assignClasses(styles.masked, switching ? styles.switching : "")}
          src={pickups[contentIndex].thumbnail}
          layout="responsive"
        />
      </div>
      <div className={styles.leftSide}>
        <div className={styles.indexIndicator}>
          <h1 className={styles.news}>- NEWS -</h1>
          {pickups.map((pickup, index) => (
            <div
              className={assignClasses(styles.element, contentIndex == index ? styles.current : "")}
              key={pickup.title}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.rightSide}>
        <h1 className={assignClasses(styles.title, switching ? styles.switching : "")}>
          {pickups[contentIndex].title}
        </h1>
      </div>
      <Link href={pickups[contentIndex].href}>
        <a
          className={styles.link}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onFocus={() => setHover(true)}
          onBlur={() => setHover(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1624"
            height="838"
            viewBox="0 0 1624 838"
            className={styles.shape}
          >
            <path
              d="M812,0l812,838H0Z"
              transform="translate(1624 838) rotate(180)"
              fill="#ffffff"
              className={styles.fill}
            />
          </svg>
        </a>
      </Link>
    </div>
  );
};

export default Rift;
