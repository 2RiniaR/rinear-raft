import { renderToString } from "react-dom/server";
import { ContentBase, ContentBaseEncoded, ContentBaseParams } from "./base";
import { getPageFromString } from "./page";

export type ContentEncoded = ContentBaseEncoded & { page: string };
export type ContentParams = ContentBaseParams & { page: JSX.Element };

export abstract class Content extends ContentBase {
  public readonly page: JSX.Element;

  protected constructor(init: ContentParams);
  protected constructor(init: ContentEncoded);
  protected constructor(init: ContentParams | ContentEncoded);
  protected constructor(init: ContentParams | ContentEncoded) {
    super(init);
    this.page = typeof init.page == "string" ? getPageFromString(init.page) : init.page;
  }

  public encode(): ContentEncoded {
    return {
      ...super.encode(),
      page: renderToString(this.page)
    };
  }
}
