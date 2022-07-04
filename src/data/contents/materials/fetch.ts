import fs from "fs";
import { dirPath } from ".";
import { MaterialContent } from "lib/contents";

export async function getMaterialsId(): Promise<string[]> {
  const modulesId: string[] = [];
  const items = await fs.promises.readdir(dirPath, { withFileTypes: true });
  for (const item of items) {
    const modulePath = dirPath + "/" + item.name + "/index.tsx";
    const isDirectory = item.isDirectory();
    const isModule = fs.existsSync(modulePath);
    if (isDirectory && isModule) {
      const module: MaterialContent = (await import(`src/data/contents/materials/${item.name}`)).default;
      if (module.private === true) continue;
      modulesId.push(module.id);
    }
  }
  return modulesId;
}
