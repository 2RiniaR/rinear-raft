import dayjs from "dayjs";
import { useCallback, useRef } from "react";
import styles from "./ProjectHeading.module.scss";
import { ProjectContentHead } from "lib/contents";
import FixedImage from "components/functions/image/FixedImage";
import { formatDisplayDate, formatExceededTime } from "lib/helper";
import useElementSize from "lib/fooks/element-size";

const thumbnailWidthRate = 0.4;
const thumbnailBorderWidth = 2;
const thumbnailAspectRatio = 9 / 16;

type Props = {
  head: ProjectContentHead;
};

const ProjectHeading = ({ head }: Props): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth] = useElementSize(containerRef);

  const getContainerHeight = useCallback(
    () =>
      (containerWidth * thumbnailWidthRate - thumbnailBorderWidth * 2) * thumbnailAspectRatio +
      thumbnailBorderWidth * 2,
    [containerWidth]
  );

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
