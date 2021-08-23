import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

export type NormalizedImageParams = {
  src: string;
  alt: string;
  widthRate?: number;
  heightRate?: number;
  lock?: "width" | "height";
};

const NormalizedImage = getComponentTemplate(
  ({ src, alt, widthRate = 16, heightRate = 9, lock = "width" }: NormalizedImageParams) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const getWidth = useCallback(() => {
      if (lock === "width") return width;
      return (height * widthRate) / heightRate;
    }, [lock, width, height, widthRate, heightRate]);

    const getHeight = useCallback(() => {
      if (lock === "height") return height;
      return (width * heightRate) / widthRate;
    }, [lock, width, height, widthRate, heightRate]);

    useEffect(() => {
      const onContainerResized = new ResizeObserver((entries) => {
        setWidth(entries[0].contentRect.width);
        setHeight(entries[0].contentRect.height);
      });
      containerRef.current && onContainerResized.observe(containerRef.current);
      return () => onContainerResized.disconnect();
    }, []);

    return (
      <div className={styles.container} ref={containerRef}>
        <img style={{ width: getWidth(), height: getHeight() }} className={styles.image} src={src} alt={alt} />
      </div>
    );
  }
);

export default NormalizedImage;
