import { TagType } from "./tags";
import { ContentGenre } from "src/lib/contents";

export type ContentForm = {
  genre: ContentGenre;
  title: string;
  updatedAt: Date;
  tags: TagType[];
  page: JSX.Element;
};
