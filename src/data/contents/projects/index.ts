import { ContentForm } from "..";
import { genre, GenreStrict, Params } from "src/lib/contents/projects";

export type ProjectContentForm = ContentForm & GenreStrict & Params;
export function isProjectForm(arg: ContentForm): arg is ProjectContentForm {
  return arg.genre === genre;
}
