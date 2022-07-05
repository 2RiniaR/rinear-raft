import fs from "fs";
import { LetterContent } from "types/letter";

const letterPath = "data/letters";

export class LetterRepository {
  private readonly contents: { [id: string]: LetterContent } = {};

  public constructor(indices: string[]) {
    const modules: LetterContent[] = indices.map(
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      (id): LetterContent => require(`/data/letters/${id}`).default
    );

    for (const module of modules) {
      this.contents[module.id] = module;
    }
  }

  public static async fetchContentsId(): Promise<string[]> {
    const modulesId: string[] = [];
    const items = await fs.promises.readdir(letterPath, { withFileTypes: true });
    for (const item of items) {
      const modulePath = letterPath + "/" + item.name + "/index.tsx";
      const isDirectory = item.isDirectory();
      const isModule = fs.existsSync(modulePath);
      if (isDirectory && isModule) {
        const module: LetterContent = (await import(`data/letters/${item.name}`)).default;
        if (module.private === true) continue;
        modulesId.push(module.id);
      }
    }
    return modulesId;
  }

  public getAllContents(sort: "none" | "updatedAt" = "none"): LetterContent[] {
    const contents = Object.values(this.contents);
    if (sort === "updatedAt")
      contents.sort((a, b) => {
        if (b.updatedAt.isAfter(a.updatedAt)) return 1;
        if (b.updatedAt.isSame(a.updatedAt)) return 0;
        return -1;
      });
    return contents;
  }

  public getContent(id: string): LetterContent {
    return this.contents[id];
  }
}
