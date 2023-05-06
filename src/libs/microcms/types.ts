import { MicroCMSImage } from "microcms-js-sdk";

export type LetterContent = {
  title: string;
  description: string;
  thumbnail?: MicroCMSImage;
  body: string;
};

export type MaterialContent = {
  title: string;
  description: string;
  attributes: ["important"];
  thumbnail?: MicroCMSImage;
  body: string;
  releasedAt?: string;
};
