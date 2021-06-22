import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import TalkPageTemplate from "src/components/templates/talk";
import {
  ContentHeadEncoded,
  decodeContent,
  decodeContentHead,
  TalkContent,
  TalkContentEncoded
} from "src/lib/contents";
import { getAllContentsName, getContentHead } from "src/data/contents";
import { getTalkContent } from "src/data/contents/talks";

type TalkPageParams = {
  content: TalkContentEncoded;
  suggestions: ContentHeadEncoded[];
};

const TalkPage = (params: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element =>
  TalkPageTemplate({
    content: decodeContent(params.content) as TalkContent,
    suggestions: params.suggestions.map(decodeContentHead)
  });

export default TalkPage;

export const getStaticProps: GetStaticProps<TalkPageParams> = async ({ params }) => {
  if (!params || typeof params.name !== "string") throw new Error("params is invalid type.");
  const content = (await getTalkContent(params.name)).encode();

  // 一時的
  const suggestions = [
    (await getContentHead("talks", "history")).encode(),
    (await getContentHead("projects", "marvelous")).encode(),
    (await getContentHead("projects", "mage-simulator")).encode()
  ];

  return { props: { content, suggestions } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const names: string[] = await getAllContentsName("talks");
  const paths = names.map((name) => ({ params: { name } }));
  return { paths, fallback: false };
};
