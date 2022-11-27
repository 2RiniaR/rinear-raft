import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { materials } from "materials";
import { getMarkdownSource } from "server/markdown-static";
import { MarkdownContent } from "functions";
import { MaterialTemplate } from "templates";

const Page = ({ source, id }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <MaterialTemplate id={id} content={materials[id]}>
    <MarkdownContent source={source} />
  </MaterialTemplate>
);

export async function getStaticProps(context: GetStaticPropsContext) {
  if (typeof context.params?.id !== "string") throw Error();
  const dirname = materials[context.params.id].dirname ?? context.params.id;
  const markdownSource = await getMarkdownSource(`public/contents/materials/${dirname}/index.md`);
  return {
    props: {
      source: markdownSource,
      id: context.params.id
    }
  };
}

export function getStaticPaths() {
  return {
    paths: Object.keys(materials).map((id) => ({ params: { id } })),
    fallback: false
  };
}

export default Page;
