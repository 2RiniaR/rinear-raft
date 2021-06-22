import { ContentGenre } from "..";

export type GenreType = "projects";
export const genre: ContentGenre & GenreType = "projects";
export type GenreStrict = { genre: GenreType };
export type Params = { description: string; releasedAt: Date };
export type EncodedParams = { description: string; releasedAt: string };

export { ProjectContentHead, isProjectHead } from "./head";
export type { ProjectContentHeadEncoded } from "./head";
export { ProjectContent, isProject } from "./body";
export type { ProjectContentEncoded } from "./body";
