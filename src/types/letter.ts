import { Content, ContentGenre, ContentHead } from "./content";

export type GenreType = "letter";
export const genre: ContentGenre & GenreType = "letter";
export type GenreStrict = { genre: GenreType };
export type Params = {
  index: number;
};

export type LetterContentHead = ContentHead & GenreStrict & Params;
export type LetterContent = Content & GenreStrict & Params;
