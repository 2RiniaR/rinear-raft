/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { useLoading } from "./index";
import StaticImage, { StaticImageProps } from "components/functions/StaticImage";

const PreloadStaticImage = ({ ...props }: StaticImageProps): JSX.Element => {
  const setCompleteLoading = useLoading();
  return <StaticImage {...props} onLoadingComplete={setCompleteLoading} loading={"eager"} />;
};

export default PreloadStaticImage;
