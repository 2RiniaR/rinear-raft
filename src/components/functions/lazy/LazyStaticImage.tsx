import { useLoading } from "./index";
import StaticImage, { StaticImageProps } from "components/functions/image/StaticImage";

const LazyStaticImage = ({ ...props }: StaticImageProps): JSX.Element => {
  const setCompleteLoading = useLoading();
  return <StaticImage {...props} onLoadingComplete={setCompleteLoading} loading={"eager"} />;
};

export default LazyStaticImage;
