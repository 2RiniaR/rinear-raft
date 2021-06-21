import { ContentGenre } from "../genre";

export type GenreType = "projects";
export const genre: ContentGenre & GenreType = "projects";
export type GenreStrict = { genre: GenreType };
export type Params = { description: string; releasedAt: Date };
export type EncodedParams = { description: string; releasedAt: string };
