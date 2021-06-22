import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import TalkPageTemplate from "src/components/templates/talk";
import {
  decodeTalkContent,
  encodeTalkContent,
  getAllTalkContentsName,
  getTalkContentFromName,
  TalkContentEncoded
} from "src/lib/contents/talks/body";
import { ContentHeadEncoded, getHead } from "src/lib/contents/head";
import { getContentFromName } from "src/lib/contents/body";
import { decodeContentHead, encodeContentHead } from "src/lib/contents/serialize";

type TalkPageParams = {
  content: TalkContentEncoded;
  suggestions: ContentHeadEncoded[];
};

const TalkPage = (params: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element =>
  TalkPageTemplate({
    content: decodeTalkContent(params.content),
    suggestions: params.suggestions.map(decodeContentHead)
  });

export default TalkPage;

export const getStaticProps: GetStaticProps<TalkPageParams> = async ({ params }) => {
  if (!params || typeof params.name !== "string") throw new Error("params is invalid type.");
  const content = encodeTalkContent(await getTalkContentFromName(params.name));

  // 一時的
  const suggestions = [
    encodeContentHead(getHead(await getContentFromName("talks", "history"))),
    encodeContentHead(getHead(await getContentFromName("projects", "marvelous"))),
    encodeContentHead(getHead(await getContentFromName("projects", "mage-simulator"))),
    encodeContentHead(getHead(await getContentFromName("projects", "busters-mission"))),
    encodeContentHead(getHead(await getContentFromName("projects", "popcorn-chef"))),
    encodeContentHead(getHead(await getContentFromName("projects", "maze-escape")))
  ];

  return { props: { content, suggestions } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const names: string[] = await getAllTalkContentsName();
  const paths = names.map((name) => ({
    params: { name }
  }));

  return {
    paths,
    fallback: false
  };
};
