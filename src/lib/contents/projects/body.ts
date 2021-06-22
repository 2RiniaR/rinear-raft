import dayjs from "dayjs";
import { Content, ContentEncoded, decodeContent, encodeContent, getAllContentsName, getContentFromName } from "../body";
import { ContentGenre } from "../genre";
import { EncodedParams, genre, GenreStrict, Params } from "./index";

export type ProjectContent = Content & GenreStrict & Params;
export type ProjectContentEncoded = ContentEncoded & GenreStrict & EncodedParams;

export function isProjectContent(arg: Content): arg is ProjectContent {
  return arg.genre === genre;
}

export function isProjectContentEncoded(arg: ContentEncoded): arg is ProjectContentEncoded {
  return arg.genre === genre;
}

export function getThumbnailPath({ genre, name }: { genre: ContentGenre; name: string }): string {
  return `/contents/${genre}/${name}.jpg`;
}

export async function getProjectContentFromName(name: string): Promise<ProjectContent> {
  const content = await getContentFromName(genre, name);
  if (!isProjectContent(content)) throw new Error("Invalid type content.");
  return content as ProjectContent;
}

export async function getAllProjectContentsName(): Promise<string[]> {
  return getAllContentsName(genre);
}

export function encodeProjectContent(original: ProjectContent): ProjectContentEncoded {
  const releasedAt = original.releasedAt.toString();
  return {
    ...original,
    ...encodeContent(original),
    releasedAt,
    genre: genre
  };
}

export function decodeProjectContent(encoded: ProjectContentEncoded): ProjectContent {
  return {
    ...encoded,
    ...decodeContent(encoded),
    genre: genre,
    releasedAt: dayjs(encoded.releasedAt).toDate()
  };
}
