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
    <div className={styles.container} ref={containerRef}>
      {heads.map((head) => (
        <div className={styles.element} key={head.id} style={{ width: getItemWidth() }}>
          <Link href={getContentPath(head)}>
            <a className={styles.link}>
              <TalkHeading head={head} />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TalksViewer;
