import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import ProjectPageTemplate from "src/components/templates/project";
import {
  ContentHeadEncoded,
  decodeContent,
  decodeContentHead,
  ProjectContent,
  ProjectContentEncoded
} from "src/lib/contents";
import { getAllContentsName, getContent, getContentHead } from "src/data/contents";

type ProjectPageParams = {
  content: ProjectContentEncoded;
  suggestions: ContentHeadEncoded[];
};

const ProjectPage = (params: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element =>
  ProjectPageTemplate({
    content: decodeContent<ProjectContent>(params.content),
    suggestions: params.suggestions.map(decodeContentHead)
  });

export default ProjectPage;

export const getStaticProps: GetStaticProps<ProjectPageParams> = async ({ params }) => {
  if (!params || typeof params.name !== "string") throw new Error("params is invalid type.");
  const content = (await getContent<ProjectContent>("projects", params.name)).encode();

  // 一時的
  const suggestions = [
    (await getContentHead("talks", "history")).encode(),
    (await getContentHead("projects", "marvelous")).encode(),
    (await getContentHead("projects", "mage-simulator")).encode()
  ];

  return { props: { content, suggestions } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const names: string[] = await getAllContentsName("projects");
  const paths = names.map((name) => ({ params: { name } }));
  return { paths, fallback: false };
};
