import { ContentGenre } from "./genre";
import { Tag } from "./tags";

export type ContentBaseParams = {
  name: string;
  title: string;
  updatedAt: Date;
  tags: Tag[];
};

export abstract class ContentBase {
  abstract genre: ContentGenre;
  name = "";
  title = "";
  updatedAt = new Date();
  tags: Tag[] = [];

  protected constructor(params: ContentBaseParams) {
    Object.assign(this, params);
  }

  public getRoute(): string {
    return `/${this.genre}/${this.name}`;
  }

  abstract encode(): ContentBaseEncoded;
}

export abstract class ContentBaseEncoded {
  abstract genre: ContentGenre;
  name = "";
  title = "";
  updatedAt = "";
  tags: Tag[] = [];

  protected constructor(original: ContentBase) {
    this.name = original.name;
    this.title = original.title;
    this.updatedAt = original.updatedAt.toString();
    this.tags = original.tags;
  }

  abstract decode(): ContentBase;
}
