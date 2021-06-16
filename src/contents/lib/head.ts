import { ContentBase, ContentBaseEncoded, decodeContentBase, encodeContentBase } from "./base";
import { ContentGenre } from "src/contents/lib/genre";
import { Content, getAllContentsName, getContentFromName } from "src/contents/lib/body";

export type ContentHead = ContentBase;
export type ContentHeadEncoded = ContentBaseEncoded;

export function getHead(content: Content): ContentHead {
  const head: ContentHead & { page?: JSX.Element } = { ...content };
  delete head.page;
  return head;
}

export async function getAllContentHeads(genre: ContentGenre): Promise<ContentHead[]> {
  const names = await getAllContentsName(genre);
  return await Promise.all(
    names.map(async (name) => {
      const content = await getContentFromName(genre, name);
      return getHead(content);
    })
  );
}

export function encodeContentHead(original: ContentHead): ContentHeadEncoded {
  return encodeContentBase(original);
}

export function decodeContentHead(encoded: ContentHeadEncoded): ContentHead {
  return decodeContentBase(encoded);
}
