import { ContentForm } from "..";
import { GenreStrict, Params, genre } from "src/lib/contents/talks";

export type TalkContentForm = ContentForm & GenreStrict & Params;
export function isTalkForm(arg: ContentForm): arg is TalkContentForm {
  return arg.genre === genre;
}
