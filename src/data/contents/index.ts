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
import { Constructor } from "src/lib/helper";

export type ContentForm = {
  genre: ContentGenre;
  title: string;
  updatedAt: Date;
  tags: TagType[];
  page: JSX.Element;
};

function getGenreFromConstructor<T>(ctor: Constructor<T>): ContentGenre {
  const typeToGenre: { [type: string]: ContentGenre } = {
    TalkContentHead: "talks",
    TalkContent: "talks",
    ProjectContentHead: "projects",
    ProjectContent: "projects"
  };
  if (!typeToGenre[ctor.name]) throw new Error();
  return typeToGenre[ctor.name];
}

export async function getContentHead<T extends ContentHead>(ctor: Constructor<T>, name: string): Promise<T> {
  const genre: ContentGenre = getGenreFromConstructor(ctor);
  const form: ContentForm = (await import(`src/data/contents/${genre}/${name}`)).default;
  if (genre == "talks" && isTalkForm(form))
    return new TalkContentHead({
      ...form,
      name,
      tags: form.tags.map((t) => ({ ...Tags[t], id: t }))
    }) as T;
  if (genre == "projects" && isProjectForm(form))
    return new ProjectContentHead({
      ...form,
      name,
      tags: form.tags.map((t) => ({ ...Tags[t], id: t }))
    }) as unknown as T;
  throw new Error();
}

export async function getContent<T extends Content>(ctor: Constructor<T>, name: string): Promise<T> {
  const genre: ContentGenre = getGenreFromConstructor(ctor);
  const form: ContentForm = (await import(`src/data/contents/${genre}/${name}`)).default;
  if (genre == "talks" && isTalkForm(form))
    return new TalkContent({
      ...form,
      name,
      tags: form.tags.map((t) => ({ ...Tags[t], id: t }))
    }) as T;
  if (genre == "projects" && isProjectForm(form))
    return new ProjectContent({
      ...form,
      name,
      tags: form.tags.map((t) => ({ ...Tags[t], id: t }))
    }) as unknown as T;
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

export async function getAllContentHeads<T extends ContentHead>(ctor: Constructor<T>): Promise<T[]> {
  const genre: ContentGenre = getGenreFromConstructor(ctor);
  const names = await getAllContentsName(genre);
  return await Promise.all(names.map((name) => getContentHead<T>(ctor, name)));
}
