import { Pickup } from "../lib/contents/pickup";
import { LetterRepository } from "./contents/letters";
import { getLettersId } from "./contents/letters/fetch";
import { getScenariosId } from "./contents/scenarios/fetch";
import { ScenarioRepository } from "./contents/scenarios";
import { getRoute } from "./contents";

export async function getPickUps(): Promise<Pickup[]> {
  return getLatestContents(5);
}

async function getLatestContents(count: number): Promise<Pickup[]> {
  const lettersId = await getLettersId();
  const letters = new LetterRepository(lettersId).getAllContents();

  const scenariosId = await getScenariosId();
  const scenarios = new ScenarioRepository(scenariosId).getAllContents();

  const contents = [...letters, ...scenarios];
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
