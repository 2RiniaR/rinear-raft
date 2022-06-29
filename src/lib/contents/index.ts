/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { createContext, RefObject } from "react";
import { StaticImageData } from "next/image";

export type { ScenarioContentHead, ScenarioContent } from "./scenario";
export type { LetterContentHead, LetterContent } from "./letters";

const ContentGenres = {
  letters: "letters",
  scenarios: "scenarios"
} as const;

export type ContentGenre = typeof ContentGenres[keyof typeof ContentGenres];

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

export function getContentPath(content: ContentHead): string {
  return `/${content.genre}/${content.id}`;
}

export type ContentContextProps = {
  genre: ContentGenre;
};

export const ContentContext = createContext<ContentContextProps>({
  genre: "letters"
});
