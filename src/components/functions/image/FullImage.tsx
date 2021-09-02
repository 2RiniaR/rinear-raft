import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "layout" | "objectFit">;

const FullImage = ({ className, ...props }: Props): JSX.Element => (
  <div className={className}>
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Image layout="fill" objectFit="contain" {...props} />
    </div>
  </div>
);

export default FullImage;
