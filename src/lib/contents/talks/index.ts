import { ContentGenre } from "..";

export type GenreType = "talks";
export const genre: ContentGenre & GenreType = "talks";
export type GenreStrict = { genre: GenreType };
export type Params = {};
export type EncodedParams = {};

export { TalkContentHead, isTalkHead } from "./head";
export type { TalkContentHeadEncoded } from "./head";
export { TalkContent, isTalk } from "./body";
export type { TalkContentEncoded } from "./body";
