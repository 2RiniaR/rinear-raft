import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import TalkPageTemplate from "src/components/templates/talk";
import { TalkContent, TalkContentEncoded } from "src/contents/lib/talks/body";
import { ContentHeadEncoded } from "src/contents/lib/head";
import { ContentGenre } from "src/contents/lib/genre";
import { Content } from "src/contents/lib/body";

type TalkPageParams = {
  content: TalkContentEncoded;
  suggestions: ContentHeadEncoded[];
};

const TalkPage = (params: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element =>
  TalkPageTemplate({
    content: params.content.decode(),
    suggestions: params.suggestions.map((head) => head.decode())
  });

export default TalkPage;
const genre: ContentGenre = "talks";

export const getStaticProps: GetStaticProps<TalkPageParams> = async ({ params }) => {
  if (!params || typeof params.name !== "string") throw new Error("params is invalid type.");
  const content = await TalkContent.getFromName(params.name);
  // 一時的
  const suggestions = [
    (await Content.getFromName("talks", "history")).getHead().encode(),
    (await Content.getFromName("projects", "marvelous")).getHead().encode(),
    (await Content.getFromName("projects", "mage-simulator")).getHead().encode()
  ];
  return { props: { content: content.encode(), suggestions } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const names: string[] = await Content.getAllNames(genre);
  const paths = names.map((name) => ({
    params: { name }
  }));

  return {
    paths,
    fallback: false
  };
};
