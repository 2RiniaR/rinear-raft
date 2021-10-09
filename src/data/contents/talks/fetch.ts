import fs from "fs";
import { dirPath } from ".";
import { TalkContent } from "lib/contents";

export async function getContentsId(): Promise<string[]> {
  const modulesId: string[] = [];
  const items = await fs.promises.readdir(dirPath, { withFileTypes: true });
  for (const item of items) {
    const modulePath = dirPath + "/" + item.name + "/index.tsx";
    const isDirectory = item.isDirectory();
    const isModule = fs.existsSync(modulePath);
    if (isDirectory && isModule) {
      const module: TalkContent = (await import(`src/data/contents/talks/${item.name}`)).default;
      modulesId.push(module.id);
    }
  }
  return modulesId;
}
