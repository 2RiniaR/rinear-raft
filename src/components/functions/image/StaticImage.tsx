import Image, { ImageProps } from "next/image";
import { CSSProperties } from "react";

export type StaticImageProps = {
  src: StaticImageData;
  style?: CSSProperties;
} & Omit<ImageProps, "src" & "width" & "height">;

const StaticImage = ({ src, className, style, ...props }: StaticImageProps): JSX.Element => (
  <div className={className} style={style}>
    <Image src={src} width={src.width} height={src.height} {...props} />
  </div>
);

export default StaticImage;
