import { ContentHead, ContentHeadEncoded, decodeContentHead, encodeContentHead, getAllContentHeads } from "../head";
import { ContentGenre } from "../genre";
import { EncodedParams, genre, GenreStrict, Params } from "./index";

export type TalkContentHead = ContentHead & GenreStrict & Params;
export type TalkContentHeadEncoded = ContentHeadEncoded & GenreStrict & EncodedParams;

export function isTalkContentHead(arg: ContentHead): arg is TalkContentHead {
  return arg.genre === genre;
}

export function isTalkContentHeadEncoded(arg: ContentHeadEncoded): arg is TalkContentHeadEncoded {
  return arg.genre === genre;
}

export async function getAllTalkContentHeads(): Promise<TalkContentHead[]> {
  const heads = await getAllContentHeads(genre);
  if (!heads.every(isTalkContentHead)) throw new Error("Invalid type content.");
  return heads as TalkContentHead[];
}

export function encodeTalkContentHead(original: TalkContentHead): TalkContentHeadEncoded {
  return {
    ...encodeContentHead(original),
    genre: genre
  };
}

export function decodeTalkContentHead(encoded: TalkContentHeadEncoded): TalkContentHead {
  return {
    ...decodeContentHead(encoded),
    genre: genre
  };
}
