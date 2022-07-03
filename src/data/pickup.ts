import { Pickup } from "../lib/contents/pickup";
import { LetterRepository } from "./contents/letters";
import { getLettersId } from "./contents/letters/fetch";
import { getMaterialsId } from "./contents/materials/fetch";
import { MaterialRepository } from "./contents/materials";
import { getRoute } from "./contents";

export async function getPickUps(): Promise<Pickup[]> {
  return getLatestContents(5);
}

async function getLatestContents(count: number): Promise<Pickup[]> {
  const lettersId = await getLettersId();
  const letters = new LetterRepository(lettersId).getAllContents();

  const materialsId = await getMaterialsId();
  const materials = new MaterialRepository(materialsId).getAllContents();

  const contents = [...letters, ...materials];
  contents.sort((a, b) => {
    if (b.updatedAt.isAfter(a.updatedAt)) return 1;
    if (b.updatedAt.isSame(a.updatedAt)) return 0;
    return -1;
  });

  const pickups: Pickup[] = [];
  for (let i = 0; i < Math.min(count, contents.length); i++) {
    const content = contents[i];
    pickups.push({
      title: content.title,
      href: getRoute(content),
      thumbnail: content.thumbnail
    });
  }

  return pickups;
}
