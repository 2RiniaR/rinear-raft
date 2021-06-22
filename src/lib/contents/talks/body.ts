import { Content, ContentEncoded, ContentParams } from "..";
import { EncodedParams, genre, GenreStrict, Params } from ".";

export type TalkContentParams = ContentParams & GenreStrict & Params;
export type TalkContentEncoded = ContentEncoded & GenreStrict & EncodedParams;

export function isTalk(arg: ContentEncoded): arg is TalkContentEncoded {
  return arg.genre === genre;
}

export class TalkContent extends Content {
  public readonly genre = genre;

  public constructor(init: TalkContentParams);
  public constructor(init: TalkContentEncoded);
  public constructor(init: TalkContentParams | TalkContentEncoded);
  public constructor(init: TalkContentParams | TalkContentEncoded) {
    super(init);
  }

  public encode(): TalkContentEncoded {
    return {
      ...super.encode(),
      genre: this.genre
    };
  }
}
