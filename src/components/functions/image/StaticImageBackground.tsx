import Image, { ImageProps } from "next/image";
import { CSSProperties } from "react";
import styles from "./StaticImageBackground.module.scss";

export type StaticImageBackgroundProps = {
  src: StaticImageData;
  style?: CSSProperties;
} & Omit<ImageProps, "src" & "width" & "height">;

const StaticImageBackground = ({
  src,
  className,
  style,
  children,
  ...props
}: StaticImageBackgroundProps): JSX.Element => (
  <div className={styles.layout}>
    <Image src={src} {...props} layout="fill" objectFit={"contain"} />
    <div className={styles.inner}>
      <div className={className} style={style}>
        {children}
      </div>
    </div>
  </div>
);

export default StaticImageBackground;
