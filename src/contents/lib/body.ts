import fs from "fs";
import { renderToString } from "react-dom/server";
import { ContentBase, ContentBaseEncoded, decodeContentBase, encodeContentBase } from "./base";
import { ContentGenre } from "./genre";
import { ContentForm } from "./form";
import { Tags } from "src/contents/lib/tags";
import { getPageFromString } from "src/contents/lib/page";

export type Content = ContentBase & { page: JSX.Element };
export type ContentEncoded = ContentBaseEncoded & { page: string };

export function getContentSourcePath(
  genre: ContentGenre,
  name?: string,
  refType: "absolute" | "relative" = "absolute"
): string {
  const genrePath = refType === "absolute" ? `src/contents/pages/${genre}` : `../pages/${genre}`;
  const namePath = !name ? "" : `/${name}`;
  return genrePath + namePath;
}

export async function getContentFromName(genre: ContentGenre, name: string): Promise<Content> {
  const form: ContentForm = (await import(`src/contents/pages/${genre}/${name}`)).default;
  return {
    ...form,
    name,
    tags: form.tags.map((t) => ({ ...Tags[t], id: t }))
  };
}

export async function getAllContentsName(genre: ContentGenre): Promise<string[]> {
  const dirPath = getContentSourcePath(genre, undefined, "absolute");
  const files = await fs.promises.readdir(dirPath);
  return files
    .filter((file) => {
      const isFile = fs.statSync(dirPath + "/" + file).isFile();
      const isTsx = /.*\.tsx$/.test(file);
      return isFile && isTsx;
    })
    .map((file) => file.slice(0, -".tsx".length));
}

export function encodeContent(original: Content): ContentEncoded {
  return {
    ...encodeContentBase(original),
    page: renderToString(original.page)
  };
}

export function decodeContent(encoded: ContentEncoded): Content {
  return {
    ...decodeContentBase(encoded),
    page: getPageFromString(encoded.page)
  };
}
