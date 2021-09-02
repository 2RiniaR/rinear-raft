import { useCallback, useRef } from "react";
import styles from "./FixedImage.module.scss";
import useElementSize from "lib/fooks/element-size";

type Props = {
  src: string;
  alt: string;
  widthRate?: number;
  heightRate?: number;
  lock?: "width" | "height";
};

const FixedImage = ({ src, alt, widthRate = 16, heightRate = 9, lock = "width" }: Props): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, containerHeight] = useElementSize(containerRef);

  const getWidth = useCallback(() => {
    if (lock === "width") return containerWidth;
    return (containerHeight * widthRate) / heightRate;
  }, [lock, containerWidth, containerHeight, widthRate, heightRate]);

  const getHeight = useCallback(() => {
    if (lock === "height") return containerHeight;
    return (containerWidth * heightRate) / widthRate;
  }, [lock, containerWidth, containerHeight, widthRate, heightRate]);

  return (
    <div className={styles.container} ref={containerRef}>
      <img style={{ width: getWidth(), height: getHeight() }} className={styles.image} src={src} alt={alt} />
    </div>
  );
};

export default FixedImage;
