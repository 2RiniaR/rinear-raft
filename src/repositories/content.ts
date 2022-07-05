import { LetterRepository } from "./letter";
import { MaterialRepository } from "./material";
import { ContentHead } from "types/content";

export function getRoute(content: ContentHead): string {
  return `/${content.genre}/${content.id}`;
}

export async function getAllContents() {
  const lettersId = await LetterRepository.fetchContentsId();
  const letters = new LetterRepository(lettersId).getAllContents();

  const materialsId = await MaterialRepository.fetchContentsId();
  const materials = new MaterialRepository(materialsId).getAllContents();

  return [...letters, ...materials];
}
