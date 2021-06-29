import dayjs from "dayjs";
import { ContentHead, ContentHeadEncoded, ContentHeadParams } from "..";
import { EncodedParams, genre, GenreStrict, Params } from ".";

export type ProjectContentHeadParams = ContentHeadParams & GenreStrict & Params;
export type ProjectContentHeadEncoded = ContentHeadEncoded & GenreStrict & EncodedParams;

export function isProjectHead(arg: ContentHeadEncoded): arg is ProjectContentHeadEncoded {
  return arg.genre === genre;
}

export class ProjectContentHead extends ContentHead {
  public readonly genre = genre;
  public readonly description: string;
  public readonly releasedAt: dayjs.Dayjs;

  public constructor(init: ProjectContentHeadParams);
  public constructor(init: ProjectContentHeadEncoded);
  public constructor(init: ProjectContentHeadParams | ProjectContentHeadEncoded);
  public constructor(init: ProjectContentHeadParams | ProjectContentHeadEncoded) {
    super(init);
    this.description = init.description;
    this.releasedAt = dayjs(init.releasedAt);
  }

  public encode(): ProjectContentHeadEncoded {
    return {
      ...super.encode(),
      description: this.description,
      releasedAt: this.releasedAt.toString(),
      genre: this.genre
    };
  }
}
