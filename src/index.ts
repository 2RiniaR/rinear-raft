import { StaticImageData } from "next/image";

export type Letter = {
  image?: StaticImageData;
  dirname?: string;
  title: string;
  description: string;
  updatedAt: Date;
  releasedAt: Date | undefined;
};

export type Material = {
  image?: StaticImageData;
  dirname?: string;
  title: string;
  description: string;
  updatedAt: Date;
  releasedAt: Date | undefined;
};
