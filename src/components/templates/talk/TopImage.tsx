import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./TopImage.module.scss";
import { getScrollPosition } from "src/lib/helper";

const TopImage = (): JSX.Element => {
  const [top, setTop] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(1);

  const updatePosition = (): void => {
    const scroll = getScrollPosition();
    setTop(-scroll / 2);
    setOpacity(1 - scroll / 300);
  };

  const onScroll = (): void => {
    updatePosition();
  };

  useEffect(() => {
    updatePosition();
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  });

  return (
    <div className={styles.image} style={{ top: top, opacity: opacity }}>
      <Image src="/test2.jpg" layout="fill" objectFit="cover" priority={true} />
    </div>
  );
};

export default TopImage;
