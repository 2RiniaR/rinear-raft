import dayjs from "dayjs";
import { ContentGenre } from "../genre";
import { ContentHead, ContentHeadEncoded, ContentHeadParams } from "../head";
import { ProjectParams, genre } from ".";

export type ProjectContentHeadParams = ContentHeadParams & ProjectParams;

export class ProjectContentHead extends ContentHead {
  genre: ContentGenre = genre;
  description = "";

  public constructor(params: ProjectContentHeadParams) {
    super(params);
  }

  public encode(): ProjectContentHeadEncoded {
    return new ProjectContentHeadEncoded(this);
  }

  static async getAll(): Promise<ProjectContentHead[]> {
    const heads = await ContentHead.getAll(genre);
    if (!heads.every((head) => head instanceof ProjectContentHead)) throw new Error("Invalid type content.");
    return heads as ProjectContentHead[];
  }
}

export class ProjectContentHeadEncoded extends ContentHeadEncoded {
  genre: ContentGenre = genre;
  description = "";

  public constructor(original: ProjectContentHead) {
    super(original);
    this.description = original.description;
  }

  public decode(): ProjectContentHead {
    return new ProjectContentHead({
      ...this,
      updatedAt: dayjs(this.updatedAt).toDate()
    });
  }
}
