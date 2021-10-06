import { Content, ContentGenre, ContentHead } from ".";

export type GenreType = "talks";
export const genre: ContentGenre & GenreType = "talks";
export type GenreStrict = { genre: GenreType };
export type Params = {
  index: number;
  thumbnailPath: StaticImageData;
};

export type TalkContentHead = ContentHead & GenreStrict & Params;
export type TalkContent = Content & GenreStrict & Params;
