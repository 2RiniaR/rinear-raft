import { Content, WithoutPage } from "models/content";

export function pathOf(content: WithoutPage<Content>): string {
  if (content.genre === "letter") {
    return `/letters/${content.id}`;
  }
  return `/materials/${content.id}`;
}
