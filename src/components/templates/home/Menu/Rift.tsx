import React, { useRef, useState } from "react";
import Link from "next/link";
import useElementSize from "../../../fooks/element-size";
import styles from "./Rift.module.scss";
import { assignClasses } from "lib/helper";
import { PreloadStaticImage } from "components/functions/loading";
import back from "public/home/rift.webp";
import useContentSwitch from "components/fooks/content-switch";
import { Pickup } from "lib/contents/pickup";

type Props = {
  active: boolean;
  pickups: Pickup[];
};

const Rift = ({ active, pickups }: Props): JSX.Element => {
  const [hover, setHover] = useState(false);
  const [content, contentIndex, switching] = useContentSwitch(pickups, hover, {
    switchingDuration: 500,
    displayDuration: 5000
  });
  const containerRef = useRef(null);
  const [containerWidth] = useElementSize(containerRef);
  const labelDisplayWidth = 600;

  return (
    <div
      className={assignClasses(styles.container, !active ? styles.hidden : styles.shown, hover ? styles.hover : "")}
      ref={containerRef}
    >
      <div className={styles.back}>
        <PreloadStaticImage className={styles.image} src={back} alt="" layout="responsive" />
      </div>
      <div className={styles.mask}>
        <PreloadStaticImage
          className={assignClasses(styles.masked, switching ? styles.switching : "")}
          src={content.thumbnail}
          layout="responsive"
          alt={content.title}
        />
      </div>
      <div className={styles.leftSide} style={{ display: containerWidth > labelDisplayWidth ? "block" : "none" }}>
        <div className={styles.indexIndicator}>
          {pickups.map((pickup, index) => (
            <div
              className={assignClasses(styles.element, contentIndex == index ? styles.current : "")}
              key={pickup.title}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.rightSide} style={{ display: containerWidth > labelDisplayWidth ? "block" : "none" }}>
        <h1 className={assignClasses(styles.title, switching ? styles.switching : "")}>{content.title}</h1>
      </div>
      <Link href={content.href}>
        <a
          className={styles.link}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onFocus={() => setHover(true)}
          onBlur={() => setHover(false)}
        >
          {content.title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1624"
            height="838"
            viewBox="0 0 1624 838"
            className={styles.shape}
          >
            <title>{content.title}</title>
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
