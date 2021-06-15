import { TagType } from "./tags";
import Fallback from "./fallback";
import { ContentGenre } from "./genre";
import { Content } from "./body";

export type ContentFormParams = {
  title: string;
  updatedAt: Date;
  tags: TagType[];
  page: JSX.Element;
};

export abstract class ContentForm {
  abstract genre: ContentGenre;
  title = "";
  updatedAt = new Date();
  tags: TagType[] = [];
  page: JSX.Element = Fallback();

  protected constructor(params: ContentFormParams) {
    Object.assign(this, params);
  }

  abstract getContent(name: string): Content;
}
