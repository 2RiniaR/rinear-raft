import dayjs from "dayjs";
import React from "react";

export type { ProjectContentHead, ProjectContent } from "./projects";
export type { TalkContentHead, TalkContent } from "./talks";

const ContentGenres = {
  talks: "talks",
  projects: "projects"
} as const;

export type ContentGenre = typeof ContentGenres[keyof typeof ContentGenres];

export type ContentHead = {
  genre: ContentGenre;
  id: string;
  title: string;
  updatedAt: dayjs.Dayjs;
  description: string;
};

export type Content = ContentHead & {
  Page: React.ReactNode;
};
