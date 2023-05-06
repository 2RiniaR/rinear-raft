import { StaticImageData } from "next/image";

export type Material = {
  image?: StaticImageData;
  type?: "important";
  dirname?: string;
  title: string;
  description: string;
  updatedAt: Date;
  releasedAt: Date | undefined;
};
