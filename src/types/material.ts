import dayjs from "dayjs";
import { StaticImageData } from "next/image";
import { Content, ContentGenre, ContentHead } from "./content";

export type GenreType = "material";
export const genre: ContentGenre & GenreType = "material";
export type GenreStrict = { genre: GenreType };
export type Params = {
  thumbnails: StaticImageData[];
  releasedAt: dayjs.Dayjs | undefined;
};

export type MaterialContentHead = ContentHead & GenreStrict & Params;
export type MaterialContent = Content & GenreStrict & Params;
