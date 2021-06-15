import dayjs from "dayjs";
import { ContentHead, ContentHeadEncoded, decodeContentHead, encodeContentHead, getAllContentHeads } from "../head";
import { EncodedParams, genre, GenreStrict, Params } from ".";

export type ProjectContentHead = ContentHead & GenreStrict & Params;
export type ProjectContentHeadEncoded = ContentHeadEncoded & GenreStrict & EncodedParams;

export function isProjectContentHead(arg: ContentHead): arg is ProjectContentHead {
  return arg.genre === genre;
}

export function isProjectContentHeadEncoded(arg: ContentHeadEncoded): arg is ProjectContentHeadEncoded {
  return arg.genre === genre;
}

export async function getAllProjectContentHeads(): Promise<ProjectContentHead[]> {
  const heads = await getAllContentHeads(genre);
  if (!heads.every(isProjectContentHead)) throw new Error("Invalid type content.");
  return heads as ProjectContentHead[];
}

export function encodeProjectContentHead(original: ProjectContentHead): ProjectContentHeadEncoded {
  return {
    ...original,
    ...encodeContentHead(original),
    genre: genre,
    releasedAt: original.releasedAt.toString()
  };
}

export function decodeProjectContentHead(encoded: ProjectContentHeadEncoded): ProjectContentHead {
  return {
    ...encoded,
    ...decodeContentHead(encoded),
    genre: genre,
    releasedAt: dayjs(encoded.releasedAt).toDate()
  };
}
