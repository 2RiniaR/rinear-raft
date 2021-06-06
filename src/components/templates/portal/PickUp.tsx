import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./PickUp.module.scss";
import Title from "src/components/parts/portal/Title";

export type PickUpParams = {
  left: PickUpContent;
  right: PickUpContent;
};

export type PickUpContent = {
  imagePath: string;
  description: string;
  href: string;
};

const ContentDisplay = ({ imagePath, description, href }: PickUpContent): JSX.Element => (
  <div className={styles.item}>
    <Link href={href}>
      <a>
        <Image src={imagePath} layout="intrinsic" width="800" height="600" alt={description} />
      </a>
    </Link>
  </div>
);

const PickUp = ({ left, right }: PickUpParams): JSX.Element => (
  <div className={styles.pickup}>
    <div className={styles.title}>
      <Title text="Pick up" />
    </div>
    <div className={styles.content}>
      <ContentDisplay description={left.description} imagePath={left.imagePath} href={left.href} />
      <ContentDisplay description={right.description} imagePath={right.imagePath} href={right.href} />
    </div>
  </div>
);

export default PickUp;
