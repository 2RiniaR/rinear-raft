import dayjs from "dayjs";
import { ContentGenre } from "../genre";
import { ContentHead, ContentHeadEncoded, ContentHeadParams } from "../head";
import { TalkParams, genre } from ".";
import { Content } from "src/contents/lib/body";

export type TalkContentHeadParams = ContentHeadParams & TalkParams;

export class TalkContentHead extends ContentHead {
  genre: ContentGenre = genre;

  public constructor(params: TalkContentHeadParams) {
    super(params);
  }

  public encode(): TalkContentHeadEncoded {
    return new TalkContentHeadEncoded(this);
  }

  static async getAll(): Promise<TalkContentHead[]> {
    const heads = await ContentHead.getAll(genre);
    if (!heads.every((head) => head instanceof TalkContentHead)) throw new Error("Invalid type content.");
    return heads as TalkContentHead[];
  }
}

export class TalkContentHeadEncoded extends ContentHeadEncoded {
  genre: ContentGenre = genre;

  public constructor(original: TalkContentHead) {
    super(original);
  }

  public decode(): TalkContentHead {
    return new TalkContentHead({
      ...this,
      updatedAt: dayjs(this.updatedAt).toDate()
    });
  }
}
