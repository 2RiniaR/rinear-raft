import React, { ReactNode, useCallback, useRef } from "react";
import styles from "./ResponsiveBackgroundImage.module.scss";
import useElementSize from "lib/fooks/element-size";
import StaticImage from "components/functions/image/StaticImage";

type Props = {
  children?: ReactNode;
  src: StaticImageData;
  alt: string;
};

/*
背景画像よりも、コンテンツの方が横長の場合
  - 背景画像がアスペクト比を保った状態で、コンテナの幅に拡大される
  - コンテンツが背景の中心に配置される

背景画像よりも、コンテンツの方が縦長の場合
  - 背景画像がアスペクト比を保った状態で、コンテンツの高さに拡大される
  - コンテンツが背景の中心に配置される
 */
const ResponsiveBackgroundImage = ({ children, src, alt }: Props): JSX.Element => {
  const containerRef = useRef(null);
  const [containerWidth, containerHeight] = useElementSize(containerRef);
  const imageAspectRatio = src.width / src.height;

  const getContainerStyle = useCallback(() => {
    if (containerHeight == 0 || containerHeight >= containerWidth / imageAspectRatio) return {} as React.CSSProperties;
    return {
      height: containerWidth / imageAspectRatio
    } as React.CSSProperties;
  }, [containerWidth, containerHeight]);

  const getBackgroundWidth = useCallback(() => {
    const containerAspectRatio = containerWidth / containerHeight;
    return containerAspectRatio >= imageAspectRatio ? containerWidth : containerHeight * imageAspectRatio;
  }, [containerWidth, containerHeight]);

  return (
    <div className={styles.container} ref={containerRef} style={getContainerStyle()}>
      <StaticImage className={styles.background} style={{ width: getBackgroundWidth() }} src={src} alt={alt} />
      <div className={styles.front}>{children}</div>
    </div>
  );
};

export default ResponsiveBackgroundImage;
