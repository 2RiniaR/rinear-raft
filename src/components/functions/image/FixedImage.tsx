import { CSSProperties, useCallback, useRef } from "react";
import Image, { ImageProps } from "next/image";
import styles from "./FixedImage.module.scss";
import useElementSize from "lib/fooks/element-size";

type Props = {
  widthRate?: number;
  heightRate?: number;
  lock?: "width" | "height";
  style?: CSSProperties;
} & Omit<ImageProps, "objectFit">;

const FixedImage = ({
  widthRate = 16,
  heightRate = 9,
  lock = "width",
  className,
  style,
  ...props
}: Props): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, containerHeight] = useElementSize(containerRef);

  const getContainerStyle = useCallback((): CSSProperties => {
    if (lock === "width") return { width: "100%", height: (containerWidth * heightRate) / widthRate };
    else return { width: (containerHeight * widthRate) / heightRate, height: "100%" };
  }, [lock, containerWidth, containerHeight, widthRate, heightRate]);

  return (
    <div className={className} style={style}>
      <div className={styles.container} ref={containerRef} style={getContainerStyle()}>
        <Image layout="fill" {...props} />
      </div>
    </div>
  );
};

export default FixedImage;
