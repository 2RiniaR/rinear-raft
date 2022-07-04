import { StaticImage, StaticImageProps } from "../StaticImage";
import { useLoading } from ".";

export const PreloadStaticImage = ({ ...props }: StaticImageProps): JSX.Element => {
  const setCompleteLoading = useLoading();
  return <StaticImage {...props} onLoadingComplete={setCompleteLoading} loading={"eager"} />;
};
