import { ContentHead, ContentHeadEncoded } from "src/contents/lib/head";
import { Content, ContentEncoded } from "src/contents/lib/body";
import {
  decodeTalkContentHead,
  encodeTalkContentHead,
  isTalkContentHead,
  isTalkContentHeadEncoded
} from "src/contents/lib/talks/head";
import {
  decodeProjectContentHead,
  encodeProjectContentHead,
  isProjectContentHead,
  isProjectContentHeadEncoded
} from "src/contents/lib/projects/head";
import { decodeTalkContent, encodeTalkContent, isTalkContent, isTalkContentEncoded } from "src/contents/lib/talks/body";
import {
  decodeProjectContent,
  encodeProjectContent,
  isProjectContent,
  isProjectContentEncoded
} from "src/contents/lib/projects/body";

export function encodeContentHead(original: ContentHead): ContentHeadEncoded {
  if (isTalkContentHead(original)) {
    return encodeTalkContentHead(original);
  } else if (isProjectContentHead(original)) {
    return encodeProjectContentHead(original);
  }
  throw new Error();
}

export function decodeContentHead(encoded: ContentHeadEncoded): ContentHead {
  if (isTalkContentHeadEncoded(encoded)) {
    return decodeTalkContentHead(encoded);
  } else if (isProjectContentHeadEncoded(encoded)) {
    return decodeProjectContentHead(encoded);
  }
  throw new Error();
}

export function encodeContent(original: Content): ContentEncoded {
  if (isTalkContent(original)) {
    return encodeTalkContent(original);
  } else if (isProjectContent(original)) {
    return encodeProjectContent(original);
  }
  throw new Error();
}

export function decodeContent(encoded: ContentEncoded): Content {
  if (isTalkContentEncoded(encoded)) {
    return decodeTalkContent(encoded);
  } else if (isProjectContentEncoded(encoded)) {
    return decodeProjectContent(encoded);
  }
  throw new Error();
}
