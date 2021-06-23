import { isTalk, isTalkHead, TalkContent, TalkContentHead } from "./talks";
import { isProject, isProjectHead, ProjectContent, ProjectContentHead } from "./projects";
import { ContentHead, ContentHeadEncoded, Content, ContentEncoded } from ".";

export function decodeContentHead<T extends ContentHead>(encoded: ContentHeadEncoded): T {
  if (isTalkHead(encoded)) return new TalkContentHead(encoded) as T;
  if (isProjectHead(encoded)) return new ProjectContentHead(encoded) as unknown as T;
  throw new Error();
}

export function decodeContent<T extends Content>(encoded: ContentEncoded): T {
  if (isTalk(encoded)) return new TalkContent(encoded) as T;
  if (isProject(encoded)) return new ProjectContent(encoded) as unknown as T;
  throw new Error();
}
