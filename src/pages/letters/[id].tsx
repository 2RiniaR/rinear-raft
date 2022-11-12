import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { letters } from "letters";
import { getMarkdownSource } from "server/markdown-static";
import { MarkdownContent } from "functions";
import { LetterTemplate } from "templates";

const Page = ({ source, id }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <LetterTemplate id={id} content={letters[id]}>
    <MarkdownContent source={source} />
  </LetterTemplate>
);

export async function getStaticProps(context: GetStaticPropsContext) {
  if (typeof context.params?.id !== "string") throw Error();
  const markdownSource = await getMarkdownSource(`public/contents/letters/${context.params.id}/index.md`);
  return {
    props: {
      source: markdownSource,
      id: context.params.id
    }
  };
}

export function getStaticPaths() {
  return {
    paths: Object.keys(letters).map((id) => ({ params: { id } })),
    fallback: false
  };
}

export default Page;
