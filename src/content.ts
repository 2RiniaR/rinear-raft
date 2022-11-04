import { StaticImageData } from "next/image";

export type Letter = {
  id: string;
  image?: StaticImageData;
  title: string;
  description: string;
  updatedAt: Date;
  releasedAt: Date;
};

export type Material = {
  id: string;
  image?: StaticImageData;
  title: string;
  description: string;
  updatedAt: Date;
  releasedAt: Date;
};
