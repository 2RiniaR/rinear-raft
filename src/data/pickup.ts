import { Pickup } from "../lib/contents/pickup";
import { LetterRepository } from "./contents/letters";
import { getLettersId } from "./contents/letters/fetch";
import { getScenariosId } from "./contents/scenarios/fetch";
import { ScenarioRepository } from "./contents/scenarios";
import image from "public/img/default-thumbnail.webp";

export async function getLatestContent(count: number): Promise<Pickup[]> {
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
      href: "/",
      thumbnail: image
    });
  }

  return pickups;
}
