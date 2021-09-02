import { useCallback, useRef } from "react";
import Image, { ImageProps } from "next/image";
import styles from "./FixedImage.module.scss";
import useElementSize from "lib/fooks/element-size";

type Props = {
  widthRate?: number;
  heightRate?: number;
  lock?: "width" | "height";
} & Omit<ImageProps, "objectFit">;

const FixedImage = ({ widthRate = 16, heightRate = 9, lock = "width", ...props }: Props): JSX.Element => {
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
      <Image className={styles.image} width={getWidth()} height={getHeight()} objectFit="contain" {...props} />
    </div>
  );
};

export default FixedImage;
