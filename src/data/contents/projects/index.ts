import { ContentForm, getAllContentHeads, getContent } from "..";
import { genre, GenreStrict, Params, ProjectContent, ProjectContentHead } from "src/lib/contents/projects";

export type ProjectContentForm = ContentForm & GenreStrict & Params;
export function isProjectForm(arg: ContentForm): arg is ProjectContentForm {
  return arg.genre === genre;
}

export async function getAllProjectContentHeads(): Promise<ProjectContentHead[]> {
  const heads = await getAllContentHeads("projects");
  if (!heads.every((head) => head instanceof ProjectContentHead)) throw new Error();
  return heads as ProjectContentHead[];
}

export async function getProjectContent(name: string): Promise<ProjectContent> {
  const content = await getContent("projects", name);
  if (!(content instanceof ProjectContent)) throw new Error();
  return content as ProjectContent;
}
