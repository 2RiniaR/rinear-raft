import dayjs from "dayjs";
import { Content, ContentEncoded, ContentParams } from "..";
import { EncodedParams, genre, GenreStrict, Params } from ".";

export type ProjectContentParams = ContentParams & GenreStrict & Params;
export type ProjectContentEncoded = ContentEncoded & GenreStrict & EncodedParams;

export function isProject(arg: ContentEncoded): arg is ProjectContentEncoded {
  return arg.genre === genre;
}

export class ProjectContent extends Content {
  public readonly genre = genre;
  public readonly description: string;
  public readonly releasedAt: Date;

  public constructor(init: ProjectContentParams);
  public constructor(init: ProjectContentEncoded);
  public constructor(init: ProjectContentParams | ProjectContentEncoded);
  public constructor(init: ProjectContentParams | ProjectContentEncoded) {
    super(init);
    this.description = init.description;
    this.releasedAt = dayjs(init.releasedAt).toDate();
  }

  public encode(): ProjectContentEncoded {
    return {
      ...super.encode(),
      description: this.description,
      releasedAt: this.releasedAt.toString(),
      genre: this.genre
    };
  }
}
