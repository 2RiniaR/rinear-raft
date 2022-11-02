import { StaticImageData } from "next/image";

export type Letter = {
  id: string;
  index: number;
  image?: StaticImageData;
  title: string;
  description: string;
  updatedAt: Date;
};

export type Material = {
  id: string;
  image1?: StaticImageData;
  image2?: StaticImageData;
  image3?: StaticImageData;
  image4?: StaticImageData;
  title: string;
  description: string;
  updatedAt: Date;
  releasedAt: Date;
};
