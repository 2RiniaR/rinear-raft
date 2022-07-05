import React, { useState } from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./Phantom.module.scss";
import { useInterval } from "fooks/interval";
import { PreloadStaticImage } from "components/functions/loading";
import backgroundPic from "public/home/phantom.webp";

type Props = {
  title: string;
  subtitle: string;
  icon: StaticImageData;
  href: string;
};

type Position = {
  x: number;
  y: number;
};

export const Phantom = ({ title, subtitle, icon, href }: Props): JSX.Element => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useInterval(() => {
    setPosition({ x: Math.random() * 20, y: Math.random() * 20 });
  }, 2000);

  return (
    <Link href={href}>
      <a className={styles.container}>
        <div className={styles.sizeFilter}>
          <div className={styles.positionFilter} style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
            <PreloadStaticImage className={styles.back} src={backgroundPic} alt="" layout="responsive" />
            <div className={styles.content}>
              <PreloadStaticImage className={styles.icon} src={icon} alt="" layout="responsive" />
              <h1 className={styles.title}>{title}</h1>
              <h2 className={styles.subtitle}>{subtitle}</h2>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
