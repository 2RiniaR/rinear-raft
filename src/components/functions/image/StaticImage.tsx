import Image, { ImageProps } from "next/image";

type Props = ImageProps;

const StaticImage = ({ className, ...props }: Props): JSX.Element => (
  <div className={className}>
    <Image {...props} />
  </div>
);

export default StaticImage;
