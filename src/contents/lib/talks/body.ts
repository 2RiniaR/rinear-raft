import dayjs from "dayjs";
import { getPageFromString } from "../page";
import { Content, ContentEncoded, ContentParams } from "../body";
import { ContentGenre } from "../genre";
import { TalkContentHead } from "./head";
import { TalkParams, genre } from ".";

export type TalkContentParams = ContentParams & TalkParams;

export class TalkContent extends Content {
  genre: ContentGenre = genre;

  public constructor(params: TalkContentParams) {
    super(params);
  }

  public getThumbnailPath(): string {
    return `/contents/${this.genre}/${this.name}.jpg`;
  }

  getHead(): TalkContentHead {
    return new TalkContentHead(this);
  }

  public encode(): TalkContentEncoded {
    return new TalkContentEncoded(this);
  }

  static async getFromName(name: string): Promise<TalkContent> {
    const content = await Content.getFromName(genre, name);
    if (!(content instanceof TalkContent)) throw new Error("Invalid type content.");
    return content as TalkContent;
  }
}

export class TalkContentEncoded extends ContentEncoded {
  genre: ContentGenre = genre;

  public constructor(original: TalkContent) {
    super(original);
  }

  public decode(): TalkContent {
    return new TalkContent({
      ...this,
      updatedAt: dayjs(this.updatedAt).toDate(),
      page: getPageFromString(this.page)
    });
  }
}
