import fs from "fs";
import { Tags, TagType } from "./tags";
import { isTalkForm } from "./talks";
import { isProjectForm } from "./projects";
import {
  ContentGenre,
  ContentHead,
  Content,
  TalkContent,
  TalkContentHead,
  ProjectContentHead,
  ProjectContent
} from "src/lib/contents";

export type ContentForm = {
  genre: ContentGenre;
  title: string;
  updatedAt: Date;
  tags: TagType[];
  page: JSX.Element;
};

export async function getContentHead(genre: ContentGenre, name: string): Promise<ContentHead> {
  const form: ContentForm = (await import(`src/data/contents/${genre}/${name}`)).default;
  if (genre == "talks" && isTalkForm(form))
    return new TalkContentHead({
      ...form,
      name,
      tags: form.tags.map((t) => ({ ...Tags[t], id: t }))
    });
  if (genre == "projects" && isProjectForm(form))
    return new ProjectContentHead({
      ...form,
      name,
      tags: form.tags.map((t) => ({ ...Tags[t], id: t }))
    });
  throw new Error();
}

export async function getContent(genre: ContentGenre, name: string): Promise<Content> {
  const form: ContentForm = (await import(`src/data/contents/${genre}/${name}`)).default;
  if (genre == "talks" && isTalkForm(form))
    return new TalkContent({
      ...form,
      name,
      tags: form.tags.map((t) => ({ ...Tags[t], id: t }))
    });
  if (genre == "projects" && isProjectForm(form))
    return new ProjectContent({
      ...form,
      name,
      tags: form.tags.map((t) => ({ ...Tags[t], id: t }))
    });
  throw new Error();
}

export async function getAllContentsName(genre: ContentGenre): Promise<string[]> {
  const dirPath = `src/data/contents/${genre}`;
  const files = await fs.promises.readdir(dirPath);
  return files
    .filter((file) => {
      const isFile = fs.statSync(dirPath + "/" + file).isFile();
      const isTsx = /.*\.tsx$/.test(file);
      return isFile && isTsx;
    })
    .map((file) => file.slice(0, -".tsx".length));
}

export async function getAllContentHeads(genre: ContentGenre): Promise<ContentHead[]> {
  const names = await getAllContentsName(genre);
  return await Promise.all(names.map((name) => getContentHead(genre, name)));
}
