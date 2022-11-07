import { default as NextImage, ImageProps, StaticImageData } from "next/image";
import articleStyle from "styles/article.module.scss";

type Props = ImageProps & {
  width?: number;
  src: StaticImageData;
};

export const Image = ({ className, width, ...props }: Props) => (
  <div className={(className ? `${className} ` : "") + articleStyle.image}>
    <NextImage
      {...props}
      width={width}
      height={width ? (width * props.src.height) / props.src.width : undefined}
      sizes={width ? `${width}px` : undefined}
    />
  </div>
);
