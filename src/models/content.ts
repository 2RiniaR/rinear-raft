import { RefObject } from "react";
import { StaticImageData } from "next/image";

export type Chapter = {
  name: string;
  ref: RefObject<HTMLElement>;
};

export type ContentPage = (props: { setChapters: (chapters: Chapter[]) => void }) => JSX.Element;

export type Content = {
  genre: "letter" | "material";
  id: string;
  title: string;
  updatedAt: Date;
  description: string;
  thumbnail: StaticImageData;
  private?: boolean;
  Page: ContentPage;
};

export type Letter = Content & {
  genre: "letter";
  index: number;
};

export type Material = Content & {
  genre: "material";
  thumbnails: StaticImageData[];
  releasedAt: Date | undefined;
};

export type WithoutPage<T extends Content> = Omit<T, "Page">;
