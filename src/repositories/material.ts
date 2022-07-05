import fs from "fs";
import { MaterialContent } from "types/material";

const materialPath = "data/materials";

export class MaterialRepository {
  private readonly contents: { [id: string]: MaterialContent } = {};

  public constructor(indices: string[]) {
    const modules: MaterialContent[] = indices.map(
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      (id): MaterialContent => require(`/data/materials/${id}`).default
    );

    for (const module of modules) {
      this.contents[module.id] = module;
    }
  }

  public static async fetchContentsId(): Promise<string[]> {
    const modulesId: string[] = [];
    const items = await fs.promises.readdir(materialPath, { withFileTypes: true });
    for (const item of items) {
      const modulePath = materialPath + "/" + item.name + "/index.tsx";
      const isDirectory = item.isDirectory();
      const isModule = fs.existsSync(modulePath);
      if (isDirectory && isModule) {
        const module: MaterialContent = (await import(`data/materials/${item.name}`)).default;
        if (module.private === true) continue;
        modulesId.push(module.id);
      }
    }
    return modulesId;
  }

  public getAllContents(sort: "none" | "updatedAt" | "releasedAt" = "none"): MaterialContent[] {
    const contents = Object.values(this.contents);
    if (sort === "updatedAt")
      contents.sort((a, b) => {
        if (b.updatedAt.isAfter(a.updatedAt)) return 1;
        if (b.updatedAt.isSame(a.updatedAt)) return 0;
        return -1;
      });
    else if (sort === "releasedAt")
      contents.sort((a, b) => {
        if (!b.releasedAt || b.releasedAt.isAfter(a.releasedAt)) return 1;
        if (b.releasedAt.isSame(a.releasedAt)) return 0;
        return -1;
      });
    return contents;
  }

  public getContent(id: string): MaterialContent {
    return this.contents[id];
  }
}
