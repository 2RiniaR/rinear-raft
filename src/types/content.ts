import dayjs from "dayjs";
import { RefObject } from "react";
import { StaticImageData } from "next/image";

export type { MaterialContentHead, MaterialContent } from "./material";
export type { LetterContentHead, LetterContent } from "./letter";

export type ContentGenre = "letter" | "material";

export type ChapterPoint = {
  name: string;
  ref: RefObject<HTMLElement>;
};

export type ContentHead = {
  genre: ContentGenre;
  id: string;
  title: string;
  updatedAt: dayjs.Dayjs;
  description: string;
  thumbnail: StaticImageData;
  private?: boolean;
};

export type ContentPageProps = {
  setChapters: (chapters: ChapterPoint[]) => void;
};

export type ContentPage = (props: ContentPageProps) => JSX.Element;

export type Content = ContentHead & {
  Page: ContentPage;
};

export type ContentContextProps = {
  genre: ContentGenre;
};
