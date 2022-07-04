import fs from "fs";
import { MaterialContent } from "lib/contents";

const materialPath = "data/contents/materials";

export async function getMaterialsId(): Promise<string[]> {
  const modulesId: string[] = [];
  const items = await fs.promises.readdir(materialPath, { withFileTypes: true });
  for (const item of items) {
    const modulePath = materialPath + "/" + item.name + "/index.tsx";
    const isDirectory = item.isDirectory();
    const isModule = fs.existsSync(modulePath);
    if (isDirectory && isModule) {
      const module: MaterialContent = (await import(`data/contents/materials/${item.name}`)).default;
      if (module.private === true) continue;
      modulesId.push(module.id);
    }
  }
  return modulesId;
}
