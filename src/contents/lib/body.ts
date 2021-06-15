import fs from "fs";
import { renderToString } from "react-dom/server";
import Fallback from "./fallback";
import { ContentBase, ContentBaseEncoded, ContentBaseParams } from "./base";
import { ContentGenre } from "./genre";
import { ContentHead } from "./head";
import { ContentForm } from "./form";

export type ContentParams = ContentBaseParams & {
  page: JSX.Element;
};

export abstract class Content extends ContentBase {
  abstract genre: ContentGenre;
  page: JSX.Element = Fallback();

  protected constructor(params: ContentParams) {
    super(params);
  }

  abstract getHead(): ContentHead;
  abstract encode(): ContentEncoded;

  static getSourcePath(genre: ContentGenre, name?: string, refType: "absolute" | "relative" = "absolute"): string {
    const genrePath = refType === "absolute" ? `src/contents/pages/${genre}` : `../pages/${genre}`;
    const namePath = !name ? "" : `/${name}`;
    return genrePath + namePath;
  }

  static async getFromName(genre: ContentGenre, name: string): Promise<Content> {
    const sourcePath = Content.getSourcePath(genre, name, "relative");
    // const form: ContentForm = (await import(`${sourcePath}`)).default;
    const form: ContentForm = (await import("../pages/talks/history")).default;
    return form.getContent(name);
  }

  static async getAllNames(genre: ContentGenre): Promise<string[]> {
    const dirPath = Content.getSourcePath(genre, undefined, "absolute");
    const files = await fs.promises.readdir(dirPath);
    return files
      .filter((file) => {
        const isFile = fs.statSync(dirPath + "/" + file).isFile();
        const isTsx = /.*\.tsx$/.test(file);
        return isFile && isTsx;
      })
      .map((file) => file.slice(0, -".tsx".length));
  }
}

export abstract class ContentEncoded extends ContentBaseEncoded {
  page = "";

  protected constructor(original: Content) {
    super(original);
    this.page = renderToString(original.page);
  }
}
