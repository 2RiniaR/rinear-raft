import { ContentGenre } from "../genre";

export type GenreType = "talks";
export const genre: ContentGenre & GenreType = "talks";
export type GenreStrict = { genre: GenreType };
export type Params = {};
export type EncodedParams = {};
