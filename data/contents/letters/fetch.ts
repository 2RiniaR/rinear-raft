import fs from "fs";
import { LetterContent } from "lib/contents";

const letterPath = "data/contents/letters";

export async function getLettersId(): Promise<string[]> {
  const modulesId: string[] = [];
  const items = await fs.promises.readdir(letterPath, { withFileTypes: true });
  for (const item of items) {
    const modulePath = letterPath + "/" + item.name + "/index.tsx";
    const isDirectory = item.isDirectory();
    const isModule = fs.existsSync(modulePath);
    if (isDirectory && isModule) {
      const module: LetterContent = (await import(`data/contents/letters/${item.name}`)).default;
      if (module.private === true) continue;
      modulesId.push(module.id);
    }
  }
  return modulesId;
}
