import dayjs from "dayjs";
import { RefObject, createContext } from "react";

export type { ProjectContentHead, ProjectContent } from "./projects";
export type { TalkContentHead, TalkContent } from "./talks";

const ContentGenres = {
  talks: "talks",
  projects: "projects"
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
  genre: "talks"
});
