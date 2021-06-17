import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./TopImage.module.scss";
import { getScrollPosition } from "src/lib/helper";

const TopImage = (): JSX.Element => {
  const [top, setTop] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(1);

  const onScroll = (): void => {
    const scroll = getScrollPosition();
    setTop(-scroll / 2);
    setOpacity(1 - scroll / 300);
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  });

  return (
    <div className={styles.imageContainer} style={{ top: top, opacity: opacity }}>
      <Image src="/test.png" layout="fill" />
    </div>
  );
};

export default TopImage;
