import { Tags } from "../tags";
import { ContentGenre } from "../genre";
import { ContentForm, ContentFormParams } from "../form";
import { ProjectParams, genre } from ".";
import { ProjectContent } from "src/contents/lib/projects/body";

export type ProjectContentFormParams = ContentFormParams & ProjectParams;

export class ProjectContentForm extends ContentForm {
  genre: ContentGenre = genre;
  description = "";

  public constructor(params: ProjectContentFormParams) {
    super(params);
  }

  getContent(name: string): ProjectContent {
    return new ProjectContent({
      name,
      ...this,
      tags: this.tags.map((t) => ({ ...Tags[t], id: t }))
    });
  }
}
