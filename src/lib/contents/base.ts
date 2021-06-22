import dayjs from "dayjs";
import { ContentGenre } from "./genre";
import { Tag } from "./tags";

export type ContentBase = {
  genre: ContentGenre;
  name: string;
  title: string;
  updatedAt: Date;
  tags: Tag[];
};

export type ContentBaseEncoded = {
  genre: ContentGenre;
  name: string;
  title: string;
  updatedAt: string;
  tags: Tag[];
};

export function getRoute({ genre, name }: { genre: ContentGenre; name: string }): string {
  return `/${genre}/${name}`;
}

export function encodeContentBase(original: ContentBase): ContentBaseEncoded {
  return {
    ...original,
    updatedAt: original.updatedAt.toString()
  };
}

export function decodeContentBase(encoded: ContentBaseEncoded): ContentBase {
  return {
    ...encoded,
    updatedAt: dayjs(encoded.updatedAt).toDate()
  };
}
