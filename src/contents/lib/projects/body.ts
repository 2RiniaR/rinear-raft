import dayjs from "dayjs";
import { getPageFromString } from "src/contents/lib/page";
import { Content, ContentEncoded, ContentParams } from "src/contents/lib/body";
import { ProjectParams, genre } from "src/contents/lib/projects/index";
import { ContentGenre } from "src/contents/lib/genre";
import { ProjectContentHead } from "src/contents/lib/projects/head";

export type ProjectContentParams = ContentParams & ProjectParams;

export class ProjectContent extends Content {
  genre: ContentGenre = genre;
  description = "";

  public constructor(params: ProjectContentParams) {
    super(params);
  }

  public getThumbnailPath(): string {
    return `/contents/${this.genre}/${this.name}.jpg`;
  }

  getHead(): ProjectContentHead {
    return new ProjectContentHead(this);
  }

  public encode(): ProjectContentEncoded {
    return new ProjectContentEncoded(this);
  }

  static async getFromName(name: string): Promise<ProjectContent> {
    const content = await Content.getFromName(genre, name);
    if (!(content instanceof ProjectContent)) throw new Error("Invalid type content.");
    return content as ProjectContent;
  }
}

export class ProjectContentEncoded extends ContentEncoded {
  genre: ContentGenre = genre;
  description = "";

  public constructor(original: ProjectContent) {
    super(original);
    this.description = original.description;
  }

  public decode(): ProjectContent {
    return new ProjectContent({
      ...this,
      updatedAt: dayjs(this.updatedAt).toDate(),
      page: getPageFromString(this.page)
    });
  }
}
