import { ContentHead, ContentHeadEncoded, ContentHeadParams } from "..";
import { EncodedParams, genre, GenreStrict, Params } from ".";

export type TalkContentHeadParams = ContentHeadParams & GenreStrict & Params;
export type TalkContentHeadEncoded = ContentHeadEncoded & GenreStrict & EncodedParams;

export function isTalkHead(arg: ContentHeadEncoded): arg is TalkContentHeadEncoded {
  return arg.genre === genre;
}

export class TalkContentHead extends ContentHead {
  public readonly genre = genre;

  public constructor(init: TalkContentHeadParams);
  public constructor(init: TalkContentHeadEncoded);
  public constructor(init: TalkContentHeadParams | TalkContentHeadEncoded);
  public constructor(init: TalkContentHeadParams | TalkContentHeadEncoded) {
    super(init);
  }

  public encode(): TalkContentHeadEncoded {
    return {
      ...super.encode(),
      genre: this.genre
    };
  }
}
