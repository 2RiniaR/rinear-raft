import dayjs from "dayjs";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./ProjectHeading.module.scss";
import { getComponentTemplate } from "src/lib/component";
import { ProjectContentHead } from "src/lib/contents";
import FixedImage from "src/components/functions/FixedImage";
import { formatDisplayDate, formatExceededTime } from "src/lib/helper";

export type ProjectHeadingParams = {
  head: ProjectContentHead;
};

const ProjectHeading = getComponentTemplate(({ head }: ProjectHeadingParams) => {
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbnailWidthRate = 0.4;
  const thumbnailBorderWidth = 2;
  const thumbnailAspectRatio = 9 / 16;

  const getContainerHeight = useCallback(() => {
    return (width * thumbnailWidthRate - thumbnailBorderWidth * 2) * thumbnailAspectRatio + thumbnailBorderWidth * 2;
  }, [width]);

  useEffect(() => {
    const onThumbnailResized = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    containerRef.current && onThumbnailResized.observe(containerRef.current);
    return () => onThumbnailResized.disconnect();
  }, []);

  return (
    <div className={styles.container} style={{ height: getContainerHeight() }} ref={containerRef}>
      <h1 className={styles.title}>{head.title}</h1>
      <h5 className={styles.description}>{head.description}</h5>
      <h5 className={styles.updatedAt}>{"最終更新：" + formatExceededTime(dayjs(), head.updatedAt)}</h5>
      <h5 className={styles.releasedAt}>
        <span className={styles.text}>{head.releasedAt ? formatDisplayDate(head.releasedAt) : "---"}</span>
      </h5>
      <FixedImage className={styles.mainThumbnail} src={head.thumbnailsPath[0]} alt={head.title} />
      <div className={styles.subThumbnailsContainer}>
        <FixedImage className={styles.subThumbnail} src={head.thumbnailsPath[1]} alt={head.title} lock={"height"} />
        <FixedImage className={styles.subThumbnail} src={head.thumbnailsPath[2]} alt={head.title} lock={"height"} />
        <FixedImage className={styles.subThumbnail} src={head.thumbnailsPath[3]} alt={head.title} lock={"height"} />
      </div>
    </div>
  );
});

export default ProjectHeading;
