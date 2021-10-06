import React, { useCallback, useRef } from "react";
import Link from "next/link";
import styles from "./TalksViewer.module.scss";
import TalkHeading from "./TalkHeading";
import { getContentPath, TalkContentHead } from "lib/contents";
import useElementSize from "lib/fooks/element-size";
import useViewSize from "lib/fooks/view-size";
import { getMediaQueryDeviceType } from "lib/layout";

type Props = {
  heads: TalkContentHead[];
};

const TalksViewer = ({ heads }: Props): JSX.Element => {
  const itemMinWidth = 280;
  const [viewWidth] = useViewSize();
  const containerRef = useRef(null);
  const [containerWidth] = useElementSize(containerRef);
  const getItemsPerRow = useCallback(() => {
    if (getMediaQueryDeviceType(viewWidth) == "phone") return 1;
    return Math.max(Math.floor(containerWidth / itemMinWidth), 1);
  }, [containerWidth, itemMinWidth, viewWidth]);
  const getItemWidth = useCallback(() => containerWidth / getItemsPerRow(), [getItemsPerRow(), containerWidth]);

  return (
    <main className={styles.container} ref={containerRef}>
      {heads.map((head) => (
        <Link href={getContentPath(head)} key={head.id}>
          <a className={styles.element} style={{ width: getItemWidth() }}>
            <TalkHeading head={head} />
          </a>
        </Link>
      ))}
    </main>
  );
};

export default TalksViewer;
