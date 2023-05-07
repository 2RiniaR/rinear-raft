import { MicroCMSImage } from "microcms-js-sdk";
import { StaticImageData } from "next/image";
import { formatDisplayDate, formatExceededTime } from "../../functions";

export function convertToNextImageProps(
  image: MicroCMSImage | undefined,
  width: number,
  defaultImage: StaticImageData
) {
  if (image === undefined || image.width === undefined || image.height === undefined) {
    return {
      src: defaultImage,
      width: width
    };
  }

  return {
    src: image.url,
    width: width,
    height: (width * image.height) / image.width
  };
}

export function formatExceededTimeFromString(from: string | undefined): string {
  if (from === undefined) return "---";
  return formatExceededTime(new Date(), new Date(from));
}

export function formatDisplayDateFromString(from: string | undefined): string {
  return formatDisplayDate(from !== undefined ? new Date(from) : undefined);
}
