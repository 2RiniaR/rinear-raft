import { isTalk, isTalkHead, TalkContent, TalkContentHead } from "./talks";
import { isProject, isProjectHead, ProjectContent, ProjectContentHead } from "./projects";
import { ContentHead, ContentHeadEncoded, Content, ContentEncoded } from ".";

export function decodeContentHead(encoded: ContentHeadEncoded): ContentHead {
  if (isTalkHead(encoded)) return new TalkContentHead(encoded);
  if (isProjectHead(encoded)) return new ProjectContentHead(encoded);
  throw new Error();
}

export function decodeContent(encoded: ContentEncoded): Content {
  if (isTalk(encoded)) return new TalkContent(encoded);
  if (isProject(encoded)) return new ProjectContent(encoded);
  throw new Error();
}
