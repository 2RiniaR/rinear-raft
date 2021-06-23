import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import TalkPageTemplate from "src/components/templates/talk";
import {
  ContentHeadEncoded,
  decodeContent,
  decodeContentHead,
  ProjectContentHead,
  TalkContent,
  TalkContentEncoded,
  TalkContentHead
} from "src/lib/contents";
import { getAllContentsName, getContent, getContentHead } from "src/data/contents";

type TalkPageParams = {
  content: TalkContentEncoded;
  suggestions: ContentHeadEncoded[];
};

const TalkPage = (params: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element =>
  TalkPageTemplate({
    content: decodeContent<TalkContent>(params.content),
    suggestions: params.suggestions.map(decodeContentHead)
  });

export default TalkPage;

export const getStaticProps: GetStaticProps<TalkPageParams> = async ({ params }) => {
  if (!params || typeof params.name !== "string") throw new Error("params is invalid type.");
  const content = (await getContent(TalkContent, params.name)).encode();

  // 一時的
  const suggestions = [
    (await getContentHead(TalkContentHead, "history")).encode(),
    (await getContentHead(ProjectContentHead, "marvelous")).encode(),
    (await getContentHead(ProjectContentHead, "mage-simulator")).encode()
  ];

  return { props: { content, suggestions } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const names: string[] = await getAllContentsName("talks");
  const paths = names.map((name) => ({ params: { name } }));
  return { paths, fallback: false };
};
