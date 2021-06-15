import { ContentBase, ContentBaseEncoded, ContentBaseParams } from "./base";
import { ContentGenre } from "src/contents/lib/genre";
import { Content } from "src/contents/lib/body";

export type ContentHeadParams = ContentBaseParams;

export abstract class ContentHead extends ContentBase {
  protected constructor(params: ContentHeadParams) {
    super(params);
  }

  abstract encode(): ContentHeadEncoded;

  static async getAll(genre: ContentGenre): Promise<ContentHead[]> {
    const names = await Content.getAllNames(genre);
    return await Promise.all(
      names.map(async (name) => {
        const content = await Content.getFromName(genre, name);
        return content.getHead();
      })
    );
  }
}

export abstract class ContentHeadEncoded extends ContentBaseEncoded {
  protected constructor(original: ContentHead) {
    super(original);
  }
}
