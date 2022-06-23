/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import Image, { ImageProps, StaticImageData } from "next/image";
import { CSSProperties, useMemo, useRef } from "react";
import useElementSize from "lib/fooks/element-size";

export type StaticImageProps = {
  src: StaticImageData;
  style?: CSSProperties;
} & Omit<ImageProps, "src" & "width" & "height">;

const StaticImage = ({ src, className, style, ...props }: StaticImageProps): JSX.Element => {
  const containerRef = useRef(null);
  const [width] = useElementSize(containerRef);
  const height = useMemo(() => {
    const originalAspectRatio = src.width / src.height;
    return width / originalAspectRatio;
  }, [width, src]);

  return (
    <div className={className} style={style} ref={containerRef}>
      <Image src={src} width={width} height={height} {...props} />
    </div>
  );
};

export default StaticImage;
