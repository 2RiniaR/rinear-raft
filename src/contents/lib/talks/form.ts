import { Tags } from "../tags";
import { ContentGenre } from "../genre";
import { ContentForm, ContentFormParams } from "../form";
import { TalkContent } from "./body";
import { TalkParams, genre } from ".";

export type TalkContentFormParams = ContentFormParams & TalkParams;

export class TalkContentForm extends ContentForm {
  genre: ContentGenre = genre;

  public constructor(params: TalkContentFormParams) {
    super(params);
  }

  getContent(name: string): TalkContent {
    return new TalkContent({
      name,
      ...this,
      tags: this.tags.map((t) => ({ ...Tags[t], id: t }))
    });
  }
}
