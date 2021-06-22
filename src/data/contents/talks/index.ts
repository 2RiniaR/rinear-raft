import { ContentForm, getAllContentHeads, getContent } from "..";
import { GenreStrict, Params, genre, TalkContentHead, TalkContent } from "src/lib/contents/talks";

export type TalkContentForm = ContentForm & GenreStrict & Params;
export function isTalkForm(arg: ContentForm): arg is TalkContentForm {
  return arg.genre === genre;
}

export async function getAllTalkContentHeads(): Promise<TalkContentHead[]> {
  const heads = await getAllContentHeads("talks");
  if (!heads.every((head) => head instanceof TalkContentHead)) throw new Error();
  return heads as TalkContentHead[];
}

export async function getTalkContent(name: string): Promise<TalkContent> {
  const content = await getContent("talks", name);
  if (!(content instanceof TalkContent)) throw new Error();
  return content as TalkContent;
}
