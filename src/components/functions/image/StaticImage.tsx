import Image, { ImageProps } from "next/image";

type Props = {
  src: StaticImageData;
} & Omit<ImageProps, "src" & "width" & "height">;

const StaticImage = ({ src, ...props }: Props): JSX.Element => (
  <Image src={src} width={src.width} height={src.height} {...props} />
);

export default StaticImage;
