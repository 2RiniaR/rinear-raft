import dayjs from "dayjs";
import { Content, ContentGenre, ContentHead } from ".";

export type GenreType = "projects";
export const genre: ContentGenre & GenreType = "projects";
export type GenreStrict = { genre: GenreType };
export type Params = {
  thumbnailsPath: string[];
  releasedAt: dayjs.Dayjs | undefined;
};

export type ProjectContentHead = ContentHead & GenreStrict & Params;
export type ProjectContent = Content & GenreStrict & Params;
