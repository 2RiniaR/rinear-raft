import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./PickUp.module.scss";
import Title from "src/components/templates/portal/Menu/Title";

export type PickUpParams = {
  content: PickUpContent;
};

export type PickUpContent = {
  imagePath: string;
  description: string;
  href: string;
};

const ContentDisplay = ({ imagePath, description, href }: PickUpContent): JSX.Element => (
  <div className={styles.item}>
    <div className={styles.image}>
      <Link href={href}>
        <a>
          <Image src={imagePath} layout="fill" alt={description} />
        </a>
      </Link>
    </div>
  </div>
);

const PickUp = ({ content }: PickUpParams): JSX.Element => (
  <div className={styles.pickup}>
    <div className={styles.title}>
      <Title text="Pick up" />
    </div>
    <div className={styles.content}>
      <ContentDisplay description={content.description} imagePath={content.imagePath} href={content.href} />
    </div>
  </div>
);

export default PickUp;
