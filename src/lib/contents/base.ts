import dayjs from "dayjs";
import { ContentGenre } from "./genre";
import { Tag } from "./tags";

export type ContentBaseParams = {
  genre: ContentGenre;
  name: string;
  title: string;
  updatedAt: Date;
  tags: Tag[];
};

export type ContentBaseEncoded = {
  genre: ContentGenre;
  name: string;
  title: string;
  updatedAt: string;
  tags: Tag[];
};

export abstract class ContentBase {
  public abstract readonly genre: ContentGenre;
  public readonly name: string;
  public readonly title: string;
  public readonly updatedAt: Date;
  public readonly tags: Tag[];

  protected constructor(init: ContentBaseParams);
  protected constructor(init: ContentBaseEncoded);
  protected constructor(init: ContentBaseParams | ContentBaseEncoded);
  protected constructor(init: ContentBaseParams | ContentBaseEncoded) {
    this.name = init.name;
    this.title = init.title;
    this.updatedAt = dayjs(init.updatedAt).toDate();
    this.tags = init.tags;
  }

  public getRoute(): string {
    return `/${this.genre}/${this.name}`;
  }

  public encode(): ContentBaseEncoded {
    return {
      ...this,
      updatedAt: this.updatedAt.toString()
    };
  }
}
