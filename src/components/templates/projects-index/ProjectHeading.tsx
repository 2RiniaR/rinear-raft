import dayjs from "dayjs";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./ProjectHeading.module.scss";
import { ProjectContentHead } from "src/lib/contents";
import FixedImage from "src/components/functions/FixedImage";
import { formatDisplayDate, formatExceededTime } from "src/lib/helper";

type Props = {
  head: ProjectContentHead;
};

const ProjectHeading = ({ head }: Props): JSX.Element => {
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
      <div className={styles.mainThumbnail}>
        <FixedImage src={head.thumbnailsPath[0]} alt={head.title} />
      </div>
      <div className={styles.subThumbnailsContainer}>
        {head.thumbnailsPath.slice(1).map((thumbnailPath) => (
          <div className={styles.subThumbnail} key={thumbnailPath}>
            <FixedImage src={thumbnailPath} alt={head.title} lock={"height"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectHeading;
