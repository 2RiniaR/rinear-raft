import fs from "fs";
import { Content, ContentForm, ContentHead, ContentType, dirPaths } from "src/contents/index";
import { Tags } from "src/contents/tags";

export async function getContent(type: ContentType, id: string): Promise<Content> {
  const dirPaths: { [type in ContentType]: string } = {
    post: "./posts",
    work: "./works"
  };
  const form: ContentForm = (await import(dirPaths[type] + "/" + id + ".tsx")).default;
  return {
    id,
    title: form.title,
    createdAt: form.createdAt,
    updatedAt: form.createdAt,
    tags: form.tags.map((t) => ({ ...Tags[t], id: t })),
    page: form.page
  };
}

export async function getContentsID(type: ContentType): Promise<string[]> {
  const dirPath = dirPaths[type];
  const files = await fs.promises.readdir(dirPath);
  return files
    .filter((file) => {
      const isFile = fs.statSync(dirPath + "/" + file).isFile();
      const isTsx = /.*\.tsx$/.test(file);
      return isFile && isTsx;
    })
    .map((file) => file.slice(0, -".tsx".length));
}

export async function getContentsHead(type: ContentType): Promise<ContentHead[]> {
  const contentsID = await getContentsID(type);
  return await Promise.all(
    contentsID.map(async (id) => {
      const content = await getContent(type, id);
      return {
        id: content.id,
        title: content.title,
        createdAt: content.createdAt,
        updatedAt: content.updatedAt,
        tags: content.tags
      };
    })
  );
}
