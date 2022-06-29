/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import fs from "fs";
import { dirPath } from ".";
import { LetterContent } from "lib/contents";

export async function getLettersId(): Promise<string[]> {
  const modulesId: string[] = [];
  const items = await fs.promises.readdir(dirPath, { withFileTypes: true });
  for (const item of items) {
    const modulePath = dirPath + "/" + item.name + "/index.tsx";
    const isDirectory = item.isDirectory();
    const isModule = fs.existsSync(modulePath);
    if (isDirectory && isModule) {
      const module: LetterContent = (await import(`src/data/contents/letters/${item.name}`)).default;
      if (module.private === true) continue;
      modulesId.push(module.id);
    }
  }
  return modulesId;
}
