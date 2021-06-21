import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Background.module.scss";
import { getScrollPosition } from "src/lib/helper";

const Background = (): JSX.Element => {
  const [imageScroll, setImageScroll] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  const updatePosition = (): void => {
    if (!imageRef.current) return;
    const viewHeight = document.documentElement.clientHeight;
    const imageHeight = imageRef.current.offsetHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const scrollTop = getScrollPosition();
    const imageTop = -(scrollTop / (pageHeight - viewHeight)) * (imageHeight - viewHeight);
    setImageScroll(imageTop);
  };

  const onScroll = () => {
    updatePosition();
  };

  useEffect(() => {
    updatePosition();
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  });

  return (
    <div className={styles.view}>
      <div className={styles.image} ref={imageRef} style={{ top: imageScroll }}>
        <Image src="/test2.jpg" layout="fill" objectFit="cover" priority={true} />
      </div>
      <div className={styles.mask} />
      <div className={styles.fade} />
    </div>
  );
};

export default Background;
