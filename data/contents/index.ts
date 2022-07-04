import { ContentHead } from "lib/contents";

export function getRoute(content: ContentHead): string {
  return `/${content.genre}/${content.id}`;
}

export { LetterRepository } from "./letters/repository";
export { getLettersId } from "./letters/fetch";
export { MaterialRepository } from "./materials/repository";
export { getMaterialsId } from "./materials/fetch";
