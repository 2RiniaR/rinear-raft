import { default as NextImage, ImageProps, StaticImageData } from "next/image";
import articleStyle from "styles/article.module.scss";

type Props = ImageProps & {
  width?: number;
  src: StaticImageData;
};

export const Image = ({ className, width, src, ...props }: Props) => (
  <div className={(className ? `${className} ` : "") + articleStyle.image}>
    <NextImage {...props} width={width} src={src} height={width ? (width * src.height) / src.width : undefined} />
  </div>
);

function keepAspect(src: StaticImageData, width: number): Pick<ImageProps, "src" | "width" | "height"> {
  return {
    src,
    width,
    height: (width * src.height) / src.width
  };
}
