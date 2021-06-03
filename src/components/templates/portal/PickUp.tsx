import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./PickUp.module.scss";

const pickUp: JSX.Element = (
  <div className={styles.pickup}>
    <h2 className={styles.title}>- Pick up -</h2>
    <div className={`${styles.item} ${styles.item1}`}>
      <Link href="/posts/history">
        <a>
          <Image src="/gray.jpg" alt="Pick up 1" width={300} height={225} />
        </a>
      </Link>
    </div>
    <div className={`${styles.item} ${styles.item2}`}>
      <Link href="/posts/history">
        <a>
          <Image src="/gray.jpg" alt="Pick up 1" width={300} height={225} />
        </a>
      </Link>
    </div>
  </div>
);

export default pickUp;
