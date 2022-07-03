import { Pickup } from "../lib/contents/pickup";
import { ContentHead } from "../lib/contents";
import { getRoute } from "./contents";
import declaration from "./contents/letters/declaration";
import mazeEscape from "./contents/materials/maze-escape";
import bustersMission from "./contents/materials/busters-mission";

export async function getPickUps(): Promise<Pickup[]> {
  return [declaration, mazeEscape, bustersMission].map((content) => pickupContent(content));
}

function pickupContent(content: ContentHead): Pickup {
  return {
    title: content.title,
    href: getRoute(content),
    thumbnail: content.thumbnail
  };
}

/*
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
    pickups.push(pickupContent(content));
  }

  return pickups;
}
*/
