import { Content, ContentEncoded, decodeContent, encodeContent, getAllContentsName, getContentFromName } from "../body";
import { ContentGenre } from "../genre";
import { GenreStrict, Params, EncodedParams, genre } from ".";

export type TalkContent = Content & GenreStrict & Params;
export type TalkContentEncoded = ContentEncoded & GenreStrict & EncodedParams;

export function isTalkContent(arg: Content): arg is TalkContent {
  return arg.genre === genre;
}

export function isTalkContentEncoded(arg: ContentEncoded): arg is TalkContentEncoded {
  return arg.genre === genre;
}

export function getThumbnailPath({ genre, name }: { genre: ContentGenre; name: string }): string {
  return `/contents/${genre}/${name}.jpg`;
}

export async function getTalkContentFromName(name: string): Promise<TalkContent> {
  const content = await getContentFromName(genre, name);
  if (!isTalkContent(content)) throw new Error("Invalid type content.");
  return content as TalkContent;
}

export async function getAllTalkContentsName(): Promise<string[]> {
  return getAllContentsName(genre);
}

export function encodeTalkContent(original: TalkContent): TalkContentEncoded {
  return {
    ...encodeContent(original),
    genre: genre
  };
}

export function decodeTalkContent(encoded: TalkContentEncoded): TalkContent {
  return {
    ...decodeContent(encoded),
    genre: genre
  };
}
