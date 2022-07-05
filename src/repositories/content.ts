import fs from "fs";
import { Letter, Material } from "models/content";

export type LetterSettings = Letter;
export type MaterialSettings = Material;

async function fetchItemsIdFromDirectory<T extends LetterSettings | MaterialSettings>(
  dirPath: string,
  importer: (dirName: string) => Promise<T>
): Promise<string[]> {
  const modulesId: string[] = [];
  const items = await fs.promises.readdir(dirPath, { withFileTypes: true });
  for (const item of items) {
    const modulePath = dirPath + "/" + item.name + "/index.tsx";
    const isDirectory = item.isDirectory();
    const isModule = fs.existsSync(modulePath);
    if (isDirectory && isModule) {
      const module = await importer(item.name);
      if (module.private === true) continue;
      modulesId.push(module.id);
    }
  }
  return modulesId;
}

export function fetchLetter(id: string): Letter {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require(`data/letters/${id}`).default;
}

export async function fetchAllLettersId(): Promise<string[]> {
  return fetchItemsIdFromDirectory(
    "data/letters",
    async (dirName) => (await import(`data/letters/${dirName}`)).default
  );
}

export function fetchMaterial(id: string): Material {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require(`data/materials/${id}`).default;
}

export async function fetchAllMaterialsId(): Promise<string[]> {
  return fetchItemsIdFromDirectory(
    "data/materials",
    async (dirName) => (await import(`data/materials/${dirName}`)).default
  );
}

export async function fetchAllContents(): Promise<(Letter | Material)[]> {
  return [
    ...(await fetchAllLettersId()).map((id) => fetchLetter(id)),
    ...(await fetchAllMaterialsId()).map((id) => fetchMaterial(id))
  ];
}
